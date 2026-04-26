# Starter Project Spec: Vercel Agent Web App

## Goal

A reusable Next.js starter that can power any agent from this library as a standalone Vercel web app.

## Core features

- Landing page
- Agent selector or one-agent mode
- Input form
- AI processing API route
- Structured result view
- Copy Markdown button
- Download Markdown button
- Lead capture
- Webhook submission to n8n

## Recommended routes

```text
/
/tools
/tools/[slug]
/api/agent/run
/api/leads
/api/health
```

## Acceptance criteria

- User can submit a form.
- Server route sends form data to AI provider.
- Result renders in clean sections.
- User can copy the result.
- Lead data can be sent to webhook.
- API keys are never exposed client-side.
- App deploys successfully to Vercel.
