// ========== COUNTRIES ==========
const COUNTRIES = [
  { id:'india', label:'India', group:'india' },
  { id:'singapore', label:'Singapore', group:'apac' },
  { id:'hongkong', label:'Hong Kong', group:'apac' },
  { id:'australia', label:'Australia', group:'apac' },
  { id:'newzealand', label:'New Zealand', group:'apac' },
  { id:'japan', label:'Japan', group:'apac' },
  { id:'uae', label:'UAE / Dubai', group:'emea' },
  { id:'uk', label:'United Kingdom', group:'emea' },
  { id:'germany', label:'Germany', group:'emea' },
  { id:'netherlands', label:'Netherlands', group:'emea' },
  { id:'ireland', label:'Ireland', group:'emea' },
  { id:'switzerland', label:'Switzerland', group:'emea' },
  { id:'france', label:'France', group:'emea' },
  { id:'usa', label:'United States', group:'americas' },
  { id:'canada', label:'Canada', group:'americas' },
  { id:'worldwide', label:'Worldwide / Remote', group:'all' }
];
let selectedCountries = new Set(['india','singapore','usa','uk','uae','australia','worldwide']);

function renderCountries() {
  const grid = document.getElementById('countryGrid');
  grid.innerHTML = COUNTRIES.map(c =>
    `<div class="country-chip ${selectedCountries.has(c.id)?'active':''}" data-id="${c.id}" onclick="toggleCountry('${c.id}')">${c.label}</div>`
  ).join('');
}
function toggleCountry(id) {
  if (selectedCountries.has(id)) selectedCountries.delete(id);
  else selectedCountries.add(id);
  if (selectedCountries.size === 0) selectedCountries.add('worldwide');
  renderCountries();
  refreshXray();
}
function selectCountries(mode) {
  selectedCountries.clear();
  if (mode === 'all') COUNTRIES.forEach(c => selectedCountries.add(c.id));
  else if (mode === 'clear') selectedCountries.add('worldwide'); // never leave empty — always searchable
  else if (mode === 'india') selectedCountries.add('india');
  else COUNTRIES.filter(c => c.group === mode || c.group === 'all').forEach(c => selectedCountries.add(c.id));
  if (selectedCountries.size === 0) selectedCountries.add('worldwide');
  renderCountries();
  refreshXray();
}

// ========== JOBS (curated snapshot) ==========
const jobs = [
  { id:1, title:"Head of Talent Acquisition, India", company:"Western Union", location:"Pune, India", expMin:10, expMax:15, industry:"BFSI / FinTech", level:"Senior", geo:"India", mode:"Hybrid", source:"LinkedIn", url:"https://in.linkedin.com/jobs/view/head-of-talent-acquisition-india-at-western-union-4447231114" },
  { id:2, title:"Head of Talent Acquisition", company:"InRhythm", location:"Bengaluru, India", expMin:13, expMax:20, industry:"Technology / IT Services", level:"Senior", geo:"India", mode:"Hybrid", source:"LinkedIn", url:"https://in.linkedin.com/jobs/view/head-of-talent-acquisition-at-inrhythm-4452922643" },
  { id:3, title:"Director Talent Acquisition", company:"Ascendion", location:"Bengaluru, India", expMin:15, expMax:22, industry:"Technology / Digital Engineering", level:"Senior", geo:"India", mode:"Hybrid", source:"LinkedIn", url:"https://in.linkedin.com/jobs/view/director-talent-acquisition-at-ascendion-4447969945" },
  { id:4, title:"Director, Talent Acquisition", company:"CIBC India", location:"Hyderabad, India", expMin:12, expMax:18, industry:"BFSI / Banking", level:"Senior", geo:"India", mode:"Hybrid", source:"LinkedIn", url:"https://in.linkedin.com/jobs/view/director-talent-acquisition-t500-22518-at-cibc-india-4364350693" },
  { id:5, title:"Director Talent Acquisition", company:"Quess Corp", location:"Bengaluru, India", expMin:15, expMax:18, industry:"Staffing / Services", level:"Senior", geo:"India", mode:"Onsite", source:"LinkedIn", url:"https://in.linkedin.com/jobs/view/director-talent-acquisition-at-quess-corp-limited-4452329895" },
  { id:6, title:"SM / AD – Talent Acquisition (Leadership)", company:"CoinDCX", location:"Bengaluru, India", expMin:8, expMax:12, industry:"FinTech", level:"Mid", geo:"India", mode:"Hybrid", source:"LinkedIn", url:"https://in.linkedin.com/jobs/view/sm-ad-%E2%80%93-talent-acquisition-leadership-hiring-at-coindcx-4428483843" },
  { id:7, title:"Talent Acquisition Head – Architecture & Design", company:"Global Design Firm", location:"Bengaluru, India", expMin:12, expMax:15, industry:"Architecture / Design", level:"Senior", geo:"India", mode:"Hybrid", source:"iimjobs", url:"https://www.iimjobs.com/j/talent-acquisition-head-architecture-and-design-firm-iim-xlri-tiss-scmhrd-1657527" },
  { id:8, title:"Director / Head – TA (Global Engineering)", company:"Global Engineering Org", location:"Gurgaon, India", expMin:13, expMax:18, industry:"Engineering", level:"Senior", geo:"India", mode:"Hybrid", source:"iimjobs", url:"https://www.iimjobs.com/j/director-head-talent-acquisition-global-engineering-organisation-1651113" },
  { id:9, title:"Regional Talent Acquisition Lead – APAC", company:"Rolls-Royce", location:"Bengaluru, India", expMin:18, expMax:20, industry:"Aerospace", level:"Senior", geo:"India", mode:"Hybrid", source:"LinkedIn", url:"https://in.linkedin.com/jobs/view/regional-talent-acquisition-lead-%E2%80%93-apac-at-rolls-royce-4442537920" },
  { id:10, title:"Global Head of Talent Acquisition", company:"Healthcare Technology", location:"Hyderabad, India", expMin:15, expMax:22, industry:"Healthcare", level:"CXO", geo:"India", mode:"Hybrid", source:"Michael Page", url:"https://www.michaelpage.co.in/job-detail/global-head-talent-acquisition/ref/jn-082025-6808899" },
  { id:11, title:"Senior Manager, Talent Acquisition – APJ", company:"Nutanix", location:"Singapore", expMin:15, expMax:20, industry:"Technology / Cloud", level:"Senior", geo:"APAC", mode:"Hybrid", source:"LinkedIn", url:"https://sg.linkedin.com/jobs/view/senior-manager-talent-acquisition-at-nutanix-4413922038" },
  { id:12, title:"Head of Talent Acquisition - Technology", company:"Frazer Jones Client", location:"Singapore", expMin:10, expMax:15, industry:"Technology", level:"Senior", geo:"APAC", mode:"Hybrid", source:"LinkedIn", url:"https://sg.linkedin.com/jobs/view/head-of-talent-acquisition-technology-at-frazer-jones-4371736709" },
  { id:13, title:"Talent Acquisition Manager / Director", company:"Achieve Group", location:"Singapore", expMin:10, expMax:16, industry:"Professional Services", level:"Senior", geo:"APAC", mode:"Hybrid", source:"LinkedIn", url:"https://sg.linkedin.com/jobs/view/talent-acquisition-manager-director-at-achieve-group-4409775858" },
  { id:14, title:"Senior Director, Talent Acquisition", company:"Marqeta", location:"United States (Remote)", expMin:12, expMax:20, industry:"FinTech", level:"Senior", geo:"Americas", mode:"Remote", source:"Startup.jobs", url:"https://startup.jobs/senior-director-talent-acquisition-marqeta-7902067" },
  { id:15, title:"Global Director Talent Acquisition", company:"Alcoa", location:"London, UK (Flexible)", expMin:15, expMax:22, industry:"Mining / Metals", level:"CXO", geo:"EMEA", mode:"Hybrid", source:"LinkedIn", url:"https://uk.linkedin.com/jobs/view/global-director-talent-acquisition-flexible-work-location-at-alcoa-4447577417" },
  { id:16, title:"VP, Talent Acquisition", company:"Vast", location:"Long Beach, CA, USA", expMin:10, expMax:18, industry:"Aerospace", level:"CXO", geo:"Americas", mode:"Hybrid", source:"Startup.jobs", url:"https://startup.jobs/vp-talent-acquisition-vast-4926588" },
  { id:17, title:"Head of Talent Acquisition", company:"PARIS GROUP", location:"Dubai, UAE", expMin:10, expMax:16, industry:"Retail", level:"Senior", geo:"EMEA", mode:"Onsite", source:"LinkedIn", url:"https://ae.linkedin.com/jobs/view/head-of-talent-acquisition-at-paris-group-4213775372" },
  { id:18, title:"Director of Talent Acquisition", company:"publicjobs", location:"Dublin, Ireland", expMin:12, expMax:18, industry:"Public Sector", level:"Senior", geo:"EMEA", mode:"Hybrid", source:"LinkedIn", url:"https://ie.linkedin.com/jobs/view/director-of-talent-acquisition-at-publicjobs-4342139971" },
  { id:19, title:"Director Talent Acquisition", company:"Oranga Tamariki", location:"Wellington, New Zealand", expMin:12, expMax:18, industry:"Public Sector", level:"Senior", geo:"APAC", mode:"Hybrid", source:"LinkedIn", url:"https://nz.linkedin.com/jobs/view/director-talent-acquisition-at-oranga-tamariki%E2%80%94ministry-for-children-4382260158" },
  { id:20, title:"Senior Talent Acquisition Manager", company:"Caliber8 Client", location:"Hong Kong", expMin:10, expMax:15, industry:"Industrial", level:"Senior", geo:"APAC", mode:"Hybrid", source:"LinkedIn", url:"https://hk.linkedin.com/jobs/view/senior-talent-acquisition-manager-global-mnc-preferably-with-team-leading-experience-at-caliber8-recruitment-4300400038" },
  { id:21, title:"Director / Senior Manager, Talent Acquisition", company:"Xometry", location:"North Bethesda, MD, USA", expMin:10, expMax:16, industry:"Manufacturing", level:"Senior", geo:"Americas", mode:"Hybrid", source:"LinkedIn", url:"https://www.linkedin.com/jobs/view/director-senior-manager-talent-acquisition-at-xometry-4378896041" },
  { id:22, title:"Head of Talent Acquisition", company:"DenizBank", location:"Istanbul, Türkiye", expMin:10, expMax:15, industry:"BFSI", level:"Senior", geo:"EMEA", mode:"Onsite", source:"LinkedIn", url:"https://tr.linkedin.com/jobs/view/head-of-talent-acquisition-at-denizbank-4341998991" },
  { id:23, title:"Global Talent Acquisition Head", company:"Rashmi Group", location:"Kolkata, India", expMin:12, expMax:14, industry:"Manufacturing", level:"CXO", geo:"India", mode:"Onsite", source:"iimjobs", url:"https://www.iimjobs.com/j/rashmi-group-global-talent-acquisition-head-1674025" },
  { id:24, title:"Senior Talent Acquisition Manager", company:"Axxess", location:"Dallas, TX, USA", expMin:7, expMax:12, industry:"Healthcare", level:"Mid", geo:"Americas", mode:"Hybrid", source:"LinkedIn", url:"https://www.linkedin.com/jobs/view/senior-talent-acquisition-manager-at-axxess-4343117333" },
  { id:25, title:"Senior Manager Talent Acquisition", company:"Druva Inc.", location:"Pune, India", expMin:15, expMax:20, industry:"Technology / Cloud", level:"Senior", geo:"India", mode:"Hybrid", source:"AmbitionBox", url:"https://www.ambitionbox.com/jobs/senior-talent-acquisition-manager-jobs-prf" }
];

let industryChart = null, geoChart = null, pendingJob = null;

// Tabs
document.querySelectorAll('.tab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    t.classList.add('active');
    document.getElementById('panel-' + t.dataset.tab).classList.add('active');
    if (t.dataset.tab === 'live' && !liveJobs.length) fetchLiveJobs();
  });
});

// ========== LIVE JOB FETCHING (real-time, public APIs, no login required) ==========
let liveJobs = [];
let autoRefreshTimer = null;

function classifyLevel(title) {
  const t = title.toLowerCase();
  if (/\b(chief|cxo|vp|vice president|global head)\b/.test(t)) return 'CXO';
  if (/\b(head of|director|senior manager|sr\.? manager|lead)\b/.test(t)) return 'Senior';
  return 'Mid';
}

function matchesLiveFilters(title, location) {
  const kws = document.getElementById('liveKw').value.split(',').map(k => k.trim().toLowerCase()).filter(Boolean);
  // Always treat these as relevant for TA/HR leadership search
  const extra = ['talent acquisition', 'recruiter', 'recruiting', 'recruitment', 'head of talent', 'talent partner', 'people acquisition', 'hr business', 'human resources', 'workforce'];
  const allKws = [...new Set([...kws, ...extra])];
  const t = (title || '').toLowerCase();
  if (!allKws.some(k => t.includes(k))) return false;

  const level = document.getElementById('liveLevel').value;
  const jobLevel = classifyLevel(title);
  if (level !== 'all') {
    if (!(level === 'cxo' && jobLevel === 'CXO') &&
        !(level === 'senior' && jobLevel === 'Senior') &&
        !(level === 'mid' && jobLevel === 'Mid')) return false;
  }

  const locFilter = document.getElementById('liveLoc').value.trim().toLowerCase();
  if (locFilter && !(location || '').toLowerCase().includes(locFilter)) return false;

  return true;
}

function setSourceStatus(id, text) {
  const el = document.getElementById(id);
  if (!el) return;
  const name = (el.dataset.name || el.textContent.replace(/[✅⚠️⏳❌].*$/, '').trim().split(' ')[0]);
  el.dataset.name = name;
  el.textContent = name + ' ' + text;
}

async function fetchJson(url) {
  // Direct fetch first (works when API allows browser CORS)
  try {
    const r = await fetch(url, { method: 'GET', mode: 'cors', credentials: 'omit' });
    if (r.ok) return await r.json();
  } catch (e) { /* try proxy */ }
  // Public CORS proxies as fallback (may be rate-limited)
  const proxies = [
    'https://corsproxy.io/?' + encodeURIComponent(url),
    'https://api.allorigins.win/raw?url=' + encodeURIComponent(url)
  ];
  for (const p of proxies) {
    try {
      const r = await fetch(p, { method: 'GET', credentials: 'omit' });
      if (r.ok) return await r.json();
    } catch (e) { /* next */ }
  }
  throw new Error('fetch blocked');
}

async function fetchLiveJobs() {
  const results = [];
  const empty = document.getElementById('liveEmptyState');
  empty.style.display = 'block';
  empty.innerHTML = 'Fetching live roles from Remotive, Arbeitnow, Jobicy, The Muse…';

  // 1. Remotive
  try {
    setSourceStatus('sourceStatusRemotive', '⏳');
    const data = await fetchJson('https://remotive.com/api/remote-jobs?category=human-resources&limit=50');
    let n = 0;
    (data.jobs || []).forEach(j => {
      if (matchesLiveFilters(j.title, j.candidate_required_location)) {
        n++;
        results.push({
          title: j.title, company: j.company_name, location: j.candidate_required_location || 'Remote',
          level: classifyLevel(j.title), mode: 'Remote', source: 'Remotive',
          posted: (j.publication_date || '').slice(0, 10), url: j.url,
          expMin: 8, expMax: 18, industry: j.category || 'HR'
        });
      }
    });
    // Second pass: broader talent search if few matches
    if (n < 3) {
      try {
        const data2 = await fetchJson('https://remotive.com/api/remote-jobs?search=recruiter&limit=30');
        (data2.jobs || []).forEach(j => {
          if (matchesLiveFilters(j.title, j.candidate_required_location) && !results.some(x => x.url === j.url)) {
            results.push({
              title: j.title, company: j.company_name, location: j.candidate_required_location || 'Remote',
              level: classifyLevel(j.title), mode: 'Remote', source: 'Remotive',
              posted: (j.publication_date || '').slice(0, 10), url: j.url,
              expMin: 8, expMax: 18, industry: j.category || 'HR'
            });
          }
        });
      } catch (e2) {}
    }
    setSourceStatus('sourceStatusRemotive', '✅');
  } catch (e) { setSourceStatus('sourceStatusRemotive', '⚠️ blocked — use Open site'); }

  // 2. Arbeitnow
  try {
    setSourceStatus('sourceStatusArbeitnow', '⏳');
    const data = await fetchJson('https://www.arbeitnow.com/api/job-board-api');
    (data.data || []).forEach(j => {
      if (matchesLiveFilters(j.title, j.location)) {
        results.push({
          title: j.title, company: j.company_name, location: j.location || (j.remote ? 'Remote' : 'Onsite'),
          level: classifyLevel(j.title), mode: j.remote ? 'Remote' : 'Onsite', source: 'Arbeitnow',
          posted: j.created_at ? new Date(j.created_at * 1000).toISOString().slice(0, 10) : '',
          url: j.url, expMin: 8, expMax: 18, industry: (j.tags || []).join(', ') || 'General'
        });
      }
    });
    setSourceStatus('sourceStatusArbeitnow', '✅');
  } catch (e) { setSourceStatus('sourceStatusArbeitnow', '⚠️ blocked — use Open site'); }

  // 3. Jobicy
  try {
    setSourceStatus('sourceStatusJobicy', '⏳');
    const data = await fetchJson('https://jobicy.com/api/v2/remote-jobs?count=50&tag=hr');
    (data.jobs || []).forEach(j => {
      if (matchesLiveFilters(j.jobTitle, j.jobGeo)) {
        results.push({
          title: j.jobTitle, company: j.companyName, location: j.jobGeo || 'Remote',
          level: classifyLevel(j.jobTitle), mode: 'Remote', source: 'Jobicy',
          posted: (j.pubDate || '').slice(0, 10), url: j.url,
          expMin: 8, expMax: 18, industry: (j.jobIndustry && j.jobIndustry[0]) || 'HR'
        });
      }
    });
    setSourceStatus('sourceStatusJobicy', '✅');
  } catch (e) { setSourceStatus('sourceStatusJobicy', '⚠️ blocked — use Open site'); }

  // 4. The Muse
  try {
    setSourceStatus('sourceStatusMuse', '⏳');
    const data = await fetchJson('https://www.themuse.com/api/public/jobs?category=Human%20Resources%20%26%20Recruiting&page=0');
    (data.results || []).forEach(j => {
      const loc = (j.locations || []).map(l => l.name).join(', ');
      if (matchesLiveFilters(j.name, loc)) {
        results.push({
          title: j.name, company: (j.company && j.company.name) || 'Unknown', location: loc || 'Unspecified',
          level: classifyLevel(j.name), mode: /flexible|remote/i.test(loc) ? 'Remote' : 'Onsite',
          source: 'The Muse', posted: (j.publication_date || '').slice(0, 10),
          url: (j.refs && j.refs.landing_page) || 'https://www.themuse.com/jobs',
          expMin: 8, expMax: 18,
          industry: ((j.categories || []).map(c => c.name).join(', ')) || 'HR'
        });
      }
    });
    setSourceStatus('sourceStatusMuse', '✅');
  } catch (e) { setSourceStatus('sourceStatusMuse', '⚠️ blocked — use Open site'); }

  liveJobs = results;
  renderLiveJobs();
  document.getElementById('lastFetchedAt').textContent = new Date().toLocaleTimeString();
}

function renderLiveJobs() {
  const tbody = document.getElementById('liveJobTableBody');
  const empty = document.getElementById('liveEmptyState');
  document.getElementById('liveTableCount').textContent = liveJobs.length;

  if (!liveJobs.length) {
    tbody.innerHTML = '';
    empty.style.display = 'block';
    empty.innerHTML = `No live API roles matched (or APIs were blocked by the browser).<br>
      <strong>Use the Source Directory below</strong> — click <em>Open site</em> or <em>Search TA</em> on Remotive, Arbeitnow, Jobicy, The Muse (and every other portal) to open live results in a new tab.<br>
      Tip: open this HTML file directly in Chrome (not a sandboxed preview) for best API access.`;
    return;
  }
  empty.style.display = 'none';

  tbody.innerHTML = liveJobs.map(j => `
    <tr>
      <td><div class="role-title">${j.title}</div></td>
      <td class="company">${j.company}</td>
      <td>${j.location}</td>
      <td><span class="badge badge-${j.level.toLowerCase()}">${j.level}</span></td>
      <td>${j.source}</td>
      <td>${j.posted || '—'}</td>
      <td class="actions">
        <a class="link-btn" href="${j.url}" target="_blank">Apply →</a>
        <button class="action-btn tailor" onclick='tailorForJob(${JSON.stringify(j).replace(/'/g, "&#39;")})'>Tailor & Apply</button>
      </td>
    </tr>
  `).join('');
}

function setupAutoRefresh() {
  if (autoRefreshTimer) clearInterval(autoRefreshTimer);
  const ms = parseInt(document.getElementById('liveAutoRefresh').value, 10);
  if (ms > 0) autoRefreshTimer = setInterval(fetchLiveJobs, ms);
}

// ========== COLLATED SOURCE DIRECTORY — every portal referenced in this app ==========
const ALL_PORTALS = [
  // Live API sources — fetch into table + clickable site links
  { name: 'Remotive', region: 'Remote / Global', type: 'live', url: 'https://remotive.com/remote-jobs/hr', searchUrl: 'https://remotive.com/remote-jobs?search=talent%20acquisition' },
  { name: 'Arbeitnow', region: 'Europe / Global', type: 'live', url: 'https://www.arbeitnow.com/', searchUrl: 'https://www.arbeitnow.com/jobs?search=Talent+Acquisition' },
  { name: 'Jobicy', region: 'Remote / Global', type: 'live', url: 'https://jobicy.com/', searchUrl: 'https://jobicy.com/jobs?q=talent+acquisition' },
  { name: 'The Muse', region: 'Global', type: 'live', url: 'https://www.themuse.com/search/jobs', searchUrl: 'https://www.themuse.com/search/jobs?query=Talent%20Acquisition&filter=true' },

  // Global core
  { name: 'Google X-ray (All Portals)', region: 'Global', type: 'xray', action: 'openGoogleXray' },
  { name: 'LinkedIn Jobs', region: 'Global', type: 'xray', action: 'openLinkedInAgent', url: 'https://www.linkedin.com/jobs/search/?keywords=Talent%20Acquisition&f_WT=2&f_AL=true&f_E=4,5&f_JT=F,C&location=Worldwide' },
  { name: 'Indeed', region: 'Global', type: 'xray', action: 'openIndeed' },
  { name: 'Glassdoor', region: 'Global', type: 'xray', action: 'openGlassdoor' },
  { name: 'Monster', region: 'Global', type: 'xray', url: 'https://www.monster.com/jobs/search?q=Talent+Acquisition+Director' },
  { name: 'ZipRecruiter', region: 'Global', type: 'xray', url: 'https://www.ziprecruiter.com/jobs-search?search=Talent+Acquisition+Director' },
  { name: 'CareerBuilder', region: 'Global', type: 'xray', url: 'https://www.careerbuilder.com/jobs?keywords=Talent+Acquisition+Director' },
  { name: 'SimplyHired', region: 'Global', type: 'xray', url: 'https://www.simplyhired.com/search?q=Talent+Acquisition+Director' },

  // Real-time aggregators
  { name: 'Jooble', region: 'Global Aggregator (~70 countries)', type: 'xray', action: 'openJooble' },
  { name: 'Careerjet', region: 'Global Aggregator (~90 countries)', type: 'xray', action: 'openCareerjet' },
  { name: 'Adzuna (Global)', region: 'Global Aggregator', type: 'xray', action: 'openAdzuna' },

  // India
  { name: 'Naukri', region: 'India', type: 'xray', action: 'openNaukri' },
  { name: 'Shine', region: 'India', type: 'xray', url: 'https://www.shine.com/job-search/talent-acquisition-director-jobs' },
  { name: 'TimesJobs', region: 'India', type: 'xray', url: 'https://www.timesjobs.com/candidate/jobsearch.html?searchType=personalizedSearch&from=submit&txtKeywords=Talent+Acquisition' },
  { name: 'Foundit', region: 'India', type: 'xray', url: 'https://www.foundit.in/srp/results?query=Talent+Acquisition+Director' },
  { name: 'iimjobs', region: 'India', type: 'xray', action: 'openIimjobs' },

  // UK / Europe / MENA / APAC
  { name: 'Reed', region: 'UK', type: 'xray', action: 'openReed' },
  { name: 'TotalJobs', region: 'UK', type: 'xray', url: 'https://www.totaljobs.com/jobs/talent-acquisition-director' },
  { name: 'CV-Library', region: 'UK', type: 'xray', url: 'https://www.cv-library.co.uk/talent-acquisition-director-jobs' },
  { name: 'Adzuna UK', region: 'UK', type: 'xray', url: 'https://www.adzuna.co.uk/jobs/search?q=Talent+Acquisition+Director' },
  { name: 'StepStone', region: 'Europe', type: 'xray', url: 'https://www.stepstone.de/jobs/talent-acquisition' },
  { name: 'Bayt', region: 'MENA', type: 'xray', url: 'https://www.bayt.com/en/international/jobs/talent-acquisition-director-jobs/' },
  { name: 'GulfTalent', region: 'MENA', type: 'xray', url: 'https://www.gulftalent.com/jobs?keyword=Talent+Acquisition' },
  { name: 'NaukriGulf', region: 'MENA', type: 'xray', url: 'https://www.naukrigulf.com/talent-acquisition-jobs' },
  { name: 'Seek', region: 'Australia / NZ', type: 'xray', action: 'openSeek' },
  { name: 'JobStreet', region: 'APAC', type: 'xray', url: 'https://www.jobstreet.com/j?q=Talent+Acquisition+Director' },

  // USA / Remote / Visa / Contract
  { name: 'USAJobs', region: 'USA (Govt)', type: 'xray', url: 'https://www.usajobs.gov/Search/Results?k=Talent%20Acquisition' },
  { name: 'Dice', region: 'USA', type: 'xray', url: 'https://www.dice.com/jobs?q=Talent+Acquisition+Director' },
  { name: 'Wellfound', region: 'USA / Startups', type: 'xray', url: 'https://wellfound.com/role/l/talent-acquisition' },
  { name: 'We Work Remotely', region: 'Remote', type: 'xray', url: 'https://weworkremotely.com/remote-jobs/search?term=Talent+Acquisition' },
  { name: 'RemoteOK', region: 'Remote', type: 'xray', url: 'https://remoteok.com/remote-talent-jobs' },
  { name: 'Himalayas', region: 'Remote', type: 'xray', url: 'https://himalayas.app/jobs?q=Talent+Acquisition' },
  { name: 'MyVisaJobs', region: 'Visa Sponsorship (USA)', type: 'xray', url: 'https://www.myvisajobs.com/Search.aspx?S=Talent+Acquisition' },
  { name: 'Relocate.me', region: 'Visa / Relocation', type: 'xray', url: 'https://relocate.me/search?query=Talent+Acquisition' },
  { name: 'Upwork', region: 'Contract / Freelance', type: 'xray', url: 'https://www.upwork.com/nx/search/jobs/?q=talent%20acquisition' }
];

function portalAction(p) {
  return p.action ? `${p.action}()` : `openPortal('${p.url}')`;
}

function renderPortalDirectory() {
  const tbody = document.getElementById('portalDirectoryBody');
  if (!tbody) return;
  document.getElementById('directoryCount').textContent = ALL_PORTALS.length;
  tbody.innerHTML = ALL_PORTALS.map(p => {
    let actions = '';
    if (p.type === 'live') {
      const site = p.url || '#';
      const search = p.searchUrl || p.url || '#';
      actions = `
        <a class="link-btn" href="${site}" target="_blank" rel="noopener">Open site →</a>
        <button class="action-btn" onclick="openPortal('${search}')">Search TA →</button>
        <button class="action-btn tailor" onclick="fetchLiveJobs()">Fetch API</button>`;
    } else {
      actions = `<button class="action-btn" onclick="${portalAction(p)}">Search Live →</button>`;
    }
    return `<tr>
      <td><div class="role-title">${p.name}</div></td>
      <td class="company">${p.region}</td>
      <td>${p.type === 'live'
        ? '<span class="badge badge-remote">🔴 Live API</span>'
        : '<span class="badge badge-hybrid">🔍 Boolean/X-ray</span>'}</td>
      <td class="actions">${actions}</td>
    </tr>`;
  }).join('');
}

// Master Boolean/X-ray search across every xray-type portal, batched so Google
// doesn't truncate/zero-out on too many site: operators in one query.
function openMasterXray() {
  const xrayPortals = ALL_PORTALS.filter(p => p.type === 'xray');
  const domains = xrayPortals.map(p => {
    if (p.url) { try { return 'site:' + new URL(p.url).hostname.replace(/^www\./, ''); } catch (e) { return null; } }
    return null;
  }).filter(Boolean);
  // De-dupe
  const uniqueDomains = [...new Set(domains)];

  const base = document.getElementById('kw').value || '"Talent Acquisition"';
  const level = document.getElementById('levelFocus').value;
  let levelStr = '';
  if (level === 'cxo') levelStr = ' (Chief OR VP OR "Vice President" OR "Global Head")';
  else if (level === 'senior') levelStr = ' (Director OR "Head of" OR "Senior Manager")';
  else if (level === 'mid') levelStr = ' (Manager OR Lead)';

  const closedExclude = ' -"no longer accepting" -"position filled" -"applications closed" -expired -archived';
  const batchSize = 8;
  let delay = 0;
  for (let i = 0; i < uniqueDomains.length; i += batchSize) {
    const batch = uniqueDomains.slice(i, i + batchSize).join(' OR ');
    const q = `${base}${levelStr} (job OR jobs OR hiring OR vacancy) (${batch})${closedExclude}`;
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(q.replace(/\s+/g, ' ').trim()) + '&tbs=qdr:w';
    setTimeout(() => window.open(url, '_blank'), delay);
    delay += 400;
  }
}

// ========== X-RAY BUILDER ==========
function getLocationTerms() {
  // Worldwide only → light remote query (avoids zero Google results)
  if (selectedCountries.has('worldwide') && selectedCountries.size === 1) {
    return '(remote OR "work from home" OR "work from anywhere" OR worldwide OR global)';
  }
  const map = {
    india: '(India OR Bangalore OR Bengaluru OR Hyderabad OR Pune OR Gurgaon OR Mumbai)',
    singapore: 'Singapore',
    hongkong: '("Hong Kong")',
    australia: '(Australia OR Sydney OR Melbourne)',
    newzealand: '("New Zealand" OR Auckland)',
    japan: '(Japan OR Tokyo)',
    uae: '(UAE OR Dubai)',
    uk: '("United Kingdom" OR London OR UK)',
    germany: '(Germany OR Berlin OR Munich)',
    netherlands: '(Netherlands OR Amsterdam)',
    ireland: '(Ireland OR Dublin)',
    switzerland: '(Switzerland OR Zurich)',
    france: '(France OR Paris)',
    usa: '("United States" OR USA OR "New York" OR "San Francisco")',
    canada: '(Canada OR Toronto OR Vancouver)',
    worldwide: '(remote OR "work from home" OR worldwide OR global)'
  };
  let ids = [...selectedCountries];
  // Cap length so Google still returns results
  if (ids.length > 6) {
    ids = ids.includes('worldwide')
      ? ['worldwide', ...ids.filter(i => i !== 'worldwide').slice(0, 5)]
      : ids.slice(0, 6);
  }
  const terms = ids.map(id => map[id]).filter(Boolean);
  if (!terms.length) return '(remote OR global OR worldwide)';
  return '(' + terms.join(' OR ') + ')';
}

function buildLevelBoost() {
  const level = document.getElementById('levelFocus').value;
  if (level === 'cxo') return ' ("Chief Talent Officer" OR "VP Talent" OR "VP of Talent" OR "Global Head of Talent" OR "Head of People")';
  if (level === 'senior') return ' ("Head of Talent Acquisition" OR "Director Talent Acquisition" OR "Senior Director" OR "Associate Director")';
  if (level === 'mid') return ' ("Senior Manager Talent Acquisition" OR "Talent Acquisition Manager" OR "Lead Talent Acquisition")';
  return ' (Director OR Head OR VP OR "Senior Manager" OR "Chief Talent")';
}

function buildXray() {
  const base = document.getElementById('kw').value.trim();
  const level = buildLevelBoost();
  const loc = getLocationTerms();
  const mode = document.getElementById('workMode').value;
  const visa = document.getElementById('visa').value;
  const emp = document.getElementById('empType').value;
  const fresh = document.getElementById('freshness').value;

  let modeStr = '';
  const onlyWorldwide = selectedCountries.has('worldwide') && selectedCountries.size === 1;
  if (mode === 'remote' || onlyWorldwide) modeStr = ' (remote OR "work from home" OR "work from anywhere" OR "fully remote")';
  else if (mode === 'hybrid') modeStr = ' (hybrid OR "flexible working")';
  else if (mode === 'onsite') modeStr = ' (onsite OR "on-site" OR office)';
  else if (selectedCountries.has('worldwide')) modeStr = ' (remote OR hybrid OR "work from home" OR global)';

  let visaStr = '';
  if (visa === 'sponsor' && ![...selectedCountries].every(c => c === 'india')) {
    visaStr = ' ("visa sponsorship" OR "work permit" OR sponsorship OR relocation OR "visa support" OR "eligible to work" OR "H1B" OR "skilled worker visa")';
  }

  let empStr = emp === 'fulltime' ? ' ("full time" OR "full-time" OR permanent)' : '';

  // Keep site list focused — too many site: operators often returns zero Google results
  // Direct portal buttons cover the full list; X-ray uses high-yield job boards
  const sites = [
    'site:linkedin.com/jobs',
    'site:indeed.com',
    'site:glassdoor.com',
    'site:naukri.com',
    'site:reed.co.uk',
    'site:seek.com.au',
    'site:bayt.com',
    'site:weworkremotely.com',
    'site:remoteok.com',
    'site:jobs.lever.co',
    'site:boards.greenhouse.io',
    'site:iimjobs.com',
    'site:monster.com',
    'site:ziprecruiter.com'
  ].join(' OR ');

  // Prefer open signals but do not require them (avoids zero results). Always exclude closed language.
  const closedExclude = ' -"no longer accepting" -"position filled" -"applications closed" -"this job is closed" -"no longer accepting applications" -"job closed" -"vacancy closed" -"this position has been filled" -"expired" -"archived"';

  let q = `${base}${level} ${loc}${modeStr}${visaStr}${empStr} (job OR jobs OR hiring OR vacancy OR opening) (${sites})${closedExclude}`;

  // Default to recent — reduces old/closed results dramatically
  if (fresh === 'day') q += ' after:2026-08-14';
  else if (fresh === 'week') q += ' after:2026-08-08';
  else if (fresh === 'month') q += ' after:2026-07-15';
  else q += ' after:2026-07-01'; // even "any" still prefers last ~6 weeks

  return q.replace(/\s+/g, ' ').trim();
}

function refreshXray() {
  document.getElementById('xrayBox').textContent = buildXray();
}

function copyXray() {
  navigator.clipboard.writeText(document.getElementById('xrayBox').textContent);
  alert('X-ray query copied');
}

function openGoogleXray() {
  const q = document.getElementById('xrayBox').textContent || buildXray();
  window.open('https://www.google.com/search?q=' + encodeURIComponent(q) + '&tbs=qdr:m', '_blank');
}

// Platform deep links
// User-specified LinkedIn search (Remote + Easy Apply + Mid-Senior + Full-time/Contract + Worldwide)
const LINKEDIN_AGENT_URL = 'https://www.linkedin.com/jobs/search/?keywords=Talent%20Acquisition&f_WT=2&f_AL=true&f_E=4,5&f_JT=F,C&location=Worldwide';

function openLinkedInAgent() {
  // Exact filters requested: Remote, Easy Apply, Experience 4+5 (Mid/Senior), Full-time + Contract, Worldwide
  window.open(LINKEDIN_AGENT_URL, '_blank');
}

function openLinkedIn() {
  // Default: user's proven URL. Optionally refine with app filters when not "worldwide remote only".
  const levelEl = document.getElementById('levelFocus');
  const modeEl = document.getElementById('workMode');
  const level = levelEl ? levelEl.value : 'all';
  const mode = modeEl ? modeEl.value : 'all';
  const isWorldwide = typeof selectedCountries !== 'undefined' && selectedCountries.has('worldwide');
  const onlyWorldwide = isWorldwide && selectedCountries.size === 1;

  // Prefer the agent URL when searching worldwide remote (matches your link)
  if (onlyWorldwide || mode === 'remote' || mode === 'all') {
    let url = LINKEDIN_AGENT_URL;
    // Optional keyword refinement for seniority
    if (level === 'cxo') {
      url = 'https://www.linkedin.com/jobs/search/?keywords=' + encodeURIComponent('Head of Talent Acquisition OR VP Talent Acquisition OR Chief Talent Officer') +
        '&f_WT=2&f_AL=true&f_E=5,6&f_JT=F,C&location=Worldwide&sortBy=DD';
    } else if (level === 'senior') {
      url = 'https://www.linkedin.com/jobs/search/?keywords=' + encodeURIComponent('Director Talent Acquisition OR Head of Talent Acquisition OR Senior Manager Talent Acquisition') +
        '&f_WT=2&f_AL=true&f_E=4,5&f_JT=F,C&location=Worldwide&sortBy=DD';
    }
    const fresh = document.getElementById('freshness');
    if (fresh && fresh.value === 'week') url += (url.indexOf('f_TPR') < 0 ? '&f_TPR=r604800' : '');
    else if (fresh && fresh.value === 'day') url += (url.indexOf('f_TPR') < 0 ? '&f_TPR=r86400' : '');
    window.open(url, '_blank');
    return;
  }

  let kwSimple = 'Talent Acquisition';
  if (level === 'cxo') kwSimple = 'Head of Talent Acquisition OR VP Talent Acquisition OR Chief Talent Officer';
  else if (level === 'senior') kwSimple = 'Head of Talent Acquisition OR Director Talent Acquisition';
  else if (level === 'mid') kwSimple = 'Senior Manager Talent Acquisition OR Talent Acquisition Manager';

  let wt = '2'; // remote default per your link
  if (mode === 'onsite') wt = '1';
  else if (mode === 'hybrid') wt = '3';
  else if (mode === 'remote') wt = '2';
  else wt = '2%2C3';

  let exp = '4%2C5';
  if (level === 'mid') exp = '4';
  if (level === 'senior') exp = '4%2C5';
  if (level === 'cxo') exp = '5%2C6';

  let url = 'https://www.linkedin.com/jobs/search/?keywords=' + encodeURIComponent(kwSimple) +
    '&f_E=' + exp +
    '&f_JT=F%2CC' +
    '&f_WT=' + wt +
    '&f_AL=true' +
    '&sortBy=DD';

  if (typeof selectedCountries !== 'undefined' && selectedCountries.size <= 3 && !onlyWorldwide) {
    if (selectedCountries.has('india')) url += '&location=' + encodeURIComponent('India') + '&geoId=102713980';
    else if (selectedCountries.has('usa')) url += '&location=' + encodeURIComponent('United States') + '&geoId=103644278';
    else if (selectedCountries.has('uk')) url += '&location=' + encodeURIComponent('United Kingdom') + '&geoId=101165590';
    else if (selectedCountries.has('singapore')) url += '&location=' + encodeURIComponent('Singapore') + '&geoId=102454443';
    else if (selectedCountries.has('uae')) url += '&location=' + encodeURIComponent('United Arab Emirates') + '&geoId=104305776';
    else if (selectedCountries.has('australia')) url += '&location=' + encodeURIComponent('Australia') + '&geoId=101452733';
    else if (selectedCountries.has('canada')) url += '&location=' + encodeURIComponent('Canada') + '&geoId=101174742';
    else if (selectedCountries.has('germany')) url += '&location=' + encodeURIComponent('Germany') + '&geoId=101282230';
    else url += '&location=Worldwide';
  } else {
    url += '&location=Worldwide';
  }

  const fresh = document.getElementById('freshness');
  if (fresh && fresh.value === 'week') url += '&f_TPR=r604800';
  else if (fresh && fresh.value === 'day') url += '&f_TPR=r86400';
  else if (fresh && fresh.value === 'month') url += '&f_TPR=r2592000';

  window.open(url, '_blank');
}

function openNaukri() {
  // Simple, reliable Naukri search that returns results
  window.open('https://www.naukri.com/talent-acquisition-jobs?k=talent%20acquisition&experience=10', '_blank');
}

function openIndeed() {
  const level = document.getElementById('levelFocus').value;
  let q = 'Talent Acquisition Director';
  if (level === 'cxo') q = 'Head of Talent Acquisition OR VP Talent Acquisition';
  else if (level === 'mid') q = 'Talent Acquisition Manager';
  else if (level === 'senior') q = 'Director Talent Acquisition OR Head of Talent Acquisition';

  const mode = document.getElementById('workMode').value;
  const onlyWorldwide = selectedCountries.has('worldwide') && selectedCountries.size === 1;
  if (mode === 'remote' || onlyWorldwide) q += ' remote';

  let loc = '';
  if (!onlyWorldwide && selectedCountries.size <= 3) {
    if (selectedCountries.has('india')) loc = 'India';
    else if (selectedCountries.has('usa')) loc = 'United States';
    else if (selectedCountries.has('uk')) loc = 'United Kingdom';
    else if (selectedCountries.has('singapore')) loc = 'Singapore';
    else if (selectedCountries.has('australia')) loc = 'Australia';
    else if (selectedCountries.has('uae')) loc = 'United Arab Emirates';
    else if (selectedCountries.has('canada')) loc = 'Canada';
    else if (selectedCountries.has('germany')) loc = 'Germany';
  }
  // Worldwide → empty location (global search)

  const fromage = document.getElementById('freshness').value === 'day' ? '1' :
    (document.getElementById('freshness').value === 'week' ? '7' : '14');

  let url = 'https://www.indeed.com/jobs?q=' + encodeURIComponent(q) +
    '&l=' + encodeURIComponent(loc) +
    '&fromage=' + fromage +
    '&jt=fulltime';
  if (mode === 'remote' || onlyWorldwide) url += '&sc=0kf%3Aattr(DSQF7)%3B'; // Indeed remote filter when available
  window.open(url, '_blank');
}

// Real-time meta-search aggregators — these re-crawl/re-index listings from thousands
// of other job boards and company career pages, so results refresh continuously.
function aggregatorQueryParts() {
  const level = document.getElementById('levelFocus').value;
  let q = 'Talent Acquisition Director';
  if (level === 'cxo') q = 'Head of Talent Acquisition OR VP Talent Acquisition';
  else if (level === 'mid') q = 'Talent Acquisition Manager';
  else if (level === 'senior') q = 'Director Talent Acquisition OR Head of Talent Acquisition';

  const mode = document.getElementById('workMode').value;
  const onlyWorldwide = selectedCountries.has('worldwide') && selectedCountries.size === 1;

  let loc = '';
  if (!onlyWorldwide && selectedCountries.size <= 3) {
    if (selectedCountries.has('india')) loc = 'India';
    else if (selectedCountries.has('usa')) loc = 'United States';
    else if (selectedCountries.has('uk')) loc = 'United Kingdom';
    else if (selectedCountries.has('singapore')) loc = 'Singapore';
    else if (selectedCountries.has('australia')) loc = 'Australia';
    else if (selectedCountries.has('uae')) loc = 'United Arab Emirates';
    else if (selectedCountries.has('canada')) loc = 'Canada';
    else if (selectedCountries.has('germany')) loc = 'Germany';
  }
  if (mode === 'remote' || onlyWorldwide) q += ' remote';

  return { q, loc, remote: mode === 'remote' || onlyWorldwide };
}

function openJooble() {
  const { q, loc } = aggregatorQueryParts();
  // Jooble's global meta-search — aggregates from ~70 countries' local boards
  const url = 'https://jooble.org/SearchResult?ukw=' + encodeURIComponent(q) +
    (loc ? '&rgns=' + encodeURIComponent(loc) : '');
  window.open(url, '_blank');
}

function openCareerjet() {
  const { q, loc } = aggregatorQueryParts();
  // Careerjet indexes live listings from employer sites + regional boards across 90+ countries
  const url = 'https://www.careerjet.com/search/jobs?s=' + encodeURIComponent(q) +
    (loc ? '&l=' + encodeURIComponent(loc) : '');
  window.open(url, '_blank');
}

function openAdzuna() {
  const { q, loc, remote } = aggregatorQueryParts();
  // Adzuna aggregates + adds estimated salary data and a remote filter
  let url = 'https://www.adzuna.com/search?q=' + encodeURIComponent(q);
  if (loc) url += '&loc=' + encodeURIComponent(loc);
  if (remote) url += '&remote=true';
  window.open(url, '_blank');
}

function openAllAggregators() {
  openJooble();
  setTimeout(openCareerjet, 400);
  setTimeout(openAdzuna, 800);
  setTimeout(openIndeed, 1200);
  setTimeout(openLinkedIn, 1600);
}

function openIimjobs() {
  window.open('https://www.iimjobs.com/search/talent-acquisition-0-0-1-0-1.html', '_blank');
}

function openGlassdoor() {
  window.open('https://www.glassdoor.com/Job/jobs.htm?sc.keyword=' + encodeURIComponent('Talent Acquisition Director'), '_blank');
}

function openSeek() {
  window.open('https://www.seek.com.au/jobs?keywords=Talent%20Acquisition%20Director', '_blank');
}

function openReed() {
  window.open('https://www.reed.co.uk/jobs/talent-acquisition-jobs', '_blank');
}

function openPortal(url) {
  window.open(url, '_blank');
}

function openRemoteVisa() {
  // Simpler query that actually returns results
  const q = '("Talent Acquisition" OR "Head of Talent" OR "Director Talent Acquisition") (Director OR Head OR VP OR Manager) (remote OR "visa sponsorship" OR relocation OR "work permit") (job OR jobs OR hiring) (site:linkedin.com/jobs OR site:indeed.com OR site:weworkremotely.com OR site:remoteok.com OR site:remotive.com OR site:myvisajobs.com OR site:relocate.me) -"no longer accepting" -"position filled" after:2026-07-01';
  window.open('https://www.google.com/search?q=' + encodeURIComponent(q) + '&tbs=qdr:m', '_blank');
}

function openContractXray() {
  const q = '("Talent Acquisition" OR "Head of Talent" OR "Director Talent Acquisition") (contract OR freelance OR contractor OR "contract-to-hire") (job OR jobs OR hiring) (site:linkedin.com/jobs OR site:indeed.com OR site:upwork.com OR site:toptal.com) -"no longer accepting" -"position filled" after:2026-07-01';
  window.open('https://www.google.com/search?q=' + encodeURIComponent(q) + '&tbs=qdr:m', '_blank');
}

function openAllGlobal() {
  openGoogleXray();
  setTimeout(openLinkedIn, 400);
  setTimeout(openNaukri, 800);
  setTimeout(openIndeed, 1200);
  setTimeout(openSeek, 1600);
  setTimeout(openReed, 2000);
  setTimeout(() => openPortal('https://www.bayt.com/en/international/jobs/talent-acquisition-director-jobs/'), 2400);
}

function loadTemplate(type) {
  const box = document.getElementById('templateBox');
  const templates = {
    india: `("Head of Talent Acquisition" OR "Director Talent Acquisition" OR "VP Talent Acquisition" OR "Senior Manager Talent Acquisition") (India OR Bangalore OR Bengaluru OR Hyderabad OR Pune OR Gurgaon OR Mumbai) ("full time" OR permanent) (hybrid OR remote OR onsite) (job OR jobs OR hiring)`,
    overseas: `("Talent Acquisition" OR "Head of Recruitment") (Director OR Head OR VP OR "Senior Manager") ("visa sponsorship" OR "work permit" OR sponsorship OR relocation) (Singapore OR Dubai OR "United Kingdom" OR "United States" OR Australia OR Canada OR Germany) (job OR jobs)`,
    remote: `("Talent Acquisition" OR "Head of TA") (Director OR "Senior Director" OR VP OR Head) (remote OR "work from home" OR "work from anywhere") ("full time") (job OR hiring) -intern`,
    cxo: `("Chief Talent Officer" OR "VP of Talent Acquisition" OR "Global Head of Talent" OR "Head of People Acquisition" OR "VP Talent") (job OR jobs OR hiring OR vacancy)`
  };
  box.textContent = templates[type] || '';
  document.getElementById('xrayBox').textContent = templates[type] + ' (site:linkedin.com/jobs OR site:indeed.com OR site:naukri.com OR site:glassdoor.com)';
}

// ========== DASHBOARD ==========
function getFilteredJobs() {
  const geo = document.getElementById('filterGeo').value;
  const industry = document.getElementById('filterIndustry').value;
  const level = document.getElementById('filterLevel').value;
  const mode = document.getElementById('filterMode').value;
  const minExp = parseInt(document.getElementById('filterMinExp').value, 10);
  const search = document.getElementById('filterSearch').value.toLowerCase().trim();
  return jobs.filter(j => {
    if (j.expMax < minExp) return false;
    if (geo !== 'all') {
      if (geo === 'Global' && j.geo === 'India') return false;
      else if (geo !== 'Global' && j.geo !== geo) return false;
    }
    if (industry !== 'all' && j.industry !== industry) return false;
    if (level !== 'all' && j.level !== level) return false;
    if (mode !== 'all' && j.mode !== mode) return false;
    if (search) {
      const hay = (j.title + ' ' + j.company + ' ' + j.location + ' ' + j.industry).toLowerCase();
      if (!hay.includes(search)) return false;
    }
    return true;
  });
}

function updateKPIs(f) {
  document.getElementById('kpiTotal').textContent = f.length;
  const india = f.filter(j => j.geo === 'India').length;
  document.getElementById('kpiIndia').textContent = india;
  document.getElementById('kpiGlobal').textContent = f.length - india;
  if (f.length) {
    document.getElementById('kpiExp').textContent =
      Math.round(f.reduce((s,j)=>s+j.expMin,0)/f.length) + '–' + Math.round(f.reduce((s,j)=>s+j.expMax,0)/f.length);
  } else document.getElementById('kpiExp').textContent = '—';
  const counts = {};
  f.forEach(j => counts[j.industry] = (counts[j.industry]||0)+1);
  const top = Object.entries(counts).sort((a,b)=>b[1]-a[1])[0];
  document.getElementById('kpiIndustry').textContent = top ? top[0].split(' / ')[0] : '—';
}

function updateTable(f) {
  const tbody = document.getElementById('jobTableBody');
  const empty = document.getElementById('emptyState');
  document.getElementById('tableCount').textContent = f.length;
  if (!f.length) { tbody.innerHTML = ''; empty.style.display = 'block'; return; }
  empty.style.display = 'none';
  tbody.innerHTML = f.map(j => {
    const lc = j.level==='CXO'?'badge-cxo':(j.level==='Senior'?'badge-senior':'badge-mid');
    const mc = j.mode==='Remote'?'badge-remote':(j.mode==='Hybrid'?'badge-hybrid':'badge-onsite');
    return `<tr>
      <td><div class="role-title">${j.title}</div></td>
      <td><div>${j.company}</div><div class="company">${j.source}</div></td>
      <td>${j.location}</td>
      <td>${j.expMin}–${j.expMax}</td>
      <td><span class="badge ${mc}">${j.mode}</span></td>
      <td><span class="badge ${lc}">${j.level}</span></td>
      <td><span class="badge ${j.geo==='India'?'badge-india':'badge-global'}">${j.geo}</span></td>
      <td class="actions">
        <a class="link-btn" href="${j.url}" target="_blank">View</a>
        <button class="action-btn tailor" onclick='tailorForJob(${JSON.stringify(j).replace(/'/g,"&#39;")})'>Update & Apply</button>
      </td>
    </tr>`;
  }).join('');
}

function updateCharts(f) {
  const indCounts = {}, geoCounts = {};
  f.forEach(j => { indCounts[j.industry]=(indCounts[j.industry]||0)+1; geoCounts[j.geo]=(geoCounts[j.geo]||0)+1; });
  const indLabels = Object.keys(indCounts).sort((a,b)=>indCounts[b]-indCounts[a]);
  const colors = ['#38bdf8','#818cf8','#34d399','#fbbf24','#f87171','#a78bfa','#2dd4bf','#fb923c'];
  if (industryChart) industryChart.destroy();
  industryChart = new Chart(document.getElementById('chartIndustry'), {
    type:'bar', data:{ labels:indLabels.map(l=>l.length>18?l.slice(0,16)+'…':l), datasets:[{data:indLabels.map(l=>indCounts[l]), backgroundColor:colors, borderRadius:6}] },
    options:{ indexAxis:'y', responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}},
      scales:{ x:{grid:{color:'#334155'},ticks:{color:'#94a3b8'}}, y:{grid:{display:false},ticks:{color:'#94a3b8',font:{size:10}}} } }
  });
  if (geoChart) geoChart.destroy();
  geoChart = new Chart(document.getElementById('chartGeo'), {
    type:'doughnut', data:{ labels:Object.keys(geoCounts), datasets:[{data:Object.values(geoCounts), backgroundColor:colors, borderWidth:0}] },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'right',labels:{color:'#94a3b8',boxWidth:11}}} }
  });
}

function populateIndustryFilter() {
  const s = document.getElementById('filterIndustry');
  [...new Set(jobs.map(j=>j.industry))].sort().forEach(ind => {
    const o = document.createElement('option'); o.value = ind; o.textContent = ind; s.appendChild(o);
  });
}

function applyFilters() {
  const f = getFilteredJobs();
  updateKPIs(f); updateTable(f); updateCharts(f);
}
function resetFilters() {
  document.getElementById('filterGeo').value='all';
  document.getElementById('filterIndustry').value='all';
  document.getElementById('filterLevel').value='all';
  document.getElementById('filterMode').value='all';
  document.getElementById('filterMinExp').value=12;
  document.getElementById('minExpLabel').textContent='12';
  document.getElementById('filterSearch').value='';
  applyFilters();
}
document.getElementById('filterMinExp').addEventListener('input', e => {
  document.getElementById('minExpLabel').textContent = e.target.value;
});

// ========== TAILOR + ATS + DOC/PDF ==========
const TA_KEYWORDS = [
  'talent acquisition','recruitment','hiring','sourcing','executive search','leadership hiring',
  'full-cycle recruitment','end-to-end recruitment','stakeholder management','workforce planning',
  'employer branding','ATS','applicant tracking','Boolean search','LinkedIn Recruiter',
  'diversity hiring','volume hiring','bulk hiring','talent pipeline','offer management',
  'candidate experience','TA strategy','RPO','global mobility','visa sponsorship','relocation',
  'hybrid workforce','talent analytics','time-to-fill','quality of hire','headhunting','talent mapping',
  'succession planning','campus hiring','lateral hiring','recruiter management','people strategy'
];

let lastTailoredText = '';
let lastAtsScore = 0;

function extractKeywords(text) {
  const lower = text.toLowerCase();
  const found = TA_KEYWORDS.filter(kw => lower.includes(kw.toLowerCase()));
  // also pull strong phrases from JD
  const phrases = (text.match(/\b([A-Za-z][A-Za-z\-]+(?:\s+[A-Za-z][A-Za-z\-]+){1,3})\b/g) || [])
    .filter(p => p.length > 8 && /talent|recruit|hir|sourc|stake|pipeline|brand|ATS|Boolean|diversity|workforce|leader/i.test(p));
  return [...new Set([...found, ...phrases.map(p => p.toLowerCase())])].slice(0, 18);
}

function calcAtsScore(jdKws, resumeText, tailoredText) {
  const resumeLower = (resumeText || '').toLowerCase();
  const tailoredLower = (tailoredText || resumeText || '').toLowerCase();
  if (!jdKws.length) return { score: 55, tips: 'Add more detail from the JD for a better score.' };

  let hits = 0;
  jdKws.forEach(k => { if (tailoredLower.includes(k.toLowerCase())) hits++; });
  const coverage = hits / jdKws.length;

  // Structure bonuses (ATS prefers clear headings, bullets, metrics)
  let structure = 0;
  if (/summary|profile|objective/i.test(tailoredText)) structure += 5;
  if (/experience|professional experience/i.test(tailoredText)) structure += 5;
  if (/skills|competenc/i.test(tailoredText)) structure += 5;
  if (/\d+%|\d+\+|reduced|improved|led|built|delivered/i.test(tailoredText)) structure += 8;
  if (tailoredText.split('\n').filter(l => l.trim().startsWith('•') || l.trim().startsWith('-')).length >= 4) structure += 7;

  let score = Math.round(coverage * 70 + structure);
  score = Math.min(98, Math.max(28, score));

  let tips = '';
  if (score >= 85) tips = 'Strong match. Mirror a few more exact phrases from the JD in your summary if possible.';
  else if (score >= 70) tips = 'Good base. Add 2–3 missing keywords naturally into impact bullets and quantify results.';
  else tips = 'Below target. Integrate missing keywords using the job’s exact language and add measurable outcomes.';

  return { score, tips, coverage: Math.round(coverage * 100) };
}

function naturalBullets(missing, jd) {
  const bullets = [];
  const hasGlobal = /global|apac|emea|multi.?geo|international/i.test(jd);
  const hasVisa = /visa|sponsor|relocation|work permit/i.test(jd);
  const hasLeader = /leadership|director|head|vp|cxo|team/i.test(jd);
  const hasVolume = /volume|bulk|scale|high.?growth/i.test(jd);

  if (missing.some(m => /talent acquisition|recruitment|hiring/i.test(m))) {
    bullets.push('• Directed end-to-end talent acquisition strategy aligned to business priorities, improving time-to-fill and quality-of-hire outcomes across priority roles.');
  }
  if (missing.some(m => /stakeholder|workforce planning|TA strategy/i.test(m)) || hasLeader) {
    bullets.push('• Partnered with senior stakeholders on workforce planning and leadership hiring, translating headcount plans into executable search strategies.');
  }
  if (missing.some(m => /Boolean|LinkedIn Recruiter|sourcing|talent mapping|headhunting/i.test(m))) {
    bullets.push('• Applied advanced sourcing (Boolean search, LinkedIn Recruiter, talent mapping) to build high-quality pipelines for niche and leadership roles.');
  }
  if (missing.some(m => /employer branding|candidate experience|diversity/i.test(m))) {
    bullets.push('• Strengthened employer branding and candidate experience while driving diversity hiring goals and inclusive assessment practices.');
  }
  if (missing.some(m => /ATS|applicant tracking|talent analytics|time-to-fill|quality of hire/i.test(m))) {
    bullets.push('• Optimised ATS workflows and talent analytics (time-to-fill, quality of hire, conversion) to increase recruiter productivity and hiring manager satisfaction.');
  }
  if (hasGlobal) {
    bullets.push('• Supported multi-geo / global hiring programmes across hybrid and remote models, coordinating with regional stakeholders and external partners.');
  }
  if (hasVisa) {
    bullets.push('• Managed global mobility considerations including visa sponsorship guidance and relocation support for critical cross-border hires.');
  }
  if (hasVolume) {
    bullets.push('• Scaled volume and critical hiring programmes during high-growth phases while maintaining quality standards and stakeholder alignment.');
  }
  if (bullets.length < 3) {
    bullets.push('• Built and coached high-performing talent acquisition teams focused on full-cycle recruitment excellence and continuous process improvement.');
  }
  return bullets.slice(0, 6);
}

function analyzeAndTailor() {
  const jd = document.getElementById('jdText').value.trim();
  const resume = document.getElementById('resumeText').value.trim();
  if (!jd) { alert('Paste a Job Description from an open role first.'); return; }

  const jdKws = extractKeywords(jd);
  const resumeLower = resume.toLowerCase();
  const present = [], missing = [];
  jdKws.forEach(k => (resumeLower.includes(k.toLowerCase()) ? present : missing).push(k));

  const chips = document.getElementById('keywordChips');
  chips.innerHTML = '';
  present.forEach(k => { const s = document.createElement('span'); s.className = 'chip present'; s.textContent = '✓ ' + k; chips.appendChild(s); });
  missing.forEach(k => { const s = document.createElement('span'); s.className = 'chip missing'; s.textContent = '+ ' + k; chips.appendChild(s); });
  document.getElementById('keywordSection').style.display = 'block';

  // Build natural tailored version
  let tailored = '';
  if (resume) {
    tailored = resume.trim() + '\n\n';
  } else {
    tailored = 'PROFESSIONAL SUMMARY\nResults-driven Talent Acquisition leader with progressive experience building scalable hiring engines, partnering with senior stakeholders, and delivering against time-to-fill and quality-of-hire goals.\n\n';
  }

  if (missing.length) {
    tailored += 'CORE COMPETENCIES\n';
    tailored += missing.slice(0, 10).map(m => m.replace(/\b\w/g, c => c.toUpperCase())).join('  ·  ') + '\n\n';
    tailored += 'KEY ACHIEVEMENTS\n';
    tailored += naturalBullets(missing, jd).join('\n') + '\n';
  } else {
    tailored += '\n';
  }

  lastTailoredText = tailored;
  document.getElementById('tailoredOutput').textContent = tailored;
  document.getElementById('tailoredSection').style.display = 'block';

  // ATS score on the *tailored* version
  const ats = calcAtsScore(jdKws, resume, tailored);
  lastAtsScore = ats.score;
  document.getElementById('atsScoreBox').style.display = 'block';
  document.getElementById('atsScoreValue').textContent = ats.score + '%';
  document.getElementById('atsScoreFill').style.width = ats.score + '%';
  document.getElementById('atsScoreLabel').textContent = ats.score >= 85 ? 'Excellent fit' : (ats.score >= 70 ? 'Good – refine further' : 'Needs more alignment');
  document.getElementById('atsTips').textContent = ats.tips + ' · Keyword coverage ≈ ' + ats.coverage + '%';

  if (pendingJob?.url) document.getElementById('applyBtn').style.display = 'inline-flex';
}

function copyTailored() {
  const t = lastTailoredText || document.getElementById('tailoredOutput').textContent;
  if (!t) { alert('Run Analyze & Tailor first.'); return; }
  navigator.clipboard.writeText(t);
  alert('Tailored text copied.');
}

function downloadPDF() {
  const text = lastTailoredText || document.getElementById('tailoredOutput').textContent;
  if (!text) { alert('Run Analyze & Tailor first.'); return; }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const margin = 48;
  const pageWidth = doc.internal.pageSize.getWidth();
  const maxWidth = pageWidth - margin * 2;
  let y = margin;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('Talent Acquisition Leader', margin, y);
  y += 22;
  doc.setTextColor(20);
  doc.setFontSize(10);

  const lines = doc.splitTextToSize(text, maxWidth);
  lines.forEach(line => {
    if (y > doc.internal.pageSize.getHeight() - margin) {
      doc.addPage();
      y = margin;
    }
    // bold-ish for section headers
    if (/^(PROFESSIONAL|CORE COMPETENCIES|KEY ACHIEVEMENTS|EXPERIENCE|SUMMARY|SKILLS)/i.test(line.trim())) {
      doc.setFont('helvetica', 'bold');
    } else {
      doc.setFont('helvetica', 'normal');
    }
    doc.text(line, margin, y);
    y += 13;
  });

  doc.save('Resume_Talent_Acquisition.pdf');
}

function downloadDOCX() {
  const text = lastTailoredText || document.getElementById('tailoredOutput').textContent;
  if (!text) { alert('Run Analyze & Tailor first.'); return; }

  // Prefer docx library if available
  if (window.docx && window.docx.Document) {
    const { Document, Packer, Paragraph, TextRun, HeadingLevel } = window.docx;
    const paras = text.split('\n').map(line => {
      const isHead = /^(PROFESSIONAL|CORE COMPETENCIES|KEY ACHIEVEMENTS|EXPERIENCE|SUMMARY|SKILLS|EDUCATION)/i.test(line.trim());
      return new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({
          text: line || ' ',
          bold: isHead,
          size: isHead ? 24 : 20,
          font: 'Calibri'
        })]
      });
    });
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [new TextRun({ text: 'Talent Acquisition Leader', bold: true, size: 28 })]
          }),
          new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: ' ', size: 18 })] }),
          ...paras
        ]
      }]
    });
    Packer.toBlob(doc).then(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'Resume_Talent_Acquisition.docx';
      a.click();
    });
    return;
  }

  // Fallback: simple HTML Word-compatible download
  const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word">
  <head><meta charset="utf-8"><title>Resume</title>
  <style>body{font-family:Calibri,Arial,sans-serif;font-size:11pt;line-height:1.35;margin:1in}
  h1{font-size:16pt}</style></head>
  <body>
  <h1>Talent Acquisition Leader</h1>
  <pre style="white-space:pre-wrap;font-family:Calibri,Arial,sans-serif;font-size:11pt">${text.replace(/</g,'&lt;')}</pre>
  </body></html>`;
  const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Resume_Talent_Acquisition.doc';
  a.click();
}

function openApplyLink() {
  if (pendingJob?.url) {
    if (confirm('Confirm this role is still OPEN / Actively Hiring on the source page, then continue?')) {
      window.open(pendingJob.url, '_blank');
    }
  } else alert('Select a job from the Dashboard first, or open the Google/LinkedIn result and apply only if status is open.');
}

function tailorForJob(job) {
  pendingJob = job;
  document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelector('[data-tab="tailor"]').classList.add('active');
  document.getElementById('panel-tailor').classList.add('active');
  document.getElementById('pendingApply').innerHTML = `<strong>${job.title}</strong> at ${job.company}<br>
    <span style="color:var(--muted)">${job.location} · ${job.level} · ${job.mode}</span><br>
    <a href="${job.url}" target="_blank" class="link-btn">Open original posting (check status) →</a>`;
  document.getElementById('jdText').value = `Job Title: ${job.title}\nCompany: ${job.company}\nLocation: ${job.location}\nExperience: ${job.expMin}–${job.expMax} years\nLevel: ${job.level}\nWork Mode: ${job.mode}\nIndustry: ${job.industry}\n\n(Paste the FULL job description from an OPEN posting for best results.)`;
  document.getElementById('applyBtn').style.display = 'inline-flex';
}

// ========== COUNTRY-SPECIFIC RESUME BUILDER (enhanced) ==========
let lastCountryResume = { text: '', html: '', meta: {}, coverText: '', emailSubject: '', emailBody: '' };
let uploadedPhotoDataUrl = null;
const RESUME_STORAGE_KEY = 'ta_country_resumes_v2';

// Safe storage: localStorage throws in sandboxed docs (no allow-same-origin). Memory fallback.
const _memStore = {};
function storageAvailable() {
  try {
    const k = '__ta_storage_test__';
    window.localStorage.setItem(k, '1');
    window.localStorage.removeItem(k);
    return true;
  } catch (e) {
    return false;
  }
}
const _useLS = storageAvailable();
function safeGet(key, fallback) {
  try {
    if (_useLS) {
      const v = window.localStorage.getItem(key);
      return v == null ? fallback : v;
    }
  } catch (e) {}
  return Object.prototype.hasOwnProperty.call(_memStore, key) ? _memStore[key] : fallback;
}
function safeSet(key, value) {
  try {
    if (_useLS) {
      window.localStorage.setItem(key, value);
      return true;
    }
  } catch (e) {}
  _memStore[key] = value;
  return false;
}

const FORMAT_HINTS = {
  india: 'India (modern corporate): reverse-chronological, NO photo, NO DOB/marital/father name, city only, quantified bullets, 1–2 pages. Drop traditional biodata.',
  usa: 'USA: 1–2 pages, NO photo, NO age/marital/nationality. Summary + achievement metrics. ATS-friendly single column.',
  uk: 'UK CV: ~2 pages, NO photo. Personal Statement (4–6 lines). Right-to-work line optional. British spelling preferred.',
  germany: 'Germany (Lebenslauf): formal, 2–3 pages common. Photo still often expected. DOB/nationality sometimes included. Clear education block. Cover letter (Anschreiben) strongly expected.',
  france: 'France: formal CV, photo optional, 1–2 pages. Cover letter (lettre de motivation) commonly expected.',
  netherlands: 'Netherlands: professional CV, usually no photo, 1–2 pages. Direct and achievement-focused.',
  singapore: 'Singapore / APAC: professional A4, concise, English, photo usually not required for corporate roles.',
  australia: 'Australia: CV, no photo, 2–3 pages acceptable for senior roles, achievement-focused.',
  uae: 'UAE / Gulf: photo often welcome, availability/notice period useful, nationality/visa status helpful. English primary.',
  canada: 'Canada: similar to USA — no photo, no personal data, metrics, 1–2 pages.',
  japan: 'Japan (English applications): clean professional format; photo optional depending on employer; polite tone.',
  global: 'Global / Remote neutral ATS: no photo, no personal data, strong keywords, metrics, 1–2 pages.'
};

const COVER_EXPECTED = new Set(['germany', 'france']); // strongly expected
const PHOTO_DEFAULT_YES = new Set(['germany', 'uae', 'france', 'japan']);

function updateResumeHints() {
  const c = document.getElementById('resumeCountry').value;
  document.getElementById('resumeFormatHint').textContent = FORMAT_HINTS[c] || '';
  const coverHint = document.getElementById('coverLetterHint');
  if (COVER_EXPECTED.has(c)) {
    coverHint.textContent = 'Cover letter is commonly expected in this market — it will be generated unless you set Cover letter = Never.';
  } else {
    coverHint.textContent = 'Cover letter is optional here; set “Always generate” if the posting asks for one.';
  }
}

function shouldIncludePhoto() {
  const mode = document.getElementById('resumePhoto').value;
  const c = document.getElementById('resumeCountry').value;
  if (mode === 'yes') return true;
  if (mode === 'no') return false;
  return PHOTO_DEFAULT_YES.has(c);
}

function shouldGenerateCover() {
  const mode = document.getElementById('resumeCover').value;
  const c = document.getElementById('resumeCountry').value;
  if (mode === 'yes') return true;
  if (mode === 'no') return false;
  return COVER_EXPECTED.has(c);
}

// Localized section headings
function sectionTitle(lang, country, key) {
  const tables = {
    en: {
      summary: country === 'uk' ? 'PERSONAL STATEMENT' : (country === 'germany' ? 'PROFILE' : 'PROFESSIONAL SUMMARY'),
      experience: country === 'usa' || country === 'canada' ? 'EXPERIENCE' : 'PROFESSIONAL EXPERIENCE',
      skills: country === 'uk' ? 'KEY SKILLS' : (country === 'india' ? 'CORE COMPETENCIES' : 'SKILLS'),
      education: 'EDUCATION',
      personal: 'PERSONAL DETAILS'
    },
    de: {
      summary: 'PROFIL',
      experience: 'BERUFSERFAHRUNG',
      skills: 'KOMPETENZEN',
      education: 'AUSBILDUNG',
      personal: 'PERSÖNLICHE DATEN'
    },
    fr: {
      summary: 'PROFIL',
      experience: 'EXPÉRIENCE PROFESSIONNELLE',
      skills: 'COMPÉTENCES',
      education: 'FORMATION',
      personal: 'INFORMATIONS PERSONNELLES'
    },
    nl: {
      summary: 'PROFIEL',
      experience: 'WERKERVARING',
      skills: 'VAARDIGHEDEN',
      education: 'OPLEIDING',
      personal: 'PERSOONLIJKE GEGEVENS'
    }
  };
  const langKey = (lang === 'de' || lang === 'fr' || lang === 'nl') ? lang : 'en';
  const t = tables[langKey];
  return t[key] || key.toUpperCase();
}

function applySpelling(text, lang) {
  if (!text) return text;
  if (lang === 'en-uk') {
    return text.replace(/\borganization\b/gi, 'organisation')
      .replace(/\boptimize\b/gi, 'optimise').replace(/\boptimized\b/gi, 'optimised')
      .replace(/\bfavor\b/gi, 'favour').replace(/\bcenter\b/gi, 'centre');
  }
  return text;
}

// ----- Upload handlers -----
function handlePhotoUpload(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    uploadedPhotoDataUrl = reader.result;
    document.getElementById('photoPreview').src = uploadedPhotoDataUrl;
    document.getElementById('photoPreviewWrap').style.display = 'flex';
    document.getElementById('photoPreviewWrap').style.alignItems = 'center';
  };
  reader.readAsDataURL(file);
}
function clearPhoto() {
  uploadedPhotoDataUrl = null;
  document.getElementById('photoUpload').value = '';
  document.getElementById('photoPreviewWrap').style.display = 'none';
}

function handleResumeFileUpload(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    document.getElementById('rawResumeImport').value = reader.result;
    extractFromResumeText();
  };
  reader.readAsText(file);
}

function extractFromResumeText() {
  const raw = (document.getElementById('rawResumeImport').value || '').trim();
  if (!raw) { alert('Paste or upload resume text first.'); return; }
  const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

  // Name: first substantial line without @ or http
  let name = lines.find(l => l.length > 2 && l.length < 60 && !/@/.test(l) && !/http/i.test(l) && !/summary|experience|education|skills|phone|mobile/i.test(l));
  if (name) document.getElementById('rName').value = name.replace(/[^a-zA-Z\s.'-]/g, '').trim();

  // Email
  const emailMatch = raw.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  if (emailMatch) document.getElementById('rEmail').value = emailMatch[0];

  // Phone
  const phoneMatch = raw.match(/(\+?\d[\d\s().-]{8,}\d)/);
  if (phoneMatch) document.getElementById('rPhone').value = phoneMatch[1].trim();

  // LinkedIn
  const liMatch = raw.match(/(linkedin\.com\/in\/[A-Za-z0-9_-]+)/i);
  if (liMatch) document.getElementById('rLinkedIn').value = liMatch[1];

  // Location heuristic
  const locMatch = raw.match(/\b([A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+)?)\s*,\s*(India|USA|United States|UK|United Kingdom|Singapore|UAE|Dubai|Germany|France|Australia|Canada|Netherlands)\b/i);
  if (locMatch) document.getElementById('rLocation').value = locMatch[0];

  // Section extraction
  const lower = raw.toLowerCase();
  function sliceSection(starts, ends) {
    let startIdx = -1;
    for (const s of starts) {
      const i = lower.indexOf(s);
      if (i >= 0 && (startIdx < 0 || i < startIdx)) startIdx = i;
    }
    if (startIdx < 0) return '';
    let endIdx = raw.length;
    for (const e of ends) {
      const i = lower.indexOf(e, startIdx + 3);
      if (i > startIdx && i < endIdx) endIdx = i;
    }
    return raw.slice(startIdx, endIdx).replace(/^[^\n]*\n/, '').trim();
  }

  const summary = sliceSection(['professional summary', 'summary', 'profile', 'personal statement', 'objective'],
    ['experience', 'professional experience', 'work experience', 'employment', 'skills', 'education']);
  if (summary && summary.length > 30) document.getElementById('rSummary').value = summary.slice(0, 1200);

  const exp = sliceSection(['professional experience', 'work experience', 'experience', 'employment history'],
    ['education', 'skills', 'core competencies', 'certifications', 'languages']);
  if (exp && exp.length > 40) document.getElementById('rExperience').value = exp.slice(0, 4000);

  const skills = sliceSection(['skills', 'core competencies', 'key skills', 'technical skills'],
    ['education', 'experience', 'certifications', 'languages', 'interests']);
  if (skills && skills.length > 10) document.getElementById('rSkills').value = skills.replace(/\n+/g, ', ').slice(0, 800);

  const edu = sliceSection(['education', 'academic', 'qualifications'],
    ['skills', 'experience', 'certifications', 'languages', 'interests', 'references']);
  if (edu && edu.length > 10) document.getElementById('rEducation').value = edu.slice(0, 800);

  // Title heuristic from headline lines
  const titleLine = lines.find(l => /talent acquisition|recruitment|head of|director|vp |chief talent/i.test(l) && l.length < 80);
  if (titleLine && !/experience|summary/i.test(titleLine)) document.getElementById('rTitle').value = titleLine;

  alert('Extracted available fields from your resume. Review and edit before generating.');
}

function formatSkillsList(skills) {
  if (!skills) return [];
  return skills.split(/[,;\n|•·]+/).map(s => s.trim()).filter(s => s.length > 1);
}

function formatExperienceBlocks(experience) {
  // Split experience into role blocks for clean layout
  if (!experience) return [];
  const raw = experience.replace(/\r\n/g, '\n').trim();
  // Split on blank lines or lines that look like role headers (contain | or year patterns)
  const chunks = raw.split(/\n\s*\n+/).map(c => c.trim()).filter(Boolean);
  if (chunks.length <= 1) {
    // Try splitting by lines that look like job headers
    const lines = raw.split('\n');
    const blocks = [];
    let cur = [];
    lines.forEach(line => {
      const isHeader = (/\|/.test(line) || /\b(20\d{2}|19\d{2})\b/.test(line)) && !/^[•\-\*]/.test(line.trim()) && line.length < 120;
      if (isHeader && cur.length) {
        blocks.push(cur.join('\n'));
        cur = [line];
      } else {
        cur.push(line);
      }
    });
    if (cur.length) blocks.push(cur.join('\n'));
    return blocks.length ? blocks : [raw];
  }
  return chunks;
}

function generateCountryResume() {
  const country = document.getElementById('resumeCountry').value;
  const style = document.getElementById('resumeStyle').value;
  const lang = document.getElementById('resumeLang').value;
  const usePhoto = shouldIncludePhoto();
  const name = (document.getElementById('rName').value || 'Your Name').trim();
  const title = (document.getElementById('rTitle').value || 'Talent Acquisition Leader').trim();
  const location = (document.getElementById('rLocation').value || '').trim();
  const phone = (document.getElementById('rPhone').value || '').trim();
  const email = (document.getElementById('rEmail').value || '').trim();
  const linkedin = (document.getElementById('rLinkedIn').value || '').trim();
  const nationality = (document.getElementById('rNationality').value || '').trim();
  const dob = (document.getElementById('rDob').value || '').trim();
  let summary = applySpelling((document.getElementById('rSummary').value || '').trim(), lang);
  let experience = applySpelling((document.getElementById('rExperience').value || '').trim(), lang);
  let skills = applySpelling((document.getElementById('rSkills').value || '').trim(), lang);
  let education = applySpelling((document.getElementById('rEducation').value || '').trim(), lang);

  if (!summary) {
    summary = 'Results-driven Talent Acquisition leader with progressive experience building scalable hiring engines, partnering with senior stakeholders, and delivering against time-to-fill and quality-of-hire goals.';
  }

  const skillArr = formatSkillsList(skills);
  const skillLine = skillArr.join('  ·  ');
  const expBlocks = formatExperienceBlocks(experience);
  const contactParts = [location, phone, email, linkedin].filter(Boolean);

  // ---- Plain text (Word/PDF friendly, organised) ----
  let text = '';
  text += name.toUpperCase() + '\n';
  text += title + '\n';
  if (contactParts.length) text += contactParts.join('  |  ') + '\n';
  if ((country === 'uae' || country === 'germany') && nationality) text += 'Nationality / Status: ' + nationality + '\n';
  if (country === 'germany' && dob) text += 'Date of birth: ' + dob + '\n';
  if (country === 'uae') text += 'Availability: Immediate / Notice period as per contract\n';
  text += '\n' + '─'.repeat(42) + '\n';
  text += sectionTitle(lang, country, 'summary') + '\n';
  text += summary + '\n\n';
  text += sectionTitle(lang, country, 'experience') + '\n';
  if (expBlocks.length) {
    expBlocks.forEach((b, i) => {
      text += b.trim() + '\n';
      if (i < expBlocks.length - 1) text += '\n';
    });
  } else {
    text += 'Add your roles with company, title, dates and impact bullets.\n';
  }
  text += '\n';
  if (skillArr.length) {
    text += sectionTitle(lang, country, 'skills') + '\n';
    text += skillLine + '\n\n';
  }
  if (education) {
    text += sectionTitle(lang, country, 'education') + '\n';
    text += education + '\n';
  }

  // ---- Style tokens ----
  const styles = {
    executive: { accent: '#1e3a5f', font: '"Inter", Calibri, Arial, sans-serif', nameSize: '22px', bodySize: '10.5pt', headSize: '10pt', pad: '28px 32px', border: '3px solid #1e3a5f' },
    modern:    { accent: '#0369a1', font: '"Inter", Calibri, Arial, sans-serif', nameSize: '20px', bodySize: '10.5pt', headSize: '9.5pt', pad: '26px 30px', border: '2px solid #0369a1' },
    classic:   { accent: '#1c1917', font: 'Georgia, "Times New Roman", serif', nameSize: '20px', bodySize: '11pt', headSize: '10pt', pad: '28px 32px', border: '1px solid #1c1917' },
    'two-column': { accent: '#0f766e', font: '"Inter", Calibri, Arial, sans-serif', nameSize: '19px', bodySize: '10pt', headSize: '9pt', pad: '22px 24px', border: '2px solid #0f766e' },
    minimal:   { accent: '#334155', font: '"Inter", Calibri, Arial, sans-serif', nameSize: '18px', bodySize: '10.5pt', headSize: '9pt', pad: '32px 36px', border: 'none' },
    compact:   { accent: '#1e293b', font: '"Inter", Calibri, Arial, sans-serif', nameSize: '17px', bodySize: '9.5pt', headSize: '9pt', pad: '18px 22px', border: '1px solid #1e293b' }
  };
  const st = styles[style] || styles.modern;

  // ---- HTML professional layouts ----
  let html = '';
  const photoHtml = usePhoto
    ? (uploadedPhotoDataUrl
      ? `<img src="${uploadedPhotoDataUrl}" alt="Photo" style="width:70px;height:88px;object-fit:cover;border:1px solid #cbd5e1;border-radius:3px">`
      : `<div style="width:70px;height:88px;border:1px solid #cbd5e1;background:#f8fafc;display:flex;align-items:center;justify-content:center;font-size:10px;color:#94a3b8">Photo</div>`)
    : '';

  const sectionHead = (label) =>
    `<div style="font-size:${st.headSize};font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${st.accent};border-bottom:1px solid #e2e8f0;padding-bottom:3px;margin:14px 0 8px">${escapeHtml(label)}</div>`;

  const expHtml = expBlocks.length
    ? expBlocks.map(b => {
        const lines = b.split('\n');
        const header = lines[0] || '';
        const rest = lines.slice(1).join('\n');
        return `<div style="margin-bottom:10px">
          <div style="font-weight:600;font-size:${st.bodySize};color:#0f172a">${escapeHtml(header)}</div>
          <div style="font-size:${st.bodySize};color:#334155;white-space:pre-wrap;line-height:1.45;margin-top:3px">${escapeHtml(rest)}</div>
        </div>`;
      }).join('')
    : `<div style="font-size:${st.bodySize};color:#64748b">Add company | role | dates and impact bullets.</div>`;

  const skillsHtml = skillArr.length
    ? (style === 'two-column'
      ? skillArr.map(s => `<div style="font-size:9.5pt;padding:2px 0;border-bottom:1px solid #f1f5f9">• ${escapeHtml(s)}</div>`).join('')
      : `<div style="font-size:${st.bodySize};line-height:1.55;color:#334155">${escapeHtml(skillArr.join('  ·  '))}</div>`)
    : '';

  if (style === 'two-column') {
    // Sidebar layout
    html = `<div style="font-family:${st.font};color:#0f172a;max-width:780px;margin:0 auto;display:grid;grid-template-columns:220px 1fr;min-height:400px;background:#fff">
      <aside style="background:#0f766e;color:#fff;padding:22px 16px">
        ${photoHtml ? `<div style="margin-bottom:14px">${photoHtml.replace('border:1px solid #cbd5e1', 'border:2px solid rgba(255,255,255,0.4)')}</div>` : ''}
        <div style="font-size:11pt;font-weight:700;margin-bottom:4px">${escapeHtml(name)}</div>
        <div style="font-size:9pt;opacity:0.9;margin-bottom:12px">${escapeHtml(title)}</div>
        <div style="font-size:8.5pt;line-height:1.6;opacity:0.95">${contactParts.map(c => escapeHtml(c)).join('<br>')}</div>
        ${(country === 'germany' || country === 'uae') && nationality ? `<div style="font-size:8.5pt;margin-top:8px;opacity:0.9">${escapeHtml(nationality)}</div>` : ''}
        ${skillArr.length ? `<div style="margin-top:18px;font-size:9pt;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,0.3);padding-bottom:4px;margin-bottom:8px">${escapeHtml(sectionTitle(lang, country, 'skills'))}</div>${skillArr.map(s => `<div style="font-size:8.5pt;padding:2px 0">• ${escapeHtml(s)}</div>`).join('')}` : ''}
        ${education ? `<div style="margin-top:16px;font-size:9pt;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,0.3);padding-bottom:4px;margin-bottom:8px">${escapeHtml(sectionTitle(lang, country, 'education'))}</div><div style="font-size:8.5pt;white-space:pre-wrap;line-height:1.4">${escapeHtml(education)}</div>` : ''}
      </aside>
      <main style="padding:22px 24px">
        ${sectionHead(sectionTitle(lang, country, 'summary'))}
        <div style="font-size:${st.bodySize};line-height:1.5;color:#334155">${escapeHtml(summary)}</div>
        ${sectionHead(sectionTitle(lang, country, 'experience'))}
        ${expHtml}
      </main>
    </div>`;
  } else {
    // Single-column professional layouts
    html = `<div style="font-family:${st.font};color:#0f172a;max-width:720px;margin:0 auto;padding:${st.pad};background:#fff;font-size:${st.bodySize}">`;
    html += `<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;border-bottom:${st.border};padding-bottom:12px;margin-bottom:4px">`;
    html += `<div style="flex:1">
      <div style="font-size:${st.nameSize};font-weight:700;letter-spacing:0.02em;color:${st.accent};line-height:1.2">${escapeHtml(name)}</div>
      <div style="font-size:11.5pt;font-weight:600;margin-top:3px;color:#1e293b">${escapeHtml(title)}</div>
      <div style="font-size:9.5pt;color:#475569;margin-top:5px;line-height:1.45">${escapeHtml(contactParts.join('  ·  '))}</div>`;
    if ((country === 'germany' || country === 'uae') && nationality) html += `<div style="font-size:9pt;color:#64748b;margin-top:2px">${escapeHtml(nationality)}</div>`;
    if (country === 'germany' && dob) html += `<div style="font-size:9pt;color:#64748b">Date of birth: ${escapeHtml(dob)}</div>`;
    if (country === 'uae') html += `<div style="font-size:9pt;color:#64748b">Availability: Immediate / Notice period as per contract</div>`;
    html += `</div>`;
    if (photoHtml) html += `<div>${photoHtml}</div>`;
    html += `</div>`;

    html += sectionHead(sectionTitle(lang, country, 'summary'));
    html += `<div style="line-height:1.5;color:#334155;margin-bottom:4px">${escapeHtml(summary)}</div>`;

    html += sectionHead(sectionTitle(lang, country, 'experience'));
    html += expHtml;

    if (skillArr.length && style !== 'two-column') {
      html += sectionHead(sectionTitle(lang, country, 'skills'));
      html += skillsHtml;
    }
    if (education && style !== 'two-column') {
      html += sectionHead(sectionTitle(lang, country, 'education'));
      html += `<div style="line-height:1.45;color:#334155;white-space:pre-wrap">${escapeHtml(education)}</div>`;
    }
    html += `</div>`;
  }

  lastCountryResume.text = text;
  lastCountryResume.html = html;
  lastCountryResume.meta = { country, style, lang, photo: usePhoto, name, title, created: new Date().toISOString() };
  document.getElementById('resumePreview').innerHTML = html;

  if (shouldGenerateCover()) {
    const cover = buildCoverLetter({ name, title, country, lang, summary, experience, jd: document.getElementById('rJdContext').value });
    lastCountryResume.coverText = cover;
    document.getElementById('coverLetterPreview').textContent = cover;
    document.getElementById('coverLetterCard').style.display = 'block';
    document.getElementById('coverRequiredBadge').textContent = COVER_EXPECTED.has(country) ? 'Expected in this market' : 'Generated';
  } else {
    lastCountryResume.coverText = '';
    document.getElementById('coverLetterCard').style.display = 'none';
  }
}

function buildCoverLetter({ name, title, country, lang, summary, experience, jd }) {
  const companyMatch = (jd || '').match(/Company:\s*(.+)/i);
  const roleMatch = (jd || '').match(/Job Title:\s*(.+)/i);
  const company = companyMatch ? companyMatch[1].split('\n')[0].trim() : 'your organisation';
  const role = roleMatch ? roleMatch[1].split('\n')[0].trim() : title;
  const today = new Date().toLocaleDateString(lang === 'de' ? 'de-DE' : (lang === 'fr' ? 'fr-FR' : 'en-GB'), { year: 'numeric', month: 'long', day: 'numeric' });

  const impact = (experience || summary || '').split('\n').filter(l => /[•\-\d%]/.test(l)).slice(0, 2).map(l => l.replace(/^[•\-]\s*/, '')).join(' ');

  if (lang === 'de' || country === 'germany') {
    return `${today}\n\nSehr geehrte Damen und Herren,\n\nmit großem Interesse bewerbe ich mich auf die Position als ${role} bei ${company}.\n\nAls erfahrene Führungskraft im Bereich Talent Acquisition bringe ich nachgewiesene Erfolge in der Entwicklung skalierbarer Recruiting-Strategien, Leadership Hiring und der partnerschaftlichen Zusammenarbeit mit dem Business mit. ${impact ? impact + ' ' : ''}\n\nIch bin überzeugt, dass meine Erfahrung und mein strategischer Ansatz einen nachhaltigen Beitrag zu Ihren Talentzielen leisten können. Gerne erläutere ich meine Motivation und Qualifikation in einem persönlichen Gespräch.\n\nMit freundlichen Grüßen\n${name}`;
  }
  if (lang === 'fr' || country === 'france') {
    return `${today}\n\nMadame, Monsieur,\n\nJe me permets de vous adresser ma candidature pour le poste de ${role} au sein de ${company}.\n\nFort(e) d’une solide expérience en Talent Acquisition et en recrutement de dirigeants, je souhaite mettre mon expertise au service de vos enjeux de croissance et de qualité d’embauche. ${impact ? impact + ' ' : ''}\n\nJe serais ravi(e) d’échanger avec vous afin de vous présenter plus en détail mon parcours et ma motivation.\n\nJe vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.\n\n${name}`;
  }
  // English (default) — adapt tone by country
  let opening = `Dear Hiring Manager,`;
  if (country === 'uk') opening = `Dear Hiring Manager,`;
  if (country === 'uae') opening = `Dear Hiring Manager,`;
  let close = `Yours sincerely,\n${name}`;
  if (country === 'usa' || country === 'canada') close = `Best regards,\n${name}`;
  if (country === 'uae') close = `Kind regards,\n${name}`;

  return `${today}\n\n${opening}\n\nI am writing to apply for the ${role} role at ${company}.\n\nAs a Talent Acquisition leader, I have built and scaled hiring engines, partnered with senior stakeholders on workforce plans, and delivered measurable improvements in time-to-fill and quality of hire. ${impact ? impact + ' ' : ''}\n\nI am particularly drawn to this opportunity because it aligns with my experience in leadership hiring and strategic TA. I would welcome the chance to discuss how I can support your talent agenda.\n\nThank you for your consideration.\n\n${close}`;
}

function extractJdSignals(jd) {
  const text = (jd || '').trim();
  const lower = text.toLowerCase();
  const companyMatch = text.match(/Company:\s*(.+)/i);
  const roleMatch = text.match(/Job Title:\s*(.+)/i) || text.match(/^([^\n]{8,80})/);
  const company = companyMatch ? companyMatch[1].split('\n')[0].trim() : '';
  let role = roleMatch ? roleMatch[1].split('\n')[0].trim() : '';
  if (/company:|location:|experience:/i.test(role)) role = '';

  const themes = [];
  if (/leadership hiring|executive search|c-level|cxo|director.?level/i.test(text)) themes.push('leadership / executive hiring');
  if (/global|multi.?geo|apac|emea|international/i.test(text)) themes.push('multi-geo / global hiring');
  if (/volume|scale|high.?growth|ramp/i.test(text)) themes.push('scaled / high-growth hiring');
  if (/employer brand|candidate experience|dei|diversity/i.test(text)) themes.push('employer branding & DEI');
  if (/ats|analytics|data.?driven|workforce plan/i.test(text)) themes.push('TA analytics & workforce planning');
  if (/hybrid|remote|distributed/i.test(text)) themes.push('hybrid / remote workforce models');
  if (/visa|sponsorship|relocation|mobility/i.test(text)) themes.push('global mobility / visa support');
  if (/bpo|contact center|shared service/i.test(text)) themes.push('BPO / shared-services hiring');
  if (/tech|engineering|software|digital|saas|it services/i.test(text)) themes.push('technology / digital talent');
  if (/strategy|stakeholder|business partner/i.test(text)) themes.push('strategic stakeholder partnership');

  // Pull 2–3 concrete requirement phrases from JD
  const reqLines = text.split(/\n/).map(l => l.replace(/^[\s•\-\*]+/, '').trim())
    .filter(l => l.length > 25 && l.length < 160 && /experience|lead|manage|drive|build|partner|develop|own|deliver/i.test(l))
    .slice(0, 3);

  return { company: company || '[Company]', role: role || '', themes, reqLines, hasJd: text.length > 40 };
}

function pickExpertiseBullets(summary, experience, skills, themes) {
  const pool = [];
  const expLines = (experience || '').split('\n').map(l => l.replace(/^[•\-\*]\s*/, '').trim()).filter(l => l.length > 30);
  expLines.filter(l => /\d|%|led|built|delivered|reduced|improved|managed|scaled|partnered/i.test(l)).slice(0, 4).forEach(l => pool.push(l));
  if (summary && summary.length > 40) pool.push(summary.split(/[.!\n]/).filter(s => s.trim().length > 40)[0]?.trim());
  const skillArr = formatSkillsList(skills || '');
  // Prefer skills that overlap JD themes
  themes.forEach(t => {
    const hit = skillArr.find(s => t.toLowerCase().split(/[\s/]+/).some(w => w.length > 3 && s.toLowerCase().includes(w)));
    if (hit) pool.push(`Strong capability in ${hit}`);
  });
  return [...new Set(pool.filter(Boolean))].slice(0, 3);
}

function generateApplicationEmail() {
  const country = document.getElementById('resumeCountry').value;
  const lang = document.getElementById('resumeLang').value;
  const name = (document.getElementById('rName').value || 'Candidate').trim();
  const title = (document.getElementById('rTitle').value || 'Talent Acquisition Leader').trim();
  const summary = (document.getElementById('rSummary').value || '').trim();
  const experience = (document.getElementById('rExperience').value || '').trim();
  const skills = (document.getElementById('rSkills').value || '').trim();
  const jd = document.getElementById('rJdContext').value || '';

  const sig = extractJdSignals(jd);
  const role = sig.role || title;
  const company = sig.company;
  const expertise = pickExpertiseBullets(summary, experience, skills, sig.themes);

  // Fit paragraph from JD themes + expertise
  let fitReasons = '';
  if (sig.themes.length) {
    fitReasons = `This role’s focus on ${sig.themes.slice(0, 3).join(', ')} aligns closely with my background. `;
  }
  if (expertise.length) {
    fitReasons += 'Relevant highlights from my experience:\n';
    expertise.forEach(e => { fitReasons += `• ${e}\n`; });
  } else {
    fitReasons += 'I bring end-to-end Talent Acquisition leadership experience spanning strategy, stakeholder partnership, and measurable hiring outcomes.';
  }

  let whyCompany = '';
  if (sig.hasJd) {
    whyCompany = `Having reviewed the role requirements, I am confident I can contribute quickly to ${company === '[Company]' ? 'your' : company + "'s"} talent agenda`;
    if (sig.reqLines.length) {
      whyCompany += `, particularly around areas such as ${sig.reqLines[0].slice(0, 90)}${sig.reqLines[0].length > 90 ? '…' : ''}`;
    }
    whyCompany += '.';
  } else {
    whyCompany = `I am keen to bring my Talent Acquisition leadership experience to ${company === '[Company]' ? 'your organisation' : company} and would welcome a conversation about mutual fit.`;
  }

  let subject = `Application — ${role} — ${name}`;
  let body = '';
  const attachNote = shouldGenerateCover() ? 'resume and cover letter' : 'resume';

  if (lang === 'de' || country === 'germany') {
    subject = `Bewerbung als ${role} — ${name}`;
    body = `Sehr geehrte Damen und Herren,\n\nich bewerbe mich auf die Position als ${role} bei ${company}.\n\n${fitReasons}\n${whyCompany}\n\nIm Anhang finden Sie meinen Lebenslauf${shouldGenerateCover() ? ' und mein Anschreiben' : ''}. Über die Gelegenheit zu einem persönlichen Gespräch würde ich mich freuen.\n\nMit freundlichen Grüßen\n${name}`;
  } else if (lang === 'fr' || country === 'france') {
    subject = `Candidature — ${role} — ${name}`;
    body = `Madame, Monsieur,\n\nJe candidate au poste de ${role} au sein de ${company}.\n\n${fitReasons}\n${whyCompany}\n\nVous trouverez ci-joint mon CV${shouldGenerateCover() ? ' et ma lettre de motivation' : ''}. Je reste à votre disposition pour un entretien.\n\nCordialement,\n${name}`;
  } else if (country === 'uae' || lang === 'ar') {
    subject = `Application for ${role} — ${name}`;
    body = `Dear Hiring Manager,\n\nI am applying for the ${role} position at ${company}.\n\n${fitReasons}\n${whyCompany}\n\nPlease find my ${attachNote} attached. I would be pleased to discuss how I can support your talent priorities in the region.\n\nKind regards,\n${name}`;
  } else if (country === 'uk') {
    subject = `Application for ${role} — ${name}`;
    body = `Dear Hiring Manager,\n\nI am writing to apply for the ${role} role at ${company}.\n\n${fitReasons}\n${whyCompany}\n\nPlease find my ${attachNote} attached. I would welcome the opportunity to discuss how I can support your hiring priorities.\n\nYours sincerely,\n${name}`;
  } else if (country === 'india' || lang === 'hi' || lang === 'en-in') {
    subject = `Application for ${role} | ${name}`;
    body = `Dear Hiring Team,\n\nI am applying for the ${role} position at ${company}.\n\n${fitReasons}\n${whyCompany}\n\nPlease find my ${attachNote} attached. I would be glad to discuss my fit for this role at your convenience.\n\nBest regards,\n${name}`;
  } else if (country === 'usa' || country === 'canada') {
    subject = `${role} application — ${name}`;
    body = `Dear Hiring Manager,\n\nI am applying for the ${role} role at ${company}.\n\n${fitReasons}\n${whyCompany}\n\nMy ${attachNote} is attached for your review. I would welcome a conversation about how I can contribute to your team.\n\nBest regards,\n${name}`;
  } else {
    subject = `Application — ${role} — ${name}`;
    body = `Dear Hiring Manager,\n\nI am applying for the ${role} role at ${company}.\n\n${fitReasons}\n${whyCompany}\n\nPlease find my ${attachNote} attached. I look forward to the possibility of discussing this opportunity further.\n\nBest regards,\n${name}`;
  }

  if (!sig.hasJd) {
    body += '\n\n[Tip: paste the full job description in the “Job description / role context” field and regenerate for a more targeted fit message.]';
  }

  lastCountryResume.emailSubject = subject;
  lastCountryResume.emailBody = body;
  document.getElementById('emailSubject').value = subject;
  document.getElementById('emailBodyPreview').textContent = body;
  document.getElementById('emailCard').style.display = 'block';
}

function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function saveResumeVersion() {
  if (!lastCountryResume.text) { alert('Generate a resume first.'); return; }
  const list = JSON.parse(safeGet(RESUME_STORAGE_KEY) || '[]');
  const id = 'r_' + Date.now();
  list.unshift({
    id,
    ...lastCountryResume.meta,
    text: lastCountryResume.text,
    html: lastCountryResume.html,
    coverText: lastCountryResume.coverText || '',
    emailSubject: lastCountryResume.emailSubject || '',
    emailBody: lastCountryResume.emailBody || '',
    label: `${lastCountryResume.meta.name || 'Resume'} · ${String(lastCountryResume.meta.country||'').toUpperCase()} · ${lastCountryResume.meta.style}`
  });
  safeSet(RESUME_STORAGE_KEY, JSON.stringify(list.slice(0, 20)));
  renderSavedResumes();
  alert('Version saved in this app.');
}

function renderSavedResumes() {
  const list = JSON.parse(safeGet(RESUME_STORAGE_KEY) || '[]');
  const box = document.getElementById('savedResumesList');
  if (!list.length) {
    box.innerHTML = '<div class="empty-state" style="padding:1.2rem">No saved versions yet.</div>';
    return;
  }
  box.innerHTML = list.map(v => `
    <div style="display:flex;align-items:center;justify-content:space-between;gap:0.6rem;padding:0.55rem 0.75rem;border:1px solid var(--border);border-radius:8px;background:#0f172a;flex-wrap:wrap">
      <div>
        <div style="font-weight:600;font-size:0.85rem">${escapeHtml(v.label)}</div>
        <div style="font-size:0.7rem;color:var(--muted)">${new Date(v.created).toLocaleString()} · ${v.country} · ${v.style}</div>
      </div>
      <div style="display:flex;gap:0.35rem;flex-wrap:wrap">
        <button class="action-btn" onclick="loadSavedResume('${v.id}')">Select</button>
        <button class="action-btn tailor" onclick="downloadSavedPDF('${v.id}')">PDF</button>
        <button class="action-btn" onclick="deleteSavedResume('${v.id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

function loadSavedResume(id) {
  const list = JSON.parse(safeGet(RESUME_STORAGE_KEY) || '[]');
  const v = list.find(x => x.id === id);
  if (!v) return;
  lastCountryResume = { text: v.text, html: v.html, meta: v, coverText: v.coverText || '', emailSubject: v.emailSubject || '', emailBody: v.emailBody || '' };
  document.getElementById('resumePreview').innerHTML = v.html;
  document.getElementById('resumeCountry').value = v.country || 'india';
  document.getElementById('resumeStyle').value = v.style || 'modern';
  updateResumeHints();
  if (v.coverText) {
    document.getElementById('coverLetterPreview').textContent = v.coverText;
    document.getElementById('coverLetterCard').style.display = 'block';
  }
  if (v.emailBody) {
    document.getElementById('emailSubject').value = v.emailSubject || '';
    document.getElementById('emailBodyPreview').textContent = v.emailBody;
    document.getElementById('emailCard').style.display = 'block';
  }
}

function deleteSavedResume(id) {
  let list = JSON.parse(safeGet(RESUME_STORAGE_KEY) || '[]');
  list = list.filter(x => x.id !== id);
  safeSet(RESUME_STORAGE_KEY, JSON.stringify(list));
  renderSavedResumes();
}

function copyCountryResume() {
  if (!lastCountryResume.text) { alert('Generate first.'); return; }
  navigator.clipboard.writeText(lastCountryResume.text);
  alert('Resume text copied.');
}
function copyCoverLetter() {
  if (!lastCountryResume.coverText) { alert('No cover letter generated.'); return; }
  navigator.clipboard.writeText(lastCountryResume.coverText);
  alert('Cover letter copied.');
}
function copyApplicationEmail() {
  const sub = document.getElementById('emailSubject').value;
  const body = lastCountryResume.emailBody || document.getElementById('emailBodyPreview').textContent;
  if (!body) { alert('Generate email first.'); return; }
  navigator.clipboard.writeText('Subject: ' + sub + '\n\n' + body);
  alert('Email copied.');
}

function downloadCountryPDF() {
  const text = lastCountryResume.text;
  if (!text) { alert('Generate a country resume first.'); return; }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const margin = 50;
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const photoW = (lastCountryResume.meta.photo && uploadedPhotoDataUrl) ? 62 : 0;
  const maxWidth = pageW - margin * 2 - (photoW ? photoW + 12 : 0);
  let y = margin;
  const name = lastCountryResume.meta.name || 'Resume';
  const style = lastCountryResume.meta.style || 'modern';
  const isCompact = style === 'compact';
  const bodySize = isCompact ? 9.5 : 10.5;
  const lineH = isCompact ? 12 : 13.5;

  if (photoW) {
    try { doc.addImage(uploadedPhotoDataUrl, 'JPEG', pageW - margin - photoW, margin, photoW, 78); } catch (e) {}
  }

  const sectionRe = /^(PROFESSIONAL|PERSONAL STATEMENT|PROFILE|PROFIL|PROFIEL|CORE COMPETENCIES|KEY SKILLS|SKILLS|COMPETENCIES|KOMPETENZEN|COMPÉTENCES|VAARDIGHEDEN|WORK EXPERIENCE|EXPERIENCE|BERUFSERFAHRUNG|EXPÉRIENCE|WERKERVARING|EDUCATION|AUSBILDUNG|FORMATION|OPLEIDING|─+)/i;

  const rawLines = text.split('\n');
  rawLines.forEach((raw, idx) => {
    const line = raw.trimEnd();
    if (y > pageH - margin - 10) { doc.addPage(); y = margin; }

    // Name (first non-empty line)
    if (idx === 0 || (idx < 3 && line === name.toUpperCase())) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(style === 'executive' ? 16 : 14);
      doc.setTextColor(30, 58, 95);
      doc.text(line || name, margin, y);
      y += 18;
      doc.setTextColor(15, 23, 42);
      return;
    }

    if (sectionRe.test(line.trim()) || /^─+/.test(line.trim())) {
      if (/^─+/.test(line.trim())) { y += 4; return; }
      y += 6;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(3, 105, 161);
      doc.text(line.trim().toUpperCase(), margin, y);
      // underline
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.6);
      doc.line(margin, y + 3, margin + maxWidth, y + 3);
      y += lineH + 2;
      doc.setTextColor(15, 23, 42);
      return;
    }

    // Role headers (contain | or years, not bullets)
    const isRoleHead = (/\|/.test(line) || /\b(20\d{2}|19\d{2})\b/.test(line)) && !/^[•\-\*]/.test(line.trim()) && line.length < 110;
    doc.setFont('helvetica', isRoleHead ? 'bold' : 'normal');
    doc.setFontSize(isRoleHead ? bodySize + 0.5 : bodySize);
    const wrapped = doc.splitTextToSize(line || ' ', maxWidth);
    wrapped.forEach(w => {
      if (y > pageH - margin - 10) { doc.addPage(); y = margin; }
      doc.text(w, margin, y);
      y += lineH;
    });
  });

  doc.save(`Resume_${(lastCountryResume.meta.country||'global')}_${(name||'TA').replace(/\s+/g,'_')}.pdf`);
}

function downloadCoverPDF() {
  const text = lastCountryResume.coverText;
  if (!text) { alert('No cover letter.'); return; }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const margin = 54;
  let y = margin;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.splitTextToSize(text, doc.internal.pageSize.getWidth() - margin * 2).forEach(line => {
    if (y > doc.internal.pageSize.getHeight() - margin) { doc.addPage(); y = margin; }
    doc.text(line, margin, y);
    y += 15;
  });
  doc.save(`CoverLetter_${lastCountryResume.meta.country||'global'}.pdf`);
}

function downloadSavedPDF(id) {
  loadSavedResume(id);
  downloadCountryPDF();
}

function downloadCountryDOCX() {
  const text = lastCountryResume.text;
  if (!text) { alert('Generate a country resume first.'); return; }
  const name = lastCountryResume.meta.name || 'Talent Acquisition Leader';
  if (window.docx && window.docx.Document) {
    const { Document, Packer, Paragraph, TextRun, HeadingLevel } = window.docx;
    const paras = text.split('\n').map(line => {
      const isHead = /^(PROFESSIONAL|PERSONAL STATEMENT|PROFILE|PROFIL|PROFIEL|CORE COMPETENCIES|KEY SKILLS|SKILLS|COMPETENCIES|KOMPETENZEN|COMPÉTENCES|WORK EXPERIENCE|EXPERIENCE|BERUFSERFAHRUNG|EDUCATION|AUSBILDUNG)/i.test(line.trim());
      return new Paragraph({
        spacing: { after: 100 },
        children: [new TextRun({ text: line || ' ', bold: isHead, size: isHead ? 22 : 20, font: 'Calibri' })]
      });
    });
    const doc = new Document({
      sections: [{ children: [
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: name, bold: true, size: 28 })] }),
        ...paras
      ]}]
    });
    Packer.toBlob(doc).then(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `Resume_${lastCountryResume.meta.country||'global'}.docx`;
      a.click();
    });
    return;
  }
  const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="utf-8"><title>Resume</title></head><body style="font-family:Calibri,Arial;font-size:11pt"><h1>${escapeHtml(name)}</h1><pre style="white-space:pre-wrap;font-family:Calibri">${escapeHtml(text)}</pre></body></html>`;
  const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Resume_${lastCountryResume.meta.country||'global'}.doc`;
  a.click();
}

function downloadCountryHTML() {
  if (!lastCountryResume.html) { alert('Generate first.'); return; }
  const full = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Resume</title><style>body{margin:24px;background:#fff}</style></head><body>${lastCountryResume.html}</body></html>`;
  const blob = new Blob([full], { type: 'text/html' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Resume_${lastCountryResume.meta.country||'global'}.html`;
  a.click();
}

// ========== TA GLOBAL AGENT — curated pipeline snapshot ==========
// Schema: company, title, level, type, location, mode, visa, posted, url
// Rules: TA function, mid–senior+, FT/contract, remote/hybrid preferred, deduped, direct apply URL
const AGENT_CURATED = [
  { company: 'Techstars', title: 'Head of Global Talent Acquisition', level: 'CXO', type: 'Full-time', location: 'United States', mode: 'Remote', visa: 'Unclear', posted: '2026-08-11', url: 'https://startup.jobs/head-of-global-talent-acquisition-techstars-2-1851410' },
  { company: 'Marqeta', title: 'Senior Director, Talent Acquisition', level: 'Senior', type: 'Full-time', location: 'United States', mode: 'Remote', visa: 'Unclear', posted: '2026-08-07', url: 'https://startup.jobs/senior-director-talent-acquisition-marqeta-7902067' },
  { company: 'GiveDirectly', title: 'Director, Global Talent Acquisition', level: 'Senior', type: 'Full-time', location: 'Remote (EAT overlap)', mode: 'Remote', visa: 'Unclear', posted: '2026-08', url: 'http://job-boards.greenhouse.io/givedirectly/jobs/4714132005' },
  { company: 'Cint', title: 'Senior Manager, Talent Acquisition', level: 'Senior', type: 'Full-time', location: 'Global / flexible', mode: 'Hybrid/Remote', visa: 'Unclear', posted: '2026-08-14', url: 'https://startup.jobs/senior-manager-talent-acquisition-cint-7705365' },
  { company: 'Circle', title: 'Lead Talent Acquisition Partner', level: 'Senior', type: 'Full-time', location: 'Remote', mode: 'Remote', visa: 'Unclear', posted: '2026-08-10', url: 'https://startup.jobs/lead-talent-acquisition-partner-circle-2-5495629' },
  { company: 'Twinkl', title: 'Senior Talent Acquisition Partner (Technology)', level: 'Senior', type: 'Full-time', location: 'Sheffield, UK', mode: 'Remote/Hybrid', visa: 'Unclear', posted: '2026-08-05', url: 'https://startup.jobs/senior-talent-acquisition-partner-technology-twinkl-4606922' },
  { company: 'Stryker', title: 'Lead Talent Acquisition Business Partner', level: 'Senior', type: 'Full-time', location: 'United States', mode: 'Remote', visa: 'Unclear', posted: '2026-08-11', url: 'https://careers.stryker.com/lead-talent-acquisition-business-partner-remote/job/D528E48BE78E28A8022D374AB83E30F0' },
  { company: 'Hostaway', title: 'Senior Talent Acquisition Partner', level: 'Senior', type: 'Full-time', location: 'LATAM', mode: 'Remote', visa: 'Unclear', posted: '2026-08-04', url: 'https://www.linkedin.com/jobs/view/senior-talent-acquisition-partner-100%25-remote-latam-at-hostaway-4391593198' },
  { company: 'Greenhouse', title: 'Lead Technical Talent Acquisition Manager', level: 'Senior', type: 'Full-time', location: 'United States', mode: 'Remote', visa: 'Unclear', posted: '~4d ago', url: 'https://www.ziprecruiter.com/c/Greenhouse/Job/Lead-Technical-Talent-Acquisition-Manager/-in-Remote,US?jid=71df3f050de08550' },
  { company: 'Greenhouse', title: 'Senior Talent Acquisition Manager (6-mo temp)', level: 'Senior', type: 'Contract', location: 'United States', mode: 'Remote', visa: 'Unclear', posted: '2026-08-05', url: 'https://startup.jobs/senior-talent-acquisition-manager-greenhouse-2-7734170' },
  { company: 'firsthand', title: 'Director, Talent Acquisition', level: 'Senior', type: 'Full-time', location: 'United States', mode: 'Remote', visa: 'Unclear', posted: '2026-08-14', url: 'https://startup.jobs/director-talent-acquisition-firsthand-4815129' },
  { company: 'iDeals', title: 'Talent Acquisition Director', level: 'Senior', type: 'Full-time', location: 'Global', mode: 'Remote', visa: 'Unclear', posted: '2026-08-06', url: 'https://startup.jobs/talent-acquisition-director-ideals-4440082' },
  { company: 'EXANTE', title: 'Talent Acquisition Manager', level: 'Mid/Senior', type: 'Full-time', location: 'Europe (any)', mode: 'Remote/Hybrid', visa: 'Unclear', posted: 'Recent', url: 'https://startup.jobs/talent-acquisition-manager-remote-hybrid-exante-3991001' },
  { company: 'envelio', title: 'Talent Acquisition Manager (12-mo)', level: 'Mid', type: 'Contract', location: 'Germany', mode: 'Remote/Hybrid', visa: 'Unclear', posted: '2026-08-05', url: 'https://startup.jobs/talent-acquisition-manager-all-genders-befristet-12-monate-envelio-7705746' },
  { company: 'UnifyCX', title: 'Talent Acquisition Director', level: 'Senior', type: 'Full-time', location: 'Hyderabad, India', mode: 'Hybrid/Onsite*', visa: 'N/A (India)', posted: '2026-08-15', url: 'https://in.linkedin.com/jobs/view/talent-acquisition-director-at-unifycx-4443263194' },
  { company: 'Twilio', title: 'Senior Manager, TA – GTM & Marketing, Americas', level: 'Senior', type: 'Full-time', location: 'Remote – US', mode: 'Remote', visa: 'Unclear', posted: '2026-07-09', url: 'http://jobs.twilio.com/careers/job/1099554612717' },
  { company: 'KodeKloud', title: 'Talent Acquisition Lead', level: 'Senior', type: 'Full-time', location: 'UAE / global remote', mode: 'Remote', visa: 'Unclear', posted: '2026-08-15', url: 'https://ae.linkedin.com/jobs/view/talent-acquisition-lead-at-kodekloud-4377169256' },
  { company: 'GHD', title: 'Talent Acquisition Manager, Canada', level: 'Senior', type: 'Full-time', location: 'Canada (multi-city)', mode: 'Hybrid', visa: 'Unclear', posted: '2026-08-05', url: 'https://ca.linkedin.com/jobs/view/talent-acquisition-manager-canada-at-ghd-4436535365' }
];

function dedupeAgentJobs(list) {
  const seen = new Set();
  return list.filter(j => {
    const key = (j.company + '|' + j.title + '|' + j.location).toLowerCase().replace(/\s+/g, ' ');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function loadAgentCurated() {
  const rows = dedupeAgentJobs(AGENT_CURATED);
  const tbody = document.getElementById('agentTableBody');
  if (!tbody) return;
  tbody.innerHTML = rows.map(j => `<tr>
    <td>${escapeHtml(j.company)}</td>
    <td><div class="role-title">${escapeHtml(j.title)}</div></td>
    <td><span class="badge badge-${j.level === 'CXO' ? 'cxo' : (j.level.indexOf('Senior') >= 0 || j.level === 'Senior' ? 'senior' : 'mid')}">${escapeHtml(j.level)}</span></td>
    <td>${escapeHtml(j.type)}</td>
    <td>${escapeHtml(j.location)}</td>
    <td><span class="badge badge-hybrid">${escapeHtml(j.mode)}</span></td>
    <td>${escapeHtml(j.visa)}</td>
    <td>${escapeHtml(j.posted)}</td>
    <td><a class="link-btn" href="${j.url}" target="_blank" rel="noopener">Apply →</a>
      <button class="action-btn tailor" onclick='tailorForJob(${JSON.stringify({ title: j.title, company: j.company, location: j.location, level: j.level.indexOf("CXO")>=0?"CXO":(j.level.indexOf("Senior")>=0||j.level==="Senior"?"Senior":"Mid"), mode: j.mode, url: j.url, expMin: 8, expMax: 18, industry: "Talent Acquisition", source: "Agent" }).replace(/'/g, "&#39;")})'>Tailor</button></td>
  </tr>`).join('');
  const meta = document.getElementById('agentMeta');
  if (meta) {
    meta.innerHTML = `${rows.length} deduped roles · Prefer Greenhouse/company links when available · Visa often <em>Unclear</em> unless JD states sponsorship · Always re-check the posting is still open.<br>
      <strong>High-signal boards to track:</strong> LinkedIn Jobs, Indeed, Google Jobs, Greenhouse public boards, Lever, startup.jobs, Remotive HR, We Work Remotely, SHRM careers, RecruitingDaily, HR Grapevine, MyVisaJobs (sponsorship filter).`;
  }
}

// ========== MY PROFILE (LinkedIn-mapped, local store) ==========
const MY_PROFILE_KEY = 'ta_my_profile_neeraj_v1';

function getMyProfileFromForm() {
  return {
    name: (document.getElementById('myName')?.value || '').trim(),
    title: (document.getElementById('myTitle')?.value || '').trim(),
    location: (document.getElementById('myLocation')?.value || '').trim(),
    phone: (document.getElementById('myPhone')?.value || '').trim(),
    email: (document.getElementById('myEmail')?.value || '').trim(),
    linkedin: (document.getElementById('myLinkedIn')?.value || '').trim(),
    summary: (document.getElementById('mySummary')?.value || '').trim(),
    experience: (document.getElementById('myExperience')?.value || '').trim(),
    skills: (document.getElementById('mySkills')?.value || '').trim(),
    education: (document.getElementById('myEducation')?.value || '').trim(),
    linkedinUrl: 'https://www.linkedin.com/in/neeraj-kapil/',
    updated: new Date().toISOString()
  };
}

function saveMyProfile() {
  const p = getMyProfileFromForm();
  if (!p.name) { alert('Name is required.'); return; }
  const persisted = safeSet(MY_PROFILE_KEY, JSON.stringify(p));
  const el = document.getElementById('myProfileStatus');
  if (el) {
    el.textContent = persisted
      ? ('Saved ' + new Date().toLocaleString() + ' — Load My Profile on every job to skip re-upload.')
      : ('Saved in session memory ' + new Date().toLocaleString() + ' (sandbox blocked localStorage — lasts until this tab closes).');
  }
  alert(persisted
    ? 'My Profile saved in this browser. Use “Load into …” when applying.'
    : 'My Profile saved for this session only (sandbox blocked permanent storage). Keep this tab open while applying.');
}

function readSavedMyProfile() {
  try {
    return JSON.parse(safeGet(MY_PROFILE_KEY) || 'null');
  } catch (e) { return null; }
}

function applyProfileToMyFields(p) {
  if (!p) return;
  const set = (id, v) => { const el = document.getElementById(id); if (el && v != null) el.value = v; };
  set('myName', p.name); set('myTitle', p.title); set('myLocation', p.location);
  set('myPhone', p.phone); set('myEmail', p.email); set('myLinkedIn', p.linkedin);
  set('mySummary', p.summary); set('myExperience', p.experience);
  set('mySkills', p.skills); set('myEducation', p.education);
}

function loadMyProfileIntoForm() {
  let p = readSavedMyProfile() || getMyProfileFromForm();
  // Prefer whatever is currently in My Profile experience box if it is the full career
  const formExp = (document.getElementById('myExperience') || {}).value || '';
  if (formExp.indexOf('GenNex') >= 0 && formExp.indexOf('TerraPay') >= 0) {
    p = Object.assign({}, p, { experience: formExp });
  } else if ((!p.experience || p.experience.indexOf('GenNex') < 0) && typeof FULL_CAREER_EXPERIENCE === 'string') {
    p = Object.assign({}, p, { experience: FULL_CAREER_EXPERIENCE });
  }
  const set = (id, v) => { const el = document.getElementById(id); if (el && v) el.value = v; };
  set('rName', p.name);
  set('rTitle', p.title);
  set('rLocation', p.location);
  set('rPhone', p.phone);
  set('rEmail', p.email);
  set('rLinkedIn', p.linkedin);
  set('rSummary', p.summary);
  set('rExperience', p.experience);
  set('rSkills', p.skills);
  set('rEducation', p.education);
  // Also mirror into tailor resume text for match score
  const resumeBox = document.getElementById('resumeText');
  if (resumeBox) {
    resumeBox.value = [p.name, p.title, p.location, p.phone, p.email, p.linkedin, '', p.summary, '', p.experience, '', p.skills, '', p.education].filter(Boolean).join('\n');
  }
  alert('Profile loaded into Country Resume form. Choose country/layout and Generate.');
}

function loadMyProfileIntoTailor() {
  let p = readSavedMyProfile() || getMyProfileFromForm();
  const resumeBox = document.getElementById('resumeText');
  if (resumeBox) {
    resumeBox.value = [p.name, p.title, p.location, p.phone, p.email, p.linkedin, '', 'PROFESSIONAL SUMMARY', p.summary, '', 'EXPERIENCE', p.experience, '', 'SKILLS', p.skills, '', 'EDUCATION', p.education].filter(x => x != null).join('\n');
  }
  document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(x => x.classList.remove('active'));
  const tab = document.querySelector('[data-tab="tailor"]');
  if (tab) tab.classList.add('active');
  const panel = document.getElementById('panel-tailor');
  if (panel) panel.classList.add('active');
  alert('Profile loaded into Resume Update tab. Paste JD and run Analyze & Tailor.');
}

function pasteLinkedInHint() {
  alert(
    'How to copy from LinkedIn (1–2 minutes):\n\n' +
    '1. Open https://www.linkedin.com/in/neeraj-kapil/ while logged in\n' +
    '2. About → … → Copy text → paste into “About / Summary”\n' +
    '3. Experience → open each role or copy visible bullets → paste into Experience\n' +
    '4. Skills → copy your top skills → paste into Skills\n' +
    '5. Click Save My Profile\n\n' +
    'LinkedIn does not allow websites to auto-download your full profile (login + anti-bot). Saving once here is the reliable way.'
  );
}

function initMyProfile() {
  const saved = readSavedMyProfile();
  if (!saved) return;
  const expEl = document.getElementById('myExperience');
  const htmlExp = expEl ? (expEl.value || '') : '';
  // If saved experience is missing/shorter than the full career baked into the page, keep the full HTML version
  if (saved.experience && htmlExp && saved.experience.length >= htmlExp.length - 50) {
    applyProfileToMyFields(saved);
  } else {
    // Apply everything except experience (or merge: use full HTML experience)
    const merged = Object.assign({}, saved, {
      experience: (htmlExp && htmlExp.indexOf('GenNex') >= 0) ? htmlExp : (saved.experience || htmlExp)
    });
    // Prefer full HTML experience when it contains the complete career arc
    if (htmlExp && htmlExp.indexOf('TerraPay') >= 0 && htmlExp.indexOf('GenNex') >= 0) {
      merged.experience = htmlExp;
    }
    applyProfileToMyFields(merged);
  }
  const el = document.getElementById('myProfileStatus');
  if (el) {
    const expNow = (document.getElementById('myExperience') || {}).value || '';
    const complete = expNow.indexOf('TerraPay') >= 0 && expNow.indexOf('GenNex') >= 0;
    el.textContent = 'Loaded profile' + (saved.updated ? (' from ' + new Date(saved.updated).toLocaleString()) : '') +
      (complete ? ' · Full experience TerraPay → GenNex present.' : ' · Experience incomplete — click “Restore full career history”.');
  }
}

function restoreFullCareerHistory() {
  // Re-read default from a data attribute we keep in sync, or hard-coded full block
  const el = document.getElementById('myExperience');
  if (!el) return;
  // If textarea still has GenNex from page load defaults, nothing to do — force from FULL_CAREER constant
  if (typeof FULL_CAREER_EXPERIENCE === 'string' && FULL_CAREER_EXPERIENCE.length > 100) {
    el.value = FULL_CAREER_EXPERIENCE;
  }
  const st = document.getElementById('myProfileStatus');
  if (st) st.textContent = 'Full career history restored (TerraPay → GenNex). Click Save My Profile to keep it.';
  alert('Full experience restored: TerraPay → Mavenir → Ericsson → Care Foundation → Emerson → Su-Kam → Billing Savi → GeBBS → GenNex.\n\nClick “Save My Profile” so Load buttons use the complete history.');
}

// Full career text (same as page default) — used when saved profile had truncated experience
const FULL_CAREER_EXPERIENCE = `TerraPay | Global Talent Acquisition Leader | Jan 2023 – Present | On-site
Hired to build a global, scalable TA engine across 35+ countries (Europe, North America, LATAM, Middle East, APAC); architect AI-enabled hiring systems; lead DEI, succession, and employer brand for hyper-growth.
• Delivered ~$600,000 annual cost avoidance via AI-powered Global Compensation Intelligence Calculator across 120 global sales hires
• +40% quality of hire; 30% faster time-to-fill via competency-based global hiring model
• −40% hiring cost; +50% cycle accuracy through TA workflow automation and analytics
• +20% retention; +28% engagement; +35% diversity representation
• 613 hires (FY’23–24); ₹1.78 Cr (USD ~217K) savings
• Stood up hiring in 35+ markets; Global Skill Library, ATS/HRMS rollout, succession pipelines, real-time TA dashboards
• Built Global Compensation Intelligence Calculator (180-country database) integrated with Workable ATS and Zoho HRMS

Mavenir | Senior Manager – Global Talent Acquisition Partner (Europe & North America) | Aug 2021 – Dec 2022 | Gurugram
Led EMEA & North America TA strategy and operations; scaled to 1,000+ hires/year.
• 96% of priority vacancies filled in first 7 months of FY’21–22
• −70% third-party staffing cost via vendor rationalization
• Established workforce planning, succession, and offshore sourcing hubs
• Global recruiting tech stack uplift; analytics dashboards; vendor governance with SLAs/QBRs

Ericsson India | Global HR Talent Acquisition (Europe and Latin America) | Apr 2019 – Apr 2021 | India
• Spearheaded TA for Europe and Latin America (Data Scientist, Big Data, Cloud/Software Architect, DevOps, Blockchain, IoT, Full-stack)
• Global dashboards and insights (Tableau, Power BI, Excel); SAP HR; D&I trend analysis
• TA strategy, capacity planning, forecasting; internal talent mobility programs
• BCP solutions; PCMM L4/L5 service delivery projects on ESAT, CSAT & PCI

The Care Foundation – Kids & Elderly | HR – Talent Acquisition & Administration | Oct 2015 – Mar 2019 | Ambala, Haryana
• Spearheaded end-to-end recruitment (screening, interviewing, onboarding) for volunteers, support staff and caregivers
• Oversaw administrative operations: attendance, documentation, compliance with policies and local labor laws
• Facilitated orientation and training aligned to organizational values; coordinated engagement for staff, children and elderly
• Liaison with internal teams, external partners and donors for HR and administrative support
• Supported performance evaluation and retention of high-performing volunteers and caregivers; contributed to policy and SOP development

Emerson Network Power | Manager Human Resource (IT, Telecom, R&D, Power & Thermal Projects) | Oct 2014 – Oct 2015 | Mumbai
• Worked with GU Leadership & India MD on forecasting and headcount growth strategy linked to productivity targets
• Demand–supply balancing with talent fulfilment lead; recommended internal/external mobility for optimum productivity
• Managed recruitment vs targets on OTD, cost per joiner, joiner per recruiter, hiring quality and stakeholder feedback
• Recruitment cost optimization via campus, referral, internet and agency mix; centralized activities to internal ops team
• Productivity optimization with resource utilization / bench management; attrition and retention strategies
• Stakeholder management with senior leaders; HR engagement initiatives and policy implementation

Su-Kam Power Systems Limited | Deputy Manager Human Resources (Telecom, Power and Energy) | Jan 2012 – Sep 2014 | Gurgaon
• Tracked recruitment (global hire, internal/external mobility), attrition and retention for PAN India Corporate, R&D, Production, Sales and Service — middle to top management (AGM, GM, AVP, VP+)
• Planned training budgets and organizational L&D strategy; delivered and measured training
• Site visits with business leaders on productivity and morale; team-building and core values facilitation
• 3 C’s for new hires — Connect, Concern, Confirmation
• Reduced external agency dependency from 45% (2012) to 27% (2013) → annual savings INR 10.7 million

Billing Savi | Assistant Manager – Human Resource & Process Training (IT, US Healthcare & Insurance) | Dec 2009 – Aug 2011 | Gurgaon
• Integrated talent management: workforce planning, TA, onboarding, performance, L&D and retention aligned to strategy
• Implemented succession planning and talent review; monitored key talent development plans
• Improved TA branding, competency-based JDs, structured interviews, assessment tools and assimilation
• Sourced via social/professional networks; partnered hiring managers on role definition and panel process
• Facilitated process training; standardized quality manuals, skill metrics and OD processes; CMMI / HIPAA-related projects
• Tracked and reported talent metrics for accountability

GeBBS Healthcare Solutions | Senior Team Leader Training (IT, US Healthcare & Insurance) | Oct 2007 – Dec 2009 | Mumbai
• Organization structure, training, development and workforce planning for succession readiness
• Process & technical training; training manuals; JDs; career graphs; succession planning; competency matrix
• Defined process SOPs, SLAs, QMS; needs assessment and competency models linked to performance strategy
• Managed trainers; goal setting, coaching, feedback and appraisal; measured pre/post training performance

GenNex Manpower | Senior Executive HR | Oct 2004 – Oct 2007 | Delhi
• Recruitment and selection for IT clients`;

// Init
renderCountries();
refreshXray();
loadTemplate('india');
populateIndustryFilter();
applyFilters();
renderPortalDirectory();
updateResumeHints();
renderSavedResumes();
initMyProfile();
// ============================================================
// ADDITIVE FIXES ONLY — do not remove any existing code above
// ============================================================

// 1. Safer Source Directory render (fixes "0 portals")
function renderPortalDirectorySafe() {
  const tbody = document.getElementById('portalDirectoryBody');
  const countEl = document.getElementById('directoryCount');
  if (!tbody) {
    console.warn('[TA Fix] portalDirectoryBody not found in HTML');
    return;
  }
  if (typeof ALL_PORTALS === 'undefined' || !Array.isArray(ALL_PORTALS)) {
    console.warn('[TA Fix] ALL_PORTALS is missing');
    return;
  }
  if (countEl) countEl.textContent = ALL_PORTALS.length;
  tbody.innerHTML = ALL_PORTALS.map(p => {
    let actions = '';
    if (p.type === 'live') {
      const site = p.url || '#';
      const search = p.searchUrl || p.url || '#';
      actions = `
        <a class="link-btn" href="${site}" target="_blank" rel="noopener">Open site →</a>
        <button class="action-btn" onclick="openPortal('${search}')">Search TA →</button>
        <button class="action-btn tailor" onclick="fetchLiveJobs()">Fetch API</button>`;
    } else {
      const act = (typeof portalAction === 'function') ? portalAction(p) : `openPortal('${p.url || '#'}')`;
      actions = `<button class="action-btn" onclick="${act}">Search Live →</button>`;
    }
    return `<tr>
      <td><div class="role-title">${p.name}</div></td>
      <td class="company">${p.region}</td>
      <td>${p.type === 'live'
        ? '<span class="badge badge-remote">🔴 Live API</span>'
        : '<span class="badge badge-hybrid">🔍 Boolean/X-ray</span>'}</td>
      <td class="actions">${actions}</td>
    </tr>`;
  }).join('');
  console.log('[TA Fix] Source Directory rendered with', ALL_PORTALS.length, 'portals');
}

// 2. Force re-render of Source Directory after page is fully ready
setTimeout(() => {
  try {
    renderPortalDirectorySafe();
  } catch (e) {
    console.error('[TA Fix] renderPortalDirectorySafe failed', e);
  }
}, 400);

// Also re-run when user clicks the Live Jobs tab (in case DOM was not ready earlier)
document.querySelectorAll('.tab').forEach(t => {
  t.addEventListener('click', () => {
    if (t.dataset.tab === 'live' || t.dataset.tab === 'search') {
      setTimeout(renderPortalDirectorySafe, 200);
    }
  });
});

// 3. Better Live Jobs status update (prevents permanent ⏳)
const _originalFetchLiveJobs = typeof fetchLiveJobs === 'function' ? fetchLiveJobs : null;
if (_originalFetchLiveJobs) {
  window.fetchLiveJobs = async function () {
    try {
      await _originalFetchLiveJobs();
    } catch (err) {
      console.warn('[TA Fix] fetchLiveJobs error', err);
    }
    // Always update the timestamp even if some APIs failed
    const ts = document.getElementById('lastFetchedAt');
    if (ts) ts.textContent = new Date().toLocaleTimeString();
  };
}

// 4. Optional: merge extra portals later without touching original ALL_PORTALS
// You can grow this array and call mergeExtraPortals() anytime
const EXTRA_PORTALS = [
  // Example – add more here or load from portals.json later
  // { name: 'Example Extra', region: 'Global', type: 'xray', url: 'https://example.com' }
];

function mergeExtraPortals() {
  if (typeof ALL_PORTALS === 'undefined') return;
  const existingNames = new Set(ALL_PORTALS.map(p => p.name.toLowerCase()));
  let added = 0;
  EXTRA_PORTALS.forEach(p => {
    if (p.name && !existingNames.has(p.name.toLowerCase())) {
      ALL_PORTALS.push(p);
      existingNames.add(p.name.toLowerCase());
      added++;
    }
  });
  if (added > 0) {
    renderPortalDirectorySafe();
    console.log('[TA Fix] Added', added, 'extra portals. Total now:', ALL_PORTALS.length);
  }
}

// Uncomment the next line when you have entries in EXTRA_PORTALS
// mergeExtraPortals();
// ============================================================
// GEOGRAPHY FILTER + KPI FIX (additive only)
// ============================================================

function normalizeGeoFilter(raw) {
  if (!raw) return 'all';
  const v = String(raw).trim().toLowerCase();
  if (v === 'all' || v === '') return 'all';
  if (v === 'india' || v === 'domestic') return 'India';
  if (v.includes('global') || v.includes('ex-india') || v.includes('worldwide')) return 'Global';
  if (v === 'emea' || v.includes('europe') || v.includes('middle east')) return 'EMEA';
  if (v === 'apac' || v.includes('asia') || v.includes('pacific')) return 'APAC';
  if (v === 'americas' || v.includes('america') || v === 'usa' || v === 'canada') return 'Americas';
  // fallback: keep original casing used in jobs[].geo
  if (raw === 'India' || raw === 'EMEA' || raw === 'APAC' || raw === 'Americas' || raw === 'Global') return raw;
  return raw;
}

function jobMatchesGeo(j, geoNorm) {
  if (geoNorm === 'all') return true;
  const g = (j.geo || '').trim();
  if (geoNorm === 'Global') return g !== 'India';           // rest of world
  if (geoNorm === 'India') return g === 'India';
  // EMEA / APAC / Americas — exact match on job.geo
  return g === geoNorm;
}

// Override getFilteredJobs with corrected geography logic
window.getFilteredJobs = function () {
  const geoRaw = (document.getElementById('filterGeo') || {}).value || 'all';
  const geoNorm = normalizeGeoFilter(geoRaw);
  const industry = (document.getElementById('filterIndustry') || {}).value || 'all';
  const level = (document.getElementById('filterLevel') || {}).value || 'all';
  const mode = (document.getElementById('filterMode') || {}).value || 'all';
  const minExpEl = document.getElementById('filterMinExp');
  const minExp = minExpEl ? parseInt(minExpEl.value, 10) : 0;
  const searchEl = document.getElementById('filterSearch');
  const search = searchEl ? searchEl.value.toLowerCase().trim() : '';

  if (typeof jobs === 'undefined' || !Array.isArray(jobs)) return [];

  return jobs.filter(j => {
    if (j.expMax != null && j.expMax < minExp) return false;
    if (!jobMatchesGeo(j, geoNorm)) return false;
    if (industry !== 'all' && j.industry !== industry) return false;
    if (level !== 'all' && j.level !== level) return false;
    if (mode !== 'all' && j.mode !== mode) return false;
    if (search) {
      const hay = (j.title + ' ' + j.company + ' ' + j.location + ' ' + j.industry + ' ' + (j.geo || '')).toLowerCase();
      if (!hay.includes(search)) return false;
    }
    return true;
  });
};

// Override updateKPIs so cards reflect the active geography filter
window.updateKPIs = function (f) {
  const list = f || [];
  const totalEl = document.getElementById('kpiTotal');
  const indiaEl = document.getElementById('kpiIndia');
  const globalEl = document.getElementById('kpiGlobal');
  const expEl = document.getElementById('kpiExp');
  const indEl = document.getElementById('kpiIndustry');

  if (totalEl) totalEl.textContent = list.length;

  const indiaCount = list.filter(j => (j.geo || '') === 'India').length;
  const emeaCount = list.filter(j => (j.geo || '') === 'EMEA').length;
  const apacCount = list.filter(j => (j.geo || '') === 'APAC').length;
  const americasCount = list.filter(j => (j.geo || '') === 'Americas').length;
  const restCount = list.length - indiaCount;

  if (indiaEl) indiaEl.textContent = indiaCount;
  if (globalEl) globalEl.textContent = restCount; // Worldwide (ex-India) within current filter

  // Optional: update subtitle labels if elements exist
  const indiaSub = document.querySelector('#kpiIndia + * , [data-kpi="india-sub"]');
  const globalSub = document.querySelector('#kpiGlobal + * , [data-kpi="global-sub"]');
  // Keep existing HTML labels; numbers are now correct for the filtered set

  if (expEl) {
    if (list.length) {
      const mins = list.map(j => j.expMin || 0);
      const maxs = list.map(j => j.expMax || 0);
      expEl.textContent =
        Math.round(mins.reduce((a, b) => a + b, 0) / list.length) +
        '–' +
        Math.round(maxs.reduce((a, b) => a + b, 0) / list.length);
    } else {
      expEl.textContent = '—';
    }
  }

  if (indEl) {
    const counts = {};
    list.forEach(j => {
      const key = j.industry || 'Other';
      counts[key] = (counts[key] || 0) + 1;
    });
    const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
    indEl.textContent = top ? String(top[0]).split(' / ')[0] : '—';
  }

  // Debug (optional — remove later)
  console.log('[Geo Fix] filtered:', list.length,
    '| India:', indiaCount, '| EMEA:', emeaCount, '| APAC:', apacCount, '| Americas:', americasCount);
};

// Re-apply filters once after this patch loads
setTimeout(() => {
  try {
    if (typeof applyFilters === 'function') applyFilters();
    console.log('[Geo Fix] Geography filter override active');
  } catch (e) {
    console.warn('[Geo Fix] applyFilters retry failed', e);
  }
}, 500);
