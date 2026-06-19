# Knowledge Base Folder Builder

## Purpose

The **Knowledge Base Folder Builder** skill creates structured knowledge-base folders for AI agents, Custom GPTs, static sites, prompt systems, automations, and repo-managed documentation.

Use this skill when scattered notes, docs, examples, product details, operating rules, or source material need to become a clean folder with clear purpose, source boundaries, guardrails, examples, and an index.

The skill is designed to prevent messy knowledge uploads, unclear source hierarchy, duplicate files, and accidental publication of internal-only material.

## When To Use

Use this skill when the user asks for:

- A knowledge-base folder
- Custom GPT knowledge files
- Source docs for an agent
- A repo knowledge layer
- A `knowledge-base/[topic]/README.md`
- A `knowledge-base/[topic]/index.json`
- Synthetic examples
- Source boundaries
- Public/private content separation
- Knowledge-base packaging
- A folder to support agents, skills, prompts, schemas, or static pages

Use it for topics such as:

- Funding
- Business credit
- Partner enablement
- CRM
- Automation
- Content ops
- Local referrals
- Engineering-as-marketing
- Platform operations
- Prompt systems
- Portfolio assets
- Legal/trust guidance

Do not use it to:

- Publish private client data
- Publish confidential source documents
- Store secrets
- Store private provider underwriting logic
- Replace legal/compliance review
- Mix public and internal content without labels

## Inputs

### Minimum Inputs

```text
Knowledge-base topic:
Audience:
Purpose:
Public or internal:
Source material:
```

### Recommended Inputs

```text
Folder slug:
Scope:
Out of scope:
Source files:
Allowed outputs:
Restricted outputs:
Examples needed:
Related agents:
Related skills:
Related schemas:
Visibility:
Review owner:
Review cadence:
```

### Optional Inputs

```text
Original source URLs:
Google Drive folder:
Notion page:
Existing repo folder:
Markdown files:
PDFs:
CSV/JSON data:
Private notes:
Public-safe summary:
Restricted claims:
Terms to avoid:
Canonical categories:
```

## Outputs

This skill should produce:

```text
knowledge-base/[slug]/README.md
knowledge-base/[slug]/index.json
knowledge-base/[slug]/examples.md
```

Optional expanded outputs:

```text
knowledge-base/[slug]/glossary.md
knowledge-base/[slug]/source-map.md
knowledge-base/[slug]/restricted-claims.md
knowledge-base/[slug]/update-log.md
```

## Standard Folder Structure

```text
knowledge-base/[slug]/
  README.md
  index.json
  examples.md
```

Expanded folder structure:

```text
knowledge-base/[slug]/
  README.md
  index.json
  examples.md
  glossary.md
  source-map.md
  restricted-claims.md
  update-log.md
```

## Standard `README.md` Structure

```md
# Knowledge Base Name

## Purpose

[What this knowledge base is for.]

## Audience

[Who uses it.]

## Scope

This knowledge base includes:

- Item 1
- Item 2
- Item 3

## Out of Scope

This knowledge base does not include:

- Item 1
- Item 2
- Item 3

## Visibility

Public-safe / internal-only / mixed / private / needs-review

## Source Boundaries

- Public-safe:
- Internal-only:
- Do not publish:
- Requires review:

## How Agents Should Use This

Agents should use this knowledge base to:

- Task 1
- Task 2
- Task 3

Agents should not use this knowledge base to:

- Restricted task 1
- Restricted task 2

## Output Rules

- Rule 1
- Rule 2
- Rule 3

## Restricted Claims

Do not claim:

- Claim 1
- Claim 2
- Claim 3

## Related Agents

- `agents/example-agent.md`

## Related Skills

- `skills/example-skill/SKILL.md`

## Related Schemas

- `schemas/example.schema.json`

## Review Cadence

Review this knowledge base every [timeframe] or when source material changes.
```

## Standard `index.json` Structure

```json
{
  "name": "Knowledge Base Name",
  "slug": "knowledge-base-slug",
  "status": "draft",
  "visibility": "public-safe",
  "audience": [
    "Audience 1",
    "Audience 2"
  ],
  "purpose": "Short purpose statement.",
  "files": [
    {
      "path": "knowledge-base/example/README.md",
      "type": "overview",
      "description": "Main usage guide."
    },
    {
      "path": "knowledge-base/example/examples.md",
      "type": "examples",
      "description": "Synthetic examples."
    }
  ],
  "related_agents": [],
  "related_skills": [],
  "related_schemas": [],
  "review": {
    "owner": "AI Agent Library",
    "cadence": "Quarterly or when source material changes",
    "last_reviewed": null
  }
}
```

## Standard `examples.md` Structure

```md
# Examples

All examples in this file are synthetic and public-safe unless otherwise noted.

## Example 1 — [Scenario Name]

### Scenario

[Short synthetic scenario.]

### Input

[Example input.]

### Output

[Example output.]

### Guardrails Applied

- Guardrail 1
- Guardrail 2
- Guardrail 3

## Example 2 — [Scenario Name]

### Scenario

[Short synthetic scenario.]

### Input

[Example input.]

### Output

[Example output.]

### Guardrails Applied

- Guardrail 1
- Guardrail 2
- Guardrail 3
```

## Visibility Rules

### Public-Safe

Use for content that can be committed to a public repo.

```text
visibility: public-safe
```

Allowed:

- Educational summaries
- Synthetic examples
- Public resource descriptions
- General operating guidance
- Public-safe restricted-claim lists

Not allowed:

- secrets
- private customer data
- borrower files
- bank/tax/credit records
- private provider terms

### Internal-Only

Use for content meant only for internal users.

```text
visibility: internal-only
```

Requires:

- clear label
- no accidental static site linking
- review before publication

### Mixed

Use when some material is public-safe and some is internal-only.

```text
visibility: mixed
```

Requires:

- separate sections
- source boundary notes
- publication warnings

### Private

Use when content should not be committed to a public repo.

```text
visibility: private
```

Do not create public repo files from private content unless the user requests a sanitized version.

### Needs Review

Use when the content may be public-safe but requires review.

```text
visibility: needs-review
```

## Workflow

### Step 1 — Classify the Knowledge Base

Classify topic:

```text
Funding
Business credit
Partner enablement
CRM
Content ops
Automation
Local referrals
Engineering-as-marketing
Custom GPT packaging
Vercel/static site operations
Prompt systems
Product portfolio
Legal/trust
Internal operations
```

### Step 2 — Determine Visibility

Set:

```text
public-safe
internal-only
mixed
private
needs-review
```

### Step 3 — Define Purpose and Audience

Purpose should explain what the knowledge base helps agents do.

Audience should name who benefits from it.

### Step 4 — Define Scope and Out-of-Scope

Scope prevents the knowledge base from becoming too broad.

Example:

```text
Scope:
- Funding readiness language
- Common product-family framing
- Missing-document examples

Out of scope:
- Private underwriting logic
- Provider-specific approval decisions
- Legal advice
```

### Step 5 — Define Source Boundaries

Include:

- What can be used publicly
- What is internal-only
- What must not be published
- What requires owner review

### Step 6 — Define Agent Usage Rules

Specify how agents should and should not use the source.

Example:

```text
Agents may use this to draft funding-readiness summaries.
Agents may not use this to promise approval, terms, or funding speed.
```

### Step 7 — Create Folder Files

Create:

```text
README.md
index.json
examples.md
```

Keep each file distinct:

- `README.md` = usage guide
- `index.json` = machine-readable inventory
- `examples.md` = synthetic examples

### Step 8 — Add Related Assets

Link:

- agents
- skills
- schemas
- examples
- portfolio records
- static pages

### Step 9 — Validate JSON

Run:

```bash
python -m json.tool knowledge-base/[slug]/index.json > /dev/null
```

### Step 10 — Review Public-Safe Language

Search for unsafe claims:

```bash
grep -R "guaranteed approval\|guaranteed funding\|guaranteed credit\|guaranteed revenue\|everyone qualifies\|no documents needed" -n knowledge-base/[slug]
```

These terms are acceptable only inside restricted-claim lists or safety examples.

## Domain Guardrails

### Funding Knowledge Bases

Do not include:

```text
Guaranteed approval
Guaranteed funding
Guaranteed rate
Guaranteed term
Private underwriting logic
Private provider rules
Real borrower data
```

Use:

```text
Possible fit
Review required
Common requirements
Funding-readiness
Documentation may be needed
Provider requirements vary
```

### Business Credit Knowledge Bases

Do not include:

```text
Credit repair advice
Guaranteed score increase
Guaranteed vendor approval
Guaranteed credit limit
Guaranteed funding
```

Use:

```text
Setup readiness
Common gaps
Educational checklist
Provider requirements vary
No outcome guarantee
```

### Partner / Affiliate Knowledge Bases

Do not include:

```text
Hidden compensation
Private payout terms
Guaranteed earnings
Fake neutral rankings
Fake endorsements
```

Use:

```text
Disclosure
Partner relationship
Compensation may be received
Outcomes not guaranteed
```

### Automation Knowledge Bases

Do not include:

```text
Production API keys
Access tokens
Webhook secrets
Real customer payloads
Automatic high-stakes send rules without review
```

Use:

```text
Synthetic payloads
Approval gates
Human review
Environment variables
Failure modes
Manual fallback
```

## Quality Checklist

Before finalizing a knowledge-base folder:

- [ ] Folder slug is lowercase kebab-case.
- [ ] `README.md` exists.
- [ ] `index.json` exists.
- [ ] `examples.md` exists.
- [ ] Purpose is clear.
- [ ] Audience is clear.
- [ ] Scope is defined.
- [ ] Out-of-scope is defined.
- [ ] Visibility is labeled.
- [ ] Source boundaries are included.
- [ ] Output rules are included.
- [ ] Restricted claims are included where relevant.
- [ ] Examples are synthetic.
- [ ] Related agents are linked.
- [ ] Related skills are linked.
- [ ] Related schemas are linked.
- [ ] Review cadence is included.
- [ ] JSON validates.
- [ ] No secrets are included.
- [ ] No private data is included.

## Guardrails

This skill must not:

- Publish private client data.
- Include actual bank statements, tax records, or credit reports.
- Include private provider underwriting rules.
- Include actual API keys or tokens.
- Mix public and internal content without labels.
- Use real borrower/customer examples unless explicitly approved and anonymized.
- Copy large proprietary source text into public files.
- Claim guaranteed outcomes.
- Treat the knowledge base as legal/compliance approval.
- Omit review cadence.

## Example Input

```text
Create a knowledge-base folder for partner enablement resources used by referral partners and affiliate pages.
```

## Example Output Paths

```text
knowledge-base/partner-enablement/README.md
knowledge-base/partner-enablement/index.json
knowledge-base/partner-enablement/examples.md
```

## Example `index.json`

```json
{
  "name": "Partner Enablement Knowledge Base",
  "slug": "partner-enablement",
  "status": "draft",
  "visibility": "public-safe",
  "audience": [
    "Partner managers",
    "Affiliates",
    "Referral partners",
    "Resource directory maintainers"
  ],
  "purpose": "Provides public-safe guidance for partner resource cards, referral CTAs, disclosure language, and restricted claims.",
  "files": [
    {
      "path": "knowledge-base/partner-enablement/README.md",
      "type": "overview",
      "description": "Main usage guide and boundaries."
    },
    {
      "path": "knowledge-base/partner-enablement/examples.md",
      "type": "examples",
      "description": "Synthetic partner resource examples."
    }
  ],
  "related_agents": [
    "agents/partner-resource-card-builder.md",
    "agents/affiliate-disclosure-reviewer.md"
  ],
  "related_skills": [
    "skills/partner-resource-card-builder/SKILL.md",
    "skills/affiliate-disclosure-checker/SKILL.md"
  ],
  "related_schemas": [
    "schemas/agent.schema.json"
  ],
  "review": {
    "owner": "AI Agent Library",
    "cadence": "Quarterly or when partner terms change",
    "last_reviewed": null
  }
}
```

## Related Agents

```text
agents/knowledge-base-packager.md
agents/ai-agent-library-builder.md
agents/partner-resource-card-builder.md
agents/automation-workflow-spec-agent.md
```

## Related Knowledge Bases

```text
knowledge-base/engineering-as-marketing/README.md
knowledge-base/partner-enablement/README.md
knowledge-base/automation/README.md
knowledge-base/content-ops/README.md
```

## Related Schemas

```text
schemas/agent.schema.json
schemas/custom-gpt.schema.json
schemas/webhook-event.schema.json
```

## Done Means

This skill is complete when it can create a knowledge-base folder that:

- Has a clear purpose
- Defines scope and boundaries
- Includes valid `index.json`
- Includes synthetic examples
- Links related assets
- Labels public/private visibility
- Avoids secrets and private data
- Includes review cadence
- Can be committed under `knowledge-base/`