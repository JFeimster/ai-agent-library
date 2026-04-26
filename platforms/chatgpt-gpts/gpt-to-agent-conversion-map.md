# GPT to Agent Conversion Map

This document explains how to map standard agent specs from `agents/` to the configuration fields in the ChatGPT Custom GPT editor.

## Mapping Fields

| Standard Agent Field | ChatGPT Field | Notes |
|---|---|---|
| Productized Agent Concept | *Not mapped* | Internal use only. |
| Buyer | *Not mapped* | Use to tune tone in instructions. |
| Agent Bio / Description | **Description** | Keep under 300 characters. |
| Suggested Instructions | **Instructions** | Core prompt logic. Expand with Guardrails. |
| Rules and Guardrails | **Instructions** | Append to the bottom of the prompt. |
| Conversation Starters | **Conversation Starters** | Add 3-4 distinct entry points. |
| Prompt Library | *Not mapped* | Use as inspiration or provide in knowledge files. |
| Recommended Knowledge | **Knowledge Files** | Upload as PDF, TXT, or JSON. |
| Integrations / Connectors | **Actions** | Configure OpenAPI schemas if required. |
