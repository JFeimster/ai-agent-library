# AI Agent Library Repo Placement Checklist

Use this checklist when adding the full static site pack to `JFeimster/ai-agent-library`.

## Root Files

Place these at the repository root:

```text
index.html
styles.css
style.css
script.js
SITE_PACK_README.md
```

## Root HTML Pages

Place these at the repository root:

```text
agent-catalog.html
categories.html
tags.html
search.html
featured.html
new.html
skill-catalog.html
skill-categories.html
top-skills.html
skill-builder.html
terms.html
privacy.html
disclaimer.html
affiliate-disclosure.html
data-policy.html
get-started.html
partners.html
team.html
profile.html
platforms.html
portfolio.html
knowledge-bases.html
roadmap.html
changelog.html
contribute.html
```

## Site Data

Create or update:

```text
site-data/
  agents.fallback.json
  skills.fallback.json
  categories.json
  tags.json
  featured.json
  changelog.json
```

## Knowledge Base Folders

Create or update:

```text
knowledge-base/funding/
knowledge-base/partner-enablement/
knowledge-base/crm/
knowledge-base/content-ops/
knowledge-base/automation/
knowledge-base/local-referrals/
knowledge-base/engineering-as-marketing/
```

Each folder should contain:

```text
README.md
index.json
examples.md
```

## Schemas

Create or update:

```text
schemas/
  agent.schema.json
  custom-gpt.schema.json
  vercel-project.schema.json
  funding-product.schema.json
  webhook-event.schema.json
```

## Roadmap

Create or update:

```text
roadmap/
  phase-1-fast-mvp.md
  phase-2-distribution-system.md
  phase-3-marketplace-layer.md
  phase-4-platform-layer.md
```

## Examples

Create or update:

```text
examples/funding/
examples/partner-enablement/
examples/content-ops/
examples/automation/
```

Each folder should contain:

```text
README.md
example-001.md
```

## Portfolio

Create or update:

```text
portfolio/vercel/
portfolio/custom-gpts/
portfolio/gemini-gems/
portfolio/flash-ui/
```

Each folder should contain:

```text
README.md
index.json
```

## Compatibility Check

Keep this file:

```text
style.css
```

with:

```css
@import url("./styles.css");
```

This prevents older generated pages that reference `style.css` from losing styling.

## Local Validation

Run:

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

Check:

- [ ] `index.html` loads.
- [ ] Header nav works.
- [ ] Footer links work.
- [ ] CSS loads.
- [ ] JavaScript loads.
- [ ] Agent catalog renders fallback data.
- [ ] Skill catalog renders fallback data.
- [ ] Categories page renders.
- [ ] Tags page renders.
- [ ] Featured page renders.
- [ ] Search page renders.
- [ ] Partner pages render.
- [ ] Legal pages render.
- [ ] Knowledge-base links open as Markdown in GitHub.
- [ ] JSON files validate.

## JSON Validation

Run:

```bash
python -m json.tool site-data/agents.fallback.json > nul
python -m json.tool site-data/skills.fallback.json > nul
python -m json.tool site-data/categories.json > nul
python -m json.tool site-data/tags.json > nul
python -m json.tool site-data/featured.json > nul
python -m json.tool site-data/changelog.json > nul

python -m json.tool schemas/agent.schema.json > nul
python -m json.tool schemas/custom-gpt.schema.json > nul
python -m json.tool schemas/vercel-project.schema.json > nul
python -m json.tool schemas/funding-product.schema.json > nul
python -m json.tool schemas/webhook-event.schema.json > nul
```

PowerShell alternative:

```powershell
Get-ChildItem site-data -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
Get-ChildItem schemas -Filter *.json | ForEach-Object { Get-Content $_.FullName | ConvertFrom-Json | Out-Null }
```

## Public-Safe Review

Before opening PR:

- [ ] Funding pages avoid guaranteed approval/funding language.
- [ ] Business-credit pages avoid credit-repair or outcome promises.
- [ ] Partner pages include disclosure links.
- [ ] Affiliate pages do not hide compensation possibility.
- [ ] Automation examples use synthetic payloads.
- [ ] No API keys, tokens, webhook secrets, or private CRM data are included.
- [ ] No private provider terms are exposed.
- [ ] No fake testimonials or fake trust badges are included.

## PR Readiness

Before PR:

- [ ] Files are in the intended paths.
- [ ] No ZIP files are committed unless explicitly desired.
- [ ] No generated screenshots are committed unless intentionally used.
- [ ] Root `README.md` is updated.
- [ ] `SITE_PACK_README.md` is included.
- [ ] `style.css` alias is included.
- [ ] `vercel.json` deployment behavior is reviewed.
- [ ] PR summary lists all major folders added.
