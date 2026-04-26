# Next Task Queue

This file tells Jules which single task is currently approved.

## Current Approved Task

Issue: #2  
Title: Add foundation docs and root structure  
Branch: `feature/foundation-docs-and-root-structure`  
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

1. #3 Add static Vercel-ready agent directory site
2. #4 Add ChatGPT GPT platform pack and Custom GPT inventory
3. #5 Add Moonshine Capital funding knowledge base
4. #6 Add partner enablement knowledge base
5. #7 Add engineering-as-marketing knowledge base
6. #8 Add CRM, automation, content ops, and local referral knowledge bases
7. #9 Add schema definitions
8. #10 Expand platform implementation packs
9. #11 Expand reusable templates
10. #12 Add portfolio inventories
11. #13 Add roadmap folder
12. #14 Add agent usage examples
13. #15 Add GitHub project hygiene files
14. #16 Add final indexes and crosslinks
