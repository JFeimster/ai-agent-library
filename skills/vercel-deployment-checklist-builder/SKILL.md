# Vercel Deployment Checklist Builder

## Purpose

The **Vercel Deployment Checklist Builder** skill creates deployment-readiness checklists for static sites, landing pages, directories, AI tool pages, prompt libraries, agent libraries, documentation sites, and lightweight Vercel projects.

Use this skill when a repo or static site needs to be checked before connecting to Vercel, pushing to production, reviewing a preview deployment, or handing off deployment instructions.

This skill is for boring-but-critical launch discipline: the part where you make sure the rocket has bolts before lighting it like a fintech Roman candle.

This skill does **not** deploy without explicit user instruction, modify production settings, rotate secrets, or change domains automatically.

## When To Use

Use this skill when the user asks for:

- Vercel deployment checklist
- Static site launch checklist
- Pre-deploy review
- Preview deployment review
- Production readiness checklist
- Vercel repo setup checklist
- Environment variable checklist
- Domain setup checklist
- Deployment issue review
- Static site package plan
- GitHub-to-Vercel deployment instructions
- Vercel handoff docs
- PR deployment review

Use it for:

- Static HTML/CSS/JS sites
- Vercel-ready docs sites
- AI agent directories
- GPT landing pages
- Calculator/tool pages
- Affiliate resource pages
- Prompt library pages
- Portfolio sites
- Engineering-as-marketing microsites

Do not use it for:

- Full Vercel deployment unless explicitly requested
- Secret creation or exposure
- Production DNS changes without confirmation
- Rewriting app architecture
- Adding Next.js/build tooling when a static site is sufficient

## Inputs

### Minimum Inputs

```text
Project name:
Repo URL:
Site type:
Target environment:
Deployment goal:
```

### Recommended Inputs

```text
Project folder:
Entry file:
Static assets folder:
Data files:
Framework/build step:
Vercel project name:
Domain:
Environment variables:
Primary CTA:
Public/private status:
```

### Optional Inputs

```text
Preview URL:
Production URL:
vercel.json:
package.json:
404 page:
robots.txt:
sitemap.xml:
Analytics needed:
Deployment protection:
Branch strategy:
Existing deployment error:
Build logs:
Known risks:
```

## Outputs

This skill should produce:

1. Deployment-readiness summary
2. Static/build classification
3. Required file checklist
4. Vercel configuration checklist
5. Environment variable checklist
6. Domain checklist
7. SEO/metadata checklist
8. Privacy/security checklist
9. Affiliate/funding disclosure checklist
10. Preview review checklist
11. Production launch checklist
12. Rollback plan
13. Handoff notes

## Standard Output Format

```md
# Vercel Deployment Checklist

## 1. Deployment Summary

- Project:
- Repo:
- Site type:
- Deployment target:
- Build type:
- Status:

## 2. Static / Build Classification

[Static HTML / Framework app / Unknown]

## 3. Required Files

- [ ] `index.html`
- [ ] `styles.css`
- [ ] `script.js`
- [ ] `README.md`
- [ ] `vercel.json` if needed

## 4. Vercel Config

- [ ] Project root is correct.
- [ ] Build command is correct or empty for static.
- [ ] Output directory is correct.
- [ ] Framework preset is correct.
- [ ] `vercel.json` does not overcomplicate routing.

## 5. Environment Variables

| Variable | Required | Environment | Notes |
|---|---:|---|---|
| `EXAMPLE_KEY` | No | Preview/Production | Only if required |

## 6. Domain / URL

- [ ] Preview URL loads.
- [ ] Production domain loads.
- [ ] Canonical URL is correct.
- [ ] HTTPS works.
- [ ] Redirects are intentional.

## 7. SEO / Metadata

- [ ] Title tag exists.
- [ ] Meta description exists.
- [ ] Open Graph tags exist.
- [ ] Favicon exists.
- [ ] `robots.txt` is intentional.
- [ ] Sitemap exists if useful.

## 8. Privacy / Security

- [ ] No API keys in repo.
- [ ] No private client data.
- [ ] No backend provider bypass paths.
- [ ] No raw protected files exposed.
- [ ] External links use `rel="noopener noreferrer"` where needed.

## 9. Monetization / Disclosure

- [ ] Affiliate/referral disclosure included if links are monetized.
- [ ] Funding approval guarantees removed.
- [ ] Terms, rates, results, and revenue claims are qualified.

## 10. Preview Review

- [ ] Homepage loads.
- [ ] Mobile layout works.
- [ ] Buttons link correctly.
- [ ] Forms/CTAs route correctly.
- [ ] Console has no obvious errors.
- [ ] 404 behavior is acceptable.

## 11. Production Launch

- [ ] Main branch is clean.
- [ ] PR is reviewed.
- [ ] Deployment succeeds.
- [ ] Domain points to correct project.
- [ ] Final smoke test completed.

## 12. Rollback Plan

[Rollback instructions]

## 13. Handoff Notes

[Notes for operator]
```

## File / Path Conventions

Deployment docs may live under:

```text
DEPLOYMENT.md
docs/deployment.md
docs/vercel.md
templates/platform-packs/vercel-static-site-package.md
```

Static site root examples:

```text
index.html
styles.css
script.js
assets/
site-data/
vercel.json
README.md
DEPLOYMENT.md
```

Alternative `/site` structure:

```text
site/
  index.html
  styles.css
  script.js
  assets/
  data/
```

If a repo uses `/site`, document Vercel root/output settings clearly.

## Workflow

### Step 1 — Classify the Project

Classify as:

```text
static-html
static-site-folder
nextjs
vite
astro
docs-site
unknown
```

For the user’s preferred static-first workflows, default to:

```text
static-html
```

unless the repo clearly requires a framework.

### Step 2 — Identify Required Files

For dependency-free static sites:

```text
index.html
styles.css
script.js
README.md
DEPLOYMENT.md
vercel.json optional
assets/ optional
site-data/ optional
```

For multi-page static sites:

```text
index.html
styles.css
script.js
pages/*.html or root page files
assets/
site-data/
404.html optional
robots.txt optional
sitemap.xml optional
```

### Step 3 — Review Vercel Configuration

Check:

- Root directory
- Output directory
- Build command
- Framework preset
- `vercel.json`
- Redirects
- Rewrites
- Headers
- Trailing slash behavior
- Deployment protection setting if relevant

For simple static root:

```text
Build command: None
Output directory: .
Framework preset: Other / Static
```

For `/site` static root:

```text
Root directory: site
Build command: None
Output directory: .
```

### Step 4 — Review Environment Variables

For public static sites, most projects should need no secrets.

Flag any variable that appears in client-side JS:

```text
API keys in client-side JS are public.
Do not place private credentials in static frontend code.
```

Allowed public variables only when intentional:

```text
public analytics ID
public form endpoint
public config flag
```

### Step 5 — Review Links and CTAs

Check:

- Primary CTA works
- Secondary CTA works
- External links open safely
- No broken internal nav links
- No admin/editor links exposed
- No raw backend-provider destinations if white-label rules apply

### Step 6 — Review Funding / Affiliate Language

If site includes funding, business credit, affiliate, referral, or partner CTAs:

- Add disclosure
- Remove approval guarantees
- Remove rate/term guarantees
- Remove earnings guarantees
- Clarify review required
- Use public-safe CTA language

### Step 7 — Review SEO Metadata

Minimum metadata:

```html
<title>Page Title</title>
<meta name="description" content="Description">
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Description">
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.com">
```

Optional:

```html
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="https://example.com">
<link rel="icon" href="/favicon.ico">
```

### Step 8 — Review Preview Deployment

Preview checklist:

- Page loads
- Styles load
- JS loads
- Data files load
- Cards render
- Search/filter works if present
- Mobile layout works
- Console errors reviewed
- CTAs route correctly

### Step 9 — Review Production Launch

Production checklist:

- PR merged intentionally
- Vercel production deployment succeeded
- Domain is correct
- HTTPS works
- Canonical URL matches
- Forms/CTAs tested
- Disclosure visible
- Rollback path known

## Static Site `vercel.json` Patterns

### Minimal Static

```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

### Static With Headers

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### SPA Fallback

Use only if needed:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Do not use SPA fallback for normal multi-page static sites unless intentionally required.

## Common Failure Modes

| Failure | Common Cause | Fix |
|---|---|---|
| 404 on homepage | Wrong root directory | Set project root correctly |
| CSS not loading | Wrong path | Use relative or root-relative path consistently |
| JSON fetch fails | Data path wrong | Confirm file exists and path matches deployment root |
| Build fails | Build command set unnecessarily | Remove build command for static site |
| Blank page | JS error | Review console and script paths |
| Preview protected | Vercel auth enabled | Use share link or adjust protection |
| Wrong project deployed | Repo connected to wrong Vercel project | Verify project settings |
| CTA broken | URL typo | Test buttons manually |

## Quality Checklist

Before finalizing a deployment checklist:

- [ ] Project type is classified.
- [ ] Required files are listed.
- [ ] Vercel root/build/output settings are clear.
- [ ] Environment variables are reviewed.
- [ ] Static assets are accounted for.
- [ ] Data files are accounted for.
- [ ] CTAs are reviewed.
- [ ] Metadata is reviewed.
- [ ] Security/privacy is reviewed.
- [ ] Affiliate/funding claims are reviewed where relevant.
- [ ] Preview test plan is included.
- [ ] Production launch checklist is included.
- [ ] Rollback plan is included.

## Guardrails

This skill must not:

- Deploy without explicit instruction.
- Change domains without explicit confirmation.
- Add build tools unnecessarily.
- Expose secrets.
- Put private API keys in static frontend code.
- Publish private client data.
- Publish backend provider bypass links.
- Guarantee funding, approval, traffic, rankings, or revenue.
- Recommend production changes without a rollback plan.

## Public-Safe Language Rules

Use:

```text
deployment checklist
preview review
production readiness
static site
review required
environment variable
no secrets in frontend
rollback plan
```

Avoid:

```text
guaranteed deployment
instant approval
secret backend links
bypass protection
hardcode private keys
```

## Example Input

```text
Project: Ad Spend Cash Flow Calculator
Repo: JFeimster/ad-spend-cashflow
Site type: static HTML/CSS/JS
Goal: Deploy to Vercel as a public tool landing page
Primary CTA: Run the Ad Spend Cash Flow Calculator
Secondary CTA: Compare Ecommerce Funding Options
```

## Example Output

```md
# Vercel Deployment Checklist

## 1. Deployment Summary

- Project: Ad Spend Cash Flow Calculator
- Repo: JFeimster/ad-spend-cashflow
- Site type: Static HTML/CSS/JS
- Deployment target: Vercel
- Build type: Static / no build step
- Status: Ready for pre-deploy review

## 2. Static / Build Classification

This should be deployed as a dependency-free static site.

## 3. Required Files

- [ ] `index.html`
- [ ] `styles.css`
- [ ] `script.js`
- [ ] `README.md`
- [ ] `vercel.json` if custom routing is needed

## 4. Vercel Config

- [ ] Framework preset: Other / Static
- [ ] Build command: None
- [ ] Output directory: `.`
- [ ] Root directory: repo root unless files are in `/site`

## 5. Environment Variables

No environment variables should be required for a public static landing page.

## 6. Domain / URL

- [ ] Preview URL loads.
- [ ] Production URL loads after merge.
- [ ] Canonical URL is updated when production domain is final.

## 7. SEO / Metadata

- [ ] Title and description mention ad spend cash flow.
- [ ] Open Graph metadata exists.
- [ ] CTA links are crawlable.

## 8. Privacy / Security

- [ ] No API keys.
- [ ] No private funding/provider docs.
- [ ] No customer examples with real data.

## 9. Monetization / Disclosure

- [ ] Funding application CTA includes referral/affiliate disclosure if applicable.
- [ ] No approval or funding guarantee.

## 10. Preview Review

- [ ] Hero loads.
- [ ] Calculator/GPT CTA works.
- [ ] Funding CTA works.
- [ ] Mobile layout is clean.
- [ ] Console has no path errors.

## 11. Rollback Plan

If production deployment breaks, revert the merge commit or redeploy the previous working Vercel deployment.
```

## Related Agents

```text
agents/vercel-deployment-control-agent.md
agents/static-site-page-generator.md
agents/engineering-as-marketing-site-builder.md
```

## Related Knowledge Bases

```text
knowledge-base/engineering-as-marketing/README.md
knowledge-base/content-ops/README.md
knowledge-base/partner-enablement/README.md
```

## Related Schemas

```text
schemas/vercel-project.schema.json
schemas/portfolio-record.schema.json
schemas/agent.schema.json
```

## Done Means

This skill is complete when it can produce a deployment checklist that covers:

- Static/build classification
- Required files
- Vercel configuration
- Environment variables
- Domains
- SEO metadata
- Privacy/security
- Affiliate/funding disclosures
- Preview review
- Production launch
- Rollback plan