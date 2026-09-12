const fetch = require('node-fetch');
const NodeCache = require('node-cache');

// Cache for 30 minutes
const cache = new NodeCache({ stdTTL: 1800, checkperiod: 300 });

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'application/json, text/plain, */*',
  'Accept-Language': 'en-US,en;q=0.9',
  'Content-Type': 'application/json',
};

// ─── EXPERIENCE DETECTION ───────────────────────────────────────
function detectExperience(title) {
  const t = (title || '').toLowerCase();
  
  if (/\b(intern|internship|trainee|co-?op)\b/.test(t)) return 'Intern';
  if (/\b(fresher|entry[\s-]?level|junior|jr\.?|graduate|new grad)\b/.test(t)) return 'Fresher';
  if (/\b(principal|director|vp|vice president|head of|chief|lead|staff engineer)\b/.test(t)) return 'Lead/Staff';
  if (/\b(senior|sr\.?|sr |architect|manager|10\+|8\+)\b/.test(t)) return 'Senior';
  if (/\b(mid[\s-]?level|ii\b|2\b.*engineer|intermediate)\b/.test(t)) return 'Mid-Level';
  
  // Default for engineer titles without level = Mid-Level
  if (/\b(engineer|developer|scientist|analyst|designer)\b/.test(t)) return 'Mid-Level';
  
  return 'All Levels';
}

// ─── WORKDAY FETCHER ────────────────────────────────────────────
// Workday CXS endpoint has a HARD LIMIT of 20 per page.
// Must include appliedFacets and searchText in the body.
async function fetchWorkday(tenant, site, dc) {
  const baseUrl = `https://${tenant}.${dc}.myworkdayjobs.com`;
  const endpoint = `${baseUrl}/wday/cxs/${tenant}/${site}/jobs`;
  
  const headers = {
    ...HEADERS,
    'Accept-Language': 'en-US',
    'Referer': `${baseUrl}/en-US/${site}`,
  };
  
  let allPostings = [];
  let offset = 0;
  let attempt = 0;
  const LIMIT = 20; // Hard max for Workday!
  
  try {
    while (true) {
      // Try primary body format first, fallback to minimal if 422
      let body;
      if (attempt === 0) {
        body = { appliedFacets: {}, limit: LIMIT, offset: offset, searchText: '' };
      } else {
        body = { limit: LIMIT, offset: offset };
      }
      
      const res = await fetch(endpoint, {
        method: 'POST',
        timeout: 15000,
        headers,
        body: JSON.stringify(body)
      });
      
      if (res.status === 422 && attempt === 0) {
        // Try minimal body format
        attempt++;
        continue;
      }
      
      if (!res.ok) {
        if (offset === 0) throw new Error(`Workday returned ${res.status}`);
        break; // If pagination fails, use what we have
      }
      
      const data = await res.json();
      const postings = data.jobPostings || [];
      
      if (postings.length === 0) break;
      
      allPostings.push(...postings);
      offset += LIMIT;
      
      const total = data.total || 0;
      if (offset >= total) break;
      
      // Stop at 200 jobs max per company to avoid excessive calls
      if (allPostings.length >= 200) break;
      
      // Small delay between pages
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  } catch (err) {
    if (allPostings.length === 0) throw err;
    // If we got some pages but later ones failed, use what we have
  }
  
  return parseWorkdayPostings(allPostings, tenant, site, dc);
}

function parseWorkdayPostings(postings, tenant, site, dc) {
  const baseUrl = `https://${tenant}.${dc}.myworkdayjobs.com`;
  
  return postings.map(jp => {
    // Extract location — Workday uses locationsText
    let location = 'See posting';
    if (jp.locationsText) {
      location = jp.locationsText;
    } else if (jp.locations && jp.locations.length > 0) {
      const loc = jp.locations[0];
      if (typeof loc === 'string') {
        location = loc;
      } else if (loc.text) {
        location = loc.text;
      }
    } else if (jp.primaryLocation) {
      location = typeof jp.primaryLocation === 'string' ? jp.primaryLocation : (jp.primaryLocation.text || 'See posting');
    }
    
    // Extract department/category
    let department = '';
    if (jp.subcategory) department = typeof jp.subcategory === 'string' ? jp.subcategory : (jp.subcategory?.text || '');
    else if (jp.category) department = typeof jp.category === 'string' ? jp.category : (jp.category?.text || '');
    else if (jp.jobCategory) department = jp.jobCategory;
    else if (jp.organization) department = typeof jp.organization === 'string' ? jp.organization : (jp.organization?.text || '');
    
    // Build URL
    let url = '';
    if (jp.externalPath) {
      url = `${baseUrl}/en-US/${site}${jp.externalPath}`;
    } else if (jp.path) {
      url = `${baseUrl}/en-US/${site}${jp.path}`;
    }
    
    // Extract job ID from externalPath
    let jobId = '';
    if (jp.externalPath) {
      const match = jp.externalPath.match(/_([A-Z0-9-]+)$/);
      if (match) jobId = match[1];
    }
    
    const title = jp.title || jp.name || '';
    
    return {
      title,
      location,
      department,
      url,
      postedAt: jp.postedOn || jp.posted_on || jp.postedDate || null,
      description: '',
      jobId,
      experience: detectExperience(title)
    };
  }).filter(j => j.title);
}

// ─── SMARTRECRUITERS FETCHER ────────────────────────────────────
async function fetchSmartRecruiters(slug) {
  const url = `https://api.smartrecruiters.com/v1/companies/${slug}/postings`;
  
  const res = await fetch(url, {
    timeout: 15000,
    headers: {
      'User-Agent': HEADERS['User-Agent'],
      'Accept': 'application/json'
    }
  });
  
  if (!res.ok) throw new Error(`SmartRecruiters returned ${res.status}`);
  
  const data = await res.json();
  
  // SmartRecruiters response: { content: [...], totalElements: N }
  let postings = data.content || [];
  
  // Some companies use different field names
  if (postings.length === 0 && data.data) {
    postings = data.data;
  }
  
  return postings.map(job => {
    const title = job.name || job.title || '';
    return {
      title,
      location: job.location ? (job.location.city || job.location.region || job.location.country || 'See posting') : 'See posting',
      department: job.department ? (job.department.label || '') : '',
      url: job.referrerUrl || `https://jobs.smartrecruiters.com/${slug}/${job.id}`,
      postedAt: job.postedOn || job.releasedDate || null,
      description: '',
      jobId: job.id || '',
      experience: detectExperience(title)
    };
  });
}

// ─── GREENHOUSE FETCHER ─────────────────────────────────────────
async function fetchGreenhouse(slug) {
  const url = `https://boards-api.greenhouse.io/v1/boards/${slug}/jobs?content=true`;
  
  const res = await fetch(url, {
    timeout: 10000,
    headers: { 'User-Agent': HEADERS['User-Agent'] }
  });
  
  if (!res.ok) throw new Error(`Greenhouse returned ${res.status}`);
  
  const data = await res.json();
  return (data.jobs || []).map(job => ({
    title: job.title,
    location: job.location?.name || job.location?.value || 'Remote',
    department: job.departments?.[0]?.name || 'General',
    url: job.absolute_url,
    postedAt: job.updated_at || null,
    description: '',
    jobId: job.id?.toString() || ''
  }));
}

// ─── LEVER FETCHER ──────────────────────────────────────────────
async function fetchLever(slug) {
  const url = `https://api.lever.co/v0/postings/${slug}?mode=json`;
  
  const res = await fetch(url, {
    timeout: 10000,
    headers: { 'User-Agent': HEADERS['User-Agent'] }
  });
  
  if (!res.ok) throw new Error(`Lever returned ${res.status}`);
  
  const data = await res.json();
  return data.map(job => ({
    title: job.text,
    location: job.categories?.location || 'Remote',
    department: job.categories?.team || 'General',
    url: job.hostedUrl,
    postedAt: new Date(job.createdAt).toISOString(),
    description: '',
    jobId: job.id || ''
  }));
}

// ─── COMPANY JOB FETCHER ────────────────────────────────────────
async function fetchCompanyJobs(company) {
  const cacheKey = `${company.ats}_${company.slug || company.name}`;
  const cached = cache.get(cacheKey);
  
  if (cached) {
    return cached.map(job => ({
      ...job,
      company: company.name,
      logo: company.logo,
      careerUrl: company.careerUrl,
      focus: company.focus
    }));
  }
  
  try {
    let jobs = [];
    
    switch (company.ats) {
      case 'workday':
        try {
          jobs = await fetchWorkday(company.workdayTenant, company.workdaySite, company.workdayDc);
        } catch (err) {
          // Try alternate datacenter if available
          if (company.workdayAltDc) {
            console.log(`  ↪ Trying alternate DC (${company.workdayAltDc}) for ${company.name}...`);
            jobs = await fetchWorkday(company.workdayTenant, company.workdaySite, company.workdayAltDc);
          } else {
            throw err;
          }
        }
        break;
      case 'smartrecruiters':
        jobs = await fetchSmartRecruiters(company.slug);
        break;
      case 'greenhouse':
        jobs = await fetchGreenhouse(company.slug);
        break;
      case 'lever':
        jobs = await fetchLever(company.slug);
        break;
      case 'direct':
        return [];
      default:
        return [];
    }
    
    jobs = jobs.map(job => ({
      ...job,
      company: company.name,
      logo: company.logo,
      careerUrl: company.careerUrl,
      focus: company.focus
    }));
    
    cache.set(cacheKey, jobs);
    
    if (jobs.length > 0) {
      console.log(`  ✅ ${company.name}: ${jobs.length} jobs fetched`);
    } else {
      console.log(`  ⚠️  ${company.name}: API returned 0 jobs`);
    }
    
    return jobs;
  } catch (error) {
    console.error(`  ❌ ${company.name}: ${error.message}`);
    return [];
  }
}

// ─── FETCH ALL JOBS ─────────────────────────────────────────────
async function fetchAllJobs(companies) {
  const fetchableCompanies = companies.filter(c => c.ats !== 'direct');
  
  console.log(`Fetching from ${fetchableCompanies.length} companies with public APIs...`);
  
  const allJobs = [];
  const batchSize = 3; // Smaller batch to avoid rate limiting
  
  for (let i = 0; i < fetchableCompanies.length; i += batchSize) {
    const batch = fetchableCompanies.slice(i, i + batchSize);
    const results = await Promise.allSettled(
      batch.map(company => fetchCompanyJobs(company))
    );
    
    for (const result of results) {
      if (result.status === 'fulfilled') {
        allJobs.push(...result.value);
      }
    }
    
    // Small delay between batches
    if (i + batchSize < fetchableCompanies.length) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  
  return allJobs;
}

module.exports = {
  fetchCompanyJobs,
  fetchAllJobs,
  fetchWorkday,
  fetchSmartRecruiters
};
