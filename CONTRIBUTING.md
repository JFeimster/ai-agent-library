# Contributing

## Purpose

This document explains how to contribute to AI Agent Library.

The goal is to keep contributions useful, scoped, safe, and easy to review. This repo is a library of reusable AI-agent building blocks, so consistency matters. Every new file should make the next agent, contributor, or operator faster — not leave them with a puzzle box made of markdown.

## Who Can Contribute

Contributions may come from:

- repo maintainers
- human collaborators
- ChatGPT-generated drafts
- Jules-generated PRs
- Codex-generated PRs
- other AI repo assistants
- internal operators
- future community contributors

All contributions must be reviewed before merge.

## Contribution Types

Common contribution types include:

- agent specs
- skills
- knowledge-base files
- platform packs
- templates
- prompt chains
- schemas
- example packs
- registry records
- site data
- static-site pages
- GitHub workflows
- issue/PR templates
- docs and checklists
- bug fixes
- repo maintenance

## Operating Model

Use this workflow:

1. Create or select one issue.
2. Confirm the exact scope.
3. Create a branch.
4. Change only approved files.
5. Validate changes.
6. Open a PR into `main`.
7. Review the PR.
8. Merge only after approval.
9. Create follow-up issues for future work.

Do not bundle unrelated work.

## Before You Start

Read:

```text
README.md
NEXT_TASK.md
JULES.md
docs/repo-validation-checklist.md
docs/github-workflows.md
```

Then check whether the relevant folder has its own README or template.

Examples:

```text
agents/README.md
skills/README.md
knowledge-base/README.md
templates/README.md
platforms/README.md
schemas/README.md
```

## Branch Naming

Use lowercase kebab-case.

Recommended patterns:

```text
feature/[short-slug]
docs/[short-slug]
fix/[short-slug]
chore/[short-slug]
batch-[number]-[short-slug]
repair/[pr-number]-[short-slug]
```

Examples:

```text
feature/agent-index-layer
docs/naming-conventions
fix/template-index-json
chore/update-next-task
batch-36-trust-safety-naming
repair/pr18-static-site-links
```

## Commit Messages

Use clear imperative commit messages.

Good:

```text
Add trust and safety docs
Add skill review checklist
Fix template index JSON
Update NEXT_TASK for Batch 36
```

Avoid:

```text
stuff
updates
misc
final final
oops
changes
```

## Pull Request Requirements

Every PR should include:

- linked issue or batch
- summary of changes
- files changed
- validation performed
- safety review
- scope control confirmation
- known issues
- follow-up tasks if needed

Use the repo PR template when available:

```text
.github/PULL_REQUEST_TEMPLATE.md
```

## Scope Rules

A PR should do one job.

Allowed:

```text
Issue asks for four docs.
PR creates those four docs.
```

Not allowed:

```text
Issue asks for four docs.
PR also redesigns CSS, edits Vercel config, rewrites README, changes workflows, and creates future batch files.
```

Create follow-up issues for related work.

## File Path Rules

Use predictable paths.

Agent specs:

```text
agents/[agent-slug].md
```

Skills:

```text
skills/[skill-slug]/SKILL.md
```

Knowledge bases:

```text
knowledge-base/[topic]/README.md
```

Platform packs:

```text
templates/platform-packs/[platform-pack].md
```

Prompt chains:

```text
prompt-chains/[prompt-chain].md
```

Schemas:

```text
schemas/[schema-name].schema.json
```

Examples:

```text
examples/[category]/README.md
```

Site data:

```text
site-data/[data-file].json
```

## Naming Rules

Use lowercase kebab-case for:

- slugs
- folders
- Markdown filenames
- JSON filenames
- branch names
- asset identifiers

Good:

```text
partner-resource-card-builder
funding-readiness-assistant
chatgpt-gpt-package
static-site-page-builder
```

Avoid:

```text
Partner Resource Card Builder
Jason Stuff
New File
Final Final
skillThing
```

## Markdown Standards

Markdown files should be complete and useful.

Most reusable docs should include:

- Purpose
- When to use
- Inputs or requirements
- Procedure or rules
- Examples
- Guardrails
- Quality checklist
- Related assets
- Done means

Do not create thin placeholder files unless the task explicitly asks for a scaffold.

## JSON Standards

JSON files must:

- parse successfully
- use two-space indentation
- use lowercase kebab-case slugs
- avoid duplicate slugs
- avoid invented URLs
- avoid private data
- use `null` for unknown values where appropriate
- reference real files unless clearly marked as planned

Validate:

```bash
python -m json.tool path/to/file.json
```

## YAML Standards

GitHub Actions YAML should:

- use clear workflow names
- use minimal permissions
- avoid secrets
- avoid unnecessary external dependencies
- avoid auto-committing files
- use readable failure messages
- keep scope narrow

Recommended permission pattern:

```yaml
permissions:
  contents: read
```

## Static Site Standards

If contributing static-site files:

- Use plain HTML/CSS/JS.
- Do not add React.
- Do not add Next.js.
- Do not add npm.
- Do not add package managers.
- Do not add a build step.
- Keep paths local.
- Keep data fetches simple.
- Validate locally.

Local preview:

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

## Examples Standards

Examples must be synthetic.

Good:

```text
Example Owner
owner@example.com
Example Services LLC
```

Bad:

```text
real customer name
real email address
real bank statement link
real CRM export row
```

Do not commit real private data.

## Safety Rules

Do not contribute:

- API keys
- access tokens
- OAuth secrets
- webhook secrets
- `.env` files
- private keys
- credential files
- private customer/client/borrower data
- bank statements
- tax records
- credit reports
- IDs or sensitive documents
- backend provider bypass paths
- hidden admin/editor links
- fake testimonials
- unverifiable social proof
- unsupported outcome promises

## Public-Safe Language

Use cautious, review-friendly language.

Use:

```text
educational
planning
readiness
compare options
possible fit
terms vary
review required
human review recommended
```

Avoid:

```text
approval outcome promises
funding outcome promises
income outcome promises
credit repair promises
traffic or ranking promises
bypass language
secret-provider-route language
```

## Affiliate and Referral Content

If a contribution includes affiliate, referral, partner, sponsored, or funding-related CTAs:

- disclose the relationship
- avoid outcome promises
- avoid fake neutrality
- explain that terms vary
- preserve user-provided URLs
- do not invent partner relationships

Example disclosure:

```text
Disclosure: Some links may be affiliate or referral links. We may earn compensation if users choose them. Terms, pricing, approval, and outcomes vary.
```

## AI-Generated Contributions

AI-generated contributions are welcome when reviewed.

AI-generated work must:

- be scoped
- be complete
- be checked for hallucinated facts
- avoid invented URLs
- avoid fake citations
- avoid private data
- avoid unsupported claims
- include validation notes
- be reviewed before merge

## Jules Contributions

Jules must follow:

```text
JULES.md
NEXT_TASK.md
```

Jules should:

- work one task at a time
- create a scoped branch
- open a PR
- stop after PR creation

## Codex Contributions

Codex should:

- inspect relevant files before editing
- keep changes scoped
- avoid broad rewrites
- validate changed files
- summarize changed files and tests
- avoid adding frameworks or dependencies unless approved

## Review Checklist

Before approving a PR:

- [ ] Linked issue or batch is clear.
- [ ] Scope matches the request.
- [ ] Changed files are expected.
- [ ] No future-batch work is included.
- [ ] No unrelated refactors are included.
- [ ] Markdown is complete.
- [ ] JSON validates if changed.
- [ ] YAML is reviewed if changed.
- [ ] Static site loads if touched.
- [ ] Links are valid.
- [ ] No secrets are included.
- [ ] No private data is included.
- [ ] No unsupported claims are included.
- [ ] Deployment impact is understood.
- [ ] Follow-up tasks are separated.

## Do Not Merge If

Do not merge a PR that:

- includes secrets
- includes private data
- breaks JSON
- breaks static-site loading
- changes deployment behavior accidentally
- includes unrelated refactors
- includes future-batch work
- adds frameworks without approval
- contains public-facing unsupported claims
- deletes important content without explanation

## Creating Follow-Up Issues

Use follow-up issues when related work is useful but outside current scope.

Follow-up issue titles should be specific:

```text
[Feature]: Add platform README for Airtable
[Skill]: Add schema starter builder skill
[Repo Maintenance]: Normalize template index slugs
```

Avoid vague issue titles:

```text
More stuff
Fix things
Next batch maybe
```

## Done Means

A contribution is done when:

- the requested files are complete
- scope is controlled
- validation is complete
- public-safe rules are followed
- PR body explains the work
- reviewer can understand what changed and why
- follow-up work is separated into future issues
