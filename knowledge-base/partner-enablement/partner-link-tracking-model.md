# Partner Link Tracking Model

This model standardizes how partner links should be created, shared, captured, and routed.

## Link objectives

A good partner link should answer:

1. Who sent the traffic?
2. What asset did they share?
3. Which campaign was it part of?
4. What audience or vertical was targeted?
5. What product intent did the prospect likely have?
6. What page type received the traffic?
7. Which marketing channel produced the click?

## Required query parameters

```text
partner_id
campaign_id
asset_id
vertical
product_intent
page_type
utm_source
utm_medium
utm_campaign
```

## Example link

```text
https://www.distilledfunding.com/tools/trucker-repair-tracker?partner_id=darwin-hanneman&campaign_id=q2-trucking-repair&asset_id=trucker-repair-tracker&vertical=trucking&product_intent=working-capital&page_type=tool&utm_source=linkedin&utm_medium=social&utm_campaign=q2-trucking-repair
```

## Parameter definitions

| Parameter | Required | Description | Example values |
|---|---:|---|---|
| `partner_id` | Yes | Partner or broker identifier | `darwin-hanneman`, `jason-feimster` |
| `campaign_id` | Yes | Specific campaign or sequence | `q2-trucking-repair`, `startup-launch-kit` |
| `asset_id` | Yes | Shared page/tool/resource identifier | `trucker-repair-tracker`, `funding-fit-guide` |
| `vertical` | Yes | Target audience segment | `trucking`, `contractors`, `ecommerce`, `real-estate` |
| `product_intent` | Yes | Inferred funding need | `working-capital`, `equipment-finance`, `line-of-credit` |
| `page_type` | Yes | Destination type | `tool`, `broker-profile`, `landing-page`, `article` |
| `utm_source` | Recommended | Channel/source | `linkedin`, `facebook`, `email`, `youtube` |
| `utm_medium` | Recommended | Medium | `social`, `dm`, `newsletter`, `video-description` |
| `utm_campaign` | Recommended | Campaign grouping | `q2-trucking-repair` |

## Slug rules

Use slugs that describe the public-facing asset.

Good:

```text
/trucker-repair-tracker
/business-funding-fit
/broker/darwin-hanneman
/tools/inventory-cash-flow
```

Avoid slugs that expose private partner mechanics, internal vendor labels, or non-public operational details.

## Session persistence

A front-end script or form embed should persist tracking values through:

- Hidden form fields
- Session storage
- Local storage where appropriate
- CRM custom properties
- Webhook payloads

## Hidden field model

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
  "source_url": "",
  "landing_page_url": ""
}
```

## Redirect/tracking path model

A `/go/[slug]` style redirect layer may be used for tracked outbound links.

Recommended behavior:

```text
/go/[slug]
→ capture click event
→ preserve partner/session parameters
→ redirect to a Moonshine-controlled destination or approved outbound asset
```

## Data quality rules

- Use lowercase slugs.
- Use hyphens, not spaces.
- Do not include private provider names.
- Do not duplicate partner IDs.
- Do not rely only on UTMs for partner credit.
- Preserve first-touch attribution when possible.
- Store unknown values as `Unknown`, not blank, when data is expected but missing.

## Review checklist

Before giving a partner a link:

- [ ] `partner_id` is present.
- [ ] `asset_id` is present.
- [ ] `campaign_id` is present.
- [ ] `vertical` is present where relevant.
- [ ] `product_intent` is present where relevant.
- [ ] First-click destination is Moonshine-controlled.
- [ ] Public slug avoids private operational details.
- [ ] Hidden fields or CRM capture are configured.
