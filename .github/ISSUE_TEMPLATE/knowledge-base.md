---
name: Knowledge Base
about: Create or improve a repo-ready knowledge base
title: "[Knowledge Base]: "
labels: knowledge-base
assignees: ""
---

## Objective

Create or improve a structured knowledge base.

A knowledge base should turn source material into reusable, public-safe, repo-ready documentation that agents, GPTs, prompt chains, static sites, workflows, and operators can use without digging through scattered notes like a raccoon in a filing cabinet.

## Knowledge Base Name

```text
[Knowledge base name]
```

## Knowledge Base Slug

```text
[lowercase-kebab-case-slug]
```

## Proposed Folder Path

```text
knowledge-base/[knowledge-base-slug]/
```

## Category

Select one:

```text
Funding
Business Credit
Partner Enablement
CRM
Content Ops
Automation
Local Referrals
Engineering as Marketing
Affiliate Marketing
Static Sites
AI Builder Resources
Prompt Systems
Trust & Safety
Platform Ops
Community
Other
```

## Audience

Who will use this knowledge base?

- [ ] AI agents
- [ ] Custom GPTs
- [ ] Repo operators
- [ ] Funding operators
- [ ] Brokers
- [ ] Affiliate partners
- [ ] Small business owners
- [ ] Content operators
- [ ] CRM/admin operators
- [ ] Internal team
- [ ] Public users
- [ ] Other: [describe]

## Source Material

List the source material that should be used.

```text
Source 1:
Source 2:
Source 3:
```

## Source of Truth

Which source controls if materials conflict?

```text
[Primary source of truth]
```

## Visibility

Select one:

```text
public-safe
internal-only
mixed
private
needs-review
```

## Problem Solved

Describe the practical problem this knowledge base solves.

```text
[Problem]
```

## Primary Job

What should this knowledge base help users or agents do?

```text
[Primary job]
```

## Proposed Files

Create or update:

- [ ] `knowledge-base/[slug]/README.md`
- [ ] `knowledge-base/[slug]/index.json`
- [ ] `knowledge-base/[slug]/examples.md`
- [ ] `knowledge-base/[slug]/glossary.md`
- [ ] `knowledge-base/[slug]/source-notes.md`
- [ ] `knowledge-base/[slug]/public-safe-language.md`
- [ ] `knowledge-base/[slug]/internal-rules.md`
- [ ] Other: `[path]`

## Required Sections

The main `README.md` should include:

- [ ] Purpose
- [ ] Audience
- [ ] What this knowledge base contains
- [ ] When to use it
- [ ] When not to use it
- [ ] Source boundaries
- [ ] Public-safe usage rules
- [ ] Internal-only usage rules if applicable
- [ ] Related agents
- [ ] Related skills
- [ ] Related schemas
- [ ] Related platform packs
- [ ] Review cadence
- [ ] Guardrails

## Suggested README Structure

```md
# [Knowledge Base Name]

## Purpose

[What this knowledge base is for.]

## Audience

This knowledge base supports:

- Audience 1
- Audience 2
- Audience 3

## What It Contains

- File or topic 1
- File or topic 2
- File or topic 3

## Source of Truth

Primary source:

```text
[Source]
```

## Visibility

```text
public-safe / internal-only / mixed / private / needs-review
```

## When To Use

Use this knowledge base when:

- Use case 1
- Use case 2
- Use case 3

## When Not To Use

Do not use this knowledge base for:

- Out-of-scope use case 1
- Out-of-scope use case 2
- Out-of-scope use case 3

## Public-Safe Rules

- Rule 1
- Rule 2
- Rule 3

## Internal-Only Rules

- Rule 1
- Rule 2
- Rule 3

## Related Assets

- Related agents:
- Related skills:
- Related schemas:
- Related templates:
- Related platform packs:

## Review Cadence

Review every [timeframe] or when source material changes.
```

## `index.json` Shape

If an index file is created, use this shape:

```json
{
  "name": "Example Knowledge Base",
  "slug": "example-knowledge-base",
  "status": "draft",
  "category": "Funding",
  "visibility": "public-safe",
  "audience": [
    "AI builders",
    "Funding operators"
  ],
  "purpose": "Public-safe summary of the knowledge base.",
  "source_of_truth": "Source name or path",
  "files": [
    {
      "path": "knowledge-base/example/README.md",
      "type": "overview",
      "visibility": "public-safe",
      "description": "Main usage guide."
    }
  ],
  "related": {
    "agents": [],
    "skills": [],
    "schemas": [],
    "templates": [],
    "platform_packs": []
  },
  "review": {
    "owner": "AI Agent Library",
    "cadence": "Quarterly or when source changes",
    "last_reviewed": null
  }
}
```

## Public-Safe Language Rules

Use:

- educational
- planning
- readiness
- common gaps
- possible next steps
- review required
- compare options
- may be a fit
- source-based summary

Avoid:

- guaranteed approval
- guaranteed funding
- guaranteed revenue
- guaranteed ranking
- guaranteed credit improvement
- legal advice
- tax advice
- lending decision
- credit repair promise
- private provider routing

## Internal-Only Boundary Rules

If the knowledge base contains internal material, separate it clearly.

Internal-only content may include:

- Backend provider logic
- Partner economics
- Internal scoring weights
- Private routing criteria
- CRM stage logic
- Draft scripts not ready for public use
- Operational playbooks
- Private source notes

Internal-only content must not be used in public-facing output without sanitizing.

## Guardrails

This knowledge base must not include:

- [ ] API keys, tokens, credentials, or secrets
- [ ] Private client/customer/borrower data
- [ ] Bank statements, tax records, credit reports, IDs, or sensitive documents
- [ ] Backend provider bypass paths
- [ ] Raw partner economics unless explicitly internal-only
- [ ] Unsupported guarantees
- [ ] Fake testimonials
- [ ] Invented source claims
- [ ] Legal, tax, lending, credit repair, medical, or investment advice as final guidance

## Related Agents

List related agent specs.

```text
agents/[agent-slug].md
```

## Related Skills

List related skill files.

```text
skills/[skill-slug]/SKILL.md
```

## Related Schemas

List related schemas.

```text
schemas/[schema-name].schema.json
```

## Related Templates

List related templates.

```text
templates/[template-name].md
```

## Related Platform Packs

List related platform packs.

```text
templates/platform-packs/[platform-package].md
```

## Examples Required

Add synthetic examples only.

- [ ] Example prompt
- [ ] Example input
- [ ] Example output
- [ ] Example routing/use case
- [ ] Example public-safe rewrite if relevant

## Acceptance Criteria

- [ ] Knowledge base folder exists.
- [ ] Main `README.md` exists.
- [ ] Purpose is clear.
- [ ] Audience is defined.
- [ ] Source of truth is identified.
- [ ] Visibility is labeled.
- [ ] Public-safe and internal-only boundaries are clear.
- [ ] Related agents are linked where known.
- [ ] Related skills are linked where known.
- [ ] Related schemas/templates are linked where known.
- [ ] Synthetic examples are included if useful.
- [ ] Review cadence is included.
- [ ] No secrets or private data are included.
- [ ] No unsupported claims are included.
- [ ] JSON validates if index files are changed.

## Out of Scope

Do not include:

- Unrelated knowledge-base topics
- New agents unless this issue explicitly requires them
- New skills unless this issue explicitly requires them
- New schemas unless this issue explicitly requires them
- Static-site redesigns
- Deployment changes
- Package managers or frameworks
- Private customer records
- Raw backend provider links

## Review Notes

Reviewer should check:

- Source alignment
- Scope discipline
- Public-safe language
- Internal-only separation
- Crosslinks
- JSON validity
- No secrets
- No private data
- No guarantee claims
