# Funding Fit Triage Skill

```yaml
---
name: Funding Fit Triage Skill
slug: funding-fit-triage
category: funding
audience:
  - small business owners
  - affiliate partners
  - funding brokers
  - referral partners
problem_solved: Determines the best-fit funding path or not-ready status from simple intake answers.
inputs_required:
  - monthly revenue
  - time in business
  - bank account type
  - credit profile
  - funding amount requested
  - use of funds
  - urgency
outputs:
  - recommended funding path
  - readiness score
  - missing requirements
  - recommended next action
  - public-safe explanation
guardrails:
  - Do not guarantee approval.
  - Do not expose backend provider names.
  - Do not provide legal, tax, credit repair, or financial advice.
recommended_apps:
  - funding landing pages
  - partner portals
  - embedded calculators
  - CRM intake workflows
integration_notes:
  - Can feed HubSpot deal stage.
  - Can route CTA to apply, book call, or readiness checklist.
monetization_angle: Converts cold traffic into segmented funding leads.
---
```

## Purpose

Turn vague funding interest into a clear recommendation: apply now, prep first, book a strategy call, or enter a readiness path.

## Example prompt

Given this applicant profile, determine the best-fit funding path, missing requirements, readiness score, and recommended CTA. Keep the explanation public-safe and do not name backend providers.
