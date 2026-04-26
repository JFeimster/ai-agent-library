# Vercel Web Agent Architecture

## Core architecture

```text
User -> Landing Page / Tool Page -> Input Form -> Next.js API Route -> Agent Prompt + Context -> AI Gateway / Provider -> Structured Output -> Result UI -> Optional Webhook / CRM / Notion Save
```

## App layers

### Presentation

- `/app/page.tsx`
- `/app/tools/[slug]/page.tsx`
- `/components/AgentForm.tsx`
- `/components/AgentResult.tsx`
- `/components/LeadCapture.tsx`

### Agent config

- `/lib/agents/*.json`
- `/lib/prompts/*.ts`
- `/lib/schemas/*.ts`

### API

- `/app/api/agent/run/route.ts`
- `/app/api/leads/route.ts`
- `/app/api/webhooks/notion/route.ts`
- `/app/api/webhooks/hubspot/route.ts`
- `/app/api/health/route.ts`

## Security

- Never expose API keys in client components.
- Validate and sanitize input.
- Use rate limiting for public tools.
- Keep sensitive funding/applicant data behind auth when needed.
