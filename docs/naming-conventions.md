# Naming Conventions

## Purpose

This document defines naming conventions for the AI Agent Library repo.

Good names make the repo easier for humans, AI agents, search tools, static sites, indexes, and automation workflows to understand.

Bad names turn the repo into a haunted garage sale. Naming discipline is not cosmetic here — it is infrastructure. 🏷️

## Core Naming Rule

Use clear, descriptive, lowercase kebab-case for slugs, folders, and most filenames.

Preferred pattern:

```text
lowercase-words-separated-by-hyphens
```

Example:

```text
funding-readiness-assistant
static-site-page-builder
chatgpt-gpt-package
partner-resource-card-builder
```

## What Kebab-Case Means

Kebab-case uses:

- lowercase letters
- numbers when needed
- hyphens between words

Allowed:

```text
agent-index
skill-review-checklist
batch-36-trust-safety-naming
platform-pack-template
```

Avoid:

```text
AgentIndex
skill_review_checklist
Skill Review Checklist
Batch 36 Final
batch36TrustSafety
```

## Folder Naming

Use lowercase kebab-case for folders.

Good:

```text
agents/
skills/
knowledge-base/
prompt-chains/
platforms/
site-data/
batch-handoffs/
docs/
templates/platform-packs/
```

Bad:

```text
Agent Specs/
KnowledgeBase/
Prompt Chains/
Jason Stuff/
Final Docs/
```

## File Naming

Use lowercase kebab-case for most Markdown, JSON, YAML, HTML, CSS, and JS files.

Good:

```text
repo-validation-checklist.md
public-safe-language-rules.md
agent-review-checklist.md
skill-index.json
static-site-smoke.yml
```

Bad:

```text
Repo Validation Checklist.md
PublicSafeRules.md
agent_review_checklist.md
Skill Index FINAL.json
newfile.md
```

## Exceptions

Some files should keep conventional names:

```text
README.md
LICENSE
SECURITY.md
CODE_OF_CONDUCT.md
CONTRIBUTING.md
JULES.md
NEXT_TASK.md
SKILL.md
PULL_REQUEST_TEMPLATE.md
```

GitHub issue templates may use lowercase kebab-case:

```text
.github/ISSUE_TEMPLATE/agent-spec.md
.github/ISSUE_TEMPLATE/repo-maintenance.md
.github/ISSUE_TEMPLATE/bug_report.md
```

Existing platform conventions may be preserved when needed.

## Slug Rules

Slugs should be:

- lowercase
- kebab-case
- descriptive
- stable
- unique within their index
- short enough to scan
- specific enough to avoid collisions

Good slugs:

```text
funding-readiness-assistant
static-site-section-library-builder
notion-template-package
repo-file-inventory-auditor
```

Bad slugs:

```text
tool
assistant
thing
new
misc
final
jason
agent1
```

## Agent Naming

Agent display names should be clear and user-facing.

Good display names:

```text
Funding Readiness Assistant
Static Site Page Generator
Portfolio Inventory Normalizer
Prompt Chain Sequencer
```

Good file paths:

```text
agents/funding-readiness-assistant.md
agents/static-site-page-generator.md
agents/portfolio-inventory-normalizer.md
agents/prompt-chain-sequencer.md
```

Avoid:

```text
agents/assistant.md
agents/new-agent.md
agents/jason-agent-final.md
agents/agent1.md
```

## Skill Naming

Skill folders should describe the reusable capability.

Good:

```text
skills/static-site-page-builder/SKILL.md
skills/content-brief-builder/SKILL.md
skills/crm-note-summarizer/SKILL.md
skills/repo-file-inventory-auditor/SKILL.md
```

Avoid:

```text
skills/builder/SKILL.md
skills/misc/SKILL.md
skills/content/SKILL.md
skills/final/SKILL.md
```

Skill names should use title case in the H1.

Example:

```md
# Static Site Page Builder
```

## Knowledge Base Naming

Knowledge-base folders should name the topic.

Good:

```text
knowledge-base/funding-readiness/
knowledge-base/business-credit/
knowledge-base/partner-enablement/
knowledge-base/public-safe-language/
```

Avoid:

```text
knowledge-base/docs/
knowledge-base/stuff/
knowledge-base/new/
knowledge-base/info/
```

## Template Naming

Template files should describe the asset they help create.

Good:

```text
templates/agent-spec-template.md
templates/skill-template.md
templates/public-template-publishing-standards.md
templates/platform-packs/n8n-workflow-package.md
```

Avoid:

```text
templates/template.md
templates/new-template.md
templates/jason-final.md
templates/misc.md
```

## Platform Naming

Platform folder names should be recognizable and stable.

Good:

```text
platforms/chatgpt-gpts/
platforms/vercel/
platforms/github/
platforms/notion/
platforms/claude-projects/
platforms/gemini-gems/
platforms/n8n/
```

Avoid:

```text
platforms/ai/
platforms/stuff/
platforms/apps/
platforms/new-platform/
```

## Schema Naming

Schema files should end with:

```text
.schema.json
```

Good:

```text
schemas/agent.schema.json
schemas/skill.schema.json
schemas/template.schema.json
schemas/platform-asset.schema.json
schemas/registry-record.schema.json
```

Avoid:

```text
schemas/agent.json
schemas/schema1.json
schemas/new.json
schemas/final-schema.json
```

## Registry Naming

Registry files should describe the records they contain.

Good:

```text
registry/asset-registry-template.json
registry/agent-registry.json
registry/skill-registry.json
registry/platform-registry.json
```

Avoid:

```text
registry/data.json
registry/stuff.json
registry/final.json
```

## Site Data Naming

Use plural nouns for grouped public data.

Good:

```text
site-data/navigation.json
site-data/featured-assets.json
site-data/categories.json
site-data/tags.json
site-data/agents.json
site-data/skills.json
```

Avoid:

```text
site-data/navFinal.json
site-data/data.json
site-data/newstuff.json
site-data/siteData.json
```

## Example Naming

Example folders should be category-based.

Good:

```text
examples/funding/
examples/partner-enablement/
examples/content-ops/
examples/automation/
examples/static-sites/
examples/prompt-systems/
examples/platform-packs/
```

Example files should describe the scenario.

Good:

```text
examples/funding/funding-readiness-summary.example.md
examples/automation/lead-intake-payload.example.json
examples/static-sites/agent-directory-card.example.html
```

## Branch Naming

Use lowercase kebab-case with a prefix.

Recommended prefixes:

```text
feature/
docs/
fix/
chore/
batch-
repair/
```

Good:

```text
feature/agent-index-layer
docs/naming-conventions
fix/template-index-json
chore/update-next-task
batch-36-trust-safety-naming
repair/pr18-static-site-links
```

Bad:

```text
NewBranch
JasonFix
final
batch36
stuff
```

## Commit Message Naming

Use clear imperative commit messages.

Good:

```text
Add trust and safety docs
Add naming conventions
Fix template index JSON
Update NEXT_TASK for Batch 37
```

Bad:

```text
stuff
changes
misc
oops
final final
work
```

## PR Title Naming

Use a clear title with the type or batch.

Good:

```text
Batch 36 — Add trust, safety, and naming docs
[Skill]: Add CRM note summarizer
[Repo Maintenance]: Normalize template index slugs
[Bug]: Fix broken navigation data path
```

Bad:

```text
updates
new stuff
fixed things
batch
final
```

## Issue Title Naming

Use the issue templates and prefixes.

Good:

```text
[Agent Spec]: Add Funding Readiness Assistant
[Skill]: Add Repo File Inventory Auditor
[Knowledge Base]: Add Public-Safe Language Rules
[Platform Pack]: Add Vercel Static Site Package
[Repo Maintenance]: Validate JSON indexes
```

Bad:

```text
do this
fix repo
stuff
new files
help
```

## JSON Key Naming

Use snake_case for JSON keys unless an external schema requires otherwise.

Good:

```json
{
  "name": "Example Asset",
  "slug": "example-asset",
  "primary_job": "Create a reusable asset record.",
  "repo_path": "templates/example.md",
  "related_assets": []
}
```

Avoid inconsistent keys:

```json
{
  "Name": "Example Asset",
  "assetSlug": "example-asset",
  "primary-job": "Create a reusable asset record.",
  "Repo Path": "templates/example.md"
}
```

## JSON Value Naming

For slugs and IDs in JSON values, use lowercase kebab-case.

Good:

```json
{
  "slug": "static-site-page-builder",
  "category": "static-sites",
  "tags": ["agent-builder", "static-site", "template"]
}
```

Avoid:

```json
{
  "slug": "Static Site Page Builder",
  "category": "StaticSites",
  "tags": ["Agent Builder", "StaticSite"]
}
```

## Markdown Heading Naming

Use clear headings.

Good:

```md
# Static Site Page Builder

## Purpose

## When To Use

## Inputs

## Procedure

## Guardrails

## Done Means
```

Avoid vague headings:

```md
# Stuff

## Info

## Things

## More

## Final
```

## CTA Naming

CTA labels should be clear and action-oriented.

Good:

```text
Run the Calculator
Compare Funding Options
Download the Template
View the Agent Spec
Open the Checklist
```

Avoid:

```text
Click Here
Learn More
Submit
Go
More
```

## URL and Link Text Naming

Use descriptive link text.

Good:

```md
[Repo Validation Checklist](docs/repo-validation-checklist.md)
[Skill Index](skills/skill-index.json)
```

Avoid:

```md
[click here](docs/repo-validation-checklist.md)
[this](skills/skill-index.json)
```

## Batch Naming

Batch titles should include the batch number and scope.

Good:

```text
Batch 36 — Trust, Safety, and Naming Docs
Batch 40 — Skills Library Index Layer
Batch 50 — Repo Audit + Launch Readiness
```

Batch branch:

```text
batch-36-trust-safety-naming
```

Batch handoff:

```text
batch-handoffs/batch-36-files.md
```

## Version Naming

Use semantic versions where versioning is needed.

Good:

```text
0.1.0
1.0.0
1.2.3
```

Avoid:

```text
final
final2
vLatest
newest
```

## Date Naming

Use ISO-style dates for dated files when needed.

Good:

```text
2026-06-19-repo-audit.md
2026-06-19-launch-notes.md
```

Avoid:

```text
6-19 notes.md
June notes final.md
today.md
```

## Asset File Naming

For images and downloadable files, use descriptive lowercase names.

Good:

```text
assets/images/agent-directory-hero-1920x1080.png
assets/images/funding-readiness-card-1280x640.png
downloads/funding-readiness-checklist.pdf
```

Avoid:

```text
image.png
final-banner.png
newpic.png
Jason 1.png
```

## Avoid These Words In Filenames

Avoid vague or temporary words:

```text
final
final-final
new
copy
copy-2
latest
updated
misc
stuff
things
old
test
temp
backup
```

Allowed only when the file is clearly a test fixture or archive and placed accordingly.

## Rename Checklist

Before renaming a file or folder:

- [ ] Search for existing links to the old path.
- [ ] Update indexes.
- [ ] Update Markdown links.
- [ ] Update JSON `path` fields.
- [ ] Update site-data references.
- [ ] Update related docs.
- [ ] Confirm static site paths still work if relevant.
- [ ] Avoid renaming unrelated files.

## Naming Review Checklist

Before merge, confirm:

- [ ] New folders use lowercase kebab-case.
- [ ] New files use lowercase kebab-case unless conventional.
- [ ] Slugs are lowercase kebab-case.
- [ ] Branch name is clear.
- [ ] PR title is specific.
- [ ] Commit message is clear.
- [ ] JSON keys are consistent.
- [ ] File paths match repo conventions.
- [ ] No temporary names are included.
- [ ] No duplicate slugs exist.
- [ ] Links were updated after renames.

## Good Naming Examples

```text
agents/funding-readiness-assistant.md
skills/crm-note-summarizer/SKILL.md
knowledge-base/business-credit/README.md
templates/platform-packs/chatgpt-gpt-package.md
platforms/vercel/README.md
schemas/platform-asset.schema.json
registry/asset-registry-template.json
site-data/featured-assets.json
examples/automation/lead-intake-payload.example.json
docs/repo-validation-checklist.md
```

## Bad Naming Examples

```text
agents/assistant.md
skills/new/SKILL.md
knowledge-base/info/README.md
templates/template-final.md
platforms/apps/README.md
schemas/schema.json
registry/data.json
site-data/newstuff.json
examples/test.json
docs/Jason Notes Final.md
```

## Done Means

Naming is complete when:

- paths are predictable
- slugs are stable
- files are easy to find
- indexes match actual files
- links are updated
- names describe the asset’s job
- temporary names are gone
- future agents can understand the repo without needing a treasure map
