# Automation Workflow Spec Writer

## Purpose

The **Automation Workflow Spec Writer** skill creates implementation-ready automation workflow specifications for AI agents, n8n, Zapier-style systems, CRM automations, webhook handlers, GitHub workflows, Notion systems, Google Workspace flows, and review-gated operations.

Use this skill when a workflow idea needs to become a clear build spec before anyone starts connecting APIs like a caffeinated raccoon with admin access.

This skill defines:

- Workflow purpose
- Trigger
- Inputs
- Required fields
- Validation rules
- Processing steps
- Approval gates
- Outputs
- Failure modes
- Retry logic
- Duplicate prevention
- Logging
- Security notes
- Human fallback
- Test cases

This skill does **not** create live automations, send production messages, expose credentials, bypass review gates, or deploy workflows without explicit approval.

## When To Use

Use this skill when the user asks for:

- An automation workflow spec
- An n8n workflow plan
- A webhook event workflow
- A CRM automation design
- A lead intake workflow
- A missing-docs workflow
- A follow-up drafting workflow
- A GitHub issue or PR automation
- A Notion database automation
- A Google Sheets workflow
- A Slack notification workflow
- An email/SMS draft workflow
- An approval queue workflow
- A failure-mode checklist
- A webhook payload spec
- An automation prompt for Codex, Jules, or another builder

Use it before implementation when the workflow touches:

- Customer messages
- Funding or financial information
- CRM records
- Partner/referral attribution
- Webhooks
- APIs
- GitHub issues or PRs
- Publishing workflows
- Deployment workflows
- Private or sensitive data

Do not use this skill for:

- Simple one-off reminders
- Pure static page generation
- Full live API implementation
- Production credential setup
- Sending messages without human review
- Legal/compliance final approval

## Inputs

### Minimum Inputs

```text
Workflow name:
Workflow purpose:
Trigger:
Input source:
Desired output:
Systems involved:
Human review needed:
```

### Recommended Inputs

```text
Trigger event:
Source system:
Destination system:
Required fields:
Optional fields:
Validation rules:
Approval gate:
Failure modes:
Retry behavior:
Duplicate prevention:
Logging destination:
Owner:
Environment:
Data sensitivity:
```

### Optional Inputs

```text
Webhook payload:
CRM stage map:
Email draft template:
SMS draft template:
Notion database fields:
Google Sheet columns:
GitHub issue template:
Slack channel:
n8n node list:
API docs:
Auth type:
Rate limits:
Rollback plan:
Existing workflow:
Known errors:
```

## Outputs

This skill should produce:

1. Workflow summary
2. Trigger definition
3. Input payload schema
4. Required fields
5. Optional fields
6. Validation rules
7. Processing steps
8. Approval gates
9. Output actions
10. Failure modes
11. Retry rules
12. Duplicate prevention rules
13. Logging and monitoring notes
14. Security and data rules
15. Test cases
16. Human fallback plan
17. Implementation notes

## Standard Output Format

```md
# Automation Workflow Spec

## 1. Workflow Summary

- Name:
- Purpose:
- Owner:
- Systems:
- Environment:
- Status:

## 2. Trigger

- Trigger type:
- Source:
- Event:
- Frequency:
- Conditions:

## 3. Input Payload

```json
{
  "event_id": "evt_example_001",
  "event_type": "example.event",
  "created_at": "2026-06-18T12:00:00Z",
  "source": "synthetic-source",
  "payload": {}
}
```

## 4. Required Fields

| Field | Type | Reason |
|---|---|---|
| `event_id` | string | Used for duplicate prevention |
| `event_type` | string | Used for workflow routing |

## 5. Optional Fields

| Field | Type | Notes |
|---|---|---|
| `metadata` | object | Optional routing or audit notes |

## 6. Validation Rules

- Rule 1
- Rule 2
- Rule 3

## 7. Workflow Steps

1. Step one
2. Step two
3. Step three

## 8. Approval Gates

| Gate | Reviewer | Required Before | Reason |
|---|---|---|---|
| Human review | Assigned owner | Sending message | Client-facing communication requires review |

## 9. Output Actions

- Action:
- Destination:
- Review required:

## 10. Failure Modes

| Failure | Cause | Fallback |
|---|---|---|
| Missing field | Payload incomplete | Route to manual review |

## 11. Retry / Duplicate Prevention

- Retry rule:
- Idempotency key:
- Duplicate handling:

## 12. Logging

- Log event:
- Destination:
- Retention note:

## 13. Security and Data Rules

- Rule 1
- Rule 2
- Rule 3

## 14. Test Cases

- Test case 1
- Test case 2
- Test case 3

## 15. Human Fallback

[Fallback instructions]

## 16. Implementation Notes

[Build notes]
```

## File / Path Conventions

Recommended locations:

```text
knowledge-base/automation/
examples/automation/
schemas/webhook-event.schema.json
schemas/automation-workflow.schema.json
prompt-chains/
```

Example workflow spec paths:

```text
examples/automation/missing-docs-follow-up-workflow.md
examples/automation/new-lead-routing-workflow.md
examples/automation/partner-referral-attribution-workflow.md
examples/automation/github-pr-review-workflow.md
```

## Workflow

### Step 1 — Classify the Workflow

Classify the workflow as one of:

```text
Lead intake
CRM follow-up drafting
Missing documents reminder
Partner referral routing
Funding readiness triage
Email draft creation
SMS draft creation
Notion database update
Google Sheets row processing
GitHub issue creation
GitHub PR review
Webhook event processor
Content calendar update
Static site data generation
Portfolio inventory sync
Approval queue
Status notification
Deployment check
```

### Step 2 — Define the Trigger

Supported trigger types:

```text
webhook
manual
scheduled
CRM stage change
form submission
new spreadsheet row
Notion database update
GitHub issue event
GitHub PR event
email received
file uploaded
deployment event
```

Every trigger should include:

- Source
- Event name
- Conditions
- Frequency
- Environment
- Required fields

### Step 3 — Define the Input Payload

Payload examples must be synthetic.

Include:

- `event_id`
- `event_type`
- `created_at`
- `source`
- `environment`
- `payload`
- `metadata`

Do not include:

- API keys
- access tokens
- webhook secrets
- real customer records
- bank statements
- tax records
- credit reports
- private CRM exports

### Step 4 — Define Required Fields

Required fields should be only what the workflow absolutely needs to run.

Example:

```text
event_id
event_type
lead_id
contact_name
stage
missing_documents
assigned_owner
```

### Step 5 — Add Validation Rules

Validation rules may include:

- Reject missing `event_id`
- Reject unknown `event_type`
- Reject empty required arrays
- Reject malformed email addresses
- Reject malformed URLs
- Reject payloads from unknown source
- Reject duplicate event IDs
- Route sensitive payloads to manual review
- Stop before sending if approval is missing

### Step 6 — Define Workflow Steps

Workflow steps should be sequential and testable.

Good pattern:

```text
1. Receive event.
2. Validate required fields.
3. Check duplicate event ID.
4. Normalize payload.
5. Generate draft or output.
6. Add approval queue item.
7. Notify reviewer.
8. Log result.
```

### Step 7 — Add Approval Gates

High-stakes actions require review.

Require human review before:

- Sending customer emails
- Sending SMS
- Updating funding status
- Marking a lead declined
- Sharing lead status with a referral partner
- Publishing content
- Changing deployment settings
- Merging PRs
- Deleting files
- Archiving CRM records
- Moving records to closed/lost

### Step 8 — Define Output Actions

Supported output actions:

```text
CRM note
Email draft
SMS draft
Call script
Voicemail script
Notion page
Google Sheet row
GitHub issue
GitHub PR comment
Slack message
Approval queue item
JSON event
Static site data file
Report
```

### Step 9 — Define Failure Modes

Common failure modes:

```text
Missing required field
Invalid email
Invalid phone
Duplicate event
API unavailable
Rate limit
Unauthorized request
Timeout
Schema mismatch
Destination record not found
Approval not received
User opted out
Sensitive data detected
```

### Step 10 — Define Retry and Idempotency

Every workflow that creates records or messages should include duplicate prevention.

Recommended idempotency keys:

```text
event_id
lead_id + stage + timestamp bucket
source_record_id + workflow_name
github_pr_number + commit_sha
```

### Step 11 — Define Logging

Log enough to debug, not enough to leak private data.

Safe log fields:

```text
event_id
workflow_name
timestamp
validation_status
output_status
reviewer
final_status
error_code
```

Avoid logging:

```text
full bank statements
credit reports
tax records
private notes
access tokens
webhook secrets
full message bodies with sensitive data
```

### Step 12 — Add Test Cases

Include at least:

- Valid payload creates expected output
- Missing required field routes to manual review
- Duplicate event is skipped
- Approval missing prevents sending
- Sensitive data warning routes to review

## Common Workflow Patterns

### Missing Documents Follow-Up Draft

Use when a CRM record is waiting on documents.

Outputs:

- Email draft
- SMS draft
- CRM task
- Approval queue item

Rules:

- Do not send automatically.
- Do not guarantee approval or funding.
- Do not say documents guarantee outcome.

### Partner Referral Routing

Use when a partner submits a lead.

Outputs:

- Normalized lead summary
- Attribution note
- Internal routing task
- Partner update draft

Rules:

- Do not expose private applicant details without permission.
- Do not expose backend provider names.
- Do not promise partner compensation or borrower outcomes.

### GitHub PR Review Workflow

Use when a PR is opened or updated.

Outputs:

- Changed file summary
- Risk scan
- Suggested review comment
- Merge readiness note

Rules:

- Do not merge unless explicitly instructed.
- Request changes if secrets, broken JSON, or unsafe deployment changes are found.

### Static Site Data Sync

Use when repo data needs to update site JSON.

Outputs:

- Normalized JSON record
- Validation result
- PR-ready summary

Rules:

- JSON must validate.
- Do not include private data.
- Do not duplicate canonical source if fallback data exists.

## Quality Checklist

Before finalizing an automation workflow spec:

- [ ] Workflow name is clear.
- [ ] Purpose is specific.
- [ ] Trigger is defined.
- [ ] Source system is defined.
- [ ] Destination system is defined.
- [ ] Required fields are listed.
- [ ] Validation rules are included.
- [ ] Steps are sequential.
- [ ] Approval gates are included.
- [ ] Output actions are clear.
- [ ] Failure modes are listed.
- [ ] Retry rules are included.
- [ ] Duplicate prevention is included.
- [ ] Logging rules are included.
- [ ] Security/data rules are included.
- [ ] Synthetic payloads are used.
- [ ] Test cases are included.
- [ ] Human fallback is defined.

## Guardrails

This skill must not:

- Include real API keys.
- Include access tokens.
- Include webhook secrets.
- Include private customer data.
- Include real bank/tax/credit records.
- Create automatic high-stakes sends without review.
- Merge PRs without explicit instruction.
- Delete records without explicit confirmation.
- Bypass approval gates.
- Log full sensitive payloads.
- Use production endpoints in public examples.
- Treat automation output as final professional advice.

## Public-Safe Language Rules

Use:

```text
draft
review required
approval gate
synthetic payload
test event
manual fallback
validation
routing
possible next step
```

Avoid:

```text
send automatically
skip review
guaranteed approval
guaranteed funding
delete without confirmation
use production token
log full private data
```

## Example Input

```text
Create a workflow spec for a missing-docs follow-up automation. It should create an email draft and SMS draft when a funding lead is missing bank statements, but it should not send automatically.
```

## Example Output

```md
# Automation Workflow Spec

## 1. Workflow Summary

- Name: Missing Docs Follow-Up Draft Workflow
- Purpose: Create reviewable follow-up drafts when a funding lead is missing required documents.
- Owner: Funding operations
- Systems: CRM, draft generator, approval queue
- Environment: Preview first
- Status: Draft

## 2. Trigger

- Trigger type: CRM stage change
- Source: CRM
- Event: Lead moved to `Awaiting Documents`
- Conditions: Missing documents list is not empty

## 3. Input Payload

```json
{
  "event_id": "evt_missing_docs_001",
  "event_type": "crm.stage_changed",
  "created_at": "2026-06-18T12:00:00Z",
  "source": "synthetic-crm",
  "environment": "test",
  "payload": {
    "lead_id": "lead_synthetic_001",
    "business_name": "Example Logistics LLC",
    "contact_name": "Sample Contact",
    "missing_documents": [
      "3 months business bank statements",
      "current advance payoff letter"
    ],
    "stage": "Awaiting Documents"
  }
}
```

## 4. Required Fields

| Field | Type | Reason |
|---|---|---|
| `event_id` | string | Duplicate prevention |
| `event_type` | string | Workflow routing |
| `payload.lead_id` | string | CRM record association |
| `payload.missing_documents` | array | Draft content |

## 5. Validation Rules

- Reject payload if `event_id` is missing.
- Reject payload if `lead_id` is missing.
- Reject payload if missing documents list is empty.
- Do not send messages automatically.

## 6. Workflow Steps

1. Receive CRM stage-change event.
2. Validate payload.
3. Check whether event ID was already processed.
4. Normalize missing document list.
5. Generate email draft.
6. Generate SMS draft.
7. Create approval queue item.
8. Add internal CRM note.
9. Notify assigned reviewer.
10. Log workflow result.

## 7. Approval Gates

| Gate | Reviewer | Required Before | Reason |
|---|---|---|---|
| Human message review | Assigned rep or processor | Email/SMS send | Client-facing communication must be reviewed |

## 8. Output Actions

- Create email draft.
- Create SMS draft.
- Create CRM task.
- Create approval queue item.
- Do not send automatically.

## 9. Failure Modes

| Failure | Cause | Fallback |
|---|---|---|
| Missing lead ID | Bad payload | Route to manual review |
| Empty document list | Stage mismatch | Do not draft |
| CRM unavailable | API failure | Retry once, then alert owner |
| Duplicate event | Same event ID | Skip and log duplicate |

## 10. Retry / Duplicate Prevention

- Retry once after 5 minutes for transient API errors.
- Use `event_id` as idempotency key.
- Do not create duplicate drafts for the same event.

## 11. Logging

- Log event ID.
- Log lead ID.
- Log draft created status.
- Do not log document contents.

## 12. Security and Data Rules

- Store credentials in environment variables.
- Use synthetic examples in documentation.
- Do not include secrets in payload examples.
- Human review required before sending.

## 13. Test Cases

- Valid missing-docs payload creates drafts.
- Missing lead ID routes to manual review.
- Duplicate event is skipped.
- Empty document list does not create drafts.

## 14. Human Fallback

If the workflow fails, create a manual CRM task for the assigned rep to review the lead and draft follow-up manually.
```

## Related Agents

```text
agents/automation-workflow-spec-agent.md
agents/crm-follow-up-drafting-agent.md
agents/prompt-chain-architect.md
```

## Related Knowledge Bases

```text
knowledge-base/automation/README.md
knowledge-base/crm/README.md
knowledge-base/funding/README.md
```

## Related Schemas

```text
schemas/webhook-event.schema.json
schemas/agent.schema.json
```

## Done Means

This skill is complete when it can produce workflow specs that:

- Define trigger and payload
- Include required fields
- Include validation rules
- Include approval gates
- Include failure handling
- Include retry and duplicate prevention
- Use synthetic examples
- Avoid secrets/private data
- Protect high-stakes actions with human review