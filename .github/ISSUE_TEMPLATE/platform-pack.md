---
name: Platform Pack
about: Create or improve a reusable platform implementation pack
title: "[Platform Pack]: "
labels: platform-pack
assignees: ""
---

## Objective

Create or improve a platform pack.

A platform pack should document how to package, build, publish, maintain, or operate assets for a specific platform such as ChatGPT, Claude, Gemini, Notion, GitHub, Vercel, n8n, Airtable, HubSpot, Google Workspace, or another tool in the AI Agent Library stack.

This is the repo’s “how we ship on this platform without summoning twelve tabs and a migraine” layer.

## Platform Pack Name

```text
[Platform pack name]
```

## Platform

Select one:

```text
ChatGPT
Claude
Gemini
Notion
GitHub
Vercel
n8n
Airtable
HubSpot
Google Drive
Google Sheets
Google Docs
Google Calendar
OpenAI Platform
Stripe
Supabase
Figma
Canva
Wix
Custom Platform
Other
```

## Platform Pack Slug

```text
[lowercase-kebab-case-slug]
```

## Proposed File Path

```text
templates/platform-packs/[platform-pack-slug].md
```

## Related Folder Path

Optional platform folder:

```text
platforms/[platform-slug]/
```

## Category

Select one:

```text
AI Assistants
Static Sites
Automation
Knowledge Bases
CRM
Content Ops
Data Ops
Prompt Systems
Deployment
Design
Commerce
Payments
Analytics
Trust & Safety
Community
Other
```

## Audience

Who uses this platform pack?

- [ ] AI builders
- [ ] Repo operators
- [ ] Codex/Jules agents
- [ ] Custom GPT builders
- [ ] Static-site builders
- [ ] Automation builders
- [ ] Content operators
- [ ] Partner operators
- [ ] Funding operators
- [ ] Internal team
- [ ] Other: [describe]

## Problem Solved

Describe the platform-specific mess this pack solves.

```text
[Problem]
```

## Primary Job

What should this platform pack help users or agents do?

```text
[Primary job]
```

## Assets This Platform Pack Should Support

- [ ] Custom GPT
- [ ] Agent spec
- [ ] Skill file
- [ ] Knowledge base
- [ ] Static site
- [ ] Prompt chain
- [ ] Notion template
- [ ] n8n workflow
- [ ] API action/schema
- [ ] Portfolio entry
- [ ] Deployment checklist
- [ ] Inventory/index file
- [ ] Other: [describe]

## Proposed Files

Create or update:

- [ ] `templates/platform-packs/[platform-pack-slug].md`
- [ ] `platforms/[platform-slug]/README.md`
- [ ] `platforms/[platform-slug]/inventory.md`
- [ ] `platforms/[platform-slug]/index.json`
- [ ] `platforms/[platform-slug]/maintenance-checklist.md`
- [ ] `platforms/[platform-slug]/publishing-standards.md`
- [ ] Other: `[path]`

## Required Sections

The platform pack should include:

- [ ] Purpose
- [ ] When to use
- [ ] When not to use
- [ ] Recommended folder structure
- [ ] Package metadata
- [ ] Inventory record shape
- [ ] Required files
- [ ] Setup workflow
- [ ] Publishing/deployment workflow
- [ ] Maintenance checklist
- [ ] Safety/privacy rules
- [ ] Public-safe rules
- [ ] Related agents
- [ ] Related skills
- [ ] Related knowledge bases
- [ ] Related schemas
- [ ] Done means

## Suggested Platform Pack Structure

```md
# [Platform Pack Name]

## Purpose

[What this platform pack is for.]

## When To Use

Use this when:

- Use case 1
- Use case 2
- Use case 3

## When Not To Use

Do not use this when:

- Out-of-scope case 1
- Out-of-scope case 2

## Recommended Folder Structure

```text
platforms/[platform-slug]/
templates/platform-packs/[platform-pack-slug].md
portfolio/[platform-slug]/
```

## Package Metadata

```yaml
name: ""
slug: ""
platform: ""
type: ""
status: "draft"
category: ""
audience: ""
problem_solved: ""
primary_job: ""
visibility: "public-safe"
last_reviewed: ""
```

## Workflow

1. Step 1
2. Step 2
3. Step 3

## Publishing Standards

- Standard 1
- Standard 2
- Standard 3

## Safety Rules

- Rule 1
- Rule 2
- Rule 3

## Related Assets

- Agents:
- Skills:
- Knowledge bases:
- Schemas:
- Templates:

## Done Means

This pack is complete when [definition].
```

## Metadata Requirements

Use practical metadata fields.

```yaml
name: ""
slug: ""
platform: ""
type: ""
status: "draft"
category: ""
audience: ""
problem_solved: ""
primary_job: ""
visibility: "public-safe"
owner: ""
last_reviewed: ""
related_agent: ""
related_skill: ""
related_knowledge_base: ""
related_schema: ""
```

## Inventory Record Shape

If an inventory/index file is created, use this pattern:

```json
{
  "name": "Example Platform Asset",
  "slug": "example-platform-asset",
  "platform": "Example Platform",
  "type": "platform-pack",
  "status": "draft",
  "category": "Automation",
  "audience": [
    "AI builders",
    "Repo operators"
  ],
  "problem_solved": "Explains how to package and maintain a platform-specific asset.",
  "primary_job": "Provide setup, publishing, maintenance, and safety rules.",
  "visibility": "public-safe",
  "repo_path": "templates/platform-packs/example-platform-pack.md",
  "related": {
    "agents": [],
    "skills": [],
    "knowledge_bases": [],
    "schemas": [],
    "templates": []
  },
  "last_reviewed": null,
  "notes": ""
}
```

## Platform Safety Rules

The platform pack must not include:

- [ ] API keys
- [ ] Access tokens
- [ ] OAuth client secrets
- [ ] Webhook secrets
- [ ] Private deployment URLs requiring protected access unless explicitly marked internal
- [ ] Private customer/client/borrower data
- [ ] Backend provider bypass paths
- [ ] Unsupported platform claims
- [ ] Fake usage stats or testimonials
- [ ] Guaranteed outcomes

## Public-Safe Rules

For public-facing platform packs:

Use:

- setup guide
- publishing checklist
- maintenance checklist
- public-safe examples
- synthetic sample payloads
- placeholder credentials
- review required
- visibility labels

Avoid:

- real credentials
- private payloads
- raw webhook URLs
- internal routing logic
- private partner economics
- unreviewed regulated claims

## Platform-Specific Notes

Include platform-specific instructions if relevant.

Examples:

### Vercel

- Deployment settings
- Build command
- Output directory
- Preview/production behavior
- Environment variable rules
- `vercel.json` patterns

### GitHub

- Branch strategy
- Issue templates
- PR templates
- Review process
- Secrets policy

### Notion

- Database properties
- Views
- Duplicate template behavior
- Public/private sharing rules

### n8n

- Trigger type
- Node inventory
- Credential handling
- Webhook safety
- Redacted exports

### ChatGPT / Custom GPTs

- Instructions
- Knowledge files
- Actions
- Profile metadata
- Publishing standards

## Acceptance Criteria

- [ ] Platform pack file exists.
- [ ] Platform is clearly identified.
- [ ] Purpose is clear.
- [ ] Audience is defined.
- [ ] Recommended folder structure is included.
- [ ] Metadata template is included.
- [ ] Workflow is documented.
- [ ] Publishing standards are included.
- [ ] Maintenance checklist is included.
- [ ] Safety/privacy rules are included.
- [ ] Related assets are linked where known.
- [ ] Examples are synthetic.
- [ ] No secrets or private data are included.
- [ ] No unsupported claims are included.
- [ ] JSON validates if index files are changed.

## Out of Scope

Do not include:

- Unrelated platform packs
- New agents unless explicitly required
- New skills unless explicitly required
- New knowledge bases unless explicitly required
- Static-site redesigns unless this pack is about static sites
- Deployment changes unless explicitly required
- Private credentials
- Real customer data

## Review Notes

Reviewer should check:

- Platform-specific accuracy
- Scope discipline
- Practical setup steps
- Safety boundaries
- Public/private visibility
- Crosslinks
- JSON validity
