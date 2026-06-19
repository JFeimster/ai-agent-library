# PR Summary

## Linked Issue

Closes #[issue-number]

## PR Type

Select one:

- [ ] Agent spec
- [ ] Skill
- [ ] Knowledge base
- [ ] Platform pack
- [ ] Template
- [ ] Static site page
- [ ] Schema/data
- [ ] Repo maintenance
- [ ] Bug fix
- [ ] Feature
- [ ] Documentation
- [ ] Deployment config
- [ ] Other: [describe]

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

## Why This Matters

Explain the practical reason for this PR.

```text
[Reason]
```

## Scope Control

- [ ] This PR only addresses the linked issue.
- [ ] No unrelated refactors are included.
- [ ] No future issue work is included.
- [ ] No accidental generated/cache files are included.
- [ ] No deployment behavior changed unless explicitly listed below.

## Deployment Impact

Select one:

- [ ] No deployment impact
- [ ] Static site content changed
- [ ] Static site styling/JS changed
- [ ] Vercel config changed
- [ ] Data file changed
- [ ] Build/deploy settings changed
- [ ] Unknown / needs review

If deployment behavior changed, explain:

```text
[Deployment notes]
```

## Validation

Select all completed checks:

- [ ] Markdown reviewed
- [ ] JSON validates
- [ ] YAML/front matter reviewed
- [ ] Static site loads locally
- [ ] Navigation links checked
- [ ] CTA links checked
- [ ] Search/filter behavior checked
- [ ] No console errors found in touched pages
- [ ] Schema/data shape reviewed
- [ ] Index files updated
- [ ] Crosslinks verified
- [ ] No secrets committed
- [ ] No private data committed
- [ ] Public-safe language reviewed
- [ ] Affiliate/referral disclosure reviewed if needed
- [ ] Funding/credit/finance claims reviewed if needed

## Validation Commands

List commands run.

```bash
# Examples:
python -m json.tool skills/skill-index.json
python -m json.tool agent-index.json
python -m http.server 8080
```

Actual commands:

```bash
[commands]
```

## Static Site Review

Complete this section if HTML/CSS/JS changed.

- [ ] Homepage loads
- [ ] Touched pages load
- [ ] CSS path is correct
- [ ] JS path is correct
- [ ] Public JSON/data paths work
- [ ] Cards render
- [ ] Search/filter works if touched
- [ ] Mobile layout is acceptable
- [ ] Primary CTA works
- [ ] Secondary CTA works
- [ ] Footer links work

Pages reviewed:

```text
[path or URL]
[path or URL]
```

## Data / Schema Review

Complete this section if JSON, CSV, or schema files changed.

- [ ] JSON validates
- [ ] CSV headers are stable
- [ ] Required fields are present
- [ ] Slugs are lowercase kebab-case
- [ ] No duplicate slugs
- [ ] File paths match real repo paths
- [ ] Missing values are clearly marked as `null`, `Unknown`, or intentionally blank
- [ ] User-provided URLs are preserved
- [ ] No URLs were invented

## Safety Review

Confirm:

- [ ] No `.env` files committed
- [ ] No API keys
- [ ] No access tokens
- [ ] No OAuth secrets
- [ ] No webhook secrets
- [ ] No private client/customer/borrower data
- [ ] No bank statements, tax records, credit reports, IDs, or sensitive documents
- [ ] No backend provider bypass paths
- [ ] No hidden private admin/editor links
- [ ] No fake testimonials
- [ ] No unsupported social proof
- [ ] No guaranteed funding, approval, credit improvement, income, traffic, ranking, or business outcomes

## Public-Safe Language Review

Complete this section if public-facing copy changed.

- [ ] No guaranteed approval claims
- [ ] No guaranteed funding claims
- [ ] No guaranteed income/revenue claims
- [ ] No guaranteed ranking/SEO/traffic claims
- [ ] No credit repair promises
- [ ] No legal/tax/lending advice presented as final guidance
- [ ] Uses “educational,” “planning,” “readiness,” “compare,” “may,” or “review required” where appropriate
- [ ] Affiliate/referral relationship is disclosed where relevant

## Related Assets

List related files/assets this PR touches or should be reviewed with.

```text
agents/[file].md
skills/[slug]/SKILL.md
knowledge-base/[topic]/README.md
schemas/[schema].json
templates/[template].md
platforms/[platform]/README.md
```

## Screenshots / Preview

Add screenshots or preview URLs if useful.

```text
Preview URL:
Screenshot:
```

## Reviewer Checklist

Reviewer should confirm:

- [ ] PR matches linked issue
- [ ] Scope is tight
- [ ] Files changed are expected
- [ ] No unrelated files changed
- [ ] Validation notes are credible
- [ ] Public-safe language passes review
- [ ] Deployment impact is understood
- [ ] Merge method is appropriate

## Known Issues

```text
[Known issues or “None”]
```

## Follow-Up Tasks

List follow-up work that should become separate issues.

- [ ] Follow-up 1
- [ ] Follow-up 2
- [ ] Follow-up 3
