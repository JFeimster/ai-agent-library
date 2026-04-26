# Jules Execution Prompts

Use these prompts only when `NEXT_TASK.md` approves the exact issue.

Jules should not work future issues just because they appear in the same phase.

---

## Universal Jules Prompt

```text
Use repository JFeimster/ai-agent-library.

Read JULES.md and NEXT_TASK.md first.

Work only the Current Approved Task listed in NEXT_TASK.md.

Confirm the issue number, issue title, and branch name before editing files.

Follow the linked GitHub issue exactly.

Create or use the approved branch.

Complete only the files named or clearly implied by the approved issue.

Do not begin the next issue.
Do not modify unrelated files.
Do not include secrets, API keys, private client data, or backend-provider bypass paths.

Open a PR into main, then stop.
```

---

## Phase A Prompt — Core Knowledge Bases

Use only after a specific Phase A issue is approved in `NEXT_TASK.md`.

```text
Use repository JFeimster/ai-agent-library.

Read JULES.md, NEXT_TASK.md, and prompt-chains/grouped-task-sequence.md.

Work only the Current Approved Task listed in NEXT_TASK.md.

This task belongs to Phase A — Core Knowledge Bases.

Allowed general folder:
knowledge-base/

Do not implement other Phase A issues unless explicitly included in the current approved issue.

Preserve these boundaries:
- #5 funding only
- #6 partner enablement only
- #7 engineering-as-marketing only
- #8 CRM, automation, content ops, and local referrals only

Use structured markdown with practical definitions, routing logic, use cases, guardrails, and crosslinks where appropriate.

Do not include secrets, private client data, or backend-provider bypass paths.

Open a PR into main, then stop.
```

---

## Phase B Prompt — Data + Platform Expansion

Use only after a specific Phase B issue is approved in `NEXT_TASK.md`.

```text
Use repository JFeimster/ai-agent-library.

Read JULES.md, NEXT_TASK.md, and prompt-chains/grouped-task-sequence.md.

Work only the Current Approved Task listed in NEXT_TASK.md.

This task belongs to Phase B — Data + Platform Expansion.

Allowed general folders:
- schemas/
- platforms/
- templates/

Do not implement other Phase B issues unless explicitly included in the current approved issue.

Prefer machine-readable structure where useful.

Do not add package managers, build systems, runtime dependencies, or unrelated web app code unless the approved issue explicitly asks for them.

Open a PR into main, then stop.
```

---

## Phase C Prompt — Portfolio + Roadmap Layer

Use only after a specific Phase C issue is approved in `NEXT_TASK.md`.

```text
Use repository JFeimster/ai-agent-library.

Read JULES.md, NEXT_TASK.md, and prompt-chains/grouped-task-sequence.md.

Work only the Current Approved Task listed in NEXT_TASK.md.

This task belongs to Phase C — Portfolio + Roadmap Layer.

Allowed general folders:
- portfolio/
- roadmap/
- examples/

Do not invent URLs or project claims.
If source data is missing, mark values as Unknown.

Open a PR into main, then stop.
```

---

## Phase D Prompt — Repo Hygiene + Final Crosslinks

Use only after a specific Phase D issue is approved in `NEXT_TASK.md`.

```text
Use repository JFeimster/ai-agent-library.

Read JULES.md, NEXT_TASK.md, and prompt-chains/grouped-task-sequence.md.

Work only the Current Approved Task listed in NEXT_TASK.md.

This task belongs to Phase D — Repo Hygiene + Final Crosslinks.

Allowed general files/folders:
- .github/
- README.md
- agents.md
- agent-index.json
- folder README files
- crosslink/index files

Do not rewrite core content unnecessarily.
Prefer additive templates, checklists, crosslinks, and navigation improvements.

Open a PR into main, then stop.
```