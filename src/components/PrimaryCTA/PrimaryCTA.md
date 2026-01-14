# PrimaryCTA Production Readiness Review with Prompts ✅/🚧

- **API coverage (size/priority/state/icon/fullWidth)** — **Status:** ✅ matches Figma (Base/Small/Large, A/B, Base/Hover/Pressed/Disabled, left/right icon, fullWidth).  
  **Prompt:** “Review if any additional props (e.g., loading, aria-pressed) are needed before shipping PrimaryCTA.”

- **Token alignment (colors/spacing/radius/typography)** — **Status:** ✅ uses palette/tokens and shared CTAButton height/hPadding vars (`--tb-buttons-CTAButton-height-*`, `--tb-buttons-CTAButton-hPadding-large`, global radius, typography tokens).  
  **Prompt:** “Validate PrimaryCTA token references against design tokens and add fallbacks if any new tokens are missing.”

- **Pressed stroke rendering (inside)** — **Status:** ✅ uses inset box-shadow for pressed stroke; hover/base/disabled use borders as intended.  
  **Prompt:** “Double-check pressed stroke appearance on all themes and high-DPI to ensure inset shadow matches spec.”

- **Icon handling** — **Status:** ✅ single icon slot, inherits text color, 20px container; placeholder in story scales.  
  **Prompt:** “Confirm icon sizing and alignment with real SVGs (not the story placeholder) across left/right positions.”

- **Interactivity** — **Status:** 🚧 states are prop-driven; Storybook simulates hover/pressed only when state=base. No CSS pseudo-classes in production.  
  **Prompt:** “Decide if production should rely solely on state prop or add real :hover/:active styles for end-user interactivity.”

- **Accessibility** — **Status:** 🚧 basic `<button>` semantics; no aria-label override or focus-visible styling differences.  
  **Prompt:** “Add focus-visible outline tokens and optional aria-label support; verify contrast for all states.”

- **Responsiveness / layout** — **Status:** ✅ inline-flex with min-width; fullWidth supported; relies on parent flow.  
  **Prompt:** “Test fullWidth and long labels in constrained containers; adjust min-width or text wrapping if needed.”

- **Testing / coverage** — **Status:** 🚧 no automated tests.  
  **Prompt:** “Add unit/visual regression tests for states (A/B, sizes, hover/pressed/disabled, icon positions, fullWidth).”

- **Storybook completeness** — **Status:** ✅ interactive playground; matrix present.  
  **Prompt:** “Ensure backgrounds/containers in stories reflect production surfaces (light/dark) for accurate review.”
