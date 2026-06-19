# SKILL.md Generator

## Purpose

The **SKILL.md Generator** creates reusable `SKILL.md` playbooks for the AI Agent Library.

A skill is a portable capability that can be used by multiple agents, prompt systems, static site generators, automation workflows, and platform packages.

This skill standardizes how new skills are documented so they can be reused, indexed, searched, packaged, and connected to related agents.

## When To Use

Use this skill when the user asks for:

- A new `SKILL.md`
- A reusable AI skill
- A capability playbook
- A skill folder under `skills/`
- A skill index record
- A skill that multiple agents can use
- A repo-ready skill package
- A prompt skill for Codex, Jules, ChatGPT, or Custom GPTs

Do not use this skill when the user only wants:

- A one-off prompt
- A full agent spec
- A static page
- A JSON schema
- A content brief

Those may use related skills.

## Inputs

### Minimum Inputs

```text
Skill name:
Purpose:
When to use:
Inputs:
Outputs:
```

### Recommended Inputs

```text
Slug:
Category:
Audience:
Problem solved:
Recommended apps:
Priority:
Status:
Workflow:
File/path conventions:
Quality checklist:
Guardrails:
Examples:
Related agents:
Related knowledge bases:
```

### Optional Inputs

```text
Related schemas:
Platform targets:
Do-not-claim list:
Validation rules:
Sample input:
Sample output:
Repo path:
Existing skill-index record:
```

## Outputs

This skill can produce:

```text
skills/[skill-slug]/SKILL.md
skills/skill-index.json record
site-data/skills.fallback.json record
```

Primary output:

```text
skills/[skill-slug]/SKILL.md
```

## Standard `SKILL.md` Structure

Every skill file should follow this structure:

```md
# Skill Name

## Purpose

[What this skill helps the assistant do.]

## When To Use

- Use case 1
- Use case 2
- Use case 3

## Inputs

[Required and optional inputs.]

## Outputs

[Expected outputs.]

## File / Path Conventions

[Recommended file paths.]

## Workflow

1. Step one
2. Step two
3. Step three

## Quality Checklist

- [ ] Check 1
- [ ] Check 2
- [ ] Check 3

## Guardrails

- Guardrail 1
- Guardrail 2
- Guardrail 3

## Public-Safe Language Rules

[If relevant.]

## Examples

### Example Input

[Input.]

### Example Output

[Output.]

## Related Agents

- `agents/example-agent.md`

## Related Knowledge Bases

- `knowledge-base/example/README.md`

## Related Schemas

- `schemas/example.schema.json`

## Done Means

[Definition of done.]
```

## File / Path Conventions

### Folder Naming

Use lowercase kebab-case:

```text
skills/static-site-page-builder/
skills/agent-spec-packager/
skills/skill-md-generator/
```

### File Name

Every skill folder should contain:

```text
SKILL.md
```

### Canonical Index

Add the skill to:

```text
skills/skill-index.json
```

### Optional Fallback Data

If needed, also add to:

```text
site-data/skills.fallback.json
```

## Skill Metadata Rules

### Slug

Use lowercase kebab-case.

Good:

```text
static-site-page-builder
funding-language-safety-review
automation-workflow-spec-writer
```

Bad:

```text
Static Site Page Builder
static_site_page_builder
staticSitePageBuilder
```

### Category

Use existing categories when possible:

```text
Static Sites
AI Builder Resources
Skills Library
Funding Ops
Partner Enablement
Prompt Systems
Schemas
Knowledge Bases
Automation
CRM
Content Ops
Portfolio
Trust & Safety
Platform Ops
```

### Status

Use:

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

### Priority

Use:

```text
high
medium
low
```

## Workflow

### Step 1 — Identify the Skill

Clarify:

- Name
- Purpose
- Audience
- Use cases
- Main outputs
- Related agents
- Domain risks

### Step 2 — Normalize Metadata

Create:

- Slug
- Category
- Status
- Priority
- Recommended apps
- Repo path

### Step 3 — Define Inputs

Separate:

- Minimum inputs
- Recommended inputs
- Optional inputs

Inputs should be practical and reusable.

### Step 4 — Define Outputs

Outputs should be concrete file types, text formats, or structured deliverables.

Examples:

```text
Markdown file
JSON record
HTML page
PR description
Review checklist
Prompt chain
Workflow spec
```

### Step 5 — Define Workflow

The workflow should be ordered and reusable.

Example:

```text
1. Classify request.
2. Extract required fields.
3. Generate structured output.
4. Add guardrails.
5. Add validation checklist.
```

### Step 6 — Add File / Path Conventions

If the skill creates files, define exact paths.

Example:

```text
skills/[slug]/SKILL.md
agents/[slug].md
site-data/[name].json
```

### Step 7 — Add Quality Checklist

Checklist items should be clear pass/fail checks.

### Step 8 — Add Guardrails

Guardrails should prevent common failure modes.

### Step 9 — Add Examples

Examples should include:

- Example input
- Example output
- Notes if needed

### Step 10 — Add Related Assets

Include:

- Related agents
- Related knowledge bases
- Related schemas

## Skill Index Record Format

When adding a record to `skills/skill-index.json`, use:

```json
{
  "name": "Skill Name",
  "slug": "skill-slug",
  "category": "Category",
  "audience": "Audience",
  "problem_solved": "Clear problem solved.",
  "recommended_apps": [
    "ChatGPT",
    "GitHub"
  ],
  "priority": "high",
  "status": "draft",
  "path": "skills/skill-slug/SKILL.md",
  "related_agents": [
    "agents/example-agent.md"
  ],
  "related_knowledge_bases": [
    "knowledge-base/example/README.md"
  ]
}
```

## Quality Checklist

Before finalizing a `SKILL.md` file:

- [ ] Skill name is clear.
- [ ] Slug is kebab-case.
- [ ] Folder path is correct.
- [ ] Purpose is specific.
- [ ] When-to-use section is useful.
- [ ] Inputs are listed.
- [ ] Outputs are listed.
- [ ] Workflow is step-by-step.
- [ ] File/path conventions are included if relevant.
- [ ] Quality checklist exists.
- [ ] Guardrails are included.
- [ ] Public-safe rules are included if relevant.
- [ ] Examples are included.
- [ ] Related agents are linked.
- [ ] Related knowledge bases are linked.
- [ ] Related schemas are linked if relevant.
- [ ] `skills/skill-index.json` record can be created.
- [ ] No private data or secrets are included.

## Guardrails

This skill must not:

- Create vague skills with no reusable workflow.
- Create skills without inputs and outputs.
- Omit guardrails for high-risk domains.
- Use inconsistent file paths.
- Invent related files that should not exist.
- Include private data.
- Include secrets.
- Include unsupported guarantees.
- Describe a skill as production-ready without review criteria.
- Duplicate an existing skill without differentiating it.

## Public-Safe Language Rules

For skills involving funding, credit, partner/affiliate content, automation, public pages, or deployment, include public-safe rules.

Avoid:

```text
guaranteed approval
guaranteed funding
guaranteed credit outcome
guaranteed revenue
guaranteed ranking
everyone qualifies
no risk
no documents needed
AI replaces professional review
```

Use:

```text
educational
readiness
review required
possible fit
draft
human review
synthetic example
public-safe
```

## Example Input

```text
Create a SKILL.md for a funding language safety reviewer that checks pages for risky approval and funding claims.
```

## Example Output Path

```text
skills/funding-language-safety-review/SKILL.md
```

## Example Skill Index Record

```json
{
  "name": "Funding Language Safety Review",
  "slug": "funding-language-safety-review",
  "category": "Funding Ops",
  "audience": "Funding brokers, affiliate operators, partner managers, and content publishers",
  "problem_solved": "Reviews funding copy for guaranteed approval claims, unsafe speed claims, unsupported terms, missing educational framing, and high-risk language.",
  "recommended_apps": [
    "ChatGPT",
    "Custom GPT",
    "GitHub"
  ],
  "priority": "high",
  "status": "draft",
  "path": "skills/funding-language-safety-review/SKILL.md",
  "related_agents": [
    "agents/funding-pipeline-triage-agent.md",
    "agents/business-credit-readiness-helper.md"
  ],
  "related_knowledge_bases": [
    "knowledge-base/funding/README.md"
  ]
}
```

## Related Agents

```text
agents/ai-agent-library-builder.md
agents/static-site-page-generator.md
agents/agent-spec-packager.md
```

## Related Knowledge Bases

```text
knowledge-base/engineering-as-marketing/README.md
knowledge-base/automation/README.md
knowledge-base/content-ops/README.md
```

## Related Schemas

```text
schemas/agent.schema.json
```

## Done Means

This skill is complete when it can generate a full `SKILL.md` file that:

- Has a clear purpose
- Has specific use cases
- Defines inputs and outputs
- Includes a reusable workflow
- Includes file/path conventions
- Includes quality checks
- Includes guardrails
- Includes examples
- Links related agents/assets
- Can be added to `skills/`
- Can be indexed in `skills/skill-index.json`
