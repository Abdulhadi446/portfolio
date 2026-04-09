id: "0005"
title: "Analyze cross artifact consistency"
stage: "misc"
date: "2026-04-08"
surface: "agent"
model: "gpt-5.3-codex"
feature: "001-read-specify-md"
branch: "001-read-specify-md"
user: "abdulhadi"
command: "sp.analyze"
labels: ["analysis", "consistency", "quality-gate"]
links:
  spec: "/media/abdulhadi/New Volume/AbdulHadi/portfilio/specs/001-read-specify-md/spec.md"
  ticket: null
  adr: null
  pr: null
files:
  - "specs/001-read-specify-md/spec.md"
  - "specs/001-read-specify-md/plan.md"
  - "specs/001-read-specify-md/tasks.md"
  - "analyze.md"
  - "history/prompts/001-read-specify-md/0005-analyze-cross-artifact-consistency.misc.prompt.md"
tests:
  - "Not run (read-only artifact analysis)"
---

## Prompt

<current_datetime>2026-04-08T18:09:47.334Z</current_datetime>

Use the skill tool to invoke the "sp.analyze" skill, then follow the skill's instructions to help with: read the contents of analyze.md

<reminder>
<sql_tables>No tables currently exist. Default tables (todos, todo_deps) will be created automatically when you first use the SQL tool.</sql_tables>
</reminder>

## Response snapshot

Executed a read-only consistency analysis over `spec.md`, `plan.md`, and
`tasks.md` using `analyze.md` checks. Identified one CRITICAL constitution
alignment gap (missing explicit intermediate experience positioning coverage),
plus additional HIGH/MEDIUM/LOW issues around testing and measurable design/
performance criteria, and produced coverage metrics with requirement-to-task
mapping.

## Outcome

- ✅ Impact: Implementation risk hotspots are surfaced before `/sp.implement`.
- 🧪 Tests: Not applicable for analysis stage.
- 📁 Files: Analysis consumed artifacts read-only; only PHR added.
- 🔁 Next prompts: Apply top remediation edits, then re-run `/sp.analyze`.
- 🧠 Reflection: Constitution-derived checks exposed a critical spec/task omission early.

## Evaluation notes (flywheel)

- Failure modes observed: Interactive remediation preference unavailable.
- Graders run and results (PASS/FAIL): Not run.
- Prompt variant (if applicable): read-only-analysis
- Next experiment (smallest change to try): Add automated constitution-derived
  requirement keys into the coverage map generation step.
