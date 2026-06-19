# Content Brief Builder

## Purpose

The **Content Brief Builder** skill creates writer-ready content briefs for blog posts, SEO articles, landing pages, comparison pages, tool pages, agent pages, skill pages, resource hubs, partner pages, and engineering-as-marketing assets.

Use this skill when a topic, keyword, product, GPT, agent, skill, or resource needs to become a structured publishing plan with audience, search intent, keywords, outline, CTA hierarchy, metadata, internal links, FAQs, examples, and public-safe claim rules.

This skill does **not** guarantee rankings, traffic, revenue, conversions, approvals, funding, or business outcomes.

## When To Use

Use this skill when the user asks for:

- A content brief
- SEO article plan
- Blog outline
- Landing page brief
- Tool page brief
- GPT launch article brief
- Keyword-driven article plan
- Content calendar row
- Wix blog structure
- Notion content database row
- Comparison article plan
- Affiliate article brief
- Funding content brief
- Business-credit content brief
- AI tool content brief
- Engineering-as-marketing article brief

Use it before drafting full content when the user needs strategy first.

Do not use this skill for:

- Final legal advice
- Tax advice
- Lending advice
- Credit repair advice
- Copying competitor content
- Publishing without editorial review
- Current facts that require verification unless verified separately

## Inputs

### Minimum Inputs

```text
Topic:
Audience:
Primary keyword:
Content type:
Primary CTA:
```

### Recommended Inputs

```text
Working title:
Secondary keywords:
Search intent:
Reader pain:
Desired outcome:
Offer/product:
Primary CTA URL:
Secondary CTA:
Secondary CTA URL:
Internal links:
Brand voice:
Claims to avoid:
Publishing platform:
```

### Optional Inputs

```text
Article cluster:
Funnel stage:
Word count target:
SERP notes:
Competitor angle:
Related agent:
Related skill:
Related knowledge base:
Meta description:
Excerpt:
FAQ questions:
Comparison terms:
Affiliate disclosure needed:
Legal/trust notes:
Examples to include:
Schema markup needed:
```

## Outputs

This skill should produce:

1. Content brief
2. Title options
3. Content type
4. Audience
5. Search intent
6. Keyword map
7. Reader pain
8. Desired outcome
9. Recommended angle
10. Outline
11. Section notes
12. CTA plan
13. Internal link plan
14. Meta description
15. Article excerpt
16. FAQ ideas
17. Do-not-claim list
18. Publishing notes

## Standard Output Format

```md
# Content Brief

## 1. Working Title

[Title]

## 2. Title Options

- Option 1
- Option 2
- Option 3

## 3. Content Type

[Blog post / landing page / resource page / comparison page / tool page / directory page]

## 4. Audience

[Audience]

## 5. Search Intent

[Intent]

## 6. Primary Keyword

[Keyword]

## 7. Secondary Keywords

- Keyword 1
- Keyword 2
- Keyword 3

## 8. Reader Pain

[Problem the reader is trying to solve]

## 9. Best Outcome

[Useful outcome the content should help create]

## 10. Recommended Angle

[Positioning]

## 11. Outline

### H1

[H1]

### H2: Section

Purpose:
- Notes:

### H2: Section

Purpose:
- Notes:

## 12. CTA Plan

### Primary CTA

- Text:
- URL:
- Placement:

### Secondary CTA

- Text:
- URL:
- Placement:

## 13. Internal Links

| Page | Anchor | Reason |
|---|---|---|
| Page | Anchor | Reason |

## 14. Meta Description

[150–160 character description]

## 15. Article Excerpt

[Short excerpt]

## 16. FAQ Ideas

- Question 1
- Question 2
- Question 3

## 17. Do Not Claim

Do not claim:

- Claim 1
- Claim 2
- Claim 3

## 18. Publishing Notes

- Note 1
- Note 2
- Note 3
```

## File / Path Conventions

Content brief examples may live under:

```text
examples/content-ops/
knowledge-base/content-ops/examples.md
```

Content brief templates may live under:

```text
templates/content-brief-template.md
templates/blog-brief-template.md
templates/landing-page-brief-template.md
```

Notion import rows may be stored as:

```text
source-data/content-briefs.csv
```

## Workflow

### Step 1 — Identify Content Type

Classify the request as one of:

```text
Blog post
SEO article
Landing page
Tool page
Calculator page
Agent page
Skill page
Knowledge-base page
Partner page
Affiliate page
Comparison page
Directory page
Prompt page
Use-case page
Legal/trust page
Portfolio entry
```

### Step 2 — Define Search Intent

Classify intent:

```text
informational
commercial investigation
comparison
transactional
navigational
educational
local
tool-use
download
partner-recruitment
```

Examples:

```text
"ad spend cash flow calculator" → tool-use / commercial investigation
"business credit readiness checklist" → educational / tool-use
"best AI tools for business loan brokers" → commercial investigation
"funding product requirements" → informational / commercial investigation
```

### Step 3 — Define Reader and Pain

Identify:

- Who the reader is
- What they are trying to solve
- What they already know
- What they are confused about
- What action they should take next

### Step 4 — Build Keyword Map

Include:

- Primary keyword
- Secondary keywords
- Long-tail variants
- Question keywords
- Internal link anchors
- Related glossary terms

Avoid keyword stuffing. This is strategy, not SEO confetti.

### Step 5 — Build Recommended Angle

The angle should state why this content deserves to exist.

Good:

```text
Position the calculator as a planning and readiness tool for ecommerce operators trying to understand ad spend timing pressure before scaling.
```

Weak:

```text
Write about ecommerce funding.
```

### Step 6 — Build Outline

A strong outline should include:

- H1
- Intro problem
- Definition or context
- Why it matters
- How it works
- Examples
- Mistakes
- Next steps
- CTA
- FAQ
- Disclaimer or disclosure if needed

### Step 7 — Add CTA Plan

CTA plan should include:

- Primary CTA
- Secondary CTA
- Placement
- Destination
- Reason for placement

Strong CTA examples:

```text
Run the Ad Spend Cash Flow Calculator
Compare Ecommerce Funding Options
Browse AI Agent Skills
Build a Partner Resource Card
Check Funding Readiness
```

### Step 8 — Add Public-Safe Rules

For content involving funding, business credit, affiliate links, AI, automation, or financial outcomes, include a do-not-claim list.

### Step 9 — Add Publishing Notes

Publishing notes may include:

- Suggested URL slug
- Meta description
- Excerpt
- Internal links
- Source verification needs
- Affiliate disclosure if relevant
- Review owner if needed

## Content-Type Patterns

### Blog Post Brief

Include:

```text
Search intent
Keyword map
H2/H3 outline
Meta description
FAQ
CTA
Do-not-claim list
```

### Landing Page Brief

Include:

```text
Hero angle
Audience
Pain
How it works
Offer sections
CTA hierarchy
Trust/disclaimer notes
FAQ
Conversion notes
```

### Tool Page Brief

Include:

```text
Tool purpose
Inputs
Outputs
How to use
Limitations
CTA
Related resources
Public-safe claims
```

### Partner Page Brief

Include:

```text
Partner types
Who should apply
What partners get
How referrals work
Disclosure language
No earnings guarantee
CTA hierarchy
```

### Funding Article Brief

Include:

```text
Educational framing
Common requirements
Possible fit
Documentation expectations
Review required
No approval/funding guarantees
```

### Business Credit Article Brief

Include:

```text
Setup readiness
Common gaps
Educational next steps
No credit repair framing
No score/approval/limit guarantees
```

## Quality Checklist

Before finalizing a content brief:

- [ ] Topic is clear.
- [ ] Content type is identified.
- [ ] Audience is specific.
- [ ] Search intent is clear.
- [ ] Primary keyword is included.
- [ ] Secondary keywords are useful.
- [ ] Reader pain is clear.
- [ ] Desired outcome is practical.
- [ ] Recommended angle is specific.
- [ ] Outline is complete.
- [ ] CTA plan is included.
- [ ] Internal links are suggested.
- [ ] Meta description is included.
- [ ] Article excerpt is included.
- [ ] FAQ ideas are included.
- [ ] Do-not-claim list is included where relevant.
- [ ] Publishing notes are included.
- [ ] Current facts are flagged for verification when needed.

## Guardrails

This skill must not:

- Guarantee rankings.
- Guarantee traffic.
- Guarantee revenue.
- Guarantee conversions.
- Guarantee approval or funding.
- Provide legal, tax, lending, or credit repair advice.
- Copy competitor content.
- Invent citations.
- Invent current facts.
- Invent testimonials.
- Hide affiliate relationships.
- Claim neutral rankings if compensation influences placement.
- Publish without human/editorial review.

## Public-Safe Language Rules

Use:

```text
educational
readiness
planning tool
common requirements
possible fit
review required
may help
can help organize
next step
draft
```

Avoid:

```text
guaranteed approval
guaranteed funding
guaranteed ranking
guaranteed traffic
guaranteed revenue
everyone qualifies
no risk
no documents needed
```

## Example Input

```text
Topic: Ad Spend Cash Flow Calculator
Audience: Ecommerce operators running paid ads
Primary keyword: ad spend cash flow calculator
Primary CTA: Run the Ad Spend Cash Flow Calculator
Primary CTA URL: https://chatgpt.com/g/g-6a3359a8328c8191acc5cba7968a1639-ad-spend-cash-flow-calculator
Secondary CTA: Compare Ecommerce Funding Options
Secondary CTA URL: https://tally.so/r/w4R2Ad
```

## Example Output

```md
# Content Brief

## 1. Working Title

Ad Spend Cash Flow Calculator: Forecast Your Ecommerce Cash Gap Before Scaling Ads

## 2. Title Options

- Ad Spend Cash Flow Calculator: Forecast Your Ecommerce Cash Gap Before Scaling Ads
- How to Estimate Your Ad Spend Cash Gap Before Payouts Catch Up
- Why Profitable Ads Can Still Create an Ecommerce Cash Crunch

## 3. Content Type

Tool landing page / SEO support article

## 4. Audience

Ecommerce operators, paid media teams, and founders running paid ads while waiting for platform payouts.

## 5. Search Intent

Tool-use and commercial investigation. The reader wants to understand whether ad spend is creating a cash-flow timing problem.

## 6. Primary Keyword

ad spend cash flow calculator

## 7. Secondary Keywords

- ecommerce cash flow calculator
- ad spend cash gap
- payout lag calculator
- ecommerce funding options
- paid ads cash flow

## 8. Reader Pain

The reader may be scaling ads and seeing revenue increase, but cash is tightening because ad spend leaves before payouts and contribution margin return.

## 9. Best Outcome

The reader uses the calculator to estimate whether scaling ads may create a cash gap and then reviews possible next steps.

## 10. Recommended Angle

Position the calculator as a planning and readiness tool, not a promise of funding, revenue, or ad performance.

## 11. Outline

### H1

Ad Spend Cash Flow Calculator

### H2: Why Ad Spend Can Create a Cash Gap

Purpose:
- Explain payout lag, upfront ad spend, margin delay, and inventory timing.

### H2: What the Calculator Reviews

Purpose:
- Inputs such as daily ad spend, payout lag, gross margin, repayment timing, and target scale.

### H2: How to Use the Results

Purpose:
- Explain that outputs are estimates and should be reviewed before making spend or funding decisions.

### H2: When Ecommerce Funding May Be Worth Comparing

Purpose:
- Discuss possible review situations without guaranteeing funding.

### H2: FAQ

Purpose:
- Answer common questions.

## 12. CTA Plan

### Primary CTA

- Text: Run the Ad Spend Cash Flow Calculator
- URL: https://chatgpt.com/g/g-6a3359a8328c8191acc5cba7968a1639-ad-spend-cash-flow-calculator
- Placement: Hero, mid-page, final section

### Secondary CTA

- Text: Compare Ecommerce Funding Options
- URL: https://tally.so/r/w4R2Ad
- Placement: After calculator explanation and final CTA

## 13. Internal Links

| Page | Anchor | Reason |
|---|---|---|
| Ecommerce funding options | ecommerce funding options | Supports funding next step |
| Funding readiness | funding readiness | Helps frame review language |
| AI tools directory | AI tools | Connects tool to broader library |

## 14. Meta Description

Forecast ecommerce ad spend cash gaps caused by payout lag, margin timing, and scaling pressure before increasing your paid ads budget.

## 15. Article Excerpt

Use this ad spend cash flow calculator to estimate whether paid ads may create a short-term ecommerce cash gap before payouts and margin recovery catch up.

## 16. FAQ Ideas

- What is an ad spend cash gap?
- Why can profitable ads still create cash pressure?
- Does this calculator guarantee funding?
- When should ecommerce operators compare funding options?

## 17. Do Not Claim

Do not claim:

- Guaranteed revenue
- Guaranteed ROAS
- Guaranteed funding
- Guaranteed approval
- No risk
- Exact financial outcome

## 18. Publishing Notes

Include a clear note that calculator outputs are estimates and should be reviewed before making financial decisions.
```

## Related Agents

```text
agents/content-brief-generator.md
agents/static-site-page-generator.md
agents/affiliate-disclosure-reviewer.md
```

## Related Knowledge Bases

```text
knowledge-base/content-ops/README.md
knowledge-base/funding/README.md
knowledge-base/partner-enablement/README.md
knowledge-base/engineering-as-marketing/README.md
```

## Related Schemas

```text
schemas/agent.schema.json
schemas/custom-gpt.schema.json
schemas/vercel-project.schema.json
```

## Done Means

This skill is complete when it can produce a writer-ready content brief with:

- Search intent
- Keyword map
- Reader pain
- Recommended angle
- Detailed outline
- CTA plan
- Internal links
- Metadata
- FAQ ideas
- Do-not-claim rules
- Publishing notes