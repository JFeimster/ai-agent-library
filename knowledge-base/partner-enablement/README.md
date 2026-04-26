# Partner Enablement Knowledge Base

This folder contains Moonshine Capital partner enablement rules, routing logic, attribution models, microsite guidance, and resource-card standards.

The core operating principle:

> Partners share front-end assets. Moonshine Capital owns attribution, lead capture, routing, backend fulfillment, and follow-up.

## Files

```text
knowledge-base/partner-enablement/
  partner-lead-generation-strategy.md
  partner-routing-attribution-spec.md
  partner-link-tracking-model.md
  partner-microsite-playbook.md
  affiliate-protection-rules.md
  partner-launch-kit-source-notes.md
  broker-profile-resource-card-rules.md
```

## Default partner flow

```text
Partner shares Moonshine-controlled asset
→ prospect lands on tracked Moonshine page/tool/profile
→ attribution is captured
→ intake or lead capture occurs
→ lead is routed by intent/profile
→ Moonshine handles backend fulfillment and follow-up
```

## Required tracking parameters

- `partner_id`
- `campaign_id`
- `asset_id`
- `vertical`
- `product_intent`
- `page_type`
- `utm_source`
- `utm_medium`
- `utm_campaign`

## Protection rules

- Never expose backend providers publicly.
- Never use provider names in public slugs or metadata.
- Never send affiliates to raw backend pages first.
- Use Moonshine-controlled pages as the first-click destination.
- Keep partner links trackable, white-labeled, and operationally recoverable.

## Relevant agent specs

- `agents/03-partner-launch-kit-builder.md`
- `agents/04-broker-profile-builder.md`
- `agents/05-funding-tool-router-agent.md`
- `agents/09-partner-training-coach.md`
- `agents/10-local-referral-partner-scout.md`
- `agents/18-affiliate-offer-matchmaker.md`
