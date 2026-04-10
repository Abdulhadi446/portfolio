---
id: 0005
title: fix-projects-removed-from-config
stage: general
date: 2026-04-10T16:31:51+05:00
surface: project
model: gpt-5.3-codex
feature: none
branch: main
user: abdulhadi
command: chat
labels: [admin, bugfix, config]
links:
  spec: n/a
  ticket: n/a
  adr: n/a
  pr: n/a
files:
  - public/site-config-runtime.js
  - src/pages/admin.astro
  - public/admin-panel.js
tests:
  - npm run test
  - npm run build
---

## Prompt

ro why you rem0oved all the porjects

## Response snapshot

Found the root cause (empty remote config arrays), added fallback normalization to restore defaults for empty collections, and added save-time guard preventing empty project saves.

## Outcome

- ✅ Impact: Projects no longer disappear from empty/bad admin saves; defaults are restored automatically.
- 🧪 Tests: Tests and build passed after fix.
- 📁 Files: Runtime config normalization + admin validation + admin default-config availability.
- 🔁 Next prompts: Push fix to main.
- 🧠 Reflection: Guardrails are necessary when persisting user-edited arrays globally.

## Evaluation notes (flywheel)

- Failure modes observed: Empty arrays from remote config overwrote content.
- Graders run and results (PASS/FAIL): n/a
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): Add explicit per-section minimum requirements before save.
