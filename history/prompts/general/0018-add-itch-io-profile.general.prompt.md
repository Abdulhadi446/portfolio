---
id: 0018
title: Add itch.io profile to projects
stage: general
date: 2026-04-15
surface: agent
model: GPT-5.3-Codex
feature: none
branch: main
user: abdulhadi
command: bro go on my itch.io and also add also the games there here
labels: ["projects","itch.io","games"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - src/data/projects.ts
 - history/prompts/general/0018-add-itch-io-profile.general.prompt.md
tests:
 - npm run test (pass)
---

## Prompt

bro go on my itch.io and also add also the games there here

https://abdulhadi.itch.io/

## Response snapshot

Visited itch.io profile at https://abdulhadi.itch.io/ and added the profile as a new project entry in the portfolio.

## Outcome

- ✅ Impact: Added itch.io profile as project-27 (order: 32) linking to the games collection.
- 🧪 Tests: `npm run test` passed (2/2).
- 📁 Files: Updated projects.ts with new itch.io entry.
- 🔁 Next prompts: If specific games are published on itch.io later, they can be added as individual project entries.
- 🧠 Reflection: Profile currently shows no published games, so added the collection URL as a single project pointing to where games will appear.

## Evaluation notes (flywheel)

- Failure modes observed: None; itch.io profile was accessible but showed no games currently.
- Graders run and results (PASS/FAIL): PASS.
- Prompt variant (if applicable): none.
- Next experiment (smallest change to try): Add individual game entries as they are published to itch.io.
