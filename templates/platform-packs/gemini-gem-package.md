# Gemini Gem Platform Package Template

## Purpose

Use this template to package a Gemini Gem as a reusable AI assistant asset inside the AI Agent Library.

A Gemini Gem package should define the Gem’s purpose, audience, instructions, source files, public-safe rules, related agents, related skills, and conversion path into static docs, GitHub repo assets, or cross-platform AI assistant packages.

This template helps keep Gems from becoming mysterious little prompt terrariums that only made sense at 2:13 AM.

## Recommended Folder Structure

```text
platforms/gemini-gems/
  README.md
  gemini-gem-inventory.md
  gemini-gem-index.csv
  gem-to-agent-conversion-map.md
  gem-instructions-template.md
  gem-source-file-checklist.md
  gem-publishing-standards.md
  gem-maintenance-checklist.md

portfolio/gemini-gems/
  README.md
  index.json
  gemini-gem-inventory.md
```

## Package Metadata

```yaml
name: ""
slug: ""
platform: "Gemini"
type: "Gemini Gem"
status: "draft"
category: ""
audience: ""
problem_solved: ""
primary_job: ""
access_url: ""
source_files: []
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
| `name` | Public Gem name | Yes |
| `slug` | Kebab-case slug | Yes |
| `platform` | `Gemini` | Yes |
| `type` | `Gemini Gem` | Yes |
| `status` | Draft/published/review status | Yes |
| `category` | Practical operating category | Yes |
| `audience` | Who the Gem is for | Yes |
| `problem_solved` | Specific pain it solves | Yes |
| `primary_job` | What the Gem does | Yes |
| `access_url` | URL if available | No |
| `source_files` | Source docs/assets if any | No |
| `disclosure_required` | True if monetized or affiliate-related | Yes |

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

## Gemini Gem Inventory Record

```json
{
  "name": "Example Gemini Gem",
  "slug": "example-gemini-gem",
  "platform": "Gemini",
  "type": "Gemini Gem",
  "status": "draft",
  "category": "AI Builder Resources",
  "audience": "AI builders and repo operators",
  "problem_solved": "Helps convert rough AI tool ideas into structured launch assets.",
  "primary_job": "Generate structured project briefs, prompts, and launch checklists.",
  "description": "Public-safe description.",
  "access_url": "",
  "source_files": [],
  "disclosure_required": false,
  "related_agent": "agents/example-agent.md",
  "related_skill": "skills/example-skill/SKILL.md",
  "related_knowledge_base": "knowledge-base/example/README.md",
  "last_reviewed": null,
  "notes": ""
}
```

## Gemini Gem Markdown Card

```md
## Example Gemini Gem

- **Platform:** Gemini
- **Type:** Gemini Gem
- **Category:** AI Builder Resources
- **Status:** Draft
- **Audience:** AI builders and repo operators
- **Problem solved:** Helps convert rough AI tool ideas into structured launch assets.
- **Primary job:** Generate structured project briefs, prompts, and launch checklists.
- **Access URL:** Unknown
- **Disclosure required:** No
- **Related agent:** `agents/example-agent.md`
- **Related skill:** `skills/example-skill/SKILL.md`
- **Related knowledge base:** `knowledge-base/example/README.md`
```

## Gem Instructions Template

```md
# [Gem Name] Instructions

## Role

You are [role].

## Primary Job

Your job is to [specific job].

## Audience

You help:

- Audience 1
- Audience 2
- Audience 3

## Inputs To Ask For

Required:

- Input 1
- Input 2
- Input 3

Optional:

- Optional input 1
- Optional input 2

## Workflow

1. Understand the user’s goal.
2. Identify missing required inputs.
3. Produce structured output.
4. Add constraints and caveats.
5. Provide next action.

## Guardrails

Do not invent facts, URLs, files, sources, or relationships. Do not guarantee business outcomes. Do not expose private data. Do not provide legal, tax, lending, credit repair, or investment advice as final guidance. Do not skip human review for high-stakes use cases.
```

## Source File Checklist

- [ ] Purpose file
- [ ] Audience file
- [ ] Operating rules
- [ ] Output format
- [ ] Examples
- [ ] Safety rules
- [ ] FAQ
- [ ] Glossary if useful
- [ ] No private customer data
- [ ] No secrets
- [ ] No unsupported claims
- [ ] No stale facts
- [ ] No fake testimonials
- [ ] No backend bypass paths

## Gem Publishing Standards

- [ ] Name is clear.
- [ ] Description is specific.
- [ ] Category is accurate.
- [ ] Instructions match the public promise.
- [ ] Source files are clean.
- [ ] Public-safe limitations are included.
- [ ] Disclosure is included if monetized.

## Gem-to-Agent Conversion Map

```md
# Gem-to-Agent Conversion Map

| Gemini Gem | Agent Candidate | Skill Candidate | Knowledge Base | Notes |
|---|---|---|---|---|
| Example Gemini Gem | `agents/example-agent.md` | `skills/example-skill/SKILL.md` | `knowledge-base/example/README.md` | Convert if workflow becomes repeatable |
```

## Conversion Rules

A Gemini Gem may deserve an agent spec when it has a repeatable workflow, produces structured outputs, needs repo-native documentation, maps to reusable skills, has a public portfolio use case, or should be mirrored in ChatGPT, Claude, Notion, or Vercel.

## Public-Safe Rules

Gem package content must not include private customer data, secrets or tokens, backend provider bypass paths, approval/funding/income/ranking promises, invented URLs or usage stats, or hidden affiliate relationships.

## Disclosure Rules

Set `disclosure_required` to true when the Gem involves affiliate links, referral links, funding applications, partner offers, sponsored placements, paid recommendations, or monetized resource directories.

## Maintenance Checklist

- [ ] Gem still exists.
- [ ] Public description still matches behavior.
- [ ] Source files are current.
- [ ] CTAs still work.
- [ ] Disclosure is accurate.
- [ ] No stale provider/product claims.
- [ ] No broken links.

## Done Means

A Gemini Gem package is complete when it includes inventory record, Markdown card, instructions template, source-file checklist, publishing standards, maintenance checklist, conversion map, disclosure flag, and related agent/skill/KB mapping where applicable.
