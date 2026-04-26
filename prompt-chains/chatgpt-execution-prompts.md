# ChatGPT Execution Prompts

Use these prompts when ChatGPT is planning, drafting, reviewing, or creating scoped PRs while Jules is slow or blocked.

ChatGPT may plan across a phase, but implementation should remain PR-scoped.

---

## Universal ChatGPT Repo Execution Prompt

```text
This thread manages execution for JFeimster/ai-agent-library.

Use GitHub connector as needed.

Before making repo changes:
1. Check current open PRs.
2. Check the relevant issue.
3. Confirm the intended branch and file scope.
4. Avoid touching unrelated files.

Task:
[INSERT TASK]

Rules:
- Keep work scoped to the requested issue or planning artifact.
- Do not combine unrelated tasks.
- Use reviewed PRs for implementation.
- Do not include secrets, API keys, private client data, or backend-provider bypass paths.
- If source data is missing, say so and mark values Unknown rather than inventing.

Deliver:
- Branch name
- Files changed
- Commit message
- PR title/body
- Review checklist
```

---

## Phase A Planning Prompt — Core Knowledge Bases

```text
Plan Phase A for JFeimster/ai-agent-library without implementing files yet.

Phase A issues:
- #5 Add Moonshine Capital funding knowledge base
- #6 Add partner enablement knowledge base
- #7 Add engineering-as-marketing knowledge base
- #8 Add CRM, automation, content ops, and local referral knowledge bases

For each issue, produce:
- Recommended branch name
- Exact file list
- Source assumptions
- Crosslinks to existing agents/platforms
- Guardrails
- PR stop condition

Do not create files yet unless explicitly approved.
```

---

## Issue Implementation Draft Prompt

```text
Prepare an implementation plan for Issue #[NUMBER] in JFeimster/ai-agent-library.

Use the issue body as source of truth.

Output:
1. Scope summary
2. Branch name
3. Exact files to create/update
4. Files not to touch
5. Content structure for each file
6. Risk notes
7. Review checklist
8. Jules prompt if this should be delegated
9. ChatGPT execution plan if this should be done here

Do not implement until approved.
```

---

## PR Review Prompt

```text
Review PR #[NUMBER] in JFeimster/ai-agent-library.

Check:
- Does it match the linked issue?
- Are changed files in scope?
- Did it start future issues?
- Are there secrets, private data, or unsafe backend-provider details?
- Are generated indexes consistent with source files?
- Are README links accurate?
- Are conflicts resolved?

Return:
- Approve or request changes
- Blocking issues
- Non-blocking notes
- Exact comment to leave on the PR if revisions are needed
```

---

## Queue Update Prompt

```text
A PR has merged in JFeimster/ai-agent-library.

Update NEXT_TASK.md to the next approved issue.

Inputs:
- Merged PR number: [PR]
- Completed issue: #[NUMBER]
- Next issue: #[NUMBER]
- Next branch: [BRANCH]

Rules:
- Update only NEXT_TASK.md unless explicitly asked otherwise.
- Remove the next issue from Upcoming Tasks.
- Preserve the reusable Jules prompt.
- Commit directly to main.
```