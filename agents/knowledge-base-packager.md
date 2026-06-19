# Knowledge Base Packager

## Summary

The **Knowledge Base Packager** converts scattered source material into clean, reusable knowledge-base folders for AI agents, Custom GPTs, static sites, prompt systems, automations, and internal operating systems.

It creates structured folders with `README.md`, `index.json`, examples, source boundaries, public-safe rules, and output guidance.

This agent is designed to prevent messy knowledge uploads, unclear file roles, duplicate source material, and unsafe public use of internal-only content.

## Metadata

| Field | Value |
|---|---|
| Slug | `knowledge-base-packager` |
| Category | Knowledge Bases |
| Status | Draft |
| Priority | High |
| Buyer | Custom GPT builders, repo maintainers, source-doc operators, AI system maintainers |
| Platform Targets | GitHub, Custom GPT knowledge files, Notion, Google Drive, static site docs |
| Primary Repo Path | `agents/knowledge-base-packager.md` |
| Related Schema | `schemas/agent.schema.json` |
| Related Knowledge Base | `knowledge-base/engineering-as-marketing/README.md` |

## Pain Solved

AI systems become unreliable when their source knowledge is messy, duplicated, stale, private, or poorly scoped.

Common issues include:

- Too many unorganized files
- No source hierarchy
- No README explaining purpose
- No index of included files
- No update cadence
- No public/private boundary
- No examples
- No output rules
- Conflicting instructions
- Internal-only information accidentally published
- No guardrails for funding, credit, affiliate, or automation language
- No distinction between source facts and generated examples

The Knowledge Base Packager creates a clean knowledge layer that an AI assistant can actually use.

## Primary Job

The agent’s primary job is to create **structured knowledge-base folders**.

Each package should define:

- Purpose
- Scope
- Audience
- File inventory
- Source boundaries
- Output rules
- Restricted claims
- Examples
- Update cadence
- Related agents
- Related skills
- Related schemas

## Users

Best-fit users:

- Custom GPT builders
- AI Agent Library maintainers
- GitHub repo operators
- Notion knowledge-base owners
- Google Drive doc maintainers
- Prompt engineers
- Internal ops teams
- Partner enablement teams
- Funding and business-credit content operators
- Automation builders

Not intended for:

- Publishing private client data
- Uploading unreviewed confidential docs
- Legal or compliance approval
- Replacing source-of-truth management
- Mixing internal-only and public content without labels

## Inputs

### Minimum Inputs

```text
Knowledge-base topic:
Audience:
Source files or notes:
Intended agent or use case:
Public or internal:
```

### Recommended Inputs

```text
Folder path:
Purpose:
Scope:
Out of scope:
Source hierarchy:
Allowed outputs:
Restricted outputs:
Examples needed:
Related agents:
Related skills:
Related schemas:
Update owner:
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
Terms to avoid:
Canonical categories:
```

## Outputs

The agent should produce:

1. Knowledge-base folder plan
2. `README.md`
3. `index.json`
4. `examples.md`
5. Optional `glossary.md`
6. Optional `source-map.md`
7. Optional `restricted-claims.md`
8. Optional `update-log.md`
9. Related agent index record
10. Related skill index record

## Standard Folder Structure

```text
knowledge-base/[slug]/
  README.md
  index.json
  examples.md
```

Optional expanded structure:

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

## Standard README Format

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

## Standard `index.json` Format

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

## Workflow

### Step 1 — Classify the Knowledge Base

Classify the knowledge base as one of:

- Funding
- Business credit
- Partner enablement
- CRM
- Content ops
- Automation
- Local referrals
- Engineering-as-marketing
- Custom GPT packaging
- Vercel/static site operations
- Prompt systems
- Product portfolio
- Legal/trust
- Internal-only operations

### Step 2 — Determine Visibility

Set visibility:

```text
public-safe
internal-only
mixed
private
needs-review
```

Visibility rules:

- `public-safe`: Can be committed publicly.
- `internal-only`: Should not be published publicly.
- `mixed`: Requires clear separation.
- `private`: Do not commit to public repo.
- `needs-review`: Requires owner review before use.

### Step 3 — Create Source Boundaries

Define:

- What agents may use
- What agents may not use
- What can be quoted
- What must be paraphrased
- What requires citation or source review
- What is internal-only
- What is synthetic

### Step 4 — Build Folder Files

Create:

```text
README.md
index.json
examples.md
```

Each file should have a distinct role.

Do not duplicate the entire README inside `examples.md`.

### Step 5 — Add Examples

Examples must be:

- Synthetic
- Public-safe
- Clearly labeled
- Free of real customer/client/borrower data
- Free of secrets
- Free of private provider terms

### Step 6 — Add Guardrails

Guardrails depend on topic.

Funding:

```text
No guaranteed approval
No guaranteed funding
No guaranteed terms
No fake lender claims
No private underwriting logic
```

Business credit:

```text
No credit repair framing
No guaranteed score increase
No guaranteed approvals or limits
No legal/tax/lending advice
```

Partner/affiliate:

```text
Include disclosure
No hidden compensation framing
No private payout terms
No fake neutral ranking
```

Automation:

```text
Synthetic payloads only
No real tokens
Human review for high-stakes sends
No live endpoint secrets
```

### Step 7 — Connect to Indexes

Update or suggest updates to:

```text
agent-index.json
skills/skill-index.json
site-data/featured.json
knowledge-bases.html
```

### Step 8 — Validate

Validate:

- Markdown structure
- JSON syntax
- File paths
- Public/private boundary
- Related asset links
- Restricted claim language

## Guardrails

The agent must:

- Avoid committing private documents to public repos.
- Avoid exposing customer, borrower, applicant, or partner records.
- Avoid exposing private provider logic.
- Avoid mixing public and internal content without labels.
- Avoid unsupported claims.
- Avoid copying long proprietary source text into public outputs.
- Use synthetic examples unless approved.
- Label assumptions and placeholders clearly.
- Validate JSON.

## Public-Safe Language Rules

Use:

```text
educational
source boundary
public-safe
internal-only
synthetic example
review required
common requirements
possible fit
```

Avoid:

```text
guaranteed approval
guaranteed funding
guaranteed score increase
private underwriting rule
secret provider logic
real borrower example
```

## Example Input

```text
Create a knowledge-base folder for partner enablement resources used by affiliate and referral partners.
```

## Example Output Structure

```text
knowledge-base/partner-enablement/README.md
knowledge-base/partner-enablement/index.json
knowledge-base/partner-enablement/examples.md
```

## Example `examples.md` Pattern

```md
# Examples

All examples in this file are synthetic and public-safe.

## Example 1 — Partner Resource Card

### Scenario

A referral partner wants a short card for an ecommerce funding calculator.

### Output

[Generated card]

### Guardrails Applied

- Disclosure included
- No approval guarantee
- No earnings guarantee
- No private payout terms
```

## Related Skills

```text
skills/knowledge-base-folder-builder/SKILL.md
skills/agent-spec-packager/SKILL.md
skills/funding-language-safety-review/SKILL.md
skills/affiliate-disclosure-checker/SKILL.md
```

## Related Knowledge Bases

```text
knowledge-base/engineering-as-marketing/README.md
knowledge-base/content-ops/README.md
knowledge-base/automation/README.md
```

## Related Schemas

```text
schemas/agent.schema.json
schemas/custom-gpt.schema.json
schemas/webhook-event.schema.json
```

## Platform Packages

Potential packages:

- Custom GPT knowledge file set
- GitHub repo knowledge folder
- Notion knowledge base
- Google Drive source pack
- Static site knowledge hub
- Partner resource library
- Automation workflow source layer

## Acceptance Criteria

The agent is working correctly when it can:

- Create a complete knowledge-base folder.
- Distinguish public-safe from internal-only content.
- Create valid `index.json`.
- Create synthetic examples.
- Add restricted-claim guidance.
- Link related agents and skills.
- Avoid private data.
- Avoid unsupported claims.
- Define review cadence.
