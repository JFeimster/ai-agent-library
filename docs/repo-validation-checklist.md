# Repository Validation Checklist

## Purpose

This checklist ensures that all contributions to the AI Agent Library repository adhere to strict quality, privacy, and architectural standards before they are merged. It acts as the final gatekeeper for code and content quality.

## When to Use

Use this checklist before opening a Pull Request (PR) and during the review process. Reviewers should use this checklist to verify the PR contents.

## Core Rules

1. **Strictly Static Architecture:** Verify no package managers, frameworks (e.g., Next.js, React), or build tools are introduced.
2. **Absolute Privacy:** Ensure zero PII, real client data, credentials, API keys, or `.env` files are present.
3. **Synthetic Examples:** All examples must use clearly recognizable synthetic data.
4. **Kebab-Case Naming:** Enforce kebab-case for all branch names, directory names, and file names.
5. **No Unsupported Claims:** Reject any language guaranteeing approval, funding, income, or search ranking.

## Guardrails

- **No Active Executables:** Do not merge scripts that actively connect to external APIs or bypass provider security.
- **No Hidden Dependencies:** Ensure HTML files do not load external libraries that compromise the zero-dependency rule, unless explicitly approved as part of a static CDN load (which is heavily restricted).
- **Public-Safe Content Only:** If you wouldn't publish it on a billboard, do not merge it here.

## Validation Checklist

### 1. Architecture & Code
- [ ] Is the code strictly vanilla HTML/CSS/JS or Markdown?
- [ ] Are there zero package.json, requirements.txt, or similar dependency files?
- [ ] Are there zero build or framework artifacts?

### 2. Privacy & Security
- [ ] Are there zero API keys, secrets, or tokens?
- [ ] Are there zero `.env` files?
- [ ] Is all data entirely synthetic (e.g., "Unknown", "Acme Corp")?
- [ ] Are there zero real names, emails, or personal identifiers?

### 3. Naming & Structure
- [ ] Do all files use `kebab-case.ext`?
- [ ] Do all directories use `kebab-case/`?
- [ ] Does the branch name follow the `feature/short-task-name` or `fix/short-task-name` format?

### 4. Content & Tone
- [ ] Is the language public-safe and professional?
- [ ] Are there zero guarantees of financial success, funding, or specific outcomes?
- [ ] Are all claims verifiable or clearly marked as examples?

## Related Assets

- `docs/github-workflows.md`
- `CONTRIBUTING.md` (Planned)

## Done Means

All items on the checklist are verified, the PR is clean, workflows pass, and the branch is ready to be merged into `main` without violating repository constraints.
