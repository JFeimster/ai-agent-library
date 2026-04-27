# GPT Source-of-Truth Rules

This document defines how Custom GPT source data flows through the AI Agent Library.

## Source hierarchy

1. Raw ChatGPT export JSON
2. Raw ChatGPT export CSV fallback
3. Normalized GPT JSON
4. Generated markdown / CSV inventory files
5. Static-site JSON data

## Raw exports

Raw exports should be preserved, not hand-edited.

Current source examples:

- `My GPTs. (4-26-26).json`
- `My GPTs. (4-26-26).csv`

## Normalized data

Normalized data lives here:

- `source-data/my-gpts/my-gpts-normalized.json`

This file powers:

- platform inventory pages
- portfolio pages
- conversion maps
- static site data

## Generated inventory files

These files should be regenerated from normalized data whenever possible:

- `platforms/chatgpt-gpts/my-custom-gpts-inventory.md`
- `platforms/chatgpt-gpts/my-custom-gpts-index.csv`
- `portfolio/custom-gpts/custom-gpt-inventory.md`
- `portfolio/custom-gpts/custom-gpt-index.csv`
- `site-data/custom-gpts.json`

## Manual editing rule

Do not manually edit generated inventory files unless:

- the normalized file is wrong
- the raw source is missing a field
- a safety classification must be corrected
- a temporary patch is needed before a full regeneration

## Update process

1. Add the latest raw export.
2. Normalize the export.
3. Review categories, brands, visibility, and status.
4. Regenerate markdown, CSV, and site-data files.
5. Review public/internal safety rules.
6. Commit in a scoped PR.

## Safety review

Before a GPT is marked public, confirm it does not expose:

- private client data
- backend-provider relationships
- approval guarantees
- legal/tax/credit repair/financial advice
- API keys, secrets, or credentials
