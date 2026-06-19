# Batch 34 — Workflow Hygiene + Validation Docs

## Files

```text
.github/workflows/markdown-hygiene.yml
.github/workflows/no-secrets-safety.yml
docs/github-workflows.md
docs/repo-validation-checklist.md
```

## `.github/workflows/markdown-hygiene.yml`

```yaml
name: Markdown Hygiene Check
on:
  push:
    paths:
      - '**/*.md'
  pull_request:
    paths:
      - '**/*.md'

jobs:
  markdown-lint:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Run Markdown Lint
        run: |
          npx markdownlint-cli '**/*.md' --ignore 'node_modules' --ignore 'batch-handoffs'
```

## `.github/workflows/no-secrets-safety.yml`

```yaml
name: No Secrets Safety Check
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  secrets-scan:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: TruffleHog Secrets Scan
        uses: trufflesecurity/trufflehog@main
        with:
          path: ./
          base: ${{ github.event.repository.default_branch }}
          head: HEAD
          extra_args: --debug --only-verified
```

## `docs/github-workflows.md`

```md
# GitHub Workflows

## Purpose

The GitHub workflows in this repository are designed to automate hygiene checks, security scans, and ensure repository consistency without introducing complex build steps or dependencies. They act as guardrails for code quality and safety.

## When to Use

These workflows run automatically based on repository events (like `push` and `pull_request`). You do not need to trigger them manually. Review the workflow runs in the "Actions" tab of the GitHub repository when opening or updating a Pull Request.

## Core Rules

1. **Keep it Static:** Workflows must not compile code, run servers, or generate deployment artifacts. The repository is strictly static/documentation-first.
2. **Focus on Safety:** Prioritize workflows that check for secrets, PII, and unsafe content.
3. **No External Dependencies Built-In:** Workflows should use pre-packaged actions or lightweight tools that run in isolated environments without adding dependencies to the core repository structure.

## File/Path Conventions

- All workflow definitions must reside in `.github/workflows/`.
- Use descriptive kebab-case filenames ending in `.yml` (e.g., `markdown-hygiene.yml`, `no-secrets-safety.yml`).

## Guardrails

- **Do Not Add Framework Tests:** Do not include workflows that test Next.js, React, or other framework code, as the visual directory must remain strictly static HTML/CSS/JS.
- **Do Not Run Package Managers:** Workflows should not execute `npm install`, `yarn`, or `pnpm` against the repository files, as we maintain a zero-dependency architecture.

## Validation Checklist

- [ ] Workflows are placed in `.github/workflows/`.
- [ ] Filenames use kebab-case and `.yml` extension.
- [ ] No build steps or package managers are executed on repository source code.
- [ ] Safety and hygiene are prioritized.

## Related Assets

- `docs/repo-validation-checklist.md`
- `.github/workflows/markdown-hygiene.yml`
- `.github/workflows/no-secrets-safety.yml`

## Done Means

Workflows are successfully triggering on pull requests, passing the hygiene and safety checks without failures, and not introducing any build complexity to the repository.
```

## `docs/repo-validation-checklist.md`

```md
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
```

## Validation

- [x] Markdown reviewed
- [x] YAML reviewed
- [x] No secrets
- [x] No private data
- [x] No unsupported claims
