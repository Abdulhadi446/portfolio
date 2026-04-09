# constitution.md

## Purpose
Defines non-negotiable principles for building Trillionir's portfolio as an
intermediate-level engineering showcase.

## Project Principles
1. **Static-first delivery**: The site MUST be buildable as static assets and deployable on GitHub Pages (direct Pages or Pages via GitHub Actions).
2. **Spec-driven workflow**: Work MUST flow through `/sp.specify` → `/sp.clarify` (if needed) → `/sp.plan` → `/sp.tasks` → `/sp.analyze` → `/sp.implement`.
3. **Accessibility baseline**: Every implemented UI change MUST preserve keyboard access, visible focus states, semantic structure, and readable contrast.
4. **Design fidelity with clarity**: UI MUST follow the agreed dark theme + sketch-inspired card layout while keeping requirements measurable and unambiguous.
5. **Personal brand accuracy**: Hero content MUST represent:
   - Name: Trillionir
   - Role: Full-Stack + Agentic AI Engineer
   - Experience positioning: intermediate
6. **Reusable content model**: Profile, social links, projects, and collaborator entries MUST be data-driven (not hardcoded repeatedly in markup).
7. **No silent scope drift**: Any change that affects UX scope, sections, or acceptance criteria MUST be reflected in spec/plan/tasks before implementation.

## Quality Gates
- Specs define **what/why** (not framework internals).
- Plans define architecture, constraints, sequencing, and risks.
- Tasks map to clear requirement coverage.
- Analyze step blocks implementation when critical conflicts exist.

## Governance
- This file overrides ad-hoc decisions for planning and implementation.
- Amendments require explicit update in this file plus a short rationale.
- Versioning: semantic (`MAJOR.MINOR.PATCH`) for principle changes.

**Version**: 1.0.0  
**Ratified**: 2026-04-08  
**Last Amended**: 2026-04-08
