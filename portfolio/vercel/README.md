# Vercel Portfolio

Inventory for static sites, landing pages, directories, calculators, scorecards, prompt generators, partner pages, and other deployable AI Agent Library assets hosted on Vercel.

## Purpose

This folder tracks Vercel-ready and Vercel-deployed assets so each project has a clear source repo, deployment status, ownership record, CTA strategy, and maintenance path.

Use this portfolio for:

- Static AI tool sites
- Agent directories
- Skill directories
- Funding calculators
- Scorecards
- Prompt generators
- Partner resource pages
- Knowledge-base frontends
- Custom GPT landing pages
- Engineering-as-marketing tools

## Primary Users

- Static site builders
- AI product operators
- Vercel deployment operators
- Content and SEO operators
- Custom GPT builders
- Partner enablement operators
- Repo maintainers

## Portfolio Item Standard

Each Vercel portfolio item should include:

- Project name
- Project slug
- Source repo
- Local path if applicable
- Production URL
- Preview URL if applicable
- Vercel project ID if available
- Deployment status
- Deployment mode
- Auto-deploy setting
- Primary CTA
- Secondary CTA
- Related agent
- Related skill
- Related knowledge base
- Last reviewed date
- Notes

## Deployment Status Values

Use a consistent status vocabulary:

```text
idea
draft
local
preview
production
paused
needs-refresh
deprecated
archived
```

## Deployment Mode Values

Use:

```text
manual
git-auto
disabled
unknown
```

## Recommended Folder Pattern

```text
portfolio/
  vercel/
    README.md
    index.json
    inventory.md
    deployment-notes.md
```

## Vercel Project Checklist

Before marking a project as production-ready:

- [ ] `index.html` exists.
- [ ] `styles.css` exists.
- [ ] `script.js` exists if needed.
- [ ] `vercel.json` is reviewed.
- [ ] Navigation links resolve.
- [ ] CTA links are approved.
- [ ] Footer legal/trust links are present.
- [ ] No API keys or secrets are committed.
- [ ] Public-safe language is reviewed.
- [ ] Auto-deploy behavior is intentional.
- [ ] Production URL is recorded.
- [ ] Source repo is recorded.

## Static-First Rules

Use plain files unless the project explicitly needs a framework.

Preferred:

- HTML
- CSS
- JavaScript
- JSON
- Markdown
- Static assets

Avoid by default:

- Required build steps
- React or Next.js unless intentionally chosen
- Client-exposed secrets
- Hard-coded API keys
- Unreviewed analytics scripts
- Uncontrolled external form links

## `vercel.json` Deployment Control

For static sites, a simple baseline config may look like:

```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

To disable Git-triggered auto deployments:

```json
{
  "git": {
    "deploymentEnabled": false
  },
  "cleanUrls": true,
  "trailingSlash": false
}
```

To re-enable Git-triggered deployments:

```json
{
  "git": {
    "deploymentEnabled": true
  },
  "cleanUrls": true,
  "trailingSlash": false
}
```

## Recommended Metadata Object

```json
{
  "name": "AI Agent Library",
  "slug": "ai-agent-library",
  "status": "production",
  "site_type": "directory",
  "production_url": "https://example.vercel.app",
  "source_repo": "JFeimster/ai-agent-library",
  "deployment_mode": "manual",
  "auto_deploy_enabled": false,
  "primary_cta": "Browse agents",
  "related_agent": "agents/example-agent.md",
  "related_skill": "skills/static-site-page-builder/SKILL.md",
  "last_reviewed_at": "2026-06-18"
}
```

## Public-Safe Rules

Vercel portfolio pages must not:

- Expose environment variables
- Expose API keys
- Expose webhook secrets
- Publish private client data
- Publish internal provider logic
- Claim guaranteed funding, credit, revenue, rankings, or platform outcomes
- Use unapproved affiliate CTAs
- Deploy legal/trust pages without review

## Related Repo Paths

```text
portfolio/vercel/
schemas/vercel-project.schema.json
knowledge-base/engineering-as-marketing/
index.html
styles.css
script.js
roadmap/phase-4-platform-layer.md
```
