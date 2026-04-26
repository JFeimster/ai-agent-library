# Vercel Web Agent Architecture

## 1. Core Architecture

```text
User
  ↓
Landing Page / Tool Page
  ↓
Input Form
  ↓
Next.js API Route
  ↓
Agent Prompt + Knowledge Context
  ↓
AI Gateway / AI Provider
  ↓
Structured JSON or Markdown Output
  ↓
Result UI + Copy/Export
  ↓
Optional Webhook / CRM / Notion Save
```

## 2. Recommended App Layers

### Presentation Layer

- `/app/page.tsx` — landing page
- `/app/tools/[slug]/page.tsx` — individual agent tool page
- `/components/AgentForm.tsx` — reusable form
- `/components/AgentResult.tsx` — output renderer
- `/components/LeadCapture.tsx` — optional lead gate

### Agent Config Layer

- `/lib/agents/*.json` — one config per agent
- `/lib/prompts/*.ts` — prompt builders
- `/lib/schemas/*.ts` — validation schemas
- `/lib/output-formatters.ts` — markdown/JSON cleanup

### API Layer

- `/app/api/agent/run/route.ts` — generic agent runner
- `/app/api/leads/route.ts` — lead capture endpoint
- `/app/api/webhooks/notion/route.ts` — save to Notion
- `/app/api/webhooks/hubspot/route.ts` — save to HubSpot
- `/app/api/health/route.ts` — sanity check

### Data Layer

Start simple:

- JSON files for agent config
- Environment variables for keys
- n8n webhooks for workflow routing

Upgrade later:

- Supabase
- Neon/Postgres
- Vercel Postgres
- Notion API
- HubSpot CRM API
- Wix CMS API

## 3. Deployment Model

### Public Lead Magnet

Best for:
- Referral Partner Scout
- Business Credit Builder Coach
- Cash Flow Copilot
- Lead Magnet Factory Agent

Pattern:
```text
Public page → free scan/report → email capture → AI result → CTA
```

### Internal Ops Tool

Best for:
- Funding Pipeline Triage Agent
- CRM Note Cleaner
- Inbox Revenue Signal Scanner
- Automation Workflow Spec Writer

Pattern:
```text
Private page → paste data → structured output → copy to CRM/Notion
```

### Partner Portal Tool

Best for:
- Partner Launch Kit Builder
- Broker Profile Builder
- Partner Training Coach
- Funding Tool Router

Pattern:
```text
Partner login → tool selection → guided form → partner-specific output
```

### Embeddable Widget

Best for:
- Calculators
- Checklists
- Short assessments
- Tool routers
- Referral scout forms

Pattern:
```text
Standalone Vercel page → iframe embed in Wix/Notion/partner site
```

## 4. Recommended Design Rules

- One page, one job.
- One primary CTA.
- Make outputs copyable.
- Save the source input with the output when possible.
- Do not bury the lead capture behind 7 existential questions.
- Use plain English field labels.
- Make it mobile-friendly.
- Make the loading state feel intentional.
- Include error states that a normal human understands.

## 5. Security Notes

- Never expose API keys in client components.
- All AI calls belong in server routes.
- Validate and sanitize user input.
- Use rate limiting for public tools.
- Keep webhook URLs server-side when possible.
- Do not store sensitive applicant data unless you have a reason and retention policy.
- Use auth for internal funding/CRM tools.
