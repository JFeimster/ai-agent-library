# Review and Merge Checklist

Use this checklist before approving, merging, or queue-advancing any PR in this repository.

## 1. Confirm issue alignment

- [ ] PR references the correct issue.
- [ ] PR title matches the issue goal.
- [ ] PR body explains what changed.
- [ ] PR does not claim completion of unrelated issues.

## 2. Check file scope

- [ ] Changed files match the approved issue.
- [ ] No future issue folders were started accidentally.
- [ ] No source-data files were duplicated unnecessarily.
- [ ] No build tooling, package managers, frameworks, or runtime dependencies were added unless explicitly approved.

## 3. Check content safety

- [ ] No API keys.
- [ ] No secrets.
- [ ] No private client data.
- [ ] No unapproved provider/lender claims.
- [ ] No backend-provider bypass paths.
- [ ] No production automation actions.

## 4. Check source-of-truth integrity

- [ ] Generated indexes match source files.
- [ ] Source files are referenced accurately.
- [ ] Missing values are marked `Unknown` instead of invented.
- [ ] Public-facing docs avoid private operational details.

## 5. Check navigation and crosslinks

- [ ] README links work or are clearly planned.
- [ ] Folder README files point to the right child files.
- [ ] Relative links are preferred over hardcoded repo URLs when possible.
- [ ] New files are discoverable from an index or README when appropriate.

## 6. Check merge readiness

- [ ] No merge conflicts.
- [ ] PR branch is up to date enough to merge cleanly.
- [ ] CI/status checks pass if configured.
- [ ] No accidental logs, temp files, screenshots, or local artifacts.

## 7. Review decision

### Approve when

- Scope is correct.
- Files are clean.
- Content is useful.
- No safety or data issues exist.
- Any small nits are non-blocking.

### Request changes when

- PR includes unrelated future work.
- Source data is duplicated or conflicting.
- Files are in the wrong folder.
- Private/sensitive details are present.
- Generated indexes are stale or inconsistent.
- README/crosslinks point to files that do not exist.

## 8. Post-merge action

After merge:

1. Confirm the linked issue closed or manually close it if appropriate.
2. Update `NEXT_TASK.md` to the next approved issue.
3. Keep the next task narrow.
4. Do not queue multiple Jules tasks at once unless the user explicitly changes the workflow.

## PR comment template — approve

```text
Reviewed against Issue #[NUMBER].

Recommended: merge.

Confirmed:
- Scope matches the approved issue.
- Changed files are in scope.
- No future issue work started.
- No secrets, private client data, or backend-provider bypass details found.
- Navigation/crosslinks are acceptable.

After merge, update NEXT_TASK.md to Issue #[NEXT].
```

## PR comment template — request changes

```text
Reviewed against Issue #[NUMBER].

Requesting changes before merge.

Blocking items:
1. [ITEM]
2. [ITEM]

Please fix only these items.
Do not expand scope.
Do not begin the next issue.
Stop after pushing the revision for re-review.
```