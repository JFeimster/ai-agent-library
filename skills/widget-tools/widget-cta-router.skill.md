# Widget CTA Router Skill

```yaml
---
name: Widget CTA Router Skill
slug: widget-cta-router
category: widget-tools
audience:
  - widget users
  - affiliate partners
  - referral partners
  - builders
problem_solved: Routes widget users to different next steps based on score, result, source, intent, and readiness.
inputs_required:
  - widget result
  - score or band
  - user type
  - urgency
  - referral source
  - UTM data
outputs:
  - primary CTA
  - secondary CTA
  - CTA copy
  - routing reason
  - analytics event
  - webhook action hint
guardrails:
  - Do not route users to internal-only pages.
  - Do not imply guaranteed funding or outcomes.
  - Preserve referral attribution.
recommended_apps:
  - embedded tools
  - Next.js widgets
  - partner embeds
integration_notes:
  - Should pair with Lead Webhook Payload and Funnel Fit Router.
monetization_angle: Converts calculator curiosity into segmented next actions.
---
```

## Purpose

Make every widget result actionable instead of dumping a number on the user and hoping capitalism does the rest.

## Example prompt

Given this widget result, score band, user type, urgency, and source, recommend the best primary and secondary CTA with routing reason and event name.
