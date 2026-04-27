# My GPTs Source Data

This folder documents how exported ChatGPT Custom GPT data is normalized for the AI Agent Library.

## Canonical source

Preferred source file at repo root:

- `My GPTs. (4-26-26).json`

CSV fallback:

- `My GPTs. (4-26-26).csv`

JSON is preferred because it avoids CSV edge cases with commas, quotes, emojis, long descriptions, and signed profile-image URLs.

## Generated / normalized file

- `my-gpts-normalized.json`

This file converts the raw export into library-ready metadata for platform packs, portfolio pages, static site rendering, and agent-conversion planning.

## Update workflow

1. Export the latest GPT inventory from ChatGPT.
2. Commit the raw JSON export at the repo root or under this folder.
3. Normalize each GPT into the library schema.
4. Refresh:
   - `platforms/chatgpt-gpts/my-custom-gpts-inventory.md`
   - `platforms/chatgpt-gpts/my-custom-gpts-index.csv`
   - `portfolio/custom-gpts/custom-gpt-inventory.md`
   - `portfolio/custom-gpts/custom-gpt-index.csv`
   - `site-data/custom-gpts.json`
5. Review visibility before publishing anything publicly.

## Safety note

Do not expose internal funding-routing logic, private client data, secrets, API keys, or backend-provider bypass paths in public GPT library pages.
