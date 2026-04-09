# Tasks: Trillionir Portfolio Baseline

**Input**: Design documents from `/specs/001-read-specify-md/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No explicit TDD requirement was requested in the feature spec, so dedicated test-writing tasks are not included in this task list.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and baseline structure

- [X] T001 Initialize Astro + TypeScript project configuration in `package.json`, `astro.config.*`, and `tsconfig.json`
- [X] T002 Create baseline source directories and placeholder index files in `src/components/`, `src/layouts/`, `src/pages/`, `src/data/`, and `src/styles/`
- [X] T003 [P] Add static deployment workflow scaffold for GitHub Pages in `.github/workflows/pages.yml`
- [X] T004 [P] Add shared style tokens and dark theme base stylesheet in `src/styles/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure required before user stories

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Define schema-backed content types for `Profile`, `SocialLink`, `Project`, and `Collaborator` (including profile experience positioning) in `src/data/schema.ts`
- [X] T006 Implement structured content source files for baseline data in `src/data/profile.*`, `src/data/social-links.*`, `src/data/projects.*`, and `src/data/collaborators.*` with intermediate experience positioning populated
- [X] T007 [P] Implement shared card and layout primitives in `src/components/` and `src/layouts/`
- [X] T008 Create resilient media/link helper utilities for missing image and broken URL handling in `src/lib/content-utils.ts`
- [X] T009 [P] Add accessibility baseline helpers for focus visibility and semantic landmarks in `src/styles/accessibility.css` and `src/layouts/BaseLayout.*`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Understand Profile Quickly (Priority: P1) 🎯 MVP

**Goal**: Ensure visitors immediately understand identity, role, intermediate positioning, and can reach social links

**Independent Test**: Open homepage and verify identity + intermediate positioning text plus keyboard-accessible hero social links

### Implementation for User Story 1

- [X] T010 [P] [US1] Implement hero/profile component using `Profile` entity in `src/components/HeroProfile.*`
- [X] T011 [P] [US1] Implement social links component from `SocialLink` data in `src/components/SocialLinks.*`
- [X] T012 [US1] Compose hero section in homepage route using layout + components in `src/pages/index.*`
- [X] T013 [US1] Ensure hero copy and semantics match brand accuracy requirements, including explicit intermediate positioning, in `src/pages/index.*` and `src/components/HeroProfile.*`

**Checkpoint**: User Story 1 is independently functional and demonstrable (MVP)

---

## Phase 4: User Story 2 - Review Featured Projects (Priority: P2)

**Goal**: Present projects as static cards with direct outbound links and AI highlight support

**Independent Test**: Confirm project cards render from data, links open, and no carousel/filter controls exist

### Implementation for User Story 2

- [X] T014 [P] [US2] Implement project card component in `src/components/ProjectCard.*`
- [X] T015 [US2] Implement static project list/grid section in `src/components/ProjectsSection.*`
- [X] T016 [US2] Integrate projects section into homepage composition in `src/pages/index.*`
- [X] T017 [US2] Enforce AI-highlight display rules (1-2 highlights) in `src/data/schema.ts` and `src/components/ProjectsSection.*`

**Checkpoint**: User Stories 1 and 2 both work independently

---

## Phase 5: User Story 3 - Discover Collaborators and External Presence (Priority: P3)

**Goal**: Render collaborator cards under the corrected section label with safe placeholder behavior

**Independent Test**: Confirm collaborator cards and links render correctly, including placeholder entries

### Implementation for User Story 3

- [X] T018 [P] [US3] Implement collaborator card component in `src/components/CollaboratorCard.*`
- [X] T019 [US3] Implement `Other Trillionaires` section component in `src/components/CollaboratorsSection.*`
- [X] T020 [US3] Integrate collaborators section into homepage composition in `src/pages/index.*`
- [X] T021 [US3] Implement placeholder-safe rendering logic for collaborator records in `src/components/CollaboratorCard.*` and `src/lib/content-utils.ts`

**Checkpoint**: All user stories are independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final hardening across all stories

- [X] T022 [P] Update developer usage notes for content updates in `README.md`
- [X] T023 Verify OpenAPI contract alignment with delivered content schema in `specs/001-read-specify-md/contracts/portfolio-content.openapi.yaml` and `src/data/schema.ts`
- [X] T024 [P] Apply final accessibility and responsive polish fixes in `src/styles/` and `src/components/`
- [X] T025 Run quickstart validation checklist and document findings in `specs/001-read-specify-md/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories
- **User Stories (Phase 3+)**: Depend on Foundational completion
  - US1 (P1) should be completed first for MVP
  - US2 and US3 can proceed after foundational completion, but sequence here follows priority
- **Polish (Phase 6)**: Depends on completion of all target user stories

### User Story Dependencies

- **US1**: Depends only on foundational phase
- **US2**: Depends on foundational phase; reuses shared card/layout infrastructure
- **US3**: Depends on foundational phase; reuses shared card/layout infrastructure

### Parallel Opportunities

- Setup: T003, T004 can run in parallel after T001 starts structure setup
- Foundational: T007 and T009 can run in parallel after T005
- US1: T010 and T011 can run in parallel
- US2: T014 can run in parallel with US1 completion prep work
- US3: T018 can run in parallel with late US2 integration tasks
- Polish: T022 and T024 can run in parallel

---

## Parallel Example: User Story 1

```bash
Task: "T010 [US1] Implement hero/profile component in src/components/HeroProfile.*"
Task: "T011 [US1] Implement social links component in src/components/SocialLinks.*"
```

## Parallel Example: User Story 2

```bash
Task: "T014 [US2] Implement project card component in src/components/ProjectCard.*"
Task: "T017 [US2] Enforce AI-highlight rules in src/data/schema.ts and src/components/ProjectsSection.*"
```

## Parallel Example: User Story 3

```bash
Task: "T018 [US3] Implement collaborator card component in src/components/CollaboratorCard.*"
Task: "T021 [US3] Implement placeholder-safe rendering in src/components/CollaboratorCard.* and src/lib/content-utils.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate MVP behavior against US1 independent test

### Incremental Delivery

1. Add US1 for identity and core social navigation
2. Add US2 for project evidence cards
3. Add US3 for collaborator/community visibility
4. Apply Phase 6 polish and quickstart validation
