# Automation Examples

Synthetic automation examples for webhook events, CRM triggers, partner attribution, content workflows, review queues, and static browser tools.

## Purpose

This folder shows how to describe automations in a safe, reviewable, implementation-ready format.

## Rules

- Use synthetic payloads.
- Do not include API keys, access tokens, webhook secrets, or production endpoints.
- Do not include real customer records.
- Do not include private CRM exports.
- Require human review for high-stakes workflows.
- Draft before sending.
- Validate before writing to production systems.
- Log failures and fallback behavior.

## Recommended Example Format

```md
# Example — [Workflow Name]

## Scenario

Short synthetic scenario.

## Trigger

Event or user action that starts the workflow.

## Inputs

- Input 1
- Input 2

## Workflow Steps

1. Step one
2. Step two
3. Step three

## Example Payload

Synthetic JSON payload.

## Human Review Required?

Yes / No

## Failure Modes

- Failure mode 1
- Failure mode 2

## Fallback Behavior

What should happen if the workflow fails.
```

## Related Files

```text
knowledge-base/automation/README.md
knowledge-base/automation/examples.md
schemas/webhook-event.schema.json
examples.html
prompt-generator.html
skill-builder.html
```
