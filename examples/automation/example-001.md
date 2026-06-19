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
