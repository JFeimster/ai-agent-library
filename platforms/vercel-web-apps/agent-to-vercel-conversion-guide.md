# Agent-to-Vercel Conversion Guide

## Step 1: Choose app format

- Public lead magnet
- Internal ops tool
- Partner portal tool
- Embeddable widget
- Paid diagnostic

## Step 2: Extract agent config

From each agent markdown file, extract name, buyer, pain solved, bio, instructions, rules, prompts, output sections, knowledge files, integrations, and monetization path.

## Step 3: Define input fields

Recommended fields:

```json
{"agent_slug":"local-referral-partner-scout","name":"","email":"","company":"","market":"","source_notes":"","desired_output":""}
```

## Step 4: Define output sections

Use the output format from the agent spec.

## Step 5: Build prompt

System instructions + rules + structured user input + required output format.

## Step 6: Add lead capture

Route to Notion, HubSpot, Google Sheets, or n8n.

## Step 7: Deploy on Vercel

Set env vars, test API routes, test webhook, add analytics, launch.
