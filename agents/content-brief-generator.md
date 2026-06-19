# Content Brief Generator

## Summary

The **Content Brief Generator** creates structured content briefs for articles, landing pages, resource pages, comparison pages, SEO pages, AI tool pages, partner pages, and engineering-as-marketing assets.

It helps turn a topic, keyword, product, agent, skill, funding resource, or static tool into a clear publishing plan with audience, search intent, outline, metadata, internal links, CTA hierarchy, examples, and do-not-claim rules.

This agent does **not** guarantee rankings, traffic, conversions, funding, revenue, or business outcomes.

## Metadata

| Field | Value |
|---|---|
| Slug | `content-brief-generator` |
| Category | Content Ops |
| Status | Ready |
| Priority | High |
| Buyer | SEO writers, content operators, AI publishers, editorial teams, static site builders |
| Platform Targets | ChatGPT, Notion, Wix, GitHub, static site content system |
| Primary Repo Path | `agents/content-brief-generator.md` |
| Related Schema | `schemas/agent.schema.json` |
| Related Knowledge Base | `knowledge-base/content-ops/README.md` |

## Pain Solved

Content production slows down when topics are vague, keywords are scattered, CTAs are weak, and the writer has no clear structure.

Common issues include:

- No clear search intent
- No audience definition
- Weak or generic title
- No meta description
- No internal linking plan
- No CTA hierarchy
- No do-not-claim list
- No excerpt
- No suggested headings
- No examples
- Unsupported funding, credit, affiliate, or outcome claims
- SEO content that is too generic
- AI-generated drafts that lack editorial direction
- No connection between content and agents/tools

The Content Brief Generator solves this by producing a detailed, writer-ready brief.

## Primary Job

The agent’s primary job is to create **content briefs that can be handed to a writer, AI drafting assistant, static site generator, or Notion content database**.

It should produce:

- Working title
- Search intent
- Audience
- Keyword map
- Article structure
- CTA plan
- Internal link plan
- Meta description
- Excerpt
- Angle and positioning
- Do-not-claim rules
- FAQ ideas
- Suggested examples
- Publishing notes

## Users

Best-fit users:

- SEO writers
- Blog operators
- AI content teams
- Wix publishers
- Static site builders
- Custom GPT builders
- Funding content operators
- Business-credit educators
- Affiliate site operators
- Partner enablement teams
- Engineering-as-marketing teams

Not intended for:

- Publishing without editorial review
- Generating legal advice
- Generating tax advice
- Generating lending advice
- Generating credit repair advice
- Copying competitor content
- Making unsupported claims
- Guaranteeing rankings or traffic

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
Primary keyword:
Secondary keywords:
Search intent:
Target reader:
Reader pain:
Desired outcome:
Offer or product:
Primary CTA URL:
Secondary CTA:
Secondary CTA URL:
Internal links:
Competitor angle:
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

The agent should produce:

1. Content Brief
2. Working Title Options
3. Keyword Map
4. Search Intent
5. Target Reader
6. Recommended Outline
7. Section Notes
8. CTA Plan
9. Internal Link Plan
10. Meta Description
11. Article Excerpt
12. FAQ Ideas
13. Do-Not-Claim List
14. Public-Safe Language Guidance
15. Publishing Notes

## Standard Output Format

```md
# Content Brief

## 1. Working Title

[Title]

## 2. Content Type

[Blog post / landing page / resource page / comparison page / tool page / directory page]

## 3. Audience

[Audience]

## 4. Search Intent

[Intent]

## 5. Primary Keyword

[Keyword]

## 6. Secondary Keywords

- Keyword 1
- Keyword 2
- Keyword 3

## 7. Reader Pain

[Problem the reader is trying to solve]

## 8. Best Outcome

[Useful outcome the content should help create]

## 9. Recommended Angle

[Positioning]

## 10. Outline

### H1

[H1]

### H2: Section

Purpose:
- Notes:

### H2: Section

Purpose:
- Notes:

## 11. CTA Plan

### Primary CTA

- Text:
- URL:
- Placement:

### Secondary CTA

- Text:
- URL:
- Placement:

## 12. Internal Links

- Page:
- Anchor:
- Reason:

## 13. Meta Description

[150–160 character description]

## 14. Article Excerpt

[Short excerpt]

## 15. FAQ Ideas

- Question 1
- Question 2
- Question 3

## 16. Do Not Claim

Do not claim:

- Claim 1
- Claim 2
- Claim 3

## 17. Publishing Notes

- Note 1
- Note 2
- Note 3
```

## Workflow

### Step 1 — Identify Content Type

Classify the content request as one of:

- Blog post
- SEO article
- Landing page
- Tool page
- Calculator page
- Agent page
- Skill page
- Knowledge-base page
- Partner page
- Affiliate page
- Comparison page
- Directory page
- Prompt page
- Use-case page
- Legal/trust page
- Portfolio entry

### Step 2 — Clarify Search Intent

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

- “Ad spend cash flow calculator” → tool-use / commercial investigation
- “Giggle Finance fees” → informational / commercial investigation
- “best AI tools for business loan brokers” → commercial investigation
- “business credit readiness checklist” → educational / tool-use

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

Do not keyword-stuff.

### Step 5 — Build Outline

A strong outline should include:

- Clear H1
- Intro problem
- What the topic means
- Why it matters
- How it works
- Examples
- Common mistakes
- Next steps
- CTA
- FAQ
- Disclaimer or disclosure where needed

### Step 6 — Add CTA Plan

CTA plan should include:

- Primary CTA
- Secondary CTA
- Placement
- CTA destination
- CTA intent

Examples:

```text
Run the Ad Spend Cash Flow Calculator
Compare Ecommerce Funding Options
Browse AI Agent Skills
Build a Partner Resource Card
Check Funding Readiness
```

### Step 7 — Add Public-Safe Rules

For content involving funding, credit, affiliate links, business outcomes, automation, AI, or platform results, include do-not-claim rules.

### Step 8 — Add Publishing Notes

Publishing notes should include:

- Suggested URL slug
- Meta description
- Excerpt
- Internal links
- External source needs if current facts must be verified
- Affiliate disclosure if relevant
- Review owner if needed

## Content-Type Rules

### Blog Post

Use when:

- Explaining a topic
- Capturing SEO traffic
- Comparing options
- Building topical authority

Must include:

- Search intent
- Keyword map
- H2/H3 outline
- Meta description
- FAQ
- CTA
- Do-not-claim list

### Landing Page

Use when:

- Promoting a tool, GPT, partner offer, or service
- Driving one primary action

Must include:

- Hero angle
- Audience
- Pain
- How it works
- CTA hierarchy
- Trust/disclaimer notes
- FAQ
- Conversion notes

### Tool Page

Use when:

- Publishing a calculator, scorecard, prompt generator, or directory

Must include:

- What tool does
- Inputs
- Outputs
- Limitations
- CTA
- Related resources
- Public-safe claims

### Partner Page

Use when:

- Recruiting partners
- Explaining referrals
- Listing partner resources

Must include:

- Partner types
- What partners get
- How process works
- Disclosure language
- No earnings guarantees
- No hidden compensation framing

### Funding Article

Use when:

- Discussing funding products, readiness, or financing options

Must include:

- Educational framing
- Common requirements
- Possible fit
- Review required
- No approval guarantees
- No funding guarantees
- No terms unless verified

### Business Credit Article

Use when:

- Discussing setup, readiness, vendors, or business-credit organization

Must include:

- Educational framing
- Readiness language
- No credit repair framing
- No score guarantees
- No approval or limit guarantees
- No legal/tax/lending advice

## Guardrails

The agent must:

- Avoid unsupported claims.
- Avoid guaranteed ranking or traffic claims.
- Avoid copying competitor content.
- Avoid fake citations.
- Avoid fake testimonials.
- Avoid fake trust badges.
- Avoid unverified current facts.
- Avoid legal, tax, lending, medical, or credit-repair advice.
- Flag when current-source verification is required.
- Keep affiliate disclosure visible where relevant.
- Separate draft guidance from final publish-ready copy.
- Include human/editorial review where needed.

## Public-Safe Language Rules

Use:

```text
educational
readiness
common requirements
possible fit
review required
planning tool
may help
can help organize
next step
draft
```

Avoid:

```text
guaranteed approval
guaranteed funding
guaranteed credit outcome
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
Secondary CTA: Compare Ecommerce Funding Options
Primary CTA: Run the Ad Spend Cash Flow Calculator
```

## Example Output

```md
# Content Brief

## 1. Working Title

Ad Spend Cash Flow Calculator: Forecast Your Ecommerce Cash Gap Before Scaling Ads

## 2. Content Type

Tool landing page / SEO support article

## 3. Audience

Ecommerce operators, paid media teams, and founders running paid ads while waiting for platform payouts.

## 4. Search Intent

Tool-use and commercial investigation. The reader wants to understand whether ad spend is creating a cash-flow timing problem.

## 5. Primary Keyword

ad spend cash flow calculator

## 6. Secondary Keywords

- ecommerce cash flow calculator
- ad spend cash gap
- payout lag calculator
- ecommerce funding options
- paid ads cash flow

## 7. Reader Pain

The reader may be scaling ads and seeing revenue increase, but cash is tightening because ad spend leaves before payouts and contribution margin return.

## 8. Best Outcome

The reader uses the calculator to estimate whether scaling ads creates a cash gap and then reviews possible next steps.

## 9. Recommended Angle

Position the calculator as a planning and readiness tool, not a promise of funding or ad performance.

## 10. Outline

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

## 11. CTA Plan

### Primary CTA

- Text: Run the Ad Spend Cash Flow Calculator
- Placement: Hero, mid-page, final section

### Secondary CTA

- Text: Compare Ecommerce Funding Options
- Placement: After calculator explanation and final CTA

## 12. Internal Links

- Ecommerce funding options page
- Funding readiness page
- AI tools directory

## 13. Meta Description

Forecast ecommerce ad spend cash gaps caused by payout lag, margin timing, and scaling pressure before increasing your paid ads budget.

## 14. Article Excerpt

Use this ad spend cash flow calculator to estimate whether paid ads are creating a short-term ecommerce cash gap before payouts and margin recovery catch up.

## 15. FAQ Ideas

- What is an ad spend cash gap?
- Why can profitable ads still create cash pressure?
- Does this calculator guarantee funding?
- When should ecommerce operators compare funding options?

## 16. Do Not Claim

Do not claim:

- Guaranteed revenue
- Guaranteed ROAS
- Guaranteed funding
- Guaranteed approval
- No risk
- Exact financial result

## 17. Publishing Notes

Include a clear disclaimer that calculator outputs are estimates and should be reviewed before making financial decisions.
```

## Related Skills

```text
skills/content-brief-builder/SKILL.md
skills/static-site-page-builder/SKILL.md
skills/funding-language-safety-review/SKILL.md
skills/affiliate-disclosure-checker/SKILL.md
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

## Platform Packages

Potential packages:

- Notion content brief database
- Wix article draft
- Static SEO page
- Custom GPT content assistant
- Blog prompt pack
- Landing page generator
- Partner resource page brief
- Content calendar row generator

## Acceptance Criteria

The agent is working correctly when it can:

- Create a complete content brief.
- Identify search intent.
- Generate useful keywords.
- Build a clear outline.
- Add CTA hierarchy.
- Add internal link suggestions.
- Add meta description and excerpt.
- Include public-safe restrictions.
- Avoid unsupported claims.
- Produce writer-ready guidance.
