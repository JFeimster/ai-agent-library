# Platforms

This folder contains implementation packs for converting canonical AI Agent Library specs into platform-specific agents, assistants, automations, apps, widgets, and workflow assets.

The `agents/` folder is the source layer. The `platforms/` folder is the implementation layer.

## Platform pack structure

```text
platforms/
  README.md
  notion-ai/
  chatgpt-gpts/
  claude-projects/
  gemini-gems/
  n8n-agents/
  vercel-web-apps/
```

## Current platform packs

- `notion-ai/` — Notion AI workspace assistants, database-backed agent systems, templates, and operating docs.
- `chatgpt-gpts/` — Custom GPT instructions, knowledge-file rules, GPT conversion checklists, and GPT inventory standards.
- `claude-projects/` — Claude Project setup docs, project knowledge organization, artifact workflows, and long-context implementation patterns.
- `gemini-gems/` — Gemini Gem setup docs, instruction templates, workspace usage patterns, and Google ecosystem implementation notes.
- `n8n-agents/` — n8n workflow agents, webhook specs, automation handoff docs, and integration patterns.
- `vercel-web-apps/` — Vercel-hosted web apps, widgets, lead magnets, portals, and SaaS-lite tools.

## What belongs here

- Platform-specific conversion guides.
- Platform-specific prompt/instruction templates.
- Deployment notes and implementation checklists.
- Integration patterns for turning agent specs into usable tools.
- Platform limitations, guardrails, and packaging rules.

## What does not belong here

- Canonical agent specs. Keep those in `agents/`.
- Domain knowledge files. Keep those in `knowledge-base/`.
- Raw exports. Keep those in `source-data/` once that folder exists.
- Public static site data. Keep that in `site-data/`.
- Private credentials, API keys, client data, or provider-sensitive routing logic.

## Operating rule

Every platform pack should answer:

1. What agent format does this platform support?
2. What files are needed to convert a canonical agent spec into this platform?
3. What knowledge files, schemas, or workflows does the platform need?
4. What are the platform-specific limits and guardrails?
5. How does this platform asset become useful, shareable, or monetizable?
