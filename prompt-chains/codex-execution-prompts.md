# Codex Execution Prompts

## Purpose

This file stores reusable prompts for using Codex on the AI Agent Library repo.

Codex is best used for local repo inspection, precise edits, validation, refactors, search, repairs, and commit-ready changes. These prompts keep Codex focused on scoped tasks instead of letting it redecorate the entire repo with “helpful improvements.” 🛠️

## Core Codex Rules

Codex should:

- inspect before editing
- keep changes scoped
- modify only approved files
- preserve existing useful content
- avoid broad rewrites
- validate changed files
- summarize exact changes
- avoid secrets/private data
- avoid unsupported public claims
- avoid deployment changes unless approved
- avoid adding frameworks, packages, or build steps unless approved

## Required Repo Context

Before editing, Codex should inspect:

```text
README.md
JULES.md
NEXT_TASK.md
CONTRIBUTING.md
SECURITY.md
docs/repo-validation-checklist.md
docs/privacy-and-sensitive-data-rules.md
docs/naming-conventions.md
```

When relevant, inspect:

```text
agents/README.md
skills/README.md
knowledge-base/README.md
templates/README.md
platforms/README.md
schemas/README.md
registry/README.md
prompt-chains/README.md
```

## Standard Codex Task Prompt

Use this for one scoped repo task.

```text
You are working locally in the repository:

JFeimster/ai-agent-library

Task:

[task]

Allowed files:

[file]
[file]
[file]

Required reading:
- README.md
- NEXT_TASK.md
- CONTRIBUTING.md
- SECURITY.md
- docs/repo-validation-checklist.md
- docs/privacy-and-sensitive-data-rules.md
- docs/naming-conventions.md

Rules:
- Inspect relevant files before editing.
- Modify only the allowed files.
- Do not start future batches.
- Do not make unrelated refactors.
- Do not change deployment settings.
- Do not add frameworks, package managers, or build steps.
- Preserve existing useful content.
- Use repo-relative paths.
- Use lowercase kebab-case slugs.
- Use public-safe language.
- Use synthetic examples only.
- Do not include secrets, tokens, credentials, .env files, private data, backend provider bypass paths, fake testimonials, or unsupported claims.

Validation:
- Run relevant validation commands.
- Validate JSON if changed.
- Review YAML if changed.
- Check Markdown for completeness.
- Check links/paths if changed.
- Check static site locally if site files changed.

After editing:
- Show changed files.
- Show validation commands and results.
- Show any known issues.
- Do not claim validation that was not run.
```

## Codex Batch Prompt

Use this when Codex should create or update a batch of files locally.

```text
Complete Batch [NUMBER] — [TITLE] in the local repo:

JFeimster/ai-agent-library

Create or update only these files:

[file]
[file]
[file]
[file]

Rules:
- Work only this batch.
- Do not edit unrelated files.
- Do not start future batches.
- Do not change deployment settings.
- Do not add package managers, frameworks, or build steps.
- Use complete, useful file contents.
- Follow existing repo style.
- Use public-safe language.
- Use synthetic examples only.
- Do not include secrets/private data/backend bypass paths/unsupported claims.

Validation:
- Review Markdown.
- Validate JSON if changed.
- Review YAML if changed.
- Check links/paths if changed.
- Run static-site preview if site files changed.

Commit:
- Create a commit with a clear message:
  Add Batch [NUMBER] [short title]

Output:
- Summary
- Changed files
- Commit SHA
- Validation run
- Known issues
```

## Codex Inspection-Only Prompt

Use this when Codex should inspect and report without editing.

```text
Inspect the local repo:

JFeimster/ai-agent-library

Do not edit files.
Do not commit.

Review:

[area or files]

Report:
- Existing files
- Missing files
- Duplicates
- Naming issues
- Broken references
- JSON validity concerns
- Markdown completeness concerns
- Secrets/private-data concerns
- Public-safe language concerns
- Recommended next edits

Rules:
- Do not invent repo state.
- Cite actual file paths.
- Mark uncertainty clearly.
- Do not perform repairs.
```

## Codex PR Review Prompt

Use this to review a checked-out PR branch locally.

```text
You are reviewing a pull request branch locally in:

JFeimster/ai-agent-library

Review goal:

[goal]

Base branch:

main

Review the diff between the current branch and main.

Commands to consider:
- git status
- git diff --stat main...HEAD
- git diff --name-only main...HEAD
- git diff main...HEAD
- python -m json.tool [json files]

Review for:
- scope match
- unexpected files
- Markdown completeness
- JSON validity
- YAML/workflow risk
- static-site behavior if relevant
- link/path issues
- secrets/private data
- public-safe language
- deployment impact
- future-batch leakage
- merge readiness

Do not edit files unless explicitly asked.

Output:
1. Decision: approve/comment/request changes
2. Changed files
3. Findings
4. Required fixes
5. Validation results
6. Merge recommendation
```

## Codex Conflict Repair Prompt

Use this when resolving conflicts locally.

```text
You are resolving merge conflicts in:

JFeimster/ai-agent-library

Conflicted files:

[file]
[file]

Goal:

[goal]

Rules:
- Resolve only the listed conflicts.
- Preserve the correct current and incoming content based on the task.
- Do not introduce unrelated edits.
- Do not start future batches.
- Do not change deployment settings.
- Do not include secrets/private data.
- Do not keep unsafe public claims.
- Validate after resolving.

For each file:
1. Inspect conflict markers.
2. Explain what each side contains.
3. Choose accept current, accept incoming, accept both, or manual merge.
4. Resolve surgically.
5. Validate.

After repair:
- Run git status.
- Run relevant validation.
- Summarize changed files.
- Do not merge unless explicitly instructed.
```

## Codex Static Site Prompt

Use this when editing static site pages.

```text
You are editing static site files in:

JFeimster/ai-agent-library

Task:

[task]

Allowed files:

[file]
[file]
[file]

Rules:
- Plain HTML/CSS/JS only.
- No React.
- No Next.js.
- No npm.
- No package manager.
- No build step.
- Reuse existing site patterns.
- Keep links and asset paths local.
- Do not expose internal/private URLs.
- Use public-safe language.
- Preserve existing CTAs unless task says otherwise.

Validation:
- Run a local server:
  python -m http.server 8080
- Check touched pages load.
- Check CSS path.
- Check JS path.
- Check links and CTAs.
- Check console when possible.
- Confirm no private/internal links are exposed.

Output:
- Changed files
- Preview steps
- Validation results
- Known issues
```

## Codex JSON / Schema Prompt

Use this when editing JSON files, schema files, indexes, or registry records.

```text
You are editing structured data in:

JFeimster/ai-agent-library

Task:

[task]

Allowed files:

[file]
[file]
[file]

Rules:
- Use valid JSON.
- Use two-space indentation.
- Use lowercase kebab-case slugs.
- Avoid duplicate slugs.
- Use stable IDs when needed.
- Do not invent URLs.
- Do not reference missing files as existing.
- Use synthetic examples only.
- Do not include secrets or private data.
- Do not include backend provider bypass paths.

Validation:
- Run python -m json.tool on every changed JSON file.
- Check duplicate slugs.
- Check path references.
- Check public-safe values.
- Check schema consistency if applicable.

Output:
- Changed files
- Validation commands
- Validation results
- Any warnings
```

## Codex Markdown Completion Prompt

Use when existing Markdown files are too thin or incomplete.

```text
Improve the following Markdown files in:

JFeimster/ai-agent-library

Files:

[file]
[file]

Goal:

Make each file complete, useful, and aligned with repo conventions.

Rules:
- Preserve existing useful content.
- Do not change unrelated files.
- Add missing sections where appropriate.
- Use public-safe language.
- Use synthetic examples only.
- Do not include secrets/private data.
- Do not invent URLs.
- Do not add unsupported claims.

Each file should include where relevant:
- Purpose
- When to use
- Inputs/requirements
- Procedure/rules
- Examples
- Guardrails
- Review checklist
- Done means

Validation:
- Review Markdown.
- Check links.
- Check no secrets/private data.
- Check public-safe language.

Output:
- Changed files
- Summary by file
- Validation notes
```

## Codex Repo Search Prompt

Use when you need Codex to find files or references.

```text
Search the local repo:

JFeimster/ai-agent-library

Find references to:

[term/path/slug]

Use commands such as:
- rg "[term]"
- find . -name "[pattern]"
- git grep "[term]"

Report:
- matching files
- matching lines or sections
- whether references are valid
- whether any paths need updates
- recommended next action

Do not edit files.
```

## Codex Rename Prompt

Use this when renaming files or slugs.

```text
Rename the following asset in:

JFeimster/ai-agent-library

Old path or slug:

[old]

New path or slug:

[new]

Rules:
- Rename only the approved asset.
- Update all repo references to the renamed path/slug.
- Update indexes if needed.
- Update Markdown links.
- Update JSON path fields.
- Do not change unrelated content.
- Do not start future work.

Validation:
- Search for old path/slug after rename.
- Validate changed JSON.
- Check links where possible.
- Confirm no duplicate slugs.

Output:
- Files renamed
- References updated
- Validation results
- Remaining references to old name, if any
```

## Codex Workflow Edit Prompt

Use this when editing `.github/workflows`.

```text
Edit GitHub Actions workflow files in:

JFeimster/ai-agent-library

Task:

[task]

Allowed files:

[file]
[file]

Rules:
- Keep permissions minimal.
- Prefer contents: read unless write is required.
- Do not require secrets unless explicitly requested.
- Do not auto-commit generated changes.
- Avoid unnecessary external dependencies.
- Prefer Python standard library for repo checks.
- Keep failure output readable.
- Do not change unrelated workflows.

Validation:
- Review YAML indentation.
- Review trigger paths.
- Review permissions.
- Review scripts for syntax issues.
- Confirm no secrets are needed.
- Confirm workflow does not modify repo files unexpectedly.

Output:
- Changed workflow files
- Risk notes
- Validation performed
- Known issues
```

## Codex Commit Prompt

Use this after Codex makes approved changes.

```text
Prepare the current approved changes for commit.

Rules:
- Run git status.
- Confirm changed files are expected.
- Run relevant validation.
- Do not include unrelated files.
- Do not commit if secrets/private data are detected.
- Do not commit if validation fails unless explicitly instructed.

Commit message:

[message]

After commit, report:
- commit SHA
- changed files
- validation run
- known issues
```

## Codex PR Preparation Prompt

Use this before opening a PR manually.

```text
Prepare a PR summary for the current branch.

Include:
- PR title
- Summary
- Files changed
- Validation performed
- Scope confirmation
- Safety confirmation
- Deployment impact
- Known issues
- Follow-up tasks

Use this structure:

# [PR Title]

## Summary

## Files Changed

## Validation

## Scope Control

## Safety Review

## Deployment Impact

## Known Issues

## Follow-Up Tasks
```

## Codex Validation Commands

Use these commands where relevant.

### Git

```bash
git status
git diff --stat
git diff --name-only
```

### JSON

```bash
python -m json.tool path/to/file.json
```

### Markdown Search

```bash
rg "TODO|FIXME|lorem ipsum|final final"
```

### Secret Search

```bash
rg "sk-|ghp_|github_pat_|client_secret|access_token|refresh_token|webhook_secret|api_key"
```

### Local Static Server

```bash
python -m http.server 8080
```

## Codex Output Standard

Codex responses should include:

```text
Summary:
Changed files:
Validation:
Known issues:
Next recommended action:
```

Do not say tests passed unless tests actually ran.

## Codex Stop Rules

Codex should stop when:

- task scope is unclear
- requested file does not exist and no safe assumption is available
- editing requires unrelated files
- secrets/private data are found
- merge conflicts need a human choice
- deployment behavior would change
- validation fails and repair is outside scope
- a PR/commit is ready and user review is needed

## Codex Review Checklist

Before completing:

- [ ] Current branch is understood.
- [ ] Allowed files are clear.
- [ ] Only approved files changed.
- [ ] No unrelated refactors.
- [ ] No future-batch work.
- [ ] JSON validates if changed.
- [ ] YAML reviewed if changed.
- [ ] Markdown reviewed.
- [ ] Static site checked if changed.
- [ ] No secrets.
- [ ] No private data.
- [ ] No unsupported claims.
- [ ] Output lists validation honestly.

## Done Means

Codex execution prompts are useful when they produce:

- targeted inspections
- scoped edits
- clean diffs
- honest validation
- safe content
- clear commit/PR summaries
- no surprise repo-wide remodeling projects
