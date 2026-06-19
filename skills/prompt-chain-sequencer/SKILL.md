# Prompt Chain Sequencer

## Purpose

The **Prompt Chain Sequencer** skill breaks large AI work requests into staged, copy/pasteable prompts for ChatGPT, Jules, Codex, GitHub agents, repo maintainers, Notion operators, and automation builders.

Use this skill when a task is too large, risky, or ambiguous for a single prompt.

The skill creates prompt chains with clear phases, scope, inputs, outputs, stop conditions, validation steps, and review rules.

## When To Use

Use this skill when the user asks for:

- A master prompt
- A Jules prompt
- A Codex prompt
- A GitHub connector prompt
- A PR review prompt
- A repo audit prompt
- A validation prompt
- A multi-step execution plan
- Batch prompts
- Task breakdowns
- Implementation prompts
- Merge-readiness prompts
- Post-merge cleanup prompts

Use it for projects involving:

- Static site implementation
- GitHub repo updates
- AI agent specs
- Skill generation
- Knowledge-base folders
- JSON schemas
- PR review
- Deployment review
- Vercel launch checks
- Notion database updates
- Automation workflow specs

Do not use this skill for:

- One-line rewrites
- Simple Q&A
- One-off content snippets
- Tasks where no sequencing is needed

## Inputs

### Minimum Inputs

```text
Project:
Goal:
Execution target:
Desired output:
```

### Recommended Inputs

```text
Repo:
Branch:
Issue number:
PR number:
Files in scope:
Files out of scope:
Current state:
Constraints:
Validation requirements:
Stop conditions:
Merge policy:
Output format:
```

### Optional Inputs

```text
Existing errors:
Prior PRs:
Jules output:
Codex output:
Screenshots:
Deployment URL:
Docs to preserve:
Known conflicts:
Risk rules:
Public-safe rules:
```

## Outputs

This skill should produce:

1. Prompt Chain Overview
2. Master Prompt
3. Audit Prompt
4. Implementation Prompt
5. Validation Prompt
6. PR Review Prompt
7. Merge Prompt
8. Post-Merge Prompt
9. Stop Conditions
10. Acceptance Criteria
11. Follow-Up Task List

## Standard Output Format

```md
# Prompt Chain

## Objective

[Clear objective]

## Execution Target

- Tool:
- Repo/workspace:
- Branch:
- Base:
- Files in scope:
- Files out of scope:

## Constraints

- Constraint 1
- Constraint 2
- Constraint 3

## Prompt 1 — Audit

[Copy/paste prompt]

## Prompt 2 — Implement

[Copy/paste prompt]

## Prompt 3 — Validate

[Copy/paste prompt]

## Prompt 4 — Open PR

[Copy/paste prompt]

## Prompt 5 — Review PR

[Copy/paste prompt]

## Stop Conditions

- Condition 1
- Condition 2
- Condition 3

## Acceptance Criteria

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3
```

## File / Path Conventions

Prompt files can be stored under:

```text
prompt-chains/
prompt-chains/jules/
prompt-chains/codex/
prompt-chains/github/
prompt-chains/vercel/
prompt-chains/notion/
```

Recommended filenames:

```text
prompt-chains/jules/static-site-pack-implementation.md
prompt-chains/github/pr-review-static-site-pack.md
prompt-chains/codex/agent-index-expansion.md
prompt-chains/vercel/deployment-smoke-test.md
```

## Workflow

### Step 1 — Classify the Work

Classify the request as one of:

```text
Audit
Implementation
Validation
PR review
Merge readiness
Post-merge cleanup
Static site build
Agent spec generation
Skill generation
Knowledge-base packaging
Schema generation
Automation workflow
Deployment check
Notion update
```

### Step 2 — Identify Execution Target

Possible targets:

```text
ChatGPT
Jules
Codex
GitHub connector
Vercel connector
Notion connector
Google Drive connector
Human operator
```

Each target needs different instructions.

Example:

- Jules prompt should include repo, branch, file scope, validation, PR title, no-merge instruction.
- GitHub connector prompt should include PR number, changed file review, diff review, approve/comment/request changes.
- Vercel prompt should include deployment URL, project, smoke test, asset checks.

### Step 3 — Separate Stages

Recommended stages:

```text
1. Audit
2. Plan
3. Implement
4. Validate
5. Open PR
6. Review PR
7. Merge only if explicitly instructed
8. Post-merge cleanup
```

Avoid combining:

- implementation and merge
- validation and production deployment changes
- PR review and merge
- file deletion and broad refactor

### Step 4 — Define Scope

For every prompt, define:

- What to inspect
- What to edit
- What not to edit
- What to preserve
- Where to stop
- What output to return

### Step 5 — Add Constraints

Common constraints:

```text
Static-first
No React
No Next.js
No npm
No package.json
No build step
No server routes
No secrets
No private data
No unsupported claims
Do not merge unless explicitly instructed
Do not overwrite existing files without diff review
```

### Step 6 — Add Validation

Validation may include:

```text
File existence check
JSON validation
Schema validation
Static server smoke test
CSS/JS reference check
Link scan
Secret scan
Public-safe claim scan
Deployment config review
```

### Step 7 — Add Stop Conditions

Examples:

```text
Stop if branch has conflicts.
Stop if JSON validation fails.
Stop if secrets are found.
Stop if root pages would be overwritten.
Stop after opening the PR.
Do not merge.
Ask before deleting files.
```

### Step 8 — Add Output Requirements

Every prompt should specify the final response format.

Example:

```text
Branch:
Commit SHA:
PR URL:
Files changed:
Validation:
Known issues:
Recommended next steps:
```

## Prompt Templates

### Audit Prompt Template

```md
# Audit Task

Repo:

[repo]

## Objective

Inspect the repo and report current state. Do not modify files.

## Review

- Top-level files
- Relevant folders
- Existing static site files
- Existing data files
- Existing schemas
- Existing workflows
- Risk areas

## Output

Return:

- Current structure
- Missing files
- Risks
- Recommended next action
```

### Implementation Prompt Template

```md
# Implementation Task

Repo:

[repo]

Branch:

[branch]

## Objective

Implement [goal].

## Files In Scope

[files]

## Files Out Of Scope

[files]

## Rules

- Rule 1
- Rule 2
- Rule 3

## Validation

[commands]

## PR

Open a PR into `main`.

Do not merge.

## Final Response

Return branch, commit SHA, PR URL, changed files, validation, and known issues.
```

### PR Review Prompt Template

```md
# PR Review Task

Repo:

[repo]

PR:

[number]

## Objective

Review changed files, diff risk, validation notes, public-safe language, secrets, and deployment behavior.

## Return

Recommendation:

APPROVE / COMMENT / REQUEST CHANGES

Do not merge.
```

### Merge Prompt Template

```md
# Merge Task

Repo:

[repo]

PR:

[number]

## Objective

Merge only after confirming all blockers are resolved.

## Pre-Merge Checks

- PR targets main
- Checks pass
- No unresolved blockers
- No secrets
- User explicitly requested merge

## Merge

Use repo default merge strategy unless instructed otherwise.

## Post-Merge

Report merge SHA and next cleanup steps.
```

## Quality Checklist

Before finalizing a prompt chain:

- [ ] Objective is clear.
- [ ] Execution target is identified.
- [ ] Repo/workspace is named.
- [ ] Branch is named if relevant.
- [ ] Files in scope are listed.
- [ ] Files out of scope are listed.
- [ ] Constraints are included.
- [ ] Stop conditions are included.
- [ ] Validation is included.
- [ ] Output format is specified.
- [ ] No accidental merge instruction is included.
- [ ] Public-safe rules are included where needed.
- [ ] Secret/private data rules are included.
- [ ] Follow-up tasks are listed.

## Guardrails

This skill must not:

- Tell an agent to merge unless the user explicitly requested merge.
- Tell an agent to force-push unless explicitly approved.
- Tell an agent to delete files without review.
- Tell an agent to overwrite existing work without diff review.
- Skip validation.
- Hide risks.
- Include secrets in prompts.
- Include real private client data in examples.
- Mix public and internal data without boundaries.
- Create vague “do everything” prompts.

## Public-Safe Language Rules

Use:

```text
audit
review
validate
draft
open PR
human review
public-safe
synthetic example
request changes
merge only if explicitly instructed
```

Avoid:

```text
merge automatically
skip validation
force push
delete without review
use real customer data
guaranteed outcome
```

## Example Input

```text
Create a Jules prompt to add a static site pack to my repo without overwriting existing root pages.
```

## Example Output

```md
# Jules Task — Add Static Site Support Layers

Repo:

JFeimster/example-repo

Branch:

site/static-site-pack

## Goal

Add missing static site support folders and fallback data without blindly overwriting existing root pages.

## Rules

- Static HTML/CSS/JS only.
- No React.
- No Next.js.
- No npm.
- Do not merge.
- Do not overwrite existing root pages without diff review.

## Tasks

1. Audit existing root files.
2. Add support folders.
3. Add fallback data.
4. Validate JSON.
5. Open PR.
6. Stop.

## Validation

Run local static server and JSON validation.

## Final Output

Report branch, commit SHA, PR URL, changed files, validation, and known issues.
```

## Related Agents

```text
agents/prompt-chain-architect.md
agents/ai-agent-library-builder.md
agents/vercel-deployment-control-agent.md
```

## Related Knowledge Bases

```text
knowledge-base/automation/README.md
knowledge-base/engineering-as-marketing/README.md
knowledge-base/content-ops/README.md
```

## Related Schemas

```text
schemas/agent.schema.json
schemas/webhook-event.schema.json
```

## Done Means

This skill is complete when it can produce staged prompts that:

- Are copy/pasteable
- Define scope clearly
- Include validation
- Include stop conditions
- Protect existing work
- Avoid accidental merge instructions
- Produce useful handoff and review prompts