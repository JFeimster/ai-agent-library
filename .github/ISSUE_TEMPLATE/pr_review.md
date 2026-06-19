---
name: PR Review
about: Review an open pull request for scope, safety, correctness, and merge readiness
title: "[PR Review]: PR #"
labels: pr-review
assignees: ""
---

## Pull Request

```text
#[PR number]
```

## Review Goal

Select one:

- [ ] Approve if clean
- [ ] Comment with revisions
- [ ] Request changes if unsafe/broken
- [ ] Review conflicts
- [ ] Review deployment impact
- [ ] Review static site behavior
- [ ] Review data/schema changes
- [ ] Review public-safe language
- [ ] Review Jules/Codex output
- [ ] Other: [describe]

## PR Summary

Summarize what the PR claims to do.

```text
[PR summary]
```

## Linked Issue

```text
#[issue number]
```

## Review Areas

Select all that apply:

- [ ] Scope discipline
- [ ] File changes
- [ ] Static site pages
- [ ] CSS/layout
- [ ] JavaScript behavior
- [ ] JSON/data
- [ ] Schemas
- [ ] Agent specs
- [ ] Skill files
- [ ] Knowledge bases
- [ ] Platform packs
- [ ] Templates
- [ ] GitHub issue/PR templates
- [ ] Vercel config
- [ ] Deployment behavior
- [ ] Public-safe language
- [ ] Safety/privacy
- [ ] Merge conflicts

## Expected Files Changed

List files expected to be changed.

```text
[path]
[path]
[path]
```

## Unexpected Files To Watch For

List files that should not be touched unless clearly justified.

```text
[path]
[path]
[path]
```

## Scope Review

Reviewer should confirm:

- [ ] PR matches linked issue
- [ ] PR does not include future task work
- [ ] PR does not include unrelated refactors
- [ ] PR does not rewrite large files without reason
- [ ] PR does not delete important content accidentally
- [ ] PR does not add package managers/frameworks unless approved
- [ ] PR does not change deployment settings unless approved

## Static Site Review

Complete if site files changed:

- [ ] Pages load
- [ ] Navigation works
- [ ] CSS loads
- [ ] JS loads
- [ ] Data fetches work
- [ ] Search/filter works if touched
- [ ] Mobile layout is acceptable
- [ ] CTA links work
- [ ] Footer links work
- [ ] No obvious console errors
- [ ] No broken asset paths

Pages to test:

```text
[path or URL]
[path or URL]
```

## Data / Schema Review

Complete if structured files changed:

- [ ] JSON validates
- [ ] CSV headers are preserved
- [ ] Schema validates or is structurally correct
- [ ] Index entries match real files
- [ ] Slugs are lowercase kebab-case
- [ ] No duplicate slugs
- [ ] User-provided URLs are preserved
- [ ] Missing fields are not invented
- [ ] Public/private visibility is labeled

Validation commands:

```bash
python -m json.tool [path]
```

## Public-Safe Language Review

Complete if public-facing copy changed:

- [ ] No guaranteed approval
- [ ] No guaranteed funding
- [ ] No guaranteed credit improvement
- [ ] No guaranteed revenue/income
- [ ] No guaranteed SEO/ranking/traffic
- [ ] No legal/tax/lending/investment advice as final guidance
- [ ] No credit repair framing unless explicitly reviewed
- [ ] Affiliate/referral disclosure included if needed
- [ ] Examples are synthetic
- [ ] Claims are qualified with review-required language where needed

## Safety / Privacy Review

Confirm no:

- [ ] API keys
- [ ] Tokens
- [ ] OAuth secrets
- [ ] Webhook secrets
- [ ] `.env` files
- [ ] Private customer/client/borrower data
- [ ] Bank statements
- [ ] Tax records
- [ ] Credit reports
- [ ] IDs or sensitive documents
- [ ] Backend provider bypass paths
- [ ] Hidden private admin/editor URLs
- [ ] Internal partner economics in public files
- [ ] Fake testimonials or unverifiable social proof

## Vercel / Deployment Review

Complete if deployment config changed:

- [ ] `vercel.json` change is intentional
- [ ] `deploymentEnabled` value is correct
- [ ] Preview deployment behavior is understood
- [ ] Production deployment behavior is understood
- [ ] Security headers are preserved if applicable
- [ ] No build step added unless approved
- [ ] Root/output directory assumptions are correct

Expected deployment setting:

```json
{
  "git": {
    "deploymentEnabled": false
  }
}
```

or:

```json
{
  "git": {
    "deploymentEnabled": true
  }
}
```

Explain:

```text
[Deployment review notes]
```

## Conflict Review

Complete if PR has conflicts.

Conflicted files:

```text
[path]
[path]
[path]
```

Recommended conflict action:

- [ ] Accept current
- [ ] Accept incoming
- [ ] Accept both
- [ ] Manual surgical merge
- [ ] Close PR and reopen clean branch

Conflict notes:

```text
[Notes]
```

## Review Decision

Select one:

- [ ] Approve
- [ ] Approve with minor comments
- [ ] Comment only
- [ ] Request changes
- [ ] Close PR and replace with clean branch
- [ ] Needs human/manual review before merge

## Review Comment Draft

Use this if commenting on the PR.

```md
## Review

### Decision

[Approve / Comment / Request changes]

### Findings

- Finding 1
- Finding 2
- Finding 3

### Required Revisions

- [ ] Revision 1
- [ ] Revision 2
- [ ] Revision 3

### Validation Requested

- [ ] Validation 1
- [ ] Validation 2

### Notes

[Notes]
```

## Approval Comment Draft

Use this if approving.

```md
Approved.

Scope matches the linked issue, changed files are expected, and no obvious safety/privacy issues were found.

Validation reviewed:
- [ ] Markdown/content
- [ ] JSON/data
- [ ] Static site behavior
- [ ] Public-safe language
- [ ] Deployment impact

Merge recommendation: proceed.
```

## Request Changes Comment Draft

Use this if requesting changes.

```md
Requesting changes.

This PR needs revisions before merge.

Required fixes:
- [ ] Fix 1
- [ ] Fix 2
- [ ] Fix 3

Reason:
[Explain clearly.]

Please keep the repair scoped to this PR only. No unrelated refactors, future issue work, or deployment changes unless specifically required.
```

## Acceptance Criteria

This PR review is complete when:

- [ ] PR scope has been checked
- [ ] Changed files have been reviewed
- [ ] Safety/privacy review is complete
- [ ] Public-safe language review is complete if applicable
- [ ] Validation requirements are listed
- [ ] Deployment impact is reviewed if applicable
- [ ] Conflict recommendation is provided if applicable
- [ ] Final decision is clear
