# Skill Template

## Purpose

Use this template to create a reusable AI-agent skill for the AI Agent Library repo.

Copy this template into:

```text
skills/[skill-slug]/SKILL.md
```

Then replace all placeholder text with skill-specific content.

## Template Instructions

Before using this template:

1. Confirm the skill solves one repeated task.
2. Confirm the skill is narrower than an agent.
3. Confirm required inputs.
4. Confirm expected outputs.
5. Confirm related agents, templates, schemas, and knowledge bases.
6. Confirm visibility: `public-safe`, `internal-only`, `mixed`, `private`, or `needs-review`.
7. Use synthetic examples only.
8. Review with `skills/skill-review-checklist.md`.

---

# [Skill Name]

## Metadata

```yaml
skill_id: [lowercase-kebab-case-skill-id]
name: [Skill Name]
slug: [lowercase-kebab-case-skill-slug]
status: draft
visibility: public-safe
category: [agent-ops/automation-ops/content-ops/data-ops/funding-ops/knowledge-ops/platform-ops/repo-ops/review-ops/site-ops/template-ops/workflow-ops]
version: 0.1.0
owner: repo-maintainer
last_reviewed: null
```

## Purpose

[Explain what this skill does in one or two clear paragraphs.]

This skill exists to:

- [Purpose item 1]
- [Purpose item 2]
- [Purpose item 3]

## Primary Capability

The skill’s primary capability is:

```text
[One clear sentence describing the reusable capability.]
```

## When To Use

Use this skill when:

- [Use case 1]
- [Use case 2]
- [Use case 3]

## When Not To Use

Do not use this skill when:

- [Out-of-scope case 1]
- [Out-of-scope case 2]
- [Out-of-scope case 3]

Use a different skill, agent, or human review when:

- the task requires final legal, tax, medical, lending, investment, or credit repair advice
- the task requires private credentials
- the task requires real customer/client/borrower data
- the task requires backend provider routing or bypass paths
- the task requires deployment, merge, or production action without explicit approval
- the task is too broad for one reusable capability

## Inputs Required

The skill needs:

```text
[input 1]
[input 2]
[input 3]
```

## Optional Inputs

Helpful optional inputs:

```text
[optional input 1]
[optional input 2]
[optional input 3]
```

## Input Quality Requirements

Inputs should be:

- specific
- current enough for the task
- public-safe where possible
- repo-relative when referencing files
- synthetic when used as examples
- clearly labeled when internal-only or needs-review

If required inputs are missing, ask for the missing input or state the assumption clearly.

## Output

This skill should produce:

```text
[output 1]
[output 2]
[output 3]
```

Preferred output format:

```text
[markdown/json/yaml/html/plain-text/checklist/issue-body/pr-review/etc.]
```

## Output Quality Requirements

The output should be:

- complete
- scoped
- structured
- easy to review
- aligned with repo conventions
- public-safe where applicable
- honest about uncertainty
- free of secrets/private data
- free of unsupported claims

## Procedure

Follow this procedure:

1. Confirm the task objective.
2. Confirm required inputs are present.
3. Identify relevant repo conventions.
4. Select related templates or schemas if needed.
5. Produce the output.
6. Review for completeness.
7. Review for public-safe language.
8. Review for secrets, private data, and backend bypass paths.
9. Flag anything that requires human review.
10. Return the final output in the requested format.

## Detailed Procedure

### Step 1 — Confirm Scope

Identify:

- what the user wants
- which file or artifact is being created
- whether the output is public-facing or internal-only
- whether the task touches high-stakes content
- whether the task requires tool use or repo changes

### Step 2 — Validate Inputs

Check whether the provided inputs include:

- target audience
- destination file path
- source material
- output format
- platform constraints
- relevant URLs, if user-provided
- safety constraints

Do not invent missing URLs, files, citations, or repo state.

### Step 3 — Apply Repo Standards

Use:

- lowercase kebab-case slugs
- repo-relative paths
- synthetic examples
- clear Markdown headings
- valid JSON/YAML when applicable
- public-safe language
- explicit guardrails

### Step 4 — Generate Output

Create the requested output.

For file-generation tasks:

- include full contents
- avoid stubs
- close all code fences
- preserve the requested file path
- avoid unrelated files

For review tasks:

- identify blockers
- distinguish required fixes from suggestions
- provide exact next steps

### Step 5 — Validate Output

Check:

- completeness
- formatting
- safety/privacy
- public-safe language
- path consistency
- JSON/YAML validity if applicable
- human review triggers

## Quality Checklist

Before finalizing, confirm:

- [ ] The skill output matches the requested task.
- [ ] Required inputs were used.
- [ ] Assumptions are clear.
- [ ] Output is complete.
- [ ] Output is structured.
- [ ] Repo-relative paths are used where applicable.
- [ ] Slugs are lowercase kebab-case.
- [ ] Examples are synthetic.
- [ ] No secrets are included.
- [ ] No private data is included.
- [ ] No backend provider bypass paths are included.
- [ ] No unsupported claims are included.
- [ ] Human review triggers are included where needed.

## Guardrails

This skill must not:

- invent facts, files, URLs, citations, repo state, validation results, or credentials
- include secrets, API keys, tokens, OAuth secrets, webhook secrets, or `.env` content
- expose private customer/client/borrower data
- expose bank statements, tax records, credit reports, IDs, or sensitive documents
- expose backend provider bypass paths
- use real customer examples
- create fake testimonials or fake social proof
- guarantee funding, approval, credit improvement, income, ranking, traffic, or business outcomes
- provide final legal, tax, lending, credit repair, medical, or investment advice
- change deployment settings without explicit approval
- merge PRs without explicit approval
- start future-batch work without approval

## Public-Safe Language Rules

Use:

```text
educational
planning
readiness
possible fit
compare options
review required
terms vary
human review recommended
approval is not guaranteed
```

Avoid:

```text
guaranteed approval
guaranteed funding
guaranteed credit improvement
guaranteed income
guaranteed ranking
guaranteed traffic
everyone qualifies
no one gets denied
fix your credit
bypass underwriting
secret lender route
```

## Human Review Triggers

Require or recommend human review when:

- the output affects funding, credit, legal, tax, medical, investment, or compliance decisions
- private or internal-only source material is involved
- public-facing copy includes claims about outcomes
- affiliate/referral recommendations are included
- provider terms, pricing, approval, eligibility, or risk are involved
- deployment, merge, or production changes are requested
- data quality is uncertain
- the user requests high-stakes final guidance

## Related Agents

```text
[agent-slug]
[agent-slug]
```

## Related Knowledge Bases

```text
knowledge-base/[topic]/
knowledge-base/[topic]/README.md
```

## Related Templates

```text
templates/[template].md
templates/platform-packs/[platform-pack].md
```

## Related Schemas

```text
schemas/[schema-name].schema.json
```

## Related Prompt Chains

```text
prompt-chains/[prompt-chain].md
```

## Examples

### Example Request

```text
[Example user request using synthetic data.]
```

### Example Input

```text
[Example input using synthetic data.]
```

### Example Output

```text
[Example output.]
```

## Failure Modes

Watch for:

- skill is too broad
- procedure is vague
- inputs are missing
- output format is unclear
- examples are not synthetic
- guardrails are missing
- unsafe claims are present
- related files are invented
- validation is claimed but not performed
- skill overlaps too much with an agent spec

## Review Checklist

Before using or merging this skill:

- [ ] Skill ID is lowercase kebab-case.
- [ ] Name is clear.
- [ ] Status is set.
- [ ] Visibility is set.
- [ ] Category is set.
- [ ] Primary capability is specific.
- [ ] Use cases are clear.
- [ ] Inputs are listed.
- [ ] Output format is defined.
- [ ] Procedure is repeatable.
- [ ] Quality checklist is included.
- [ ] Guardrails are included.
- [ ] Human review triggers are included.
- [ ] Examples are synthetic.
- [ ] Related assets are listed.
- [ ] No secrets are included.
- [ ] No private data is included.
- [ ] No unsupported claims are included.

## Done Means

This skill is complete when:

- it solves one reusable capability
- required inputs are listed
- output format is defined
- procedure is repeatable
- quality checks are included
- guardrails are strong
- examples are synthetic
- human review triggers are clear
- related assets are connected
- the skill can be indexed in `skills/skill-index.json`
