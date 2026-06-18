# JULES STATIC SITE PACK CONTENT

Generated: 2026-06-18T20:48:23Z
Repo: `JFeimster/ai-agent-library`
Target branch: `site/full-static-site-pack`

## How Jules should use this bundle

This bundle is the source-content payload for the current Jules task.

Use **Section A** and **Section B** for the current PR.

Do **not** create placeholder, minimal, empty, skeletal, or stub files. If a file path appears below, create or update that file with the full content provided.

Do **not** introduce React, Next.js, npm, package.json, a build step, server routes, ZIP files, screenshots, secrets, API keys, private customer data, or unsupported funding/credit/revenue claims.

If existing root pages already exist in the repo, compare before replacing. Preserve useful existing functionality and document meaningful overwrites in the PR body.

## Current PR scope

Use these current-pr sections:

1. Section A — Supplemental required root and directory files.
2. Section B — Required static site pack source batches.

Do not implement Section C in the current PR unless explicitly instructed. Section C is included only for optional follow-up work and review commands.

---

# Section A — Supplemental required root and directory files

These files fill the content gap Jules reported for root site files and directory/discovery pages.


## `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Agent Library | AI Agent Library</title>
  <meta name="description" content="A static-first library for reusable AI agents, skills, prompt systems, knowledge bases, schemas, examples, platform packs, and deployable AI product assets.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html"><span class="brand-mark">AI</span><span>Agent Library</span></a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html" aria-current="page">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>
  <section class="hero">
    <div class="eyebrow">Static AI Operating System</div>
    <h1>Build, browse, and package reusable AI agents.</h1>
    <p>A static-first library for reusable AI agents, skills, prompt systems, knowledge bases, schemas, examples, platform packs, and deployable AI product assets.</p>
  </section>
  <main id="main">
    <section class="section callout">
      <strong>Operator note:</strong>
      <p>This site is designed as a dependency-free static resource hub. Use it to browse agents, skills, schemas, knowledge bases, examples, platform packs, partner resources, and deployment portfolios.</p>
    </section>

    <section class="section">
      <div class="grid">
        <article class="card">
          <div class="pill-row"><span class="pill gold">Agents</span><span class="pill">Directory</span></div>
          <h2>Agent Catalog</h2>
          <p>Browse productized AI agents by category, buyer, pain solved, platform, priority, and status.</p>
          <a class="button-link" href="agent-catalog.html">Browse agents →</a>
        </article>
        <article class="card">
          <div class="pill-row"><span class="pill blue">Skills</span><span class="pill">Reusable Capabilities</span></div>
          <h2>Skill Catalog</h2>
          <p>Browse reusable skills that can power multiple agents, workflows, static pages, and platform packs.</p>
          <a class="button-link" href="skill-catalog.html">Browse skills →</a>
        </article>
        <article class="card">
          <div class="pill-row"><span class="pill purple">Knowledge</span><span class="pill">Source Layer</span></div>
          <h2>Knowledge Bases</h2>
          <p>Open source folders for funding, partner enablement, CRM, content ops, automation, local referrals, and engineering-as-marketing.</p>
          <a class="button-link" href="knowledge-bases.html">Open knowledge bases →</a>
        </article>
        <article class="card">
          <div class="pill-row"><span class="pill green">Platforms</span><span class="pill">Packaging</span></div>
          <h2>Platform Hub</h2>
          <p>Map each agent or skill to Custom GPTs, Gemini Gems, Vercel static sites, Notion, GitHub, and automation workflows.</p>
          <a class="button-link" href="platforms.html">Choose platform →</a>
        </article>
      </div>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>What this repo organizes</h2>
        <ul class="mini-list">
          <li>Agent specs and canonical agent indexes.</li>
          <li>Skill specs and SKILL.md-ready playbooks.</li>
          <li>Prompt chains, templates, schemas, and examples.</li>
          <li>Knowledge-base folders and public-safe source rules.</li>
          <li>Vercel, Custom GPT, Gemini Gem, and Flash UI portfolio records.</li>
          <li>Affiliate, partner, and local referral enablement assets.</li>
        </ul>
      </article>
      <article class="card">
        <h2>Static-first rule</h2>
        <p>Default implementation stays boring on purpose: HTML, CSS, JavaScript, JSON, and Markdown. No framework tax. No build goblin. No dependency swamp.</p>
        <div class="pill-row">
          <a class="pill gold" href="featured.html">Featured</a>
          <a class="pill gold" href="new.html">New</a>
          <a class="pill gold" href="search.html">Search</a>
          <a class="pill gold" href="contribute.html">Contribute</a>
        </div>
      </article>
    </section>

    <section class="section card">
      <h2>Public-safe operating rule</h2>
      <p>Funding, credit, affiliate, partner, platform, automation, and business-outcome pages must avoid guaranteed approvals, funding, credit outcomes, revenue, rankings, and fake social proof. Use educational, readiness, review-required, possible-fit, and next-step language.</p>
    </section>
  </main>
  <footer class="footer">
    <p><strong>AI Agent Library</strong> — reusable agents, skills, prompt systems, knowledge bases, platform packs, and deployable AI product assets.</p>
    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>
    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>
  <script src="script.js"></script>
</body>
</html>
```

## `styles.css`

```css
:root {
  --bg: #0b0f14;
  --panel: #111822;
  --panel-2: #151f2c;
  --text: #f6f7fb;
  --muted: #b6c0cf;
  --line: rgba(255,255,255,.12);
  --gold: #f6c445;
  --blue: #62b4ff;
  --green: #56d68a;
  --purple: #b889ff;
  --red: #ff7474;
  --shadow: 0 24px 80px rgba(0,0,0,.35);
  --radius: 22px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--text);
  background: radial-gradient(circle at top left, rgba(246,196,69,.14), transparent 34%), radial-gradient(circle at top right, rgba(98,180,255,.10), transparent 30%), var(--bg);
  line-height: 1.6;
}

a { color: inherit; }
.skip-link { position: absolute; left: -999px; top: 0; background: var(--gold); color: #15110a; padding: .75rem 1rem; z-index: 100; }
.skip-link:focus { left: 1rem; top: 1rem; }
.site-header { position: sticky; top: 0; z-index: 20; backdrop-filter: blur(16px); background: rgba(9,13,18,.84); border-bottom: 1px solid var(--line); }
.nav-wrap { width: min(1180px, calc(100% - 32px)); margin: 0 auto; min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
.brand { display: inline-flex; align-items: center; gap: .65rem; text-decoration: none; font-weight: 900; letter-spacing: -.02em; }
.brand-mark { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 12px; background: var(--gold); color: #121212; box-shadow: 0 0 0 4px rgba(246,196,69,.14); }
.nav-links { display: flex; align-items: center; justify-content: flex-end; gap: .45rem; flex-wrap: wrap; }
.nav-links a { color: var(--muted); text-decoration: none; font-size: .9rem; font-weight: 750; padding: .52rem .72rem; border-radius: 999px; }
.nav-links a:hover, .nav-links a[aria-current="page"] { color: var(--text); background: rgba(255,255,255,.08); }
.hero { width: min(1180px, calc(100% - 32px)); margin: 0 auto; padding: 6rem 0 3.2rem; }
.eyebrow { color: var(--gold); font-weight: 950; text-transform: uppercase; letter-spacing: .16em; font-size: .78rem; margin-bottom: 1rem; }
h1 { margin: 0; max-width: 980px; font-size: clamp(2.3rem, 7vw, 5.6rem); line-height: .95; letter-spacing: -.07em; }
h2 { margin: 0 0 .7rem; font-size: clamp(1.4rem, 2vw, 2.1rem); line-height: 1.1; letter-spacing: -.035em; }
h3 { margin: 1rem 0 .45rem; }
p { color: var(--muted); margin-top: 0; }
.hero p { max-width: 780px; font-size: 1.16rem; margin: 1.3rem 0 0; }
.hero-actions, .pill-row { display: flex; align-items: center; flex-wrap: wrap; gap: .7rem; margin-top: 1rem; }
.section { width: min(1180px, calc(100% - 32px)); margin: 0 auto; padding: 1.2rem 0; }
.grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; }
.wide-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
.two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.card, .callout, .empty-state { background: linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.035)); border: 1px solid var(--line); border-radius: var(--radius); padding: 1.25rem; box-shadow: var(--shadow); }
.callout { border-color: rgba(246,196,69,.38); background: linear-gradient(135deg, rgba(246,196,69,.13), rgba(255,255,255,.04)); }
.warning { border-color: rgba(255,116,116,.44); }
.button-link { display: inline-flex; align-items: center; justify-content: center; border: 1px solid rgba(246,196,69,.5); background: var(--gold); color: #15110a; text-decoration: none; font-weight: 900; border-radius: 999px; padding: .8rem 1rem; margin-top: .8rem; }
.button-link.secondary { background: transparent; color: var(--text); border-color: var(--line); }
.button-link:hover { transform: translateY(-1px); }
.pill { display: inline-flex; align-items: center; gap: .35rem; border: 1px solid var(--line); color: var(--muted); background: rgba(255,255,255,.05); padding: .36rem .62rem; border-radius: 999px; font-size: .78rem; font-weight: 850; text-decoration: none; }
.pill.gold { color: #161103; background: var(--gold); border-color: rgba(246,196,69,.6); }
.pill.blue { color: #05111f; background: var(--blue); }
.pill.green { color: #06170d; background: var(--green); }
.pill.purple { color: #160421; background: var(--purple); }
.pill.red { color: #240405; background: var(--red); }
.mini-list { color: var(--muted); padding-left: 1.1rem; }
.mini-list li { margin: .35rem 0; }
.toolbar { display: grid; grid-template-columns: 1.7fr 1fr 1fr; gap: .8rem; }
input, select, textarea { width: 100%; border: 1px solid var(--line); border-radius: 14px; background: rgba(255,255,255,.06); color: var(--text); padding: .85rem .9rem; font: inherit; }
option { color: #111; }
.stat-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.stat { background: rgba(255,255,255,.05); border: 1px solid var(--line); border-radius: 18px; padding: 1rem; }
.stat strong { display: block; font-size: 2rem; color: var(--gold); line-height: 1; }
.stat span { color: var(--muted); font-weight: 700; font-size: .85rem; }
.table-wrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; }
th, td { text-align: left; padding: .85rem; border-bottom: 1px solid var(--line); vertical-align: top; }
th { color: var(--gold); }
pre, code { background: rgba(0,0,0,.28); border: 1px solid var(--line); border-radius: 12px; padding: .1rem .35rem; }
pre { overflow-x: auto; padding: 1rem; color: var(--muted); }
.timeline { display: grid; gap: 1rem; }
.timeline-item { border-left: 3px solid var(--gold); padding-left: 1rem; }
.form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
.footer { width: min(1180px, calc(100% - 32px)); margin: 3rem auto 0; padding: 2rem 0 3rem; border-top: 1px solid var(--line); color: var(--muted); }
.footer a { color: var(--text); }
.empty-state { text-align: center; color: var(--muted); grid-column: 1 / -1; }
@media (max-width: 1000px) { .grid, .wide-grid { grid-template-columns: repeat(2, 1fr); } .nav-wrap { align-items: flex-start; flex-direction: column; padding: 1rem 0; } }
@media (max-width: 720px) { .grid, .wide-grid, .two-col, .toolbar, .stat-row, .form-grid { grid-template-columns: 1fr; } .hero { padding-top: 3.5rem; } }
```

## `script.js`

```js
window.AILibrary = (() => {
  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  async function fetchJSON(paths, fallback = []) {
    const list = Array.isArray(paths) ? paths : [paths];
    for (const path of list) {
      try {
        const response = await fetch(path, { cache: "no-store" });
        if (response.ok) return await response.json();
      } catch (error) {}
    }
    return fallback;
  }

  function unique(values) {
    return [...new Set((values || []).filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b)));
  }

  function normalizeAgent(agent, index = 0) {
    return {
      name: agent.name || `Agent ${index + 1}`,
      slug: agent.slug || `agent-${index + 1}`,
      category: agent.category || "Uncategorized",
      buyer: agent.buyer || agent.audience || "Builder / operator",
      pain_solved: agent.pain_solved || agent.problem_solved || agent.description || "Reusable AI agent pattern.",
      monetization: agent.monetization || "TBD",
      platform: agent.platform || "Platform TBD",
      status: agent.status || "Draft",
      priority: agent.priority || "Medium",
      tags: agent.tags || [],
      file: agent.file || ""
    };
  }

  function normalizeSkill(skill, index = 0) {
    return {
      name: skill.name || `Skill ${index + 1}`,
      slug: skill.slug || `skill-${index + 1}`,
      category: skill.category || "Uncategorized",
      audience: skill.audience || "Builder / operator",
      problem_solved: skill.problem_solved || skill.description || "Reusable skill pattern.",
      recommended_apps: skill.recommended_apps || skill.apps || [],
      priority: skill.priority || "Medium",
      status: skill.status || "Draft",
      path: skill.path || skill.file || ""
    };
  }

  function setYear() {
    document.querySelectorAll("[data-year]").forEach((node) => {
      node.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener("DOMContentLoaded", setYear);

  return { escapeHTML, fetchJSON, unique, normalizeAgent, normalizeSkill, setYear };
})();
```

## `agent-catalog.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agent Catalog | AI Agent Library</title>
  <meta name="description" content="Browse productized AI agents by category, buyer, pain solved, platform, status, priority, and tags.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html"><span class="brand-mark">AI</span><span>Agent Library</span></a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html" aria-current="page">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>
  <section class="hero">
    <div class="eyebrow">Agent Directory</div>
    <h1>Agent Catalog</h1>
    <p>Browse productized AI agents by category, buyer, pain solved, platform, status, priority, and tags.</p>
  </section>
  <main id="main">
    <section class="section">
      <div class="toolbar">
        <input id="searchInput" type="search" placeholder="Search agents...">
        <select id="categoryFilter"><option value="all">All categories</option></select>
        <select id="sortSelect"><option value="priority">Sort by priority</option><option value="name">Sort by name</option><option value="category">Sort by category</option></select>
      </div>
    </section>
    <section class="section"><div id="stats" class="stat-row"></div></section>
    <section class="section"><div id="grid" class="wide-grid"></div></section>
    <section class="section two-col">
      <article class="card"><h2>Agent card standard</h2><ul class="mini-list"><li>Name and category.</li><li>Buyer and pain solved.</li><li>Platform target and priority.</li><li>Source file path and tags.</li></ul></article>
      <article class="card"><h2>Next build path</h2><p>Use the agent schema and knowledge-base folders to turn high-priority draft agents into per-agent Markdown specs.</p><a class="button-link" href="schemas/agent.schema.json">Open agent schema →</a></article>
    </section>
  </main>
  <footer class="footer">
    <p><strong>AI Agent Library</strong> — reusable agents, skills, prompt systems, knowledge bases, platform packs, and deployable AI product assets.</p>
    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>
    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>
  <script src="script.js"></script>
  <script>
    (async () => {
      const raw = await AILibrary.fetchJSON(["agent-index.json", "site-data/agents.fallback.json"], []);
      const agents = raw.map(AILibrary.normalizeAgent);
      const categorySelect = document.getElementById("categoryFilter");
      const searchInput = document.getElementById("searchInput");
      const sortSelect = document.getElementById("sortSelect");
      const stats = document.getElementById("stats");
      const grid = document.getElementById("grid");
      AILibrary.unique(agents.map(a => a.category)).forEach(category => categorySelect.insertAdjacentHTML("beforeend", `<option value="${AILibrary.escapeHTML(category)}">${AILibrary.escapeHTML(category)}</option>`));
      function weight(priority) { return { High: 1, high: 1, Medium: 2, medium: 2, Low: 3, low: 3 }[priority] || 9; }
      function render() {
        const q = searchInput.value.toLowerCase();
        const cat = categorySelect.value;
        const sort = sortSelect.value;
        let visible = agents.filter(a => [a.name, a.category, a.buyer, a.pain_solved, a.platform, a.status, (a.tags || []).join(" ")].join(" ").toLowerCase().includes(q) && (cat === "all" || a.category === cat));
        if (sort === "name") visible.sort((a,b) => a.name.localeCompare(b.name));
        if (sort === "category") visible.sort((a,b) => `${a.category}${a.name}`.localeCompare(`${b.category}${b.name}`));
        if (sort === "priority") visible.sort((a,b) => weight(a.priority) - weight(b.priority));
        stats.innerHTML = `<div class="stat"><strong>${agents.length}</strong><span>Total agents</span></div><div class="stat"><strong>${AILibrary.unique(agents.map(a => a.category)).length}</strong><span>Categories</span></div><div class="stat"><strong>${visible.length}</strong><span>Visible results</span></div>`;
        grid.innerHTML = visible.map(a => `<article class="card"><div class="pill-row"><span class="pill gold">${AILibrary.escapeHTML(a.category)}</span><span class="pill">${AILibrary.escapeHTML(a.priority)}</span><span class="pill">${AILibrary.escapeHTML(a.status)}</span></div><h2>${AILibrary.escapeHTML(a.name)}</h2><p><strong>Buyer:</strong> ${AILibrary.escapeHTML(a.buyer)}</p><p>${AILibrary.escapeHTML(a.pain_solved)}</p><p><strong>Platform:</strong> ${AILibrary.escapeHTML(a.platform)}</p><div class="pill-row">${(a.tags || []).map(t => `<span class="pill">${AILibrary.escapeHTML(t)}</span>`).join("")}</div>${a.file ? `<a class="button-link secondary" href="${AILibrary.escapeHTML(a.file)}">Open source file →</a>` : `<a class="button-link secondary" href="contribute.html">Create source file →</a>`}</article>`).join("") || `<div class="empty-state">No matching agents.</div>`;
      }
      [searchInput, categorySelect, sortSelect].forEach(el => { el.addEventListener("input", render); el.addEventListener("change", render); });
      render();
    })();
  </script>
</body>
</html>
```

## `categories.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Categories | AI Agent Library</title>
  <meta name="description" content="Browse the library by operating category across agents, skills, prompts, knowledge bases, platform packs, examples, and portfolio assets.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html"><span class="brand-mark">AI</span><span>Agent Library</span></a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html" aria-current="page">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>
  <section class="hero">
    <div class="eyebrow">Discovery</div>
    <h1>Categories</h1>
    <p>Browse the library by operating category across agents, skills, prompts, knowledge bases, platform packs, examples, and portfolio assets.</p>
  </section>
  <main id="main">
    <section class="section callout"><strong>Category rule:</strong><p>Categories are the first layer of navigation. Tags handle cross-cutting discovery. Keep category names durable and obvious.</p></section>
    <section class="section"><div id="categoryGrid" class="grid"></div></section>
  </main>
  <footer class="footer">
    <p><strong>AI Agent Library</strong> — reusable agents, skills, prompt systems, knowledge bases, platform packs, and deployable AI product assets.</p>
    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>
    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>
  <script src="script.js"></script>
  <script>
    (async () => {
      const categories = await AILibrary.fetchJSON("site-data/categories.json", []);
      const grid = document.getElementById("categoryGrid");
      grid.innerHTML = categories.map(c => `<article class="card"><div class="pill-row"><span class="pill gold">Category</span></div><h2>${AILibrary.escapeHTML(c.name)}</h2><p>${AILibrary.escapeHTML(c.description)}</p><a class="button-link secondary" href="search.html?q=${encodeURIComponent(c.name)}">Search this category →</a></article>`).join("") || `<div class="empty-state">No categories found.</div>`;
    })();
  </script>
</body>
</html>
```

## `tags.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tags | AI Agent Library</title>
  <meta name="description" content="Browse cross-cutting tags for agents, skills, prompt systems, schemas, knowledge bases, examples, and portfolio assets.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html"><span class="brand-mark">AI</span><span>Agent Library</span></a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>
  <section class="hero">
    <div class="eyebrow">Discovery</div>
    <h1>Tags</h1>
    <p>Browse cross-cutting tags for agents, skills, prompt systems, schemas, knowledge bases, examples, and portfolio assets.</p>
  </section>
  <main id="main">
    <section class="section card"><h2>Tag cloud</h2><p>Use tags to find assets across categories. Example: funding, crm, automation, schema, vercel, custom-gpt, affiliate, and public-safe.</p><div id="tagCloud" class="pill-row"></div></section>
  </main>
  <footer class="footer">
    <p><strong>AI Agent Library</strong> — reusable agents, skills, prompt systems, knowledge bases, platform packs, and deployable AI product assets.</p>
    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>
    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>
  <script src="script.js"></script>
  <script>
    (async () => {
      const tags = await AILibrary.fetchJSON("site-data/tags.json", []);
      const wrap = document.getElementById("tagCloud");
      wrap.innerHTML = tags.map(tag => `<a class="pill gold" href="search.html?q=${encodeURIComponent(tag)}">${AILibrary.escapeHTML(tag)}</a>`).join("") || `<div class="empty-state">No tags found.</div>`;
    })();
  </script>
</body>
</html>
```

## `search.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search | AI Agent Library</title>
  <meta name="description" content="Search agents, skills, featured resources, categories, and reusable AI Agent Library assets from one static page.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html"><span class="brand-mark">AI</span><span>Agent Library</span></a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html" aria-current="page">Search</a>
      </nav>
    </div>
  </header>
  <section class="hero">
    <div class="eyebrow">Discovery</div>
    <h1>Search</h1>
    <p>Search agents, skills, featured resources, categories, and reusable AI Agent Library assets from one static page.</p>
  </section>
  <main id="main">
    <section class="section"><div class="toolbar"><input id="siteSearch" type="search" placeholder="Search agents, skills, schemas, workflows..."><a class="button-link secondary" href="agent-catalog.html">Agent catalog</a><a class="button-link secondary" href="skill-catalog.html">Skill catalog</a></div></section>
    <section class="section"><div id="results" class="wide-grid"></div></section>
  </main>
  <footer class="footer">
    <p><strong>AI Agent Library</strong> — reusable agents, skills, prompt systems, knowledge bases, platform packs, and deployable AI product assets.</p>
    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>
    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>
  <script src="script.js"></script>
  <script>
    (async () => {
      const [agentsRaw, skillsRaw, featuredRaw] = await Promise.all([
        AILibrary.fetchJSON(["agent-index.json", "site-data/agents.fallback.json"], []),
        AILibrary.fetchJSON(["skills/skill-index.json", "site-data/skills.fallback.json"], []),
        AILibrary.fetchJSON("site-data/featured.json", [])
      ]);
      const items = [
        ...agentsRaw.map((a, i) => ({ type: "Agent", title: AILibrary.normalizeAgent(a, i).name, category: AILibrary.normalizeAgent(a, i).category, description: AILibrary.normalizeAgent(a, i).pain_solved, url: AILibrary.normalizeAgent(a, i).file || "agent-catalog.html" })),
        ...skillsRaw.map((s, i) => ({ type: "Skill", title: AILibrary.normalizeSkill(s, i).name, category: AILibrary.normalizeSkill(s, i).category, description: AILibrary.normalizeSkill(s, i).problem_solved, url: AILibrary.normalizeSkill(s, i).path || "skill-catalog.html" })),
        ...featuredRaw.map(f => ({ type: f.type || "Featured", title: f.title, category: f.category, description: f.description, url: f.url || "featured.html" }))
      ];
      const q = document.getElementById("siteSearch");
      const grid = document.getElementById("results");
      const params = new URLSearchParams(location.search);
      q.value = params.get("q") || "";
      function render() {
        const term = q.value.toLowerCase();
        const visible = items.filter(item => [item.type, item.title, item.category, item.description].join(" ").toLowerCase().includes(term));
        grid.innerHTML = visible.map(item => `<article class="card"><div class="pill-row"><span class="pill gold">${AILibrary.escapeHTML(item.type)}</span><span class="pill">${AILibrary.escapeHTML(item.category || "General")}</span></div><h2>${AILibrary.escapeHTML(item.title)}</h2><p>${AILibrary.escapeHTML(item.description || "")}</p><a class="button-link secondary" href="${AILibrary.escapeHTML(item.url)}">Open result →</a></article>`).join("") || `<div class="empty-state">No matching results.</div>`;
      }
      q.addEventListener("input", render);
      render();
    })();
  </script>
</body>
</html>
```

## `featured.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Featured | AI Agent Library</title>
  <meta name="description" content="Featured agents, skills, knowledge bases, schemas, portfolio resources, partner pages, and roadmap items.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html"><span class="brand-mark">AI</span><span>Agent Library</span></a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>
  <section class="hero">
    <div class="eyebrow">Discovery</div>
    <h1>Featured Assets</h1>
    <p>Featured agents, skills, knowledge bases, schemas, portfolio resources, partner pages, and roadmap items.</p>
  </section>
  <main id="main">
    <section class="section callout"><strong>Featured rule:</strong><p>Use this page for assets that are ready, strategic, high-priority, or useful as entry points for new builders.</p></section>
    <section class="section"><div id="featuredGrid" class="wide-grid"></div></section>
  </main>
  <footer class="footer">
    <p><strong>AI Agent Library</strong> — reusable agents, skills, prompt systems, knowledge bases, platform packs, and deployable AI product assets.</p>
    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>
    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>
  <script src="script.js"></script>
  <script>
    (async () => {
      const items = await AILibrary.fetchJSON("site-data/featured.json", []);
      const grid = document.getElementById("featuredGrid");
      grid.innerHTML = items.map(item => `<article class="card"><div class="pill-row"><span class="pill gold">${AILibrary.escapeHTML(item.type)}</span><span class="pill">${AILibrary.escapeHTML(item.category)}</span></div><h2>${AILibrary.escapeHTML(item.title)}</h2><p>${AILibrary.escapeHTML(item.description)}</p><a class="button-link secondary" href="${AILibrary.escapeHTML(item.url)}">Open featured asset →</a></article>`).join("") || `<div class="empty-state">No featured items found.</div>`;
    })();
  </script>
</body>
</html>
```

## `new.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New | AI Agent Library</title>
  <meta name="description" content="Recent additions and changelog entries for AI Agent Library site files, data files, knowledge bases, schemas, examples, and portfolio assets.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html"><span class="brand-mark">AI</span><span>Agent Library</span></a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>
  <section class="hero">
    <div class="eyebrow">Discovery</div>
    <h1>New & Changelog</h1>
    <p>Recent additions and changelog entries for AI Agent Library site files, data files, knowledge bases, schemas, examples, and portfolio assets.</p>
  </section>
  <main id="main">
    <section class="section callout"><strong>What changed?</strong><p>This page reads from <code>site-data/changelog.json</code> and gives users a quick path through recent repo additions.</p></section>
    <section class="section"><div id="newGrid" class="wide-grid"></div></section>
  </main>
  <footer class="footer">
    <p><strong>AI Agent Library</strong> — reusable agents, skills, prompt systems, knowledge bases, platform packs, and deployable AI product assets.</p>
    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>
    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>
  <script src="script.js"></script>
  <script>
    (async () => {
      const items = await AILibrary.fetchJSON("site-data/changelog.json", []);
      const grid = document.getElementById("newGrid");
      grid.innerHTML = items.map(item => `<article class="card"><div class="pill-row"><span class="pill gold">${AILibrary.escapeHTML(item.type)}</span><span class="pill">${AILibrary.escapeHTML(item.date)}</span></div><h2>${AILibrary.escapeHTML(item.title)}</h2><p>${AILibrary.escapeHTML(item.summary)}</p></article>`).join("") || `<div class="empty-state">No changelog entries found.</div>`;
    })();
  </script>
</body>
</html>
```

---

# Section B — Required static site pack source batches

The following source batches contain the remaining required file content. For each subsection headed like `## `path/to/file.ext``, create or update that repo file using the code block that follows it.



<!-- SOURCE: Batch14 - README & Integration Support Files.md -->

# Source Batch: Batch14 - README & Integration Support Files.md

# you asked

message time: 2026-06-18 13:34:14

Proceed (batch 14) 

In the next message, suggest batch 15 for Jules updates, master prompt, tasks to complete in jules with prompts, etc.

---

# chatgpt response

## Batch 14 — README / Integration Support Files

## `SITE_PACK_README.md`

```md
# AI Agent Library Full Static Site Pack

This site pack adds a static-first, repo-ready website layer for **AI Agent Library**.

It is designed to work as a plain HTML/CSS/JavaScript static site with no required build step.

## Included Core Site Files

```text
index.html
styles.css
script.js
style.css
```

## Included Directory & Discovery Pages

```text
agent-catalog.html
categories.html
tags.html
search.html
featured.html
new.html
```

## Included Skills Library Pages

```text
skill-catalog.html
skill-categories.html
top-skills.html
skill-builder.html
```

## Included Legal & Trust Pages

```text
terms.html
privacy.html
disclaimer.html
affiliate-disclosure.html
data-policy.html
```

## Included Partner / Affiliate Pages

```text
get-started.html
partners.html
team.html
profile.html
```

## Included Supporting Pages

```text
platforms.html
portfolio.html
knowledge-bases.html
roadmap.html
changelog.html
contribute.html
```

## Included Knowledge Base Folders

```text
knowledge-base/
  funding/
    README.md
    index.json
    examples.md

  partner-enablement/
    README.md
    index.json
    examples.md

  crm/
    README.md
    index.json
    examples.md

  content-ops/
    README.md
    index.json
    examples.md

  automation/
    README.md
    index.json
    examples.md

  local-referrals/
    README.md
    index.json
    examples.md

  engineering-as-marketing/
    README.md
    index.json
    examples.md
```

## Included Portfolio Folders

```text
portfolio/
  vercel/
    README.md
    index.json

  custom-gpts/
    README.md
    index.json

  gemini-gems/
    README.md
    index.json

  flash-ui/
    README.md
    index.json
```

## Included Schema Files

```text
schemas/
  agent.schema.json
  custom-gpt.schema.json
  vercel-project.schema.json
  funding-product.schema.json
  webhook-event.schema.json
```

## Included Roadmap Files

```text
roadmap/
  phase-1-fast-mvp.md
  phase-2-distribution-system.md
  phase-3-marketplace-layer.md
  phase-4-platform-layer.md
```

## Included Example Folders

```text
examples/
  funding/
    README.md
    example-001.md

  partner-enablement/
    README.md
    example-001.md

  content-ops/
    README.md
    example-001.md

  automation/
    README.md
    example-001.md
```

## Included Site Data Files

```text
site-data/
  agents.fallback.json
  skills.fallback.json
  categories.json
  tags.json
  featured.json
  changelog.json
```

## Static Site Requirements

This pack assumes:

- No required framework
- No required build step
- No required package manager
- No server-side rendering
- No private API keys
- No client-exposed secrets

The site should open locally by serving the repo root with a simple static server.

Example:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080/
```

## Primary Navigation

Recommended primary nav:

```text
Home
Agents
Skills
Categories
Platforms
Knowledge
Portfolio
Roadmap
Search
```

## Footer Navigation

Recommended footer nav:

```text
Terms
Privacy
Data Policy
Affiliate Disclosure
Contribute
```

## Static Data Behavior

Dynamic pages should attempt to load canonical repo data first, then fall back to files inside `site-data/`.

Examples:

```text
agent-index.json
→ site-data/agents.fallback.json

skills/skill-index.json
→ site-data/skills.fallback.json
```

This keeps the site usable before the full index system is complete.

## Compatibility Note

Some older generated pages may reference:

```text
style.css
```

The current pack uses:

```text
styles.css
```

To prevent broken styles, keep a compatibility alias file:

```text
style.css
```

with:

```css
@import url("./styles.css");
```

## Public-Safe Language Rules

Funding, credit, affiliate, partner, platform, automation, and business outcome pages must avoid unsupported claims.

Use:

- Educational
- Readiness
- Common requirements
- Possible fit
- Review required
- Potential options
- Public-safe resource
- Next steps

Avoid:

- Guaranteed approval
- Guaranteed funding
- Guaranteed credit outcomes
- Guaranteed revenue
- Guaranteed rankings
- Everyone qualifies
- No risk
- No documents needed
- AI replaces professional review

## Repo Integration Order

Recommended order for adding files to the repo:

1. Add root site files.
2. Add legal/trust pages.
3. Add directory/discovery pages.
4. Add skills pages.
5. Add partner pages.
6. Add supporting pages.
7. Add `site-data/`.
8. Add `knowledge-base/`.
9. Add `schemas/`.
10. Add `roadmap/`.
11. Add `examples/`.
12. Add `portfolio/`.
13. Review broken links.
14. Review public-safe language.
15. Open PR.

## Recommended Validation

Before opening a PR:

- [ ] Homepage opens locally.
- [ ] CSS loads.
- [ ] JavaScript loads.
- [ ] Primary navigation links resolve.
- [ ] Footer links resolve.
- [ ] JSON files are valid.
- [ ] Schema files are valid JSON.
- [ ] No secrets are committed.
- [ ] No private client data is included.
- [ ] Public-safe language is reviewed.
- [ ] Partner pages include affiliate disclosure links.
- [ ] Funding and business-credit pages avoid guarantees.
- [ ] `style.css` compatibility alias exists if older pages reference it.

## Suggested PR Title

```text
Add full AI Agent Library static site pack
```

## Suggested PR Summary

```md
## Summary

Adds a full static site layer for AI Agent Library, including directory pages, skill pages, partner pages, legal/trust pages, knowledge-base folders, schemas, examples, roadmap docs, portfolio records, and fallback site data.

## Included

- Root static files
- Directory and discovery pages
- Skills library pages
- Legal and trust pages
- Partner and affiliate pages
- Knowledge-base folders
- Portfolio folders
- JSON schemas
- Roadmap files
- Example folders
- Fallback site data
- CSS compatibility alias

## Validation

- Site is static-first and does not require a build step.
- Pages reference shared CSS and JavaScript.
- JSON files are valid.
- Public-safe funding, business-credit, affiliate, and partner language is included.
- No secrets or private customer data are included.
```
```

---

## `README.md` additions

```md
## Static Site Layer

AI Agent Library now includes a static-first website layer for browsing and packaging reusable AI agents, skills, prompt systems, knowledge bases, schemas, examples, platform packs, and deployable AI product assets.

The site is designed to run as plain HTML, CSS, JavaScript, JSON, and Markdown.

No React, Next.js, npm install, or build step is required for the core static site.

## Core Site Files

```text
index.html
styles.css
script.js
style.css
```

`style.css` exists as a compatibility alias for older generated files that may reference `style.css` instead of `styles.css`.

## Main Site Pages

```text
agent-catalog.html
skill-catalog.html
categories.html
tags.html
search.html
featured.html
new.html
platforms.html
knowledge-bases.html
portfolio.html
roadmap.html
changelog.html
contribute.html
```

## Partner & Affiliate Pages

```text
get-started.html
partners.html
team.html
profile.html
affiliate-disclosure.html
```

## Legal & Trust Pages

```text
terms.html
privacy.html
disclaimer.html
data-policy.html
affiliate-disclosure.html
```

## Knowledge Base Folders

```text
knowledge-base/
  funding/
  partner-enablement/
  crm/
  content-ops/
  automation/
  local-referrals/
  engineering-as-marketing/
```

Each knowledge-base folder should include:

```text
README.md
index.json
examples.md
```

## Portfolio Folders

```text
portfolio/
  vercel/
  custom-gpts/
  gemini-gems/
  flash-ui/
```

Each portfolio folder should include:

```text
README.md
index.json
```

## Schema Files

```text
schemas/
  agent.schema.json
  custom-gpt.schema.json
  vercel-project.schema.json
  funding-product.schema.json
  webhook-event.schema.json
```

## Roadmap Files

```text
roadmap/
  phase-1-fast-mvp.md
  phase-2-distribution-system.md
  phase-3-marketplace-layer.md
  phase-4-platform-layer.md
```

## Example Folders

```text
examples/
  funding/
  partner-enablement/
  content-ops/
  automation/
```

Each example folder should include:

```text
README.md
example-001.md
```

## Site Data

```text
site-data/
  agents.fallback.json
  skills.fallback.json
  categories.json
  tags.json
  featured.json
  changelog.json
```

The static pages can load canonical indexes first and fall back to `site-data/` when canonical data files are not available.

## Run Locally

From the repository root:

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

## Static-First Rule

The default implementation should remain:

- HTML
- CSS
- JavaScript
- JSON
- Markdown

Avoid adding a framework unless a specific issue explicitly requires it.

## Public-Safe Language Rule

Funding, business-credit, affiliate, partner, automation, and platform pages must avoid guaranteed outcome claims.

Do not claim:

- Guaranteed approval
- Guaranteed funding
- Guaranteed credit outcomes
- Guaranteed revenue
- Guaranteed rankings
- Everyone qualifies
- No risk
- No documents needed
- AI replaces professional review

Use educational, readiness, review, possible-fit, and next-step language instead.
```

---

## `style.css`

```css
@import url("./styles.css");
```

---

## `REPO_PLACEMENT_CHECKLIST.md`

```md
# AI Agent Library Repo Placement Checklist

Use this checklist when adding the full static site pack to `JFeimster/ai-agent-library`.

## Root Files

Place these at the repository root:

```text
index.html
styles.css
style.css
script.js
SITE_PACK_README.md
```

## Root HTML Pages

Place these at the repository root:

```text
agent-catalog.html
categories.html
tags.html
search.html
featured.html
new.html
skill-catalog.html
skill-categories.html
top-skills.html
skill-builder.html
terms.html
privacy.html
disclaimer.html
affiliate-disclosure.html
data-policy.html
get-started.html
partners.html
team.html
profile.html
platforms.html
portfolio.html
knowledge-bases.html
roadmap.html
changelog.html
contribute.html
```

## Site Data

Create or update:

```text
site-data/
  agents.fallback.json
  skills.fallback.json
  categories.json
  tags.json
  featured.json
  changelog.json
```

## Knowledge Base Folders

Create or update:

```text
knowledge-base/funding/
knowledge-base/partner-enablement/
knowledge-base/crm/
knowledge-base/content-ops/
knowledge-base/automation/
knowledge-base/local-referrals/
knowledge-base/engineering-as-marketing/
```

Each folder should contain:

```text
README.md
index.json
examples.md
```

## Schemas

Create or update:

```text
schemas/
  agent.schema.json
  custom-gpt.schema.json
  vercel-project.schema.json
  funding-product.schema.json
  webhook-event.schema.json
```

## Roadmap

Create or update:

```text
roadmap/
  phase-1-fast-mvp.md
  phase-2-distribution-system.md
  phase-3-marketplace-layer.md
  phase-4-platform-layer.md
```

## Examples

Create or update:

```text
examples/funding/
examples/partner-enablement/
examples/content-ops/
examples/automation/
```

Each folder should contain:

```text
README.md
example-001.md
```

## Portfolio

Create or update:

```text
portfolio/vercel/
portfolio/custom-gpts/
portfolio/gemini-gems/
portfolio/flash-ui/
```

Each folder should contain:

```text
README.md
index.json
```

## Compatibility Check

Keep this file:

```text
style.css
```

with:

```css
@import url("./styles.css");
```

This prevents older generated pages that reference `style.css` from losing styling.

## Local Validation

Run:

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

Check:

- [ ] `index.html` loads.
- [ ] Header nav works.
- [ ] Footer links work.
- [ ] CSS loads.
- [ ] JavaScript loads.
- [ ] Agent catalog renders fallback data.
- [ ] Skill catalog renders fallback data.
- [ ] Categories page renders.
- [ ] Tags page renders.
- [ ] Featured page renders.
- [ ] Search page renders.
- [ ] Partner pages render.
- [ ] Legal pages render.
- [ ] Knowledge-base links open as Markdown in GitHub.
- [ ] JSON files validate.

## JSON Validation

Run:

```bash
python -m json.tool site-data/agents.fallback.json > nul
python -m json.tool site-data/skills.fallback.json > nul
python -m json.tool site-data/categories.json > nul
python -m json.tool site-data/tags.json > nul
python -m json.tool site-data/featured.json > nul
python -m json.tool site-data/changelog.json > nul

python -m json.tool schemas/agent.schema.json > nul
python -m json.tool schemas/custom-gpt.schema.json > nul
python -m json.tool schemas/vercel-project.schema.json > nul
python -m json.tool schemas/funding-product.schema.json > nul
python -m json.tool schemas/webhook-event.schema.json > nul
```

PowerShell alternative:

```powershell
Get-ChildItem site-data -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem schemas -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
```

## Public-Safe Review

Before opening PR:

- [ ] Funding pages avoid guaranteed approval/funding language.
- [ ] Business-credit pages avoid credit-repair or outcome promises.
- [ ] Partner pages include disclosure links.
- [ ] Affiliate pages do not hide compensation possibility.
- [ ] Automation examples use synthetic payloads.
- [ ] No API keys, tokens, webhook secrets, or private CRM data are included.
- [ ] No private provider terms are exposed.
- [ ] No fake testimonials or fake trust badges are included.

## PR Readiness

Before PR:

- [ ] Files are in the intended paths.
- [ ] No ZIP files are committed unless explicitly desired.
- [ ] No generated screenshots are committed unless intentionally used.
- [ ] Root `README.md` is updated.
- [ ] `SITE_PACK_README.md` is included.
- [ ] `style.css` alias is included.
- [ ] `vercel.json` deployment behavior is reviewed.
- [ ] PR summary lists all major folders added.
```

---

## `PR_DESCRIPTION.md`

```md
# Add full AI Agent Library static site pack

## Summary

Adds a full static-first website layer for AI Agent Library.

This PR turns the repo into a browseable static resource hub for reusable AI agents, skills, prompt systems, knowledge bases, schemas, examples, portfolio assets, platform packs, partner pages, and legal/trust pages.

## What Changed

### Root Site Files

- `index.html`
- `styles.css`
- `script.js`
- `style.css`
- `SITE_PACK_README.md`

### Directory & Discovery Pages

- `agent-catalog.html`
- `categories.html`
- `tags.html`
- `search.html`
- `featured.html`
- `new.html`

### Skills Library Pages

- `skill-catalog.html`
- `skill-categories.html`
- `top-skills.html`
- `skill-builder.html`

### Legal & Trust Pages

- `terms.html`
- `privacy.html`
- `disclaimer.html`
- `affiliate-disclosure.html`
- `data-policy.html`

### Partner / Affiliate Pages

- `get-started.html`
- `partners.html`
- `team.html`
- `profile.html`

### Supporting Pages

- `platforms.html`
- `portfolio.html`
- `knowledge-bases.html`
- `roadmap.html`
- `changelog.html`
- `contribute.html`

### Site Data

- `site-data/agents.fallback.json`
- `site-data/skills.fallback.json`
- `site-data/categories.json`
- `site-data/tags.json`
- `site-data/featured.json`
- `site-data/changelog.json`

### Knowledge Bases

- `knowledge-base/funding/`
- `knowledge-base/partner-enablement/`
- `knowledge-base/crm/`
- `knowledge-base/content-ops/`
- `knowledge-base/automation/`
- `knowledge-base/local-referrals/`
- `knowledge-base/engineering-as-marketing/`

### Schemas

- `schemas/agent.schema.json`
- `schemas/custom-gpt.schema.json`
- `schemas/vercel-project.schema.json`
- `schemas/funding-product.schema.json`
- `schemas/webhook-event.schema.json`

### Roadmap

- `roadmap/phase-1-fast-mvp.md`
- `roadmap/phase-2-distribution-system.md`
- `roadmap/phase-3-marketplace-layer.md`
- `roadmap/phase-4-platform-layer.md`

### Examples

- `examples/funding/`
- `examples/partner-enablement/`
- `examples/content-ops/`
- `examples/automation/`

### Portfolio

- `portfolio/vercel/`
- `portfolio/custom-gpts/`
- `portfolio/gemini-gems/`
- `portfolio/flash-ui/`

## Static-First Notes

This PR does not require:

- React
- Next.js
- npm
- Build tooling
- Backend routes
- Private API keys

The site should run from the repo root with:

```bash
python -m http.server 8080
```

## Compatibility Note

`style.css` is included as a compatibility alias for any previously generated pages that reference `style.css`.

The main stylesheet is:

```text
styles.css
```

## Public-Safe Review

This PR includes public-safe language rules for:

- Funding content
- Business-credit content
- Partner and affiliate pages
- Automation examples
- Webhook payload examples
- Legal/trust pages

The content avoids:

- Guaranteed approval claims
- Guaranteed funding claims
- Guaranteed credit outcome claims
- Guaranteed revenue claims
- Guaranteed ranking claims
- Private provider logic
- Private client data
- API keys or secrets

## Validation Checklist

- [ ] Homepage opens locally.
- [ ] CSS loads.
- [ ] JavaScript loads.
- [ ] Core navigation links resolve.
- [ ] Footer links resolve.
- [ ] Agent catalog renders fallback data.
- [ ] Skill catalog renders fallback data.
- [ ] JSON files validate.
- [ ] Schema files validate.
- [ ] Partner pages link affiliate disclosure.
- [ ] Legal/trust pages are present.
- [ ] No private data or secrets included.
- [ ] No ZIP files committed unless intentionally included.

## Suggested Follow-Up Work

- Add canonical `agent-index.json` entries.
- Add canonical `skills/skill-index.json`.
- Add per-agent Markdown specs.
- Add per-skill `SKILL.md` folders.
- Add platform-specific package templates.
- Add richer portfolio inventory.
- Add screenshot previews after first deployment.
- Add link-check workflow.
- Add JSON schema validation workflow.
```

---

## `JULES_HANDOFF_NOTE.md`

```md
# Jules Handoff Note — AI Agent Library Static Site Pack

## Context

This repo is `JFeimster/ai-agent-library`.

The current task is to integrate the generated static site pack into the repo as plain HTML/CSS/JS/JSON/Markdown files.

Do not introduce React, Next.js, npm, build tooling, or server routes unless explicitly requested.

## Primary Goal

Add the complete AI Agent Library static site pack to the repo and open a PR.

## Required Behavior

- Keep the site static-first.
- Preserve the root file structure.
- Add `style.css` as a compatibility alias for `styles.css`.
- Do not commit ZIP files unless explicitly requested.
- Do not commit screenshots unless explicitly requested.
- Do not add secrets, API keys, tokens, or private client data.
- Do not add funding, credit, affiliate, revenue, or platform outcome guarantees.
- Use educational and public-safe wording.

## Files to Add

Use the file list in:

```text
SITE_PACK_README.md
REPO_PLACEMENT_CHECKLIST.md
```

## Validation

Before opening PR:

```bash
python -m http.server 8080
```

Then check:

```text
http://localhost:8080/
```

Validate:

- Homepage loads.
- CSS loads.
- JS loads.
- Nav links resolve.
- JSON files parse.
- Schema files parse.
- Partner pages include disclosure links.
- Funding/business-credit content avoids guarantees.

## Suggested Branch

```text
site/full-static-site-pack
```

## Suggested PR Title

```text
Add full AI Agent Library static site pack
```

## Suggested PR Summary

Use `PR_DESCRIPTION.md`.
```

Batch 15 will be **Jules execution updates + master prompts**:

```text
Jules master implementation prompt
Jules repo audit prompt
Jules PR review prompt
Jules validation checklist prompt
Jules issue/task breakdown
Recommended tasks to create in Jules
Post-PR review checklist
Merge readiness checklist
```


<!-- SOURCE: Batch 3 — Skills Library.md -->

# Source Batch: Batch 3 — Skills Library.md

# you asked

message time: 2026-06-18 11:33:15

proceed

---

# chatgpt response

## Batch 3 — Skills Library

## `skill-catalog.html`

```html id="skill-catalog-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Skill Catalog | AI Agent Library</title>
  <meta name="description" content="Browse reusable agent skills by category, audience, recommended platform, status, and implementation priority.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html" aria-current="page">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Skills Library</div>
    <h1>Skill Catalog</h1>
    <p>
      Browse reusable agent skills by category, audience, recommended platform,
      status, and implementation priority.
    </p>
  </section>

  <main id="main">
    <section class="section">
      <div class="toolbar">
        <input id="skillSearch" type="search" placeholder="Search skills...">

        <select id="skillCategory">
          <option value="all">All categories</option>
        </select>

        <select id="skillSort">
          <option value="priority">Sort by priority</option>
          <option value="name">Sort by name</option>
          <option value="category">Sort by category</option>
        </select>
      </div>
    </section>

    <section class="section">
      <div id="skillStats" class="stat-row"></div>
    </section>

    <section class="section">
      <div id="skillGrid" class="wide-grid"></div>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>What counts as a skill?</h2>
        <p>
          A skill is a reusable capability that can power multiple agents, pages,
          workflows, platform packs, or internal operating systems.
        </p>

        <ul class="mini-list">
          <li>It should have a narrow job.</li>
          <li>It should define required inputs.</li>
          <li>It should produce a structured output.</li>
          <li>It should include guardrails.</li>
          <li>It should be reusable across more than one asset.</li>
        </ul>
      </article>

      <article class="card">
        <h2>Recommended skill file format</h2>
        <pre>skills/
  [skill-slug]/
    SKILL.md
    examples.md
    inputs.json
    output.schema.json
    tests.md</pre>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>

  <script>
    (async () => {
      const rawSkills = await AILibrary.fetchJSON(
        ["skills/skill-index.json", "site-data/skills.fallback.json"],
        []
      );

      const skills = rawSkills.map((skill, index) => {
        return AILibrary.normalizeSkill(skill, index);
      });

      const categorySelect = document.getElementById("skillCategory");
      const searchInput = document.getElementById("skillSearch");
      const sortSelect = document.getElementById("skillSort");
      const stats = document.getElementById("skillStats");
      const grid = document.getElementById("skillGrid");

      AILibrary.unique(skills.map((skill) => skill.category)).forEach((category) => {
        categorySelect.insertAdjacentHTML(
          "beforeend",
          `<option value="${AILibrary.escapeHTML(category)}">${AILibrary.escapeHTML(category)}</option>`
        );
      });

      function priorityWeight(priority) {
        const weights = {
          High: 1,
          Medium: 2,
          Low: 3
        };

        return weights[priority] || 99;
      }

      function renderSkills() {
        const query = searchInput.value.toLowerCase();
        const category = categorySelect.value;
        const sort = sortSelect.value;

        let filtered = skills.filter((skill) => {
          const searchableText = [
            skill.name,
            skill.category,
            skill.audience,
            skill.problem_solved,
            skill.status,
            skill.priority,
            (skill.recommended_apps || []).join(" ")
          ].join(" ").toLowerCase();

          return searchableText.includes(query) &&
            (category === "all" || skill.category === category);
        });

        if (sort === "name") {
          filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        }

        if (sort === "category") {
          filtered = filtered.sort((a, b) => {
            return `${a.category}${a.name}`.localeCompare(`${b.category}${b.name}`);
          });
        }

        if (sort === "priority") {
          filtered = filtered.sort((a, b) => {
            return priorityWeight(a.priority) - priorityWeight(b.priority);
          });
        }

        stats.innerHTML = `
          <div class="stat">
            <strong>${skills.length}</strong>
            <span>Total skills</span>
          </div>

          <div class="stat">
            <strong>${AILibrary.unique(skills.map((skill) => skill.category)).length}</strong>
            <span>Categories</span>
          </div>

          <div class="stat">
            <strong>${filtered.length}</strong>
            <span>Visible results</span>
          </div>
        `;

        grid.innerHTML = filtered.map((skill) => {
          return `
            <article class="card">
              <div class="pill-row">
                <span class="pill gold">${AILibrary.escapeHTML(skill.category)}</span>
                <span class="pill">${AILibrary.escapeHTML(skill.priority)}</span>
                <span class="pill">${AILibrary.escapeHTML(skill.status)}</span>
              </div>

              <h2>${AILibrary.escapeHTML(skill.name)}</h2>

              <p>
                <strong>Audience:</strong>
                ${AILibrary.escapeHTML(skill.audience)}
              </p>

              <p>${AILibrary.escapeHTML(skill.problem_solved)}</p>

              <h3>Recommended platforms</h3>
              <div class="pill-row">
                ${(skill.recommended_apps || []).map((app) => {
                  return `<span class="pill">${AILibrary.escapeHTML(app)}</span>`;
                }).join("") || `<span class="pill">Platform TBD</span>`}
              </div>

              <a class="button-link secondary" href="skill-builder.html">
                Build from this pattern →
              </a>
            </article>
          `;
        }).join("") || `<div class="empty-state">No matching skills.</div>`;
      }

      searchInput.addEventListener("input", renderSkills);
      categorySelect.addEventListener("input", renderSkills);
      categorySelect.addEventListener("change", renderSkills);
      sortSelect.addEventListener("input", renderSkills);
      sortSelect.addEventListener("change", renderSkills);

      renderSkills();
    })();
  </script>
</body>
</html>
```

## `skill-categories.html`

```html id="skill-categories-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Skill Categories | AI Agent Library</title>
  <meta name="description" content="Browse the skills library by reusable capability group and implementation area.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Skills Library</div>
    <h1>Skill Categories</h1>
    <p>
      Browse the skills library by reusable capability group and implementation area.
    </p>
  </section>

  <main id="main">
    <section class="section">
      <div id="skillCategoryGrid" class="grid"></div>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Skill category model</h2>
        <p>
          Skills are smaller than full agents. A skill is a reusable capability such as
          scoring, page generation, resource-card creation, compliance copy review,
          workflow drafting, schema validation, or data normalization.
        </p>

        <ul class="mini-list">
          <li><strong>Static Sites:</strong> page generation, directory rendering, navigation systems.</li>
          <li><strong>Funding:</strong> readiness copy, intake summaries, public-safe guardrails.</li>
          <li><strong>Partner Enablement:</strong> resource cards, tracked CTAs, affiliate assets.</li>
          <li><strong>Prompt Systems:</strong> prompt chains, review protocols, execution frameworks.</li>
          <li><strong>Automation:</strong> workflow specs, webhook events, human-review checkpoints.</li>
        </ul>
      </article>

      <article class="card">
        <h2>When to create a new skill category</h2>
        <p>
          Add a new skill category only when multiple skills share the same operating
          pattern or implementation destination.
        </p>

        <ul class="mini-list">
          <li>Do not create a category for a one-off skill.</li>
          <li>Do not duplicate platform names and business functions unless useful.</li>
          <li>Keep categories practical enough to drive browsing and search.</li>
          <li>Prefer durable operating functions over temporary campaign labels.</li>
        </ul>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>

  <script>
    (async () => {
      const rawSkills = await AILibrary.fetchJSON(
        ["skills/skill-index.json", "site-data/skills.fallback.json"],
        []
      );

      const skills = rawSkills.map((skill, index) => {
        return AILibrary.normalizeSkill(skill, index);
      });

      const grouped = {};

      skills.forEach((skill) => {
        if (!grouped[skill.category]) {
          grouped[skill.category] = [];
        }

        grouped[skill.category].push(skill);
      });

      const grid = document.getElementById("skillCategoryGrid");

      grid.innerHTML = Object.entries(grouped).map(([category, categorySkills]) => {
        const highPriorityCount = categorySkills.filter((skill) => {
          return skill.priority === "High";
        }).length;

        return `
          <article class="card">
            <div class="pill-row">
              <span class="pill gold">Skill Category</span>
              <span class="pill">${categorySkills.length} skills</span>
              <span class="pill">${highPriorityCount} high priority</span>
            </div>

            <h2>${AILibrary.escapeHTML(category)}</h2>

            <p>
              ${categorySkills.length} reusable skill${categorySkills.length === 1 ? "" : "s"}
              currently mapped to this category.
            </p>

            <ul class="mini-list">
              ${categorySkills.slice(0, 8).map((skill) => {
                return `<li>${AILibrary.escapeHTML(skill.name)}</li>`;
              }).join("")}
            </ul>

            <a class="button-link secondary" href="skill-catalog.html">
              Open full catalog →
            </a>
          </article>
        `;
      }).join("") || `<div class="empty-state">No skill categories found.</div>`;
    })();
  </script>
</body>
</html>
```

## `top-skills.html`

```html id="top-skills-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Top Skills | AI Agent Library</title>
  <meta name="description" content="A prioritized build list for the highest-leverage skills to implement first.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Skills Library</div>
    <h1>Top Skills</h1>
    <p>
      A prioritized build list for the highest-leverage skills to implement first.
    </p>
  </section>

  <main id="main">
    <section class="section callout">
      <strong>Build priority:</strong>
      <p>
        Prioritize skills that can power multiple assets: static pages, Custom GPT
        instructions, partner portals, lead magnets, CRM workflows, workflow specs,
        schemas, and automation systems.
      </p>
    </section>

    <section class="section">
      <div id="topSkills" class="wide-grid"></div>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Ranking criteria</h2>
        <ul class="mini-list">
          <li>Can the skill be reused across multiple agents?</li>
          <li>Can the skill generate files or assets for the repo?</li>
          <li>Can the skill improve a public page, GPT, or workflow?</li>
          <li>Can the skill reduce repeat work for future builds?</li>
          <li>Does the skill have clear inputs and outputs?</li>
        </ul>
      </article>

      <article class="card">
        <h2>Best first-build targets</h2>
        <ul class="mini-list">
          <li>Static page generation.</li>
          <li>Funding language safety review.</li>
          <li>Partner resource card creation.</li>
          <li>Prompt-chain task sequencing.</li>
          <li>Schema design and validation.</li>
          <li>Portfolio inventory normalization.</li>
          <li>Knowledge-base source extraction.</li>
        </ul>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>

  <script>
    (async () => {
      const rawSkills = await AILibrary.fetchJSON(
        ["skills/skill-index.json", "site-data/skills.fallback.json"],
        []
      );

      const skills = rawSkills.map((skill, index) => {
        return AILibrary.normalizeSkill(skill, index);
      });

      const priorityWeight = {
        High: 1,
        Medium: 2,
        Low: 3
      };

      const topSkills = skills
        .sort((a, b) => {
          const priorityCompare =
            (priorityWeight[a.priority] || 99) -
            (priorityWeight[b.priority] || 99);

          if (priorityCompare !== 0) {
            return priorityCompare;
          }

          return a.name.localeCompare(b.name);
        })
        .slice(0, 25);

      const grid = document.getElementById("topSkills");

      grid.innerHTML = topSkills.map((skill, index) => {
        return `
          <article class="card">
            <div class="pill-row">
              <span class="pill gold">#${index + 1}</span>
              <span class="pill">${AILibrary.escapeHTML(skill.priority)}</span>
              <span class="pill">${AILibrary.escapeHTML(skill.category)}</span>
              <span class="pill">${AILibrary.escapeHTML(skill.status)}</span>
            </div>

            <h2>${AILibrary.escapeHTML(skill.name)}</h2>

            <p>${AILibrary.escapeHTML(skill.problem_solved)}</p>

            <p>
              <strong>Audience:</strong>
              ${AILibrary.escapeHTML(skill.audience)}
            </p>

            <h3>Best platforms</h3>
            <div class="pill-row">
              ${(skill.recommended_apps || []).map((app) => {
                return `<span class="pill">${AILibrary.escapeHTML(app)}</span>`;
              }).join("") || `<span class="pill">Platform TBD</span>`}
            </div>
          </article>
        `;
      }).join("") || `<div class="empty-state">No top skills found.</div>`;
    })();
  </script>
</body>
</html>
```

## `skill-builder.html`

```html id="skill-builder-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Skill Builder | AI Agent Library</title>
  <meta name="description" content="Generate a reusable SKILL.md file for agent capabilities, static pages, platform packs, and workflow systems.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Skills Library</div>
    <h1>Skill Builder</h1>
    <p>
      Generate a reusable SKILL.md file for agent capabilities, static pages,
      platform packs, and workflow systems.
    </p>
  </section>

  <main id="main">
    <section class="section card">
      <h2>Skill generator</h2>
      <p>
        Use this lightweight builder to draft a reusable skill file that can be added
        under <code>skills/[skill-slug]/SKILL.md</code>.
      </p>

      <div class="form-grid">
        <label>
          Skill name
          <input id="skillName" placeholder="Partner Resource Card Builder">
        </label>

        <label>
          Category
          <input id="skillCat" placeholder="Partner Enablement">
        </label>

        <label>
          Audience
          <input id="skillAudience" placeholder="Affiliate operators">
        </label>

        <label>
          Problem solved
          <input id="skillProblem" placeholder="Create reusable partner resource cards">
        </label>

        <label>
          Recommended apps
          <input id="skillApps" placeholder="ChatGPT, Vercel, Notion">
        </label>

        <label>
          Priority
          <select id="skillPriority">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </label>

        <label>
          Status
          <select id="skillStatus">
            <option>Draft</option>
            <option>Planned</option>
            <option>Ready</option>
            <option>Needs Review</option>
          </select>
        </label>

        <label>
          Suggested path
          <input id="skillPath" placeholder="skills/partner-resource-card-builder/SKILL.md">
        </label>
      </div>

      <label style="margin-top: 1rem;">
        Implementation notes
        <textarea id="skillNotes" placeholder="Inputs, outputs, guardrails, examples, and implementation notes..."></textarea>
      </label>

      <div class="pill-row">
        <button class="button" id="buildSkill">Generate SKILL.md</button>
        <button class="button secondary" id="copySkill">Copy generated markdown</button>
      </div>
    </section>

    <section class="section">
      <pre id="skillOutput">Generated skill file appears here.</pre>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Skill file requirements</h2>
        <ul class="mini-list">
          <li>Use a clear capability name.</li>
          <li>Define the audience and problem solved.</li>
          <li>Specify required inputs.</li>
          <li>Specify standard outputs.</li>
          <li>Include implementation notes.</li>
          <li>Include guardrails.</li>
          <li>Include a suggested repo path.</li>
        </ul>
      </article>

      <article class="card">
        <h2>Recommended add-on files</h2>
        <pre>skills/[skill-slug]/
  SKILL.md
  examples.md
  inputs.json
  output.schema.json
  tests.md
  README.md</pre>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>

  <script>
    const output = document.getElementById("skillOutput");
    const buildButton = document.getElementById("buildSkill");
    const copyButton = document.getElementById("copySkill");

    function value(id) {
      return document.getElementById(id).value.trim();
    }

    function slugify(text) {
      return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }

    function buildMarkdown() {
      const name = value("skillName") || "Untitled Skill";
      const category = value("skillCat") || "Uncategorized";
      const audience = value("skillAudience") || "Unknown";
      const problem = value("skillProblem") || "Unknown";
      const apps = value("skillApps") || "ChatGPT";
      const priority = value("skillPriority") || "Medium";
      const status = value("skillStatus") || "Draft";
      const notes = value("skillNotes") || "Add implementation details here.";
      const slug = slugify(name) || "untitled-skill";
      const suggestedPath = value("skillPath") || `skills/${slug}/SKILL.md`;

      return `# ${name}

## Category

${category}

## Status

${status}

## Priority

${priority}

## Audience

${audience}

## Problem Solved

${problem}

## Recommended Apps

${apps.split(",").map((app) => `- ${app.trim()}`).join("\n")}

## When To Use This Skill

Use this skill when an operator, builder, or AI assistant needs to perform this repeatable capability in a consistent, reusable, and reviewable way.

## Required Inputs

- Source material or operating context
- Desired output type
- Audience or end user
- Brand rules or positioning constraints
- Safety, compliance, or public-language restrictions
- Required file path or destination platform

## Standard Outputs

- Reusable markdown, JSON, HTML, or workflow asset
- Clear next-step checklist
- Review-ready implementation notes
- Guardrail summary
- Suggested repo path
- Optional examples or test cases

## Workflow

1. Confirm the user, buyer, operator, or audience.
2. Identify the job the skill needs to complete.
3. Collect required inputs and constraints.
4. Generate the structured output.
5. Check for unsupported claims, private data, or missing context.
6. Return the output in a format that can be added directly to the repo.

## Implementation Notes

${notes}

## Guardrails

- Do not invent missing facts.
- Do not expose secrets, API keys, private client data, or protected source material.
- Do not make approval, funding, revenue, ranking, credit, legal, tax, or platform outcome guarantees.
- Keep outputs structured and reusable.
- Ask for clarification when required inputs are missing.
- Prefer public-safe examples unless the workflow is explicitly internal.
- Preserve repo path discipline and avoid unrelated file changes.

## Example Prompt

Use the ${name} skill to create a reusable output for the following context:

\`\`\`text
Audience:
[Add audience]

Source material:
[Add source material]

Desired output:
[Add output format]

Constraints:
[Add constraints]
\`\`\`

## Suggested Path

\`${suggestedPath}\`
`;
    }

    buildButton.addEventListener("click", () => {
      output.textContent = buildMarkdown();
    });

    copyButton.addEventListener("click", async () => {
      const text = output.textContent;

      if (!text || text === "Generated skill file appears here.") {
        output.textContent = buildMarkdown();
      }

      await navigator.clipboard.writeText(output.textContent);
      copyButton.textContent = "Copied";

      setTimeout(() => {
        copyButton.textContent = "Copy generated markdown";
      }, 1200);
    });
  </script>
</body>
</html>
```

Batch 4 will be **Legal and Trust**:

```text id="batch-4-list"
terms.html
privacy.html
disclaimer.html
affiliate-disclosure.html
data-policy.html
```


<!-- SOURCE: Batch 4 — Legal & Trust.md -->

# Source Batch: Batch 4 — Legal & Trust.md

# you asked

message time: 2026-06-18 11:38:15

proceed

---

# chatgpt response

## Batch 4 — Legal & Trust

## `terms.html`

```html id="terms-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Terms of Service | AI Agent Library</title>
  <meta name="description" content="General terms for using AI Agent Library content, templates, examples, static site resources, schemas, prompt systems, and implementation files.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Legal & Trust</div>
    <h1>Terms of Service</h1>
    <p>
      General terms for using AI Agent Library content, templates, examples,
      static site resources, schemas, prompt systems, and implementation files.
    </p>
  </section>

  <main id="main">
    <section class="section callout warning">
      <strong>Plain-English note:</strong>
      <p>
        This page is a starter template for a static AI resource library. Review and adapt it
        before using it as a production legal page.
      </p>
    </section>

    <section class="section card">
      <h2>1. Acceptance of terms</h2>
      <p>
        By accessing, copying, adapting, deploying, or using any page, prompt, schema,
        example, knowledge-base file, template, or other resource from AI Agent Library,
        you agree to use the materials responsibly and in accordance with these terms.
      </p>

      <p>
        If you do not agree with these terms, do not use the site, repo materials,
        generated files, templates, or related implementation assets.
      </p>
    </section>

    <section class="section card">
      <h2>2. What this library provides</h2>
      <p>
        AI Agent Library provides reusable resources for building, organizing, and deploying
        AI-assisted workflows. These resources may include static HTML pages, CSS, JavaScript,
        JSON schemas, Markdown files, prompt chains, agent specifications, skill files,
        example workflows, knowledge-base folders, and platform implementation notes.
      </p>

      <ul class="mini-list">
        <li>Agent and skill catalog pages.</li>
        <li>Prompt systems and execution frameworks.</li>
        <li>Knowledge-base source folders.</li>
        <li>Static site files and Vercel-ready page templates.</li>
        <li>Example files and synthetic scenarios.</li>
        <li>Schema files for structuring reusable AI assets.</li>
        <li>Partner, affiliate, and portfolio directory shells.</li>
      </ul>
    </section>

    <section class="section card">
      <h2>3. No professional advice</h2>
      <p>
        AI Agent Library is provided for educational, operational, organizational, and
        implementation-planning purposes only. It is not legal, financial, tax, lending,
        investment, compliance, credit-repair, or professional advice.
      </p>

      <p>
        You are responsible for reviewing materials with qualified professionals before using
        them in regulated, customer-facing, contractual, financial, or high-risk environments.
      </p>
    </section>

    <section class="section card">
      <h2>4. No guarantees</h2>
      <p>
        No resource in this library guarantees approvals, funding, credit outcomes, ranking,
        revenue, conversion rate, platform acceptance, search visibility, legal compliance,
        automation success, or business results.
      </p>

      <p>
        AI outputs, generated pages, prompt packs, and workflow files can contain errors,
        omissions, outdated assumptions, or incomplete context. Human review is required.
      </p>
    </section>

    <section class="section card">
      <h2>5. User responsibilities</h2>
      <p>
        You are responsible for how you use, modify, publish, deploy, or distribute any
        resource from AI Agent Library.
      </p>

      <ul class="mini-list">
        <li>Review all generated content before publishing.</li>
        <li>Remove or replace placeholder URLs, form links, and example CTAs.</li>
        <li>Verify all claims, data points, product details, and partner references.</li>
        <li>Protect private information, API keys, client records, and confidential data.</li>
        <li>Comply with platform terms for GitHub, Vercel, OpenAI, Notion, Google, HubSpot, n8n, and related tools.</li>
        <li>Use appropriate disclosures for affiliate, referral, sponsored, or compensated relationships.</li>
      </ul>
    </section>

    <section class="section card">
      <h2>6. Public-safe use rules</h2>
      <p>
        When using this library for public pages, marketing assets, affiliate pages,
        funding pages, business-credit content, partner directories, or automation workflows,
        you should avoid unsupported or risky claims.
      </p>

      <ul class="mini-list">
        <li>Do not claim guaranteed approvals, funding, credit outcomes, income, rankings, or revenue.</li>
        <li>Do not imply a tool replaces professional review.</li>
        <li>Do not publish private provider logic, private client data, or confidential partner terms.</li>
        <li>Do not present synthetic examples as real customer results.</li>
        <li>Do not use deceptive, spammy, or misleading affiliate distribution methods.</li>
      </ul>
    </section>

    <section class="section card">
      <h2>7. Third-party platforms and links</h2>
      <p>
        This library may reference third-party platforms, including GitHub, Vercel, OpenAI,
        Notion, Google Workspace, HubSpot, Stripe, Airtable, n8n, Claude, Gemini, and other
        tools or services.
      </p>

      <p>
        These references are provided for implementation planning and resource organization.
        Third-party platforms have their own terms, pricing, policies, privacy practices,
        technical limits, and account requirements.
      </p>
    </section>

    <section class="section card">
      <h2>8. Affiliate and partner relationships</h2>
      <p>
        Some resources, examples, pages, or directories may include affiliate, referral,
        partner, or sponsored links. When affiliate or partner links are used, they should
        be clearly disclosed and reviewed for accuracy.
      </p>

      <p>
        Affiliate compensation should not determine whether a resource is safe, suitable,
        accurate, or appropriate for a specific user or business.
      </p>
    </section>

    <section class="section card">
      <h2>9. Data and confidentiality</h2>
      <p>
        Do not upload, paste, commit, or publish confidential data, API keys, access tokens,
        private customer records, bank statements, tax documents, passwords, or regulated
        personal information into public examples or repo files.
      </p>

      <p>
        Use synthetic examples, redacted data, and public-safe summaries whenever possible.
      </p>
    </section>

    <section class="section card">
      <h2>10. Changes to these terms</h2>
      <p>
        These terms may be updated as the library evolves. If you operate a public deployment
        of this site, keep a changelog and review legal/trust pages after major changes to
        agents, funding references, affiliate pages, user submissions, analytics, or forms.
      </p>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Related pages</h2>
        <div class="pill-row">
          <a class="pill gold" href="privacy.html">Privacy</a>
          <a class="pill gold" href="disclaimer.html">Disclaimer</a>
          <a class="pill gold" href="affiliate-disclosure.html">Affiliate Disclosure</a>
          <a class="pill gold" href="data-policy.html">Data Policy</a>
        </div>
      </article>

      <article class="card">
        <h2>Suggested repo path</h2>
        <pre>terms.html</pre>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

## `privacy.html`

```html id="privacy-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Privacy Policy | AI Agent Library</title>
  <meta name="description" content="Privacy overview for the static AI Agent Library site, repository resources, user submissions, forms, analytics, and third-party platform links.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Legal & Trust</div>
    <h1>Privacy Policy</h1>
    <p>
      Privacy overview for the static AI Agent Library site, repository resources,
      user submissions, forms, analytics, and third-party platform links.
    </p>
  </section>

  <main id="main">
    <section class="section callout">
      <strong>Static-site default:</strong>
      <p>
        This site pack is designed to work as a static, dependency-free website.
        By default, it does not require user accounts, login, cookies, or form submissions.
      </p>
    </section>

    <section class="section card">
      <h2>1. Scope</h2>
      <p>
        This Privacy Policy explains how privacy should be handled for AI Agent Library
        static pages, generated files, repository resources, schemas, examples,
        knowledge-base folders, and contribution workflows.
      </p>

      <p>
        If this site is deployed with analytics, forms, CRM integrations, affiliate tracking,
        comments, embedded widgets, or third-party scripts, those services may collect
        additional information according to their own privacy policies.
      </p>
    </section>

    <section class="section card">
      <h2>2. Information collected by the static site</h2>
      <p>
        The generated static site files do not intentionally collect personal information
        by themselves. Static HTML, CSS, JavaScript, JSON, and Markdown files can be viewed
        without creating an account or submitting personal information.
      </p>

      <p>
        Basic server, hosting, or CDN logs may be collected by the hosting provider,
        such as Vercel, GitHub Pages, Cloudflare, or another deployment platform.
      </p>
    </section>

    <section class="section card">
      <h2>3. Information you may choose to provide</h2>
      <p>
        If forms, contribution workflows, issue templates, partner intake pages, or contact
        links are added, you may choose to provide information such as your name, email,
        company, website, role, resource submission, or message.
      </p>

      <ul class="mini-list">
        <li>GitHub issues or pull requests may be public.</li>
        <li>Form submissions may be stored by the form provider or connected CRM.</li>
        <li>Partner applications may include business contact details.</li>
        <li>Comments or submissions may be reviewed by maintainers.</li>
      </ul>
    </section>

    <section class="section card">
      <h2>4. Do not submit sensitive data</h2>
      <p>
        Do not submit confidential, regulated, or sensitive data through public issues,
        examples, forms, comments, prompts, or repository files.
      </p>

      <ul class="mini-list">
        <li>Do not submit API keys, passwords, tokens, or private credentials.</li>
        <li>Do not submit unredacted bank statements, tax returns, credit reports, or legal documents.</li>
        <li>Do not submit private customer, borrower, client, or partner data.</li>
        <li>Do not submit confidential pricing, underwriting, or provider backend details.</li>
        <li>Do not submit protected health information or regulated personal information.</li>
      </ul>
    </section>

    <section class="section card">
      <h2>5. Third-party platforms</h2>
      <p>
        AI Agent Library may link to or reference external platforms, including GitHub,
        Vercel, OpenAI, Notion, Google Workspace, HubSpot, Airtable, Stripe, n8n,
        Claude, Gemini, and other tools.
      </p>

      <p>
        When you interact with a third-party platform, that platform may collect and process
        data under its own privacy policy, terms, and account settings.
      </p>
    </section>

    <section class="section card">
      <h2>6. Analytics and tracking</h2>
      <p>
        This starter site does not require analytics. If analytics are added later,
        disclose the analytics provider, what is tracked, and how users can manage their
        preferences where applicable.
      </p>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Default in this pack</th>
              <th>Disclosure needed if added</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Analytics</strong></td>
              <td>Not required</td>
              <td>Provider, event types, retention, opt-out options</td>
            </tr>
            <tr>
              <td><strong>Forms</strong></td>
              <td>Placeholder links only</td>
              <td>Submission destination, CRM usage, retention</td>
            </tr>
            <tr>
              <td><strong>Affiliate tracking</strong></td>
              <td>Placeholder links only</td>
              <td>Tracking method, compensation disclosure, third-party policies</td>
            </tr>
            <tr>
              <td><strong>Embedded tools</strong></td>
              <td>Not required</td>
              <td>Provider, data sent, login/account requirements</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="section card">
      <h2>7. User submissions and contributions</h2>
      <p>
        Contributions may include agents, skills, schemas, prompt packs, examples,
        templates, or static pages. Submissions should use synthetic, redacted, or
        public-safe information.
      </p>

      <p>
        Public repository contributions may remain visible even after they are closed,
        merged, archived, or superseded.
      </p>
    </section>

    <section class="section card">
      <h2>8. Data retention</h2>
      <p>
        Static site files do not store personal data by themselves. Data retention depends
        on the systems you connect, such as GitHub, form providers, analytics tools,
        CRMs, email platforms, or hosting logs.
      </p>

      <p>
        If you operate a production deployment, document retention rules for form submissions,
        partner applications, analytics events, CRM records, and issue submissions.
      </p>
    </section>

    <section class="section card">
      <h2>9. Security</h2>
      <p>
        Use reasonable security practices when operating this library or deploying derived
        pages. Keep secrets outside public repos, use environment variables for private
        configuration, restrict write access, and review third-party integrations.
      </p>
    </section>

    <section class="section card">
      <h2>10. Updates</h2>
      <p>
        This policy should be updated if the site adds forms, analytics, login, payments,
        affiliate tracking, embedded agents, CRM syncs, or other data-collecting features.
      </p>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Related pages</h2>
        <div class="pill-row">
          <a class="pill gold" href="terms.html">Terms</a>
          <a class="pill gold" href="disclaimer.html">Disclaimer</a>
          <a class="pill gold" href="affiliate-disclosure.html">Affiliate Disclosure</a>
          <a class="pill gold" href="data-policy.html">Data Policy</a>
        </div>
      </article>

      <article class="card">
        <h2>Suggested repo path</h2>
        <pre>privacy.html</pre>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

## `disclaimer.html`

```html id="disclaimer-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Disclaimer | AI Agent Library</title>
  <meta name="description" content="Important limits on AI Agent Library content, examples, funding references, business-credit references, automation workflows, and AI-generated outputs.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Legal & Trust</div>
    <h1>Disclaimer</h1>
    <p>
      Important limits on AI Agent Library content, examples, funding references,
      business-credit references, automation workflows, and AI-generated outputs.
    </p>
  </section>

  <main id="main">
    <section class="section callout warning">
      <strong>Important:</strong>
      <p>
        AI Agent Library is informational and operational. It is not legal, financial,
        tax, lending, credit-repair, investment, compliance, or professional advice.
      </p>
    </section>

    <section class="section card">
      <h2>1. General information only</h2>
      <p>
        The materials in AI Agent Library are provided to help organize ideas, build
        static pages, draft prompt systems, structure agent workflows, document skills,
        create schemas, and maintain reusable knowledge-base files.
      </p>

      <p>
        The materials are not a substitute for professional advice, regulatory review,
        platform-specific review, or human operational judgment.
      </p>
    </section>

    <section class="section card">
      <h2>2. AI output limitations</h2>
      <p>
        AI-generated content can be incomplete, inaccurate, outdated, overconfident,
        or based on missing context. Every generated page, prompt, agent spec, workflow,
        schema, example, and public-facing statement should be reviewed before use.
      </p>

      <ul class="mini-list">
        <li>Verify facts before publishing.</li>
        <li>Check links, claims, partner names, product details, and platform requirements.</li>
        <li>Review outputs for compliance, privacy, and brand risk.</li>
        <li>Use human approval for outbound messages and customer-facing actions.</li>
      </ul>
    </section>

    <section class="section card">
      <h2>3. No funding or approval guarantees</h2>
      <p>
        Funding-related pages, knowledge-base files, examples, workflows, and templates
        should be treated as educational or operational support only.
      </p>

      <p>
        Nothing in this library guarantees loan approval, funding approval, credit approval,
        available terms, lender acceptance, underwriting outcomes, business revenue,
        or financing availability.
      </p>

      <ul class="mini-list">
        <li>Use “readiness,” “fit,” “common requirements,” and “next steps” language.</li>
        <li>Avoid “guaranteed approval,” “guaranteed funding,” or “no-denial” language.</li>
        <li>Do not represent private underwriting rules as public promises.</li>
        <li>Do not imply that an AI tool can determine final lender decisions.</li>
      </ul>
    </section>

    <section class="section card">
      <h2>4. No business-credit outcome guarantees</h2>
      <p>
        Business-credit resources should be educational and readiness-based. They should
        not be presented as credit repair, legal advice, debt advice, underwriting advice,
        or guaranteed credit-building outcomes.
      </p>

      <p>
        Do not claim that a checklist, prompt, agent, vendor list, or workflow will
        guarantee tradelines, approvals, score changes, credit limits, or lender outcomes.
      </p>
    </section>

    <section class="section card">
      <h2>5. No legal, tax, or compliance advice</h2>
      <p>
        Legal, tax, privacy, compliance, disclosure, employment, lending, financial,
        and regulatory questions should be reviewed by qualified professionals.
      </p>

      <p>
        Templates in this library are operational drafts and should not be copied into
        production without review.
      </p>
    </section>

    <section class="section card">
      <h2>6. No platform acceptance guarantees</h2>
      <p>
        Platform implementation resources may reference GitHub, Vercel, OpenAI,
        Notion, Google Workspace, HubSpot, Gemini, Claude, n8n, or other platforms.
        Platform rules, APIs, pricing, feature availability, and enforcement practices
        can change.
      </p>

      <p>
        Nothing in this library guarantees app approval, marketplace approval, deployment
        success, API access, account status, model behavior, or continued platform support.
      </p>
    </section>

    <section class="section card">
      <h2>7. Synthetic examples</h2>
      <p>
        Examples should be treated as synthetic unless explicitly documented otherwise.
        Do not present synthetic examples as real customer results, case studies,
        testimonials, or verified performance data.
      </p>

      <p>
        If real examples are used, remove private data, obtain required permissions,
        and disclose the context accurately.
      </p>
    </section>

    <section class="section card">
      <h2>8. Human review required</h2>
      <p>
        Human review is required before using this library for public pages, customer-facing
        workflows, partner assets, referral pages, funding content, business-credit content,
        email/SMS scripts, automation actions, or any workflow that affects a real person
        or business.
      </p>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>High-risk use checklist</h2>
        <div class="checklist">
          <label class="check-item">
            <input type="checkbox">
            Claims have been verified.
          </label>

          <label class="check-item">
            <input type="checkbox">
            Private data has been removed.
          </label>

          <label class="check-item">
            <input type="checkbox">
            Professional review has been completed where needed.
          </label>

          <label class="check-item">
            <input type="checkbox">
            Affiliate or partner disclosures are visible.
          </label>

          <label class="check-item">
            <input type="checkbox">
            No guarantees or misleading outcome claims remain.
          </label>
        </div>
      </article>

      <article class="card">
        <h2>Related pages</h2>
        <div class="pill-row">
          <a class="pill gold" href="terms.html">Terms</a>
          <a class="pill gold" href="privacy.html">Privacy</a>
          <a class="pill gold" href="affiliate-disclosure.html">Affiliate Disclosure</a>
          <a class="pill gold" href="data-policy.html">Data Policy</a>
        </div>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

## `affiliate-disclosure.html`

```html id="affiliate-disclosure-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Affiliate Disclosure | AI Agent Library</title>
  <meta name="description" content="Disclosure page for affiliate, referral, partner, sponsor, commission, and monetized recommendation relationships across AI Agent Library resources.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Legal & Trust</div>
    <h1>Affiliate Disclosure</h1>
    <p>
      Disclosure page for affiliate, referral, partner, sponsor, commission,
      and monetized recommendation relationships across AI Agent Library resources.
    </p>
  </section>

  <main id="main">
    <section class="section callout">
      <strong>Disclosure principle:</strong>
      <p>
        Some links, recommendations, tools, directories, or partner resources may include
        affiliate, referral, sponsor, or compensated relationships.
      </p>
    </section>

    <section class="section card">
      <h2>1. Affiliate and referral relationships</h2>
      <p>
        AI Agent Library may include links to tools, software platforms, service providers,
        funding resources, partner pages, forms, directories, or products where a referral
        fee, affiliate commission, partner credit, or other compensation may be received.
      </p>

      <p>
        Compensation may occur when a user clicks a link, submits a form, signs up for
        a service, books a call, starts a trial, becomes a customer, or completes another
        qualifying action.
      </p>
    </section>

    <section class="section card">
      <h2>2. Types of compensated relationships</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Relationship type</th>
              <th>What it may mean</th>
              <th>Disclosure requirement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Affiliate link</strong></td>
              <td>A tracked link may generate commission or credit.</td>
              <td>Disclose near the link or on the page.</td>
            </tr>
            <tr>
              <td><strong>Referral link</strong></td>
              <td>A partner may receive credit or compensation for a referral.</td>
              <td>Disclose when recommending or routing users.</td>
            </tr>
            <tr>
              <td><strong>Sponsored listing</strong></td>
              <td>A provider may pay for placement or visibility.</td>
              <td>Label as sponsored or partner-supported.</td>
            </tr>
            <tr>
              <td><strong>Strategic partner</strong></td>
              <td>A provider may have an operational, distribution, or referral relationship.</td>
              <td>Explain the relationship clearly and avoid misleading neutrality.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="section card">
      <h2>3. Editorial and operational independence</h2>
      <p>
        Affiliate or partner compensation should not override accuracy, safety, suitability,
        disclosure, or user trust. Recommendations should be based on the usefulness,
        relevance, and appropriate fit of a resource for the intended audience.
      </p>

      <ul class="mini-list">
        <li>Do not hide affiliate relationships.</li>
        <li>Do not recommend unsuitable products only because they pay commission.</li>
        <li>Do not exaggerate benefits or omit important limitations.</li>
        <li>Do not imply guaranteed outcomes from partner tools or funding providers.</li>
      </ul>
    </section>

    <section class="section card">
      <h2>4. Funding, finance, and business-credit resources</h2>
      <p>
        Some funding, finance, business-credit, or partner resources may be connected
        to referral or affiliate relationships. These resources should be presented as
        educational, readiness-based, or referral-oriented unless a licensed or regulated
        role is clearly established.
      </p>

      <p>
        Users should review provider terms, eligibility, pricing, repayment obligations,
        disclosures, contracts, privacy policies, and suitability before choosing any
        financial product, tool, or service.
      </p>
    </section>

    <section class="section card">
      <h2>5. User responsibility</h2>
      <p>
        Users are responsible for evaluating whether a tool, provider, platform, service,
        or offer is appropriate for their needs. AI Agent Library does not guarantee
        pricing, eligibility, approval, results, support quality, platform availability,
        or provider performance.
      </p>
    </section>

    <section class="section card">
      <h2>6. Recommended disclosure snippets</h2>
      <p>
        Use clear disclosures near affiliate links, provider cards, partner pages,
        comparison pages, and CTA sections.
      </p>

      <details>
        <summary>General affiliate disclosure</summary>
        <p>
          Some links on this page may be affiliate or referral links. If you use them,
          we may receive compensation at no additional cost to you.
        </p>
      </details>

      <details>
        <summary>Partner directory disclosure</summary>
        <p>
          Some providers listed here may be affiliate, referral, or strategic partners.
          Listings are for informational purposes and do not guarantee eligibility,
          approval, pricing, or results.
        </p>
      </details>

      <details>
        <summary>Funding resource disclosure</summary>
        <p>
          Funding resources may include referral or affiliate relationships. Review all
          provider terms, costs, eligibility requirements, and agreements before applying
          or accepting an offer.
        </p>
      </details>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Where disclosures should appear</h2>
        <ul class="mini-list">
          <li>Partner directory pages.</li>
          <li>Provider cards.</li>
          <li>Funding option pages.</li>
          <li>CTA sections.</li>
          <li>Comparison pages.</li>
          <li>Email or SMS templates.</li>
          <li>Resource download pages.</li>
        </ul>
      </article>

      <article class="card">
        <h2>Related pages</h2>
        <div class="pill-row">
          <a class="pill gold" href="terms.html">Terms</a>
          <a class="pill gold" href="privacy.html">Privacy</a>
          <a class="pill gold" href="disclaimer.html">Disclaimer</a>
          <a class="pill gold" href="data-policy.html">Data Policy</a>
        </div>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

## `data-policy.html`

```html id="data-policy-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Data Policy | AI Agent Library</title>
  <meta name="description" content="Data handling rules for AI Agent Library examples, schemas, prompts, forms, integrations, knowledge-base files, public pages, and repo contributions.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Legal & Trust</div>
    <h1>Data Policy</h1>
    <p>
      Data handling rules for AI Agent Library examples, schemas, prompts, forms,
      integrations, knowledge-base files, public pages, and repo contributions.
    </p>
  </section>

  <main id="main">
    <section class="section callout warning">
      <strong>Default rule:</strong>
      <p>
        Public repo files and public static pages should use synthetic, sanitized,
        non-sensitive, public-safe data only.
      </p>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Allowed data</h2>
        <ul class="mini-list">
          <li>Public product descriptions.</li>
          <li>Generic operating examples.</li>
          <li>Synthetic customer scenarios.</li>
          <li>Sanitized workflow examples.</li>
          <li>Public repo file paths.</li>
          <li>Non-sensitive metadata.</li>
          <li>Public platform documentation references.</li>
          <li>Placeholder partner profiles.</li>
          <li>Example schemas with fake values.</li>
        </ul>
      </article>

      <article class="card">
        <h2>Restricted data</h2>
        <ul class="mini-list">
          <li>API keys, tokens, passwords, or private credentials.</li>
          <li>Private client files or borrower records.</li>
          <li>Bank statements, tax returns, or credit reports.</li>
          <li>Unredacted personal information.</li>
          <li>Confidential provider terms or backend logic.</li>
          <li>Private CRM exports.</li>
          <li>Protected health, legal, financial, or employment records.</li>
          <li>Customer messages without permission.</li>
          <li>Internal secrets or environment variables.</li>
        </ul>
      </article>
    </section>

    <section class="section card">
      <h2>1. Purpose</h2>
      <p>
        This policy defines how data should be handled when creating, editing, publishing,
        or contributing to AI Agent Library resources.
      </p>

      <p>
        It applies to static HTML pages, JSON files, Markdown files, schemas, examples,
        prompt chains, knowledge-base folders, portfolio folders, partner pages, agent
        specs, skill files, and implementation notes.
      </p>
    </section>

    <section class="section card">
      <h2>2. Public data standard</h2>
      <p>
        Public assets should be safe to publish, clone, reuse, and inspect. Assume that
        any file committed to a public repository or deployed on a public static site can
        be copied, indexed, archived, and redistributed.
      </p>

      <ul class="mini-list">
        <li>Use synthetic examples whenever possible.</li>
        <li>Replace real names with placeholders.</li>
        <li>Replace real emails, phone numbers, and addresses with fake examples.</li>
        <li>Remove exact private financial details.</li>
        <li>Avoid private provider names when white-label rules require abstraction.</li>
      </ul>
    </section>

    <section class="section card">
      <h2>3. Knowledge-base data rules</h2>
      <p>
        Knowledge-base files may contain operating rules, source summaries, product family
        notes, implementation instructions, or reusable examples. They should separate
        public-safe guidance from internal-only logic.
      </p>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Knowledge-base type</th>
              <th>Allowed</th>
              <th>Restricted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Funding</strong></td>
              <td>Product family summaries, intake questions, generic documentation checklists.</td>
              <td>Private underwriting logic, confidential provider terms, client files.</td>
            </tr>
            <tr>
              <td><strong>Partner Enablement</strong></td>
              <td>Launch workflows, public resource-card templates, attribution principles.</td>
              <td>Private commission terms, unapproved provider claims, undisclosed tracking details.</td>
            </tr>
            <tr>
              <td><strong>CRM</strong></td>
              <td>Generic lead-stage definitions and workflow examples.</td>
              <td>Unredacted CRM exports, customer notes, private pipeline data.</td>
            </tr>
            <tr>
              <td><strong>Content Ops</strong></td>
              <td>Brief templates, content workflows, SEO structure, synthetic examples.</td>
              <td>Copied third-party paid content, private editorial calendars if not approved.</td>
            </tr>
            <tr>
              <td><strong>Automation</strong></td>
              <td>Trigger patterns, event schemas, review gates, synthetic payloads.</td>
              <td>Live secrets, webhook signing keys, production tokens, private endpoints.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="section card">
      <h2>4. Prompt and AI workflow data rules</h2>
      <p>
        Prompts should not require users to paste sensitive data unless the workflow is
        explicitly private, authorized, and secure. Public prompt examples should use
        placeholders or synthetic inputs.
      </p>

      <ul class="mini-list">
        <li>Use <code>[CLIENT_NAME]</code>, <code>[BUSINESS_NAME]</code>, and <code>[EXAMPLE_EMAIL]</code> placeholders.</li>
        <li>Do not include live API keys or account IDs.</li>
        <li>Do not include unredacted deal notes, bank data, or private messages.</li>
        <li>Keep model outputs reviewable and reversible.</li>
        <li>Include human approval gates for outbound or high-stakes actions.</li>
      </ul>
    </section>

    <section class="section card">
      <h2>5. Schema data rules</h2>
      <p>
        JSON schemas should define structure, validation expectations, and safe example
        fields. Example values should be synthetic unless the data is intentionally public.
      </p>

      <pre>{
  "name": "Example Agent",
  "category": "Funding Ops",
  "buyer": "Funding operator",
  "pain_solved": "Synthetic example only",
  "file": "agents/example-agent.md"
}</pre>
    </section>

    <section class="section card">
      <h2>6. Forms, affiliates, and partner data</h2>
      <p>
        Partner pages, affiliate pages, referral pages, and application CTAs may collect
        personal or business contact information if connected to an external form or CRM.
      </p>

      <p>
        If forms are added, disclose what is collected, where submissions go, who can
        review them, and how users can request changes or deletion where applicable.
      </p>
    </section>

    <section class="section card">
      <h2>7. Secrets and environment variables</h2>
      <p>
        Never commit secrets to static site files, public JSON, Markdown docs, screenshots,
        examples, issue comments, pull requests, or generated code.
      </p>

      <ul class="mini-list">
        <li>Use environment variables for private configuration.</li>
        <li>Use deployment platform secret managers where appropriate.</li>
        <li>Rotate exposed credentials immediately.</li>
        <li>Do not include secrets in screenshots or sample terminal output.</li>
      </ul>
    </section>

    <section class="section card">
      <h2>8. Review checklist before publishing</h2>
      <div class="checklist">
        <label class="check-item">
          <input type="checkbox">
          All names, emails, phone numbers, and private identifiers are removed or synthetic.
        </label>

        <label class="check-item">
          <input type="checkbox">
          No API keys, tokens, passwords, or secrets are included.
        </label>

        <label class="check-item">
          <input type="checkbox">
          Funding and business-credit content avoids guarantees and unsupported claims.
        </label>

        <label class="check-item">
          <input type="checkbox">
          Affiliate or partner relationships are disclosed where relevant.
        </label>

        <label class="check-item">
          <input type="checkbox">
          Examples are labeled as synthetic unless verified otherwise.
        </label>

        <label class="check-item">
          <input type="checkbox">
          Public and internal-only materials are clearly separated.
        </label>
      </div>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Recommended repo locations</h2>
        <pre>data-policy.html
knowledge-base/
examples/
schemas/
site-data/
contribute.html</pre>
      </article>

      <article class="card">
        <h2>Related pages</h2>
        <div class="pill-row">
          <a class="pill gold" href="terms.html">Terms</a>
          <a class="pill gold" href="privacy.html">Privacy</a>
          <a class="pill gold" href="disclaimer.html">Disclaimer</a>
          <a class="pill gold" href="affiliate-disclosure.html">Affiliate Disclosure</a>
        </div>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

Batch 5 will be **AI Builder Resources / Platform + Knowledge Pages**:

```text id="batch-5-list"
platforms.html
knowledge-bases.html
portfolio.html
roadmap.html
changelog.html
contribute.html
```


<!-- SOURCE: Batch 5 — AI Builder Resources, Platform & Knowledge Pages.md -->

# Source Batch: Batch 5 — AI Builder Resources, Platform & Knowledge Pages.md

# you asked

message time: 2026-06-18 11:43:34

Proceed

---

# chatgpt response

## Batch 5 — AI Builder Resources / Platform + Knowledge Pages

## `platforms.html`

```html id="platforms-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Platform Hub | AI Agent Library</title>
  <meta name="description" content="Choose the best target platform for each agent, skill, prompt system, workflow, or deployable AI asset.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html" aria-current="page">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Platform Packs</div>
    <h1>Platform Hub</h1>
    <p>
      Choose the best target platform for each agent, skill, prompt system,
      workflow, or deployable AI asset.
    </p>
  </section>

  <main id="main">
    <section class="section callout">
      <strong>Platform strategy:</strong>
      <p>
        Build once, package many ways. A strong agent spec can become a Custom GPT,
        Gemini Gem, Claude Project, static Vercel page, Notion operating doc,
        n8n workflow, or GitHub-managed prompt chain.
      </p>
    </section>

    <section class="section">
      <div class="grid">
        <article class="card">
          <div class="pill-row">
            <span class="pill gold">Primary</span>
            <span class="pill">Conversational Agent</span>
          </div>

          <h2>ChatGPT / Custom GPTs</h2>
          <p>
            Best for packaged assistants with instructions, knowledge files,
            conversation starters, and optional actions.
          </p>

          <ul class="mini-list">
            <li>Use for productized assistants.</li>
            <li>Attach curated knowledge files.</li>
            <li>Convert agent specs into instructions.</li>
            <li>Add safe starter prompts and output rules.</li>
          </ul>

          <a class="button-link" href="portfolio/custom-gpts/README.md">
            Open Custom GPT portfolio →
          </a>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill blue">Static</span>
            <span class="pill">Deployable Web Asset</span>
          </div>

          <h2>Vercel</h2>
          <p>
            Best for static directories, calculators, landing pages, resource hubs,
            documentation sites, lead magnets, and product microsites.
          </p>

          <ul class="mini-list">
            <li>Use dependency-free HTML/CSS/JS when possible.</li>
            <li>Keep public resources searchable.</li>
            <li>Deploy agent catalogs and knowledge directories.</li>
            <li>Use <code>vercel.json</code> to control deployment behavior.</li>
          </ul>

          <a class="button-link" href="portfolio/vercel/README.md">
            Open Vercel portfolio →
          </a>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill purple">Workspace</span>
            <span class="pill">Knowledge System</span>
          </div>

          <h2>Notion</h2>
          <p>
            Best for operating docs, internal databases, task queues, content calendars,
            partner trackers, and source-of-truth knowledge pages.
          </p>

          <ul class="mini-list">
            <li>Use for planning and documentation.</li>
            <li>Track assets, issues, partners, and campaigns.</li>
            <li>Store page briefs and status tables.</li>
            <li>Keep public repo content separate from private workspace notes.</li>
          </ul>

          <a class="button-link" href="knowledge-bases.html">
            Open knowledge layer →
          </a>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill green">Lightweight</span>
            <span class="pill">Assistant Packaging</span>
          </div>

          <h2>Gemini Gems</h2>
          <p>
            Best for lightweight reusable assistant concepts that do not require
            a full custom app or deep repo structure.
          </p>

          <ul class="mini-list">
            <li>Use for fast assistant packaging.</li>
            <li>Keep instructions short and durable.</li>
            <li>Convert top-performing GPT patterns.</li>
            <li>Track inventory in the portfolio folder.</li>
          </ul>

          <a class="button-link" href="portfolio/gemini-gems/README.md">
            Open Gemini Gems portfolio →
          </a>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill">Automation</span>
            <span class="pill">Workflow Engine</span>
          </div>

          <h2>n8n / Workflow Automation</h2>
          <p>
            Best for no-code and low-code automations using triggers, webhooks,
            CRM updates, approval steps, and data-routing workflows.
          </p>

          <ul class="mini-list">
            <li>Use for workflow specs and automation playbooks.</li>
            <li>Define triggers and webhook payloads first.</li>
            <li>Include human approval gates.</li>
            <li>Separate public examples from production credentials.</li>
          </ul>

          <a class="button-link" href="knowledge-base/automation/README.md">
            Open automation KB →
          </a>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill red">Code</span>
            <span class="pill">Execution Layer</span>
          </div>

          <h2>GitHub / Codex</h2>
          <p>
            Best for repo-managed execution: issues, branches, PRs, prompts,
            schemas, generated pages, reviews, and release discipline.
          </p>

          <ul class="mini-list">
            <li>Use issue-scoped branches.</li>
            <li>Keep unrelated changes out of each PR.</li>
            <li>Store command/control prompts in the repo.</li>
            <li>Review before merge when changing core site files.</li>
          </ul>

          <a class="button-link" href="contribute.html">
            Open contribution rules →
          </a>
        </article>
      </div>
    </section>

    <section class="section card">
      <h2>Platform selection matrix</h2>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Asset type</th>
              <th>Best platform</th>
              <th>Reason</th>
              <th>Repo output</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><strong>Public agent directory</strong></td>
              <td>Vercel</td>
              <td>Static, searchable, shareable, and easy to deploy.</td>
              <td><code>agent-catalog.html</code></td>
            </tr>

            <tr>
              <td><strong>Packaged assistant</strong></td>
              <td>Custom GPT</td>
              <td>Best for instructions, knowledge files, and guided outputs.</td>
              <td><code>agents/[agent].md</code></td>
            </tr>

            <tr>
              <td><strong>Internal operating doc</strong></td>
              <td>Notion</td>
              <td>Best for private planning, task tracking, and documentation.</td>
              <td><code>knowledge-base/</code></td>
            </tr>

            <tr>
              <td><strong>Automation workflow</strong></td>
              <td>n8n</td>
              <td>Best for webhook-triggered processes and connector actions.</td>
              <td><code>schemas/webhook-event.schema.json</code></td>
            </tr>

            <tr>
              <td><strong>Lightweight reusable assistant</strong></td>
              <td>Gemini Gems</td>
              <td>Best for quick assistant patterns and simple instructions.</td>
              <td><code>portfolio/gemini-gems/</code></td>
            </tr>

            <tr>
              <td><strong>Repo execution workflow</strong></td>
              <td>GitHub / Codex</td>
              <td>Best for branch-scoped implementation and PR review.</td>
              <td><code>roadmap/</code>, <code>schemas/</code>, <code>examples/</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

## `knowledge-bases.html`

```html id="knowledge-bases-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Knowledge Bases | AI Agent Library</title>
  <meta name="description" content="Source folders that power agents, pages, platform packs, prompt systems, examples, and reusable operating workflows.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html" aria-current="page">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Knowledge Layer</div>
    <h1>Knowledge Bases</h1>
    <p>
      Source folders that power agents, pages, platform packs, prompt systems,
      examples, and reusable operating workflows.
    </p>
  </section>

  <main id="main">
    <section class="section callout">
      <strong>Knowledge-base rule:</strong>
      <p>
        Every knowledge base should define purpose, source boundaries, public-safe rules,
        reusable examples, and the agent outputs it is allowed to support.
      </p>
    </section>

    <section class="section">
      <div class="grid">
        <article class="card">
          <div class="pill-row">
            <span class="pill gold">Funding</span>
            <span class="pill">Internal + Public Safe</span>
          </div>

          <h2>Funding Knowledge Base</h2>
          <p>
            Funding product-family routing, intake questions, documentation needs,
            disqualifiers, qualification bands, and public-safe language rules.
          </p>

          <ul class="mini-list">
            <li>Product family summaries.</li>
            <li>Required documents by path.</li>
            <li>Fast disqualifiers.</li>
            <li>Intake and routing logic.</li>
            <li>No approval or funding guarantees.</li>
          </ul>

          <a class="button-link" href="knowledge-base/funding/README.md">
            Open funding KB →
          </a>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill gold">Partner</span>
            <span class="pill">Distribution</span>
          </div>

          <h2>Partner Enablement Knowledge Base</h2>
          <p>
            Partner launch kits, attribution rules, affiliate protection, resource cards,
            broker enablement assets, and partner-safe CTAs.
          </p>

          <ul class="mini-list">
            <li>Partner lead-generation strategy.</li>
            <li>Resource card templates.</li>
            <li>Tracking and attribution rules.</li>
            <li>Affiliate disclosure requirements.</li>
            <li>Partner microsite planning.</li>
          </ul>

          <a class="button-link" href="knowledge-base/partner-enablement/README.md">
            Open partner KB →
          </a>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill">CRM</span>
            <span class="pill">Operations</span>
          </div>

          <h2>CRM Knowledge Base</h2>
          <p>
            CRM hygiene, lead status handling, note cleanup, follow-up triggers,
            missed-opportunity detection, and pipeline signal scanning.
          </p>

          <ul class="mini-list">
            <li>Lead status definitions.</li>
            <li>Follow-up trigger logic.</li>
            <li>CRM note cleanup patterns.</li>
            <li>Signal scanning workflows.</li>
            <li>Human review checkpoints.</li>
          </ul>

          <a class="button-link" href="knowledge-base/crm/README.md">
            Open CRM KB →
          </a>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill blue">Content</span>
            <span class="pill">Publishing</span>
          </div>

          <h2>Content Ops Knowledge Base</h2>
          <p>
            SEO briefs, article frameworks, repurposing systems, video-to-blog workflows,
            content calendars, and content-to-agent conversion.
          </p>

          <ul class="mini-list">
            <li>SEO article brief pattern.</li>
            <li>Video-to-blog transformation.</li>
            <li>Repurposing matrix.</li>
            <li>Metadata checklist.</li>
            <li>Publishing workflow rules.</li>
          </ul>

          <a class="button-link" href="knowledge-base/content-ops/README.md">
            Open content KB →
          </a>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill green">Automation</span>
            <span class="pill">Workflow</span>
          </div>

          <h2>Automation Knowledge Base</h2>
          <p>
            Workflow specs, trigger libraries, webhook event patterns, approval gates,
            fallbacks, failure handling, and automation safety.
          </p>

          <ul class="mini-list">
            <li>Trigger library.</li>
            <li>Action maps.</li>
            <li>Webhook event notes.</li>
            <li>Approval gates.</li>
            <li>Failure handling.</li>
          </ul>

          <a class="button-link" href="knowledge-base/automation/README.md">
            Open automation KB →
          </a>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill purple">Local</span>
            <span class="pill">Referral Engine</span>
          </div>

          <h2>Local Referrals Knowledge Base</h2>
          <p>
            Local referral partner discovery, outreach lists, profile pages,
            local scripts, referral qualification, and follow-up cadences.
          </p>

          <ul class="mini-list">
            <li>Referral partner categories.</li>
            <li>Outreach scripts.</li>
            <li>Local landing page ideas.</li>
            <li>Tracking rules.</li>
            <li>Partner qualification.</li>
          </ul>

          <a class="button-link" href="knowledge-base/local-referrals/README.md">
            Open local referrals KB →
          </a>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill red">Growth</span>
            <span class="pill">Public Tools</span>
          </div>

          <h2>Engineering-as-Marketing Knowledge Base</h2>
          <p>
            Public tools, calculators, widgets, directories, scorecards, templates,
            and conversion assets that produce useful demand.
          </p>

          <ul class="mini-list">
            <li>Tool idea backlog.</li>
            <li>Widget specs.</li>
            <li>Calculator requirements.</li>
            <li>Lead magnet mapping.</li>
            <li>Static launch checklist.</li>
          </ul>

          <a class="button-link" href="knowledge-base/engineering-as-marketing/README.md">
            Open engineering-as-marketing KB →
          </a>
        </article>
      </div>
    </section>

    <section class="section card">
      <h2>Knowledge-base folder standard</h2>
      <p>
        Each folder should be structured enough for both humans and AI agents to use.
      </p>

      <pre>knowledge-base/
  [topic]/
    README.md
    index.json
    examples.md
    source-notes.md
    guardrails.md
    output-formats.md</pre>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Public-safe content rules</h2>
        <ul class="mini-list">
          <li>Use synthetic examples unless explicitly approved otherwise.</li>
          <li>Do not expose API keys, client files, private terms, or confidential logic.</li>
          <li>Avoid guarantees and unsupported claims.</li>
          <li>Separate public-facing copy from internal-only routing notes.</li>
          <li>Include human review for high-stakes workflows.</li>
        </ul>
      </article>

      <article class="card">
        <h2>Agent output rules</h2>
        <ul class="mini-list">
          <li>Summarize known facts first.</li>
          <li>List missing inputs.</li>
          <li>Provide next-step recommendations.</li>
          <li>Include guardrails and restricted claims.</li>
          <li>Return structured assets that can be copied into the repo.</li>
        </ul>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

## `portfolio.html`

```html id="portfolio-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Portfolio | AI Agent Library</title>
  <meta name="description" content="Inventory pages for Vercel assets, Custom GPTs, Gemini Gems, Flash UI variants, and future deployable AI products.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html" aria-current="page">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Asset Registry</div>
    <h1>Portfolio</h1>
    <p>
      Inventory pages for Vercel assets, Custom GPTs, Gemini Gems, Flash UI variants,
      and future deployable AI products.
    </p>
  </section>

  <main id="main">
    <section class="section callout">
      <strong>Portfolio purpose:</strong>
      <p>
        Use this layer to track what has been built, where it lives, what repo owns it,
        what agent or skill powers it, and what next action is needed.
      </p>
    </section>

    <section class="section grid">
      <article class="card">
        <div class="pill-row">
          <span class="pill blue">Vercel</span>
          <span class="pill">Static Assets</span>
        </div>

        <h2>Vercel Portfolio</h2>
        <p>
          Static sites, agent directories, widgets, calculators, resource hubs,
          product pages, and deployment inventory.
        </p>

        <ul class="mini-list">
          <li>Production URL.</li>
          <li>Source repo.</li>
          <li>Deployment status.</li>
          <li>Primary CTA.</li>
          <li>Related agent or skill.</li>
        </ul>

        <a class="button-link" href="portfolio/vercel/README.md">
          Open Vercel portfolio →
        </a>
      </article>

      <article class="card">
        <div class="pill-row">
          <span class="pill gold">Custom GPTs</span>
          <span class="pill">Assistants</span>
        </div>

        <h2>Custom GPT Portfolio</h2>
        <p>
          Published GPTs, draft GPTs, conversion notes, knowledge files,
          prompt starters, publishing standards, and maintenance rules.
        </p>

        <ul class="mini-list">
          <li>GPT name and URL.</li>
          <li>One-sentence description.</li>
          <li>Who it is for.</li>
          <li>Knowledge files.</li>
          <li>Do-not-claim rules.</li>
        </ul>

        <a class="button-link" href="portfolio/custom-gpts/README.md">
          Open GPT portfolio →
        </a>
      </article>

      <article class="card">
        <div class="pill-row">
          <span class="pill green">Gemini Gems</span>
          <span class="pill">Lightweight AI</span>
        </div>

        <h2>Gemini Gems Portfolio</h2>
        <p>
          Gemini Gem concepts, lightweight assistant specs, converted GPT patterns,
          instructions, and publication notes.
        </p>

        <ul class="mini-list">
          <li>Gem concept.</li>
          <li>Source GPT or agent.</li>
          <li>Instruction summary.</li>
          <li>Target user.</li>
          <li>Status and next step.</li>
        </ul>

        <a class="button-link" href="portfolio/gemini-gems/README.md">
          Open Gems portfolio →
        </a>
      </article>

      <article class="card">
        <div class="pill-row">
          <span class="pill purple">Flash UI</span>
          <span class="pill">Design Variants</span>
        </div>

        <h2>Flash UI Portfolio</h2>
        <p>
          Reusable static site variants, landing page patterns, visual systems,
          component ideas, and interface experiments.
        </p>

        <ul class="mini-list">
          <li>Variant name.</li>
          <li>Visual style.</li>
          <li>Best use case.</li>
          <li>Static file path.</li>
          <li>Preview URL.</li>
        </ul>

        <a class="button-link" href="portfolio/flash-ui/README.md">
          Open Flash UI portfolio →
        </a>
      </article>
    </section>

    <section class="section card">
      <h2>Recommended inventory schema</h2>
      <p>
        Each portfolio item should be easy to audit, refresh, and repurpose.
      </p>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Purpose</th>
              <th>Example</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><strong>Name</strong></td>
              <td>Human-readable asset name.</td>
              <td>Funding Pipeline Triage Agent</td>
            </tr>

            <tr>
              <td><strong>Type</strong></td>
              <td>Asset category.</td>
              <td>Custom GPT, Vercel Site, Gem, UI Variant</td>
            </tr>

            <tr>
              <td><strong>URL</strong></td>
              <td>Public or internal access link.</td>
              <td>https://example.vercel.app</td>
            </tr>

            <tr>
              <td><strong>Source repo</strong></td>
              <td>GitHub repository that owns the files.</td>
              <td>JFeimster/ai-agent-library</td>
            </tr>

            <tr>
              <td><strong>Status</strong></td>
              <td>Current lifecycle stage.</td>
              <td>Draft, Live, Needs Refresh, Archived</td>
            </tr>

            <tr>
              <td><strong>Related agent</strong></td>
              <td>Agent spec connected to the asset.</td>
              <td>agents/01-funding-pipeline-triage-agent.md</td>
            </tr>

            <tr>
              <td><strong>Related skill</strong></td>
              <td>Reusable skill that powers or maintains the asset.</td>
              <td>skills/static-site-page-builder/SKILL.md</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Suggested folder pattern</h2>
        <pre>portfolio/
  vercel/
    README.md
    index.json
    inventory.md

  custom-gpts/
    README.md
    index.json
    inventory.md

  gemini-gems/
    README.md
    index.json
    inventory.md

  flash-ui/
    README.md
    index.json
    inventory.md</pre>
      </article>

      <article class="card">
        <h2>Portfolio maintenance checklist</h2>
        <div class="checklist">
          <label class="check-item">
            <input type="checkbox">
            Every item has a status.
          </label>

          <label class="check-item">
            <input type="checkbox">
            Every public item has a URL.
          </label>

          <label class="check-item">
            <input type="checkbox">
            Every item maps to a repo or source file.
          </label>

          <label class="check-item">
            <input type="checkbox">
            Deprecated items are marked archived.
          </label>

          <label class="check-item">
            <input type="checkbox">
            CTAs and links are checked after major updates.
          </label>
        </div>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

## `roadmap.html`

```html id="roadmap-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Roadmap | AI Agent Library</title>
  <meta name="description" content="Phased roadmap for turning AI Agent Library into a static directory, distribution system, marketplace layer, and cross-platform agent operating system.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html" aria-current="page">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Community & Trust</div>
    <h1>Roadmap</h1>
    <p>
      Phased roadmap for turning AI Agent Library into a static directory,
      distribution system, marketplace layer, and cross-platform agent operating system.
    </p>
  </section>

  <main id="main">
    <section class="section callout">
      <strong>Roadmap rule:</strong>
      <p>
        Keep roadmap work issue-scoped, file-scoped, and PR-ready. Do not combine
        unrelated architecture, content, schema, and deployment changes in one task.
      </p>
    </section>

    <section class="section">
      <div class="timeline">
        <article class="timeline-item">
          <div class="pill-row">
            <span class="pill green">Phase 1</span>
            <span class="pill">Fast MVP</span>
          </div>

          <h2>Fast MVP</h2>
          <p>
            Build the core public static site and repo structure so agents, skills,
            knowledge bases, schemas, examples, and portfolio assets can be discovered.
          </p>

          <div class="checklist">
            <label class="check-item"><input type="checkbox"> Root static site files.</label>
            <label class="check-item"><input type="checkbox"> Directory and discovery pages.</label>
            <label class="check-item"><input type="checkbox"> Skill catalog pages.</label>
            <label class="check-item"><input type="checkbox"> Legal and trust pages.</label>
            <label class="check-item"><input type="checkbox"> Basic data files.</label>
          </div>

          <a class="button-link secondary" href="roadmap/phase-1-fast-mvp.md">
            Open phase file →
          </a>
        </article>

        <article class="timeline-item">
          <div class="pill-row">
            <span class="pill blue">Phase 2</span>
            <span class="pill">Distribution System</span>
          </div>

          <h2>Distribution System</h2>
          <p>
            Add affiliate recruitment, partner provider directories, team profiles,
            local referral systems, and partner enablement resources.
          </p>

          <div class="checklist">
            <label class="check-item"><input type="checkbox"> Affiliate recruitment page.</label>
            <label class="check-item"><input type="checkbox"> Partner provider directory.</label>
            <label class="check-item"><input type="checkbox"> Team and referral profile system.</label>
            <label class="check-item"><input type="checkbox"> Partner enablement knowledge base.</label>
            <label class="check-item"><input type="checkbox"> Tracking and attribution model.</label>
          </div>

          <a class="button-link secondary" href="roadmap/phase-2-distribution-system.md">
            Open phase file →
          </a>
        </article>

        <article class="timeline-item">
          <div class="pill-row">
            <span class="pill purple">Phase 3</span>
            <span class="pill">Marketplace Layer</span>
          </div>

          <h2>Marketplace Layer</h2>
          <p>
            Turn the library into a browseable asset marketplace for agents, skills,
            prompt packs, examples, schemas, platform packs, and deployable templates.
          </p>

          <div class="checklist">
            <label class="check-item"><input type="checkbox"> Searchable asset marketplace.</label>
            <label class="check-item"><input type="checkbox"> Filtered catalogs for agents and skills.</label>
            <label class="check-item"><input type="checkbox"> Downloadable templates.</label>
            <label class="check-item"><input type="checkbox"> Portfolio inventory pages.</label>
            <label class="check-item"><input type="checkbox"> Contribution intake workflow.</label>
          </div>

          <a class="button-link secondary" href="roadmap/phase-3-marketplace-layer.md">
            Open phase file →
          </a>
        </article>

        <article class="timeline-item">
          <div class="pill-row">
            <span class="pill gold">Phase 4</span>
            <span class="pill">Platform Layer</span>
          </div>

          <h2>Platform Layer</h2>
          <p>
            Add cross-platform conversion systems for Custom GPTs, Gemini Gems,
            Vercel apps, schemas, webhooks, automations, and future agent marketplaces.
          </p>

          <div class="checklist">
            <label class="check-item"><input type="checkbox"> Custom GPT platform pack.</label>
            <label class="check-item"><input type="checkbox"> Gemini Gems portfolio.</label>
            <label class="check-item"><input type="checkbox"> Vercel app deployment registry.</label>
            <label class="check-item"><input type="checkbox"> Schemas and validation.</label>
            <label class="check-item"><input type="checkbox"> Automation and webhook event layer.</label>
          </div>

          <a class="button-link secondary" href="roadmap/phase-4-platform-layer.md">
            Open phase file →
          </a>
        </article>
      </div>
    </section>

    <section class="section card">
      <h2>Roadmap operating rules</h2>

      <ul class="mini-list">
        <li>Use one issue per meaningful page group, schema group, or knowledge-base layer.</li>
        <li>Use tasklists for page inventories so items can be checked off as completed.</li>
        <li>Keep generated files static unless a build step is intentionally added.</li>
        <li>Use pull requests for grouped changes that need review.</li>
        <li>Do not merge unrelated agent, legal, schema, and design changes together.</li>
        <li>Preserve public-safe language for funding and business-credit materials.</li>
      </ul>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Suggested issue labels</h2>
        <div class="pill-row">
          <span class="pill gold">site</span>
          <span class="pill gold">pages</span>
          <span class="pill gold">knowledge-base</span>
          <span class="pill gold">schemas</span>
          <span class="pill gold">portfolio</span>
          <span class="pill gold">examples</span>
          <span class="pill gold">legal</span>
          <span class="pill gold">partner-enablement</span>
        </div>
      </article>

      <article class="card">
        <h2>Suggested PR standard</h2>
        <pre>Summary
- What changed

Files
- List generated or revised files

Validation
- Static page opens
- Links checked
- Public-safe language reviewed

Notes
- Follow-up issues if needed</pre>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

## `changelog.html`

```html id="changelog-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Changelog | AI Agent Library</title>
  <meta name="description" content="Release history for AI Agent Library static pages, knowledge folders, schemas, examples, portfolio assets, and build-system resources.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Community & Trust</div>
    <h1>Changelog</h1>
    <p>
      Release history for AI Agent Library static pages, knowledge folders,
      schemas, examples, portfolio assets, and build-system resources.
    </p>
  </section>

  <main id="main">
    <section class="section callout">
      <strong>Changelog rule:</strong>
      <p>
        Record meaningful changes that affect discovery, public pages, repo structure,
        schemas, knowledge-base quality, deployment behavior, or contribution workflow.
      </p>
    </section>

    <section class="section">
      <div id="changelogStats" class="stat-row"></div>
    </section>

    <section class="section">
      <div id="changelogItems" class="timeline"></div>
    </section>

    <section class="section card">
      <h2>Recommended changelog categories</h2>

      <div class="pill-row">
        <span class="pill gold">Site</span>
        <span class="pill gold">Agents</span>
        <span class="pill gold">Skills</span>
        <span class="pill gold">Knowledge Base</span>
        <span class="pill gold">Schemas</span>
        <span class="pill gold">Examples</span>
        <span class="pill gold">Portfolio</span>
        <span class="pill gold">Legal</span>
        <span class="pill gold">Deployment</span>
      </div>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Suggested JSON source</h2>
        <pre>site-data/changelog.json</pre>
      </article>

      <article class="card">
        <h2>Example entry</h2>
        <pre>{
  "date": "2026-06-18",
  "title": "Generated full static site pack",
  "type": "Site",
  "summary": "Added root pages, discovery pages, skill pages, legal pages, knowledge bases, schemas, roadmaps, portfolios, examples, and partner pages."
}</pre>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>

  <script>
    (async () => {
      const items = await AILibrary.fetchJSON("site-data/changelog.json", [
        {
          date: "2026-06-18",
          title: "Generated full static site pack",
          type: "Site",
          summary: "Added root pages, discovery pages, skill pages, legal pages, knowledge bases, schemas, roadmaps, portfolios, examples, and partner pages."
        }
      ]);

      const types = AILibrary.unique(items.map((item) => item.type));

      document.getElementById("changelogStats").innerHTML = `
        <div class="stat">
          <strong>${items.length}</strong>
          <span>Total entries</span>
        </div>

        <div class="stat">
          <strong>${types.length}</strong>
          <span>Change types</span>
        </div>

        <div class="stat">
          <strong>${items[0]?.date || "TBD"}</strong>
          <span>Latest update</span>
        </div>
      `;

      document.getElementById("changelogItems").innerHTML = items.map((item) => {
        return `
          <article class="timeline-item">
            <div class="pill-row">
              <span class="pill gold">${AILibrary.escapeHTML(item.type)}</span>
              <span class="pill">${AILibrary.escapeHTML(item.date)}</span>
            </div>

            <h2>${AILibrary.escapeHTML(item.title)}</h2>
            <p>${AILibrary.escapeHTML(item.summary)}</p>
          </article>
        `;
      }).join("") || `<div class="empty-state">No changelog entries found.</div>`;
    })();
  </script>
</body>
</html>
```

## `contribute.html`

```html id="contribute-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Contribute | AI Agent Library</title>
  <meta name="description" content="Submission process for agents, skills, prompt packs, schemas, examples, static pages, portfolio assets, and platform implementation resources.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Community & Trust</div>
    <h1>Contribute</h1>
    <p>
      Submission process for agents, skills, prompt packs, schemas, examples,
      static pages, portfolio assets, and platform implementation resources.
    </p>
  </section>

  <main id="main">
    <section class="section callout">
      <strong>Contribution principle:</strong>
      <p>
        A useful contribution should be specific, public-safe, structured, reusable,
        and easy to review. Include the intended path and explain how the asset helps
        builders or operators.
      </p>
    </section>

    <section class="section grid">
      <article class="card">
        <div class="pill-row">
          <span class="pill gold">Agents</span>
        </div>

        <h2>Submit an Agent</h2>
        <p>
          Add a productized assistant with a buyer, pain solved, workflow,
          outputs, guardrails, and monetization path.
        </p>

        <ul class="mini-list">
          <li>Agent name.</li>
          <li>Who it is for.</li>
          <li>Main pain it solves.</li>
          <li>Inputs and outputs.</li>
          <li>Restricted claims.</li>
          <li>Suggested path.</li>
        </ul>
      </article>

      <article class="card">
        <div class="pill-row">
          <span class="pill blue">Skills</span>
        </div>

        <h2>Submit a Skill</h2>
        <p>
          Add a reusable capability that can power multiple agents, pages,
          workflows, schemas, platform packs, or examples.
        </p>

        <ul class="mini-list">
          <li>Capability name.</li>
          <li>Required inputs.</li>
          <li>Standard outputs.</li>
          <li>Workflow steps.</li>
          <li>Guardrails.</li>
          <li>Example usage.</li>
        </ul>
      </article>

      <article class="card">
        <div class="pill-row">
          <span class="pill purple">Prompts</span>
        </div>

        <h2>Submit a Prompt Pack</h2>
        <p>
          Add a repeatable prompt chain for planning, building, reviewing,
          launching, auditing, or maintaining AI assets.
        </p>

        <ul class="mini-list">
          <li>Prompt chain name.</li>
          <li>Use case.</li>
          <li>Prompt sequence.</li>
          <li>Inputs required.</li>
          <li>Expected outputs.</li>
          <li>Review checklist.</li>
        </ul>
      </article>

      <article class="card">
        <div class="pill-row">
          <span class="pill green">Schemas</span>
        </div>

        <h2>Submit a Schema</h2>
        <p>
          Add JSON schemas that make the repo easier to validate, automate,
          search, and convert into platform-ready assets.
        </p>

        <ul class="mini-list">
          <li>Schema purpose.</li>
          <li>Required fields.</li>
          <li>Allowed values.</li>
          <li>Example object.</li>
          <li>Validation notes.</li>
          <li>Related pages or folders.</li>
        </ul>
      </article>

      <article class="card">
        <div class="pill-row">
          <span class="pill red">Examples</span>
        </div>

        <h2>Submit an Example</h2>
        <p>
          Add a synthetic scenario that shows how an agent, skill, prompt,
          schema, or workflow should behave.
        </p>

        <ul class="mini-list">
          <li>Scenario.</li>
          <li>Inputs.</li>
          <li>Missing inputs.</li>
          <li>Expected output.</li>
          <li>Review notes.</li>
          <li>Reusable asset.</li>
        </ul>
      </article>

      <article class="card">
        <div class="pill-row">
          <span class="pill">Pages</span>
        </div>

        <h2>Submit a Static Page</h2>
        <p>
          Add or improve HTML pages that make the library more discoverable,
          trustworthy, useful, or conversion-ready.
        </p>

        <ul class="mini-list">
          <li>Page purpose.</li>
          <li>Target user.</li>
          <li>Navigation placement.</li>
          <li>Required data files.</li>
          <li>CTA or next step.</li>
          <li>Related issue.</li>
        </ul>
      </article>
    </section>

    <section class="section card">
      <h2>Universal submission checklist</h2>

      <div class="checklist">
        <label class="check-item">
          <input type="checkbox">
          The contribution has a clear purpose and audience.
        </label>

        <label class="check-item">
          <input type="checkbox">
          Required inputs and outputs are defined.
        </label>

        <label class="check-item">
          <input type="checkbox">
          The suggested repo path is included.
        </label>

        <label class="check-item">
          <input type="checkbox">
          The content does not include private client data, secrets, API keys, or protected source material.
        </label>

        <label class="check-item">
          <input type="checkbox">
          Funding, business-credit, finance, legal, tax, or platform-related claims are public-safe and non-promissory.
        </label>

        <label class="check-item">
          <input type="checkbox">
          Examples are synthetic unless explicitly approved and documented.
        </label>

        <label class="check-item">
          <input type="checkbox">
          The contribution can be reviewed without needing hidden context.
        </label>

        <label class="check-item">
          <input type="checkbox">
          Related files, folders, or pages are listed.
        </label>
      </div>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Issue template</h2>

        <pre>## Contribution Type
Agent / Skill / Prompt Pack / Schema / Example / Page / Portfolio Asset

## Purpose
What does this add or improve?

## Audience
Who is this for?

## Suggested Path
repo/path/here

## Required Inputs
- Input 1
- Input 2

## Expected Output
- Output 1
- Output 2

## Guardrails
- No private data
- No unsupported claims
- Human review where needed

## Acceptance Criteria
- [ ] File added or updated
- [ ] Links checked
- [ ] Public-safe language reviewed
- [ ] Related indexes updated</pre>
      </article>

      <article class="card">
        <h2>PR checklist</h2>

        <pre>## Summary
- What changed

## Files Changed
- path/to/file

## Validation
- [ ] Static page opens
- [ ] Navigation works
- [ ] Data files load
- [ ] No secrets or private data
- [ ] Public-safe language reviewed

## Follow-up
- Related issues
- Known limitations</pre>
      </article>
    </section>

    <section class="section card">
      <h2>Contribution paths</h2>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Contribution</th>
              <th>Preferred path</th>
              <th>Review focus</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><strong>Agent spec</strong></td>
              <td><code>agents/[agent-name].md</code></td>
              <td>Buyer, pain solved, workflow, outputs, monetization, guardrails.</td>
            </tr>

            <tr>
              <td><strong>Skill</strong></td>
              <td><code>skills/[skill-name]/SKILL.md</code></td>
              <td>Reusable capability, inputs, outputs, examples, safety notes.</td>
            </tr>

            <tr>
              <td><strong>Knowledge base</strong></td>
              <td><code>knowledge-base/[topic]/</code></td>
              <td>Source boundaries, public-safe rules, examples, output formats.</td>
            </tr>

            <tr>
              <td><strong>Schema</strong></td>
              <td><code>schemas/[schema-name].schema.json</code></td>
              <td>Required fields, allowed values, validation utility, examples.</td>
            </tr>

            <tr>
              <td><strong>Example</strong></td>
              <td><code>examples/[category]/example-001.md</code></td>
              <td>Synthetic inputs, expected output, review notes, guardrails.</td>
            </tr>

            <tr>
              <td><strong>Static page</strong></td>
              <td><code>[page-name].html</code></td>
              <td>Navigation, style consistency, content quality, links, public safety.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

Batch 6 will be **Affiliates & Partners**:

```text id="batch-6-list"
get-started.html
partners.html
team.html
profile.html
```


<!-- SOURCE: Batch 6 — Affiliates & Partners.md -->

# Source Batch: Batch 6 — Affiliates & Partners.md

# you asked

message time: 2026-06-18 11:47:08

Proceed

---

# chatgpt response

## Batch 6 — Affiliates & Partners

## `get-started.html`

```html id="get-started-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Partner Get Started | AI Agent Library</title>
  <meta name="description" content="A recruitment landing page for referral agents, affiliates, brokers, ISO reps, consultants, local connectors, and strategic partners.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Affiliates & Partners</div>
    <h1>Partner Get Started</h1>
    <p>
      A recruitment landing page for referral agents, affiliates, brokers, ISO reps,
      consultants, local connectors, and strategic partners.
    </p>

    <div class="hero-actions">
      <a class="button-link" href="#apply">Apply to become a partner →</a>
      <a class="button-link secondary" href="partners.html">View partner directory</a>
    </div>
  </section>

  <main id="main">
    <section class="section callout">
      <strong>Partner recruitment page:</strong>
      <p>
        Use this page as the first-click destination for people who may refer,
        promote, distribute, or co-market AI Agent Library resources and related
        business tools.
      </p>
    </section>

    <section class="section">
      <div class="grid">
        <article class="card">
          <div class="pill-row">
            <span class="pill gold">Referral Agents</span>
          </div>

          <h2>Source warm introductions</h2>
          <p>
            For people who know business owners, creators, operators, ecommerce sellers,
            contractors, consultants, agencies, or local service businesses.
          </p>

          <ul class="mini-list">
            <li>Share approved resource pages.</li>
            <li>Use tracked CTAs where available.</li>
            <li>Send prospects to public-safe educational tools first.</li>
            <li>Avoid unsupported promises or pressure-based language.</li>
          </ul>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill blue">Affiliates</span>
          </div>

          <h2>Promote useful assets</h2>
          <p>
            For publishers, creators, niche site owners, newsletter operators,
            bloggers, SEO operators, and social content partners.
          </p>

          <ul class="mini-list">
            <li>Promote public resources and directories.</li>
            <li>Use approved disclosure language.</li>
            <li>Link to controlled landing pages first.</li>
            <li>Do not misrepresent affiliation or outcomes.</li>
          </ul>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill green">Brokers & ISOs</span>
          </div>

          <h2>Use structured enablement</h2>
          <p>
            For brokers, ISO reps, referral partners, and operators who need
            reusable resource cards, intake pages, follow-up assets, and profile pages.
          </p>

          <ul class="mini-list">
            <li>Use standardized resource cards.</li>
            <li>Route prospects through approved forms or pages.</li>
            <li>Keep product language educational and non-promissory.</li>
            <li>Document partner source and attribution.</li>
          </ul>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill purple">Strategic Partners</span>
          </div>

          <h2>Co-build distribution systems</h2>
          <p>
            For software providers, agencies, service firms, communities, and
            niche platforms that want partner-ready AI tools and resource hubs.
          </p>

          <ul class="mini-list">
            <li>Co-create resource pages.</li>
            <li>Package tools into partner campaigns.</li>
            <li>Build tracked directories and profile pages.</li>
            <li>Align disclosure, attribution, and positioning rules.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>What partners can promote</h2>
        <ul class="mini-list">
          <li>AI agent directories.</li>
          <li>Reusable skill catalogs.</li>
          <li>Prompt packs and execution frameworks.</li>
          <li>Funding readiness resources.</li>
          <li>Business-credit readiness resources.</li>
          <li>CRM and automation workflow assets.</li>
          <li>Public calculators, scorecards, and static tools.</li>
          <li>Partner profiles, resource cards, and landing pages.</li>
        </ul>
      </article>

      <article class="card">
        <h2>What partners should not claim</h2>
        <ul class="mini-list">
          <li>No guaranteed approvals.</li>
          <li>No guaranteed funding or credit outcomes.</li>
          <li>No guaranteed revenue, ranking, or lead volume.</li>
          <li>No claims that AI replaces professional review.</li>
          <li>No private provider names in public white-label pages unless approved.</li>
          <li>No spam, scraped lead abuse, or deceptive outreach.</li>
          <li>No undisclosed affiliate or referral relationships.</li>
        </ul>
      </article>
    </section>

    <section class="section card">
      <h2>Partner path</h2>

      <div class="timeline">
        <article class="timeline-item">
          <div class="pill-row">
            <span class="pill gold">Step 1</span>
            <span class="pill">Fit</span>
          </div>

          <h3>Confirm partner fit</h3>
          <p>
            Identify the partner type, audience, traffic source, relationship model,
            and resources they should be allowed to promote.
          </p>
        </article>

        <article class="timeline-item">
          <div class="pill-row">
            <span class="pill gold">Step 2</span>
            <span class="pill">Assets</span>
          </div>

          <h3>Assign approved assets</h3>
          <p>
            Give partners approved pages, CTAs, resource cards, profile pages,
            tracking links, and disclosure language.
          </p>
        </article>

        <article class="timeline-item">
          <div class="pill-row">
            <span class="pill gold">Step 3</span>
            <span class="pill">Launch</span>
          </div>

          <h3>Launch distribution</h3>
          <p>
            Publish the profile, activate links, provide launch copy, and document
            how leads or users should be routed.
          </p>
        </article>

        <article class="timeline-item">
          <div class="pill-row">
            <span class="pill gold">Step 4</span>
            <span class="pill">Review</span>
          </div>

          <h3>Review quality</h3>
          <p>
            Monitor link quality, messaging, disclosures, conversions, and whether
            the partner is following public-safe language rules.
          </p>
        </article>
      </div>
    </section>

    <section class="section card" id="apply">
      <h2>Apply to become a partner</h2>
      <p>
        Replace this placeholder CTA with your partner application form, Tally form,
        Notion form, CRM intake link, or approved affiliate onboarding page.
      </p>

      <div class="form-grid">
        <label>
          Partner type
          <select>
            <option>Referral Agent</option>
            <option>Affiliate Publisher</option>
            <option>Broker / ISO Rep</option>
            <option>Consultant</option>
            <option>Agency</option>
            <option>Strategic Partner</option>
          </select>
        </label>

        <label>
          Audience focus
          <input placeholder="Small businesses, ecommerce sellers, contractors...">
        </label>

        <label>
          Main promotion channel
          <input placeholder="Website, newsletter, social, direct referrals...">
        </label>

        <label>
          Preferred resource type
          <input placeholder="Landing page, calculator, directory, GPT, checklist...">
        </label>
      </div>

      <a class="button-link" href="#">
        Replace with partner application URL →
      </a>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Recommended repo links</h2>
        <div class="pill-row">
          <a class="pill gold" href="partners.html">Partner directory</a>
          <a class="pill gold" href="team.html">Team profiles</a>
          <a class="pill gold" href="profile.html">Profile template</a>
          <a class="pill gold" href="affiliate-disclosure.html">Affiliate disclosure</a>
          <a class="pill gold" href="knowledge-base/partner-enablement/README.md">Partner KB</a>
        </div>
      </article>

      <article class="card">
        <h2>Suggested repo path</h2>
        <pre>get-started.html</pre>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

## `partners.html`

```html id="partners-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Partner Provider Directory | AI Agent Library</title>
  <meta name="description" content="Directory shell for affiliate providers, partner resources, offer categories, tracked provider pages, and approved resource destinations.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Affiliates & Partners</div>
    <h1>Partner Provider Directory</h1>
    <p>
      Directory shell for affiliate providers, partner resources, offer categories,
      tracked provider pages, and approved resource destinations.
    </p>

    <div class="hero-actions">
      <a class="button-link" href="get-started.html">Become a partner →</a>
      <a class="button-link secondary" href="affiliate-disclosure.html">View disclosure</a>
    </div>
  </section>

  <main id="main">
    <section class="section callout">
      <strong>Directory rule:</strong>
      <p>
        Provider listings should help users discover useful resources without implying
        guaranteed outcomes, hidden endorsements, or undisclosed compensation.
      </p>
    </section>

    <section class="section">
      <div class="toolbar">
        <input id="partnerSearch" type="search" placeholder="Search providers, categories, offers...">

        <select id="partnerCategory">
          <option value="all">All categories</option>
          <option value="Funding">Funding</option>
          <option value="Business Credit">Business Credit</option>
          <option value="Automation">Automation</option>
          <option value="Content">Content</option>
          <option value="AI Platforms">AI Platforms</option>
          <option value="CRM">CRM</option>
        </select>
      </div>
    </section>

    <section class="section">
      <div id="partnerStats" class="stat-row"></div>
    </section>

    <section class="section">
      <div id="partnerGrid" class="wide-grid"></div>
    </section>

    <section class="section card">
      <h2>Provider listing standard</h2>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Purpose</th>
              <th>Example</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><strong>Name</strong></td>
              <td>Public provider or resource name.</td>
              <td>Funding Tools</td>
            </tr>

            <tr>
              <td><strong>Category</strong></td>
              <td>Primary directory category.</td>
              <td>Funding</td>
            </tr>

            <tr>
              <td><strong>Description</strong></td>
              <td>Public-safe summary of what the resource helps with.</td>
              <td>Funding readiness tools and educational comparison resources.</td>
            </tr>

            <tr>
              <td><strong>Relationship</strong></td>
              <td>Clarifies affiliate, referral, sponsor, or neutral listing status.</td>
              <td>Affiliate / Referral / Strategic Partner / Listed Resource</td>
            </tr>

            <tr>
              <td><strong>CTA</strong></td>
              <td>Approved next step.</td>
              <td>View resources</td>
            </tr>

            <tr>
              <td><strong>Disclosure</strong></td>
              <td>Required for paid, affiliate, or referral relationships.</td>
              <td>May include affiliate or referral compensation.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Safe listing rules</h2>
        <ul class="mini-list">
          <li>Use approved public descriptions.</li>
          <li>Disclose affiliate or referral relationships.</li>
          <li>Do not rank providers by hidden compensation.</li>
          <li>Do not make guaranteed outcome claims.</li>
          <li>Send users to controlled resource pages first when white-label rules apply.</li>
          <li>Review external links periodically.</li>
        </ul>
      </article>

      <article class="card">
        <h2>Suggested data file</h2>
        <pre>site-data/partners.json</pre>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>

  <script>
    const providers = [
      {
        name: "Funding Tools",
        category: "Funding",
        relationship: "Referral / Resource",
        description: "Public-safe funding readiness tools, calculators, comparison resources, and educational intake pages.",
        cta: "View funding resources",
        url: "knowledge-base/funding/README.md",
        disclosure: "May include referral or affiliate relationships."
      },
      {
        name: "Business Credit Resources",
        category: "Business Credit",
        relationship: "Educational Resource",
        description: "Educational readiness checklists, setup guides, and common gap review resources for business owners.",
        cta: "View business-credit resources",
        url: "knowledge-base/business-credit/README.md",
        disclosure: "Educational only; no credit outcome guarantees."
      },
      {
        name: "AI Automation Tools",
        category: "Automation",
        relationship: "Implementation Resource",
        description: "Workflow specs, trigger maps, webhook examples, review gates, and automation planning resources.",
        cta: "View automation resources",
        url: "knowledge-base/automation/README.md",
        disclosure: "Implementation examples require human review."
      },
      {
        name: "Content & SEO Tools",
        category: "Content",
        relationship: "Resource / Service",
        description: "Article brief builders, prompt packs, publishing workflows, content calendars, and repurposing systems.",
        cta: "View content resources",
        url: "knowledge-base/content-ops/README.md",
        disclosure: "No ranking or traffic guarantees."
      },
      {
        name: "Custom GPT Platform Resources",
        category: "AI Platforms",
        relationship: "Platform Resource",
        description: "Custom GPT packaging notes, GPT portfolio inventory, knowledge-file guidance, and instruction frameworks.",
        cta: "View GPT portfolio",
        url: "portfolio/custom-gpts/README.md",
        disclosure: "Platform availability and rules may change."
      },
      {
        name: "CRM Workflow Resources",
        category: "CRM",
        relationship: "Implementation Resource",
        description: "CRM lead-stage definitions, follow-up triggers, note cleanup patterns, and pipeline signal scanning workflows.",
        cta: "View CRM resources",
        url: "knowledge-base/crm/README.md",
        disclosure: "Do not upload private CRM exports to public examples."
      }
    ];

    const searchInput = document.getElementById("partnerSearch");
    const categorySelect = document.getElementById("partnerCategory");
    const stats = document.getElementById("partnerStats");
    const grid = document.getElementById("partnerGrid");

    function renderPartners() {
      const query = searchInput.value.toLowerCase();
      const category = categorySelect.value;

      const filtered = providers.filter((provider) => {
        const searchableText = [
          provider.name,
          provider.category,
          provider.relationship,
          provider.description,
          provider.disclosure
        ].join(" ").toLowerCase();

        return searchableText.includes(query) &&
          (category === "all" || provider.category === category);
      });

      const categories = AILibrary.unique(providers.map((provider) => provider.category));

      stats.innerHTML = `
        <div class="stat">
          <strong>${providers.length}</strong>
          <span>Total listings</span>
        </div>

        <div class="stat">
          <strong>${categories.length}</strong>
          <span>Categories</span>
        </div>

        <div class="stat">
          <strong>${filtered.length}</strong>
          <span>Visible results</span>
        </div>
      `;

      grid.innerHTML = filtered.map((provider) => {
        return `
          <article class="card">
            <div class="pill-row">
              <span class="pill gold">${AILibrary.escapeHTML(provider.category)}</span>
              <span class="pill">${AILibrary.escapeHTML(provider.relationship)}</span>
            </div>

            <h2>${AILibrary.escapeHTML(provider.name)}</h2>
            <p>${AILibrary.escapeHTML(provider.description)}</p>

            <h3>Disclosure note</h3>
            <p>${AILibrary.escapeHTML(provider.disclosure)}</p>

            <a class="button-link secondary" href="${AILibrary.escapeHTML(provider.url)}">
              ${AILibrary.escapeHTML(provider.cta)} →
            </a>
          </article>
        `;
      }).join("") || `<div class="empty-state">No partner listings found.</div>`;
    }

    searchInput.addEventListener("input", renderPartners);
    categorySelect.addEventListener("input", renderPartners);
    categorySelect.addEventListener("change", renderPartners);

    renderPartners();
  </script>
</body>
</html>
```

## `team.html`

```html id="team-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Team & Partner Profiles | AI Agent Library</title>
  <meta name="description" content="Directory for referral agents, affiliates, brokers, ISO reps, consultants, strategic partners, and partner-facing profile pages.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Affiliates & Partners</div>
    <h1>Team & Partner Profiles</h1>
    <p>
      Directory for referral agents, affiliates, brokers, ISO reps, consultants,
      strategic partners, and partner-facing profile pages.
    </p>

    <div class="hero-actions">
      <a class="button-link" href="profile.html">Open profile template →</a>
      <a class="button-link secondary" href="get-started.html">Partner get started</a>
    </div>
  </section>

  <main id="main">
    <section class="section callout">
      <strong>Team directory shell:</strong>
      <p>
        Use this page for referral agents, affiliates, brokers, ISO reps, and partner-facing
        profiles. Keep profiles public-safe and avoid private contact details unless they
        are intentionally approved for publication.
      </p>
    </section>

    <section class="section">
      <div class="toolbar">
        <input id="teamSearch" type="search" placeholder="Search roles, verticals, profile types...">

        <select id="teamFilter">
          <option value="all">All profile types</option>
          <option value="Referral">Referral</option>
          <option value="Affiliate">Affiliate</option>
          <option value="Broker">Broker</option>
          <option value="ISO">ISO</option>
          <option value="Consultant">Consultant</option>
          <option value="Strategic">Strategic</option>
        </select>
      </div>
    </section>

    <section class="section">
      <div id="teamGrid" class="grid"></div>
    </section>

    <section class="section card">
      <h2>Profile directory fields</h2>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Purpose</th>
              <th>Public-safe example</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><strong>Name</strong></td>
              <td>Public profile display name.</td>
              <td>Partner Name</td>
            </tr>

            <tr>
              <td><strong>Role</strong></td>
              <td>Partner or team function.</td>
              <td>Referral Agent</td>
            </tr>

            <tr>
              <td><strong>Vertical</strong></td>
              <td>Audience or niche focus.</td>
              <td>Small Business Owners</td>
            </tr>

            <tr>
              <td><strong>Region</strong></td>
              <td>Local, national, or niche market.</td>
              <td>Southeast US / Remote</td>
            </tr>

            <tr>
              <td><strong>Approved CTA</strong></td>
              <td>Controlled next-step link.</td>
              <td>View resources</td>
            </tr>

            <tr>
              <td><strong>Tracking ID</strong></td>
              <td>Internal attribution slug.</td>
              <td>partner_slug</td>
            </tr>

            <tr>
              <td><strong>Disclosure</strong></td>
              <td>Affiliate, referral, or partner relationship note.</td>
              <td>May receive referral compensation.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Profile publishing rules</h2>
        <ul class="mini-list">
          <li>Use approved public bios only.</li>
          <li>Do not publish private phone numbers or emails unless approved.</li>
          <li>Use controlled CTA links and resource pages.</li>
          <li>Include affiliate or referral disclosures where needed.</li>
          <li>Do not imply guaranteed outcomes.</li>
          <li>Do not expose private provider routing details.</li>
        </ul>
      </article>

      <article class="card">
        <h2>Suggested profile paths</h2>
        <pre>team.html
profile.html
profiles/
  [partner-slug].html

site-data/
  team.json</pre>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>

  <script>
    const profileTypes = [
      {
        title: "Referral Agents",
        type: "Referral",
        description: "People who source introductions, local relationships, niche traffic, or business owner conversations.",
        verticals: ["Local business", "Ecommerce", "Contractors", "Agencies"],
        cta: "View sample referral profile"
      },
      {
        title: "Affiliates",
        type: "Affiliate",
        description: "Publishers, creators, directories, newsletters, and content partners that share approved resource links.",
        verticals: ["SEO", "Newsletter", "Creator", "Niche directory"],
        cta: "View sample affiliate profile"
      },
      {
        title: "Brokers",
        type: "Broker",
        description: "Business funding brokers and operators using approved resource cards, tools, and profile pages.",
        verticals: ["Funding", "Business finance", "SMB advisory"],
        cta: "View sample broker profile"
      },
      {
        title: "ISO Reps",
        type: "ISO",
        description: "Independent sales reps and channel partners using structured, trackable resources and public-safe CTAs.",
        verticals: ["Funding", "Merchant services", "Referral sales"],
        cta: "View sample ISO profile"
      },
      {
        title: "Consultants",
        type: "Consultant",
        description: "Advisors, agencies, and operators who package AI resources, business tools, and partner workflows.",
        verticals: ["AI ops", "Automation", "Content", "CRM"],
        cta: "View sample consultant profile"
      },
      {
        title: "Strategic Partners",
        type: "Strategic",
        description: "Software providers, communities, agencies, platforms, and companies that co-market resource systems.",
        verticals: ["SaaS", "Community", "Agency", "Platform"],
        cta: "View sample strategic profile"
      }
    ];

    const searchInput = document.getElementById("teamSearch");
    const filterSelect = document.getElementById("teamFilter");
    const grid = document.getElementById("teamGrid");

    function renderProfiles() {
      const query = searchInput.value.toLowerCase();
      const type = filterSelect.value;

      const filtered = profileTypes.filter((profile) => {
        const searchableText = [
          profile.title,
          profile.type,
          profile.description,
          profile.verticals.join(" ")
        ].join(" ").toLowerCase();

        return searchableText.includes(query) &&
          (type === "all" || profile.type === type);
      });

      grid.innerHTML = filtered.map((profile) => {
        return `
          <article class="card">
            <div class="pill-row">
              <span class="pill gold">${AILibrary.escapeHTML(profile.type)}</span>
              <span class="pill">Profile Type</span>
            </div>

            <h2>${AILibrary.escapeHTML(profile.title)}</h2>
            <p>${AILibrary.escapeHTML(profile.description)}</p>

            <h3>Common verticals</h3>
            <div class="pill-row">
              ${profile.verticals.map((vertical) => {
                return `<span class="pill">${AILibrary.escapeHTML(vertical)}</span>`;
              }).join("")}
            </div>

            <a class="button-link secondary" href="profile.html">
              ${AILibrary.escapeHTML(profile.cta)} →
            </a>
          </article>
        `;
      }).join("") || `<div class="empty-state">No profile types found.</div>`;
    }

    searchInput.addEventListener("input", renderProfiles);
    filterSelect.addEventListener("input", renderProfiles);
    filterSelect.addEventListener("change", renderProfiles);

    renderProfiles();
  </script>
</body>
</html>
```

## `profile.html`

```html id="profile-html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Partner Profile | AI Agent Library</title>
  <meta name="description" content="Reusable profile page template for referral agents, affiliates, brokers, ISO reps, consultants, strategic partners, and partner team members.">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="index.html">
        <span class="brand-mark">AI</span>
        <span>Agent Library</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="agent-catalog.html">Agents</a>
        <a href="skill-catalog.html">Skills</a>
        <a href="categories.html">Categories</a>
        <a href="platforms.html">Platforms</a>
        <a href="knowledge-bases.html">Knowledge</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="search.html">Search</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="eyebrow">Affiliates & Partners</div>
    <h1>Partner Profile</h1>
    <p>
      Reusable profile page template for referral agents, affiliates, brokers,
      ISO reps, consultants, strategic partners, and partner team members.
    </p>

    <div class="hero-actions">
      <a class="button-link" href="#resources">View approved resources →</a>
      <a class="button-link secondary" href="team.html">Back to team directory</a>
    </div>
  </section>

  <main id="main">
    <section class="section two-col">
      <article class="card">
        <div class="pill-row">
          <span class="pill gold">Sample Profile</span>
          <span class="pill">Partner</span>
          <span class="pill">Public Safe</span>
        </div>

        <h2>Partner Name</h2>
        <p class="muted">
          Referral partner, broker, affiliate publisher, consultant, ISO representative,
          or strategic partner.
        </p>

        <ul class="mini-list">
          <li><strong>Role:</strong> Referral Agent</li>
          <li><strong>Audience:</strong> Small business owners, ecommerce sellers, contractors, agencies, or local businesses.</li>
          <li><strong>Region:</strong> Remote / Local market placeholder.</li>
          <li><strong>Specialty:</strong> Business tools, funding readiness resources, AI workflow education, or partner enablement.</li>
          <li><strong>Approved CTA:</strong> Replace with approved partner application, resource, or intake URL.</li>
        </ul>

        <a class="button-link" href="#">
          Start with this partner →
        </a>
      </article>

      <article class="card">
        <h2>Profile status</h2>

        <div class="stat-row">
          <div class="stat">
            <strong>Draft</strong>
            <span>Profile status</span>
          </div>

          <div class="stat">
            <strong>0</strong>
            <span>Live resources</span>
          </div>

          <div class="stat">
            <strong>TBD</strong>
            <span>Tracking ID</span>
          </div>
        </div>

        <p>
          Replace placeholder values with approved public information only.
          Do not publish private contact details, internal payout terms, private
          provider routing notes, or unapproved claims.
        </p>
      </article>
    </section>

    <section class="section card">
      <h2>Partner bio</h2>
      <p>
        Partner Name helps business owners, operators, or niche audiences discover
        practical AI tools, business resources, workflow systems, and educational
        next steps. This profile is a reusable shell and should be customized with
        accurate, approved, public-safe information before publishing.
      </p>

      <p>
        Use this section to describe the partner’s focus, audience, resource categories,
        and approved way to help visitors. Avoid unsupported performance claims,
        guaranteed outcomes, private provider details, or unverifiable case studies.
      </p>
    </section>

    <section class="section" id="resources">
      <div class="section-head">
        <div>
          <h2>Approved resources</h2>
          <p>
            Replace these with partner-specific resource cards, tracked links,
            and public-safe CTAs.
          </p>
        </div>
      </div>

      <div class="grid">
        <article class="card">
          <div class="pill-row">
            <span class="pill gold">Resource</span>
            <span class="pill">AI Tools</span>
          </div>

          <h3>AI Agent Library</h3>
          <p>
            Browse reusable agents, skills, prompt systems, knowledge bases,
            examples, schemas, and platform packs.
          </p>

          <a class="button-link secondary" href="index.html">
            Browse the library →
          </a>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill blue">Resource</span>
            <span class="pill">Funding</span>
          </div>

          <h3>Funding Readiness Resources</h3>
          <p>
            Educational resources for understanding common funding paths,
            intake requirements, documentation needs, and next-step readiness.
          </p>

          <a class="button-link secondary" href="knowledge-base/funding/README.md">
            View funding resources →
          </a>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill green">Resource</span>
            <span class="pill">Automation</span>
          </div>

          <h3>Automation Workflow Resources</h3>
          <p>
            Workflow specs, triggers, webhook event examples, approval gates,
            and implementation planning resources.
          </p>

          <a class="button-link secondary" href="knowledge-base/automation/README.md">
            View automation resources →
          </a>
        </article>

        <article class="card">
          <div class="pill-row">
            <span class="pill purple">Resource</span>
            <span class="pill">Partner Enablement</span>
          </div>

          <h3>Partner Enablement Resources</h3>
          <p>
            Resource-card templates, attribution rules, partner launch kits,
            affiliate disclosure notes, and profile-page planning.
          </p>

          <a class="button-link secondary" href="knowledge-base/partner-enablement/README.md">
            View partner resources →
          </a>
        </article>
      </div>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Contact / CTA block</h2>
        <p>
          Replace this placeholder with the approved contact method, partner intake
          link, tracked resource page, form, or scheduling CTA.
        </p>

        <ul class="mini-list">
          <li><strong>Primary CTA:</strong> Start with approved resource.</li>
          <li><strong>Secondary CTA:</strong> Browse partner resources.</li>
          <li><strong>Disclosure:</strong> May include affiliate or referral relationships.</li>
        </ul>

        <a class="button-link" href="#">
          Replace with approved CTA →
        </a>
      </article>

      <article class="card">
        <h2>Disclosure block</h2>
        <p>
          This profile may include affiliate, referral, or partner links.
          If visitors use those links, the partner or site operator may receive
          compensation at no additional cost to the visitor.
        </p>

        <p>
          Resources are informational only and do not guarantee approvals, funding,
          business results, platform outcomes, or credit outcomes.
        </p>

        <a class="button-link secondary" href="affiliate-disclosure.html">
          Read affiliate disclosure →
        </a>
      </article>
    </section>

    <section class="section card">
      <h2>Profile JSON template</h2>
      <p>
        Use this structure for future <code>site-data/team.json</code> or
        individual profile page generation.
      </p>

      <pre>{
  "name": "Partner Name",
  "slug": "partner-name",
  "role": "Referral Agent",
  "profile_type": "Referral",
  "vertical": "Small Business",
  "region": "Remote",
  "status": "Draft",
  "approved_cta_label": "Start with this partner",
  "approved_cta_url": "https://example.com",
  "tracking_id": "partner_slug",
  "disclosure": "May include affiliate or referral relationships.",
  "bio": "Short public-safe profile bio.",
  "resources": [
    {
      "title": "AI Agent Library",
      "category": "AI Tools",
      "url": "index.html"
    }
  ]
}</pre>
    </section>

    <section class="section two-col">
      <article class="card">
        <h2>Profile review checklist</h2>
        <div class="checklist">
          <label class="check-item">
            <input type="checkbox">
            Public bio is approved.
          </label>

          <label class="check-item">
            <input type="checkbox">
            CTA uses an approved destination.
          </label>

          <label class="check-item">
            <input type="checkbox">
            Affiliate or referral disclosure is visible.
          </label>

          <label class="check-item">
            <input type="checkbox">
            No private contact details are exposed without approval.
          </label>

          <label class="check-item">
            <input type="checkbox">
            No guaranteed outcome claims remain.
          </label>

          <label class="check-item">
            <input type="checkbox">
            Tracking ID is documented internally.
          </label>
        </div>
      </article>

      <article class="card">
        <h2>Suggested repo paths</h2>
        <pre>profile.html

profiles/
  partner-name.html

site-data/
  team.json
  partners.json

knowledge-base/
  partner-enablement/
    README.md</pre>
      </article>
    </section>
  </main>

  <footer class="footer">
    <p>
      <strong>AI Agent Library</strong> — reusable agents, skills, prompt systems,
      knowledge bases, platform packs, and deployable AI product assets.
    </p>

    <p>
      <a href="terms.html">Terms</a> ·
      <a href="privacy.html">Privacy</a> ·
      <a href="data-policy.html">Data Policy</a> ·
      <a href="affiliate-disclosure.html">Affiliate Disclosure</a> ·
      <a href="contribute.html">Contribute</a>
    </p>

    <p>© <span data-year></span> AI Agent Library.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

Batch 7 will be **Knowledge Base folder files**:

```text id="batch-7-list"
knowledge-base/funding/README.md
knowledge-base/funding/index.json
knowledge-base/funding/examples.md

knowledge-base/partner-enablement/README.md
knowledge-base/partner-enablement/index.json
knowledge-base/partner-enablement/examples.md

knowledge-base/crm/README.md
knowledge-base/crm/index.json
knowledge-base/crm/examples.md

knowledge-base/content-ops/README.md
knowledge-base/content-ops/index.json
knowledge-base/content-ops/examples.md
```


<!-- SOURCE: Batch 13 — Site Data Files.md -->

# Source Batch: Batch 13 — Site Data Files.md

# you asked

message time: 2026-06-18 13:29:38

proceed (batch 13

---

# chatgpt response

## Batch 13 — Site Data Files

## `site-data/agents.fallback.json`

```json id="agents-fallback-json"
[
  {
    "name": "Funding Pipeline Triage Agent",
    "slug": "funding-pipeline-triage-agent",
    "category": "Funding Ops",
    "buyer": "Funding brokers, intake teams, processors, and referral partners",
    "pain_solved": "Helps summarize a funding lead, identify missing information, flag caution items, and suggest a likely product-family path without making approval promises.",
    "monetization": "Lead magnet, broker enablement, partner resource, internal workflow tool",
    "platform": "ChatGPT Custom GPT",
    "status": "Draft",
    "priority": "High",
    "tags": [
      "funding",
      "crm",
      "intake",
      "routing",
      "broker"
    ],
    "file": "agents/funding-pipeline-triage-agent.md"
  },
  {
    "name": "Partner Resource Card Builder",
    "slug": "partner-resource-card-builder",
    "category": "Partner Enablement",
    "buyer": "Partner managers, affiliates, brokers, ISO reps, and referral operators",
    "pain_solved": "Creates public-safe resource cards with audience, problem solved, CTAs, disclosures, restricted claims, and tracking notes.",
    "monetization": "Affiliate enablement, partner onboarding, referral distribution",
    "platform": "Static Site / Custom GPT",
    "status": "Draft",
    "priority": "High",
    "tags": [
      "partner",
      "affiliate",
      "resource-card",
      "cta",
      "disclosure"
    ],
    "file": "agents/partner-resource-card-builder.md"
  },
  {
    "name": "AI Agent Library Builder",
    "slug": "ai-agent-library-builder",
    "category": "AI Builder Resources",
    "buyer": "AI builders, repo operators, prompt designers, and static site builders",
    "pain_solved": "Turns agent ideas into repo-ready specs, skills, schemas, prompt packs, examples, knowledge-base files, and static pages.",
    "monetization": "Internal tool, builder workflow, premium implementation service",
    "platform": "ChatGPT Custom GPT",
    "status": "Draft",
    "priority": "High",
    "tags": [
      "agents",
      "skills",
      "schemas",
      "repo",
      "static-site"
    ],
    "file": "agents/ai-agent-library-builder.md"
  },
  {
    "name": "Static Site Page Generator",
    "slug": "static-site-page-generator",
    "category": "Static Sites",
    "buyer": "Vercel builders, landing page creators, and AI product operators",
    "pain_solved": "Generates static HTML, CSS, JavaScript, metadata, and page sections for dependency-free launch pages.",
    "monetization": "Engineering-as-marketing, static site creation, tool landing pages",
    "platform": "Vercel Static Site",
    "status": "Ready",
    "priority": "High",
    "tags": [
      "html",
      "css",
      "javascript",
      "vercel",
      "landing-page"
    ],
    "file": "agents/static-site-page-generator.md"
  },
  {
    "name": "Prompt Chain Architect",
    "slug": "prompt-chain-architect",
    "category": "Prompt Systems",
    "buyer": "Prompt engineers, AI builders, Codex users, Jules users, and workflow operators",
    "pain_solved": "Converts broad build tasks into sequenced prompts with inputs, outputs, acceptance criteria, and review steps.",
    "monetization": "Prompt packs, implementation services, repo automation",
    "platform": "ChatGPT / GitHub",
    "status": "Draft",
    "priority": "High",
    "tags": [
      "prompts",
      "codex",
      "jules",
      "workflow",
      "review"
    ],
    "file": "agents/prompt-chain-architect.md"
  },
  {
    "name": "Knowledge Base Packager",
    "slug": "knowledge-base-packager",
    "category": "Knowledge Bases",
    "buyer": "Custom GPT builders, Notion operators, and repo maintainers",
    "pain_solved": "Turns scattered notes, docs, and examples into clean knowledge-base folders with README, index, examples, guardrails, and output rules.",
    "monetization": "GPT setup, knowledge-base services, internal operating systems",
    "platform": "GitHub / Custom GPT",
    "status": "Draft",
    "priority": "High",
    "tags": [
      "knowledge-base",
      "gpt",
      "markdown",
      "docs",
      "source"
    ],
    "file": "agents/knowledge-base-packager.md"
  },
  {
    "name": "Business Credit Readiness Helper",
    "slug": "business-credit-readiness-helper",
    "category": "Business Credit",
    "buyer": "Business owners, readiness coaches, and educational resource builders",
    "pain_solved": "Helps organize business-credit setup readiness, missing items, vendor-readiness gaps, and next steps using educational non-promissory language.",
    "monetization": "Educational resource, lead magnet, partner resource",
    "platform": "Custom GPT / Static Site",
    "status": "Draft",
    "priority": "Medium",
    "tags": [
      "business-credit",
      "readiness",
      "setup",
      "education",
      "no-guarantees"
    ],
    "file": "agents/business-credit-readiness-helper.md"
  },
  {
    "name": "CRM Follow-Up Drafting Agent",
    "slug": "crm-follow-up-drafting-agent",
    "category": "CRM",
    "buyer": "Sales teams, brokers, processors, and RevOps operators",
    "pain_solved": "Drafts clear follow-up messages from CRM status, missing fields, prior notes, and next-step rules while keeping human review in place.",
    "monetization": "CRM workflow tool, broker automation, internal productivity",
    "platform": "Custom GPT / n8n",
    "status": "Draft",
    "priority": "High",
    "tags": [
      "crm",
      "follow-up",
      "sales",
      "automation",
      "review"
    ],
    "file": "agents/crm-follow-up-drafting-agent.md"
  },
  {
    "name": "Content Brief Generator",
    "slug": "content-brief-generator",
    "category": "Content Ops",
    "buyer": "SEO writers, content operators, blog teams, and AI content builders",
    "pain_solved": "Creates structured content briefs with keywords, audience, search intent, headings, internal links, CTAs, metadata, and do-not-claim lists.",
    "monetization": "Content ops, SEO service, prompt pack, publishing workflow",
    "platform": "Static Site / Custom GPT",
    "status": "Ready",
    "priority": "High",
    "tags": [
      "seo",
      "content",
      "brief",
      "metadata",
      "publishing"
    ],
    "file": "agents/content-brief-generator.md"
  },
  {
    "name": "Automation Workflow Spec Agent",
    "slug": "automation-workflow-spec-agent",
    "category": "Automation",
    "buyer": "Automation builders, CRM operators, n8n builders, and technical operators",
    "pain_solved": "Turns workflow ideas into trigger, input, step, output, review-gate, failure-mode, and webhook-event specs.",
    "monetization": "Automation consulting, workflow templates, implementation service",
    "platform": "n8n / GitHub",
    "status": "Draft",
    "priority": "High",
    "tags": [
      "automation",
      "webhook",
      "workflow",
      "n8n",
      "schema"
    ],
    "file": "agents/automation-workflow-spec-agent.md"
  },
  {
    "name": "Vercel Deployment Control Agent",
    "slug": "vercel-deployment-control-agent",
    "category": "Platform Ops",
    "buyer": "Vercel site operators and repo maintainers",
    "pain_solved": "Helps review static site deployment files, Vercel settings, auto-deploy behavior, root file readiness, and rollback notes.",
    "monetization": "Internal workflow, deployment ops, static site service",
    "platform": "GitHub / Vercel",
    "status": "Draft",
    "priority": "Medium",
    "tags": [
      "vercel",
      "deployment",
      "static-site",
      "repo",
      "ops"
    ],
    "file": "agents/vercel-deployment-control-agent.md"
  },
  {
    "name": "Affiliate Disclosure Reviewer",
    "slug": "affiliate-disclosure-reviewer",
    "category": "Trust & Safety",
    "buyer": "Affiliate operators, partner managers, and content publishers",
    "pain_solved": "Reviews partner and affiliate content for missing disclosure language, unsupported claims, vague CTAs, and risky recommendation framing.",
    "monetization": "Partner enablement, compliance support, affiliate resource review",
    "platform": "Custom GPT / Static Site",
    "status": "Draft",
    "priority": "Medium",
    "tags": [
      "affiliate",
      "disclosure",
      "partner",
      "trust",
      "review"
    ],
    "file": "agents/affiliate-disclosure-reviewer.md"
  }
]
```

## `site-data/skills.fallback.json`

```json id="skills-fallback-json"
[
  {
    "name": "Static Site Page Builder",
    "slug": "static-site-page-builder",
    "category": "Static Sites",
    "audience": "Static site builders, Vercel operators, and AI product teams",
    "problem_solved": "Generates dependency-free HTML pages with consistent structure, navigation, CTAs, metadata, and public-safe page sections.",
    "recommended_apps": [
      "ChatGPT",
      "Codex",
      "GitHub",
      "Vercel"
    ],
    "priority": "High",
    "status": "Draft",
    "path": "skills/static-site-page-builder/SKILL.md"
  },
  {
    "name": "Agent Spec Packager",
    "slug": "agent-spec-packager",
    "category": "AI Builder Resources",
    "audience": "AI builders, prompt engineers, and repo maintainers",
    "problem_solved": "Turns agent concepts into structured specs with buyer, pain solved, inputs, outputs, workflow, guardrails, and platform targets.",
    "recommended_apps": [
      "ChatGPT",
      "GitHub",
      "Notion"
    ],
    "priority": "High",
    "status": "Draft",
    "path": "skills/agent-spec-packager/SKILL.md"
  },
  {
    "name": "SKILL.md Generator",
    "slug": "skill-md-generator",
    "category": "Skills Library",
    "audience": "AI Agent Library maintainers and reusable capability builders",
    "problem_solved": "Creates structured SKILL.md files with purpose, inputs, outputs, workflow, examples, guardrails, and suggested repo paths.",
    "recommended_apps": [
      "ChatGPT",
      "GitHub",
      "Codex"
    ],
    "priority": "High",
    "status": "Ready",
    "path": "skills/skill-md-generator/SKILL.md"
  },
  {
    "name": "Funding Language Safety Review",
    "slug": "funding-language-safety-review",
    "category": "Funding Ops",
    "audience": "Funding brokers, affiliate operators, and content publishers",
    "problem_solved": "Reviews funding copy for guaranteed approval claims, unsafe speed claims, unsupported terms, and missing educational framing.",
    "recommended_apps": [
      "ChatGPT",
      "Custom GPT",
      "GitHub"
    ],
    "priority": "High",
    "status": "Draft",
    "path": "skills/funding-language-safety-review/SKILL.md"
  },
  {
    "name": "Partner Resource Card Builder",
    "slug": "partner-resource-card-builder",
    "category": "Partner Enablement",
    "audience": "Partner managers, affiliates, brokers, and referral agents",
    "problem_solved": "Creates resource cards with audience, problem solved, CTAs, disclosure language, restricted claims, and tracking notes.",
    "recommended_apps": [
      "ChatGPT",
      "Vercel",
      "Notion"
    ],
    "priority": "High",
    "status": "Draft",
    "path": "skills/partner-resource-card-builder/SKILL.md"
  },
  {
    "name": "Prompt Chain Sequencer",
    "slug": "prompt-chain-sequencer",
    "category": "Prompt Systems",
    "audience": "Prompt builders, Codex users, Jules users, and implementation operators",
    "problem_solved": "Breaks large tasks into ordered prompts with inputs, outputs, acceptance criteria, validation steps, and PR-ready instructions.",
    "recommended_apps": [
      "ChatGPT",
      "Codex",
      "Jules",
      "GitHub"
    ],
    "priority": "High",
    "status": "Draft",
    "path": "skills/prompt-chain-sequencer/SKILL.md"
  },
  {
    "name": "Schema Starter Builder",
    "slug": "schema-starter-builder",
    "category": "Schemas",
    "audience": "Repo maintainers, automation builders, and structured data operators",
    "problem_solved": "Generates JSON Schema files with required fields, enums, examples, descriptions, validation notes, and public-safe data rules.",
    "recommended_apps": [
      "ChatGPT",
      "GitHub",
      "Codex"
    ],
    "priority": "Medium",
    "status": "Draft",
    "path": "skills/schema-starter-builder/SKILL.md"
  },
  {
    "name": "Knowledge Base Folder Builder",
    "slug": "knowledge-base-folder-builder",
    "category": "Knowledge Bases",
    "audience": "Custom GPT builders, source-doc operators, and AI system maintainers",
    "problem_solved": "Creates README, index.json, examples, source boundaries, guardrails, and output rules for reusable knowledge-base folders.",
    "recommended_apps": [
      "ChatGPT",
      "GitHub",
      "Notion"
    ],
    "priority": "High",
    "status": "Draft",
    "path": "skills/knowledge-base-folder-builder/SKILL.md"
  },
  {
    "name": "Automation Workflow Spec Writer",
    "slug": "automation-workflow-spec-writer",
    "category": "Automation",
    "audience": "n8n builders, CRM admins, automation operators, and workflow designers",
    "problem_solved": "Creates workflow specs with triggers, inputs, steps, outputs, approval gates, failure modes, fallback behavior, and data rules.",
    "recommended_apps": [
      "ChatGPT",
      "n8n",
      "GitHub",
      "Notion"
    ],
    "priority": "High",
    "status": "Draft",
    "path": "skills/automation-workflow-spec-writer/SKILL.md"
  },
  {
    "name": "CRM Note Summarizer",
    "slug": "crm-note-summarizer",
    "category": "CRM",
    "audience": "Sales teams, processors, closers, and RevOps operators",
    "problem_solved": "Converts messy CRM notes into known facts, missing fields, current status, caution flags, and suggested next action.",
    "recommended_apps": [
      "ChatGPT",
      "HubSpot",
      "Notion",
      "Google Sheets"
    ],
    "priority": "Medium",
    "status": "Draft",
    "path": "skills/crm-note-summarizer/SKILL.md"
  },
  {
    "name": "Content Brief Builder",
    "slug": "content-brief-builder",
    "category": "Content Ops",
    "audience": "SEO writers, content teams, AI publishers, and blog operators",
    "problem_solved": "Builds article briefs with keywords, search intent, audience, headings, internal links, CTA, metadata, excerpt, and do-not-claim list.",
    "recommended_apps": [
      "ChatGPT",
      "Notion",
      "GitHub",
      "Wix"
    ],
    "priority": "High",
    "status": "Ready",
    "path": "skills/content-brief-builder/SKILL.md"
  },
  {
    "name": "Portfolio Inventory Normalizer",
    "slug": "portfolio-inventory-normalizer",
    "category": "Portfolio",
    "audience": "AI product operators, Vercel builders, and GPT portfolio maintainers",
    "problem_solved": "Normalizes public assets into portfolio records with name, URL, source repo, status, CTA, related agent, related skill, and review date.",
    "recommended_apps": [
      "ChatGPT",
      "GitHub",
      "Vercel",
      "Notion"
    ],
    "priority": "Medium",
    "status": "Draft",
    "path": "skills/portfolio-inventory-normalizer/SKILL.md"
  },
  {
    "name": "Affiliate Disclosure Checker",
    "slug": "affiliate-disclosure-checker",
    "category": "Trust & Safety",
    "audience": "Affiliate publishers, partner operators, and resource directory maintainers",
    "problem_solved": "Checks pages and cards for visible affiliate disclosure, non-neutral paid placement language, restricted claims, and CTA clarity.",
    "recommended_apps": [
      "ChatGPT",
      "GitHub",
      "Notion"
    ],
    "priority": "Medium",
    "status": "Draft",
    "path": "skills/affiliate-disclosure-checker/SKILL.md"
  },
  {
    "name": "Vercel Deployment Checklist Builder",
    "slug": "vercel-deployment-checklist-builder",
    "category": "Platform Ops",
    "audience": "Static site builders, repo maintainers, and deployment operators",
    "problem_solved": "Creates deployment checklists covering root files, Vercel settings, auto-deploy behavior, CTA links, legal pages, and rollback notes.",
    "recommended_apps": [
      "ChatGPT",
      "Vercel",
      "GitHub"
    ],
    "priority": "Medium",
    "status": "Draft",
    "path": "skills/vercel-deployment-checklist-builder/SKILL.md"
  }
]
```

## `site-data/categories.json`

```json id="categories-json"
[
  {
    "name": "Funding Ops",
    "description": "Agents, skills, knowledge bases, schemas, and examples for funding readiness, lead intake, product-family routing, documentation, caution flags, and public-safe funding language."
  },
  {
    "name": "Partner Enablement",
    "description": "Resources for referral partners, affiliates, brokers, ISO reps, consultants, partner profiles, resource cards, launch kits, CTAs, attribution, and disclosures."
  },
  {
    "name": "AI Builder Resources",
    "description": "Tools and patterns for turning AI ideas into agent specs, skills, prompt systems, knowledge bases, schemas, examples, and static site files."
  },
  {
    "name": "Skills Library",
    "description": "Reusable capabilities that can power multiple agents, workflows, prompt systems, static pages, automations, and platform packages."
  },
  {
    "name": "Prompt Systems",
    "description": "Prompt packs, prompt chains, execution frameworks, task sequences, PR review prompts, and builder-ready instruction systems."
  },
  {
    "name": "Knowledge Bases",
    "description": "Structured source folders with README files, indexes, examples, guardrails, public-safe rules, and agent output standards."
  },
  {
    "name": "Static Sites",
    "description": "Dependency-free HTML, CSS, JavaScript, JSON, and Markdown assets for Vercel-ready pages, tools, directories, and launch assets."
  },
  {
    "name": "Platform Ops",
    "description": "Platform-specific packaging and deployment resources for Vercel, GitHub, ChatGPT Custom GPTs, Gemini Gems, Notion, n8n, and automation systems."
  },
  {
    "name": "Automation",
    "description": "Workflow specs, trigger libraries, webhook event payloads, approval gates, no-auth tools, API-key workflows, OAuth workflows, and failure handling."
  },
  {
    "name": "CRM",
    "description": "CRM cleanup, lead-stage handling, follow-up drafts, missing-document workflows, stalled deal review, pipeline notes, and signal scanning."
  },
  {
    "name": "Content Ops",
    "description": "SEO briefs, article frameworks, metadata, content calendars, video-to-blog workflows, prompt packs, landing pages, and repurposing systems."
  },
  {
    "name": "Business Credit",
    "description": "Educational business-credit readiness resources, setup checklists, vendor-readiness concepts, common gaps, and non-promissory next-step guidance."
  },
  {
    "name": "Engineering-as-Marketing",
    "description": "Public tools, calculators, scorecards, generators, widgets, directories, templates, and conversion assets that help users solve one practical problem."
  },
  {
    "name": "Portfolio",
    "description": "Inventory structures for Vercel assets, Custom GPTs, Gemini Gems, Flash UI variants, agent products, static sites, and deployable resources."
  },
  {
    "name": "Trust & Safety",
    "description": "Legal pages, disclaimers, affiliate disclosures, data policies, restricted-claim lists, privacy rules, and public-safe review workflows."
  }
]
```

## `site-data/tags.json`

```json id="tags-json"
[
  "agents",
  "skills",
  "custom-gpt",
  "gemini-gem",
  "vercel",
  "static-site",
  "html",
  "css",
  "javascript",
  "json",
  "schema",
  "markdown",
  "prompt-chain",
  "prompt-pack",
  "knowledge-base",
  "funding",
  "business-credit",
  "partner",
  "affiliate",
  "broker",
  "iso",
  "crm",
  "automation",
  "webhook",
  "n8n",
  "notion",
  "github",
  "codex",
  "jules",
  "content",
  "seo",
  "metadata",
  "portfolio",
  "flash-ui",
  "calculator",
  "scorecard",
  "generator",
  "directory",
  "landing-page",
  "resource-card",
  "disclosure",
  "data-policy",
  "trust",
  "public-safe",
  "no-guarantees",
  "readiness",
  "intake",
  "routing",
  "follow-up",
  "review",
  "deployment",
  "analytics",
  "cta",
  "examples",
  "templates",
  "marketplace",
  "platform-pack"
]
```

## `site-data/featured.json`

```json id="featured-json"
[
  {
    "type": "Agent",
    "category": "Funding Ops",
    "title": "Funding Pipeline Triage Agent",
    "description": "Summarizes funding leads, identifies missing information, flags caution items, and suggests a likely product-family path using public-safe language.",
    "url": "agent-catalog.html"
  },
  {
    "type": "Skill",
    "category": "Static Sites",
    "title": "Static Site Page Builder",
    "description": "Generates dependency-free HTML pages with consistent navigation, CTAs, metadata, cards, sections, and public-safe copy structure.",
    "url": "skill-catalog.html"
  },
  {
    "type": "Knowledge Base",
    "category": "Funding Ops",
    "title": "Funding Knowledge Base",
    "description": "Funding product-family routing, intake questions, document needs, qualification bands, caution flags, and restricted-claim rules.",
    "url": "knowledge-base/funding/README.md"
  },
  {
    "type": "Knowledge Base",
    "category": "Partner Enablement",
    "title": "Partner Enablement Knowledge Base",
    "description": "Partner launch kits, resource cards, attribution rules, partner-safe CTAs, affiliate disclosure snippets, and profile-page guidance.",
    "url": "knowledge-base/partner-enablement/README.md"
  },
  {
    "type": "Schema",
    "category": "AI Builder Resources",
    "title": "Agent Schema",
    "description": "A structured schema for documenting productized AI agent specs with inputs, outputs, workflow, guardrails, files, and metadata.",
    "url": "schemas/agent.schema.json"
  },
  {
    "type": "Schema",
    "category": "Automation",
    "title": "Webhook Event Schema",
    "description": "A public-safe schema for webhook events, automation payloads, CRM triggers, partner events, processing status, and data policy rules.",
    "url": "schemas/webhook-event.schema.json"
  },
  {
    "type": "Portfolio",
    "category": "Custom GPTs",
    "title": "Custom GPT Portfolio",
    "description": "Tracks GPT names, access URLs, descriptions, users, CTAs, knowledge files, safety notes, and related agent packages.",
    "url": "portfolio/custom-gpts/README.md"
  },
  {
    "type": "Page",
    "category": "Affiliates & Partners",
    "title": "Partner Get Started",
    "description": "Recruitment landing page for referral agents, affiliates, brokers, ISO reps, consultants, local connectors, and strategic partners.",
    "url": "get-started.html"
  },
  {
    "type": "Tool",
    "category": "Skills Library",
    "title": "Skill Builder",
    "description": "Browser-based generator for reusable SKILL.md files with purpose, audience, inputs, outputs, implementation notes, and guardrails.",
    "url": "skill-builder.html"
  },
  {
    "type": "Roadmap",
    "category": "Platform Ops",
    "title": "Phase 4 — Platform Layer",
    "description": "Defines the cross-platform packaging strategy for Custom GPTs, Gemini Gems, Vercel sites, n8n workflows, Notion systems, and GitHub execution.",
    "url": "roadmap/phase-4-platform-layer.md"
  }
]
```

## `site-data/changelog.json`

```json id="changelog-json"
[
  {
    "date": "2026-06-18",
    "title": "Generated AI Agent Library static site pack",
    "type": "Site",
    "summary": "Added the root static site files, homepage, shared styles, shared JavaScript helpers, directory pages, skills pages, legal pages, partner pages, knowledge-base hub, portfolio hub, roadmap page, and contribution page."
  },
  {
    "date": "2026-06-18",
    "title": "Added directory and discovery pages",
    "type": "Directory",
    "summary": "Added categories, tags, search, featured, and new pages for browsing agents, skills, knowledge bases, platform packs, examples, and portfolio resources."
  },
  {
    "date": "2026-06-18",
    "title": "Added skills library pages",
    "type": "Skills",
    "summary": "Added skill catalog, skill categories, top skills, and skill builder pages with browser-side filtering and SKILL.md generation support."
  },
  {
    "date": "2026-06-18",
    "title": "Added legal and trust pages",
    "type": "Trust",
    "summary": "Added terms, privacy, disclaimer, affiliate disclosure, and data policy pages with public-safe language rules, restricted-claim guidance, and data handling boundaries."
  },
  {
    "date": "2026-06-18",
    "title": "Added knowledge-base starter folders",
    "type": "Knowledge Base",
    "summary": "Added starter README, index, and examples files for funding, partner enablement, CRM, content ops, automation, local referrals, and engineering-as-marketing."
  },
  {
    "date": "2026-06-18",
    "title": "Added schema foundation",
    "type": "Schemas",
    "summary": "Added JSON Schema files for agents, Custom GPTs, Vercel projects, funding products, and webhook events."
  },
  {
    "date": "2026-06-18",
    "title": "Added roadmap files",
    "type": "Roadmap",
    "summary": "Added Phase 1 Fast MVP, Phase 2 Distribution System, Phase 3 Marketplace Layer, and Phase 4 Platform Layer roadmap files."
  },
  {
    "date": "2026-06-18",
    "title": "Added examples folders",
    "type": "Examples",
    "summary": "Added synthetic public-safe examples for funding, partner enablement, content operations, and automation workflows."
  },
  {
    "date": "2026-06-18",
    "title": "Added portfolio folders",
    "type": "Portfolio",
    "summary": "Added portfolio records and README files for Vercel assets, Custom GPTs, Gemini Gems, and Flash UI variants."
  },
  {
    "date": "2026-06-18",
    "title": "Added site-data files",
    "type": "Data",
    "summary": "Added fallback data files for agents, skills, categories, tags, featured items, and changelog entries so static pages can render without a backend."
  }
]
```

Batch 14 will be **README / Integration Support Files**:

```text id="batch-14-list"
SITE_PACK_README.md
README.md additions
style.css compatibility alias
repo placement checklist
optional PR description
```


<!-- SOURCE: Batch 7 — Knowledge Base Folder Files.md -->

# Source Batch: Batch 7 — Knowledge Base Folder Files.md

# you asked

message time: 2026-06-18 12:18:13

Proceed

---

# chatgpt response

## Batch 7 — Knowledge Base Folder Files

## `knowledge-base/funding/README.md`

```md id="funding-kb-readme"
# Funding Knowledge Base

Funding product-family routing, intake, documentation, disqualifiers, qualification bands, and public-safe language guidance for AI Agent Library agents, pages, prompt systems, partner resources, and workflow assets.

## Purpose

This knowledge base helps agents and operators understand how to frame funding-related workflows without turning the process into application roulette.

Use this folder to support:

- Funding-readiness pages
- Lead intake summaries
- Broker routing assistants
- Product-family explainers
- Public-safe funding content
- Partner resource cards
- CRM follow-up workflows
- Funding-related prompt packs
- Funding product schema examples

## Core Operating Principle

Do not sell a product before understanding the file.

Funding workflows should start with the business context, requested use of funds, urgency, revenue profile, credit band, documentation availability, and known disqualifiers.

## Primary Users

- Funding brokers
- Referral partners
- Affiliate operators
- Intake teams
- Closers
- Processors
- AI workflow builders
- Static site builders
- Custom GPT builders

## Product Family Map

### 1. Startup / Credit-Leverage Path

For newer businesses, founders, or operators where available credit profile, personal credit, or setup readiness matters more than business revenue history.

Common fit signals:

- New or early-stage business
- Limited business revenue
- Stronger personal credit
- Need for startup capital
- Need for credit-stack planning
- Need for business setup readiness

Common caution signals:

- Very weak credit
- Recent severe delinquencies
- Open bankruptcy
- No clear business plan
- No ability to document identity, entity, or income

### 2. Revenue Advance / Fast Capital Path

For active businesses with revenue and bank activity where speed matters.

Common fit signals:

- Active business revenue
- Bank statements available
- Consistent deposits
- Immediate working capital need
- Short-term opportunity or cash-flow gap

Common caution signals:

- Frequent NSFs
- Very inconsistent deposits
- Too many existing advances
- Major unresolved tax liens
- Recent negative banking events
- No bank statements

### 3. Business Line / Revolving Access Path

For businesses seeking flexible access rather than one-time lump-sum capital.

Common fit signals:

- Recurring working capital need
- Better credit profile
- Stable revenue
- Preference for flexibility
- Need for draw-based access

Common caution signals:

- Weak credit profile
- Thin business history
- Excessive inquiries
- Recent delinquencies
- Insufficient revenue stability

### 4. Structured Growth Loan Path

For stronger businesses seeking more structured repayment, larger capital, or lower-cost capital compared with short-term advances.

Common fit signals:

- Longer time in business
- Better financial documentation
- Stable cash flow
- Stronger credit
- Willingness to provide tax returns or financial statements

Common caution signals:

- Poor documentation
- Recent severe credit events
- Unstable revenue
- High existing debt load
- Need for same-day funding

### 5. Equipment / Asset Finance Path

For businesses purchasing or financing equipment, vehicles, machinery, or productive assets.

Common fit signals:

- Equipment invoice or quote available
- Asset has business use
- Business has ability to repay
- Equipment supports revenue or operations
- Seller or vendor details are available

Common caution signals:

- Obsolete or salvage equipment
- Weak collateral description
- No invoice or quote
- Unclear use of equipment
- Equipment unrelated to business activity

### 6. Real Estate Capital Path

For real estate investors, developers, operators, or property owners using collateral-backed funding.

Common fit signals:

- Property address available
- Purchase, refinance, fix-and-flip, rental, or bridge use case
- Collateral value can be reviewed
- Scope of work or appraisal available where relevant
- Exit strategy is defined

Common caution signals:

- Weak collateral
- Unclear ownership
- Missing purchase contract
- No scope of work for renovation
- No exit plan
- Title or lien issues

### 7. Marketplace / Ecommerce Capital Path

For sellers or ecommerce businesses with marketplace, platform, or payout activity.

Common fit signals:

- Ecommerce or marketplace revenue
- Platform sales history
- Consistent payouts
- Healthy account standing
- Ad spend or inventory cash-flow need

Common caution signals:

- Suspended marketplace account
- Unstable payouts
- Heavy chargebacks
- No platform access or reporting
- Revenue concentrated in one risky channel

## Qualification Bands

Use these as routing bands, not promises.

### Startup / No Revenue / Credit-Leverage

Best for:

- New entities
- Stronger personal credit
- Setup-stage businesses
- Founders needing education or readiness steps

Avoid saying:

- Guaranteed startup funding
- Guaranteed business credit
- No revenue approval guaranteed

### Fair Credit / Active Revenue

Best for:

- Businesses with active revenue
- Some credit limitations
- Need for working capital
- Possible revenue-based options

Avoid saying:

- Bad credit approval guaranteed
- Same-day funding guaranteed
- No-doc approval guaranteed

### Subprime / Revenue-Based

Best for:

- Active revenue files
- Short-term cash needs
- Businesses that may not fit bank-style products

Avoid saying:

- No credit check guaranteed
- Approval regardless of credit
- Instant approval for all businesses

### Good Credit / Bank-Adjacent

Best for:

- Stronger files
- Lines of credit
- Structured loans
- Lower-cost capital exploration

Avoid saying:

- Lowest rate guaranteed
- Guaranteed bank approval
- Pre-approved without review

### Asset-Backed / Real Estate / Equipment

Best for:

- Property-backed needs
- Equipment purchases
- Tangible collateral scenarios

Avoid saying:

- Asset always guarantees approval
- No documentation needed
- Property value alone is enough

### Marketplace / Platform-Based

Best for:

- Ecommerce sellers
- Platform revenue
- Inventory or ad spend needs

Avoid saying:

- Marketplace revenue guarantees funding
- Suspended sellers qualify
- Platform access is not needed

## Required Intake Questions

Ask enough to route the file intelligently.

### General Intake

- What does the business do?
- How long has the business been operating?
- How much funding is being requested?
- What will the funds be used for?
- How quickly is capital needed?
- Is the business startup-stage, active, real estate-related, equipment-related, or ecommerce/marketplace-based?
- What is the estimated monthly revenue?
- What is the approximate credit range?
- Are there any recent bankruptcies, tax liens, delinquencies, overdrafts, or NSFs?
- Are bank statements available?
- Is speed, cost, flexibility, or approval likelihood most important?

### Revenue-Based Intake

- Average monthly deposits?
- Number of deposits per month?
- Any NSFs or negative days?
- Existing advances or daily/weekly payments?
- Bank statements available for the last 3–6 months?
- Any major revenue concentration?

### Credit-Driven Intake

- Approximate personal credit range?
- Recent inquiries?
- Utilization level?
- Recent late payments?
- Open collections?
- Bankruptcy history?
- Available credit lines?

### Equipment Intake

- What equipment is being purchased?
- Is there an invoice or quote?
- New or used?
- Vendor or seller information?
- Equipment cost?
- Down payment available?
- Business use of the equipment?

### Real Estate Intake

- Property address?
- Purchase, refinance, bridge, fix-and-flip, rental, or development?
- Purchase price or estimated value?
- Loan amount requested?
- Scope of work?
- Exit strategy?
- Appraisal, rent roll, lease, or purchase contract available?

### Marketplace / Ecommerce Intake

- Marketplace or ecommerce platform?
- Average monthly sales?
- Payout cadence?
- Account standing?
- Chargebacks or holds?
- Ad spend level?
- Inventory needs?
- Platform reports available?

## Required Documents by Funding Family

### Startup / Credit-Leverage

- Entity documents
- Owner identification
- Credit profile estimate
- Business plan or use-of-funds summary
- Income documentation if required
- Business bank account information if available

### Revenue Advance / Fast Capital

- Last 3–6 months business bank statements
- Business application or intake form
- Owner identification
- Voided check or bank verification if required
- Existing funding balance details if applicable

### Business Line / Structured Loan

- Business bank statements
- Tax returns when required
- Profit and loss statement when required
- Balance sheet when required
- Debt schedule when required
- Business ownership information

### Equipment Finance

- Equipment invoice or quote
- Vendor information
- Equipment description
- Business financials if required
- Owner identification
- Insurance details if required

### Real Estate Capital

- Property address
- Purchase contract if acquisition
- Appraisal or valuation support where available
- Scope of work for renovation
- Rent roll or lease for income property
- Entity and ownership documents
- Exit strategy notes

### Marketplace / Ecommerce Capital

- Marketplace statements or reports
- Platform account access or screenshots where acceptable
- Bank statements
- Payout history
- Inventory or ad spend plan
- Account standing confirmation

## Fast Disqualifiers

These do not automatically mean every option is impossible, but they should trigger caution, rerouting, or a “not enough information” response.

- Open bankruptcy
- Major unresolved tax liens
- Repeated recent delinquencies
- Frequent NSFs or negative banking days
- Excessive recent credit inquiries for credit-driven files
- No revenue for revenue-based capital
- Refusal to provide required documents while demanding speed
- Suspended marketplace account
- Weak or unclear collateral
- Obsolete, salvage, or hard-to-value equipment
- No clear use of funds
- No repayment logic
- No ability to verify ownership or identity

## Public-Safe Language Rules

Use:

- “May be a fit”
- “Common requirements”
- “Typical documents”
- “Funding readiness”
- “Potential options”
- “Next steps”
- “Qualification factors”
- “File review”
- “Routing guidance”
- “Educational overview”

Avoid:

- “Guaranteed approval”
- “Guaranteed funding”
- “No denial”
- “No credit check for everyone”
- “Instant approval”
- “Everyone qualifies”
- “Lowest rates guaranteed”
- “No documents required”
- “Bad credit approved no matter what”
- “We can get anyone funded”

## Standard Agent Output Format

Funding-related agents should return:

```md
## File Summary

- Business type:
- Time in business:
- Monthly revenue:
- Funding request:
- Use of funds:
- Speed needed:
- Credit band:
- Documents available:
- Known issues:

## Likely Product Family

[Startup / Revenue Advance / Line / Structured Loan / Equipment / Real Estate / Marketplace]

## Fit Rationale

Explain why this path may be relevant.

## Missing Information

- Missing item 1
- Missing item 2

## Caution Flags

- Caution flag 1
- Caution flag 2

## Suggested Next Step

Give one clear next step.

## Public-Safe Language

Provide wording that does not promise approval, funding, rates, or outcomes.
```

## Example Safe Funding Summary

A business with active revenue and available bank statements may be ready for a working-capital review. The next step is to confirm monthly deposits, recent NSF activity, existing funding obligations, use of funds, and document availability before routing the file to a potential product family.

## Related Repo Paths

```text
knowledge-base/funding/
schemas/funding-product.schema.json
examples/funding/
funding-kb.html
business-credit-kb.html
partner-enablement-kb.html
```

## Maintenance Checklist

- [ ] Product families are current.
- [ ] Required document lists are reviewed.
- [ ] Public-safe language is preserved.
- [ ] No private provider rules are exposed.
- [ ] No approval or funding guarantees are included.
- [ ] Examples are synthetic or sanitized.
```

## `knowledge-base/funding/index.json`

```json id="funding-kb-index-json"
{
  "name": "Funding Knowledge Base",
  "slug": "funding",
  "description": "Funding product-family routing, intake, documentation, disqualifiers, qualification bands, and public-safe language guidance.",
  "status": "draft",
  "visibility": "public-safe with internal-use boundaries",
  "primary_users": [
    "Funding brokers",
    "Referral partners",
    "Affiliate operators",
    "Intake teams",
    "Closers",
    "Processors",
    "AI workflow builders",
    "Static site builders",
    "Custom GPT builders"
  ],
  "product_families": [
    {
      "name": "Startup / Credit-Leverage Path",
      "best_for": [
        "New businesses",
        "Startup-stage founders",
        "Strong personal credit profiles",
        "Business setup readiness"
      ],
      "caution_flags": [
        "Very weak credit",
        "Open bankruptcy",
        "No clear business plan",
        "Missing identity or entity documentation"
      ]
    },
    {
      "name": "Revenue Advance / Fast Capital Path",
      "best_for": [
        "Active businesses with revenue",
        "Short-term working capital needs",
        "Speed-sensitive files",
        "Available bank statements"
      ],
      "caution_flags": [
        "Frequent NSFs",
        "Inconsistent deposits",
        "Too many existing advances",
        "Major unresolved tax liens"
      ]
    },
    {
      "name": "Business Line / Revolving Access Path",
      "best_for": [
        "Recurring working capital needs",
        "Flexible access",
        "Stable revenue",
        "Stronger credit profiles"
      ],
      "caution_flags": [
        "Weak credit",
        "Thin business history",
        "Excessive inquiries",
        "Recent delinquencies"
      ]
    },
    {
      "name": "Structured Growth Loan Path",
      "best_for": [
        "Established businesses",
        "Stable cash flow",
        "Larger capital requests",
        "Lower-cost capital exploration"
      ],
      "caution_flags": [
        "Poor documentation",
        "Unstable revenue",
        "High debt load",
        "Need for same-day funding"
      ]
    },
    {
      "name": "Equipment / Asset Finance Path",
      "best_for": [
        "Equipment purchases",
        "Business-use assets",
        "Invoice or quote-backed requests",
        "Revenue-supporting assets"
      ],
      "caution_flags": [
        "Obsolete equipment",
        "Salvage assets",
        "No invoice",
        "Unclear business use"
      ]
    },
    {
      "name": "Real Estate Capital Path",
      "best_for": [
        "Property-backed financing",
        "Fix-and-flip",
        "Rental property",
        "Bridge financing",
        "Development or acquisition"
      ],
      "caution_flags": [
        "Weak collateral",
        "Unclear ownership",
        "Missing purchase contract",
        "No exit plan"
      ]
    },
    {
      "name": "Marketplace / Ecommerce Capital Path",
      "best_for": [
        "Ecommerce sellers",
        "Marketplace revenue",
        "Ad spend cash-flow needs",
        "Inventory purchases",
        "Consistent platform payouts"
      ],
      "caution_flags": [
        "Suspended marketplace account",
        "Unstable payouts",
        "High chargebacks",
        "No platform reporting"
      ]
    }
  ],
  "required_output_sections": [
    "File Summary",
    "Likely Product Family",
    "Fit Rationale",
    "Missing Information",
    "Caution Flags",
    "Suggested Next Step",
    "Public-Safe Language"
  ],
  "safe_language": [
    "May be a fit",
    "Common requirements",
    "Typical documents",
    "Funding readiness",
    "Potential options",
    "Next steps",
    "Qualification factors",
    "File review",
    "Routing guidance",
    "Educational overview"
  ],
  "restricted_language": [
    "Guaranteed approval",
    "Guaranteed funding",
    "No denial",
    "Everyone qualifies",
    "Instant approval for all businesses",
    "Lowest rates guaranteed",
    "No documents required",
    "Bad credit approved no matter what"
  ],
  "related_paths": [
    "knowledge-base/funding/README.md",
    "knowledge-base/funding/examples.md",
    "schemas/funding-product.schema.json",
    "examples/funding/",
    "funding-kb.html"
  ]
}
```

## `knowledge-base/funding/examples.md`

```md id="funding-kb-examples"
# Funding Knowledge Base Examples

These examples are synthetic and public-safe. They are designed to show how a funding-related agent should reason about fit, missing information, routing, and safe next-step language.

## Example 1 — Revenue Advance / Fast Capital

### Scenario

A business owner runs a small service company. The business has been operating for 3 years and averages about $48,000 in monthly deposits. The owner needs $35,000 for payroll and a short-term cash-flow gap. They say speed matters more than cost. They can provide 4 months of bank statements. Approximate credit is fair.

### Known Inputs

- Business type: service business
- Time in business: 3 years
- Monthly revenue: about $48,000
- Funding request: $35,000
- Use of funds: payroll and cash-flow gap
- Speed needed: high
- Credit band: fair
- Documents available: 4 months bank statements

### Missing Inputs

- Recent NSF or negative-day activity
- Existing advances or daily/weekly repayment obligations
- Average number of deposits per month
- Any tax liens, bankruptcy, or major delinquencies
- Owner identity and business entity details

### Suggested Agent Output

```md
## File Summary

The business appears to be active with recurring monthly revenue and available bank statements. The stated use of funds is payroll and short-term cash flow. Speed is a priority.

## Likely Product Family

Revenue Advance / Fast Capital Path

## Fit Rationale

This may fit a revenue-based working-capital review because the business has active deposits, has been operating for multiple years, and can provide bank statements.

## Missing Information

- Recent NSF count
- Existing funding balances
- Deposit consistency
- Tax lien or bankruptcy status
- Owner and entity verification

## Caution Flags

No major caution flags confirmed yet, but bank-statement quality and existing debt obligations need review.

## Suggested Next Step

Collect the most recent 4 months of business bank statements and confirm NSF activity, existing advances, and current repayment obligations.

## Public-Safe Language

Based on the information provided, this file may be ready for a working-capital review. Final options depend on bank-statement quality, repayment obligations, business profile, and provider review.
```

## Example 2 — Equipment Finance

### Scenario

A contractor wants $62,000 to purchase a used excavator. The business has been operating for 5 years. The owner has an invoice from the equipment seller. The equipment is needed for new contracts. Credit is estimated as good.

### Known Inputs

- Business type: contractor
- Time in business: 5 years
- Funding request: $62,000
- Use of funds: used excavator purchase
- Equipment invoice: available
- Business use: supports new contracts
- Credit band: good

### Missing Inputs

- Equipment age and condition
- Seller information
- Down payment availability
- Current business revenue
- Existing equipment debt
- Insurance requirements

### Suggested Agent Output

```md
## File Summary

The business has a defined equipment purchase, an invoice, and a clear business use. The equipment appears connected to revenue-producing work.

## Likely Product Family

Equipment / Asset Finance Path

## Fit Rationale

Equipment financing may be relevant because the request is tied to a specific asset with an invoice and business use.

## Missing Information

- Equipment age and condition
- Seller details
- Down payment availability
- Monthly revenue
- Current debt obligations

## Caution Flags

Used equipment requires review of age, condition, valuation, and vendor legitimacy.

## Suggested Next Step

Collect the equipment invoice, seller details, equipment specs, business revenue information, and owner identification.

## Public-Safe Language

This equipment purchase may be suitable for an equipment-finance review. Final options depend on asset details, business profile, documentation, and provider review.
```

## Example 3 — Startup / Credit-Leverage

### Scenario

A new LLC has no business revenue yet. The founder wants capital to launch an ecommerce brand. The founder has a strong personal credit profile and wants to understand startup funding options.

### Known Inputs

- Business stage: startup
- Revenue: none
- Entity: new LLC
- Use of funds: launch ecommerce brand
- Credit profile: strong
- Desired outcome: startup capital education

### Missing Inputs

- Personal credit range
- Utilization level
- Recent inquiries
- Income documentation
- Business plan
- Business bank account status
- Entity documentation

### Suggested Agent Output

```md
## File Summary

The business is startup-stage with no revenue. Revenue-based capital is unlikely to be the first route. A credit-leverage or startup-readiness review may be more relevant.

## Likely Product Family

Startup / Credit-Leverage Path

## Fit Rationale

The file may be better reviewed through a startup-readiness or credit-driven path because the business does not yet have operating revenue.

## Missing Information

- Personal credit range
- Income documentation
- Recent inquiries
- Utilization
- Entity documents
- Business plan or use-of-funds summary

## Caution Flags

No business revenue is available, so revenue-based funding should not be presented as the main fit.

## Suggested Next Step

Collect entity documents, personal credit estimate, income documentation if required, and a short use-of-funds summary.

## Public-Safe Language

Because the business is new, the next step is to review startup-readiness factors and identify which options may be available based on credit profile, documentation, and provider criteria.
```

## Example 4 — Marketplace / Ecommerce Capital

### Scenario

An ecommerce seller averages $90,000 in monthly sales through a marketplace. The seller needs $45,000 for inventory and ad spend. Payouts are consistent, but the marketplace account recently had a temporary reserve hold.

### Known Inputs

- Business type: ecommerce seller
- Monthly sales: about $90,000
- Use of funds: inventory and ad spend
- Funding request: $45,000
- Marketplace revenue: yes
- Payouts: consistent
- Account issue: temporary reserve hold

### Missing Inputs

- Marketplace account standing
- Current reserve status
- Chargeback rate
- Payout reports
- Bank statements
- Inventory plan
- Ad spend payback assumptions

### Suggested Agent Output

```md
## File Summary

The seller has meaningful marketplace revenue and a clear inventory/ad spend use case. The temporary reserve hold should be reviewed before routing.

## Likely Product Family

Marketplace / Ecommerce Capital Path

## Fit Rationale

Marketplace or ecommerce capital may be relevant because revenue is tied to platform sales and recurring payouts.

## Missing Information

- Current marketplace account standing
- Payout reports
- Reserve hold status
- Chargeback rate
- Bank statements
- Inventory plan

## Caution Flags

The recent reserve hold is a caution flag. Account health and payout reliability need to be reviewed.

## Suggested Next Step

Collect marketplace payout reports, bank statements, account health details, and reserve hold status before making a product-family recommendation.

## Public-Safe Language

This ecommerce file may be ready for marketplace-capital review once account health, payout history, and documentation are confirmed.
```
```

---

## `knowledge-base/partner-enablement/README.md`

```md id="partner-enablement-kb-readme"
# Partner Enablement Knowledge Base

Partner launch kits, attribution rules, affiliate protection, resource cards, broker enablement assets, partner-safe CTAs, and distribution workflows.

## Purpose

This knowledge base supports partner-facing assets that help referral partners, affiliates, brokers, ISO reps, creators, consultants, and strategic partners promote useful AI Agent Library resources and related business tools.

Use this folder to support:

- Partner recruitment pages
- Affiliate resource cards
- Broker launch kits
- Partner profile pages
- Tracked CTA systems
- Local referral campaigns
- Provider directory pages
- Partner-safe copy systems
- Partner enablement prompt packs

## Primary Users

- Referral agents
- Affiliates
- Business funding brokers
- ISO reps
- Consultants
- Local referral partners
- Strategic partners
- AI content operators
- Partner managers
- Static site builders

## Partner Types

### Referral Agent

A person who introduces business owners, operators, or prospects through warm relationships.

Best resources:

- Simple explainer pages
- Intake links
- Partner profile pages
- Resource cards
- Follow-up scripts

### Affiliate Publisher

A publisher, creator, newsletter operator, directory owner, blogger, or SEO partner who promotes links and content.

Best resources:

- Public landing pages
- Comparison pages
- Resource hubs
- Disclosure-ready CTAs
- SEO briefs
- Affiliate link rules

### Broker / ISO Rep

A business funding broker, ISO rep, or operator who needs standardized, trackable resources.

Best resources:

- Funding readiness pages
- Resource cards
- Intake scripts
- Follow-up templates
- Partner microsites
- Profile pages

### Consultant / Agency

A consultant, agency, or service provider who needs packaged AI resources for business clients.

Best resources:

- AI workflow audits
- Automation templates
- Tool directories
- Prompt packs
- Implementation checklists

### Strategic Partner

A software provider, service company, platform, community, or marketplace that can co-market resources.

Best resources:

- Co-branded resource pages
- Tool bundles
- Partner portals
- Campaign briefs
- Shared directories

## Partner Asset Types

### Resource Card

A compact card that explains one resource, who it is for, why it matters, and what the partner should link to.

Required fields:

- Title
- Audience
- Problem solved
- Description
- Primary CTA
- Secondary CTA
- Disclosure note
- Tracking note
- Restricted claims

### Partner Profile Page

A public-safe page for one partner, affiliate, referral agent, broker, or ISO rep.

Required fields:

- Name
- Role
- Audience
- Region or niche
- Public bio
- Approved CTA
- Approved resources
- Disclosure
- Tracking ID
- Status

### Partner Launch Kit

A set of assets that helps a partner start promoting correctly.

Recommended files:

- Partner profile
- Resource cards
- Email copy
- SMS copy
- Social posts
- Tracking links
- Disclosure snippets
- FAQ
- Do-not-claim list

### Provider Directory Listing

A provider or resource listing in a partner directory.

Required fields:

- Provider or resource name
- Category
- Description
- Relationship type
- CTA
- Disclosure
- Restrictions
- Review date

## Attribution Rules

Partner attribution should be simple, trackable, and transparent.

Recommended fields:

- Partner slug
- Tracking ID
- Source
- Campaign
- Medium
- Approved landing page
- Approved CTA
- Created date
- Status
- Notes

Example tracking structure:

```text
?utm_source=partner_slug
&utm_medium=affiliate
&utm_campaign=ai_agent_library
```

## Disclosure Rules

Use disclosure language when compensation, referrals, affiliate links, or sponsored placements may exist.

General disclosure:

```text
Some links on this page may be affiliate or referral links. If you use them, we may receive compensation at no additional cost to you.
```

Provider directory disclosure:

```text
Some providers listed here may be affiliate, referral, or strategic partners. Listings are informational and do not guarantee eligibility, approval, pricing, or results.
```

Funding resource disclosure:

```text
Funding resources may include referral or affiliate relationships. Review provider terms, costs, eligibility requirements, and agreements before applying or accepting an offer.
```

## Partner-Safe Language

Use:

- “Resource”
- “Readiness”
- “Educational guide”
- “Common requirements”
- “Potential fit”
- “Next steps”
- “Partner resource”
- “Learn more”
- “Check readiness”
- “Compare options”

Avoid:

- “Guaranteed approval”
- “Guaranteed funding”
- “Guaranteed results”
- “Instant approval for everyone”
- “No risk”
- “Everyone qualifies”
- “Best rates guaranteed”
- “No documents needed”
- “No credit requirements for all applicants”

## Partner Review Checklist

Before publishing a partner page or resource:

- [ ] CTA links are approved.
- [ ] Tracking parameters are correct.
- [ ] Affiliate or referral disclosure is visible.
- [ ] No private contact details are exposed.
- [ ] No guaranteed outcome claims are included.
- [ ] Partner bio is public-safe.
- [ ] Provider claims are verified or removed.
- [ ] Resource is aligned with the partner’s audience.
- [ ] Any funding or business-credit language is non-promissory.
- [ ] Internal notes are not published.

## Standard Partner Resource Card Format

```md
# [Resource Name]

## Audience

Who this resource is for.

## Problem Solved

What problem this resource helps with.

## Description

Short public-safe description.

## Primary CTA

Label:
URL:

## Secondary CTA

Label:
URL:

## Disclosure

Affiliate, referral, or partner disclosure language.

## Restricted Claims

- Claim 1
- Claim 2

## Tracking Notes

Partner slug:
Campaign:
Approved URL:
```

## Related Repo Paths

```text
get-started.html
partners.html
team.html
profile.html
affiliate-disclosure.html
knowledge-base/partner-enablement/
examples/partner-enablement/
```

## Maintenance Checklist

- [ ] Partner CTAs reviewed.
- [ ] Tracking links tested.
- [ ] Disclosure snippets current.
- [ ] Partner profiles approved.
- [ ] Public-safe language preserved.
- [ ] No private payout terms exposed.
```

## `knowledge-base/partner-enablement/index.json`

```json id="partner-enablement-kb-index-json"
{
  "name": "Partner Enablement Knowledge Base",
  "slug": "partner-enablement",
  "description": "Partner launch kits, attribution rules, affiliate protection, resource cards, broker enablement assets, partner-safe CTAs, and distribution workflows.",
  "status": "draft",
  "visibility": "public-safe with partner-specific review",
  "primary_users": [
    "Referral agents",
    "Affiliates",
    "Business funding brokers",
    "ISO reps",
    "Consultants",
    "Local referral partners",
    "Strategic partners",
    "Partner managers",
    "Static site builders"
  ],
  "partner_types": [
    {
      "type": "Referral Agent",
      "best_resources": [
        "Simple explainer pages",
        "Intake links",
        "Partner profile pages",
        "Resource cards",
        "Follow-up scripts"
      ]
    },
    {
      "type": "Affiliate Publisher",
      "best_resources": [
        "Public landing pages",
        "Comparison pages",
        "Resource hubs",
        "Disclosure-ready CTAs",
        "SEO briefs"
      ]
    },
    {
      "type": "Broker / ISO Rep",
      "best_resources": [
        "Funding readiness pages",
        "Resource cards",
        "Intake scripts",
        "Follow-up templates",
        "Partner microsites"
      ]
    },
    {
      "type": "Consultant / Agency",
      "best_resources": [
        "AI workflow audits",
        "Automation templates",
        "Tool directories",
        "Prompt packs",
        "Implementation checklists"
      ]
    },
    {
      "type": "Strategic Partner",
      "best_resources": [
        "Co-branded resource pages",
        "Tool bundles",
        "Partner portals",
        "Campaign briefs",
        "Shared directories"
      ]
    }
  ],
  "asset_types": [
    "Resource Card",
    "Partner Profile Page",
    "Partner Launch Kit",
    "Provider Directory Listing",
    "Partner Microsite",
    "Tracked CTA",
    "Disclosure Snippet"
  ],
  "safe_language": [
    "Resource",
    "Readiness",
    "Educational guide",
    "Common requirements",
    "Potential fit",
    "Next steps",
    "Partner resource",
    "Learn more",
    "Check readiness",
    "Compare options"
  ],
  "restricted_language": [
    "Guaranteed approval",
    "Guaranteed funding",
    "Guaranteed results",
    "Instant approval for everyone",
    "No risk",
    "Everyone qualifies",
    "Best rates guaranteed",
    "No documents needed"
  ],
  "required_review_checks": [
    "CTA links are approved",
    "Tracking parameters are correct",
    "Affiliate or referral disclosure is visible",
    "No private contact details are exposed",
    "No guaranteed outcome claims are included",
    "Partner bio is public-safe",
    "Provider claims are verified or removed"
  ],
  "related_paths": [
    "get-started.html",
    "partners.html",
    "team.html",
    "profile.html",
    "affiliate-disclosure.html",
    "knowledge-base/partner-enablement/README.md",
    "examples/partner-enablement/"
  ]
}
```

## `knowledge-base/partner-enablement/examples.md`

```md id="partner-enablement-kb-examples"
# Partner Enablement Examples

These examples are synthetic and public-safe. They show how to create partner resources without exposing private payout terms, unsupported claims, or misleading affiliate positioning.

## Example 1 — Referral Agent Resource Card

### Scenario

A local referral partner knows small business owners who often ask about working capital, automation, and business tools. The partner needs one simple page to share.

### Resource Card

```md
# Small Business Funding Readiness Resource

## Audience

Small business owners who want to understand common funding readiness factors before applying.

## Problem Solved

Helps business owners organize basic information before speaking with a funding professional or submitting an intake form.

## Description

This resource explains common funding-readiness factors such as time in business, monthly revenue, use of funds, documentation, credit range, and potential caution flags.

## Primary CTA

Label: Check funding readiness
URL: [approved tracking URL]

## Secondary CTA

Label: Browse AI business tools
URL: [approved library URL]

## Disclosure

This page may include referral or affiliate links. If you use them, the referring partner or site operator may receive compensation at no additional cost to you.

## Restricted Claims

- Do not claim guaranteed approval.
- Do not claim guaranteed funding.
- Do not claim everyone qualifies.
- Do not promise specific rates, terms, or funding speed.

## Tracking Notes

Partner slug: local_referral_partner
Campaign: small_business_readiness
Approved URL: [approved URL]
```

## Example 2 — Affiliate Publisher Listing

### Scenario

An affiliate publisher wants to include AI Agent Library in a resource list for business owners who want AI tools and workflow templates.

### Provider Listing

```md
# AI Agent Library

## Category

AI Tools / Business Workflow Resources

## Description

AI Agent Library is a static resource hub for reusable AI agents, skills, prompt systems, knowledge-base templates, schemas, examples, and platform packs.

## Best For

- Business owners exploring AI tools
- Operators building workflow assets
- Agencies packaging repeatable systems
- AI builders creating Custom GPTs or static sites

## CTA

Browse the AI Agent Library

## Disclosure

This listing may include affiliate or referral relationships. Review any linked provider terms before signing up for third-party tools or services.

## Do Not Claim

- Do not claim the library replaces professional advice.
- Do not claim any workflow guarantees business results.
- Do not claim AI outputs are always accurate.
```

## Example 3 — Broker Launch Kit

### Scenario

A broker wants approved assets to share with small business owners, referral sources, and local partners.

### Launch Kit Outline

```md
# Broker Launch Kit

## Purpose

Give the broker approved, public-safe assets for sharing funding-readiness resources and AI business tools.

## Included Assets

- Broker profile page
- Funding readiness resource card
- Partner disclosure snippet
- Email introduction copy
- SMS introduction copy
- Local referral outreach script
- Tracked CTA link
- Do-not-claim list

## Broker Profile

Name:
Role:
Audience:
Region:
Approved CTA:
Tracking ID:

## Email Introduction Copy

Subject: Quick funding-readiness resource

Hi [Name],

I wanted to share a quick resource that can help organize common funding-readiness details before a business owner starts comparing options.

It covers items like time in business, monthly revenue, use of funds, documentation, and common caution flags.

Here is the link:
[Approved URL]

No resource can guarantee approval or terms, but this can help clarify what information may be needed before a review.

Best,
[Partner Name]

## SMS Copy

Here’s the funding-readiness resource I mentioned: [Approved URL]

It can help organize common info before a review. No approval or funding outcome is guaranteed.

## Do-Not-Claim List

- Guaranteed approval
- Guaranteed funding
- Lowest rates guaranteed
- Everyone qualifies
- No documents needed
```

## Example 4 — Strategic Partner Campaign Brief

### Scenario

A software provider wants to co-market a public AI workflow resource with AI Agent Library.

### Campaign Brief

```md
# Strategic Partner Campaign Brief

## Partner

[Partner Name]

## Campaign Goal

Promote a public-safe AI workflow resource that helps business owners or operators understand a specific workflow problem.

## Audience

- Small business owners
- Operations managers
- Agencies
- Consultants
- AI builders

## Resource

[Resource title]

## Primary CTA

[Approved CTA label]
[Approved CTA URL]

## Distribution Channels

- Partner newsletter
- LinkedIn post
- Resource directory
- Blog mention
- Partner profile page

## Required Disclosures

- If affiliate or referral compensation exists, disclose it near the CTA.
- If the resource is educational, do not imply professional advice.
- If AI outputs are involved, include human review language.

## Restricted Claims

- No guaranteed business results.
- No guaranteed revenue.
- No guaranteed platform approval.
- No guaranteed funding, credit, or financing outcomes.

## Review Checklist

- [ ] Partner description approved.
- [ ] CTA link tested.
- [ ] Disclosure visible.
- [ ] Claims reviewed.
- [ ] Tracking parameters added.
```
```

---

## `knowledge-base/crm/README.md`

```md id="crm-kb-readme"
# CRM Knowledge Base

CRM hygiene, lead status handling, note cleanup, follow-up logic, missed-opportunity detection, and pipeline signal scanning.

## Purpose

This knowledge base helps agents and operators structure CRM workflows without creating messy, unsafe, or misleading automation.

Use this folder to support:

- CRM cleanup agents
- Lead status systems
- Follow-up workflows
- Stalled deal reviews
- Missing document reminders
- Referral partner tracking
- Pipeline signal scanning
- CRM automation prompts
- Webhook event schemas
- Human review queues

## Primary Users

- Sales operators
- Funding brokers
- Referral partners
- CRM admins
- Processors
- Closers
- AI workflow builders
- Automation operators
- RevOps teams

## CRM Operating Principles

1. The CRM should reflect the actual state of the deal.
2. Automations should not pretend to know what is missing unless the data supports it.
3. Outbound messages should be human-reviewed when stakes are high.
4. Lead status changes should be traceable.
5. Notes should summarize facts, not hallucinate intent.
6. Follow-up should be helpful, not spammy.
7. Private data should not be copied into public examples.

## Core Lead Stages

### New Lead

A lead has entered the system and has not yet been qualified.

Required actions:

- Confirm source
- Confirm contact details
- Identify business type
- Identify need
- Request missing intake information
- Assign owner

### Intake Started

The lead has provided some information but is missing key details.

Required actions:

- Summarize known facts
- List missing fields
- Send clean intake request
- Set follow-up date

### Qualified for Review

The file has enough information for initial review.

Required actions:

- Confirm product-family fit
- Confirm required documents
- Flag caution items
- Route to reviewer or closer

### Missing Documents

The lead may be viable but cannot move forward without specific files.

Required actions:

- List exact missing documents
- Explain why they are needed
- Avoid overpromising outcome
- Follow up on a reasonable cadence

### Submitted / In Review

The file has been submitted or moved to a review process.

Required actions:

- Record submission date
- Record product family or provider category
- Track expected next update
- Avoid duplicate submissions

### Offer / Options Presented

Options, next steps, or available paths have been shared.

Required actions:

- Record offer or option details
- Record expiration or decision date
- Follow up with clear next step
- Avoid pressure language

### Funded / Completed

The workflow has produced a completed outcome or closed milestone.

Required actions:

- Record completion date
- Record follow-up opportunity
- Set renewal or future check-in reminder
- Request feedback where appropriate

### Declined / Not a Fit

The file is not currently a fit.

Required actions:

- Record reason
- Avoid blame or harsh language
- Identify future readiness steps
- Set appropriate reactivation timeline if relevant

### Nurture

The lead is not ready now but may be relevant later.

Required actions:

- Assign nurture reason
- Set educational follow-up
- Use low-pressure language
- Avoid aggressive automation

## CRM Data Hygiene Rules

Use structured fields whenever possible.

Recommended fields:

- Lead ID
- Contact name
- Business name
- Email
- Phone
- Source
- Partner slug
- Campaign
- Business type
- Time in business
- Monthly revenue
- Funding request
- Use of funds
- Credit band
- Product family
- Status
- Owner
- Next follow-up date
- Missing documents
- Caution flags
- Last contact date
- Last note summary

## Note Cleanup Format

```md
## CRM Note Summary

### Known Facts

- Fact 1
- Fact 2

### Missing Information

- Missing item 1
- Missing item 2

### Current Status

[Stage]

### Caution Flags

- Flag 1
- Flag 2

### Suggested Next Action

[One clear next step]

### Follow-Up Date

[Date or timeframe]
```

## Follow-Up Cadence Rules

### New Lead

- First follow-up: same day where appropriate
- Second follow-up: 1 business day later
- Third follow-up: 3 business days later
- Then move to nurture if no response

### Missing Documents

- Follow up with exact document list
- Avoid vague “send docs” messages
- Explain why each document matters
- Stop or slow cadence if user is unresponsive

### Stalled Deal

- Confirm whether the need still exists
- Summarize what is pending
- Provide one clear next action
- Avoid guilt, pressure, or urgency manipulation

### Declined / Not a Fit

- Explain the gap
- Provide educational readiness steps
- Set realistic recheck timing
- Do not imply future approval is guaranteed

## Automation Rules

Automation may:

- Draft follow-up messages
- Summarize CRM notes
- Identify missing fields
- Create task suggestions
- Assign review categories
- Flag caution items
- Update non-sensitive status fields

Automation should not:

- Send high-stakes messages without approval
- Invent missing information
- Change deal status without evidence
- Promise funding, approval, rates, or outcomes
- Expose private data in logs or public files
- Override human reviewer decisions

## Human Review Required

Use human approval before:

- Sending funding-related messages
- Sending business-credit messages
- Updating final qualification status
- Submitting files to providers
- Sending decline language
- Sending legal, tax, or financial guidance
- Escalating sensitive complaints
- Publishing examples based on real CRM records

## Standard CRM Agent Output

```md
## Lead Summary

- Contact:
- Business:
- Source:
- Status:
- Need:
- Known facts:

## Missing Fields

- Missing field 1
- Missing field 2

## Caution Flags

- Flag 1
- Flag 2

## Recommended Status

[CRM stage]

## Suggested Task

[Task owner + action + due date]

## Draft Follow-Up

[Public-safe message]

## Human Review Needed?

Yes / No

## Reason

Explain why review is or is not required.
```

## Related Repo Paths

```text
knowledge-base/crm/
knowledge-base/automation/
schemas/webhook-event.schema.json
examples/automation/
partners.html
team.html
```

## Maintenance Checklist

- [ ] CRM stages are current.
- [ ] Follow-up cadence is reasonable.
- [ ] Human review gates are clear.
- [ ] Private data rules are preserved.
- [ ] Example records are synthetic.
- [ ] Automation boundaries are documented.
```

## `knowledge-base/crm/index.json`

```json id="crm-kb-index-json"
{
  "name": "CRM Knowledge Base",
  "slug": "crm",
  "description": "CRM hygiene, lead status handling, note cleanup, follow-up logic, missed-opportunity detection, and pipeline signal scanning.",
  "status": "draft",
  "visibility": "internal-use with public-safe examples",
  "primary_users": [
    "Sales operators",
    "Funding brokers",
    "Referral partners",
    "CRM admins",
    "Processors",
    "Closers",
    "AI workflow builders",
    "Automation operators",
    "RevOps teams"
  ],
  "lead_stages": [
    "New Lead",
    "Intake Started",
    "Qualified for Review",
    "Missing Documents",
    "Submitted / In Review",
    "Offer / Options Presented",
    "Funded / Completed",
    "Declined / Not a Fit",
    "Nurture"
  ],
  "recommended_fields": [
    "Lead ID",
    "Contact name",
    "Business name",
    "Email",
    "Phone",
    "Source",
    "Partner slug",
    "Campaign",
    "Business type",
    "Time in business",
    "Monthly revenue",
    "Funding request",
    "Use of funds",
    "Credit band",
    "Product family",
    "Status",
    "Owner",
    "Next follow-up date",
    "Missing documents",
    "Caution flags",
    "Last contact date",
    "Last note summary"
  ],
  "automation_allowed": [
    "Draft follow-up messages",
    "Summarize CRM notes",
    "Identify missing fields",
    "Create task suggestions",
    "Assign review categories",
    "Flag caution items",
    "Update non-sensitive status fields"
  ],
  "automation_not_allowed": [
    "Send high-stakes messages without approval",
    "Invent missing information",
    "Change deal status without evidence",
    "Promise funding or approval",
    "Expose private data in public files",
    "Override human reviewer decisions"
  ],
  "human_review_required_for": [
    "Funding-related messages",
    "Business-credit messages",
    "Final qualification status",
    "Provider submissions",
    "Decline language",
    "Legal, tax, or financial guidance",
    "Sensitive complaints",
    "Examples based on real CRM records"
  ],
  "related_paths": [
    "knowledge-base/crm/README.md",
    "knowledge-base/crm/examples.md",
    "knowledge-base/automation/README.md",
    "schemas/webhook-event.schema.json",
    "examples/automation/"
  ]
}
```

## `knowledge-base/crm/examples.md`

```md id="crm-kb-examples"
# CRM Knowledge Base Examples

These examples are synthetic and public-safe. They show how agents should summarize CRM records, identify missing information, recommend statuses, and draft follow-up messages.

## Example 1 — New Lead Needs Intake

### Scenario

A lead came from a partner link. The CRM has name, phone, email, and a note saying “needs funding ASAP.” No business details are available.

### Known Inputs

- Source: partner link
- Contact info: available
- Need: funding ASAP
- Business details: missing
- Revenue: missing
- Use of funds: missing

### Suggested CRM Agent Output

```md
## Lead Summary

- Contact: Available in CRM
- Business: Missing
- Source: Partner link
- Status: New Lead
- Need: Funding request mentioned, but details are incomplete
- Known facts: Lead requested funding quickly

## Missing Fields

- Business name
- Business type
- Time in business
- Monthly revenue
- Funding amount requested
- Use of funds
- Credit range
- Document availability
- Known caution flags

## Caution Flags

- Urgency is stated but no qualifying details are available

## Recommended Status

Intake Started

## Suggested Task

Owner should send intake request today and confirm basic funding-readiness details.

## Draft Follow-Up

Hi [Name], thanks for reaching out. To understand what options may be relevant, I need a few basics first: business type, time in business, monthly revenue, funding amount requested, use of funds, and whether recent business bank statements are available.

## Human Review Needed?

Yes

## Reason

Funding-related message and lead routing require review before any product fit is suggested.
```

## Example 2 — Missing Documents

### Scenario

A lead provided business details and revenue but has not sent bank statements. The CRM note says “interested, asked for $50k, revenue approx $75k/mo.”

### Suggested CRM Agent Output

```md
## Lead Summary

- Business: Active business
- Status: Missing Documents
- Need: $50,000 working capital request
- Known facts: Approximate revenue is $75,000/month

## Missing Fields

- Business bank statements
- Time in business
- Use of funds
- Existing funding obligations
- Recent NSF activity
- Credit band

## Caution Flags

- Revenue is self-reported and not verified
- Existing obligations are unknown

## Recommended Status

Missing Documents

## Suggested Task

Request most recent 3–6 months of business bank statements and confirm use of funds.

## Draft Follow-Up

Hi [Name], based on what you shared, the next step is to review the recent business bank statements and confirm the use of funds. Please send the most recent 3–6 months of business bank statements when available. Final options depend on file review and provider criteria.

## Human Review Needed?

Yes

## Reason

The message relates to a funding workflow and must avoid implying approval before documentation is reviewed.
```

## Example 3 — Stalled Deal

### Scenario

A lead completed intake and sent documents, but no response has been received for 9 days after options were discussed.

### Suggested CRM Agent Output

```md
## Lead Summary

- Status: Stalled Deal
- Intake: Completed
- Documents: Received
- Options: Previously discussed
- Last contact: 9 days ago

## Missing Fields

- Current interest level
- Decision status
- Any changed business circumstances
- Whether funding need still exists

## Caution Flags

- Stalled communication after options were presented

## Recommended Status

Offer / Options Presented

## Suggested Task

Send low-pressure check-in and update follow-up date.

## Draft Follow-Up

Hi [Name], just checking in to see whether the funding need is still active or if anything has changed. If you are still reviewing options, I can help clarify next steps or update the file if your situation has changed.

## Human Review Needed?

Yes

## Reason

Follow-up references funding options and should remain low-pressure and public-safe.
```

## Example 4 — Declined / Not a Fit

### Scenario

A business requested revenue-based capital but has no current revenue and no business bank statements.

### Suggested CRM Agent Output

```md
## Lead Summary

- Status: Not a Fit
- Requested path: Revenue-based capital
- Revenue: No current business revenue
- Bank statements: Not available

## Missing Fields

- Business revenue history
- Business bank account activity
- Alternative credit or startup-readiness details

## Caution Flags

- No revenue for a revenue-based funding request
- No bank statements available

## Recommended Status

Declined / Not a Fit

## Suggested Task

Send educational readiness response and move to nurture if appropriate.

## Draft Follow-Up

Hi [Name], based on the current information, a revenue-based working-capital review does not look like the right path yet because that type of review typically depends on active business revenue and bank-statement history. A better next step may be to focus on startup-readiness items and revisit once business revenue is established.

## Human Review Needed?

Yes

## Reason

Decline or not-a-fit language should be reviewed before sending.
```
```

---

## `knowledge-base/content-ops/README.md`

```md id="content-ops-kb-readme"
# Content Ops Knowledge Base

SEO briefs, article frameworks, repurposing systems, video-to-blog workflows, content calendars, metadata checklists, and content-to-agent conversion.

## Purpose

This knowledge base helps agents and operators turn ideas, transcripts, notes, offers, workflows, and product concepts into structured content assets.

Use this folder to support:

- SEO article briefs
- Blog post outlines
- YouTube script repurposing
- Prompt pack creation
- Landing page copy
- Content calendar workflows
- Content-to-agent conversion
- FAQ generation
- Internal link plans
- Metadata and excerpt writing
- AI search optimization resources

## Primary Users

- Content operators
- AI SEO builders
- Blog writers
- YouTube operators
- Newsletter operators
- Custom GPT builders
- Static site builders
- Affiliate content teams
- Marketing agencies
- Business tool publishers

## Core Content Principles

1. Start with the searcher, buyer, or operator problem.
2. Write for clarity before cleverness.
3. Use structured outlines before drafting.
4. Keep claims verifiable.
5. Use internal links intentionally.
6. Add CTAs that match user intent.
7. Turn high-performing content into agents, skills, examples, or templates.
8. Preserve public-safe language for funding, credit, finance, legal, and platform topics.

## Content Asset Types

### SEO Article Brief

A structured plan for a blog post or long-form article.

Required sections:

- Working title
- Primary keyword
- Secondary keywords
- Search intent
- Audience
- Problem solved
- Recommended H2s/H3s
- Internal links
- External citation needs
- CTA
- Meta description
- Article excerpt
- Do-not-claim list

### Blog Article

A full article designed for publication.

Recommended sections:

- Introduction
- Problem framing
- Definitions
- Use cases
- Step-by-step guidance
- Examples
- Common mistakes
- FAQs
- CTA
- Disclaimer where needed

### YouTube Script

A script for short educational or product-led video.

Recommended structure:

- Hook
- Problem
- Explanation
- Example
- Tool or workflow mention
- CTA
- Disclaimer where needed

### Prompt Pack

A reusable sequence of prompts for a job.

Recommended structure:

- Use case
- Inputs required
- Prompt sequence
- Expected outputs
- Review checklist
- Example output
- Guardrails

### Landing Page

A conversion-focused page for a tool, GPT, partner asset, or lead magnet.

Recommended structure:

- Hero
- Pain
- Promise
- How it works
- Use cases
- Example output
- CTA
- Trust/disclaimer section
- FAQ

## SEO Brief Format

```md
# [Working Title]

## Primary Keyword

[Keyword]

## Secondary Keywords

- Keyword 1
- Keyword 2

## Search Intent

[Informational / Commercial / Navigational / Transactional]

## Audience

[Who this is for]

## Problem Solved

[What pain the article solves]

## Recommended Structure

### H2: [Section]
- H3: [Subsection]
- H3: [Subsection]

## Internal Links

- [Page title](URL)

## External Citation Needs

- Current platform docs
- Current pricing or policy source
- Primary source where possible

## CTA

[CTA label + destination]

## Meta Description

[150–160 character description]

## Article Excerpt

[Short summary]

## Do-Not-Claim List

- Claim 1
- Claim 2
```

## Repurposing Matrix

| Source Asset | Repurpose Into | Notes |
|---|---|---|
| YouTube video | Blog post | Extract sections, examples, FAQs, CTA |
| Blog post | Prompt pack | Convert process into reusable prompt sequence |
| Prompt pack | Skill file | Define inputs, outputs, workflow, guardrails |
| Agent spec | Landing page | Translate buyer, pain, outcome, CTA |
| Knowledge base | FAQ page | Turn rules into answers |
| Case notes | Synthetic example | Remove private data and claims |
| Static page | Social posts | Extract hooks and bullets |
| SEO brief | Article draft | Preserve structure and citations |

## Metadata Checklist

Every publishable page should define:

- Page title
- Meta description
- H1
- Primary keyword or topic
- Short excerpt
- Category
- Tags
- CTA
- Canonical URL if applicable
- Open Graph image if applicable
- Last reviewed date

## Internal Linking Rules

Use internal links to guide users toward the next useful action.

Recommended link targets:

- Agent catalog
- Skill catalog
- Knowledge-base pages
- Partner get-started page
- Funding readiness resources
- Prompt systems
- Examples
- Portfolio pages
- Legal/trust pages when claims need context

## CTA Rules

CTA should match user intent.

Examples:

- “Browse related agents”
- “Open the skill builder”
- “Use the prompt generator”
- “Check funding readiness”
- “Compare partner resources”
- “View platform pack”
- “Download the template”
- “Start with the resource page”

Avoid:

- Vague “Learn more” as the only CTA
- CTAs that imply guaranteed outcomes
- CTAs that send users to a form before education when trust is low
- Multiple competing primary CTAs

## Public-Safe Content Rules

For funding, finance, business-credit, legal, tax, platform, or automation content:

- Use educational framing.
- Avoid guarantees.
- Cite current official sources where needed.
- Disclose affiliate relationships.
- Use synthetic examples.
- Add human review language when appropriate.
- Separate internal notes from public copy.

## Standard Content Agent Output

```md
## Content Summary

- Topic:
- Audience:
- Search intent:
- Primary keyword:
- CTA:
- Risk level:

## Recommended Asset Type

[SEO brief / article / prompt pack / landing page / script / FAQ]

## Outline

[Structured outline]

## Missing Inputs

- Missing item 1
- Missing item 2

## Draft Copy or Brief

[Generated content]

## Internal Links

- Link 1
- Link 2

## Guardrails

- Guardrail 1
- Guardrail 2
```

## Related Repo Paths

```text
knowledge-base/content-ops/
examples/content-ops/
prompt-library.html
prompt-generator.html
templates.html
schemas/
site-data/
```

## Maintenance Checklist

- [ ] SEO brief format is current.
- [ ] CTA rules are clear.
- [ ] Repurposing workflows are documented.
- [ ] Public-safe language rules are preserved.
- [ ] Examples are synthetic.
- [ ] Citation needs are flagged for current facts.
```

## `knowledge-base/content-ops/index.json`

```json id="content-ops-kb-index-json"
{
  "name": "Content Ops Knowledge Base",
  "slug": "content-ops",
  "description": "SEO briefs, article frameworks, repurposing systems, video-to-blog workflows, content calendars, metadata checklists, and content-to-agent conversion.",
  "status": "draft",
  "visibility": "public-safe",
  "primary_users": [
    "Content operators",
    "AI SEO builders",
    "Blog writers",
    "YouTube operators",
    "Newsletter operators",
    "Custom GPT builders",
    "Static site builders",
    "Affiliate content teams",
    "Marketing agencies",
    "Business tool publishers"
  ],
  "asset_types": [
    "SEO Article Brief",
    "Blog Article",
    "YouTube Script",
    "Prompt Pack",
    "Landing Page",
    "FAQ Page",
    "Social Post Set",
    "Metadata Pack"
  ],
  "required_seo_brief_sections": [
    "Working title",
    "Primary keyword",
    "Secondary keywords",
    "Search intent",
    "Audience",
    "Problem solved",
    "Recommended H2s/H3s",
    "Internal links",
    "External citation needs",
    "CTA",
    "Meta description",
    "Article excerpt",
    "Do-not-claim list"
  ],
  "metadata_fields": [
    "Page title",
    "Meta description",
    "H1",
    "Primary keyword or topic",
    "Short excerpt",
    "Category",
    "Tags",
    "CTA",
    "Canonical URL",
    "Open Graph image",
    "Last reviewed date"
  ],
  "recommended_ctas": [
    "Browse related agents",
    "Open the skill builder",
    "Use the prompt generator",
    "Check funding readiness",
    "Compare partner resources",
    "View platform pack",
    "Download the template",
    "Start with the resource page"
  ],
  "restricted_cta_patterns": [
    "Vague learn more as the only CTA",
    "Guaranteed outcome language",
    "Premature form-first CTA",
    "Multiple competing primary CTAs"
  ],
  "related_paths": [
    "knowledge-base/content-ops/README.md",
    "knowledge-base/content-ops/examples.md",
    "examples/content-ops/",
    "prompt-library.html",
    "prompt-generator.html",
    "templates.html",
    "schemas/"
  ]
}
```

## `knowledge-base/content-ops/examples.md`

```md id="content-ops-kb-examples"
# Content Ops Knowledge Base Examples

These examples are synthetic and public-safe. They show how content workflows can become briefs, pages, scripts, prompt packs, or reusable agent assets.

## Example 1 — SEO Article Brief

### Scenario

The site needs an article about using AI agents for small business funding follow-up.

### Generated Brief

```md
# AI Agents for Small Business Funding Follow-Up

## Primary Keyword

AI agents for small business funding follow-up

## Secondary Keywords

- funding follow-up automation
- AI for business loan brokers
- broker follow-up system
- small business funding CRM automation
- AI funding assistant

## Search Intent

Informational / Commercial

## Audience

Funding brokers, referral partners, small business finance operators, and CRM-heavy sales teams.

## Problem Solved

Business funding teams lose deals when leads go stale, documents are missing, follow-up is inconsistent, or CRM notes are messy.

## Recommended Structure

### H2: What Is an AI Funding Follow-Up Agent?
- H3: What it can do
- H3: What it should not do

### H2: Where Funding Follow-Up Breaks
- H3: New lead delays
- H3: Missing documents
- H3: Stalled deals
- H3: Declined reactivation

### H2: Best Use Cases
- H3: Intake reminders
- H3: Document follow-up
- H3: CRM note cleanup
- H3: Renewal reminders

### H2: Human Review Rules
- H3: Funding claims
- H3: Decline language
- H3: Sensitive data

### H2: Example Workflow
- H3: Trigger
- H3: Draft
- H3: Review
- H3: Send

## Internal Links

- Agent catalog
- CRM knowledge base
- Automation knowledge base
- Funding knowledge base
- Disclaimer

## CTA

Browse funding follow-up agents

## Meta Description

Learn how AI agents can help funding teams organize follow-up, document requests, CRM notes, and stalled deal workflows without making funding guarantees.

## Article Excerpt

AI funding follow-up agents can help organize reminders, missing document requests, CRM notes, and workflow tasks while keeping human review in place for high-stakes messages.

## Do-Not-Claim List

- Do not claim AI guarantees funding.
- Do not claim automation replaces broker judgment.
- Do not claim all leads can be revived.
- Do not claim approval or terms are guaranteed.
```

## Example 2 — Video-to-Blog Repurposing

### Source

A 4-minute video explains why business owners should organize documents before applying for funding.

### Repurposed Blog Outline

```md
# Why Funding Readiness Starts Before the Application

## Hook

Many business owners start with the application. A better first step is organizing the file.

## H2: What Funding Readiness Means

Funding readiness means having the basic information and documents needed for a meaningful review.

## H2: Common Missing Items

- Business bank statements
- Use of funds
- Monthly revenue
- Credit range
- Time in business
- Existing funding obligations

## H2: Why Missing Documents Slow Everything Down

Without required documents, a file cannot be reviewed clearly.

## H2: What to Prepare First

- Confirm business details
- Gather bank statements
- Define use of funds
- Note caution flags
- Prepare owner information

## CTA

Check funding readiness

## Disclaimer

This resource is educational and does not guarantee funding, approval, terms, or provider outcomes.
```

## Example 3 — Prompt Pack From Article

### Source Article Topic

“How to Build a Partner Resource Card”

### Prompt Pack

```md
# Partner Resource Card Prompt Pack

## Use Case

Create public-safe partner resource cards for affiliates, brokers, referral agents, and strategic partners.

## Required Inputs

- Resource name
- Audience
- Problem solved
- CTA
- Disclosure requirement
- Restricted claims
- Tracking URL

## Prompt 1 — Extract Resource Positioning

Given the resource details below, summarize the audience, problem solved, and public-safe positioning.

[Paste resource details]

## Prompt 2 — Draft Resource Card

Create a partner resource card with these sections:

- Title
- Audience
- Problem solved
- Description
- Primary CTA
- Secondary CTA
- Disclosure
- Restricted claims
- Tracking notes

## Prompt 3 — Review for Risk

Review the card for unsupported claims, missing disclosures, vague CTAs, or language that implies guaranteed outcomes.

## Prompt 4 — Generate Final Markdown

Return the final resource card as clean Markdown ready for the repo.
```

## Example 4 — Landing Page From Agent Spec

### Agent Spec Summary

Agent: Funding Pipeline Triage Agent  
Buyer: Funding operators and brokers  
Pain solved: Prioritize and route funding leads without application roulette

### Landing Page Skeleton

```md
# Funding Pipeline Triage Agent

## Hero

Route funding leads with clearer intake, cleaner next steps, and fewer mismatched submissions.

## Pain

Funding teams waste time when every lead is treated the same. Missing docs, vague use-of-funds notes, and unclear product fit create friction.

## What It Does

- Summarizes lead facts
- Identifies missing information
- Flags caution items
- Suggests likely product family
- Drafts public-safe follow-up
- Keeps human review in place

## Who It Is For

- Funding brokers
- Intake teams
- Referral partners
- Processors
- Closers

## Example Output

- File summary
- Missing documents
- Caution flags
- Suggested next step
- Safe follow-up message

## CTA

Browse the agent catalog

## Disclaimer

This agent supports routing and organization. It does not guarantee funding, approvals, rates, or provider outcomes.
```
```


<!-- SOURCE: Batch 8 — Knowledge Base Folder Files Continued.md -->

# Source Batch: Batch 8 — Knowledge Base Folder Files Continued.md

# you asked

message time: 2026-06-18 12:34:09

Proceed (Batch 8)

---

# chatgpt response

## Batch 8 — Knowledge Base Folder Files Continued

## `knowledge-base/automation/README.md`

```md id="automation-kb-readme"
# Automation Knowledge Base

Workflow specs, trigger libraries, webhook event patterns, approval gates, fallbacks, failure handling, and automation safety rules for AI Agent Library assets.

## Purpose

This knowledge base helps builders design safe, reviewable automation workflows for agents, static sites, partner systems, CRM operations, content operations, and public tools.

Use this folder to support:

- Workflow automation agents
- Webhook event schemas
- CRM follow-up flows
- Partner attribution flows
- Content publishing workflows
- Lead intake automation
- Approval queues
- Human-review checkpoints
- No-auth action planning
- API-key and OAuth workflow planning

## Primary Users

- AI workflow builders
- Automation operators
- CRM admins
- Partner managers
- Funding operators
- Content operators
- RevOps teams
- Static site builders
- Custom GPT builders
- n8n / Zapier / Make builders

## Automation Principles

1. Automate structure before judgment.
2. Draft before sending.
3. Flag uncertainty instead of inventing facts.
4. Use human review for high-stakes actions.
5. Keep credentials out of public files.
6. Use synthetic payloads in examples.
7. Log the action, source, and timestamp.
8. Prefer reversible changes.
9. Treat outbound communication as higher risk.
10. Separate no-auth, API-key, and OAuth workflows.

## Automation Categories

### No-Auth Automations

Best for:

- Static page interactions
- Local browser tools
- Prompt generators
- Markdown generators
- JSON builders
- Downloadable files
- Copy-to-clipboard utilities
- Public-safe calculators

Examples:

- Prompt generator
- Skill builder
- Static resource-card builder
- Schema starter generator
- Local search/filter page
- Static checklist app

### API-Key Automations

Best for:

- Controlled backend calls
- Webhook proxy workflows
- CRM data syncs
- Email draft providers
- SMS draft providers
- Server-side enrichment
- Authenticated partner tools

Examples:

- Lead intake webhook
- CRM stage updater
- Email draft creation
- Provider status sync
- Analytics event sender

### OAuth Automations

Best for:

- User-authorized account actions
- Google Workspace operations
- Notion database updates
- HubSpot contact workflows
- Slack notifications
- Calendar tasks
- Drive file operations

Examples:

- Create Notion task
- Draft Gmail response
- Update HubSpot contact
- Add Google Calendar reminder
- Save Drive document
- Send Slack alert

## Trigger Library

### User Action Trigger

Triggered when a user clicks, submits, copies, downloads, filters, or generates something.

Common events:

- `button.clicked`
- `form.submitted`
- `file.downloaded`
- `prompt.generated`
- `schema.generated`
- `resource.filtered`

### CRM Trigger

Triggered when a lead, contact, deal, or task changes.

Common events:

- `lead.created`
- `lead.updated`
- `lead.status_changed`
- `document.missing`
- `deal.stalled`
- `task.overdue`
- `partner_source_detected`

### Content Trigger

Triggered by publishing or content operations.

Common events:

- `brief.created`
- `article.drafted`
- `metadata.generated`
- `content.needs_review`
- `asset.published`
- `content.repuposed`

### Partner Trigger

Triggered by affiliate, referral, or partner activity.

Common events:

- `partner.application_submitted`
- `partner.profile_created`
- `partner.link_clicked`
- `partner.resource_shared`
- `partner.lead_referred`

### Webhook Trigger

Triggered by external systems.

Common events:

- `webhook.received`
- `webhook.verified`
- `webhook.failed`
- `webhook.replayed`
- `webhook.rejected`

## Workflow Spec Format

```md
# [Workflow Name]

## Purpose

What this workflow does.

## Trigger

What starts the workflow.

## Inputs

- Input 1
- Input 2

## Steps

1. Step one
2. Step two
3. Step three

## Outputs

- Output 1
- Output 2

## Human Review Required?

Yes / No

## Review Reason

Explain why review is or is not required.

## Failure Modes

- Failure mode 1
- Failure mode 2

## Fallback Behavior

What the workflow should do if it fails.

## Data Rules

- No secrets
- No private client data
- Synthetic examples only

## Related Schema

schemas/webhook-event.schema.json
```

## Approval Gates

Human review should be required before:

- Sending funding-related outbound messages
- Sending business-credit messages
- Updating final deal qualification
- Submitting a file to a provider
- Sending decline language
- Publishing partner profiles
- Publishing affiliate recommendations
- Updating legal or trust pages
- Sending SMS messages
- Writing to a production CRM
- Triggering payment, contract, or regulated workflows

## Failure Handling

Every automation should define:

- What happens if required inputs are missing
- What happens if an API call fails
- What happens if a webhook signature fails
- What happens if a user is unauthorized
- What happens if rate limits are reached
- What happens if data validation fails
- What gets logged
- Who gets notified
- Whether retry is safe
- Whether the workflow should stop

## Standard Automation Agent Output

```md
## Workflow Summary

- Name:
- Trigger:
- Input source:
- Output destination:
- Risk level:
- Human review:

## Steps

1. Step one
2. Step two
3. Step three

## Required Data

- Field 1
- Field 2

## Missing Inputs

- Missing item 1
- Missing item 2

## Recommended Action Type

No-auth / API-key / OAuth / Manual review

## Safety Notes

- Safety note 1
- Safety note 2

## Example Payload

```json
{
  "event_type": "lead.created",
  "source": "partner_form",
  "created_at": "2026-06-18T12:00:00Z"
}
```

## Fallback

What to do if the workflow fails.
```

## Public-Safe Data Rules

Allowed:

- Synthetic payloads
- Example field names
- Placeholder IDs
- Public URLs
- Generic workflow names
- Public-safe event types

Restricted:

- API keys
- Access tokens
- Webhook secrets
- Real customer records
- Bank data
- Tax data
- Credit reports
- Private CRM exports
- Private provider logic
- Production endpoints

## Related Repo Paths

```text
knowledge-base/automation/
schemas/webhook-event.schema.json
examples/automation/
script.js
prompt-generator.html
skill-builder.html
```

## Maintenance Checklist

- [ ] Workflow specs include triggers.
- [ ] Human review gates are defined.
- [ ] No secrets are present.
- [ ] Payloads are synthetic.
- [ ] Failure modes are documented.
- [ ] Related schemas are linked.
- [ ] Public-safe language is preserved.
```

## `knowledge-base/automation/index.json`

```json id="automation-kb-index-json"
{
  "name": "Automation Knowledge Base",
  "slug": "automation",
  "description": "Workflow specs, trigger libraries, webhook event patterns, approval gates, fallbacks, failure handling, and automation safety rules.",
  "status": "draft",
  "visibility": "public-safe with private implementation boundaries",
  "primary_users": [
    "AI workflow builders",
    "Automation operators",
    "CRM admins",
    "Partner managers",
    "Funding operators",
    "Content operators",
    "RevOps teams",
    "Static site builders",
    "Custom GPT builders",
    "n8n builders"
  ],
  "automation_types": [
    {
      "type": "No-Auth",
      "best_for": [
        "Static page interactions",
        "Prompt generators",
        "Markdown generators",
        "JSON builders",
        "Copy-to-clipboard utilities",
        "Public-safe calculators"
      ]
    },
    {
      "type": "API-Key",
      "best_for": [
        "Controlled backend calls",
        "Webhook proxy workflows",
        "CRM data syncs",
        "Email draft providers",
        "Server-side enrichment"
      ]
    },
    {
      "type": "OAuth",
      "best_for": [
        "User-authorized account actions",
        "Google Workspace operations",
        "Notion database updates",
        "HubSpot contact workflows",
        "Slack notifications",
        "Drive file operations"
      ]
    }
  ],
  "trigger_categories": [
    "User Action Trigger",
    "CRM Trigger",
    "Content Trigger",
    "Partner Trigger",
    "Webhook Trigger"
  ],
  "human_review_required_for": [
    "Funding-related outbound messages",
    "Business-credit messages",
    "Final deal qualification",
    "Provider submissions",
    "Decline language",
    "Partner profile publishing",
    "Affiliate recommendations",
    "Legal or trust page updates",
    "SMS messages",
    "Production CRM writes"
  ],
  "restricted_data": [
    "API keys",
    "Access tokens",
    "Webhook secrets",
    "Real customer records",
    "Bank data",
    "Tax data",
    "Credit reports",
    "Private CRM exports",
    "Private provider logic",
    "Production endpoints"
  ],
  "related_paths": [
    "knowledge-base/automation/README.md",
    "knowledge-base/automation/examples.md",
    "schemas/webhook-event.schema.json",
    "examples/automation/",
    "prompt-generator.html",
    "skill-builder.html"
  ]
}
```

## `knowledge-base/automation/examples.md`

```md id="automation-kb-examples"
# Automation Knowledge Base Examples

These examples are synthetic and public-safe. They show how to define workflows, triggers, payloads, review gates, and failure behavior without exposing secrets or private data.

## Example 1 — Lead Intake Webhook

### Scenario

A partner form submits a new lead. The automation should validate the payload, create a CRM task, and draft a follow-up message for human review.

### Workflow Spec

```md
# Partner Lead Intake Workflow

## Purpose

Capture a partner-referred lead and prepare the next human-reviewed action.

## Trigger

`partner.lead_referred`

## Inputs

- Partner slug
- Lead name
- Business name
- Email
- Phone
- Business type
- Stated need
- Funding amount if applicable
- Source URL

## Steps

1. Receive webhook payload.
2. Validate required fields.
3. Reject or quarantine incomplete payloads.
4. Create CRM lead or task.
5. Draft intake follow-up.
6. Send draft to human review queue.
7. Log attribution source.

## Outputs

- CRM lead or task
- Draft follow-up message
- Attribution record
- Review task

## Human Review Required?

Yes

## Review Reason

The workflow may involve funding-related follow-up and should not send outbound messages automatically.

## Failure Modes

- Missing email or phone
- Invalid partner slug
- CRM API unavailable
- Duplicate lead detected
- Webhook signature invalid

## Fallback Behavior

If validation fails, store the payload in a review queue and notify the operator.

## Data Rules

Use synthetic payloads in examples. Do not store secrets or private client records in public files.

## Related Schema

schemas/webhook-event.schema.json
```

### Example Payload

```json
{
  "event_type": "partner.lead_referred",
  "source": "partner_form",
  "partner_slug": "sample_partner",
  "created_at": "2026-06-18T12:00:00Z",
  "payload": {
    "lead_name": "Sample Contact",
    "business_name": "Sample Business LLC",
    "email": "sample@example.com",
    "phone": "555-0100",
    "business_type": "Service Business",
    "stated_need": "Working capital",
    "requested_amount": 50000
  }
}
```

## Example 2 — Missing Document Follow-Up Draft

### Scenario

A CRM deal changes to Missing Documents. The automation should identify missing files and draft a message, but not send it automatically.

### Workflow Spec

```md
# Missing Document Follow-Up Draft

## Purpose

Draft a clear missing-document request for human review.

## Trigger

`lead.status_changed` where status is `Missing Documents`

## Inputs

- Lead ID
- Contact name
- Business name
- Missing document list
- Product family
- Last contact date
- Owner

## Steps

1. Confirm the lead status changed to Missing Documents.
2. Read the missing document list.
3. Generate a concise message.
4. Add public-safe funding disclaimer if applicable.
5. Create a review task for the owner.
6. Do not send automatically.

## Outputs

- Draft follow-up message
- Review task
- CRM note summary

## Human Review Required?

Yes

## Review Reason

The message is funding-related and should be approved before sending.

## Failure Modes

- Missing document list is empty
- Lead owner is missing
- CRM record cannot be updated
- Product family is unclear

## Fallback Behavior

Create a task asking the owner to manually review the file and identify missing documents.
```

### Draft Message

```text
Hi [Name], the next step is to collect the remaining documents needed for review:

- [Document 1]
- [Document 2]

Once these are available, the file can be reviewed more clearly. Final options depend on documentation, business profile, and provider criteria.
```

## Example 3 — Content Brief Generator

### Scenario

An operator submits a topic and keyword. The automation generates a content brief and stores it as a draft.

### Workflow Spec

```md
# Content Brief Generator

## Purpose

Generate a structured SEO brief from a topic, keyword, audience, and CTA.

## Trigger

`brief.requested`

## Inputs

- Topic
- Primary keyword
- Audience
- Search intent
- CTA
- Internal links
- Risk level

## Steps

1. Validate topic and primary keyword.
2. Generate SEO brief sections.
3. Add citation needs if the topic is current or high-stakes.
4. Add do-not-claim list.
5. Save brief as draft.
6. Mark for editorial review.

## Outputs

- Draft SEO brief
- Metadata fields
- Review checklist

## Human Review Required?

Yes

## Review Reason

Content may include claims, SEO recommendations, or current facts requiring review.

## Failure Modes

- Missing primary keyword
- Missing audience
- Unsupported claims appear
- Topic requires citations not provided

## Fallback Behavior

Return a brief skeleton and list missing inputs.
```

## Example 4 — Static Prompt Generator

### Scenario

A static page lets users generate a prompt pack locally in the browser. No server, API key, or account connection is required.

### Workflow Spec

```md
# Static Prompt Generator

## Purpose

Generate reusable prompt templates in the browser without collecting data.

## Trigger

`prompt.generated`

## Inputs

- Use case
- Audience
- Desired output
- Constraints
- Platform

## Steps

1. User enters fields in the browser.
2. JavaScript validates required inputs.
3. Page generates prompt text locally.
4. User copies or downloads the prompt.
5. No data is sent to a server by default.

## Outputs

- Prompt pack markdown
- Copyable prompt
- Downloadable text

## Human Review Required?

No for generation; yes before production use.

## Review Reason

The page only generates local text, but the resulting prompt should be reviewed before being used in public or high-stakes workflows.

## Failure Modes

- User leaves fields blank
- Browser clipboard access fails
- Generated prompt is too generic

## Fallback Behavior

Show a prompt skeleton and ask for missing inputs.
```
```

---

## `knowledge-base/local-referrals/README.md`

```md id="local-referrals-kb-readme"
# Local Referrals Knowledge Base

Local referral partner discovery, outreach scripts, referral qualification, local profile pages, partner resource cards, and follow-up cadences.

## Purpose

This knowledge base helps agents and operators create local referral systems that are structured, trackable, public-safe, and partner-friendly.

Use this folder to support:

- Local referral partner discovery
- Referral partner outreach
- Local partner profile pages
- Local landing pages
- Resource cards
- Referral scripts
- Community partner lists
- Local SEO pages
- Partner qualification workflows
- Referral attribution systems

## Primary Users

- Local referral partners
- Business funding brokers
- Affiliate operators
- Consultants
- Local service providers
- Community builders
- Chamber and networking groups
- Agency owners
- CRM operators
- AI workflow builders

## Referral Partner Categories

### Accountants and Bookkeepers

Why they matter:

- See business cash-flow issues early
- Know when clients need working capital
- Help clients organize documents
- Often trusted by business owners

Useful resources:

- Funding readiness checklist
- Document preparation guide
- Cash-flow gap explainer
- Partner disclosure snippet

### Insurance Agents

Why they matter:

- Work with contractors, local businesses, property owners, and service providers
- Maintain recurring client relationships
- Often hear about expansion, equipment, or working capital needs

Useful resources:

- Equipment finance resource card
- Contractor funding readiness page
- Local business AI tools page

### Real Estate Professionals

Why they matter:

- Know investors, landlords, developers, and property buyers
- Hear about bridge financing, fix-and-flip, DSCR, and renovation needs

Useful resources:

- Real estate capital checklist
- Fix-and-flip document guide
- Investor readiness resource

### Equipment Vendors

Why they matter:

- Know businesses actively purchasing productive assets
- Can refer buyers who need financing support

Useful resources:

- Equipment finance checklist
- Vendor resource card
- Invoice and quote preparation guide

### Marketing Agencies

Why they matter:

- Work with businesses spending money to grow
- Can introduce clients who need cash-flow, automation, CRM, content, or AI tools

Useful resources:

- Ad spend cash-flow resource
- AI workflow audit resource
- Content ops checklist

### Local Business Consultants

Why they matter:

- Advise owners on operations, growth, finance, systems, and technology
- Can refer clients to tools and readiness resources

Useful resources:

- AI Agent Library overview
- Business automation resource card
- Funding readiness explainer
- Partner profile template

### Chambers and Business Groups

Why they matter:

- Aggregate local business owners
- Can share educational resources
- Useful for workshops and resource hubs

Useful resources:

- Workshop outline
- Local resource page
- AI tools for small business page
- Funding readiness guide

## Referral Qualification Questions

Before activating a referral partner, ask:

- Who is their audience?
- How do they currently reach business owners?
- Do they have a website, newsletter, social presence, or offline network?
- What business categories do they serve?
- Are they comfortable using disclosure language?
- Can they follow public-safe messaging rules?
- Do they need a profile page?
- Do they need tracked links?
- What resources are they allowed to promote?
- How will referrals be attributed?

## Outreach Script Format

```md
# Local Referral Outreach Script

## Audience

[Referral partner type]

## Context

Why this partner may be relevant.

## Message

Hi [Name],

I’m building a small set of practical resources for local business owners who want help organizing funding-readiness, AI workflow, automation, or business-tool next steps.

I thought this might be useful for some of the business owners you already work with.

Would it make sense to send over a simple resource page you could review?

Best,
[Your Name]

## Follow-Up

Hi [Name], just following up on the local business resource I mentioned. No pressure — I’m mainly looking for partners who want a clean educational page they can share when a business owner asks about funding readiness or AI tools.

## CTA

Review the partner resource page.

## Do-Not-Claim

- Do not promise funding or approval.
- Do not imply a referral guarantees any outcome.
- Do not hide affiliate or referral relationships.
```

## Local Partner Profile Format

```md
# [Partner Name]

## Role

[Referral partner / Affiliate / Consultant / Broker / Local connector]

## Audience

[Who they serve]

## Region

[Local market or remote]

## Public Bio

Short approved public-safe bio.

## Approved Resources

- Resource 1
- Resource 2

## Primary CTA

Label:
URL:

## Disclosure

May include affiliate or referral relationships.

## Tracking Notes

Partner slug:
Campaign:
```

## Local Referral Safety Rules

Use:

- Educational resource
- Readiness checklist
- Local business tool
- Compare options
- Review common requirements
- Talk through next steps
- Public resource page

Avoid:

- Guaranteed funding
- Guaranteed approvals
- Everyone qualifies
- No risk
- No documents required
- Secret lender access
- Approved regardless of credit
- Best rates guaranteed

## Standard Local Referral Agent Output

```md
## Referral Partner Summary

- Partner type:
- Audience:
- Region:
- Promotion channel:
- Relevant resources:
- Risk level:

## Fit Rationale

Why this partner may be useful.

## Recommended Assets

- Asset 1
- Asset 2

## Outreach Message

[Draft message]

## Disclosure Needed?

Yes / No

## Tracking Notes

Partner slug:
Recommended campaign:

## Human Review Needed?

Yes / No
```

## Related Repo Paths

```text
knowledge-base/local-referrals/
knowledge-base/partner-enablement/
partners.html
team.html
profile.html
get-started.html
examples/partner-enablement/
```

## Maintenance Checklist

- [ ] Partner types are current.
- [ ] Outreach scripts are public-safe.
- [ ] Referral claims avoid guarantees.
- [ ] Partner disclosure rules are included.
- [ ] Profile templates are reusable.
- [ ] Tracking notes avoid exposing private payout terms.
```

## `knowledge-base/local-referrals/index.json`

```json id="local-referrals-kb-index-json"
{
  "name": "Local Referrals Knowledge Base",
  "slug": "local-referrals",
  "description": "Local referral partner discovery, outreach scripts, referral qualification, local profile pages, partner resource cards, and follow-up cadences.",
  "status": "draft",
  "visibility": "public-safe with partner review",
  "primary_users": [
    "Local referral partners",
    "Business funding brokers",
    "Affiliate operators",
    "Consultants",
    "Local service providers",
    "Community builders",
    "Chamber and networking groups",
    "Agency owners",
    "CRM operators",
    "AI workflow builders"
  ],
  "referral_partner_categories": [
    "Accountants and Bookkeepers",
    "Insurance Agents",
    "Real Estate Professionals",
    "Equipment Vendors",
    "Marketing Agencies",
    "Local Business Consultants",
    "Chambers and Business Groups"
  ],
  "recommended_assets": [
    "Funding readiness checklist",
    "Document preparation guide",
    "Cash-flow gap explainer",
    "Equipment finance resource card",
    "Real estate capital checklist",
    "AI workflow audit resource",
    "Business automation resource card",
    "Partner profile template"
  ],
  "qualification_questions": [
    "Who is their audience?",
    "How do they currently reach business owners?",
    "Do they have a website, newsletter, social presence, or offline network?",
    "What business categories do they serve?",
    "Are they comfortable using disclosure language?",
    "Can they follow public-safe messaging rules?",
    "Do they need a profile page?",
    "Do they need tracked links?",
    "What resources are they allowed to promote?",
    "How will referrals be attributed?"
  ],
  "safe_language": [
    "Educational resource",
    "Readiness checklist",
    "Local business tool",
    "Compare options",
    "Review common requirements",
    "Talk through next steps",
    "Public resource page"
  ],
  "restricted_language": [
    "Guaranteed funding",
    "Guaranteed approvals",
    "Everyone qualifies",
    "No risk",
    "No documents required",
    "Secret lender access",
    "Approved regardless of credit",
    "Best rates guaranteed"
  ],
  "related_paths": [
    "knowledge-base/local-referrals/README.md",
    "knowledge-base/local-referrals/examples.md",
    "knowledge-base/partner-enablement/README.md",
    "partners.html",
    "team.html",
    "profile.html",
    "get-started.html"
  ]
}
```

## `knowledge-base/local-referrals/examples.md`

```md id="local-referrals-kb-examples"
# Local Referrals Knowledge Base Examples

These examples are synthetic and public-safe. They show how to identify local referral partners, create outreach messages, and build partner profile assets.

## Example 1 — Accountant Referral Partner

### Scenario

A local bookkeeper works with small business owners and often hears about cash-flow problems before clients apply for funding.

### Referral Partner Summary

```md
## Referral Partner Summary

- Partner type: Bookkeeper
- Audience: Local small business owners
- Region: Local market
- Promotion channel: Email, client conversations, referral network
- Relevant resources: Funding readiness checklist, document preparation guide
- Risk level: Medium because funding language requires careful wording

## Fit Rationale

This partner may be useful because bookkeepers often see cash-flow gaps, missing documentation, and revenue patterns before business owners seek funding.

## Recommended Assets

- Funding readiness resource card
- Document checklist
- Partner disclosure snippet
- Tracked intake link

## Outreach Message

Hi [Name],

I’m building a simple funding-readiness resource for local business owners. It helps owners organize common items like monthly revenue, use of funds, business bank statements, and missing documentation before they start comparing options.

Since you work closely with small business finances, I thought this might be useful for clients who ask about working capital or cash-flow gaps.

Would it make sense to send over the resource for review?

## Disclosure Needed?

Yes

## Tracking Notes

Partner slug: sample_bookkeeper
Recommended campaign: local_funding_readiness

## Human Review Needed?

Yes
```

## Example 2 — Equipment Vendor Referral Partner

### Scenario

An equipment vendor sells machinery to contractors and wants to refer customers who need financing.

### Resource Card

```md
# Equipment Purchase Readiness Resource

## Audience

Contractors or business owners preparing to purchase business-use equipment.

## Problem Solved

Helps buyers understand what information is commonly needed for an equipment-finance review.

## Description

This resource explains common equipment purchase details such as equipment type, invoice or quote, vendor information, business use, down payment availability, and owner information.

## Primary CTA

Label: Review equipment financing readiness
URL: [approved URL]

## Secondary CTA

Label: Browse business funding resources
URL: [approved URL]

## Disclosure

This resource may include referral or affiliate relationships. Final financing options depend on provider review, documentation, business profile, and asset details.

## Restricted Claims

- Do not claim equipment purchase guarantees approval.
- Do not claim no documentation is needed.
- Do not claim all buyers qualify.
- Do not promise specific rates or terms.

## Tracking Notes

Partner slug: sample_equipment_vendor
Campaign: equipment_purchase_readiness
```

## Example 3 — Chamber Workshop Resource

### Scenario

A local chamber wants a workshop resource about AI tools and funding readiness for small businesses.

### Workshop Outline

```md
# Local Business AI Tools + Funding Readiness Workshop

## Audience

Small business owners, local service businesses, contractors, retailers, and consultants.

## Workshop Goal

Help business owners understand practical AI tools and common funding-readiness factors without making guarantees or selling a specific product.

## Sections

1. What AI tools can help small businesses do
2. Where workflows usually break
3. Common funding-readiness information
4. Documents business owners should organize
5. How to use public tools and checklists
6. What AI tools should not claim or decide
7. Next-step resource links

## Resources

- AI Agent Library
- Funding readiness checklist
- Automation workflow examples
- Content operations checklist
- Partner disclosure page

## CTA

Browse the resource hub

## Disclaimer

This workshop is educational and does not provide legal, tax, financial, credit-repair, or lending advice. No funding, credit, revenue, or approval outcome is guaranteed.
```

## Example 4 — Local Consultant Partner Profile

### Scenario

A local consultant wants a public-safe profile page to share AI workflow resources with small business clients.

### Profile Draft

```md
# Sample Local Consultant Profile

## Role

Local business consultant and AI workflow resource partner.

## Audience

Small business owners, local operators, service companies, and agencies.

## Region

Local market / remote support.

## Public Bio

[Partner Name] helps small business owners think through practical workflow improvements, resource organization, and AI tool adoption. This profile shares educational resources and public tools that may help operators identify next steps.

## Approved Resources

- AI Agent Library
- Automation Knowledge Base
- Content Ops Knowledge Base
- Funding Readiness Resource

## Primary CTA

Label: Browse AI business resources
URL: [approved URL]

## Disclosure

This profile may include affiliate or referral relationships.

## Restricted Claims

- No guaranteed business results.
- No guaranteed funding or credit outcomes.
- No claim that AI replaces professional review.

## Tracking Notes

Partner slug: sample_local_consultant
Campaign: local_ai_resources
```
```

---

## `knowledge-base/engineering-as-marketing/README.md`

```md id="engineering-as-marketing-kb-readme"
# Engineering-as-Marketing Knowledge Base

Public tools, calculators, widgets, directories, scorecards, templates, and conversion assets that create practical demand by helping users solve a real problem.

## Purpose

This knowledge base helps operators turn ideas into useful public tools and static assets that attract, qualify, educate, or convert users.

Use this folder to support:

- Public calculators
- Readiness scorecards
- Static widgets
- Interactive prompt generators
- AI tool directories
- Funding comparison tools
- Partner resource generators
- Lead magnet pages
- SEO-driven tools
- Static Vercel apps
- Custom GPT launch pages

## Primary Users

- AI product builders
- Static site builders
- Vercel app builders
- Funding operators
- Affiliate operators
- Content marketers
- SEO builders
- Partner managers
- Agencies
- Custom GPT builders

## Core Principle

Build useful things that sell without feeling like sales.

A strong engineering-as-marketing asset should:

- Solve one narrow problem
- Provide immediate value
- Produce a useful output
- Explain the next step
- Capture or route qualified interest where appropriate
- Work without unnecessary friction
- Avoid unsupported claims
- Be reusable across pages, GPTs, and campaigns

## Asset Types

### Calculator

Best for numerical planning, forecasting, or comparison.

Examples:

- Ad spend cash-flow calculator
- Safe ad spend estimator
- Funding payment estimator
- Inventory runway calculator
- Cash-gap calculator
- Partner commission estimator

Required fields:

- Inputs
- Formula assumptions
- Output metrics
- Disclaimer
- CTA
- Reset and copy/download behavior

### Scorecard

Best for readiness, fit, maturity, or risk evaluation.

Examples:

- Funding readiness scorecard
- Business credit setup scorecard
- CRM hygiene scorecard
- AI workflow readiness scorecard
- Partner enablement scorecard

Required fields:

- Question set
- Scoring logic
- Score bands
- Recommendations
- Disclaimer
- CTA

### Directory

Best for browsing structured resources.

Examples:

- Agent directory
- Skill catalog
- Partner provider directory
- Tool directory
- Prompt pack directory
- Template library

Required fields:

- Search
- Filters
- Categories
- Cards or table
- Data source
- CTA
- Empty state

### Generator

Best for creating reusable text, markdown, JSON, prompts, pages, or specs.

Examples:

- Prompt generator
- Skill builder
- Partner resource-card generator
- Schema starter generator
- Landing page copy generator
- Profile page generator

Required fields:

- Input form
- Output preview
- Copy button
- Download button
- Required field validation
- Public-safe guardrails

### Checklist

Best for procedural readiness.

Examples:

- Funding document checklist
- Partner launch checklist
- Vercel deployment checklist
- Custom GPT publishing checklist
- AI workflow audit checklist

Required fields:

- Task list
- Category grouping
- Completion tracking
- Export or copy option
- Next step

## Tool Spec Format

```md
# [Tool Name]

## Purpose

What problem the tool solves.

## User

Who uses the tool.

## Inputs

- Input 1
- Input 2

## Outputs

- Output 1
- Output 2

## Logic

Explain formulas, scoring, or generation logic.

## UX Requirements

- Requirement 1
- Requirement 2

## CTA

Primary:
Secondary:

## Safety / Disclaimer

What the tool must not claim.

## Suggested Files

- index.html
- styles.css
- script.js
- README.md
```

## CTA Strategy

Use CTAs that match the tool’s job.

Strong CTAs:

- Run the calculator
- Check readiness
- Generate prompt pack
- Build resource card
- Compare options
- Download template
- Browse related agents
- Start partner application
- View next steps

Weak CTAs:

- Learn more
- Submit
- Click here
- Get started with no context
- Apply now before education

## Public-Safe Rules

For funding, finance, business credit, legal, tax, or platform content:

- Do not promise approvals.
- Do not promise funding.
- Do not promise credit outcomes.
- Do not promise revenue.
- Do not promise ranking or traffic.
- Do not imply professional advice.
- Use educational and readiness language.
- Show assumptions.
- Explain limitations.
- Include human review where needed.

## Standard Engineering-as-Marketing Agent Output

```md
## Tool Summary

- Tool name:
- Audience:
- Problem solved:
- Asset type:
- Primary CTA:
- Secondary CTA:
- Risk level:

## Required Inputs

- Input 1
- Input 2

## Outputs

- Output 1
- Output 2

## Logic

Explain formulas, scoring, or generation rules.

## Recommended Files

- index.html
- styles.css
- script.js
- README.md

## Page Sections

- Hero
- How it works
- Tool interface
- Results
- Examples
- CTA
- Disclaimer
- FAQ

## Guardrails

- Guardrail 1
- Guardrail 2
```

## Related Repo Paths

```text
knowledge-base/engineering-as-marketing/
portfolio/vercel/
examples/content-ops/
examples/automation/
schemas/
prompt-generator.html
skill-builder.html
```

## Maintenance Checklist

- [ ] Tool specs solve a narrow problem.
- [ ] Inputs and outputs are clear.
- [ ] CTA matches user intent.
- [ ] Assumptions are documented.
- [ ] Public-safe rules are included.
- [ ] Examples are synthetic.
- [ ] Suggested files are repo-ready.
```

## `knowledge-base/engineering-as-marketing/index.json`

```json id="engineering-as-marketing-kb-index-json"
{
  "name": "Engineering-as-Marketing Knowledge Base",
  "slug": "engineering-as-marketing",
  "description": "Public tools, calculators, widgets, directories, scorecards, templates, and conversion assets that create practical demand by helping users solve a real problem.",
  "status": "draft",
  "visibility": "public-safe",
  "primary_users": [
    "AI product builders",
    "Static site builders",
    "Vercel app builders",
    "Funding operators",
    "Affiliate operators",
    "Content marketers",
    "SEO builders",
    "Partner managers",
    "Agencies",
    "Custom GPT builders"
  ],
  "asset_types": [
    {
      "type": "Calculator",
      "best_for": [
        "Numerical planning",
        "Forecasting",
        "Comparison",
        "Cash-flow modeling",
        "Payment estimating"
      ],
      "required_fields": [
        "Inputs",
        "Formula assumptions",
        "Output metrics",
        "Disclaimer",
        "CTA"
      ]
    },
    {
      "type": "Scorecard",
      "best_for": [
        "Readiness scoring",
        "Fit assessment",
        "Maturity evaluation",
        "Risk review"
      ],
      "required_fields": [
        "Question set",
        "Scoring logic",
        "Score bands",
        "Recommendations",
        "Disclaimer",
        "CTA"
      ]
    },
    {
      "type": "Directory",
      "best_for": [
        "Structured browsing",
        "Resource discovery",
        "Catalog filtering",
        "Comparison"
      ],
      "required_fields": [
        "Search",
        "Filters",
        "Categories",
        "Cards or table",
        "Data source",
        "CTA"
      ]
    },
    {
      "type": "Generator",
      "best_for": [
        "Prompt generation",
        "Markdown creation",
        "JSON creation",
        "Spec generation",
        "Resource-card creation"
      ],
      "required_fields": [
        "Input form",
        "Output preview",
        "Copy button",
        "Download button",
        "Field validation",
        "Guardrails"
      ]
    },
    {
      "type": "Checklist",
      "best_for": [
        "Procedural readiness",
        "Implementation tracking",
        "Launch preparation",
        "Audit workflows"
      ],
      "required_fields": [
        "Task list",
        "Category grouping",
        "Completion tracking",
        "Export option",
        "Next step"
      ]
    }
  ],
  "strong_ctas": [
    "Run the calculator",
    "Check readiness",
    "Generate prompt pack",
    "Build resource card",
    "Compare options",
    "Download template",
    "Browse related agents",
    "Start partner application",
    "View next steps"
  ],
  "weak_ctas": [
    "Learn more",
    "Submit",
    "Click here",
    "Get started with no context",
    "Apply now before education"
  ],
  "restricted_claims": [
    "Guaranteed approvals",
    "Guaranteed funding",
    "Guaranteed credit outcomes",
    "Guaranteed revenue",
    "Guaranteed ranking or traffic",
    "Professional advice replacement"
  ],
  "related_paths": [
    "knowledge-base/engineering-as-marketing/README.md",
    "knowledge-base/engineering-as-marketing/examples.md",
    "portfolio/vercel/README.md",
    "examples/content-ops/",
    "examples/automation/",
    "schemas/",
    "prompt-generator.html",
    "skill-builder.html"
  ]
}
```

## `knowledge-base/engineering-as-marketing/examples.md`

```md id="engineering-as-marketing-kb-examples"
# Engineering-as-Marketing Examples

These examples are synthetic and public-safe. They show how to turn business problems into static tools, calculators, directories, scorecards, and generators.

## Example 1 — Ad Spend Cash-Flow Calculator

### Tool Summary

```md
## Tool Summary

- Tool name: Ad Spend Cash-Flow Calculator
- Audience: Ecommerce operators and paid media teams
- Problem solved: Forecasts whether ad spend creates a short-term cash gap before revenue or payout catches up
- Asset type: Calculator
- Primary CTA: Run the Ad Spend Cash-Flow Calculator
- Secondary CTA: Compare Ecommerce Funding Options
- Risk level: Medium because finance-related language must avoid guaranteed funding or business results

## Required Inputs

- Daily ad spend
- Gross margin
- Average order value
- Conversion rate
- Payout delay
- Starting cash
- Inventory or fulfillment delay
- Forecast window

## Outputs

- Estimated revenue
- Estimated gross profit
- Cash gap timing
- Safe ad spend range
- Payout lag warning
- Suggested next steps

## Logic

The tool estimates cash timing based on ad spend, order value, margin, payout delay, and available starting cash. It should show assumptions clearly.

## Recommended Files

- index.html
- styles.css
- script.js
- README.md
- data/example-scenarios.json

## Page Sections

- Hero
- Calculator interface
- Results
- How it works
- Example scenario
- CTA
- Disclaimer
- FAQ

## Guardrails

- Do not guarantee revenue.
- Do not guarantee funding.
- Do not present projections as financial advice.
- Show assumptions.
- Encourage review before making spend decisions.
```

## Example 2 — Funding Readiness Scorecard

### Tool Summary

```md
## Tool Summary

- Tool name: Funding Readiness Scorecard
- Audience: Small business owners, brokers, referral partners
- Problem solved: Helps organize common readiness factors before a funding review
- Asset type: Scorecard
- Primary CTA: Check funding readiness
- Secondary CTA: View required documents
- Risk level: High because funding claims require careful wording

## Required Inputs

- Time in business
- Monthly revenue
- Bank statement availability
- Use of funds
- Credit band
- Recent NSFs
- Existing obligations
- Documentation readiness

## Outputs

- Readiness score
- Score band
- Missing documents
- Caution flags
- Suggested next step
- Public-safe summary

## Logic

Each answer adds or subtracts points from readiness bands. The score is educational and does not determine approval.

## Recommended Files

- funding-readiness.html
- funding-readiness.css
- funding-readiness.js
- README.md
- schema.json

## Page Sections

- Hero
- Scorecard form
- Results
- Common requirements
- Caution flags
- CTA
- Disclaimer
- FAQ

## Guardrails

- Do not claim approval.
- Do not claim funding.
- Do not call the score a lender decision.
- Use readiness language only.
- Require human review before routing.
```

## Example 3 — Partner Resource Card Generator

### Tool Summary

```md
## Tool Summary

- Tool name: Partner Resource Card Generator
- Audience: Partner managers, affiliates, brokers, referral agents
- Problem solved: Creates public-safe partner resource cards with CTAs, disclosures, and restricted claims
- Asset type: Generator
- Primary CTA: Build resource card
- Secondary CTA: Open partner enablement guide
- Risk level: Medium because partner and affiliate claims require disclosures

## Required Inputs

- Resource name
- Audience
- Problem solved
- Description
- Primary CTA label
- Primary CTA URL
- Secondary CTA label
- Secondary CTA URL
- Disclosure note
- Restricted claims
- Tracking slug

## Outputs

- Markdown resource card
- HTML card snippet
- Disclosure block
- Tracking notes
- Review checklist

## Logic

The generator formats the submitted information into a consistent public-safe resource-card structure.

## Recommended Files

- partner-resource-card-generator.html
- styles.css
- script.js
- README.md

## Page Sections

- Hero
- Generator form
- Output preview
- Copy/download buttons
- Disclosure rules
- Do-not-claim list
- CTA

## Guardrails

- Require disclosure if affiliate or referral compensation may exist.
- Do not allow blank CTA labels.
- Include restricted claims section.
- Keep private payout terms out of public output.
```

## Example 4 — AI Agent Directory

### Tool Summary

```md
## Tool Summary

- Tool name: AI Agent Directory
- Audience: AI builders, business operators, agencies, partner teams
- Problem solved: Helps users browse productized agents by category, buyer, pain solved, platform, and monetization path
- Asset type: Directory
- Primary CTA: Browse agents
- Secondary CTA: Submit an agent
- Risk level: Low to medium depending on agent categories

## Required Inputs

- Agent name
- Category
- Buyer
- Pain solved
- Monetization
- Platform
- File path
- Status
- Tags

## Outputs

- Filterable card catalog
- Search results
- Category pages
- Featured items
- New items
- Contribution path

## Logic

The directory loads a JSON index, renders cards, and supports search and filters in static JavaScript.

## Recommended Files

- agent-catalog.html
- categories.html
- tags.html
- search.html
- site-data/agents.fallback.json
- agent-index.json

## Page Sections

- Hero
- Search/filter toolbar
- Stats
- Cards
- Empty state
- Contribution CTA
- Footer

## Guardrails

- Do not display broken file paths.
- Do not imply every agent is production-ready.
- Show status where available.
- Link to contribution guidelines.
```

## Example 5 — Vercel Deployment Checklist

### Tool Summary

```md
## Tool Summary

- Tool name: Vercel Deployment Checklist
- Audience: Static site builders and repo operators
- Problem solved: Helps operators prepare static site files before pushing or enabling deployment
- Asset type: Checklist
- Primary CTA: Run deployment checklist
- Secondary CTA: View Vercel portfolio
- Risk level: Low

## Required Inputs

- Project name
- Repo path
- Root files
- Environment setting
- Deployment mode
- Primary domain
- Test URL
- Known risks

## Outputs

- Completion checklist
- Missing file warnings
- Deployment notes
- Rollback reminder
- Manual toggle reminder

## Logic

The checklist marks required deployment steps and flags missing information.

## Recommended Files

- deployment-checklist.html
- styles.css
- script.js
- README.md

## Page Sections

- Hero
- Checklist
- Deployment mode notes
- Vercel file rules
- Manual toggle notes
- CTA
- Disclaimer

## Guardrails

- Do not enable auto deployment by accident.
- Document whether deployment is intentionally disabled.
- Avoid editing unrelated Vercel projects.
- Check `vercel.json` before merge.
```
```

Batch 9 will be **Schemas**:

```text id="batch-9-list"
schemas/agent.schema.json
schemas/custom-gpt.schema.json
schemas/vercel-project.schema.json
schemas/funding-product.schema.json
schemas/webhook-event.schema.json
```


<!-- SOURCE: Batch 9 — Schemas.md -->

# Source Batch: Batch 9 — Schemas.md

# you asked

message time: 2026-06-18 12:50:47

Proceed (Batch 9)

---

# chatgpt response

## Batch 9 — Schemas

## `schemas/agent.schema.json`

```json id="agent-schema-json"
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ai-agent-library.local/schemas/agent.schema.json",
  "title": "AI Agent Library Agent Schema",
  "description": "Schema for productized AI agent specifications used across the AI Agent Library repo, static site, platform packs, and portfolio assets.",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "id",
    "name",
    "slug",
    "version",
    "status",
    "category",
    "audience",
    "problem_solved",
    "primary_job",
    "inputs",
    "outputs",
    "workflow",
    "guardrails",
    "files"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Stable unique identifier for the agent.",
      "pattern": "^[a-z0-9][a-z0-9-_]{2,120}$",
      "examples": [
        "funding-pipeline-triage-agent"
      ]
    },
    "name": {
      "type": "string",
      "description": "Human-readable agent name.",
      "minLength": 3,
      "maxLength": 140,
      "examples": [
        "Funding Pipeline Triage Agent"
      ]
    },
    "slug": {
      "type": "string",
      "description": "URL-safe slug used for file names, routes, and catalog filtering.",
      "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$",
      "examples": [
        "funding-pipeline-triage-agent"
      ]
    },
    "version": {
      "type": "string",
      "description": "Agent specification version.",
      "pattern": "^v?[0-9]+\\.[0-9]+\\.[0-9]+$",
      "examples": [
        "1.0.0"
      ]
    },
    "status": {
      "type": "string",
      "description": "Current lifecycle status.",
      "enum": [
        "idea",
        "draft",
        "ready",
        "in-review",
        "published",
        "needs-refresh",
        "deprecated",
        "archived"
      ]
    },
    "visibility": {
      "type": "string",
      "description": "Whether the agent is safe for public use or should remain internal.",
      "enum": [
        "public",
        "public-safe",
        "internal",
        "private",
        "restricted"
      ],
      "default": "public-safe"
    },
    "category": {
      "type": "string",
      "description": "Primary operating category.",
      "minLength": 2,
      "maxLength": 80,
      "examples": [
        "Funding Ops",
        "Partner Enablement",
        "Content Ops",
        "Automation",
        "Business Credit",
        "Static Sites"
      ]
    },
    "tags": {
      "type": "array",
      "description": "Cross-cutting discovery tags.",
      "items": {
        "type": "string",
        "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
      },
      "uniqueItems": true,
      "default": []
    },
    "audience": {
      "type": "object",
      "description": "Who the agent is for.",
      "additionalProperties": false,
      "required": [
        "primary_user",
        "secondary_users"
      ],
      "properties": {
        "primary_user": {
          "type": "string",
          "minLength": 2,
          "maxLength": 160,
          "examples": [
            "Funding brokers and intake operators"
          ]
        },
        "secondary_users": {
          "type": "array",
          "items": {
            "type": "string",
            "minLength": 2,
            "maxLength": 160
          },
          "default": []
        },
        "not_for": {
          "type": "array",
          "description": "Users or use cases the agent should not serve.",
          "items": {
            "type": "string"
          },
          "default": []
        }
      }
    },
    "problem_solved": {
      "type": "string",
      "description": "The main pain or operational problem this agent solves.",
      "minLength": 10,
      "maxLength": 600
    },
    "primary_job": {
      "type": "string",
      "description": "The core job the agent is expected to perform.",
      "minLength": 10,
      "maxLength": 600
    },
    "best_outcome": {
      "type": "string",
      "description": "The best practical result a user should get from the agent.",
      "maxLength": 600
    },
    "platform_targets": {
      "type": "array",
      "description": "Platforms where this agent can be packaged or deployed.",
      "items": {
        "type": "string",
        "enum": [
          "ChatGPT Custom GPT",
          "Claude Project",
          "Gemini Gem",
          "Notion",
          "n8n",
          "Vercel Static Site",
          "GitHub Repo",
          "Zapier",
          "Make",
          "HubSpot",
          "Google Workspace",
          "Other"
        ]
      },
      "uniqueItems": true,
      "default": []
    },
    "monetization": {
      "type": "object",
      "description": "How the agent could support revenue, lead generation, affiliate distribution, or internal productivity.",
      "additionalProperties": false,
      "properties": {
        "model": {
          "type": "string",
          "enum": [
            "free-resource",
            "lead-magnet",
            "affiliate",
            "subscription",
            "service-upsell",
            "internal-tool",
            "partner-enable",
            "sponsored",
            "other"
          ]
        },
        "primary_cta": {
          "type": "string",
          "maxLength": 180
        },
        "primary_cta_url": {
          "type": "string",
          "format": "uri"
        },
        "secondary_cta": {
          "type": "string",
          "maxLength": 180
        },
        "secondary_cta_url": {
          "type": "string",
          "format": "uri"
        },
        "notes": {
          "type": "string",
          "maxLength": 1000
        }
      }
    },
    "inputs": {
      "type": "array",
      "description": "Required or optional inputs the agent needs to produce useful output.",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/input_field"
      }
    },
    "outputs": {
      "type": "array",
      "description": "Structured outputs the agent should return.",
      "minItems": 1,
      "items": {
        "$ref": "#/$defs/output_field"
      }
    },
    "workflow": {
      "type": "array",
      "description": "Ordered steps the agent should follow.",
      "minItems": 1,
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "step",
          "name",
          "description"
        ],
        "properties": {
          "step": {
            "type": "integer",
            "minimum": 1
          },
          "name": {
            "type": "string",
            "minLength": 2,
            "maxLength": 120
          },
          "description": {
            "type": "string",
            "minLength": 5,
            "maxLength": 800
          },
          "requires_human_review": {
            "type": "boolean",
            "default": false
          }
        }
      }
    },
    "knowledge_sources": {
      "type": "array",
      "description": "Knowledge-base files, docs, schemas, or source folders used by the agent.",
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "title",
          "path",
          "source_type"
        ],
        "properties": {
          "title": {
            "type": "string",
            "maxLength": 180
          },
          "path": {
            "type": "string",
            "maxLength": 300
          },
          "source_type": {
            "type": "string",
            "enum": [
              "markdown",
              "json",
              "schema",
              "pdf",
              "doc",
              "spreadsheet",
              "notion",
              "google-drive",
              "github",
              "website",
              "other"
            ]
          },
          "visibility": {
            "type": "string",
            "enum": [
              "public",
              "public-safe",
              "internal",
              "private",
              "restricted"
            ],
            "default": "public-safe"
          }
        }
      },
      "default": []
    },
    "actions": {
      "type": "array",
      "description": "Optional external actions, APIs, connectors, or workflow calls the agent may use.",
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "name",
          "auth_type",
          "purpose"
        ],
        "properties": {
          "name": {
            "type": "string",
            "maxLength": 140
          },
          "auth_type": {
            "type": "string",
            "enum": [
              "none",
              "api-key",
              "oauth",
              "webhook",
              "manual",
              "unknown"
            ]
          },
          "purpose": {
            "type": "string",
            "maxLength": 500
          },
          "human_review_required": {
            "type": "boolean",
            "default": true
          },
          "schema_path": {
            "type": "string",
            "maxLength": 300
          }
        }
      },
      "default": []
    },
    "guardrails": {
      "type": "object",
      "description": "Safety, compliance, language, and data-use guardrails.",
      "additionalProperties": false,
      "required": [
        "restricted_claims",
        "required_disclaimers",
        "data_rules",
        "human_review_triggers"
      ],
      "properties": {
        "restricted_claims": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "required_disclaimers": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "data_rules": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "human_review_triggers": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        }
      }
    },
    "files": {
      "type": "object",
      "description": "Repo files connected to this agent.",
      "additionalProperties": false,
      "required": [
        "agent_spec"
      ],
      "properties": {
        "agent_spec": {
          "type": "string",
          "examples": [
            "agents/funding-pipeline-triage-agent.md"
          ]
        },
        "knowledge_files": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "schema_files": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "example_files": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "site_pages": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        }
      }
    },
    "metadata": {
      "type": "object",
      "description": "Maintenance and attribution metadata.",
      "additionalProperties": false,
      "properties": {
        "created_at": {
          "type": "string",
          "format": "date"
        },
        "updated_at": {
          "type": "string",
          "format": "date"
        },
        "last_reviewed_at": {
          "type": "string",
          "format": "date"
        },
        "owner": {
          "type": "string",
          "maxLength": 140
        },
        "reviewer": {
          "type": "string",
          "maxLength": 140
        },
        "source_repo": {
          "type": "string",
          "maxLength": 200
        },
        "notes": {
          "type": "string",
          "maxLength": 2000
        }
      }
    }
  },
  "$defs": {
    "input_field": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "name",
        "type",
        "required",
        "description"
      ],
      "properties": {
        "name": {
          "type": "string",
          "pattern": "^[a-z0-9_]+$"
        },
        "label": {
          "type": "string",
          "maxLength": 140
        },
        "type": {
          "type": "string",
          "enum": [
            "string",
            "number",
            "boolean",
            "date",
            "url",
            "email",
            "phone",
            "select",
            "multi_select",
            "array",
            "object",
            "file",
            "markdown",
            "json"
          ]
        },
        "required": {
          "type": "boolean"
        },
        "description": {
          "type": "string",
          "maxLength": 500
        },
        "allowed_values": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "example": {}
      }
    },
    "output_field": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "name",
        "format",
        "description"
      ],
      "properties": {
        "name": {
          "type": "string",
          "pattern": "^[a-z0-9_]+$"
        },
        "format": {
          "type": "string",
          "enum": [
            "markdown",
            "json",
            "html",
            "plain_text",
            "table",
            "checklist",
            "schema",
            "file",
            "other"
          ]
        },
        "description": {
          "type": "string",
          "maxLength": 500
        },
        "example": {}
      }
    }
  }
}
```

## `schemas/custom-gpt.schema.json`

```json id="custom-gpt-schema-json"
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ai-agent-library.local/schemas/custom-gpt.schema.json",
  "title": "Custom GPT Schema",
  "description": "Schema for documenting, packaging, reviewing, and publishing Custom GPTs derived from AI Agent Library agent specifications.",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "name",
    "slug",
    "status",
    "one_sentence_description",
    "who_it_is_for",
    "main_pain_solved",
    "best_outcome",
    "access",
    "configuration",
    "safety",
    "files"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "Published or draft GPT name.",
      "minLength": 3,
      "maxLength": 80,
      "examples": [
        "Ad Spend Cash Flow Calculator"
      ]
    },
    "slug": {
      "type": "string",
      "description": "URL-safe internal slug.",
      "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
    },
    "status": {
      "type": "string",
      "description": "GPT lifecycle status.",
      "enum": [
        "idea",
        "draft",
        "configured",
        "testing",
        "published",
        "needs-refresh",
        "deprecated",
        "archived"
      ]
    },
    "visibility": {
      "type": "string",
      "description": "GPT visibility or access model.",
      "enum": [
        "private",
        "link-only",
        "public",
        "internal",
        "restricted"
      ],
      "default": "link-only"
    },
    "one_sentence_description": {
      "type": "string",
      "description": "Short description suitable for catalog cards.",
      "minLength": 10,
      "maxLength": 220
    },
    "who_it_is_for": {
      "type": "array",
      "description": "Primary user groups.",
      "minItems": 1,
      "items": {
        "type": "string",
        "minLength": 2,
        "maxLength": 140
      }
    },
    "main_pain_solved": {
      "type": "string",
      "description": "The primary pain or job the GPT addresses.",
      "minLength": 10,
      "maxLength": 600
    },
    "best_outcome": {
      "type": "string",
      "description": "The best practical result the user should receive.",
      "minLength": 10,
      "maxLength": 600
    },
    "brand_vibe": {
      "type": "array",
      "description": "Tone, positioning, and visual direction.",
      "items": {
        "type": "string",
        "enum": [
          "premium",
          "playful",
          "minimal",
          "aggressive",
          "friendly",
          "technical",
          "operator-focused",
          "fintech",
          "educational",
          "other"
        ]
      },
      "uniqueItems": true,
      "default": []
    },
    "access": {
      "type": "object",
      "description": "Published GPT access details.",
      "additionalProperties": false,
      "required": [
        "url"
      ],
      "properties": {
        "url": {
          "type": "string",
          "description": "GPT access URL.",
          "format": "uri"
        },
        "pricing_or_access_note": {
          "type": "string",
          "maxLength": 400
        },
        "owner_account": {
          "type": "string",
          "maxLength": 140
        }
      }
    },
    "calls_to_action": {
      "type": "object",
      "description": "Primary and secondary CTAs connected to the GPT.",
      "additionalProperties": false,
      "properties": {
        "primary": {
          "$ref": "#/$defs/cta"
        },
        "secondary": {
          "$ref": "#/$defs/cta"
        },
        "tertiary": {
          "$ref": "#/$defs/cta"
        }
      }
    },
    "configuration": {
      "type": "object",
      "description": "Custom GPT configuration and build notes.",
      "additionalProperties": false,
      "required": [
        "instructions_summary",
        "conversation_starters",
        "capabilities",
        "knowledge_files"
      ],
      "properties": {
        "instructions_summary": {
          "type": "string",
          "description": "Short summary of the GPT instruction system.",
          "minLength": 10,
          "maxLength": 3000
        },
        "conversation_starters": {
          "type": "array",
          "description": "Starter prompts shown to users.",
          "minItems": 1,
          "maxItems": 8,
          "items": {
            "type": "string",
            "minLength": 4,
            "maxLength": 180
          }
        },
        "capabilities": {
          "type": "object",
          "description": "Configured GPT capabilities.",
          "additionalProperties": false,
          "properties": {
            "web_browsing": {
              "type": "boolean",
              "default": false
            },
            "code_interpreter": {
              "type": "boolean",
              "default": false
            },
            "image_generation": {
              "type": "boolean",
              "default": false
            },
            "canvas": {
              "type": "boolean",
              "default": false
            },
            "actions": {
              "type": "boolean",
              "default": false
            }
          }
        },
        "knowledge_files": {
          "type": "array",
          "description": "Knowledge files uploaded to the GPT or associated with its repo package.",
          "items": {
            "$ref": "#/$defs/knowledge_file"
          },
          "default": []
        },
        "actions": {
          "type": "array",
          "description": "GPT actions, API schemas, or connector-style calls.",
          "items": {
            "$ref": "#/$defs/action"
          },
          "default": []
        },
        "output_formats": {
          "type": "array",
          "description": "Expected output formats.",
          "items": {
            "type": "string",
            "enum": [
              "markdown",
              "json",
              "html",
              "csv",
              "table",
              "checklist",
              "plain_text",
              "file",
              "other"
            ]
          },
          "uniqueItems": true,
          "default": []
        }
      }
    },
    "safety": {
      "type": "object",
      "description": "Safety, claims, and review requirements.",
      "additionalProperties": false,
      "required": [
        "anything_it_should_not_claim",
        "required_disclaimers",
        "human_review_required_for"
      ],
      "properties": {
        "anything_it_should_not_claim": {
          "type": "array",
          "description": "Claims or statements the GPT must avoid.",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "required_disclaimers": {
          "type": "array",
          "description": "Disclaimers that should be surfaced in relevant outputs.",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "human_review_required_for": {
          "type": "array",
          "description": "Situations where human review is required.",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "restricted_data": {
          "type": "array",
          "description": "Data that should not be pasted into public examples or GPT outputs.",
          "items": {
            "type": "string"
          },
          "default": []
        }
      }
    },
    "files": {
      "type": "object",
      "description": "Repo package files for this GPT.",
      "additionalProperties": false,
      "properties": {
        "agent_spec": {
          "type": "string",
          "maxLength": 300
        },
        "instructions_file": {
          "type": "string",
          "maxLength": 300
        },
        "metadata_file": {
          "type": "string",
          "maxLength": 300
        },
        "knowledge_folder": {
          "type": "string",
          "maxLength": 300
        },
        "schema_files": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "site_pages": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        }
      }
    },
    "maintenance": {
      "type": "object",
      "description": "Review and maintenance metadata.",
      "additionalProperties": false,
      "properties": {
        "created_at": {
          "type": "string",
          "format": "date"
        },
        "last_reviewed_at": {
          "type": "string",
          "format": "date"
        },
        "next_review_due": {
          "type": "string",
          "format": "date"
        },
        "owner": {
          "type": "string",
          "maxLength": 140
        },
        "notes": {
          "type": "string",
          "maxLength": 2000
        }
      }
    }
  },
  "$defs": {
    "cta": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "label",
        "url"
      ],
      "properties": {
        "label": {
          "type": "string",
          "minLength": 2,
          "maxLength": 160
        },
        "url": {
          "type": "string",
          "format": "uri"
        },
        "purpose": {
          "type": "string",
          "maxLength": 400
        }
      }
    },
    "knowledge_file": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "title",
        "path"
      ],
      "properties": {
        "title": {
          "type": "string",
          "maxLength": 160
        },
        "path": {
          "type": "string",
          "maxLength": 300
        },
        "source_type": {
          "type": "string",
          "enum": [
            "markdown",
            "pdf",
            "docx",
            "csv",
            "json",
            "txt",
            "other"
          ],
          "default": "markdown"
        },
        "visibility": {
          "type": "string",
          "enum": [
            "public",
            "public-safe",
            "internal",
            "private",
            "restricted"
          ],
          "default": "public-safe"
        }
      }
    },
    "action": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "name",
        "auth_type",
        "purpose"
      ],
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 140
        },
        "auth_type": {
          "type": "string",
          "enum": [
            "none",
            "api-key",
            "oauth",
            "webhook",
            "connector",
            "manual"
          ]
        },
        "purpose": {
          "type": "string",
          "maxLength": 500
        },
        "schema_path": {
          "type": "string",
          "maxLength": 300
        },
        "human_review_required": {
          "type": "boolean",
          "default": true
        }
      }
    }
  }
}
```

## `schemas/vercel-project.schema.json`

```json id="vercel-project-schema-json"
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ai-agent-library.local/schemas/vercel-project.schema.json",
  "title": "Vercel Project Schema",
  "description": "Schema for tracking Vercel static sites, AI tools, calculators, directories, landing pages, and deployable AI Agent Library assets.",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "name",
    "slug",
    "status",
    "site_type",
    "repo",
    "deployment",
    "files",
    "owner"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "Human-readable Vercel project or site name.",
      "minLength": 2,
      "maxLength": 140
    },
    "slug": {
      "type": "string",
      "description": "URL-safe project slug.",
      "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
    },
    "status": {
      "type": "string",
      "description": "Current project status.",
      "enum": [
        "idea",
        "draft",
        "local",
        "preview",
        "production",
        "paused",
        "needs-refresh",
        "deprecated",
        "archived"
      ]
    },
    "site_type": {
      "type": "string",
      "description": "Primary site or deployable asset type.",
      "enum": [
        "static-site",
        "landing-page",
        "directory",
        "calculator",
        "scorecard",
        "generator",
        "portfolio",
        "documentation",
        "partner-page",
        "knowledge-base",
        "tool",
        "other"
      ]
    },
    "description": {
      "type": "string",
      "maxLength": 800
    },
    "audience": {
      "type": "array",
      "description": "Primary audiences for the project.",
      "items": {
        "type": "string",
        "maxLength": 140
      },
      "default": []
    },
    "repo": {
      "type": "object",
      "description": "GitHub source repository details.",
      "additionalProperties": false,
      "required": [
        "provider",
        "repository",
        "default_branch"
      ],
      "properties": {
        "provider": {
          "type": "string",
          "enum": [
            "github",
            "gitlab",
            "bitbucket",
            "manual",
            "other"
          ],
          "default": "github"
        },
        "repository": {
          "type": "string",
          "description": "Repository in owner/name format when applicable.",
          "pattern": "^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$",
          "examples": [
            "JFeimster/ai-agent-library"
          ]
        },
        "repo_url": {
          "type": "string",
          "format": "uri"
        },
        "default_branch": {
          "type": "string",
          "default": "main"
        },
        "local_path": {
          "type": "string",
          "maxLength": 500
        }
      }
    },
    "deployment": {
      "type": "object",
      "description": "Vercel deployment configuration and current URLs.",
      "additionalProperties": false,
      "required": [
        "deployment_mode",
        "auto_deploy_enabled"
      ],
      "properties": {
        "vercel_project_id": {
          "type": "string",
          "pattern": "^prj_[A-Za-z0-9]+$"
        },
        "vercel_team_id": {
          "type": "string",
          "pattern": "^team_[A-Za-z0-9]+$"
        },
        "deployment_mode": {
          "type": "string",
          "enum": [
            "manual",
            "git-auto",
            "disabled",
            "unknown"
          ]
        },
        "auto_deploy_enabled": {
          "type": "boolean",
          "description": "Whether Git-triggered auto deployments are enabled."
        },
        "production_url": {
          "type": "string",
          "format": "uri"
        },
        "preview_url": {
          "type": "string",
          "format": "uri"
        },
        "custom_domains": {
          "type": "array",
          "items": {
            "type": "string",
            "pattern": "^[a-z0-9.-]+\\.[a-z]{2,}$"
          },
          "default": []
        },
        "last_deployment_url": {
          "type": "string",
          "format": "uri"
        },
        "last_deployed_at": {
          "type": "string",
          "format": "date-time"
        },
        "vercel_json": {
          "type": "object",
          "description": "Important deployment controls from vercel.json.",
          "additionalProperties": true,
          "properties": {
            "cleanUrls": {
              "type": "boolean"
            },
            "trailingSlash": {
              "type": "boolean"
            },
            "git": {
              "type": "object",
              "additionalProperties": true,
              "properties": {
                "deploymentEnabled": {
                  "type": "boolean"
                }
              }
            }
          }
        }
      }
    },
    "files": {
      "type": "object",
      "description": "Core project file inventory.",
      "additionalProperties": false,
      "required": [
        "root_files"
      ],
      "properties": {
        "root_files": {
          "type": "array",
          "description": "Root files required by the static site.",
          "items": {
            "type": "string"
          },
          "default": [
            "index.html",
            "styles.css",
            "script.js"
          ]
        },
        "pages": {
          "type": "array",
          "description": "Static HTML pages.",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "data_files": {
          "type": "array",
          "description": "JSON, CSV, or other data files.",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "asset_files": {
          "type": "array",
          "description": "Images, icons, downloads, or other static assets.",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "config_files": {
          "type": "array",
          "description": "Deployment or repo config files.",
          "items": {
            "type": "string"
          },
          "default": []
        }
      }
    },
    "environment": {
      "type": "object",
      "description": "Environment variable and secret handling notes.",
      "additionalProperties": false,
      "properties": {
        "requires_env_vars": {
          "type": "boolean",
          "default": false
        },
        "env_vars": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/env_var"
          },
          "default": []
        },
        "secret_policy": {
          "type": "string",
          "description": "Rules for secrets, tokens, and API keys.",
          "maxLength": 1000
        }
      }
    },
    "ctas": {
      "type": "array",
      "description": "Primary site CTAs.",
      "items": {
        "$ref": "#/$defs/cta"
      },
      "default": []
    },
    "analytics": {
      "type": "object",
      "description": "Analytics and tracking configuration.",
      "additionalProperties": false,
      "properties": {
        "enabled": {
          "type": "boolean",
          "default": false
        },
        "provider": {
          "type": "string",
          "enum": [
            "none",
            "vercel-analytics",
            "google-analytics",
            "plausible",
            "posthog",
            "custom",
            "other"
          ],
          "default": "none"
        },
        "events": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "privacy_note": {
          "type": "string",
          "maxLength": 800
        }
      }
    },
    "safety": {
      "type": "object",
      "description": "Public-safe language, legal, privacy, and deployment guardrails.",
      "additionalProperties": false,
      "properties": {
        "requires_legal_pages": {
          "type": "boolean",
          "default": true
        },
        "restricted_claims": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "required_disclaimers": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "data_policy_notes": {
          "type": "string",
          "maxLength": 1200
        }
      }
    },
    "owner": {
      "type": "object",
      "description": "Project ownership and maintenance.",
      "additionalProperties": false,
      "required": [
        "name"
      ],
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 140
        },
        "email": {
          "type": "string",
          "format": "email"
        },
        "github": {
          "type": "string",
          "maxLength": 140
        }
      }
    },
    "maintenance": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "created_at": {
          "type": "string",
          "format": "date"
        },
        "last_reviewed_at": {
          "type": "string",
          "format": "date"
        },
        "next_review_due": {
          "type": "string",
          "format": "date"
        },
        "notes": {
          "type": "string",
          "maxLength": 2000
        }
      }
    }
  },
  "$defs": {
    "env_var": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "name",
        "required",
        "scope",
        "secret"
      ],
      "properties": {
        "name": {
          "type": "string",
          "pattern": "^[A-Z0-9_]+$"
        },
        "required": {
          "type": "boolean"
        },
        "scope": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "development",
              "preview",
              "production"
            ]
          },
          "uniqueItems": true
        },
        "secret": {
          "type": "boolean"
        },
        "description": {
          "type": "string",
          "maxLength": 500
        }
      }
    },
    "cta": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "label",
        "url",
        "placement"
      ],
      "properties": {
        "label": {
          "type": "string",
          "minLength": 2,
          "maxLength": 160
        },
        "url": {
          "type": "string",
          "format": "uri"
        },
        "placement": {
          "type": "string",
          "enum": [
            "hero",
            "footer",
            "card",
            "navigation",
            "form",
            "results",
            "other"
          ]
        },
        "purpose": {
          "type": "string",
          "maxLength": 400
        }
      }
    }
  }
}
```

## `schemas/funding-product.schema.json`

```json id="funding-product-schema-json"
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ai-agent-library.local/schemas/funding-product.schema.json",
  "title": "Funding Product Schema",
  "description": "Schema for public-safe and internal funding product references used in AI Agent Library funding knowledge bases, partner resources, directories, and routing assets.",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "product_name",
    "slug",
    "provider",
    "status",
    "visibility",
    "category",
    "funding_type",
    "borrower_profile",
    "requirements",
    "public_safe_language",
    "restricted_claims"
  ],
  "properties": {
    "product_name": {
      "type": "string",
      "description": "Human-readable funding product or product-family name.",
      "minLength": 2,
      "maxLength": 160
    },
    "slug": {
      "type": "string",
      "description": "URL-safe product slug.",
      "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
    },
    "provider": {
      "type": "object",
      "description": "Provider or partner reference.",
      "additionalProperties": false,
      "required": [
        "name",
        "relationship"
      ],
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 160
        },
        "relationship": {
          "type": "string",
          "enum": [
            "direct",
            "affiliate",
            "referral",
            "broker",
            "marketplace",
            "white-label",
            "internal",
            "listed-resource",
            "unknown"
          ]
        },
        "public_name": {
          "type": "string",
          "description": "Public-safe provider name if different from internal name.",
          "maxLength": 160
        },
        "provider_url": {
          "type": "string",
          "format": "uri"
        },
        "disclosure": {
          "type": "string",
          "maxLength": 800
        }
      }
    },
    "status": {
      "type": "string",
      "description": "Current status of the product reference.",
      "enum": [
        "active",
        "draft",
        "in-review",
        "paused",
        "needs-refresh",
        "deprecated",
        "archived"
      ]
    },
    "visibility": {
      "type": "string",
      "description": "Whether this product detail can be public or must remain internal.",
      "enum": [
        "public",
        "public-safe",
        "internal",
        "private",
        "restricted"
      ],
      "default": "public-safe"
    },
    "category": {
      "type": "string",
      "description": "Broad product category.",
      "enum": [
        "Business",
        "Real Estate",
        "Personal",
        "Startup",
        "Ecommerce",
        "Equipment",
        "Marketplace",
        "Other"
      ]
    },
    "funding_type": {
      "type": "string",
      "description": "Primary funding type.",
      "enum": [
        "Term Loan",
        "Revenue Advance",
        "Revenue Based",
        "Business Line of Credit",
        "Revolving Line",
        "Installment Loan",
        "Asset Backed",
        "Equipment Finance",
        "Real Estate Capital",
        "Mortgage",
        "Hard Money",
        "Bridge",
        "Factoring",
        "Invoice Advance",
        "Credit Card",
        "Unsecured Line",
        "Equity",
        "Service",
        "Other"
      ]
    },
    "summary": {
      "type": "string",
      "description": "Public-safe product summary.",
      "maxLength": 1000
    },
    "borrower_profile": {
      "type": "object",
      "description": "Borrower or business profile this product may fit.",
      "additionalProperties": false,
      "required": [
        "best_for"
      ],
      "properties": {
        "best_for": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "minItems": 1
        },
        "not_best_for": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "business_stage": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "startup",
              "early-stage",
              "active-revenue",
              "established",
              "real-estate-investor",
              "ecommerce-seller",
              "equipment-buyer",
              "unknown"
            ]
          },
          "default": []
        },
        "credit_tiers": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "Excellent",
              "Good",
              "Fair",
              "Subprime",
              "No Credit Focus",
              "N/A",
              "Unknown"
            ]
          },
          "default": []
        }
      }
    },
    "requirements": {
      "type": "object",
      "description": "Common requirements, ranges, and documentation. These are not guarantees.",
      "additionalProperties": false,
      "required": [
        "documents"
      ],
      "properties": {
        "minimum_time_in_business_months": {
          "type": "integer",
          "minimum": 0
        },
        "minimum_monthly_revenue": {
          "type": "number",
          "minimum": 0
        },
        "minimum_credit_score": {
          "type": "integer",
          "minimum": 300,
          "maximum": 850
        },
        "funding_amount_min": {
          "type": "number",
          "minimum": 0
        },
        "funding_amount_max": {
          "type": "number",
          "minimum": 0
        },
        "estimated_time_to_funding": {
          "type": "string",
          "maxLength": 120,
          "examples": [
            "24–48 Hours",
            "1–3 Days",
            "2–4 Weeks"
          ]
        },
        "documents": {
          "type": "array",
          "description": "Typical document requests.",
          "items": {
            "type": "string"
          },
          "minItems": 1
        },
        "common_disqualifiers": {
          "type": "array",
          "description": "Common caution or disqualification flags.",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "notes": {
          "type": "string",
          "maxLength": 1500
        }
      }
    },
    "pricing_terms": {
      "type": "object",
      "description": "Public-safe pricing or term notes when approved for use.",
      "additionalProperties": false,
      "properties": {
        "term_range": {
          "type": "string",
          "maxLength": 160
        },
        "repayment_frequency": {
          "type": "string",
          "enum": [
            "daily",
            "weekly",
            "biweekly",
            "monthly",
            "draw-based",
            "on-sale",
            "on-payout",
            "varies",
            "unknown",
            "not-applicable"
          ]
        },
        "cost_description": {
          "type": "string",
          "maxLength": 600
        },
        "public_safe": {
          "type": "boolean",
          "description": "Whether these term notes are approved for public display.",
          "default": false
        }
      }
    },
    "routing": {
      "type": "object",
      "description": "Internal routing notes for agent workflows.",
      "additionalProperties": false,
      "properties": {
        "primary_product_family": {
          "type": "string",
          "enum": [
            "startup-credit-leverage",
            "revenue-advance-fast-capital",
            "business-line-revolving",
            "structured-growth-loan",
            "equipment-asset-finance",
            "real-estate-capital",
            "marketplace-ecommerce-capital",
            "other"
          ]
        },
        "intake_questions": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "routing_notes": {
          "type": "string",
          "maxLength": 1500
        },
        "human_review_required": {
          "type": "boolean",
          "default": true
        }
      }
    },
    "public_safe_language": {
      "type": "array",
      "description": "Approved language patterns for public descriptions.",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "default": [
        "May be a fit",
        "Common requirements",
        "Potential options",
        "Funding readiness",
        "Provider review required"
      ]
    },
    "restricted_claims": {
      "type": "array",
      "description": "Claims this product reference must not make.",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "default": [
        "Guaranteed approval",
        "Guaranteed funding",
        "Everyone qualifies",
        "Lowest rate guaranteed"
      ]
    },
    "disclaimers": {
      "type": "array",
      "description": "Required disclaimers for public use.",
      "items": {
        "type": "string"
      },
      "default": []
    },
    "related_assets": {
      "type": "object",
      "description": "Related repo assets.",
      "additionalProperties": false,
      "properties": {
        "knowledge_base_paths": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "example_paths": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "site_pages": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        },
        "schema_paths": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        }
      }
    },
    "maintenance": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "created_at": {
          "type": "string",
          "format": "date"
        },
        "last_reviewed_at": {
          "type": "string",
          "format": "date"
        },
        "reviewed_by": {
          "type": "string",
          "maxLength": 140
        },
        "source": {
          "type": "string",
          "maxLength": 300
        },
        "notes": {
          "type": "string",
          "maxLength": 2000
        }
      }
    }
  }
}
```

## `schemas/webhook-event.schema.json`

```json id="webhook-event-schema-json"
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ai-agent-library.local/schemas/webhook-event.schema.json",
  "title": "Webhook Event Schema",
  "description": "Schema for public-safe webhook event examples, automation payloads, CRM triggers, partner events, content workflow events, and review-queue events.",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "event_id",
    "event_type",
    "source",
    "version",
    "environment",
    "created_at",
    "payload"
  ],
  "properties": {
    "event_id": {
      "type": "string",
      "description": "Unique event identifier.",
      "pattern": "^[a-zA-Z0-9][a-zA-Z0-9-_:.]{6,160}$",
      "examples": [
        "evt_partner_lead_001"
      ]
    },
    "event_type": {
      "type": "string",
      "description": "Event name using dot notation.",
      "pattern": "^[a-z0-9]+(?:[._-][a-z0-9]+)+$",
      "examples": [
        "partner.lead_referred",
        "lead.status_changed",
        "document.missing",
        "content.brief_created",
        "webhook.received"
      ]
    },
    "source": {
      "type": "string",
      "description": "System, form, connector, app, or page that generated the event.",
      "minLength": 2,
      "maxLength": 140,
      "examples": [
        "partner_form",
        "static_site",
        "crm",
        "notion",
        "hubspot",
        "n8n"
      ]
    },
    "version": {
      "type": "string",
      "description": "Payload schema version.",
      "pattern": "^v?[0-9]+\\.[0-9]+\\.[0-9]+$",
      "examples": [
        "1.0.0"
      ]
    },
    "environment": {
      "type": "string",
      "description": "Execution environment.",
      "enum": [
        "local",
        "development",
        "preview",
        "production",
        "sandbox",
        "test"
      ]
    },
    "created_at": {
      "type": "string",
      "description": "Event creation timestamp.",
      "format": "date-time"
    },
    "received_at": {
      "type": "string",
      "description": "Webhook receiver timestamp.",
      "format": "date-time"
    },
    "actor": {
      "type": "object",
      "description": "User, partner, system, or service that initiated the event.",
      "additionalProperties": false,
      "properties": {
        "actor_type": {
          "type": "string",
          "enum": [
            "user",
            "partner",
            "admin",
            "system",
            "automation",
            "api",
            "unknown"
          ]
        },
        "actor_id": {
          "type": "string",
          "maxLength": 160
        },
        "name": {
          "type": "string",
          "maxLength": 160
        },
        "email": {
          "type": "string",
          "format": "email"
        },
        "partner_slug": {
          "type": "string",
          "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
        }
      }
    },
    "payload": {
      "type": "object",
      "description": "Event-specific data. Public examples must be synthetic and must not include secrets or private records.",
      "additionalProperties": true
    },
    "metadata": {
      "type": "object",
      "description": "Optional routing, trace, attribution, and correlation metadata.",
      "additionalProperties": false,
      "properties": {
        "correlation_id": {
          "type": "string",
          "maxLength": 160
        },
        "request_id": {
          "type": "string",
          "maxLength": 160
        },
        "session_id": {
          "type": "string",
          "maxLength": 160
        },
        "ip_address_redacted": {
          "type": "boolean",
          "default": true
        },
        "user_agent": {
          "type": "string",
          "maxLength": 500
        },
        "source_url": {
          "type": "string",
          "format": "uri"
        },
        "utm_source": {
          "type": "string",
          "maxLength": 160
        },
        "utm_medium": {
          "type": "string",
          "maxLength": 160
        },
        "utm_campaign": {
          "type": "string",
          "maxLength": 160
        },
        "tags": {
          "type": "array",
          "items": {
            "type": "string",
            "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
          },
          "uniqueItems": true,
          "default": []
        }
      }
    },
    "security": {
      "type": "object",
      "description": "Signature, validation, and security status. Do not expose secrets.",
      "additionalProperties": false,
      "properties": {
        "signature_verified": {
          "type": "boolean"
        },
        "signature_algorithm": {
          "type": "string",
          "enum": [
            "none",
            "hmac-sha256",
            "hmac-sha512",
            "jwt",
            "oauth",
            "other"
          ],
          "default": "none"
        },
        "auth_type": {
          "type": "string",
          "enum": [
            "none",
            "api-key",
            "oauth",
            "bearer-token",
            "basic",
            "hmac",
            "other"
          ],
          "default": "none"
        },
        "contains_sensitive_data": {
          "type": "boolean",
          "default": false
        },
        "redaction_required": {
          "type": "boolean",
          "default": false
        },
        "validation_errors": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": []
        }
      }
    },
    "processing": {
      "type": "object",
      "description": "How the automation receiver should process the event.",
      "additionalProperties": false,
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "received",
            "validated",
            "queued",
            "processing",
            "completed",
            "failed",
            "rejected",
            "quarantined",
            "ignored"
          ]
        },
        "priority": {
          "type": "string",
          "enum": [
            "low",
            "normal",
            "high",
            "urgent"
          ],
          "default": "normal"
        },
        "human_review_required": {
          "type": "boolean",
          "default": true
        },
        "review_reason": {
          "type": "string",
          "maxLength": 800
        },
        "retry_count": {
          "type": "integer",
          "minimum": 0,
          "default": 0
        },
        "max_retries": {
          "type": "integer",
          "minimum": 0,
          "default": 3
        },
        "next_retry_at": {
          "type": "string",
          "format": "date-time"
        },
        "destination": {
          "type": "string",
          "maxLength": 200,
          "examples": [
            "crm",
            "review_queue",
            "notion_database",
            "email_draft",
            "slack_alert"
          ]
        },
        "actions_taken": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/action_taken"
          },
          "default": []
        },
        "errors": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/error"
          },
          "default": []
        }
      }
    },
    "data_policy": {
      "type": "object",
      "description": "Data handling notes for public examples and production workflows.",
      "additionalProperties": false,
      "properties": {
        "example_is_synthetic": {
          "type": "boolean",
          "default": true
        },
        "allowed_for_public_repo": {
          "type": "boolean",
          "default": false
        },
        "restricted_fields": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "default": [
            "api_key",
            "access_token",
            "password",
            "bank_account",
            "tax_id",
            "credit_report",
            "private_client_record"
          ]
        },
        "notes": {
          "type": "string",
          "maxLength": 1200
        }
      }
    }
  },
  "$defs": {
    "action_taken": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "action",
        "status",
        "timestamp"
      ],
      "properties": {
        "action": {
          "type": "string",
          "maxLength": 160
        },
        "status": {
          "type": "string",
          "enum": [
            "completed",
            "failed",
            "skipped",
            "queued",
            "requires-review"
          ]
        },
        "timestamp": {
          "type": "string",
          "format": "date-time"
        },
        "details": {
          "type": "string",
          "maxLength": 800
        }
      }
    },
    "error": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "code",
        "message"
      ],
      "properties": {
        "code": {
          "type": "string",
          "maxLength": 120
        },
        "message": {
          "type": "string",
          "maxLength": 800
        },
        "recoverable": {
          "type": "boolean",
          "default": true
        }
      }
    }
  }
}
```

Batch 10 will be **Roadmap Markdown files**:

```text id="batch-10-list"
roadmap/phase-1-fast-mvp.md
roadmap/phase-2-distribution-system.md
roadmap/phase-3-marketplace-layer.md
roadmap/phase-4-platform-layer.md
```


<!-- SOURCE: Batch 10 — Roadmap Markdown Files.md -->

# Source Batch: Batch 10 — Roadmap Markdown Files.md

# you asked

message time: 2026-06-18 12:59:56

Proced (Batch 10)

---

# chatgpt response

## Batch 10 — Roadmap Markdown Files

## `roadmap/phase-1-fast-mvp.md`

```md id="phase-1-fast-mvp-md"
# Phase 1 — Fast MVP

## Purpose

Build the first usable version of AI Agent Library as a static, browseable, repo-managed resource hub.

Phase 1 turns the repo from a collection of agent ideas into a usable public-facing site with:

- Root landing page
- Agent discovery
- Skill discovery
- Category browsing
- Search pages
- Legal and trust pages
- Basic data files
- Knowledge-base starter folders
- Schema foundation
- Static-first deployment readiness

## Strategic Goal

Create a working MVP that can be opened locally, pushed to GitHub, deployed to Vercel, and used as the foundation for every future agent, skill, prompt, template, and partner asset.

## Success Criteria

Phase 1 is complete when:

- [ ] `index.html` exists and acts as the site homepage.
- [ ] `styles.css` exists and styles all core site pages.
- [ ] `script.js` exists and handles shared browser-side helpers.
- [ ] Core directory pages exist.
- [ ] Skills library pages exist.
- [ ] Legal and trust pages exist.
- [ ] Basic fallback data files exist.
- [ ] Pages open without a build step.
- [ ] Pages do not require React, Next.js, npm, or a backend.
- [ ] Navigation does not point to dead core pages.
- [ ] Public-safe language is used on funding, business-credit, legal, and partner pages.

## Included Site Files

```text
index.html
styles.css
script.js
```

## Directory & Discovery Pages

```text
agent-catalog.html
categories.html
tags.html
search.html
featured.html
new.html
```

## Skills Library Pages

```text
skill-catalog.html
skill-categories.html
top-skills.html
skill-builder.html
```

## Legal & Trust Pages

```text
terms.html
privacy.html
disclaimer.html
affiliate-disclosure.html
data-policy.html
```

## Starter Knowledge-Base Folders

```text
knowledge-base/
  funding/
  partner-enablement/
  crm/
  content-ops/
  automation/
  local-referrals/
  engineering-as-marketing/
```

## Starter Schema Files

```text
schemas/
  agent.schema.json
  custom-gpt.schema.json
  vercel-project.schema.json
  funding-product.schema.json
  webhook-event.schema.json
```

## Starter Example Folders

```text
examples/
  funding/
  partner-enablement/
  content-ops/
  automation/
```

## Starter Portfolio Folders

```text
portfolio/
  vercel/
  custom-gpts/
  gemini-gems/
  flash-ui/
```

## Recommended Page Hierarchy

```text
Home
├── Agent Catalog
├── Skill Catalog
├── Categories
├── Tags
├── Search
├── Featured
├── New
├── Platforms
├── Knowledge Bases
├── Portfolio
├── Roadmap
├── Partners
└── Legal / Trust
```

## MVP Navigation Rules

Primary navigation should include:

```text
Home
Agents
Skills
Categories
Platforms
Knowledge
Portfolio
Roadmap
Search
```

Footer navigation should include:

```text
Terms
Privacy
Data Policy
Affiliate Disclosure
Contribute
```

Optional secondary navigation should include:

```text
Featured
New
Tags
Partners
Get Started
Team
Profile
Changelog
```

## Technical Requirements

Phase 1 must remain static-first.

Use:

- Plain HTML
- Plain CSS
- Plain JavaScript
- JSON data files
- Markdown documentation files
- No required build step

Avoid:

- React
- Next.js
- Tailwind build process
- Node dependency lock-in
- Server-only routes
- Private API calls
- Exposed secrets
- Hard-coded private credentials

## Root File Requirements

### `index.html`

Must include:

- Clear H1
- Site positioning
- Directory entry points
- Agent catalog CTA
- Skill catalog CTA
- Knowledge-base CTA
- Platform/portfolio links
- Trust/footer links

### `styles.css`

Must include:

- Global variables
- Layout styles
- Header/nav
- Hero sections
- Cards
- Buttons
- Forms
- Tables
- Stat rows
- Timeline
- Footer
- Responsive behavior

### `script.js`

Must include:

- Shared JSON fetch helper
- HTML escaping helper
- Date/year helper
- Agent normalization helper
- Skill normalization helper
- Small reusable utility functions

## Static Data Requirements

Minimum useful data files:

```text
site-data/
  agents.fallback.json
  skills.fallback.json
  categories.json
  tags.json
  featured.json
  changelog.json
```

Recommended additional data files:

```text
site-data/
  partners.json
  team.json
  platforms.json
  portfolio.json
  roadmap.json
```

## Content Requirements

The MVP should clearly explain:

- What AI Agent Library is
- Who it is for
- What agents are
- What skills are
- How knowledge bases support agents
- How schemas structure assets
- How portfolio folders track deployments
- How partners and affiliates fit into the system
- What the library does not guarantee

## Public-Safe Language Requirements

Funding, business-credit, partner, affiliate, and finance-related content must use careful language.

Use:

- Educational
- Readiness
- Common requirements
- Possible fit
- Review required
- Potential options
- Next steps
- Public-safe resource

Avoid:

- Guaranteed funding
- Guaranteed approval
- Guaranteed credit outcomes
- Guaranteed revenue
- Guaranteed rankings
- Everyone qualifies
- No risk
- No documents needed
- AI replaces professional review

## MVP Acceptance Checklist

### Site

- [ ] Homepage opens.
- [ ] Navigation works.
- [ ] Footer links work.
- [ ] Core pages use consistent header/footer.
- [ ] Responsive layout works on mobile.
- [ ] Cards and tables are readable.
- [ ] No broken local CSS/JS references.

### Data

- [ ] Fallback JSON files are valid.
- [ ] Dynamic pages degrade gracefully.
- [ ] Search/filter pages show empty states.
- [ ] Categories and tags render from data or fallback lists.

### Knowledge

- [ ] Each knowledge-base folder has a `README.md`.
- [ ] Each knowledge-base folder has an `index.json`.
- [ ] Each knowledge-base folder has an `examples.md`.
- [ ] Public-safe rules are included where needed.

### Schemas

- [ ] Schema files are valid JSON.
- [ ] Required fields are documented.
- [ ] Schema descriptions are clear.
- [ ] Restricted claims and data rules are included where relevant.

### Trust

- [ ] Terms page exists.
- [ ] Privacy page exists.
- [ ] Disclaimer page exists.
- [ ] Affiliate disclosure page exists.
- [ ] Data policy page exists.
- [ ] High-risk claims are avoided.

## Recommended GitHub Issue

```md
# Phase 1 — Fast MVP

## Goal

Create the first complete static version of AI Agent Library with root pages, discovery pages, skill pages, legal/trust pages, starter data files, schemas, knowledge-base folders, portfolio folders, and examples.

## Deliverables

- [ ] Root site files
- [ ] Directory/discovery pages
- [ ] Skills library pages
- [ ] Legal/trust pages
- [ ] Knowledge-base starter folders
- [ ] Portfolio starter folders
- [ ] Schema files
- [ ] Roadmap files
- [ ] Example folders
- [ ] Static data files

## Acceptance Criteria

- [ ] Site opens locally without a build step.
- [ ] All core navigation links resolve.
- [ ] Public-safe language reviewed.
- [ ] JSON files validate.
- [ ] Schema files validate.
- [ ] No private data or secrets included.
```

## Recommended PR Title

```text
Add AI Agent Library static MVP
```

## Recommended PR Summary

```md
## Summary

Adds the first complete static site layer for AI Agent Library.

## Included

- Root static files: `index.html`, `styles.css`, `script.js`
- Directory and discovery pages
- Skills library pages
- Legal and trust pages
- Knowledge-base starter folders
- Portfolio starter folders
- Schema files
- Roadmap files
- Example folders
- Static fallback data

## Validation

- Static pages open without a build step.
- Core navigation links resolve.
- Public-safe funding, business-credit, partner, and affiliate language reviewed.
- No secrets or private data included.
```

## Phase 1 Risks

| Risk | Mitigation |
|---|---|
| Too many pages created without nav discipline | Use shared nav and footer rules |
| Old pages reference `style.css` while new pages use `styles.css` | Add alias file or update references |
| Dynamic pages fail if data files are missing | Use fallback arrays and empty states |
| Funding content makes unsafe claims | Use readiness and review language |
| Partner pages omit disclosures | Link affiliate disclosure in footer and partner pages |
| Repo becomes cluttered | Use folder discipline and clear README files |

## Phase 1 Done Means

The repo has a usable public static site foundation and a clear structure for future agents, skills, knowledge bases, schemas, examples, platform packs, partner pages, and portfolio assets.
```

---

## `roadmap/phase-2-distribution-system.md`

```md id="phase-2-distribution-system-md"
# Phase 2 — Distribution System

## Purpose

Turn AI Agent Library from a static resource hub into a distribution engine.

Phase 2 adds partner, affiliate, referral, broker, ISO, consultant, and strategic partner infrastructure so resources can be shared, attributed, and reused across audiences.

## Strategic Goal

Create a partner-ready distribution layer that lets the library support:

- Affiliate recruitment
- Referral partner onboarding
- Broker resource enablement
- Partner profile pages
- Provider/resource directories
- Tracked CTAs
- Partner-safe resource cards
- Local referral campaigns
- Strategic partner campaigns

## Success Criteria

Phase 2 is complete when:

- [ ] `get-started.html` exists as a partner recruitment page.
- [ ] `partners.html` exists as a provider/resource directory shell.
- [ ] `team.html` exists as a partner/team profile directory.
- [ ] `profile.html` exists as a reusable partner profile template.
- [ ] Partner enablement knowledge base is populated.
- [ ] Local referrals knowledge base is populated.
- [ ] Affiliate disclosure is linked from all partner-facing pages.
- [ ] Partner language avoids guarantees and unsupported claims.
- [ ] Tracked CTA rules are documented.
- [ ] Resource card templates are available.
- [ ] Partner examples are synthetic and public-safe.

## Included Pages

```text
get-started.html
partners.html
team.html
profile.html
affiliate-disclosure.html
```

## Included Knowledge Bases

```text
knowledge-base/
  partner-enablement/
    README.md
    index.json
    examples.md

  local-referrals/
    README.md
    index.json
    examples.md
```

## Recommended Supporting Data Files

```text
site-data/
  partners.json
  team.json
  partner-resources.json
  affiliate-links.json
  local-referral-categories.json
```

## Partner Types

Phase 2 should support:

- Referral agents
- Affiliate publishers
- Brokers
- ISO reps
- Consultants
- Agencies
- Local connectors
- Strategic partners
- Software providers
- Community partners
- Newsletter operators
- SEO operators
- Content publishers

## Partner Asset Types

### 1. Partner Recruitment Page

Primary file:

```text
get-started.html
```

Purpose:

- Explain who can partner
- Explain what partners can promote
- Explain safe messaging rules
- Link to partner application
- Link to partner disclosure
- Link to provider/resource directory

Primary CTA examples:

- Apply to become a partner
- Start partner onboarding
- Request partner resources
- Get approved resources

### 2. Provider / Resource Directory

Primary file:

```text
partners.html
```

Purpose:

- List providers or resources
- Show categories
- Clarify relationship types
- Add disclosure notes
- Route users to approved pages
- Avoid hidden compensation bias

Provider listing fields:

- Name
- Category
- Description
- Relationship
- CTA
- URL
- Disclosure
- Review date
- Status

### 3. Team / Partner Directory

Primary file:

```text
team.html
```

Purpose:

- Browse partner profile types
- Introduce referral partners or roles
- Link to profile templates
- Support future profile generation

Profile type examples:

- Referral Agent
- Affiliate Publisher
- Broker
- ISO Rep
- Consultant
- Strategic Partner

### 4. Partner Profile Page

Primary file:

```text
profile.html
```

Purpose:

- Provide a reusable public profile shell
- Show approved resources
- Show CTA
- Show disclosure
- Preserve public-safe claims
- Support tracked resource routing

Profile fields:

- Name
- Role
- Audience
- Region
- Public bio
- Approved CTA
- Approved resources
- Disclosure
- Tracking ID
- Status

### 5. Resource Card

Recommended folder:

```text
examples/partner-enablement/
```

Purpose:

- Give partners a compact, approved shareable resource
- Include CTA and disclosure
- Include restricted claims
- Include tracking notes

Resource card sections:

- Title
- Audience
- Problem solved
- Description
- Primary CTA
- Secondary CTA
- Disclosure
- Restricted claims
- Tracking notes

## Distribution Workflows

### Partner Application Workflow

```text
Visitor
→ get-started.html
→ Partner application form
→ Review partner fit
→ Assign partner type
→ Generate partner slug
→ Assign approved resources
→ Publish profile if approved
→ Track CTA usage
```

### Referral Partner Workflow

```text
Partner identified
→ Audience reviewed
→ Resource selected
→ Disclosure added
→ Tracking link created
→ Resource card shared
→ Lead or user routed
→ Attribution logged
→ Quality reviewed
```

### Affiliate Publisher Workflow

```text
Publisher approved
→ Content category selected
→ Approved links assigned
→ Disclosure language provided
→ Resource page or directory listing shared
→ Link usage reviewed
→ Claims monitored
```

### Broker Enablement Workflow

```text
Broker onboarded
→ Profile created
→ Funding readiness resource assigned
→ Intake CTA connected
→ Follow-up scripts provided
→ Do-not-claim list reviewed
→ Lead flow monitored
```

## Tracking and Attribution Model

Recommended fields:

```json
{
  "partner_slug": "sample_partner",
  "source": "partner_profile",
  "medium": "affiliate",
  "campaign": "ai_agent_library",
  "resource": "funding_readiness",
  "cta": "check_readiness",
  "created_at": "2026-06-18"
}
```

Recommended URL parameters:

```text
?utm_source=partner_slug
&utm_medium=affiliate
&utm_campaign=ai_agent_library
&utm_content=resource_card
```

## Partner-Safe Language

Use:

- Educational resource
- Readiness checklist
- Public tool
- Compare options
- Review common requirements
- Check fit
- Understand next steps
- Browse resources
- Partner resource
- Public-safe guide

Avoid:

- Guaranteed approval
- Guaranteed funding
- Guaranteed results
- Everyone qualifies
- Secret approval method
- No documents required
- Best rates guaranteed
- No risk
- AI will get you approved
- Partner can guarantee outcome

## Required Disclosures

General partner disclosure:

```text
This page may include affiliate or referral links. If you use them, the partner or site operator may receive compensation at no additional cost to you.
```

Provider directory disclosure:

```text
Some providers or resources listed here may involve affiliate, referral, sponsored, or strategic partner relationships. Listings are informational and do not guarantee eligibility, pricing, approval, or results.
```

Funding resource disclosure:

```text
Funding-related resources are educational and may include referral relationships. Final options depend on provider review, eligibility, documentation, business profile, and applicable terms.
```

## Partner Review Checklist

Before publishing partner assets:

- [ ] Partner type is defined.
- [ ] Audience is defined.
- [ ] Partner bio is approved.
- [ ] CTA destination is approved.
- [ ] Tracking parameters are correct.
- [ ] Affiliate or referral disclosure is visible.
- [ ] No private payout terms are shown.
- [ ] No guaranteed outcome language remains.
- [ ] No private provider logic is exposed.
- [ ] Public-safe funding or business-credit language is used where relevant.
- [ ] Internal notes are separate from public pages.

## Recommended GitHub Issue

```md
# Phase 2 — Distribution System

## Goal

Add partner, affiliate, referral, broker, ISO, consultant, and strategic partner infrastructure to AI Agent Library.

## Deliverables

- [ ] Partner recruitment page
- [ ] Partner/provider directory
- [ ] Team/profile directory
- [ ] Partner profile template
- [ ] Partner enablement knowledge base
- [ ] Local referrals knowledge base
- [ ] Partner examples
- [ ] Disclosure language
- [ ] Tracking and attribution rules

## Acceptance Criteria

- [ ] Partner pages link to affiliate disclosure.
- [ ] CTAs use placeholder or approved URLs only.
- [ ] No guarantees or unsupported claims.
- [ ] Partner examples are synthetic.
- [ ] Public and internal notes remain separated.
```

## Recommended PR Title

```text
Add partner and affiliate distribution layer
```

## Recommended PR Summary

```md
## Summary

Adds partner-facing distribution pages and knowledge-base resources.

## Included

- Partner get-started page
- Partner provider directory
- Team/profile directory
- Partner profile template
- Partner enablement KB
- Local referrals KB
- Partner examples and disclosure rules

## Validation

- Partner pages open without a build step.
- Affiliate disclosure is linked.
- Partner CTAs are public-safe placeholders or approved URLs.
- No private payout terms or provider logic included.
```

## Phase 2 Risks

| Risk | Mitigation |
|---|---|
| Partners make unsupported claims | Provide do-not-claim lists and review rules |
| Affiliate disclosures are missed | Link disclosure in footer and partner pages |
| Private payout terms leak into public repo | Keep internal payout data out of public files |
| Tracking links become inconsistent | Standardize partner slug and UTM rules |
| Provider listings imply guarantees | Use informational and readiness language |
| Partner profiles expose private contact details | Use approved public bios and controlled CTAs |

## Phase 2 Done Means

AI Agent Library has a working distribution layer that can support partners, affiliates, referral agents, brokers, consultants, and strategic partners without compromising public-safe language, attribution discipline, or trust.
```

---

## `roadmap/phase-3-marketplace-layer.md`

```md id="phase-3-marketplace-layer-md"
# Phase 3 — Marketplace Layer

## Purpose

Turn AI Agent Library into a searchable marketplace-style library of reusable AI assets.

Phase 3 makes agents, skills, prompt packs, schemas, examples, templates, knowledge bases, platform packs, and deployable static assets easier to discover, compare, filter, package, and reuse.

## Strategic Goal

Create a browseable marketplace layer that supports both human users and AI-assisted builders.

The marketplace should help users answer:

- What agents exist?
- What skills are reusable?
- What category does this asset belong to?
- Which platform should this be packaged for?
- What files are connected to this asset?
- Is it public-safe, internal, draft, or published?
- What is the next action?
- Can this become a GPT, Vercel app, prompt pack, or partner resource?

## Success Criteria

Phase 3 is complete when:

- [ ] Agents are browseable by category, buyer, platform, status, tags, and monetization model.
- [ ] Skills are browseable by category, priority, status, and recommended apps.
- [ ] Prompt packs have a searchable library page.
- [ ] Templates are grouped by use case.
- [ ] Schemas are documented and linked.
- [ ] Examples are grouped by category.
- [ ] Portfolio folders connect public assets to repo files.
- [ ] Asset cards show status and next action.
- [ ] Contribution workflow is documented.
- [ ] Search and discovery pages remain static-first.

## Marketplace Asset Types

### Agents

Primary paths:

```text
agents/
agent-catalog.html
agent-index.json
schemas/agent.schema.json
```

Agent card fields:

- Name
- Category
- Buyer
- Pain solved
- Platform targets
- Monetization model
- Status
- File path
- Tags
- CTA

### Skills

Primary paths:

```text
skills/
skill-catalog.html
skill-categories.html
top-skills.html
skill-builder.html
```

Skill card fields:

- Skill name
- Category
- Audience
- Problem solved
- Recommended apps
- Priority
- Status
- Suggested path
- CTA

### Prompt Packs

Primary paths:

```text
prompt-library.html
prompt-generator.html
prompt-chains.html
prompt-chains/
```

Prompt pack fields:

- Prompt pack name
- Use case
- Inputs required
- Output type
- Platform target
- Review requirements
- Related skill
- Status

### Templates

Primary paths:

```text
templates.html
templates/
```

Template fields:

- Template name
- Template type
- Use case
- Required inputs
- Output format
- Related schema
- Status
- Download/copy path

### Schemas

Primary paths:

```text
schemas.html
schemas/
```

Schema card fields:

- Schema name
- Purpose
- Required fields
- Related assets
- Validation use
- Status

### Examples

Primary paths:

```text
examples.html
examples/
```

Example fields:

- Example name
- Category
- Scenario
- Input
- Expected output
- Guardrails
- Related agent or skill
- Synthetic status

### Portfolio Assets

Primary paths:

```text
portfolio.html
portfolio/
```

Portfolio fields:

- Asset name
- Asset type
- URL
- Source repo
- Status
- Related agent
- Related skill
- Last reviewed date

## Marketplace Pages

Recommended marketplace and discovery pages:

```text
agent-catalog.html
skill-catalog.html
categories.html
tags.html
search.html
featured.html
new.html
platforms.html
templates.html
schemas.html
examples.html
portfolio.html
```

## Search and Filter Requirements

Marketplace pages should support:

- Text search
- Category filters
- Tag filters
- Status filters
- Platform filters
- Priority filters where relevant
- Empty states
- Fallback data
- Static JSON loading
- Graceful failure when a data file is missing

## Recommended Data Files

```text
site-data/
  agents.fallback.json
  skills.fallback.json
  categories.json
  tags.json
  featured.json
  changelog.json
  partners.json
  portfolio.json
  templates.json
  schemas.json
  examples.json
```

## Asset Status Model

Use a consistent status vocabulary.

```text
idea
draft
ready
in-review
published
needs-refresh
deprecated
archived
```

Status definitions:

| Status | Meaning |
|---|---|
| `idea` | Concept exists but files are not ready |
| `draft` | Files exist but need review |
| `ready` | Ready for implementation or publication |
| `in-review` | Under review in a PR, audit, or quality pass |
| `published` | Public or production-ready |
| `needs-refresh` | Existing asset is stale or incomplete |
| `deprecated` | Should not be used for new work |
| `archived` | Retained for history only |

## Marketplace Card Standard

Every asset card should answer:

```text
What is it?
Who is it for?
What problem does it solve?
What type of asset is it?
What status is it in?
Where is the source file?
What is the next action?
```

Recommended card structure:

```html
<article class="card">
  <div class="pill-row">
    <span class="pill gold">Category</span>
    <span class="pill">Status</span>
    <span class="pill">Platform</span>
  </div>

  <h2>Asset Name</h2>
  <p>Short description.</p>

  <ul class="mini-list">
    <li><strong>Audience:</strong> ...</li>
    <li><strong>Problem:</strong> ...</li>
    <li><strong>Source:</strong> ...</li>
  </ul>

  <a class="button-link secondary" href="#">Open asset →</a>
</article>
```

## Marketplace Contribution Workflow

```text
Contributor identifies asset
→ Chooses asset type
→ Uses schema or template
→ Adds source file
→ Adds example if needed
→ Updates index/data file
→ Links related pages
→ Runs public-safe review
→ Opens PR
→ Review and merge
```

## Marketplace Quality Checklist

Before adding an asset to the marketplace:

- [ ] Asset has a clear name.
- [ ] Asset has a category.
- [ ] Asset has a status.
- [ ] Asset has a target audience.
- [ ] Asset has a problem solved.
- [ ] Asset has a source path.
- [ ] Asset has a next action.
- [ ] Related schema is linked where relevant.
- [ ] Related examples are synthetic.
- [ ] Public-safe language is preserved.
- [ ] No private data or secrets are included.

## Public-Safe Marketplace Rules

Marketplace listings must not:

- Claim guaranteed results
- Claim guaranteed funding
- Claim guaranteed approval
- Claim guaranteed credit outcomes
- Claim guaranteed revenue
- Claim guaranteed rankings
- Present affiliate listings as neutral if compensation exists
- Present synthetic examples as real case studies
- Expose internal provider logic
- Expose secrets or private user data

## Recommended GitHub Issue

```md
# Phase 3 — Marketplace Layer

## Goal

Create a searchable marketplace-style layer for agents, skills, prompt packs, schemas, examples, templates, platform packs, and portfolio assets.

## Deliverables

- [ ] Marketplace card standards
- [ ] Agent catalog improvements
- [ ] Skill catalog improvements
- [ ] Prompt pack library
- [ ] Template library
- [ ] Schema browser
- [ ] Examples browser
- [ ] Portfolio inventory
- [ ] Static data files
- [ ] Contribution workflow

## Acceptance Criteria

- [ ] Marketplace pages are static-first.
- [ ] Cards show status and next action.
- [ ] Search/filter behavior works.
- [ ] Fallback data exists.
- [ ] Public-safe rules are preserved.
- [ ] No private data or secrets included.
```

## Recommended PR Title

```text
Add marketplace discovery layer
```

## Recommended PR Summary

```md
## Summary

Adds marketplace-style discovery structure for AI Agent Library assets.

## Included

- Asset card standards
- Discovery and catalog improvements
- Prompt, template, schema, and example browsing foundations
- Portfolio inventory structure
- Contribution workflow
- Static data patterns

## Validation

- Pages work without a build step.
- Cards render with fallback data.
- Filters and search use static JavaScript.
- No private data or unsafe claims included.
```

## Phase 3 Risks

| Risk | Mitigation |
|---|---|
| Marketplace becomes too broad | Use asset types and schema discipline |
| Search becomes unreliable | Maintain clean JSON indexes |
| Cards omit status or source paths | Enforce marketplace card standard |
| Examples expose real private data | Require synthetic examples |
| Affiliate resources look neutral | Add disclosure fields |
| Too many stale assets accumulate | Use `needs-refresh`, `deprecated`, and `archived` statuses |

## Phase 3 Done Means

AI Agent Library becomes a usable marketplace-style asset directory where users can discover, compare, and reuse agents, skills, prompt packs, schemas, examples, templates, and deployable AI assets.
```

---

## `roadmap/phase-4-platform-layer.md`

```md id="phase-4-platform-layer-md"
# Phase 4 — Platform Layer

## Purpose

Turn AI Agent Library into a cross-platform agent operating system.

Phase 4 connects the static library, repo structure, schemas, prompt systems, portfolio assets, and knowledge bases to real deployment platforms and agent packaging workflows.

## Strategic Goal

Create a repeatable system for converting one agent or skill into multiple deployable formats:

```text
Agent idea
→ Agent spec
→ Skill dependencies
→ Knowledge-base files
→ Schema package
→ Prompt system
→ Static page
→ Custom GPT
→ Gemini Gem
→ Vercel app
→ Automation workflow
→ Partner resource
→ Portfolio item
```

## Success Criteria

Phase 4 is complete when:

- [ ] Agent specs can be converted into Custom GPT packages.
- [ ] Agent specs can be converted into Gemini Gem instructions.
- [ ] Agent specs can support Vercel static pages.
- [ ] Skills can generate reusable `SKILL.md` packages.
- [ ] Knowledge bases are mapped to agent outputs.
- [ ] Schemas validate core asset types.
- [ ] Webhook event patterns exist for automation.
- [ ] Portfolio folders track deployed assets.
- [ ] Platform-specific README files exist.
- [ ] Each platform has clear public-safe and data-use rules.

## Platform Targets

### ChatGPT / Custom GPTs

Primary purpose:

- Productized assistants
- Knowledge-file-based workflows
- Guided outputs
- Public or link-only assistant access
- GPT-specific instructions and conversation starters

Primary files:

```text
portfolio/custom-gpts/
schemas/custom-gpt.schema.json
agents/
knowledge-base/
```

Package contents:

- GPT name
- One-sentence description
- Who it is for
- Main pain solved
- Best outcome
- Instructions
- Conversation starters
- Knowledge files
- Actions if applicable
- Safety notes
- Do-not-claim list
- CTA and access URL

### Gemini Gems

Primary purpose:

- Lightweight assistant packaging
- Short instruction-based helpers
- Fast cross-platform assistant reuse

Primary files:

```text
portfolio/gemini-gems/
platforms.html
agents/
```

Package contents:

- Gem name
- Short instructions
- Audience
- Use case
- Example prompts
- Restrictions
- Source agent link
- Status

### Vercel Static Sites

Primary purpose:

- Public directories
- Landing pages
- Calculators
- Scorecards
- Prompt generators
- Resource hubs
- Partner pages
- Static documentation

Primary files:

```text
portfolio/vercel/
schemas/vercel-project.schema.json
index.html
styles.css
script.js
```

Package contents:

- Project name
- Repo source
- Production URL
- Deployment mode
- Root files
- Data files
- Environment variables if needed
- CTA strategy
- Legal/trust links
- Deployment control notes

### n8n / Workflow Automation

Primary purpose:

- Webhook workflows
- CRM syncs
- Email draft workflows
- Partner attribution
- Approval queues
- Data routing
- Content workflow automation

Primary files:

```text
knowledge-base/automation/
schemas/webhook-event.schema.json
examples/automation/
```

Package contents:

- Trigger
- Inputs
- Steps
- Outputs
- Auth model
- Human review gates
- Failure handling
- Example payload
- Data policy notes

### Notion

Primary purpose:

- Source-of-truth docs
- Asset databases
- Content calendars
- Partner tracking
- Roadmaps
- Execution queues
- Agent inventory

Primary files:

```text
knowledge-base/
portfolio/
roadmap/
```

Package contents:

- Database fields
- Page templates
- Status views
- Contributor workflow
- Review workflow
- Source links
- Update cadence

### GitHub / Codex / Jules-Style Execution

Primary purpose:

- Repo-managed implementation
- Issues
- Branches
- PRs
- Reviews
- File generation
- Schema validation
- Static site updates

Primary files:

```text
roadmap/
schemas/
examples/
.github/
README.md
```

Package contents:

- Issue prompt
- Branch name
- File list
- Acceptance criteria
- Validation steps
- PR summary
- Review checklist
- Merge notes

## Platform Conversion Matrix

| Source Asset | Custom GPT | Gemini Gem | Vercel Site | n8n Workflow | Notion | GitHub |
|---|---|---|---|---|---|---|
| Agent spec | Instructions + starters | Short Gem instructions | Landing page | Workflow steps | Database record | Markdown file |
| Skill spec | GPT capability rules | Gem workflow | Generator page | Reusable node pattern | Skill database row | `SKILL.md` |
| Knowledge base | Knowledge file | Source summary | Public resource page | Data rules | Source page | `knowledge-base/` |
| Schema | Action schema support | Field guidance | Data validation | Payload validation | Database property map | JSON schema |
| Example | Few-shot examples | Sample prompts | Use-case card | Test payload | Example page | `examples/` |
| Partner resource | GPT referral output | Gem prompt | Partner page | Attribution event | Partner DB row | Markdown card |

## Platform Package Standards

### Package README

Every platform package should include:

```md
# [Platform Package Name]

## Purpose

What this package does.

## Source Assets

- Agent spec:
- Skills:
- Knowledge base:
- Schemas:
- Examples:

## Target Platform

[Custom GPT / Gemini Gem / Vercel / n8n / Notion / GitHub]

## Files

- File 1
- File 2

## Setup Steps

1. Step one
2. Step two
3. Step three

## Public-Safe Rules

- Rule 1
- Rule 2

## Validation

- [ ] Validation item
- [ ] Validation item

## Maintenance

Review cadence and owner.
```

### Platform Metadata

Recommended metadata fields:

```json
{
  "asset_name": "Example Agent",
  "platform": "ChatGPT Custom GPT",
  "source_agent": "agents/example-agent.md",
  "source_skills": [
    "skills/example-skill/SKILL.md"
  ],
  "knowledge_sources": [
    "knowledge-base/example/README.md"
  ],
  "schemas": [
    "schemas/agent.schema.json"
  ],
  "status": "draft",
  "public_safe": true,
  "last_reviewed_at": "2026-06-18"
}
```

## Automation and Actions Strategy

Separate workflows by authentication model.

### No-Auth

Use for:

- Local static tools
- Browser-only generators
- Prompt builders
- Scorecards
- Copy/download utilities
- Search and filter pages

### API-Key

Use for:

- Backend proxy calls
- Controlled integrations
- Server-side enrichment
- Private data sync
- Draft creation

### OAuth

Use for:

- User-authorized actions
- Google Workspace
- Notion
- HubSpot
- Slack
- Calendar
- Drive
- Gmail

## Human Review Rules

Human review should be required when platform actions involve:

- Sending emails or SMS
- Updating CRM records
- Publishing public claims
- Handling funding workflows
- Handling business-credit workflows
- Editing legal/trust pages
- Uploading knowledge files
- Submitting files to providers
- Triggering payment or contract actions
- Using private customer data
- Acting on uncertain or missing inputs

## Platform-Layer Public-Safe Rules

Platform packages must not:

- Expose API keys
- Expose webhook secrets
- Expose private tokens
- Expose private client records
- Expose confidential provider logic
- Make guaranteed funding claims
- Make guaranteed credit claims
- Make guaranteed ranking or revenue claims
- Present synthetic examples as real outcomes
- Publish legal/trust pages without review

## Recommended GitHub Issue

```md
# Phase 4 — Platform Layer

## Goal

Create cross-platform packaging systems for Custom GPTs, Gemini Gems, Vercel static sites, n8n workflows, Notion databases, and GitHub execution workflows.

## Deliverables

- [ ] Custom GPT package standard
- [ ] Gemini Gem package standard
- [ ] Vercel static project package standard
- [ ] n8n/webhook workflow standard
- [ ] Notion asset database mapping
- [ ] GitHub execution prompt standard
- [ ] Platform conversion matrix
- [ ] Platform metadata files
- [ ] Human review rules
- [ ] Data and secret handling rules

## Acceptance Criteria

- [ ] Each platform target has a README standard.
- [ ] Agent specs can map to platform packages.
- [ ] Schemas support core asset types.
- [ ] Public-safe and data rules are included.
- [ ] No secrets or private data are included.
```

## Recommended PR Title

```text
Add cross-platform agent packaging layer
```

## Recommended PR Summary

```md
## Summary

Adds the platform-layer roadmap and package standards for converting AI Agent Library assets into Custom GPTs, Gemini Gems, Vercel sites, n8n workflows, Notion systems, and GitHub execution workflows.

## Included

- Platform target definitions
- Conversion matrix
- Package README standard
- Metadata model
- Automation/auth strategy
- Human review rules
- Public-safe platform rules

## Validation

- Platform package requirements are documented.
- Public-safe rules are included.
- Secret-handling rules are clear.
- Cross-platform conversion paths are defined.
```

## Phase 4 Risks

| Risk | Mitigation |
|---|---|
| Platform packages drift from source agent specs | Maintain source asset references |
| Secrets leak into repo files | Use strict data policy and environment variables |
| GPT and static site versions diverge | Track both in portfolio metadata |
| Automation acts without approval | Require human review gates |
| Platform rules change | Add review cadence and status fields |
| Overengineering slows shipping | Keep no-auth/static-first as default |

## Phase 4 Done Means

AI Agent Library becomes a reusable operating system for packaging agents, skills, prompts, knowledge bases, schemas, examples, and tools across multiple AI and deployment platforms while preserving repo discipline, public-safe language, and reviewable workflows.
```

Batch 11 will be **Examples Folder Files**:

```text id="batch-11-list"
examples/funding/README.md
examples/funding/example-001.md

examples/partner-enablement/README.md
examples/partner-enablement/example-001.md

examples/content-ops/README.md
examples/content-ops/example-001.md

examples/automation/README.md
examples/automation/example-001.md
```


<!-- SOURCE: Batch 11 — Examples Folder Files.md -->

# Source Batch: Batch 11 — Examples Folder Files.md

# you asked

message time: 2026-06-18 13:13:28

Proceed (Batch 11)

---

# chatgpt response

## Batch 11 — Examples Folder Files

## `examples/funding/README.md`

```md id="examples-funding-readme"
# Funding Examples

Synthetic funding examples for AI Agent Library agents, skills, workflows, schemas, and static pages.

## Purpose

This folder contains public-safe funding examples that show how agents should summarize files, identify missing information, route to possible product families, and avoid unsupported funding claims.

## Rules

- Use synthetic examples only.
- Do not include real borrower data.
- Do not include bank statements, tax documents, credit reports, or private CRM notes.
- Do not claim guaranteed approval.
- Do not claim guaranteed funding.
- Do not promise rates, terms, speed, or provider outcomes.
- Use readiness and review language.
- Include missing inputs and caution flags.

## Recommended Example Format

```md
# Example — [Scenario Name]

## Scenario

Short synthetic scenario.

## Known Inputs

- Input 1
- Input 2

## Missing Inputs

- Missing item 1
- Missing item 2

## Recommended Output

Structured response the agent should produce.

## Guardrails

- Guardrail 1
- Guardrail 2
```

## Related Files

```text
knowledge-base/funding/README.md
knowledge-base/funding/examples.md
schemas/funding-product.schema.json
funding-kb.html
```
```

## `examples/funding/example-001.md`

```md id="examples-funding-example-001"
# Example — Revenue-Based Working Capital Review

## Scenario

A synthetic service business has been operating for 3 years and averages about $48,000 in monthly deposits. The owner requests $35,000 for payroll and short-term cash flow. Speed matters more than cost. The owner can provide 4 months of business bank statements and estimates personal credit as fair.

## Known Inputs

- Business type: service business
- Time in business: 3 years
- Monthly revenue: about $48,000
- Funding request: $35,000
- Use of funds: payroll and short-term cash-flow gap
- Speed needed: high
- Credit band: fair
- Documents available: 4 months business bank statements

## Missing Inputs

- Recent NSF or negative-day activity
- Existing advances or repayment obligations
- Average number of monthly deposits
- Tax lien, bankruptcy, or major delinquency status
- Owner identification
- Business entity details
- Current bank balance trend

## Recommended Agent Output

```md
## File Summary

The business appears to be active with recurring monthly revenue and available bank statements. The stated use of funds is payroll and short-term working capital. Speed is a priority.

## Likely Product Family

Revenue Advance / Fast Capital Path

## Fit Rationale

This file may fit a revenue-based working-capital review because the business has active deposits, has been operating for multiple years, and can provide recent bank statements.

## Missing Information

- Recent NSF count
- Existing funding balances
- Deposit consistency
- Tax lien or bankruptcy status
- Owner and entity verification

## Caution Flags

No major caution flags are confirmed yet, but bank-statement quality and existing repayment obligations need review.

## Suggested Next Step

Collect the most recent 4 months of business bank statements and confirm NSF activity, existing advances, and current repayment obligations.

## Public-Safe Language

Based on the information provided, this file may be ready for a working-capital review. Final options depend on bank-statement quality, repayment obligations, business profile, documentation, and provider review.
```

## Guardrails

- Do not say the business is approved.
- Do not guarantee funding speed.
- Do not quote rates, terms, or repayment amounts without verified source data.
- Do not imply fair credit automatically qualifies.
- Require document review before routing.
```

---

## `examples/partner-enablement/README.md`

```md id="examples-partner-enablement-readme"
# Partner Enablement Examples

Synthetic examples for partner resource cards, affiliate listings, broker launch kits, referral scripts, and strategic partner campaign briefs.

## Purpose

This folder helps builders create partner-facing resources that are clear, trackable, disclosure-ready, and public-safe.

## Rules

- Use synthetic partner names and placeholders.
- Do not expose private payout terms.
- Do not expose private provider routing rules.
- Do not publish private partner contact details without approval.
- Include affiliate or referral disclosure language where needed.
- Do not claim guaranteed outcomes.
- Do not present compensated placements as neutral if compensation exists.

## Recommended Example Format

```md
# Example — [Partner Asset Name]

## Scenario

Short synthetic scenario.

## Partner Type

Referral Agent / Affiliate / Broker / ISO / Consultant / Strategic Partner

## Asset

Resource card, profile, launch kit, or campaign brief.

## Approved CTA

Label:
URL:

## Disclosure

Required disclosure text.

## Restricted Claims

- Claim 1
- Claim 2
```

## Related Files

```text
knowledge-base/partner-enablement/README.md
knowledge-base/partner-enablement/examples.md
knowledge-base/local-referrals/README.md
get-started.html
partners.html
team.html
profile.html
affiliate-disclosure.html
```
```

## `examples/partner-enablement/example-001.md`

```md id="examples-partner-enablement-example-001"
# Example — Referral Partner Resource Card

## Scenario

A synthetic local referral partner works with small business owners and wants a simple funding-readiness resource they can share when clients ask about working capital.

## Partner Type

Referral Agent

## Audience

Small business owners who want to organize common funding-readiness information before starting a review.

## Asset

Partner resource card.

## Resource Card

```md
# Small Business Funding Readiness Resource

## Audience

Small business owners who want to understand common funding-readiness factors before starting a funding review.

## Problem Solved

Helps business owners organize basic information before comparing options or submitting an intake form.

## Description

This resource explains common funding-readiness factors such as time in business, monthly revenue, use of funds, documentation, credit range, and possible caution flags.

## Primary CTA

Label: Check funding readiness  
URL: [approved tracking URL]

## Secondary CTA

Label: Browse AI business tools  
URL: [approved library URL]

## Disclosure

This page may include referral or affiliate links. If you use them, the referring partner or site operator may receive compensation at no additional cost to you.

## Restricted Claims

- Do not claim guaranteed approval.
- Do not claim guaranteed funding.
- Do not claim everyone qualifies.
- Do not promise specific rates, terms, or funding speed.

## Tracking Notes

Partner slug: sample_referral_partner  
Campaign: small_business_readiness  
Approved URL: [approved URL]
```

## Review Checklist

- [ ] CTA URL is approved.
- [ ] Disclosure is visible.
- [ ] Partner slug is documented.
- [ ] No private payout terms are included.
- [ ] No guaranteed funding language is included.
- [ ] Resource is educational and public-safe.
```

---

## `examples/content-ops/README.md`

```md id="examples-content-ops-readme"
# Content Ops Examples

Synthetic content operations examples for SEO briefs, article outlines, video-to-blog workflows, prompt packs, landing pages, and metadata packs.

## Purpose

This folder shows how to turn ideas, transcripts, notes, offers, workflows, and product concepts into structured content assets.

## Rules

- Use synthetic examples unless a real source is explicitly approved.
- Verify current facts before publishing.
- Cite official or primary sources for current platform, pricing, legal, or high-stakes claims.
- Do not copy paid or private third-party content.
- Avoid unsupported revenue, ranking, traffic, funding, or credit outcome claims.
- Include a clear CTA that matches user intent.
- Use disclaimers when needed.

## Recommended Example Format

```md
# Example — [Content Asset Name]

## Scenario

Short synthetic scenario.

## Asset Type

SEO Brief / Article / Script / Prompt Pack / Landing Page / FAQ / Metadata Pack

## Inputs

- Topic
- Audience
- Keyword
- CTA

## Output

Structured content asset.

## Guardrails

- Guardrail 1
- Guardrail 2
```

## Related Files

```text
knowledge-base/content-ops/README.md
knowledge-base/content-ops/examples.md
prompt-library.html
prompt-generator.html
templates.html
examples.html
```
```

## `examples/content-ops/example-001.md`

```md id="examples-content-ops-example-001"
# Example — SEO Brief for AI Funding Follow-Up Agents

## Scenario

AI Agent Library needs a public-safe SEO article brief about using AI agents for small business funding follow-up.

## Asset Type

SEO Article Brief

## Inputs

- Topic: AI agents for funding follow-up
- Audience: Funding brokers, referral partners, and CRM-heavy sales teams
- Primary keyword: AI agents for small business funding follow-up
- CTA: Browse funding follow-up agents
- Risk level: Medium because funding-related language must avoid guarantees

## Output

```md
# AI Agents for Small Business Funding Follow-Up

## Primary Keyword

AI agents for small business funding follow-up

## Secondary Keywords

- funding follow-up automation
- AI for business loan brokers
- broker follow-up system
- small business funding CRM automation
- AI funding assistant

## Search Intent

Informational / Commercial

## Audience

Funding brokers, referral partners, small business finance operators, and CRM-heavy sales teams.

## Problem Solved

Business funding teams lose deals when leads go stale, documents are missing, follow-up is inconsistent, or CRM notes are messy.

## Recommended Structure

### H2: What Is an AI Funding Follow-Up Agent?

- H3: What it can do
- H3: What it should not do

### H2: Where Funding Follow-Up Breaks

- H3: New lead delays
- H3: Missing documents
- H3: Stalled deals
- H3: Declined reactivation

### H2: Best Use Cases

- H3: Intake reminders
- H3: Document follow-up
- H3: CRM note cleanup
- H3: Renewal reminders

### H2: Human Review Rules

- H3: Funding claims
- H3: Decline language
- H3: Sensitive data

### H2: Example Workflow

- H3: Trigger
- H3: Draft
- H3: Review
- H3: Send

## Internal Links

- agent-catalog.html
- knowledge-base/crm/README.md
- knowledge-base/automation/README.md
- knowledge-base/funding/README.md
- disclaimer.html

## CTA

Browse funding follow-up agents

## Meta Description

Learn how AI agents can help funding teams organize follow-up, document requests, CRM notes, and stalled deal workflows without making funding guarantees.

## Article Excerpt

AI funding follow-up agents can help organize reminders, missing document requests, CRM notes, and workflow tasks while keeping human review in place for high-stakes messages.

## Do-Not-Claim List

- Do not claim AI guarantees funding.
- Do not claim automation replaces broker judgment.
- Do not claim all leads can be revived.
- Do not claim approval or terms are guaranteed.
```

## Guardrails

- Use educational framing.
- Add human review language.
- Do not imply AI can make final funding decisions.
- Verify current platform or compliance claims before publishing.
```

---

## `examples/automation/README.md`

```md id="examples-automation-readme"
# Automation Examples

Synthetic automation examples for webhook events, CRM triggers, partner attribution, content workflows, review queues, and static browser tools.

## Purpose

This folder shows how to describe automations in a safe, reviewable, implementation-ready format.

## Rules

- Use synthetic payloads.
- Do not include API keys, access tokens, webhook secrets, or production endpoints.
- Do not include real customer records.
- Do not include private CRM exports.
- Require human review for high-stakes workflows.
- Draft before sending.
- Validate before writing to production systems.
- Log failures and fallback behavior.

## Recommended Example Format

```md
# Example — [Workflow Name]

## Scenario

Short synthetic scenario.

## Trigger

Event or user action that starts the workflow.

## Inputs

- Input 1
- Input 2

## Workflow Steps

1. Step one
2. Step two
3. Step three

## Example Payload

Synthetic JSON payload.

## Human Review Required?

Yes / No

## Failure Modes

- Failure mode 1
- Failure mode 2

## Fallback Behavior

What should happen if the workflow fails.
```

## Related Files

```text
knowledge-base/automation/README.md
knowledge-base/automation/examples.md
schemas/webhook-event.schema.json
examples.html
prompt-generator.html
skill-builder.html
```
```

## `examples/automation/example-001.md`

```md id="examples-automation-example-001"
# Example — Partner Lead Intake Webhook

## Scenario

A synthetic partner form submits a new lead. The automation should validate the payload, create a CRM task or review item, draft a follow-up message, and route it to human review.

## Trigger

`partner.lead_referred`

## Inputs

- Partner slug
- Lead name
- Business name
- Email
- Phone
- Business type
- Stated need
- Requested amount if applicable
- Source URL
- Timestamp

## Workflow Steps

1. Receive webhook payload.
2. Validate required fields.
3. Reject or quarantine incomplete payloads.
4. Check for duplicate lead records.
5. Create CRM lead, CRM task, or review queue item.
6. Draft public-safe intake follow-up.
7. Send the draft to human review.
8. Log partner attribution.
9. Record processing status.
10. Stop before sending outbound communication automatically.

## Example Payload

```json
{
  "event_id": "evt_partner_lead_001",
  "event_type": "partner.lead_referred",
  "source": "partner_form",
  "version": "1.0.0",
  "environment": "test",
  "created_at": "2026-06-18T12:00:00Z",
  "actor": {
    "actor_type": "partner",
    "partner_slug": "sample_partner"
  },
  "payload": {
    "lead_name": "Sample Contact",
    "business_name": "Sample Business LLC",
    "email": "sample@example.com",
    "phone": "555-0100",
    "business_type": "Service Business",
    "stated_need": "Working capital",
    "requested_amount": 50000,
    "source_url": "https://example.com/partner-page"
  },
  "metadata": {
    "utm_source": "sample_partner",
    "utm_medium": "affiliate",
    "utm_campaign": "ai_agent_library",
    "tags": [
      "partner",
      "lead-intake"
    ]
  },
  "security": {
    "signature_verified": false,
    "signature_algorithm": "none",
    "auth_type": "none",
    "contains_sensitive_data": false,
    "redaction_required": false
  },
  "processing": {
    "status": "queued",
    "priority": "normal",
    "human_review_required": true,
    "review_reason": "Funding-related follow-up requires human review before sending.",
    "destination": "review_queue"
  },
  "data_policy": {
    "example_is_synthetic": true,
    "allowed_for_public_repo": true,
    "restricted_fields": [
      "api_key",
      "access_token",
      "password",
      "bank_account",
      "tax_id",
      "credit_report",
      "private_client_record"
    ],
    "notes": "Synthetic payload for documentation and schema testing only."
  }
}
```

## Draft Follow-Up Message

```text
Hi [Name], thanks for reaching out. To understand what options may be relevant, I need a few basics first: business type, time in business, monthly revenue, funding amount requested, use of funds, and whether recent business bank statements are available.

Final options depend on documentation, business profile, eligibility, and provider review.
```

## Human Review Required?

Yes.

## Review Reason

The workflow involves funding-related follow-up and should not send outbound messages automatically.

## Failure Modes

- Missing email or phone
- Invalid partner slug
- Duplicate lead detected
- CRM API unavailable
- Webhook signature invalid
- Required fields missing
- Payload contains restricted data
- Review queue unavailable

## Fallback Behavior

If validation fails, store the payload in a quarantine or review queue and notify the operator. Do not send outbound messages. Do not create final deal status updates without human review.

## Guardrails

- Do not send the follow-up automatically.
- Do not promise funding or approval.
- Do not expose private CRM data in logs.
- Do not include secrets in public examples.
- Use the webhook schema before production implementation.
```

Batch 12 will be **Portfolio Folder Files**:

```text id="batch-12-list"
portfolio/vercel/README.md
portfolio/vercel/index.json

portfolio/custom-gpts/README.md
portfolio/custom-gpts/index.json

portfolio/gemini-gems/README.md
portfolio/gemini-gems/index.json

portfolio/flash-ui/README.md
portfolio/flash-ui/index.json
```


<!-- SOURCE: Batch 12 — Portfolio Folder Files.md -->

# Source Batch: Batch 12 — Portfolio Folder Files.md

# you asked

message time: 2026-06-18 13:23:46

Proceed

---

# chatgpt response

## Batch 12 — Portfolio Folder Files

## `portfolio/vercel/README.md`

````md id="portfolio-vercel-readme"
# Vercel Portfolio

Inventory for static sites, landing pages, directories, calculators, scorecards, prompt generators, partner pages, and other deployable AI Agent Library assets hosted on Vercel.

## Purpose

This folder tracks Vercel-ready and Vercel-deployed assets so each project has a clear source repo, deployment status, ownership record, CTA strategy, and maintenance path.

Use this portfolio for:

- Static AI tool sites
- Agent directories
- Skill directories
- Funding calculators
- Scorecards
- Prompt generators
- Partner resource pages
- Knowledge-base frontends
- Custom GPT landing pages
- Engineering-as-marketing tools

## Primary Users

- Static site builders
- AI product operators
- Vercel deployment operators
- Content and SEO operators
- Custom GPT builders
- Partner enablement operators
- Repo maintainers

## Portfolio Item Standard

Each Vercel portfolio item should include:

- Project name
- Project slug
- Source repo
- Local path if applicable
- Production URL
- Preview URL if applicable
- Vercel project ID if available
- Deployment status
- Deployment mode
- Auto-deploy setting
- Primary CTA
- Secondary CTA
- Related agent
- Related skill
- Related knowledge base
- Last reviewed date
- Notes

## Deployment Status Values

Use a consistent status vocabulary:

```text
idea
draft
local
preview
production
paused
needs-refresh
deprecated
archived
```

## Deployment Mode Values

Use:

```text
manual
git-auto
disabled
unknown
```

## Recommended Folder Pattern

```text
portfolio/
  vercel/
    README.md
    index.json
    inventory.md
    deployment-notes.md
```

## Vercel Project Checklist

Before marking a project as production-ready:

- [ ] `index.html` exists.
- [ ] `styles.css` exists.
- [ ] `script.js` exists if needed.
- [ ] `vercel.json` is reviewed.
- [ ] Navigation links resolve.
- [ ] CTA links are approved.
- [ ] Footer legal/trust links are present.
- [ ] No API keys or secrets are committed.
- [ ] Public-safe language is reviewed.
- [ ] Auto-deploy behavior is intentional.
- [ ] Production URL is recorded.
- [ ] Source repo is recorded.

## Static-First Rules

Use plain files unless the project explicitly needs a framework.

Preferred:

- HTML
- CSS
- JavaScript
- JSON
- Markdown
- Static assets

Avoid by default:

- Required build steps
- React or Next.js unless intentionally chosen
- Client-exposed secrets
- Hard-coded API keys
- Unreviewed analytics scripts
- Uncontrolled external form links

## `vercel.json` Deployment Control

For static sites, a simple baseline config may look like:

```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

To disable Git-triggered auto deployments:

```json
{
  "git": {
    "deploymentEnabled": false
  },
  "cleanUrls": true,
  "trailingSlash": false
}
```

To re-enable Git-triggered deployments:

```json
{
  "git": {
    "deploymentEnabled": true
  },
  "cleanUrls": true,
  "trailingSlash": false
}
```

## Recommended Metadata Object

```json
{
  "name": "AI Agent Library",
  "slug": "ai-agent-library",
  "status": "production",
  "site_type": "directory",
  "production_url": "https://example.vercel.app",
  "source_repo": "JFeimster/ai-agent-library",
  "deployment_mode": "manual",
  "auto_deploy_enabled": false,
  "primary_cta": "Browse agents",
  "related_agent": "agents/example-agent.md",
  "related_skill": "skills/static-site-page-builder/SKILL.md",
  "last_reviewed_at": "2026-06-18"
}
```

## Public-Safe Rules

Vercel portfolio pages must not:

- Expose environment variables
- Expose API keys
- Expose webhook secrets
- Publish private client data
- Publish internal provider logic
- Claim guaranteed funding, credit, revenue, rankings, or platform outcomes
- Use unapproved affiliate CTAs
- Deploy legal/trust pages without review

## Related Repo Paths

```text
portfolio/vercel/
schemas/vercel-project.schema.json
knowledge-base/engineering-as-marketing/
index.html
styles.css
script.js
roadmap/phase-4-platform-layer.md
```
````

## `portfolio/vercel/index.json`

```json id="portfolio-vercel-index-json"
{
  "portfolio": "vercel",
  "name": "Vercel Portfolio",
  "description": "Inventory for static sites, landing pages, directories, calculators, scorecards, prompt generators, partner pages, and deployable AI Agent Library assets hosted on Vercel.",
  "status": "draft",
  "items": [
    {
      "name": "AI Agent Library",
      "slug": "ai-agent-library",
      "status": "draft",
      "site_type": "directory",
      "production_url": "",
      "preview_url": "",
      "source_repo": "JFeimster/ai-agent-library",
      "deployment_mode": "manual",
      "auto_deploy_enabled": false,
      "primary_cta": "Browse agents",
      "secondary_cta": "Open skill catalog",
      "related_agent": "",
      "related_skill": "skills/static-site-page-builder/SKILL.md",
      "related_knowledge_base": "knowledge-base/engineering-as-marketing/README.md",
      "last_reviewed_at": "2026-06-18",
      "notes": "Static-first site pack for browsing agents, skills, knowledge bases, schemas, examples, portfolio assets, and partner pages."
    },
    {
      "name": "Ad Spend Cash Flow Calculator",
      "slug": "ad-spend-cash-flow-calculator",
      "status": "draft",
      "site_type": "calculator",
      "production_url": "",
      "preview_url": "",
      "source_repo": "",
      "deployment_mode": "manual",
      "auto_deploy_enabled": false,
      "primary_cta": "Run the Ad Spend Cash Flow Calculator",
      "secondary_cta": "Compare Ecommerce Funding Options",
      "related_agent": "",
      "related_skill": "skills/calculator-page-builder/SKILL.md",
      "related_knowledge_base": "knowledge-base/engineering-as-marketing/README.md",
      "last_reviewed_at": "2026-06-18",
      "notes": "Engineering-as-marketing calculator concept for ecommerce ad spend cash timing, payout lag, and funding-readiness routing."
    }
  ],
  "recommended_fields": [
    "name",
    "slug",
    "status",
    "site_type",
    "production_url",
    "preview_url",
    "source_repo",
    "deployment_mode",
    "auto_deploy_enabled",
    "primary_cta",
    "secondary_cta",
    "related_agent",
    "related_skill",
    "related_knowledge_base",
    "last_reviewed_at",
    "notes"
  ],
  "related_paths": [
    "portfolio/vercel/README.md",
    "schemas/vercel-project.schema.json",
    "knowledge-base/engineering-as-marketing/README.md",
    "roadmap/phase-4-platform-layer.md"
  ]
}
```

---

## `portfolio/custom-gpts/README.md`

````md id="portfolio-custom-gpts-readme"
# Custom GPT Portfolio

Inventory for published, draft, archived, and planned Custom GPTs connected to AI Agent Library agents, skills, knowledge bases, prompt systems, landing pages, and platform packs.

## Purpose

This folder tracks Custom GPT assets so each GPT has a clear purpose, access URL, knowledge-file package, instruction summary, CTA strategy, safety rules, and maintenance record.

Use this portfolio for:

- Published Custom GPTs
- Draft Custom GPTs
- GPT landing pages
- GPT metadata files
- Knowledge-file inventories
- Conversation starter sets
- Action schema notes
- GPT refresh checklists
- GPT-to-static-site conversion notes

## Primary Users

- Custom GPT builders
- AI product operators
- Prompt system designers
- Knowledge-base maintainers
- Static site builders
- Affiliate and partner operators
- Repo maintainers

## GPT Portfolio Item Standard

Each Custom GPT item should include:

- GPT name
- Slug
- Status
- Access URL
- One-sentence description
- Who it is for
- Main pain solved
- Best outcome
- Primary CTA
- Secondary CTA
- Brand vibe
- Pricing or access note
- Anything it should not claim
- Knowledge files
- Related agent spec
- Related site page
- Last reviewed date
- Notes

## Status Values

```text
idea
draft
configured
testing
published
needs-refresh
deprecated
archived
```

## Visibility Values

```text
private
link-only
public
internal
restricted
```

## Recommended Folder Pattern

```text
portfolio/
  custom-gpts/
    README.md
    index.json
    inventory.md
    refresh-checklist.md
```

Optional per-GPT folder pattern:

```text
portfolio/
  custom-gpts/
    [gpt-slug]/
      README.md
      metadata.json
      instructions.md
      conversation-starters.md
      knowledge-files.md
      safety.md
      landing-page-notes.md
```

## GPT Package Checklist

Before publishing or refreshing a GPT:

- [ ] GPT name is clear and specific.
- [ ] One-sentence description is accurate.
- [ ] Target user is defined.
- [ ] Main pain solved is clear.
- [ ] Best outcome is realistic.
- [ ] Knowledge files are current.
- [ ] Instructions match the intended workflow.
- [ ] Conversation starters are useful.
- [ ] CTA is specific and relevant.
- [ ] Do-not-claim list is included.
- [ ] Public-safe language is reviewed.
- [ ] Access URL is recorded.
- [ ] Landing page or catalog entry is updated.

## Recommended Metadata Object

```json
{
  "name": "Ad Spend Cash Flow Calculator",
  "slug": "ad-spend-cash-flow-calculator",
  "status": "published",
  "visibility": "link-only",
  "access_url": "https://chatgpt.com/g/example",
  "one_sentence_description": "Forecasts ecommerce ad spend cash flow, payout lag, cash gaps, and scale/fund decisions.",
  "who_it_is_for": [
    "Ecommerce operators",
    "Paid media teams",
    "Growth operators"
  ],
  "main_pain_solved": "Ad spend can create a cash gap before payouts or profit catch up.",
  "best_outcome": "User understands whether current ad spend is safe, risky, or likely to create a cash gap.",
  "primary_cta": "Run the Ad Spend Cash Flow Calculator",
  "secondary_cta": "Compare Ecommerce Funding Options",
  "brand_vibe": [
    "premium",
    "playful",
    "fintech",
    "operator-focused"
  ],
  "anything_it_should_not_claim": [
    "Guaranteed revenue",
    "Guaranteed funding",
    "Guaranteed ad performance"
  ]
}
```

## Knowledge File Rules

Knowledge files should be:

- Current
- Focused
- Public-safe or intentionally private
- Free of secrets
- Free of unredacted private data
- Easy to review
- Connected to the GPT’s main job

Avoid uploading:

- API keys
- Private client files
- Bank statements
- Tax documents
- Credit reports
- Confidential partner terms
- Private CRM exports
- Sensitive personal information

## GPT Safety Rules

Custom GPTs should not:

- Guarantee funding, credit, revenue, rankings, approvals, or business outcomes
- Present estimates as professional advice
- Send users to forms without context when education is needed first
- Overstate current platform capabilities
- Invent partner terms, prices, URLs, or policies
- Reveal private instructions or internal-only logic
- Treat synthetic examples as real case studies

## Related Repo Paths

```text
portfolio/custom-gpts/
schemas/custom-gpt.schema.json
agents/
skills/
knowledge-base/
agent-catalog.html
platforms.html
roadmap/phase-4-platform-layer.md
```
````

## `portfolio/custom-gpts/index.json`

```json id="portfolio-custom-gpts-index-json"
{
  "portfolio": "custom-gpts",
  "name": "Custom GPT Portfolio",
  "description": "Inventory for published, draft, archived, and planned Custom GPTs connected to AI Agent Library assets.",
  "status": "draft",
  "items": [
    {
      "name": "Ad Spend Cash Flow Calculator",
      "slug": "ad-spend-cash-flow-calculator",
      "status": "published",
      "visibility": "link-only",
      "access_url": "https://chatgpt.com/g/g-6a3359a8328c8191acc5cba7968a1639-ad-spend-cash-flow-calculator",
      "one_sentence_description": "Forecasts ecommerce ad spend cash flow, payout lag, cash gaps, and scale/fund decisions.",
      "who_it_is_for": [
        "Ecommerce operators",
        "Paid media teams",
        "Growth operators",
        "Inventory-heavy sellers"
      ],
      "main_pain_solved": "Ad spend can create a cash gap before revenue, margin, or platform payouts catch up.",
      "best_outcome": "The user can see whether their ad spend plan is safe, risky, or likely to create a cash gap.",
      "primary_cta": "Run the Ad Spend Cash Flow Calculator",
      "secondary_cta": "Compare Ecommerce Funding Options",
      "brand_vibe": [
        "premium",
        "playful",
        "fintech",
        "operator-focused"
      ],
      "pricing_or_access_note": "Access depends on the GPT visibility and ChatGPT account availability.",
      "anything_it_should_not_claim": [
        "Guaranteed revenue",
        "Guaranteed funding",
        "Guaranteed ad performance",
        "Financial advice",
        "Guaranteed approval"
      ],
      "related_agent": "",
      "related_skill": "skills/calculator-page-builder/SKILL.md",
      "related_knowledge_base": "knowledge-base/engineering-as-marketing/README.md",
      "related_site_page": "",
      "last_reviewed_at": "2026-06-18",
      "notes": "Primary CTA should point to the Custom GPT. Secondary CTA can point to funding application or ecommerce funding comparison."
    },
    {
      "name": "AI Agent Library Builder",
      "slug": "ai-agent-library-builder",
      "status": "draft",
      "visibility": "private",
      "access_url": "",
      "one_sentence_description": "Helps turn agent ideas into repo-ready specs, skills, knowledge bases, prompts, schemas, and static pages.",
      "who_it_is_for": [
        "AI builders",
        "Static site operators",
        "Prompt system designers",
        "Repo maintainers"
      ],
      "main_pain_solved": "Agent ideas often stay scattered instead of becoming structured, reusable, deployable assets.",
      "best_outcome": "The user receives a file-ready package for agents, skills, prompts, schemas, pages, or knowledge-base folders.",
      "primary_cta": "Build an agent package",
      "secondary_cta": "Open the skill builder",
      "brand_vibe": [
        "technical",
        "operator-focused",
        "minimal"
      ],
      "pricing_or_access_note": "Draft concept.",
      "anything_it_should_not_claim": [
        "Guaranteed marketplace success",
        "Guaranteed platform acceptance",
        "Guaranteed revenue"
      ],
      "related_agent": "",
      "related_skill": "skills/static-site-page-builder/SKILL.md",
      "related_knowledge_base": "knowledge-base/engineering-as-marketing/README.md",
      "related_site_page": "skill-builder.html",
      "last_reviewed_at": "2026-06-18",
      "notes": "Potential internal GPT for generating and auditing AI Agent Library repo assets."
    }
  ],
  "recommended_fields": [
    "name",
    "slug",
    "status",
    "visibility",
    "access_url",
    "one_sentence_description",
    "who_it_is_for",
    "main_pain_solved",
    "best_outcome",
    "primary_cta",
    "secondary_cta",
    "brand_vibe",
    "pricing_or_access_note",
    "anything_it_should_not_claim",
    "related_agent",
    "related_skill",
    "related_knowledge_base",
    "related_site_page",
    "last_reviewed_at",
    "notes"
  ],
  "related_paths": [
    "portfolio/custom-gpts/README.md",
    "schemas/custom-gpt.schema.json",
    "agent-catalog.html",
    "platforms.html",
    "roadmap/phase-4-platform-layer.md"
  ]
}
```

---

## `portfolio/gemini-gems/README.md`

````md id="portfolio-gemini-gems-readme"
# Gemini Gems Portfolio

Inventory for Gemini Gem concepts, lightweight assistant packages, converted agent patterns, and short-form reusable AI helpers.

## Purpose

This folder tracks Gemini Gems that are derived from AI Agent Library agents, skills, prompt systems, and knowledge-base patterns.

Use this portfolio for:

- Gemini Gem ideas
- Draft Gem instructions
- Converted Custom GPT concepts
- Lightweight assistant patterns
- Cross-platform prompt packages
- Gem publication notes
- Refresh checklists

## Primary Users

- Gemini Gem builders
- AI assistant packagers
- Prompt system designers
- Custom GPT operators
- Cross-platform agent builders
- Repo maintainers

## Gemini Gem Portfolio Item Standard

Each Gemini Gem item should include:

- Gem name
- Slug
- Status
- Source agent or GPT
- Audience
- Main use case
- Short instruction summary
- Example prompts
- Restrictions
- Related skill
- Related knowledge base
- Last reviewed date
- Notes

## Status Values

```text
idea
draft
configured
testing
published
needs-refresh
deprecated
archived
```

## Recommended Folder Pattern

```text
portfolio/
  gemini-gems/
    README.md
    index.json
    inventory.md
    instructions/
      [gem-slug].md
```

## Gem Package Checklist

Before publishing or reusing a Gem:

- [ ] Name is specific.
- [ ] Audience is clear.
- [ ] Use case is narrow.
- [ ] Instructions are concise.
- [ ] Example prompts are useful.
- [ ] Restrictions are included.
- [ ] Source agent or GPT is recorded.
- [ ] Public-safe language is reviewed.
- [ ] No private data is included.
- [ ] Last reviewed date is recorded.

## Recommended Metadata Object

```json
{
  "name": "Funding Readiness Helper",
  "slug": "funding-readiness-helper",
  "status": "draft",
  "source_agent": "agents/funding-pipeline-triage-agent.md",
  "audience": "Small business owners and funding operators",
  "main_use_case": "Help users organize funding-readiness details and missing information.",
  "instruction_summary": "Ask for business basics, summarize readiness factors, list missing inputs, and avoid approval or funding guarantees.",
  "example_prompts": [
    "Help me organize a funding-readiness checklist.",
    "What information is missing before a funding review?"
  ],
  "restrictions": [
    "No guaranteed funding claims",
    "No legal, tax, credit-repair, or lending advice"
  ]
}
```

## Gem Safety Rules

Gemini Gems should not:

- Make guaranteed funding, credit, revenue, ranking, or approval claims
- Present educational resources as professional advice
- Expose private source material
- Use real client examples without approval
- Invent current platform details
- Ignore missing inputs
- Overstate what a lightweight assistant can do

## Related Repo Paths

```text
portfolio/gemini-gems/
platforms.html
schemas/custom-gpt.schema.json
agents/
skills/
knowledge-base/
roadmap/phase-4-platform-layer.md
```
````

## `portfolio/gemini-gems/index.json`

```json id="portfolio-gemini-gems-index-json"
{
  "portfolio": "gemini-gems",
  "name": "Gemini Gems Portfolio",
  "description": "Inventory for Gemini Gem concepts, lightweight assistant packages, converted agent patterns, and short-form reusable AI helpers.",
  "status": "draft",
  "items": [
    {
      "name": "Funding Readiness Helper",
      "slug": "funding-readiness-helper",
      "status": "draft",
      "source_agent": "agents/funding-pipeline-triage-agent.md",
      "source_gpt": "",
      "audience": "Small business owners, funding operators, and referral partners",
      "main_use_case": "Help users organize common funding-readiness information and identify missing details before a review.",
      "instruction_summary": "Ask for business basics, summarize known facts, list missing inputs, flag caution items, and avoid approval or funding guarantees.",
      "example_prompts": [
        "Help me organize a funding-readiness checklist.",
        "What information is missing before a funding review?",
        "Summarize this file using public-safe language."
      ],
      "restrictions": [
        "No guaranteed funding claims",
        "No guaranteed approval claims",
        "No legal, tax, credit-repair, or lending advice"
      ],
      "related_skill": "",
      "related_knowledge_base": "knowledge-base/funding/README.md",
      "last_reviewed_at": "2026-06-18",
      "notes": "Lightweight Gem concept derived from funding-readiness and routing patterns."
    },
    {
      "name": "Partner Resource Card Helper",
      "slug": "partner-resource-card-helper",
      "status": "draft",
      "source_agent": "",
      "source_gpt": "",
      "audience": "Partner managers, affiliates, brokers, and referral operators",
      "main_use_case": "Generate public-safe partner resource cards with CTAs, disclosures, restricted claims, and tracking notes.",
      "instruction_summary": "Collect resource details, format a partner card, include disclosure language, list restricted claims, and keep private payout terms out of public output.",
      "example_prompts": [
        "Create a partner resource card for this offer.",
        "Review this partner card for missing disclosures.",
        "Generate a public-safe affiliate resource card."
      ],
      "restrictions": [
        "No undisclosed affiliate positioning",
        "No private payout terms",
        "No guaranteed outcome claims"
      ],
      "related_skill": "skills/partner-resource-card-builder/SKILL.md",
      "related_knowledge_base": "knowledge-base/partner-enablement/README.md",
      "last_reviewed_at": "2026-06-18",
      "notes": "Good lightweight conversion target for partner enablement workflows."
    }
  ],
  "recommended_fields": [
    "name",
    "slug",
    "status",
    "source_agent",
    "source_gpt",
    "audience",
    "main_use_case",
    "instruction_summary",
    "example_prompts",
    "restrictions",
    "related_skill",
    "related_knowledge_base",
    "last_reviewed_at",
    "notes"
  ],
  "related_paths": [
    "portfolio/gemini-gems/README.md",
    "platforms.html",
    "roadmap/phase-4-platform-layer.md"
  ]
}
```

---

## `portfolio/flash-ui/README.md`

````md id="portfolio-flash-ui-readme"
# Flash UI Portfolio

Inventory for reusable static site variants, landing page patterns, visual systems, interface experiments, and deployable UI shells.

## Purpose

This folder tracks Flash UI variants and static visual systems that can be reused across AI Agent Library tools, landing pages, directories, GPT pages, calculators, and partner resources.

Use this portfolio for:

- Static UI variants
- Landing page layouts
- Directory page designs
- Calculator UI shells
- Scorecard UI shells
- Partner profile layouts
- Prompt generator interfaces
- Visual theme experiments
- Component pattern notes
- Reusable style directions

## Primary Users

- Static site builders
- Landing page generators
- AI product operators
- Flash UI maintainers
- Vercel app builders
- Partner page builders
- Design-system operators

## Flash UI Portfolio Item Standard

Each Flash UI item should include:

- Variant name
- Slug
- Status
- Visual style
- Best use case
- Source path
- Preview URL
- Included files
- Related site type
- Related CTA pattern
- Notes

## Status Values

```text
idea
draft
ready
preview
production
needs-refresh
deprecated
archived
```

## Recommended Folder Pattern

```text
portfolio/
  flash-ui/
    README.md
    index.json
    inventory.md
    variants/
      [variant-slug]/
        index.html
        styles.css
        script.js
        README.md
```

## UI Variant Types

Common variant types:

- Bento directory
- Brutalist fintech
- Premium dark dashboard
- Comic-book fintech
- Minimal SaaS
- Resource-card grid
- Calculator page
- Landing page hero
- Partner profile page
- Tool directory
- Prompt generator shell
- Knowledge-base browser

## Variant Review Checklist

Before reusing a Flash UI variant:

- [ ] Variant opens without a build step.
- [ ] CSS is self-contained or clearly linked.
- [ ] Mobile layout works.
- [ ] CTA hierarchy is clear.
- [ ] Accessibility basics are present.
- [ ] No placeholder claims remain.
- [ ] No broken asset references.
- [ ] No external scripts are required unless intentional.
- [ ] Fits the target audience and brand context.
- [ ] Footer/legal links are included where needed.

## Recommended Metadata Object

```json
{
  "name": "Brutalist Fintech Directory",
  "slug": "brutalist-fintech-directory",
  "status": "ready",
  "visual_style": "bold, high-contrast, editorial fintech",
  "best_use_case": "Agent catalogs, funding tool directories, and resource hubs",
  "source_path": "portfolio/flash-ui/variants/brutalist-fintech-directory/",
  "preview_url": "",
  "included_files": [
    "index.html",
    "styles.css",
    "script.js"
  ],
  "related_site_type": "directory",
  "related_cta_pattern": "Primary action plus secondary resource CTA"
}
```

## UI Safety Rules

Flash UI variants should not:

- Include copyrighted images without permission
- Include logos without permission
- Include misleading trust badges
- Include fake testimonials
- Include fake performance claims
- Include hard-coded private links
- Expose analytics IDs unintentionally
- Use inaccessible text contrast
- Hide required disclosures

## Related Repo Paths

```text
portfolio/flash-ui/
portfolio/vercel/
knowledge-base/engineering-as-marketing/
styles.css
index.html
roadmap/phase-4-platform-layer.md
```
````

## `portfolio/flash-ui/index.json`

```json id="portfolio-flash-ui-index-json"
{
  "portfolio": "flash-ui",
  "name": "Flash UI Portfolio",
  "description": "Inventory for reusable static site variants, landing page patterns, visual systems, interface experiments, and deployable UI shells.",
  "status": "draft",
  "items": [
    {
      "name": "AI Agent Library Dark Directory",
      "slug": "ai-agent-library-dark-directory",
      "status": "draft",
      "visual_style": "dark, high-contrast, card-based, operator-focused",
      "best_use_case": "Agent libraries, skill catalogs, knowledge-base hubs, and AI product directories",
      "source_path": "index.html",
      "preview_url": "",
      "included_files": [
        "index.html",
        "styles.css",
        "script.js"
      ],
      "related_site_type": "directory",
      "related_cta_pattern": "Primary browse CTA with secondary builder CTA",
      "last_reviewed_at": "2026-06-18",
      "notes": "Current AI Agent Library root site style."
    },
    {
      "name": "Partner Resource Grid",
      "slug": "partner-resource-grid",
      "status": "draft",
      "visual_style": "card-grid partner enablement layout",
      "best_use_case": "Affiliate pages, referral partner resources, provider directories, and team profile systems",
      "source_path": "partners.html",
      "preview_url": "",
      "included_files": [
        "partners.html",
        "team.html",
        "profile.html",
        "styles.css"
      ],
      "related_site_type": "partner-page",
      "related_cta_pattern": "Partner application CTA plus disclosure CTA",
      "last_reviewed_at": "2026-06-18",
      "notes": "Reusable pattern for affiliate and partner distribution pages."
    },
    {
      "name": "Skill Builder Generator UI",
      "slug": "skill-builder-generator-ui",
      "status": "draft",
      "visual_style": "form-to-output generator interface",
      "best_use_case": "Prompt generators, schema builders, resource-card generators, and SKILL.md builders",
      "source_path": "skill-builder.html",
      "preview_url": "",
      "included_files": [
        "skill-builder.html",
        "styles.css",
        "script.js"
      ],
      "related_site_type": "generator",
      "related_cta_pattern": "Generate output plus copy output",
      "last_reviewed_at": "2026-06-18",
      "notes": "Can be adapted for prompt generation, partner card generation, and static file builders."
    }
  ],
  "recommended_fields": [
    "name",
    "slug",
    "status",
    "visual_style",
    "best_use_case",
    "source_path",
    "preview_url",
    "included_files",
    "related_site_type",
    "related_cta_pattern",
    "last_reviewed_at",
    "notes"
  ],
  "related_paths": [
    "portfolio/flash-ui/README.md",
    "portfolio/vercel/README.md",
    "knowledge-base/engineering-as-marketing/README.md",
    "styles.css",
    "roadmap/phase-4-platform-layer.md"
  ]
}
```

Batch 13 will be **Site Data Files**:

```text id="batch-13-list"
site-data/agents.fallback.json
site-data/skills.fallback.json
site-data/categories.json
site-data/tags.json
site-data/featured.json
site-data/changelog.json
```

---

# Section C — Optional follow-up / not for current PR unless explicitly instructed

These attached saved threads are useful, but they should not be stuffed into the current static site pack PR unless the user explicitly expands the scope. They are included here for continuity and future Jules tasks.



<!-- OPTIONAL SOURCE: Batch 15 — Jules Execution Updates + Master Prompts.md -->

# Optional Source Batch: Batch 15 — Jules Execution Updates + Master Prompts.md

# you asked

message time: 2026-06-18 13:39:33

Proceed

---

# chatgpt response

## Batch 15 — Jules Execution Updates + Master Prompts

## `JULES_MASTER_IMPLEMENTATION_PROMPT.md`

````md id="jules-master-implementation-prompt"
# Jules Master Prompt — Add Full AI Agent Library Static Site Pack

You are working in this repo:

```text
JFeimster/ai-agent-library
```

## Objective

Add the full AI Agent Library static site pack to the repo as a static-first website and supporting asset system.

This is not a redesign task.

This is not a framework migration.

This is not a Next.js / React task.

Your job is to add the generated files, preserve repo discipline, validate the site locally, and open a clean PR.

## Critical Rules

- Keep everything static-first.
- Use plain HTML, CSS, JavaScript, JSON, and Markdown.
- Do not introduce React, Next.js, npm, package.json, build steps, or server routes.
- Do not commit ZIP files.
- Do not commit screenshots unless explicitly requested.
- Do not add secrets, API keys, tokens, webhook secrets, or private client data.
- Do not add guaranteed funding, approval, credit, revenue, ranking, or platform outcome claims.
- Use public-safe educational language.
- Preserve the generated file paths exactly unless a conflict requires a documented adjustment.

## Required Branch

Create a new branch:

```text
site/full-static-site-pack
```

## Files to Add or Update

### Root Site Files

```text
index.html
styles.css
script.js
style.css
SITE_PACK_README.md
REPO_PLACEMENT_CHECKLIST.md
PR_DESCRIPTION.md
JULES_HANDOFF_NOTE.md
```

`style.css` must exist as a compatibility alias:

```css
@import url("./styles.css");
```

### Directory & Discovery Pages

```text
agent-catalog.html
categories.html
tags.html
search.html
featured.html
new.html
```

### Skills Library Pages

```text
skill-catalog.html
skill-categories.html
top-skills.html
skill-builder.html
```

### Legal & Trust Pages

```text
terms.html
privacy.html
disclaimer.html
affiliate-disclosure.html
data-policy.html
```

### Partner / Affiliate Pages

```text
get-started.html
partners.html
team.html
profile.html
```

### Supporting Pages

```text
platforms.html
portfolio.html
knowledge-bases.html
roadmap.html
changelog.html
contribute.html
```

### Site Data

```text
site-data/agents.fallback.json
site-data/skills.fallback.json
site-data/categories.json
site-data/tags.json
site-data/featured.json
site-data/changelog.json
```

### Knowledge Bases

```text
knowledge-base/funding/README.md
knowledge-base/funding/index.json
knowledge-base/funding/examples.md

knowledge-base/partner-enablement/README.md
knowledge-base/partner-enablement/index.json
knowledge-base/partner-enablement/examples.md

knowledge-base/crm/README.md
knowledge-base/crm/index.json
knowledge-base/crm/examples.md

knowledge-base/content-ops/README.md
knowledge-base/content-ops/index.json
knowledge-base/content-ops/examples.md

knowledge-base/automation/README.md
knowledge-base/automation/index.json
knowledge-base/automation/examples.md

knowledge-base/local-referrals/README.md
knowledge-base/local-referrals/index.json
knowledge-base/local-referrals/examples.md

knowledge-base/engineering-as-marketing/README.md
knowledge-base/engineering-as-marketing/index.json
knowledge-base/engineering-as-marketing/examples.md
```

### Schemas

```text
schemas/agent.schema.json
schemas/custom-gpt.schema.json
schemas/vercel-project.schema.json
schemas/funding-product.schema.json
schemas/webhook-event.schema.json
```

### Roadmap

```text
roadmap/phase-1-fast-mvp.md
roadmap/phase-2-distribution-system.md
roadmap/phase-3-marketplace-layer.md
roadmap/phase-4-platform-layer.md
```

### Examples

```text
examples/funding/README.md
examples/funding/example-001.md

examples/partner-enablement/README.md
examples/partner-enablement/example-001.md

examples/content-ops/README.md
examples/content-ops/example-001.md

examples/automation/README.md
examples/automation/example-001.md
```

### Portfolio

```text
portfolio/vercel/README.md
portfolio/vercel/index.json

portfolio/custom-gpts/README.md
portfolio/custom-gpts/index.json

portfolio/gemini-gems/README.md
portfolio/gemini-gems/index.json

portfolio/flash-ui/README.md
portfolio/flash-ui/index.json
```

## README Update

Update the root `README.md` with a section titled:

```text
Static Site Layer
```

Include:

- Core static site files
- Main site pages
- Knowledge base folders
- Portfolio folders
- Schema files
- Roadmap files
- Example folders
- Site data files
- Local run command
- Public-safe language rule

Do not replace valuable existing README content. Append or merge cleanly.

## Local Validation

Run from the repo root:

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

Validate:

- Homepage loads.
- CSS loads.
- JS loads.
- Primary nav links resolve.
- Footer links resolve.
- Agent catalog renders fallback data.
- Skill catalog renders fallback data.
- Categories page renders.
- Tags page renders.
- Search page renders.
- Featured page renders.
- New/changelog page renders.
- Partner pages render.
- Legal/trust pages render.
- Supporting pages render.

## JSON Validation

Run JSON validation for all site-data and schema files.

PowerShell:

```powershell
Get-ChildItem site-data -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem schemas -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem portfolio -Recurse -Filter index.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem knowledge-base -Recurse -Filter index.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
```

If using bash:

```bash
python -m json.tool site-data/agents.fallback.json > /dev/null
python -m json.tool site-data/skills.fallback.json > /dev/null
python -m json.tool site-data/categories.json > /dev/null
python -m json.tool site-data/tags.json > /dev/null
python -m json.tool site-data/featured.json > /dev/null
python -m json.tool site-data/changelog.json > /dev/null

python -m json.tool schemas/agent.schema.json > /dev/null
python -m json.tool schemas/custom-gpt.schema.json > /dev/null
python -m json.tool schemas/vercel-project.schema.json > /dev/null
python -m json.tool schemas/funding-product.schema.json > /dev/null
python -m json.tool schemas/webhook-event.schema.json > /dev/null
```

## Link / Reference Checks

Search for stylesheet references:

```bash
grep -R "style.css\|styles.css" -n *.html knowledge-base portfolio examples roadmap site-data schemas 2>/dev/null
```

Make sure:

- New pages use `styles.css`.
- `style.css` alias exists for compatibility.
- No references to missing CSS files remain.

Search for placeholder or risky content:

```bash
grep -R "guaranteed approval\|guaranteed funding\|everyone qualifies\|no documents needed\|api_key\|access_token\|webhook_secret" -n .
```

If risky language appears only inside restricted-claims lists or do-not-claim lists, that is acceptable. If it appears as a promise, revise it.

## Public-Safe Review

Before PR, verify:

- Funding pages use readiness and review language.
- Business-credit pages avoid credit-repair framing and outcome promises.
- Affiliate pages include disclosure language.
- Partner pages do not expose payout terms.
- Automation examples use synthetic payloads.
- No private data or secrets are included.
- No fake testimonials or fake trust badges are included.

## PR Requirements

Open a PR into `main`.

Suggested title:

```text
Add full AI Agent Library static site pack
```

Suggested body:

Use the content from `PR_DESCRIPTION.md`.

## PR Must Include

- Summary of root files
- Pages added
- Data files added
- Knowledge-base folders added
- Schemas added
- Examples added
- Portfolio folders added
- Validation steps run
- Public-safe review notes

## Do Not Merge Automatically

Open the PR and stop. Do not merge unless explicitly instructed.

## Final Jules Output

When complete, report:

```text
Branch:
Commit SHA:
PR URL:

Files added/updated:
- ...

Validation:
- ...

Known issues:
- ...

Recommended next steps:
- ...
```
````

---

## `JULES_REPO_AUDIT_PROMPT.md`

````md id="jules-repo-audit-prompt"
# Jules Repo Audit Prompt — AI Agent Library Static Site Readiness

You are auditing:

```text
JFeimster/ai-agent-library
```

## Objective

Inspect the current repository state before adding or reviewing the static site pack.

Do not propose unrelated architecture.

Do not add framework dependencies.

Do not make changes unless explicitly instructed.

## Audit Areas

### 1. Top-Level Repo Inventory

List all top-level folders and files.

Specifically verify whether these exist:

```text
README.md
index.html
styles.css
style.css
script.js
agent-index.json
agents/
skills/
docs/
prompt-chains/
templates/
platforms/
site-data/
knowledge-base/
portfolio/
schemas/
roadmap/
examples/
```

### 2. Existing Static Site State

Check for:

- Existing homepage
- Existing CSS files
- Existing JavaScript files
- Existing static pages
- Any pages referencing `style.css`
- Any pages referencing `styles.css`
- Broken or inconsistent CSS references
- Duplicate pages with conflicting purpose

### 3. Agent / Skill Index State

Inspect:

```text
agent-index.json
skills/skill-index.json
agents/
skills/
```

Report:

- Whether canonical indexes exist
- Whether data appears valid JSON
- Whether fallback data files are needed
- Whether any pages should load canonical index first and fallback second

### 4. Existing Docs / Prompt / Template State

Inspect:

```text
docs/
prompt-chains/
templates/
platforms/
```

Report:

- Useful existing assets
- Possible conflicts with new site files
- Any README or nav references that need updates

### 5. Existing GitHub / Vercel Readiness

Inspect:

```text
vercel.json
.github/
```

Report:

- Whether `vercel.json` exists
- Whether `git.deploymentEnabled` is set
- Whether `cleanUrls` is set
- Whether `trailingSlash` is set
- Whether workflows exist
- Whether any workflow might fail after static files are added

### 6. Risk Scan

Search for:

```text
guaranteed approval
guaranteed funding
everyone qualifies
no documents needed
api_key
access_token
webhook_secret
password
private_key
```

Report whether matches are safe restricted-claim examples or unsafe promises/secrets.

## Output Format

Return:

```md
# AI Agent Library Repo Audit

## Summary

[Short summary]

## Top-Level Inventory

[List]

## Static Site Findings

[Findings]

## Agent / Skill Index Findings

[Findings]

## Docs / Prompt / Template Findings

[Findings]

## Vercel / Workflow Findings

[Findings]

## Risk Scan Findings

[Findings]

## Conflicts Before Adding Site Pack

- Conflict 1
- Conflict 2

## Recommended File Placement

[Recommended placement]

## Blockers

- Blocker 1
- Blocker 2

## Ready for Implementation?

Yes / No

## Notes

[Anything important]
```
````

---

## `JULES_VALIDATION_PROMPT.md`

````md id="jules-validation-prompt"
# Jules Validation Prompt — AI Agent Library Static Site Pack

You are validating the static site pack in:

```text
JFeimster/ai-agent-library
```

## Objective

Verify the generated static site pack after implementation.

Do not redesign.

Do not add new features unless needed to fix validation errors.

Do not introduce a framework or build step.

## Required Validation

### 1. File Existence

Verify the following exist:

```text
index.html
styles.css
script.js
style.css
SITE_PACK_README.md
REPO_PLACEMENT_CHECKLIST.md
PR_DESCRIPTION.md
JULES_HANDOFF_NOTE.md
```

Verify these folders exist:

```text
site-data/
knowledge-base/
portfolio/
schemas/
roadmap/
examples/
```

### 2. HTML Page Existence

Verify these pages exist:

```text
agent-catalog.html
categories.html
tags.html
search.html
featured.html
new.html
skill-catalog.html
skill-categories.html
top-skills.html
skill-builder.html
terms.html
privacy.html
disclaimer.html
affiliate-disclosure.html
data-policy.html
get-started.html
partners.html
team.html
profile.html
platforms.html
portfolio.html
knowledge-bases.html
roadmap.html
changelog.html
contribute.html
```

### 3. Static Server Test

Run:

```bash
python -m http.server 8080
```

Verify locally:

```text
http://localhost:8080/
```

Check:

- Homepage loads.
- CSS loads.
- JS loads.
- Navigation works.
- Footer links work.
- Agent catalog displays fallback data.
- Skill catalog displays fallback data.
- Search page displays results.
- Categories/tags/featured/new pages render.
- Partner pages render.
- Legal pages render.

### 4. JSON Validation

Validate:

```text
site-data/*.json
schemas/*.json
knowledge-base/**/index.json
portfolio/**/index.json
```

PowerShell:

```powershell
Get-ChildItem site-data -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem schemas -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem knowledge-base -Recurse -Filter index.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem portfolio -Recurse -Filter index.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
```

### 5. CSS Compatibility

Verify:

```text
styles.css
style.css
```

`style.css` should contain:

```css
@import url("./styles.css");
```

### 6. Link and Reference Review

Search for likely broken references:

```bash
grep -R "href=\".*\.html\|src=\".*\.js\|href=\".*\.css" -n *.html
```

Verify referenced root HTML, CSS, and JS files exist.

### 7. Public-Safe Review

Search:

```bash
grep -R "guaranteed approval\|guaranteed funding\|everyone qualifies\|no documents needed\|guaranteed revenue\|guaranteed rankings" -n .
```

If those phrases only appear in restricted-claim lists, do-not-claim lists, or safety examples, that is okay.

If they appear as promotional promises, revise.

### 8. Secret / Private Data Review

Search:

```bash
grep -R "api_key\|access_token\|webhook_secret\|password\|private_key\|bank_account\|tax_id" -n .
```

If these appear only in restricted-field lists or synthetic examples, that is okay.

If secrets or real credentials appear, remove immediately.

## Required Output

Return:

```md
# Static Site Pack Validation Report

## Summary

Pass / Fail / Partial

## File Existence

[Results]

## Static Server Test

[Results]

## JSON Validation

[Results]

## CSS Compatibility

[Results]

## Link Review

[Results]

## Public-Safe Language Review

[Results]

## Secret / Private Data Review

[Results]

## Fixes Applied

- Fix 1
- Fix 2

## Remaining Issues

- Issue 1
- Issue 2

## Ready for PR?

Yes / No
```
````

---

## `JULES_PR_REVIEW_PROMPT.md`

````md id="jules-pr-review-prompt"
# Jules PR Review Prompt — AI Agent Library Static Site Pack

You are reviewing a PR in:

```text
JFeimster/ai-agent-library
```

## Objective

Review the PR for correctness, repo hygiene, static-site functionality, public-safe language, and merge readiness.

Do not propose unrelated architecture.

Do not request changes for preferences only.

Focus on whether the PR safely adds the intended static site pack.

## Review Scope

### 1. PR Metadata

Check:

- PR title
- PR summary
- Changed file count
- Branch name
- Base branch
- Whether the PR includes ZIPs or screenshots unintentionally
- Whether validation steps are documented

### 2. File Inventory

Confirm the PR includes the expected categories:

- Root site files
- Directory/discovery pages
- Skills pages
- Legal/trust pages
- Partner pages
- Supporting pages
- Site data
- Knowledge-base folders
- Portfolio folders
- Schemas
- Roadmap files
- Examples

### 3. Static Site Review

Check:

- `index.html` exists
- `styles.css` exists
- `script.js` exists
- `style.css` compatibility alias exists
- Header/nav links resolve
- Footer links resolve
- Dynamic pages use fallback JSON
- No framework/build step added

### 4. JSON / Schema Review

Validate:

- `site-data/*.json`
- `schemas/*.json`
- `knowledge-base/**/index.json`
- `portfolio/**/index.json`

Flag malformed JSON or schema syntax issues.

### 5. Public-Safe Language Review

Review funding, business-credit, affiliate, partner, automation, and trust files.

Flag any promotional claims that imply:

- Guaranteed approval
- Guaranteed funding
- Guaranteed credit outcome
- Guaranteed revenue
- Guaranteed rankings
- Everyone qualifies
- No documents required
- AI replaces professional review

Do not flag these phrases when they appear inside restricted-claim lists or do-not-claim lists.

### 6. Secret / Private Data Review

Flag any actual credentials or private data.

Allowed only in restricted-field examples:

- `api_key`
- `access_token`
- `webhook_secret`
- `password`
- `private_key`
- `bank_account`
- `tax_id`

### 7. Deployment Review

Check:

- `vercel.json` was not accidentally changed in a way that enables/disables deployment unintentionally.
- No environment variable secrets were committed.
- No external script was added without reason.

### 8. Merge Readiness

Classify the PR:

```text
APPROVE
COMMENT
REQUEST CHANGES
```

Use:

- `APPROVE` if static site pack is clean and validation passes.
- `COMMENT` if minor non-blocking follow-ups exist.
- `REQUEST CHANGES` if broken JSON, missing root files, unsafe claims, secrets, or major nav breakage exists.

## Required Output

```md
# PR Review — AI Agent Library Static Site Pack

## Recommendation

APPROVE / COMMENT / REQUEST CHANGES

## Summary

[Short summary]

## What Looks Good

- Item 1
- Item 2

## Blocking Issues

- Issue 1
- Issue 2

## Non-Blocking Follow-Ups

- Follow-up 1
- Follow-up 2

## File Inventory Findings

[Findings]

## Static Site Findings

[Findings]

## JSON / Schema Findings

[Findings]

## Public-Safe Language Findings

[Findings]

## Secret / Private Data Findings

[Findings]

## Deployment Findings

[Findings]

## Suggested PR Comment

[Copy-pasteable GitHub PR comment]
```
````

---

## `JULES_TASK_BREAKDOWN.md`

````md id="jules-task-breakdown"
# Jules Task Breakdown — AI Agent Library

Use these as separate Jules tasks if the full pack is too large for one session.

## Task 1 — Repo Audit Before Static Site Pack

### Prompt

```md
Audit `JFeimster/ai-agent-library` before adding the generated static site pack.

Inspect the current repo structure, existing HTML/CSS/JS files, agent indexes, skill indexes, README, Vercel config, workflows, and any potential file conflicts.

Do not modify files.

Return a structured audit with:
- top-level inventory
- existing static site state
- existing agent/skill index state
- conflicts
- Vercel/deployment findings
- public-safe risk scan
- readiness recommendation
```

## Task 2 — Add Root Site + Directory Pages

### Prompt

```md
Create branch `site/full-static-site-pack`.

Add or update the root static site files and discovery pages:

Root:
- index.html
- styles.css
- script.js
- style.css

Discovery:
- agent-catalog.html
- categories.html
- tags.html
- search.html
- featured.html
- new.html

Rules:
- Static HTML/CSS/JS only.
- No React, Next.js, npm, package.json, or build step.
- `style.css` must import `styles.css`.
- Pages must share consistent navigation/footer.
- Dynamic pages must use fallback data from `site-data/` when canonical files are missing.
- Do not commit ZIP files or screenshots.

Validate locally with `python -m http.server 8080`.

Report branch, changed files, validation, and issues.
```

## Task 3 — Add Skills + Legal + Partner Pages

### Prompt

```md
On branch `site/full-static-site-pack`, add the skills, legal/trust, partner, and supporting pages.

Skills:
- skill-catalog.html
- skill-categories.html
- top-skills.html
- skill-builder.html

Legal/trust:
- terms.html
- privacy.html
- disclaimer.html
- affiliate-disclosure.html
- data-policy.html

Partner/affiliate:
- get-started.html
- partners.html
- team.html
- profile.html

Supporting:
- platforms.html
- portfolio.html
- knowledge-bases.html
- roadmap.html
- changelog.html
- contribute.html

Rules:
- Keep static-first.
- Use `styles.css` and `script.js`.
- Preserve public-safe language.
- Partner pages must link affiliate disclosure.
- Funding/business-credit language must avoid guarantees.

Validate that pages open and nav/footer links resolve.
```

## Task 4 — Add Site Data + Knowledge Bases

### Prompt

```md
On branch `site/full-static-site-pack`, add fallback site data and knowledge-base folders.

Site data:
- site-data/agents.fallback.json
- site-data/skills.fallback.json
- site-data/categories.json
- site-data/tags.json
- site-data/featured.json
- site-data/changelog.json

Knowledge bases:
- knowledge-base/funding/
- knowledge-base/partner-enablement/
- knowledge-base/crm/
- knowledge-base/content-ops/
- knowledge-base/automation/
- knowledge-base/local-referrals/
- knowledge-base/engineering-as-marketing/

Each knowledge-base folder must include:
- README.md
- index.json
- examples.md

Rules:
- JSON must validate.
- Examples must be synthetic.
- No secrets or private client data.
- Public-safe funding, business-credit, affiliate, automation, and partner language only.

Run JSON validation and report results.
```

## Task 5 — Add Schemas + Roadmap + Examples + Portfolio

### Prompt

```md
On branch `site/full-static-site-pack`, add schemas, roadmap files, examples, and portfolio folders.

Schemas:
- schemas/agent.schema.json
- schemas/custom-gpt.schema.json
- schemas/vercel-project.schema.json
- schemas/funding-product.schema.json
- schemas/webhook-event.schema.json

Roadmap:
- roadmap/phase-1-fast-mvp.md
- roadmap/phase-2-distribution-system.md
- roadmap/phase-3-marketplace-layer.md
- roadmap/phase-4-platform-layer.md

Examples:
- examples/funding/README.md
- examples/funding/example-001.md
- examples/partner-enablement/README.md
- examples/partner-enablement/example-001.md
- examples/content-ops/README.md
- examples/content-ops/example-001.md
- examples/automation/README.md
- examples/automation/example-001.md

Portfolio:
- portfolio/vercel/README.md
- portfolio/vercel/index.json
- portfolio/custom-gpts/README.md
- portfolio/custom-gpts/index.json
- portfolio/gemini-gems/README.md
- portfolio/gemini-gems/index.json
- portfolio/flash-ui/README.md
- portfolio/flash-ui/index.json

Validate all JSON.
Confirm no private data or secrets.
```

## Task 6 — Add README / Handoff / PR Docs

### Prompt

```md
On branch `site/full-static-site-pack`, add repo integration docs and README updates.

Add:
- SITE_PACK_README.md
- REPO_PLACEMENT_CHECKLIST.md
- PR_DESCRIPTION.md
- JULES_HANDOFF_NOTE.md

Update root README.md with a `Static Site Layer` section.

Do not replace useful existing README content.

Include:
- core site files
- page inventory
- knowledge-base folders
- portfolio folders
- schema files
- roadmap files
- examples
- site-data files
- local run command
- static-first rule
- public-safe language rule

Validate markdown paths and make sure PR docs match actual files.
```

## Task 7 — Final Validation + Open PR

### Prompt

```md
Run final validation for branch `site/full-static-site-pack`.

Validate:
- File inventory
- Local static server
- CSS/JS loading
- Nav links
- Footer links
- JSON parsing
- Schema parsing
- Public-safe language
- Secret/private data scan
- Vercel config unchanged or intentionally documented

Then open a PR into `main`.

PR title:
Add full AI Agent Library static site pack

Use `PR_DESCRIPTION.md` as the PR body.

Do not merge.

Return:
- branch
- commit SHA
- PR URL
- changed files summary
- validation results
- remaining issues
```

## Task 8 — PR Review After Jules Opens PR

### Prompt

```md
Review the open PR for `JFeimster/ai-agent-library`.

Check:
- changed files
- root static files
- pages
- data files
- schemas
- knowledge bases
- roadmap
- examples
- portfolio
- README update
- public-safe language
- secret/private data scan
- Vercel deployment behavior
- JSON validity
- merge readiness

Return:
- APPROVE / COMMENT / REQUEST CHANGES
- blockers
- non-blocking follow-ups
- suggested GitHub PR review comment
```
````

---

## `POST_PR_REVIEW_CHECKLIST.md`

```md id="post-pr-review-checklist"
# Post-PR Review Checklist — AI Agent Library Static Site Pack

Use this after Jules opens the PR.

## PR Metadata

- [ ] PR targets `main`.
- [ ] PR branch is `site/full-static-site-pack`.
- [ ] PR title is clear.
- [ ] PR body lists major file groups.
- [ ] PR body includes validation notes.
- [ ] PR does not include ZIP files.
- [ ] PR does not include screenshots unless intentionally requested.

## File Groups

- [ ] Root site files added.
- [ ] Directory/discovery pages added.
- [ ] Skills pages added.
- [ ] Legal/trust pages added.
- [ ] Partner pages added.
- [ ] Supporting pages added.
- [ ] Site data added.
- [ ] Knowledge bases added.
- [ ] Schemas added.
- [ ] Roadmap files added.
- [ ] Examples added.
- [ ] Portfolio files added.
- [ ] README updated.
- [ ] Integration docs added.

## Static Site

- [ ] `index.html` loads.
- [ ] `styles.css` loads.
- [ ] `script.js` loads.
- [ ] `style.css` alias exists.
- [ ] Header nav works.
- [ ] Footer links work.
- [ ] Agent catalog renders.
- [ ] Skill catalog renders.
- [ ] Search page works.
- [ ] Categories/tags pages work.
- [ ] Partner pages render.
- [ ] Legal pages render.

## JSON / Schema

- [ ] `site-data/*.json` validates.
- [ ] `schemas/*.json` validates.
- [ ] `knowledge-base/**/index.json` validates.
- [ ] `portfolio/**/index.json` validates.

## Public-Safe Review

- [ ] No funding guarantees.
- [ ] No approval guarantees.
- [ ] No credit outcome guarantees.
- [ ] No revenue guarantees.
- [ ] No ranking guarantees.
- [ ] No fake testimonials.
- [ ] No fake trust badges.
- [ ] Affiliate disclosure is visible.
- [ ] Partner pages avoid hidden-compensation framing.
- [ ] Automation examples are synthetic.

## Secrets / Private Data

- [ ] No API keys.
- [ ] No access tokens.
- [ ] No webhook secrets.
- [ ] No private keys.
- [ ] No real borrower/customer data.
- [ ] No private CRM exports.
- [ ] No bank statements or tax data.
- [ ] No private provider terms.

## Vercel / Deployment

- [ ] `vercel.json` reviewed.
- [ ] Auto-deploy behavior is intentional.
- [ ] No accidental environment changes.
- [ ] No external scripts added without reason.
- [ ] Static site requires no build step.

## Merge Decision

Approve only if:

- [ ] Validation passes.
- [ ] No secrets/private data exist.
- [ ] No unsafe promotional claims exist.
- [ ] Core pages load.
- [ ] JSON validates.
- [ ] PR does not include unwanted binaries or ZIPs.
```

---

## `MERGE_READINESS_CHECKLIST.md`

```md id="merge-readiness-checklist"
# Merge Readiness Checklist — AI Agent Library Static Site Pack

## Approve Merge If

- [ ] PR validation passes.
- [ ] Site is static-first.
- [ ] No framework dependency was added.
- [ ] No ZIP files were committed.
- [ ] No screenshots were committed unintentionally.
- [ ] No secrets or private data were committed.
- [ ] JSON files parse.
- [ ] Root pages open.
- [ ] Nav/footer links resolve.
- [ ] `style.css` alias exists.
- [ ] Public-safe language is acceptable.
- [ ] PR body documents validation.
- [ ] Remaining issues are non-blocking.

## Request Changes If

- [ ] Any JSON file is malformed.
- [ ] `index.html` is missing.
- [ ] `styles.css` is missing.
- [ ] `script.js` is missing.
- [ ] `style.css` alias is missing and older pages reference it.
- [ ] PR adds React, Next.js, npm, package.json, or build tooling without explicit instruction.
- [ ] PR includes ZIP files unintentionally.
- [ ] PR includes secrets or private client data.
- [ ] PR includes unsafe funding, credit, affiliate, or outcome guarantees.
- [ ] Core nav points to missing files.
- [ ] Partner pages omit affiliate disclosure.
- [ ] `vercel.json` deployment behavior changed unintentionally.

## Suggested Approval Comment

```md
Approved. This PR adds the full static-first AI Agent Library site pack with root pages, discovery pages, skill pages, legal/trust pages, partner pages, site data, knowledge bases, schemas, roadmap docs, examples, portfolio records, README updates, and the `style.css` compatibility alias.

Validation confirmed:
- Static site structure is framework-free.
- JSON/schema files parse.
- Public-safe funding, business-credit, affiliate, and partner language is preserved.
- No secrets or private data are included.
- No ZIP files are committed.

Ready to merge.
```

## Suggested Request Changes Comment

```md
Requesting changes before merge.

Blocking issues:
- [List blocker]
- [List blocker]

Please fix the blockers, rerun validation, and update the PR summary with the new validation result.

Required checks:
- Static pages load locally.
- JSON files parse.
- `style.css` compatibility alias exists.
- No unsafe funding/credit/affiliate claims.
- No secrets or private data.
- No unwanted ZIPs/screenshots.
```
```

Batch 16 should be **GitHub connector execution option**:

```text
Review current repo state with GitHub connector
Create branch
Commit generated static site files
Open PR
Review PR
Merge readiness recommendation
```


<!-- OPTIONAL SOURCE: Batch 16 — GitHub Connector Execution Option.md -->

# Optional Source Batch: Batch 16 — GitHub Connector Execution Option.md

# you asked

message time: 2026-06-18 14:54:59

Proceed Batch 16

---

# chatgpt response

## Batch 16 — GitHub Connector Execution Option

## Current connector status

I verified the repo and started the safe execution path.

```text id="batch-16-status"
Repo: JFeimster/ai-agent-library
Default branch: main
Execution branch created: site/full-static-site-pack
PR opened: not yet
Files committed: not yet
Merge attempted: no
```

Main already has a static Visual Directory note in the README, including local preview instructions with `python3 -m http.server 8000` and deployment docs reference.  The repo README also already lists the current core structure with `agents.md`, `agent-index.json`, `agents/`, `skills/`, `docs/`, `prompt-chains/`, `templates/`, and `platforms/vercel-web-apps/`.  PR #40 was already merged and added `search.html`, so the next execution should avoid blindly overwriting existing root pages without a diff. 

---

## Recommended connector execution strategy

```text id="connector-execution-strategy"
1. Keep branch:
   site/full-static-site-pack

2. Do not overwrite existing root HTML files yet.

3. Add missing support layers first:
   site-data/
   knowledge-base/
   schemas/
   roadmap/
   examples/
   portfolio/
   SITE_PACK_README.md
   REPO_PLACEMENT_CHECKLIST.md
   PR_DESCRIPTION.md
   JULES_HANDOFF_NOTE.md
   style.css compatibility alias

4. Compare existing root pages against generated pages.

5. Only update root pages if the generated version is clearly better or fills a missing function.

6. Open PR.

7. Review PR before merge.
```

---

## Files to commit first

```text id="batch-16-first-commit-files"
style.css
SITE_PACK_README.md
REPO_PLACEMENT_CHECKLIST.md
PR_DESCRIPTION.md
JULES_HANDOFF_NOTE.md

site-data/agents.fallback.json
site-data/skills.fallback.json
site-data/categories.json
site-data/tags.json
site-data/featured.json
site-data/changelog.json

knowledge-base/funding/README.md
knowledge-base/funding/index.json
knowledge-base/funding/examples.md

knowledge-base/partner-enablement/README.md
knowledge-base/partner-enablement/index.json
knowledge-base/partner-enablement/examples.md

knowledge-base/crm/README.md
knowledge-base/crm/index.json
knowledge-base/crm/examples.md

knowledge-base/content-ops/README.md
knowledge-base/content-ops/index.json
knowledge-base/content-ops/examples.md

knowledge-base/automation/README.md
knowledge-base/automation/index.json
knowledge-base/automation/examples.md

knowledge-base/local-referrals/README.md
knowledge-base/local-referrals/index.json
knowledge-base/local-referrals/examples.md

knowledge-base/engineering-as-marketing/README.md
knowledge-base/engineering-as-marketing/index.json
knowledge-base/engineering-as-marketing/examples.md

schemas/agent.schema.json
schemas/custom-gpt.schema.json
schemas/vercel-project.schema.json
schemas/funding-product.schema.json
schemas/webhook-event.schema.json

roadmap/phase-1-fast-mvp.md
roadmap/phase-2-distribution-system.md
roadmap/phase-3-marketplace-layer.md
roadmap/phase-4-platform-layer.md

examples/funding/README.md
examples/funding/example-001.md

examples/partner-enablement/README.md
examples/partner-enablement/example-001.md

examples/content-ops/README.md
examples/content-ops/example-001.md

examples/automation/README.md
examples/automation/example-001.md

portfolio/vercel/README.md
portfolio/vercel/index.json

portfolio/custom-gpts/README.md
portfolio/custom-gpts/index.json

portfolio/gemini-gems/README.md
portfolio/gemini-gems/index.json

portfolio/flash-ui/README.md
portfolio/flash-ui/index.json
```

---

## Files to compare before overwriting

These already appear to exist in some form on `main` or were recently added through PRs, so they should be diff-reviewed before replacing:

```text id="batch-16-compare-before-overwrite"
index.html
styles.css
script.js
agent-catalog.html
categories.html
tags.html
search.html
featured.html
new.html
skill-catalog.html
skill-categories.html
top-skills.html
skill-builder.html
terms.html
privacy.html
disclaimer.html
affiliate-disclosure.html
data-policy.html
get-started.html
partners.html
team.html
profile.html
platforms.html
portfolio.html
knowledge-bases.html
roadmap.html
changelog.html
contribute.html
```

---

## GitHub connector PR plan

```md id="github-connector-pr-plan"
# GitHub Connector Execution Plan

## Branch

site/full-static-site-pack

## Commit 1

Add support docs, compatibility CSS alias, fallback data, knowledge bases, schemas, roadmap files, examples, and portfolio folders.

Suggested commit message:

Add static site support layers

## Commit 2

Only if needed after diff review, update root static pages.

Suggested commit message:

Update AI Agent Library static pages

## Pull Request

Title:

Add full AI Agent Library static site pack

Body:

Use PR_DESCRIPTION.md.

## PR Review

Review for:

- Existing root page conflicts
- JSON validity
- Schema validity
- Missing CSS/JS references
- Public-safe language
- No secrets/private data
- No unintended Vercel deployment changes
```

---

## Jules task to run next

```md id="batch-16-jules-next-task"
# Jules Task — Add Missing Static Site Support Layers

Repo:

JFeimster/ai-agent-library

Branch:

site/full-static-site-pack

## Goal

Add the missing support layers for the AI Agent Library static site pack without overwriting existing root pages unless a diff confirms the generated file is better.

## Add these first

- `style.css` compatibility alias
- `SITE_PACK_README.md`
- `REPO_PLACEMENT_CHECKLIST.md`
- `PR_DESCRIPTION.md`
- `JULES_HANDOFF_NOTE.md`
- `site-data/`
- `knowledge-base/`
- `schemas/`
- `roadmap/`
- `examples/`
- `portfolio/`

## Do not overwrite yet

Do not overwrite root HTML files like `index.html`, `search.html`, `agent-catalog.html`, `skill-catalog.html`, or `styles.css` until you compare them against the generated versions.

## Validation

Run:

```bash
python -m http.server 8080
```

Validate:

- Homepage loads
- CSS loads
- JS loads
- Agent catalog renders
- Skill catalog renders
- Search page renders
- Footer links resolve
- Legal pages resolve
- Partner pages resolve

Validate JSON:

```powershell
Get-ChildItem site-data -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem schemas -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem knowledge-base -Recurse -Filter index.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem portfolio -Recurse -Filter index.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
```

## Safety scan

Search for unsafe promotional claims and secrets.

Allowed if they appear inside restricted-claim or do-not-claim lists.

Not allowed if they appear as active promotional claims.

Search terms:

```text
guaranteed approval
guaranteed funding
everyone qualifies
no documents needed
guaranteed revenue
guaranteed rankings
api_key
access_token
webhook_secret
password
private_key
```

## PR

Open a PR into `main`.

Title:

Add full AI Agent Library static site pack

Use `PR_DESCRIPTION.md` as the PR body.

Do not merge.
```

---

## Merge readiness recommendation

```text id="batch-16-merge-readiness"
Current recommendation: do not merge yet.

Reason:
- Branch is created.
- Main already has static site work.
- Missing support folders/data/docs should be committed first.
- Root pages should be diff-reviewed before overwriting.
- PR should be opened and reviewed before merge.
```

Batch 17 should be **PR review / connector follow-up after Jules completes the branch**:

```text id="batch-17-list"
Fetch PR
Review changed files
Check diff risk
Check JSON/schema validity notes
Check public-safe language
Recommend approve/comment/request changes
Suggest merge or fix list
```


<!-- OPTIONAL SOURCE: Batch 17 — PR Review + Connector Follow-Up After Jules Completes Branch.md -->

# Optional Source Batch: Batch 17 — PR Review + Connector Follow-Up After Jules Completes Branch.md

# you asked

message time: 2026-06-18 15:19:01

Proceed (Batch 17)

---

# chatgpt response

## Batch 17 — PR Review / Connector Follow-Up After Jules Completes Branch

No open PR for the new static site pack is visible yet. The latest recent PR in the repo is still PR #40, “Add search.html for agent library search interface,” and older recent PRs include #30, #29, #28, #27, and #26.  

Use this batch once Jules opens the new PR.

---

## `JULES_PR_FETCH_AND_REVIEW_PROMPT.md`

```md id="jules-pr-fetch-and-review-prompt"
# Jules Prompt — Fetch and Review AI Agent Library Static Site Pack PR

Repo:

JFeimster/ai-agent-library

## Objective

Review the PR that adds the full AI Agent Library static site pack.

Do not merge.

Do not redesign.

Do not request changes for minor preferences.

Focus on whether the PR is safe, valid, static-first, and merge-ready.

## Step 1 — Identify the PR

Find the open PR with one of these likely titles:

- Add full AI Agent Library static site pack
- Add AI Agent Library static MVP
- Add static site support layers
- Update AI Agent Library static pages

Expected branch:

```text
site/full-static-site-pack
```

Expected base:

```text
main
```

If no PR exists, report:

```text
No open PR found for site/full-static-site-pack.
```

## Step 2 — Fetch PR Metadata

Record:

- PR number
- PR title
- PR URL
- Branch
- Base branch
- Author
- Commit SHA
- Mergeability status
- Checks status
- Changed file count
- Additions/deletions
- Whether PR is draft or ready

## Step 3 — Review Changed Files

Group changed files into:

```text
Root site files
Directory/discovery pages
Skills pages
Legal/trust pages
Partner/affiliate pages
Supporting pages
Site data
Knowledge bases
Schemas
Roadmap
Examples
Portfolio
README/docs
Config/deployment files
Unexpected files
```

Flag unexpected files such as:

- ZIP files
- screenshots
- generated cache files
- node_modules
- package-lock.json
- package.json if no framework was requested
- private data files
- credentials
- unrelated repo changes

## Step 4 — Static Site Review

Verify:

- `index.html` exists.
- `styles.css` exists.
- `script.js` exists.
- `style.css` exists as compatibility alias.
- `style.css` imports `styles.css`.
- No framework or build step was introduced.
- Pages use shared navigation and footer.
- Pages reference valid local CSS/JS files.
- Dynamic pages use fallback data.
- Empty states exist where data might be missing.

## Step 5 — Data and Schema Review

Validate JSON files:

```text
site-data/*.json
schemas/*.json
knowledge-base/**/index.json
portfolio/**/index.json
```

Flag:

- malformed JSON
- trailing commas
- invalid escaping
- missing required files
- duplicate file names with conflicting purpose
- schema files that are not valid JSON

## Step 6 — Public-Safe Language Review

Search for:

```text
guaranteed approval
guaranteed funding
guaranteed credit
guaranteed revenue
guaranteed rankings
everyone qualifies
no documents needed
no risk
instant approval for everyone
```

Acceptable if these appear inside:

- restricted-claim lists
- do-not-claim lists
- safety checklists
- examples of language to avoid

Not acceptable if they appear as promotional claims.

## Step 7 — Secret / Private Data Review

Search for:

```text
api_key
access_token
webhook_secret
password
private_key
client_secret
bank_account
tax_id
credit_report
```

Acceptable if these appear inside:

- restricted-field lists
- synthetic example warnings
- data policy examples

Not acceptable if they appear as actual credentials or real private data.

## Step 8 — Deployment Review

Check:

- `vercel.json` changes
- auto-deploy behavior
- environment settings
- external scripts
- analytics additions
- build commands
- framework settings

Flag if:

- auto-deploy was enabled or disabled without explanation
- build tooling was added
- secrets were committed
- external scripts were added without review
- Vercel behavior changed unintentionally

## Step 9 — Decide Review Outcome

Use one:

```text
APPROVE
COMMENT
REQUEST CHANGES
```

Approve if:

- Static site files are present
- JSON validates
- No secrets/private data
- No unsafe claims
- No unwanted framework/build changes
- No critical nav/reference breakage

Comment if:

- Minor follow-ups exist
- Non-blocking improvements are useful
- PR is safe but could be tightened

Request changes if:

- JSON is broken
- root files are missing
- secrets/private data exist
- unsafe promotional claims exist
- package/build tooling was added unintentionally
- nav/core pages are broken
- ZIPs/screenshots were committed unintentionally

## Required Output

Return:

```md
# PR Review — AI Agent Library Static Site Pack

## Recommendation

APPROVE / COMMENT / REQUEST CHANGES

## PR Metadata

- PR:
- Branch:
- Base:
- Commit:
- Changed files:
- Checks:

## Summary

[Short review summary]

## Changed File Groups

[List grouped files]

## Static Site Findings

[Findings]

## JSON / Schema Findings

[Findings]

## Public-Safe Language Findings

[Findings]

## Secret / Private Data Findings

[Findings]

## Deployment Findings

[Findings]

## Blocking Issues

- Issue 1
- Issue 2

## Non-Blocking Follow-Ups

- Follow-up 1
- Follow-up 2

## Suggested GitHub Review Comment

[Copy-pasteable comment]

## Merge Readiness

Ready / Not ready
```
```

---

## `CONNECTOR_PR_REVIEW_STEPS.md`

```md id="connector-pr-review-steps"
# Connector PR Review Steps

Use this when reviewing the PR through the GitHub connector.

## 1. Fetch Open PRs

Look for an open PR from:

```text
site/full-static-site-pack
```

Expected title:

```text
Add full AI Agent Library static site pack
```

## 2. Fetch PR Details

Review:

- PR metadata
- diff summary
- changed filenames
- comments
- review threads
- CI/check status

## 3. Changed File Review

Expected groups:

```text
Root:
  index.html
  styles.css
  script.js
  style.css
  README.md
  SITE_PACK_README.md
  REPO_PLACEMENT_CHECKLIST.md
  PR_DESCRIPTION.md
  JULES_HANDOFF_NOTE.md

Pages:
  agent-catalog.html
  categories.html
  tags.html
  search.html
  featured.html
  new.html
  skill-catalog.html
  skill-categories.html
  top-skills.html
  skill-builder.html
  terms.html
  privacy.html
  disclaimer.html
  affiliate-disclosure.html
  data-policy.html
  get-started.html
  partners.html
  team.html
  profile.html
  platforms.html
  portfolio.html
  knowledge-bases.html
  roadmap.html
  changelog.html
  contribute.html

Data:
  site-data/

Knowledge:
  knowledge-base/

Schemas:
  schemas/

Roadmap:
  roadmap/

Examples:
  examples/

Portfolio:
  portfolio/
```

## 4. Unexpected File Review

Flag if present:

```text
*.zip
*.png
*.jpg
*.jpeg
*.webp
node_modules/
package.json
package-lock.json
yarn.lock
pnpm-lock.yaml
.next/
dist/
build/
.env
.env.local
.env.production
```

Exception:

- Images are okay only if explicitly intended as site assets.
- Package files are okay only if explicitly requested, which they were not for this static-first pack.

## 5. Static Site Checks

Confirm:

- `styles.css` is the main stylesheet.
- `style.css` exists as alias.
- HTML pages reference `styles.css` or valid CSS.
- JS references are valid.
- Nav does not point to missing root pages.
- Footer links resolve.
- `script.js` contains shared helpers.
- Catalog pages load fallback data.

## 6. JSON Checks

Validate mentally from diff or ask Jules to run:

```powershell
Get-ChildItem site-data -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem schemas -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem knowledge-base -Recurse -Filter index.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem portfolio -Recurse -Filter index.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
```

## 7. Language Risk Checks

Allowed only in restricted-claim lists:

```text
guaranteed approval
guaranteed funding
everyone qualifies
no documents needed
guaranteed revenue
guaranteed rankings
```

Request changes if any of those are used as active sales claims.

## 8. Secret Checks

Allowed only in restricted-field lists:

```text
api_key
access_token
webhook_secret
password
private_key
client_secret
bank_account
tax_id
credit_report
```

Request changes if actual credentials or real sensitive data appear.

## 9. Deployment Checks

Review:

```text
vercel.json
.github/
```

Confirm no accidental deployment behavior changes.

## 10. Review Decision

Use:

```text
APPROVE
COMMENT
REQUEST CHANGES
```
```

---

## `PR_REVIEW_REPORT_TEMPLATE.md`

```md id="pr-review-report-template"
# PR Review — AI Agent Library Static Site Pack

## Recommendation

COMMENT

## PR Metadata

- PR:
- Branch:
- Base:
- Commit:
- Author:
- Changed files:
- Additions:
- Deletions:
- Checks:

## Summary

This PR adds the AI Agent Library static site pack. The review checks static-site integrity, repo placement, JSON validity, public-safe language, secret handling, deployment behavior, and merge readiness.

## Changed File Groups

### Root Site Files

- [ ] `index.html`
- [ ] `styles.css`
- [ ] `script.js`
- [ ] `style.css`
- [ ] `README.md`
- [ ] `SITE_PACK_README.md`
- [ ] `REPO_PLACEMENT_CHECKLIST.md`
- [ ] `PR_DESCRIPTION.md`
- [ ] `JULES_HANDOFF_NOTE.md`

### Directory / Discovery Pages

- [ ] `agent-catalog.html`
- [ ] `categories.html`
- [ ] `tags.html`
- [ ] `search.html`
- [ ] `featured.html`
- [ ] `new.html`

### Skills Pages

- [ ] `skill-catalog.html`
- [ ] `skill-categories.html`
- [ ] `top-skills.html`
- [ ] `skill-builder.html`

### Legal / Trust Pages

- [ ] `terms.html`
- [ ] `privacy.html`
- [ ] `disclaimer.html`
- [ ] `affiliate-disclosure.html`
- [ ] `data-policy.html`

### Partner Pages

- [ ] `get-started.html`
- [ ] `partners.html`
- [ ] `team.html`
- [ ] `profile.html`

### Supporting Pages

- [ ] `platforms.html`
- [ ] `portfolio.html`
- [ ] `knowledge-bases.html`
- [ ] `roadmap.html`
- [ ] `changelog.html`
- [ ] `contribute.html`

### Data / Docs / Supporting Folders

- [ ] `site-data/`
- [ ] `knowledge-base/`
- [ ] `schemas/`
- [ ] `roadmap/`
- [ ] `examples/`
- [ ] `portfolio/`

## Static Site Findings

- Homepage:
- CSS:
- JS:
- Navigation:
- Footer:
- Dynamic fallback data:
- Mobile/responsive risk:
- Existing page overwrite risk:

## JSON / Schema Findings

- `site-data/*.json`:
- `schemas/*.json`:
- `knowledge-base/**/index.json`:
- `portfolio/**/index.json`:

## Public-Safe Language Findings

Funding/business-credit/affiliate/partner wording:

- Pass / Fail / Partial

Notes:

- [Finding]

## Secret / Private Data Findings

Secrets/private data scan:

- Pass / Fail / Partial

Notes:

- [Finding]

## Deployment Findings

- `vercel.json`:
- GitHub workflows:
- Build tooling:
- External scripts:
- Auto-deploy behavior:

## Blocking Issues

- None identified yet.

## Non-Blocking Follow-Ups

- Add canonical `agent-index.json` updates if not included.
- Add canonical `skills/skill-index.json` updates if not included.
- Add per-agent Markdown specs.
- Add per-skill `SKILL.md` files.
- Add link-check workflow later.
- Add JSON schema validation workflow later.

## Suggested GitHub Review Comment

```md
Review complete.

Recommendation: COMMENT / APPROVE / REQUEST CHANGES

Summary:
- Static site structure reviewed.
- Data/schema files reviewed.
- Public-safe language reviewed.
- Secret/private data scan reviewed.
- Deployment behavior reviewed.

Blocking issues:
- [None / list blockers]

Non-blocking follow-ups:
- [List follow-ups]

Merge readiness:
- [Ready / Not ready]
```

## Merge Readiness

Not ready until PR exists and changed files are reviewed.
```

---

## `REQUEST_CHANGES_CONDITIONS.md`

```md id="request-changes-conditions"
# Request Changes Conditions

Request changes on the PR if any of the following are true.

## Static Site Blockers

- `index.html` is missing.
- `styles.css` is missing.
- `script.js` is missing.
- `style.css` alias is missing while pages reference `style.css`.
- Root nav points to missing files.
- Footer links point to missing legal/trust pages.
- Generated pages require a framework or build step.
- PR adds React, Next.js, npm, or package files without explicit approval.

## Data Blockers

- Any JSON file is malformed.
- Schema files are not valid JSON.
- Required fallback data files are missing.
- Catalog pages depend only on missing canonical data without fallback.

## Security / Privacy Blockers

- Actual API keys are committed.
- Access tokens are committed.
- Webhook secrets are committed.
- Private keys are committed.
- Real customer or borrower data appears.
- Private CRM exports appear.
- Bank statements, tax records, or credit reports appear.
- Private provider terms or internal underwriting logic appears in public files.

## Public-Safe Language Blockers

Request changes if promotional copy claims:

- Guaranteed approval
- Guaranteed funding
- Guaranteed credit outcomes
- Guaranteed revenue
- Guaranteed rankings
- Everyone qualifies
- No documents needed
- No risk
- AI replaces professional review

Do not request changes if these phrases appear only in:

- Restricted-claim lists
- Do-not-claim lists
- Data policy warnings
- Safety examples

## Deployment Blockers

- `vercel.json` changed deployment behavior without explanation.
- Auto-deploy was enabled unintentionally.
- Auto-deploy was disabled unintentionally.
- External scripts were added without reason.
- Environment variables or secrets were committed.
- Build settings were added for a static site without explanation.

## Repo Hygiene Blockers

- ZIP files committed unintentionally.
- Screenshots committed unintentionally.
- Generated cache/build folders committed.
- Large unrelated changes included.
- Existing repo structure overwritten without justification.
```

---

## `APPROVAL_COMMENT_TEMPLATE.md`

```md id="approval-comment-template"
# Approval Comment Template

```md
Approved. This PR adds the AI Agent Library static site pack in a static-first way and preserves the repo’s no-build-step direction.

Reviewed:
- Root static site files
- Directory and discovery pages
- Skills library pages
- Legal/trust pages
- Partner and affiliate pages
- Supporting pages
- Site data
- Knowledge-base folders
- Schemas
- Roadmap files
- Examples
- Portfolio folders
- README/support docs

Validation notes:
- Static file structure is appropriate.
- `style.css` compatibility alias is present.
- JSON/schema files are valid or validation was documented.
- Funding, business-credit, affiliate, and partner language avoids unsupported guarantees.
- Automation examples use synthetic data.
- No secrets or private client data were identified.
- No unwanted framework/build tooling was introduced.

Ready to merge.
```
```

---

## `COMMENT_ONLY_TEMPLATE.md`

```md id="comment-only-template"
# Comment-Only Review Template

```md
Review complete. Overall direction looks good and the PR appears aligned with the static-first AI Agent Library site pack.

Non-blocking follow-ups:
- Add canonical `agent-index.json` updates in a later PR if not included here.
- Add canonical `skills/skill-index.json` updates in a later PR if not included here.
- Add per-agent Markdown specs in future batches.
- Add per-skill `SKILL.md` folders in future batches.
- Add link-check and JSON-schema validation workflows later.
- Add screenshot previews after the first deployment if desired.

No merge blockers identified from the reviewed diff.

Recommendation: approve once validation notes are confirmed.
```
```

---

## `REQUEST_CHANGES_TEMPLATE.md`

```md id="request-changes-template"
# Request Changes Review Template

```md
Requesting changes before merge.

Blocking issues:
- [Blocker 1]
- [Blocker 2]
- [Blocker 3]

Required fixes:
- Fix malformed JSON or schema files.
- Confirm `index.html`, `styles.css`, `script.js`, and `style.css` alias exist.
- Remove any unintended ZIPs, screenshots, build artifacts, or package files.
- Remove any secrets, private data, or real customer records.
- Revise any promotional funding, credit, affiliate, revenue, or platform outcome guarantees.
- Confirm `vercel.json` deployment behavior was not changed unintentionally.
- Rerun static and JSON validation.

After fixes, update the PR summary with validation results and request re-review.
```
```

---

## `BATCH_17_CURRENT_STATUS.md`

```md id="batch-17-current-status"
# Batch 17 Current Status

## Connector Check

No open PR for the static site pack was found yet.

Recent visible PR activity includes:

- PR #40 — Add search.html for agent library search interface
- PR #30 — Add P0 skill site data
- PR #29 — Feature/p0 skill files and site data
- PR #28 — Add Agent Skills Library
- PR #27 — Add ChatGPT converted agents README
- PR #26 — Add ChatGPT GPT library pack and Custom GPT portfolio

## Current Recommendation

Do not merge anything yet.

Next step is to have Jules complete the implementation branch and open the PR.

Expected branch:

```text
site/full-static-site-pack
```

Expected PR title:

```text
Add full AI Agent Library static site pack
```

## After PR Opens

Run the Batch 17 review process:

1. Fetch PR.
2. Review changed file list.
3. Check static site root files.
4. Check existing page overwrite risk.
5. Validate JSON/schema files.
6. Review public-safe language.
7. Scan for secrets/private data.
8. Check Vercel/deployment behavior.
9. Recommend APPROVE / COMMENT / REQUEST CHANGES.
10. Do not merge until explicitly approved.
```

Batch 18 should be **Jules “New Task” copy/paste prompt**:

```text
Single master prompt to paste into Jules
Includes repo, branch, file scope, validation, PR title/body, and no-merge instruction
```


<!-- OPTIONAL SOURCE: Batch 18 — Jules 'New Task' Copy-Paste Master Prompt.md -->

# Optional Source Batch: Batch 18 — Jules 'New Task' Copy-Paste Master Prompt.md

# you asked

message time: 2026-06-18 15:36:03

Proceed (Batch 18)

---

# chatgpt response

## Batch 18 — Jules “New Task” Copy/Paste Master Prompt

```md id="batch-18-jules-new-task-master-prompt"
# Jules New Task — Add AI Agent Library Static Site Support Layers + Open PR

You are working in this GitHub repo:

```text
JFeimster/ai-agent-library
```

## Objective

Add the generated **AI Agent Library full static site pack** to the repo in a careful, static-first way.

This task should create the missing support layers, preserve existing repo work, validate the site/data, and open a PR.

Do **not** merge the PR.

## Critical Rules

- Do not introduce React.
- Do not introduce Next.js.
- Do not introduce npm, `package.json`, or build tooling.
- Do not add server routes.
- Do not commit ZIP files.
- Do not commit screenshots unless explicitly requested.
- Do not commit `.env` files.
- Do not commit API keys, access tokens, webhook secrets, private keys, passwords, CRM exports, borrower/customer data, bank data, tax records, credit reports, or private provider terms.
- Do not make guaranteed funding, approval, credit, revenue, ranking, or platform outcome claims.
- Use public-safe, educational, readiness, review-required, and possible-fit language.
- Keep the site plain HTML/CSS/JS/JSON/Markdown.
- Existing root pages may already exist. Do not blindly overwrite them without comparing.

## Branch

Create or use this branch:

```text
site/full-static-site-pack
```

Base branch:

```text
main
```

## Implementation Strategy

### Step 1 — Audit current repo state

Before adding files, inspect current repo structure.

Check whether these already exist:

```text
index.html
styles.css
script.js
style.css
agent-catalog.html
categories.html
tags.html
search.html
featured.html
new.html
skill-catalog.html
skill-categories.html
top-skills.html
skill-builder.html
terms.html
privacy.html
disclaimer.html
affiliate-disclosure.html
data-policy.html
get-started.html
partners.html
team.html
profile.html
platforms.html
portfolio.html
knowledge-bases.html
roadmap.html
changelog.html
contribute.html
site-data/
knowledge-base/
schemas/
roadmap/
examples/
portfolio/
```

If root HTML pages already exist, compare before replacing.

### Step 2 — Add support layers first

Add these files/folders first because they are less likely to conflict with existing root pages:

```text
style.css
SITE_PACK_README.md
REPO_PLACEMENT_CHECKLIST.md
PR_DESCRIPTION.md
JULES_HANDOFF_NOTE.md

site-data/
knowledge-base/
schemas/
roadmap/
examples/
portfolio/
```

`style.css` must be a compatibility alias with exactly:

```css
@import url("./styles.css");
```

### Step 3 — Add site-data files

Create or update:

```text
site-data/agents.fallback.json
site-data/skills.fallback.json
site-data/categories.json
site-data/tags.json
site-data/featured.json
site-data/changelog.json
```

These are fallback data files for static pages.

### Step 4 — Add knowledge-base folders

Create or update:

```text
knowledge-base/funding/README.md
knowledge-base/funding/index.json
knowledge-base/funding/examples.md

knowledge-base/partner-enablement/README.md
knowledge-base/partner-enablement/index.json
knowledge-base/partner-enablement/examples.md

knowledge-base/crm/README.md
knowledge-base/crm/index.json
knowledge-base/crm/examples.md

knowledge-base/content-ops/README.md
knowledge-base/content-ops/index.json
knowledge-base/content-ops/examples.md

knowledge-base/automation/README.md
knowledge-base/automation/index.json
knowledge-base/automation/examples.md

knowledge-base/local-referrals/README.md
knowledge-base/local-referrals/index.json
knowledge-base/local-referrals/examples.md

knowledge-base/engineering-as-marketing/README.md
knowledge-base/engineering-as-marketing/index.json
knowledge-base/engineering-as-marketing/examples.md
```

Rules:

- Examples must be synthetic.
- Funding and business-credit content must avoid guarantees.
- Automation examples must not include real credentials or private data.
- Partner content must include disclosure language where appropriate.

### Step 5 — Add schema files

Create or update:

```text
schemas/agent.schema.json
schemas/custom-gpt.schema.json
schemas/vercel-project.schema.json
schemas/funding-product.schema.json
schemas/webhook-event.schema.json
```

Rules:

- All schema files must be valid JSON.
- No trailing commas.
- No comments inside JSON.
- No secrets or private values.

### Step 6 — Add roadmap files

Create or update:

```text
roadmap/phase-1-fast-mvp.md
roadmap/phase-2-distribution-system.md
roadmap/phase-3-marketplace-layer.md
roadmap/phase-4-platform-layer.md
```

### Step 7 — Add examples folders

Create or update:

```text
examples/funding/README.md
examples/funding/example-001.md

examples/partner-enablement/README.md
examples/partner-enablement/example-001.md

examples/content-ops/README.md
examples/content-ops/example-001.md

examples/automation/README.md
examples/automation/example-001.md
```

Rules:

- All examples must be synthetic.
- Do not use real borrower/customer/partner/private data.
- Include guardrails.

### Step 8 — Add portfolio folders

Create or update:

```text
portfolio/vercel/README.md
portfolio/vercel/index.json

portfolio/custom-gpts/README.md
portfolio/custom-gpts/index.json

portfolio/gemini-gems/README.md
portfolio/gemini-gems/index.json

portfolio/flash-ui/README.md
portfolio/flash-ui/index.json
```

Rules:

- Portfolio records should be public-safe.
- Do not expose private deployment secrets.
- Do not expose private revenue, payout, or partner terms.

### Step 9 — Root static pages

Only after adding support layers, inspect existing root pages.

Expected root/static pages:

```text
index.html
styles.css
script.js
agent-catalog.html
categories.html
tags.html
search.html
featured.html
new.html
skill-catalog.html
skill-categories.html
top-skills.html
skill-builder.html
terms.html
privacy.html
disclaimer.html
affiliate-disclosure.html
data-policy.html
get-started.html
partners.html
team.html
profile.html
platforms.html
portfolio.html
knowledge-bases.html
roadmap.html
changelog.html
contribute.html
```

If a page does not exist, add the generated version.

If a page already exists:

1. Compare current version against generated version.
2. Preserve useful existing content.
3. Avoid deleting existing working functionality.
4. Ensure it uses `styles.css` and `script.js`.
5. Ensure nav/footer links resolve.
6. Ensure public-safe language is preserved.
7. Document any meaningful overwrite in the PR summary.

## README update

Update root `README.md` by adding a section titled:

```text
Static Site Layer
```

Do not replace useful existing README content.

Add a concise section covering:

- Core site files
- Main site pages
- Partner/affiliate pages
- Legal/trust pages
- Knowledge-base folders
- Portfolio folders
- Schema files
- Roadmap files
- Example folders
- Site data files
- Local run command
- Static-first rule
- Public-safe language rule

Include local run command:

```bash
python -m http.server 8080
```

## Validation

Run validation before opening the PR.

### Static server

From repo root:

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

Verify:

- Homepage loads.
- CSS loads.
- JS loads.
- Primary navigation links resolve.
- Footer links resolve.
- Agent catalog renders.
- Skill catalog renders.
- Search page renders.
- Categories page renders.
- Tags page renders.
- Featured page renders.
- New/changelog page renders.
- Partner pages render.
- Legal/trust pages render.
- Supporting pages render.

### JSON validation

PowerShell:

```powershell
Get-ChildItem site-data -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem schemas -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem knowledge-base -Recurse -Filter index.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem portfolio -Recurse -Filter index.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
```

Bash alternative:

```bash
python -m json.tool site-data/agents.fallback.json > /dev/null
python -m json.tool site-data/skills.fallback.json > /dev/null
python -m json.tool site-data/categories.json > /dev/null
python -m json.tool site-data/tags.json > /dev/null
python -m json.tool site-data/featured.json > /dev/null
python -m json.tool site-data/changelog.json > /dev/null

python -m json.tool schemas/agent.schema.json > /dev/null
python -m json.tool schemas/custom-gpt.schema.json > /dev/null
python -m json.tool schemas/vercel-project.schema.json > /dev/null
python -m json.tool schemas/funding-product.schema.json > /dev/null
python -m json.tool schemas/webhook-event.schema.json > /dev/null
```

### CSS reference validation

Search for stylesheet references:

```bash
grep -R "style.css\|styles.css" -n *.html 2>/dev/null
```

Confirm:

- `styles.css` exists.
- `style.css` exists as an alias.
- No page references a missing CSS file.

### Risk scan

Search for unsafe promotional claims:

```bash
grep -R "guaranteed approval\|guaranteed funding\|everyone qualifies\|no documents needed\|guaranteed revenue\|guaranteed rankings\|instant approval for everyone" -n .
```

These phrases are acceptable only inside:

- restricted-claim lists
- do-not-claim lists
- safety checklists
- examples of language to avoid

They are not acceptable as promotional claims.

### Secret/private data scan

Search for:

```bash
grep -R "api_key\|access_token\|webhook_secret\|client_secret\|password\|private_key\|bank_account\|tax_id\|credit_report" -n .
```

These are acceptable only inside restricted-field lists or synthetic data-policy warnings.

They are not acceptable as actual secrets, credentials, or private records.

### Deployment config review

Check:

```text
vercel.json
.github/
```

Confirm:

- No accidental deployment behavior changes.
- No build tooling was introduced.
- No external scripts were added without reason.
- No environment variables or secrets were committed.

## Commit guidance

Suggested commit sequence:

```text
Add static site support layers
Add AI Agent Library knowledge bases and schemas
Add static site data, roadmap, examples, and portfolio files
Update AI Agent Library static pages
```

One clean commit is also acceptable if the diff is manageable.

## Pull Request

Open a PR into:

```text
main
```

Suggested PR title:

```text
Add full AI Agent Library static site pack
```

Use `PR_DESCRIPTION.md` as the PR body if present.

If `PR_DESCRIPTION.md` is not available yet, use this PR body:

```md
## Summary

Adds a full static-first website layer for AI Agent Library.

This PR expands the repo into a browseable static resource hub for reusable AI agents, skills, prompt systems, knowledge bases, schemas, examples, portfolio assets, platform packs, partner pages, and legal/trust pages.

## Included

- Root static site files
- Directory and discovery pages
- Skills library pages
- Legal and trust pages
- Partner and affiliate pages
- Supporting pages
- Site data files
- Knowledge-base folders
- JSON schemas
- Roadmap docs
- Synthetic examples
- Portfolio records
- README/support docs
- `style.css` compatibility alias

## Static-First Notes

This PR does not require:

- React
- Next.js
- npm
- Build tooling
- Backend routes
- Private API keys

## Validation

- [ ] Homepage opens locally.
- [ ] CSS loads.
- [ ] JavaScript loads.
- [ ] Core navigation links resolve.
- [ ] Footer links resolve.
- [ ] Agent catalog renders fallback data.
- [ ] Skill catalog renders fallback data.
- [ ] JSON files validate.
- [ ] Schema files validate.
- [ ] Partner pages link affiliate disclosure.
- [ ] Legal/trust pages are present.
- [ ] No secrets or private customer data included.
- [ ] No ZIP files committed unless intentionally included.

## Public-Safe Review

This PR avoids:

- Guaranteed approval claims
- Guaranteed funding claims
- Guaranteed credit outcome claims
- Guaranteed revenue claims
- Guaranteed ranking claims
- Private provider logic
- Private client data
- API keys or secrets
```

## Do Not Merge

Do not merge the PR.

Stop after opening the PR.

## Required Final Response

After completing the task, report:

```text
Branch:
Commit SHA:
PR URL:

Files added/updated:
- ...

Validation:
- ...

Known issues:
- ...

Recommended next steps:
- ...
```
```

Batch 19 should be **Post-Jules PR review command pack**:

```text
Fetch the new PR
Review changed files
Review diff
Check validation notes
Post review comment
Approve/comment/request changes
Merge only if explicitly instructed
```


<!-- OPTIONAL SOURCE: Batch 19 — Post-Jules PR Review Command Pack.md -->

# Optional Source Batch: Batch 19 — Post-Jules PR Review Command Pack.md

# you asked

message time: 2026-06-18 15:39:03

Proceed (Batch 19)

---

# chatgpt response

## Batch 19 — Post-Jules PR Review Command Pack

Current connector check: no open PR for the static site pack was found yet.

Use this batch **after Jules opens the PR**.

---

## `POST_JULES_PR_REVIEW_COMMAND_PACK.md`

````md id="post-jules-pr-review-command-pack"
# Post-Jules PR Review Command Pack — AI Agent Library

Repo:

```text
JFeimster/ai-agent-library
```

Expected branch:

```text
site/full-static-site-pack
```

Expected PR title:

```text
Add full AI Agent Library static site pack
```

## Objective

Fetch the new Jules-created PR, review the changed files and diff, verify validation notes, check repo safety, then recommend one of:

```text
APPROVE
COMMENT
REQUEST CHANGES
```

Do **not** merge unless explicitly instructed.

---

# Step 1 — Fetch the New PR

Find the open PR from:

```text
site/full-static-site-pack
```

Expected base branch:

```text
main
```

If no PR exists, return:

```text
No open PR found for site/full-static-site-pack.
```

Collect:

```text
PR number:
PR title:
PR URL:
Head branch:
Base branch:
Author:
Latest commit SHA:
Changed file count:
Additions:
Deletions:
Checks status:
Mergeability:
Draft status:
```

---

# Step 2 — Review Changed Files

Group the changed files into these buckets:

```text
Root site files
Directory/discovery pages
Skills pages
Legal/trust pages
Partner/affiliate pages
Supporting pages
Site data
Knowledge bases
Schemas
Roadmap
Examples
Portfolio
README/docs
Config/deployment files
Unexpected files
```

Expected file groups:

```text
Root:
  index.html
  styles.css
  script.js
  style.css
  README.md
  SITE_PACK_README.md
  REPO_PLACEMENT_CHECKLIST.md
  PR_DESCRIPTION.md
  JULES_HANDOFF_NOTE.md

Directory/discovery:
  agent-catalog.html
  categories.html
  tags.html
  search.html
  featured.html
  new.html

Skills:
  skill-catalog.html
  skill-categories.html
  top-skills.html
  skill-builder.html

Legal/trust:
  terms.html
  privacy.html
  disclaimer.html
  affiliate-disclosure.html
  data-policy.html

Partner/affiliate:
  get-started.html
  partners.html
  team.html
  profile.html

Supporting:
  platforms.html
  portfolio.html
  knowledge-bases.html
  roadmap.html
  changelog.html
  contribute.html

Data:
  site-data/

Knowledge:
  knowledge-base/

Schemas:
  schemas/

Roadmap:
  roadmap/

Examples:
  examples/

Portfolio:
  portfolio/
```

Flag unexpected files:

```text
*.zip
*.png
*.jpg
*.jpeg
*.webp
node_modules/
package.json
package-lock.json
yarn.lock
pnpm-lock.yaml
.next/
dist/
build/
.env
.env.local
.env.production
.DS_Store
```

Exceptions:

- Images are acceptable only if explicitly intended as site assets.
- Package files are acceptable only if a framework/build step was explicitly requested, which this static-first task did not request.

---

# Step 3 — Static Site Review

Verify:

```text
index.html exists
styles.css exists
script.js exists
style.css exists
style.css imports styles.css
No React introduced
No Next.js introduced
No npm/package.json introduced
No build step introduced
No server routes introduced
Root pages use valid CSS/JS references
Header navigation resolves
Footer navigation resolves
Dynamic pages use fallback data
Pages have empty states when data is unavailable
```

`style.css` should contain:

```css
@import url("./styles.css");
```

---

# Step 4 — Existing Page Overwrite Review

Because this repo already had some static site work, check whether Jules overwrote existing useful pages.

Review especially:

```text
index.html
styles.css
script.js
search.html
agent-catalog.html
skill-catalog.html
categories.html
tags.html
featured.html
new.html
```

For each overwritten page, answer:

```text
Was the existing functionality preserved?
Was the generated page clearly better?
Were useful existing sections removed?
Did nav/footer remain consistent?
Did data loading still work?
```

If useful existing functionality was removed without reason, mark as:

```text
REQUEST CHANGES
```

---

# Step 5 — JSON Validation Review

Confirm Jules ran JSON validation for:

```text
site-data/*.json
schemas/*.json
knowledge-base/**/index.json
portfolio/**/index.json
```

Expected command:

```powershell
Get-ChildItem site-data -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem schemas -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem knowledge-base -Recurse -Filter index.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem portfolio -Recurse -Filter index.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
```

Or bash:

```bash
python -m json.tool site-data/agents.fallback.json > /dev/null
python -m json.tool site-data/skills.fallback.json > /dev/null
python -m json.tool site-data/categories.json > /dev/null
python -m json.tool site-data/tags.json > /dev/null
python -m json.tool site-data/featured.json > /dev/null
python -m json.tool site-data/changelog.json > /dev/null

python -m json.tool schemas/agent.schema.json > /dev/null
python -m json.tool schemas/custom-gpt.schema.json > /dev/null
python -m json.tool schemas/vercel-project.schema.json > /dev/null
python -m json.tool schemas/funding-product.schema.json > /dev/null
python -m json.tool schemas/webhook-event.schema.json > /dev/null
```

Flag:

```text
Malformed JSON
Trailing commas
Broken escaping
Schema files that are not valid JSON
Missing expected index.json files
```

---

# Step 6 — Public-Safe Language Review

Search for:

```text
guaranteed approval
guaranteed funding
guaranteed credit
guaranteed credit outcome
guaranteed revenue
guaranteed rankings
everyone qualifies
no documents needed
no risk
instant approval for everyone
```

These phrases are acceptable only inside:

```text
restricted-claim lists
do-not-claim lists
safety checklists
data-policy examples
warnings
examples of language to avoid
```

They are not acceptable as:

```text
promotional claims
CTA copy
hero copy
provider claims
funding page promises
business-credit promises
partner recruitment promises
```

If unsafe usage appears, mark:

```text
REQUEST CHANGES
```

---

# Step 7 — Secret / Private Data Review

Search for:

```text
api_key
access_token
webhook_secret
client_secret
password
private_key
bank_account
tax_id
credit_report
borrower
customer
crm export
```

Acceptable only inside:

```text
restricted-field lists
synthetic examples
data-policy warnings
do-not-commit checklists
```

Not acceptable:

```text
actual credentials
actual tokens
real customer records
real borrower files
private CRM exports
bank statements
tax records
credit reports
private provider terms
```

If actual secrets or private data appear, mark:

```text
REQUEST CHANGES
```

---

# Step 8 — Deployment Review

Inspect:

```text
vercel.json
.github/
```

Verify:

```text
No accidental deployment behavior change
No accidental auto-deploy enablement
No accidental auto-deploy disablement
No build command added
No framework setting added
No environment variables committed
No external scripts added without reason
```

If `vercel.json` changed, summarize exactly what changed.

---

# Step 9 — Validation Notes Review

Check whether Jules reported:

```text
Static server validation
JSON validation
CSS/JS reference validation
Public-safe language scan
Secret/private data scan
Vercel/deployment review
```

If Jules did not run validation, mark as:

```text
COMMENT
```

If validation failed, mark as:

```text
REQUEST CHANGES
```

---

# Step 10 — Review Outcome

Use one:

```text
APPROVE
COMMENT
REQUEST CHANGES
```

## APPROVE

Use only if:

```text
Static site structure is valid
No build framework added
JSON validates
No secrets/private data
No unsafe promotional claims
No unexpected ZIPs/screenshots/build files
Core nav/footer references are valid
Deployment behavior is safe
```

## COMMENT

Use if:

```text
PR is mostly safe
Minor follow-ups remain
Validation notes are incomplete but no obvious blockers exist
Canonical indexes can be improved later
Additional per-agent/per-skill files can come later
```

## REQUEST CHANGES

Use if:

```text
JSON is malformed
Root files are missing
style.css alias is missing and needed
Secrets/private data are present
Unsafe claims are present
Unwanted ZIPs/screenshots/build files are committed
Framework/build tooling was added without request
Core nav breaks
Deployment behavior changed unintentionally
Existing useful pages were overwritten badly
```

---

# Required Review Report

Return:

```md
# PR Review — AI Agent Library Static Site Pack

## Recommendation

APPROVE / COMMENT / REQUEST CHANGES

## PR Metadata

- PR:
- URL:
- Branch:
- Base:
- Latest commit:
- Changed files:
- Additions:
- Deletions:
- Checks:
- Mergeable:

## Summary

[Short summary]

## Changed File Groups

### Root Site Files
- ...

### Directory / Discovery Pages
- ...

### Skills Pages
- ...

### Legal / Trust Pages
- ...

### Partner Pages
- ...

### Supporting Pages
- ...

### Site Data
- ...

### Knowledge Bases
- ...

### Schemas
- ...

### Roadmap
- ...

### Examples
- ...

### Portfolio
- ...

### README / Docs
- ...

### Unexpected Files
- ...

## Static Site Findings

- Homepage:
- CSS:
- JS:
- `style.css` alias:
- Navigation:
- Footer:
- Dynamic fallback data:
- Existing page overwrite risk:

## JSON / Schema Findings

- site-data:
- schemas:
- knowledge-base indexes:
- portfolio indexes:

## Public-Safe Language Findings

- Funding:
- Business credit:
- Partner / affiliate:
- Automation:
- Legal / trust:

## Secret / Private Data Findings

- Secrets:
- Private customer data:
- Synthetic example status:

## Deployment Findings

- vercel.json:
- workflows:
- build tooling:
- external scripts:
- auto-deploy behavior:

## Blocking Issues

- Issue 1
- Issue 2

## Non-Blocking Follow-Ups

- Follow-up 1
- Follow-up 2

## Suggested GitHub Review Comment

[Copy-pasteable PR review comment]

## Merge Readiness

Ready / Not ready
```
````

---

## `POST_JULES_PR_REVIEW_PROMPT.md`

```md id="post-jules-pr-review-prompt"
# Review the AI Agent Library Static Site Pack PR

Use the GitHub connector to review the open PR in:

```text
JFeimster/ai-agent-library
```

Look for the PR from branch:

```text
site/full-static-site-pack
```

Expected title:

```text
Add full AI Agent Library static site pack
```

## Review the PR for:

1. Changed file inventory
2. Existing page overwrite risk
3. Static site correctness
4. CSS/JS references
5. `style.css` compatibility alias
6. JSON validity
7. Schema validity
8. Public-safe funding/business-credit/affiliate language
9. Secret/private data exposure
10. Vercel/deployment behavior
11. Unexpected files such as ZIPs, screenshots, package files, build folders, or `.env` files

## Do not merge.

Return a recommendation:

```text
APPROVE
COMMENT
REQUEST CHANGES
```

## Required Output

```md
# PR Review — AI Agent Library Static Site Pack

## Recommendation

APPROVE / COMMENT / REQUEST CHANGES

## PR Metadata

- PR:
- Branch:
- Base:
- Commit:
- Changed files:
- Checks:

## Summary

[Short summary]

## Blocking Issues

- ...

## Non-Blocking Follow-Ups

- ...

## Suggested GitHub Review Comment

[Copy-pasteable comment]

## Merge Readiness

Ready / Not ready
```
```

---

## `APPROVE_REVIEW_COMMENT.md`

```md id="approve-review-comment-md"
Approved. This PR adds the AI Agent Library static site pack in a static-first way and preserves the repo’s no-build-step direction.

Reviewed:

- Root static site files
- Directory and discovery pages
- Skills library pages
- Legal/trust pages
- Partner and affiliate pages
- Supporting pages
- Site data
- Knowledge-base folders
- Schemas
- Roadmap files
- Examples
- Portfolio folders
- README/support docs

Validation notes:

- Static file structure is appropriate.
- `style.css` compatibility alias is present.
- JSON/schema files validate or validation was documented.
- Funding, business-credit, affiliate, and partner language avoids unsupported guarantees.
- Automation examples use synthetic data.
- No secrets or private client data were identified.
- No unwanted framework/build tooling was introduced.
- No unintended Vercel deployment behavior changes were identified.

Ready to merge.
```

---

## `COMMENT_REVIEW_COMMENT.md`

```md id="comment-review-comment-md"
Review complete. Overall direction looks aligned with the static-first AI Agent Library site pack.

Non-blocking follow-ups:

- Add canonical `agent-index.json` updates in a later PR if not included here.
- Add canonical `skills/skill-index.json` updates in a later PR if not included here.
- Add per-agent Markdown specs in future batches.
- Add per-skill `SKILL.md` folders in future batches.
- Add link-check and JSON-schema validation workflows later.
- Add screenshot previews after the first deployment if desired.

No merge blockers identified from the reviewed diff.

Recommendation: approve once validation notes are confirmed.
```

---

## `REQUEST_CHANGES_REVIEW_COMMENT.md`

```md id="request-changes-review-comment-md"
Requesting changes before merge.

Blocking issues:

- [Blocker 1]
- [Blocker 2]
- [Blocker 3]

Required fixes:

- Fix malformed JSON or schema files.
- Confirm `index.html`, `styles.css`, `script.js`, and `style.css` alias exist.
- Remove any unintended ZIPs, screenshots, build artifacts, or package files.
- Remove any secrets, private data, or real customer records.
- Revise any promotional funding, credit, affiliate, revenue, or platform outcome guarantees.
- Confirm `vercel.json` deployment behavior was not changed unintentionally.
- Rerun static and JSON validation.

After fixes, update the PR summary with validation results and request re-review.
```

---

## `MERGE_ONLY_IF_EXPLICITLY_INSTRUCTED.md`

```md id="merge-only-if-explicitly-instructed-md"
# Merge Rule

Do not merge the AI Agent Library static site pack PR unless Jason explicitly says to merge.

Acceptable merge instruction examples:

```text
Merge it
Proceed to merge
Approve and merge
Merge PR #[number]
```

Do not treat these as merge instructions:

```text
Review it
Check it
Looks good
Continue
Proceed with review
Open the PR
Prepare merge notes
```

## Before Merge

Confirm:

- PR is not draft.
- Branch targets `main`.
- Validation is complete.
- No blocking issues remain.
- No secrets/private data are present.
- No unsafe promotional claims are present.
- No unwanted ZIPs/screenshots/build artifacts are present.
- Deployment behavior is understood.
- User explicitly instructed merge.

## Preferred Merge Method

Use the repo’s normal/default merge strategy unless the user specifies otherwise.

If asked for a recommendation:

```text
Squash merge is preferred for a large generated static site pack, because it keeps main history clean.
```
```

Batch 20 should be **Post-merge cleanup + next expansion roadmap**:

```text
After PR merge checklist
Branch cleanup
Vercel deployment check
Static site smoke test
Next issues to open
Canonical agent-index / skills index updates
Per-agent and per-skill content expansion
Link-check workflow
JSON schema validation workflow
```


<!-- OPTIONAL SOURCE: Batch 20 — Post-Merge Cleanup + Next Expansion Roadmap.md -->

# Optional Source Batch: Batch 20 — Post-Merge Cleanup + Next Expansion Roadmap.md

# you asked

message time: 2026-06-18 16:06:08

Proceed (Batch 20)

---

# chatgpt response

## Batch 20 — Post-Merge Cleanup + Next Expansion Roadmap

## `POST_MERGE_CLEANUP_CHECKLIST.md`

```md id="post-merge-cleanup-checklist"
# Post-Merge Cleanup Checklist — AI Agent Library Static Site Pack

Use this after the static site pack PR is merged into `main`.

## Merge Confirmation

Record:

```text
Merged PR:
Merge commit:
Merged by:
Merged at:
Base branch:
Source branch:
```

## Immediate Checks

After merge:

- [ ] Confirm PR is merged.
- [ ] Confirm `main` includes the expected files.
- [ ] Confirm no ZIP files were merged unintentionally.
- [ ] Confirm no screenshots were merged unintentionally.
- [ ] Confirm no package/build files were merged unintentionally.
- [ ] Confirm `style.css` alias exists.
- [ ] Confirm `styles.css` exists.
- [ ] Confirm `script.js` exists.
- [ ] Confirm `index.html` exists.

## Pull Latest Main Locally

```bash
git checkout main
git pull origin main
```

## Local Smoke Test

Run:

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

Check:

- [ ] Homepage loads.
- [ ] CSS loads.
- [ ] JavaScript loads.
- [ ] Navigation works.
- [ ] Footer works.
- [ ] Agent catalog loads.
- [ ] Skill catalog loads.
- [ ] Search page loads.
- [ ] Categories page loads.
- [ ] Tags page loads.
- [ ] Featured page loads.
- [ ] New/changelog page loads.
- [ ] Legal pages load.
- [ ] Partner pages load.
- [ ] Portfolio pages load.
- [ ] Knowledge-base hub loads.
- [ ] Roadmap page loads.

## JSON Validation

PowerShell:

```powershell
Get-ChildItem site-data -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem schemas -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem knowledge-base -Recurse -Filter index.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem portfolio -Recurse -Filter index.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
```

Bash:

```bash
find site-data schemas knowledge-base portfolio -name "*.json" -print0 | while IFS= read -r -d '' file; do
  python -m json.tool "$file" > /dev/null || exit 1
done
```

## Link Review

Run a simple reference scan:

```bash
grep -R "href=\".*\.html\|src=\".*\.js\|href=\".*\.css" -n *.html
```

Check:

- [ ] Every referenced `.html` file exists.
- [ ] Every referenced `.css` file exists.
- [ ] Every referenced `.js` file exists.
- [ ] Footer links resolve.
- [ ] Header links resolve.
- [ ] Partner pages link affiliate disclosure.
- [ ] Legal pages are linked from footer.

## Risk Scan

Search for unsafe promotional language:

```bash
grep -R "guaranteed approval\|guaranteed funding\|everyone qualifies\|no documents needed\|guaranteed revenue\|guaranteed rankings" -n .
```

Acceptable only if found inside:

- Restricted-claim lists
- Do-not-claim lists
- Safety checklists
- Warnings
- Examples of language to avoid

## Secret Scan

Search for secret-like terms:

```bash
grep -R "api_key\|access_token\|webhook_secret\|client_secret\|password\|private_key\|bank_account\|tax_id\|credit_report" -n .
```

Acceptable only if found inside:

- Restricted-field lists
- Synthetic examples
- Data policy warnings
- Do-not-commit checklists

## Branch Cleanup

After confirming the PR is merged and main works:

```bash
git branch -d site/full-static-site-pack
git push origin --delete site/full-static-site-pack
```

Only delete the remote branch after confirming no follow-up commits are needed.

## GitHub Cleanup

- [ ] Close any duplicate static-site issues.
- [ ] Comment on the master tracker with merged PR.
- [ ] Move related tasks to done.
- [ ] Open follow-up issues for canonical indexes, agent specs, skill files, workflows, and deployment checks.
- [ ] Label follow-up issues by area: `site`, `data`, `schemas`, `skills`, `agents`, `automation`, `deployment`.

## Vercel Check

After merge:

- [ ] Confirm whether Vercel auto-deployed.
- [ ] Confirm production deployment status.
- [ ] Open production URL.
- [ ] Check homepage.
- [ ] Check search page.
- [ ] Check agent catalog.
- [ ] Check skill catalog.
- [ ] Check legal pages.
- [ ] Check footer links.
- [ ] Check mobile layout.
- [ ] Confirm no deployment protection issue blocks expected public pages.
- [ ] Confirm no build errors.

## Deployment Notes

Record:

```text
Vercel project:
Production URL:
Deployment URL:
Deployment status:
Auto-deploy enabled:
Checked by:
Checked at:
Known issues:
```

## Post-Merge Done Means

The static site pack is merged, main is clean, local smoke test passes, JSON validates, production deployment is checked, branch cleanup is complete, and the next set of expansion issues is opened.
```

---

## `VERCEL_DEPLOYMENT_CHECK.md`

```md id="vercel-deployment-check-md"
# Vercel Deployment Check — AI Agent Library

Use this after the static site pack is merged.

## Project

```text
AI Agent Library
```

## Repo

```text
JFeimster/ai-agent-library
```

## Deployment Goal

Confirm the static site deploys cleanly and the public pages work as expected.

## Check Deployment Status

In Vercel, confirm:

- [ ] Project is connected to the correct repo.
- [ ] Production branch is `main`.
- [ ] Latest deployment uses the merge commit.
- [ ] Deployment status is successful.
- [ ] No framework was auto-detected incorrectly.
- [ ] No build command is required.
- [ ] Output directory is not misconfigured.
- [ ] Root directory is correct.

## Expected Static Files

The deployment should serve:

```text
/
index.html
styles.css
script.js
style.css
agent-catalog.html
skill-catalog.html
categories.html
tags.html
search.html
featured.html
new.html
platforms.html
portfolio.html
knowledge-bases.html
roadmap.html
changelog.html
contribute.html
terms.html
privacy.html
disclaimer.html
affiliate-disclosure.html
data-policy.html
get-started.html
partners.html
team.html
profile.html
```

## Production Smoke Test

Open the production URL and check:

- [ ] `/` loads.
- [ ] `/agent-catalog` or `/agent-catalog.html` loads.
- [ ] `/skill-catalog` or `/skill-catalog.html` loads.
- [ ] `/search` or `/search.html` loads.
- [ ] `/categories` or `/categories.html` loads.
- [ ] `/tags` or `/tags.html` loads.
- [ ] `/featured` or `/featured.html` loads.
- [ ] `/new` or `/new.html` loads.
- [ ] `/terms` or `/terms.html` loads.
- [ ] `/privacy` or `/privacy.html` loads.
- [ ] `/affiliate-disclosure` or `/affiliate-disclosure.html` loads.
- [ ] `/data-policy` or `/data-policy.html` loads.

## Static Asset Check

Check:

- [ ] `styles.css` returns 200.
- [ ] `style.css` returns 200.
- [ ] `script.js` returns 200.
- [ ] `site-data/agents.fallback.json` returns 200.
- [ ] `site-data/skills.fallback.json` returns 200.
- [ ] `site-data/categories.json` returns 200.
- [ ] `site-data/tags.json` returns 200.
- [ ] `site-data/featured.json` returns 200.
- [ ] `site-data/changelog.json` returns 200.

## Browser Console Check

Open DevTools and verify:

- [ ] No missing CSS errors.
- [ ] No missing JS errors.
- [ ] No JSON fetch errors that break rendering.
- [ ] Catalog pages show fallback content if canonical data is missing.
- [ ] Search page renders results or a useful empty state.

## Mobile Check

Test common widths:

```text
390px
768px
1024px
1440px
```

Check:

- [ ] Header wraps cleanly.
- [ ] Buttons are usable.
- [ ] Cards stack correctly.
- [ ] Tables or grids do not overflow badly.
- [ ] Footer remains readable.

## Vercel Config Review

Inspect:

```text
vercel.json
```

Confirm:

- [ ] `cleanUrls` behavior is intentional.
- [ ] `trailingSlash` behavior is intentional.
- [ ] `git.deploymentEnabled` is intentional if present.
- [ ] No environment variables are exposed.
- [ ] No build command is required.

## If Deployment Fails

Check:

- Missing root `index.html`
- Incorrect root directory
- Framework auto-detection
- Bad `vercel.json`
- Invalid route config
- Missing static assets
- Unexpected build command
- Case-sensitive file path mismatch

## Deployment Report Template

```md
# Vercel Deployment Report

## Status

Pass / Fail / Partial

## Deployment

- Project:
- Production URL:
- Deployment URL:
- Commit:
- Checked at:

## Smoke Test

- Homepage:
- Agent catalog:
- Skill catalog:
- Search:
- Legal pages:
- Partner pages:

## Static Assets

- CSS:
- JS:
- Site data:

## Console Errors

- None / list errors

## Mobile Check

- Pass / Partial / Fail

## Issues

- Issue 1
- Issue 2

## Next Action

- Action
```
```

---

## `NEXT_ISSUES_TO_OPEN.md`

```md id="next-issues-to-open-md"
# Next Issues to Open — AI Agent Library

Open these after the static site pack is merged.

## Issue 1 — Add Canonical Agent Index

### Title

```text
Add canonical agent-index.json for static site catalog
```

### Body

```md
## Goal

Create or update the canonical `agent-index.json` so the static site can load real agent data before falling back to `site-data/agents.fallback.json`.

## Tasks

- [ ] Review existing agent records.
- [ ] Normalize fields to match `schemas/agent.schema.json`.
- [ ] Add slugs, categories, buyers, pain solved, platforms, statuses, tags, and file paths.
- [ ] Confirm every referenced file path exists or is planned.
- [ ] Ensure public-safe descriptions.
- [ ] Validate JSON.
- [ ] Confirm `agent-catalog.html` loads canonical data first.

## Acceptance Criteria

- [ ] `agent-index.json` exists.
- [ ] JSON validates.
- [ ] Static site agent catalog renders canonical data.
- [ ] Fallback data still works if canonical file is unavailable.
```

## Issue 2 — Add Canonical Skills Index

### Title

```text
Add canonical skills/skill-index.json for static site catalog
```

### Body

```md
## Goal

Create or update `skills/skill-index.json` so the skill catalog can load real skill records before falling back to `site-data/skills.fallback.json`.

## Tasks

- [ ] Review existing `skills/` folders.
- [ ] Normalize each skill record.
- [ ] Include name, slug, category, audience, problem solved, recommended apps, priority, status, and path.
- [ ] Confirm referenced `SKILL.md` paths exist or are planned.
- [ ] Validate JSON.
- [ ] Confirm `skill-catalog.html` loads canonical data first.

## Acceptance Criteria

- [ ] `skills/skill-index.json` exists.
- [ ] JSON validates.
- [ ] Skill catalog renders canonical data.
- [ ] Fallback data remains available.
```

## Issue 3 — Add Per-Agent Markdown Specs

### Title

```text
Add per-agent Markdown specs for priority AI Agent Library agents
```

### Body

```md
## Goal

Create per-agent Markdown files under `agents/` for the highest-priority agent concepts.

## Initial Agents

- Funding Pipeline Triage Agent
- Partner Resource Card Builder
- AI Agent Library Builder
- Static Site Page Generator
- Prompt Chain Architect
- Knowledge Base Packager
- CRM Follow-Up Drafting Agent
- Content Brief Generator
- Automation Workflow Spec Agent
- Vercel Deployment Control Agent

## Required Sections

Each file should include:

- Name
- Slug
- Category
- Buyer
- Pain solved
- Primary job
- Inputs
- Outputs
- Workflow
- Guardrails
- Public-safe language rules
- Related skills
- Related knowledge bases
- Related schemas
- Platform targets

## Acceptance Criteria

- [ ] Priority agent files exist.
- [ ] Files follow a consistent structure.
- [ ] Public-safe rules are included.
- [ ] Agent index references are updated.
```

## Issue 4 — Add Per-Skill SKILL.md Files

### Title

```text
Add SKILL.md files for priority reusable skills
```

### Body

```md
## Goal

Create reusable `SKILL.md` files for the highest-priority AI Agent Library skills.

## Initial Skills

- Static Site Page Builder
- Agent Spec Packager
- SKILL.md Generator
- Funding Language Safety Review
- Partner Resource Card Builder
- Prompt Chain Sequencer
- Schema Starter Builder
- Knowledge Base Folder Builder
- Automation Workflow Spec Writer
- Content Brief Builder

## Required Sections

Each `SKILL.md` should include:

- Purpose
- When to use
- Inputs
- Outputs
- Workflow
- File/path conventions
- Quality checklist
- Guardrails
- Examples
- Related agents

## Acceptance Criteria

- [ ] Priority skill folders exist.
- [ ] Each folder contains `SKILL.md`.
- [ ] `skills/skill-index.json` references the files.
- [ ] Public-safe rules are included where relevant.
```

## Issue 5 — Add Link Check Workflow

### Title

```text
Add static site link-check workflow
```

### Body

```md
## Goal

Add a GitHub Actions workflow or script to check static site links.

## Tasks

- [ ] Add a simple link-check script or workflow.
- [ ] Check root `.html` links.
- [ ] Check CSS and JS references.
- [ ] Check local Markdown links where practical.
- [ ] Exclude external links or mark them optional.
- [ ] Document how to run locally.

## Acceptance Criteria

- [ ] Link check can run in CI or locally.
- [ ] Missing local files are flagged.
- [ ] Workflow does not require heavy dependencies.
```

## Issue 6 — Add JSON Schema Validation Workflow

### Title

```text
Add JSON and schema validation workflow
```

### Body

```md
## Goal

Add lightweight validation for JSON files and schema files.

## Tasks

- [ ] Validate `site-data/*.json`.
- [ ] Validate `schemas/*.json`.
- [ ] Validate `knowledge-base/**/index.json`.
- [ ] Validate `portfolio/**/index.json`.
- [ ] Add local command documentation.
- [ ] Add CI workflow if appropriate.

## Acceptance Criteria

- [ ] Malformed JSON fails validation.
- [ ] Validation can run locally.
- [ ] Validation can run in GitHub Actions.
```

## Issue 7 — Add Platform Package Templates

### Title

```text
Add platform package templates for GPTs, Gemini Gems, Vercel apps, and n8n workflows
```

### Body

```md
## Goal

Create reusable templates for packaging AI Agent Library assets across major platforms.

## Templates

- Custom GPT package template
- Gemini Gem package template
- Vercel static site package template
- n8n workflow spec template
- Notion database/page template
- GitHub issue/PR execution template

## Acceptance Criteria

- [ ] Templates exist under `templates/`.
- [ ] Templates reference schemas where useful.
- [ ] Public-safe and data rules are included.
- [ ] Platform-specific setup instructions are included.
```

## Issue 8 — Add Screenshot / Preview Inventory

### Title

```text
Add screenshot and preview inventory after first deployment
```

### Body

```md
## Goal

After production deployment is live, add a lightweight preview inventory for key pages.

## Tasks

- [ ] Capture homepage preview.
- [ ] Capture agent catalog preview.
- [ ] Capture skill catalog preview.
- [ ] Capture search page preview.
- [ ] Capture partner page preview.
- [ ] Capture roadmap page preview.
- [ ] Store screenshots only if intentionally approved.
- [ ] Update portfolio records with production URLs.

## Acceptance Criteria

- [ ] Production URL is recorded.
- [ ] Key page previews are documented.
- [ ] No unnecessary large binary assets are committed.
```
```

---

## `CANONICAL_INDEX_EXPANSION_PLAN.md`

```md id="canonical-index-expansion-plan-md"
# Canonical Index Expansion Plan

## Purpose

Move the static site from fallback data to canonical repo-managed indexes.

The site currently supports fallback data through:

```text
site-data/agents.fallback.json
site-data/skills.fallback.json
```

The next step is to maintain canonical indexes:

```text
agent-index.json
skills/skill-index.json
```

## Agent Index Standard

Recommended record:

```json
{
  "name": "Funding Pipeline Triage Agent",
  "slug": "funding-pipeline-triage-agent",
  "category": "Funding Ops",
  "buyer": "Funding brokers, intake teams, processors, and referral partners",
  "pain_solved": "Summarizes a funding lead, identifies missing information, flags caution items, and suggests a possible product-family path.",
  "primary_job": "Turn incomplete funding lead data into a structured readiness summary.",
  "platform": "ChatGPT Custom GPT",
  "status": "draft",
  "priority": "high",
  "tags": [
    "funding",
    "crm",
    "intake",
    "routing"
  ],
  "file": "agents/funding-pipeline-triage-agent.md",
  "related_skills": [
    "skills/funding-language-safety-review/SKILL.md"
  ],
  "related_knowledge_bases": [
    "knowledge-base/funding/README.md"
  ],
  "related_schemas": [
    "schemas/agent.schema.json"
  ]
}
```

## Skill Index Standard

Recommended record:

```json
{
  "name": "Static Site Page Builder",
  "slug": "static-site-page-builder",
  "category": "Static Sites",
  "audience": "Static site builders, Vercel operators, and AI product teams",
  "problem_solved": "Generates dependency-free HTML pages with consistent structure, navigation, CTAs, metadata, and public-safe page sections.",
  "recommended_apps": [
    "ChatGPT",
    "Codex",
    "GitHub",
    "Vercel"
  ],
  "priority": "high",
  "status": "draft",
  "path": "skills/static-site-page-builder/SKILL.md",
  "related_agents": [
    "agents/static-site-page-generator.md"
  ]
}
```

## Data Loading Rule

Static pages should load in this order:

```text
agent-catalog.html:
  1. agent-index.json
  2. site-data/agents.fallback.json

skill-catalog.html:
  1. skills/skill-index.json
  2. site-data/skills.fallback.json
```

## Canonical Index Checklist

For every indexed asset:

- [ ] Name is clear.
- [ ] Slug is unique.
- [ ] Category is valid.
- [ ] Status is valid.
- [ ] Tags are useful.
- [ ] File path exists or is clearly planned.
- [ ] Public-safe language is used.
- [ ] Related skills are linked where relevant.
- [ ] Related knowledge bases are linked where relevant.
- [ ] Related schemas are linked where relevant.

## Priority Agent Records to Add

- Funding Pipeline Triage Agent
- Partner Resource Card Builder
- AI Agent Library Builder
- Static Site Page Generator
- Prompt Chain Architect
- Knowledge Base Packager
- Business Credit Readiness Helper
- CRM Follow-Up Drafting Agent
- Content Brief Generator
- Automation Workflow Spec Agent
- Vercel Deployment Control Agent
- Affiliate Disclosure Reviewer

## Priority Skill Records to Add

- Static Site Page Builder
- Agent Spec Packager
- SKILL.md Generator
- Funding Language Safety Review
- Partner Resource Card Builder
- Prompt Chain Sequencer
- Schema Starter Builder
- Knowledge Base Folder Builder
- Automation Workflow Spec Writer
- CRM Note Summarizer
- Content Brief Builder
- Portfolio Inventory Normalizer
- Affiliate Disclosure Checker
- Vercel Deployment Checklist Builder

## Done Means

Canonical index files exist, validate as JSON, load into catalog pages, and reference real or clearly planned repo paths.
```

---

## `WORKFLOW_VALIDATION_ROADMAP.md`

```md id="workflow-validation-roadmap-md"
# Workflow Validation Roadmap

## Purpose

Add lightweight validation workflows for a static-first repo without turning the project into a framework app.

## Recommended Workflows

```text
.github/workflows/json-validate.yml
.github/workflows/static-link-check.yml
.github/workflows/public-safety-scan.yml
```

## Workflow 1 — JSON Validate

### Purpose

Validate JSON files on PR.

### Scope

```text
site-data/**/*.json
schemas/**/*.json
knowledge-base/**/index.json
portfolio/**/index.json
agent-index.json
skills/skill-index.json
```

### Suggested Command

```bash
python -m json.tool file.json > /dev/null
```

### Acceptance Criteria

- Malformed JSON fails CI.
- Valid JSON passes CI.
- Workflow has no heavy dependencies.

## Workflow 2 — Static Link Check

### Purpose

Catch broken local links in static pages.

### Scope

```text
*.html
knowledge-base/**/*.md
portfolio/**/*.md
roadmap/**/*.md
examples/**/*.md
```

### Checks

- HTML links to local `.html` files
- CSS references
- JS references
- Markdown local file references

### Acceptance Criteria

- Missing local files are flagged.
- External links are optional or warn-only.
- Workflow remains lightweight.

## Workflow 3 — Public Safety Scan

### Purpose

Warn when risky funding, business-credit, affiliate, or outcome language appears.

### Search Terms

```text
guaranteed approval
guaranteed funding
guaranteed credit
guaranteed revenue
guaranteed rankings
everyone qualifies
no documents needed
no risk
```

### Important Note

These terms are allowed inside:

- Restricted-claim lists
- Do-not-claim lists
- Safety examples
- Warning sections

The workflow should ideally warn, not fail, until the allowlist rules are mature.

## Workflow 4 — Secret Pattern Scan

### Purpose

Catch obvious secrets and private-data risk.

### Search Terms

```text
api_key
access_token
webhook_secret
client_secret
private_key
password
bank_account
tax_id
credit_report
```

### Important Note

Some terms appear in restricted-field lists and synthetic examples. Start as warn-only unless using a mature secret scanner.

## Done Means

The repo has lightweight validation that protects static pages, data files, schema files, and public-safe content without adding unnecessary framework complexity.
```

---

## `POST_MERGE_NEXT_EXPANSION_PROMPT.md`

```md id="post-merge-next-expansion-prompt"
# Master Prompt — Next Expansion After Static Site Pack Merge

Repo:

```text
JFeimster/ai-agent-library
```

## Objective

After the static site pack is merged, expand the repo into a stronger AI Agent Library system by adding canonical indexes, per-agent specs, per-skill `SKILL.md` files, platform templates, and lightweight validation workflows.

## Workstreams

### Workstream 1 — Canonical Agent Index

Create or update:

```text
agent-index.json
```

Use the structure from:

```text
schemas/agent.schema.json
site-data/agents.fallback.json
```

Every record should include:

- name
- slug
- category
- buyer
- pain solved
- primary job
- platform
- status
- priority
- tags
- file path
- related skills
- related knowledge bases
- related schemas

Validate JSON.

### Workstream 2 — Canonical Skill Index

Create or update:

```text
skills/skill-index.json
```

Use:

```text
site-data/skills.fallback.json
```

Every record should include:

- name
- slug
- category
- audience
- problem solved
- recommended apps
- priority
- status
- path
- related agents

Validate JSON.

### Workstream 3 — Per-Agent Markdown Specs

Create priority agent files under:

```text
agents/
```

Initial files:

```text
agents/funding-pipeline-triage-agent.md
agents/partner-resource-card-builder.md
agents/ai-agent-library-builder.md
agents/static-site-page-generator.md
agents/prompt-chain-architect.md
agents/knowledge-base-packager.md
agents/business-credit-readiness-helper.md
agents/crm-follow-up-drafting-agent.md
agents/content-brief-generator.md
agents/automation-workflow-spec-agent.md
agents/vercel-deployment-control-agent.md
agents/affiliate-disclosure-reviewer.md
```

Each file should include:

- Name
- Slug
- Category
- Buyer
- Pain solved
- Primary job
- Inputs
- Outputs
- Workflow
- Guardrails
- Related skills
- Related knowledge bases
- Related schemas
- Platform targets
- Public-safe language rules

### Workstream 4 — Per-Skill SKILL.md Files

Create priority skill folders under:

```text
skills/
```

Initial folders:

```text
skills/static-site-page-builder/
skills/agent-spec-packager/
skills/skill-md-generator/
skills/funding-language-safety-review/
skills/partner-resource-card-builder/
skills/prompt-chain-sequencer/
skills/schema-starter-builder/
skills/knowledge-base-folder-builder/
skills/automation-workflow-spec-writer/
skills/crm-note-summarizer/
skills/content-brief-builder/
skills/portfolio-inventory-normalizer/
skills/affiliate-disclosure-checker/
skills/vercel-deployment-checklist-builder/
```

Each folder should contain:

```text
SKILL.md
```

Each `SKILL.md` should include:

- Purpose
- When to use
- Inputs
- Outputs
- Workflow
- File/path conventions
- Quality checklist
- Guardrails
- Examples
- Related agents

### Workstream 5 — Platform Package Templates

Create templates under:

```text
templates/platform-packs/
```

Initial templates:

```text
templates/platform-packs/custom-gpt-package.md
templates/platform-packs/gemini-gem-package.md
templates/platform-packs/vercel-static-site-package.md
templates/platform-packs/n8n-workflow-spec.md
templates/platform-packs/notion-database-package.md
templates/platform-packs/github-execution-package.md
```

### Workstream 6 — Validation Workflows

Add lightweight workflows:

```text
.github/workflows/json-validate.yml
.github/workflows/static-link-check.yml
.github/workflows/public-safety-scan.yml
```

Rules:

- Keep dependencies minimal.
- Prefer Python standard library where possible.
- Do not add heavy framework tooling.
- Public-safety scan can start as warn-only.
- Secret scan can start as warn-only unless a true secret is found.

## Constraints

- Static-first.
- No React.
- No Next.js.
- No npm unless explicitly needed.
- No build step unless explicitly approved.
- No secrets.
- No private customer data.
- No funding/credit/outcome guarantees.
- Use public-safe wording.

## Validation

Run:

```bash
python -m json.tool agent-index.json > /dev/null
python -m json.tool skills/skill-index.json > /dev/null
```

Run validation for:

```text
site-data/*.json
schemas/*.json
knowledge-base/**/index.json
portfolio/**/index.json
```

Run local static site smoke test:

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

## PR

Create a PR into `main`.

Suggested title:

```text
Expand AI Agent Library canonical indexes and skill specs
```

Do not merge automatically.

## Final Output

Report:

```text
Branch:
Commit SHA:
PR URL:

Files added/updated:
- ...

Validation:
- ...

Known issues:
- ...

Recommended next steps:
- ...
```
```

Batch 21 should be **Canonical agent + skill index files**:

```text
agent-index.json
skills/skill-index.json
agents/README.md
skills/README.md
```


<!-- OPTIONAL SOURCE: Batch 21 — Canonical Agent + Skill Index Files.md -->

# Optional Source Batch: Batch 21 — Canonical Agent + Skill Index Files.md

# you asked

message time: 2026-06-18 16:09:34

Proceed (Batch 21)

---

# chatgpt response

## Batch 21 — Canonical Agent + Skill Index Files

## `agent-index.json`

```json id="agent-index-json"
[
  {
    "name": "Funding Pipeline Triage Agent",
    "slug": "funding-pipeline-triage-agent",
    "category": "Funding Ops",
    "buyer": "Funding brokers, intake teams, processors, and referral partners",
    "pain_solved": "Helps summarize a funding lead, identify missing information, flag caution items, and suggest a possible product-family path without making approval promises.",
    "primary_job": "Turn incomplete funding lead data into a structured funding-readiness summary with missing inputs, caution flags, and suggested next steps.",
    "platform": "ChatGPT Custom GPT",
    "status": "draft",
    "priority": "high",
    "tags": [
      "funding",
      "crm",
      "intake",
      "routing",
      "broker",
      "readiness"
    ],
    "file": "agents/funding-pipeline-triage-agent.md",
    "related_skills": [
      "skills/funding-language-safety-review/SKILL.md",
      "skills/crm-note-summarizer/SKILL.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/funding/README.md",
      "knowledge-base/crm/README.md"
    ],
    "related_schemas": [
      "schemas/agent.schema.json",
      "schemas/funding-product.schema.json"
    ],
    "public_safe_rules": [
      "Do not guarantee approval.",
      "Do not guarantee funding.",
      "Do not quote rates, terms, or funding speed without verified source data.",
      "Use readiness, possible fit, review required, and next-step language."
    ]
  },
  {
    "name": "Partner Resource Card Builder",
    "slug": "partner-resource-card-builder",
    "category": "Partner Enablement",
    "buyer": "Partner managers, affiliates, brokers, ISO reps, and referral operators",
    "pain_solved": "Creates public-safe partner resource cards with audience, problem solved, CTAs, disclosures, restricted claims, and tracking notes.",
    "primary_job": "Generate partner-ready resource cards that can be reviewed, shared, tracked, and published without exposing private payout terms or unsupported claims.",
    "platform": "Static Site / Custom GPT",
    "status": "draft",
    "priority": "high",
    "tags": [
      "partner",
      "affiliate",
      "resource-card",
      "cta",
      "disclosure",
      "referral"
    ],
    "file": "agents/partner-resource-card-builder.md",
    "related_skills": [
      "skills/partner-resource-card-builder/SKILL.md",
      "skills/affiliate-disclosure-checker/SKILL.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/partner-enablement/README.md",
      "knowledge-base/local-referrals/README.md"
    ],
    "related_schemas": [
      "schemas/agent.schema.json"
    ],
    "public_safe_rules": [
      "Include affiliate or referral disclosure language when relevant.",
      "Do not expose private payout terms.",
      "Do not present compensated placements as neutral.",
      "Do not claim guaranteed results."
    ]
  },
  {
    "name": "AI Agent Library Builder",
    "slug": "ai-agent-library-builder",
    "category": "AI Builder Resources",
    "buyer": "AI builders, repo operators, prompt designers, static site builders, and platform package maintainers",
    "pain_solved": "Turns scattered agent ideas into structured, reusable, repo-ready specs, skills, prompt packs, knowledge bases, schemas, examples, and static pages.",
    "primary_job": "Package an agent idea into implementation-ready files with clear paths, guardrails, related skills, and deployment targets.",
    "platform": "ChatGPT Custom GPT",
    "status": "draft",
    "priority": "high",
    "tags": [
      "agents",
      "skills",
      "schemas",
      "repo",
      "static-site",
      "builder"
    ],
    "file": "agents/ai-agent-library-builder.md",
    "related_skills": [
      "skills/agent-spec-packager/SKILL.md",
      "skills/skill-md-generator/SKILL.md",
      "skills/schema-starter-builder/SKILL.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/engineering-as-marketing/README.md"
    ],
    "related_schemas": [
      "schemas/agent.schema.json",
      "schemas/custom-gpt.schema.json",
      "schemas/vercel-project.schema.json"
    ],
    "public_safe_rules": [
      "Do not claim guaranteed marketplace success.",
      "Do not claim guaranteed revenue.",
      "Do not invent platform capabilities.",
      "Do not expose private repo or client data."
    ]
  },
  {
    "name": "Static Site Page Generator",
    "slug": "static-site-page-generator",
    "category": "Static Sites",
    "buyer": "Vercel builders, landing page creators, AI product operators, and engineering-as-marketing teams",
    "pain_solved": "Generates static HTML, CSS, JavaScript, metadata, and page sections for dependency-free launch pages.",
    "primary_job": "Create static-first site files and page sections that can be committed directly to a repo and deployed without a build step.",
    "platform": "Vercel Static Site",
    "status": "ready",
    "priority": "high",
    "tags": [
      "html",
      "css",
      "javascript",
      "vercel",
      "landing-page",
      "static-site"
    ],
    "file": "agents/static-site-page-generator.md",
    "related_skills": [
      "skills/static-site-page-builder/SKILL.md",
      "skills/vercel-deployment-checklist-builder/SKILL.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/engineering-as-marketing/README.md"
    ],
    "related_schemas": [
      "schemas/vercel-project.schema.json"
    ],
    "public_safe_rules": [
      "Do not add frameworks unless requested.",
      "Do not include external scripts without review.",
      "Do not include unapproved claims or fake social proof.",
      "Keep files static-first and dependency-free."
    ]
  },
  {
    "name": "Prompt Chain Architect",
    "slug": "prompt-chain-architect",
    "category": "Prompt Systems",
    "buyer": "Prompt engineers, AI builders, Codex users, Jules users, and workflow operators",
    "pain_solved": "Converts broad build tasks into sequenced prompts with inputs, outputs, acceptance criteria, validation steps, and PR-ready instructions.",
    "primary_job": "Break a large implementation request into staged prompts that an AI coding or execution agent can complete safely.",
    "platform": "ChatGPT / GitHub",
    "status": "draft",
    "priority": "high",
    "tags": [
      "prompts",
      "codex",
      "jules",
      "workflow",
      "review",
      "execution"
    ],
    "file": "agents/prompt-chain-architect.md",
    "related_skills": [
      "skills/prompt-chain-sequencer/SKILL.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/engineering-as-marketing/README.md",
      "knowledge-base/automation/README.md"
    ],
    "related_schemas": [
      "schemas/agent.schema.json"
    ],
    "public_safe_rules": [
      "Do not instruct agents to merge without explicit approval.",
      "Do not skip validation.",
      "Do not overwrite existing repo work without diff review.",
      "Include acceptance criteria and rollback notes where relevant."
    ]
  },
  {
    "name": "Knowledge Base Packager",
    "slug": "knowledge-base-packager",
    "category": "Knowledge Bases",
    "buyer": "Custom GPT builders, source-doc operators, AI system maintainers, and repo maintainers",
    "pain_solved": "Turns scattered notes, docs, and examples into clean knowledge-base folders with README, index, examples, guardrails, and output rules.",
    "primary_job": "Create a reusable knowledge-base folder that agents can use as a governed source layer.",
    "platform": "GitHub / Custom GPT",
    "status": "draft",
    "priority": "high",
    "tags": [
      "knowledge-base",
      "gpt",
      "markdown",
      "docs",
      "source",
      "guardrails"
    ],
    "file": "agents/knowledge-base-packager.md",
    "related_skills": [
      "skills/knowledge-base-folder-builder/SKILL.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/engineering-as-marketing/README.md"
    ],
    "related_schemas": [
      "schemas/agent.schema.json"
    ],
    "public_safe_rules": [
      "Separate public-safe content from internal-only notes.",
      "Do not include private source material unless intentionally private.",
      "Do not include secrets or private client records.",
      "Document source boundaries and update cadence."
    ]
  },
  {
    "name": "Business Credit Readiness Helper",
    "slug": "business-credit-readiness-helper",
    "category": "Business Credit",
    "buyer": "Business owners, readiness coaches, educational resource builders, and partner resource operators",
    "pain_solved": "Helps organize business-credit setup readiness, missing items, vendor-readiness gaps, and next steps using educational non-promissory language.",
    "primary_job": "Create business-credit readiness summaries and checklists that avoid credit-repair framing and outcome promises.",
    "platform": "Custom GPT / Static Site",
    "status": "draft",
    "priority": "medium",
    "tags": [
      "business-credit",
      "readiness",
      "setup",
      "education",
      "no-guarantees"
    ],
    "file": "agents/business-credit-readiness-helper.md",
    "related_skills": [
      "skills/funding-language-safety-review/SKILL.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/engineering-as-marketing/README.md"
    ],
    "related_schemas": [
      "schemas/agent.schema.json"
    ],
    "public_safe_rules": [
      "Do not use credit-repair framing.",
      "Do not guarantee approvals, limits, scores, or funding.",
      "Use setup, readiness, common gaps, and educational guidance language.",
      "Do not provide legal, tax, lending, or credit-repair advice."
    ]
  },
  {
    "name": "CRM Follow-Up Drafting Agent",
    "slug": "crm-follow-up-drafting-agent",
    "category": "CRM",
    "buyer": "Sales teams, brokers, processors, closers, and RevOps operators",
    "pain_solved": "Drafts clear follow-up messages from CRM status, missing fields, prior notes, and next-step rules while keeping human review in place.",
    "primary_job": "Convert CRM context into safe, reviewable follow-up drafts and next-action summaries.",
    "platform": "Custom GPT / n8n",
    "status": "draft",
    "priority": "high",
    "tags": [
      "crm",
      "follow-up",
      "sales",
      "automation",
      "review",
      "drafting"
    ],
    "file": "agents/crm-follow-up-drafting-agent.md",
    "related_skills": [
      "skills/crm-note-summarizer/SKILL.md",
      "skills/automation-workflow-spec-writer/SKILL.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/crm/README.md",
      "knowledge-base/automation/README.md"
    ],
    "related_schemas": [
      "schemas/webhook-event.schema.json"
    ],
    "public_safe_rules": [
      "Draft before sending.",
      "Require human review for high-stakes outbound messages.",
      "Do not promise outcomes.",
      "Do not expose private CRM data in public examples."
    ]
  },
  {
    "name": "Content Brief Generator",
    "slug": "content-brief-generator",
    "category": "Content Ops",
    "buyer": "SEO writers, content operators, blog teams, AI content builders, and publishing teams",
    "pain_solved": "Creates structured content briefs with keywords, audience, search intent, headings, internal links, CTAs, metadata, and do-not-claim lists.",
    "primary_job": "Turn a topic or asset idea into a publishable content brief with SEO structure and risk controls.",
    "platform": "Static Site / Custom GPT",
    "status": "ready",
    "priority": "high",
    "tags": [
      "seo",
      "content",
      "brief",
      "metadata",
      "publishing",
      "wix"
    ],
    "file": "agents/content-brief-generator.md",
    "related_skills": [
      "skills/content-brief-builder/SKILL.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/content-ops/README.md"
    ],
    "related_schemas": [
      "schemas/agent.schema.json"
    ],
    "public_safe_rules": [
      "Verify current claims before publishing.",
      "Do not guarantee rankings, traffic, revenue, or funding.",
      "Include do-not-claim lists for regulated or high-stakes topics.",
      "Use original, non-infringing content."
    ]
  },
  {
    "name": "Automation Workflow Spec Agent",
    "slug": "automation-workflow-spec-agent",
    "category": "Automation",
    "buyer": "Automation builders, CRM operators, n8n builders, and technical operators",
    "pain_solved": "Turns workflow ideas into trigger, input, step, output, review-gate, failure-mode, and webhook-event specs.",
    "primary_job": "Create implementation-ready workflow specs that include validation, review gates, failure handling, and data rules.",
    "platform": "n8n / GitHub",
    "status": "draft",
    "priority": "high",
    "tags": [
      "automation",
      "webhook",
      "workflow",
      "n8n",
      "schema",
      "approval"
    ],
    "file": "agents/automation-workflow-spec-agent.md",
    "related_skills": [
      "skills/automation-workflow-spec-writer/SKILL.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/automation/README.md"
    ],
    "related_schemas": [
      "schemas/webhook-event.schema.json"
    ],
    "public_safe_rules": [
      "Use synthetic payloads in public examples.",
      "Do not include secrets or production endpoints.",
      "Require human review for high-stakes actions.",
      "Document failure modes and fallback behavior."
    ]
  },
  {
    "name": "Vercel Deployment Control Agent",
    "slug": "vercel-deployment-control-agent",
    "category": "Platform Ops",
    "buyer": "Vercel site operators, static site builders, and repo maintainers",
    "pain_solved": "Helps review static site deployment files, Vercel settings, auto-deploy behavior, root file readiness, and rollback notes.",
    "primary_job": "Audit and document deployment readiness for static-first Vercel projects.",
    "platform": "GitHub / Vercel",
    "status": "draft",
    "priority": "medium",
    "tags": [
      "vercel",
      "deployment",
      "static-site",
      "repo",
      "ops",
      "rollback"
    ],
    "file": "agents/vercel-deployment-control-agent.md",
    "related_skills": [
      "skills/vercel-deployment-checklist-builder/SKILL.md",
      "skills/static-site-page-builder/SKILL.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/engineering-as-marketing/README.md"
    ],
    "related_schemas": [
      "schemas/vercel-project.schema.json"
    ],
    "public_safe_rules": [
      "Do not expose environment variables.",
      "Do not enable or disable deployment behavior without explicit intent.",
      "Do not add build tooling to static projects unless requested.",
      "Document deployment status and rollback notes."
    ]
  },
  {
    "name": "Affiliate Disclosure Reviewer",
    "slug": "affiliate-disclosure-reviewer",
    "category": "Trust & Safety",
    "buyer": "Affiliate operators, partner managers, resource directory maintainers, and content publishers",
    "pain_solved": "Reviews partner and affiliate content for missing disclosure language, unsupported claims, vague CTAs, and risky recommendation framing.",
    "primary_job": "Audit affiliate and partner-facing content for visible disclosures, restricted claims, CTA clarity, and public-safe positioning.",
    "platform": "Custom GPT / Static Site",
    "status": "draft",
    "priority": "medium",
    "tags": [
      "affiliate",
      "disclosure",
      "partner",
      "trust",
      "review",
      "safety"
    ],
    "file": "agents/affiliate-disclosure-reviewer.md",
    "related_skills": [
      "skills/affiliate-disclosure-checker/SKILL.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/partner-enablement/README.md"
    ],
    "related_schemas": [
      "schemas/agent.schema.json"
    ],
    "public_safe_rules": [
      "Do not hide compensation relationships.",
      "Do not imply paid placements are neutral.",
      "Do not make unsupported outcome claims.",
      "Link affiliate disclosure where relevant."
    ]
  }
]
```

---

## `skills/skill-index.json`

```json id="skills-skill-index-json"
[
  {
    "name": "Static Site Page Builder",
    "slug": "static-site-page-builder",
    "category": "Static Sites",
    "audience": "Static site builders, Vercel operators, and AI product teams",
    "problem_solved": "Generates dependency-free HTML pages with consistent structure, navigation, CTAs, metadata, and public-safe page sections.",
    "recommended_apps": [
      "ChatGPT",
      "Codex",
      "GitHub",
      "Vercel"
    ],
    "priority": "high",
    "status": "draft",
    "path": "skills/static-site-page-builder/SKILL.md",
    "related_agents": [
      "agents/static-site-page-generator.md",
      "agents/vercel-deployment-control-agent.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/engineering-as-marketing/README.md"
    ]
  },
  {
    "name": "Agent Spec Packager",
    "slug": "agent-spec-packager",
    "category": "AI Builder Resources",
    "audience": "AI builders, prompt engineers, platform packagers, and repo maintainers",
    "problem_solved": "Turns agent concepts into structured specs with buyer, pain solved, inputs, outputs, workflow, guardrails, and platform targets.",
    "recommended_apps": [
      "ChatGPT",
      "GitHub",
      "Notion"
    ],
    "priority": "high",
    "status": "draft",
    "path": "skills/agent-spec-packager/SKILL.md",
    "related_agents": [
      "agents/ai-agent-library-builder.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/engineering-as-marketing/README.md"
    ]
  },
  {
    "name": "SKILL.md Generator",
    "slug": "skill-md-generator",
    "category": "Skills Library",
    "audience": "AI Agent Library maintainers and reusable capability builders",
    "problem_solved": "Creates structured SKILL.md files with purpose, inputs, outputs, workflow, examples, guardrails, and suggested repo paths.",
    "recommended_apps": [
      "ChatGPT",
      "GitHub",
      "Codex"
    ],
    "priority": "high",
    "status": "ready",
    "path": "skills/skill-md-generator/SKILL.md",
    "related_agents": [
      "agents/ai-agent-library-builder.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/engineering-as-marketing/README.md"
    ]
  },
  {
    "name": "Funding Language Safety Review",
    "slug": "funding-language-safety-review",
    "category": "Funding Ops",
    "audience": "Funding brokers, affiliate operators, partner managers, and content publishers",
    "problem_solved": "Reviews funding copy for guaranteed approval claims, unsafe speed claims, unsupported terms, missing educational framing, and high-risk language.",
    "recommended_apps": [
      "ChatGPT",
      "Custom GPT",
      "GitHub"
    ],
    "priority": "high",
    "status": "draft",
    "path": "skills/funding-language-safety-review/SKILL.md",
    "related_agents": [
      "agents/funding-pipeline-triage-agent.md",
      "agents/business-credit-readiness-helper.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/funding/README.md"
    ]
  },
  {
    "name": "Partner Resource Card Builder",
    "slug": "partner-resource-card-builder",
    "category": "Partner Enablement",
    "audience": "Partner managers, affiliates, brokers, referral agents, and ISO operators",
    "problem_solved": "Creates resource cards with audience, problem solved, CTAs, disclosure language, restricted claims, and tracking notes.",
    "recommended_apps": [
      "ChatGPT",
      "Vercel",
      "Notion"
    ],
    "priority": "high",
    "status": "draft",
    "path": "skills/partner-resource-card-builder/SKILL.md",
    "related_agents": [
      "agents/partner-resource-card-builder.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/partner-enablement/README.md",
      "knowledge-base/local-referrals/README.md"
    ]
  },
  {
    "name": "Prompt Chain Sequencer",
    "slug": "prompt-chain-sequencer",
    "category": "Prompt Systems",
    "audience": "Prompt builders, Codex users, Jules users, implementation operators, and repo maintainers",
    "problem_solved": "Breaks large tasks into ordered prompts with inputs, outputs, acceptance criteria, validation steps, and PR-ready instructions.",
    "recommended_apps": [
      "ChatGPT",
      "Codex",
      "Jules",
      "GitHub"
    ],
    "priority": "high",
    "status": "draft",
    "path": "skills/prompt-chain-sequencer/SKILL.md",
    "related_agents": [
      "agents/prompt-chain-architect.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/automation/README.md"
    ]
  },
  {
    "name": "Schema Starter Builder",
    "slug": "schema-starter-builder",
    "category": "Schemas",
    "audience": "Repo maintainers, automation builders, structured data operators, and platform package builders",
    "problem_solved": "Generates JSON Schema files with required fields, enums, examples, descriptions, validation notes, and public-safe data rules.",
    "recommended_apps": [
      "ChatGPT",
      "GitHub",
      "Codex"
    ],
    "priority": "medium",
    "status": "draft",
    "path": "skills/schema-starter-builder/SKILL.md",
    "related_agents": [
      "agents/ai-agent-library-builder.md",
      "agents/automation-workflow-spec-agent.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/engineering-as-marketing/README.md",
      "knowledge-base/automation/README.md"
    ]
  },
  {
    "name": "Knowledge Base Folder Builder",
    "slug": "knowledge-base-folder-builder",
    "category": "Knowledge Bases",
    "audience": "Custom GPT builders, source-doc operators, AI system maintainers, and repo maintainers",
    "problem_solved": "Creates README, index.json, examples, source boundaries, guardrails, and output rules for reusable knowledge-base folders.",
    "recommended_apps": [
      "ChatGPT",
      "GitHub",
      "Notion"
    ],
    "priority": "high",
    "status": "draft",
    "path": "skills/knowledge-base-folder-builder/SKILL.md",
    "related_agents": [
      "agents/knowledge-base-packager.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/engineering-as-marketing/README.md"
    ]
  },
  {
    "name": "Automation Workflow Spec Writer",
    "slug": "automation-workflow-spec-writer",
    "category": "Automation",
    "audience": "n8n builders, CRM admins, automation operators, and workflow designers",
    "problem_solved": "Creates workflow specs with triggers, inputs, steps, outputs, approval gates, failure modes, fallback behavior, and data rules.",
    "recommended_apps": [
      "ChatGPT",
      "n8n",
      "GitHub",
      "Notion"
    ],
    "priority": "high",
    "status": "draft",
    "path": "skills/automation-workflow-spec-writer/SKILL.md",
    "related_agents": [
      "agents/automation-workflow-spec-agent.md",
      "agents/crm-follow-up-drafting-agent.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/automation/README.md"
    ]
  },
  {
    "name": "CRM Note Summarizer",
    "slug": "crm-note-summarizer",
    "category": "CRM",
    "audience": "Sales teams, processors, closers, brokers, and RevOps operators",
    "problem_solved": "Converts messy CRM notes into known facts, missing fields, current status, caution flags, and suggested next action.",
    "recommended_apps": [
      "ChatGPT",
      "HubSpot",
      "Notion",
      "Google Sheets"
    ],
    "priority": "medium",
    "status": "draft",
    "path": "skills/crm-note-summarizer/SKILL.md",
    "related_agents": [
      "agents/crm-follow-up-drafting-agent.md",
      "agents/funding-pipeline-triage-agent.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/crm/README.md"
    ]
  },
  {
    "name": "Content Brief Builder",
    "slug": "content-brief-builder",
    "category": "Content Ops",
    "audience": "SEO writers, content teams, AI publishers, blog operators, and editorial strategists",
    "problem_solved": "Builds article briefs with keywords, search intent, audience, headings, internal links, CTA, metadata, excerpt, and do-not-claim list.",
    "recommended_apps": [
      "ChatGPT",
      "Notion",
      "GitHub",
      "Wix"
    ],
    "priority": "high",
    "status": "ready",
    "path": "skills/content-brief-builder/SKILL.md",
    "related_agents": [
      "agents/content-brief-generator.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/content-ops/README.md"
    ]
  },
  {
    "name": "Portfolio Inventory Normalizer",
    "slug": "portfolio-inventory-normalizer",
    "category": "Portfolio",
    "audience": "AI product operators, Vercel builders, GPT portfolio maintainers, and repo maintainers",
    "problem_solved": "Normalizes public assets into portfolio records with name, URL, source repo, status, CTA, related agent, related skill, and review date.",
    "recommended_apps": [
      "ChatGPT",
      "GitHub",
      "Vercel",
      "Notion"
    ],
    "priority": "medium",
    "status": "draft",
    "path": "skills/portfolio-inventory-normalizer/SKILL.md",
    "related_agents": [
      "agents/vercel-deployment-control-agent.md",
      "agents/ai-agent-library-builder.md"
    ],
    "related_knowledge_bases": [
      "portfolio/vercel/README.md",
      "portfolio/custom-gpts/README.md"
    ]
  },
  {
    "name": "Affiliate Disclosure Checker",
    "slug": "affiliate-disclosure-checker",
    "category": "Trust & Safety",
    "audience": "Affiliate publishers, partner operators, resource directory maintainers, and content reviewers",
    "problem_solved": "Checks pages and cards for visible affiliate disclosure, non-neutral paid placement language, restricted claims, and CTA clarity.",
    "recommended_apps": [
      "ChatGPT",
      "GitHub",
      "Notion"
    ],
    "priority": "medium",
    "status": "draft",
    "path": "skills/affiliate-disclosure-checker/SKILL.md",
    "related_agents": [
      "agents/affiliate-disclosure-reviewer.md",
      "agents/partner-resource-card-builder.md"
    ],
    "related_knowledge_bases": [
      "knowledge-base/partner-enablement/README.md"
    ]
  },
  {
    "name": "Vercel Deployment Checklist Builder",
    "slug": "vercel-deployment-checklist-builder",
    "category": "Platform Ops",
    "audience": "Static site builders, repo maintainers, Vercel operators, and deployment reviewers",
    "problem_solved": "Creates deployment checklists covering root files, Vercel settings, auto-deploy behavior, CTA links, legal pages, and rollback notes.",
    "recommended_apps": [
      "ChatGPT",
      "Vercel",
      "GitHub"
    ],
    "priority": "medium",
    "status": "draft",
    "path": "skills/vercel-deployment-checklist-builder/SKILL.md",
    "related_agents": [
      "agents/vercel-deployment-control-agent.md",
      "agents/static-site-page-generator.md"
    ],
    "related_knowledge_bases": [
      "portfolio/vercel/README.md"
    ]
  }
]
```

---

## `agents/README.md`

```md id="agents-readme"
# Agents

This folder contains productized AI agent specifications for AI Agent Library.

Each agent should be documented as a reusable asset that can be converted into one or more platform packages, including Custom GPTs, Gemini Gems, static site tools, n8n workflows, Notion systems, or GitHub execution prompts.

## Purpose

The `agents/` folder is the canonical source for agent-level product specs.

Use this folder to define:

- What the agent does
- Who it is for
- What pain it solves
- What inputs it needs
- What outputs it produces
- What workflow it follows
- What guardrails it must obey
- What skills it depends on
- What knowledge bases it uses
- What schemas it should follow
- What platform packages it can become

## Canonical Index

The root index for agents is:

```text
agent-index.json
```

Catalog pages should load agent data in this order:

```text
1. agent-index.json
2. site-data/agents.fallback.json
```

## Recommended Agent File Naming

Use lowercase kebab-case:

```text
agents/funding-pipeline-triage-agent.md
agents/partner-resource-card-builder.md
agents/ai-agent-library-builder.md
```

## Required Agent Spec Sections

Each agent Markdown file should include:

```md
# Agent Name

## Summary

One clear paragraph describing the agent.

## Metadata

- Slug:
- Category:
- Status:
- Priority:
- Buyer:
- Platform target:

## Pain Solved

What problem this agent solves.

## Primary Job

The main job the agent performs.

## Users

Who should use this agent.

## Inputs

- Input 1
- Input 2
- Input 3

## Outputs

- Output 1
- Output 2
- Output 3

## Workflow

1. Step one
2. Step two
3. Step three

## Guardrails

- Guardrail 1
- Guardrail 2
- Guardrail 3

## Public-Safe Language Rules

- Rule 1
- Rule 2
- Rule 3

## Related Skills

- `skills/example-skill/SKILL.md`

## Related Knowledge Bases

- `knowledge-base/example/README.md`

## Related Schemas

- `schemas/agent.schema.json`

## Platform Packages

- Custom GPT
- Gemini Gem
- Static site page
- n8n workflow
- Notion system
```

## Agent Status Values

Use these values consistently:

```text
idea
draft
ready
in-review
published
needs-refresh
deprecated
archived
```

## Priority Values

Use:

```text
high
medium
low
```

## Public-Safe Rules

Agents must avoid unsupported claims.

Do not claim:

- Guaranteed approval
- Guaranteed funding
- Guaranteed credit outcomes
- Guaranteed revenue
- Guaranteed rankings
- Everyone qualifies
- No risk
- No documents needed
- AI replaces professional review

Use:

- Educational
- Readiness
- Common requirements
- Possible fit
- Review required
- Potential options
- Suggested next step
- Public-safe resource

## Agent Quality Checklist

Before adding an agent file:

- [ ] Agent has a clear name.
- [ ] Slug is unique.
- [ ] Category matches `site-data/categories.json`.
- [ ] Buyer is specific.
- [ ] Pain solved is clear.
- [ ] Primary job is narrow enough.
- [ ] Inputs are listed.
- [ ] Outputs are listed.
- [ ] Workflow is practical.
- [ ] Guardrails are included.
- [ ] Public-safe rules are included.
- [ ] Related skills are linked.
- [ ] Related knowledge bases are linked.
- [ ] Related schemas are linked.
- [ ] File is referenced in `agent-index.json`.

## Initial Priority Agents

```text
funding-pipeline-triage-agent.md
partner-resource-card-builder.md
ai-agent-library-builder.md
static-site-page-generator.md
prompt-chain-architect.md
knowledge-base-packager.md
business-credit-readiness-helper.md
crm-follow-up-drafting-agent.md
content-brief-generator.md
automation-workflow-spec-agent.md
vercel-deployment-control-agent.md
affiliate-disclosure-reviewer.md
```

## Related Files

```text
agent-index.json
site-data/agents.fallback.json
schemas/agent.schema.json
skill-catalog.html
agent-catalog.html
knowledge-base/
portfolio/
roadmap/phase-4-platform-layer.md
```
```

---

## `skills/README.md`

```md id="skills-readme"
# Skills

This folder contains reusable AI skills for AI Agent Library.

A skill is a portable capability that can be used by multiple agents, prompt systems, static tools, platform packages, or automation workflows.

## Purpose

The `skills/` folder is the canonical source for reusable capability playbooks.

Use this folder to define:

- What the skill does
- When it should be used
- What inputs it needs
- What outputs it produces
- What workflow it follows
- What file/path conventions apply
- What quality checks are required
- What guardrails must be followed
- Which agents can use it

## Canonical Index

The canonical index for skills is:

```text
skills/skill-index.json
```

Catalog pages should load skill data in this order:

```text
1. skills/skill-index.json
2. site-data/skills.fallback.json
```

## Recommended Skill Folder Naming

Use lowercase kebab-case:

```text
skills/static-site-page-builder/
skills/agent-spec-packager/
skills/skill-md-generator/
```

Each skill folder should contain:

```text
SKILL.md
```

## Required SKILL.md Sections

Each `SKILL.md` file should include:

```md
# Skill Name

## Purpose

What this skill helps the assistant do.

## When To Use

- Use case 1
- Use case 2
- Use case 3

## Inputs

- Input 1
- Input 2
- Input 3

## Outputs

- Output 1
- Output 2
- Output 3

## Workflow

1. Step one
2. Step two
3. Step three

## File / Path Conventions

Recommended repo paths or output filenames.

## Quality Checklist

- [ ] Check 1
- [ ] Check 2
- [ ] Check 3

## Guardrails

- Guardrail 1
- Guardrail 2
- Guardrail 3

## Examples

### Example Input

Example input text.

### Example Output

Example output text.

## Related Agents

- `agents/example-agent.md`

## Related Knowledge Bases

- `knowledge-base/example/README.md`
```

## Skill Status Values

Use these values consistently:

```text
idea
draft
ready
in-review
published
needs-refresh
deprecated
archived
```

## Priority Values

Use:

```text
high
medium
low
```

## Skill Quality Checklist

Before adding a skill:

- [ ] Folder uses kebab-case.
- [ ] Folder contains `SKILL.md`.
- [ ] Purpose is clear.
- [ ] When-to-use rules are specific.
- [ ] Inputs are listed.
- [ ] Outputs are listed.
- [ ] Workflow is step-by-step.
- [ ] File/path conventions are included where relevant.
- [ ] Quality checklist is included.
- [ ] Guardrails are included.
- [ ] Examples are included where useful.
- [ ] Related agents are linked.
- [ ] Skill is referenced in `skills/skill-index.json`.

## Public-Safe Rules

Skills that touch funding, credit, affiliate, automation, data, or platform operations must avoid unsupported claims and unsafe actions.

Do not create outputs that claim:

- Guaranteed approval
- Guaranteed funding
- Guaranteed credit outcomes
- Guaranteed revenue
- Guaranteed rankings
- Everyone qualifies
- No risk
- No documents needed
- AI replaces professional review

Use:

- Educational
- Readiness
- Draft before send
- Human review required
- Possible fit
- Review required
- Synthetic example
- Public-safe resource

## Initial Priority Skills

```text
static-site-page-builder/
agent-spec-packager/
skill-md-generator/
funding-language-safety-review/
partner-resource-card-builder/
prompt-chain-sequencer/
schema-starter-builder/
knowledge-base-folder-builder/
automation-workflow-spec-writer/
crm-note-summarizer/
content-brief-builder/
portfolio-inventory-normalizer/
affiliate-disclosure-checker/
vercel-deployment-checklist-builder/
```

## Related Files

```text
skills/skill-index.json
site-data/skills.fallback.json
skill-catalog.html
skill-categories.html
top-skills.html
skill-builder.html
schemas/agent.schema.json
agents/
knowledge-base/
roadmap/phase-4-platform-layer.md
```
```

Batch 22 should be **Priority per-agent Markdown specs**:

```text
agents/funding-pipeline-triage-agent.md
agents/partner-resource-card-builder.md
agents/ai-agent-library-builder.md
agents/static-site-page-generator.md
```


<!-- OPTIONAL SOURCE: Batch 22 — Priority Per-Agent Markdown Specs.md -->

# Optional Source Batch: Batch 22 — Priority Per-Agent Markdown Specs.md

# you asked

message time: 2026-06-18 16:16:44

Proceed to detailed and complete files for Batch 22

---

# chatgpt response

## Batch 22 — Priority Per-Agent Markdown Specs

## `agents/funding-pipeline-triage-agent.md`

```md id="agents-funding-pipeline-triage-agent-md"
# Funding Pipeline Triage Agent

## Summary

The **Funding Pipeline Triage Agent** helps funding brokers, processors, referral partners, and intake teams convert messy funding lead information into a structured readiness summary. It identifies what is known, what is missing, what may create friction, and which funding product family may be worth reviewing next.

This agent does **not** approve files, quote terms, guarantee funding, or replace professional review. It is an intake, organization, routing, and readiness-support agent.

## Metadata

| Field | Value |
|---|---|
| Slug | `funding-pipeline-triage-agent` |
| Category | Funding Ops |
| Status | Draft |
| Priority | High |
| Buyer | Funding brokers, intake teams, processors, referral partners |
| Platform Targets | ChatGPT Custom GPT, internal broker workflow, CRM assistant, static site intake tool |
| Primary Repo Path | `agents/funding-pipeline-triage-agent.md` |
| Related Schema | `schemas/agent.schema.json` |
| Related Knowledge Base | `knowledge-base/funding/README.md` |

## Pain Solved

Funding leads often arrive incomplete, inconsistent, or poorly framed.

Common issues include:

- Missing revenue details
- Missing time-in-business
- Missing industry context
- Missing requested amount
- Missing credit profile
- Missing existing debt or advance information
- Vague urgency
- Mismatched product expectations
- Unsupported claims from referral sources
- Poor notes inside CRM records
- No clean next step for processor or closer

This agent turns that messy intake into a structured funding-readiness view.

## Primary Job

The agent’s primary job is to produce a **funding-readiness triage summary**.

It should help answer:

- What do we know?
- What do we still need?
- What might create friction?
- What product family may be worth reviewing?
- What should the next human-reviewed step be?

## Users

Best-fit users:

- Business funding brokers
- Funding processors
- Referral partners
- Affiliate operators
- CRM admins
- Loan packaging assistants
- Deal desk operators
- Intake teams
- Follow-up teams

Not intended for:

- Final underwriting
- Legal advice
- Tax advice
- Credit repair advice
- Guaranteed approval screening
- Automated lending decisions
- Consumer credit decisioning

## Inputs

The agent can work from partial or complete information.

### Minimum Useful Inputs

```text
Business name:
Industry:
Monthly revenue:
Time in business:
Requested amount:
Use of funds:
Owner credit range:
State:
Urgency:
Existing debt or advances:
Available documents:
Lead source:
CRM notes:
```

### Optional Inputs

```text
Average daily balance:
NSF count:
Number of deposits:
Processor statements:
Bank statement months available:
Tax lien status:
Bankruptcy status:
Existing MCA balances:
Current payment stack:
Marketplace account status:
Collateral:
Property ownership:
Equipment type:
Invoice volume:
Accounts receivable aging:
```

## Outputs

The agent should produce:

1. **Lead Snapshot**
2. **Known Facts**
3. **Missing Information**
4. **Potential Product-Family Fit**
5. **Caution Flags**
6. **Questions to Ask Next**
7. **Suggested Human-Reviewed Next Step**
8. **Public-Safe Client-Facing Summary**
9. **Internal Notes**
10. **Do-Not-Claim List**

## Standard Output Format

```md
# Funding Triage Summary

## 1. Lead Snapshot

- Business:
- Industry:
- Monthly revenue:
- Time in business:
- Requested amount:
- Use of funds:
- Credit range:
- State:
- Urgency:
- Lead source:

## 2. Known Facts

- Fact 1
- Fact 2
- Fact 3

## 3. Missing Information

- Missing item 1
- Missing item 2
- Missing item 3

## 4. Possible Product-Family Review Path

Based on the available information, this file may be worth reviewing for:

- Product family:
- Why it may fit:
- What must be verified:
- What could block the path:

## 5. Caution Flags

- Caution flag 1
- Caution flag 2

## 6. Questions to Ask Next

- Question 1
- Question 2
- Question 3

## 7. Suggested Next Step

Recommended next step for human review:

[Plain-English next step]

## 8. Client-Facing Summary

[Public-safe, non-promissory summary]

## 9. Internal Notes

[Internal-only routing notes]

## 10. Do Not Claim

Do not claim:

- Guaranteed approval
- Guaranteed funding
- Guaranteed same-day funding
- Guaranteed terms
- Guaranteed rate
- Guaranteed credit outcome
```

## Workflow

### Step 1 — Identify the File Type

Classify the input as one of:

- New lead
- Existing CRM record
- Referral lead
- Documented funding file
- Stalled deal
- Declined file
- Renewal opportunity
- Marketplace seller
- Real estate capital request
- Equipment request
- Invoice/factoring request
- Startup/credit-driven request

### Step 2 — Extract Known Facts

Pull out:

- Business profile
- Revenue
- Time in business
- Requested amount
- Use of funds
- Credit profile
- Existing debt
- Industry
- Urgency
- Available documents
- Missing documents
- Red flags
- Lead source

Do not invent missing data.

### Step 3 — Normalize the Lead

Convert messy notes into standardized fields.

Example:

```text
"does about 80k/mo, been around 3 yrs, needs 50k fast, has 2 advances"
```

Normalize to:

```text
Monthly revenue: approximately $80,000
Time in business: approximately 3 years
Requested amount: $50,000
Urgency: fast / time-sensitive
Existing advances: 2 reported
```

### Step 4 — Check for Missing Inputs

Identify missing information that is necessary before meaningful review.

Common missing inputs:

- Revenue verification
- Bank statement months
- Existing debt stack
- Credit range
- Legal entity status
- State
- Industry
- Use of funds
- Requested amount
- Owner percentage
- Business start date
- Processing volume
- A/R aging
- Marketplace payout status

### Step 5 — Identify Caution Flags

Potential caution flags include:

- Open bankruptcy
- Unresolved tax liens
- Frequent NSFs
- Repeated overdrafts
- Excessive existing advances
- Suspended marketplace account
- Revenue below likely product threshold
- Requested amount not supported by revenue
- Very short time in business
- Unclear ownership
- Refusal to provide documents
- Inconsistent revenue statements
- High-risk or restricted industry
- Weak collateral for asset-secured request

### Step 6 — Suggest Product-Family Review Path

The agent can suggest **product-family review paths**, not final approvals.

Example product-family paths:

- Revenue-based working capital review
- Business line of credit review
- Term loan review
- Startup / credit-driven path
- Equipment finance review
- Invoice factoring review
- Marketplace seller capital review
- Real estate capital review
- Tax or lien-sensitive review
- Declined-file reactivation path
- Renewal review

### Step 7 — Draft Next Questions

Questions should be direct and practical.

Example:

```text
Can you confirm average monthly gross revenue for the last three months?
How long has the business been operating under the current entity?
Are there any open advances, loans, liens, or judgments?
Can you provide the most recent three months of business bank statements?
What is the requested amount and exact use of funds?
```

### Step 8 — Produce Client-Facing Summary

Client-facing language must be cautious and non-promissory.

Use:

```text
Based on what you shared, the next step is to review a few missing details so the file can be routed appropriately.
```

Avoid:

```text
You qualify.
You are approved.
We can get you funded today.
You will get this amount.
No documents are needed.
```

## Product-Family Routing Guide

### Revenue-Based Working Capital Review

May be relevant when:

- Business has recurring revenue
- Deposits are visible
- Owner needs speed
- Use of funds is working capital
- Bank statements are available

Need to verify:

- Monthly revenue
- Average daily balance
- NSF frequency
- Existing advances
- Deposit consistency
- Industry restrictions

### Business Line of Credit Review

May be relevant when:

- Business has stronger credit profile
- Time in business is established
- Owner wants reusable capital access
- Revenue is stable

Need to verify:

- Credit range
- Revenue
- Time in business
- Existing obligations
- Business entity details

### Term Loan Review

May be relevant when:

- Business has stable operating history
- Credit is stronger
- Use of funds is clear
- Requested amount is supported by file strength

Need to verify:

- Revenue
- Time in business
- Credit profile
- Debt schedule
- Tax/lien issues
- Documentation readiness

### Startup / Credit-Driven Path

May be relevant when:

- Business has limited operating history
- Owner has stronger personal credit
- Request is for startup or early-stage capital
- Revenue-based products are not a fit

Need to verify:

- Credit range
- Personal income
- Entity setup
- Business plan or use of funds
- Existing personal obligations

### Equipment Finance Review

May be relevant when:

- Funds are for equipment purchase
- Equipment is identifiable
- Vendor invoice or quote is available
- Equipment has usable value

Need to verify:

- Equipment type
- Vendor
- Invoice or quote
- New or used status
- Business use
- Collateral quality

### Invoice Factoring Review

May be relevant when:

- Business invoices other businesses
- A/R is outstanding
- Customers are creditworthy
- Need is tied to cash-flow timing

Need to verify:

- Invoice aging
- Customer concentration
- Debtor creditworthiness
- Contract status
- A/R volume

### Marketplace Seller Capital Review

May be relevant when:

- Business sells through Amazon, Shopify, Walmart, eBay, Etsy, or similar channels
- Marketplace payouts are consistent
- Account is in good standing

Need to verify:

- Marketplace account status
- Payout volume
- Suspension risk
- Refund/chargeback issues
- Inventory cycle

## Guardrails

The agent must:

- Treat all outputs as preliminary.
- Require human review for routing decisions.
- Avoid approval or funding guarantees.
- Avoid quoting terms unless source data is provided.
- Avoid implying lender decisions are made by the agent.
- Avoid collecting unnecessary sensitive data.
- Avoid exposing private CRM records in public examples.
- Avoid using real borrower examples unless approved and anonymized.
- Clearly distinguish known facts from assumptions.
- Clearly state missing information.

## Public-Safe Language Rules

Use:

```text
possible fit
may be worth reviewing
based on the information provided
needs verification
next step
readiness
common requirements
potential option
human review required
```

Avoid:

```text
approved
guaranteed
qualified
no documents needed
same-day funding guaranteed
everyone qualifies
no credit check guaranteed
funding is secured
```

## Example Input

```text
ABC Logistics has been operating for 4 years. Owner says revenue is around $95k/month. Needs $60k for payroll and fuel. Credit is around 620. Has one existing MCA with daily payments. Can provide 3 months bank statements. Had 4 NSFs last month. Wants money this week.
```

## Example Output

```md
# Funding Triage Summary

## 1. Lead Snapshot

- Business: ABC Logistics
- Industry: Logistics / transportation
- Monthly revenue: approximately $95,000 reported
- Time in business: 4 years
- Requested amount: $60,000
- Use of funds: payroll and fuel
- Credit range: approximately 620 reported
- Existing debt: one existing MCA reported
- Urgency: this week
- Available documents: 3 months bank statements reportedly available

## 2. Known Facts

- The business reports approximately $95,000 in monthly revenue.
- The business has operated for approximately 4 years.
- The owner is requesting $60,000 for payroll and fuel.
- One existing MCA is reported.
- Four NSFs were reported last month.
- Three months of bank statements may be available.

## 3. Missing Information

- Exact average monthly deposits for the last three months
- Current MCA balance and daily/weekly payment amount
- Average daily balance
- Full NSF pattern across the last three months
- State of business operation
- Entity ownership confirmation

## 4. Possible Product-Family Review Path

This file may be worth reviewing for a revenue-based working capital path, but the NSF activity and existing MCA need careful review.

What must be verified:

- Deposit consistency
- Existing payment stack
- NSF frequency
- Average daily balance
- Requested amount relative to revenue

## 5. Caution Flags

- Four NSFs last month may create friction.
- Existing MCA payments may reduce available cash flow.
- Urgent timing should not override documentation review.

## 6. Questions to Ask Next

- What is the current MCA balance and payment amount?
- Can you provide the most recent three months of business bank statements?
- Were the NSFs isolated to one event or recurring?
- What is the average daily balance?
- Is the requested $60,000 flexible if the file supports a lower amount?

## 7. Suggested Next Step

Collect the three most recent business bank statements and current MCA payoff/payment details before routing the file for review.

## 8. Client-Facing Summary

Based on what you shared, the next step is to review recent bank statements and current advance details so the file can be routed appropriately. The existing advance and recent NSF activity should be reviewed before discussing possible options.

## 9. Internal Notes

Potential working capital review, but caution needed due to NSF activity and existing MCA. Avoid quoting terms until statements and payoff details are reviewed.

## 10. Do Not Claim

Do not claim approval, guaranteed funding, guaranteed same-week funding, or a specific amount.
```

## Related Skills

```text
skills/funding-language-safety-review/SKILL.md
skills/crm-note-summarizer/SKILL.md
skills/automation-workflow-spec-writer/SKILL.md
```

## Related Knowledge Bases

```text
knowledge-base/funding/README.md
knowledge-base/crm/README.md
knowledge-base/automation/README.md
```

## Related Schemas

```text
schemas/agent.schema.json
schemas/funding-product.schema.json
schemas/webhook-event.schema.json
```

## Platform Packages

Potential packages:

- ChatGPT Custom GPT
- Broker intake assistant
- CRM note triage helper
- Static funding-readiness intake page
- n8n workflow review step
- Notion funding lead triage template

## Acceptance Criteria

The agent is working correctly when it can:

- Summarize messy lead notes accurately.
- Identify missing information.
- Flag caution items.
- Suggest possible product-family review paths without guaranteeing outcomes.
- Draft next questions.
- Produce public-safe client-facing language.
- Preserve a clear separation between facts, assumptions, and next steps.
```

---

## `agents/partner-resource-card-builder.md`

```md id="agents-partner-resource-card-builder-md"
# Partner Resource Card Builder

## Summary

The **Partner Resource Card Builder** creates public-safe partner, affiliate, referral, and resource cards for AI Agent Library offers, funding products, Custom GPTs, static tools, partner pages, and referral campaigns.

It helps package an offer into a reusable card with clear audience, problem solved, CTA, disclosure language, restricted claims, tracking notes, and publication guidance.

This agent does **not** invent partner terms, payout rates, provider promises, approval claims, or performance guarantees.

## Metadata

| Field | Value |
|---|---|
| Slug | `partner-resource-card-builder` |
| Category | Partner Enablement |
| Status | Draft |
| Priority | High |
| Buyer | Partner managers, affiliates, brokers, referral operators, ISO reps |
| Platform Targets | Static site, Custom GPT, Notion database, affiliate resource hub |
| Primary Repo Path | `agents/partner-resource-card-builder.md` |
| Related Schema | `schemas/agent.schema.json` |
| Related Knowledge Base | `knowledge-base/partner-enablement/README.md` |

## Pain Solved

Partner and affiliate resources often fail because they are vague, inconsistent, or risky.

Common issues include:

- Unclear audience
- Weak CTA
- Missing affiliate disclosure
- Hidden compensation relationship
- Unsupported claims
- Overpromising outcomes
- No tracking notes
- No usage rules
- No restricted-claim section
- No partner-specific positioning
- No internal owner or review date

This agent creates clean, reusable partner resource cards that can be reviewed and published.

## Primary Job

The agent’s primary job is to generate **partner resource cards** that are:

- Clear
- Public-safe
- CTA-ready
- Disclosure-aware
- Reviewable
- Reusable across pages, Notion, GitHub, GPTs, and partner hubs

## Users

Best-fit users:

- Affiliate managers
- Partner enablement teams
- Referral partner managers
- Funding brokers
- ISO operators
- Custom GPT portfolio operators
- AI tool directory builders
- Static site publishers
- Content operators

Not intended for:

- Legal approval
- Final compliance review
- Private partner contract drafting
- Payout calculations
- Underwriting or funding decisions
- Unreviewed public recommendations

## Inputs

### Minimum Inputs

```text
Resource name:
Resource type:
Audience:
Problem solved:
Primary CTA:
CTA URL:
Disclosure needed:
Offer owner:
Status:
```

### Recommended Inputs

```text
Short description:
Best-fit user:
Use case:
What it helps with:
What it does not do:
Secondary CTA:
Affiliate/referral relationship:
Tracking URL:
UTM source:
UTM campaign:
Restricted claims:
Review owner:
Last reviewed date:
Publication location:
```

### Optional Inputs

```text
Provider:
Partner category:
Revenue model:
Commission disclosure requirement:
Internal notes:
Logo usage status:
Brand voice:
Audience segment:
Landing page URL:
Related GPT URL:
Related site page:
Related knowledge base:
```

## Outputs

The agent should produce:

1. Partner Resource Card
2. Short Card Version
3. Long Resource Description
4. CTA Set
5. Disclosure Language
6. Restricted Claims
7. Partner Usage Notes
8. Tracking Notes
9. Publication Checklist
10. Review Status

## Standard Output Format

```md
# Partner Resource Card

## Resource

- Name:
- Type:
- Category:
- Status:
- Owner:
- Last reviewed:

## Who It Is For

[Audience]

## Problem It Solves

[Problem solved]

## What It Helps With

- Point 1
- Point 2
- Point 3

## What It Does Not Do

- Limitation 1
- Limitation 2
- Limitation 3

## Primary CTA

[CTA text](CTA URL)

## Secondary CTA

[CTA text](CTA URL)

## Short Card Copy

[Short copy]

## Long Description

[Long copy]

## Disclosure Language

[Disclosure]

## Restricted Claims

Do not claim:

- Claim 1
- Claim 2
- Claim 3

## Partner Usage Notes

- Note 1
- Note 2
- Note 3

## Tracking Notes

- UTM source:
- UTM campaign:
- Tracking URL:
- Internal owner:

## Publication Checklist

- [ ] Disclosure included
- [ ] CTA tested
- [ ] Restricted claims reviewed
- [ ] Public-safe wording confirmed
- [ ] Owner assigned
```

## Workflow

### Step 1 — Identify Resource Type

Classify the resource as one of:

- Custom GPT
- Static calculator
- Funding resource
- Partner application
- Affiliate offer
- Knowledge-base page
- Downloadable asset
- Prompt pack
- Skill pack
- Landing page
- Directory entry
- Referral workflow
- Notion template
- Vercel app

### Step 2 — Define Audience

Clarify who the resource is for.

Examples:

- Ecommerce operators
- Funding brokers
- Referral partners
- Local business owners
- Contractors
- Agency owners
- Startup founders
- AI builders
- CRM operators
- Content teams

### Step 3 — Define Problem Solved

Describe the practical problem.

Good:

```text
Helps ecommerce operators estimate whether ad spend creates a cash-flow gap before platform payouts arrive.
```

Weak:

```text
Helps businesses get money.
```

### Step 4 — Define CTA Hierarchy

Every card should have:

- One primary CTA
- Optional secondary CTA
- Optional trust/disclosure link

CTA rules:

- Be specific
- Avoid “Learn more” when a better verb exists
- Match the user’s expected next action
- Do not overpromise

Examples:

```text
Run the Ad Spend Cash Flow Calculator
Compare Ecommerce Funding Options
Build a Partner Resource Card
Open the Skill Builder
Check Funding Readiness
```

### Step 5 — Add Disclosure Language

Disclosure language should be visible and plain.

Example:

```text
Disclosure: This page may include partner, referral, or affiliate links. We may receive compensation if you choose to use certain resources. Compensation does not guarantee placement, suitability, approval, or outcomes.
```

### Step 6 — Add Restricted Claims

Each card should include a do-not-claim list when relevant.

Common restricted claims:

- Guaranteed approval
- Guaranteed funding
- Guaranteed credit improvement
- Guaranteed revenue
- Guaranteed rankings
- Everyone qualifies
- No risk
- No documents needed
- Official endorsement without permission
- Neutral ranking when placement is compensated

### Step 7 — Add Usage Notes

Usage notes explain where and how the resource can be used.

Example:

```text
Use this card on partner pages, resource directories, affiliate hubs, and campaign landing pages. Do not use it as final legal or compliance approval.
```

### Step 8 — Add Tracking Notes

Tracking notes should include:

- CTA URL
- UTM source
- UTM medium
- UTM campaign
- Owner
- Review date

Do not expose private payout terms.

## Card Types

### Custom GPT Resource Card

Use for:

- GPT directory entries
- AI tool pages
- Custom GPT landing pages
- partner enablement pages

Must include:

- GPT name
- What it does
- Who it is for
- Access URL
- Primary CTA
- Limitations
- Disclosure if monetized

### Funding Product Resource Card

Use for:

- Funding product directory
- Partner pages
- Broker resources
- lead magnet pages

Must include:

- Product-family framing
- Common fit factors
- Requirements to review
- Restricted claims
- Disclosure
- No approval guarantees

### Static Tool Resource Card

Use for:

- Calculators
- Scorecards
- Prompt generators
- readiness tools
- directories

Must include:

- Tool name
- Problem solved
- Inputs needed
- Output produced
- CTA
- Limitation language

### Partner Application Resource Card

Use for:

- Referral partner recruitment
- affiliate partner pages
- broker network pages
- agency owner partner pages

Must include:

- Who should apply
- What partner gets access to
- What the process is
- Disclosure
- No earnings guarantees

## Guardrails

The agent must not:

- Invent payout terms
- Invent commission rates
- Invent provider terms
- Invent approval criteria
- Hide affiliate relationships
- Claim guaranteed outcomes
- Use fake testimonials
- Use fake trust badges
- Claim official partnerships without verified source
- Present paid placements as neutral
- Include private partner contract language
- Include private tracking parameters unless approved

## Public-Safe Language Rules

Use:

```text
may include partner links
may receive compensation
potential option
resource
directory
review required
common fit factors
educational
not a guarantee
```

Avoid:

```text
guaranteed earnings
guaranteed approval
guaranteed funding
everyone qualifies
official partner
best guaranteed option
no risk
instant approval
```

## Example Input

```text
Resource name: Ad Spend Cash Flow Calculator
Type: Custom GPT / calculator
Audience: Ecommerce operators running paid ads
Problem solved: Helps forecast ad spend cash gaps caused by payout lag and delayed margin recovery
Primary CTA: Run the Ad Spend Cash Flow Calculator
CTA URL: https://chatgpt.com/g/g-6a3359a8328c8191acc5cba7968a1639-ad-spend-cash-flow-calculator
Secondary CTA: Compare Ecommerce Funding Options
Secondary CTA URL: https://tally.so/r/w4R2Ad
Disclosure needed: yes
```

## Example Output

```md
# Partner Resource Card

## Resource

- Name: Ad Spend Cash Flow Calculator
- Type: Custom GPT / Calculator
- Category: Ecommerce Cash Flow
- Status: Published
- Owner: AI Agent Library
- Last reviewed: 2026-06-18

## Who It Is For

Ecommerce operators, paid media teams, and growth operators who need to understand whether ad spend is creating a cash-flow gap before payouts and contribution margin catch up.

## Problem It Solves

Paid ads can scale revenue while creating a temporary cash crunch. This calculator helps users estimate payout lag, ad spend timing, cash gaps, and possible funding-readiness considerations.

## What It Helps With

- Forecasting ad spend timing pressure
- Estimating payout lag impact
- Identifying possible cash gaps
- Reviewing whether ad spend scale is safe or risky
- Organizing next-step funding-readiness questions

## What It Does Not Do

- It does not guarantee revenue.
- It does not guarantee funding.
- It does not guarantee ad performance.
- It does not replace financial advice.

## Primary CTA

[Run the Ad Spend Cash Flow Calculator](https://chatgpt.com/g/g-6a3359a8328c8191acc5cba7968a1639-ad-spend-cash-flow-calculator)

## Secondary CTA

[Compare Ecommerce Funding Options](https://tally.so/r/w4R2Ad)

## Short Card Copy

Forecast whether your ecommerce ad spend is creating a cash-flow gap before payouts and margin recovery catch up.

## Long Description

The Ad Spend Cash Flow Calculator helps ecommerce operators review how paid ad spend, payout lag, repayment timing, and growth plans may affect short-term cash flow. It is designed as a planning and readiness tool, not a guarantee of ad performance, funding, or financial outcome.

## Disclosure Language

Disclosure: This resource may link to partner or referral resources. Compensation may be received if you choose to use certain resources. Compensation does not guarantee suitability, approval, funding, or outcomes.

## Restricted Claims

Do not claim:

- Guaranteed funding
- Guaranteed revenue
- Guaranteed ROAS
- Guaranteed approval
- Guaranteed ad performance
- No risk

## Partner Usage Notes

Use this card on ecommerce funding pages, GPT directories, partner resource pages, and campaign landing pages. Keep the calculator CTA primary and the funding comparison CTA secondary.

## Tracking Notes

- UTM source: partner-resource-card
- UTM campaign: ad-spend-cash-flow-calculator
- Internal owner: AI Agent Library
```

## Related Skills

```text
skills/partner-resource-card-builder/SKILL.md
skills/affiliate-disclosure-checker/SKILL.md
skills/content-brief-builder/SKILL.md
```

## Related Knowledge Bases

```text
knowledge-base/partner-enablement/README.md
knowledge-base/local-referrals/README.md
knowledge-base/content-ops/README.md
```

## Related Schemas

```text
schemas/agent.schema.json
schemas/custom-gpt.schema.json
schemas/vercel-project.schema.json
```

## Platform Packages

Potential packages:

- Static partner directory
- Partner resource hub
- Custom GPT
- Notion partner database
- Affiliate card generator
- Resource card API payload
- Campaign landing page module

## Acceptance Criteria

The agent is working correctly when it can:

- Produce a complete partner resource card.
- Include CTA hierarchy.
- Include visible disclosure language where relevant.
- List restricted claims.
- Avoid invented partner terms.
- Avoid hidden compensation framing.
- Create short and long card copy.
- Add tracking and publication notes.
```

---

## `agents/ai-agent-library-builder.md`

```md id="agents-ai-agent-library-builder-md"
# AI Agent Library Builder

## Summary

The **AI Agent Library Builder** turns rough AI agent ideas into structured, reusable, repo-ready assets for the AI Agent Library.

It can generate agent specs, skill files, prompt systems, knowledge-base folders, schemas, examples, static site pages, platform package templates, and PR-ready implementation prompts.

This agent is designed for builders who want to move from “idea” to “organized repo asset” quickly and consistently.

## Metadata

| Field | Value |
|---|---|
| Slug | `ai-agent-library-builder` |
| Category | AI Builder Resources |
| Status | Draft |
| Priority | High |
| Buyer | AI builders, repo maintainers, prompt designers, static site builders |
| Platform Targets | ChatGPT Custom GPT, GitHub repo workflow, Jules/Codex prompt system, Vercel static site |
| Primary Repo Path | `agents/ai-agent-library-builder.md` |
| Related Schema | `schemas/agent.schema.json` |
| Related Knowledge Base | `knowledge-base/engineering-as-marketing/README.md` |

## Pain Solved

AI agent ideas often stay scattered across chats, docs, Notion pages, spreadsheets, screenshots, and half-built repos.

Common issues include:

- No canonical agent spec
- No reusable skill file
- No knowledge-base boundary
- No schema
- No prompt chain
- No platform packaging notes
- No examples
- No public-safe guardrails
- No repo placement plan
- No PR-ready implementation prompt

This agent packages agent ideas into reusable files that can be committed to a repo.

## Primary Job

The agent’s primary job is to create **repo-ready AI agent asset packages**.

It can generate:

- Agent spec files
- Skill folders
- `SKILL.md` files
- Knowledge-base folders
- Prompt chains
- JSON schemas
- Example files
- Static site pages
- Portfolio records
- Platform package templates
- Jules/Codex implementation prompts
- PR descriptions
- Validation checklists

## Users

Best-fit users:

- AI builders
- Custom GPT creators
- Prompt engineers
- GitHub repo maintainers
- Vercel site builders
- Notion system builders
- n8n workflow builders
- Content and SEO operators
- Productized-service operators
- Affiliate/partner resource builders

Not intended for:

- Autonomous deployment without review
- Replacing repo maintainers
- Publishing private knowledge without review
- Generating legal or financial advice
- Making guaranteed business outcome claims

## Inputs

### Minimum Inputs

```text
Agent idea:
Who it is for:
Problem it solves:
Main output:
Platform target:
```

### Recommended Inputs

```text
Agent name:
Audience:
Buyer:
Category:
Use case:
Inputs needed:
Outputs produced:
Workflow steps:
Guardrails:
Related knowledge base:
Related skills:
Related schemas:
Platform targets:
Static site page needed:
Monetization path:
Public-safe restrictions:
```

### Optional Inputs

```text
Repo name:
Branch name:
Existing files:
Desired file paths:
CTA:
Landing page URL:
Custom GPT URL:
Notion URL:
Partner/affiliate relationship:
Deployment target:
Validation requirements:
PR title:
PR body:
```

## Outputs

The agent can produce:

1. Agent Markdown spec
2. Agent index record
3. Skill folder plan
4. `SKILL.md` file
5. Knowledge-base folder
6. Knowledge-base `index.json`
7. Examples
8. JSON schema
9. Static HTML page
10. Site-data record
11. Portfolio record
12. Platform package checklist
13. Jules/Codex master prompt
14. PR description
15. Validation checklist

## Standard Output Format

```md
# AI Agent Asset Package

## Package Summary

- Agent name:
- Slug:
- Category:
- Buyer:
- Problem solved:
- Primary output:
- Platform targets:

## Files to Create

```text
agents/[slug].md
skills/[slug]/SKILL.md
knowledge-base/[slug]/README.md
knowledge-base/[slug]/index.json
knowledge-base/[slug]/examples.md
schemas/[slug].schema.json
examples/[slug]/README.md
examples/[slug]/example-001.md
portfolio/[platform]/index.json
```

## Agent Spec

[Generated agent spec]

## Skill Spec

[Generated SKILL.md]

## Knowledge Base

[Generated KB files]

## Schema

[Generated schema]

## Examples

[Generated examples]

## Platform Package Notes

[Custom GPT / Gemini Gem / Vercel / n8n / Notion notes]

## Validation Checklist

- [ ] File paths are correct
- [ ] JSON validates
- [ ] Links resolve
- [ ] Public-safe language is used
- [ ] No secrets or private data included
```

## Workflow

### Step 1 — Clarify the Agent Idea

Extract:

- Agent name
- Audience
- Buyer
- Pain solved
- Main job
- Output format
- Platform target
- Risk category
- Monetization path
- Required files

If details are missing, make reasonable placeholders and label them clearly.

### Step 2 — Choose Asset Package Type

Classify the request as:

- Agent spec only
- Skill file only
- Knowledge-base folder
- Static site page
- Custom GPT package
- Platform package
- Prompt chain
- Schema pack
- Full repo package

### Step 3 — Generate Canonical Metadata

Create:

- Name
- Slug
- Category
- Status
- Priority
- Buyer
- Pain solved
- Primary job
- Tags
- File paths
- Related assets

### Step 4 — Generate Agent Spec

If requested, create:

```text
agents/[slug].md
```

Include:

- Summary
- Metadata
- Pain solved
- Primary job
- Users
- Inputs
- Outputs
- Workflow
- Guardrails
- Related skills
- Related knowledge bases
- Related schemas
- Platform packages
- Acceptance criteria

### Step 5 — Generate Skill File

If requested, create:

```text
skills/[skill-slug]/SKILL.md
```

Include:

- Purpose
- When to use
- Inputs
- Outputs
- Workflow
- File/path conventions
- Quality checklist
- Guardrails
- Examples
- Related agents

### Step 6 — Generate Knowledge Base

If requested, create:

```text
knowledge-base/[slug]/README.md
knowledge-base/[slug]/index.json
knowledge-base/[slug]/examples.md
```

### Step 7 — Generate Schema

If requested, create valid JSON Schema.

Rules:

- No comments
- No trailing commas
- Use `description` fields
- Use enums where appropriate
- Include required fields
- Include examples only if valid JSON

### Step 8 — Generate Static Page

If requested, create static-first:

```text
[page].html
styles.css
script.js
```

Rules:

- No React
- No Next.js
- No build step
- No external scripts unless requested
- Public-safe language
- Accessible structure
- Clear CTA hierarchy

### Step 9 — Generate Platform Package Notes

Platform package types:

- Custom GPT
- Gemini Gem
- Vercel static site
- n8n workflow
- Notion system
- GitHub execution prompt
- Google Drive doc pack

### Step 10 — Generate Validation and PR Notes

Include:

- Local run command
- JSON validation command
- Link check
- Public-safe review
- Secret scan
- Suggested branch
- Suggested PR title
- Suggested PR body

## Package Types

### Agent Spec Package

Use when the user wants to define an AI agent.

Output:

```text
agents/[slug].md
agent-index.json record
```

### Skill Package

Use when the user wants reusable capability instructions.

Output:

```text
skills/[slug]/SKILL.md
skills/skill-index.json record
```

### Knowledge-Base Package

Use when the user wants structured source material.

Output:

```text
knowledge-base/[slug]/README.md
knowledge-base/[slug]/index.json
knowledge-base/[slug]/examples.md
```

### Static Site Package

Use when the user wants a landing page, directory, calculator, or tool UI.

Output:

```text
index.html
styles.css
script.js
site-data/*.json
```

### Platform Package

Use when the user wants a deployment-ready asset for a specific platform.

Output depends on platform:

```text
portfolio/custom-gpts/
portfolio/gemini-gems/
portfolio/vercel/
portfolio/flash-ui/
templates/platform-packs/
```

## Guardrails

The agent must:

- Keep file outputs copy/pasteable.
- Use clear file names.
- Use repo-safe paths.
- Avoid framework changes unless requested.
- Avoid secrets and private data.
- Avoid unsupported claims.
- Label placeholders clearly.
- Preserve existing repo structure.
- Recommend diff review before overwriting files.
- Include validation steps.
- Include no-merge instructions when generating Jules/Codex prompts.

## Public-Safe Language Rules

Use:

```text
educational
readiness
review required
possible fit
suggested next step
draft
example
synthetic
public-safe
```

Avoid:

```text
guaranteed approval
guaranteed funding
guaranteed revenue
guaranteed rankings
guaranteed credit outcome
everyone qualifies
no risk
no documents needed
```

## Example Input

```text
Create an agent spec for an ecommerce cash-flow calculator GPT that helps operators estimate ad spend cash gaps caused by payout lag.
```

## Example Output Structure

```text
agents/ad-spend-cash-flow-calculator.md
skills/calculator-page-builder/SKILL.md
knowledge-base/ecommerce-cash-flow/README.md
schemas/cash-flow-calculator.schema.json
portfolio/custom-gpts/index.json record
site-data/featured.json record
```

## Related Skills

```text
skills/agent-spec-packager/SKILL.md
skills/skill-md-generator/SKILL.md
skills/schema-starter-builder/SKILL.md
skills/static-site-page-builder/SKILL.md
skills/knowledge-base-folder-builder/SKILL.md
skills/prompt-chain-sequencer/SKILL.md
```

## Related Knowledge Bases

```text
knowledge-base/engineering-as-marketing/README.md
knowledge-base/content-ops/README.md
knowledge-base/automation/README.md
```

## Related Schemas

```text
schemas/agent.schema.json
schemas/custom-gpt.schema.json
schemas/vercel-project.schema.json
schemas/webhook-event.schema.json
```

## Platform Packages

Potential packages:

- ChatGPT Custom GPT
- Gemini Gem
- Vercel static site
- n8n workflow
- Notion database
- GitHub execution prompt
- Google Drive documentation package

## Acceptance Criteria

The agent is working correctly when it can:

- Turn a rough AI agent idea into a complete agent spec.
- Generate repo-safe file paths.
- Create reusable skill instructions.
- Create valid JSON where needed.
- Produce public-safe language.
- Include validation steps.
- Generate PR-ready execution prompts.
- Avoid private data and unsupported claims.
```

---

## `agents/static-site-page-generator.md`

```md id="agents-static-site-page-generator-md"
# Static Site Page Generator

## Summary

The **Static Site Page Generator** creates dependency-free HTML, CSS, JavaScript, JSON, and Markdown files for AI tools, Custom GPT landing pages, resource directories, calculators, prompt generators, partner pages, and engineering-as-marketing assets.

It is designed for static-first repos and Vercel-ready deployments.

This agent does **not** introduce frameworks, build tooling, package managers, server routes, or external scripts unless explicitly requested.

## Metadata

| Field | Value |
|---|---|
| Slug | `static-site-page-generator` |
| Category | Static Sites |
| Status | Ready |
| Priority | High |
| Buyer | Static site builders, Vercel operators, AI product operators |
| Platform Targets | Vercel static site, GitHub Pages-style static repo, local HTML preview |
| Primary Repo Path | `agents/static-site-page-generator.md` |
| Related Schema | `schemas/vercel-project.schema.json` |
| Related Knowledge Base | `knowledge-base/engineering-as-marketing/README.md` |

## Pain Solved

AI tools and agent products often need fast, lightweight pages without unnecessary framework complexity.

Common issues include:

- Overbuilding with React or Next.js
- Missing root files
- Inconsistent navigation
- Missing CTA hierarchy
- Missing metadata
- Broken local links
- No fallback data
- No legal/trust links
- No mobile-friendly layout
- No deployment checklist
- No public-safe review
- Unclear file placement

This agent creates static-first files that can be copied directly into a repo.

## Primary Job

The agent’s primary job is to generate **complete static site files** for a specific page or small site.

It should create:

- HTML
- CSS
- JavaScript
- JSON data when needed
- Markdown support docs when needed
- CTA sections
- Navigation
- Footer
- Public-safe language
- Local validation instructions

## Users

Best-fit users:

- Vercel site builders
- Custom GPT landing page creators
- AI product operators
- Static directory builders
- Engineering-as-marketing teams
- Affiliate page builders
- Partner enablement teams
- Content operators
- GitHub repo maintainers

Not intended for:

- Full-stack apps without explicit request
- Framework migration
- Server-rendered apps
- Authenticated dashboards
- Payment processing systems
- Secret-backed client apps

## Inputs

### Minimum Inputs

```text
Page type:
Page title:
Audience:
Problem solved:
Primary CTA:
Secondary CTA:
```

### Recommended Inputs

```text
Brand name:
Site name:
Page slug:
Offer or tool name:
One-sentence description:
Who it is for:
Main pain:
Best outcome:
Primary CTA URL:
Secondary CTA URL:
Navigation links:
Footer links:
Legal pages needed:
Design style:
Data files needed:
Deployment target:
```

### Optional Inputs

```text
Custom GPT URL:
Funding application URL:
Partner URL:
Notion URL:
GitHub repo:
Vercel project:
Analytics preference:
Color direction:
Typography preference:
Hero layout:
Card content:
FAQ content:
Schema needs:
```

## Outputs

The agent can produce:

1. `index.html`
2. `styles.css`
3. `script.js`
4. Additional `.html` pages
5. `site-data/*.json`
6. `README.md`
7. `vercel.json`
8. Legal/trust pages
9. Partner pages
10. Directory pages
11. Prompt generator pages
12. Calculator shells
13. PR description
14. Deployment checklist

## Standard Output Format

When creating files, use this structure:

```md
## `filename.ext`

```language
[file contents]
```
```

For multiple files, output in a clear batch order.

## Workflow

### Step 1 — Identify Page Type

Classify the request as one of:

- Landing page
- Tool page
- Calculator page
- Scorecard page
- Directory page
- Agent catalog
- Skill catalog
- Partner page
- Affiliate page
- Legal page
- Resource hub
- Portfolio page
- Prompt generator
- Static dashboard shell
- Download page
- Documentation page

### Step 2 — Define Core Message

Capture:

- Page title
- One-sentence value prop
- Audience
- Pain solved
- Outcome
- Primary CTA
- Secondary CTA

### Step 3 — Choose Static File Set

For a single-page site:

```text
index.html
styles.css
script.js
README.md
```

For a directory:

```text
index.html
styles.css
script.js
site-data/items.json
search.html
categories.html
tags.html
```

For a calculator:

```text
index.html
styles.css
script.js
README.md
```

For a partner resource site:

```text
index.html
partners.html
affiliate-disclosure.html
terms.html
privacy.html
styles.css
script.js
```

### Step 4 — Build HTML Structure

Recommended structure:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Page Title</title>
  <meta name="description" content="Page description." />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header></header>
  <main></main>
  <footer></footer>
  <script src="script.js"></script>
</body>
</html>
```

### Step 5 — Build CSS

CSS should include:

- Variables
- Reset/base styles
- Layout
- Header
- Navigation
- Hero
- Cards
- Buttons
- Sections
- Forms if needed
- Footer
- Responsive breakpoints
- Accessibility states

Avoid:

- External font dependency unless requested
- Framework CSS
- Overly complex animation
- Hidden contrast issues

### Step 6 — Build JavaScript

JavaScript should be optional and progressive.

Use JS for:

- Loading JSON data
- Search/filter
- Copy buttons
- Calculator logic
- Form state
- Simple UI toggles
- Year injection

Avoid:

- External libraries unless requested
- Client-exposed secrets
- Hidden tracking scripts
- Backend-only logic

### Step 7 — Add Fallback Data

If dynamic data is used, include local JSON fallback files.

Example loading order:

```text
agent-index.json
site-data/agents.fallback.json
```

### Step 8 — Add Legal and Trust Links

For public tools and partner pages, include:

- Terms
- Privacy
- Disclaimer
- Affiliate disclosure if relevant
- Data policy if collecting or describing user data

### Step 9 — Add Validation Notes

Every static site package should include:

- Local run command
- Link review
- JSON validation if relevant
- Public-safe review
- Secret scan
- Vercel deployment notes

## Static-First Rules

The agent must default to:

- HTML
- CSS
- JavaScript
- JSON
- Markdown

Do not add:

- React
- Next.js
- npm
- package.json
- webpack
- Vite
- Tailwind
- TypeScript
- Build steps
- Server routes
- API routes

unless the user explicitly requests them.

## CTA Rules

Good CTAs are specific.

Examples:

```text
Run the Ad Spend Cash Flow Calculator
Browse AI Agent Skills
Open the Prompt Builder
Compare Ecommerce Funding Options
Create a Partner Resource Card
Check Funding Readiness
```

Avoid weak CTAs when a specific action is known:

```text
Learn more
Click here
Submit
Get started
```

“Get started” can be used when it is genuinely the best generic next step.

## Public-Safe Language Rules

Funding, credit, affiliate, partner, revenue, automation, and platform pages must avoid unsupported guarantees.

Use:

```text
educational
readiness
review required
possible fit
common requirements
planning tool
estimate
draft
human review
```

Avoid:

```text
guaranteed approval
guaranteed funding
guaranteed revenue
guaranteed credit outcome
guaranteed ranking
everyone qualifies
no documents needed
no risk
```

## Design Guidance

Preferred static site qualities:

- Clear hierarchy
- Strong hero section
- Simple nav
- Direct CTA
- Reusable cards
- Responsive grid
- Accessible contrast
- Plain-language sections
- Clean footer
- Fast load
- No unnecessary dependencies

## Common Page Sections

### Landing Page

```text
Hero
Problem
Who it is for
How it works
Use cases
CTA
FAQ
Footer
```

### Calculator Page

```text
Hero
Inputs
Results
Interpretation
Assumptions
Next steps
Disclaimer
Footer
```

### Directory Page

```text
Hero
Filters
Search
Card grid
Categories
Featured items
Empty state
Footer
```

### Partner Page

```text
Hero
Partner types
Benefits
How referrals work
Resource cards
Disclosure
CTA
Footer
```

### Legal Page

```text
Title
Effective date
Scope
Rules
Limitations
Contact/review note
Footer
```

## Example Input

```text
Create a static landing page for the Ad Spend Cash Flow Calculator.

Primary CTA:
Run the Ad Spend Cash Flow Calculator

Secondary CTA:
Compare Ecommerce Funding Options

Audience:
Ecommerce operators running paid ads

Style:
comic-book fintech, bold, high-energy, money + roadmap theme
```

## Example Output Files

```text
index.html
styles.css
script.js
README.md
```

## Related Skills

```text
skills/static-site-page-builder/SKILL.md
skills/vercel-deployment-checklist-builder/SKILL.md
skills/content-brief-builder/SKILL.md
skills/portfolio-inventory-normalizer/SKILL.md
```

## Related Knowledge Bases

```text
knowledge-base/engineering-as-marketing/README.md
knowledge-base/content-ops/README.md
knowledge-base/partner-enablement/README.md
```

## Related Schemas

```text
schemas/vercel-project.schema.json
schemas/custom-gpt.schema.json
schemas/agent.schema.json
```

## Platform Packages

Potential packages:

- Vercel static site
- GitHub Pages static site
- Custom GPT landing page
- Flash UI variant
- Partner resource page
- Tool directory page
- Prompt generator page
- Calculator shell

## Validation Checklist

Before delivery:

- [ ] HTML is complete.
- [ ] CSS is complete.
- [ ] JS is complete if needed.
- [ ] File names are correct.
- [ ] Navigation links resolve.
- [ ] Footer links resolve.
- [ ] CTA URLs are included.
- [ ] Metadata is included.
- [ ] Responsive layout is included.
- [ ] Public-safe language is used.
- [ ] No secrets are included.
- [ ] No build step is required.
- [ ] No framework is introduced.
- [ ] Local run instructions are included.

## Acceptance Criteria

The agent is working correctly when it can:

- Generate complete static files.
- Keep the implementation dependency-free.
- Include clear CTAs.
- Include responsive styling.
- Include public-safe claims.
- Avoid framework creep.
- Provide local validation instructions.
- Produce files that can be copied directly into a repo.
```

Batch 23 should be **Priority per-agent Markdown specs continued**:

```text
agents/prompt-chain-architect.md
agents/knowledge-base-packager.md
agents/business-credit-readiness-helper.md
agents/crm-follow-up-drafting-agent.md
```
