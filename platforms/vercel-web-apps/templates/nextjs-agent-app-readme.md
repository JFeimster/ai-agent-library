# Next.js Agent App Starter

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Routes

```text
/
/tools/[slug]
/api/agent/run
/api/leads
```

## How to add an agent

1. Add config to `/lib/agents/[slug].json`.
2. Add output sections.
3. Add form fields.
4. Test `/tools/[slug]`.
5. Deploy to Vercel.
