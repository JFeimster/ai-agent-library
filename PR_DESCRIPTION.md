# Add full AI Agent Library static site pack

## Summary

Adds a full static-first website layer for AI Agent Library.

This PR turns the repo into a browseable static resource hub for reusable AI agents, skills, prompt systems, knowledge bases, schemas, examples, portfolio assets, platform packs, partner pages, and legal/trust pages.

## Repair Notes

- Initial extraction failed on nested Markdown code fences.
- Truncated files were repaired.
- Temporary parser scripts were removed.
- JSON validation passed using standard Python module.
- Static reference checks for `styles.css` and `script.js` passed.
- No secrets or private data were included. Only mock fields like `api_key` in block/ignore lists.

## What Changed

### Root Site Files

- `index.html`
- `styles.css`
- `script.js`
- `style.css`
- `SITE_PACK_README.md`

### Directory & Discovery Pages

- `agent-catalog.html`
- `categories.html`
- `tags.html`
- `search.html`
- `featured.html`
- `new.html`

### Skills Library Pages

- `skill-catalog.html`
- `skill-categories.html`
- `top-skills.html`
- `skill-builder.html`

### Legal & Trust Pages

- `terms.html`
- `privacy.html`
- `disclaimer.html`
- `affiliate-disclosure.html`
- `data-policy.html`

### Partner / Affiliate Pages

- `get-started.html`
- `partners.html`
- `team.html`
- `profile.html`

### Supporting Pages

- `platforms.html`
- `portfolio.html`
- `knowledge-bases.html`
- `roadmap.html`
- `changelog.html`
- `contribute.html`

### Site Data

- `site-data/agents.fallback.json`
- `site-data/skills.fallback.json`
- `site-data/categories.json`
- `site-data/tags.json`
- `site-data/featured.json`
- `site-data/changelog.json`

### Knowledge Bases

- `knowledge-base/funding/`
- `knowledge-base/partner-enablement/`
- `knowledge-base/crm/`
- `knowledge-base/content-ops/`
- `knowledge-base/automation/`
- `knowledge-base/local-referrals/`
- `knowledge-base/engineering-as-marketing/`

### Schemas

- `schemas/agent.schema.json`
- `schemas/custom-gpt.schema.json`
- `schemas/vercel-project.schema.json`
- `schemas/funding-product.schema.json`
- `schemas/webhook-event.schema.json`

### Roadmap

- `roadmap/phase-1-fast-mvp.md`
- `roadmap/phase-2-distribution-system.md`
- `roadmap/phase-3-marketplace-layer.md`
- `roadmap/phase-4-platform-layer.md`

### Examples

- `examples/funding/`
- `examples/partner-enablement/`
- `examples/content-ops/`
- `examples/automation/`

### Portfolio

- `portfolio/vercel/`
- `portfolio/custom-gpts/`
- `portfolio/gemini-gems/`
- `portfolio/flash-ui/`

## Static-First Notes

This PR does not require:

- React
- Next.js
- npm
- Build tooling
- Backend routes
- Private API keys

The site should run from the repo root with:

```bash
python -m http.server 8080
```

## Compatibility Note

`style.css` is included as a compatibility alias for any previously generated pages that reference `style.css`.

The main stylesheet is:

```text
styles.css
```

## Public-Safe Review

This PR includes public-safe language rules for:

- Funding content
- Business-credit content
- Partner and affiliate pages
- Automation examples
- Webhook payload examples
- Legal/trust pages

The content avoids:

- Guaranteed approval claims
- Guaranteed funding claims
- Guaranteed credit outcome claims
- Guaranteed revenue claims
- Guaranteed ranking claims
- Private provider logic
- Private client data
- API keys or secrets

## Validation Checklist

- [x] Homepage opens locally.
- [x] CSS loads.
- [x] JavaScript loads.
- [x] Core navigation links resolve.
- [x] Footer links resolve.
- [x] Agent catalog renders fallback data.
- [x] Skill catalog renders fallback data.
- [x] JSON files validate.
- [x] Schema files validate.
- [x] Partner pages link affiliate disclosure.
- [x] Legal/trust pages are present.
- [x] No private data or secrets included.
- [x] No ZIP files committed unless intentionally included.

## Secondary Repair Notes
- Reverted `vercel.json` deployment toggle back to `true` (restored file to match main).
- Re-extracted `portfolio/vercel/README.md` correctly matching quadruple backtick bounds.
- Fixed priority sorting in `top-skills.html` by adding mapping for canonical `P0, P1, P2, P3` weights.
- Restored `styles.css` from main and appended required static classes, maintaining base grid variables without truncating structural styles.
