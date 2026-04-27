# CRM Field Mapper Skill

```yaml
---
name: CRM Field Mapper Skill
slug: crm-field-mapper
category: crm-ops
audience:
  - operators
  - builders
  - affiliate partners
  - CRM admins
problem_solved: Maps form and widget fields to HubSpot, Notion, Google Sheets, Wix CRM, or other CRM properties.
inputs_required:
  - source form fields
  - widget result fields
  - destination CRM
  - existing CRM property names
  - required fields
outputs:
  - field mapping table
  - normalized field names
  - required/optional flags
  - transformation notes
  - missing CRM property recommendations
guardrails:
  - Do not include API keys or secrets.
  - Do not expose private client data.
  - Preserve source and attribution fields.
recommended_apps:
  - HubSpot workflows
  - n8n automations
  - Sheets/Notion intake systems
  - Wix CRM flows
integration_notes:
  - Pairs with Lead Webhook Payload and Referral Source Attribution.
monetization_angle: Reduces broken handoffs between widgets, forms, and CRMs.
---
```

## Purpose

Keep data fields clean across funnels, widgets, and CRMs so leads do not vanish into spreadsheet purgatory.

## Example prompt

Map these widget and form fields to this CRM schema. Include normalized names, required/optional flags, transformations, and missing property recommendations.
