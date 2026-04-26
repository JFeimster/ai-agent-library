# Environment Variables

## Required

```bash
AI_GATEWAY_API_KEY=
```

## Optional

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

## Rules

- Do not prefix secret keys with `NEXT_PUBLIC_`.
- Keep provider keys server-side.
- Do not expose mutation webhooks in client code.
- Use separate dev/prod webhook endpoints.
