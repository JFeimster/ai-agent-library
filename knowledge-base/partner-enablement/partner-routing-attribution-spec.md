# Partner Routing + Attribution Spec

This spec defines how Moonshine Capital should preserve partner attribution while keeping lead capture, routing, fulfillment, and follow-up under Moonshine-controlled infrastructure.

## Core ownership model

| Layer | Owner | Notes |
|---|---|---|
| Audience relationship | Partner | Partner introduces or promotes the asset |
| First-click destination | Moonshine Capital | Must be controlled and trackable |
| Attribution capture | Moonshine Capital | Query params, hidden fields, CRM fields |
| Intake and lead capture | Moonshine Capital | Forms, tools, portals, booking flows |
| Routing logic | Moonshine Capital | Product intent, vertical, readiness, docs |
| Backend fulfillment | Moonshine Capital | White-labeled; backend providers not exposed publicly |
| Follow-up | Moonshine Capital | CRM tasks, nurture, document rescue, status updates |

## Required tracking parameters

Every partner-facing link should support these parameters:

| Parameter | Purpose | Example |
|---|---|---|
| `partner_id` | Identifies partner/referrer | `darwin-hanneman` |
| `campaign_id` | Identifies campaign or push | `trucking-q2-launch` |
| `asset_id` | Identifies shared asset/tool/page | `repair-revenue-tracker` |
| `vertical` | Identifies audience segment | `trucking` |
| `product_intent` | Captures likely funding need | `equipment-finance` |
| `page_type` | Identifies destination format | `broker-profile`, `tool`, `landing-page` |
| `utm_source` | Standard source tracking | `linkedin`, `facebook`, `email` |
| `utm_medium` | Standard medium tracking | `social`, `dm`, `newsletter` |
| `utm_campaign` | Standard campaign tracking | `truck-repair-q2` |

## Canonical URL pattern

```text
https://moonshine-controlled-domain.com/[page-path]?partner_id=[partner]&campaign_id=[campaign]&asset_id=[asset]&vertical=[vertical]&product_intent=[intent]&page_type=[type]&utm_source=[source]&utm_medium=[medium]&utm_campaign=[campaign]
```

## Minimum persisted fields

Lead capture systems should preserve:

```json
{
  "partner_id": "",
  "campaign_id": "",
  "asset_id": "",
  "vertical": "",
  "product_intent": "",
  "page_type": "",
  "utm_source": "",
  "utm_medium": "",
  "utm_campaign": "",
  "landing_page_url": "",
  "referrer_url": "",
  "created_at": "",
  "lead_status": "new"
}
```

## Routing logic

```text
IF product_intent is present → use as first routing clue
ELSE IF asset_id maps to a product family → infer product intent from asset
ELSE IF vertical is present → route to vertical intake or general funding triage
ELSE → route to general funding intake
```

## Attribution hierarchy

When multiple values conflict, use this hierarchy:

1. Explicit hidden form fields from URL params
2. Stored session attribution
3. First-party cookie/local storage attribution
4. Referrer URL
5. Partner profile slug/path
6. Manual CRM correction
7. Unknown

## Multi-touch rule

Default first-touch attribution should be preserved for partner protection.

Last-touch data can also be stored for campaign optimization.

Recommended fields:

```text
first_partner_id
last_partner_id
first_asset_id
last_asset_id
first_utm_campaign
last_utm_campaign
```

## Partner-safe routing principle

Partners should not need to understand backend routing to get credit.

They share the front-end asset; Moonshine Capital captures the attribution and routes the lead internally.

## CRM notes format

```text
Partner attribution: [partner_id]
Campaign: [campaign_id]
Asset: [asset_id]
Vertical: [vertical]
Product intent: [product_intent]
Page type: [page_type]
UTM source/medium/campaign: [utm_source] / [utm_medium] / [utm_campaign]
Routing note: [inferred route]
Next action: [application/docs/booking/manual review]
```

## Guardrails

- Do not expose provider names in public metadata.
- Do not put backend provider names in slugs.
- Do not send partner traffic directly to raw backend pages.
- Do not rely on manual attribution when URL/session capture is available.
- Do not overwrite first-touch partner credit without a defined business rule.
