# ChatGPT GPT Platform Pack

This folder contains the ChatGPT Custom GPT implementation pack for the broader AI Agent Library.

## Purpose

Use this pack to turn exported Custom GPTs into:

- searchable inventory records
- reusable GPT templates
- public, partner-facing, and internal library assets
- future formal agent specs
- lead magnets and productized GPT wrappers

## What belongs here

- ChatGPT Custom GPT inventory files
- GPT publishing standards
- GPT maintenance checklists
- GPT-to-agent conversion maps
- reusable instruction and knowledge-file templates

## What does not belong here

- Claude Project specs
- Gemini Gem configs
- n8n workflow JSON
- Vercel app source code
- private client data
- secrets, API keys, tokens, or credentials

## Source of truth

Raw exports live at repo root or under `source-data/my-gpts/`.

Normalized records live in:

- `../../source-data/my-gpts/my-gpts-normalized.json`

Static-site-ready records live in:

- `../../site-data/custom-gpts.json`

## Core files

- [`my-custom-gpts-inventory.md`](my-custom-gpts-inventory.md)
- [`my-custom-gpts-index.csv`](my-custom-gpts-index.csv)
- [`gpt-to-agent-conversion-map.md`](gpt-to-agent-conversion-map.md)
- [`gpt-publishing-standards.md`](gpt-publishing-standards.md)
- [`gpt-maintenance-checklist.md`](gpt-maintenance-checklist.md)
- [`custom-gpt-instructions-template.md`](custom-gpt-instructions-template.md)
- [`gpt-knowledge-file-checklist.md`](gpt-knowledge-file-checklist.md)

## Visibility rule

Every GPT must be classified as `public`, `partner-facing`, `internal-only`, or `archive` before it is surfaced outside the repo.
