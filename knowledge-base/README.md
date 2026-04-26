# Knowledge Base

This folder contains reusable source knowledge for AI agents, platform packs, workflows, and productized tools.

Knowledge-base files are designed to be referenced by:

- Agent specs in `agents/`
- Platform packs in `platforms/`
- Templates in `templates/`
- Examples in `examples/`
- Future schemas and validation workflows

## Current sections

```text
knowledge-base/
  funding/
```

## Rules

- Keep internal routing logic separate from prospect-facing language.
- Do not include private client data.
- Do not include API keys, tokens, webhook secrets, or credentials.
- Do not expose backend funding provider bypass paths.
- Do not make funding, credit, legal, tax, investment, or approval guarantees.
- Use clear white-labeled Moonshine Capital language unless a source explicitly approves naming a provider.

## Expansion roadmap

Planned sections include:

```text
knowledge-base/
  partner-enablement/
  engineering-as-marketing/
  crm/
  automation/
  content-ops/
  local-referrals/
```
