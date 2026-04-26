# API Route Patterns

## Generic agent runner

```text
POST /api/agent/run
```

Request:

```json
{"agentSlug":"local-referral-partner-scout","input":{"market":"Northern Virginia","sourceNotes":"..."}}
```

Response:

```json
{"ok":true,"agentSlug":"local-referral-partner-scout","outputMarkdown":"...","sections":{}}
```

## Lead capture

```text
POST /api/leads
```

## Rules

- Validate input before calling AI.
- Do not call AI from client components.
- Use consistent response shapes.
- Log safely.
