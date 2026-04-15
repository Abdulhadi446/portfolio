---
id: 0015
title: Enforce no cookies policy
stage: general
date: 2026-04-15
surface: agent
model: GPT-5.3-Codex
feature: none
branch: main
user: abdulhadi
command: bro i think we  should just dont use cookies by any mean.
labels: ["privacy", "cookies", "runtime"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - public/site-config-runtime.js
  - src/pages/privacy.astro
  - history/prompts/general/0015-enforce-no-cookies-policy.general.prompt.md
tests:
  - rg check for cookie APIs (pass)
---

## Prompt

bro i think we should just dont use cookies by any mean.

## Response snapshot

Implemented a strict no-cookies approach by setting runtime fetch requests to credentials: "omit" and updating the privacy policy to explicitly state that cookies are not used.

## Outcome

- ✅ Impact: Runtime network calls now avoid credential/cookie exchange, and policy text now documents no-cookie behavior.
- 🧪 Tests: Searched source/runtime for cookie APIs and credentialed fetch usage; none found.
- 📁 Files: Updated runtime request config and privacy policy language.
- 🔁 Next prompts: Optional: add an automated lint check that blocks future cookie API usage.
- 🧠 Reflection: Explicit technical enforcement plus policy wording prevents regressions and ambiguity.

## Evaluation notes (flywheel)

- Failure modes observed: Third-party integrations can reintroduce cookies unless credentials are explicitly omitted.
- Graders run and results (PASS/FAIL): PASS (manual grep checks).
- Prompt variant (if applicable): none.
- Next experiment (smallest change to try): Add a CI grep guard for document.cookie and credentialed fetch include mode.
