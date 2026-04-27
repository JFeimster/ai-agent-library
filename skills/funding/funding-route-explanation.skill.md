# Funding Route Explanation Skill

```yaml
---
name: Funding Route Explanation Skill
slug: funding-route-explanation
category: funding
audience:
  - small business owners
  - affiliate partners
  - referral partners
problem_solved: Explains why a funding path may fit without exposing backend providers or internal routing logic.
inputs_required:
  - recommended funding path
  - applicant profile summary
  - readiness score
  - missing requirements
outputs:
  - plain-English explanation
  - why this route fits
  - what to prepare next
  - recommended CTA
guardrails:
  - Do not name backend providers unless explicitly approved.
  - Do not guarantee approval.
  - Do not provide legal, tax, credit repair, or financial advice.
recommended_apps:
  - prospect-facing GPTs
  - funding widgets
  - landing pages
integration_notes:
  - Can be paired with Funding Fit Triage and Funding Readiness Score.
monetization_angle: Improves trust and conversion by explaining route logic clearly.
---
```

## Purpose

Turn a funding recommendation into copy the applicant can understand and act on.

## Example prompt

Explain this funding route to the applicant in public-safe language. Include why it may fit, what is missing, and the best next CTA without naming backend providers.
