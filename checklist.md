# checklist.md

## Purpose
Generate quality checklists that validate requirements quality (not implementation behavior) after `/sp.plan`.

## Usage stage
Run after plan creation to verify requirement completeness, clarity, and consistency before implementation.

## Checklist quality dimensions
1. **Completeness**: Are all required behaviors/states documented?
2. **Clarity**: Are requirements specific and unambiguous?
3. **Consistency**: Do requirements align across sections/artifacts?
4. **Measurability**: Can success criteria be objectively validated?
5. **Coverage**: Are primary, alternate, and edge scenarios addressed?

## Portfolio-focused checklist categories

### Requirement Completeness
- Are requirements defined for intro card, projects, and collaborators sections?
- Are responsive requirements defined for mobile/tablet/desktop?
- Are empty/error states specified for missing images or empty lists?
- Are Trillionir's name, role title, and profile links explicitly required?

### Requirement Clarity
- Is "theme like reference" translated into explicit visual constraints?
- Is section naming finalized and unambiguous?
- Are link behavior requirements explicit (external link handling, labels)?
- Is "agentic AI engineer" represented with concrete portfolio evidence requirements?

### Requirement Consistency
- Do spec, plan, and tasks use the same section names and data model terms?
- Are interaction requirements consistent across all card types?

### Acceptance Criteria Quality
- Are success criteria measurable and technology-agnostic?
- Can each criterion be validated without referring to implementation internals?

### Non-Functional Requirements
- Are accessibility requirements explicitly defined?
- Are GitHub Pages deployment constraints documented?
- Are performance/usability expectations stated for common devices?

### Dependencies & Assumptions
- Are assumptions about content availability documented (projects/collaborators)?
- Are optional enhancements (animations/carousels) clearly marked out-of-scope for v1?
- Is intermediate-level positioning reflected consistently in spec language and success criteria?

## Output template
- [ ] CHK001 Are all mandatory sections and user journeys specified? [Completeness]
- [ ] CHK002 Are visual requirements measurable rather than subjective? [Clarity]
- [ ] CHK003 Are terms consistent across artifacts? [Consistency]
- [ ] CHK004 Are acceptance criteria objectively verifiable? [Measurability]
- [ ] CHK005 Are edge cases and fallback states specified? [Coverage]

## Done criteria
Checklist is complete when all items pass or remaining gaps are explicitly logged with owner and follow-up action.
