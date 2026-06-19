# CRM Knowledge Base Examples

These examples are synthetic and public-safe. They show how agents should summarize CRM records, identify missing information, recommend statuses, and draft follow-up messages.

## Example 1 — New Lead Needs Intake

### Scenario

A lead came from a partner link. The CRM has name, phone, email, and a note saying “needs funding ASAP.” No business details are available.

### Known Inputs

- Source: partner link
- Contact info: available
- Need: funding ASAP
- Business details: missing
- Revenue: missing
- Use of funds: missing

### Suggested CRM Agent Output

```md
## Lead Summary

- Contact: Available in CRM
- Business: Missing
- Source: Partner link
- Status: New Lead
- Need: Funding request mentioned, but details are incomplete
- Known facts: Lead requested funding quickly

## Missing Fields

- Business name
- Business type
- Time in business
- Monthly revenue
- Funding amount requested
- Use of funds
- Credit range
- Document availability
- Known caution flags

## Caution Flags

- Urgency is stated but no qualifying details are available

## Recommended Status

Intake Started

## Suggested Task

Owner should send intake request today and confirm basic funding-readiness details.

## Draft Follow-Up

Hi [Name], thanks for reaching out. To understand what options may be relevant, I need a few basics first: business type, time in business, monthly revenue, funding amount requested, use of funds, and whether recent business bank statements are available.

## Human Review Needed?

Yes

## Reason

Funding-related message and lead routing require review before any product fit is suggested.
```

## Example 2 — Missing Documents

### Scenario

A lead provided business details and revenue but has not sent bank statements. The CRM note says “interested, asked for $50k, revenue approx $75k/mo.”

### Suggested CRM Agent Output

```md
## Lead Summary

- Business: Active business
- Status: Missing Documents
- Need: $50,000 working capital request
- Known facts: Approximate revenue is $75,000/month

## Missing Fields

- Business bank statements
- Time in business
- Use of funds
- Existing funding obligations
- Recent NSF activity
- Credit band

## Caution Flags

- Revenue is self-reported and not verified
- Existing obligations are unknown

## Recommended Status

Missing Documents

## Suggested Task

Request most recent 3–6 months of business bank statements and confirm use of funds.

## Draft Follow-Up

Hi [Name], based on what you shared, the next step is to review the recent business bank statements and confirm the use of funds. Please send the most recent 3–6 months of business bank statements when available. Final options depend on file review and provider criteria.

## Human Review Needed?

Yes

## Reason

The message relates to a funding workflow and must avoid implying approval before documentation is reviewed.
```

## Example 3 — Stalled Deal

### Scenario

A lead completed intake and sent documents, but no response has been received for 9 days after options were discussed.

### Suggested CRM Agent Output

```md
## Lead Summary

- Status: Stalled Deal
- Intake: Completed
- Documents: Received
- Options: Previously discussed
- Last contact: 9 days ago

## Missing Fields

- Current interest level
- Decision status
- Any changed business circumstances
- Whether funding need still exists

## Caution Flags

- Stalled communication after options were presented

## Recommended Status

Offer / Options Presented

## Suggested Task

Send low-pressure check-in and update follow-up date.

## Draft Follow-Up

Hi [Name], just checking in to see whether the funding need is still active or if anything has changed. If you are still reviewing options, I can help clarify next steps or update the file if your situation has changed.

## Human Review Needed?

Yes

## Reason

Follow-up references funding options and should remain low-pressure and public-safe.
```

## Example 4 — Declined / Not a Fit

### Scenario

A business requested revenue-based capital but has no current revenue and no business bank statements.

### Suggested CRM Agent Output

```md
## Lead Summary

- Status: Not a Fit
- Requested path: Revenue-based capital
- Revenue: No current business revenue
- Bank statements: Not available

## Missing Fields

- Business revenue history
- Business bank account activity
- Alternative credit or startup-readiness details

## Caution Flags

- No revenue for a revenue-based funding request
- No bank statements available

## Recommended Status

Declined / Not a Fit

## Suggested Task

Send educational readiness response and move to nurture if appropriate.

## Draft Follow-Up

Hi [Name], based on the current information, a revenue-based working-capital review does not look like the right path yet because that type of review typically depends on active business revenue and bank-statement history. A better next step may be to focus on startup-readiness items and revisit once business revenue is established.

## Human Review Needed?

Yes

## Reason

Decline or not-a-fit language should be reviewed before sending.
```
