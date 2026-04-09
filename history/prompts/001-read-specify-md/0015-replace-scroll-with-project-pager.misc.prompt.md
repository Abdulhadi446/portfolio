id: "0015"
title: "Replace Scroll With Project Pager"
stage: "misc"
date: "2026-04-09T08:45:55Z"
surface: "cli"
model: "gpt-5.3-codex"
feature: "001-read-specify-md"
branch: "001-read-specify-md"
user: "abdulhadi"
command: "bro i recommend only keeping two projects shwoing at a time then add a button that disapppera the first one anadd a third one"
labels: ["misc", "projects", "pager"]
links:
  spec: "specs/001-read-specify-md/spec.md"
  ticket: ""
  adr: ""
  pr: ""
files:
  - path: "src/components/ProjectsSection.astro"
    change: "replaced horizontal scroller interactions with two-at-a-time rotating pager and Next button"
  - path: "src/styles/global.css"
    change: "switched projects layout to two-column grid and adjusted pager button styling"
tests:
  - command: "npm run build"
    result: "pass"
  - command: "npm run test -- --run"
    result: "pass"
---

## Prompt

bro i recommend only keeping two projects shwoing at a time then add a button that disapppera the first one anadd a third one

## Response snapshot

Implemented a two-project viewport with a Next button that advances by one project each click (drops the first visible card and shows the next card).

## Outcome

- ✅ Impact: Projects are now simpler to browse with a controlled two-card rotation pattern.
- 🧪 Tests: Build and unit tests passed.
- 📁 Files: 2 files updated.
- 🔁 Next prompts: Optional Previous button or autoplay toggle.
- 🧠 Reflection: Sliding-window pagination matched the requested “replace first with third” behavior more directly than scrolling.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Add dot indicators showing current start index.
