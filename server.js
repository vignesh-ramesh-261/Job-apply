const express = require('express');
const cors = require('cors');
const path = require('path');
const companies = require('./data/companies');
const { fetchCompanyJobs, fetchAllJobs } = require('./lib/jobFetcher');
const { generateDemoJobs } = require('./data/demoData');

const app = express();
const PORT = process.env.PORT || 3000;
const DEMO_MODE = process.env.DEMO_MODE === 'true' || process.env.DEMO_MODE === '1';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ─── CACHED DATA ────────────────────────────────────────────────
let cachedJobs = null;
let lastFetchTime = null;
let isDemoMode = DEMO_MODE;

// ─── API ROUTES ─────────────────────────────────────────────────

app.get('/api/info', (req, res) => {
  res.json({
    mode: isDemoMode ? 'demo' : 'live',
    companies: companies.length,
    apiCompanies: companies.filter(c => c.ats !== 'direct').length,
    lastFetch: lastFetchTime,
    jobCount: cachedJobs ? cachedJobs.length : 0
  });
});

app.get('/api/companies', (req, res) => {
  res.json(companies.map(c => ({
    name: c.name,
    logo: c.logo,
    ats: c.ats,
    careerUrl: c.careerUrl,
    focus: c.focus,
    hasApi: c.ats !== 'direct'
  })));
});

app.get('/api/companies/:name/jobs', async (req, res) => {
  const company = companies.find(c =>
    c.name.toLowerCase() === req.params.name.toLowerCase()
  );

  if (!company) {
    return res.status(404).json({ error: 'Company not found' });
  }

  try {
    if (isDemoMode) {
      if (!cachedJobs) cachedJobs = generateDemoJobs();
      const jobs = cachedJobs.filter(j => j.company.toLowerCase() === company.name.toLowerCase());
      return res.json({ company: company.name, jobs, demo: true });
    }

    const jobs = await fetchCompanyJobs(company);
    res.json({ company: company.name, jobs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/jobs', async (req, res) => {
  try {
    const {
      search = '',
      location = '',
      department = '',
      company = '',
      remote = false
    } = req.query;

    let jobs;

    if (isDemoMode) {
      if (!cachedJobs) {
        console.log('📦 Generating demo job data...');
        cachedJobs = generateDemoJobs();
        lastFetchTime = new Date().toISOString();
        console.log(`✅ Generated ${cachedJobs.length} demo jobs`);
      }
      jobs = [...cachedJobs];
    } else {
      // Check if cache needs refresh
      if (!cachedJobs || (Date.now() - new Date(lastFetchTime).getTime() > 1800000)) {
        console.log('🌐 Fetching jobs from company career sites...');
        
        const apiJobs = await fetchAllJobs(companies);
        
        if (apiJobs.length > 0) {
          console.log(`✅ Fetched ${apiJobs.length} live jobs`);
          cachedJobs = apiJobs;
          lastFetchTime = new Date().toISOString();
          jobs = [...apiJobs];
        } else {
          console.log('⚠️  No live jobs from APIs. Showing career page links + demo data.');
          isDemoMode = true;
          cachedJobs = generateDemoJobs();
          lastFetchTime = new Date().toISOString();
          jobs = [...cachedJobs];
        }
      } else {
        jobs = [...cachedJobs];
      }
    }

    // Apply filters
    if (search) {
      const searchLower = search.toLowerCase();
      jobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchLower) ||
        (job.description && job.description.toLowerCase().includes(searchLower)) ||
        job.company.toLowerCase().includes(searchLower) ||
        job.department.toLowerCase().includes(searchLower) ||
        (job.focus && job.focus.toLowerCase().includes(searchLower))
      );
    }

    if (location) {
      const locationLower = location.toLowerCase();
      jobs = jobs.filter(job =>
        job.location.toLowerCase().includes(locationLower)
      );
    }

    if (department) {
      const deptLower = department.toLowerCase();
      jobs = jobs.filter(job =>
        job.department.toLowerCase().includes(deptLower)
      );
    }

    if (company) {
      const companyLower = company.toLowerCase();
      jobs = jobs.filter(job =>
        job.company.toLowerCase().includes(companyLower)
      );
    }

    if (remote) {
      jobs = jobs.filter(job =>
        job.location.toLowerCase().includes('remote')
      );
    }

    // Sort by date (newest first)
    jobs.sort((a, b) => {
      if (!a.postedAt) return 1;
      if (!b.postedAt) return -1;
      return new Date(b.postedAt) - new Date(a.postedAt);
    });

    res.json({
      count: jobs.length,
      jobs,
      demo: isDemoMode
    });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: error.message });
  }
});

// Force refresh
app.post('/api/refresh', async (req, res) => {
  cachedJobs = null;
  lastFetchTime = null;
  if (!DEMO_MODE) {
    isDemoMode = false;
  }
  res.json({ status: 'ok', message: 'Cache cleared.' });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    mode: isDemoMode ? 'demo' : 'live',
    companies: companies.length,
    cachedJobs: cachedJobs ? cachedJobs.length : 0,
    timestamp: new Date().toISOString()
  });
});

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  const apiCompanies = companies.filter(c => c.ats !== 'direct');
  const directCompanies = companies.filter(c => c.ats === 'direct');
  
  console.log(`\n🚀 JobHunter running on http://0.0.0.0:${PORT}`);
  console.log(`📊 ${companies.length} companies total`);
  console.log(`   🔌 ${apiCompanies.length} with live APIs: ${apiCompanies.map(c => c.name).join(', ')}`);
  console.log(`   🔗 ${directCompanies.length} with career links: ${directCompanies.map(c => c.name).join(', ')}`);
  console.log(`🔄 Mode: ${DEMO_MODE ? 'DEMO (sample data)' : 'LIVE (fetches real jobs + falls back if needed)'}`);
  console.log(`\n📡 API: GET /api/jobs | /api/companies | /api/companies/:name/jobs | POST /api/refresh\n`);
});
