# n8n Agents Platform Pack

This folder will contain implementation guidance for turning canonical AI Agent Library specs into n8n workflow agents, webhook automations, and integration handoff assets.

## Purpose

Use this platform pack when an agent should become an n8n workflow, webhook-driven assistant, automation sequence, or integration-backed operating process.

## Recommended future files

```text
platforms/n8n-agents/
  README.md
  agent-to-n8n-workflow-conversion-guide.md
  webhook-event-spec-template.md
  workflow-handoff-checklist.md
  n8n-credential-and-secret-rules.md
  n8n-limitations-and-guardrails.md
```

## What belongs here

- n8n workflow-agent conversion guidance.
- Webhook and event-spec templates.
- Automation handoff checklists.
- Integration patterns and guardrails.
- Credential and secret-handling rules.

## What does not belong here

- Canonical agent specs.
- Raw production payloads containing private data.
- Secrets, API keys, tokens, or credentials.
- Public static site JSON.
- Provider-sensitive routing logic.
