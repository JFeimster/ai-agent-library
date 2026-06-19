# Next Task Update Protocol

## Purpose

This protocol defines how to update `NEXT_TASK.md` after completing a task or batch.

`NEXT_TASK.md` is the repo’s execution pointer. It tells Jules, Codex, ChatGPT, and human operators what work is currently approved.

Without this file, the repo queue turns into “just one more thing” soup. With it, work stays scoped, sequential, and reviewable. 🍜

## Core Rule

Only one next task should be approved at a time.

`NEXT_TASK.md` should point to the next approved batch or issue — not the whole roadmap.

## When To Use

Use this protocol after:

- a batch is generated
- a batch PR is opened
- a batch PR is merged
- the user approves the next batch
- an issue is selected for Jules
- a task queue changes
- a previous next task is no longer valid
- a PR is closed and replaced with a new task
- the repo enters audit or launch-readiness mode

## When Not To Use

Do not update `NEXT_TASK.md`:

- before a task is actually approved
- just because a future batch exists
- during unrelated file edits
- inside a PR that is not about task sequencing unless explicitly approved
- to sneak in extra scope
- to approve several future tasks at once
- after a failed or abandoned PR without human direction

## Required Inputs

Before updating `NEXT_TASK.md`, know:

```text
Current completed task:
Current PR status:
Next approved task:
Target branch:
Base branch:
Files to create/update:
Objective:
Scope restrictions:
Validation requirements:
Out-of-scope items:
Done means:
```

## Status Values

Use one of these status values:

```text
Queued
In Progress
PR Open
Blocked
Needs Review
Merged
Paused
Replaced
Completed
```

Recommended usage:

- `Queued` — next task is approved but not started.
- `In Progress` — a repo agent is actively working.
- `PR Open` — task PR exists and is waiting for review/merge.
- `Blocked` — task cannot proceed without input or repair.
- `Needs Review` — output exists but needs human review.
- `Merged` — task PR merged; update to next task.
- `Paused` — queue intentionally stopped.
- `Replaced` — task was superseded.
- `Completed` — task completed outside PR flow.

## File Update Rules

When updating `NEXT_TASK.md`:

- keep it focused on one task
- list exact file paths
- define objective clearly
- include scope restrictions
- include validation requirements
- include PR requirements if relevant
- include out-of-scope items
- include done means
- do not include unrelated roadmap commentary
- do not list several future batches as approved

## Standard `NEXT_TASK.md` Template

Use this template:

```md
# Next Task

## Purpose

This file tells Jules, Codex, ChatGPT, and human repo operators what the next approved task is.

Only the task listed here is approved for execution.

Do not start future tasks unless this file is updated or the user explicitly approves the next batch.

## Current Approved Task

```text
[Batch Number] — [Task Title]
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
[branch-name]
```

## Base Branch

```text
main
```

## Files To Create Or Update

```text
[file]
[file]
[file]
```

## Objective

[What this task should accomplish.]

## Required File Purposes

### `[file]`

Should explain:

- Requirement 1
- Requirement 2
- Requirement 3

## Scope Rules

Jules may only create or update:

```text
[file]
[file]
[file]
```

Do not change:

```text
[file or folder to avoid]
[file or folder to avoid]
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
- [ ] JSON validates if changed
- [ ] YAML reviewed if changed
- [ ] No secrets included
- [ ] No private data included
- [ ] No unsupported claims included
- [ ] No unrelated files changed
- [ ] Links and paths are repo-relative where possible

## PR Requirements

Open a PR into `main` with:

```text
Title: [PR title]
```

PR body should include:

- summary
- files changed
- validation performed
- scope confirmation
- known issues

## Out Of Scope

Do not include:

- future batch work
- unrelated refactors
- deployment config changes unless listed
- package manager changes
- private data
- secrets

## Done Means

This task is done when:

- listed files exist or are updated
- content is complete and usable
- validation is complete
- PR is opened
- repo agent stops after opening PR
```

## Batch-to-Next-Task Conversion

When moving from one batch to the next, use this pattern.

Completed:

```text
Batch 37 — Prompt Chain Control Layer
```

Next approved:

```text
Batch 38 — Execution Prompts for Repo Agents
```

Update:

```text
Current Approved Task: Batch 38 — Execution Prompts for Repo Agents
Status: Queued
Target Branch: batch-38-execution-prompts
Files:
prompt-chains/jules-execution-prompts.md
prompt-chains/codex-execution-prompts.md
prompt-chains/chatgpt-execution-prompts.md
prompt-chains/review-and-merge-checklist.md
```

## Status Update Patterns

### Mark Task In Progress

Use when Jules/Codex starts work.

```md
## Status

```text
In Progress
```
```

### Mark PR Open

Use when a PR has been opened but not merged.

```md
## Status

```text
PR Open
```

## Pull Request

```text
#[PR number]
```
```

### Mark Blocked

Use when task cannot proceed.

```md
## Status

```text
Blocked
```

## Blocker

```text
[Explain blocker]
```

## Needed To Continue

```text
[Input or repair needed]
```
```

### Mark Replaced

Use when a task is superseded.

```md
## Status

```text
Replaced
```

## Replacement Task

```text
[New task]
```

## Reason

```text
[Reason]
```
```

## Update Prompt For Jules

Use this prompt when asking Jules to update `NEXT_TASK.md` after a merge:

```text
You are working in JFeimster/ai-agent-library.

Update NEXT_TASK.md to point to the next approved task.

Current completed task:
[completed task]

Next approved task:
[next task]

Target branch:
[branch]

Files:
[file]
[file]
[file]

Rules:
- Only update NEXT_TASK.md.
- Do not start the task.
- Do not edit the listed task files.
- Do not modify unrelated files.
- Keep the structure consistent with the existing NEXT_TASK.md.
- Include objective, scope rules, validation, PR requirements, out-of-scope items, and done means.
- Commit the update.
- Open a PR into main.
- Stop.
```

## Update Prompt For ChatGPT

Use this prompt when generating a new `NEXT_TASK.md` manually:

```text
Generate a complete replacement for NEXT_TASK.md.

Next approved task:
[next task]

Repository:
JFeimster/ai-agent-library

Target branch:
[branch]

Files to create/update:
[file]
[file]
[file]

Objective:
[objective]

Constraints:
- Only this task is approved.
- Do not approve future batches.
- Use public-safe language.
- Use synthetic examples only.
- Do not include secrets or private data.
- Include validation and PR requirements.
```

## Update Prompt For Codex

Use this prompt when asking Codex to update the file locally:

```text
Edit only NEXT_TASK.md.

Set the current approved task to:
[next task]

Use target branch:
[branch]

List exactly these files:
[file]
[file]
[file]

Preserve the existing structure.
Do not edit any other files.
Do not start implementing the task.
Run a quick markdown review.
Commit with:
Update NEXT_TASK for [task]
```

## Scope Guardrails

`NEXT_TASK.md` must not:

- approve multiple future batches
- include unrelated roadmap ideas as current scope
- tell agents to merge PRs
- tell agents to deploy automatically
- include real secrets or private data
- include private provider links
- include fake validation results
- reference files as existing if they do not exist unless clearly planned

## Review Checklist

Before merging a `NEXT_TASK.md` update:

- [ ] Current approved task is clear.
- [ ] Status is correct.
- [ ] Repository is correct.
- [ ] Target branch is specific.
- [ ] Base branch is listed.
- [ ] File list is exact.
- [ ] Objective is specific.
- [ ] Scope rules are clear.
- [ ] Files to avoid are listed where helpful.
- [ ] Validation requirements are included.
- [ ] PR requirements are included.
- [ ] Out-of-scope items are included.
- [ ] Done means is clear.
- [ ] No future tasks are accidentally approved.
- [ ] No secrets/private data are included.

## Common Mistakes

Avoid:

```text
Adding the whole roadmap as the approved task.
Updating NEXT_TASK.md and implementing the task in the same PR when not requested.
Leaving the target branch vague.
Listing files that are not part of the next task.
Forgetting validation requirements.
Forgetting stop rules.
Approving deployment changes casually.
```

## Good Example

```md
## Current Approved Task

```text
Batch 38 — Execution Prompts for Repo Agents
```

## Status

```text
Queued
```

## Target Branch

```text
batch-38-execution-prompts
```

## Files To Create Or Update

```text
prompt-chains/jules-execution-prompts.md
prompt-chains/codex-execution-prompts.md
prompt-chains/chatgpt-execution-prompts.md
prompt-chains/review-and-merge-checklist.md
```
```

## Bad Example

```md
## Current Approved Task

Do batches 38 through 50 and whatever else seems useful.
```

Why bad:

- too broad
- not reviewable
- no exact file scope
- encourages future-batch sprawl

## Done Means

`NEXT_TASK.md` is properly updated when:

- it names exactly one approved task
- it lists exact files
- it gives a branch name
- it includes validation
- it includes out-of-scope boundaries
- it tells repo agents when to stop
- future work stays future work
