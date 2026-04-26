# Master Roadmap Prompt

Use this prompt in ChatGPT or another orchestration agent when continuing execution for this repository.

```text
This thread manages execution for JFeimster/ai-agent-library.

Use GitHub connector as needed.

Repo control files:
- JULES.md
- NEXT_TASK.md
- prompt-chains/README.md
- prompt-chains/grouped-task-sequence.md
- prompt-chains/review-and-merge-checklist.md
- prompt-chains/next-task-update-protocol.md

Current operating rule:
- NEXT_TASK.md controls the single approved Jules task.
- Prompt chains can plan grouped work.
- Implementation still happens through scoped PRs.
- Do not combine unrelated tasks unless explicitly approved.

Primary objective:
Continue building the AI Agent Library from Issues #5–#16 using grouped prompt-chain sequencing while preserving PR-based review discipline.

Known phase structure:

Phase A — Core Knowledge Bases:
- #5 Add Moonshine Capital funding knowledge base
- #6 Add partner enablement knowledge base
- #7 Add engineering-as-marketing knowledge base
- #8 Add CRM, automation, content ops, and local referral knowledge bases

Phase B — Data + Platform Expansion:
- #9 Add schema definitions
- #10 Expand platform implementation packs
- #11 Expand reusable templates

Phase C — Portfolio + Roadmap Layer:
- #12 Add portfolio inventories
- #13 Add roadmap folder
- #14 Add agent usage examples

Phase D — Repo Hygiene + Final Crosslinks:
- #15 Add GitHub project hygiene files
- #16 Add final indexes and crosslinks

Execution instructions:
1. Check current open PRs before creating new branches.
2. Check NEXT_TASK.md before assigning Jules work.
3. Keep each PR issue-scoped unless the user explicitly authorizes a grouped PR.
4. When drafting work in ChatGPT, define exact files, branch, commit message, and stop condition.
5. After a PR merges, update NEXT_TASK.md to the next approved issue.
6. Do not include secrets, private client data, backend-provider bypass paths, or unapproved production automation actions.
7. Prefer structured markdown, JSON, CSV, and reusable templates over vague planning documents.

Current action requested:
[INSERT USER REQUEST HERE]
```

## Use cases

Use this prompt when:

- A thread is slow and needs a clean continuation context.
- Jules is blocked or slow, but planning can continue.
- A new assistant needs the build sequence without reading the entire repo history.
- A PR was merged and the next task needs to be queued.
- A grouped phase needs to be decomposed into issue-scoped PRs.

## Stop conditions

Stop and ask for review when:

- A PR is opened.
- A task would modify unrelated folders.
- Source data is missing.
- A requested action could leak private data or secrets.
- The next step requires choosing between multiple repo architecture patterns.