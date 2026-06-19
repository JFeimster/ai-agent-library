# Custom GPT Platform Package Template

## Purpose

Use this template to package a Custom GPT as a reusable, documented platform asset inside the AI Agent Library.

A complete Custom GPT package should make the GPT understandable, maintainable, searchable, reusable, and portable into related assets such as agents, knowledge bases, landing pages, static directories, Notion inventory records, and launch pages.

This template is for packaging the operating system around a GPT, not just naming the shiny little bot and throwing it into the internet swamp.

## Recommended Folder Structure

```text
platforms/chatgpt-gpts/
  README.md
  my-custom-gpts-inventory.md
  my-custom-gpts-index.csv
  gpt-to-agent-conversion-map.md
  custom-gpt-instructions-template.md
  gpt-knowledge-file-checklist.md
  gpt-publishing-standards.md
  gpt-maintenance-checklist.md

portfolio/custom-gpts/
  README.md
  custom-gpt-inventory.md
  custom-gpt-index.csv
  funding-finance-gpts.md
  affiliate-partner-gpts.md
  web-vercel-site-gpts.md
  content-brand-seo-gpts.md
  ops-automation-crm-gpts.md
```

## Package Metadata

```yaml
name: ""
slug: ""
platform: "ChatGPT"
type: "Custom GPT"
status: "draft"
category: ""
audience: ""
problem_solved: ""
primary_cta: ""
access_url: ""
profile_image_url: ""
owner: ""
last_reviewed: ""
disclosure_required: false
related_agent: ""
related_skill: ""
related_knowledge_base: ""
```

## Required Fields

| Field | Description | Required |
|---|---|---:|
| `name` | Public GPT name | Yes |
| `slug` | Kebab-case slug | Yes |
| `platform` | Usually `ChatGPT` | Yes |
| `type` | Usually `Custom GPT` | Yes |
| `status` | `draft`, `published`, `needs-refresh`, etc. | Yes |
| `category` | Practical operating category | Yes |
| `audience` | Who the GPT is for | Yes |
| `problem_solved` | Specific pain it solves | Yes |
| `primary_cta` | Main action | Yes |
| `access_url` | Public or editor URL | Yes if available |
| `profile_image_url` | Image URL if available | No |
| `disclosure_required` | True if monetized/affiliate/funding-related | Yes |

## Recommended Categories

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

## Status Values

```text
idea
draft
ready
published
needs-refresh
deprecated
archived
```

## Custom GPT Inventory Record

```json
{
  "name": "Example GPT",
  "slug": "example-gpt",
  "platform": "ChatGPT",
  "type": "Custom GPT",
  "status": "published",
  "category": "Funding Ops",
  "audience": "Small business owners and funding operators",
  "problem_solved": "Helps organize funding-readiness information into a practical next-step checklist.",
  "description": "Public-safe one-sentence description.",
  "primary_cta": "Open GPT",
  "access_url": "https://chatgpt.com/g/example",
  "profile_image_url": "",
  "disclosure_required": true,
  "related_agent": "agents/example-agent.md",
  "related_skill": "skills/example-skill/SKILL.md",
  "related_knowledge_base": "knowledge-base/example/README.md",
  "last_reviewed": null,
  "notes": ""
}
```

## Custom GPT Markdown Card

```md
## Example GPT

- **Platform:** ChatGPT
- **Category:** Funding Ops
- **Status:** Published
- **Audience:** Small business owners and funding operators
- **Problem solved:** Helps organize funding-readiness information into a practical next-step checklist.
- **Description:** Public-safe one-sentence description.
- **Primary CTA:** Open GPT
- **Access URL:** https://chatgpt.com/g/example
- **Disclosure required:** Yes
- **Related agent:** `agents/example-agent.md`
- **Related skill:** `skills/example-skill/SKILL.md`
- **Related knowledge base:** `knowledge-base/example/README.md`
```

## Instruction Template

```md
# [GPT Name] Instructions

## Role

You are [role].

## Primary Job

Your job is to [specific job].

## Audience

You help:

- Audience 1
- Audience 2
- Audience 3

## Inputs You Should Ask For

Ask for only the information needed to complete the job.

Required inputs:

- Input 1
- Input 2
- Input 3

Optional inputs:

- Optional input 1
- Optional input 2

## Operating Rules

- Rule 1
- Rule 2
- Rule 3

## Output Format

Use this structure:

1. Summary
2. Analysis
3. Recommendation
4. Next steps
5. Caveats

## Safety / Claim Rules

Do not:

- Guarantee funding, approval, income, rankings, or outcomes.
- Provide legal, tax, credit repair, lending, or investment advice.
- Invent facts, URLs, providers, rates, terms, or testimonials.
- Expose private client data, secrets, API keys, or backend systems.

## Tone

Use a clear, practical, direct tone.

## CTA Rules

Use CTAs that accurately describe the next step.

Preferred CTAs:

- Open Tool
- Run Calculator
- Compare Options
- Review Readiness
- Start Checklist

Avoid:

- Get Guaranteed Funding
- Guaranteed Approval
- Fix Credit Fast
- Everyone Qualifies
```

## Knowledge File Checklist

```md
# GPT Knowledge File Checklist

## Core Files

- [ ] Positioning / purpose file
- [ ] Audience file
- [ ] Operating rules file
- [ ] Output format file
- [ ] Safety / claim rules file
- [ ] Examples file

## Domain Files

- [ ] Product/service overview
- [ ] Use-case map
- [ ] Intake questions
- [ ] Routing rules
- [ ] Public-safe language rules
- [ ] FAQ
- [ ] Disclosures / disclaimers

## Quality Rules

- [ ] No private client data
- [ ] No API keys or tokens
- [ ] No backend provider bypass paths
- [ ] No unsupported guarantees
- [ ] No stale or unverifiable claims
- [ ] Filenames are clear
- [ ] Files are small enough to maintain
```

## Publishing Standards

```md
# GPT Publishing Standards

## Public Profile

- [ ] Name is clear.
- [ ] Description is specific.
- [ ] Profile image is appropriate.
- [ ] Instructions match the public promise.
- [ ] Conversation starters are useful.
- [ ] Knowledge files are clean.
- [ ] Actions are tested if included.
- [ ] Links work.
- [ ] Disclosure is included if monetized.

## Description Rules

Good description:

> Helps ecommerce operators forecast ad spend cash-flow gaps caused by payout lag and scaling pressure.

Weak description:

> Makes you rich with AI.

## Public-Safe Claim Rules

Do not claim:

- Guaranteed funding
- Guaranteed approval
- Guaranteed revenue
- Guaranteed rankings
- Guaranteed results
- Legal/tax/financial advice
- Credit repair outcomes

Use:

- Helps organize
- Estimates
- Reviews
- Compares
- Drafts
- Provides educational guidance
- Suggests next steps
```

## Maintenance Checklist

```md
# GPT Maintenance Checklist

## Monthly Review

- [ ] Public URL still works.
- [ ] Description still matches behavior.
- [ ] Knowledge files are current.
- [ ] CTAs still route correctly.
- [ ] Disclosures are still accurate.
- [ ] No stale provider/product claims.
- [ ] No broken links.
- [ ] No outdated screenshots/images.

## Change Log

| Date | Change | Reason | Reviewer |
|---|---|---|---|
| YYYY-MM-DD | Change made | Reason | Reviewer |
```

## GPT-to-Agent Conversion Map

```md
# GPT-to-Agent Conversion Map

| GPT | Agent Candidate | Skill Candidate | Knowledge Base | Notes |
|---|---|---|---|---|
| Example GPT | `agents/example-agent.md` | `skills/example-skill/SKILL.md` | `knowledge-base/example/README.md` | Convert if repeated use cases emerge |
```

## Conversion Rules

A Custom GPT may deserve an agent spec when:

- It has repeatable workflows.
- It uses structured inputs/outputs.
- It supports automation or routing.
- It needs repo-native documentation.
- It maps to reusable skills.
- It needs public portfolio indexing.

Do not convert every GPT into an agent just because the spreadsheet looks lonely.

## Public-Safe Rules

Custom GPT package content must not:

- Include private client data.
- Include secrets, API keys, or tokens.
- Include backend provider bypass paths.
- Promise approval, funding, income, rankings, or outcomes.
- Invent URLs or profile images.
- Invent testimonials or usage stats.
- Present affiliate placement as neutral if compensation may influence placement.

## Disclosure Rules

Set:

```json
"disclosure_required": true
```

when the GPT involves:

- Affiliate links
- Referral links
- Funding applications
- Partner offers
- Paid placements
- Revenue-share relationships
- Product rankings
- Monetized recommendations

## Quality Checklist

Before committing a Custom GPT package:

- [ ] Name is preserved.
- [ ] Slug is unique.
- [ ] Category is assigned.
- [ ] Status is accurate.
- [ ] Description is public-safe.
- [ ] URL is preserved if provided.
- [ ] Missing fields are marked clearly.
- [ ] Profile image URL is preserved if intentionally provided.
- [ ] Disclosure flag is accurate.
- [ ] Related agent/skill/KB fields are added where known.
- [ ] No private data or secrets included.
- [ ] No unsupported guarantees included.
- [ ] CSV/JSON output validates if generated.

## Done Means

A Custom GPT platform package is complete when it includes:

- Inventory record
- Markdown card
- Clean category
- Status
- CTA
- Disclosure flag
- Related agent/skill/KB mapping where applicable
- Instructions template
- Knowledge checklist
- Publishing standards
- Maintenance checklist