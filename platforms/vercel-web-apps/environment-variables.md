# Environment Variables

## Required Variables

```bash
AI_GATEWAY_API_KEY=
```

Use this when routing AI calls through Vercel AI Gateway.

## Optional Variables

```bash
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
GOOGLE_GENERATIVE_AI_API_KEY=
N8N_WEBHOOK_URL=
NOTION_API_KEY=
NOTION_DATABASE_ID=
HUBSPOT_PRIVATE_APP_TOKEN=
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_SITE_NAME=
```

## Recommended `.env.local`

```bash
AI_GATEWAY_API_KEY=your_vercel_ai_gateway_key
N8N_WEBHOOK_URL=https://your-n8n-instance/webhook/agent-leads
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Agent Web App Starter
```

## Security Rules

- Do not prefix secret keys with `NEXT_PUBLIC_`.
- Keep provider keys server-side.
- Do not expose webhook URLs in client code if the webhook can mutate records.
- Rotate keys if accidentally committed.
- Use Vercel project environment variables for production.
- Use separate dev/prod webhook endpoints.

## Vercel AI Gateway Notes

Vercel AI Gateway can route requests to multiple AI providers from one API key. In server code, use the gateway key from `AI_GATEWAY_API_KEY`.

Typical base URL:

```text
https://ai-gateway.vercel.sh/v1
```

## Deployment Variable Checklist

| Variable | Local | Preview | Production |
|---|---:|---:|---:|
| AI_GATEWAY_API_KEY | [ ] | [ ] | [ ] |
| N8N_WEBHOOK_URL | [ ] | [ ] | [ ] |
| NOTION_API_KEY | [ ] | [ ] | [ ] |
| NOTION_DATABASE_ID | [ ] | [ ] | [ ] |
| HUBSPOT_PRIVATE_APP_TOKEN | [ ] | [ ] | [ ] |
| NEXT_PUBLIC_APP_URL | [ ] | [ ] | [ ] |
