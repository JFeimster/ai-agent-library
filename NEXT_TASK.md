# Next Task Queue

This file tells Jules which single task is currently approved.

## Current Approved Task

Issue: #3  
Title: Add static Vercel-ready agent directory site  
Branch: `feature/static-agent-directory-site`  
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

1. #4 Add ChatGPT GPT platform pack and Custom GPT inventory
2. #5 Add Moonshine Capital funding knowledge base
3. #6 Add partner enablement knowledge base
4. #7 Add engineering-as-marketing knowledge base
5. #8 Add CRM, automation, content ops, and local referral knowledge bases
6. #9 Add schema definitions
7. #10 Expand platform implementation packs
8. #11 Expand reusable templates
9. #12 Add portfolio inventories
10. #13 Add roadmap folder
11. #14 Add agent usage examples
12. #15 Add GitHub project hygiene files
13. #16 Add final indexes and crosslinks
