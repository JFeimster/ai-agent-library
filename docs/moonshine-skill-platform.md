# Moonshine Skill Platform

## Ownership

`JFeimster/ai-agent-library` is the canonical Git source for reusable Moonshine skill implementations. `JFeimster/ResourceGrid` stores discovery metadata, stable IDs, and relationships only. `JFeimster/ai-agent-arsenal` may surface external catalog entries or platform guidance, but never carries a forked implementation. Codex and ChatGPT installations are deployment targets, not editable sources.

## Family

The current operator family is intentionally modular:

1. `moonshine-crm-intake`
2. `moonshine-crm-note-normalizer`
3. `moonshine-crm-schema-steward`
4. `moonshine-crm-data-hygiene`
5. `moonshine-funding-pipeline-health`
6. `moonshine-funding-follow-up`
7. `moonshine-crm-reconciler`

## Change rule

Update a skill here first, validate its Markdown, JSON/YAML metadata, paths, and public-safety boundaries, then update the ResourceGrid record. Deploy or sync only from this canonical source. Use synthetic examples and keep applicant, borrower, banking, credit, credential, and private provider data out of Git.

