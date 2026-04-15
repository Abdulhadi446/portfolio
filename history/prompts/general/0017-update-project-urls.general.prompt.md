---
id: 0017
title: Update project URLs
stage: general
date: 2026-04-15
surface: agent
model: GPT-5.3-Codex
feature: none
branch: main
user: abdulhadi
command: update the upptime's url to "https://abdulhadi446.github.io/upptime/"
labels: ["projects","urls","content-update"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - src/data/projects.ts
 - history/prompts/general/0017-update-project-urls.general.prompt.md
tests:
 - npm run test (pass)
---

## Prompt

update the upptime's url to "https://abdulhadi446.github.io/upptime/"
update the Mouse-To_Game's url to "https://abdulhadi446.github.io/Mouse-To_Game/"
update sodeom url to "https://sodeom.com/"
update the agentos's url to "https://agentos.sodeom.com/download"
update the moltbooks posts url to "https://www.moltbook.com/u/Sodeom"
update chatbot's url to "https://abdulhadi446.github.io/chatbot/"
update mcq's url to "mcq.sodeom.com"
update Agentos web's url to "https://agentos.sodeom.com/"
updates games url to "https://game-list.sodeom.com/"
update games-of-games url to "https://streamsplay.netlify.app/"

## Response snapshot

Updated all requested project URLs in the projects data file and validated changes with passing tests.

## Outcome

- ✅ Impact: All ten requested project links now point to the provided destination URLs.
- 🧪 Tests: `npm run test` passed (2 tests).
- 📁 Files: Updated project URL entries in data source.
- 🔁 Next prompts: Push these changes to GitHub if desired.
- 🧠 Reflection: Applied `https://mcq.sodeom.com` to satisfy existing URL schema rules while matching requested host.

## Evaluation notes (flywheel)

- Failure modes observed: Initial test command included unsupported flag for this Vitest setup.
- Graders run and results (PASS/FAIL): PASS.
- Prompt variant (if applicable): none.
- Next experiment (smallest change to try): Add a focused test asserting these specific production URLs.
