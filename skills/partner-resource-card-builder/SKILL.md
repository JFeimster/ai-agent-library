# Partner Resource Card Builder

## Purpose

The **Partner Resource Card Builder** skill creates reusable partner, affiliate, referral, and resource cards for AI Agent Library assets, funding resources, Custom GPTs, static tools, calculators, directories, knowledge bases, and campaign pages.

Use this skill when a resource needs to be packaged into a concise, public-safe card with audience, problem solved, CTA hierarchy, disclosure language, restricted claims, tracking notes, and publication guidance.

This skill does not invent partner terms, payout rates, provider promises, approval claims, or performance guarantees.

## When To Use

Use this skill when the user asks for:

- Partner resource cards
- Affiliate resource cards
- Referral partner cards
- GPT directory cards
- Funding resource cards
- Static tool cards
- Calculator cards
- Partner page modules
- Resource directory entries
- Campaign CTA cards
- Notion database-ready partner resource rows
- Public-safe affiliate/partner descriptions
- Disclosure-aware card copy

Use it for assets such as:

- Custom GPTs
- Static calculators
- Funding comparison forms
- Partner applications
- Prompt packs
- Knowledge-base resources
- AI tools
- Vercel apps
- Downloadable assets
- Referral workflows

Do not use this skill for:

- Private partner contracts
- Final legal review
- Payout schedule creation
- Compensation negotiation
- Underwriting rules
- Final provider approval rules

## Inputs

### Minimum Inputs

```text
Resource name:
Resource type:
Audience:
Problem solved:
Primary CTA:
Primary CTA URL:
Disclosure needed:
```

### Recommended Inputs

```text
Short description:
Long description:
Best-fit user:
Use case:
Secondary CTA:
Secondary CTA URL:
Affiliate/referral relationship:
Tracking URL:
UTM source:
UTM medium:
UTM campaign:
Offer owner:
Status:
Restricted claims:
Publication location:
Review owner:
Last reviewed date:
```

### Optional Inputs

```text
Provider:
Partner category:
Compensation relationship:
Private notes:
Logo usage status:
Brand voice:
Audience segment:
Landing page URL:
Custom GPT URL:
Notion URL:
Related skill:
Related agent:
Related knowledge base:
Disclosure URL:
```

## Outputs

This skill should produce:

1. Partner Resource Card
2. Short Card Copy
3. Long Description
4. Primary CTA
5. Secondary CTA
6. Disclosure Language
7. Restricted Claims
8. Usage Notes
9. Tracking Notes
10. Publication Checklist
11. Optional JSON/Card Record

## Standard Output Format

```md
# Partner Resource Card

## Resource

- Name:
- Type:
- Category:
- Status:
- Owner:
- Last reviewed:

## Who It Is For

[Audience]

## Problem It Solves

[Problem solved]

## What It Helps With

- Point 1
- Point 2
- Point 3

## What It Does Not Do

- Limitation 1
- Limitation 2
- Limitation 3

## Primary CTA

[CTA text](CTA URL)

## Secondary CTA

[CTA text](CTA URL)

## Short Card Copy

[Short card copy]

## Long Description

[Long description]

## Disclosure Language

[Disclosure]

## Restricted Claims

Do not claim:

- Claim 1
- Claim 2
- Claim 3

## Partner Usage Notes

- Note 1
- Note 2
- Note 3

## Tracking Notes

- UTM source:
- UTM medium:
- UTM campaign:
- Tracking URL:
- Internal owner:

## Publication Checklist

- [ ] CTA URL tested
- [ ] Disclosure included if needed
- [ ] Restricted claims reviewed
- [ ] Public-safe language confirmed
- [ ] No private payout terms exposed
- [ ] Human review completed
```

## File / Path Conventions

Recommended locations:

```text
knowledge-base/partner-enablement/examples.md
portfolio/custom-gpts/index.json
portfolio/vercel/index.json
site-data/featured.json
partners.html
get-started.html
```

For reusable card examples:

```text
examples/partner-enablement/example-001.md
examples/partner-enablement/example-002.md
```

For agent integration:

```text
agents/partner-resource-card-builder.md
skills/partner-resource-card-builder/SKILL.md
```

## Workflow

### Step 1 — Classify the Resource

Classify the resource as one of:

```text
Custom GPT
Static calculator
Funding resource
Partner application
Affiliate offer
Knowledge-base page
Downloadable asset
Prompt pack
Skill pack
Landing page
Directory entry
Referral workflow
Notion template
Vercel app
```

### Step 2 — Define Audience

Clarify who the card is for.

Examples:

```text
Ecommerce operators
Funding brokers
Referral partners
Local business owners
Agency owners
Startup founders
AI builders
CRM operators
Content teams
Partner managers
```

### Step 3 — Define the Problem Solved

Use specific, practical language.

Good:

```text
Helps ecommerce operators estimate whether ad spend may create a short-term cash-flow gap before platform payouts arrive.
```

Weak:

```text
Helps businesses make more money.
```

### Step 4 — Build CTA Hierarchy

Every card should have:

- One primary CTA
- Optional secondary CTA
- Optional disclosure/trust link

CTA examples:

```text
Run the Ad Spend Cash Flow Calculator
Compare Ecommerce Funding Options
Browse AI Agent Skills
Create a Partner Resource Card
Apply to Become a Referral Partner
Download the Prompt Pack
```

Avoid risky CTAs:

```text
Get Guaranteed Funding
Get Approved Today
Make Guaranteed Commissions
Everyone Qualifies
```

### Step 5 — Add Disclosure

Disclosure should be visible and plain.

General disclosure:

```text
Disclosure: This resource may include partner, referral, or affiliate links. Compensation may be received if you choose to use certain resources. Compensation does not guarantee suitability, approval, funding, earnings, or outcomes.
```

Short disclosure:

```text
Disclosure: This resource may include a partner or referral link. Compensation may be received, but outcomes are not guaranteed.
```

### Step 6 — Add Restricted Claims

Common restricted claims:

```text
Guaranteed approval
Guaranteed funding
Guaranteed earnings
Guaranteed revenue
Guaranteed rankings
Everyone qualifies
No risk
No documents needed
Official endorsement without verification
Neutral ranking when placement is compensated
```

### Step 7 — Add Usage Notes

Explain where the card can be used.

Example:

```text
Use this card on partner pages, resource directories, affiliate hubs, GPT portfolio pages, and campaign landing pages. Keep disclosure visible near the CTA.
```

### Step 8 — Add Tracking Notes

Include:

- Tracking URL
- UTM source
- UTM medium
- UTM campaign
- Owner
- Review date

Do not expose:

- private payout terms
- private partner contract terms
- private conversion data
- internal commission rules

## JSON Card Record Format

Optional JSON record:

```json
{
  "name": "Resource Name",
  "slug": "resource-name",
  "type": "Custom GPT",
  "category": "Funding Ops",
  "audience": "Ecommerce operators",
  "problem_solved": "Clear problem solved.",
  "primary_cta": {
    "text": "Run the Tool",
    "url": "https://example.com"
  },
  "secondary_cta": {
    "text": "Compare Options",
    "url": "https://example.com"
  },
  "disclosure_required": true,
  "restricted_claims": [
    "Guaranteed approval",
    "Guaranteed funding"
  ],
  "status": "published",
  "last_reviewed": "2026-06-18"
}
```

## Quality Checklist

Before finalizing a partner resource card:

- [ ] Resource name is clear.
- [ ] Resource type is identified.
- [ ] Audience is specific.
- [ ] Problem solved is practical.
- [ ] Primary CTA is specific.
- [ ] CTA URL is included.
- [ ] Secondary CTA is included where useful.
- [ ] Disclosure is included if relevant.
- [ ] Affiliate/referral relationship is not hidden.
- [ ] Restricted claims are listed.
- [ ] No guaranteed outcomes are claimed.
- [ ] No private payout terms are exposed.
- [ ] Tracking notes are included.
- [ ] Publication checklist is included.
- [ ] Human review is recommended.

## Guardrails

This skill must not:

- Invent partner payouts.
- Invent commission rates.
- Invent provider approval terms.
- Invent official partnerships.
- Hide compensation relationships.
- Claim guaranteed funding.
- Claim guaranteed approval.
- Claim guaranteed earnings.
- Use fake testimonials.
- Use fake trust badges.
- Present paid placement as neutral.
- Include private partner contract terms.
- Include private tracking or performance data unless explicitly approved.
- Provide legal advice.

## Public-Safe Language Rules

Use:

```text
resource
possible fit
may include partner links
may receive compensation
review required
educational
common requirements
not a guarantee
partner resource
```

Avoid:

```text
guaranteed approval
guaranteed funding
guaranteed earnings
official partner without verification
best for everyone
no risk
everyone qualifies
```

## Example Input

```text
Resource name: Ad Spend Cash Flow Calculator
Type: Custom GPT / Calculator
Audience: Ecommerce operators running paid ads
Problem solved: Helps estimate ad spend cash gaps caused by payout lag
Primary CTA: Run the Ad Spend Cash Flow Calculator
Primary CTA URL: https://chatgpt.com/g/g-6a3359a8328c8191acc5cba7968a1639-ad-spend-cash-flow-calculator
Secondary CTA: Compare Ecommerce Funding Options
Secondary CTA URL: https://tally.so/r/w4R2Ad
Disclosure needed: yes
```

## Example Output

```md
# Partner Resource Card

## Resource

- Name: Ad Spend Cash Flow Calculator
- Type: Custom GPT / Calculator
- Category: Ecommerce Cash Flow
- Status: Published
- Owner: AI Agent Library
- Last reviewed: 2026-06-18

## Who It Is For

Ecommerce operators, paid media teams, and founders running paid ads while waiting for platform payouts.

## Problem It Solves

Paid ads can increase sales while creating short-term cash pressure. This calculator helps estimate whether ad spend may create a cash-flow gap before payouts and margin recovery catch up.

## What It Helps With

- Estimating ad spend timing pressure
- Reviewing payout lag impact
- Organizing cash-gap assumptions
- Comparing possible next steps

## What It Does Not Do

- It does not guarantee revenue.
- It does not guarantee funding.
- It does not guarantee ad performance.
- It does not replace financial review.

## Primary CTA

[Run the Ad Spend Cash Flow Calculator](https://chatgpt.com/g/g-6a3359a8328c8191acc5cba7968a1639-ad-spend-cash-flow-calculator)

## Secondary CTA

[Compare Ecommerce Funding Options](https://tally.so/r/w4R2Ad)

## Short Card Copy

Forecast whether ecommerce ad spend may create a short-term cash-flow gap before payouts and margin recovery catch up.

## Long Description

The Ad Spend Cash Flow Calculator helps ecommerce operators review how ad spend, payout lag, margin timing, and growth plans may affect short-term cash flow. It is designed as a planning and readiness tool, not a guarantee of ad performance, funding, or financial outcome.

## Disclosure Language

Disclosure: This resource may include partner or referral links. Compensation may be received if you choose to use certain resources. Compensation does not guarantee suitability, approval, funding, or outcomes.

## Restricted Claims

Do not claim:

- Guaranteed funding
- Guaranteed revenue
- Guaranteed ROAS
- Guaranteed approval
- Guaranteed ad performance
- No risk

## Partner Usage Notes

Use this card on ecommerce funding pages, GPT directories, partner resource pages, and campaign landing pages. Keep the calculator CTA primary and the funding comparison CTA secondary.

## Tracking Notes

- UTM source: partner-resource-card
- UTM medium: static-site
- UTM campaign: ad-spend-cash-flow-calculator
- Internal owner: AI Agent Library

## Publication Checklist

- [ ] CTA URL tested
- [ ] Disclosure included near CTA
- [ ] Restricted claims reviewed
- [ ] Public-safe wording confirmed
- [ ] Human review completed
```

## Related Agents

```text
agents/partner-resource-card-builder.md
agents/affiliate-disclosure-reviewer.md
agents/content-brief-generator.md
```

## Related Knowledge Bases

```text
knowledge-base/partner-enablement/README.md
knowledge-base/local-referrals/README.md
knowledge-base/content-ops/README.md
```

## Related Schemas

```text
schemas/agent.schema.json
schemas/custom-gpt.schema.json
```

## Done Means

This skill is complete when it can produce a partner-ready card that:

- Defines the audience
- States the problem solved
- Provides CTA hierarchy
- Includes disclosure language
- Lists restricted claims
- Avoids hidden compensation framing
- Avoids guaranteed outcomes
- Includes tracking and publication notes