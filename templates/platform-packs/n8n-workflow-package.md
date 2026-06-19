# n8n Workflow Platform Package Template

## Purpose

Use this template to package an n8n workflow as a reusable automation asset inside the AI Agent Library.

An n8n workflow package should make the workflow understandable, reusable, auditable, and safe to adapt across projects, GPT actions, landing pages, partner ops, CRM automations, lead-routing systems, content operations, and internal AI-agent workflows.

## Recommended Folder Structure

```text
platforms/n8n/
  README.md
  n8n-workflow-inventory.md
  n8n-workflow-index.csv
  workflow-package-template.md
  workflow-export-rules.md
  credential-handling-rules.md
  webhook-safety-rules.md
  workflow-maintenance-checklist.md

automations/n8n/
  README.md
  [workflow-slug]/
    README.md
    workflow-summary.md
    workflow-map.md
    input-output-contract.md
    node-inventory.md
    setup-instructions.md
    test-plan.md
    safety-notes.md
    sample-payloads/
      inbound.example.json
      outbound.example.json
    exports/
      workflow.public-redacted.json
```

## Package Metadata

```yaml
name: ""
slug: ""
platform: "n8n"
type: "workflow"
status: "draft"
category: ""
audience: ""
problem_solved: ""
primary_job: ""
trigger_type: ""
workflow_owner: ""
repo_path: ""
export_path: ""
uses_webhook: false
uses_credentials: false
uses_private_data: false
human_review_required: false
disclosure_required: false
last_reviewed: ""
related_agent: ""
related_skill: ""
related_knowledge_base: ""
related_schema: ""
```

## Recommended Categories

```text
Lead Routing
CRM Automation
Funding Ops
Partner Enablement
Affiliate Tracking
Content Ops
Email Drafting
SMS Drafting
Webhook Intake
Data Normalization
Document Collection
Notification Routing
Reporting
Knowledge Sync
AI Agent Operations
```

## Workflow README Template

```md
# [Workflow Name]

## Purpose

[Explain what the workflow does in plain English.]

## Audience

This workflow is for:

- Audience 1
- Audience 2
- Audience 3

## Workflow Status

```text
draft / ready / active / needs-review / deprecated
```

## Visibility

```text
public-safe / internal-only / mixed / private / needs-review
```

## Primary Job

This workflow:

1. Receives [input].
2. Validates [data].
3. Routes [payload/entity].
4. Produces [output].
5. Escalates [exceptions].

## Trigger

```text
manual / webhook / schedule / form_submission / crm_event / email_event / sheet_update / database_update / api_polling / chat_action / file_upload
```

## Inputs

| Field | Required | Type | Notes |
|---|---:|---|---|
| `name` | Yes | string | Lead or contact name |
| `email` | Yes | string | User-provided email |
| `phone` | No | string | Optional phone number |
| `source` | Yes | string | Source campaign or page |

## Outputs

| Output | Destination | Notes |
|---|---|---|
| Normalized record | CRM | Public-safe fields only |
| Internal notification | Slack/email | No sensitive documents |
| Review task | Task system | Human review required |
```

## Workflow Map Template

```md
# Workflow Map

## High-Level Flow

```text
Trigger
  ↓
Validate payload
  ↓
Normalize fields
  ↓
Apply routing logic
  ↓
Create/update record
  ↓
Notify reviewer
  ↓
Log result
```
```

## Node Inventory Template

```md
# Node Inventory

| Node Name | Node Type | Purpose | Credentials Required | Sensitive |
|---|---|---|---:|---:|
| Webhook Trigger | Webhook | Receives inbound payload | No | Yes |
| Normalize Lead | Code/Function | Cleans field names | No | No |
| CRM Create Record | HTTP Request | Creates CRM record | Yes | Yes |
| Notify Team | Slack/Email | Sends review alert | Yes | No |
| Error Logger | Database/Sheet | Logs failed runs | Yes | Yes |
```

## Input / Output Contract Template

```md
# Input / Output Contract

## Inbound Payload

```json
{
  "name": "Example User",
  "email": "user@example.com",
  "phone": "555-000-0000",
  "business_name": "Example Business LLC",
  "source": "example-landing-page",
  "consent": true
}
```

## Required Fields

```json
[
  "name",
  "email",
  "source",
  "consent"
]
```
```

## Setup Instructions Template

```md
# Setup Instructions

## Prerequisites

- n8n workspace access
- Workflow import permission
- Test endpoint or sandbox destination
- Human reviewer assigned

## Setup Steps

1. Import the workflow JSON.
2. Reconnect workspace credentials.
3. Confirm webhook path.
4. Set environment-specific variables.
5. Run the sample inbound payload.
6. Confirm expected outbound payload.
7. Confirm failure branch behavior.
8. Activate only after review.
```

## Test Plan Template

```md
# Test Plan

## Happy Path

- [ ] Valid payload is accepted.
- [ ] Required fields are normalized.
- [ ] CRM/task record is created.
- [ ] Notification is sent.
- [ ] Log entry is recorded.

## Failure Tests

- [ ] Missing email stops workflow.
- [ ] Missing consent stops workflow.
- [ ] API timeout triggers retry or alert.
- [ ] Invalid payload creates no external submission.
- [ ] Sensitive docs are not forwarded automatically.
```

## Public-Redacted Export Rules

When committing workflow exports, use:

```text
workflow.public-redacted.json
```

Only commit redacted exports and synthetic sample payloads.

## Quality Checklist

- [ ] Workflow purpose is clear.
- [ ] Trigger is documented.
- [ ] Node inventory is complete.
- [ ] Input/output contract exists.
- [ ] Required credentials are listed without values.
- [ ] Sample payloads are synthetic.
- [ ] Failure branches are documented.
- [ ] Human review points are clear.
- [ ] Public-redacted export exists if export is committed.
- [ ] No real customer data is included.
- [ ] No secrets are included.
- [ ] No unsupported claims are automated.

## Done Means

An n8n workflow package is complete when it includes README, workflow summary, workflow map, node inventory, input/output contract, setup instructions, test plan, safety notes, synthetic sample payloads, redacted export if applicable, and maintenance checklist.
