# Portfolio Inventory Normalizer

## Purpose

The **Portfolio Inventory Normalizer** skill converts scattered product, GPT, Vercel, site, template, agent, skill, prompt, and platform asset information into clean portfolio inventory records.

Use this skill when a repo, static site, Notion database, CSV, JSON file, or portfolio folder needs structured records with consistent fields, slugs, categories, URLs, statuses, CTAs, related agents, related skills, source paths, and review notes.

This skill helps turn “I have 900 tabs, 47 GPTs, 12 repos, and one screaming spreadsheet” into something that can actually ship. 🧹

## When To Use

Use this skill when the user asks for:

- Portfolio inventory cleanup
- Custom GPT inventory
- Vercel project inventory
- Static site portfolio records
- Gemini Gem inventory
- Flash UI inventory
- Agent directory records
- Skill catalog records
- Prompt pack inventory
- Affiliate/partner resource inventory
- Notion import records
- CSV to JSON normalization
- JSON to Markdown inventory
- Portfolio index files
- Public directory cards
- Review-status tracking

Use it for assets such as:

- Custom GPTs
- Gemini Gems
- Vercel apps
- Static sites
- GitHub repos
- Landing pages
- Prompt packs
- Knowledge bases
- AI agents
- Skills
- Schemas
- Affiliate offers
- Partner resources
- Notion tools

Do not use this skill for:

- Final valuation of assets
- Legal compliance approval
- Secret inventory storage
- Private customer data inventory
- Production credential management

## Inputs

### Minimum Inputs

```text
Asset list:
Asset type:
Desired output format:
```

### Recommended Inputs

```text
Asset name:
Source URL:
Public URL:
Repo URL:
Platform:
Category:
Status:
CTA:
Description:
Related agent:
Related skill:
Related knowledge base:
Last reviewed:
```

### Optional Inputs

```text
Profile image URL:
Thumbnail URL:
Tags:
Audience:
Problem solved:
Owner:
Priority:
Launch status:
Monetization path:
Affiliate relationship:
Disclosure required:
Source file:
Notes:
```

## Outputs

This skill can produce:

1. Normalized portfolio records
2. Markdown inventory table
3. JSON index file
4. CSV import file
5. Static site card records
6. Notion-ready rows
7. Missing field report
8. Duplicate detection notes
9. Category map
10. Review checklist

## Standard Portfolio Record Format

```json
{
  "name": "Asset Name",
  "slug": "asset-name",
  "type": "Custom GPT",
  "status": "published",
  "platform": "ChatGPT",
  "category": "Funding Ops",
  "audience": "Small business owners",
  "problem_solved": "Helps users organize funding readiness information.",
  "description": "Public-safe description.",
  "url": "https://example.com",
  "repo": "",
  "cta": {
    "text": "Open Tool",
    "url": "https://example.com"
  },
  "thumbnail_url": "",
  "tags": [
    "funding",
    "readiness"
  ],
  "related_agent": "agents/example-agent.md",
  "related_skill": "skills/example-skill/SKILL.md",
  "related_knowledge_base": "knowledge-base/example/README.md",
  "disclosure_required": false,
  "last_reviewed": null,
  "notes": ""
}
```

## Standard Markdown Inventory Format

```md
# Portfolio Inventory

| Name | Type | Platform | Category | Status | URL | CTA | Related Agent | Last Reviewed |
|---|---|---|---|---|---|---|---|---|
| Asset Name | Custom GPT | ChatGPT | Funding Ops | Published | URL | Open Tool | `agents/example.md` | Unknown |
```

## Standard Missing Field Report

```md
# Missing Field Report

## Missing URLs

- Asset 1
- Asset 2

## Missing Descriptions

- Asset 1
- Asset 2

## Missing Categories

- Asset 1
- Asset 2

## Duplicate Candidates

- Asset A / Asset B

## Needs Review

- Asset 1: reason
- Asset 2: reason
```

## File / Path Conventions

Recommended portfolio paths:

```text
portfolio/
  README.md
  custom-gpts/
    README.md
    index.json
    custom-gpt-inventory.md
  vercel/
    README.md
    index.json
    vercel-project-inventory.md
  gemini-gems/
    README.md
    index.json
  flash-ui/
    README.md
    index.json
```

Recommended source-data paths:

```text
source-data/
  my-gpts.csv
  my-gpts.json
  vercel-projects.csv
```

Recommended site-data paths:

```text
site-data/
  featured.json
  portfolio.json
```

Recommended schema paths:

```text
schemas/custom-gpt.schema.json
schemas/vercel-project.schema.json
schemas/portfolio-record.schema.json
```

## Workflow

### Step 1 — Identify Asset Type

Classify each asset as one of:

```text
Custom GPT
Gemini Gem
Vercel App
Static Site
GitHub Repo
Prompt Pack
Knowledge Base
Agent
Skill
Schema
Template
Affiliate Resource
Partner Resource
Notion Tool
Flash UI
Automation Workflow
```

### Step 2 — Normalize Name and Slug

Create a clean name and slug.

Slug rules:

```text
lowercase
kebab-case
no emoji
no punctuation except hyphen
unique within the inventory
```

Example:

```text
💳 BizCredit Builder GPT → bizcredit-builder-gpt
Ad Spend Cash Flow Calculator → ad-spend-cash-flow-calculator
```

### Step 3 — Normalize Status

Use consistent statuses:

```text
idea
draft
ready
published
needs-refresh
deprecated
archived
```

Map fuzzy statuses:

```text
live → published
launched → published
active → published
wip → draft
todo → idea
old → needs-refresh
```

### Step 4 — Normalize Platform

Use consistent platform names:

```text
ChatGPT
Gemini
Claude
Vercel
GitHub
Notion
n8n
Wix
Google Drive
Google Sheets
Flash UI
```

### Step 5 — Normalize Category

Recommended categories:

```text
Funding Ops
Business Credit
AI Builder Resources
Static Sites
Prompt Systems
Knowledge Bases
CRM
Automation
Content Ops
Partner Enablement
Affiliate Marketing
SEO
Portfolio
Platform Ops
Trust & Safety
Community
```

### Step 6 — Normalize CTA

Every public asset should have a CTA object:

```json
{
  "text": "Open Tool",
  "url": "https://example.com"
}
```

CTA examples:

```text
Open GPT
Run Calculator
Browse Directory
View Site
Read Guide
Download Template
Compare Options
Apply to Partner
```

Avoid unsafe CTAs:

```text
Get Guaranteed Funding
Get Approved Instantly
Guaranteed Earnings
Everyone Qualifies
```

### Step 7 — Normalize URLs

URL fields may include:

```text
url
repo
thumbnail_url
profile_image_url
cta.url
source_url
```

Rules:

- Preserve user-provided URLs.
- Do not invent missing URLs.
- Use `Unknown` or empty string only when appropriate for the target format.
- Do not include private admin/editor URLs in public inventory unless explicitly intended.
- Flag editor URLs for review.

### Step 8 — Add Relationships

Where possible, connect assets to:

```text
related_agent
related_skill
related_knowledge_base
related_schema
```

Example:

```json
{
  "related_agent": "agents/static-site-page-generator.md",
  "related_skill": "skills/static-site-page-builder/SKILL.md",
  "related_knowledge_base": "knowledge-base/engineering-as-marketing/README.md"
}
```

### Step 9 — Add Disclosure and Safety Flags

For affiliate, partner, funding, business-credit, and monetized assets, include:

```json
"disclosure_required": true
```

Also flag:

```text
funding claims need review
affiliate disclosure needed
private URL detected
editor URL detected
missing public page
description needs public-safe review
```

### Step 10 — Generate Output Format

Supported output formats:

```text
Markdown table
JSON index
CSV import
Static site card data
Notion rows
Missing field report
```

## Normalization Rules

### Names

Keep names human-readable.

Do not strip brand identity unless requested.

### Emojis

For slugs, remove emojis.

For display names, preserve emojis if intentionally part of asset name.

### Descriptions

Descriptions should be:

- Public-safe
- Specific
- Short enough for cards
- Free of unsupported guarantees
- Clear about what the asset does

### Tags

Tags should be lowercase kebab-case where practical:

```text
funding
business-credit
custom-gpt
vercel
seo
automation
partner-enablement
```

### Dates

Use ISO date format when known:

```text
2026-06-18
```

Use `null` or `Unknown` when unknown, depending on output format.

## Quality Checklist

Before finalizing normalized inventory:

- [ ] Every asset has a name.
- [ ] Every asset has a slug.
- [ ] Slugs are unique.
- [ ] Type is normalized.
- [ ] Platform is normalized.
- [ ] Category is assigned.
- [ ] Status is normalized.
- [ ] URL is preserved if provided.
- [ ] Missing URLs are not invented.
- [ ] CTA text is clear.
- [ ] CTA URL is present where possible.
- [ ] Descriptions are public-safe.
- [ ] Tags are useful.
- [ ] Related agents are linked where known.
- [ ] Related skills are linked where known.
- [ ] Disclosure flag is set where needed.
- [ ] Missing fields are reported.
- [ ] Duplicate candidates are flagged.
- [ ] JSON validates if JSON output is produced.
- [ ] CSV headers are stable if CSV output is produced.

## Guardrails

This skill must not:

- Invent missing URLs.
- Invent fake launch dates.
- Invent fake revenue.
- Invent fake usage stats.
- Invent fake testimonials.
- Invent fake partner relationships.
- Hide affiliate relationships.
- Include secrets.
- Include private customer data.
- Include API keys or tokens.
- Treat editor/admin URLs as public without review.
- Claim guaranteed funding, ranking, revenue, or approval.
- Overwrite canonical inventory without diff review.

## Public-Safe Language Rules

Use:

```text
published
draft
resource
planning tool
directory
portfolio
public-safe
review required
disclosure required
```

Avoid:

```text
guaranteed approval
guaranteed funding
guaranteed rankings
guaranteed revenue
best for everyone
official partner without verification
no risk
```

## Example Input

```json
[
  {
    "Access URL": "https://chatgpt.com/g/g-example-ad-spend-cash-flow-calculator",
    "Custom GPT Name": "Ad Spend Cash Flow Calculator",
    "Description": "Forecasts ecommerce ad spend cash flow, payout lag, cash gaps, and scale/fund decisions.",
    "Profile Image URL": "https://example.com/image.png"
  }
]
```

## Example Output

```json
[
  {
    "name": "Ad Spend Cash Flow Calculator",
    "slug": "ad-spend-cash-flow-calculator",
    "type": "Custom GPT",
    "status": "published",
    "platform": "ChatGPT",
    "category": "Funding Ops",
    "audience": "Ecommerce operators running paid ads",
    "problem_solved": "Helps forecast whether ad spend may create a cash-flow timing gap before payouts and margin recovery catch up.",
    "description": "Forecasts ecommerce ad spend cash flow, payout lag, cash gaps, and scale/fund decisions.",
    "url": "https://chatgpt.com/g/g-example-ad-spend-cash-flow-calculator",
    "repo": "",
    "cta": {
      "text": "Run the Ad Spend Cash Flow Calculator",
      "url": "https://chatgpt.com/g/g-example-ad-spend-cash-flow-calculator"
    },
    "thumbnail_url": "https://example.com/image.png",
    "tags": [
      "ecommerce",
      "cash-flow",
      "ad-spend",
      "funding"
    ],
    "related_agent": "agents/funding-pipeline-triage-agent.md",
    "related_skill": "skills/funding-language-safety-review/SKILL.md",
    "related_knowledge_base": "knowledge-base/funding/README.md",
    "disclosure_required": true,
    "last_reviewed": null,
    "notes": "Review public page language for funding and performance guarantees."
  }
]
```

## Example Missing Field Report

```md
# Missing Field Report

## Missing Public URLs

- None

## Missing Profile Images

- Offer Ecosystem Architect

## Editor URLs Detected

- Cloudflare Worker-in-a-box
- Habit Reactor Engineer

## Needs Disclosure Review

- Funding Pathfinder
- Get My Funding Offer
- Affiliate Sizzle
- Affiliate Disclosure Writer

## Needs Public-Safe Language Review

- Any asset mentioning funding, approval, fast funding, credit, earnings, rankings, or revenue.
```

## Related Agents

```text
agents/ai-agent-library-builder.md
agents/static-site-page-generator.md
agents/affiliate-disclosure-reviewer.md
agents/content-brief-generator.md
agents/vercel-deployment-control-agent.md
```

## Related Knowledge Bases

```text
portfolio/custom-gpts/README.md
portfolio/vercel/README.md
knowledge-base/partner-enablement/README.md
knowledge-base/content-ops/README.md
knowledge-base/engineering-as-marketing/README.md
```

## Related Schemas

```text
schemas/custom-gpt.schema.json
schemas/vercel-project.schema.json
schemas/agent.schema.json
schemas/portfolio-record.schema.json
```

## Done Means

This skill is complete when it can normalize a messy asset list into:

- Clean names
- Unique slugs
- Standard types
- Standard categories
- Standard statuses
- Preserved URLs
- Clear CTAs
- Public-safe descriptions
- Related asset links
- Disclosure flags
- Missing field report
- Valid JSON/CSV/Markdown output