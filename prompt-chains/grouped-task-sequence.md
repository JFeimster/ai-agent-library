# Grouped Task Sequence

This file groups the remaining AI Agent Library issues into execution phases.

The phases are for planning and sequencing. They are **not** permission to merge unrelated issue work into one PR.

## Active constraint

`NEXT_TASK.md` remains the single approved Jules task queue.

A phase can be planned as a group, but implementation should remain issue-scoped unless the user explicitly approves a grouped PR.

---

## Phase A — Core Knowledge Bases

### Issues

- #5 Add Moonshine Capital funding knowledge base
- #6 Add partner enablement knowledge base
- #7 Add engineering-as-marketing knowledge base
- #8 Add CRM, automation, content ops, and local referral knowledge bases

### Goal

Create the knowledge foundation that future agents, platform packs, examples, and schemas can reference.

### Expected folders

```text
knowledge-base/
  funding/
  partner-enablement/
  engineering-as-marketing/
  crm/
  automation/
  content-ops/
  local-referrals/
```

### Execution rule

Run each issue as its own PR unless a grouped documentation-only PR is explicitly approved.

### Recommended order

1. #5 Funding knowledge base
2. #6 Partner enablement knowledge base
3. #7 Engineering-as-marketing knowledge base
4. #8 CRM, automation, content ops, and local referral knowledge bases

---

## Phase B — Data + Platform Expansion

### Issues

- #9 Add schema definitions
- #10 Expand platform implementation packs
- #11 Expand reusable templates

### Goal

Turn the documentation library into a structured, reusable, cross-platform system.

### Expected folders

```text
schemas/
platforms/
templates/
```

### Execution rule

Schemas should land before platform/template expansion where possible, because the later files should reference canonical data structures.

### Recommended order

1. #9 Schema definitions
2. #10 Platform implementation packs
3. #11 Reusable templates

---

## Phase C — Portfolio + Roadmap Layer

### Issues

- #12 Add portfolio inventories
- #13 Add roadmap folder
- #14 Add agent usage examples

### Goal

Make the library usable as a public-facing portfolio, execution roadmap, and example library.

### Expected folders

```text
portfolio/
roadmap/
examples/
```

### Execution rule

Portfolio and examples should reference the knowledge bases, schemas, and platform packs created in earlier phases.

### Recommended order

1. #12 Portfolio inventories
2. #13 Roadmap folder
3. #14 Agent usage examples

---

## Phase D — Repo Hygiene + Final Crosslinks

### Issues

- #15 Add GitHub project hygiene files
- #16 Add final indexes and crosslinks

### Goal

Make the repo easier to maintain, review, navigate, and hand off to agents or human collaborators.

### Expected folders/files

```text
.github/
README.md
agents.md
agent-index.json
folder README files
crosslinks
```

### Execution rule

Run hygiene after the main structure exists so templates and indexes reference real files instead of wishful architecture cosplay.

### Recommended order

1. #15 GitHub project hygiene files
2. #16 Final indexes and crosslinks

---

## Parking lot

Issue #20 adds this prompt-chain system. It should land before Phase A if the user wants faster multi-agent orchestration.

Issue #4 may still be in progress through Jules. Do not block the Phase A planning process on Issue #4 unless #5 explicitly depends on the final ChatGPT GPT inventory output.