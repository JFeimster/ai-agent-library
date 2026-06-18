# Example — Partner Lead Intake Webhook

## Scenario

A synthetic partner form submits a new lead. The automation should validate the payload, create a CRM task or review item, draft a follow-up message, and route it to human review.

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
- Requested amount if applicable
- Source URL
- Timestamp

## Workflow Steps

1. Receive webhook payload.
2. Validate required fields.
3. Reject or quarantine incomplete payloads.
4. Check for duplicate lead records.
5. Create CRM lead, CRM task, or review queue item.
6. Draft public-safe intake follow-up.
7. Send the draft to human review.
8. Log partner attribution.
9. Record processing status.
10. Stop before sending outbound communication automatically.

## Example Payload

```json
{
  "event_id": "evt_partner_lead_001",
  "event_type": "partner.lead_referred",
  "source": "partner_form",
  "version": "1.0.0",
  "environment": "test",
  "created_at": "2026-06-18T12:00:00Z",
  "actor": {
    "actor_type": "partner",
    "partner_slug": "sample_partner"
  },
  "payload": {
    "lead_name": "Sample Contact",
    "business_name": "Sample Business LLC",
    "email": "sample@example.com",
    "phone": "555-0100",
    "business_type": "Service Business",
    "stated_need": "Working capital",
    "requested_amount": 50000,
    "source_url": "https://example.com/partner-page"
  },
  "metadata": {
    "utm_source": "sample_partner",
    "utm_medium": "affiliate",
    "utm_campaign": "ai_agent_library",
    "tags": [
      "partner",
      "lead-intake"
    ]
  },
  "security": {
    "signature_verified": false,
    "signature_algorithm": "none",
    "auth_type": "none",
    "contains_sensitive_data": false,
    "redaction_required": false
  },
  "processing": {
    "status": "queued",
    "priority": "normal",
    "human_review_required": true,
    "review_reason": "Funding-related follow-up requires human review before sending.",
    "destination": "review_queue"
  },
  "data_policy": {
    "example_is_synthetic": true,
    "allowed_for_public_repo": true,
    "restricted_fields": [
      "api_key",
      "access_token",
      "password",
      "bank_account",
      "tax_id",
      "credit_report",
      "private_client_record"
    ],
    "notes": "Synthetic payload for documentation and schema testing only."
  }
}
```

## Draft Follow-Up Message

```text
Hi [Name], thanks for reaching out. To understand what options may be relevant, I need a few basics first: business type, time in business, monthly revenue, funding amount requested, use of funds, and whether recent business bank statements are available.

Final options depend on documentation, business profile, eligibility, and provider review.
```

## Human Review Required?

Yes.

## Review Reason

The workflow involves funding-related follow-up and should not send outbound messages automatically.

## Failure Modes

- Missing email or phone
- Invalid partner slug
- Duplicate lead detected
- CRM API unavailable
- Webhook signature invalid
- Required fields missing
- Payload contains restricted data
- Review queue unavailable

## Fallback Behavior

If validation fails, store the payload in a quarantine or review queue and notify the operator. Do not send outbound messages. Do not create final deal status updates without human review.

## Guardrails

- Do not send the follow-up automatically.
- Do not promise funding or approval.
- Do not expose private CRM data in logs.
- Do not include secrets in public examples.
- Use the webhook schema before production implementation.
```

Batch 12 will be **Portfolio Folder Files**:

```text id="batch-12-list"
portfolio/vercel/README.md
portfolio/vercel/index.json

portfolio/custom-gpts/README.md
portfolio/custom-gpts/index.json

portfolio/gemini-gems/README.md
portfolio/gemini-gems/index.json

portfolio/flash-ui/README.md
portfolio/flash-ui/index.json
