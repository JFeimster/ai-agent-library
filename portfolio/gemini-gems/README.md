# Gemini Gems Portfolio

Inventory for Gemini Gem concepts, lightweight assistant packages, converted agent patterns, and short-form reusable AI helpers.

## Purpose

This folder tracks Gemini Gems that are derived from AI Agent Library agents, skills, prompt systems, and knowledge-base patterns.

Use this portfolio for:

- Gemini Gem ideas
- Draft Gem instructions
- Converted Custom GPT concepts
- Lightweight assistant patterns
- Cross-platform prompt packages
- Gem publication notes
- Refresh checklists

## Primary Users

- Gemini Gem builders
- AI assistant packagers
- Prompt system designers
- Custom GPT operators
- Cross-platform agent builders
- Repo maintainers

## Gemini Gem Portfolio Item Standard

Each Gemini Gem item should include:

- Gem name
- Slug
- Status
- Source agent or GPT
- Audience
- Main use case
- Short instruction summary
- Example prompts
- Restrictions
- Related skill
- Related knowledge base
- Last reviewed date
- Notes

## Status Values

```text
idea
draft
configured
testing
published
needs-refresh
deprecated
archived
```

## Recommended Folder Pattern

```text
portfolio/
  gemini-gems/
    README.md
    index.json
    inventory.md
    instructions/
      [gem-slug].md
```

## Gem Package Checklist

Before publishing or reusing a Gem:

- [ ] Name is specific.
- [ ] Audience is clear.
- [ ] Use case is narrow.
- [ ] Instructions are concise.
- [ ] Example prompts are useful.
- [ ] Restrictions are included.
- [ ] Source agent or GPT is recorded.
- [ ] Public-safe language is reviewed.
- [ ] No private data is included.
- [ ] Last reviewed date is recorded.

## Recommended Metadata Object

```json
{
  "name": "Funding Readiness Helper",
  "slug": "funding-readiness-helper",
  "status": "draft",
  "source_agent": "agents/funding-pipeline-triage-agent.md",
  "audience": "Small business owners and funding operators",
  "main_use_case": "Help users organize funding-readiness details and missing information.",
  "instruction_summary": "Ask for business basics, summarize readiness factors, list missing inputs, and avoid approval or funding guarantees.",
  "example_prompts": [
    "Help me organize a funding-readiness checklist.",
    "What information is missing before a funding review?"
  ],
  "restrictions": [
    "No guaranteed funding claims",
    "No legal, tax, credit-repair, or lending advice"
  ]
}
```

## Gem Safety Rules

Gemini Gems should not:

- Make guaranteed funding, credit, revenue, ranking, or approval claims
- Present educational resources as professional advice
- Expose private source material
- Use real client examples without approval
- Invent current platform details
- Ignore missing inputs
- Overstate what a lightweight assistant can do

## Related Repo Paths

```text
portfolio/gemini-gems/
platforms.html
schemas/custom-gpt.schema.json
agents/
skills/
knowledge-base/
roadmap/phase-4-platform-layer.md
```
