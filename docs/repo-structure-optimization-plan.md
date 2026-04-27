# AI Agent Library Repo Structure Optimization Plan

## 1. Current Structure Snapshot

The repository has already evolved beyond the original narrow Notion AI Agent Library scope. The current root and major folder structure appears to include the following major assets:

```text
ai-agent-library/
  README.md
  agents.md
  agent-index.json
  index.html
  style.css
  script.js
  vercel.json
  DEPLOYMENT.md
  JULES.md
  NEXT_TASK.md
  My GPTs. (4-26-26).csv
  My GPTs. (4-26-26).json

  agents/
    01-funding-pipeline-triage-agent.md
    02-incomplete-application-rescue-agent.md
    ...
    28-automation-workflow-spec-writer.md

  docs/
    agent-spec-standard.md
    naming-conventions.md
    privacy-and-sensitive-data-rules.md
    repo-purpose.md

  knowledge-base/
    README.md
    funding/
    partner-enablement/

  platforms/
    vercel-web-apps/

  prompt-chains/
    README.md
    master-roadmap-prompt.md
    grouped-task-sequence.md
    jules-execution-prompts.md
    chatgpt-execution-prompts.md
    review-and-merge-checklist.md
    next-task-update-protocol.md

  templates/
    agent-build-checklist.md
    agent-evaluation-scorecard.md
    notion-database-schema.md

  site-data/
    agents.json
    platforms.json
```

The current repo already has strong foundations:

- `agents/` contains the canonical 28 productized agent specs.
- `agent-index.json` acts as the canonical machine-readable index for those agents.
- `index.html`, `style.css`, `script.js`, `vercel.json`, and `DEPLOYMENT.md` power a lightweight static Vercel-ready directory.
- `knowledge-base/funding/` and `knowledge-base/partner-enablement/` have started the domain knowledge layer.
- `platforms/vercel-web-apps/` establishes the first platform implementation pack.
- `prompt-chains/` establishes the execution/control layer for grouped issue sequencing, review discipline, and agent-assisted repo operations.

## 2. Current Structural Problem

The project started as a Notion AI Agent Library, but the repo is no longer just a Notion-specific prompt/spec collection. It is becoming a broader cross-platform AI Agent Library and operating system for:

- reusable agent specs;
- platform implementation packs;
- knowledge bases;
- templates;
- schemas;
- workflows;
- deployable web apps;
- partner enablement systems;
- engineering-as-marketing tools;
- portfolio inventories;
- roadmap and execution prompts.

The structure needs to make that scope obvious. Otherwise, the repo risks becoming a junk drawer of useful assets with weak boundaries between source data, public-facing docs, implementation templates, internal operating rules, and static-site rendering data.

The biggest structural issues to resolve are:

1. **Root-level crowding** — Static-site files, execution files, source data exports, and docs all currently live at root. Some belong there, but raw exports and operational docs need clearer homes.
2. **Notion-specific residue** — `templates/notion-database-schema.md` is useful, but the template layer needs to become cross-platform rather than Notion-first.
3. **Incomplete platform taxonomy** — `platforms/vercel-web-apps/` exists, but the repo needs consistent packs for ChatGPT GPTs, Claude Projects, Gemini Gems, n8n agents, Wix agents, and automation platforms.
4. **Knowledge-base expansion pressure** — Funding and partner enablement exist, but CRM, automation, content ops, local referrals, engineering-as-marketing, compliance, monetization, and verticals need planned slots.
5. **Source-of-truth ambiguity** — `agent-index.json` is canonical for agents, but `site-data/agents.json` also exists as a static mirror/fallback. This is acceptable only if the source-of-truth rules are explicit.
6. **Raw source data at root** — Files like `My GPTs. (4-26-26).csv` and `My GPTs. (4-26-26).json` should eventually move into `source-data/my-gpts/` or similar, with generated portfolio docs living separately.
7. **Missing README/index files** — Every major folder should explain its purpose, what belongs there, and what should not be placed there.
8. **Static site data model is early** — `site-data/platforms.json` currently appears too thin for a real public directory; it should expand into richer site-facing indexes for agents, tools, templates, verticals, portfolios, and knowledge bases.

## 3. Recommended Top-Level Structure

Recommended target structure:

```text
ai-agent-library/
  README.md
  agents.md
  agent-index.json
  index.html
  style.css
  script.js
  vercel.json
  DEPLOYMENT.md
  JULES.md
  NEXT_TASK.md

  agents/
    README.md
    01-example-agent.md
    ...

  docs/
    README.md
    repo-purpose.md
    repo-map.md
    agent-spec-standard.md
    naming-conventions.md
    privacy-and-sensitive-data-rules.md
    public-vs-internal-content-rules.md
    source-of-truth-rules.md
    contribution-guide.md
    glossary.md
    platform-conversion-framework.md
    repo-structure-optimization-plan.md

  platforms/
    README.md
    notion-ai/
    chatgpt-gpts/
    claude-projects/
    gemini-gems/
    n8n-agents/
    vercel-web-apps/
    wix-agents/
    zapier-make/

  knowledge-base/
    README.md
    funding/
    partner-enablement/
    crm/
    automation/
    content-ops/
    local-referrals/
    engineering-as-marketing/
    compliance/
    monetization/
    verticals/

  templates/
    README.md
    agent-spec-template.md
    gpt-instructions-template.md
    claude-project-template.md
    gemini-gem-template.md
    n8n-agent-template.md
    vercel-widget-template.md
    knowledge-base-template.md
    tool-spec-template.md
    lead-magnet-template.md
    workflow-spec-template.md

  schemas/
    README.md
    agent.schema.json
    platform-pack.schema.json
    knowledge-file.schema.json
    custom-gpt.schema.json
    workflow.schema.json
    webhook-event.schema.json
    tool.schema.json
    vertical.schema.json

  portfolio/
    README.md
    custom-gpts/
    vercel-projects/
    agent-products/
    prompt-packs/
    lead-magnets/
    client-ready-assets/

  source-data/
    README.md
    my-gpts/
    funding-products/
    vercel-projects/
    imported-csvs/
    raw-exports/

  site-data/
    README.md
    agents.json
    platforms.json
    knowledge-bases.json
    tools.json
    templates.json
    verticals.json
    portfolio.json

  prompt-chains/
    README.md
    master-roadmap-prompt.md
    grouped-task-sequence.md
    chatgpt-execution-prompts.md
    jules-execution-prompts.md
    review-and-merge-checklist.md
    next-task-update-protocol.md

  roadmap/
    README.md
    current-sprint.md
    backlog.md
    platform-expansion-roadmap.md
    monetization-roadmap.md

  examples/
    README.md
    agent-output-examples/
    workflow-examples/
    tool-examples/
    gpt-conversion-examples/

  web/
    README.md
    pages/
    components/
    data/
    embeds/
```

The near-term goal should not be to create all of these folders immediately. The better path is phased, additive, and PR-scoped: document the structure first, add README/index files next, then migrate files carefully.

## 4. Folder-by-Folder Recommendations

### Root

**Purpose:** The root should remain the repo entry point and static-site entry point.

**Belongs here:**

- `README.md`
- `agent-index.json`
- `agents.md`
- `index.html`
- `style.css`
- `script.js`
- `vercel.json`
- `DEPLOYMENT.md`
- `JULES.md`
- `NEXT_TASK.md`

**Does not belong here:**

- raw CSV/JSON exports;
- one-off source dumps;
- generated inventory files;
- long internal operating docs;
- platform-specific templates;
- source notes that only support one knowledge base.

**Recommended future files:**

- Keep root minimal.
- Add a root `CHANGELOG.md` only if release/version tracking becomes useful.
- Add `.github/` workflow and issue/PR templates in a separate hygiene PR.

### agents/

**Purpose:** Canonical source specs for productized agents.

**Belongs here:**

- one markdown file per agent;
- agent specs using the repo's standard sections;
- human-readable agent documentation.

**Does not belong here:**

- platform-specific GPT instructions;
- n8n workflows;
- raw exports;
- source data;
- generated public site cards.

**Recommended README/index files:**

- `agents/README.md` explaining that `agents/*.md` plus `agent-index.json` are canonical.
- Optionally `agents/category-index.md` for human browsing.

**Recommended future files:**

- `agents/README.md`
- `agents/category-index.md`
- `agents/agent-status-index.md`

### agent-index.json

**Purpose:** Canonical machine-readable source for the 28 agent directory cards.

**Belongs here:**

- normalized agent metadata;
- stable file paths;
- public-safe summaries.

**Does not belong here:**

- private implementation notes;
- platform-specific instructions;
- provider-sensitive routing logic;
- full agent prompts.

**Recommendation:** Keep at root because the static site already uses it as a canonical fetch target. If this grows, consider `site-data/agents.generated.json` as a generated derivative while preserving `agent-index.json` as the canonical source.

### docs/

**Purpose:** Repo-wide operating rules, standards, governance, contribution docs, and architectural decisions.

**Belongs here:**

- repo purpose;
- naming conventions;
- source-of-truth rules;
- privacy and public/internal content rules;
- platform conversion framework;
- contribution guide;
- repo map;
- glossary;
- restructure plan.

**Does not belong here:**

- raw data exports;
- individual agent specs;
- vertical-specific knowledge files;
- platform implementation pack files.

**Recommended README/index files:**

- `docs/README.md` listing every governance doc.

**Recommended future files:**

```text
docs/
  README.md
  source-of-truth-rules.md
  repo-map.md
  glossary.md
  contribution-guide.md
  public-vs-internal-content-rules.md
  platform-conversion-framework.md
```

### platforms/

**Purpose:** Platform-specific implementation packs for converting canonical agent specs into deployable assets.

**Belongs here:**

- ChatGPT GPT pack;
- Claude Project pack;
- Gemini Gem pack;
- n8n agent/workflow pack;
- Vercel web app pack;
- Wix agent/site assistant pack;
- Zapier/Make automation pack;
- platform-specific templates, checklists, publishing standards, and limitations.

**Does not belong here:**

- canonical agent specs;
- source exports;
- general repo docs;
- client-specific private data;
- generated portfolio inventories unless they are implementation-specific.

**Recommended README/index files:**

- `platforms/README.md`
- `platforms/{platform}/README.md` for each platform pack.

**Recommended future files:**

```text
platforms/notion-ai/README.md
platforms/chatgpt-gpts/README.md
platforms/claude-projects/README.md
platforms/gemini-gems/README.md
platforms/n8n-agents/README.md
platforms/vercel-web-apps/README.md
platforms/wix-agents/README.md
platforms/zapier-make/README.md
```

### knowledge-base/

**Purpose:** Domain knowledge files that agents, GPTs, workflows, and static tools can reference.

**Belongs here:**

- business-domain knowledge;
- routing rules;
- intake questions;
- compliance rules;
- public-safe language;
- internal-only logic when clearly labeled;
- vertical-specific knowledge layers.

**Does not belong here:**

- raw source exports;
- canonical agent specs;
- UI components;
- platform implementation docs;
- generated inventory files.

**Recommended README/index files:**

- `knowledge-base/README.md` already exists and should become the master index.
- Every subfolder should have a `README.md`.

**Recommended future files:**

```text
knowledge-base/crm/README.md
knowledge-base/automation/README.md
knowledge-base/content-ops/README.md
knowledge-base/local-referrals/README.md
knowledge-base/engineering-as-marketing/README.md
knowledge-base/compliance/README.md
knowledge-base/monetization/README.md
knowledge-base/verticals/README.md
```

### knowledge-base/funding/

**Purpose:** Funding product, qualification, routing, intake, and prospect-facing language source layer.

**Belongs here:**

```text
funding-product-portfolio-summary.md
funding-product-family-map.md
qualification-bands.md
fast-disqualifiers.md
required-documents-by-product-family.md
intake-questions.md
prospect-facing-language.md
internal-routing-logic.md
white-label-language-rules.md
```

**Does not belong here:**

- raw lender/provider exports;
- public pages that expose backend providers;
- approval guarantees;
- legal/tax/credit repair claims;
- private client files.

**Recommended future files:**

- `funding-readiness-scoring-model.md`
- `application-stage-definitions.md`
- `document-follow-up-playbook.md`
- `bank-connection-support-language.md`

### knowledge-base/partner-enablement/

**Purpose:** Partner lead generation, attribution, link tracking, microsites, launch kits, and affiliate protection standards.

**Belongs here:**

- front-end partner asset strategy;
- tracking parameter rules;
- partner microsite standards;
- broker profile resource card standards;
- affiliate protection rules.

**Does not belong here:**

- raw backend partner/provider URLs as primary public CTAs;
- untracked partner links;
- private applicant records;
- direct provider bypass rules.

**Recommended future files:**

- `partner-onboarding-checklist.md`
- `partner-daily-activity-system.md`
- `partner-content-swipe-file.md`
- `broker-profile-page-template.md`

### knowledge-base/compliance/

**Purpose:** Guardrails for public claims, disclaimers, affiliate disclosures, and privacy/data handling.

**Belongs here:**

```text
public-claims-rules.md
financial-content-disclaimers.md
affiliate-disclosure-rules.md
privacy-and-data-handling.md
```

**Does not belong here:**

- legal advice;
- invented regulatory interpretations;
- claims that imply guaranteed funding, credit repair, or tax outcomes.

### knowledge-base/monetization/

**Purpose:** Productization and revenue models for agent assets.

**Belongs here:**

```text
agent-productization-models.md
lead-magnet-models.md
paid-diagnostic-models.md
partner-licensing-models.md
micro-saas-conversion-paths.md
```

**Does not belong here:**

- raw customer billing data;
- private pricing negotiations;
- customer-specific contracts.

### knowledge-base/verticals/

**Purpose:** Vertical-specific use cases, language, pain points, and product/agent fit.

**Belongs here:**

```text
ecommerce.md
trucking.md
real-estate-investors.md
creators.md
agencies.md
consultants.md
local-service-businesses.md
startups.md
```

**Does not belong here:**

- full agent specs;
- raw lead lists;
- scraped private data;
- provider-sensitive routing details.

### templates/

**Purpose:** Reusable templates for creating new specs, platform packs, knowledge files, tools, workflows, and lead magnets.

**Belongs here:**

- blank templates;
- checklists;
- repeatable spec formats;
- user-facing boilerplate templates;
- implementation handoff templates.

**Does not belong here:**

- completed client deliverables;
- raw data;
- generated inventories;
- one-off notes.

**Recommended README/index files:**

- `templates/README.md`

**Recommended future files:**

```text
templates/agent-spec-template.md
templates/gpt-instructions-template.md
templates/claude-project-template.md
templates/gemini-gem-template.md
templates/n8n-agent-template.md
templates/vercel-widget-template.md
templates/knowledge-base-template.md
templates/tool-spec-template.md
templates/lead-magnet-template.md
templates/workflow-spec-template.md
```

### schemas/

**Purpose:** JSON schema definitions for validating agents, platform packs, knowledge files, workflows, tools, webhook events, and vertical records.

**Belongs here:**

- JSON schemas;
- schema README;
- example valid/invalid payload references if needed.

**Does not belong here:**

- live production payloads;
- secrets;
- raw webhook samples containing private customer data.

**Recommended README/index files:**

- `schemas/README.md`

**Recommended future files:**

```text
schemas/agent.schema.json
schemas/platform-pack.schema.json
schemas/knowledge-file.schema.json
schemas/custom-gpt.schema.json
schemas/workflow.schema.json
schemas/webhook-event.schema.json
schemas/tool.schema.json
schemas/vertical.schema.json
```

### portfolio/

**Purpose:** Inventory and commercialization layer for built assets: GPTs, Vercel tools, agent products, prompt packs, lead magnets, and client-ready assets.

**Belongs here:**

- inventories;
- productized asset indexes;
- keep/archive/delete matrices;
- portfolio status docs;
- public-safe descriptions;
- monetization notes.

**Does not belong here:**

- raw exports;
- unredacted private client data;
- backend provider-sensitive routing docs;
- platform implementation templates.

**Recommended README/index files:**

- `portfolio/README.md`
- `portfolio/custom-gpts/README.md`
- `portfolio/vercel-projects/README.md`
- `portfolio/agent-products/README.md`

**Recommended future files:**

```text
portfolio/agent-products/productized-agent-index.md
portfolio/agent-products/lead-magnet-agent-index.md
portfolio/agent-products/internal-ops-agent-index.md
portfolio/agent-products/partner-enablement-agent-index.md
portfolio/vercel-projects/vercel-project-index.md
portfolio/vercel-projects/keep-archive-delete-matrix.md
portfolio/vercel-projects/widget-embed-inventory.md
```

### source-data/

**Purpose:** Durable storage for imported raw source files and exports used to generate docs, indexes, or site data.

**Belongs here:**

- My GPTs CSV/JSON exports;
- Vercel project exports;
- funding product raw source notes;
- imported CSVs;
- raw exports from tools that should not be treated as polished docs.

**Does not belong here:**

- finished portfolio docs;
- public static site data;
- polished knowledge-base files;
- private records that should not be committed.

**Recommended README/index files:**

- `source-data/README.md`

**Recommended future files/folders:**

```text
source-data/my-gpts/
source-data/funding-products/
source-data/vercel-projects/
source-data/imported-csvs/
source-data/raw-exports/
```

**Migration note:** Move `My GPTs. (4-26-26).csv` and `My GPTs. (4-26-26).json` into `source-data/my-gpts/` in a later dedicated migration PR. Do not do it in the same PR as content rewrites.

### site-data/

**Purpose:** Public/static-site data files consumed by `script.js` or future site pages.

**Belongs here:**

- public-safe JSON indexes;
- generated/mirrored data for static rendering;
- site navigation records;
- card metadata.

**Does not belong here:**

- canonical longform source specs, unless intentionally duplicated as a generated build artifact;
- raw exports;
- private or internal-only routing rules;
- credentials or provider-sensitive links.

**Recommended README/index files:**

- `site-data/README.md`

**Recommended future files:**

```text
site-data/agents.json
site-data/platforms.json
site-data/knowledge-bases.json
site-data/tools.json
site-data/templates.json
site-data/verticals.json
site-data/portfolio.json
```

**Source-of-truth rule:** `agent-index.json` should remain the canonical source for agent cards. `site-data/agents.json` should either be marked as a fallback mirror or removed once the static site confidently loads the canonical file.

### prompt-chains/

**Purpose:** Repo-native command layer for task sequencing, execution prompts, PR review checklists, and queue discipline.

**Belongs here:**

- master roadmap prompts;
- grouped task sequences;
- ChatGPT execution prompts;
- Jules execution prompts;
- review/merge checklists;
- queue update protocols.

**Does not belong here:**

- actual knowledge-base implementations;
- raw source data;
- agent specs;
- static-site code.

**Recommended README/index files:**

- `prompt-chains/README.md` already exists.

**Recommended future files:**

- `prompt-chains/codex-execution-prompts.md`
- `prompt-chains/agent-mode-test-prompts.md`
- `prompt-chains/repo-audit-prompt.md`

### roadmap/

**Purpose:** Planning layer for current sprint, backlog, platform expansion, monetization, and release phases.

**Belongs here:**

- current sprint docs;
- backlog docs;
- roadmap docs;
- phase plans;
- prioritization criteria.

**Does not belong here:**

- canonical source specs;
- raw task dumps not shaped into roadmap items;
- implementation files.

**Recommended README/index files:**

- `roadmap/README.md`

**Recommended future files:**

```text
roadmap/current-sprint.md
roadmap/backlog.md
roadmap/platform-expansion-roadmap.md
roadmap/monetization-roadmap.md
```

### examples/

**Purpose:** Example outputs and implementation examples that show how the library assets should be used.

**Belongs here:**

- agent output examples;
- workflow examples;
- tool examples;
- GPT conversion examples;
- n8n workflow examples;
- Vercel widget examples.

**Does not belong here:**

- canonical templates;
- raw source data;
- production secrets;
- private customer outputs.

**Recommended README/index files:**

- `examples/README.md`

**Recommended future folders:**

```text
examples/agent-output-examples/
examples/gpt-conversion-examples/
examples/n8n-workflow-examples/
examples/vercel-widget-examples/
```

### web/

**Purpose:** Future home for a more structured web app if the static Vercel directory outgrows root-level HTML/CSS/JS.

**Belongs here:**

- future page definitions;
- reusable web components;
- embed snippets;
- web-specific data adapters;
- site rendering notes.

**Does not belong here:**

- current root static files until a migration PR intentionally moves them;
- canonical agent specs;
- raw exports.

**Recommended README/index files:**

- `web/README.md`

**Recommended future folders:**

```text
web/pages/
web/components/
web/data/
web/embeds/
```

**Migration note:** Do not move `index.html`, `style.css`, or `script.js` into `web/` until the static-site routing/deployment plan is updated and tested.

## 5. Recommended New Files and Pages

### A. Core repo docs

Priority order:

1. `docs/README.md`
2. `docs/source-of-truth-rules.md`
3. `docs/repo-map.md`
4. `docs/public-vs-internal-content-rules.md`
5. `docs/contribution-guide.md`
6. `docs/glossary.md`
7. `docs/platform-conversion-framework.md`
8. `docs/repo-structure-optimization-plan.md`

### B. Agent library expansion

1. `agents/README.md`
2. `agents/category-index.md`
3. `agents/agent-status-index.md`
4. `agent-index.json` validation notes in `docs/source-of-truth-rules.md`
5. agent lifecycle states: `draft`, `ready`, `converted`, `deployed`, `monetized`, `archived`

### C. Platform packs

1. `platforms/README.md`
2. `platforms/notion-ai/README.md`
3. `platforms/chatgpt-gpts/README.md`
4. `platforms/claude-projects/README.md`
5. `platforms/gemini-gems/README.md`
6. `platforms/n8n-agents/README.md`
7. `platforms/vercel-web-apps/README.md`
8. `platforms/wix-agents/README.md`
9. `platforms/zapier-make/README.md`

### D. Knowledge bases

1. `knowledge-base/crm/README.md`
2. `knowledge-base/automation/README.md`
3. `knowledge-base/content-ops/README.md`
4. `knowledge-base/local-referrals/README.md`
5. `knowledge-base/engineering-as-marketing/README.md`
6. `knowledge-base/compliance/README.md`
7. `knowledge-base/monetization/README.md`
8. `knowledge-base/verticals/README.md`

### E. Templates

1. `templates/README.md`
2. `templates/agent-spec-template.md`
3. `templates/gpt-instructions-template.md`
4. `templates/claude-project-template.md`
5. `templates/gemini-gem-template.md`
6. `templates/n8n-agent-template.md`
7. `templates/vercel-widget-template.md`
8. `templates/knowledge-base-template.md`
9. `templates/tool-spec-template.md`
10. `templates/lead-magnet-template.md`
11. `templates/workflow-spec-template.md`

### F. Schemas

1. `schemas/README.md`
2. `schemas/agent.schema.json`
3. `schemas/platform-pack.schema.json`
4. `schemas/knowledge-file.schema.json`
5. `schemas/custom-gpt.schema.json`
6. `schemas/workflow.schema.json`
7. `schemas/webhook-event.schema.json`
8. `schemas/tool.schema.json`
9. `schemas/vertical.schema.json`

### G. Portfolio inventories

1. `portfolio/README.md`
2. `portfolio/custom-gpts/README.md`
3. `portfolio/custom-gpts/custom-gpt-inventory.md`
4. `portfolio/custom-gpts/custom-gpt-index.csv`
5. `portfolio/vercel-projects/README.md`
6. `portfolio/vercel-projects/vercel-project-index.md`
7. `portfolio/vercel-projects/keep-archive-delete-matrix.md`
8. `portfolio/vercel-projects/widget-embed-inventory.md`
9. `portfolio/agent-products/productized-agent-index.md`
10. `portfolio/agent-products/lead-magnet-agent-index.md`
11. `portfolio/agent-products/internal-ops-agent-index.md`
12. `portfolio/agent-products/partner-enablement-agent-index.md`

### H. Static site / Vercel directory pages

1. homepage
2. agent directory page
3. agent detail pages
4. platform packs page
5. platform pack detail pages
6. knowledge-base index page
7. knowledge-base detail pages
8. tool library page
9. tool detail pages
10. GPT inventory page
11. Vercel app portfolio page
12. partner enablement page
13. funding agent OS page
14. engineering-as-marketing tools page
15. vertical solutions index page
16. vertical detail pages
17. template library page
18. portfolio index page

### I. Monetization / productization docs

1. `knowledge-base/monetization/agent-productization-models.md`
2. `knowledge-base/monetization/lead-magnet-models.md`
3. `knowledge-base/monetization/paid-diagnostic-models.md`
4. `knowledge-base/monetization/partner-licensing-models.md`
5. `knowledge-base/monetization/micro-saas-conversion-paths.md`
6. `portfolio/agent-products/productized-agent-index.md`
7. `portfolio/lead-magnets/README.md`
8. `portfolio/client-ready-assets/README.md`

### J. Partner-facing enablement docs

1. `knowledge-base/partner-enablement/partner-onboarding-checklist.md`
2. `knowledge-base/partner-enablement/partner-daily-activity-system.md`
3. `knowledge-base/partner-enablement/partner-content-swipe-file.md`
4. `knowledge-base/partner-enablement/broker-profile-page-template.md`
5. `templates/partner-launch-kit-template.md`
6. `templates/partner-microsite-template.md`
7. `templates/broker-profile-template.md`

### K. Internal operating docs

1. `docs/source-of-truth-rules.md`
2. `docs/public-vs-internal-content-rules.md`
3. `docs/repo-map.md`
4. `docs/contribution-guide.md`
5. `roadmap/current-sprint.md`
6. `roadmap/backlog.md`
7. `prompt-chains/repo-audit-prompt.md`
8. `.github/pull_request_template.md`
9. `.github/ISSUE_TEMPLATE/feature_request.md`
10. `.github/ISSUE_TEMPLATE/restructure-task.md`

## 6. Static Site / Vercel Directory Recommendations

The current static site is a useful MVP. The next version should become a lightweight public directory and portfolio front end for the library.

Recommended public-facing pages:

```text
/
/agents
/agents/{slug}
/platforms
/platforms/{platform-slug}
/knowledge-base
/knowledge-base/{domain-slug}
/tools
/tools/{tool-slug}
/templates
/templates/{template-slug}
/portfolio
/portfolio/custom-gpts
/portfolio/vercel-projects
/partner-enablement
/funding-agent-os
/engineering-as-marketing
/verticals
/verticals/{vertical-slug}
```

Recommended site-data files:

```text
site-data/agents.json
site-data/platforms.json
site-data/knowledge-bases.json
site-data/tools.json
site-data/templates.json
site-data/verticals.json
site-data/portfolio.json
```

Recommended card fields for `site-data/tools.json`:

```json
{
  "id": "trucker-repair-to-revenue-tracker",
  "name": "Trucker Repair-to-Revenue Tracker",
  "category": "Engineering-as-Marketing",
  "audience": "Independent truckers and owner-operators",
  "problemSolved": "Estimate how long a repair takes to recover through revenue.",
  "status": "deployed",
  "platform": "vercel",
  "publicUrl": "Unknown",
  "repoUrl": "Unknown",
  "embedReady": true,
  "leadCapture": true,
  "sourceSpec": "Unknown"
}
```

Recommended card fields for `site-data/platforms.json`:

```json
{
  "id": "chatgpt-gpts",
  "name": "ChatGPT GPTs",
  "path": "platforms/chatgpt-gpts",
  "status": "planned",
  "description": "Implementation pack for converting canonical agent specs into Custom GPTs.",
  "templates": [
    "gpt-instructions-template.md",
    "gpt-knowledge-file-checklist.md"
  ]
}
```

Static site rules:

- Keep public JSON files public-safe.
- Never expose private client data, secrets, API keys, or raw backend provider routing.
- Keep internal-only routing logic in `knowledge-base/` with clear labels, not in public `site-data/`.
- Keep `agent-index.json` canonical unless a future build process intentionally generates derived site data.
- Add badges/status fields so users can see whether an asset is `spec-only`, `template-ready`, `deployed`, `monetized`, or `archived`.

## 7. Suggested Migration Plan

### Phase 1 — Audit and index current structure

- Add this report.
- Create `docs/repo-map.md`.
- Confirm current root files and major folders.
- Identify duplicate source-of-truth files.
- Mark which files power the static site.

### Phase 2 — Normalize root folders and README files

- Add missing README files to major folders.
- Add `docs/source-of-truth-rules.md`.
- Add `docs/public-vs-internal-content-rules.md`.
- Do not move files yet.

### Phase 3 — Expand platform packs

- Add `platforms/README.md`.
- Normalize `platforms/vercel-web-apps/` index.
- Add placeholder README files for the next platform packs.
- Revisit the unfinished ChatGPT GPT platform pack replacement after source-data rules are in place.

### Phase 4 — Expand knowledge-base folders

- Add CRM, automation, content ops, local referrals, engineering-as-marketing, compliance, monetization, and vertical folders.
- Each folder should start with README/index files before deep content expansion.
- Preserve public/internal boundaries.

### Phase 5 — Add schemas and source-data rules

- Add `schemas/README.md` and draft schema list.
- Add `source-data/README.md`.
- Move raw GPT exports into `source-data/my-gpts/` in a dedicated migration PR.
- Document which files are canonical and which files are generated.

### Phase 6 — Add portfolio and monetization structure

- Add `portfolio/README.md`.
- Add `portfolio/custom-gpts/`, `portfolio/vercel-projects/`, and `portfolio/agent-products/` structure.
- Create inventory docs from source-data files only after source-data rules are documented.

### Phase 7 — Wire static site / Vercel data files

- Expand `site-data/` indexes.
- Add public-safe data files for knowledge bases, tools, templates, verticals, and portfolio assets.
- Update `script.js` only after data files are stable.
- Avoid moving `index.html`, `style.css`, or `script.js` until static routing is tested.

### Phase 8 — Final crosslinks and cleanup

- Update root `README.md`.
- Add crosslinks between agents, platform packs, knowledge bases, templates, schemas, and portfolio docs.
- Remove duplicates only after references are updated.
- Run final link and source-of-truth review.

## 8. PR Plan

Restructure should be split into small PRs. Do not combine unrelated work. Do not move files and rewrite content in the same PR unless necessary.

Recommended PR sequence:

### PR 1 — Add repo structure optimization plan

**Branch:** `feature/repo-structure-optimization-plan`

**Files:**

```text
docs/repo-structure-optimization-plan.md
```

**Do not touch:**

- root static site files;
- existing agent specs;
- `agent-index.json`;
- knowledge-base files;
- source exports.

### PR 2 — Add missing top-level README files

**Files:**

```text
agents/README.md
docs/README.md
platforms/README.md
templates/README.md
site-data/README.md
```

### PR 3 — Add source-data folder and rules

**Files:**

```text
source-data/README.md
docs/source-of-truth-rules.md
```

Optional later migration:

```text
source-data/my-gpts/My GPTs. (4-26-26).csv
source-data/my-gpts/My GPTs. (4-26-26).json
```

### PR 4 — Normalize platform pack structure

**Files:**

```text
platforms/notion-ai/README.md
platforms/chatgpt-gpts/README.md
platforms/claude-projects/README.md
platforms/gemini-gems/README.md
platforms/n8n-agents/README.md
platforms/wix-agents/README.md
platforms/zapier-make/README.md
```

### PR 5 — Normalize knowledge-base structure

**Files:**

```text
knowledge-base/crm/README.md
knowledge-base/automation/README.md
knowledge-base/content-ops/README.md
knowledge-base/local-referrals/README.md
knowledge-base/engineering-as-marketing/README.md
knowledge-base/compliance/README.md
knowledge-base/monetization/README.md
knowledge-base/verticals/README.md
```

### PR 6 — Add expanded templates index

**Files:**

```text
templates/README.md
templates/agent-spec-template.md
templates/gpt-instructions-template.md
templates/claude-project-template.md
templates/gemini-gem-template.md
templates/n8n-agent-template.md
templates/vercel-widget-template.md
templates/knowledge-base-template.md
templates/tool-spec-template.md
templates/lead-magnet-template.md
templates/workflow-spec-template.md
```

### PR 7 — Add schemas index and draft schema list

**Files:**

```text
schemas/README.md
schemas/agent.schema.json
schemas/platform-pack.schema.json
schemas/knowledge-file.schema.json
schemas/custom-gpt.schema.json
schemas/workflow.schema.json
schemas/webhook-event.schema.json
schemas/tool.schema.json
schemas/vertical.schema.json
```

### PR 8 — Add portfolio structure

**Files:**

```text
portfolio/README.md
portfolio/custom-gpts/README.md
portfolio/vercel-projects/README.md
portfolio/agent-products/README.md
portfolio/prompt-packs/README.md
portfolio/lead-magnets/README.md
portfolio/client-ready-assets/README.md
```

### PR 9 — Add roadmap structure

**Files:**

```text
roadmap/README.md
roadmap/current-sprint.md
roadmap/backlog.md
roadmap/platform-expansion-roadmap.md
roadmap/monetization-roadmap.md
```

### PR 10 — Update static site data model

**Files:**

```text
site-data/knowledge-bases.json
site-data/tools.json
site-data/templates.json
site-data/verticals.json
site-data/portfolio.json
```

Possible updates:

```text
script.js
index.html
style.css
```

Only touch static-site files after the data model is reviewed.

### PR 11 — Final crosslink cleanup

**Files:**

- `README.md`
- folder README files;
- crosslinked docs;
- static-site links if needed.

## 9. Risks / Things Not To Break

- Do not delete current agent specs.
- Do not break `agent-index.json`.
- Do not break static site card rendering.
- Do not duplicate source-of-truth files unnecessarily.
- Do not expose private client data.
- Do not expose backend providers in public-facing Moonshine Capital docs unless explicitly approved.
- Do not add secrets, API keys, tokens, private credentials, or signed private URLs unless explicitly approved for public storage.
- Do not make funding approval guarantees.
- Do not make legal, tax, financial, or credit repair claims.
- Do not mix file moves with content rewrites unless absolutely necessary.
- Do not move root static-site files until the Vercel deployment path is tested.
- Do not treat `site-data/*.json` as canonical if a richer source file already exists elsewhere.
- Do not let platform-specific files leak into `agents/`.
- Do not let raw exports masquerade as polished portfolio docs.
- Do not add provider-sensitive routing logic to public static-site JSON.

## 10. Final Recommendation

The recommended next PR is this report only.

**Exact branch name:**

```text
feature/repo-structure-optimization-plan
```

**Exact PR title:**

```text
Add AI Agent Library repo structure optimization plan
```

**Commit message:**

```text
Add repo structure optimization plan
```

**Files to create/change now:**

```text
docs/repo-structure-optimization-plan.md
```

**Files not to touch in this PR:**

```text
README.md
agent-index.json
agents.md
agents/**
knowledge-base/**
platforms/**
templates/**
site-data/**
prompt-chains/**
index.html
style.css
script.js
vercel.json
DEPLOYMENT.md
JULES.md
NEXT_TASK.md
My GPTs. (4-26-26).csv
My GPTs. (4-26-26).json
```

This repo is no longer just a Notion AI Agent Library. It is becoming a cross-platform agent operating system. The structure should support that reality without turning the repo into a digital storage unit full of haunted spreadsheets.
