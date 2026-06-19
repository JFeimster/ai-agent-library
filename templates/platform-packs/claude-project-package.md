# Claude Project Platform Package Template

## Purpose

Use this template to package a Claude Project as a reusable project workspace asset inside the AI Agent Library.

## Metadata

```yaml
name: ""
slug: ""
platform: "Claude"
type: "Claude Project"
status: "draft"
category: ""
audience: ""
problem_solved: ""
primary_job: ""
visibility: "internal-only"
related_agent: ""
related_skill: ""
related_knowledge_base: ""
```

## Recommended Folder Structure

```text
platforms/claude-projects/
  README.md
  claude-project-inventory.md
  claude-project-index.csv
  project-instructions-template.md
  project-source-file-checklist.md
  project-publishing-standards.md
  project-maintenance-checklist.md
  project-to-agent-conversion-map.md
```

## Project Instructions Template

```md
# [Claude Project Name] Instructions

## Role

You are [role].

## Project Mission

This project exists to [mission].

## Audience

You support:

- Audience 1
- Audience 2
- Audience 3

## Workflow

1. Read the request.
2. Identify relevant source files.
3. Extract known facts.
4. Separate facts from assumptions.
5. Generate structured output.
6. Add review notes.
```

## Conversion Map

```md
| Claude Project | Agent Candidate | Skill Candidate | Knowledge Base | Notes |
|---|---|---|---|---|
| Example Claude Project | `agents/example-agent.md` | `skills/example-skill/SKILL.md` | `knowledge-base/example/README.md` | Convert if workflow becomes repeatable |
```

## Done Means

A Claude Project package is complete when it includes inventory record, Markdown card, project instructions template, source-file checklist, publishing standards, maintenance checklist, conversion map, visibility rules, and related agent/skill/KB mapping where applicable.
