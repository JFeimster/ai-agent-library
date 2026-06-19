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
