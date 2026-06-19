---
name: Repo Maintenance
about: Perform scoped repository hygiene, cleanup, indexing, or maintenance
title: "[Repo Maintenance]: "
labels: repo-maintenance
assignees: ""
---

## Objective

Perform scoped repository maintenance.

Repo maintenance tasks should improve structure, indexing, documentation, safety, validation, or operating discipline without sneaking in new product work like a raccoon wearing a fake mustache.

Use this issue type for:

- Index updates
- Crosslinking
- README cleanup
- Folder organization
- Broken link fixes
- JSON validation fixes
- GitHub template updates
- Safety policy updates
- Naming consistency
- Changelog updates
- Roadmap updates
- Vercel deployment config toggles
- Repo hygiene files
- PR/issue workflow improvements

## Maintenance Task Name

```text
[Task name]
```

## Maintenance Type

Select one:

```text
Index Update
Crosslinking
README Cleanup
Folder Organization
Broken Link Fix
JSON Validation
Schema Validation
GitHub Hygiene
Issue Template Update
PR Template Update
Safety Policy Update
Naming Cleanup
Changelog Update
Roadmap Update
Deployment Config
Vercel Config
Documentation Cleanup
Repo Audit
Other
```

## Proposed Branch

```text
chore/[short-task-slug]
```

## Scope

Create, update, or review:

- [ ] File/path 1
- [ ] File/path 2
- [ ] File/path 3

## Problem

What repo issue does this fix?

```text
[Problem]
```

## Desired Outcome

What should be true after this maintenance task is complete?

```text
[Outcome]
```

## Files To Create

- [ ] `path/to/new-file.md`
- [ ] `path/to/new-file.json`
- [ ] Other: `[path]`

## Files To Update

- [ ] `README.md`
- [ ] `JULES.md`
- [ ] `NEXT_TASK.md`
- [ ] `.github/PULL_REQUEST_TEMPLATE.md`
- [ ] `.github/ISSUE_TEMPLATE/[template].md`
- [ ] `agent-index.json`
- [ ] `skills/skill-index.json`
- [ ] `templates/template-index.json`
- [ ] `knowledge-base/README.md`
- [ ] `schemas/README.md`
- [ ] `vercel.json`
- [ ] Other: `[path]`

## Files To Avoid

Explicitly list files that should not be touched.

```text
[path]
[path]
[path]
```

## Out of Scope

This maintenance task must not include:

- [ ] New agent specs unless explicitly listed
- [ ] New skill files unless explicitly listed
- [ ] New knowledge bases unless explicitly listed
- [ ] New platform packs unless explicitly listed
- [ ] New static-site pages unless explicitly listed
- [ ] Deployment changes unless explicitly listed
- [ ] Large rewrites
- [ ] Unrelated refactors
- [ ] Private customer data
- [ ] Secrets or credentials

## Validation Required

Select applicable validation checks.

- [ ] Markdown reviewed
- [ ] JSON validates
- [ ] YAML front matter validates
- [ ] Links checked
- [ ] File paths checked
- [ ] Index entries match real files
- [ ] No duplicate slugs
- [ ] No broken crosslinks
- [ ] No private data
- [ ] No secrets
- [ ] No unsupported claims
- [ ] Static site loads locally if touched
- [ ] Vercel config reviewed if touched

## JSON Validation Commands

If JSON files are changed, validate locally when possible:

```bash
python -m json.tool agent-index.json
python -m json.tool skills/skill-index.json
python -m json.tool templates/template-index.json
```

Add or modify commands as needed:

```bash
python -m json.tool [path]
```

## Static Site Validation

If static site files are touched:

```bash
python -m http.server 8080
```

Then review:

```text
http://localhost:8080/
```

Check:

- [ ] Homepage loads
- [ ] CSS loads
- [ ] JS loads
- [ ] JSON fetches work
- [ ] Navigation links work
- [ ] Cards render
- [ ] Search/filter works if applicable
- [ ] Mobile layout is acceptable

## Vercel Config Rules

If `vercel.json` is touched:

- [ ] Confirm whether deployment should be enabled or disabled.
- [ ] Do not change deployment behavior accidentally.
- [ ] Preserve security headers unless intentionally revised.
- [ ] Do not add framework/build settings unless required.

Manual deployment toggle pattern:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "git": {
    "deploymentEnabled": false
  }
}
```

Use:

```json
"deploymentEnabled": false
```

when commits should not auto-deploy.

Use:

```json
"deploymentEnabled": true
```

only when automatic Vercel deployments are intentionally re-enabled.

## Safety Review

Confirm:

- [ ] No `.env` files committed
- [ ] No API keys
- [ ] No tokens
- [ ] No OAuth secrets
- [ ] No private client/customer/borrower data
- [ ] No bank statements, tax records, credit reports, or IDs
- [ ] No backend provider bypass paths
- [ ] No unsupported funding/approval/revenue/ranking guarantees
- [ ] No fake testimonials or unverifiable social proof

## Naming Rules

Use lowercase kebab-case for slugs and filenames unless existing conventions require otherwise.

Good:

```text
funding-readiness-assistant.md
partner-enablement-kb
static-site-page-builder
custom-gpt-inventory.md
```

Bad:

```text
Final Doc NEW.md
Jason Stuff
Page1
fundingThing
```

## Crosslink Rules

When adding crosslinks:

- [ ] Link to real files only.
- [ ] Use relative repo paths.
- [ ] Do not invent files.
- [ ] Do not link to private backend pages.
- [ ] Do not expose internal-only resources in public docs.
- [ ] Keep related assets grouped by type.

Preferred format:

```md
## Related Assets

- Agents:
  - `agents/example-agent.md`
- Skills:
  - `skills/example-skill/SKILL.md`
- Knowledge Bases:
  - `knowledge-base/example/README.md`
- Schemas:
  - `schemas/example.schema.json`
```

## Acceptance Criteria

- [ ] Maintenance task is scoped.
- [ ] Only listed files were changed or added.
- [ ] No unrelated feature work included.
- [ ] No unrelated refactors included.
- [ ] Validation checks were completed.
- [ ] JSON/YAML validates if changed.
- [ ] Links and paths are accurate.
- [ ] Safety review passed.
- [ ] PR summary lists changed files.
- [ ] Reviewer can understand why the maintenance was needed.

## PR Summary Requirements

The PR should include:

```md
# PR Summary

## Maintenance Type

[Type]

## What Changed

- Change 1
- Change 2
- Change 3

## Files Changed

```text
[path]
[path]
[path]
```

## Validation

- [ ] Markdown reviewed
- [ ] JSON validates
- [ ] Links checked
- [ ] No secrets
- [ ] No private data
- [ ] No unsupported claims

## Scope Control

- [ ] Only maintenance files were changed.
- [ ] No unrelated product work included.
- [ ] No future issue work included.
```

## Review Notes

Reviewer should check:

- Scope discipline
- File list accuracy
- Naming consistency
- Index validity
- Link validity
- Safety rules
- Deployment behavior if touched
- No repo goblin sprawl
