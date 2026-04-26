# Import Manifest

This repo is intended to receive the generated AI Agent Library files from the current ChatGPT build package.

## Generated package

Local artifact created in ChatGPT:

- `notion-ai-agent-library-with-vercel-web-apps.zip`

## Target file structure

```text
ai-agent-library/
  README.md
  agent-index.json
  agents/
    01-funding-pipeline-triage-agent.md
    02-incomplete-application-rescue-agent.md
    03-partner-launch-kit-builder.md
    04-broker-profile-builder.md
    05-funding-tool-router-agent.md
    06-content-to-agent-repurposer.md
    07-sop-goblin.md
    08-vercel-asset-librarian.md
    09-partner-training-coach.md
    10-local-referral-partner-scout.md
    11-crm-note-cleaner.md
    12-inbox-revenue-signal-scanner.md
    13-applicant-support-agent.md
    14-market-intel-scout.md
    15-seo-article-brief-builder.md
    16-video-to-blog-transformer.md
    17-lead-magnet-factory-agent.md
    18-affiliate-offer-matchmaker.md
    19-business-credit-builder-coach.md
    20-cash-flow-copilot.md
    21-micro-acquisition-deal-screener.md
    22-grant-opportunity-scout.md
    23-meeting-to-action-agent.md
    24-community-event-builder.md
    25-agency-offer-architect.md
    26-ai-wrapper-product-manager.md
    27-notion-database-architect.md
    28-automation-workflow-spec-writer.md
  templates/
    agent-build-checklist.md
    agent-evaluation-scorecard.md
    notion-database-schema.md
  platforms/
    vercel-web-apps/
      README.md
      architecture.md
      agent-to-vercel-conversion-guide.md
      starter-project-spec.md
      environment-variables.md
      deployment-checklist.md
      api-route-patterns.md
      ui-patterns.md
      lead-capture-patterns.md
      monetization-patterns.md
      vercel-project-matrix.md
      manifest.json
      example-app-specs/
        funding-pipeline-triage-web-app.md
        local-referral-partner-scout-web-app.md
        partner-launch-kit-builder-web-app.md
        sop-goblin-web-app.md
        vercel-asset-librarian-web-app.md
      templates/
        nextjs-agent-app-readme.md
        app-router-api-route-template.ts
        agent-config-template.json
        lead-capture-schema.json
        vercel-env-example.env
```

## Local import command

After downloading/unzipping the generated package:

```bash
git clone https://github.com/JFeimster/ai-agent-library.git
cd ai-agent-library
cp -R /path/to/notion-ai-agent-library/* .
git add .
git commit -m "Add agent library docs and Vercel platform pack"
git push origin main
```

## Notes

The repo was initialized from ChatGPT using the GitHub connector. The full generated package should be copied into this repository as the next import step.
