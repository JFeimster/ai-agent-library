# AI Agent Library

A practical, cross-platform library of **productized AI agent specs, prompt systems, knowledge-base templates, implementation guides, and deployment patterns**.

This repo starts with **28 complete Notion AI Agent specs**, then expands into platform packs for ChatGPT GPTs, Claude Projects, Gemini Gems, n8n agents, and Vercel-powered web apps.

It is not just a list of clever prompts. It is a build system for turning agent ideas into reusable workflows, partner tools, lead magnets, internal operating systems, and deployable AI products.

## What this repo is for

Use this library to:

- Design productized AI agents with clear buyers, pain points, rules, prompts, and monetization paths
- Convert Notion AI Agents into Custom GPTs, Claude Projects, Gemini Gems, n8n agents, and Vercel web apps
- Build repeatable knowledge-base systems for funding, partner enablement, CRM, content ops, automation, and referral growth
- Package agents as templates, internal tools, client deliverables, lead magnets, widgets, and SaaS-lite products
- Maintain an organized inventory of agents, platform packs, project assets, and reusable implementation patterns

## Current contents

```text
ai-agent-library/
  README.md
  agents.md
  agent-index.json

  agents/
    28 complete productized agent specs

  docs/
    Foundation documentation, repo purpose, conventions, and standards

  templates/
    agent-build-checklist.md
    agent-evaluation-scorecard.md
    notion-database-schema.md

  platforms/
    vercel-web-apps/
      architecture, conversion, deployment, API, UI, lead capture, monetization, examples, and templates
```

## Agent spec standard

Each agent file is designed to be usable as a source spec for multiple platforms. Agent specs include:

- Productized agent concept
- Buyer
- Pain solved
- Monetization path
- Agent bio / description
- Best-fit use cases
- Suggested instructions
- Rules and guardrails
- Conversation starters
- Prompt library
- Recommended knowledge-base files
- Integrations / connectors
- Suggested Notion database properties
- Packaging angle
- Success criteria
- Future platform expansion notes

## Agent list

| # | Agent | Category | File |
|---:|---|---|---|
| 1 | Funding Pipeline Triage Agent | Funding Ops | `agents/01-funding-pipeline-triage-agent.md` |
| 2 | Incomplete Application Rescue Agent | Funding Ops | `agents/02-incomplete-application-rescue-agent.md` |
| 3 | Partner Launch Kit Builder | Partner Enablement | `agents/03-partner-launch-kit-builder.md` |
| 4 | Broker Profile Builder | Partner Enablement | `agents/04-broker-profile-builder.md` |
| 5 | Funding Tool Router Agent | Asset Routing | `agents/05-funding-tool-router-agent.md` |
| 6 | Content-to-Agent Repurposer | Agent Creation | `agents/06-content-to-agent-repurposer.md` |
| 7 | SOP Goblin | Operations | `agents/07-sop-goblin.md` |
| 8 | Vercel Asset Librarian | Asset Management | `agents/08-vercel-asset-librarian.md` |
| 9 | Partner Training Coach | Partner Enablement | `agents/09-partner-training-coach.md` |
| 10 | Local Referral Partner Scout | Referral Growth | `agents/10-local-referral-partner-scout.md` |
| 11 | CRM Note Cleaner | CRM Ops | `agents/11-crm-note-cleaner.md` |
| 12 | Inbox Revenue Signal Scanner | Inbox Ops | `agents/12-inbox-revenue-signal-scanner.md` |
| 13 | Applicant Support Agent | Support | `agents/13-applicant-support-agent.md` |
| 14 | Market Intel Scout | Research | `agents/14-market-intel-scout.md` |
| 15 | SEO Article Brief Builder | Content Ops | `agents/15-seo-article-brief-builder.md` |
| 16 | Video-to-Blog Transformer | Content Ops | `agents/16-video-to-blog-transformer.md` |
| 17 | Lead Magnet Factory Agent | Growth | `agents/17-lead-magnet-factory-agent.md` |
| 18 | Affiliate Offer Matchmaker | Affiliate Ops | `agents/18-affiliate-offer-matchmaker.md` |
| 19 | Business Credit Builder Coach | Financial Ops | `agents/19-business-credit-builder-coach.md` |
| 20 | Cash Flow Copilot | Financial Ops | `agents/20-cash-flow-copilot.md` |
| 21 | Micro-Acquisition Deal Screener | M&A | `agents/21-micro-acquisition-deal-screener.md` |
| 22 | Grant Opportunity Scout | Funding Research | `agents/22-grant-opportunity-scout.md` |
| 23 | Meeting-to-Action Agent | Operations | `agents/23-meeting-to-action-agent.md` |
| 24 | Community Event Builder | Community | `agents/24-community-event-builder.md` |
| 25 | Agency Offer Architect | Offer Design | `agents/25-agency-offer-architect.md` |
| 26 | AI Wrapper Product Manager | Product | `agents/26-ai-wrapper-product-manager.md` |
| 27 | Notion Database Architect | Notion Ops | `agents/27-notion-database-architect.md` |
| 28 | Automation Workflow Spec Writer | Automation | `agents/28-automation-workflow-spec-writer.md` |

## Platform packs

Current:

```text
platforms/
  vercel-web-apps/
```

Recommended next platform packs:

```text
platforms/
  notion-ai/
  chatgpt-gpts/
  claude-projects/
  gemini-gems/
  n8n-agents/
  vercel-web-apps/
```

## Recommended next folders

```text
knowledge-base/
  funding/
  partner-enablement/
  crm/
  content-ops/
  automation/
  local-referrals/
  engineering-as-marketing/

portfolio/
  vercel/
  custom-gpts/

schemas/
  agent.schema.json
  custom-gpt.schema.json
  vercel-project.schema.json
  funding-product.schema.json
  webhook-event.schema.json

roadmap/
  phase-1-fast-mvp.md
  phase-2-distribution-system.md
  phase-3-marketplace-layer.md
  phase-4-platform-layer.md

examples/
  funding/
  partner-enablement/
  content-ops/
  automation/
```

## Suggested build order

1. Finish importing the complete generated agent files and Vercel platform pack.
2. Add `platforms/chatgpt-gpts/` using the Custom GPT inventory.
3. Add `knowledge-base/funding/` using the funding handbook and product portfolio report.
4. Add `knowledge-base/partner-enablement/` using partner routing and attribution rules.
5. Add `knowledge-base/engineering-as-marketing/` using tool and widget specs.
6. Add `portfolio/vercel/` and `portfolio/custom-gpts/` inventories.
7. Add `schemas/` so the library can power future apps, dashboards, and validation workflows.
8. Add `.github/` issue templates and PR templates for repeatable repo operations.

## Build philosophy

The goal is not to collect shiny AI toys.

The goal is to build repeatable operational agents that can become:

- Internal SOP machines
- Client deliverables
- Partner enablement tools
- Paid templates
- Lead magnets
- Productized services
- Web apps and embedded widgets
- Workflow automation modules
- Eventually, a full cross-platform agent operating system

Tiny robot interns are cute. Tiny robot interns with job descriptions, guardrails, and revenue paths are better.

## Working principle

Every useful agent should answer five questions:

1. Who is this for?
2. What painful job does it solve?
3. What knowledge does it need?
4. What output should it produce every time?
5. How can this become a product, workflow, or revenue-generating asset?

If an agent cannot answer those questions, it is not ready for the library yet.
