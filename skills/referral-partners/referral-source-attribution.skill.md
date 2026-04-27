# Referral Source Attribution Skill

```yaml
---
name: Referral Source Attribution Skill
slug: referral-source-attribution
category: referral-partners
audience:
  - referral partners
  - affiliate partners
  - strategic partners
  - operators
problem_solved: Preserves partner, campaign, UTM, and referral-code attribution across forms, widgets, and CRM handoffs.
inputs_required:
  - referral code
  - UTM parameters
  - landing page URL
  - widget source
  - partner slug
  - submitted lead data
outputs:
  - normalized attribution object
  - recommended dedupe key
  - CRM field map
  - partner credit notes
guardrails:
  - Do not overwrite first-touch attribution without preserving original source.
  - Do not expose partner-private tracking data publicly.
  - Do not store secrets in frontend code.
recommended_apps:
  - landing pages
  - partner embeds
  - CRM workflows
  - webhook payloads
integration_notes:
  - Should pair with Lead Webhook Payload and CRM Field Mapper.
monetization_angle: Protects partner trust by making sure referrals do not disappear into the CRM swamp.
---
```

## Purpose

Keep partner attribution intact from first click through widget submission and CRM handoff.

## Example prompt

Normalize this referral and UTM data into a clean attribution object with CRM fields, dedupe key, and partner credit notes.
