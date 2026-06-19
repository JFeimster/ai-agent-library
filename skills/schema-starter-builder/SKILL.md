# Schema Starter Builder

## Purpose

The **Schema Starter Builder** skill creates starter JSON Schema files for agents, Custom GPTs, static site records, funding products, webhook events, platform packages, portfolio records, knowledge-base indexes, and automation payloads.

Use this skill when a project needs structured, machine-readable definitions that can validate JSON files and keep repo data consistent.

This skill outputs valid JSON Schema. It does not create invalid pseudo-JSON, comments inside JSON, or schemas with trailing commas.

## When To Use

Use this skill when the user asks for:

- JSON Schema
- Data schema
- Validation schema
- Structured data model
- `schema.json`
- Static site data schema
- Agent record schema
- Skill record schema
- Funding product schema
- Webhook event schema
- Portfolio record schema
- Knowledge-base index schema
- Custom GPT metadata schema
- Vercel project schema

Do not use this skill for:

- Full API implementation
- Database migration scripts
- Complex ORM models
- Legal data policies
- Live production validation without engineering review

## Inputs

### Minimum Inputs

```text
Schema name:
Data purpose:
Required fields:
Example record:
```

### Recommended Inputs

```text
File path:
Record type:
Field names:
Field types:
Required fields:
Optional fields:
Enums:
Nested objects:
Arrays:
Validation rules:
Example values:
Related files:
```

### Optional Inputs

```text
Draft JSON record:
Existing data file:
Existing schema:
Platform target:
Public/private data rules:
PII handling:
Version:
Schema ID:
```

## Outputs

This skill can produce:

```text
schemas/[name].schema.json
site-data/[name].json example
validation notes
sample valid record
sample invalid record
```

Primary output:

```text
schemas/[schema-name].schema.json
```

## JSON Schema Rules

All generated schemas must:

- Be valid JSON
- Use double quotes
- Avoid comments
- Avoid trailing commas
- Include `$schema`
- Include `title`
- Include `type`
- Include `properties`
- Include `required`
- Include `additionalProperties`
- Use `description` fields
- Use `enum` where useful
- Use `format` where useful
- Include nested objects where needed
- Include arrays with `items`
- Avoid over-constraining early drafts unless requested

Recommended base:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Example Schema",
  "type": "object",
  "additionalProperties": false,
  "required": ["name", "slug"],
  "properties": {
    "name": {
      "type": "string",
      "description": "Human-readable name."
    },
    "slug": {
      "type": "string",
      "description": "Lowercase kebab-case identifier.",
      "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
    }
  }
}
```

## File / Path Conventions

Schema files should live under:

```text
schemas/
```

Recommended filenames:

```text
schemas/agent.schema.json
schemas/custom-gpt.schema.json
schemas/vercel-project.schema.json
schemas/funding-product.schema.json
schemas/webhook-event.schema.json
schemas/skill.schema.json
schemas/portfolio-record.schema.json
schemas/knowledge-base.schema.json
```

Example data files may live under:

```text
site-data/
knowledge-base/**/index.json
portfolio/**/index.json
skills/skill-index.json
agent-index.json
```

## Workflow

### Step 1 — Identify Data Type

Classify the schema target as one of:

```text
Agent record
Skill record
Custom GPT metadata
Funding product
Webhook event
Vercel project
Portfolio record
Knowledge-base index
Partner resource card
Content brief
Automation workflow
Static site page
```

### Step 2 — Extract Fields

For each field, identify:

- Name
- Type
- Required or optional
- Description
- Example
- Enum values if applicable
- Format if applicable
- Validation pattern if applicable

### Step 3 — Choose JSON Schema Types

Common type mapping:

```text
Text → string
Long text → string
Number → number
Integer → integer
True/false → boolean
List → array
Object/group → object
URL → string with format uri
Date → string with format date
DateTime → string with format date-time
Email → string with format email
Status → string with enum
Tags → array of strings
```

### Step 4 — Add Required Fields

Required fields should include only what every record must have.

Common required fields:

```text
name
slug
category
status
```

Do not require fields that may not exist for early drafts unless the user asks for strict validation.

### Step 5 — Add Enums

Use enums for:

```text
status
priority
visibility
category
platform
environment
event_type
```

Example:

```json
"status": {
  "type": "string",
  "enum": ["idea", "draft", "ready", "in-review", "published", "needs-refresh", "deprecated", "archived"]
}
```

### Step 6 — Add Patterns

Use patterns for slugs and file paths.

Slug pattern:

```json
"pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
```

Markdown file path pattern:

```json
"pattern": "^[A-Za-z0-9_./-]+\\.md$"
```

JSON file path pattern:

```json
"pattern": "^[A-Za-z0-9_./-]+\\.json$"
```

### Step 7 — Add Public/Private Data Rules

For public repo data, schema descriptions should remind maintainers not to include:

```text
API keys
Access tokens
Private keys
Passwords
Webhook secrets
Bank account data
Tax records
Credit reports
Real borrower/customer records
Private provider terms
```

### Step 8 — Add Sample Valid Record

After the schema, provide one valid sample record.

### Step 9 — Add Validation Command

Provide:

```bash
python -m json.tool schemas/example.schema.json > /dev/null
```

For full validation against schema, note that additional tooling may be needed.

## Schema Pattern Examples

### Agent Record Schema Fields

Recommended fields:

```text
name
slug
category
buyer
pain_solved
primary_job
platform
status
priority
tags
file
related_skills
related_knowledge_bases
related_schemas
public_safe_rules
```

### Skill Record Schema Fields

Recommended fields:

```text
name
slug
category
audience
problem_solved
recommended_apps
priority
status
path
related_agents
related_knowledge_bases
```

### Webhook Event Schema Fields

Recommended fields:

```text
event_id
event_type
created_at
source
environment
payload
metadata
```

### Funding Product Schema Fields

Recommended fields:

```text
name
slug
provider
category
funding_type
credit_tier
speed_band
common_fit_factors
required_documents
restricted_claims
disclosure_notes
```

### Portfolio Record Schema Fields

Recommended fields:

```text
name
slug
type
status
url
repo
platform
category
cta
related_agent
related_skill
last_reviewed
```

## Quality Checklist

Before finalizing a schema:

- [ ] File path is correct.
- [ ] JSON is valid.
- [ ] `$schema` is included.
- [ ] `title` is included.
- [ ] `type` is included.
- [ ] `properties` are included.
- [ ] `required` is included.
- [ ] `additionalProperties` is intentional.
- [ ] Field descriptions are clear.
- [ ] Enums are used where helpful.
- [ ] Arrays define `items`.
- [ ] Objects define nested `properties`.
- [ ] URL fields use `format: uri`.
- [ ] Date fields use `format: date` or `date-time`.
- [ ] Slugs use kebab-case pattern.
- [ ] Public/private data notes are included where relevant.
- [ ] Sample valid record is included.
- [ ] Validation command is included.

## Guardrails

This skill must not:

- Output invalid JSON.
- Include comments inside JSON.
- Include trailing commas.
- Use single quotes in JSON.
- Invent live URLs unless provided.
- Include real secrets.
- Include private client data.
- Include actual bank/tax/credit records.
- Over-constrain early schemas without reason.
- Claim schema validation replaces human review.
- Treat schema as legal or compliance approval.

## Public-Safe Language Rules

For schema descriptions involving funding, credit, partner, affiliate, automation, or user data, include descriptions that discourage:

```text
guaranteed approval
guaranteed funding
guaranteed credit outcomes
guaranteed revenue
hidden affiliate relationships
private customer data
secrets
```

Use descriptions such as:

```text
Public-safe description only.
Do not include private data.
Do not include unsupported claims.
Use synthetic examples.
Human review required.
```

## Example Input

```text
Create a schema for a partner resource card.
```

## Example Output

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Partner Resource Card",
  "type": "object",
  "additionalProperties": false,
  "required": ["name", "slug", "type", "audience", "primary_cta"],
  "properties": {
    "name": {
      "type": "string",
      "description": "Human-readable resource name."
    },
    "slug": {
      "type": "string",
      "description": "Lowercase kebab-case identifier.",
      "pattern": "^[a-z0-9]+(?:-[a-z0-9]+)*$"
    },
    "type": {
      "type": "string",
      "enum": ["Custom GPT", "Static Tool", "Funding Resource", "Partner Application", "Knowledge Base", "Prompt Pack"]
    },
    "audience": {
      "type": "string",
      "description": "Specific audience for the resource."
    },
    "problem_solved": {
      "type": "string",
      "description": "Public-safe description of the problem solved."
    },
    "primary_cta": {
      "type": "object",
      "required": ["text", "url"],
      "additionalProperties": false,
      "properties": {
        "text": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri"
        }
      }
    },
    "disclosure_required": {
      "type": "boolean",
      "description": "Whether affiliate, referral, or partner disclosure should be shown."
    },
    "restricted_claims": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Claims that should not be made in public copy."
    }
  }
}
```

## Related Agents

```text
agents/ai-agent-library-builder.md
agents/automation-workflow-spec-agent.md
agents/static-site-page-generator.md
```

## Related Knowledge Bases

```text
knowledge-base/engineering-as-marketing/README.md
knowledge-base/automation/README.md
knowledge-base/partner-enablement/README.md
```

## Related Schemas

```text
schemas/agent.schema.json
schemas/webhook-event.schema.json
schemas/funding-product.schema.json
```

## Done Means

This skill is complete when it can produce schema files that:

- Are valid JSON
- Use clear field descriptions
- Match the intended data file
- Include required and optional fields
- Avoid secrets/private data
- Support validation
- Can be committed under `schemas/`