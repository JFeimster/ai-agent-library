# Phase 2 — Distribution System

## Purpose

Turn AI Agent Library from a static resource hub into a distribution engine.

Phase 2 adds partner, affiliate, referral, broker, ISO, consultant, and strategic partner infrastructure so resources can be shared, attributed, and reused across audiences.

## Strategic Goal

Create a partner-ready distribution layer that lets the library support:

- Affiliate recruitment
- Referral partner onboarding
- Broker resource enablement
- Partner profile pages
- Provider/resource directories
- Tracked CTAs
- Partner-safe resource cards
- Local referral campaigns
- Strategic partner campaigns

## Success Criteria

Phase 2 is complete when:

- [ ] `get-started.html` exists as a partner recruitment page.
- [ ] `partners.html` exists as a provider/resource directory shell.
- [ ] `team.html` exists as a partner/team profile directory.
- [ ] `profile.html` exists as a reusable partner profile template.
- [ ] Partner enablement knowledge base is populated.
- [ ] Local referrals knowledge base is populated.
- [ ] Affiliate disclosure is linked from all partner-facing pages.
- [ ] Partner language avoids guarantees and unsupported claims.
- [ ] Tracked CTA rules are documented.
- [ ] Resource card templates are available.
- [ ] Partner examples are synthetic and public-safe.

## Included Pages

```text
get-started.html
partners.html
team.html
profile.html
affiliate-disclosure.html
```

## Included Knowledge Bases

```text
knowledge-base/
  partner-enablement/
    README.md
    index.json
    examples.md

  local-referrals/
    README.md
    index.json
    examples.md
```

## Recommended Supporting Data Files

```text
site-data/
  partners.json
  team.json
  partner-resources.json
  affiliate-links.json
  local-referral-categories.json
```

## Partner Types

Phase 2 should support:

- Referral agents
- Affiliate publishers
- Brokers
- ISO reps
- Consultants
- Agencies
- Local connectors
- Strategic partners
- Software providers
- Community partners
- Newsletter operators
- SEO operators
- Content publishers

## Partner Asset Types

### 1. Partner Recruitment Page

Primary file:

```text
get-started.html
```

Purpose:

- Explain who can partner
- Explain what partners can promote
- Explain safe messaging rules
- Link to partner application
- Link to partner disclosure
- Link to provider/resource directory

Primary CTA examples:

- Apply to become a partner
- Start partner onboarding
- Request partner resources
- Get approved resources

### 2. Provider / Resource Directory

Primary file:

```text
partners.html
```

Purpose:

- List providers or resources
- Show categories
- Clarify relationship types
- Add disclosure notes
- Route users to approved pages
- Avoid hidden compensation bias

Provider listing fields:

- Name
- Category
- Description
- Relationship
- CTA
- URL
- Disclosure
- Review date
- Status

### 3. Team / Partner Directory

Primary file:

```text
team.html
```

Purpose:

- Browse partner profile types
- Introduce referral partners or roles
- Link to profile templates
- Support future profile generation

Profile type examples:

- Referral Agent
- Affiliate Publisher
- Broker
- ISO Rep
- Consultant
- Strategic Partner

### 4. Partner Profile Page

Primary file:

```text
profile.html
```

Purpose:

- Provide a reusable public profile shell
- Show approved resources
- Show CTA
- Show disclosure
- Preserve public-safe claims
- Support tracked resource routing

Profile fields:

- Name
- Role
- Audience
- Region
- Public bio
- Approved CTA
- Approved resources
- Disclosure
- Tracking ID
- Status

### 5. Resource Card

Recommended folder:

```text
examples/partner-enablement/
```

Purpose:

- Give partners a compact, approved shareable resource
- Include CTA and disclosure
- Include restricted claims
- Include tracking notes

Resource card sections:

- Title
- Audience
- Problem solved
- Description
- Primary CTA
- Secondary CTA
- Disclosure
- Restricted claims
- Tracking notes

## Distribution Workflows

### Partner Application Workflow

```text
Visitor
→ get-started.html
→ Partner application form
→ Review partner fit
→ Assign partner type
→ Generate partner slug
→ Assign approved resources
→ Publish profile if approved
→ Track CTA usage
```

### Referral Partner Workflow

```text
Partner identified
→ Audience reviewed
→ Resource selected
→ Disclosure added
→ Tracking link created
→ Resource card shared
→ Lead or user routed
→ Attribution logged
→ Quality reviewed
```

### Affiliate Publisher Workflow

```text
Publisher approved
→ Content category selected
→ Approved links assigned
→ Disclosure language provided
→ Resource page or directory listing shared
→ Link usage reviewed
→ Claims monitored
```

### Broker Enablement Workflow

```text
Broker onboarded
→ Profile created
→ Funding readiness resource assigned
→ Intake CTA connected
→ Follow-up scripts provided
→ Do-not-claim list reviewed
→ Lead flow monitored
```

## Tracking and Attribution Model

Recommended fields:

```json
{
  "partner_slug": "sample_partner",
  "source": "partner_profile",
  "medium": "affiliate",
  "campaign": "ai_agent_library",
  "resource": "funding_readiness",
  "cta": "check_readiness",
  "created_at": "2026-06-18"
}
```

Recommended URL parameters:

```text
?utm_source=partner_slug
&utm_medium=affiliate
&utm_campaign=ai_agent_library
&utm_content=resource_card
```

## Partner-Safe Language

Use:

- Educational resource
- Readiness checklist
- Public tool
- Compare options
- Review common requirements
- Check fit
- Understand next steps
- Browse resources
- Partner resource
- Public-safe guide

Avoid:

- Guaranteed approval
- Guaranteed funding
- Guaranteed results
- Everyone qualifies
- Secret approval method
- No documents required
- Best rates guaranteed
- No risk
- AI will get you approved
- Partner can guarantee outcome

## Required Disclosures

General partner disclosure:

```text
This page may include affiliate or referral links. If you use them, the partner or site operator may receive compensation at no additional cost to you.
```

Provider directory disclosure:

```text
Some providers or resources listed here may involve affiliate, referral, sponsored, or strategic partner relationships. Listings are informational and do not guarantee eligibility, pricing, approval, or results.
```

Funding resource disclosure:

```text
Funding-related resources are educational and may include referral relationships. Final options depend on provider review, eligibility, documentation, business profile, and applicable terms.
```

## Partner Review Checklist

Before publishing partner assets:

- [ ] Partner type is defined.
- [ ] Audience is defined.
- [ ] Partner bio is approved.
- [ ] CTA destination is approved.
- [ ] Tracking parameters are correct.
- [ ] Affiliate or referral disclosure is visible.
- [ ] No private payout terms are shown.
- [ ] No guaranteed outcome language remains.
- [ ] No private provider logic is exposed.
- [ ] Public-safe funding or business-credit language is used where relevant.
- [ ] Internal notes are separate from public pages.

## Recommended GitHub Issue

```md
# Phase 2 — Distribution System

## Goal

Add partner, affiliate, referral, broker, ISO, consultant, and strategic partner infrastructure to AI Agent Library.

## Deliverables

- [ ] Partner recruitment page
- [ ] Partner/provider directory
- [ ] Team/profile directory
- [ ] Partner profile template
- [ ] Partner enablement knowledge base
- [ ] Local referrals knowledge base
- [ ] Partner examples
- [ ] Disclosure language
- [ ] Tracking and attribution rules

## Acceptance Criteria

- [ ] Partner pages link to affiliate disclosure.
- [ ] CTAs use placeholder or approved URLs only.
- [ ] No guarantees or unsupported claims.
- [ ] Partner examples are synthetic.
- [ ] Public and internal notes remain separated.
```

## Recommended PR Title

```text
Add partner and affiliate distribution layer
```

## Recommended PR Summary

```md
## Summary

Adds partner-facing distribution pages and knowledge-base resources.

## Included

- Partner get-started page
- Partner provider directory
- Team/profile directory
- Partner profile template
- Partner enablement KB
- Local referrals KB
- Partner examples and disclosure rules

## Validation

- Partner pages open without a build step.
- Affiliate disclosure is linked.
- Partner CTAs are public-safe placeholders or approved URLs.
- No private payout terms or provider logic included.
```

## Phase 2 Risks

| Risk | Mitigation |
|---|---|
| Partners make unsupported claims | Provide do-not-claim lists and review rules |
| Affiliate disclosures are missed | Link disclosure in footer and partner pages |
| Private payout terms leak into public repo | Keep internal payout data out of public files |
| Tracking links become inconsistent | Standardize partner slug and UTM rules |
| Provider listings imply guarantees | Use informational and readiness language |
| Partner profiles expose private contact details | Use approved public bios and controlled CTAs |

## Phase 2 Done Means

AI Agent Library has a working distribution layer that can support partners, affiliates, referral agents, brokers, consultants, and strategic partners without compromising public-safe language, attribution discipline, or trust.
