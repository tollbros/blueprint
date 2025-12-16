# SecondaryCTA Production Readiness Review with Prompts ✅/🚧

- **API coverage (size/bg/state/fullWidth)** — **Status:** ✅ supports Base/Small/Large, Light/Dark backgrounds, Base/Hover/Pressed/Disabled states, fullWidth.  
  **Prompt:** “Confirm whether additional props (aria-label, loading) are needed before shipping SecondaryCTA.”

- **Token alignment (colors/spacing/radius/typography/heights)** — **Status:** ✅ uses shared button height/padding tokens (`--tb-button-height-*`, `--tb-button-padding-base`), global radius, SemanticButtonLabel typography, state/brand palette tokens, disabled token.  
  **Prompt:** “Validate token references against the latest design tokens and add fallbacks if new tokens appear.”

- **Stroke rendering** — **Status:** ✅ base stroke inset; hover/disabled strokes outside; pressed stroke inset via box-shadow; matches current spec.  
  **Prompt:** “Visually verify stroke positioning on hover/pressed/disabled in both Light/Dark surfaces.”

- **Interactivity** — **Status:** 🚧 states are prop-driven; Storybook simulates hover/pressed only when state=base. No CSS pseudo-classes in production.  
  **Prompt:** “Decide whether to rely solely on the state prop or add :hover/:active for end-user interactivity.”

- **Accessibility** — **Status:** 🚧 basic `<button>` semantics; focus-visible styling not differentiated; no aria-label override.  
  **Prompt:** “Add focus-visible treatment using tokens and optional aria-label; check contrast on Light/Dark backgrounds.”

- **Responsiveness / layout** — **Status:** ✅ inline-flex with min-width; fullWidth supported; relies on parent layout.  
  **Prompt:** “Test long labels and fullWidth in constrained containers; adjust min-width or wrapping if needed.”

- **Testing / coverage** — **Status:** 🚧 no automated tests.  
  **Prompt:** “Add unit/visual regression tests covering Light/Dark, sizes, states, and stroke rendering.”

- **Storybook completeness** — **Status:** ✅ interactive playground; container matches PrimaryCTA wrapper pattern.  
  **Prompt:** “Ensure story backgrounds reflect production surfaces and include Light/Dark examples for review.”
