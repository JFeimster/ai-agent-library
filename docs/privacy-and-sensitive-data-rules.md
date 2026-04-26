# Privacy and Sensitive Data Rules

When contributing to this repository, you must adhere to strict data privacy and security rules to protect our systems and our clients.

## Core Content Rules

1. **Do not invent source data.** Rely strictly on provided knowledge base or spec materials.
2. **Handle missing values safely.** If a value is missing or unknown, explicitly use `Unknown`.
3. **No Private Client Data.** Do not include any Personally Identifiable Information (PII) or private data related to any real-world clients.
4. **No Secrets.** Do not include any API keys, webhook secrets, tokens, credentials, or passwords in any file.
5. **No Backend Bypasses.** Do not expose backend funding provider bypass paths or unauthorized access methods.
6. **Protect Provider Identities.** Do not expose backend lender/provider names in public-facing Moonshine Capital docs unless explicitly approved.
7. **No Guarantees.** Do not make funding, credit, legal, tax, investment, or financial guarantees.
8. **Keep it practical.** Keep documents structured, implementation-ready, and free from unnecessary or sensitive filler.

## PR Checklist Compliance

Every Pull Request must explicitly verify that:
- [ ] No secrets or API keys are included.
- [ ] No private client data is included.
- [ ] Public-facing funding language remains white-labeled where applicable.
