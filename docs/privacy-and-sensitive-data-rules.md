# Privacy and Sensitive Data Rules

## Purpose

This document defines what private, sensitive, internal-only, and public-safe information means inside the AI Agent Library repo.

Use this document when creating or reviewing:

- agent specs
- skills
- knowledge bases
- prompt chains
- platform packs
- templates
- examples
- schemas
- site data
- static-site pages
- workflow files
- issue/PR templates
- batch handoff files

The goal is to keep the repo reusable without turning it into a storage unit for private records, secrets, or operational shortcuts.

## Core Rule

Do not commit private, sensitive, secret, or regulated information.

Use synthetic examples.

Mark internal-only content clearly.

Sanitize public-facing content.

When unsure, leave it out and ask for review.

## Data Classification

Use these labels when documenting assets.

```text
public-safe
internal-only
mixed
private
needs-review
```

## Public-Safe

`public-safe` means the content can appear in public repo files, static sites, templates, examples, or published documentation.

Public-safe content may include:

- general educational material
- synthetic examples
- public URLs intentionally provided for public use
- repo-relative paths
- high-level process descriptions
- public-safe summaries
- checklists
- templates
- non-sensitive schemas
- non-sensitive metadata
- general operating rules

Public-safe content must not include:

- private data
- secrets
- credential values
- backend bypass paths
- private provider links
- private routing weights
- private customer/client/borrower records
- unsupported guarantee claims

## Internal-Only

`internal-only` means the content may be useful to operators but should not be published publicly without sanitizing.

Internal-only content may include:

- backend routing logic
- private partner instructions
- CRM stage rules
- internal scoring notes
- private provider decision notes
- draft scripts not ready for public use
- internal operating workflows
- non-public business process details

Internal-only content should be:

- clearly labeled
- stored only where appropriate
- excluded from public site data
- removed from public examples
- reviewed before reuse in agent outputs

## Mixed

`mixed` means the asset contains both public-safe and internal-only sections.

Mixed files must clearly separate sections.

Example:

```md
## Public-Safe Summary

[Safe content]

## Internal-Only Notes

[Restricted content]
```

Do not let internal-only content leak into public summaries, metadata, static-site cards, or downloadable examples.

## Private

`private` means the content should not be committed to this repo.

Private content includes:

- real customer/client records
- borrower files
- bank statements
- tax returns
- payroll records
- credit reports
- IDs
- Social Security numbers
- raw CRM exports
- private applications
- private contracts
- private underwriting notes
- real credentials
- live secrets

## Needs Review

`needs-review` means the content might be safe, but a human reviewer must decide before merge or publication.

Use this label when content touches:

- funding qualification
- credit
- legal
- tax
- underwriting
- regulated industries
- privacy-sensitive workflows
- partner/provider routing
- affiliate compensation
- user financial decisions
- operational claims that could be misunderstood

## Sensitive Data That Must Not Be Committed

Do not commit:

```text
API keys
access tokens
OAuth secrets
refresh tokens
webhook secrets
private keys
.env files
credential files
service account files
private customer data
private client data
borrower records
bank statements
tax returns
credit reports
IDs
Social Security numbers
merchant statements
payroll reports
raw CRM exports
private lead lists
private application links
backend provider links
private admin/editor links
internal partner economics
internal routing weights
```

## Blocked File Names

The following files should not appear in the repo:

```text
.env
.env.local
.env.production
.env.development
credentials.json
token.json
client_secret.json
service-account.json
private-key.pem
id_rsa
id_ed25519
```

## Synthetic Example Requirement

Examples must be synthetic unless the source is intentionally public and approved.

Good examples:

```text
Example Owner
Example Services LLC
owner@example.com
555-000-0000
123 Example Street
```

Good JSON:

```json
{
  "name": "Example Owner",
  "email": "owner@example.com",
  "business_name": "Example Services LLC",
  "monthly_revenue": 25000,
  "requested_amount": 50000,
  "use_of_funds": "Inventory"
}
```

Bad examples:

```text
real borrower name
real customer email
real phone number
real CRM export
real statement URL
real tax document
```

## Local Machine Path Rules

Do not commit local machine paths.

Avoid:

```text
C:\Users\Jason\Desktop\file.md
/Users/jason/Desktop/file.md
/home/user/project/file.md
/mnt/data/private-file.pdf
```

Use repo-relative paths:

```text
docs/repo-validation-checklist.md
skills/static-site-page-builder/SKILL.md
templates/platform-packs/vercel-static-site-package.md
```

## Funding and Finance Content Rules

For funding, finance, business credit, affiliate, or lending-related content, use careful language.

Allowed:

```text
educational
planning
readiness
possible fit
compare options
review required
terms vary
approval is not guaranteed
human review recommended
```

Avoid:

```text
guaranteed approval
guaranteed funding
guaranteed credit improvement
guaranteed revenue
guaranteed income
everyone qualifies
no one gets denied
bypass underwriting
secret lender route
```

## Business Credit Content Rules

Avoid credit repair framing unless explicitly reviewed.

Avoid:

```text
fix your credit
erase bad credit
guaranteed credit boost
guaranteed tradeline approval
guaranteed score increase
```

Use:

```text
business credit readiness
setup checklist
common gaps
documentation readiness
vendor account organization
educational next steps
```

## Legal and Tax Content Rules

Do not present legal or tax guidance as final advice.

Use:

```text
review with a qualified professional
educational overview
planning checklist
questions to ask a professional
general considerations
```

Avoid:

```text
this is legal advice
this guarantees compliance
this tax structure is best
you should legally do X
```

## Affiliate and Referral Disclosure Rules

Add disclosure when content includes:

- affiliate links
- referral links
- funding applications
- partner links
- sponsored placements
- compensated recommendations
- monetized CTAs

Example disclosure:

```text
Disclosure: Some links may be affiliate or referral links. We may earn compensation if users choose them. Terms, pricing, approval, and outcomes vary.
```

## Backend Provider Bypass Rules

Do not expose:

- private provider URLs
- backend application links
- internal routing paths
- partner-only intake forms
- internal provider economics
- hidden underwriting notes
- bypass instructions
- private renewal links
- private approval paths

Safe alternative:

```text
Route this lead for internal review before suggesting next steps.
```

Unsafe:

```text
Send this user directly to [private provider link] to bypass review.
```

## Public Site Data Rules

Files in `site-data/` should be public-safe.

Do not include:

- private URLs
- internal-only notes
- private partner economics
- raw provider routing logic
- private application links
- hidden admin links
- unsupported claims
- real customer data

Use public-safe values:

```json
{
  "title": "Funding Readiness Assistant",
  "slug": "funding-readiness-assistant",
  "category": "Funding Ops",
  "visibility": "public-safe",
  "description": "Helps users organize funding readiness details before human review."
}
```

## Knowledge Base Rules

Knowledge-base files must identify visibility.

Use:

```md
## Visibility

```text
public-safe / internal-only / mixed / private / needs-review
```
```

When a knowledge base uses internal source material, add:

```md
## Source Boundaries

This file summarizes internal material. Do not expose internal-only routing logic, provider links, partner economics, or private customer records in public-facing output.
```

## Agent and Skill Rules

Agent specs and skill files should include guardrails.

Recommended guardrail language:

```md
## Guardrails

This agent/skill must not:

- invent facts, files, URLs, or sources
- expose secrets
- expose private data
- expose backend provider bypass paths
- guarantee funding, approval, credit improvement, income, ranking, or traffic
- provide legal, tax, lending, credit repair, medical, or investment advice as final guidance
- skip human review for high-stakes outputs
```

## Prompt Chain Rules

Prompt chains must not instruct agents to:

- scrape private records
- expose hidden provider routes
- bypass human review
- generate fake citations
- invent testimonials
- commit secrets
- deploy without review
- auto-merge risky PRs

Prompt chains should include:

- scope control
- safety review
- validation steps
- stop rules
- human review gates

## Schema and JSON Rules

Schemas and JSON examples must use synthetic values.

Allowed placeholder values:

```text
example.com
owner@example.com
Example Business LLC
REDACTED_API_KEY
YOUR_WEBHOOK_SECRET
null
Unknown
```

Do not include real credentials or private data as examples.

## GitHub Issue and PR Rules

Do not paste sensitive data into:

- issue bodies
- PR bodies
- review comments
- workflow logs
- screenshots
- batch handoff files

When reporting a problem, use location references instead:

```text
Possible private data appears in `path/to/file.md` under the “Example Payload” section.
```

## Screenshots and Images

Before committing or uploading screenshots, check for:

- browser tabs with private URLs
- email addresses
- customer names
- account IDs
- API keys
- admin dashboards
- private Notion/GitHub/Vercel links
- financial data
- document previews

Crop or redact before sharing.

## Review Checklist

Before merge, confirm:

- [ ] No `.env` files
- [ ] No API keys
- [ ] No tokens
- [ ] No OAuth secrets
- [ ] No webhook secrets
- [ ] No private keys
- [ ] No private customer/client/borrower data
- [ ] No sensitive financial documents
- [ ] No private admin/editor links
- [ ] No backend provider bypass paths
- [ ] No internal partner economics in public files
- [ ] No unsafe guarantee claims
- [ ] No fake testimonials
- [ ] No invented URLs
- [ ] Examples are synthetic
- [ ] Visibility is labeled where needed
- [ ] Affiliate/referral disclosures are included where needed

## Remediation Checklist

If sensitive data is found:

- [ ] Stop work on the PR.
- [ ] Notify maintainer privately.
- [ ] Remove sensitive data.
- [ ] Replace with synthetic example.
- [ ] Rotate/revoke exposed credentials if applicable.
- [ ] Review whether git history cleanup is needed.
- [ ] Review workflow logs if applicable.
- [ ] Add a prevention rule if needed.
- [ ] Re-run validation.

## Done Means

Privacy and sensitive-data review is complete when:

- content is classified correctly
- private data is absent
- examples are synthetic
- public-safe language is used
- internal-only content is clearly separated
- secrets are absent
- backend bypass paths are absent
- disclosures are included where relevant
- human review is required for high-stakes content
