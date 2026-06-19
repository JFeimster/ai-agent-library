# Security Policy

## Purpose

This document defines the security expectations for the AI Agent Library repository.

The repo is primarily a static, documentation-first library of AI-agent assets, templates, skills, prompt chains, schemas, examples, and operating docs. Even though this repo is not expected to handle production application secrets, it can still accidentally expose sensitive information if contributors are careless.

Security here means keeping the repo free of secrets, private data, backend bypass paths, unsafe public claims, and sensitive operational details.

In plain English: do not turn the repo into a glitter cannon full of API keys. 🔐

## Scope

This policy applies to:

- Markdown files
- JSON files
- YAML files
- HTML/CSS/JS files
- schemas
- examples
- prompt chains
- agent specs
- skill files
- knowledge-base files
- platform packs
- GitHub Actions workflows
- issue templates
- PR templates
- static-site data
- batch handoff files

## Supported Security Expectations

This repository should maintain:

- no committed secrets
- no committed `.env` files
- no private customer/client/borrower data
- no sensitive financial documents
- no backend provider bypass paths
- no private routing logic in public-facing files
- no fake testimonials or unsupported social proof
- no guaranteed funding, approval, credit improvement, income, traffic, ranking, or business outcome claims
- clear separation between public-safe and internal-only content

## Reporting a Security Issue

If you find a security issue, report it privately when possible.

Preferred reporting channels:

1. Use the repository’s private vulnerability reporting feature if enabled.
2. Contact the repository maintainer through an approved private channel.
3. If no private channel is available, open a minimal GitHub issue that does **not** include the secret or sensitive data.

Do not paste secrets, tokens, private records, or exploit details into a public issue.

## What Counts As a Security Issue

Report any of the following:

- API keys
- access tokens
- OAuth client secrets
- refresh tokens
- webhook secrets
- private keys
- service account credentials
- `.env` files
- private customer data
- borrower or client records
- bank statements
- tax records
- credit reports
- Social Security numbers
- government IDs
- raw CRM exports
- private admin/editor URLs
- backend provider bypass paths
- hidden partner routing logic in public files
- public copy with unsafe guarantee claims
- workflows that expose secrets or write unexpectedly
- accidental publication of internal-only material

## What Not To Include In Public Reports

Do not include:

```text
actual API keys
actual tokens
actual secrets
actual private URLs
actual customer/client/borrower records
actual document links
actual financial documents
actual backend provider links
```

Use this pattern instead:

```text
A possible API key appears in [file path] around [line/section].
A private customer record appears in [file path] around [line/section].
A backend provider bypass path appears in [file path] around [line/section].
```

## Blocked Files

The following files should not be committed:

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

If one of these appears in a PR, it should be removed before merge.

## Secret-Like Patterns

Reviewers should watch for:

```text
sk-
ghp_
github_pat_
xoxb-
xoxp-
AIza
AKIA
-----BEGIN PRIVATE KEY-----
client_secret
access_token
refresh_token
webhook_secret
api_key
bearer token
```

Placeholder values are allowed only when clearly synthetic.

Allowed:

```text
REDACTED_API_KEY
YOUR_API_KEY
EXAMPLE_TOKEN
PLACEHOLDER_SECRET
```

Not allowed:

```text
real-looking key strings
live webhook URLs with tokens
copied OAuth credential JSON
actual bearer tokens
```

## Sensitive Data Rules

Do not commit:

- names of real customers unless they are public and intentionally referenced
- private email addresses
- private phone numbers
- borrower records
- business loan applications
- bank statements
- merchant statements
- payroll records
- tax returns
- credit reports
- IDs
- Social Security numbers
- raw CRM exports
- private notes from funding conversations
- private underwriting notes
- private lender/provider routing details

Use synthetic examples.

Good:

```json
{
  "name": "Example Owner",
  "email": "owner@example.com",
  "business_name": "Example Services LLC",
  "requested_amount": 50000
}
```

Bad:

```json
{
  "name": "Real Customer",
  "email": "real.customer@email.com",
  "bank_statement_url": "https://private-file-link"
}
```

## Backend Provider and Bypass Path Rules

Do not expose:

- backend provider application links
- private lender routes
- internal partner economics
- underwriting shortcuts
- bypass instructions
- internal routing weights
- hidden referral systems
- private admin dashboards
- internal broker-only process details in public files

Public-safe phrasing:

```text
A human reviewer should compare available funding options.
This lead may need manual routing review.
Terms, pricing, and approval vary by provider and applicant profile.
```

Unsafe phrasing:

```text
Send this borrower directly to [private provider URL].
Use this secret path to bypass underwriting.
This route guarantees approval.
```

## Public-Safe Claim Rules

Avoid:

```text
guaranteed approval
guaranteed funding
guaranteed credit improvement
guaranteed revenue
guaranteed income
guaranteed ranking
guaranteed traffic
everyone qualifies
no one gets denied
fix your credit
bypass underwriting
secret lender route
```

Use:

```text
educational
planning
readiness
compare options
possible fit
review required
terms vary
approval is not guaranteed
human review recommended
```

## Affiliate and Referral Disclosure

If a file includes affiliate, referral, sponsored, partner, funding application, or monetized CTA links, include a disclosure.

Example:

```text
Disclosure: Some links may be affiliate or referral links. We may earn compensation if users choose them. Terms, pricing, approval, and outcomes vary.
```

Do not imply neutrality if compensation affects placement.

## GitHub Actions Security Rules

GitHub Actions workflows should:

- use minimal permissions
- avoid write permissions unless required
- avoid secrets unless explicitly needed
- avoid printing secrets to logs
- avoid auto-committing files
- avoid external dependencies unless necessary
- use readable failure messages
- be scoped to validation where possible

Recommended default:

```yaml
permissions:
  contents: read
```

Avoid:

```yaml
permissions: write-all
```

unless explicitly justified.

## What To Do If a Secret Is Committed

If a secret, token, private credential, or sensitive record is committed:

1. Stop work on the PR.
2. Notify the maintainer privately.
3. Remove the secret from the active branch.
4. Revoke or rotate the exposed credential.
5. Review whether history cleanup is needed.
6. Check related logs, forks, caches, and deployments where applicable.
7. Add or update guardrails to prevent recurrence.
8. Do not disclose the secret publicly while explaining the incident.

Important: deleting a file from the latest commit is not enough if the secret exists in history. Treat it as exposed.

## What To Do If Private Data Is Committed

If private customer/client/borrower data is committed:

1. Stop work on the PR.
2. Notify the maintainer privately.
3. Remove the data from the branch.
4. Replace examples with synthetic data.
5. Review whether history cleanup is needed.
6. Review whether any disclosure, notification, or legal review is required.
7. Add prevention checks if needed.

## Review Checklist

Before merging any PR, confirm:

- [ ] No `.env` files are included.
- [ ] No API keys are included.
- [ ] No tokens are included.
- [ ] No OAuth secrets are included.
- [ ] No webhook secrets are included.
- [ ] No private keys are included.
- [ ] No private customer/client/borrower data is included.
- [ ] No sensitive financial documents are included.
- [ ] No backend provider bypass paths are included.
- [ ] No unsafe public guarantee claims are included.
- [ ] No fake testimonials or unverifiable social proof are included.
- [ ] Affiliate/referral disclosures are included where needed.
- [ ] Examples are synthetic.
- [ ] GitHub Actions permissions are minimal if workflows changed.

## Maintainer Review Standard

Maintainers should reject or request changes on PRs that:

- expose secrets
- expose private data
- expose backend provider bypass paths
- include unsafe public claims
- change workflow permissions without explanation
- add deployment behavior without approval
- include unrelated changes that make safety review difficult

## Out of Scope

This security policy does not make the repo:

- a regulated data store
- a lending system
- a credit decisioning platform
- a legal, tax, or financial advice system
- a secure vault for credentials
- a place to store private client files

Do not use this repo for those purposes.

## Done Means

Security review is complete when:

- sensitive files are absent
- secret-like strings are reviewed
- examples are synthetic
- private data is absent
- public-safe language passes review
- backend bypass paths are absent
- workflow permissions are appropriate
- any flagged risks are resolved before merge
