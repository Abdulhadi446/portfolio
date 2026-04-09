# clarify.md

## Purpose
Ask structured, high-impact questions to remove ambiguity before planning.

## Usage stage
Run after `specify.md` is drafted and before `plan.md`.

## Rules
1. Ask only questions that materially change scope, UX, architecture, data model, or acceptance criteria.
2. Ask one question at a time.
3. Prefer constrained options with a recommended default.
4. Keep total clarification questions low (target 3-5).
5. Record accepted answers directly in the active spec.

## Structured question set for this portfolio

### Q1. Final section naming
**Question**: Should the section label be exactly "Other Trillioniars" or corrected wording?
- A: Keep "Other Trillioniars"
- B: Use "Other Trillionaires" (recommended)
- C: Use custom label

### Q2. Theme strictness
**Question**: Should theme matching prioritize exact palette mimicry or same mood/contrast?
- A: Exact color matching to reference logos
- B: Same mood and contrast, flexible palette (recommended)
- C: Fully custom dark palette

### Q3. Projects behavior
**Question**: Should projects be static cards only in v1 or include filtering/carousel behavior?
- A: Static card grid/list only (recommended)
- B: Carousel navigation
- C: Filter by tags

### Q4. Collaborator cards
**Question**: Are collaborators real profiles at launch or placeholders allowed?
- A: Real profiles required at launch
- B: Placeholders allowed for v1 (recommended)
- C: Hide section until real profiles exist

### Q5. Typography direction
**Question**: Should typography favor sketch-like decorative headings or fully clean UI type?
- A: Sketch-like headings + readable body (recommended)
- B: Fully clean sans-serif
- C: Custom pair provided by user

### Q6. Experience framing depth
**Question**: How strongly should we emphasize intermediate level in copy?
- A: Explicitly mention "Intermediate" in hero/about
- B: Imply through projects and achievements only (recommended)
- C: Emphasize senior-level tone without level labels

### Q7. Agentic AI proof points
**Question**: What evidence should support "Agentic AI Engineer" positioning in v1?
- A: 1-2 highlighted AI/automation projects (recommended)
- B: Tool/stack badges only
- C: Short case-study cards with outcomes

## Output format
- `Q: <question>`
- `A: <selected option or short answer>`
- `Impact: <what changes in spec/plan>`
