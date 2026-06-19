# Jules Instructions

## Purpose

This file defines how Jules should work inside the AI Agent Library repository.

Jules should operate like a careful repo contributor, not an overcaffeinated intern with push access. Work should be scoped, reviewable, safe, and easy to merge.

## Primary Rule

Work only the task approved in:

```text
NEXT_TASK.md
```

Do not start future batches.
Do not bundle unrelated work.
Do not make drive-by refactors.
Do not change deployment behavior unless the approved task explicitly requires it.
Do not merge your own PR.

## Required Reading Before Work

Before making changes, read:

```text
README.md
NEXT_TASK.md
CONTRIBUTING.md
docs/repo-validation-checklist.md
docs/github-workflows.md
```

If the task touches a specific asset type, also read the related folder README or template:

```text
agents/README.md
skills/README.md
knowledge-base/README.md
templates/README.md
platforms/README.md
schemas/README.md
registry/README.md
```

If a referenced file does not exist yet, note that in the PR summary instead of inventing unrelated files.

## Work Model

Jules should follow this workflow:

1. Read the approved task in `NEXT_TASK.md`.
2. Confirm the exact files to create or update.
3. Create a scoped branch.
4. Make only the approved changes.
5. Avoid unrelated cleanup.
6. Validate changed files.
7. Commit the work.
8. Open a pull request into `main`.
9. Stop.

## Branch Naming

Use the branch name listed in `NEXT_TASK.md`.

If no branch is listed, use:

```text
batch-[number]-[short-slug]
```

or:

```text
docs/[short-slug]
feature/[short-slug]
fix/[short-slug]
chore/[short-slug]
```

Examples:

```text
batch-35-core-repo-operating-files
batch-36-trust-safety-naming
docs/repo-validation-checklist
feature/agent-index-layer
fix/link-check-workflow
```

## Scope Rules

Jules may modify only files listed in the approved task.

Allowed:

```text
Task lists 4 files.
Jules creates/updates those 4 files.
Jules may also create a required batch handoff file if the task explicitly requires it.
```

Not allowed:

```text
Task lists 4 files.
Jules also rewrites README, updates CSS, changes Vercel config, creates future batch files, and reorganizes folders.
```

## Batch Handoff Rule

When a batch task requires a compiled handoff file, create:

```text
batch-handoffs/batch-[number]-files.md
```

The handoff file must include:

- Batch title
- File list
- Each file path as a heading
- Full contents of each file inside fenced code blocks
- Validation checklist
- PR notes

Do not create handoff files unless the approved task asks for them.

## File Creation Rules

When creating files:

- Use repo-relative paths.
- Use lowercase kebab-case for slugs.
- Keep Markdown clear and structured.
- Keep JSON valid.
- Keep YAML valid.
- Use synthetic examples only.
- Include guardrails where relevant.
- Include review checklists where relevant.
- Keep content useful and complete, not stubbed.

## File Update Rules

When updating files:

- Preserve existing useful content.
- Avoid deleting sections unless the task requires it.
- Avoid wholesale rewrites when a targeted edit is enough.
- Maintain existing naming conventions.
- Keep links repo-relative when possible.
- Update indexes only when explicitly required.

## Static Site Rules

If working on static site files:

- Use plain HTML/CSS/JS.
- Do not add React.
- Do not add Next.js.
- Do not add npm.
- Do not add package managers.
- Do not add a build step.
- Reuse existing CSS and JS patterns.
- Keep asset paths local and reviewable.
- Avoid deployment changes unless approved.

## GitHub Actions Rules

If working on `.github/workflows/`:

- Keep workflows dependency-light.
- Prefer Python standard library for checks.
- Use minimal permissions.
- Do not require secrets.
- Do not auto-commit from workflows.
- Do not add external services unless explicitly approved.
- Keep error messages readable.

Recommended permissions:

```yaml
permissions:
  contents: read
```

## JSON Rules

When editing JSON:

- Use two-space indentation.
- Keep valid JSON.
- Use lowercase kebab-case slugs.
- Avoid duplicate slugs.
- Use `null` for unknown values when appropriate.
- Do not invent URLs.
- Do not reference files as existing unless they exist.
- Mark planned files clearly if needed.

Validate:

```bash
python -m json.tool path/to/file.json
```

## Markdown Rules

Markdown files should usually include:

- Purpose
- When to use
- How to use
- Rules or procedure
- Guardrails
- Related assets
- Review checklist
- Done means

For `SKILL.md` files, include:

- Purpose
- When to use
- Inputs
- Procedure
- Outputs
- Quality checklist
- Guardrails
- Examples

For agent specs, include:

- Purpose
- Audience
- Inputs
- Workflow
- Outputs
- Guardrails
- Examples
- Related skills
- Related knowledge bases

## Safety Rules

Do not commit:

- `.env`
- `.env.local`
- API keys
- access tokens
- OAuth secrets
- webhook secrets
- private keys
- credential files
- private customer data
- borrower/client records
- bank statements
- tax records
- credit reports
- IDs or sensitive documents
- backend provider bypass paths
- private admin/editor links
- hidden partner routing logic in public files

## Public-Safe Language Rules

Avoid:

- approval promises
- funding outcome promises
- income outcome promises
- ranking or traffic promises
- credit repair promises
- bypass language
- fake testimonials
- unverifiable social proof

Use:

- educational
- planning
- readiness
- compare options
- possible fit
- human review required
- terms vary
- review with a qualified professional where appropriate

## Affiliate and Referral Rules

If a file includes affiliate, referral, partner, sponsored, or funding application links:

- Include a clear disclosure.
- Do not promise outcomes.
- Do not hide compensation relationships.
- Do not imply neutral ranking if compensation affects placement.
- Do not invent partner relationships.

Example disclosure:

```text
Disclosure: Some links may be affiliate or referral links. We may earn compensation if users choose them. Terms, pricing, approval, and outcomes vary.
```

## Validation Before PR

Run relevant checks where possible.

### Markdown

Review changed Markdown manually.

### JSON

```bash
python -m json.tool path/to/file.json
```

### Static Site

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

### GitHub Actions

Review YAML syntax and indentation.

## PR Requirements

Every PR should include:

- Linked issue or batch
- Summary
- Files changed
- Validation performed
- Scope confirmation
- Safety confirmation
- Known issues
- Follow-up tasks if any

Use this PR body pattern:

```md
# PR Summary

## Linked Issue or Batch

[Issue or batch]

## What Changed

- Change 1
- Change 2
- Change 3

## Files Changed

```text
[path]
[path]
[path]
```

## Validation

- [ ] Markdown reviewed
- [ ] JSON validates if changed
- [ ] YAML reviewed if changed
- [ ] Static site loads if changed
- [ ] No secrets
- [ ] No private data
- [ ] No unsupported claims

## Scope Control

- [ ] Only approved files changed.
- [ ] No unrelated refactors.
- [ ] No future-batch work.
- [ ] No deployment changes unless approved.

## Known Issues

[None or notes]
```

## Stop Rule

After opening the PR, stop.

Do not continue to the next task until:

- the PR is reviewed and merged, or
- the user explicitly approves continuing.

## What Jules Should Report Back

After finishing, report:

```text
Batch/Issue:
Branch:
Commit SHA:
PR URL:
Files changed:
Validation performed:
Known issues:
Recommended next task:
```

## Do Not Do

Do not:

- Merge PRs.
- Force-push without reason.
- Rewrite unrelated files.
- Add package managers.
- Add frameworks.
- Change Vercel settings unless requested.
- Commit secrets.
- Commit private data.
- Use real customer examples.
- Start future batches.
- Invent missing repo facts.
- Invent URLs.
- Remove safety language.

## Done Means

A Jules task is done when:

- Approved files are created or updated.
- Content is complete and useful.
- Scope is controlled.
- Relevant validation is complete.
- PR is open.
- PR body clearly explains work.
- Jules stops.
````

---

## `NEXT_TASK.md`

````md id="next-task-md"
# Next Task

## Purpose

This file tells Jules, Codex, ChatGPT, and human repo operators what the next approved task is.

Only the task listed here is approved for execution.

Do not start future tasks unless this file is updated or the user explicitly approves the next batch.

## Current Approved Task

```text
Batch 36 — Trust, Safety, and Naming Docs
```

## Status

```text
Queued
```

## Repository

```text
JFeimster/ai-agent-library
```

## Target Branch

```text
batch-36-trust-safety-naming
```

## Base Branch

```text
main
```

## Files To Create Or Update

```text
SECURITY.md
CODE_OF_CONDUCT.md
docs/privacy-and-sensitive-data-rules.md
docs/naming-conventions.md
```

## Objective

Create the trust, safety, and naming documentation layer for the AI Agent Library repo.

This batch should define:

- security reporting expectations
- sensitive-data rules
- repo privacy boundaries
- public-safe content rules
- naming and slug conventions
- path conventions
- file/folder naming standards
- examples of good and bad naming patterns

## Required File Purposes

### `SECURITY.md`

Should explain:

- how to report security issues
- what counts as sensitive information
- what not to commit
- how to handle accidental exposure
- supported security expectations for this repo
- public-safe limitations

### `CODE_OF_CONDUCT.md`

Should explain:

- contributor expectations
- respectful collaboration rules
- unacceptable behavior
- review/maintainer standards
- issue/PR communication expectations
- enforcement approach

### `docs/privacy-and-sensitive-data-rules.md`

Should explain:

- private data that must not be committed
- synthetic example requirements
- public-safe vs internal-only boundaries
- funding/finance/credit content cautions
- affiliate/referral disclosure requirements
- backend provider bypass path restrictions
- review checklist

### `docs/naming-conventions.md`

Should explain:

- lowercase kebab-case slugs
- folder naming
- file naming
- branch naming
- commit message naming
- JSON key naming
- asset path naming
- examples of good and bad names

## Scope Rules

Jules may only create or update:

```text
SECURITY.md
CODE_OF_CONDUCT.md
docs/privacy-and-sensitive-data-rules.md
docs/naming-conventions.md
```

Do not change:

```text
README.md
JULES.md
NEXT_TASK.md
.github/workflows/
.github/ISSUE_TEMPLATE/
agent-index.json
skills/skill-index.json
templates/template-index.json
site-data/
```

unless explicitly required by the user in a separate instruction.

## Content Requirements

Each Markdown file should include:

- Purpose
- Scope
- Rules
- Examples
- Review checklist
- Done means

The files should be complete and usable, not placeholders.

## Public-Safe Language Requirements

Use safe, qualified language.

Avoid:

```text
approval promises
funding outcome promises
income outcome promises
traffic or ranking promises
credit repair promises
bypass language
secret-provider-route language
```

Use:

```text
educational
planning
readiness
review required
possible fit
compare options
terms vary
human review recommended
```

## Security Rules

Do not include:

- API keys
- access tokens
- OAuth secrets
- webhook secrets
- `.env` file contents
- private keys
- private customer data
- borrower/client records
- bank statements
- tax records
- credit reports
- IDs or sensitive documents
- backend provider bypass paths
- private admin/editor URLs
- fake testimonials
- unsupported outcome promises

## Validation Required

Before PR:

- [ ] Markdown reviewed
- [ ] No secrets included
- [ ] No private data included
- [ ] No unsupported claims included
- [ ] No unrelated files changed
- [ ] Links and paths are repo-relative where possible

## PR Requirements

Open a PR into `main` with:

```text
Title: Batch 36 — Add trust, safety, and naming docs
```

PR body should include:

- summary
- files changed
- validation performed
- scope confirmation
- known issues

## Out Of Scope

Do not include:

- new agents
- new skills
- new knowledge bases
- new platform packs
- new schemas
- static-site redesigns
- workflow changes
- deployment config changes
- package manager changes
- future batch work

## Done Means

Batch 36 is done when:

- all four files exist
- each file is complete and usable
- public-safe and private-data boundaries are clear
- naming conventions are documented
- security reporting expectations are documented
- PR is opened
- Jules stops after opening the PR
