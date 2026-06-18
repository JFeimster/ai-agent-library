# CRM Knowledge Base

CRM hygiene, lead status handling, note cleanup, follow-up logic, missed-opportunity detection, and pipeline signal scanning.

## Purpose

This knowledge base helps agents and operators structure CRM workflows without creating messy, unsafe, or misleading automation.

Use this folder to support:

- CRM cleanup agents
- Lead status systems
- Follow-up workflows
- Stalled deal reviews
- Missing document reminders
- Referral partner tracking
- Pipeline signal scanning
- CRM automation prompts
- Webhook event schemas
- Human review queues

## Primary Users

- Sales operators
- Funding brokers
- Referral partners
- CRM admins
- Processors
- Closers
- AI workflow builders
- Automation operators
- RevOps teams

## CRM Operating Principles

1. The CRM should reflect the actual state of the deal.
2. Automations should not pretend to know what is missing unless the data supports it.
3. Outbound messages should be human-reviewed when stakes are high.
4. Lead status changes should be traceable.
5. Notes should summarize facts, not hallucinate intent.
6. Follow-up should be helpful, not spammy.
7. Private data should not be copied into public examples.

## Core Lead Stages

### New Lead

A lead has entered the system and has not yet been qualified.

Required actions:

- Confirm source
- Confirm contact details
- Identify business type
- Identify need
- Request missing intake information
- Assign owner

### Intake Started

The lead has provided some information but is missing key details.

Required actions:

- Summarize known facts
- List missing fields
- Send clean intake request
- Set follow-up date

### Qualified for Review

The file has enough information for initial review.

Required actions:

- Confirm product-family fit
- Confirm required documents
- Flag caution items
- Route to reviewer or closer

### Missing Documents

The lead may be viable but cannot move forward without specific files.

Required actions:

- List exact missing documents
- Explain why they are needed
- Avoid overpromising outcome
- Follow up on a reasonable cadence

### Submitted / In Review

The file has been submitted or moved to a review process.

Required actions:

- Record submission date
- Record product family or provider category
- Track expected next update
- Avoid duplicate submissions

### Offer / Options Presented

Options, next steps, or available paths have been shared.

Required actions:

- Record offer or option details
- Record expiration or decision date
- Follow up with clear next step
- Avoid pressure language

### Funded / Completed

The workflow has produced a completed outcome or closed milestone.

Required actions:

- Record completion date
- Record follow-up opportunity
- Set renewal or future check-in reminder
- Request feedback where appropriate

### Declined / Not a Fit

The file is not currently a fit.

Required actions:

- Record reason
- Avoid blame or harsh language
- Identify future readiness steps
- Set appropriate reactivation timeline if relevant

### Nurture

The lead is not ready now but may be relevant later.

Required actions:

- Assign nurture reason
- Set educational follow-up
- Use low-pressure language
- Avoid aggressive automation

## CRM Data Hygiene Rules

Use structured fields whenever possible.

Recommended fields:

- Lead ID
- Contact name
- Business name
- Email
- Phone
- Source
- Partner slug
- Campaign
- Business type
- Time in business
- Monthly revenue
- Funding request
- Use of funds
- Credit band
- Product family
- Status
- Owner
- Next follow-up date
- Missing documents
- Caution flags
- Last contact date
- Last note summary

## Note Cleanup Format

```md
## CRM Note Summary

### Known Facts

- Fact 1
- Fact 2

### Missing Information

- Missing item 1
- Missing item 2

### Current Status

[Stage]

### Caution Flags

- Flag 1
- Flag 2

### Suggested Next Action

[One clear next step]

### Follow-Up Date

[Date or timeframe]
```

## Follow-Up Cadence Rules

### New Lead

- First follow-up: same day where appropriate
- Second follow-up: 1 business day later
- Third follow-up: 3 business days later
- Then move to nurture if no response

### Missing Documents

- Follow up with exact document list
- Avoid vague “send docs” messages
- Explain why each document matters
- Stop or slow cadence if user is unresponsive

### Stalled Deal

- Confirm whether the need still exists
- Summarize what is pending
- Provide one clear next action
- Avoid guilt, pressure, or urgency manipulation

### Declined / Not a Fit

- Explain the gap
- Provide educational readiness steps
- Set realistic recheck timing
- Do not imply future approval is guaranteed

## Automation Rules

Automation may:

- Draft follow-up messages
- Summarize CRM notes
- Identify missing fields
- Create task suggestions
- Assign review categories
- Flag caution items
- Update non-sensitive status fields

Automation should not:

- Send high-stakes messages without approval
- Invent missing information
- Change deal status without evidence
- Promise funding, approval, rates, or outcomes
- Expose private data in logs or public files
- Override human reviewer decisions

## Human Review Required

Use human approval before:

- Sending funding-related messages
- Sending business-credit messages
- Updating final qualification status
- Submitting files to providers
- Sending decline language
- Sending legal, tax, or financial guidance
- Escalating sensitive complaints
- Publishing examples based on real CRM records

## Standard CRM Agent Output

```md
## Lead Summary

- Contact:
- Business:
- Source:
- Status:
- Need:
- Known facts:

## Missing Fields

- Missing field 1
- Missing field 2

## Caution Flags

- Flag 1
- Flag 2

## Recommended Status

[CRM stage]

## Suggested Task

[Task owner + action + due date]

## Draft Follow-Up

[Public-safe message]

## Human Review Needed?

Yes / No

## Reason

Explain why review is or is not required.
```

## Related Repo Paths

```text
knowledge-base/crm/
knowledge-base/automation/
schemas/webhook-event.schema.json
examples/automation/
partners.html
team.html
```

## Maintenance Checklist

- [ ] CRM stages are current.
- [ ] Follow-up cadence is reasonable.
- [ ] Human review gates are clear.
- [ ] Private data rules are preserved.
- [ ] Example records are synthetic.
- [ ] Automation boundaries are documented.
