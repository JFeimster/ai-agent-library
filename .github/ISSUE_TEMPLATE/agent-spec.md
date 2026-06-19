---
name: Agent Spec
about: Create or improve an AI agent specification
title: "[Agent Spec]: "
labels: agent-spec
assignees: ""
---

## Objective

Create or improve an AI agent specification.

The agent spec should define the agent’s role, audience, job-to-be-done, inputs, workflow, output format, guardrails, related skills, related knowledge bases, related schemas, and examples.

## Agent Name

```text
[Agent name]
```

## Agent Slug

```text
[lowercase-kebab-case-slug]
```

## Proposed File Path

```text
agents/[agent-slug].md
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

Who is this agent for?

- [ ] AI builders
- [ ] Funding operators
- [ ] Brokers
- [ ] Affiliate partners
- [ ] Small business owners
- [ ] Ecommerce sellers
- [ ] Real estate operators
- [ ] Creators
- [ ] Internal team
- [ ] Other: [describe]

## Problem Solved

Describe the specific pain this agent solves.

```text
[Problem]
```

## Primary Job

What is the agent supposed to do?

```text
[Primary job]
```

## Inputs the Agent Should Ask For

Required inputs:

- [ ] Input 1
- [ ] Input 2
- [ ] Input 3

Optional inputs:

- [ ] Optional input 1
- [ ] Optional input 2
- [ ] Optional input 3

## Expected Outputs

The agent should produce:

- [ ] Summary
- [ ] Analysis
- [ ] Checklist
- [ ] Recommendation
- [ ] Markdown document
- [ ] JSON object
- [ ] CSV/table
- [ ] Prompt
- [ ] Static-site content
- [ ] Schema-compatible output
- [ ] Other: [describe]

## Workflow

Define the agent’s step-by-step behavior.

```text
1. Understand the user’s goal.
2. Ask for missing required inputs.
3. Analyze the provided context.
4. Produce the requested output.
5. Add caveats, safety notes, and next steps.
```

## Output Format

Required output format:

```text
Markdown / JSON / CSV / HTML / Mixed / Other
```

If structured, provide shape:

```json
{
  "summary": "",
  "inputs_used": [],
  "recommendations": [],
  "next_steps": []
}
```

## Guardrails

The agent must not:

- [ ] Invent facts, URLs, citations, files, products, providers, or relationships.
- [ ] Expose private customer/client/borrower data.
- [ ] Include API keys, credentials, tokens, or secrets.
- [ ] Expose backend provider links or bypass paths.
- [ ] Guarantee funding, approval, credit improvement, income, ranking, traffic, or business outcomes.
- [ ] Provide legal, tax, lending, credit repair, medical, or investment advice as final guidance.
- [ ] Skip human review for high-stakes outputs.
- [ ] Use internal-only content in public-facing output without sanitizing.

## Related Skills

List related skill files.

```text
skills/[skill-slug]/SKILL.md
```

## Related Knowledge Bases

List related knowledge-base files.

```text
knowledge-base/[topic]/README.md
```

## Related Schemas

List related schema files.

```text
schemas/[schema-name].schema.json
```

## Related Platform Packs

List related platform pack files.

```text
platforms/[platform]/README.md
templates/platform-packs/[platform-package].md
```

## Example Use Cases

- [ ] Use case 1
- [ ] Use case 2
- [ ] Use case 3

## Example Prompt

```text
[Example user prompt for this agent]
```

## Example Output

```md
[Example output or short skeleton]
```

## Files To Create or Update

- [ ] `agents/[agent-slug].md`
- [ ] `agent-index.json`
- [ ] Related README/index files if needed
- [ ] Related examples if needed

## Acceptance Criteria

- [ ] Agent spec exists at the proposed path.
- [ ] Agent name and slug are clear.
- [ ] Audience is defined.
- [ ] Problem solved is specific.
- [ ] Primary job is clear.
- [ ] Required inputs are listed.
- [ ] Workflow is documented.
- [ ] Output format is documented.
- [ ] Guardrails are included.
- [ ] Related skills are linked where known.
- [ ] Related knowledge bases are linked where known.
- [ ] Related schemas are linked where known.
- [ ] Example prompt and output are included.
- [ ] `agent-index.json` is updated if applicable.
- [ ] No private data, secrets, or unsupported claims are included.

## Out of Scope

Do not include:

- Unrelated agents
- New skills unless this issue explicitly requires them
- New knowledge-base files unless this issue explicitly requires them
- New schemas unless this issue explicitly requires them
- Static-site redesigns
- Deployment changes
- Package managers or frameworks
- Private client/customer/borrower records

## Review Notes

Reviewer should check:

- Scope discipline
- Naming consistency
- Public-safe language
- Internal-only boundary handling
- Crosslinks
- JSON validity if indexes are updated
