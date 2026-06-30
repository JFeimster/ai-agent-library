# Prompt Chains

## Purpose

This folder stores reusable prompt chains for the AI Agent Library repo.

A prompt chain is a structured, repeatable instruction sequence used to guide AI assistants through multi-step work without losing scope, skipping validation, or creating future-batch chaos.

Use prompt chains when a single prompt is not enough.

This folder is the control tower for repo-agent execution — the part that keeps Jules, Codex, ChatGPT, and future assistants from wandering into the woods with a machete and a todo list. 🧭

## What Prompt Chains Are For

Prompt chains help with:

- sequential batch generation
- Jules execution queues
- Codex repo tasks
- ChatGPT planning and file drafting
- PR review workflows
- issue creation
- repo audits
- static-site generation
- agent/skill/knowledge-base creation
- schema and index work
- batch handoff creation
- post-merge maintenance

## What Prompt Chains Are Not For

Do not use prompt chains to:

- bypass human review
- auto-merge PRs
- expose secrets
- expose private data
- generate fake citations
- invent repo state
- invent URLs
- create unrelated future work
- override `NEXT_TASK.md`
- change deployment settings without approval
- produce final legal, tax, lending, credit repair, medical, or investment advice

## Folder Contents

```text
prompt-chains/
  README.md
  master-roadmap-prompt.md
  grouped-task-sequence.md
  next-task-update-protocol.md
  jules-execution-prompts.md
  codex-execution-prompts.md
  chatgpt-execution-prompts.md
  review-and-merge-checklist.md
```

## Core Files

### `master-roadmap-prompt.md`

Defines the master prompt pattern for turning a broad repo roadmap into a controlled sequence of scoped tasks.

Use it when planning:

- batches
- roadmap phases
- task queues
- multi-PR buildouts
- repo operating layers

### `grouped-task-sequence.md`

Defines how to group related files into manageable batches.

Use it when turning a long file list into:

- batch groups
- issue sequences
- Jules tasks
- Codex tasks
- PR-ready chunks

### `next-task-update-protocol.md`

Defines how to update `NEXT_TASK.md` after each batch or task.

Use it after:

- a PR is merged
- a batch is completed
- a task queue changes
- scope is revised
- the next approved task needs to be made explicit

## Prompt Chain Principles

Every prompt chain should be:

- scoped
- sequential
- reviewable
- deterministic where possible
- file-path specific
- public-safe
- validation-aware
- stop-rule driven
- easy to reuse
- easy to hand off to another assistant

## Required Sections

Every prompt-chain file should usually include:

- Purpose
- When to use
- Inputs required
- Operating rules
- Prompt template
- Validation requirements
- Stop rules
- Output requirements
- Guardrails
- Done means

## Standard Prompt Chain Shape

Use this structure for new prompt chains:

```md
# [Prompt Chain Name]

## Purpose

[What this prompt chain does.]

## When To Use

Use this when:

- Use case 1
- Use case 2
- Use case 3

## Inputs Required

- Input 1
- Input 2
- Input 3

## Operating Rules

- Rule 1
- Rule 2
- Rule 3

## Prompt Template

```text
[Reusable prompt goes here.]
```

## Validation

- [ ] Check 1
- [ ] Check 2
- [ ] Check 3

## Stop Rule

[When the assistant must stop.]

## Done Means

[What completion looks like.]
```

## Prompt Chain Safety Rules

Prompt chains must not instruct agents to:

- commit secrets
- expose private data
- use real customer records as examples
- invent facts
- invent repo files
- invent source citations
- invent URLs
- make funding, approval, income, credit, ranking, or traffic guarantees
- bypass review
- merge PRs automatically
- change deployment settings without approval
- start future batches without authorization

## Recommended Guardrail Block

Use this block in prompt chains when relevant:

```text
Guardrails:
- Do not commit secrets, tokens, credentials, or .env files.
- Do not include private customer/client/borrower data.
- Use synthetic examples only.
- Do not expose backend provider bypass paths.
- Do not invent files, URLs, citations, validation results, or repo state.
- Do not make guaranteed funding, approval, credit, income, ranking, or traffic claims.
- Do not change deployment behavior unless explicitly requested.
- Do not start future tasks.
- Stop after completing the current approved task.
```

## Sequential Work Rules

For sequential work:

1. Define the full queue.
2. Approve one task or batch at a time.
3. Work only the current task.
4. Create or update the listed files only.
5. Validate the output.
6. Open a PR or provide files.
7. Stop.
8. Move to the next task only after explicit approval.

## Batch Grouping Rules

Group related files by:

- purpose
- folder
- review type
- validation needs
- dependency order
- merge risk

Good batch:

```text
Batch 37 — Prompt Chain Control Layer
prompt-chains/README.md
prompt-chains/master-roadmap-prompt.md
prompt-chains/grouped-task-sequence.md
prompt-chains/next-task-update-protocol.md
```

Bad batch:

```text
Batch 37
README.md
styles.css
agent-index.json
SECURITY.md
random-new-page.html
```

## Batch Size

Recommended batch size:

```text
3–5 files
```

Use smaller batches for:

- workflows
- deployment config
- schema changes
- broad refactors
- high-risk safety changes

Use larger batches only for:

- low-risk documentation
- category README files
- simple example files
- repeated template sets

## Handoff File Pattern

When requested, a batch should include a compiled handoff file:

```text
batch-handoffs/batch-[number]-files.md
```

The handoff file should include:

- batch title
- file list
- full file paths
- full file contents
- validation checklist
- PR notes

## PR Prompt Pattern

When a prompt chain asks a repo agent to open a PR, include:

```text
After making changes:
1. Validate changed files.
2. Commit changes.
3. Open a PR into main.
4. Include summary, files changed, validation, scope control, and known issues.
5. Stop.
```

## Review Prompt Pattern

When a prompt chain asks an assistant to review work, include:

```text
Review for:
- scope match
- expected files
- file completeness
- JSON validity
- Markdown quality
- link/path validity
- static-site behavior if applicable
- public-safe language
- secrets/private data
- deployment impact
- merge readiness
```

## Relationship To `NEXT_TASK.md`

`NEXT_TASK.md` controls the next approved repo task.

Prompt chains may propose future tasks, but they do not approve them.

A repo agent should not begin future work unless:

- `NEXT_TASK.md` lists it, or
- a human explicitly approves it.

## Relationship To Jules

Jules should use prompt chains to execute scoped repo tasks.

Jules must still follow:

```text
JULES.md
NEXT_TASK.md
CONTRIBUTING.md
docs/repo-validation-checklist.md
```

## Relationship To Codex

Codex should use prompt chains to inspect, edit, validate, and summarize repo changes.

Codex must keep changes scoped and should not add frameworks, package managers, or deployment changes unless approved.

## Relationship To ChatGPT

ChatGPT can use prompt chains to:

- draft files
- create issue bodies
- generate batch content
- produce PR review notes
- create repo audit prompts
- create Jules/Codex execution prompts

ChatGPT-generated outputs should still be reviewed before merge.

## Naming Conventions

Prompt-chain files should use lowercase kebab-case.

Good:

```text
master-roadmap-prompt.md
grouped-task-sequence.md
next-task-update-protocol.md
review-and-merge-checklist.md
```

Bad:

```text
Prompt Chain Final.md
new prompt.md
masterPrompt.md
tasks.md
```

## Prompt Chain Review Checklist

Before merging a prompt-chain file:

- [ ] Purpose is clear.
- [ ] Use cases are specific.
- [ ] Inputs are listed.
- [ ] Prompt template is included.
- [ ] Scope rules are included.
- [ ] Validation rules are included.
- [ ] Stop rule is included.
- [ ] Safety guardrails are included.
- [ ] No secrets are included.
- [ ] No private data is included.
- [ ] No unsupported claims are included.
- [ ] No auto-merge instruction is included.
- [ ] No future-batch execution without approval is included.

## Done Means

The prompt-chain layer is healthy when:

- each prompt chain has a clear job
- task sequencing is explicit
- batch grouping is consistent
- `NEXT_TASK.md` updates are controlled
- repo agents know when to stop
- validation is built into execution
- future assistants can run the repo without turning it into a procedural spaghetti cannon
