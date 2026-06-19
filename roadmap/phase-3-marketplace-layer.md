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
