# Phase 4 — Platform Layer

## Purpose

Turn AI Agent Library into a cross-platform agent operating system.

Phase 4 connects the static library, repo structure, schemas, prompt systems, portfolio assets, and knowledge bases to real deployment platforms and agent packaging workflows.

## Strategic Goal

Create a repeatable system for converting one agent or skill into multiple deployable formats:

```text
Agent idea
→ Agent spec
→ Skill dependencies
→ Knowledge-base files
→ Schema package
→ Prompt system
→ Static page
→ Custom GPT
→ Gemini Gem
→ Vercel app
→ Automation workflow
→ Partner resource
→ Portfolio item
```

## Success Criteria

Phase 4 is complete when:

- [ ] Agent specs can be converted into Custom GPT packages.
- [ ] Agent specs can be converted into Gemini Gem instructions.
- [ ] Agent specs can support Vercel static pages.
- [ ] Skills can generate reusable `SKILL.md` packages.
- [ ] Knowledge bases are mapped to agent outputs.
- [ ] Schemas validate core asset types.
- [ ] Webhook event patterns exist for automation.
- [ ] Portfolio folders track deployed assets.
- [ ] Platform-specific README files exist.
- [ ] Each platform has clear public-safe and data-use rules.

## Platform Targets

### ChatGPT / Custom GPTs

Primary purpose:

- Productized assistants
- Knowledge-file-based workflows
- Guided outputs
- Public or link-only assistant access
- GPT-specific instructions and conversation starters

Primary files:

```text
portfolio/custom-gpts/
schemas/custom-gpt.schema.json
agents/
knowledge-base/
```

Package contents:

- GPT name
- One-sentence description
- Who it is for
- Main pain solved
- Best outcome
- Instructions
- Conversation starters
- Knowledge files
- Actions if applicable
- Safety notes
- Do-not-claim list
- CTA and access URL

### Gemini Gems

Primary purpose:

- Lightweight assistant packaging
- Short instruction-based helpers
- Fast cross-platform assistant reuse

Primary files:

```text
portfolio/gemini-gems/
platforms.html
agents/
```

Package contents:

- Gem name
- Short instructions
- Audience
- Use case
- Example prompts
- Restrictions
- Source agent link
- Status

### Vercel Static Sites

Primary purpose:

- Public directories
- Landing pages
- Calculators
- Scorecards
- Prompt generators
- Resource hubs
- Partner pages
- Static documentation

Primary files:

```text
portfolio/vercel/
schemas/vercel-project.schema.json
index.html
styles.css
script.js
```

Package contents:

- Project name
- Repo source
- Production URL
- Deployment mode
- Root files
- Data files
- Environment variables if needed
- CTA strategy
- Legal/trust links
- Deployment control notes

### n8n / Workflow Automation

Primary purpose:

- Webhook workflows
- CRM syncs
- Email draft workflows
- Partner attribution
- Approval queues
- Data routing
- Content workflow automation

Primary files:

```text
knowledge-base/automation/
schemas/webhook-event.schema.json
examples/automation/
```

Package contents:

- Trigger
- Inputs
- Steps
- Outputs
- Auth model
- Human review gates
- Failure handling
- Example payload
- Data policy notes

### Notion

Primary purpose:

- Source-of-truth docs
- Asset databases
- Content calendars
- Partner tracking
- Roadmaps
- Execution queues
- Agent inventory

Primary files:

```text
knowledge-base/
portfolio/
roadmap/
```

Package contents:

- Database fields
- Page templates
- Status views
- Contributor workflow
- Review workflow
- Source links
- Update cadence

### GitHub / Codex / Jules-Style Execution

Primary purpose:

- Repo-managed implementation
- Issues
- Branches
- PRs
- Reviews
- File generation
- Schema validation
- Static site updates

Primary files:

```text
roadmap/
schemas/
examples/
.github/
README.md
```

Package contents:

- Issue prompt
- Branch name
- File list
- Acceptance criteria
- Validation steps
- PR summary
- Review checklist
- Merge notes

## Platform Conversion Matrix

| Source Asset | Custom GPT | Gemini Gem | Vercel Site | n8n Workflow | Notion | GitHub |
|---|---|---|---|---|---|---|
| Agent spec | Instructions + starters | Short Gem instructions | Landing page | Workflow steps | Database record | Markdown file |
| Skill spec | GPT capability rules | Gem workflow | Generator page | Reusable node pattern | Skill database row | `SKILL.md` |
| Knowledge base | Knowledge file | Source summary | Public resource page | Data rules | Source page | `knowledge-base/` |
| Schema | Action schema support | Field guidance | Data validation | Payload validation | Database property map | JSON schema |
| Example | Few-shot examples | Sample prompts | Use-case card | Test payload | Example page | `examples/` |
| Partner resource | GPT referral output | Gem prompt | Partner page | Attribution event | Partner DB row | Markdown card |

## Platform Package Standards

### Package README

Every platform package should include:

```md
# [Platform Package Name]

## Purpose

What this package does.

## Source Assets

- Agent spec:
- Skills:
- Knowledge base:
- Schemas:
- Examples:

## Target Platform

[Custom GPT / Gemini Gem / Vercel / n8n / Notion / GitHub]

## Files

- File 1
- File 2

## Setup Steps

1. Step one
2. Step two
3. Step three

## Public-Safe Rules

- Rule 1
- Rule 2

## Validation

- [ ] Validation item
- [ ] Validation item

## Maintenance

Review cadence and owner.
```

### Platform Metadata

Recommended metadata fields:

```json
{
  "asset_name": "Example Agent",
  "platform": "ChatGPT Custom GPT",
  "source_agent": "agents/example-agent.md",
  "source_skills": [
    "skills/example-skill/SKILL.md"
  ],
  "knowledge_sources": [
    "knowledge-base/example/README.md"
  ],
  "schemas": [
    "schemas/agent.schema.json"
  ],
  "status": "draft",
  "public_safe": true,
  "last_reviewed_at": "2026-06-18"
}
```

## Automation and Actions Strategy

Separate workflows by authentication model.

### No-Auth

Use for:

- Local static tools
- Browser-only generators
- Prompt builders
- Scorecards
- Copy/download utilities
- Search and filter pages

### API-Key

Use for:

- Backend proxy calls
- Controlled integrations
- Server-side enrichment
- Private data sync
- Draft creation

### OAuth

Use for:

- User-authorized actions
- Google Workspace
- Notion
- HubSpot
- Slack
- Calendar
- Drive
- Gmail

## Human Review Rules

Human review should be required when platform actions involve:

- Sending emails or SMS
- Updating CRM records
- Publishing public claims
- Handling funding workflows
- Handling business-credit workflows
- Editing legal/trust pages
- Uploading knowledge files
- Submitting files to providers
- Triggering payment or contract actions
- Using private customer data
- Acting on uncertain or missing inputs

## Platform-Layer Public-Safe Rules

Platform packages must not:

- Expose API keys
- Expose webhook secrets
- Expose private tokens
- Expose private client records
- Expose confidential provider logic
- Make guaranteed funding claims
- Make guaranteed credit claims
- Make guaranteed ranking or revenue claims
- Present synthetic examples as real outcomes
- Publish legal/trust pages without review

## Recommended GitHub Issue

```md
# Phase 4 — Platform Layer

## Goal

Create cross-platform packaging systems for Custom GPTs, Gemini Gems, Vercel static sites, n8n workflows, Notion databases, and GitHub execution workflows.

## Deliverables

- [ ] Custom GPT package standard
- [ ] Gemini Gem package standard
- [ ] Vercel static project package standard
- [ ] n8n/webhook workflow standard
- [ ] Notion asset database mapping
- [ ] GitHub execution prompt standard
- [ ] Platform conversion matrix
- [ ] Platform metadata files
- [ ] Human review rules
- [ ] Data and secret handling rules

## Acceptance Criteria

- [ ] Each platform target has a README standard.
- [ ] Agent specs can map to platform packages.
- [ ] Schemas support core asset types.
- [ ] Public-safe and data rules are included.
- [ ] No secrets or private data are included.
```

## Recommended PR Title

```text
Add cross-platform agent packaging layer
```

## Recommended PR Summary

```md
## Summary

Adds the platform-layer roadmap and package standards for converting AI Agent Library assets into Custom GPTs, Gemini Gems, Vercel sites, n8n workflows, Notion systems, and GitHub execution workflows.

## Included

- Platform target definitions
- Conversion matrix
- Package README standard
- Metadata model
- Automation/auth strategy
- Human review rules
- Public-safe platform rules

## Validation

- Platform package requirements are documented.
- Public-safe rules are included.
- Secret-handling rules are clear.
- Cross-platform conversion paths are defined.
```

## Phase 4 Risks

| Risk | Mitigation |
|---|---|
| Platform packages drift from source agent specs | Maintain source asset references |
| Secrets leak into repo files | Use strict data policy and environment variables |
| GPT and static site versions diverge | Track both in portfolio metadata |
| Automation acts without approval | Require human review gates |
| Platform rules change | Add review cadence and status fields |
| Overengineering slows shipping | Keep no-auth/static-first as default |

## Phase 4 Done Means

AI Agent Library becomes a reusable operating system for packaging agents, skills, prompts, knowledge bases, schemas, examples, and tools across multiple AI and deployment platforms while preserving repo discipline, public-safe language, and reviewable workflows.
```

Batch 11 will be **Examples Folder Files**:

```text id="batch-11-list"
examples/funding/README.md
examples/funding/example-001.md

examples/partner-enablement/README.md
examples/partner-enablement/example-001.md

examples/content-ops/README.md
examples/content-ops/example-001.md

examples/automation/README.md
examples/automation/example-001.md
