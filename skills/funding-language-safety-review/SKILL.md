# Funding Language Safety Review

## Purpose

The **Funding Language Safety Review** skill checks funding, business-credit, partner, affiliate, and financial-resource content for risky or unsupported claims.

Use this skill to review page copy, resource cards, GPT descriptions, blog briefs, landing pages, email drafts, SMS drafts, partner pages, and funding product descriptions before publication or use.

This skill does not provide legal advice, compliance approval, underwriting review, credit repair advice, or lending advice. It creates a practical language-safety review for human review.

## When To Use

Use this skill when content mentions:

- Business funding
- Working capital
- Merchant cash advances
- Revenue-based financing
- Business lines of credit
- Term loans
- Startup funding
- Equipment finance
- Invoice factoring
- Real estate capital
- Marketplace seller capital
- Business credit
- Funding applications
- Partner or affiliate funding CTAs
- Approval likelihood
- Funding speed
- Rates or terms
- Credit score or credit improvement
- Funding readiness

Use it for:

- Landing pages
- Blog posts
- GPT descriptions
- Partner resource cards
- Email/SMS drafts
- Call scripts
- Static site copy
- Product directory entries
- Ad copy drafts
- Funding comparison pages
- Business-credit readiness pages

## Inputs

### Minimum Inputs

```text
Content to review:
Content type:
Audience:
Publication location:
```

### Recommended Inputs

```text
Offer/product:
Primary CTA:
CTA URL:
Funding category:
Affiliate/referral relationship:
Target audience:
Claims made:
Review goal:
```

### Optional Inputs

```text
Provider:
Known requirements:
Source notes:
Jurisdiction:
Disclosure page URL:
Related product page:
Internal notes:
Existing disclaimer:
Brand voice:
Risk tolerance:
```

## Outputs

This skill should produce:

1. Review Summary
2. Risk Classification
3. Risky Claims Table
4. Suggested Safer Edits
5. Missing Disclosure Notes
6. Do-Not-Claim List
7. Public-Safe Replacement Copy
8. Human Review Checklist
9. Publication Recommendation

## Standard Output Format

```md
# Funding Language Safety Review

## 1. Review Summary

- Content type:
- Audience:
- Offer/product:
- Overall risk:
- Recommendation:

## 2. Risk Classification

Low / Medium / High

Reason:

[Explanation]

## 3. Risky Claims

| Original Claim | Risk | Suggested Safer Edit |
|---|---|---|
| Claim | Risk | Edit |

## 4. Missing or Weak Disclosures

- Item 1
- Item 2

## 5. Public-Safe Replacement Copy

[Rewritten copy]

## 6. Do Not Claim

Do not claim:

- Guaranteed approval
- Guaranteed funding
- Guaranteed terms
- Guaranteed credit outcome
- Everyone qualifies
- No documents needed

## 7. Human Review Checklist

- [ ] Approval/funding guarantees removed
- [ ] Terms/rates verified or removed
- [ ] Speed claims verified or softened
- [ ] Affiliate/referral disclosure included if relevant
- [ ] Public-safe wording used
- [ ] Human review completed

## 8. Publication Recommendation

Approve / Revise / Do not publish yet
```

## Risk Levels

### Low Risk

Content is likely low risk when it:

- Uses educational language
- Avoids guarantees
- Avoids rate/term claims
- Avoids approval promises
- Includes limitations
- Uses readiness framing
- Uses “may,” “possible,” and “review required” appropriately

### Medium Risk

Content is medium risk when it:

- Mentions funding speed without source
- Mentions approval likelihood vaguely
- Uses strong CTA language
- Lacks disclosure on affiliate/referral links
- Discusses product fit without requirements
- Mentions credit but avoids direct guarantees
- Needs safer wording before publication

### High Risk

Content is high risk when it:

- Claims guaranteed approval
- Claims guaranteed funding
- Claims everyone qualifies
- Claims no documents are needed
- Claims guaranteed rates or terms
- Claims guaranteed credit improvement
- Claims guaranteed score increases
- Claims guaranteed credit limits
- Claims guaranteed partner earnings
- Uses fake lender/provider endorsement
- Hides affiliate/referral compensation
- Encourages misrepresentation
- Provides credit repair advice
- Provides legal/tax/lending advice as final guidance

## Language Replacement Rules

### Approval Claims

Avoid:

```text
Get approved today.
Guaranteed approval.
Everyone qualifies.
You qualify now.
```

Use:

```text
Submit your information for review.
Check possible funding options.
Review common fit factors.
See what information may be needed.
```

### Funding Claims

Avoid:

```text
Get guaranteed funding.
Funding is secured.
You will receive capital.
No documents needed.
```

Use:

```text
Explore possible funding options.
Prepare your file for review.
Review funding-readiness details.
Funding options depend on provider review and file details.
```

### Speed Claims

Avoid:

```text
Guaranteed same-day funding.
Instant funding for everyone.
Cash today no matter what.
```

Use:

```text
Some products may be reviewed quickly when required information is available.
Timing varies by provider, file details, documentation, and review.
```

### Credit Claims

Avoid:

```text
Guaranteed credit score increase.
Guaranteed business credit approval.
Get approved for vendor credit.
Guaranteed credit limits.
```

Use:

```text
Review business-credit setup readiness.
Organize common business profile details.
Vendor and credit decisions depend on provider-specific requirements.
```

### Terms / Rates Claims

Avoid:

```text
Lowest rates guaranteed.
You will get X% rate.
Guaranteed terms.
```

Use:

```text
Terms vary by provider, file details, product type, and review.
Review current terms directly with the provider before making decisions.
```

### Affiliate / Partner Claims

Avoid:

```text
This is the best option for everyone.
Our unbiased #1 pick.
Guaranteed partner earnings.
```

Use:

```text
This resource may include partner or referral links.
Compensation may be received if you choose to use certain resources.
Compensation does not guarantee suitability, approval, funding, earnings, or outcomes.
```

## Public-Safe Phrase Bank

Use these phrases:

```text
educational resource
readiness review
possible fit
may be worth reviewing
common requirements
review required
file details
provider requirements vary
documentation may be needed
submit information for review
potential next step
planning tool
estimate
not a guarantee
```

## Restricted Phrase Bank

Flag these phrases:

```text
guaranteed approval
guaranteed funding
guaranteed credit
guaranteed credit score increase
guaranteed revenue
guaranteed rankings
everyone qualifies
no documents needed
no credit needed
no risk
instant approval for everyone
funding is secured
you are approved
lowest rate guaranteed
best for everyone
```

## Review Workflow

### Step 1 — Identify Content Type

Classify the content as:

- Landing page
- Funding product page
- Business-credit page
- Blog post
- GPT description
- Partner resource card
- Affiliate page
- Email draft
- SMS draft
- Call script
- Ad copy
- Directory listing
- Comparison page

### Step 2 — Identify Audience

Examples:

- Small business owners
- Ecommerce operators
- Funding brokers
- Referral partners
- Contractors
- Startup founders
- Business-credit learners
- AI tool users
- Partner applicants

### Step 3 — Identify Claims

Extract claims related to:

- Approval
- Funding
- Speed
- Terms
- Rates
- Credit
- Business outcomes
- Revenue
- Rankings
- Partner earnings
- Provider endorsement

### Step 4 — Classify Risk

Classify each claim as:

```text
Low
Medium
High
```

### Step 5 — Suggest Safer Edits

For each risky claim, provide:

- Why it is risky
- Safer replacement
- Whether source verification is needed
- Whether disclosure is needed

### Step 6 — Review Disclosure

If content includes affiliate, referral, partner, or lead-generation links, recommend visible disclosure.

Suggested disclosure:

```text
Disclosure: This page may include partner, referral, or affiliate links. We may receive compensation if you choose to use certain resources. Compensation does not guarantee approval, funding, suitability, earnings, or outcomes.
```

### Step 7 — Produce Replacement Copy

Rewrite the content to preserve conversion intent while removing unsupported claims.

### Step 8 — Add Human Review Checklist

Include a checklist before publication.

## Funding Content Guardrails

The skill must not approve copy that claims:

- Guaranteed funding
- Guaranteed approval
- Guaranteed amount
- Guaranteed term
- Guaranteed rate
- Guaranteed speed
- No documents needed
- Everyone qualifies
- No review required

Use language that emphasizes:

- Review
- Requirements
- Documentation
- File details
- Potential options
- Provider-specific decisioning
- Educational resources

## Business Credit Guardrails

The skill must not approve copy that claims:

- Credit repair
- Guaranteed score increase
- Guaranteed vendor approval
- Guaranteed business credit limits
- Guaranteed tradeline reporting
- Guaranteed funding from business credit setup

Use language that emphasizes:

- Setup readiness
- Common gaps
- Educational checklists
- Vendor requirements vary
- No outcome guarantee

## Affiliate / Partner Guardrails

The skill must not approve copy that:

- Hides compensation
- Presents paid placement as neutral
- Claims guaranteed partner earnings
- Exposes private payout terms
- Uses fake endorsements
- Claims “best” without methodology

Use language that emphasizes:

- Disclosure
- Partner relationship
- Resource
- Compensation may be received
- Outcomes not guaranteed

## Email / SMS Draft Guardrails

For direct customer messages:

- Draft only unless send is explicitly authorized.
- Require human review.
- Do not pressure with false urgency.
- Do not claim approval.
- Do not claim guaranteed funding.
- Keep missing-document requests clear.
- Keep internal notes separate from client-facing copy.

## Quality Checklist

Before finalizing review:

- [ ] Content type identified.
- [ ] Audience identified.
- [ ] CTA reviewed.
- [ ] Approval claims checked.
- [ ] Funding claims checked.
- [ ] Speed claims checked.
- [ ] Terms/rates checked.
- [ ] Credit claims checked.
- [ ] Affiliate/referral disclosure checked.
- [ ] Risk classification assigned.
- [ ] Risky claims table completed.
- [ ] Safer edits provided.
- [ ] Replacement copy provided if requested.
- [ ] Do-not-claim list included.
- [ ] Human review checklist included.
- [ ] Publication recommendation included.

## Example Input

```text
Content type: Landing page
Audience: Ecommerce operators
Copy: Get guaranteed funding for your ad spend today. Everyone qualifies and no documents are needed.
CTA: Apply Now
Affiliate relationship: Lead form may result in compensation.
```

## Example Output

```md
# Funding Language Safety Review

## 1. Review Summary

- Content type: Landing page
- Audience: Ecommerce operators
- Offer/product: Ecommerce funding lead form
- Overall risk: High
- Recommendation: Revise before publication

## 2. Risk Classification

High.

The copy makes guaranteed funding claims, claims everyone qualifies, and claims no documents are needed. These claims should be removed or replaced with review-based language.

## 3. Risky Claims

| Original Claim | Risk | Suggested Safer Edit |
|---|---|---|
| guaranteed funding | Implies outcome that cannot be promised | compare possible ecommerce funding options |
| Everyone qualifies | Unsupported approval claim | funding options depend on provider review and file details |
| no documents are needed | Likely inaccurate and risky | documentation may be needed depending on provider and product type |

## 4. Missing or Weak Disclosures

- Affiliate/referral disclosure should be visible near the CTA.
- The copy should clarify that compensation may be received if the user chooses certain resources.

## 5. Public-Safe Replacement Copy

Compare ecommerce funding options that may help with ad spend, inventory, or cash-flow timing. Funding availability, requirements, timing, and terms vary by provider and file details. Submit your information for review to explore possible options.

Disclosure: This page may include partner or referral links. Compensation may be received if you choose to use certain resources. Compensation does not guarantee approval, funding, suitability, or outcomes.

## 6. Do Not Claim

Do not claim:

- Guaranteed funding
- Guaranteed approval
- Everyone qualifies
- No documents needed
- Guaranteed speed
- Guaranteed terms

## 7. Human Review Checklist

- [ ] Funding guarantees removed
- [ ] Approval guarantees removed
- [ ] No-documents claim removed
- [ ] Disclosure added near CTA
- [ ] CTA tested
- [ ] Human review completed

## 8. Publication Recommendation

Revise before publication.
```

## Related Agents

```text
agents/funding-pipeline-triage-agent.md
agents/business-credit-readiness-helper.md
agents/affiliate-disclosure-reviewer.md
agents/content-brief-generator.md
```

## Related Knowledge Bases

```text
knowledge-base/funding/README.md
knowledge-base/partner-enablement/README.md
knowledge-base/content-ops/README.md
```

## Related Schemas

```text
schemas/funding-product.schema.json
schemas/agent.schema.json
```

## Done Means

This skill is complete when it can:

- Identify risky funding language
- Classify risk level
- Suggest safer edits
- Add disclosure guidance
- Produce replacement copy
- Include do-not-claim rules
- Avoid legal/compliance overclaiming
- Preserve conversion intent without unsafe promises
