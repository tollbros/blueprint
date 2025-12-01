# Production Readiness & Reuse Notes for No Index Template

## Current State
- Header, form card, select, checkbox, and pills are in place; styling aligns to the Toll Brothers palette/typography tokens.
- Interactive affordances (hover/focus) are implemented but behavior specs are inferred from patterns, not from UI mocks.

## Recommendations to Ship
- **Cross-browser QA:** Verify on Safari/iOS (hero overlay + centered title), Chrome/Android, and Firefox. Pay attention to select dropdown positioning and checkbox icon rendering.
- **Accessibility:** Add `aria-expanded` to `Select`, focus rings for bedroom pills/tiles, and ensure checkbox/label hit areas meet 44px minimum.
- **State management:** Wire header/search/menu hooks to analytics or routing; ensure `onSubmit` payload is validated before submission.
- **Assets resilience:** Ensure hero/logo URLs are configurable via props or env; add error handling for hero image similar to logo.
- **Responsive checks:** Test at 320px/375px/414px widths; ensure header and form spacing stay consistent.

## Componentization Opportunities
- **Hero/Header:** Extract as `HeroHeader` with slots for breadcrumb, title, and action icons; make logo/search/menu icons props for reuse across pages.
- **Form Controls:** Bedroom pills → `SegmentedPills` component; Home type tiles → `SelectableTiles` with icon slot; Timeline checkboxes → `RichCheckboxList` with helper text support.
- **Behaviors:** Create a shared `InteractionTokens` (hover/focus/active overlays, shadows) consumed by buttons, pills, tiles, and checkboxes to ensure uniform motion and feedback.

## Handling Missing Behavior Specs (Process)
- **Behavior contract doc:** Add a lightweight markdown template (e.g., `docs/behavior-contract.md`) that designers fill in per component: hover, focus, active, disabled, pressed, loading, error, and motion specs. Include token references (overlay colors, shadow levels, radii).
- **Storybook controls:** Add stories with knobs for interaction states (hover/focus/active/disabled) so reviewers can see expected behaviors even when mocks omit them.
- **Design token mapping:** Maintain a small table in the repo that maps “state” → “overlay/shadow/border” tokens (same for all buttons/shapes). This lets designers vary shape/size while keeping behavior consistent.
- **Review checklist:** Require PRs to include: selected/unselected/hover/focus screenshots, keyboard path notes, and fallback assets plan. Keeps velocity while avoiding ambiguity.
