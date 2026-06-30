# GitHub Workflows

## Purpose

This document explains the GitHub Actions workflows used by the AI Agent Library repo.

The workflows are lightweight guardrails for a static-first, documentation-heavy repository. They are designed to catch common repo problems before merge:

- invalid JSON
- broken internal links
- broken static-site paths
- Markdown hygiene issues
- accidental secrets
- private data references
- unsafe public claims

They are not a replacement for human review. They are a tripwire system, not a magic compliance goblin. 🧯

## Workflow Inventory

| Workflow | File | Purpose |
|---|---|---|
| Validate JSON | `.github/workflows/validate-json.yml` | Validates JSON syntax and basic index hygiene |
| Link Check | `.github/workflows/link-check.yml` | Checks internal Markdown/HTML/CSS/JS/JSON references |
| Static Site Smoke Test | `.github/workflows/static-site-smoke.yml` | Starts a local static server and checks pages/assets |
| Markdown Hygiene | `.github/workflows/markdown-hygiene.yml` | Reviews Markdown formatting, sections, and obvious issues |
| No Secrets Safety | `.github/workflows/no-secrets-safety.yml` | Scans for secrets, private data references, and unsafe claims |

## Workflow Philosophy

The repo should stay:

- static-first
- documentation-first
- public-safe
- reviewable
- easy for Jules/Codex/ChatGPT to operate
- free of accidental secrets
- free of private client data
- free of unsupported claims

The workflows enforce that direction without requiring a heavy build system.

## Trigger Rules

Most workflows run on:

```yaml
pull_request
push:
  branches:
    - main
workflow_dispatch
```

Pull request runs protect merge quality.

Main-branch runs catch problems after merge.

Manual runs support audit/review work.

## Workflow: Validate JSON

File:

```text
.github/workflows/validate-json.yml
```

Checks:

- JSON syntax
- UTF-8 readability
- empty JSON files
- duplicate slugs in common indexes
- lowercase kebab-case slugs
- referenced paths in index-like files

Common files checked:

```text
agent-index.json
skills/skill-index.json
templates/template-index.json
schemas/schema-index.json
site-data/*.json
data/*.json
knowledge-base/**/index.json
```

Use this workflow when changing:

- agent indexes
- skill indexes
- template indexes
- site data
- registry files
- schema indexes
- knowledge-base indexes

Local validation:

```bash
python -m json.tool agent-index.json
python -m json.tool skills/skill-index.json
python -m json.tool templates/template-index.json
```

## Workflow: Link Check

File:

```text
.github/workflows/link-check.yml
```

Checks local references in:

- Markdown links
- HTML `href` and `src`
- CSS `url(...)`
- JavaScript `fetch(...)`
- JSON `path`, `url`, `href`, `src`, `repo_path`, and related fields

It ignores external URLs such as:

```text
https://
http://
mailto:
tel:
sms:
```

It is primarily intended to prevent broken repo-relative paths.

Use this workflow when changing:

- docs
- site pages
- navigation
- indexes
- JSON data
- CSS asset references
- JS fetch paths

## Workflow: Static Site Smoke Test

File:

```text
.github/workflows/static-site-smoke.yml
```

Checks:

- whether a static site root exists
- homepage loading
- linked local pages
- common CSS/JS/image assets
- basic metadata warnings
- common public JSON files

Supported static roots:

```text
./index.html
site/index.html
```

The workflow starts:

```bash
python -m http.server 8080
```

Then tests pages from:

```text
http://127.0.0.1:8080/
```

Use this workflow when changing:

- `index.html`
- page HTML files
- `styles.css`
- `script.js`
- public JSON data
- static assets
- site navigation

## Workflow: Markdown Hygiene

File:

```text
.github/workflows/markdown-hygiene.yml
```

Checks:

- UTF-8 readability
- newline at EOF
- trailing whitespace
- tab characters
- missing H1 warning
- multiple H1 warning
- unclosed fenced code blocks
- obvious placeholder language
- local machine paths
- possible secret-like strings
- unsafe public claims

It also recommends expected sections for common folders.

For example, skill files should usually include:

```text
Purpose
When To Use
Inputs
Procedure
Guardrails
```

Agent specs should usually include:

```text
Purpose
Audience
Inputs
Workflow
Guardrails
```

Use this workflow when changing:

- agent specs
- skill files
- platform packs
- knowledge-base files
- templates
- docs

## Workflow: No Secrets Safety

File:

```text
.github/workflows/no-secrets-safety.yml
```

Checks for:

- blocked filenames
- common API key patterns
- OAuth/client secrets
- webhook secrets
- GitHub tokens
- Slack tokens
- Google API keys
- AWS access keys
- private key blocks
- local machine paths
- private-data phrases
- unsafe funding/approval/revenue/ranking claims

Blocked filenames include:

```text
.env
.env.local
.env.production
credentials.json
token.json
client_secret.json
service-account.json
private-key.pem
id_rsa
id_ed25519
```

This workflow is intentionally conservative. It may flag false positives. Treat the flag as a review signal, not an accusation from a tiny YAML police officer.

## Expected PR Behavior

A normal PR should pass:

- JSON validation if JSON changed
- link check if docs/site/data changed
- static site smoke test if site files changed
- Markdown hygiene if Markdown changed
- no-secrets safety on all changed text files

If a workflow fails, the PR should not be merged until one of these is true:

1. The issue is fixed.
2. The warning is confirmed as a false positive.
3. The workflow itself is corrected.
4. A human reviewer explicitly accepts the risk.

## Local Validation Commands

### JSON

```bash
python -m json.tool agent-index.json
python -m json.tool skills/skill-index.json
python -m json.tool templates/template-index.json
```

### Static Site

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

If the site lives under `/site`:

```bash
cd site
python -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

### Search For Possible Secrets

```bash
grep -R "sk-" .
grep -R "ghp_" .
grep -R "github_pat_" .
grep -R "client_secret" .
grep -R "api_key" .
```

## Review Guidance

Do not treat green checks as automatic approval.

Reviewers should still check:

- scope discipline
- linked issue alignment
- changed files
- public-safe language
- path consistency
- missing files
- accidental deletions
- deployment behavior
- affiliate/referral disclosures
- funding/credit/finance claim safety

## Common Failure Fixes

### Invalid JSON

Run:

```bash
python -m json.tool path/to/file.json
```

Fix:

- missing comma
- trailing comma
- unquoted key
- invalid string escape
- duplicate/confusing records

### Broken Internal Link

Check whether the target exists.

Preferred links:

```md
[Skill Index](../skills/skill-index.json)
```

Avoid links to planned-but-missing files unless clearly marked as planned.

### Static Site Asset Failure

Check:

- root path
- relative path
- file location
- capitalization
- deployment root

Example:

```html
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>
```

### Secret Scan Failure

Remove the secret.

If it is only a placeholder, make the placeholder explicit:

```text
REDACTED_API_KEY
YOUR_API_KEY
EXAMPLE_TOKEN
```

Never commit real credentials.

### Unsafe Claim Failure

Rewrite claims.

Avoid:

```text
Guaranteed funding
Guaranteed approval
Everyone qualifies
Fix your credit
```

Use:

```text
Review funding options
Check readiness
Compare possible fits
Approval is not guaranteed
```

## Workflow Change Rules

When editing workflows:

- Keep workflows dependency-light.
- Prefer Python standard library over npm packages.
- Avoid adding package managers.
- Avoid external services unless necessary.
- Keep failure messages readable.
- Avoid workflows that require secrets.
- Avoid workflows that modify repo files automatically.

## Done Means

The GitHub workflow layer is complete when the repo has:

- JSON validation
- link checking
- static site smoke testing
- Markdown hygiene review
- no-secrets/safety scanning
- documentation explaining all workflows
- local validation instructions
- reviewer guidance
