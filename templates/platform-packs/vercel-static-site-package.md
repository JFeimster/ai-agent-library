# Vercel Static Site Platform Package Template

## Purpose

Use this template to package a dependency-free static site for Vercel deployment.

This package is designed for landing pages, AI tool pages, calculator pages, GPT launch pages, agent directories, prompt libraries, resource hubs, affiliate pages, broker/partner microsites, and documentation sites that can ship fast without a framework.

Default posture:

```text
Plain HTML/CSS/JS first.
No React.
No Next.js.
No build step.
No package manager unless there is a clear reason.
```

If the site can be a static folder, keep it a static folder. Don’t bring a forklift to move a sandwich.

## Recommended Folder Structure

### Root Static Site

```text
index.html
styles.css
script.js
README.md
DEPLOYMENT.md
vercel.json
assets/
  images/
  icons/
site-data/
  cards.json
  navigation.json
```

### `/site` Static Site

```text
site/
  index.html
  styles.css
  script.js
  assets/
    images/
    icons/
  data/
    cards.json
    navigation.json
README.md
DEPLOYMENT.md
vercel.json
```

Use one structure consistently.

## Package Metadata

```yaml
project_name: ""
slug: ""
repo: ""
platform: "Vercel"
site_type: "static-html"
status: "draft"
public_url: ""
preview_url: ""
production_domain: ""
root_directory: "."
build_command: ""
output_directory: "."
primary_cta: ""
secondary_cta: ""
disclosure_required: false
last_reviewed: ""
```

## Required Files

Minimum:

```text
index.html
styles.css
script.js
README.md
```

Recommended:

```text
DEPLOYMENT.md
vercel.json
assets/
site-data/ or data/
robots.txt
sitemap.xml
404.html
```

## Static Site File Roles

| File | Purpose |
|---|---|
| `index.html` | Page structure, content, metadata, CTAs |
| `styles.css` | Responsive design and visual system |
| `script.js` | Dependency-free interactivity |
| `README.md` | Repo overview and local preview instructions |
| `DEPLOYMENT.md` | Vercel deployment instructions |
| `vercel.json` | Clean URLs, headers, rewrites if needed |
| `assets/` | Images, icons, logos |
| `site-data/` | Public JSON used by static JS |
| `robots.txt` | Crawl policy |
| `sitemap.xml` | Search discovery support |

## `index.html` Template

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>[Project Name]</title>
  <meta name="description" content="[Public-safe description]">
  <meta property="og:title" content="[Project Name]">
  <meta property="og:description" content="[Public-safe description]">
  <meta property="og:type" content="website">
  <meta property="og:url" content="[Production URL]">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header">
    <a class="brand" href="index.html">[Project Name]</a>
    <nav class="site-nav" aria-label="Primary navigation">
      <a href="#how-it-works">How it works</a>
      <a href="#resources">Resources</a>
      <a href="#faq">FAQ</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <p class="eyebrow">[Audience / category]</p>
      <h1>[Primary headline]</h1>
      <p class="hero-copy">[Short value proposition]</p>
      <div class="cta-row">
        <a class="button primary" href="[Primary CTA URL]">[Primary CTA]</a>
        <a class="button secondary" href="[Secondary CTA URL]">[Secondary CTA]</a>
      </div>
      <p class="disclosure">[Disclosure if needed]</p>
    </section>

    <section id="how-it-works" class="section">
      <h2>How it works</h2>
      <div class="cards">
        <article class="card">
          <h3>Step 1</h3>
          <p>[Step explanation]</p>
        </article>
        <article class="card">
          <h3>Step 2</h3>
          <p>[Step explanation]</p>
        </article>
        <article class="card">
          <h3>Step 3</h3>
          <p>[Step explanation]</p>
        </article>
      </div>
    </section>

    <section id="resources" class="section">
      <h2>Resources</h2>
      <div id="resource-list" class="cards"></div>
    </section>

    <section id="faq" class="section">
      <h2>FAQ</h2>
      <details>
        <summary>[Question]</summary>
        <p>[Answer]</p>
      </details>
    </section>
  </main>

  <footer class="site-footer">
    <p>&copy; [Year] [Brand]. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

## `styles.css` Template

```css
:root {
  --bg: #0b0f14;
  --panel: #111822;
  --text: #f6f7fb;
  --muted: #b6c0cf;
  --line: rgba(255, 255, 255, 0.12);
  --accent: #f6c445;
  --accent-2: #62b4ff;
  --radius: 20px;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.6;
}

a {
  color: inherit;
}

.site-header,
.site-footer {
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.brand {
  font-weight: 800;
  text-decoration: none;
}

.site-nav {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.site-nav a {
  color: var(--muted);
  text-decoration: none;
}

main {
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px;
}

.hero {
  padding: 80px 0;
}

.eyebrow {
  color: var(--accent);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

h1 {
  max-width: 900px;
  margin: 0;
  font-size: clamp(2.5rem, 8vw, 5.5rem);
  line-height: 0.95;
}

.hero-copy {
  max-width: 720px;
  color: var(--muted);
  font-size: 1.2rem;
}

.cta-row {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 14px 20px;
  font-weight: 800;
  text-decoration: none;
  border: 1px solid var(--line);
}

.button.primary {
  background: var(--accent);
  color: #111;
}

.button.secondary {
  background: transparent;
  color: var(--text);
}

.disclosure {
  max-width: 760px;
  color: var(--muted);
  font-size: 0.92rem;
}

.section {
  padding: 56px 0;
  border-top: 1px solid var(--line);
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.card {
  padding: 22px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.card p {
  color: var(--muted);
}

details {
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--panel);
}

@media (max-width: 780px) {
  .site-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .hero {
    padding: 48px 0;
  }
}
```

## `script.js` Template

```js
const resourceList = document.querySelector("#resource-list");

async function loadResources() {
  if (!resourceList) return;

  try {
    const response = await fetch("site-data/cards.json");
    if (!response.ok) throw new Error("Resource data not found");

    const resources = await response.json();
    renderResources(resources);
  } catch (error) {
    resourceList.innerHTML = `
      <article class="card">
        <h3>Resources coming soon</h3>
        <p>The resource list could not be loaded yet.</p>
      </article>
    `;
  }
}

function renderResources(resources) {
  resourceList.innerHTML = resources.map((item) => `
    <article class="card">
      <h3>${escapeHtml(item.title || "Untitled")}</h3>
      <p>${escapeHtml(item.description || "")}</p>
      ${item.url ? `<a href="${escapeAttribute(item.url)}" target="_blank" rel="noopener noreferrer">Open →</a>` : ""}
    </article>
  `).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

loadResources();
```

## `site-data/cards.json` Template

```json
[
  {
    "title": "Example Resource",
    "description": "Short public-safe description.",
    "url": "https://example.com",
    "category": "Resource"
  }
]
```

## `README.md` Template

```md
# [Project Name]

[Short description.]

## What This Is

This is a dependency-free static site for:

- Use case 1
- Use case 2
- Use case 3

## Files

```txt
index.html
styles.css
script.js
site-data/
assets/
DEPLOYMENT.md
vercel.json
```

## Local Preview

Run a local static server:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Deployment

See:

```text
DEPLOYMENT.md
```

## Safety Notes

- Do not commit secrets.
- Do not include private client data.
- Do not include backend provider bypass paths.
- Add affiliate/referral disclosures when monetized links are used.
```

## `DEPLOYMENT.md` Template

```md
# Deployment Guide

## Vercel Setup

Recommended settings for a static site:

- Framework preset: Other / Static
- Build command: None
- Output directory: `.`
- Install command: None
- Root directory: repo root unless the site lives in `/site`

## If Using `/site`

Set:

- Root directory: `site`
- Build command: None
- Output directory: `.`

## Pre-Deploy Checklist

- [ ] `index.html` loads locally.
- [ ] `styles.css` loads.
- [ ] `script.js` loads.
- [ ] Public JSON files load.
- [ ] CTAs work.
- [ ] Mobile layout works.
- [ ] No secrets are committed.
- [ ] No private client data is committed.
- [ ] Affiliate/referral disclosure is present if needed.

## Production Checklist

- [ ] Preview deployment works.
- [ ] Production domain is correct.
- [ ] HTTPS works.
- [ ] Metadata is correct.
- [ ] Forms and CTAs are tested.
- [ ] Rollback path is known.

## Rollback

If the production deployment fails, revert the merge commit or redeploy the previous successful Vercel deployment.
```

## `vercel.json` Template

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## Static Site Inventory Record

```json
{
  "name": "Example Static Site",
  "slug": "example-static-site",
  "platform": "Vercel",
  "type": "Static Site",
  "status": "draft",
  "repo": "https://github.com/example/example-static-site",
  "public_url": "",
  "preview_url": "",
  "production_domain": "",
  "site_type": "static-html",
  "root_directory": ".",
  "build_command": "",
  "output_directory": ".",
  "primary_cta": "Open Site",
  "secondary_cta": "",
  "disclosure_required": false,
  "related_agent": "agents/static-site-page-generator.md",
  "related_skill": "skills/static-site-page-builder/SKILL.md",
  "related_knowledge_base": "knowledge-base/engineering-as-marketing/README.md",
  "last_reviewed": null,
  "notes": ""
}
```

## CTA Rules

Good CTA examples:

```text
Open Site
Run Calculator
Browse Directory
View Resources
Start Checklist
Compare Options
Open GPT
```

Avoid:

```text
Guaranteed Approval
Guaranteed Funding
Get Rich Now
Everyone Qualifies
No Risk
Bypass Review
```

## Disclosure Rules

Add disclosure when the static site includes:

- Affiliate links
- Referral links
- Funding application links
- Partner offer links
- Product rankings
- Monetized recommendations
- Sponsored placements

Example:

```text
Disclosure: Some links may be referral or affiliate links. We may earn compensation if you use them. Approval, pricing, terms, and outcomes are not guaranteed.
```

## Security Rules

Do not commit:

```text
.env
API keys
tokens
private client data
bank statements
tax returns
credit reports
private CRM exports
provider backend links
admin/editor URLs intended to remain private
```

If a static site needs private data or server-side calls, it is no longer a pure static package. Escalate to a separate architecture review.

## SEO Checklist

- [ ] Title tag exists.
- [ ] Meta description exists.
- [ ] Open Graph title exists.
- [ ] Open Graph description exists.
- [ ] Canonical URL added when production URL is known.
- [ ] Favicon exists if available.
- [ ] `robots.txt` is intentional.
- [ ] `sitemap.xml` added for multi-page public sites.

## Accessibility Checklist

- [ ] Page has one clear H1.
- [ ] Navigation has a label.
- [ ] Buttons/links have descriptive text.
- [ ] Images have alt text.
- [ ] Color contrast is readable.
- [ ] Details/FAQ sections are keyboard-friendly.
- [ ] Mobile layout works.

## Launch Checklist

- [ ] Repo files are committed.
- [ ] Local preview works.
- [ ] PR opened.
- [ ] PR reviewed.
- [ ] Preview deployment works.
- [ ] CTAs tested.
- [ ] Mobile tested.
- [ ] Metadata checked.
- [ ] Disclosure checked.
- [ ] Production merge approved.
- [ ] Rollback plan known.

## Done Means

A Vercel static site package is complete when it includes:

- Static HTML/CSS/JS files
- Clear data/assets structure
- README
- Deployment guide
- Optional `vercel.json`
- Public-safe CTAs
- Disclosure language if needed
- Security checklist
- Launch checklist
- Inventory record