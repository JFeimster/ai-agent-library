# Fast Disqualifier Detection Skill

```yaml
---
name: Fast Disqualifier Detection Skill
slug: fast-disqualifier-detection
category: funding
audience:
  - small business owners
  - affiliate partners
  - funding brokers
problem_solved: Flags obvious no-go issues before wasting applicant or partner time.
inputs_required:
  - time in business
  - monthly revenue
  - bank account type
  - industry
  - funding urgency
  - open bankruptcies or major risk signals if provided
outputs:
  - disqualifier flags
  - severity level
  - public-safe explanation
  - recommended alternative next step
guardrails:
  - Do not guarantee denial or approval.
  - Do not shame applicants.
  - Do not expose internal lender/provider rules publicly.
recommended_apps:
  - intake forms
  - routing widgets
  - partner dashboards
integration_notes:
  - Can prevent junk CRM records or route to nurture.
monetization_angle: Protects sales time and turns not-ready leads into education/nurture funnels.
---
```

## Purpose

Identify obvious blockers early and redirect users into the right next step instead of letting every bad-fit lead become a tiny operational hostage situation.

## Example prompt

Review this applicant profile for fast disqualifier signals. Return severity, likely blocker, public-safe explanation, and recommended next action.
