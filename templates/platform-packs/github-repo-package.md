# GitHub Repo Platform Package Template

## Purpose

Use this template to package a GitHub repository as a reusable operating asset inside the AI Agent Library.

A GitHub repo package should make the repository understandable, reviewable, maintainable, and execution-ready for humans, ChatGPT, Codex, Jules, GitHub agents, and future automation workflows.

The goal is simple: stop treating GitHub like a junk drawer with commit history. Make the repo behave like a product. 🧰

## Recommended Folder Structure

```text
.github/
  ISSUE_TEMPLATE/
    bug_report.md
    feature_request.md
    task.md
    pr_review.md
  PULL_REQUEST_TEMPLATE.md

docs/
  repo-purpose.md
  naming-conventions.md
  privacy-and-sensitive-data-rules.md
  contribution-guide.md
  deployment-guide.md

prompt-chains/
  README.md
  master-roadmap-prompt.md
  grouped-task-sequence.md
  jules-execution-prompts.md
  chatgpt-execution-prompts.md
  review-and-merge-checklist.md
  next-task-update-protocol.md

agents/
  README.md

skills/
  README.md
  skill-index.json

knowledge-base/
  README.md

schemas/
  README.md

examples/
  README.md

portfolio/
  README.md

templates/
  README.md

README.md
JULES.md
NEXT_TASK.md
CONTRIBUTING.md
CODE_OF_CONDUCT.md
SECURITY.md
LICENSE
vercel.json
```

## Package Metadata

```yaml
repo_name: ""
owner: ""
repo_url: ""
primary_branch: "main"
project_type: ""
status: "draft"
visibility: "public"
primary_purpose: ""
audience: ""
execution_model: "issue-pr-review"
deployment_target: ""
auto_deploy_policy: ""
related_site_url: ""
related_vercel_project: ""
related_notion_page: ""
last_reviewed: ""
```

## Required Repo Files

Minimum operating repo:

```text
README.md
JULES.md
NEXT_TASK.md
.github/PULL_REQUEST_TEMPLATE.md
.github/ISSUE_TEMPLATE/task.md
docs/privacy-and-sensitive-data-rules.md
```

Recommended full repo control layer:

```text
README.md
JULES.md
NEXT_TASK.md
CONTRIBUTING.md
SECURITY.md
.github/
prompt-chains/
docs/
schemas/
```

## README.md Template

```md
# [Repo Name]

## Purpose

[One clear paragraph describing what this repo exists to do.]

## What This Repo Contains

- [Asset type 1]
- [Asset type 2]
- [Asset type 3]

## Audience

This repo is for:

- Audience 1
- Audience 2
- Audience 3

## Operating Model

This repo uses an issue-first, PR-reviewed workflow.

1. Create or select one issue.
2. Work only that issue.
3. Open a PR.
4. Review the PR.
5. Merge only after approval.
6. Update `NEXT_TASK.md` if using a sequential queue.

## Local Preview

```bash
python -m http.server 8080
```

## Safety Rules

Do not commit secrets, private client data, real borrower/customer records, bank statements, tax records, credit reports, or backend provider bypass paths.
```

## JULES.md Template

```md
# Jules Repo Instructions

## Primary Rule

Work only the task approved in `NEXT_TASK.md`.

Do not start future issues.
Do not bundle unrelated work.
Do not make drive-by refactors.
Do not merge PRs.

## Workflow

1. Read `README.md`.
2. Read `NEXT_TASK.md`.
3. Confirm the current approved issue.
4. Create the requested branch.
5. Complete only the approved task.
6. Run validation.
7. Commit changes.
8. Open a PR into `main`.
9. Stop.
```

## NEXT_TASK.md Template

```md
# Next Task

## Current Approved Task

Issue:

```text
#[number] — [issue title]
```

Branch:

```text
[branch-name]
```

Status:

```text
Ready for Jules
```

## Scope

Jules may work only this issue.

## Completion Rule

After opening a PR, stop.
```

## Branch Naming Rules

Use:

```text
feature/[short-task-slug]
docs/[short-doc-slug]
fix/[short-fix-slug]
repair/[pr-number]-[short-repair-slug]
chore/[short-maintenance-slug]
```

## Commit Message Rules

Use plain imperative messages:

```text
Add static agent directory site
Add ChatGPT GPT platform pack
Add funding knowledge base
Fix catalog search fallback
Update NEXT_TASK for Issue 6
```

Avoid chaos goblin commits:

```text
stuff
updates
final final
oops
misc
big changes
```

## PR Review Checklist

```md
# PR Review Checklist

## Scope

- [ ] PR matches linked issue.
- [ ] No future issue work included.
- [ ] No unrelated refactors.
- [ ] No accidental generated files.

## Safety

- [ ] No API keys.
- [ ] No access tokens.
- [ ] No `.env`.
- [ ] No private client/customer/borrower data.
- [ ] No backend provider bypass paths.

## Static Site

- [ ] HTML loads.
- [ ] CSS path correct.
- [ ] JS path correct.
- [ ] JSON fetch paths correct.
- [ ] Mobile layout acceptable.
- [ ] CTAs work.

## Data

- [ ] JSON validates.
- [ ] CSV headers are stable.
- [ ] Canonical source is clear.
- [ ] Fallback data is labeled.

## Language

- [ ] No guaranteed approval.
- [ ] No guaranteed funding.
- [ ] No guaranteed income.
- [ ] No fake neutral ranking.
- [ ] Affiliate disclosure included where needed.
```

## Deployment Control Notes

For Vercel-connected repos, include `vercel.json` when deployment behavior needs repo-level control.

Manual deployment toggle pattern:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "git": {
    "deploymentEnabled": false
  },
  "cleanUrls": true,
  "trailingSlash": false
}
```

## Repository Inventory Record

```json
{
  "name": "Example Repo",
  "slug": "example-repo",
  "owner": "example-owner",
  "repo_url": "https://github.com/example-owner/example-repo",
  "primary_branch": "main",
  "project_type": "Static Site / Agent Library",
  "status": "active",
  "visibility": "public",
  "primary_purpose": "Public-safe directory of AI agents, skills, templates, and knowledge-base assets.",
  "deployment_target": "Vercel",
  "site_url": "",
  "related_prompt_chain": "prompt-chains/master-roadmap-prompt.md",
  "last_reviewed": null
}
```

## Quality Checklist

- [ ] `README.md` explains the repo purpose.
- [ ] `JULES.md` exists if Jules is used.
- [ ] `NEXT_TASK.md` exists if sequential execution is used.
- [ ] PR template exists.
- [ ] Issue template exists.
- [ ] Prompt-chain docs exist if grouped execution is used.
- [ ] Safety/privacy rules exist.
- [ ] `.gitignore` blocks common junk/secrets.
- [ ] Static site rules are clear if applicable.
- [ ] Deployment rules are documented.
- [ ] No secrets or private data are committed.
- [ ] Repo paths are consistent.
- [ ] Branch/commit/PR naming rules are documented.

## Done Means

A GitHub repo package is complete when the repo has clear purpose, predictable folder structure, issue-first workflow, PR review checklist, agent/Jules instructions, safety rules, deployment notes, prompt-chain control if needed, and human-review gates before merge.
