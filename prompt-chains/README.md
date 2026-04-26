# Prompt Chains

This folder is the command layer for sequencing the AI Agent Library buildout across ChatGPT, Jules, Codex, and future agents.

It does **not** replace `NEXT_TASK.md` or the one-issue-at-a-time Jules workflow. It adds a higher-level roadmap so grouped work can be planned, drafted, reviewed, and executed without losing PR discipline.

## Purpose

Use these prompt chains to:

- Group Issues #5–#16 into practical execution phases.
- Generate copy/paste prompts for Jules, ChatGPT, Codex, or other agents.
- Keep each implementation PR narrow and reviewable.
- Avoid scope creep across unrelated folders.
- Preserve `NEXT_TASK.md` as the single approved Jules task queue.
- Continue planning while a slower agent works an isolated PR.

## Core rule

Grouped prompt chains are for planning and sequencing. Implementation still happens through reviewed PRs.

Do not batch unrelated issue implementations into one PR just because they appear in the same phase.

## Files

```text
prompt-chains/
  README.md
  master-roadmap-prompt.md
  grouped-task-sequence.md
  jules-execution-prompts.md
  chatgpt-execution-prompts.md
  review-and-merge-checklist.md
  next-task-update-protocol.md
```

## Recommended use

1. Read `grouped-task-sequence.md` to understand phases.
2. Use `master-roadmap-prompt.md` to continue orchestration in ChatGPT.
3. Use `jules-execution-prompts.md` only after `NEXT_TASK.md` approves the exact issue.
4. Use `chatgpt-execution-prompts.md` to plan or draft scoped work while another agent is busy.
5. Use `review-and-merge-checklist.md` before approving any PR.
6. Use `next-task-update-protocol.md` after merge to advance the queue.

## Safety boundary

These prompts should never ask an agent to include:

- API keys
- Secrets
- Private client data
- Backend-provider bypass paths
- Unapproved lender/provider claims
- Unreviewed production automation actions

When in doubt, write the plan and stop.