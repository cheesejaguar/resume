// Data model derived from the provided PDFs.
// Replace or extend these arrays to update content without touching HTML.

const data = {
  person: {
    name: "Aaron Cohen",
    title: "VP, AI Software & Autonomy",
    location: "San Jose • SF Bay Area",
    email: "aaronxcohen@gmail.com",
    linkedin: "https://www.linkedin.com/in/aaronjcohen",
    summary: "Executive leader and 0→1 builder across agentic AI, autonomy and systems engineering. At NVIDIA, managed L1/L2 ADAS feature definitions and built an agentic AI framework to auto-generate requirements, tests, and simulation code. Earlier: founded perception validation at Cruise (10× org growth) and led autonomous testing at Lyft. NASA spacecraft systems engineer with 14 publications.",
    chips: ["Agentic AI", "LLMOps", "Autonomy Platforms", "Systems Engineering", "Safety & ASPICE/ISO 26262", "RAG & Graph Reasoning"],
    facts: [
      "14 publications (NASA & peers)",
      "Primary inventor on patent‑pending agentic workflows",
      "Patents incl. Affordable Vehicle Avionics System",
      "Worked with Mercedes‑Benz & JLR",
      "English (native), Hebrew & Spanish (elementary)"
    ]
  },

  hero: [
    { k: "NASA", v: "7+ yrs", note: "Spacecraft & flight systems" },
    { k: "NVIDIA", v: "4+ yrs", note: "ADAS L1/L2 & AI tooling" },
    { k: "Cruise + Lyft", v: "3+ yrs", note: "Autonomy testing at scale" },
    { k: "Publications", v: "14", note: "Peer‑reviewed" },
    { k: "Teams", v: "10+ ppl", note: "US, China, EU contractors" }
  ],

  wins: [
    {
      title: "Agentic AI for Systems Engineering (NVIDIA)",
      badge: "0→1 product",
      text: "Incubated and led an internal startup to build agentic AI that decomposes product docs into engineering requirements, auto‑generates test cases and Python simulation code, and critiques outputs. Patent pending as primary inventor.",
      tags: ["AI", "LLMOps", "Tooling"]
    },
    {
      title: "L2 ADAS Leadership for Global OEMs",
      badge: "Execution",
      text: "Owned system requirements for 9 Level‑2 features (ACC, LK, ALC, L2+/L2++ incl. Address‑to‑Address urban driving). Drove roll‑outs and collaborated with Mercedes‑Benz and Jaguar Land Rover.",
      tags: ["Autonomy", "Safety", "OEMs"]
    },
    {
      title: "Perception Simulation Pipeline (Cruise)",
      badge: "Scale",
      text: "Core developer automating the flow from on‑road events to log‑replay and end‑to‑end simulations; helped enable Cruise’s first uninterrupted 60‑minute autonomous SF drive; supported 10× org growth in 18 months and worked closely with the CEO.",
      tags: ["Simulation", "ML Systems"]
    },
    {
      title: "V&V Philosophy & Toyota Transition (Lyft)",
      badge: "Process",
      text: "Built AV division philosophy and processes for verification/validation; member of the transition team during Toyota’s acquisition of Level 5.",
      tags: ["V&V", "Leadership"]
    },
    {
      title: "Spacecraft & Flight Systems (NASA)",
      badge: "Deep Tech",
      text: "Electrical/Test Engineer for EcAMSat, UAV RF link design for GlobalHawk, sub‑orbital rocket avionics inventor, TechEdSat project management, and classified X‑37 work.",
      tags: ["Aerospace", "Systems"]
    },
    {
      title: "Disaster Response Communications (FEMA CA‑TF3)",
      badge: "Service",
      text: "Deployed to Hurricane Olivia (2018) and North Complex Fire (2020) to establish emergency communications for US&R operations.",
      tags: ["Operations", "Comms"]
    }
  ],

  experience: [
    {
      org: "NVIDIA",
      role: "Manager, Software Systems",
      when: "Jun 2025 – Present",
      where: "Santa Clara, CA",
      bullets: [
        "Leading design & implementation of a generative AI framework for complex reasoning in systems engineering using RAG, graph reasoning, and critique‑driven iteration with role‑specific agents (researchers, critics, linters).",
      ],
      tags: ["AI", "Systems", "Leadership"]
    },
    {
      org: "NVIDIA",
      role: "Manager, Software Systems",
      when: "Dec 2022 – Jun 2025",
      where: "Santa Clara, CA",
      bullets: [
        "System requirements owner for nine L2 autonomous features: Cruise Control, ACC, ACC+LK, Automatic Lane Change Assist, L2+, L2++, Hands‑Free L2, Emergency Escalating Stop.",
        "Product Owner for generative AI tool that creates requirements, test cases, and simulation code; supported Mercedes‑Benz & Jaguar Land Rover."
      ],
      tags: ["Autonomy", "Safety", "AI"]
    },
    {
      org: "NVIDIA",
      role: "Senior Software Systems Engineer",
      when: "Aug 2021 – Dec 2022",
      where: "Santa Clara, CA",
      bullets: [
        "Document‑based SE (JAMA), Model‑based SE (Cameo/MagicDraw), ASPICE/ISO 26262."
      ],
      tags: ["Systems", "Safety"]
    },
    {
      org: "Lyft — Level 5",
      role: "Staff Quality Engineer",
      when: "Feb 2020 – Aug 2021",
      where: "Palo Alto, CA",
      bullets: [
        "Built AV division philosophy & process for software verification and validation; on transition team for Toyota acquisition."
      ],
      tags: ["V&V", "Process"]
    },
    {
      org: "Cruise",
      role: "Senior Systems Test Engineer",
      when: "Jun 2018 – Jan 2020",
      where: "San Francisco, CA",
      bullets: [
        "Built scalable automatic test generation and E2E simulations for AV stack (CV, RADAR/LiDAR, Sensor Fusion & Prediction).",
        "Automated conversion of on‑road events to log‑replay simulations; onboarding instructor & hiring committee member."
      ],
      tags: ["Simulation", "Autonomy", "Scale"]
    },
    {
      org: "NASA Ames Research Center",
      role: "Systems Engineer III & Earlier Roles",
      when: "2010 – 2018",
      where: "Moffett Field, CA",
      bullets: [
        "EcAMSat Electrical & Test Engineer; UAV RF Link design (CLAS‑ACT); AVA Test Engineer & Launch Campaign Manager; NASA UTM Systems Engineer.",
        "TechEdSat PM; CHARM C&DH lead; EDSN Flight Software; PSRP safety approvals; 14 publications."
      ],
      tags: ["Aerospace", "Systems", "Research"]
    },
    {
      org: "Menlo Park Fire Protection District — CA‑TF3",
      role: "Communications Specialist (US&R)",
      when: "2017 – Present",
      where: "Menlo Park, CA",
      bullets: [
        "Deployed to disaster zones establishing communications: Hurricane Olivia (2018), North Complex Fire (2020)."
      ],
      tags: ["Operations", "Service"]
    }
  ],

  capabilities: [
    { title: "Agentic AI & LLMOps", text: "RAG, graph reasoning, critique loops, role‑based agents; tool‑assisted requirements & test generation." },
    { title: "Autonomy & ADAS", text: "L1/L2 features, LK/ACC/ALC, L2+/L2++, safety & functional decomposition." },
    { title: "Systems Engineering", text: "JAMA, Cameo/MagicDraw; requirements authoring; architecture; test case definition." },
    { title: "Verification & Validation", text: "Scenario orchestration, log replay, CI/CD for simulation fleets, metrics for readiness." },
    { title: "Leadership", text: "0→1 team building, multi‑site teams (US/China/EU contractors), OEM partnerships." },
    { title: "Safety & Compliance", text: "ASPICE, ISO 26262, incident response communications." }
  ],

  certs: [
    "National Response Framework — Introduction",
    "CPR/AED for Professional Rescuers & Health Care Providers",
    "Executive Protection & Evasive Driving",
    "FEMA Communications Specialist",
    "Introduction to Incident Command System"
  ],

  service: [
    "CA‑TF3 (FEMA US&R) deployments: Hurricane Olivia (2018), North Complex Fire (2020)",
    "Volunteer technical communications specialist for disaster response"
  ],

  patents: [
    { title: "Affordable Vehicle Avionics System", note: "Named inventor" },
    { title: "Agentic Workflows for Managing and Testing System Requirements", note: "Patent pending — Primary inventor" }
  ],

  publications: [
    { title: "EcAMSat spaceflight measurements of the role of σs in antibiotic resistance of stationary phase Escherichia coli in microgravity", type: "journal_article", venue: "Life Sciences in Space Research", volume: "24", date: "2019-01" },
    { title: "EcAMSat: Small Satellite to Examine E. coli's Response in Microgravity to the Antibiotic Gentamicin", type: "conference_paper", venue: "American Society for Gravitational and Space Research (ASGSR)", date: "2018-11-03" },
    { title: "EcAMSat: A Small Satellite Flown to Explore the Role a Sigma Factor Plays in E. coli's Response to the Antibiotic Gentamicin", type: "conference_paper", venue: "34th Annual Meeting, ASGSR", date: "2018-10-29" },
    { title: "EcAMSat and BioSentinel: Autonomous Bio Nanosatellites Addressing Strategic Knowledge Gaps for Manned Spaceflight Beyond LEO", type: "invited_talk", venue: "SUNY Polytechnic Institute (CNSE) Colloquium Series", date: "2017-03-24" },
    { title: "2016", type: "book", venue: "Blurb", date: "2017-01", identifiers: { isbn: "9781366519481" }, notes: "Photography collection." },
    { title: "Payload hardware and experimental protocol development to enable future testing of the effect of space microgravity on the resistance to gentamicin of uropathogenic Escherichia coli and its σs-deficient mutant", type: "journal_article", venue: "Life Sciences in Space Research", volume: "15", date: "2017-01", identifiers: { doi: "10.1016/j.lssr.2017.05.001" } },
    { title: "EcAMSat: Effect of Space-Flight on Antibiotic Resistance of a Pathogenic Bacterium and its Genetic Basis", type: "conference_paper", venue: "AIAA Annual Meeting of the American Society for Gravitational and Space Research", date: "2015-11-11" },
    { title: "Cost-Effective Icy Bodies Exploration using Small Satellite Missions", type: "conference_paper", venue: "International Astronautical Congress (IAC 2015)", date: "2015-10-12", identifiers: { paper_no: "IAC-15-B4.8.12" } },
    { title: "E. coli AntiMicrobial Satellite (EcAMSat): Science Payload System Development and Test", type: "conference_paper", venue: "Small Satellite Conference", date: "2014-08-01", identifiers: { paper_no: "SSC14-WK-8" } },
    { title: "Small Spacecraft Technology State of the Art", type: "technical_report", venue: "NASA", date: "2014-02-01", identifiers: { report_no: "NASA/TP–2014–216648/REV1" } },
    { title: "From Napkin to Orbit in 9 Months; The TechEdSat Spacecraft Mission", type: "technical_report", venue: "NASA Technical Report Server", date: "2013-08-10" },
    { title: "From Napkin to Orbit in 9 Months: The TechEdSat Spacecraft Mission", type: "conference_paper", venue: "Small Satellite Conference", date: "2013" },
    { title: "Systems Development of Synchronized Network of Autonomous Positioning Satellites (SNAPS)", type: "conference_paper", venue: "AIAA SPACE 2011 Conference & Exposition", date: "2011-09-01", identifiers: { paper_no: "AIAA-2011-7208" } },
    { title: "Electromagnetic Orientation System for Nanosatellite Navigation", type: "conference_paper", venue: "AIAA Guidance, Navigation, and Control Conference 2011", date: "2011-08-08", identifiers: { paper_no: "AIAA-2011-6466" } }
  ],

  awards: [
    { title: "The \"It’s Alive!!!\" Award", issuer: "AIAA Small Satellite Technical Committee", date: "2018-05", description: "For presentation titled “NASA’s First 6U CubeSat: EcAMSat’s Preliminary Flight Results and Lessons Learned.”" },
    { title: "NASA Group Achievement Award: ECAMSat Project Team", issuer: "NASA", date: "2018-01" },
    { title: "Software Initial Award", issuer: "NASA", date: "2017-01", description: "For contributing to the release of scientific/technical software: \"Affordable Vehicle Avionics (AVA) System ARC-17725-1\"" },
    { title: "Small Spacecraft Tech State of the Art Report Team — Group Achievement Award", issuer: "NASA Honor Award", date: "2014-11", description: "Participation in writing the Small Spacecraft Technology State of the Art paper." },
    { title: "Space Flight Awareness Team Award", issuer: "NASA (Ames Research Center ISS Team)", date: "2014-05", description: "Recognition for contributions supporting NASA's human spaceflight program." },
    { title: "CHARM Spacecraft Development Team — Group Achievement Award", issuer: "NASA Ames Honor Awards", date: "2013-06" },
    { title: "TechEdSat Project Team — Group Achievement Award", issuer: "NASA Ames Honor Awards", date: "2013-06" },
    { title: "Outstanding Aerospace Engineering Award", issuer: "San Jose State University — Mechanical & Aerospace Engineering", date: "2012-05", description: "For management of the TechEdSat spaceflight mission." },
    { title: "Aerospace Engineering Outstanding Leadership Award", issuer: "San Jose State University — Aerospace Engineering", date: "2011-05", description: "For project management of Spacecraft Design 2010–2011." }
  ]
};

// --------- DOM helpers ---------
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

// Populate hero stats
const heroStats = $("#heroStats");
data.hero.forEach(({k,v,note},i)=>{
  const li = document.createElement("li");
  li.innerHTML = `<div class="dot">${v}</div><div><div class="title">${k}</div><div class="muted">${note??""}</div></div>`;
  heroStats.appendChild(li);
});

// About
$("#aboutSummary").textContent = data.person.summary;
const chipsEl = $("#aboutChips");
data.person.chips.forEach(c => {
  const span = document.createElement("span");
  span.className = "tag";
  span.textContent = c;
  chipsEl.appendChild(span);
});
const factsEl = $("#quickFacts");
data.person.facts.forEach(f => {
  const li = document.createElement("li");
  li.textContent = f;
  factsEl.appendChild(li);
});

// Wins
const winsEl = $("#winsList");
data.wins.forEach(w => {
  const card = document.createElement("article");
  card.className = "card rise";
  card.innerHTML = `
    <div class="badge">${w.badge}</div>
    <h3>${w.title}</h3>
    <p>${w.text}</p>
    <div class="tags">${w.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
    <div class="links" style="margin-top:.6rem">${(w.links||[]).map(l=>`<a href="${l.href}" class="btn ghost" target="_blank" rel="noopener">${l.label}</a>`).join("")}</div>
  `;
  winsEl.appendChild(card);
});

// Experience with filters
const xpEl = $("#xpTimeline");
const filters = ["All","AI","Autonomy","Aerospace","Systems","Leadership","V&V","Simulation","Safety","Operations","Process","Scale","Research","Service"];
const filterEl = $("#xpFilters");
let activeFilter = "All";

filters.forEach(f => {
  const btn = document.createElement("button");
  btn.textContent = f;
  btn.className = f===activeFilter ? "active" : "";
  btn.addEventListener("click", ()=>{
    activeFilter = f;
    $$(".filters button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    renderXP();
  });
  filterEl.appendChild(btn);
});

function renderXP(){
  xpEl.innerHTML = "";
  const items = data.experience.filter(item => activeFilter==="All" || item.tags.includes(activeFilter));
  items.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="title">${item.role} · ${item.org}</div>
      <div class="meta">${item.when} — ${item.where}</div>
      <ul class="facts">${item.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>
      <div class="tags">${item.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
    `;
    xpEl.appendChild(li);
  });
}
renderXP();

// Capabilities
const capGrid = $("#capGrid");
data.capabilities.forEach(c => {
  const el = document.createElement("div");
  el.className = "cap";
  el.innerHTML = `<h4>${c.title}</h4><p>${c.text}</p>`;
  capGrid.appendChild(el);
});

// Certs & Service
const certsList = $("#certsList");
data.certs.forEach(c => {
  const li = document.createElement("li");
  li.textContent = c;
  certsList.appendChild(li);
});
const serviceList = $("#serviceList");
data.service.forEach(s => {
  const li = document.createElement("li");
  li.textContent = s;
  serviceList.appendChild(li);
});

// Patents & publications
const patentCards = $("#patentCards");
data.patents.forEach(p => {
  const card = document.createElement("article");
  card.className = "card rise";
  card.innerHTML = `<h3>${p.title}</h3><p class="muted">${p.note||""}</p>`;
  patentCards.appendChild(card);
});
const pubList = $("#pubList");
if(pubList){
  pubList.innerHTML = "";
  data.publications.forEach(pub => {
    const li = document.createElement("li");
    const bits = [];
    if(pub.venue) bits.push(pub.venue);
    if(pub.volume) bits.push(`Vol ${pub.volume}`);
    if(pub.date) bits.push(pub.date);
    const meta = bits.join(" • ");
    li.innerHTML = `<div class="title">${pub.title}</div>${meta?`<div class="meta">${meta}</div>`:""}`;
    pubList.appendChild(li);
  });
}

// Honors & Awards
const awardsList = $("#awardsList");
if(awardsList && Array.isArray(data.awards)){
  awardsList.innerHTML = "";
  data.awards.forEach(a => {
    const li = document.createElement("li");
    const bits = [];
    if(a.issuer) bits.push(a.issuer);
    if(a.date) bits.push(a.date);
    const meta = bits.join(" • ");
    const desc = a.description ? `<div class="meta">${a.description}</div>` : "";
    li.innerHTML = `<div class="title">${a.title}</div>${meta?`<div class=\"meta\">${meta}</div>`:""}${desc}`;
    awardsList.appendChild(li);
  });
}

// Year
$("#year").textContent = new Date().getFullYear();

// Theme toggle
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
if(savedTheme){ root.setAttribute("data-theme", savedTheme); }
const themeBtn = $("#themeToggle");
function updateThemeIcon(){
  themeBtn.textContent = root.getAttribute("data-theme")==="light" ? "🌙" : "☀️";
}
updateThemeIcon();
themeBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current==="light" ? "" : "light";
  if(next) root.setAttribute("data-theme", next); else root.removeAttribute("data-theme");
  localStorage.setItem("theme", next);
  updateThemeIcon();
});

// Entrance animation (reduced motion aware)
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!prefersReduced){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add("in"); }
    });
  }, {threshold: 0.08});
  $$(".card, .cap, .timeline li, .hero-card").forEach(el=>{
    el.classList.add("reveal");
    observer.observe(el);
  });
}

