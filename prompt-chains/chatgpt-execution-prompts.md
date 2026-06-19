# ChatGPT Execution Prompts

## Purpose

This file stores reusable prompts for using ChatGPT to plan, draft, review, and package AI Agent Library repo work.

ChatGPT is useful for generating file contents, prompt chains, issue bodies, PR reviews, audit checklists, templates, static-site copy, and batch handoffs. These prompts keep outputs structured, copyable, reviewable, and safe.

Use this file when ChatGPT is acting as the planning desk, drafting desk, or review desk — not as a rogue repo bulldozer with markdown confetti. 🧠

## Core ChatGPT Rules

ChatGPT should:

- ask for missing critical scope only when needed
- generate complete file contents when requested
- keep outputs copy/paste-ready
- avoid unnecessary commentary around files
- use exact file path headings
- use fenced code blocks
- preserve repo conventions
- use public-safe language
- use synthetic examples only
- avoid secrets/private data
- avoid unsupported claims
- clearly mark assumptions
- suggest the next batch when relevant

## Manual Batch Generation Prompt

Use this prompt when generating a batch manually in ChatGPT.

```text
Proceed to Batch [NUMBER].

Generate complete and detailed file contents for:

[file]
[file]
[file]
[file]

Output format:
- Start with: Batch [NUMBER] — [Title]
- For each file:
  - Use the file path as a heading.
  - Provide the full file content in a fenced code block.
  - Do not summarize instead of providing content.
- End with the suggested next batch file list.

Rules:
- Make every file complete and useful, not a stub.
- Use repo-relative paths.
- Use lowercase kebab-case for slugs.
- Use public-safe language.
- Use synthetic examples only.
- Do not include secrets, tokens, credentials, .env files, private data, backend provider bypass paths, fake testimonials, or unsupported claims.
- Do not create future batch files.
- Do not include unrelated files.
- Do not add frameworks, package managers, or build steps.
```

## Manual Batch With Handoff Prompt

Use this prompt when ChatGPT should create a compiled batch handoff file.

```text
Generate a compiled handoff Markdown file for Batch [NUMBER].

Batch title:
[title]

Files:
[file]
[file]
[file]
[file]

The handoff file should be named:

batch-handoffs/batch-[NUMBER]-files.md

Output the complete contents of that handoff file.

The handoff file must include:
1. Batch title
2. File list
3. One section per file
4. Full file path as the heading
5. Full file contents inside fenced code blocks
6. Validation checklist
7. PR notes

Rules:
- Include complete file contents.
- Do not summarize.
- Use public-safe language.
- Use synthetic examples only.
- Do not include secrets/private data.
- Do not include unsupported claims.
```

## ChatGPT File Draft Prompt

Use this for one file.

```text
Generate the complete contents for this repo file:

[file path]

Repo:
JFeimster/ai-agent-library

Purpose:
[purpose]

Audience:
[audience]

Required sections:
[sections]

Constraints:
- Static-first and documentation-first.
- Use repo-relative paths.
- Use lowercase kebab-case slugs.
- Use public-safe language.
- Use synthetic examples only.
- Do not include secrets, tokens, .env files, private data, backend provider bypass paths, fake testimonials, or unsupported claims.
- Make the file complete and useful, not a stub.

Output only:
1. The file path heading
2. A fenced code block with complete file contents
```

## ChatGPT Prompt Chain Draft Prompt

Use this to create a new prompt-chain file.

```text
Create a complete prompt-chain file for:

[prompt chain name]

Repo path:

prompt-chains/[file-name].md

The prompt chain should help with:

[use case]

Include:
- Purpose
- When to use
- When not to use
- Inputs required
- Operating rules
- Prompt template
- Output format
- Validation
- Stop rules
- Review checklist
- Done means

Rules:
- Use public-safe language.
- Do not include secrets/private data.
- Do not invent repo state.
- Do not encourage auto-merge.
- Do not encourage future-batch work without approval.
- Keep it reusable.
```

## ChatGPT Issue Body Prompt

Use this to create a GitHub issue.

```text
Create a complete GitHub issue body for:

[issue title]

Repo:
JFeimster/ai-agent-library

Issue type:
[agent / skill / knowledge-base / platform-pack / bug / feature / repo maintenance / PR review / batch]

Files involved:
[file]
[file]
[file]

Objective:
[objective]

Include:
- Objective
- Files
- Scope
- Content requirements
- Validation
- Safety requirements
- Out of scope
- Acceptance criteria
- Done means

Rules:
- Keep the issue specific and actionable.
- Use checklists.
- Do not include future unrelated work.
- Use public-safe language.
- Do not include secrets/private data.
```

## ChatGPT PR Review Prompt

Use this to review a PR from pasted diff, summary, or connector output.

```text
Review this pull request for the AI Agent Library repo.

PR:
[PR number/title]

Summary:
[paste summary]

Changed files:
[paste files]

Diff or relevant excerpts:
[paste diff/excerpts]

Review for:
- Scope match
- Expected files
- Unrelated changes
- Markdown completeness
- JSON validity
- YAML/workflow risk
- Static-site behavior if applicable
- Links and paths
- Secrets/private data
- Public-safe language
- Deployment impact
- Merge readiness

Output:
1. Decision: Approve / Comment / Request changes
2. Summary
3. Findings
4. Required changes
5. Suggested PR comment
6. Merge recommendation

Rules:
- Do not assume files not shown.
- Mark uncertainty clearly.
- Do not approve if there are safety, privacy, validation, or scope blockers.
```

## ChatGPT Conflict Recommendation Prompt

Use this when reviewing conflict screenshots or conflict markers.

```text
Review these merge conflicts.

Repo:
JFeimster/ai-agent-library

PR:
[PR number]

Conflicted files:
[file]
[file]

Conflict content:
[paste conflict markers or screenshots description]

For each file, recommend:
- accept current
- accept incoming
- accept both
- manual surgical merge
- close PR and reopen clean branch

Review for:
- Which side preserves repo conventions
- Which side matches issue scope
- Which side avoids deleting useful content
- Which side avoids future-batch leakage
- Which side avoids secrets/private data
- Which side avoids unsafe claims
- Validation needed after repair

Output:
- Per-file recommendation
- Reason
- Exact next steps
- Merge readiness notes
```

## ChatGPT Repo Audit Prompt

Use this for a structured repo audit.

```text
Audit the AI Agent Library repo.

Available repo information:
[paste tree/search results/files]

Audit these areas:
1. Top-level structure
2. GitHub issue templates
3. GitHub workflows
4. Core docs
5. Security/privacy docs
6. Prompt chains
7. Agents
8. Skills
9. Knowledge bases
10. Templates
11. Platforms
12. Portfolio
13. Schemas
14. Registry
15. Examples
16. Site data
17. Static site files

For each area, provide:
- Present files
- Missing files
- Naming issues
- Broken path risks
- Public-safe issues
- Validation concerns
- Recommended next action

Rules:
- Do not invent repo state.
- Clearly distinguish observed facts from recommendations.
- Keep output structured.
```

## ChatGPT Repo Tree Planning Prompt

Use this when converting a desired structure into a batch plan.

```text
Create a sequential batch plan for the AI Agent Library repo.

Desired files:
[paste file list]

Constraints:
- 3–5 files per batch where practical.
- Group related files together.
- Sequence dependencies logically.
- Isolate high-risk files.
- Keep static-first and documentation-first.
- Do not add frameworks/package managers/build steps.
- Use public-safe language.
- Use synthetic examples only.

Output:
- Batch number
- Batch title
- File list
- Intent
- Dependencies
- Validation
- Out of scope
- Recommended first batch

Do not generate file contents yet.
```

## ChatGPT Static Site Page Prompt

Use this for static-site page drafts.

```text
Generate complete static-site files for:

[page or feature]

Repo:
JFeimster/ai-agent-library

Files:
[file.html]
[styles.css if needed]
[script.js if needed]
[data json if needed]

Rules:
- Plain HTML/CSS/JS only.
- No React.
- No Next.js.
- No npm.
- No build step.
- Use accessible semantic HTML.
- Keep links repo-relative.
- Use public-safe language.
- Do not expose private/internal links.
- Use synthetic examples only.
- Include clear CTA text where relevant.

Output:
- Each file path heading
- Complete fenced code block for each file
- Validation checklist
```

## ChatGPT JSON/Data Prompt

Use this for structured data files.

```text
Generate a complete JSON file for:

[file path]

Purpose:
[purpose]

Records needed:
[records]

Required fields:
[fields]

Rules:
- Valid JSON only.
- Two-space indentation.
- Lowercase kebab-case slugs.
- No comments.
- No trailing commas.
- No invented URLs.
- No private data.
- Synthetic examples only.
- Use null for unknown values where appropriate.

Output only the file path heading and fenced JSON code block.
```

## ChatGPT Schema Prompt

Use this for JSON schemas.

```text
Generate a JSON Schema file for:

[file path]

The schema should validate:
[record/object type]

Required properties:
[properties]

Optional properties:
[properties]

Rules:
- Use JSON Schema draft 2020-12 unless another draft is specified.
- Valid JSON only.
- Two-space indentation.
- Include helpful descriptions.
- Use lowercase kebab-case examples for slugs.
- Do not include private data.
- Use synthetic examples only.

Output only the file path heading and fenced JSON code block.
```

## ChatGPT Rewrite Prompt For Public-Safe Language

Use this when reviewing public-facing copy.

```text
Rewrite the following content to be public-safe.

Content:
[paste content]

Rules:
- Remove guaranteed approval claims.
- Remove guaranteed funding claims.
- Remove guaranteed income/revenue claims.
- Remove guaranteed ranking/traffic claims.
- Remove credit repair promises.
- Remove bypass language.
- Keep the message clear and useful.
- Use terms like educational, readiness, compare options, possible fit, terms vary, review required, and human review recommended.
- Include affiliate/referral disclosure language if monetized links are present.
- Preserve legitimate CTAs and URLs.

Output:
- Revised copy
- Claims removed
- Notes
```

## ChatGPT Batch Review Prompt

Use this to review a generated batch before adding it to the repo.

```text
Review this generated batch before repo implementation.

Batch:
[batch number/title]

Files:
[paste generated files]

Check:
- All required files are present.
- File paths are correct.
- Content is complete.
- No unrelated files are included.
- Markdown fences are valid.
- JSON is valid if present.
- YAML is plausible if present.
- No secrets/private data.
- No unsupported claims.
- Public-safe language is used.
- Next batch suggestion is correct.

Output:
- Pass/fail
- Required fixes
- Optional improvements
- Final copy-ready corrected files if needed
```

## ChatGPT Output Format Rules

When generating files, ChatGPT should use:

```md
## `path/to/file.md`

```md
[complete file content]
```
```

For JSON:

```md
## `path/to/file.json`

```json
{
  "example": true
}
```
```

For YAML:

```md
## `path/to/file.yml`

```yaml
name: Example
```
```

## ChatGPT Safety Guardrails

Do not generate:

- API keys
- access tokens
- OAuth secrets
- webhook secrets
- `.env` contents
- private keys
- real customer data
- borrower/client records
- bank statements
- tax records
- credit reports
- IDs
- backend provider bypass paths
- fake testimonials
- unverifiable social proof
- guaranteed funding/approval/income/ranking claims

## ChatGPT Review Checklist

Before finalizing generated repo content:

- [ ] File paths are exact.
- [ ] Content is complete.
- [ ] Markdown fences are closed.
- [ ] JSON validates conceptually.
- [ ] YAML is plausible.
- [ ] No secrets.
- [ ] No private data.
- [ ] No backend provider bypass paths.
- [ ] No unsupported claims.
- [ ] Public-safe language is used.
- [ ] Future work is not executed early.
- [ ] Next batch suggestion is included when useful.

## Done Means

ChatGPT execution prompts are useful when they produce:

- copy-ready file contents
- scoped issue bodies
- usable PR reviews
- safe prompt chains
- clean batch handoffs
- clear next-step sequencing
- less thread clutter
- fewer accidental markdown landmines
