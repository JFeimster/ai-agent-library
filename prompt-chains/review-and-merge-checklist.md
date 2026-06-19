# Review and Merge Checklist

## Purpose

This checklist defines how to review and merge AI Agent Library pull requests.

Use it for:

- Jules PRs
- Codex PRs
- ChatGPT-generated file batches
- human-authored PRs
- repo repair PRs
- workflow/config PRs
- static-site PRs
- data/schema PRs

The goal is to merge clean, scoped, useful work — not a haunted grab bag of partial docs, invalid JSON, accidental secrets, and “quick fixes” that age like milk. ✅

## Review Decision Options

Use one of these outcomes:

```text
Approve
Approve with comments
Comment only
Request changes
Close and replace
Needs human/manual review
```

## Quick Merge Readiness Gate

A PR is not merge-ready unless:

- [ ] The scope is clear.
- [ ] Changed files are expected.
- [ ] No unrelated refactors are included.
- [ ] No future-batch work is included.
- [ ] Markdown is complete if changed.
- [ ] JSON validates if changed.
- [ ] YAML is reviewed if changed.
- [ ] Static site loads if changed.
- [ ] No secrets are included.
- [ ] No private data is included.
- [ ] No unsupported public claims are included.
- [ ] Deployment impact is understood.
- [ ] Known issues are disclosed.

## Step 1 — Confirm PR Context

Check:

- [ ] PR title is specific.
- [ ] PR links to an issue or batch.
- [ ] PR body explains what changed.
- [ ] PR body lists files changed.
- [ ] PR body lists validation performed.
- [ ] PR body confirms scope control.
- [ ] PR body confirms safety review.
- [ ] PR body lists known issues.

Good PR title:

```text
Batch 38 — Add execution prompts for repo agents
```

Bad PR title:

```text
updates
```

## Step 2 — Confirm Changed Files

Review changed files.

Expected:

```text
The PR changes only files listed in the issue/batch.
```

Watch for:

- unrelated README rewrites
- unrelated CSS changes
- unrelated workflow edits
- unrelated `vercel.json` edits
- future-batch files
- generated cache files
- local machine files
- duplicate copies
- renamed files without reference updates

Checklist:

- [ ] Changed files match scope.
- [ ] No unexpected files.
- [ ] No deleted files unless expected.
- [ ] No generated junk.
- [ ] No local/private files.

## Step 3 — Scope Review

Ask:

```text
Does this PR do exactly what it was asked to do?
```

Approve scope when:

- the PR completes the listed files
- changes are connected to the issue
- supporting updates are minimal and explained

Request changes when:

- PR starts future batches
- PR refactors unrelated files
- PR changes deployment behavior without approval
- PR changes indexes unrelated to the task
- PR creates extra files not listed
- PR deletes useful existing content without reason

## Step 4 — Markdown Review

For Markdown files:

- [ ] H1 is clear.
- [ ] Purpose is included.
- [ ] Use cases or scope are clear.
- [ ] Procedure/rules are actionable.
- [ ] Guardrails are included where relevant.
- [ ] Examples are synthetic.
- [ ] Links are repo-relative where practical.
- [ ] Code fences are closed.
- [ ] No placeholder junk.
- [ ] No raw local paths.
- [ ] Content is complete, not a stub.

Common issues:

```text
TODO
FIXME
lorem ipsum
final final
C:\Users\
/mnt/data/
unfinished sections
unclosed code fences
```

## Step 5 — JSON Review

For JSON files:

- [ ] JSON parses.
- [ ] Two-space indentation is used.
- [ ] Slugs are lowercase kebab-case.
- [ ] No duplicate slugs.
- [ ] Paths are repo-relative.
- [ ] Referenced files exist or are clearly marked planned.
- [ ] URLs are not invented.
- [ ] Examples are synthetic.
- [ ] No secrets/private data.

Validation command:

```bash
python -m json.tool path/to/file.json
```

## Step 6 — YAML / Workflow Review

For `.github/workflows/` files:

- [ ] YAML indentation is valid.
- [ ] Workflow name is clear.
- [ ] Triggers are intentional.
- [ ] Permissions are minimal.
- [ ] No secrets are required unless explicitly approved.
- [ ] No auto-commit behavior unless explicitly approved.
- [ ] No write-all permissions unless justified.
- [ ] Error messages are readable.
- [ ] Scripts are understandable.
- [ ] Workflow does not accidentally run too broadly.

Preferred:

```yaml
permissions:
  contents: read
```

High-risk:

```yaml
permissions: write-all
```

## Step 7 — Static Site Review

If static site files changed:

- [ ] Homepage loads locally.
- [ ] Touched pages load locally.
- [ ] CSS path works.
- [ ] JS path works.
- [ ] Images/assets load.
- [ ] Navigation works.
- [ ] Primary CTA works.
- [ ] Secondary CTA works.
- [ ] Footer links work.
- [ ] Public JSON fetches work.
- [ ] No private/internal links are exposed.
- [ ] No obvious console errors.

Local preview:

```bash
python -m http.server 8080
```

or:

```bash
cd site
python -m http.server 8080
```

## Step 8 — Link and Path Review

Check:

- [ ] Markdown links point to real files or intentional planned files.
- [ ] HTML `href` links work.
- [ ] HTML `src` paths work.
- [ ] CSS `url(...)` paths work.
- [ ] JS `fetch(...)` paths work.
- [ ] JSON `path` fields are valid.
- [ ] Renamed files have updated references.
- [ ] No private admin/editor links are exposed.

## Step 9 — Security Review

Reject or request changes if PR includes:

- [ ] `.env`
- [ ] API keys
- [ ] access tokens
- [ ] OAuth secrets
- [ ] webhook secrets
- [ ] private keys
- [ ] credential files
- [ ] service account files
- [ ] private customer/client/borrower data
- [ ] bank statements
- [ ] tax records
- [ ] credit reports
- [ ] IDs
- [ ] raw CRM exports
- [ ] backend provider bypass paths

Search terms:

```text
sk-
ghp_
github_pat_
xoxb-
AIza
AKIA
client_secret
access_token
refresh_token
webhook_secret
api_key
```

## Step 10 — Public-Safe Language Review

Reject or request changes if public-facing content says:

```text
guaranteed approval
guaranteed funding
guaranteed credit improvement
guaranteed revenue
guaranteed income
guaranteed ranking
guaranteed traffic
everyone qualifies
no one gets denied
fix your credit
bypass underwriting
secret lender route
```

Prefer:

```text
educational
planning
readiness
compare options
possible fit
review required
terms vary
human review recommended
approval is not guaranteed
```

## Step 11 — Affiliate / Referral Review

If PR includes affiliate, referral, partner, sponsored, funding, or monetized links:

- [ ] Disclosure is included.
- [ ] Disclosure is near the CTA or relevant section.
- [ ] No outcome promises.
- [ ] No fake neutrality.
- [ ] URLs are user-provided or verified.
- [ ] Partner relationship is not invented.

Disclosure example:

```text
Disclosure: Some links may be affiliate or referral links. We may earn compensation if users choose them. Terms, pricing, approval, and outcomes vary.
```

## Step 12 — Deployment Impact Review

Check whether PR changes:

```text
vercel.json
package.json
.github/workflows/
site/
index.html
public assets
routing files
```

Confirm:

- [ ] Deployment impact is listed in PR body.
- [ ] No accidental deployment toggle.
- [ ] No package manager added.
- [ ] No build step added.
- [ ] Static root remains correct.
- [ ] Vercel settings are not changed unless approved.

Do not merge if deployment behavior changes without explanation.

## Step 13 — Workflow Status Review

Before merge:

- [ ] Required workflows pass.
- [ ] Failed workflows are understood.
- [ ] Warnings are reviewed.
- [ ] False positives are documented.
- [ ] Validation matches PR claims.

Do not treat green checks as a substitute for human review.

## Step 14 — Conflict Review

If PR has conflicts:

For each conflicted file, decide:

```text
accept current
accept incoming
accept both
manual surgical merge
close and replace
```

Use manual surgical merge when:

- both sides contain useful unique content
- one side has newer safety language
- one side has updated paths
- accepting either side wholesale would delete needed content

Close and replace when:

- conflicts are broad
- branch is stale
- PR includes too many unrelated changes
- repair risk exceeds value

## Step 15 — Final Merge Decision

### Approve

Use when:

- scope is correct
- validation is acceptable
- no safety/privacy issues
- deployment impact understood
- content is useful

Comment:

```md
Approved.

Scope matches the requested task, changed files are expected, and no obvious safety/privacy blockers were found.

Validation reviewed:
- Markdown/content
- JSON/YAML where applicable
- Links/paths where applicable
- Public-safe language
- Deployment impact

Merge recommendation: proceed.
```

### Comment Only

Use when PR is mostly fine but needs discussion.

```md
Review comment.

The PR is close, but I recommend clarifying the following before merge:

- [ ] Item 1
- [ ] Item 2

No merge blocker identified yet, pending maintainer judgment.
```

### Request Changes

Use when blockers exist.

```md
Requesting changes.

This PR should not merge yet.

Required fixes:
- [ ] Fix 1
- [ ] Fix 2
- [ ] Fix 3

Reason:
[Explain clearly.]

Please keep the repair scoped to this PR only. No unrelated refactors or future-batch work.
```

### Close and Replace

Use when branch/PR is too messy.

```md
Recommendation: close and replace with a clean branch.

Reason:
- The PR contains unrelated changes.
- Conflict or scope risk is high.
- A smaller clean PR will be safer to review.

Suggested replacement scope:
[file]
[file]
[file]
```

## Merge Method Guidance

Use the repo owner’s preferred merge method.

General guidance:

### Squash Merge

Good for:

- batch PRs
- docs PRs
- generated file batches
- single-issue PRs

### Merge Commit

Good for:

- preserving multi-commit history
- complex feature branches
- collaborative branches

### Rebase

Good for:

- clean linear history
- small PRs with meaningful commits

Avoid merging without checking repo convention.

## Post-Merge Checklist

After merge:

- [ ] Confirm PR merged into `main`.
- [ ] Confirm no immediate workflow failures on `main`.
- [ ] Update `NEXT_TASK.md` if next task needs approval.
- [ ] Close linked issue if not auto-closed.
- [ ] Create follow-up issues for out-of-scope items.
- [ ] Pull latest locally if using local repo.
- [ ] Confirm deployment behavior if relevant.

## PR Review Comment Template

Use this for full review.

```md
## Review

### Decision

[Approve / Comment / Request changes]

### Summary

[Brief summary]

### Findings

- Finding 1
- Finding 2
- Finding 3

### Required Changes

- [ ] Change 1
- [ ] Change 2

### Validation Reviewed

- [ ] Markdown/content
- [ ] JSON
- [ ] YAML/workflows
- [ ] Static site
- [ ] Links/paths
- [ ] Safety/privacy
- [ ] Public-safe language
- [ ] Deployment impact

### Merge Recommendation

[Recommendation]
```

## Batch Review Checklist

For batch PRs:

- [ ] Batch number matches queue.
- [ ] Batch title matches queue.
- [ ] Files match batch list.
- [ ] No future batch files included.
- [ ] Batch handoff file exists if required.
- [ ] Handoff content matches actual files.
- [ ] `NEXT_TASK.md` is updated only if intended.
- [ ] Suggested next batch is correct.
- [ ] PR stops at current batch.

## AI-Generated PR Checklist

For Jules/Codex/ChatGPT-generated PRs:

- [ ] AI did not invent repo facts.
- [ ] AI did not invent URLs.
- [ ] AI did not invent validation results.
- [ ] AI did not include fake examples as real facts.
- [ ] AI did not include unsupported claims.
- [ ] AI did not start future work.
- [ ] AI output is complete enough for humans to use.
- [ ] Human review confirms merge readiness.

## Do Not Merge Conditions

Do not merge if:

- [ ] secrets are present
- [ ] private data is present
- [ ] backend provider bypass paths are present
- [ ] unsafe claims are present
- [ ] JSON is invalid
- [ ] static site is broken
- [ ] workflows are risky
- [ ] deployment config changed accidentally
- [ ] package manager added without approval
- [ ] future-batch work is included
- [ ] unrelated refactors are included
- [ ] PR is too broad to review safely

## Done Means

A review is complete when:

- scope is verified
- files are reviewed
- validation is checked
- safety/privacy review is done
- deployment impact is understood
- final decision is clear
- required changes are actionable
- merge or non-merge recommendation is explicit
