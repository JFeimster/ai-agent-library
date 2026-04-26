# Next Task Queue

This file tells Jules which single task is currently approved.

## Current Approved Task

Issue: #4  
Title: Add ChatGPT GPT platform pack and Custom GPT inventory  
Branch: `feature/chatgpt-gpts-platform-pack`  
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
