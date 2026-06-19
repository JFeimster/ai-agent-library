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
