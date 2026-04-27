# Partner Resource Recommender Skill

```yaml
---
name: Partner Resource Recommender Skill
slug: partner-resource-recommender
category: partner-enablement
audience:
  - affiliate partners
  - funding brokers
  - referral partners
problem_solved: Recommends tools, scripts, calculators, guides, and next actions based on partner profile and current activity.
inputs_required:
  - partner niche
  - partner experience level
  - audience served
  - preferred outreach channel
  - current bottleneck
outputs:
  - recommended resources
  - why each resource fits
  - next best action
  - partner dashboard card metadata
guardrails:
  - Do not expose internal-only tools publicly.
  - Do not recommend tools that conflict with partner visibility level.
  - Keep resource descriptions accurate and non-hypey.
recommended_apps:
  - partner portal home
  - onboarding dashboards
  - broker profile utility
integration_notes:
  - Can use site-data tools, partnerResources CMS, or static JSON.
monetization_angle: Makes partner portals feel personalized instead of like a PDF cemetery.
---
```

## Purpose

Help partners find the most useful next tool instead of drowning them in every resource ever invented by capitalism and caffeine.

## Example prompt

Recommend the top resources for this partner based on niche, experience level, audience, channel, and bottleneck. Include why each fits and next action.
