# AI Agent Library

## Purpose

AI Agent Library is a structured repository for reusable AI-agent assets, including agent specs, skills, knowledge bases, prompt chains, templates, schemas, platform packs, examples, and repo operating docs.

The repo exists to make AI-agent building repeatable instead of random. Each asset should be easy to find, easy to review, easy to reuse, and safe to adapt across ChatGPT, Jules, Codex, Claude, Gemini, Notion, GitHub, Vercel, n8n, static sites, and related operating workflows.

This is the repo where reusable AI-agent building blocks get organized before they turn into a folder full of mystery markdown and haunted JSON. 🧰

## Primary Use Cases

Use this repo to:

- Define reusable AI agents
- Create and review `SKILL.md` files
- Package Custom GPTs and platform-specific assistants
- Build repo-ready knowledge bases
- Store prompt-chain execution systems
- Create reusable templates
- Maintain JSON schemas and registries
- Support static-site directories and portfolios
- Document platform workflows for GitHub, Vercel, Notion, n8n, Claude, Gemini, and ChatGPT
- Give Jules, Codex, ChatGPT, and future repo agents clear execution instructions

## Repository Philosophy

This repo is:

- **Static-first** — plain files, Markdown, JSON, YAML, HTML/CSS/JS when needed.
- **Documentation-first** — every reusable asset should explain what it is, when to use it, and how to review it.
- **Issue-first** — work should be scoped through issues or explicit batch tasks.
- **Review-first** — PRs should be reviewed for scope, safety, links, validation, and public-safe language.
- **Public-safe by default** — do not commit secrets, private data, sensitive client records, or backend bypass paths.
- **Agent-readable** — files should be structured so AI assistants can reliably parse, reference, and reuse them.

## Repo Map

```text
.github/
  ISSUE_TEMPLATE/
  workflows/
agents/
  README.md
  agent-template.md
  agent-review-checklist.md
skills/
  README.md
  skill-index.json
  skill-template.md
  skill-review-checklist.md
knowledge-base/
  README.md
  index.json
prompt-chains/
  README.md
  master-roadmap-prompt.md
templates/
  README.md
  platform-packs/
platforms/
  README.md
portfolio/
  README.md
schemas/
  README.md
registry/
  README.md
examples/
  README.md
site-data/
docs/
  github-workflows.md
  repo-validation-checklist.md
README.md
JULES.md
NEXT_TASK.md
CONTRIBUTING.md
SECURITY.md
CODE_OF_CONDUCT.md
```

## Key Asset Types

### Agents

Agent specs define reusable AI assistants.

Typical path:

```text
agents/[agent-slug].md
```

Agent specs should include:

- Purpose
- Audience
- Problem solved
- Inputs
- Workflow
- Outputs
- Guardrails
- Examples
- Related skills
- Related knowledge bases
- Related schemas

### Skills

Skills define reusable capabilities.

Typical path:

```text
skills/[skill-slug]/SKILL.md
```

Skill files should include:

- Purpose
- When to use
- Inputs
- Procedure
- Output format
- Quality checklist
- Guardrails
- Examples
- Related assets

### Knowledge Bases

Knowledge bases organize source material for AI assistants, Custom GPTs, static sites, and repo workflows.

Typical path:

```text
knowledge-base/[topic]/README.md
```

Knowledge bases should clearly separate:

- public-safe material
- internal-only material
- synthetic examples
- source notes
- operating rules
- review requirements

### Prompt Chains

Prompt chains are reusable execution systems for multi-step work.

Typical path:

```text
prompt-chains/[prompt-chain-name].md
```

Use prompt chains for:

- Jules batch execution
- Codex repo work
- PR review
- asset generation
- audit workflows
- sequential file creation

### Platform Packs

Platform packs explain how assets should be packaged for specific tools and ecosystems.

Typical path:

```text
templates/platform-packs/[platform-pack].md
```

Examples:

- ChatGPT GPT package
- Vercel static site package
- GitHub repo package
- Notion knowledge-base package
- n8n workflow package
- Claude Project package
- Gemini Gem package

### Templates

Templates make repeatable work faster and more consistent.

Typical path:

```text
templates/[template-name].md
```

Templates may support:

- agent specs
- skills
- knowledge bases
- PR reviews
- issue templates
- platform packs
- static-site pages
- portfolio entries
- prompt chains

### Schemas

Schemas define structured data formats.

Typical path:

```text
schemas/[schema-name].schema.json
```

Use schemas for:

- agents
- skills
- templates
- platform assets
- registry records
- site data
- examples
- action payloads

### Registry

The registry layer stores structured asset records and reusable asset metadata.

Typical path:

```text
registry/[registry-file].json
```

Use the registry to support:

- directory pages
- portfolio pages
- search/filter systems
- static-site data
- agent/skill discovery

## Naming Conventions

Use lowercase kebab-case for slugs and folders.

Good:

```text
static-site-page-builder
chatgpt-gpt-package
funding-readiness-assistant
partner-resource-card-builder
```

Avoid:

```text
Final File
New Stuff
Skill Copy
agentThing
Page1
```

## Safety Rules

Do not commit:

- API keys
- access tokens
- OAuth secrets
- webhook secrets
- `.env` files
- private keys
- private customer data
- borrower/client records
- bank statements
- tax records
- credit reports
- IDs or sensitive documents
- backend provider bypass paths
- private admin/editor links
- fake testimonials
- unsupported outcome promises

Use synthetic examples only.

Good:

```json
{
  "name": "Example Owner",
  "email": "owner@example.com",
  "business_name": "Example Services LLC"
}
```

Bad:

```json
{
  "name": "Real Customer",
  "email": "realperson@example.com",
  "document_url": "private-file-url"
}
```

## Public-Safe Language

Use language like:

```text
educational
planning
readiness
compare options
review required
possible next steps
may be a fit
terms vary
human review recommended
```

Avoid:

```text
approval promises
funding outcome promises
income outcome promises
traffic or ranking promises
credit repair promises
bypass language
secret-provider-route language
```

## Development Model

This repo uses a simple issue-first workflow:

1. Open or select one issue.
2. Create a scoped branch.
3. Change only the approved files.
4. Validate Markdown, JSON, links, and safety rules.
5. Open a PR into `main`.
6. Review the PR.
7. Merge only after scope and safety checks pass.
8. Update `NEXT_TASK.md` when the next task is approved.

## Branch Naming

Use:

```text
feature/[short-slug]
docs/[short-slug]
chore/[short-slug]
fix/[short-slug]
batch-[number]-[short-slug]
repair/[pr-number]-[short-slug]
```

Examples:

```text
batch-35-core-repo-operating-files
docs/privacy-sensitive-data-rules
feature/agent-index-layer
fix/static-site-navigation
repair/pr12-json-index-cleanup
```

## Commit Messages

Use plain imperative commit messages.

Good:

```text
Add core repo operating files
Add skill review checklist
Fix template index JSON
Update NEXT_TASK for Batch 36
```

Avoid:

```text
stuff
misc
final final
oops
changes
```

## Validation

Relevant workflows live in:

```text
.github/workflows/
```

Core validation files:

```text
.github/workflows/validate-json.yml
.github/workflows/link-check.yml
.github/workflows/static-site-smoke.yml
.github/workflows/markdown-hygiene.yml
.github/workflows/no-secrets-safety.yml
```

Local validation examples:

```bash
python -m json.tool agent-index.json
python -m json.tool skills/skill-index.json
python -m json.tool templates/template-index.json
```

For static site preview:

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

## Working With Jules

Jules should read:

```text
JULES.md
NEXT_TASK.md
README.md
docs/repo-validation-checklist.md
```

Jules should:

- work one task at a time
- use a scoped branch
- avoid future-batch work
- avoid unrelated refactors
- avoid deployment changes unless approved
- open a PR and stop

## Working With Codex

Codex should:

- inspect existing repo structure before editing
- keep changes scoped
- preserve public-safe language
- validate JSON/YAML when touched
- avoid adding frameworks or package managers unless explicitly approved
- summarize changed files and validation

## Working With ChatGPT

ChatGPT may be used to:

- draft files
- review PRs
- generate prompt chains
- produce issue bodies
- create templates
- audit structure
- create batch handoff files

ChatGPT should not be treated as a substitute for PR review.

## Recommended Review Checklist

Before merging a PR:

- [ ] Linked issue or batch is clear.
- [ ] Scope matches the request.
- [ ] Changed files are expected.
- [ ] No unrelated refactors are included.
- [ ] No future-batch work is included.
- [ ] Markdown is complete and readable.
- [ ] JSON validates if changed.
- [ ] YAML is reviewed if changed.
- [ ] Static site loads if site files changed.
- [ ] Links and paths are valid.
- [ ] No secrets are included.
- [ ] No private data is included.
- [ ] No unsupported claims are included.
- [ ] Deployment impact is understood.

## Current Queue

The current approved next task is tracked in:

```text
NEXT_TASK.md
```

Do not assume future batches are approved until `NEXT_TASK.md` or a human instruction says so.

## License

Add or update the license according to the repository owner’s preferred licensing model.

## Maintainer Notes

This repo is intended to become a durable operating library for AI-agent assets.

Keep it:

- structured
- boring where it should be boring
- useful where it should be useful
- safe where it must be safe
- clean enough that the next agent does not need a priest and a shovel
