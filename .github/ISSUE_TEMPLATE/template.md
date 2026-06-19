---
name: Template
about: Create or improve a reusable template asset
title: "[Template]: "
labels: template
assignees: ""
---

## Objective

Create or improve a reusable template for the AI Agent Library.

Templates may include Markdown templates, prompt templates, platform pack templates, static-site templates, Notion templates, communication templates, PR/issue templates, JSON/schema templates, knowledge-base templates, workflow templates, portfolio templates, and landing-page templates.

## Template Name

```text
[Template name]
```

## Template Slug

```text
[lowercase-kebab-case-slug]
```

## Proposed File Path

```text
templates/[template-slug].md
```

Alternative paths:

```text
templates/platform-packs/[template-slug].md
.github/ISSUE_TEMPLATE/[template-slug].md
examples/[category]/[template-slug].md
```

## Template Type

Select one:

```text
Markdown Template
Prompt Template
Platform Pack Template
Static Site Template
Notion Template
Email Template
SMS Template
Call Script Template
Issue Template
PR Template
Schema Template
JSON Template
Knowledge Base Template
Workflow Template
Portfolio Template
Landing Page Template
Other
```

## Category

Select one:

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
GitHub Hygiene
Other
```

## Audience

Who uses this template?

- [ ] AI agents
- [ ] Custom GPTs
- [ ] Repo operators
- [ ] Codex/Jules agents
- [ ] Funding operators
- [ ] Brokers
- [ ] Affiliate partners
- [ ] Content operators
- [ ] Static-site builders
- [ ] Community contributors
- [ ] Internal team
- [ ] Other: [describe]

## Problem Solved

```text
[Problem]
```

## Primary Output

```text
[Primary output]
```

## Inputs Required

Required inputs:

- [ ] Input 1
- [ ] Input 2
- [ ] Input 3

Optional inputs:

- [ ] Optional input 1
- [ ] Optional input 2
- [ ] Optional input 3

## Proposed Files

Create or update:

- [ ] `templates/[template-slug].md`
- [ ] `templates/README.md`
- [ ] `templates/template-index.json`
- [ ] Related examples if needed
- [ ] Related docs if needed
- [ ] Other: `[path]`

## Required Sections

The template should include:

- [ ] Purpose
- [ ] When to use
- [ ] When not to use
- [ ] Inputs
- [ ] Template body
- [ ] Example usage
- [ ] Example output
- [ ] Quality checklist
- [ ] Guardrails
- [ ] Related assets
- [ ] Done means

## Suggested Template Structure

```md
# [Template Name]

## Purpose

[What this template is for.]

## When To Use

Use this template when:

- Use case 1
- Use case 2
- Use case 3

## When Not To Use

Do not use this template when:

- Out-of-scope case 1
- Out-of-scope case 2

## Inputs

Required:

- Input 1
- Input 2
- Input 3

Optional:

- Optional input 1
- Optional input 2

## Template

[Reusable template content goes here.]

## Example

### Input

[Example input]

### Output

[Example output]

## Quality Checklist

- [ ] Checklist item 1
- [ ] Checklist item 2
- [ ] Checklist item 3

## Guardrails

- Rule 1
- Rule 2
- Rule 3

## Related Assets

- Agents:
- Skills:
- Knowledge bases:
- Schemas:
- Platform packs:
```

## Template Index Record

If updating a template index, use this shape:

```json
{
  "name": "Example Template",
  "slug": "example-template",
  "type": "Markdown Template",
  "category": "AI Builder Resources",
  "status": "draft",
  "audience": ["AI builders", "Repo operators"],
  "problem_solved": "Creates a reusable structure for a repeated task.",
  "primary_output": "Repo-ready Markdown file.",
  "path": "templates/example-template.md",
  "related": {
    "agents": [],
    "skills": [],
    "knowledge_bases": [],
    "schemas": [],
    "platform_packs": []
  },
  "last_reviewed": null
}
```

## Placeholder Rules

Use clear placeholders such as `[Project Name]`, `[Audience]`, `[Primary CTA]`, `[Source URL]`, `[Repo Path]`, and `[Review Cadence]`.

## Example Rules

Examples must be synthetic, public-safe, easy to copy, clearly labeled, and free of private data, secrets, fake testimonials, and unsupported guarantees.

## Guardrails

This template must not include private data, secrets, backend bypass paths, fake testimonials, guaranteed outcomes, regulated advice presented as final guidance, or hidden affiliate claims without disclosure.

## Related Agents

```text
agents/[agent-slug].md
```

## Related Skills

```text
skills/[skill-slug]/SKILL.md
```

## Related Knowledge Bases

```text
knowledge-base/[topic]/README.md
```

## Related Schemas

```text
schemas/[schema-name].schema.json
```

## Related Platform Packs

```text
templates/platform-packs/[platform-pack].md
```

## Acceptance Criteria

- [ ] Template file exists.
- [ ] Template name and slug are clear.
- [ ] Template type is labeled.
- [ ] Audience is defined.
- [ ] Problem solved is specific.
- [ ] Required inputs are listed.
- [ ] Template body is included.
- [ ] Example usage is included.
- [ ] Example output is included where useful.
- [ ] Quality checklist is included.
- [ ] Guardrails are included.
- [ ] Related assets are linked where known.
- [ ] Template index is updated if applicable.
- [ ] JSON validates if index files are changed.
- [ ] No private data, secrets, or unsupported claims are included.

## Out of Scope

Do not include unrelated templates, new agents, new skills, new knowledge bases, new platform packs, static-site redesigns, deployment changes, private customer data, or real credentials unless explicitly required and reviewed.

## Review Notes

Reviewer should check that the template is reusable, placeholders are clear, examples are synthetic, scope is controlled, crosslinks are accurate, and no private data, secrets, or unsupported claims are included.
