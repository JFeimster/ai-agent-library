# Partner Microsite Playbook

Partner microsites give affiliates and referral partners a credible front-end presence without giving away backend routing, fulfillment, or attribution control.

## Purpose

A partner microsite should:

- Position the partner credibly.
- Explain who they help.
- Provide curated funding/resource CTAs.
- Capture attribution reliably.
- Route traffic to Moonshine-controlled lead capture and tools.
- Keep backend fulfillment white-labeled.

## Recommended page types

| Page type | Purpose | Example |
|---|---|---|
| Broker profile | Partner credibility page | `/broker/darwin-hanneman` |
| Vertical landing page | Audience-specific offer | `/funding/trucking` |
| Tool landing page | Lead magnet or calculator | `/tools/trucker-repair-tracker` |
| Resource hub | Curated partner toolkit | `/partner-resources/[slug]` |
| Application bridge | Funding-fit pre-intake | `/apply/fast` |

## Microsite sections

A strong partner microsite should include:

1. Partner headline
2. Who the partner helps
3. Best-fit funding/resource lanes
4. Curated resource cards
5. Funding-fit CTA
6. Document/readiness expectations
7. Trust/disclaimer copy
8. Tracking and attribution preservation

## Partner profile content model

```json
{
  "partner_id": "",
  "slug": "",
  "display_name": "",
  "headline": "",
  "audience": [],
  "specialties": [],
  "featured_resources": [],
  "primary_cta_url": "",
  "booking_url": "",
  "is_active": true
}
```

## Resource card stack

Each profile should include 3–6 cards matched to the partner’s audience.

Examples:

- Funding-fit tool
- Industry-specific calculator
- Business credit readiness guide
- Application/start-here page
- Booking link
- Training or explainer article

## CTA hierarchy

Primary CTA:

```text
Check funding fit
```

Secondary CTAs:

```text
Use this calculator
Book a strategy call
View readiness checklist
Start application
```

## First-click rule

The first click from partner traffic should land on a Moonshine-controlled page, tool, or profile.

This protects:

- Attribution
- Follow-up
- Lead capture
- Routing quality
- White-label consistency
- Partner credit

## Microsite launch checklist

- [ ] Partner slug created.
- [ ] `partner_id` assigned.
- [ ] Profile copy approved.
- [ ] Featured resources selected.
- [ ] Primary CTA includes tracking parameters.
- [ ] Tool/resource clicks preserve attribution.
- [ ] No private provider names in public copy.
- [ ] No raw outbound first-click links.
- [ ] Disclaimer language included.
- [ ] Mobile layout checked.

## Public-safe profile copy pattern

```text
[Partner Name] helps [audience] understand practical funding paths for [use case]. This page includes curated tools and resources powered by Moonshine Capital to help prospects start with the right next step.
```

## Internal-only notes

Keep these out of public profile copy:

- Commission structure
- Backend fulfillment route
- Private partner notes
- Provider-specific rules
- Manual override logic
- Internal CRM labels

## Guardrail

A microsite is not a fake bank branch. It is a partner-branded front door into a Moonshine-controlled routing system.