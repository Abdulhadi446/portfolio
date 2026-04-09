id: "0012"
title: "List GitHub and Org Repos"
stage: "misc"
date: "2026-04-08T20:06:39Z"
surface: "cli"
model: "gpt-5.3-codex"
feature: "001-read-specify-md"
branch: "001-read-specify-md"
user: "abdulhadi"
command: "bro list all the repos on my github as projects and also i have some orgs too \"https://github.com/orgs/agents-os/repositories\", \"https://github.com/orgs/sodeom/repositories\""
labels: ["misc", "projects", "github-repos"]
links:
  spec: "specs/001-read-specify-md/spec.md"
  ticket: ""
  adr: ""
  pr: ""
files:
  - path: "src/data/projects.ts"
    change: "replaced static sample projects with all public repos from Abdulhadi446, agents-os, and sodeom"
tests:
  - command: "npm run test -- --run"
    result: "pass"
  - command: "npm run build"
    result: "pass"
---

## Prompt

bro list all the repos on my github as projects and also i have some orgs too "https://github.com/orgs/agents-os/repositories", "https://github.com/orgs/sodeom/repositories"

## Response snapshot

Fetched public repositories from your user account and the two specified orgs, then updated the portfolio projects dataset so every repo appears as a project card.

## Outcome

- ✅ Impact: Projects now map directly to your real GitHub and org repositories.
- 🧪 Tests: Unit tests and production build passed.
- 📁 Files: 1 content data file updated.
- 🔁 Next prompts: Optionally add filters/grouping by owner or language.
- 🧠 Reflection: Preserved schema invariants by keeping exactly two AI-highlighted repos.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Add automated sync script for periodic repo refresh.
