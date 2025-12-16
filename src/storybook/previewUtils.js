// Utility helpers for Storybook preview containers across components.

/**
 * Computes the preview container style, handling dark/light backgrounds and fullWidth variants.
 * @param {object} args - Story args (expects bg and fullWidth when present).
 * @param {object} options - Overrides for backgrounds and dark detection.
 * @param {string} options.lightBg - Background for light mode.
 * @param {string} options.darkBg - Background for dark mode.
 * @param {string} options.darkProp - Arg key that indicates dark mode (default: "bg").
 * @param {string|string[]} options.darkValues - Value(s) that should trigger dark mode.
 * @param {string} options.wrapperWidth - Width to use when not fullWidth (fallback: fit-content).
 */
export function getPreviewContainerStyle(args = {}, options = {}) {
  const {
    lightBg = 'var(--tb-palette-TB-Functional-LightGray, #E9EDF0)',
    darkBg = '#85909F',
    darkProp = 'bg',
    darkValues = ['Dark'],
    wrapperWidth = 'fit-content',
  } = options;

  const darkSet = Array.isArray(darkValues) ? new Set(darkValues) : new Set([darkValues]);
  const isDark = darkSet.has(args[darkProp]);

  return {
    background: isDark ? darkBg : lightBg,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: args.fullWidth ? '100%' : wrapperWidth,
    margin: '0 auto',
    position: 'relative',
    borderRadius: '4px',
    padding: '24px 0',
  };
}
