# Custom GPT Portfolio

Inventory for published, draft, archived, and planned Custom GPTs connected to AI Agent Library agents, skills, knowledge bases, prompt systems, landing pages, and platform packs.

## Purpose

This folder tracks Custom GPT assets so each GPT has a clear purpose, access URL, knowledge-file package, instruction summary, CTA strategy, safety rules, and maintenance record.

Use this portfolio for:

- Published Custom GPTs
- Draft Custom GPTs
- GPT landing pages
- GPT metadata files
- Knowledge-file inventories
- Conversation starter sets
- Action schema notes
- GPT refresh checklists
- GPT-to-static-site conversion notes

## Primary Users

- Custom GPT builders
- AI product operators
- Prompt system designers
- Knowledge-base maintainers
- Static site builders
- Affiliate and partner operators
- Repo maintainers

## GPT Portfolio Item Standard

Each Custom GPT item should include:

- GPT name
- Slug
- Status
- Access URL
- One-sentence description
- Who it is for
- Main pain solved
- Best outcome
- Primary CTA
- Secondary CTA
- Brand vibe
- Pricing or access note
- Anything it should not claim
- Knowledge files
- Related agent spec
- Related site page
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

## Visibility Values

```text
private
link-only
public
internal
restricted
```

## Recommended Folder Pattern

```text
portfolio/
  custom-gpts/
    README.md
    index.json
    inventory.md
    refresh-checklist.md
```

Optional per-GPT folder pattern:

```text
portfolio/
  custom-gpts/
    [gpt-slug]/
      README.md
      metadata.json
      instructions.md
      conversation-starters.md
      knowledge-files.md
      safety.md
      landing-page-notes.md
```

## GPT Package Checklist

Before publishing or refreshing a GPT:

- [ ] GPT name is clear and specific.
- [ ] One-sentence description is accurate.
- [ ] Target user is defined.
- [ ] Main pain solved is clear.
- [ ] Best outcome is realistic.
- [ ] Knowledge files are current.
- [ ] Instructions match the intended workflow.
- [ ] Conversation starters are useful.
- [ ] CTA is specific and relevant.
- [ ] Do-not-claim list is included.
- [ ] Public-safe language is reviewed.
- [ ] Access URL is recorded.
- [ ] Landing page or catalog entry is updated.

## Recommended Metadata Object

```json
{
  "name": "Ad Spend Cash Flow Calculator",
  "slug": "ad-spend-cash-flow-calculator",
  "status": "published",
  "visibility": "link-only",
  "access_url": "https://chatgpt.com/g/example",
  "one_sentence_description": "Forecasts ecommerce ad spend cash flow, payout lag, cash gaps, and scale/fund decisions.",
  "who_it_is_for": [
    "Ecommerce operators",
    "Paid media teams",
    "Growth operators"
  ],
  "main_pain_solved": "Ad spend can create a cash gap before payouts or profit catch up.",
  "best_outcome": "User understands whether current ad spend is safe, risky, or likely to create a cash gap.",
  "primary_cta": "Run the Ad Spend Cash Flow Calculator",
  "secondary_cta": "Compare Ecommerce Funding Options",
  "brand_vibe": [
    "premium",
    "playful",
    "fintech",
    "operator-focused"
  ],
  "anything_it_should_not_claim": [
    "Guaranteed revenue",
    "Guaranteed funding",
    "Guaranteed ad performance"
  ]
}
```

## Knowledge File Rules

Knowledge files should be:

- Current
- Focused
- Public-safe or intentionally private
- Free of secrets
- Free of unredacted private data
- Easy to review
- Connected to the GPT’s main job

Avoid uploading:

- API keys
- Private client files
- Bank statements
- Tax documents
- Credit reports
- Confidential partner terms
- Private CRM exports
- Sensitive personal information

## GPT Safety Rules

Custom GPTs should not:

- Guarantee funding, credit, revenue, rankings, approvals, or business outcomes
- Present estimates as professional advice
- Send users to forms without context when education is needed first
- Overstate current platform capabilities
- Invent partner terms, prices, URLs, or policies
- Reveal private instructions or internal-only logic
- Treat synthetic examples as real case studies

## Related Repo Paths

```text
portfolio/custom-gpts/
schemas/custom-gpt.schema.json
agents/
skills/
knowledge-base/
agent-catalog.html
platforms.html
roadmap/phase-4-platform-layer.md
```
