# API Route Patterns

## 1. Generic Agent Runner

Use one reusable route for most agents:

```text
POST /api/agent/run
```

Expected request body:

```json
{
  "agentSlug": "local-referral-partner-scout",
  "input": {
    "market": "Northern Virginia",
    "partnerType": "CPA",
    "sourceNotes": "..."
  }
}
```

Expected response:

```json
{
  "ok": true,
  "agentSlug": "local-referral-partner-scout",
  "outputMarkdown": "...",
  "sections": {
    "Referral Partner Summary": "...",
    "Next Action": "..."
  }
}
```

## 2. Lead Capture Route

```text
POST /api/leads
```

Expected body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "company": "Example Co",
  "agentSlug": "local-referral-partner-scout",
  "source": "vercel-web-app",
  "notes": "Interested in referral partner outreach"
}
```

## 3. Webhook Relay Route

```text
POST /api/webhooks/n8n
```

Use this if you do not want the client to call n8n directly.

## 4. Health Route

```text
GET /api/health
```

Expected response:

```json
{
  "ok": true,
  "service": "agent-web-app",
  "timestamp": "2026-04-24T00:00:00.000Z"
}
```

## 5. Error Response Pattern

```json
{
  "ok": false,
  "error": "Missing required field: sourceNotes",
  "code": "VALIDATION_ERROR"
}
```

## Rules

- Validate input before calling AI.
- Do not call AI from client-side components.
- Do not expose API keys.
- Use consistent response shapes.
- Log safely; do not log sensitive applicant data in production.
