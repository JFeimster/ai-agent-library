# Naming Conventions

## Branch Rules

Use one branch per issue.

Preferred branch format:
```text
feature/short-task-name
fix/short-task-name
```

Examples:
```text
feature/foundation-docs-and-root-structure
feature/static-agent-directory-site
feature/chatgpt-gpts-platform-pack
feature/funding-knowledge-base
```

## Commit and Pull Request Titles

Use short, descriptive titles that match the task or issue. For issues, copy the PR and commit titles directly from the issue description when provided.

Example PR Title: `Add foundation docs and root structure`

## File and Folder Naming

- **Folders:** Use lowercase, hyphen-separated names (kebab-case). Example: `knowledge-base`, `partner-enablement`.
- **Markdown Files:** Use lowercase, hyphen-separated names (kebab-case) with `.md` extension. Example: `agent-spec-standard.md`.
- **JSON Files:** Use lowercase, hyphen-separated names. Example: `agent-index.json`. Schema files should include `.schema.json` suffix (e.g., `agent.schema.json`).

## Repo Expansion Rules

This repo is expanding into a cross-platform AI agent library. Preserve the core root structure:

```text
agents/
templates/
platforms/
knowledge-base/
portfolio/
schemas/
roadmap/
examples/
docs/
.github/
```

Do not create competing folder names unless an issue explicitly requires it.
