# Engineering-as-Marketing Examples

These examples are synthetic and public-safe. They show how to turn business problems into static tools, calculators, directories, scorecards, and generators.

## Example 1 — Ad Spend Cash-Flow Calculator

### Tool Summary

```md
## Tool Summary

- Tool name: Ad Spend Cash-Flow Calculator
- Audience: Ecommerce operators and paid media teams
- Problem solved: Forecasts whether ad spend creates a short-term cash gap before revenue or payout catches up
- Asset type: Calculator
- Primary CTA: Run the Ad Spend Cash-Flow Calculator
- Secondary CTA: Compare Ecommerce Funding Options
- Risk level: Medium because finance-related language must avoid guaranteed funding or business results

## Required Inputs

- Daily ad spend
- Gross margin
- Average order value
- Conversion rate
- Payout delay
- Starting cash
- Inventory or fulfillment delay
- Forecast window

## Outputs

- Estimated revenue
- Estimated gross profit
- Cash gap timing
- Safe ad spend range
- Payout lag warning
- Suggested next steps

## Logic

The tool estimates cash timing based on ad spend, order value, margin, payout delay, and available starting cash. It should show assumptions clearly.

## Recommended Files

- index.html
- styles.css
- script.js
- README.md
- data/example-scenarios.json

## Page Sections

- Hero
- Calculator interface
- Results
- How it works
- Example scenario
- CTA
- Disclaimer
- FAQ

## Guardrails

- Do not guarantee revenue.
- Do not guarantee funding.
- Do not present projections as financial advice.
- Show assumptions.
- Encourage review before making spend decisions.
```

## Example 2 — Funding Readiness Scorecard

### Tool Summary

```md
## Tool Summary

- Tool name: Funding Readiness Scorecard
- Audience: Small business owners, brokers, referral partners
- Problem solved: Helps organize common readiness factors before a funding review
- Asset type: Scorecard
- Primary CTA: Check funding readiness
- Secondary CTA: View required documents
- Risk level: High because funding claims require careful wording

## Required Inputs

- Time in business
- Monthly revenue
- Bank statement availability
- Use of funds
- Credit band
- Recent NSFs
- Existing obligations
- Documentation readiness

## Outputs

- Readiness score
- Score band
- Missing documents
- Caution flags
- Suggested next step
- Public-safe summary

## Logic

Each answer adds or subtracts points from readiness bands. The score is educational and does not determine approval.

## Recommended Files

- funding-readiness.html
- funding-readiness.css
- funding-readiness.js
- README.md
- schema.json

## Page Sections

- Hero
- Scorecard form
- Results
- Common requirements
- Caution flags
- CTA
- Disclaimer
- FAQ

## Guardrails

- Do not claim approval.
- Do not claim funding.
- Do not call the score a lender decision.
- Use readiness language only.
- Require human review before routing.
```

## Example 3 — Partner Resource Card Generator

### Tool Summary

```md
## Tool Summary

- Tool name: Partner Resource Card Generator
- Audience: Partner managers, affiliates, brokers, referral agents
- Problem solved: Creates public-safe partner resource cards with CTAs, disclosures, and restricted claims
- Asset type: Generator
- Primary CTA: Build resource card
- Secondary CTA: Open partner enablement guide
- Risk level: Medium because partner and affiliate claims require disclosures

## Required Inputs

- Resource name
- Audience
- Problem solved
- Description
- Primary CTA label
- Primary CTA URL
- Secondary CTA label
- Secondary CTA URL
- Disclosure note
- Restricted claims
- Tracking slug

## Outputs

- Markdown resource card
- HTML card snippet
- Disclosure block
- Tracking notes
- Review checklist

## Logic

The generator formats the submitted information into a consistent public-safe resource-card structure.

## Recommended Files

- partner-resource-card-generator.html
- styles.css
- script.js
- README.md

## Page Sections

- Hero
- Generator form
- Output preview
- Copy/download buttons
- Disclosure rules
- Do-not-claim list
- CTA

## Guardrails

- Require disclosure if affiliate or referral compensation may exist.
- Do not allow blank CTA labels.
- Include restricted claims section.
- Keep private payout terms out of public output.
```

## Example 4 — AI Agent Directory

### Tool Summary

```md
## Tool Summary

- Tool name: AI Agent Directory
- Audience: AI builders, business operators, agencies, partner teams
- Problem solved: Helps users browse productized agents by category, buyer, pain solved, platform, and monetization path
- Asset type: Directory
- Primary CTA: Browse agents
- Secondary CTA: Submit an agent
- Risk level: Low to medium depending on agent categories

## Required Inputs

- Agent name
- Category
- Buyer
- Pain solved
- Monetization
- Platform
- File path
- Status
- Tags

## Outputs

- Filterable card catalog
- Search results
- Category pages
- Featured items
- New items
- Contribution path

## Logic

The directory loads a JSON index, renders cards, and supports search and filters in static JavaScript.

## Recommended Files

- agent-catalog.html
- categories.html
- tags.html
- search.html
- site-data/agents.fallback.json
- agent-index.json

## Page Sections

- Hero
- Search/filter toolbar
- Stats
- Cards
- Empty state
- Contribution CTA
- Footer

## Guardrails

- Do not display broken file paths.
- Do not imply every agent is production-ready.
- Show status where available.
- Link to contribution guidelines.
```

## Example 5 — Vercel Deployment Checklist

### Tool Summary

```md
## Tool Summary

- Tool name: Vercel Deployment Checklist
- Audience: Static site builders and repo operators
- Problem solved: Helps operators prepare static site files before pushing or enabling deployment
- Asset type: Checklist
- Primary CTA: Run deployment checklist
- Secondary CTA: View Vercel portfolio
- Risk level: Low

## Required Inputs

- Project name
- Repo path
- Root files
- Environment setting
- Deployment mode
- Primary domain
- Test URL
- Known risks

## Outputs

- Completion checklist
- Missing file warnings
- Deployment notes
- Rollback reminder
- Manual toggle reminder

## Logic

The checklist marks required deployment steps and flags missing information.

## Recommended Files

- deployment-checklist.html
- styles.css
- script.js
- README.md

## Page Sections

- Hero
- Checklist
- Deployment mode notes
- Vercel file rules
- Manual toggle notes
- CTA
- Disclaimer

## Guardrails

- Do not enable auto deployment by accident.
- Document whether deployment is intentionally disabled.
- Avoid editing unrelated Vercel projects.
- Check `vercel.json` before merge.
```
```

Batch 9 will be **Schemas**:

```text id="batch-9-list"
schemas/agent.schema.json
schemas/custom-gpt.schema.json
schemas/vercel-project.schema.json
schemas/funding-product.schema.json
schemas/webhook-event.schema.json
