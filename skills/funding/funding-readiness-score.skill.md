# Funding Readiness Score Skill

```yaml
---
name: Funding Readiness Score Skill
slug: funding-readiness-score
category: funding
audience:
  - small business owners
  - affiliate partners
  - funding brokers
problem_solved: Produces a readiness score from revenue, time in business, documents, urgency, and credit profile.
inputs_required:
  - monthly revenue
  - time in business
  - bank account type
  - requested amount
  - required documents available
  - credit profile estimate
  - urgency
outputs:
  - readiness score
  - readiness band
  - top blockers
  - recommended next action
  - CRM priority suggestion
guardrails:
  - Do not guarantee funding.
  - Label score as directional, not underwriting.
  - Do not expose backend provider rules publicly.
recommended_apps:
  - lead magnets
  - embedded calculators
  - intake forms
integration_notes:
  - Can feed lead scoring, pipeline stage, and CTA routing.
monetization_angle: Turns anonymous visitors into segmented funding leads.
---
```

## Purpose

Convert messy funding-readiness signals into a simple score and action path.

## Example prompt

Score this applicant's funding readiness from 0 to 100. Return readiness band, top blockers, next action, and CRM priority. Make clear this is not an approval decision.
