# Grouped Task Sequence

## Purpose

This prompt chain converts a long list of repo work into grouped, sequential tasks.

Use it when the repo has too many files, issues, or ideas to execute safely in one step.

The goal is to create clean task groups that can become:

- GitHub issues
- Jules tasks
- Codex tasks
- ChatGPT batch outputs
- PRs
- batch handoff files

Good grouping prevents giant mystery PRs. Bad grouping creates a repo casserole with JSON, CSS, templates, and deployment config baked into one terrifying dish. 🍲

## When To Use

Use this prompt chain when you have:

- 10+ files to create
- a long roadmap
- a mixed list of docs, schemas, templates, and workflows
- a repo audit with many findings
- a static-site expansion list
- a skill/agent/knowledge-base backlog
- a prompt chain queue
- a sequential Jules execution plan
- a need to split work into PR-sized chunks

## When Not To Use

Do not use this prompt chain when:

- there is only one file to edit
- the next approved task is already scoped
- work must be inspected before grouping
- the task is urgent bug repair and grouping would slow it down
- the user asked for immediate file contents instead of planning

## Inputs Required

Provide:

```text
Repository:
Objective:
Raw task list:
Known folders:
Existing constraints:
Preferred batch size:
High-risk file types:
Dependencies:
Known files to avoid:
Final outcome:
```

## High-Risk File Types

Group these carefully:

```text
.github/workflows/
vercel.json
package.json
schemas/*.json
site-data/*.json
index files
deployment config
security docs
static-site JS
large CSS files
```

High-risk files should usually be in their own focused batch.

## Grouping Principles

Group by:

- folder
- asset type
- validation type
- dependency order
- review owner
- merge risk
- user-facing impact

Avoid grouping by random convenience.

## Good Grouping Examples

### GitHub Templates

```text
.github/ISSUE_TEMPLATE/agent-spec.md
.github/ISSUE_TEMPLATE/skill.md
.github/ISSUE_TEMPLATE/knowledge-base.md
.github/ISSUE_TEMPLATE/platform-pack.md
```

### Core Docs

```text
README.md
JULES.md
NEXT_TASK.md
CONTRIBUTING.md
```

### Prompt Chains

```text
prompt-chains/README.md
prompt-chains/master-roadmap-prompt.md
prompt-chains/grouped-task-sequence.md
prompt-chains/next-task-update-protocol.md
```

### Platform README Files

```text
platforms/README.md
platforms/chatgpt-gpts/README.md
platforms/vercel/README.md
platforms/github/README.md
```

## Bad Grouping Examples

Avoid batches like:

```text
README.md
styles.css
agent-index.json
.github/workflows/no-secrets-safety.yml
platforms/notion/README.md
```

Why this is bad:

- too many validation types
- mixed risk levels
- no shared review context
- hard to diagnose failures
- likely to create scope creep

## Preferred Batch Size

Recommended:

```text
3–5 files per batch
```

Use 1–2 files when:

- editing workflows
- editing deployment config
- repairing broken site behavior
- changing schemas
- modifying large existing files
- fixing merge conflicts

Use 5–8 files only when:

- files are simple category READMEs
- changes are repetitive
- validation risk is low
- no deployment or schema impact exists

## Dependency Sequencing

Order files from foundation to usage.

Recommended order:

1. repo operating docs
2. safety and naming docs
3. prompt-chain rules
4. execution prompts
5. indexes
6. templates
7. asset folders
8. examples
9. site data
10. audit and launch readiness

Do not create indexes before deciding naming conventions.

Do not create public site data before public-safe rules exist.

Do not create execution prompts before stop rules exist.

## Grouped Sequence Prompt Template

Copy and adapt this prompt:

```text
You are organizing a repo execution queue.

Repository:
[repository]

Objective:
[objective]

Raw task/file list:
[paste list]

Known constraints:
- Static-first.
- Documentation-first.
- No frameworks or package managers unless explicitly approved.
- Use lowercase kebab-case.
- Use synthetic examples only.
- Do not include secrets or private data.
- Do not include unsupported outcome claims.
- Keep batches reviewable.

Preferred batch size:
[number] files

High-risk file types:
[list]

Files/folders to avoid:
[list]

Create a grouped task sequence.

For each group, include:
1. Batch/task number
2. Title
3. Exact files
4. Why these files belong together
5. Dependencies
6. Validation needed
7. Out-of-scope items

Do not generate file contents.
Do not execute the work.
Do not open PRs.
End with the recommended first batch.
```

## Output Format

Use this output format:

```md
# Grouped Task Sequence

## Objective

[Objective]

## Grouping Logic

- Logic 1
- Logic 2
- Logic 3

## Batch Queue

### Batch [Number] — [Title]

```text
[file]
[file]
[file]
```

Why grouped:

- Reason 1
- Reason 2

Dependencies:

- Dependency 1

Validation:

- [ ] Markdown reviewed
- [ ] JSON validates if changed
- [ ] YAML reviewed if changed
- [ ] No secrets
- [ ] No private data
- [ ] No unsupported claims

Out of scope:

- Item 1

## First Recommended Batch

Proceed to Batch [Number].
```

## Task Group Record Shape

For JSON or structured tracking, use:

```json
{
  "batch": 37,
  "title": "Prompt Chain Control Layer",
  "files": [
    "prompt-chains/README.md",
    "prompt-chains/master-roadmap-prompt.md",
    "prompt-chains/grouped-task-sequence.md",
    "prompt-chains/next-task-update-protocol.md"
  ],
  "intent": "Create the prompt-chain control layer.",
  "dependencies": [
    "README.md",
    "JULES.md",
    "NEXT_TASK.md"
  ],
  "validation": [
    "Markdown reviewed",
    "No secrets",
    "No private data",
    "No unsupported claims"
  ],
  "status": "queued"
}
```

## Grouping Checklist

Before approving a grouped sequence:

- [ ] Every file appears once.
- [ ] Related files are grouped.
- [ ] Batch size is reasonable.
- [ ] High-risk files are isolated.
- [ ] Dependencies are respected.
- [ ] Validation is clear.
- [ ] Out-of-scope work is explicit.
- [ ] Future work is not treated as current work.
- [ ] No private data is required.
- [ ] No deployment changes are hidden.

## Conversion To GitHub Issues

Each batch can become one GitHub issue.

Issue title pattern:

```text
[Batch]: Batch [Number] — [Title]
```

Issue body should include:

```md
## Objective

[Intent]

## Files

```text
[file]
[file]
[file]
```

## Scope

Only create/update the listed files.

## Validation

- [ ] Markdown reviewed
- [ ] JSON validates if changed
- [ ] YAML reviewed if changed
- [ ] No secrets
- [ ] No private data
- [ ] No unsupported claims

## Out of Scope

- Future batches
- Unrelated refactors
- Deployment changes unless listed

## Done Means

- Files exist
- Content is complete
- PR is opened
```

## Conversion To Jules Task

Each batch can become a Jules task.

Jules prompt pattern:

```text
You are working in JFeimster/ai-agent-library.

Complete Batch [Number] — [Title].

Create or update only these files:

[file]
[file]
[file]

Rules:
- Do not modify unrelated files.
- Do not start future batches.
- Use public-safe language.
- Use synthetic examples only.
- Do not commit secrets or private data.
- Validate changed files.
- Commit changes.
- Open a PR into main.
- Stop after opening the PR.
```

## Conversion To ChatGPT Batch Output

For manual generation in chat, use:

```text
Proceed to Batch [Number].

Generate complete file contents for:

[file]
[file]
[file]

Provide each file with:
1. file path heading
2. fenced code block
3. complete contents
4. next batch suggestion
```

## Validation By Group Type

### Markdown Docs

- [ ] headings clear
- [ ] scope clear
- [ ] guardrails included
- [ ] examples synthetic

### JSON Data

- [ ] valid JSON
- [ ] two-space indentation
- [ ] no duplicate slugs
- [ ] paths real or marked planned

### GitHub Workflows

- [ ] YAML reviewed
- [ ] minimal permissions
- [ ] no secrets required
- [ ] failure output readable

### Static Site

- [ ] page loads locally
- [ ] CSS/JS paths valid
- [ ] navigation works
- [ ] CTA links work

## Common Mistakes

Avoid:

- grouping by vibes
- putting every file into one PR
- mixing docs and deployment changes
- creating future-batch files early
- editing indexes without adding referenced files
- changing `NEXT_TASK.md` before task completion
- burying high-risk changes in a broad batch
- calling a scaffold “complete” when it is not

## Done Means

A grouped task sequence is done when:

- every task/file is assigned to a logical group
- batches are ordered correctly
- validation needs are clear
- dependencies are visible
- execution can proceed one batch at a time
- a repo agent can follow the queue without scope goblins jumping out of the bushes
