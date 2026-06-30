# Jules Execution Prompts

## Purpose

This file stores reusable prompts for running Jules against the AI Agent Library repo.

Use these prompts when Jules needs to create files, update docs, open PRs, review repo state, repair scoped issues, or continue a batch sequence without wandering into future work.

Jules should behave like a disciplined repo contributor: read the task, touch only the approved files, validate, open a PR, and stop. No bonus chaos. No “while I was here” goblin behavior. 🧰

## Core Jules Rules

Every Jules prompt should include these rules:

```text
- Work one task at a time.
- Read README.md, JULES.md, NEXT_TASK.md, CONTRIBUTING.md, and relevant docs before editing.
- Modify only the approved files.
- Do not start future batches.
- Do not make unrelated refactors.
- Do not add frameworks, package managers, or build steps unless explicitly requested.
- Do not change deployment behavior unless explicitly requested.
- Use public-safe language.
- Use synthetic examples only.
- Do not include secrets, tokens, credentials, .env files, private data, backend provider bypass paths, or unsupported claims.
- Validate changed files.
- Commit changes.
- Open a PR into main.
- Stop after opening the PR.
```

## Required Repo Context

Jules should treat these files as repo operating instructions:

```text
README.md
JULES.md
NEXT_TASK.md
CONTRIBUTING.md
SECURITY.md
docs/repo-validation-checklist.md
docs/github-workflows.md
docs/privacy-and-sensitive-data-rules.md
docs/naming-conventions.md
```

## Standard Jules Batch Execution Prompt

Use this prompt to execute one batch.

```text
You are working in the GitHub repository:

JFeimster/ai-agent-library

Complete the following batch only:

Batch [NUMBER] — [TITLE]

Create or update exactly these files:

[file]
[file]
[file]
[file]

Required reading before editing:
- README.md
- JULES.md
- NEXT_TASK.md
- CONTRIBUTING.md
- docs/repo-validation-checklist.md
- docs/privacy-and-sensitive-data-rules.md
- docs/naming-conventions.md

Rules:
- Work only this batch.
- Do not start future batches.
- Do not modify unrelated files.
- Do not make drive-by refactors.
- Do not change deployment settings.
- Do not add frameworks, package managers, or build steps.
- Use lowercase kebab-case for slugs and file paths.
- Use public-safe language.
- Use synthetic examples only.
- Do not include secrets, tokens, credentials, .env files, private customer data, backend provider bypass paths, fake testimonials, or unsupported outcome claims.
- Make every file complete and useful, not a stub.
- Preserve existing repo conventions.

Content requirements:
- Markdown files should include purpose, when to use, procedure/rules, guardrails, validation checklist, and done means where relevant.
- JSON files must be valid JSON with two-space indentation.
- YAML files must be valid GitHub Actions YAML with minimal permissions where relevant.
- Static site files must stay plain HTML/CSS/JS with no build step.

Validation:
- Review Markdown manually.
- Run JSON validation for changed JSON files.
- Review YAML syntax for changed workflow files.
- Check for secrets/private data.
- Check public-safe language.
- Confirm only approved files changed.

After editing:
1. Commit changes with a clear imperative commit message.
2. Open a PR into main.
3. Use this PR title:

Batch [NUMBER] — [TITLE]

4. Include a PR body with:
   - Summary
   - Files changed
   - Validation performed
   - Scope confirmation
   - Safety confirmation
   - Known issues
5. Stop after opening the PR.

Report back:
- Batch:
- Branch:
- Commit SHA:
- PR URL:
- Files changed:
- Validation performed:
- Known issues:
```

## Jules Batch With Handoff File Prompt

Use this when a compiled handoff Markdown file is required.

```text
You are working in the GitHub repository:

JFeimster/ai-agent-library

Complete the following batch only:

Batch [NUMBER] — [TITLE]

Create or update exactly these repo files:

[file]
[file]
[file]
[file]

Also create this compiled handoff file:

batch-handoffs/batch-[NUMBER]-files.md

The handoff file must include:
1. Batch title
2. File list
3. One section per file
4. Full file path as the heading
5. Full contents of each file inside fenced code blocks
6. Validation checklist
7. PR notes

Rules:
- Work only this batch.
- Do not start future batches.
- Do not modify unrelated files.
- Do not change deployment settings.
- Do not add frameworks, package managers, or build steps.
- Use public-safe language.
- Use synthetic examples only.
- Do not include secrets, tokens, credentials, .env files, private data, backend provider bypass paths, fake testimonials, or unsupported claims.
- The handoff file must match the actual files created or updated.

Validation:
- Review Markdown manually.
- Validate JSON if changed.
- Review YAML if changed.
- Confirm the handoff file includes complete file contents.
- Confirm no unrelated files changed.

After editing:
1. Commit changes.
2. Open a PR into main.
3. Stop.

Report:
- Batch:
- Branch:
- Commit SHA:
- PR URL:
- Files changed:
- Handoff file:
- Validation performed:
- Known issues:
```

## Jules `NEXT_TASK.md` Update Prompt

Use this prompt to update only `NEXT_TASK.md`.

```text
You are working in:

JFeimster/ai-agent-library

Update only this file:

NEXT_TASK.md

Set the current approved task to:

[Batch or Issue Title]

Target branch:

[branch-name]

Base branch:

main

Files to create or update:

[file]
[file]
[file]
[file]

Objective:

[objective]

Rules:
- Only edit NEXT_TASK.md.
- Do not create or edit the task files.
- Do not start the task.
- Do not update future batches.
- Do not modify unrelated files.
- Keep the file structure consistent with the existing NEXT_TASK.md.
- Include scope rules, validation requirements, PR requirements, out-of-scope items, and done means.
- Use public-safe language.
- Do not include secrets or private data.

Validation:
- Review Markdown.
- Confirm exactly one task is approved.
- Confirm file paths are exact.
- Confirm future work is not accidentally approved.

After editing:
1. Commit with:

Update NEXT_TASK for [task title]

2. Open a PR into main.
3. Stop.
```

## Jules Repo Audit Prompt

Use this prompt when Jules should inspect repo state but not edit files.

```text
You are working in:

JFeimster/ai-agent-library

Perform a read-only repo audit.

Do not edit files.
Do not commit.
Do not open a PR.

Audit these areas:

1. Top-level repo structure
2. GitHub issue templates
3. GitHub workflows
4. Core docs
5. Trust/safety docs
6. Prompt chains
7. Agent index layer
8. Skill index layer
9. Knowledge-base index layer
10. Template index layer
11. Platform folders
12. Portfolio folders
13. Schemas and registry
14. Examples
15. Site data
16. Static site files, if present

For each area, report:
- Present files
- Missing expected files
- Duplicates or naming issues
- Broken obvious references
- Public-safe concerns
- Secrets/private-data concerns
- Recommended next issue

Rules:
- Do not invent files.
- Do not rely on assumed future state.
- Mark uncertain findings clearly.
- Do not modify anything.

Output:
- Structured audit
- Critical issues
- Recommended repair sequence
- Suggested next task
```

## Jules PR Review Prompt

Use this prompt when Jules should review a PR without editing.

```text
You are reviewing a pull request in:

JFeimster/ai-agent-library

Pull request:

#[PR_NUMBER]

Review goal:

[approve/comment/request changes/conflict review/safety review]

Do not edit files.
Do not merge.
Do not approve unless the PR is clearly safe and scoped.

Review for:
- Scope match
- Changed files
- Unexpected files
- Markdown completeness
- JSON validity
- YAML/workflow risk
- Static-site behavior if relevant
- Links and paths
- Secrets/private data
- Public-safe language
- Deployment impact
- Future-batch leakage
- Merge readiness

Use these repo standards:
- README.md
- JULES.md
- CONTRIBUTING.md
- SECURITY.md
- docs/repo-validation-checklist.md
- docs/privacy-and-sensitive-data-rules.md
- docs/naming-conventions.md

Output:
1. Decision: Approve / Comment / Request changes
2. Summary
3. Findings
4. Required changes
5. Suggested comments
6. Merge recommendation
```

## Jules Conflict Review Prompt

Use this when a PR has merge conflicts.

```text
You are reviewing merge conflicts in:

JFeimster/ai-agent-library

Pull request:

#[PR_NUMBER]

Do not resolve conflicts yet unless explicitly instructed.
Do not merge.

Inspect the conflicted files and recommend one of:

- accept current
- accept incoming
- accept both
- manual surgical merge
- close PR and reopen clean branch

For each conflicted file, report:
- File path
- What current branch appears to contain
- What incoming branch appears to contain
- Risk level
- Recommended action
- Reason
- Validation needed after resolution

Safety review:
- Confirm no secrets/private data should be kept.
- Confirm no unsafe public claims should be kept.
- Confirm no backend provider bypass paths should be kept.
- Confirm no unrelated future-batch work should be preserved.

Output:
- Conflict summary
- Per-file recommendation table
- Exact next steps
- Merge readiness after repair
```

## Jules Static Site Task Prompt

Use when Jules edits static site files.

```text
You are working in:

JFeimster/ai-agent-library

Complete this static-site task:

[task]

Files allowed:

[file]
[file]
[file]

Static site rules:
- Use plain HTML/CSS/JS only.
- Do not add React.
- Do not add Next.js.
- Do not add npm.
- Do not add package managers.
- Do not add a build step.
- Reuse existing CSS and JS patterns.
- Keep asset paths repo-relative.
- Do not change deployment settings unless explicitly requested.
- Keep CTA links accurate.
- Keep public-safe language.

Validation:
- Run or describe local static preview.
- Check page loads.
- Check CSS path.
- Check JS path.
- Check links and CTAs.
- Check browser console if possible.
- Check no private/internal links are exposed.

After editing:
1. Commit.
2. Open PR.
3. Stop.
```

## Jules JSON / Schema Task Prompt

Use when Jules edits JSON, schema, index, or registry files.

```text
You are working in:

JFeimster/ai-agent-library

Complete this structured-data task:

[task]

Files allowed:

[file]
[file]
[file]

Rules:
- Use valid JSON.
- Use two-space indentation.
- Use lowercase kebab-case slugs.
- Avoid duplicate slugs.
- Do not invent URLs.
- Do not reference files as existing unless they exist.
- Mark planned files clearly if needed.
- Use synthetic examples only.
- Do not include secrets or private data.

Validation:
- Run python -m json.tool on each changed JSON file.
- Check duplicate slugs.
- Check referenced paths.
- Check public-safe values.
- Confirm no private URLs or backend provider links.

After editing:
1. Commit.
2. Open PR.
3. Stop.
```

## Jules Repair Prompt

Use when a previous PR needs scoped repair.

```text
You are working in:

JFeimster/ai-agent-library

Repair the following issue only:

[issue or PR problem]

Allowed files:

[file]
[file]

Rules:
- Fix only the stated issue.
- Do not refactor unrelated files.
- Do not start future tasks.
- Do not change deployment config unless required.
- Preserve existing useful content.
- Use public-safe language.
- Do not include secrets/private data.
- Validate the repair.

After editing:
1. Commit with a repair-focused message.
2. Push to the existing branch if appropriate, or open a new repair PR.
3. Report validation.
4. Stop.
```

## Jules Issue Creation Prompt

Use when asking Jules to create GitHub issues from a backlog.

```text
You are working in:

JFeimster/ai-agent-library

Create GitHub issues for the following backlog items.

Backlog:

[item list]

Rules:
- Create one issue per item.
- Use clear issue titles.
- Include objective, files, scope, validation, out-of-scope items, and done means.
- Add labels only if existing labels are known or clearly appropriate.
- Do not create duplicate issues.
- Do not start implementation.
- Do not open PRs.
- Do not edit repo files.

Issue body structure:

## Objective

## Files

## Scope

## Validation

## Out of Scope

## Done Means
```

## Jules PR Body Template

Use this PR body for Jules-generated PRs.

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
[file]
[file]
[file]
```

## Validation

- [ ] Markdown reviewed
- [ ] JSON validates if changed
- [ ] YAML reviewed if changed
- [ ] Static site loads if changed
- [ ] Links checked if changed
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

## Follow-Up Tasks

- [ ] Follow-up item, if needed
```

## Jules Completion Report Template

Jules should report back in this format:

```text
Task:
Branch:
Commit SHA:
PR URL:
Files changed:
Validation performed:
Known issues:
Recommended next task:
```

## Jules Failure Report Template

When blocked, Jules should report:

```text
Task:
Status: Blocked

Blocker:
[blocker]

What was attempted:
[summary]

Files inspected:
[file]
[file]

Files changed:
[none or list]

Needed to continue:
[input needed]

Safety notes:
[notes]
```

## Jules Stop Rules

Jules must stop when:

- PR is opened
- task is blocked
- requested file does not exist and no safe path forward is clear
- merge conflict needs human decision
- secrets/private data are found
- task scope is unclear
- validation cannot be completed and risk is meaningful
- completing the task requires changing files outside approved scope

## Jules Review Checklist

Before completing a task, Jules should confirm:

- [ ] Approved task was read.
- [ ] Relevant docs were read.
- [ ] Only approved files changed.
- [ ] No future-batch work added.
- [ ] Markdown is complete.
- [ ] JSON validates if changed.
- [ ] YAML reviewed if changed.
- [ ] Static site checked if changed.
- [ ] Links checked if changed.
- [ ] No secrets.
- [ ] No private data.
- [ ] No backend provider bypass paths.
- [ ] No unsupported outcome claims.
- [ ] PR opened.
- [ ] Jules stopped.

## Done Means

Jules execution prompts are useful when they consistently produce:

- scoped branches
- expected files
- complete content
- public-safe language
- validation notes
- clean PRs
- no surprise changes
- clear stop points
