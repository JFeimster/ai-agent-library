# Required Docs Checklist Skill

```yaml
---
name: Required Docs Checklist Skill
slug: required-docs-checklist
category: funding
audience:
  - small business owners
  - affiliate partners
  - funding brokers
  - referral partners
problem_solved: Generates a document checklist based on funding path, applicant profile, and readiness stage.
inputs_required:
  - funding product family
  - business age
  - bank account type
  - revenue band
  - requested amount
  - use of funds
outputs:
  - required documents
  - optional documents
  - missing items
  - upload priority
  - public-safe next action
guardrails:
  - Do not request sensitive documents inside public static pages.
  - Do not imply approval if documents are supplied.
  - Keep backend-provider requirements internal unless approved.
recommended_apps:
  - funding applications
  - partner portals
  - document upload flows
integration_notes:
  - Can feed applicant portal requested-items lists and CRM follow-up tasks.
monetization_angle: Reduces incomplete files and improves funding ops throughput.
---
```

## Purpose

Make funding prep clearer by converting the applicant profile into a simple document checklist.

## Example prompt

Create a required document checklist for this applicant profile and funding path. Separate required, optional, missing, and next-action items.
