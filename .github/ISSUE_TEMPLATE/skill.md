---
name: Skill
about: Create or improve a reusable AI agent skill
title: "[Skill]: "
labels: skill
assignees: ""
---

## Objective

Create or improve a reusable AI agent skill.

A skill should define a repeatable capability that agents, GPTs, assistants, repo operators, or automation workflows can use across multiple contexts.

The skill should be concrete, teachable, testable, and repo-ready.

## Skill Name

```text
[Skill name]
```

## Skill Slug

```text
[lowercase-kebab-case-slug]
```

## Proposed File Path

```text
skills/[skill-slug]/SKILL.md
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
Other
```

## Audience

Who uses this skill?

- [ ] AI agents
- [ ] Custom GPTs
- [ ] ChatGPT operators
- [ ] Codex/Jules/repo agents
- [ ] Funding operators
- [ ] Brokers
- [ ] Affiliate partners
- [ ] Static-site builders
- [ ] Content operators
- [ ] Internal team
- [ ] Other: [describe]

## Problem Solved

Describe the specific repeatable problem this skill solves.

```text
[Problem]
```

## Skill Outcome

What should a user or agent be able to do after applying this skill?

```text
[Outcome]
```

## When To Use This Skill

Use this skill when:

- [ ] Situation 1
- [ ] Situation 2
- [ ] Situation 3

## When Not To Use This Skill

Do not use this skill when:

- [ ] Situation 1
- [ ] Situation 2
- [ ] Situation 3

## Inputs Required

Required inputs:

- [ ] Input 1
- [ ] Input 2
- [ ] Input 3

Optional inputs:

- [ ] Optional input 1
- [ ] Optional input 2
- [ ] Optional input 3

## Procedure

Define the step-by-step method.

```text
1. Confirm the goal.
2. Collect required inputs.
3. Validate source material.
4. Apply the skill workflow.
5. Produce the output.
6. Run quality checks.
7. Flag anything needing human review.
```

## Output Format

Expected output:

```text
Markdown / JSON / CSV / HTML / Checklist / Prompt / Other
```

If structured, provide shape:

```json
{
  "skill": "",
  "inputs_used": [],
  "output": {},
  "quality_checks": [],
  "review_required": false
}
```

## Examples

### Example Input

```text
[Example input]
```

### Example Output

```md
[Example output]
```

## Related Agents

List related agent specs.

```text
agents/[agent-slug].md
```

## Related Knowledge Bases

List related knowledge-base files.

```text
knowledge-base/[topic]/README.md
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
templates/platform-packs/[platform-package].md
```

## Related Platform Packs

List related platform packs.

```text
platforms/[platform]/README.md
```

## Guardrails

This skill must not:

- [ ] Invent facts, URLs, sources, products, providers, files, or relationships.
- [ ] Expose private customer/client/borrower data.
- [ ] Include API keys, tokens, credentials, or secrets.
- [ ] Expose backend provider links or bypass paths.
- [ ] Guarantee funding, approval, credit improvement, income, ranking, traffic, or business outcomes.
- [ ] Provide legal, tax, lending, credit repair, investment, medical, or other regulated advice as final guidance.
- [ ] Convert internal-only material into public-facing output without sanitizing.
- [ ] Skip human review where high-stakes decisions are involved.

## Skill File Requirements

The `SKILL.md` file should include:

- [ ] Title
- [ ] Purpose
- [ ] When to use
- [ ] When not to use
- [ ] Inputs
- [ ] Procedure
- [ ] Output format
- [ ] Examples
- [ ] Quality checklist
- [ ] Guardrails
- [ ] Related agents
- [ ] Related knowledge bases
- [ ] Related schemas/templates if applicable

## Files To Create or Update

- [ ] `skills/[skill-slug]/SKILL.md`
- [ ] `skills/README.md`
- [ ] `skills/skill-index.json`
- [ ] Related examples if needed
- [ ] Related agent crosslinks if needed

## Acceptance Criteria

- [ ] Skill folder exists.
- [ ] `SKILL.md` exists.
- [ ] Skill name and slug are clear.
- [ ] Category is assigned.
- [ ] Audience is defined.
- [ ] Problem solved is specific.
- [ ] Inputs are listed.
- [ ] Procedure is actionable.
- [ ] Output format is clear.
- [ ] Examples are included.
- [ ] Guardrails are included.
- [ ] Related agents are linked where known.
- [ ] Related knowledge bases are linked where known.
- [ ] `skills/skill-index.json` is updated if applicable.
- [ ] JSON validates if index files are changed.
- [ ] No private data, secrets, or unsupported claims are included.

## Out of Scope

Do not include:

- Unrelated skills
- New agents unless this issue explicitly requires them
- New knowledge bases unless this issue explicitly requires them
- New schemas unless this issue explicitly requires them
- Static-site redesigns
- Deployment changes
- Package managers or frameworks
- Private client/customer/borrower records

## Review Notes

Reviewer should check:

- Skill is reusable, not one-off
- Procedure is specific enough to execute
- Examples are synthetic
- Guardrails are appropriate
- Crosslinks are accurate
- Index updates are valid
