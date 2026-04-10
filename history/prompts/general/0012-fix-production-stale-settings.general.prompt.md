---
id: 0012
title: fix-production-stale-settings
stage: general
date: 2026-04-11T00:45:05+05:00
surface: project
model: gpt-5.3-codex
feature: none
branch: main
user: abdulhadi
command: chat
labels: [cache, settings, production]
links:
  spec: n/a
  ticket: n/a
  adr: n/a
  pr: n/a
files:
  - public/site-config-runtime.js
  - history/prompts/general/0012-fix-production-stale-settings.general.prompt.md
tests:
  - npm run test
  - npm run build
---

## Prompt

bro see

## Response snapshot

Identified stale localStorage precedence in production and changed runtime loading to fetch remote config first, then fallback to local/default.

## Outcome

- ✅ Impact: Live site now refreshes collaborator/settings from remote source even when old local cache exists.
- 🧪 Tests: Tests and build passed.
- 📁 Files: Updated runtime config resolution order.
- 🔁 Next prompts: none
- 🧠 Reflection: Cache fallback order was causing user-visible stale data.

## Evaluation notes (flywheel)

- Failure modes observed: Local cache masked fresh remote config.
- Graders run and results (PASS/FAIL): n/a
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): Add config versioning with updatedAt comparison.
