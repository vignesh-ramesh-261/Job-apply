// ─── STATE ────────────────────────────────────────────────────────
let allJobs = [];
let filteredJobs = [];
let companies = [];
let bookmarks = JSON.parse(localStorage.getItem('jobhunter_bookmarks') || '[]');
let currentSort = 'newest';
let displayCount = 50;
const ITEMS_PER_PAGE = 50;

// ─── DOM ELEMENTS ───────────────────────────────────────────────
const elements = {
  searchInput: document.getElementById('searchInput'),
  clearSearch: document.getElementById('clearSearch'),
  locationFilter: document.getElementById('locationFilter'),
  departmentFilter: document.getElementById('departmentFilter'),
  experienceFilter: document.getElementById('experienceFilter'),
  companyFilter: document.getElementById('companyFilter'),
  remoteOnly: document.getElementById('remoteOnly'),
  jobsList: document.getElementById('jobsList'),
  jobsSection: document.getElementById('jobsSection'),
  loadingState: document.getElementById('loadingState'),
  emptyState: document.getElementById('emptyState'),
  errorState: document.getElementById('errorState'),
  errorMessage: document.getElementById('errorMessage'),
  jobCount: document.getElementById('jobCount'),
  bookmarkCount: document.getElementById('bookmarkCount'),
  resultsTitle: document.getElementById('resultsTitle'),
  companyScroll: document.getElementById('companyScroll'),
  activeFilters: document.getElementById('activeFilters'),
  loadMore: document.getElementById('loadMore'),
  loadMoreBtn: document.getElementById('loadMoreBtn'),
  progressFill: document.getElementById('progressFill'),
  progressText: document.getElementById('progressText'),
  themeToggle: document.getElementById('themeToggle'),
  themeIcon: document.getElementById('themeIcon'),
  refreshBtn: document.getElementById('refreshBtn'),
  bookmarksBtn: document.getElementById('bookmarksBtn'),
  bookmarksModal: document.getElementById('bookmarksModal'),
  closeModal: document.getElementById('closeModal'),
  bookmarksList: document.getElementById('bookmarksList'),
  exportBookmarks: document.getElementById('exportBookmarks'),
  clearBookmarks: document.getElementById('clearBookmarks'),
  resetFilters: document.getElementById('resetFilters'),
  retryBtn: document.getElementById('retryBtn'),
  footerCompanyCount: document.getElementById('footerCompanyCount'),
};

// ─── THEME ──────────────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('jobhunter_theme');
  const theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  elements.themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

elements.themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('jobhunter_theme', next);
  elements.themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';
});

// ─── BOOKMARKS ──────────────────────────────────────────────────
function updateBookmarkCount() {
  elements.bookmarkCount.textContent = bookmarks.length;
}

function isBookmarked(job) {
  return bookmarks.some(b => b.url === job.url);
}

function toggleBookmark(job) {
  const idx = bookmarks.findIndex(b => b.url === job.url);
  if (idx >= 0) {
    bookmarks.splice(idx, 1);
  } else {
    bookmarks.push({
      title: job.title,
      company: job.company,
      location: job.location,
      url: job.url,
      logo: job.logo,
      savedAt: new Date().toISOString()
    });
  }
  localStorage.setItem('jobhunter_bookmarks', JSON.stringify(bookmarks));
  updateBookmarkCount();
  renderJobs();
}

function renderBookmarks() {
  if (bookmarks.length === 0) {
    elements.bookmarksList.innerHTML = `
      <div class="empty-bookmarks">
        <p>No saved jobs yet. Click the ★ button on any job to save it.</p>
      </div>
    `;
    return;
  }
  
  elements.bookmarksList.innerHTML = bookmarks.map(b => `
    <div class="bookmark-item">
      <span>${b.logo || '💼'}</span>
      <div class="bookmark-item-info">
        <div class="bookmark-item-title">${escapeHtml(b.title)}</div>
        <div class="bookmark-item-company">${escapeHtml(b.company)} · ${escapeHtml(b.location || '')}</div>
      </div>
      <a href="${b.url}" target="_blank" rel="noopener">Apply →</a>
      <button class="remove-bookmark" data-url="${b.url}">✕</button>
    </div>
  `).join('');
  
  // Remove bookmark handlers
  elements.bookmarksList.querySelectorAll('.remove-bookmark').forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.getAttribute('data-url');
      bookmarks = bookmarks.filter(b => b.url !== url);
      localStorage.setItem('jobhunter_bookmarks', JSON.stringify(bookmarks));
      updateBookmarkCount();
      renderBookmarks();
      renderJobs();
    });
  });
}

// ─── MODAL ──────────────────────────────────────────────────────
elements.bookmarksBtn.addEventListener('click', () => {
  renderBookmarks();
  elements.bookmarksModal.classList.add('open');
});

elements.closeModal.addEventListener('click', () => {
  elements.bookmarksModal.classList.remove('open');
});

elements.bookmarksModal.querySelector('.modal-overlay').addEventListener('click', () => {
  elements.bookmarksModal.classList.remove('open');
});

elements.exportBookmarks.addEventListener('click', () => {
  if (bookmarks.length === 0) return;
  const text = bookmarks.map(b => `• ${b.title} at ${b.company}\n  ${b.url}`).join('\n\n');
  navigator.clipboard.writeText(text).then(() => {
    elements.exportBookmarks.textContent = '✓ Copied!';
    setTimeout(() => { elements.exportBookmarks.textContent = '📋 Export to Clipboard'; }, 2000);
  });
});

elements.clearBookmarks.addEventListener('click', () => {
  if (confirm('Remove all saved jobs?')) {
    bookmarks = [];
    localStorage.setItem('jobhunter_bookmarks', JSON.stringify(bookmarks));
    updateBookmarkCount();
    renderBookmarks();
    renderJobs();
  }
});

// ─── FETCH COMPANIES ────────────────────────────────────────────
async function loadCompanies() {
  try {
    const res = await fetch('/api/companies');
    companies = await res.json();
    
    // Populate company filter dropdown
    const sorted = [...companies].sort((a, b) => a.name.localeCompare(b.name));
    elements.companyFilter.innerHTML = '<option value="">All Companies</option>' +
      sorted.map(c => `<option value="${c.name}">${c.logo} ${c.name}</option>`).join('');
    
    // Populate company chips
    elements.companyScroll.innerHTML = companies.map(c => `
      <div class="company-chip ${c.ats === 'direct' ? 'direct-link' : ''}" data-company="${c.name}" title="${c.ats === 'direct' ? 'Opens career page' : 'Filter jobs'}">
        <span class="chip-logo">${c.logo}</span>
        ${c.name}
        ${c.ats === 'direct' ? '<span class="chip-external"></span>' : ''}
      </div>
    `).join('');
    
    // Add click handlers for chips
    elements.companyScroll.querySelectorAll('.company-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const company = chip.getAttribute('data-company');
        const companyData = companies.find(c => c.name === company);
        
        // If company has no API jobs (direct link), open career page directly
        if (companyData && companyData.ats === 'direct') {
          window.open(companyData.careerUrl, '_blank', 'noopener');
          return;
        }
        
        if (elements.companyFilter.value === company) {
          elements.companyFilter.value = '';
          chip.classList.remove('active');
        } else {
          elements.companyFilter.value = company;
          elements.companyScroll.querySelectorAll('.company-chip').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
        }
        applyFilters();
      });
    });
    
    elements.footerCompanyCount.textContent = companies.length;
  } catch (error) {
    console.error('Failed to load companies:', error);
  }
}

// ─── FETCH JOBS ─────────────────────────────────────────────────
async function loadJobs() {
  elements.loadingState.style.display = 'block';
  elements.jobsSection.style.display = 'none';
  elements.emptyState.style.display = 'none';
  elements.errorState.style.display = 'none';
  
  // Animate progress
  animateProgress();
  
  try {
    const res = await fetch('/api/jobs');
    const data = await res.json();
    
    if (data.error) {
      throw new Error(data.error);
    }
    
    allJobs = data.jobs;
    elements.jobCount.textContent = `${allJobs.length} jobs`;
    
    // Update progress to complete
    elements.progressFill.style.width = '100%';
    elements.progressText.textContent = 'All done! Rendering jobs...';
    
    setTimeout(() => {
      elements.loadingState.style.display = 'none';
      applyFilters();
    }, 500);
    
  } catch (error) {
    console.error('Failed to load jobs:', error);
    elements.loadingState.style.display = 'none';
    elements.errorState.style.display = 'block';
    elements.errorMessage.textContent = error.message || 'Unable to fetch jobs. Please try again.';
  }
}

function animateProgress() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 90) {
      progress = 90;
      clearInterval(interval);
    }
    elements.progressFill.style.width = `${progress}%`;
    
    if (progress < 30) {
      elements.progressText.textContent = 'Connecting to ATS platforms...';
    } else if (progress < 60) {
      elements.progressText.textContent = 'Fetching job listings...';
    } else {
      elements.progressText.textContent = 'Processing results...';
    }
  }, 300);
}

// ─── FILTER & SORT ──────────────────────────────────────────────
function applyFilters() {
  const search = elements.searchInput.value.trim().toLowerCase();
  const location = elements.locationFilter.value.toLowerCase();
  const department = elements.departmentFilter.value.toLowerCase();
  const experience = elements.experienceFilter.value;
  const company = elements.companyFilter.value;
  const remote = elements.remoteOnly.checked;
  
  filteredJobs = allJobs.filter(job => {
    if (search && !(
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.department?.toLowerCase().includes(search) ||
      job.description?.toLowerCase().includes(search) ||
      job.focus?.toLowerCase().includes(search)
    )) return false;
    
    if (location === 'india') {
      // Match any Indian city
      if (!/india|bangalore|hyderabad|pune|chennai|noida|mumbai|delhi|kochi|gurgaon| Ahmedabad/i.test(job.location)) return false;
    } else if (location === 'remote') {
      if (!job.location.toLowerCase().includes('remote')) return false;
    } else if (location === 'delhi') {
      if (!/delhi|ncr|gurgaon|gurugram/i.test(job.location)) return false;
    } else if (location && !job.location.toLowerCase().includes(location)) return false;
    
    if (department && !job.department.toLowerCase().includes(department)) return false;
    if (experience && job.experience !== experience) return false;
    if (company && job.company !== company) return false;
    if (remote && !job.location.toLowerCase().includes('remote')) return false;
    
    return true;
  });
  
  applySorting();
  displayCount = ITEMS_PER_PAGE;
  renderJobs();
  renderActiveFilters();
  updateClearButton();
  
  // Update company chip active state
  elements.companyScroll.querySelectorAll('.company-chip').forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('data-company') === company);
  });
}

function applySorting() {
  switch (currentSort) {
    case 'newest':
      filteredJobs.sort((a, b) => {
        if (!a.postedAt) return 1;
        if (!b.postedAt) return -1;
        return new Date(b.postedAt) - new Date(a.postedAt);
      });
      break;
    case 'company':
      filteredJobs.sort((a, b) => a.company.localeCompare(b.company));
      break;
    case 'title':
      filteredJobs.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }
}

function renderActiveFilters() {
  const tags = [];
  const search = elements.searchInput.value.trim();
  if (search) tags.push({ label: `Search: "${search}"`, clear: () => { elements.searchInput.value = ''; applyFilters(); } });
  if (elements.locationFilter.value) tags.push({ label: `📍 ${elements.locationFilter.options[elements.locationFilter.selectedIndex].text}`, clear: () => { elements.locationFilter.value = ''; applyFilters(); } });
  if (elements.departmentFilter.value) tags.push({ label: `🏢 ${elements.departmentFilter.options[elements.departmentFilter.selectedIndex].text}`, clear: () => { elements.departmentFilter.value = ''; applyFilters(); } });
  if (elements.experienceFilter.value) tags.push({ label: `📊 ${elements.experienceFilter.value}`, clear: () => { elements.experienceFilter.value = ''; applyFilters(); } });
  if (elements.companyFilter.value) tags.push({ label: `${getCompanyLogo(elements.companyFilter.value)} ${elements.companyFilter.value}`, clear: () => { elements.companyFilter.value = ''; applyFilters(); } });
  if (elements.remoteOnly.checked) tags.push({ label: '🌍 Remote Only', clear: () => { elements.remoteOnly.checked = false; applyFilters(); } });
  
  elements.activeFilters.innerHTML = tags.map((tag, i) => `
    <span class="filter-tag">
      ${tag.label}
      <button data-idx="${i}">✕</button>
    </span>
  `).join('');
  
  elements.activeFilters.querySelectorAll('button').forEach((btn, i) => {
    btn.addEventListener('click', () => tags[i].clear());
  });
  
  // Update results title
  if (tags.length > 0) {
    elements.resultsTitle.textContent = `${filteredJobs.length} matching jobs`;
  } else {
    elements.resultsTitle.textContent = `All Open Positions (${filteredJobs.length})`;
  }
}

function updateClearButton() {
  elements.clearSearch.style.display = elements.searchInput.value ? 'flex' : 'none';
}

// ─── RENDER JOBS ────────────────────────────────────────────────
function renderJobs() {
  if (filteredJobs.length === 0) {
    elements.jobsSection.style.display = 'none';
    elements.emptyState.style.display = 'block';
    return;
  }
  
  elements.emptyState.style.display = 'none';
  elements.jobsSection.style.display = 'block';
  
  const toShow = filteredJobs.slice(0, displayCount);
  
  elements.jobsList.innerHTML = toShow.map((job, i) => `
    <div class="job-card" style="animation-delay: ${Math.min(i * 20, 500)}ms">
      <div class="job-logo">${job.logo || '💼'}</div>
      <div class="job-card-content">
        <div class="job-card-top">
          <span class="job-company">${escapeHtml(job.company)}</span>
          ${job.experience && job.experience !== 'All Levels' ? `<span class="job-exp ${job.experience.toLowerCase().replace(/[\s\/]/g, '-')}">${escapeHtml(job.experience)}</span>` : ''}
        </div>
        <div class="job-title" title="${escapeHtml(job.title)}">${escapeHtml(job.title)}</div>
        <div class="job-meta">
          <span>📍 ${escapeHtml(job.location)}</span>
          <span>🏢 ${escapeHtml(job.department)}</span>
          ${job.postedAt ? `<span>🕐 ${formatDate(job.postedAt)}</span>` : ''}
        </div>
        ${job.focus ? `<div class="job-focus" title="${escapeHtml(job.focus)}">${escapeHtml(job.focus)}</div>` : ''}
      </div>
      <div class="job-actions">
        <button class="btn-bookmark ${isBookmarked(job) ? 'saved' : ''}" data-url="${job.url}" title="${isBookmarked(job) ? 'Remove from saved' : 'Save job'}">
          ${isBookmarked(job) ? '★' : '☆'}
        </button>
        <a href="${job.url}" target="_blank" rel="noopener" class="btn-apply" onclick="event.stopPropagation()">
          Apply →
        </a>
      </div>
    </div>
  `).join('');
  
  // Bookmark button handlers
  elements.jobsList.querySelectorAll('.btn-bookmark').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const url = btn.getAttribute('data-url');
      const job = allJobs.find(j => j.url === url);
      if (job) toggleBookmark(job);
    });
  });
  
  // Show/hide load more
  if (displayCount < filteredJobs.length) {
    elements.loadMore.style.display = 'block';
  } else {
    elements.loadMore.style.display = 'none';
  }
}

// ─── EVENT LISTENERS ────────────────────────────────────────────
let searchTimeout;
elements.searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(applyFilters, 300);
  updateClearButton();
});

elements.clearSearch.addEventListener('click', () => {
  elements.searchInput.value = '';
  applyFilters();
});

elements.locationFilter.addEventListener('change', applyFilters);
elements.departmentFilter.addEventListener('change', applyFilters);
elements.experienceFilter.addEventListener('change', applyFilters);
elements.companyFilter.addEventListener('change', applyFilters);
elements.remoteOnly.addEventListener('change', applyFilters);

elements.loadMoreBtn.addEventListener('click', () => {
  displayCount += ITEMS_PER_PAGE;
  renderJobs();
});

elements.resetFilters.addEventListener('click', () => {
  elements.searchInput.value = '';
  elements.locationFilter.value = '';
  elements.departmentFilter.value = '';
  elements.experienceFilter.value = '';
  elements.companyFilter.value = '';
  elements.remoteOnly.checked = false;
  applyFilters();
});

elements.retryBtn.addEventListener('click', loadJobs);

// Refresh button
elements.refreshBtn.addEventListener('click', async () => {
  const icon = elements.refreshBtn.querySelector('.refresh-icon');
  icon.classList.add('spinning');
  try {
    await fetch('/api/refresh', { method: 'POST' });
  } catch (e) {}
  await loadJobs().finally(() => {
    setTimeout(() => icon.classList.remove('spinning'), 1000);
  });
});

// Sort buttons
document.querySelectorAll('.sort-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSort = btn.getAttribute('data-sort');
    applySorting();
    renderJobs();
  });
});

// ─── UTILITIES ──────────────────────────────────────────────────
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text || '';
  return div.innerHTML;
}

function getCompanyLogo(companyName) {
  const c = companies.find(c => c.name === companyName);
  return c ? c.logo : '💼';
}

function formatDate(dateStr) {
  try {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    if (diff < 7) return `${diff} days ago`;
    if (diff < 30) return `${Math.floor(diff / 7)} weeks ago`;
    if (diff < 365) return `${Math.floor(diff / 30)} months ago`;
    return `${Math.floor(diff / 365)} years ago`;
  } catch {
    return '';
  }
}

// ─── DEMO BANNER ────────────────────────────────────────────────
async function checkDemoMode() {
  try {
    const res = await fetch('/api/info');
    const info = await res.json();
    if (info.mode === 'demo') {
      const banner = document.createElement('div');
      banner.className = 'demo-banner';
      banner.innerHTML = `
        <span>📦</span>
        <span>Demo Mode — showing sample data. 
          <a href="https://github.com/vignesh-ramesh-261/Job-apply#quick-start" target="_blank">Deploy locally</a> to connect to real career APIs.
        </span>
        <button class="demo-dismiss" id="dismissDemo">✕</button>
      `;
      document.body.insertBefore(banner, document.querySelector('.header'));
      
      // Add styles for banner
      const style = document.createElement('style');
      style.textContent = `
        .demo-banner {
          background: linear-gradient(90deg, #f59f00, #e8590c);
          color: #fff;
          padding: 10px 20px;
          text-align: center;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .demo-banner a {
          color: #fff;
          text-decoration: underline;
          font-weight: 600;
        }
        .demo-dismiss {
          background: rgba(255,255,255,0.2);
          border: none;
          color: #fff;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          cursor: pointer;
          margin-left: 8px;
          font-size: 12px;
        }
        .demo-dismiss:hover {
          background: rgba(255,255,255,0.3);
        }
      `;
      document.head.appendChild(style);
      
      document.getElementById('dismissDemo').addEventListener('click', () => {
        banner.remove();
        style.remove();
      });
    }
  } catch (e) {
    // Silently fail
  }
}

// ─── INIT ───────────────────────────────────────────────────────
async function init() {
  initTheme();
  updateBookmarkCount();
  await loadCompanies();
  await loadJobs();
  await checkDemoMode();
}

init();
