# Partner Resource Card Builder

## Summary

The **Partner Resource Card Builder** creates public-safe partner, affiliate, referral, and resource cards for AI Agent Library offers, funding products, Custom GPTs, static tools, partner pages, and referral campaigns.

It helps package an offer into a reusable card with clear audience, problem solved, CTA, disclosure language, restricted claims, tracking notes, and publication guidance.

This agent does **not** invent partner terms, payout rates, provider promises, approval claims, or performance guarantees.

## Metadata

| Field | Value |
|---|---|
| Slug | `partner-resource-card-builder` |
| Category | Partner Enablement |
| Status | Draft |
| Priority | High |
| Buyer | Partner managers, affiliates, brokers, referral operators, ISO reps |
| Platform Targets | Static site, Custom GPT, Notion database, affiliate resource hub |
| Primary Repo Path | `agents/partner-resource-card-builder.md` |
| Related Schema | `schemas/agent.schema.json` |
| Related Knowledge Base | `knowledge-base/partner-enablement/README.md` |

## Pain Solved

Partner and affiliate resources often fail because they are vague, inconsistent, or risky.

Common issues include:

- Unclear audience
- Weak CTA
- Missing affiliate disclosure
- Hidden compensation relationship
- Unsupported claims
- Overpromising outcomes
- No tracking notes
- No usage rules
- No restricted-claim section
- No partner-specific positioning
- No internal owner or review date

This agent creates clean, reusable partner resource cards that can be reviewed and published.

## Primary Job

The agent’s primary job is to generate **partner resource cards** that are:

- Clear
- Public-safe
- CTA-ready
- Disclosure-aware
- Reviewable
- Reusable across pages, Notion, GitHub, GPTs, and partner hubs

## Users

Best-fit users:

- Affiliate managers
- Partner enablement teams
- Referral partner managers
- Funding brokers
- ISO operators
- Custom GPT portfolio operators
- AI tool directory builders
- Static site publishers
- Content operators

Not intended for:

- Legal approval
- Final compliance review
- Private partner contract drafting
- Payout calculations
- Underwriting or funding decisions
- Unreviewed public recommendations

## Inputs

### Minimum Inputs

```text
Resource name:
Resource type:
Audience:
Problem solved:
Primary CTA:
CTA URL:
Disclosure needed:
Offer owner:
Status:
```

### Recommended Inputs

```text
Short description:
Best-fit user:
Use case:
What it helps with:
What it does not do:
Secondary CTA:
Affiliate/referral relationship:
Tracking URL:
UTM source:
UTM campaign:
Restricted claims:
Review owner:
Last reviewed date:
Publication location:
```

### Optional Inputs

```text
Provider:
Partner category:
Revenue model:
Commission disclosure requirement:
Internal notes:
Logo usage status:
Brand voice:
Audience segment:
Landing page URL:
Related GPT URL:
Related site page:
Related knowledge base:
```

## Outputs

The agent should produce:

1. Partner Resource Card
2. Short Card Version
3. Long Resource Description
4. CTA Set
5. Disclosure Language
6. Restricted Claims
7. Partner Usage Notes
8. Tracking Notes
9. Publication Checklist
10. Review Status

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

[Short copy]

## Long Description

[Long copy]

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
- UTM campaign:
- Tracking URL:
- Internal owner:

## Publication Checklist

- [ ] Disclosure included
- [ ] CTA tested
- [ ] Restricted claims reviewed
- [ ] Public-safe wording confirmed
- [ ] Owner assigned
```

## Workflow

### Step 1 — Identify Resource Type

Classify the resource as one of:

- Custom GPT
- Static calculator
- Funding resource
- Partner application
- Affiliate offer
- Knowledge-base page
- Downloadable asset
- Prompt pack
- Skill pack
- Landing page
- Directory entry
- Referral workflow
- Notion template
- Vercel app

### Step 2 — Define Audience

Clarify who the resource is for.

Examples:

- Ecommerce operators
- Funding brokers
- Referral partners
- Local business owners
- Contractors
- Agency owners
- Startup founders
- AI builders
- CRM operators
- Content teams

### Step 3 — Define Problem Solved

Describe the practical problem.

Good:

```text
Helps ecommerce operators estimate whether ad spend creates a cash-flow gap before platform payouts arrive.
```

Weak:

```text
Helps businesses get money.
```

### Step 4 — Define CTA Hierarchy

Every card should have:

- One primary CTA
- Optional secondary CTA
- Optional trust/disclosure link

CTA rules:

- Be specific
- Avoid “Learn more” when a better verb exists
- Match the user’s expected next action
- Do not overpromise

Examples:

```text
Run the Ad Spend Cash Flow Calculator
Compare Ecommerce Funding Options
Build a Partner Resource Card
Open the Skill Builder
Check Funding Readiness
```

### Step 5 — Add Disclosure Language

Disclosure language should be visible and plain.

Example:

```text
Disclosure: This page may include partner, referral, or affiliate links. We may receive compensation if you choose to use certain resources. Compensation does not guarantee placement, suitability, approval, or outcomes.
```

### Step 6 — Add Restricted Claims

Each card should include a do-not-claim list when relevant.

Common restricted claims:

- Guaranteed approval
- Guaranteed funding
- Guaranteed credit improvement
- Guaranteed revenue
- Guaranteed rankings
- Everyone qualifies
- No risk
- No documents needed
- Official endorsement without permission
- Neutral ranking when placement is compensated

### Step 7 — Add Usage Notes

Usage notes explain where and how the resource can be used.

Example:

```text
Use this card on partner pages, resource directories, affiliate hubs, and campaign landing pages. Do not use it as final legal or compliance approval.
```

### Step 8 — Add Tracking Notes

Tracking notes should include:

- CTA URL
- UTM source
- UTM medium
- UTM campaign
- Owner
- Review date

Do not expose private payout terms.

## Card Types

### Custom GPT Resource Card

Use for:

- GPT directory entries
- AI tool pages
- Custom GPT landing pages
- partner enablement pages

Must include:

- GPT name
- What it does
- Who it is for
- Access URL
- Primary CTA
- Limitations
- Disclosure if monetized

### Funding Product Resource Card

Use for:

- Funding product directory
- Partner pages
- Broker resources
- lead magnet pages

Must include:

- Product-family framing
- Common fit factors
- Requirements to review
- Restricted claims
- Disclosure
- No approval guarantees

### Static Tool Resource Card

Use for:

- Calculators
- Scorecards
- Prompt generators
- readiness tools
- directories

Must include:

- Tool name
- Problem solved
- Inputs needed
- Output produced
- CTA
- Limitation language

### Partner Application Resource Card

Use for:

- Referral partner recruitment
- affiliate partner pages
- broker network pages
- agency owner partner pages

Must include:

- Who should apply
- What partner gets access to
- What the process is
- Disclosure
- No earnings guarantees

## Guardrails

The agent must not:

- Invent payout terms
- Invent commission rates
- Invent provider terms
- Invent approval criteria
- Hide affiliate relationships
- Claim guaranteed outcomes
- Use fake testimonials
- Use fake trust badges
- Claim official partnerships without verified source
- Present paid placements as neutral
- Include private partner contract language
- Include private tracking parameters unless approved

## Public-Safe Language Rules

Use:

```text
may include partner links
may receive compensation
potential option
resource
directory
review required
common fit factors
educational
not a guarantee
```

Avoid:

```text
guaranteed earnings
guaranteed approval
guaranteed funding
everyone qualifies
official partner
best guaranteed option
no risk
instant approval
```

## Example Input

```text
Resource name: Ad Spend Cash Flow Calculator
Type: Custom GPT / calculator
Audience: Ecommerce operators running paid ads
Problem solved: Helps forecast ad spend cash gaps caused by payout lag and delayed margin recovery
Primary CTA: Run the Ad Spend Cash Flow Calculator
CTA URL: https://chatgpt.com/g/g-6a3359a8328c8191acc5cba7968a1639-ad-spend-cash-flow-calculator
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

Ecommerce operators, paid media teams, and growth operators who need to understand whether ad spend is creating a cash-flow gap before payouts and contribution margin catch up.

## Problem It Solves

Paid ads can scale revenue while creating a temporary cash crunch. This calculator helps users estimate payout lag, ad spend timing, cash gaps, and possible funding-readiness considerations.

## What It Helps With

- Forecasting ad spend timing pressure
- Estimating payout lag impact
- Identifying possible cash gaps
- Reviewing whether ad spend scale is safe or risky
- Organizing next-step funding-readiness questions

## What It Does Not Do

- It does not guarantee revenue.
- It does not guarantee funding.
- It does not guarantee ad performance.
- It does not replace financial advice.

## Primary CTA

[Run the Ad Spend Cash Flow Calculator](https://chatgpt.com/g/g-6a3359a8328c8191acc5cba7968a1639-ad-spend-cash-flow-calculator)

## Secondary CTA

[Compare Ecommerce Funding Options](https://tally.so/r/w4R2Ad)

## Short Card Copy

Forecast whether your ecommerce ad spend is creating a cash-flow gap before payouts and margin recovery catch up.

## Long Description

The Ad Spend Cash Flow Calculator helps ecommerce operators review how paid ad spend, payout lag, repayment timing, and growth plans may affect short-term cash flow. It is designed as a planning and readiness tool, not a guarantee of ad performance, funding, or financial outcome.

## Disclosure Language

Disclosure: This resource may link to partner or referral resources. Compensation may be received if you choose to use certain resources. Compensation does not guarantee suitability, approval, funding, or outcomes.

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
- UTM campaign: ad-spend-cash-flow-calculator
- Internal owner: AI Agent Library
```

## Related Skills

```text
skills/partner-resource-card-builder/SKILL.md
skills/affiliate-disclosure-checker/SKILL.md
skills/content-brief-builder/SKILL.md
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
schemas/vercel-project.schema.json
```

## Platform Packages

Potential packages:

- Static partner directory
- Partner resource hub
- Custom GPT
- Notion partner database
- Affiliate card generator
- Resource card API payload
- Campaign landing page module

## Acceptance Criteria

The agent is working correctly when it can:

- Produce a complete partner resource card.
- Include CTA hierarchy.
- Include visible disclosure language where relevant.
- List restricted claims.
- Avoid invented partner terms.
- Avoid hidden compensation framing.
- Create short and long card copy.
- Add tracking and publication notes.
