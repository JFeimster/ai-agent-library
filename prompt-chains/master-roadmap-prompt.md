# Master Roadmap Prompt

## Purpose

This prompt chain turns a broad repo roadmap into a controlled, sequential execution plan.

Use it when the AI Agent Library repo needs to move from a large idea list into ordered issues, batches, PRs, or Jules/Codex execution prompts.

The goal is to produce work that is grouped, scoped, reviewable, and safe — not a 97-file mega-PR with the emotional stability of a shopping cart wheel.

## When To Use

Use this prompt chain when planning:

- repo buildout phases
- batch sequences
- Jules execution queues
- Codex execution queues
- multi-PR documentation layers
- static-site file creation
- agent library expansion
- skill library expansion
- knowledge-base buildout
- platform-pack buildout
- schema/index creation
- repo audit and launch-readiness work

## When Not To Use

Do not use this prompt chain when:

- the task is a single small file edit
- the next task is already fully defined
- a PR review is needed instead of planning
- the repo state must be inspected first and no files have been reviewed
- the work involves private data that has not been sanitized
- the request requires immediate deployment or production action
- the user has not approved a broad planning step

## Inputs Required

Collect these inputs before generating the roadmap:

```text
Repository:
Primary objective:
Audience:
Known folders:
Known existing files:
Desired deliverables:
Constraints:
Safety rules:
Batch size:
Preferred branch pattern:
Preferred PR pattern:
Known next batch:
Known final batch:
```

## Optional Inputs

Useful optional inputs:

```text
Existing issue list:
Existing PR list:
Current repo tree:
Current README:
Current NEXT_TASK.md:
Current JULES.md:
Existing file inventory:
Deployment status:
Static-site root:
Vercel config:
Known naming conventions:
```

## Operating Rules

The roadmap must:

- organize work into ordered batches
- group related files together
- keep each batch to 3–5 files unless justified
- sequence foundational files before dependent files
- avoid deployment changes unless requested
- avoid package managers/frameworks unless requested
- separate documentation, schemas, static-site, and workflow tasks
- include validation expectations
- include stop rules
- include safety guardrails
- clearly identify what is out of scope

## Batch Design Rules

Each batch should have:

- batch number
- batch title
- file list
- intent
- dependencies
- validation notes
- out-of-scope notes

Example:

```text
Batch 37 — Prompt Chain Control Layer

Files:
prompt-chains/README.md
prompt-chains/master-roadmap-prompt.md
prompt-chains/grouped-task-sequence.md
prompt-chains/next-task-update-protocol.md

Intent:
Create the prompt-chain folder and define roadmap, grouping, and next-task update protocols.

Validation:
Markdown reviewed.
No secrets.
No private data.
No unsupported claims.

Out of scope:
Do not create future execution prompt files in this batch.
```

## Recommended Batch Order

For repo operating spine work, use this order:

1. GitHub templates
2. GitHub workflows
3. core repo docs
4. trust/safety docs
5. prompt-chain control layer
6. execution prompts
7. agent index layer
8. skill index layer
9. knowledge-base index layer
10. template index layer
11. platform folders
12. portfolio folders
13. schema/registry docs
14. examples
15. site data
16. audit and launch-readiness docs

## Master Prompt Template

Copy and adapt this prompt:

```text
You are working in the GitHub repository:

[repository]

Your job is to turn the following roadmap into a sequential, reviewable execution plan.

Primary objective:
[objective]

Constraints:
- Work should be split into batches of [number] files where practical.
- Keep related files together.
- Do not add frameworks, package managers, or build steps unless explicitly required.
- Keep work static-first and documentation-first unless the repo requires otherwise.
- Do not include secrets, tokens, credentials, private customer data, backend provider bypass paths, or unsupported outcome claims.
- Use synthetic examples only.
- Use public-safe language.
- Use lowercase kebab-case for slugs and file paths unless repo conventions require otherwise.

Known repo folders:
[folders]

Known existing files:
[files]

Desired deliverables:
[deliverables]

Create a batch plan with:

1. Batch number
2. Batch title
3. Exact files in the batch
4. Intent
5. Dependencies
6. Validation required
7. Out-of-scope notes

Rules:
- Do not generate the actual file contents yet.
- Do not start execution.
- Do not open PRs.
- Do not invent repo state.
- Mark assumptions clearly.
- End with the recommended next batch to execute.
```

## Output Format

The roadmap output should use this structure:

```md
# Roadmap Execution Plan

## Objective

[Objective]

## Assumptions

- Assumption 1
- Assumption 2

## Constraints

- Constraint 1
- Constraint 2

## Batch Queue

### Batch [Number] — [Title]

```text
[file]
[file]
[file]
```

Intent:

- Intent 1
- Intent 2

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

- Out-of-scope item 1

## Recommended Next Step

Proceed to Batch [Number].
```

## Roadmap Review Checklist

Before using the roadmap for execution, review:

- [ ] Batches are ordered logically.
- [ ] Each batch has 3–5 files unless justified.
- [ ] Related files are grouped.
- [ ] Workflow/deployment changes are isolated.
- [ ] JSON/schema changes are isolated.
- [ ] Static-site changes are isolated.
- [ ] Trust/safety files are early enough in the sequence.
- [ ] `NEXT_TASK.md` update expectations are clear.
- [ ] No future work is treated as already approved.
- [ ] No private or unsafe content is required.
- [ ] Validation is included.

## Common Grouping Patterns

### Core Repo Docs

```text
README.md
JULES.md
NEXT_TASK.md
CONTRIBUTING.md
```

### Trust and Safety

```text
SECURITY.md
CODE_OF_CONDUCT.md
docs/privacy-and-sensitive-data-rules.md
docs/naming-conventions.md
```

### Prompt Chain Layer

```text
prompt-chains/README.md
prompt-chains/master-roadmap-prompt.md
prompt-chains/grouped-task-sequence.md
prompt-chains/next-task-update-protocol.md
```

### GitHub Workflow Layer

```text
.github/workflows/validate-json.yml
.github/workflows/link-check.yml
.github/workflows/static-site-smoke.yml
.github/workflows/markdown-hygiene.yml
```

### Index Layer

```text
agents/README.md
agent-index.json
agents/agent-template.md
agents/agent-review-checklist.md
```

## Safety Guardrails

The roadmap must not require:

- secrets
- credentials
- `.env` contents
- private customer data
- raw CRM exports
- private application links
- backend provider bypass paths
- fake testimonials
- unverified claims
- guarantee language
- auto-merge behavior
- deployment toggles unless explicitly approved

## Roadmap Anti-Patterns

Avoid:

```text
Batch with 15 unrelated files
Batch that mixes workflows, CSS, and schemas
Batch that changes deployment config casually
Batch that rewrites existing files without reason
Batch that starts future work
Batch that depends on missing/private data
Batch with vague file names
```

## Good Roadmap Behavior

Good roadmap output:

- makes the next task obvious
- avoids surprise files
- keeps each PR reviewable
- separates high-risk files
- gives validation notes
- gives stop rules
- does not pretend future tasks are already done

## Done Means

The roadmap prompt has done its job when it produces:

- a clear ordered batch queue
- exact file lists
- intent for each batch
- validation requirements
- dependencies
- out-of-scope boundaries
- a recommended next batch

Execution should happen only after the user approves the next batch.
