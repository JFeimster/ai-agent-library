# Public Claims Review Skill

```yaml
---
name: Public Claims Review Skill
slug: public-claims-review
category: compliance
audience:
  - site builders
  - affiliate partners
  - referral partners
  - content operators
problem_solved: Flags risky public claims such as guaranteed approvals, same-day promises, misleading earnings claims, or unqualified financial statements.
inputs_required:
  - page copy
  - offer type
  - audience
  - visibility level
outputs:
  - risky claim list
  - severity level
  - safer rewrite
  - disclaimer recommendations
  - review notes
guardrails:
  - Do not provide legal advice.
  - Do not remove necessary compliance language for conversion.
  - Escalate high-risk claims for human review.
recommended_apps:
  - landing pages
  - public docs
  - affiliate content
  - partner pages
integration_notes:
  - Should be used before publishing public funding, affiliate, or partner content.
monetization_angle: Keeps fast-moving funnels from becoming compliance piñatas.
---
```

## Purpose

Review public copy before it ships and flag dangerous claims.

## Example prompt

Review this landing page copy for risky claims. Return severity, safer rewrite, and disclaimer recommendations. Do not provide legal advice.
