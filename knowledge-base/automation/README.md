# Automation Knowledge Base

Workflow specs, trigger libraries, webhook event patterns, approval gates, fallbacks, failure handling, and automation safety rules for AI Agent Library assets.

## Purpose

This knowledge base helps builders design safe, reviewable automation workflows for agents, static sites, partner systems, CRM operations, content operations, and public tools.

Use this folder to support:

- Workflow automation agents
- Webhook event schemas
- CRM follow-up flows
- Partner attribution flows
- Content publishing workflows
- Lead intake automation
- Approval queues
- Human-review checkpoints
- No-auth action planning
- API-key and OAuth workflow planning

## Primary Users

- AI workflow builders
- Automation operators
- CRM admins
- Partner managers
- Funding operators
- Content operators
- RevOps teams
- Static site builders
- Custom GPT builders
- n8n / Zapier / Make builders

## Automation Principles

1. Automate structure before judgment.
2. Draft before sending.
3. Flag uncertainty instead of inventing facts.
4. Use human review for high-stakes actions.
5. Keep credentials out of public files.
6. Use synthetic payloads in examples.
7. Log the action, source, and timestamp.
8. Prefer reversible changes.
9. Treat outbound communication as higher risk.
10. Separate no-auth, API-key, and OAuth workflows.

## Automation Categories

### No-Auth Automations

Best for:

- Static page interactions
- Local browser tools
- Prompt generators
- Markdown generators
- JSON builders
- Downloadable files
- Copy-to-clipboard utilities
- Public-safe calculators

Examples:

- Prompt generator
- Skill builder
- Static resource-card builder
- Schema starter generator
- Local search/filter page
- Static checklist app

### API-Key Automations

Best for:

- Controlled backend calls
- Webhook proxy workflows
- CRM data syncs
- Email draft providers
- SMS draft providers
- Server-side enrichment
- Authenticated partner tools

Examples:

- Lead intake webhook
- CRM stage updater
- Email draft creation
- Provider status sync
- Analytics event sender

### OAuth Automations

Best for:

- User-authorized account actions
- Google Workspace operations
- Notion database updates
- HubSpot contact workflows
- Slack notifications
- Calendar tasks
- Drive file operations

Examples:

- Create Notion task
- Draft Gmail response
- Update HubSpot contact
- Add Google Calendar reminder
- Save Drive document
- Send Slack alert

## Trigger Library

### User Action Trigger

Triggered when a user clicks, submits, copies, downloads, filters, or generates something.

Common events:

- `button.clicked`
- `form.submitted`
- `file.downloaded`
- `prompt.generated`
- `schema.generated`
- `resource.filtered`

### CRM Trigger

Triggered when a lead, contact, deal, or task changes.

Common events:

- `lead.created`
- `lead.updated`
- `lead.status_changed`
- `document.missing`
- `deal.stalled`
- `task.overdue`
- `partner_source_detected`

### Content Trigger

Triggered by publishing or content operations.

Common events:

- `brief.created`
- `article.drafted`
- `metadata.generated`
- `content.needs_review`
- `asset.published`
- `content.repuposed`

### Partner Trigger

Triggered by affiliate, referral, or partner activity.

Common events:

- `partner.application_submitted`
- `partner.profile_created`
- `partner.link_clicked`
- `partner.resource_shared`
- `partner.lead_referred`

### Webhook Trigger

Triggered by external systems.

Common events:

- `webhook.received`
- `webhook.verified`
- `webhook.failed`
- `webhook.replayed`
- `webhook.rejected`

## Workflow Spec Format

```md
# [Workflow Name]

## Purpose

What this workflow does.

## Trigger

What starts the workflow.

## Inputs

- Input 1
- Input 2

## Steps

1. Step one
2. Step two
3. Step three

## Outputs

- Output 1
- Output 2

## Human Review Required?

Yes / No

## Review Reason

Explain why review is or is not required.

## Failure Modes

- Failure mode 1
- Failure mode 2

## Fallback Behavior

What the workflow should do if it fails.

## Data Rules

- No secrets
- No private client data
- Synthetic examples only

## Related Schema

schemas/webhook-event.schema.json
```

## Approval Gates

Human review should be required before:

- Sending funding-related outbound messages
- Sending business-credit messages
- Updating final deal qualification
- Submitting a file to a provider
- Sending decline language
- Publishing partner profiles
- Publishing affiliate recommendations
- Updating legal or trust pages
- Sending SMS messages
- Writing to a production CRM
- Triggering payment, contract, or regulated workflows

## Failure Handling

Every automation should define:

- What happens if required inputs are missing
- What happens if an API call fails
- What happens if a webhook signature fails
- What happens if a user is unauthorized
- What happens if rate limits are reached
- What happens if data validation fails
- What gets logged
- Who gets notified
- Whether retry is safe
- Whether the workflow should stop

## Standard Automation Agent Output

```md
## Workflow Summary

- Name:
- Trigger:
- Input source:
- Output destination:
- Risk level:
- Human review:

## Steps

1. Step one
2. Step two
3. Step three

## Required Data

- Field 1
- Field 2

## Missing Inputs

- Missing item 1
- Missing item 2

## Recommended Action Type

No-auth / API-key / OAuth / Manual review

## Safety Notes

- Safety note 1
- Safety note 2

## Example Payload

```json
{
  "event_type": "lead.created",
  "source": "partner_form",
  "created_at": "2026-06-18T12:00:00Z"
}
```

## Fallback

What to do if the workflow fails.
```

## Public-Safe Data Rules

Allowed:

- Synthetic payloads
- Example field names
- Placeholder IDs
- Public URLs
- Generic workflow names
- Public-safe event types

Restricted:

- API keys
- Access tokens
- Webhook secrets
- Real customer records
- Bank data
- Tax data
- Credit reports
- Private CRM exports
- Private provider logic
- Production endpoints

## Related Repo Paths

```text
knowledge-base/automation/
schemas/webhook-event.schema.json
examples/automation/
script.js
prompt-generator.html
skill-builder.html
```

## Maintenance Checklist

- [ ] Workflow specs include triggers.
- [ ] Human review gates are defined.
- [ ] No secrets are present.
- [ ] Payloads are synthetic.
- [ ] Failure modes are documented.
- [ ] Related schemas are linked.
- [ ] Public-safe language is preserved.
