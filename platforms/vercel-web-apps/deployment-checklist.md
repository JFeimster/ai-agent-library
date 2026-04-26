# Vercel Deployment Checklist

## Pre-Deployment

- [ ] Confirm app builds locally.
- [ ] Confirm no secrets are committed.
- [ ] Confirm `.env.local` is ignored.
- [ ] Confirm server routes own all AI/API calls.
- [ ] Confirm agent config exists.
- [ ] Confirm loading state exists.
- [ ] Confirm error state exists.
- [ ] Confirm mobile layout is usable.
- [ ] Confirm CTA is clear.
- [ ] Confirm output is copyable.

## Vercel Project Setup

- [ ] Create Vercel project.
- [ ] Connect GitHub repo.
- [ ] Set framework preset to Next.js.
- [ ] Set root directory if needed.
- [ ] Add environment variables.
- [ ] Deploy preview.
- [ ] Test preview deployment.
- [ ] Promote to production.

## Post-Deployment

- [ ] Test live form.
- [ ] Test AI route.
- [ ] Test webhook.
- [ ] Test output formatting.
- [ ] Test mobile.
- [ ] Add analytics.
- [ ] Add custom domain/subdomain.
- [ ] Add noindex if internal/private.
- [ ] Add sitemap/metadata if public.
- [ ] Add README deployment notes.

## QA Test Cases

| Test | Expected Result |
|---|---|
| Empty form | Shows helpful validation |
| Valid form | Returns structured output |
| Long input | Handles without crashing |
| Missing optional fields | Marks Unknown or skips gracefully |
| AI provider error | Shows retry-friendly message |
| Webhook failure | Still displays result, flags save issue |
| Mobile submission | Works cleanly |

## Launch Decision

- [ ] Internal only
- [ ] Partner beta
- [ ] Public lead magnet
- [ ] Paid tool
- [ ] Embedded widget
