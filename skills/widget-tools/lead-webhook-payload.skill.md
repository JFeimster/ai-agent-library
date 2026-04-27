# Lead Webhook Payload Skill

```yaml
---
name: Lead Webhook Payload Skill
slug: lead-webhook-payload
category: widget-tools
audience:
  - builders
  - automation operators
  - affiliate partners
  - internal ops teams
problem_solved: Structures widget submissions for n8n, HubSpot, Google Sheets, Notion, or Wix CRM.
inputs_required:
  - widget name
  - visitor answers
  - calculated result
  - CTA selected
  - UTM parameters
  - referral source
outputs:
  - normalized JSON payload
  - CRM field mapping
  - validation notes
  - dedupe key recommendation
  - webhook handoff notes
guardrails:
  - Do not include secrets or API keys.
  - Do not send sensitive data to unprotected endpoints.
  - Preserve attribution.
recommended_apps:
  - embedded widgets
  - Next.js tools
  - n8n workflows
  - HubSpot intake flows
integration_notes:
  - Can standardize payloads across all lead-generating widgets.
monetization_angle: Makes every widget easier to wire into CRM and partner attribution without duct-tape archaeology.
---
```

## Purpose

Make lead-generating widgets automation-ready.

## Example prompt

Generate a normalized webhook payload for this widget submission, including lead fields, result fields, UTM fields, referral attribution, and CRM mapping notes.
