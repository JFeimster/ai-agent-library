# Automation Knowledge Base Examples

These examples are synthetic and public-safe. They show how to define workflows, triggers, payloads, review gates, and failure behavior without exposing secrets or private data.

## Example 1 — Lead Intake Webhook

### Scenario

A partner form submits a new lead. The automation should validate the payload, create a CRM task, and draft a follow-up message for human review.

### Workflow Spec

```md
# Partner Lead Intake Workflow

## Purpose

Capture a partner-referred lead and prepare the next human-reviewed action.

## Trigger

`partner.lead_referred`

## Inputs

- Partner slug
- Lead name
- Business name
- Email
- Phone
- Business type
- Stated need
- Funding amount if applicable
- Source URL

## Steps

1. Receive webhook payload.
2. Validate required fields.
3. Reject or quarantine incomplete payloads.
4. Create CRM lead or task.
5. Draft intake follow-up.
6. Send draft to human review queue.
7. Log attribution source.

## Outputs

- CRM lead or task
- Draft follow-up message
- Attribution record
- Review task

## Human Review Required?

Yes

## Review Reason

The workflow may involve funding-related follow-up and should not send outbound messages automatically.

## Failure Modes

- Missing email or phone
- Invalid partner slug
- CRM API unavailable
- Duplicate lead detected
- Webhook signature invalid

## Fallback Behavior

If validation fails, store the payload in a review queue and notify the operator.

## Data Rules

Use synthetic payloads in examples. Do not store secrets or private client records in public files.

## Related Schema

schemas/webhook-event.schema.json
```

### Example Payload

```json
{
  "event_type": "partner.lead_referred",
  "source": "partner_form",
  "partner_slug": "sample_partner",
  "created_at": "2026-06-18T12:00:00Z",
  "payload": {
    "lead_name": "Sample Contact",
    "business_name": "Sample Business LLC",
    "email": "sample@example.com",
    "phone": "555-0100",
    "business_type": "Service Business",
    "stated_need": "Working capital",
    "requested_amount": 50000
  }
}
```

## Example 2 — Missing Document Follow-Up Draft

### Scenario

A CRM deal changes to Missing Documents. The automation should identify missing files and draft a message, but not send it automatically.

### Workflow Spec

```md
# Missing Document Follow-Up Draft

## Purpose

Draft a clear missing-document request for human review.

## Trigger

`lead.status_changed` where status is `Missing Documents`

## Inputs

- Lead ID
- Contact name
- Business name
- Missing document list
- Product family
- Last contact date
- Owner

## Steps

1. Confirm the lead status changed to Missing Documents.
2. Read the missing document list.
3. Generate a concise message.
4. Add public-safe funding disclaimer if applicable.
5. Create a review task for the owner.
6. Do not send automatically.

## Outputs

- Draft follow-up message
- Review task
- CRM note summary

## Human Review Required?

Yes

## Review Reason

The message is funding-related and should be approved before sending.

## Failure Modes

- Missing document list is empty
- Lead owner is missing
- CRM record cannot be updated
- Product family is unclear

## Fallback Behavior

Create a task asking the owner to manually review the file and identify missing documents.
```

### Draft Message

```text
Hi [Name], the next step is to collect the remaining documents needed for review:

- [Document 1]
- [Document 2]

Once these are available, the file can be reviewed more clearly. Final options depend on documentation, business profile, and provider criteria.
```

## Example 3 — Content Brief Generator

### Scenario

An operator submits a topic and keyword. The automation generates a content brief and stores it as a draft.

### Workflow Spec

```md
# Content Brief Generator

## Purpose

Generate a structured SEO brief from a topic, keyword, audience, and CTA.

## Trigger

`brief.requested`

## Inputs

- Topic
- Primary keyword
- Audience
- Search intent
- CTA
- Internal links
- Risk level

## Steps

1. Validate topic and primary keyword.
2. Generate SEO brief sections.
3. Add citation needs if the topic is current or high-stakes.
4. Add do-not-claim list.
5. Save brief as draft.
6. Mark for editorial review.

## Outputs

- Draft SEO brief
- Metadata fields
- Review checklist

## Human Review Required?

Yes

## Review Reason

Content may include claims, SEO recommendations, or current facts requiring review.

## Failure Modes

- Missing primary keyword
- Missing audience
- Unsupported claims appear
- Topic requires citations not provided

## Fallback Behavior

Return a brief skeleton and list missing inputs.
```

## Example 4 — Static Prompt Generator

### Scenario

A static page lets users generate a prompt pack locally in the browser. No server, API key, or account connection is required.

### Workflow Spec

```md
# Static Prompt Generator

## Purpose

Generate reusable prompt templates in the browser without collecting data.

## Trigger

`prompt.generated`

## Inputs

- Use case
- Audience
- Desired output
- Constraints
- Platform

## Steps

1. User enters fields in the browser.
2. JavaScript validates required inputs.
3. Page generates prompt text locally.
4. User copies or downloads the prompt.
5. No data is sent to a server by default.

## Outputs

- Prompt pack markdown
- Copyable prompt
- Downloadable text

## Human Review Required?

No for generation; yes before production use.

## Review Reason

The page only generates local text, but the resulting prompt should be reviewed before being used in public or high-stakes workflows.

## Failure Modes

- User leaves fields blank
- Browser clipboard access fails
- Generated prompt is too generic

## Fallback Behavior

Show a prompt skeleton and ask for missing inputs.
```
