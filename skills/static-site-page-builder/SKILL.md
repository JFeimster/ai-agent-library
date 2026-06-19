# Static Site Page Builder

## Purpose

The **Static Site Page Builder** skill helps create dependency-free static website files for AI tools, agent directories, GPT landing pages, resource hubs, calculators, scorecards, partner pages, and engineering-as-marketing assets.

Use this skill when the output should be committed directly to a GitHub repo and deployed without React, Next.js, npm, package managers, build steps, server routes, or framework dependencies.

The skill produces repo-ready HTML, CSS, JavaScript, JSON, and Markdown files with clean structure, clear CTAs, public-safe language, and validation instructions.

## When To Use

Use this skill when the user asks for:

- A static landing page
- A Custom GPT launch page
- A Vercel-ready static site
- A calculator page
- A scorecard page
- A prompt generator page
- An AI tool directory
- An agent catalog page
- A skill catalog page
- A partner or affiliate resource page
- A legal/trust page
- A portfolio page
- A knowledge-base hub
- A static site pack for GitHub
- Root files such as `index.html`, `styles.css`, `script.js`, and `README.md`

Do **not** use this skill when the user explicitly wants:

- A React app
- A Next.js app
- A full-stack app
- A backend API
- Authenticated dashboard logic
- Database-backed app logic
- Payment processing
- Server-rendered routes

Unless explicitly requested, keep the default output static-first.

## Inputs

### Minimum Inputs

```text
Site or page name:
Audience:
Problem solved:
Primary CTA:
CTA URL:
```

### Recommended Inputs

```text
Brand name:
Page type:
Offer/tool name:
One-sentence value proposition:
Who it is for:
Main pain:
Best outcome:
Primary CTA text:
Primary CTA URL:
Secondary CTA text:
Secondary CTA URL:
Design style:
Navigation links:
Footer links:
Legal/trust pages needed:
Deployment target:
```

### Optional Inputs

```text
Custom GPT URL:
Funding application URL:
Partner application URL:
Notion URL:
GitHub repo:
Vercel project:
Analytics preference:
Color palette:
Typography preference:
Hero direction:
Card content:
FAQ content:
Schema needs:
Data files needed:
Existing repo structure:
Files to avoid overwriting:
```

## Outputs

This skill can produce:

```text
index.html
styles.css
script.js
README.md
style.css
vercel.json
site-data/*.json
terms.html
privacy.html
disclaimer.html
affiliate-disclosure.html
data-policy.html
```

For larger sites, it can also produce:

```text
agent-catalog.html
skill-catalog.html
search.html
categories.html
tags.html
featured.html
new.html
platforms.html
portfolio.html
knowledge-bases.html
roadmap.html
changelog.html
contribute.html
get-started.html
partners.html
team.html
profile.html
```

## Core Principles

### 1. Static First

Default to:

```text
HTML
CSS
JavaScript
JSON
Markdown
```

Avoid unless explicitly requested:

```text
React
Next.js
npm
package.json
Vite
Webpack
Tailwind
TypeScript
Server routes
API routes
Database clients
Auth providers
```

### 2. Repo Ready

Every generated file should be safe to paste into a repo.

File output should include:

- Correct filename
- Complete file content
- No placeholders unless clearly marked
- Relative links that make sense
- No external dependencies unless requested
- No secrets
- No private user/client data

### 3. Public Safe

For funding, business-credit, affiliate, partner, automation, AI, and platform pages, avoid unsupported claims.

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
- Review required
- Planning tool
- Possible fit
- Common requirements
- Draft
- Human review
- Public-safe resource

### 4. Clear CTA Hierarchy

Every page should have a clear CTA structure.

Good CTA examples:

```text
Run the Ad Spend Cash Flow Calculator
Browse AI Agent Skills
Open the Prompt Builder
Compare Ecommerce Funding Options
Create a Partner Resource Card
Check Funding Readiness
```

Avoid weak CTAs when a better action is known:

```text
Learn more
Click here
Submit
Continue
```

“Get started” is acceptable only when it is genuinely the clearest next action.

## File / Path Conventions

### Standard Single-Page Static Site

```text
index.html
styles.css
script.js
README.md
```

### Compatibility Alias

If older pages may reference `style.css`, create:

```text
style.css
```

With:

```css
@import url("./styles.css");
```

### Multi-Page Static Site

```text
index.html
styles.css
script.js
agent-catalog.html
skill-catalog.html
search.html
categories.html
tags.html
featured.html
new.html
terms.html
privacy.html
disclaimer.html
affiliate-disclosure.html
data-policy.html
```

### Data Folder

```text
site-data/
  agents.fallback.json
  skills.fallback.json
  categories.json
  tags.json
  featured.json
  changelog.json
```

### Documentation

```text
README.md
SITE_PACK_README.md
REPO_PLACEMENT_CHECKLIST.md
PR_DESCRIPTION.md
JULES_HANDOFF_NOTE.md
```

## HTML Requirements

Every HTML file should include:

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

Recommended sections:

```text
Header
Hero
Problem
Who it is for
How it works
Feature cards
Use cases
CTA section
FAQ
Footer
```

## CSS Requirements

`styles.css` should include:

- CSS variables
- Reset/base styles
- Body styles
- Header/nav
- Hero
- Sections
- Cards
- Buttons
- Forms if needed
- Footer
- Responsive grid
- Focus states
- Mobile breakpoints

Avoid:

- Hidden low-contrast text
- Overly fragile absolute positioning
- External font dependency unless requested
- Large animation dependencies
- Framework CSS imports

## JavaScript Requirements

`script.js` should be progressive and optional where possible.

Use JavaScript for:

- Loading local JSON
- Search/filter
- Copy buttons
- Calculator logic
- Form state
- Simple UI toggles
- Current year injection

Avoid:

- Secrets in client-side JS
- External libraries unless requested
- Backend-only logic
- Hidden tracking scripts
- Hardcoded private endpoints

## Static Data Loading Pattern

For catalog pages, attempt canonical data first and fallback data second.

Example:

```js
async function fetchJSON(paths) {
  for (const path of paths) {
    try {
      const response = await fetch(path);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      // Try next path.
    }
  }
  return [];
}
```

Recommended loading order:

```text
agent-catalog.html:
  1. agent-index.json
  2. site-data/agents.fallback.json

skill-catalog.html:
  1. skills/skill-index.json
  2. site-data/skills.fallback.json
```

## Standard Workflow

### Step 1 — Define the Site Goal

Clarify:

- What the page/site is
- Who it serves
- What problem it solves
- What action the user should take
- What claims must be avoided

### Step 2 — Choose File Set

For a simple landing page:

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
search.html
categories.html
tags.html
site-data/items.json
```

For a GPT launch site:

```text
index.html
styles.css
script.js
metadata.json
README.md
```

For a partner page:

```text
index.html
partners.html
affiliate-disclosure.html
terms.html
privacy.html
styles.css
script.js
```

### Step 3 — Create Page Structure

Include:

- Hero
- Audience
- Problem
- How it works
- Outputs/results
- CTA hierarchy
- Trust/safety notes
- FAQ
- Footer

### Step 4 — Add Public-Safe Copy

Make page copy specific, but avoid guarantees.

Good:

```text
Forecast whether ad spend may create a short-term cash gap before payouts catch up.
```

Bad:

```text
Guarantee your ecommerce store gets funded today.
```

### Step 5 — Add Styling

Use a clean visual system with:

- Reusable cards
- Clear spacing
- CTA buttons
- Responsive grids
- Accessible contrast
- Simple hover/focus states

### Step 6 — Add JavaScript

Only add JS if it improves the page.

Examples:

- Filtering a catalog
- Running calculator logic
- Loading JSON data
- Copying prompt output

### Step 7 — Add Validation Notes

Include:

- Local server command
- JSON validation if needed
- Link review
- public-safe review
- secret scan
- deployment notes

## Page-Type Patterns

### Landing Page

Sections:

```text
Hero
Audience
Problem
How it works
Benefits
CTA
FAQ
Footer
```

### Calculator Page

Sections:

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

Sections:

```text
Hero
Search
Filters
Featured items
Card grid
Categories
Empty state
Footer
```

### Partner Page

Sections:

```text
Hero
Partner types
What partners get
How referrals work
Resource cards
Disclosure
CTA
Footer
```

### Legal Page

Sections:

```text
Title
Effective date
Scope
Rules
Limitations
Review note
Footer
```

## Quality Checklist

Before finalizing static site files:

- [ ] HTML is complete.
- [ ] CSS is complete.
- [ ] JS is complete if needed.
- [ ] File names are correct.
- [ ] `index.html` links to `styles.css`.
- [ ] `script.js` link is correct.
- [ ] Header links resolve.
- [ ] Footer links resolve.
- [ ] CTA URLs are included.
- [ ] Metadata is included.
- [ ] Responsive layout is included.
- [ ] Focus states are included.
- [ ] Public-safe language is used.
- [ ] No secrets are included.
- [ ] No private data is included.
- [ ] No build step is required.
- [ ] No framework is introduced.
- [ ] Local run instructions are included.
- [ ] `style.css` alias is created if older files may reference it.

## Validation Commands

### Local Static Server

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

### JSON Validation

```bash
python -m json.tool site-data/agents.fallback.json > /dev/null
python -m json.tool site-data/skills.fallback.json > /dev/null
```

### Link Reference Scan

```bash
grep -R "href=\".*\.html\|src=\".*\.js\|href=\".*\.css" -n *.html
```

### Public-Safe Claim Scan

```bash
grep -R "guaranteed approval\|guaranteed funding\|everyone qualifies\|no documents needed\|guaranteed revenue\|guaranteed rankings" -n .
```

### Secret Scan

```bash
grep -R "api_key\|access_token\|webhook_secret\|client_secret\|password\|private_key" -n .
```

## Guardrails

This skill must not:

- Add frameworks unless requested.
- Add npm/package files unless requested.
- Add build tooling unless requested.
- Add external scripts without review.
- Add secrets.
- Add private client/customer data.
- Add fake testimonials.
- Add fake trust badges.
- Make funding, credit, revenue, ranking, or approval guarantees.
- Present affiliate links without disclosure.
- Remove existing repo files without diff review.

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

## Example Output File Set

```text
index.html
styles.css
script.js
README.md
```

## Example README Snippet

```md
# Ad Spend Cash Flow Calculator Static Site

This is a static-first landing page for the Ad Spend Cash Flow Calculator.

## Files

- `index.html`
- `styles.css`
- `script.js`

## Run Locally

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

## Notes

This site uses static HTML, CSS, and JavaScript only. It does not require React, Next.js, npm, or a build step.
```

## Related Agents

```text
agents/static-site-page-generator.md
agents/vercel-deployment-control-agent.md
agents/ai-agent-library-builder.md
agents/content-brief-generator.md
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

## Done Means

This skill is complete when it can produce static site files that:

- Load locally
- Require no build step
- Use correct relative paths
- Include clear CTAs
- Avoid unsupported claims
- Avoid private data
- Can be committed directly to a repo
