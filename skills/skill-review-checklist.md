# Skill Review Checklist

## Purpose

Use this checklist to review reusable AI-agent skills before they are merged, indexed, published, or attached to agents.

This checklist applies to:

- `skills/[skill-slug]/SKILL.md`
- skill templates
- skill index records
- platform-specific skill adaptations
- agent-linked capabilities
- workflow skills
- repo operations skills

The goal is to make sure every skill is narrow, procedural, reusable, safe, and not secretly a full agent wearing a fake mustache. 🧪

## Quick Review

Before deeper review, confirm:

- [ ] Skill has a clear name.
- [ ] Skill has a lowercase kebab-case slug.
- [ ] Skill solves one reusable capability.
- [ ] Required inputs are listed.
- [ ] Expected output is defined.
- [ ] Procedure is repeatable.
- [ ] Quality checklist is included.
- [ ] Guardrails are included.
- [ ] Examples are synthetic.
- [ ] No secrets/private data are included.
- [ ] No unsupported claims are included.

## Metadata Review

Check the metadata block.

Required fields:

- [ ] `skill_id`
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
skill_id: static-site-page-builder
name: Static Site Page Builder
slug: static-site-page-builder
status: draft
visibility: public-safe
category: site-ops
version: 0.1.0
owner: repo-maintainer
last_reviewed: null
```

## Naming Review

Confirm:

- [ ] Folder path uses lowercase kebab-case.
- [ ] File path follows `skills/[skill-slug]/SKILL.md`.
- [ ] Slug matches folder name.
- [ ] Skill name is clear and capability-focused.
- [ ] Category is recognized.
- [ ] Tags are lowercase kebab-case if used.
- [ ] No vague names like `helper`, `thing`, `misc`, `new`, or `final`.

Good:

```text
skills/static-site-page-builder/SKILL.md
```

Bad:

```text
skills/New Skill Final.md
```

## Purpose Review

The purpose should answer:

- [ ] What does this skill do?
- [ ] Why does it exist?
- [ ] What repeatable task does it support?
- [ ] Which type of output does it improve?

Request changes if the purpose is:

- vague
- too broad
- agent-like rather than capability-like
- missing the primary capability
- overly promotional
- dependent on hidden context

## Primary Capability Review

The skill should have one primary capability.

Good:

```text
Generate a repo-ready GitHub issue body from a scoped task description.
```

Too broad:

```text
Manage the whole repo, generate files, review PRs, deploy sites, and update Notion.
```

Checklist:

- [ ] Capability fits in one sentence.
- [ ] Capability is reusable.
- [ ] Capability is narrower than an agent.
- [ ] Capability is not duplicated by an existing skill.
- [ ] Capability can be tested through example inputs and outputs.

## Scope Review

Confirm the skill is not trying to do too much.

Good skill scope:

```text
Review public-facing copy for unsafe claims and rewrite it with safer language.
```

Too broad:

```text
Run all compliance, legal, funding, marketing, and deployment review.
```

Request changes when:

- the skill contains multiple unrelated jobs
- it replaces human review for high-stakes decisions
- it includes platform deployment actions without approval
- it overlaps heavily with an agent spec

## Input Review

Required inputs should be clear and specific.

Check:

- [ ] Required inputs are listed.
- [ ] Optional inputs are separated.
- [ ] Missing-input behavior is clear.
- [ ] Input quality requirements are defined.
- [ ] Private/internal-only inputs are not required unless necessary.
- [ ] Inputs do not include secrets or real customer data.

Good:

```text
- target file path
- source content
- intended audience
- output format
- safety constraints
```

Bad:

```text
- info
- stuff
- whatever
```

## Output Review

Check:

- [ ] Output type is defined.
- [ ] Preferred output format is named.
- [ ] Output quality requirements are included.
- [ ] Structured output is valid where applicable.
- [ ] JSON/YAML outputs reference validation expectations.
- [ ] Output does not rely on hidden context.

Good output definition:

```text
A complete Markdown GitHub issue body with objective, file list, scope, validation, out-of-scope items, and done means.
```

Weak output definition:

```text
A good answer.
```

## Procedure Review

The procedure should be repeatable.

Check:

- [ ] Steps are ordered.
- [ ] Steps are specific.
- [ ] Input validation is included.
- [ ] Output generation is included.
- [ ] Safety review is included.
- [ ] Final quality review is included.
- [ ] Stop or escalation behavior is included where relevant.

Request changes if the procedure:

- skips validation
- skips safety review
- depends on hidden knowledge
- encourages broad future work
- instructs unauthorized external writes
- is too vague to follow

## Quality Checklist Review

A good skill includes a checklist tailored to its output.

Check:

- [ ] Checklist matches the skill’s output.
- [ ] Checklist catches common mistakes.
- [ ] Checklist includes safety/privacy review.
- [ ] Checklist includes formatting or validation requirements.
- [ ] Checklist includes human review triggers where relevant.

## Related Asset Review

Confirm links or slugs for:

- [ ] related agents
- [ ] related knowledge bases
- [ ] related templates
- [ ] related schemas
- [ ] related prompt chains

Request changes if the skill references missing files as if they already exist.

Acceptable:

```text
related_schemas: []
```

Acceptable if planned:

```text
schemas/skill.schema.json — planned
```

Not acceptable:

```text
schemas/skill.schema.json
```

when the file does not exist and is not marked planned.

## Guardrails Review

Skill guardrails should prohibit:

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
- [ ] future-batch execution without approval

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

Confirm the skill does not include:

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

Examples should be synthetic and useful.

Good:

```text
Example Owner
Example Services LLC
owner@example.com
example.com
```

Bad:

```text
real customer name
real borrower email
real CRM row
real private document link
live API key
```

Checklist:

- [ ] Examples are synthetic.
- [ ] Examples are realistic enough to be useful.
- [ ] Examples do not imply guaranteed outcomes.
- [ ] Examples do not expose private source material.
- [ ] Examples demonstrate the skill’s actual capability.

## High-Stakes Domain Review

If the skill touches funding, finance, credit, legal, tax, medical, investment, or compliance-sensitive topics:

- [ ] Educational framing is included.
- [ ] Final advice is avoided.
- [ ] Approval/outcome promises are avoided.
- [ ] Human review is required or recommended.
- [ ] Terms/outcomes vary language is included where relevant.
- [ ] Credit repair framing is avoided unless specifically reviewed.
- [ ] Backend/provider bypass details are excluded.

## Tool Use Review

If the skill references tools or integrations, check:

- [ ] Tool use is clearly scoped.
- [ ] External writes require explicit user approval.
- [ ] Skill does not claim background work.
- [ ] Skill does not merge PRs without approval.
- [ ] Skill does not deploy without approval.
- [ ] Skill does not send emails/messages without approval.
- [ ] Skill does not update Notion/GitHub/Vercel unless requested.

## Structured Output Review

If the skill outputs JSON:

- [ ] JSON shape is described.
- [ ] Required fields are listed.
- [ ] Example JSON is valid.
- [ ] No comments or trailing commas.
- [ ] Synthetic values are used.
- [ ] Related schema is referenced if available.

If the skill outputs YAML:

- [ ] YAML shape is described.
- [ ] Indentation is plausible.
- [ ] Workflow permissions are safe if GitHub Actions are involved.
- [ ] No secrets are required unless explicitly approved.

If the skill outputs Markdown:

- [ ] Headings are clear.
- [ ] Code fences are closed.
- [ ] Links are repo-relative where practical.
- [ ] No placeholder junk remains.

## Skill Index Review

When updating `skills/skill-index.json`, confirm:

- [ ] Skill record exists if the skill file exists.
- [ ] Skill record does not claim missing files exist.
- [ ] Slug matches folder path.
- [ ] Status is accurate.
- [ ] Visibility is accurate.
- [ ] Category is recognized.
- [ ] Related assets are accurate.
- [ ] No duplicate slugs.
- [ ] JSON validates.

Validation command:

```bash
python -m json.tool skills/skill-index.json
```

## Merge Readiness

A skill is merge-ready when:

- [ ] Skill is complete.
- [ ] Scope is narrow.
- [ ] Naming is consistent.
- [ ] Metadata is present.
- [ ] Inputs/procedure/output are clear.
- [ ] Guardrails are strong.
- [ ] Examples are synthetic.
- [ ] Public-safe language passes.
- [ ] No secrets/private data are present.
- [ ] Related assets are accurate.
- [ ] Skill index is valid if changed.

## Request Changes When

Request changes if:

- purpose is vague
- skill is too broad
- skill duplicates an agent
- inputs are missing
- output is unclear
- procedure is not repeatable
- guardrails are missing
- examples use real data
- unsafe claims are present
- backend bypass paths are present
- related files are invented
- JSON index is invalid
- human review triggers are missing

## Suggested Review Comment

```md
Requesting changes before merge.

Required fixes:
- [ ] Narrow the skill to one primary capability.
- [ ] Add required inputs.
- [ ] Define the expected output format.
- [ ] Make the procedure repeatable.
- [ ] Add human review triggers.
- [ ] Replace non-synthetic examples.
- [ ] Remove or soften unsupported claims.
- [ ] Confirm related agents/templates/schemas exist or mark them planned.

Please keep the repair scoped to this skill only.
```

## Approval Comment

```md
Approved.

The skill has a clear primary capability, defined inputs, repeatable procedure, output expectations, guardrails, synthetic examples, and no obvious secrets/private-data/public-claim blockers.

Merge recommendation: proceed.
```

## Done Means

Skill review is complete when:

- the skill is understandable
- the skill has one primary capability
- input/output behavior is clear
- procedure is repeatable
- safety guardrails are explicit
- human review triggers are included
- examples are synthetic
- index updates are valid
- the skill can be reused by agents without turning the repo into a basket of mystery instructions
