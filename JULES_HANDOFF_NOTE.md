# Jules Handoff Note — AI Agent Library Static Site Pack

## Context

This repo is `JFeimster/ai-agent-library`.

The current task is to integrate the generated static site pack into the repo as plain HTML/CSS/JS/JSON/Markdown files.

Do not introduce React, Next.js, npm, build tooling, or server routes unless explicitly requested.

## Primary Goal

Add the complete AI Agent Library static site pack to the repo and open a PR.

## Required Behavior

- Keep the site static-first.
- Preserve the root file structure.
- Add `style.css` as a compatibility alias for `styles.css`.
- Do not commit ZIP files unless explicitly requested.
- Do not commit screenshots unless explicitly requested.
- Do not add secrets, API keys, tokens, or private client data.
- Do not add funding, credit, affiliate, revenue, or platform outcome guarantees.
- Use educational and public-safe wording.

## Files to Add

Use the file list in:

```text
SITE_PACK_README.md
REPO_PLACEMENT_CHECKLIST.md
```

## Validation

Before opening PR:

```bash
python -m http.server 8080
```

Then check:

```text
http://localhost:8080/
```

Validate:

- Homepage loads.
- CSS loads.
- JS loads.
- Nav links resolve.
- JSON files parse.
- Schema files parse.
- Partner pages include disclosure links.
- Funding/business-credit content avoids guarantees.

## Suggested Branch

```text
site/full-static-site-pack
```

## Suggested PR Title

```text
Add full AI Agent Library static site pack
```

## Suggested PR Summary

Use `PR_DESCRIPTION.md`.
```

Batch 15 will be **Jules execution updates + master prompts**:

```text
Jules master implementation prompt
Jules repo audit prompt
Jules PR review prompt
Jules validation checklist prompt
Jules issue/task breakdown
Recommended tasks to create in Jules
Post-PR review checklist
Merge readiness checklist
