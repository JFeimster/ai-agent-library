# GPT Knowledge File Checklist

Follow these best practices when preparing and uploading knowledge files for Custom GPTs.

## Checklist

- [ ] **Format:** Prefer `.txt`, `.md`, or clean `.csv` files over complex `.pdf` files.
- [ ] **Sanitization:** Remove all PII, client names, and confidential financials.
- [ ] **Structure:** Use clear headers and key-value pairs so the retrieval system can parse it easily.
- [ ] **Size:** Keep files focused. Split massive monolithic files into logical domain-specific chunks.
- [ ] **Naming:** Use clear, descriptive file names (e.g., `funding-product-matrix-2024.csv`).
- [ ] **Verification:** Prompt the GPT to query the file immediately after uploading to ensure it reads correctly.
