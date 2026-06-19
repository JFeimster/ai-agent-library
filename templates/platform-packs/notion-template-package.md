# Notion Template Platform Package Template

## Purpose

Use this template to package a Notion template as a reusable asset inside the AI Agent Library.

A Notion template package should make the template easy to understand, duplicate, customize, sell, bundle, document, and connect to agents, Custom GPTs, workflows, landing pages, lead magnets, partner kits, or internal operating systems.

## Recommended Folder Structure

```text
templates/notion/
  README.md
  notion-template-inventory.md
  notion-template-index.csv
  notion-template-package-template.md
  duplicate-and-publish-checklist.md
  public-listing-template.md
  template-maintenance-checklist.md

products/notion-templates/
  [template-slug]/
    README.md
    template-summary.md
    database-map.md
    property-map.md
    view-map.md
    setup-guide.md
    customization-guide.md
    public-listing-copy.md
    launch-checklist.md
    safety-notes.md
    changelog.md
```

## Package Metadata

```yaml
name: ""
slug: ""
platform: "Notion"
type: "template"
status: "draft"
category: ""
audience: ""
problem_solved: ""
primary_job: ""
template_url: ""
duplicate_url: ""
sales_url: ""
lead_magnet_url: ""
visibility: "public-safe"
pricing_model: ""
disclosure_required: false
related_agent: ""
related_skill: ""
related_knowledge_base: ""
related_workflow: ""
owner: ""
last_reviewed: ""
```

## Recommended Categories

```text
Funding Ops
Business Credit
Startup Planning
Affiliate Marketing
Partner Enablement
CRM
Automation
Content Ops
SEO
AI Agent Ops
Community
Project Management
Finance Ops
Lead Magnet
Paid Product
Internal OS
```

## Pricing Models

```text
free
lead-magnet
paid-template
bundle
membership-included
internal-only
client-deliverable
unknown
```

## Notion Template Inventory Record

```json
{
  "name": "Example Funding Readiness Dashboard",
  "slug": "example-funding-readiness-dashboard",
  "platform": "Notion",
  "type": "template",
  "status": "draft",
  "category": "Funding Ops",
  "audience": ["Small business owners", "Funding brokers", "Affiliate partners"],
  "problem_solved": "Helps users organize basic funding readiness information before speaking with an advisor.",
  "primary_job": "Track documents, business profile details, funding goals, and follow-up tasks.",
  "template_url": "",
  "duplicate_url": "",
  "sales_url": "",
  "lead_magnet_url": "",
  "visibility": "public-safe",
  "pricing_model": "lead-magnet",
  "disclosure_required": true,
  "related_agent": "agents/funding-readiness-assistant.md",
  "related_skill": "skills/funding-readiness/SKILL.md",
  "related_knowledge_base": "knowledge-base/funding/README.md",
  "related_workflow": "automations/n8n/funding-readiness-follow-up/README.md",
  "last_reviewed": null,
  "notes": ""
}
```

## Template README Template

```md
# [Template Name]

## Purpose

[Explain what the template helps the user do.]

## Audience

This template is for:

- Audience 1
- Audience 2
- Audience 3

## Problem It Solves

[Specific operational pain.]

## Primary Job

This template helps users:

1. [Job 1]
2. [Job 2]
3. [Job 3]

## Template Status

draft / ready / published / needs-refresh / deprecated

## Visibility

public-safe / internal-only / mixed / private / needs-review

## Pricing Model

free / lead-magnet / paid-template / bundle / membership-included / internal-only / client-deliverable / unknown

## Links

| Link Type | URL |
|---|---|
| Template URL | Unknown |
| Duplicate URL | Unknown |
| Sales URL | Unknown |
| Lead Magnet URL | Unknown |

## Included Databases

- Database 1
- Database 2
- Database 3

## Included Views

- View 1
- View 2
- View 3

## Related Assets

- Related agent: `agents/example.md`
- Related skill: `skills/example/SKILL.md`
- Related knowledge base: `knowledge-base/example/README.md`
- Related workflow: `automations/n8n/example/README.md`
```

## Template Summary Template

```md
# Template Summary

## One-Sentence Description

[One sentence.]

## What It Helps Users Do

- Outcome 1
- Outcome 2
- Outcome 3

## Best-Fit User

[Describe best-fit user.]

## Not a Fit For

- User type 1
- Use case 2
- Use case 3

## Core Workflow

Capture inputs → organize records → track progress → review next steps → export/share summary

## Key Outcome

[Best practical result.]

## CTA

[Primary CTA]
```

## Database Map Template

```md
# Database Map

| Database | Purpose | Public-Safe | Notes |
|---|---|---:|---|
| Tasks | Tracks user action items | Yes | Basic task tracker |
| Resources | Stores useful links/files | Mixed | Review links before publishing |
| Contacts | Tracks people/orgs | No | Internal/private by default |
| Funding Readiness | Tracks checklist items | Yes | Educational only |
```

## Property Map Template

```md
# Property Map

| Property | Type | Purpose | Required |
|---|---|---|---:|
| Name | Title | Task title | Yes |
| Status | Select | Progress state | Yes |
| Priority | Select | Relative priority | No |
| Due Date | Date | Follow-up timing | No |
| Owner | Person/Text | Responsible person | No |
| Notes | Text | Context | No |
```

## Setup Guide Template

```md
# Setup Guide

1. Duplicate the template.
2. Rename the workspace copy.
3. Review included databases.
4. Customize statuses.
5. Add first records.
6. Review safety notes.
7. Connect related tools if needed.
```

## Public Listing Copy Template

```md
# Public Listing Copy

## Product Name

[Template Name]

## Short Description

[One sentence.]

## Long Description

[Explain who it is for, what it helps organize, and why it matters.]

## Best For

- User type 1
- User type 2
- User type 3

## What Is Included

- Dashboard
- Databases
- Checklists
- Example records
- Setup guide
- Customization guide

## CTA

Duplicate the Template
```

## Launch Checklist

- [ ] Main dashboard complete.
- [ ] Databases complete.
- [ ] Properties documented.
- [ ] Views documented.
- [ ] Example records are synthetic.
- [ ] Setup guide included.
- [ ] Customization guide included.
- [ ] Safety notes included.
- [ ] Product name clear.
- [ ] Description specific.
- [ ] Screenshots created.
- [ ] CTA added.
- [ ] Disclosure added if monetized or affiliate-related.
- [ ] Duplicate link works.
- [ ] Public sharing settings checked.
- [ ] No private data included.

## Duplicate and Publish Checklist

- [ ] Confirm the template is duplicated from the clean source version.
- [ ] Remove private records.
- [ ] Remove internal comments.
- [ ] Remove hidden private pages.
- [ ] Confirm sharing permissions.
- [ ] Confirm duplicate toggle is enabled if intended.
- [ ] Confirm public listing copy is accurate.
- [ ] Confirm disclaimer is included.
- [ ] Confirm affiliate disclosure is included if needed.

## Quality Checklist

- [ ] Purpose is clear.
- [ ] Audience is defined.
- [ ] Template links are recorded.
- [ ] Pricing model is labeled.
- [ ] Visibility is labeled.
- [ ] Database map exists.
- [ ] Property map exists.
- [ ] View map exists.
- [ ] Setup guide exists.
- [ ] Customization guide exists.
- [ ] Public listing copy exists if public-facing.
- [ ] Launch checklist exists.
- [ ] Safety notes exist.
- [ ] Example data is synthetic.
- [ ] No private data is included.
- [ ] No unsupported claims are included.
- [ ] Disclosure is included if needed.

## Done Means

A Notion template package is complete when it includes inventory record, README, template summary, database map, property map, view map, setup guide, customization guide, public listing copy, launch checklist, safety notes, and changelog.
