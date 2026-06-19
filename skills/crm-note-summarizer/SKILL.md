# CRM Note Summarizer

## Purpose

The **CRM Note Summarizer** skill converts messy CRM notes, call notes, email snippets, SMS history, form submissions, and sales updates into structured operational summaries.

Use this skill when a lead, deal, partner referral, funding file, or customer record needs to be cleaned up into known facts, missing information, caution flags, current status, next action, and review notes.

This skill helps reduce “CRM archaeology,” where one poor soul has to dig through twenty notes, three half-sent emails, and a rep’s cryptic “call went good” update like it’s the Dead Sea Scrolls.

This skill does **not** approve funding, make credit decisions, send messages, or replace human review.

## When To Use

Use this skill when the user provides:

- CRM notes
- Call notes
- Sales notes
- Funding lead notes
- Missing document notes
- Email snippets
- SMS snippets
- Intake form responses
- Partner referral notes
- Deal status updates
- Stalled deal context
- Declined-file context
- Renewal notes
- Customer handoff notes

Use it for:

- Lead triage
- Funding intake cleanup
- Missing-docs summaries
- Broker handoffs
- Processor handoffs
- Partner updates
- CRM task creation
- Follow-up draft preparation
- Deal stage review
- Automation payload normalization

Do not use this skill for:

- Final underwriting
- Legal advice
- Tax advice
- Credit repair advice
- Automated approvals
- Automated client messaging without review

## Inputs

### Minimum Inputs

```text
Raw notes:
Record type:
Current stage:
Desired output:
```

### Recommended Inputs

```text
Lead name:
Business name:
Contact name:
CRM stage:
Last contact date:
Source:
Known facts:
Missing items:
Prior messages:
Assigned owner:
Product family:
Urgency:
Desired next action:
```

### Optional Inputs

```text
Email thread:
SMS history:
Call transcript:
Voicemail transcript:
Referral partner:
Deal amount:
Use of funds:
Credit range:
Revenue:
Time in business:
Existing debt:
Documents received:
Documents missing:
Decline reason:
Stall reason:
Renewal date:
```

## Outputs

This skill should produce:

1. Clean CRM Summary
2. Known Facts
3. Missing Information
4. Current Stage
5. Caution Flags
6. Timeline / Last Touch
7. Suggested Next Action
8. Questions to Ask Next
9. Internal Notes
10. Client-Facing Summary
11. CRM Task Note
12. Follow-Up Draft Inputs

## Standard Output Format

```md
# CRM Note Summary

## 1. Record Snapshot

- Lead/contact:
- Business:
- Stage:
- Source:
- Owner:
- Last touch:
- Urgency:
- Product family:

## 2. Known Facts

- Fact 1
- Fact 2
- Fact 3

## 3. Missing Information

- Missing item 1
- Missing item 2
- Missing item 3

## 4. Caution Flags

- Flag 1
- Flag 2

## 5. Timeline

- Date or sequence note:
- Date or sequence note:

## 6. Suggested Next Action

[Next action]

## 7. Questions to Ask Next

- Question 1
- Question 2
- Question 3

## 8. Internal CRM Note

[Short internal note]

## 9. Client-Facing Summary

[Public-safe summary]

## 10. Follow-Up Draft Inputs

- Channel:
- Tone:
- Missing items:
- CTA:
- Review required:
```

## File / Path Conventions

Recommended examples can live under:

```text
examples/crm/
knowledge-base/crm/examples.md
knowledge-base/automation/examples.md
```

Related output may support:

```text
agents/crm-follow-up-drafting-agent.md
skills/crm-note-summarizer/SKILL.md
schemas/webhook-event.schema.json
```

## Workflow

### Step 1 — Identify the Record Type

Classify the record as one of:

```text
New lead
Funding intake
Partner referral
Awaiting documents
Submitted for review
Stalled deal
Declined file
Funded customer
Renewal opportunity
Referral partner update
Customer support note
Internal handoff
```

### Step 2 — Extract Known Facts

Pull out only information actually present in the notes.

Examples:

```text
Business name
Contact name
Revenue
Time in business
Requested amount
Use of funds
Credit range
State
Existing debt
Documents received
Documents missing
Urgency
Last contact
Source
```

Do not invent missing data.

### Step 3 — Separate Facts From Assumptions

Use this distinction:

```text
Known fact: explicitly stated in notes.
Assumption: likely but not confirmed.
Missing: needed but not provided.
```

If something is unclear, mark it as unclear instead of pretending the CRM goblin was well-organized.

### Step 4 — Identify Missing Information

Common missing items:

```text
Business legal name
Monthly revenue
Time in business
Requested amount
Use of funds
Credit range
State
Bank statements
Existing debt details
Payoff letters
Entity documents
Contact permission
Application status
```

### Step 5 — Identify Caution Flags

Possible caution flags:

```text
Conflicting revenue statements
No response after multiple attempts
Missing documents
Open bankruptcy
Tax lien mention
Frequent NSFs
Existing advance stack
Suspended marketplace account
Unclear ownership
Urgency mismatch
Unsupported approval expectation
```

### Step 6 — Determine Current Stage

If stage is unclear, recommend one.

Example:

```text
Current stage appears to be `Awaiting Documents` because the notes repeatedly mention missing bank statements and no submission confirmation.
```

### Step 7 — Create Suggested Next Action

Next action should be specific.

Good:

```text
Request the most recent 3 months of business bank statements and current MCA payoff details before routing for review.
```

Weak:

```text
Follow up.
```

### Step 8 — Create CRM Task Note

Task notes should be short, operational, and safe.

Example:

```text
Follow up with Marcus for 3 months business bank statements and current MCA payoff/balance details. Do not quote terms until documents are reviewed.
```

### Step 9 — Create Client-Facing Summary

Client-facing copy should avoid:

```text
approved
guaranteed
qualified
funding secured
no documents needed
```

Use:

```text
review
next step
missing information
route appropriately
possible options
```

## Status Classification Guide

### New Lead

Use when:

- Lead just entered CRM
- Minimal context exists
- No meaningful contact yet

Next action:

- Confirm basics
- Ask intake questions
- Assign owner

### Awaiting Documents

Use when:

- Application started
- Required documents are missing
- Review cannot continue

Next action:

- Request exact missing documents
- Provide upload/reply path
- Add reminder task

### Stalled Deal

Use when:

- Lead went quiet
- Multiple attempts made
- Missing items remain

Next action:

- Send low-friction reactivation draft
- Ask if timing changed
- Keep tone calm

### Declined File

Use when:

- File was not approved or not viable
- Needs careful language

Next action:

- Summarize known reason if safe
- Offer next readiness step if appropriate
- Avoid blame and guarantees

### Renewal Opportunity

Use when:

- Prior customer may need more capital
- Renewal timing is plausible

Next action:

- Confirm current business status
- Ask whether there is a new use of funds
- Avoid guaranteed renewal language

## Quality Checklist

Before finalizing a CRM note summary:

- [ ] Record type is identified.
- [ ] Known facts are separated from assumptions.
- [ ] Missing information is listed.
- [ ] Current stage is stated.
- [ ] Caution flags are noted.
- [ ] Timeline is summarized.
- [ ] Suggested next action is specific.
- [ ] CRM task note is concise.
- [ ] Client-facing summary is public-safe.
- [ ] Follow-up draft inputs are included.
- [ ] No private data is exposed beyond the provided context.
- [ ] No approval or funding guarantee is made.

## Guardrails

This skill must not:

- Invent facts.
- Invent documents received.
- Invent approval status.
- Invent funding terms.
- Invent lender/provider decisions.
- Guarantee approval.
- Guarantee funding.
- Provide credit repair advice.
- Provide legal, tax, or lending advice.
- Send messages.
- Share private CRM notes in public examples.
- Expose sensitive customer data unnecessarily.
- Treat assumptions as facts.

## Public-Safe Language Rules

Use:

```text
based on the notes
appears to be
needs verification
missing information
next step
review required
possible option
route appropriately
```

Avoid:

```text
approved
guaranteed funding
qualified
funding secured
no documents needed
everyone qualifies
credit fixed
```

## Example Input

```text
Raw notes:
Marcus from ABC Logistics says they do around 95k/mo. Needs 60k for payroll and fuel. Has one MCA, thinks payment is daily but not sure. Credit around 620. Asked for docs last week. No statements yet. He texted today asking if he can still get funded this week. Had some overdrafts last month.

Stage:
Awaiting documents

Desired output:
CRM summary and next action.
```

## Example Output

```md
# CRM Note Summary

## 1. Record Snapshot

- Lead/contact: Marcus
- Business: ABC Logistics
- Stage: Awaiting documents
- Source: Not provided
- Owner: Not provided
- Last touch: Texted today
- Urgency: Wants funding this week
- Product family: Possible working capital review, needs verification

## 2. Known Facts

- Marcus reports approximately $95,000/month in revenue.
- Requested amount is $60,000.
- Use of funds is payroll and fuel.
- One existing MCA is reported.
- Credit range is approximately 620.
- Bank statements have been requested but not received.
- Some overdrafts were reported last month.

## 3. Missing Information

- Most recent 3 months of business bank statements
- Current MCA balance and payment amount
- Average daily balance
- NSF/overdraft pattern across recent statements
- Business state
- Entity details
- Exact document upload status

## 4. Caution Flags

- Existing MCA may affect cash flow.
- Recent overdrafts may create review friction.
- Urgent timing should not override document review.
- Payment details on existing MCA are unclear.

## 5. Timeline

- Docs requested last week.
- No bank statements received yet.
- Marcus texted today asking about same-week funding.

## 6. Suggested Next Action

Request the most recent 3 months of business bank statements and current MCA payoff/payment details before routing the file for review.

## 7. Questions to Ask Next

- Can you send the most recent 3 months of business bank statements?
- What is the current MCA balance and daily/weekly payment?
- Were the overdrafts isolated or recurring?
- Is the requested $60,000 flexible if the file supports a different amount?

## 8. Internal CRM Note

Marcus / ABC Logistics reports $95k monthly revenue and requests $60k for payroll/fuel. Existing MCA and recent overdrafts noted. Awaiting bank statements and MCA payoff/payment details. Do not quote terms until docs are reviewed.

## 9. Client-Facing Summary

Based on what you shared, the next step is to review recent bank statements and current advance details so the file can be routed appropriately. Once those are available, the review can move forward with a clearer picture.

## 10. Follow-Up Draft Inputs

- Channel: SMS and email
- Tone: Friendly and direct
- Missing items: 3 months bank statements, MCA payoff/payment details
- CTA: Reply with docs or upload through secure link
- Review required: Yes
```

## Related Agents

```text
agents/crm-follow-up-drafting-agent.md
agents/funding-pipeline-triage-agent.md
agents/automation-workflow-spec-agent.md
```

## Related Knowledge Bases

```text
knowledge-base/crm/README.md
knowledge-base/funding/README.md
knowledge-base/automation/README.md
```

## Related Schemas

```text
schemas/webhook-event.schema.json
schemas/agent.schema.json
```

## Done Means

This skill is complete when it can convert messy CRM notes into:

- Known facts
- Missing information
- Caution flags
- Stage summary
- Suggested next action
- Internal CRM note
- Public-safe client summary
- Follow-up draft inputs