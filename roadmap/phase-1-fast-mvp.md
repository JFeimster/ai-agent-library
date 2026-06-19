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
