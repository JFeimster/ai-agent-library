# Agents

This folder contains productized AI agent specifications for AI Agent Library.

Each agent should be documented as a reusable asset that can be converted into one or more platform packages, including Custom GPTs, Gemini Gems, static site tools, n8n workflows, Notion systems, or GitHub execution prompts.

## Purpose

The `agents/` folder is the canonical source for agent-level product specs.

Use this folder to define:

- What the agent does
- Who it is for
- What pain it solves
- What inputs it needs
- What outputs it produces
- What workflow it follows
- What guardrails it must obey
- What skills it depends on
- What knowledge bases it uses
- What schemas it should follow
- What platform packages it can become

## Canonical Index

The root index for agents is:

```text
agent-index.json
```

Catalog pages should load agent data in this order:

```text
1. agent-index.json
2. site-data/agents.fallback.json
```

## Recommended Agent File Naming

Use lowercase kebab-case:

```text
agents/funding-pipeline-triage-agent.md
agents/partner-resource-card-builder.md
agents/ai-agent-library-builder.md
```

## Required Agent Spec Sections

Each agent Markdown file should include:

```md
# Agent Name

## Summary

One clear paragraph describing the agent.

## Metadata

- Slug:
- Category:
- Status:
- Priority:
- Buyer:
- Platform target:

## Pain Solved

What problem this agent solves.

## Primary Job

The main job the agent performs.

## Users

Who should use this agent.

## Inputs

- Input 1
- Input 2
- Input 3

## Outputs

- Output 1
- Output 2
- Output 3

## Workflow

1. Step one
2. Step two
3. Step three

## Guardrails

- Guardrail 1
- Guardrail 2
- Guardrail 3

## Public-Safe Language Rules

- Rule 1
- Rule 2
- Rule 3

## Related Skills

- `skills/example-skill/SKILL.md`

## Related Knowledge Bases

- `knowledge-base/example/README.md`

## Related Schemas

- `schemas/agent.schema.json`

## Platform Packages

- Custom GPT
- Gemini Gem
- Static site page
- n8n workflow
- Notion system
```

## Agent Status Values

Use these values consistently:

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

## Priority Values

Use:

```text
high
medium
low
```

## Public-Safe Rules

Agents must avoid unsupported claims.

Do not claim:

- Guaranteed approval
- Guaranteed funding
- Guaranteed credit outcomes
- Guaranteed revenue
- Guaranteed rankings
- Everyone qualifies
- No risk
- No documents needed
- AI replaces professional review

Use:

- Educational
- Readiness
- Common requirements
- Possible fit
- Review required
- Potential options
- Suggested next step
- Public-safe resource

## Agent Quality Checklist

Before adding an agent file:

- [ ] Agent has a clear name.
- [ ] Slug is unique.
- [ ] Category matches `site-data/categories.json`.
- [ ] Buyer is specific.
- [ ] Pain solved is clear.
- [ ] Primary job is narrow enough.
- [ ] Inputs are listed.
- [ ] Outputs are listed.
- [ ] Workflow is practical.
- [ ] Guardrails are included.
- [ ] Public-safe rules are included.
- [ ] Related skills are linked.
- [ ] Related knowledge bases are linked.
- [ ] Related schemas are linked.
- [ ] File is referenced in `agent-index.json`.

## Initial Priority Agents

```text
funding-pipeline-triage-agent.md
partner-resource-card-builder.md
ai-agent-library-builder.md
static-site-page-generator.md
prompt-chain-architect.md
knowledge-base-packager.md
business-credit-readiness-helper.md
crm-follow-up-drafting-agent.md
content-brief-generator.md
automation-workflow-spec-agent.md
vercel-deployment-control-agent.md
affiliate-disclosure-reviewer.md
```

## Related Files

```text
agent-index.json
site-data/agents.fallback.json
schemas/agent.schema.json
skill-catalog.html
agent-catalog.html
knowledge-base/
portfolio/
roadmap/phase-4-platform-layer.md
