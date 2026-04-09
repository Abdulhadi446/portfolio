<!--
Sync Impact Report
- Version change: 1.0.0 -> 1.1.0
- Modified principles:
  - Static-first delivery -> Static-first delivery (clarified enforcement and deploy paths)
  - Spec-driven workflow -> Spec-driven workflow (clarified mandatory sequence)
  - Accessibility baseline -> Accessibility baseline (added measurable non-negotiables)
  - Design fidelity with clarity -> Design fidelity with clarity (added requirement traceability)
  - Personal brand accuracy -> Personal brand accuracy (normalized identity constraints)
  - Reusable content model -> Reusable content model (explicit DRY data modeling rule)
  - No silent scope drift -> No silent scope drift (explicit change-control requirement)
- Added sections:
  - Quality Gates
  - Development Workflow
- Removed sections:
  - None
- Templates requiring updates:
  - ✅ /media/abdulhadi/New Volume/AbdulHadi/portfilio/.specify/templates/plan-template.md (reviewed, aligns)
  - ✅ /media/abdulhadi/New Volume/AbdulHadi/portfilio/.specify/templates/spec-template.md (reviewed, aligns)
  - ✅ /media/abdulhadi/New Volume/AbdulHadi/portfilio/.specify/templates/tasks-template.md (reviewed, aligns)
  - ⚠ /media/abdulhadi/New Volume/AbdulHadi/portfilio/.specify/templates/commands/*.md (directory absent; no files to validate)
  - ✅ /media/abdulhadi/New Volume/AbdulHadi/portfilio/.claude/commands/sp.plan.md (agent-specific reference generalized)
- Follow-up TODOs:
  - None
-->
# Trillionir Portfolio Constitution

## Core Principles

### I. Static-first delivery
The site MUST build to static assets and MUST remain deployable on GitHub Pages
(direct Pages or Pages via GitHub Actions). This is non-negotiable because
delivery simplicity and reproducibility are core to project reliability.

### II. Spec-driven workflow
All work MUST follow `/sp.specify` -> `/sp.clarify` (if needed) -> `/sp.plan` ->
`/sp.tasks` -> `/sp.analyze` -> `/sp.implement`. This sequence is required to
prevent hidden assumptions and preserve end-to-end traceability.

### III. Accessibility baseline
Every UI change MUST preserve keyboard access, visible focus states, semantic
HTML structure, and readable contrast. Accessibility is a release gate because
portfolio quality is judged by usability for all users.

### IV. Design fidelity with clarity
UI decisions MUST follow the agreed dark theme and sketch-inspired card layout,
and requirements MUST remain measurable and unambiguous. Design consistency is
required to protect product identity and implementation quality.

### V. Personal brand accuracy
Hero content MUST represent the canonical brand profile: Name `Trillionir`,
Role `Full-Stack + Agentic AI Engineer`, and experience positioning
`intermediate`. Brand truth is mandatory for authenticity and trust.

### VI. Reusable content model
Profile, social links, projects, and collaborator entries MUST be data-driven
and MUST NOT be repeatedly hardcoded in markup. Reuse is required to keep
content maintainable, consistent, and easy to evolve.

### VII. No silent scope drift
Any change affecting UX scope, sections, or acceptance criteria MUST be updated
in spec/plan/tasks before implementation. Governance artifacts are the source of
truth and MUST stay synchronized with delivered behavior.

## Quality Gates

- Specs MUST define what/why without leaking implementation details.
- Plans MUST capture architecture, constraints, sequencing, and risks.
- Tasks MUST map to concrete requirement coverage and execution order.
- The analyze step MUST block implementation when critical conflicts exist.

## Development Workflow

1. Establish or amend requirements in spec artifacts before coding.
2. Confirm dependency and sequencing logic in planning artifacts.
3. Implement only tasks that trace to approved requirements.
4. Reconcile artifacts immediately when scope or acceptance changes.

## Governance

- This constitution supersedes ad-hoc planning and implementation decisions.
- Amendments MUST include explicit edits in this file and a concise rationale.
- Versioning policy MUST follow semantic versioning:
  - MAJOR for incompatible principle/governance redefinitions or removals.
  - MINOR for new principles/sections or materially expanded guidance.
  - PATCH for clarifications and non-semantic editorial refinements.
- Compliance review expectation: each planning and implementation cycle MUST
  verify constitutional adherence before proceeding to the next phase.

**Version**: 1.1.0 | **Ratified**: 2026-04-08 | **Last Amended**: 2026-04-08
