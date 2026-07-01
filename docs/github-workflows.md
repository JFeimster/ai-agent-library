<!-- markdownlint-disable -->
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
