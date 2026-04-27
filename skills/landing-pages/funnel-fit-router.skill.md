# Funnel Fit Router Skill

```yaml
---
name: Funnel Fit Router Skill
slug: funnel-fit-router
category: landing-pages
audience:
  - landing page visitors
  - affiliate partners
  - referral partners
  - builders
problem_solved: Routes visitors to the right CTA based on intent, readiness, source, and profile.
inputs_required:
  - visitor type
  - page source
  - primary intent
  - readiness stage
  - niche
  - urgency
outputs:
  - recommended CTA
  - CTA explanation
  - fallback CTA
  - routing reason
  - analytics event name
guardrails:
  - Do not route users to internal-only tools.
  - Do not imply guaranteed outcomes.
  - Preserve referral and UTM attribution.
recommended_apps:
  - landing pages
  - static sites
  - partner funnels
  - embedded widgets
integration_notes:
  - Can power CTA blocks, route maps, and analytics events.
monetization_angle: Improves conversion by matching visitors to the right next action instead of one-size-fits-none CTAs.
---
```

## Purpose

Route visitors to the most relevant next step: apply, book, download, join partner program, or use a widget.

## Example prompt

Route this visitor to the best CTA based on profile, source, intent, readiness, niche, and urgency. Include reason and analytics event name.
