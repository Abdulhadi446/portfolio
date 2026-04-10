---
id: 0001
title: keep-admin-local-only
stage: general
date: 2026-04-10T15:27:42+05:00
surface: project
model: gpt-5.3-codex
feature: none
branch: main
user: abdulhadi
command: chat
labels: [admin, localhost, production-safety]
links:
  spec: n/a
  ticket: n/a
  adr: n/a
  pr: n/a
files:
  - src/pages/admin.astro
  - public/admin-panel.js
  - src/layouts/BaseLayout.astro
  - src/pages/index.astro
  - src/components/HeroProfile.astro
  - .gitignore
tests:
  - npm run test
  - npm run build
---

## Prompt

bro but keep admin locally

## Response snapshot

Restored a localhost-only `/admin` flow and wired local runtime config loading while keeping admin assets ignored from git so production remains unaffected.

## Outcome

- ✅ Impact: Local admin editing is available again during localhost development.
- 🧪 Tests: Unit tests and static build both passed.
- 📁 Files: Added local admin page and script; updated layout and homepage local config bootstrap.
- 🔁 Next prompts: Push tracked changes to main if desired.
- 🧠 Reflection: External scripts were required to stay compatible with CSP.

## Evaluation notes (flywheel)

- Failure modes observed: Inline script blocked by CSP.
- Graders run and results (PASS/FAIL): n/a
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): Add explicit localhost banner and environment guard test.
