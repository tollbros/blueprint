# Interaction Tokens

Shared state tokens keep behaviors consistent across shapes and sizes. Suggested defaults (align with existing button/pill styling):

- **Hover Overlay:** `rgba(var(--tb-palette-TB-Functional-Black-RGB, 0, 0, 0), 0.08)`
- **Active Overlay:** `rgba(var(--tb-palette-TB-Functional-Black-RGB, 0, 0, 0), 0.12)`
- **Focus Ring:** `2px solid var(--tb-palette-TB-Brand-Accent, #0070cd)` with `2px` offset
- **Shadow Base:** `0 12px 32px rgba(0, 0, 0, 0.2)`
- **Shadow Hover:** `0 16px 40px rgba(0, 0, 0, 0.28)`
- **Disabled Overlay:** `rgba(var(--tb-palette-TB-Functional-Black-RGB, 0, 0, 0), 0.16)`
- **Border Radius:** `var(--tb-GlobalBrandBorderRadius, 4px)` (override per shape if needed)

### Usage Guidelines
- Apply overlays as `linear-gradient(overlay, overlay), baseColor`.
- Keep hover/active consistent for all CTAs, pills, tiles, and icon buttons; only change geometry (radius/size).
- Focus ring is always present on keyboard focus; never rely on hover alone.
- Document any deviations per component in its story.

### Implementation Notes
- Centralize in SCSS variables or CSS custom properties to prevent drift.
- Extend with variants (primary/secondary/on-dark) if design provides explicit tokens; otherwise use the above as defaults.
