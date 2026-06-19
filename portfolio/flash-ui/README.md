# Flash UI Portfolio

Inventory for reusable static site variants, landing page patterns, visual systems, interface experiments, and deployable UI shells.

## Purpose

This folder tracks Flash UI variants and static visual systems that can be reused across AI Agent Library tools, landing pages, directories, GPT pages, calculators, and partner resources.

Use this portfolio for:

- Static UI variants
- Landing page layouts
- Directory page designs
- Calculator UI shells
- Scorecard UI shells
- Partner profile layouts
- Prompt generator interfaces
- Visual theme experiments
- Component pattern notes
- Reusable style directions

## Primary Users

- Static site builders
- Landing page generators
- AI product operators
- Flash UI maintainers
- Vercel app builders
- Partner page builders
- Design-system operators

## Flash UI Portfolio Item Standard

Each Flash UI item should include:

- Variant name
- Slug
- Status
- Visual style
- Best use case
- Source path
- Preview URL
- Included files
- Related site type
- Related CTA pattern
- Notes

## Status Values

```text
idea
draft
ready
preview
production
needs-refresh
deprecated
archived
```

## Recommended Folder Pattern

```text
portfolio/
  flash-ui/
    README.md
    index.json
    inventory.md
    variants/
      [variant-slug]/
        index.html
        styles.css
        script.js
        README.md
```

## UI Variant Types

Common variant types:

- Bento directory
- Brutalist fintech
- Premium dark dashboard
- Comic-book fintech
- Minimal SaaS
- Resource-card grid
- Calculator page
- Landing page hero
- Partner profile page
- Tool directory
- Prompt generator shell
- Knowledge-base browser

## Variant Review Checklist

Before reusing a Flash UI variant:

- [ ] Variant opens without a build step.
- [ ] CSS is self-contained or clearly linked.
- [ ] Mobile layout works.
- [ ] CTA hierarchy is clear.
- [ ] Accessibility basics are present.
- [ ] No placeholder claims remain.
- [ ] No broken asset references.
- [ ] No external scripts are required unless intentional.
- [ ] Fits the target audience and brand context.
- [ ] Footer/legal links are included where needed.

## Recommended Metadata Object

```json
{
  "name": "Brutalist Fintech Directory",
  "slug": "brutalist-fintech-directory",
  "status": "ready",
  "visual_style": "bold, high-contrast, editorial fintech",
  "best_use_case": "Agent catalogs, funding tool directories, and resource hubs",
  "source_path": "portfolio/flash-ui/variants/brutalist-fintech-directory/",
  "preview_url": "",
  "included_files": [
    "index.html",
    "styles.css",
    "script.js"
  ],
  "related_site_type": "directory",
  "related_cta_pattern": "Primary action plus secondary resource CTA"
}
```

## UI Safety Rules

Flash UI variants should not:

- Include copyrighted images without permission
- Include logos without permission
- Include misleading trust badges
- Include fake testimonials
- Include fake performance claims
- Include hard-coded private links
- Expose analytics IDs unintentionally
- Use inaccessible text contrast
- Hide required disclosures

## Related Repo Paths

```text
portfolio/flash-ui/
portfolio/vercel/
knowledge-base/engineering-as-marketing/
styles.css
index.html
roadmap/phase-4-platform-layer.md
```
