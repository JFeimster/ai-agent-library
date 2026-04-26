# Internal Routing Logic

This file is for internal agents, CRM workflows, intake triage, and partner-support operations.

Do not reuse this file as public-facing website copy.

## Routing philosophy

Moonshine Capital should route prospects by fit, not hope.

The basic sequence is:

```text
Intake → classify applicant → identify use case → check readiness → request missing docs → route to application/readiness/manual review → follow up
```

## Primary routing dimensions

1. Applicant type
2. Use of funds
3. Revenue/deposit profile
4. Time in business or activity history
5. Bank account type
6. Documentation readiness
7. Credit posture when relevant
8. Urgency/timeline
9. Existing obligations or risk flags
10. Public-safe messaging path

## Routing decision tree

### Step 1 — Classify applicant

```text
IF existing business with revenue → business funding route
ELSE IF self-employed/gig operator with verifiable income and business-use need → self-employed/gig route
ELSE IF ecommerce seller with platform revenue → ecommerce route
ELSE IF contractor/tradesperson with job/material need → contractor/material route
ELSE IF acquisition buyer with target deal → acquisition route
ELSE IF no active business/revenue → readiness route
ELSE manual review
```

### Step 2 — Classify use case

```text
IF payroll/materials/repairs/operating cash → working capital or revenue-based funding
IF recurring capital buffer → line of credit
IF inventory/ad spend/platform sales → ecommerce seller funding
IF entity/credit foundation issue → business credit path
IF startup runway and strong credit posture → 0%/credit-based route
IF business purchase/post-close gap → acquisition/bridge strategy
IF non-repayable capital request → grant/opportunity research
```

### Step 3 — Check readiness

```text
IF clear use case + verifiable revenue + documents ready → Band A
IF likely fit but missing docs/details → Band B
IF not fundable now but can improve → Band C
IF conflicting info or unusual risk → Band D
IF non-business use/prohibited/fraud risk → Band E
```

### Step 4 — Determine next action

| Band | Next action |
|---|---|
| A | Send application, request final docs, or book funding review |
| B | Send missing-doc checklist and follow-up task |
| C | Send readiness roadmap and nurture sequence |
| D | Escalate to manual review with notes |
| E | Decline/redirect safely |

## Internal notes format

Use structured notes:

```text
Applicant type: [business/self-employed/ecommerce/contractor/acquisition/unknown]
Use case: [working capital/materials/inventory/acquisition/etc.]
Revenue signal: [known/unknown + band]
Banking signal: [business/personal/platform/unknown]
Docs: [ready/partial/missing]
Readiness band: [A/B/C/D/E]
Primary route: [product family]
Secondary route: [optional]
Risk flags: [list]
Next action: [application/docs/readiness/manual review]
Public-safe response: [short copy]
```

## Follow-up triggers

Create a follow-up task when:

- Application started but not completed.
- Bank connection or bank statements are missing.
- Identity verification is incomplete.
- Use of funds is unclear.
- Prospect is Band B and missing only a few items.
- Prospect is Band C and should be nurtured into readiness.
- Manual review is required.

## Priority scoring

| Signal | Priority impact |
|---|---|
| Urgent business-use need with verifiable revenue | High |
| Complete docs and clear use case | High |
| Contractor/material or repair deadline | High |
| Ecommerce inventory cycle with active sales | High |
| Missing only bank statements | Medium-high |
| Needs business credit/readiness path | Medium |
| No revenue or unclear business activity | Low |
| Non-business use | No route / redirect |

## White-label boundary

Internal routing may mention product families, route types, and operational next steps.

Prospect-facing language should not expose backend provider names, private partner logic, or internal routing shorthand unless explicitly approved.

## Agent guardrail

Agents must not:

- Say the applicant is approved.
- Quote exact rates or terms unless sourced and approved.
- Represent a routing recommendation as a funding offer.
- Reveal backend/provider bypass paths.
- Encourage document manipulation.
- Provide legal, tax, investment, or financial advice.

## Better internal wording

Use:

```text
Likely route based on current intake: revenue-based working capital. Missing: bank statements and use-of-funds detail. Public response should invite document upload and clarify no approval decision has been made.
```

Avoid:

```text
Approved for same-day funding. Send to provider X.
```