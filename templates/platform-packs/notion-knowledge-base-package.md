# Notion Knowledge Base Platform Package Template

## Purpose

Use this template to package a Notion workspace, database, page, or resource hub as a reusable knowledge-base asset for AI agents, Custom GPTs, static sites, prompt systems, content operations, partner enablement, and internal workflows.

This template is for turning Notion chaos into a structured source layer without letting fifty half-finished pages cosplay as “the system.”

A Notion knowledge-base package should define:

- Source page/database
- Purpose
- Audience
- Properties
- Views
- Source boundaries
- Public/private status
- Export rules
- Sync rules
- AI usage rules
- Review cadence

## Recommended Notion Structure

```text
Notion Workspace
  AI Agent Library HQ
    Agent Inventory
    Skill Catalog
    Custom GPT Inventory
    Platform Packs
    Knowledge Bases
    Prompt Chains
    Content Briefs
    Partner Resources
    Funding Product Matrix
    Roadmap
    Changelog
```

## Recommended Repo Mirror Structure

```text
notion/
  README.md
  databases/
    agent-inventory.md
    skill-catalog.md
    custom-gpt-inventory.md
    platform-packs.md
    content-briefs.md
    partner-resources.md
  exports/
    README.md
  sync-rules.md

knowledge-base/
  [topic]/
    README.md
    index.json
    examples.md
```

## Package Metadata

```yaml
notion_page_name: ""
notion_page_url: ""
database_name: ""
database_url: ""
status: "draft"
visibility: "mixed"
source_of_truth: "notion"
repo_mirror_path: ""
audience: ""
purpose: ""
sync_frequency: ""
owner: ""
last_reviewed: ""
```

## Visibility Types

```text
public-safe
internal-only
mixed
private
needs-review
```

## Standard Notion Database Properties

### Agent Inventory

```text
Name
Slug
Category
Status
Priority
Buyer
Problem Solved
Primary Job
Platform
File Path
Related Skills
Related Knowledge Bases
Related Schemas
Public URL
Repo URL
Last Reviewed
Notes
```

### Skill Catalog

```text
Name
Slug
Category
Status
Priority
Audience
Problem Solved
Recommended Apps
Path
Related Agents
Related Knowledge Bases
Last Reviewed
Notes
```

### Custom GPT Inventory

```text
Custom GPT Name
Slug
Access URL
Description
Profile Image URL
Category
Status
Audience
Related Agent
Related Skill
Related Knowledge Base
Disclosure Required
Last Reviewed
Notes
```

### Content Briefs

```text
Title
Cluster
Primary Keyword
Secondary Keywords
Search Intent
Audience
Primary CTA
Secondary CTA
Meta Description
Article Excerpt
Status
Publishing Platform
Last Reviewed
Notes
```

### Partner Resources

```text
Name
Slug
Resource Type
Audience
Problem Solved
Primary CTA
Primary CTA URL
Secondary CTA
Secondary CTA URL
Disclosure Required
Partner Relationship
Restricted Claims
Status
Owner
Last Reviewed
```

## Notion Page Template

```md
# [Knowledge Base Name]

## Purpose

[What this Notion page/database is for.]

## Audience

This is used by:

- Audience 1
- Audience 2
- Audience 3

## Source of Truth

Primary source:

[Notion page or database URL]

Repo mirror:

[Repo path]

## Visibility

public-safe / internal-only / mixed / private / needs-review

## Source Boundaries

Public-safe:

- Item 1
- Item 2

Internal-only:

- Item 1
- Item 2

Do not export:

- Secrets
- Private customer data
- Sensitive financial records
- Private provider terms
- Backend bypass paths

## Recommended Views

- Table — All
- Board — By Status
- Gallery — Public Cards
- Calendar — Review Cadence
- Filtered — Needs Review
- Filtered — Public-Safe
- Filtered — Internal Only

## AI Usage Rules

Agents may use this to draft summaries, generate public-safe cards, create outlines, normalize inventory, and identify missing fields.

Agents may not publish internal-only notes, invent missing URLs, expose private data, guarantee outcomes, or skip human review.

## Review Cadence

Review every [timeframe] or when source material changes.
```

## Repo Export Rules

Allowed repo exports:

```text
README.md
index.json
examples.md
inventory.md
inventory.csv
source-map.md
```

Do not export private comments, temporary task notes, private client data, user access records, or payment data.

## Sync Direction Rules

### Notion as Source of Truth

Use when Notion is where records are edited and GitHub mirrors public-safe output.

```text
Notion → export → GitHub Markdown/JSON
```

### GitHub as Source of Truth

Use when repo files are canonical and Notion is only a planning dashboard.

```text
GitHub → summarized in Notion
```

## Field Normalization Rules

Use lowercase kebab-case slugs, consistent status values, and clear visibility labels.

## AI Export Prompt

```text
Use the selected Notion database/page as source material.

Create a repo-ready knowledge-base package.

Output:
- README.md
- index.json
- examples.md

Rules:
- Preserve user-provided URLs.
- Do not invent missing URLs.
- Mark missing fields as Unknown or null depending on target format.
- Separate public-safe content from internal-only content.
- Do not include private comments, secrets, customer records, sensitive financial records, or backend provider bypass paths.
- Use synthetic examples.
- Include review cadence.
- Include related agents, skills, and schemas where known.
```

## Notion-to-Repo index.json Template

```json
{
  "name": "Example Knowledge Base",
  "slug": "example-knowledge-base",
  "source": {
    "type": "notion",
    "name": "Example Notion Page",
    "url": "https://www.notion.so/example"
  },
  "repo_mirror": {
    "path": "knowledge-base/example/README.md",
    "status": "draft"
  },
  "visibility": "public-safe",
  "audience": ["AI builders", "Repo maintainers"],
  "purpose": "Public-safe summary of the Notion knowledge base.",
  "files": [
    {
      "path": "knowledge-base/example/README.md",
      "type": "overview",
      "description": "Main usage guide."
    },
    {
      "path": "knowledge-base/example/examples.md",
      "type": "examples",
      "description": "Synthetic examples."
    }
  ],
  "review": {
    "owner": "AI Agent Library",
    "cadence": "Quarterly or when source changes",
    "last_reviewed": null
  }
}
```

## Quality Checklist

- [ ] Source page/database URL is recorded.
- [ ] Source of truth is defined.
- [ ] Repo mirror path is defined.
- [ ] Visibility is labeled.
- [ ] Database properties are standardized.
- [ ] Public-safe content is separated from internal-only content.
- [ ] Export rules are included.
- [ ] AI usage rules are included.
- [ ] Review cadence is included.
- [ ] Missing fields are identified.
- [ ] Duplicate records are flagged.
- [ ] No secrets are included.
- [ ] No private customer data is included.
- [ ] No backend bypass paths are included.

## Guardrails

This template must not be used to export private Notion content into public repos without review, publish private comments, publish private customer data, publish sensitive records, publish access credentials, treat Notion pages as automatically public-safe, invent missing URLs/categories/provider relationships, or guarantee funding, approval, income, rankings, or business outcomes.

## Done Means

A Notion knowledge-base package is complete when it includes source URL, purpose, audience, visibility, property map, view recommendations, export rules, AI usage rules, repo mirror path, review cadence, and guardrails.
