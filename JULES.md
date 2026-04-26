# Jules Operating Rules

This file defines how Jules should work inside `JFeimster/ai-agent-library`.

## Core Rule

Jules works **one approved GitHub issue at a time**.

Do not run the full roadmap unattended. Do not start future issues early. Do not bundle unrelated roadmap groups into one PR.

## Required Workflow

For each task:

1. Read this `JULES.md` file.
2. Read `NEXT_TASK.md`.
3. Work only the **Current Approved Task** listed in `NEXT_TASK.md`.
4. Read the linked GitHub issue for the full task scope.
5. Create the branch named in the issue or in `NEXT_TASK.md`.
6. Complete only the files/tasks listed for that issue.
7. Do not modify unrelated files.
8. Commit the changes.
9. Open a pull request into `main`.
10. Stop after the PR is opened.

## Labels

Use these labels as operating signals:

- `ready-for-jules` — approved for Jules to work
- `in-progress-jules` — Jules is actively working this issue
- `needs-review` — PR is open and needs human review
- `blocked` — missing source material, unclear scope, or technical blocker
- `approved-next` — task approved to become the next item in `NEXT_TASK.md`
- `docs` — documentation work
- `platform-pack` — platform-specific agent implementation docs
- `knowledge-base` — reusable source knowledge for agents
- `portfolio` — asset inventory or project portfolio docs
- `schemas` — JSON schema or validation work
- `static-site` — static preview / Vercel deployable site work
- `github-hygiene` — issue templates, PR templates, workflows

## Branch Rules

Use one branch per issue.

Preferred branch format:

```text
feature/short-task-name
fix/short-task-name
```

Examples:

```text
feature/foundation-docs-and-root-structure
feature/static-agent-directory-site
feature/chatgpt-gpts-platform-pack
feature/funding-knowledge-base
```

## Pull Request Rules

Every PR should include:

- Summary
- Files added/changed
- Validation checklist
- Open questions or blockers

Use this checklist in PRs:

```markdown
## Checklist

- [ ] Scope matches the linked issue
- [ ] No unrelated files changed
- [ ] No secrets or API keys included
- [ ] No private client data included
- [ ] Public-facing funding language remains white-labeled where applicable
- [ ] Links and file paths are valid
- [ ] JSON files are valid, if applicable
```

## Content Rules

- Do not invent source data.
- If a value is missing, use `Unknown`.
- Do not include private client data.
- Do not include API keys, webhook secrets, tokens, or credentials.
- Do not expose backend funding provider bypass paths.
- Do not expose backend lender/provider names in public-facing Moonshine Capital docs unless explicitly approved.
- Do not make funding, credit, legal, tax, investment, or financial guarantees.
- Keep documents practical, structured, and implementation-ready.

## Repo Expansion Rules

This repo is expanding into a cross-platform AI agent library. Preserve the core structure:

```text
agents/
templates/
platforms/
knowledge-base/
portfolio/
schemas/
roadmap/
examples/
docs/
.github/
```

Do not create competing folder names unless the issue explicitly requires it.

## Stop Condition

After opening a PR, stop.

Do not update `NEXT_TASK.md` unless the issue explicitly asks for it.
Do not start the next issue until the user approves the current PR and updates the queue.
