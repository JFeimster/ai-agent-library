# Next Task Update Protocol

Use this protocol after a PR is merged and the repo is ready to advance the queue.

`NEXT_TASK.md` is the control file for Jules. Keep it boring, explicit, and narrow.

## When to update

Update `NEXT_TASK.md` only after:

- The current PR has merged.
- The completed issue is done or intentionally closed.
- The next issue is selected by the user or confirmed by the roadmap.

Do not update `NEXT_TASK.md` while a PR is still open unless the user explicitly wants to re-queue work.

## Update rules

- [ ] Set Current Approved Task to exactly one issue.
- [ ] Include issue number.
- [ ] Include issue title.
- [ ] Include branch name.
- [ ] Set status to `Ready for Jules`.
- [ ] Remove the approved issue from Upcoming Tasks.
- [ ] Preserve the reusable Jules prompt.
- [ ] Do not add multiple current tasks.

## Template

```markdown
# Next Task Queue

This file tells Jules which single task is currently approved.

## Current Approved Task

Issue: #[NUMBER]  
Title: [ISSUE TITLE]  
Branch: `[BRANCH NAME]`  
Status: Ready for Jules

## Rule

Jules should only work the Current Approved Task.

After Jules opens a PR:

- Stop.
- Do not begin the next task.
- Wait for human review, merge, and queue update.

## Reusable Jules Prompt

```text
Use repository JFeimster/ai-agent-library.

Read JULES.md and NEXT_TASK.md.

Work only the Current Approved Task listed in NEXT_TASK.md.

Follow the linked GitHub issue exactly.

Create the branch, complete the task, commit changes, open a PR into main, then stop.

Do not begin the next task.
```

## Upcoming Tasks

1. #[NEXT] [TITLE]
2. #[NEXT] [TITLE]
```

## Recommended issue order after #4

If Issue #20 has not merged yet, consider queueing #20 before #5 so the prompt-chain system exists before the heavier knowledge-base buildout.

Otherwise:

1. #5 Add Moonshine Capital funding knowledge base
2. #6 Add partner enablement knowledge base
3. #7 Add engineering-as-marketing knowledge base
4. #8 Add CRM, automation, content ops, and local referral knowledge bases
5. #9 Add schema definitions
6. #10 Expand platform implementation packs
7. #11 Expand reusable templates
8. #12 Add portfolio inventories
9. #13 Add roadmap folder
10. #14 Add agent usage examples
11. #15 Add GitHub project hygiene files
12. #16 Add final indexes and crosslinks

## Commit message format

```text
Update next task to issue #[NUMBER]
```

## Final confirmation format

```text
NEXT_TASK.md updated to:

Issue #[NUMBER] — [TITLE]
Branch: [BRANCH]
Status: Ready for Jules

Commit: [SHA]
```