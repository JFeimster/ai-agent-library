# Broker Profile Resource Card Rules

Broker profile resource cards are curated front-end assets shown on partner or broker pages.

They should help prospects take the right next step while preserving attribution and keeping routing controlled.

## Resource card purpose

A resource card should:

- Match the broker’s audience.
- Solve a specific prospect problem.
- Route to a Moonshine-controlled destination.
- Preserve attribution parameters.
- Avoid exposing private backend/provider details.
- Create a clean handoff into intake, tool usage, booking, or education.

## Recommended card fields

```json
{
  "title": "",
  "description": "",
  "buttonText": "",
  "url": "",
  "slug": "",
  "resourceType": "",
  "audience": [],
  "problemSolved": "",
  "bestFor": "",
  "estimatedTimeToUse": "",
  "sortOrder": 0,
  "tags": []
}
```

## Resource types

Use consistent resource types:

| Type | Use |
|---|---|
| `tool` | Calculator, interactive widget, GPT-style assistant, estimator |
| `guide` | Article, PDF, checklist, framework |
| `application` | Application bridge or intake form |
| `booking` | Strategy call or support booking |
| `landing-page` | Campaign-specific page |
| `training` | Partner/broker education |
| `resource-hub` | Curated resource collection |

## Card title rules

Good titles:

- Funding Fit Checker
- Trucker Repair-to-Revenue Tracker
- Business Credit Readiness Guide
- Contractor Materials Funding Checklist
- Ecommerce Inventory Cash-Flow Tool

Avoid titles that:

- Name private providers.
- Promise approval.
- Imply guaranteed funding.
- Use internal route labels.
- Sound like a generic junk drawer.

## Description rules

Descriptions should answer:

1. Who is this for?
2. What problem does it solve?
3. What should the prospect do next?

Example:

```text
For contractors who need to understand whether a material or payroll gap is a funding-fit issue. Use this checklist before starting an intake.
```

## Button text rules

Use action-driven labels:

- Use the tool
- Check funding fit
- Start intake
- View guide
- Book a call
- Compare next steps

Avoid:

- Guaranteed approval
- Get funded no matter what
- Secret lender access
- Provider direct link

## Attribution rule

Every card URL should preserve:

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

## Card selection model

Each broker profile should include:

- 1 primary funding/intake CTA
- 1–2 audience-specific tools
- 1 readiness or education guide
- 1 booking or support link when appropriate
- Optional partner training card if the page is partner-facing

## Sort order guideline

| Sort order | Card role |
|---:|---|
| 1 | Primary conversion action |
| 2 | Best audience-specific tool |
| 3 | Secondary tool or guide |
| 4 | Readiness checklist |
| 5 | Booking/support |
| 6+ | Additional resources |

## Public safety checklist

Before publishing a card:

- [ ] Title is public-safe.
- [ ] Description does not expose private routing details.
- [ ] URL is Moonshine-controlled or approved.
- [ ] Attribution parameters are present.
- [ ] Button text avoids guarantees.
- [ ] Resource type uses standard vocabulary.
- [ ] Audience tags are useful and not overly broad.
- [ ] The card fits the broker’s actual audience.

## Principle

A resource card should feel like a useful next step, not a desperate link buffet.