# Repo Validation Checklist

## Purpose

This checklist defines how to validate changes in the AI Agent Library repo before merge.

Use it for:

- PR review
- Jules output review
- Codex output review
- batch completion review
- static-site page review
- index/data review
- workflow review
- launch readiness review

The goal is not to make the repo bureaucratic. The goal is to avoid shipping markdown confetti, broken links, invalid JSON, and radioactive secret files. 🧪

## Quick Review

For every PR:

- [ ] PR links to the correct issue or batch.
- [ ] Scope matches the requested task.
- [ ] Changed files are expected.
- [ ] No unrelated refactors are included.
- [ ] No future-batch work is included.
- [ ] No generated junk/cache files are included.
- [ ] No secrets are committed.
- [ ] No private customer/client/borrower data is committed.
- [ ] No unsupported claims are introduced.
- [ ] Validation notes are included in the PR body.

## Scope Validation

Check that the PR only changes files listed in the task.

Expected:

```text
Task says create four files.
PR creates those four files plus a batch handoff file if required.
```

Not expected:

```text
Task says create four files.
PR also rewrites README, redesigns site CSS, changes Vercel config, and updates unrelated indexes.
```

Scope checklist:

- [ ] Files match the batch/issue.
- [ ] No unrelated cleanup.
- [ ] No opportunistic refactor.
- [ ] No unrelated style overhaul.
- [ ] No deployment change unless required.
- [ ] No package manager added unless explicitly approved.

## File Path Validation

Check:

- [ ] File paths are lowercase where practical.
- [ ] Slugs are lowercase kebab-case.
- [ ] Folder placement matches repo conventions.
- [ ] Related files are grouped logically.
- [ ] No duplicate folder names with different casing.
- [ ] No spaces in filenames unless existing convention requires it.
- [ ] No `final-final`, `copy`, `new`, or temporary filenames.

Good:

```text
skills/static-site-page-builder/SKILL.md
agents/static-site-page-generator.md
knowledge-base/funding/README.md
templates/platform-packs/vercel-static-site-package.md
```

Bad:

```text
Skills/Static Site Page Builder.md
New File final.md
Jason Stuff.md
copy-of-template.md
```

## Markdown Validation

Check:

- [ ] File starts with a clear H1 unless it is a GitHub template or special file.
- [ ] Headings are structured logically.
- [ ] Code fences are closed.
- [ ] Placeholder text is intentional.
- [ ] Examples are synthetic.
- [ ] No raw private/local paths.
- [ ] No private credentials.
- [ ] No unsupported claims.
- [ ] Related links point to real or intentionally planned files.
- [ ] The file is complete enough to use.

Recommended sections for agent specs:

- [ ] Purpose
- [ ] Audience
- [ ] Inputs
- [ ] Workflow
- [ ] Outputs
- [ ] Guardrails
- [ ] Examples
- [ ] Related assets

Recommended sections for skill files:

- [ ] Purpose
- [ ] When to use
- [ ] Inputs
- [ ] Procedure
- [ ] Outputs
- [ ] Quality checklist
- [ ] Guardrails
- [ ] Examples

Recommended sections for docs:

- [ ] Purpose
- [ ] When to use
- [ ] Procedure or rules
- [ ] Checklist
- [ ] Done means

## JSON Validation

For every changed JSON file:

- [ ] JSON parses successfully.
- [ ] Two-space indentation is used.
- [ ] Slugs are lowercase kebab-case.
- [ ] Paths match real files unless marked as planned.
- [ ] No duplicate slugs.
- [ ] No duplicate IDs.
- [ ] Missing values are represented consistently.
- [ ] URLs are preserved if user-provided.
- [ ] URLs are not invented.
- [ ] Records have stable required fields.

Run:

```bash
python -m json.tool path/to/file.json
```

Suggested commands:

```bash
python -m json.tool agent-index.json
python -m json.tool skills/skill-index.json
python -m json.tool templates/template-index.json
python -m json.tool schemas/schema-index.json
```

## YAML Workflow Validation

For GitHub Actions workflow files:

- [ ] YAML indentation is valid.
- [ ] Workflow has a clear name.
- [ ] Workflow triggers are intentional.
- [ ] Permissions are minimal.
- [ ] Concurrency is defined when useful.
- [ ] Steps are readable.
- [ ] Scripts do not require secrets.
- [ ] Scripts use standard tooling where possible.
- [ ] Failure messages are readable.
- [ ] Workflow does not modify repo files automatically.
- [ ] Workflow does not add external dependencies without reason.

Recommended:

```yaml
permissions:
  contents: read
```

Avoid workflows that need write permissions unless the task explicitly requires them.

## Static Site Validation

If static site files changed:

- [ ] Homepage loads locally.
- [ ] Touched pages load locally.
- [ ] CSS loads.
- [ ] JS loads.
- [ ] Images/assets load.
- [ ] Public JSON fetches work.
- [ ] Navigation works.
- [ ] Primary CTA works.
- [ ] Secondary CTA works.
- [ ] Footer links work.
- [ ] Mobile layout is acceptable.
- [ ] Browser console has no obvious path errors.
- [ ] No private/internal-only links are exposed.

Run from repo root if `index.html` is at root:

```bash
python -m http.server 8080
```

Run from `/site` if site lives there:

```bash
cd site
python -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

## Link Validation

Check:

- [ ] Internal Markdown links work.
- [ ] HTML `href` paths work.
- [ ] HTML `src` paths work.
- [ ] CSS `url(...)` paths work.
- [ ] JavaScript `fetch(...)` paths work.
- [ ] JSON `path` fields point to real files where required.
- [ ] No private admin/editor/backend links are exposed.
- [ ] External links are intentional.

For public external links:

- [ ] CTA destination is correct.
- [ ] Affiliate/referral disclosure is present if needed.
- [ ] Link text accurately describes destination.

## Security Validation

Confirm no committed:

- [ ] `.env`
- [ ] `.env.local`
- [ ] API keys
- [ ] access tokens
- [ ] OAuth secrets
- [ ] webhook secrets
- [ ] private keys
- [ ] credential files
- [ ] raw provider credentials
- [ ] private deployment bypass URLs

Blocked filenames:

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

## Privacy Validation

Confirm no committed:

- [ ] private customer data
- [ ] private client data
- [ ] borrower records
- [ ] bank statements
- [ ] tax returns
- [ ] credit reports
- [ ] IDs
- [ ] Social Security numbers
- [ ] raw CRM exports
- [ ] live application data
- [ ] sensitive financial documents

Use synthetic examples only.

Good:

```json
{
  "name": "Example Owner",
  "email": "owner@example.com",
  "business_name": "Example Services LLC"
}
```

Bad:

```json
{
  "name": "Real Customer",
  "email": "realperson@email.com",
  "bank_statement_url": "https://..."
}
```

## Public-Safe Language Validation

For public-facing content, remove or rewrite:

- [ ] guaranteed approval
- [ ] guaranteed funding
- [ ] guaranteed credit improvement
- [ ] guaranteed revenue
- [ ] guaranteed income
- [ ] guaranteed ranking
- [ ] guaranteed traffic
- [ ] everyone qualifies
- [ ] no one gets denied
- [ ] fix your credit
- [ ] bypass underwriting
- [ ] secret lender route
- [ ] legal/tax/lending/credit repair/investment advice presented as final guidance

Use safer language:

```text
may be a fit
review required
compare options
educational
planning
readiness
common gaps
possible next steps
terms vary
approval not guaranteed
```

## Affiliate / Referral Disclosure Validation

If content includes affiliate, referral, partner, funding, or monetized links:

- [ ] Disclosure is present.
- [ ] Disclosure appears before or near the first monetized CTA.
- [ ] Disclosure is clear and plain-language.
- [ ] Approval/outcome guarantees are removed.
- [ ] Rankings or recommendations explain compensation influence when relevant.

Example disclosure:

```text
Disclosure: Some links may be referral or affiliate links. We may earn compensation if you use them. Approval, pricing, terms, and outcomes are not guaranteed.
```

## Agent Spec Validation

For agent specs:

- [ ] Role is clear.
- [ ] Audience is defined.
- [ ] Primary job is specific.
- [ ] Inputs are listed.
- [ ] Workflow is repeatable.
- [ ] Output format is defined.
- [ ] Guardrails are included.
- [ ] Related skills are linked.
- [ ] Related knowledge bases are linked.
- [ ] Related schemas are linked where applicable.
- [ ] Examples are synthetic.

## Skill Validation

For skill files:

- [ ] Skill solves a reusable problem.
- [ ] Use cases are clear.
- [ ] Inputs are listed.
- [ ] Procedure is actionable.
- [ ] Output format is defined.
- [ ] Quality checklist is included.
- [ ] Guardrails are included.
- [ ] Related agents are linked.
- [ ] Related knowledge bases are linked.
- [ ] Examples are synthetic.

## Knowledge Base Validation

For knowledge-base files:

- [ ] Purpose is clear.
- [ ] Audience is defined.
- [ ] Source of truth is identified.
- [ ] Visibility is labeled.
- [ ] Public-safe/internal-only boundaries are clear.
- [ ] Related assets are linked.
- [ ] Review cadence is included.
- [ ] No private source material is exposed.
- [ ] Examples are synthetic.

## Platform Pack Validation

For platform packs:

- [ ] Platform is clearly named.
- [ ] Use cases are defined.
- [ ] Recommended folder structure is included.
- [ ] Metadata template is included.
- [ ] Setup workflow is included.
- [ ] Publishing/maintenance rules are included.
- [ ] Safety/privacy rules are included.
- [ ] Related assets are linked.
- [ ] Done means is clear.

## Template Validation

For reusable templates:

- [ ] Template purpose is clear.
- [ ] Inputs are listed.
- [ ] Template body is complete.
- [ ] Placeholders are clear.
- [ ] Example input/output is included where useful.
- [ ] Examples are synthetic.
- [ ] Guardrails are included.
- [ ] Related assets are linked.

## Batch Handoff Validation

If a batch handoff file exists:

```text
batch-handoffs/batch-[number]-files.md
```

Check:

- [ ] Batch title is included.
- [ ] File list is included.
- [ ] Each file path appears as a heading.
- [ ] Full file contents are inside fenced code blocks.
- [ ] Validation checklist is included.
- [ ] PR notes are included.
- [ ] Handoff file matches actual changed files.

## PR Body Validation

PR body should include:

- [ ] Linked issue or batch number.
- [ ] Summary.
- [ ] Files changed.
- [ ] Validation performed.
- [ ] Scope control confirmation.
- [ ] Safety confirmation.
- [ ] Known issues.
- [ ] Follow-up tasks if any.

## Merge Readiness

A PR is merge-ready when:

- [ ] Scope is correct.
- [ ] Files are expected.
- [ ] Workflows pass or failures are understood.
- [ ] Reviewer has checked content.
- [ ] No secrets/private data are present.
- [ ] No unsupported claims are present.
- [ ] Deployment impact is understood.
- [ ] Follow-up work is separated into future issues.

## Do Not Merge When

Do not merge if:

- [ ] PR includes secrets.
- [ ] PR includes private data.
- [ ] PR includes unrelated refactors.
- [ ] PR changes deployment config accidentally.
- [ ] PR adds frameworks/package managers without approval.
- [ ] JSON is invalid.
- [ ] Static site is broken.
- [ ] Public copy includes guarantee claims.
- [ ] Links expose backend/provider bypass paths.
- [ ] File deletion is unexplained.

## Done Means

Repo validation is complete when:

- All relevant file types were reviewed.
- Automated checks passed or were consciously triaged.
- Human review confirmed scope and safety.
- Public-safe language passed.
- Data/schema files validate.
- Static-site changes load locally.
- PR is ready for merge or has clear requested changes.
