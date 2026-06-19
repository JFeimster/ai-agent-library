# Agent Spec Packager

## Purpose

The **Agent Spec Packager** skill turns a rough AI agent idea into a structured, reusable, repo-ready agent specification.

Use this skill when an agent needs to be documented clearly enough to become a Custom GPT, Gemini Gem, static tool, n8n workflow, Notion assistant, GitHub execution prompt, or internal operating assistant.

The output should be a complete Markdown agent spec with metadata, audience, problem solved, inputs, outputs, workflow, guardrails, related assets, and acceptance criteria.

## When To Use

Use this skill when the user asks for:

- An AI agent spec
- A Custom GPT spec
- A Gemini Gem spec
- A repo-ready agent Markdown file
- A new record for `agent-index.json`
- A platform package for an agent
- A prompt system that should become an agent
- A productized assistant definition
- A reusable operator / copilot spec
- A Jules or Codex-ready implementation agent

Do not use this skill for:

- Pure landing page generation
- Pure article writing
- Pure JSON schema generation
- Pure workflow automation specs

Those may use related skills, but this skill is focused on **agent-level product specs**.

## Inputs

### Minimum Inputs

```text
Agent name:
Who it is for:
Problem it solves:
Primary job:
Main output:
```

### Recommended Inputs

```text
Slug:
Category:
Buyer:
Status:
Priority:
Platform targets:
Inputs:
Outputs:
Workflow:
Guardrails:
Public-safe rules:
Related skills:
Related knowledge bases:
Related schemas:
```

### Optional Inputs

```text
Custom GPT URL:
Landing page URL:
Notion URL:
Repo path:
Prompt examples:
Knowledge files:
Actions/APIs:
Monetization model:
CTA:
Do-not-claim list:
Validation rules:
Launch notes:
```

## Outputs

This skill can produce:

```text
agents/[slug].md
agent-index.json record
portfolio/custom-gpts/index.json record
templates/platform-packs/custom-gpt-package.md section
site-data/agents.fallback.json record
```

Primary output:

```text
agents/[slug].md
```

## Standard Agent Spec Structure

Every generated agent file should follow this structure:

```md
# Agent Name

## Summary

[Short, clear description.]

## Metadata

| Field | Value |
|---|---|
| Slug | `[slug]` |
| Category | [Category] |
| Status | [Status] |
| Priority | [Priority] |
| Buyer | [Buyer] |
| Platform Targets | [Targets] |
| Primary Repo Path | `agents/[slug].md` |
| Related Schema | `schemas/agent.schema.json` |
| Related Knowledge Base | `knowledge-base/[topic]/README.md` |

## Pain Solved

[Problem description.]

## Primary Job

[Main job.]

## Users

Best-fit users:

- User 1
- User 2

Not intended for:

- Exclusion 1
- Exclusion 2

## Inputs

[Input fields.]

## Outputs

[Output list.]

## Standard Output Format

[Reusable output format.]

## Workflow

[Steps.]

## Guardrails

[Guardrails.]

## Public-Safe Language Rules

[Allowed and restricted language.]

## Example Input

[Example.]

## Example Output

[Example.]

## Related Skills

[Related skills.]

## Related Knowledge Bases

[Related KBs.]

## Related Schemas

[Related schemas.]

## Platform Packages

[Platform packages.]

## Acceptance Criteria

[Done criteria.]
```

## Metadata Rules

### Slug

Use lowercase kebab-case.

Good:

```text
funding-pipeline-triage-agent
partner-resource-card-builder
static-site-page-generator
```

Bad:

```text
Funding Pipeline Triage Agent
funding_pipeline_triage_agent
fundingPipelineTriageAgent
```

### Category

Use existing categories where possible:

```text
Funding Ops
Partner Enablement
AI Builder Resources
Static Sites
Prompt Systems
Knowledge Bases
Business Credit
CRM
Content Ops
Automation
Platform Ops
Trust & Safety
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

### Platform Targets

Examples:

```text
ChatGPT Custom GPT
Gemini Gem
Vercel Static Site
n8n Workflow
Notion Assistant
GitHub Prompt Pack
Google Drive Knowledge Pack
```

## Workflow

### Step 1 — Extract Agent Concept

Identify:

- Name
- Audience
- Buyer
- Pain solved
- Main job
- Inputs
- Outputs
- Platform target
- Risk category

### Step 2 — Normalize Metadata

Create:

- Slug
- Category
- Status
- Priority
- Tags
- Repo path
- Related assets

### Step 3 — Define Scope

Clarify what the agent does and does not do.

For example:

```text
This agent drafts follow-up messages but does not send automatically.
```

### Step 4 — Define Inputs

Inputs should be practical and specific.

Examples:

```text
Business name
Lead stage
CRM notes
Missing documents
Desired next step
CTA URL
Tone
```

### Step 5 — Define Outputs

Outputs should be concrete.

Examples:

```text
Readiness summary
Missing information list
Email draft
SMS draft
Review checklist
PR description
Static file plan
```

### Step 6 — Define Workflow

Workflow should be ordered and testable.

Good:

```text
1. Classify request.
2. Extract known facts.
3. Identify missing information.
4. Generate draft.
5. Add guardrails.
6. Add human review checklist.
```

### Step 7 — Add Guardrails

Guardrails should reflect the domain.

Funding:

```text
No guaranteed approval.
No guaranteed funding.
No unverified terms.
```

Automation:

```text
No automatic high-stakes sends.
No secrets in public examples.
Human review required.
```

GitHub:

```text
Do not merge unless explicitly instructed.
Do not overwrite existing files without diff review.
```

### Step 8 — Add Examples

Examples must be:

- Synthetic
- Public-safe
- Directly relevant
- Clear enough to test the agent

### Step 9 — Link Related Assets

Include:

- Related skills
- Related knowledge bases
- Related schemas
- Related platform packages

### Step 10 — Add Acceptance Criteria

Acceptance criteria should be measurable.

Examples:

```text
The agent can summarize messy CRM notes.
The agent can identify missing fields.
The agent can produce a safe draft.
The agent can avoid unsupported claims.
```

## Public-Safe Rules

For any agent touching funding, business credit, affiliate content, automation, public pages, or platform operations, include public-safe rules.

Do not claim:

```text
Guaranteed approval
Guaranteed funding
Guaranteed credit outcomes
Guaranteed revenue
Guaranteed rankings
Everyone qualifies
No risk
No documents needed
AI replaces professional review
```

Use:

```text
Educational
Readiness
Review required
Possible fit
Common requirements
Draft
Human review
Public-safe resource
```

## Agent Index Record Format

When adding a record to `agent-index.json`, use:

```json
{
  "name": "Agent Name",
  "slug": "agent-slug",
  "category": "Category",
  "buyer": "Specific buyer",
  "pain_solved": "Clear pain statement.",
  "primary_job": "Main job.",
  "platform": "Platform target",
  "status": "draft",
  "priority": "high",
  "tags": ["tag-one", "tag-two"],
  "file": "agents/agent-slug.md",
  "related_skills": [],
  "related_knowledge_bases": [],
  "related_schemas": []
}
```

## Quality Checklist

Before finalizing an agent spec:

- [ ] Agent name is clear.
- [ ] Slug is kebab-case.
- [ ] Category is valid.
- [ ] Status is valid.
- [ ] Priority is set.
- [ ] Buyer is specific.
- [ ] Pain solved is practical.
- [ ] Primary job is narrow enough.
- [ ] Inputs are listed.
- [ ] Outputs are listed.
- [ ] Workflow is step-by-step.
- [ ] Guardrails are domain-specific.
- [ ] Public-safe rules are included.
- [ ] Example input is synthetic.
- [ ] Example output is useful.
- [ ] Related skills are linked.
- [ ] Related knowledge bases are linked.
- [ ] Related schemas are linked.
- [ ] Acceptance criteria are measurable.
- [ ] File path matches `agent-index.json`.

## Guardrails

This skill must not:

- Invent live URLs unless the user provided them.
- Invent approval/funding/credit/revenue/ranking guarantees.
- Invent fake customer examples.
- Invent fake testimonials.
- Expose private customer data.
- Expose secrets.
- Recommend merging code without explicit instruction.
- Describe an agent as production-ready unless it has validation and review notes.
- Mix internal-only and public-safe content without clear boundaries.

## Example Input

```text
Create an agent spec for a CRM follow-up drafting assistant for funding brokers. It should draft email and SMS follow-ups but not send automatically.
```

## Example Output Path

```text
agents/crm-follow-up-drafting-agent.md
```

## Example Agent Index Record

```json
{
  "name": "CRM Follow-Up Drafting Agent",
  "slug": "crm-follow-up-drafting-agent",
  "category": "CRM",
  "buyer": "Sales teams, brokers, processors, closers, and RevOps operators",
  "pain_solved": "Drafts clear follow-up messages from CRM status, missing fields, prior notes, and next-step rules while keeping human review in place.",
  "primary_job": "Convert CRM context into safe, reviewable follow-up drafts and next-action summaries.",
  "platform": "Custom GPT / n8n",
  "status": "draft",
  "priority": "high",
  "tags": ["crm", "follow-up", "sales", "automation", "review", "drafting"],
  "file": "agents/crm-follow-up-drafting-agent.md",
  "related_skills": [
    "skills/crm-note-summarizer/SKILL.md",
    "skills/automation-workflow-spec-writer/SKILL.md"
  ],
  "related_knowledge_bases": [
    "knowledge-base/crm/README.md",
    "knowledge-base/automation/README.md"
  ],
  "related_schemas": [
    "schemas/webhook-event.schema.json"
  ]
}
```

## Related Agents

```text
agents/ai-agent-library-builder.md
agents/prompt-chain-architect.md
agents/knowledge-base-packager.md
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
schemas/custom-gpt.schema.json
schemas/webhook-event.schema.json
```

## Done Means

This skill is complete when it can produce a full agent spec that:

- Has clear metadata
- Defines scope
- Lists inputs and outputs
- Includes workflow
- Includes guardrails
- Uses public-safe language
- Links related assets
- Can be added to `agents/`
- Can be referenced from `agent-index.json`
