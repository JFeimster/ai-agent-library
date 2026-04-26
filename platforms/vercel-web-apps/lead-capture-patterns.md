# Lead Capture Patterns

## Ungated result

```text
Form -> Full result -> Soft CTA
```

## Teaser gate

```text
Form -> Preview result -> Email gate -> Full result
```

## Pre-gated tool

```text
Email/auth -> Form -> Full result
```

## Recommended lead fields

```json
{"name":"","email":"","company":"","role":"","industry":"","market":"","agentSlug":"","utmSource":"","utmMedium":"","utmCampaign":""}
```

## Webhook payload

```json
{"event":"agent_lead_created","agentSlug":"","lead":{},"input":{},"output":{},"timestamp":""}
```
