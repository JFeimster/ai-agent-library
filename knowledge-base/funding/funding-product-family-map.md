# Funding Product Family Map

Use this map to help agents classify a prospect into a funding family before recommending next steps.

This is not underwriting. It is routing logic for intake, triage, education, and follow-up.

## Family map

| Family | Signal | Good fit when | Caution when | Useful next step |
|---|---|---|---|---|
| Working capital | Existing operating business needs cash | Business has active revenue and a clear use of funds | No business activity or unclear use of funds | Collect revenue, bank history, requested amount, and timeline |
| Revenue-based funding | Deposits/sales can support payback | Consistent gross revenue, business bank or verifiable income stream | Deposits are irregular, very low, or unverifiable | Request bank statements or connection step |
| Line of credit | Recurring need for flexible access | Business wants reusable capital, not a single lump-sum event | Prospect needs immediate emergency cash only | Ask about recurring cash-flow cycles and desired credit access |
| Business credit path | Prospect needs fundability prep | Newer business, thin profile, wants larger future funding | Prospect needs cash today and has no immediate eligibility | Offer readiness roadmap and vendor/tradeline prep |
| 0% credit / credit stacking | Strong credit posture supports card/credit strategy | Good personal credit, clean utilization, strategic use case | High utilization, recent late payments, weak personal profile | Ask about FICO band, utilization, recent inquiries, entity setup |
| Ecommerce seller funding | Sales/inventory cycle drives funding need | Active online store/marketplace revenue | No sales history or unclear inventory plan | Collect platform, monthly sales, inventory turn, ad spend |
| Gig/self-employed funding | Operator has recurring income but may lack traditional docs | Verifiable deposits from self-employed work | Funding request is consumer-use only | Frame as business-use funding and collect income proof |
| Contractor/material financing | Job timing creates cash gap | Pending or active jobs, materials needed, invoices/estimates available | No active job, no quote, no repayment source | Request job details, estimate/invoice, deposits, timeline |
| Acquisition financing | Prospect wants to buy or stabilize a business | Buyer has target business, deal terms, capital gap, or post-close need | No target, no financials, no plan | Ask for purchase price, seller terms, financials, down payment |
| Grant/opportunity research | Prospect seeks non-repayable programs | Business fits grant category, geography, or mission criteria | Prospect needs guaranteed cash fast | Explain grants are competitive and slower; collect eligibility context |

## Top-level routing questions

1. Is this an existing business, startup, acquisition target, or self-employed operation?
2. Is the need urgent cash, future credit readiness, inventory, payroll, materials, acquisition, or growth?
3. Is revenue verifiable?
4. How long has the business or income stream been active?
5. Is the applicant using a business bank account, personal account, or marketplace platform?
6. What documents can they provide now?
7. Does the prospect need public education, an application link, or internal manual review?

## Use-case-first routing

Start with the job-to-be-done:

- Need to cover payroll, rent, repairs, or short-term expenses → working capital or revenue-based funding.
- Need recurring access → line of credit.
- Need inventory/ad spend → ecommerce seller funding or working capital.
- Need business credibility → business credit path.
- Need startup runway with strong credit → 0%/credit-stacking style path.
- Need job materials → contractor/material financing.
- Need to buy a business → acquisition financing.
- Need local/mission-based non-repayable funding → grant research path.

## Agent output pattern

A funding-routing agent should return:

```text
Primary fit: [Product family]
Secondary fit: [Optional]
Why: [Plain-language reason]
Missing info: [Specific questions/docs]
Next action: [Application, document upload, booking, readiness plan, or manual review]
Public-safe copy: [Prospect-facing response]
Internal note: [Routing rationale, not shown to prospect]
```

## Guardrail

Do not present product family fit as approval, offer, quote, or binding term. It is a preliminary routing recommendation.