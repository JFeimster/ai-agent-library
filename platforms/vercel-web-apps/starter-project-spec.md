# Starter Project Spec: Vercel Agent Web App

## Project Name

`agent-web-app-starter`

## Goal

A reusable Next.js starter that can power any agent from the library as a standalone Vercel web app.

## Target User

- Founder
- Broker
- Consultant
- Partner
- Operator
- Client
- Internal team member

## Core Features

### MVP

- Landing page
- Agent selector or one-agent mode
- Input form
- API route for AI processing
- Structured result view
- Copy Markdown button
- Download Markdown button
- Lead capture form
- Webhook submission to n8n

### Nice-to-Have

- Auth
- User dashboard
- Saved reports
- Stripe checkout
- Notion database sync
- HubSpot contact/deal/task creation
- Wix embed version
- PDF export
- Shareable result URL

## Recommended Routes

```text
/
  Landing page

/tools
  Agent directory

/tools/[slug]
  Individual agent page

/api/agent/run
  Runs selected agent

/api/leads
  Captures lead data

/api/webhook/n8n
  Sends output to n8n

/api/health
  Health check
```

## Recommended File Structure

```text
app/
  page.tsx
  tools/
    page.tsx
    [slug]/
      page.tsx
  api/
    agent/
      run/
        route.ts
    leads/
      route.ts
components/
  AgentForm.tsx
  AgentResult.tsx
  LeadCapture.tsx
  ToolCard.tsx
lib/
  agents/
    local-referral-partner-scout.json
  prompt-builder.ts
  schemas.ts
  webhook.ts
  markdown.ts
```

## MVP Acceptance Criteria

- User can submit a form.
- Server route sends form data to AI provider.
- Result renders in clean sections.
- User can copy the result.
- Lead data can be sent to webhook.
- API keys are never exposed client-side.
- App deploys successfully to Vercel.
