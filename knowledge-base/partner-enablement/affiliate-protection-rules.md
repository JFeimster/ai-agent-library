# Affiliate Protection Rules

These rules protect Moonshine Capital, affiliate partners, referral partners, broker relationships, and prospect attribution.

The system should make it easy for partners to share front-end assets while keeping routing, fulfillment, and backend operations controlled.

## Non-negotiable rules

1. Never expose backend providers publicly.
2. Never use provider names in public slugs or metadata unless explicitly approved.
3. Never send affiliates to raw backend pages first.
4. Use Moonshine-controlled pages as the first-click destination.
5. Preserve partner attribution through URL parameters, hidden fields, and CRM records.
6. Keep partner-facing copy truthful and non-guaranteed.
7. Keep internal routing logic separate from public partner enablement copy.

## First-click protection

Partner traffic should land first on:

- Broker profile pages
- Moonshine landing pages
- Moonshine tools/calculators
- Moonshine application bridge pages
- Moonshine resource hubs

Do not make the first click an uncontrolled outbound destination.

## Attribution protection

Every partner campaign should include:

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

The minimum partner-credit rule:

```text
If partner_id is present on first touch, preserve it as first_partner_id unless manually corrected by an authorized operator.
```

## Public metadata rules

Do not include private operational details in:

- URL slugs
- SEO titles
- Meta descriptions
- Open Graph titles/descriptions
- Image alt text
- Public schema markup
- Button labels
- Public resource card titles

## Approved public language

Use:

```text
Powered by Moonshine Capital
Funding-fit tool
Partner resource
Business funding path
Application bridge
Resource hub
```

Avoid:

```text
Backend provider route
Provider direct page
Secret funding lane
Guaranteed approval partner
Raw lender portal
```

## Partner claims guardrails

Partners should not claim:

- Guaranteed approval
- Guaranteed terms
- Guaranteed timeline
- No documents required for everyone
- Everyone qualifies
- They personally approve funding
- Moonshine Capital is the direct lender unless explicitly true for that product

## Partner-safe explanation

```text
I share Moonshine Capital-powered tools and resources that help business owners identify possible funding paths. The actual review, routing, and follow-up are handled through Moonshine Capital’s system.
```

## Escalation triggers

Escalate if a partner:

- Changes approved links.
- Removes attribution parameters.
- Sends traffic directly to unapproved destinations.
- Uses backend provider names publicly.
- Promises approval or funding timelines.
- Publishes misleading earnings or funding claims.
- Uses private internal training language in public ads.

## Enforcement options

- Correct the asset/link.
- Replace the partner’s swipe copy.
- Pause the campaign.
- Disable a tracked redirect.
- Mark the partner for manual review.
- Remove public access to an outdated resource.

## Principle

Protecting attribution is not bureaucracy. It is how the system keeps partners paid, prospects routed, and the brand from becoming a carnival booth with a loan button.