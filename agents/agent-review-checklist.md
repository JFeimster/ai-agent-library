# Agent Review Checklist

## Purpose

Use this checklist to review AI agent specifications before they are merged, indexed, packaged, published, or reused.

The checklist applies to:

- agent specs in `agents/`
- Custom GPT planning docs
- platform-specific agent specs
- repo operator agents
- content workflow agents
- funding workflow agents
- static-site agents
- review/audit agents

The goal is to make sure each agent is specific, safe, usable, and not secretly three different assistants in a trench coat. 🕵️

## Quick Review

Before deeper review, confirm:

- [ ] Agent has a clear name.
- [ ] Agent has a lowercase kebab-case slug.
- [ ] Agent has one primary job.
- [ ] Agent has a defined audience.
- [ ] Agent has required inputs.
- [ ] Agent has repeatable workflow steps.
- [ ] Agent has output formats.
- [ ] Agent has guardrails.
- [ ] Agent uses synthetic examples.
- [ ] Agent avoids secrets/private data.
- [ ] Agent avoids unsupported claims.

## Metadata Review

Check the metadata block.

Required fields:

- [ ] `agent_id`
- [ ] `name`
- [ ] `slug`
- [ ] `status`
- [ ] `visibility`
- [ ] `category`
- [ ] `version`
- [ ] `owner`
- [ ] `last_reviewed`

Example:

```yaml
agent_id: funding-readiness-assistant
name: Funding Readiness Assistant
slug: funding-readiness-assistant
status: draft
visibility: public-safe
category: funding-ops
version: 0.1.0
owner: repo-maintainer
last_reviewed: null
```

## Naming Review

Confirm:

- [ ] File path uses lowercase kebab-case.
- [ ] Slug matches file name.
- [ ] Agent name is clear and user-facing.
- [ ] Category is recognized.
- [ ] Tags are lowercase kebab-case if used.
- [ ] No vague names like `assistant`, `tool`, `misc`, or `final`.

Good:

```text
agents/static-site-page-generator.md
```

Bad:

```text
agents/Agent Final.md
```

## Purpose Review

The purpose should answer:

- [ ] What does this agent do?
- [ ] Why does it exist?
- [ ] What outcome does it support?
- [ ] What type of work does it standardize?

Request changes if the purpose is:

- vague
- too broad
- overly salesy
- dependent on hidden context
- missing the core job

## Audience Review

Check:

- [ ] Audience is specific.
- [ ] User/operator role is clear.
- [ ] Skill level assumptions are reasonable.
- [ ] Internal vs public user boundary is clear.

Good audiences:

```text
repo maintainers
content operators
funding advisors
Custom GPT builders
static-site builders
Jules/Codex operators
```

Weak audiences:

```text
everyone
businesses
users
people
```

## Primary Job Review

The agent should have one primary job.

Good:

```text
Generate public-safe static landing page files for a repo using approved copy, CTA links, and repo conventions.
```

Too broad:

```text
Build websites, write copy, manage leads, update Notion, create images, do SEO, and run funding workflows.
```

Checklist:

- [ ] Primary job fits in one sentence.
- [ ] Job is reusable.
- [ ] Job is not too broad.
- [ ] Job does not overlap confusingly with unrelated agents.

## Problem Fit Review

Confirm the agent solves real repeated problems:

- [ ] Repeated workflow exists.
- [ ] Agent saves review time.
- [ ] Agent output is reusable.
- [ ] Agent does not duplicate an existing agent unnecessarily.
- [ ] Agent has clear success criteria.

## Input Review

Required inputs should be listed clearly.

Check:

- [ ] Required inputs are named.
- [ ] Optional inputs are separated.
- [ ] Missing-input behavior is defined.
- [ ] Input privacy classification is clear if relevant.
- [ ] Agent does not require private data unnecessarily.

Good:

```text
- target audience
- offer or topic
- CTA URL
- repo path
- desired output format
```

Bad:

```text
- info
- stuff
- details
```

## Source Material Review

Check:

- [ ] Source files are listed where relevant.
- [ ] Source visibility is labeled.
- [ ] Public-safe/internal-only boundaries are clear.
- [ ] Agent does not expose private source material.
- [ ] Agent does not invent sources.

Visibility values:

```text
public-safe
internal-only
mixed
private
needs-review
```

## Workflow Review

The workflow should be repeatable.

Check:

- [ ] Steps are ordered.
- [ ] Steps are specific.
- [ ] Validation is included.
- [ ] Safety review is included.
- [ ] Human review triggers are included.
- [ ] Final output behavior is clear.

Request changes if workflow:

- skips input validation
- skips safety review
- depends on hidden knowledge
- requires tools without explicit user approval
- encourages future-batch work

## Output Review

Check:

- [ ] Output formats are listed.
- [ ] Preferred output format is clear.
- [ ] Structured output is defined where needed.
- [ ] JSON output references schemas where relevant.
- [ ] Markdown output is copy-ready where relevant.
- [ ] Tool/action outputs are not claimed unless actually performed.

## Related Asset Review

Confirm links or slugs for:

- [ ] related skills
- [ ] related knowledge bases
- [ ] related templates
- [ ] related schemas
- [ ] related prompt chains
- [ ] related platform packs

Request changes if the agent references missing files as if they exist.

Acceptable:

```text
related_schemas: []
```

Acceptable if planned:

```text
related_schemas:
- schemas/agent.schema.json — planned
```

Not acceptable:

```text
related_schemas:
- schemas/agent.schema.json
```

when the file does not exist and is not marked planned.

## Tool Use Review

If the agent uses tools or integrations, check:

- [ ] Tool use is clearly scoped.
- [ ] External writes require explicit user approval.
- [ ] Agent does not claim background work.
- [ ] Agent does not merge PRs without approval.
- [ ] Agent does not deploy without approval.
- [ ] Agent does not send emails/messages without approval.
- [ ] Agent does not update Notion/GitHub/Vercel unless requested.

## Guardrails Review

Agent guardrails should prohibit:

- [ ] invented facts
- [ ] invented files
- [ ] invented URLs
- [ ] invented citations
- [ ] fake validation results
- [ ] secrets
- [ ] private data
- [ ] backend provider bypass paths
- [ ] fake testimonials
- [ ] unsupported outcome claims
- [ ] unauthorized external writes
- [ ] unauthorized deployment/merge actions

## Public-Safe Language Review

Reject or revise language that says:

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

Prefer:

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

## Privacy Review

Confirm the spec does not include:

- [ ] API keys
- [ ] access tokens
- [ ] OAuth secrets
- [ ] webhook secrets
- [ ] `.env` contents
- [ ] private keys
- [ ] private customer data
- [ ] borrower/client records
- [ ] bank statements
- [ ] tax records
- [ ] credit reports
- [ ] IDs or sensitive documents
- [ ] private admin/editor URLs
- [ ] backend provider bypass paths

## Example Review

Examples should be synthetic.

Good:

```text
Example Owner
Example Services LLC
owner@example.com
```

Bad:

```text
real customer name
real borrower email
real CRM row
real private document link
```

Checklist:

- [ ] Examples are synthetic.
- [ ] Examples are realistic enough to be useful.
- [ ] Examples do not imply guaranteed outcomes.
- [ ] Examples do not expose private source material.

## High-Stakes Domain Review

If the agent touches funding, finance, credit, legal, tax, medical, investment, or compliance-sensitive topics:

- [ ] Includes educational framing.
- [ ] Avoids final advice.
- [ ] Avoids approval/outcome promises.
- [ ] Requires human review.
- [ ] Notes that terms/outcomes vary where relevant.
- [ ] Avoids credit repair framing unless specifically reviewed.
- [ ] Avoids backend/provider bypass details.

## Platform Packaging Review

If the agent is intended for a platform:

- [ ] Platform is named.
- [ ] Platform constraints are clear.
- [ ] Public instructions are safe.
- [ ] Knowledge files are public-safe or properly labeled.
- [ ] Tool/action requirements are listed.
- [ ] Data privacy limits are clear.
- [ ] User-facing description is accurate.

Platforms may include:

```text
chatgpt-gpts
claude-projects
gemini-gems
n8n
notion
github
vercel
static-site
```

## Agent Index Review

When updating `agent-index.json`, confirm:

- [ ] Agent record exists if the agent file exists.
- [ ] Agent record does not claim missing files exist.
- [ ] Slug matches file path.
- [ ] Status is accurate.
- [ ] Visibility is accurate.
- [ ] Category is recognized.
- [ ] Related assets are accurate.
- [ ] No duplicate slugs.
- [ ] JSON validates.

Validation command:

```bash
python -m json.tool agent-index.json
```

## Merge Readiness

Agent spec is merge-ready when:

- [ ] Spec is complete.
- [ ] Scope is controlled.
- [ ] Naming is consistent.
- [ ] Metadata is present.
- [ ] Inputs/workflow/outputs are clear.
- [ ] Guardrails are strong.
- [ ] Examples are synthetic.
- [ ] Public-safe language passes.
- [ ] No secrets/private data are present.
- [ ] Related assets are accurate.
- [ ] Agent index is valid if changed.

## Request Changes When

Request changes if:

- purpose is vague
- primary job is too broad
- agent requires hidden/private context
- guardrails are missing
- examples use real data
- unsafe claims are present
- backend bypass paths are present
- related files are invented
- JSON index is invalid
- tool permissions are unclear
- human review triggers are missing

## Suggested Review Comment

```md
Requesting changes before merge.

Required fixes:
- [ ] Clarify the agent’s primary job.
- [ ] Add required inputs.
- [ ] Add human review triggers.
- [ ] Replace non-synthetic examples.
- [ ] Remove or soften unsupported claims.
- [ ] Confirm related skills/templates/schemas exist or mark them planned.

Please keep the repair scoped to this agent spec only.
```

## Approval Comment

```md
Approved.

The agent spec has a clear purpose, defined audience, repeatable workflow, output expectations, guardrails, synthetic examples, and no obvious secrets/private-data/public-claim blockers.

Merge recommendation: proceed.
```

## Done Means

Agent review is complete when:

- the spec is understandable
- the agent has one primary job
- input/output behavior is clear
- workflow is repeatable
- safety guardrails are explicit
- human review triggers are included
- examples are synthetic
- index updates are valid
- the agent can be reused without turning the library into a pile of vibes with a filename
