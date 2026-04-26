# Lead Capture Patterns

## 1. Ungated Result

Best for trust-building.

```text
Form → Full result → Soft CTA
```

Use when:
- Tool is new
- Audience is cold
- You want shares/backlinks
- The output is not sensitive

## 2. Teaser Gate

Best for qualified lead capture.

```text
Form → Preview result → Email gate → Full result
```

Use when:
- Output has high perceived value
- You want list growth
- You can deliver follow-up value

## 3. Pre-Gated Tool

Best for partner/client-only tools.

```text
Email/auth → Form → Full result
```

Use when:
- Tool handles sensitive data
- Tool is for clients/partners
- You want controlled access

## 4. Recommended Lead Fields

Minimum:

```json
{
  "name": "",
  "email": "",
  "company": "",
  "role": "",
  "agentSlug": "",
  "source": "",
  "notes": ""
}
```

Better:

```json
{
  "name": "",
  "email": "",
  "company": "",
  "phone": "",
  "role": "",
  "industry": "",
  "market": "",
  "primaryPain": "",
  "agentSlug": "",
  "utmSource": "",
  "utmMedium": "",
  "utmCampaign": ""
}
```

## 5. Webhook Payload

```json
{
  "event": "agent_lead_created",
  "agentSlug": "local-referral-partner-scout",
  "lead": {
    "name": "",
    "email": "",
    "company": ""
  },
  "input": {},
  "output": {},
  "timestamp": ""
}
```

## 6. Follow-Up Logic

After submission, route users into:

- Email nurture
- CRM task
- Partner onboarding sequence
- Funding intake flow
- Consultation booking
- Related tool recommendation

## 7. Compliance Notes

- Use consent language where needed.
- Do not collect sensitive data unless necessary.
- For funding applicants, avoid asking for bank login data directly.
- For public tools, make it clear that AI output is educational/operational, not legal/financial advice.
