# Fundability Diagnostic Skill

```yaml
---
name: Fundability Diagnostic Skill
slug: fundability-diagnostic
category: business-credit
audience:
  - small business owners
  - founders
  - affiliate partners
  - business credit operators
problem_solved: Scores business credit readiness using entity, banking, tradeline, utilization, and bureau signals.
inputs_required:
  - entity status
  - business age
  - business bank account status
  - monthly revenue
  - tradeline count
  - utilization estimate
  - bureau/reporting status if known
outputs:
  - fundability score
  - weak points
  - next best fixes
  - 30/60/90-day roadmap
guardrails:
  - Do not provide credit repair advice.
  - Do not guarantee funding outcomes.
  - Use education-focused language.
recommended_apps:
  - BizCredit widgets
  - readiness quizzes
  - partner funnels
integration_notes:
  - Can route users to DIY, done-with-you, or done-for-you paths.
monetization_angle: Supports paid fundability audits, BizCredit OS, and finance stack services.
---
```

## Purpose

Make business credit readiness visible, simple, and actionable.

## Example prompt

Analyze this business profile for fundability readiness. Return a score, blockers, top fixes, and a 30/60/90-day roadmap. Avoid legal, tax, or credit repair advice.
