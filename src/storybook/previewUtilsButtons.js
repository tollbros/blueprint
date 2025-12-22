// Button-specific helpers for Storybook preview containers.

/**
 * Computes the preview container style, handling dark/light backgrounds.
 * @param {object} args - Story args (expects bg when present).
 * @param {object} options - Overrides for backgrounds and dark detection.
 * @param {string} options.lightBg - Background for light mode.
 * @param {string} options.darkBg - Background for dark mode.
 * @param {string} options.darkProp - Arg key that indicates dark mode (default: "bg").
 * @param {string|string[]} options.darkValues - Value(s) that should trigger dark mode.
 * @param {string} options.wrapperWidth - Width to use for the preview container.
 */
export function getPreviewContainerStyle(args = {}, options = {}) {
  const {
    lightBg = '#F4F6F7',
    darkBg = '#85909F',
    darkProp = 'bg',
    darkValues = ['Dark'],
    wrapperWidth = 'fit-content',
    padding = '24px 0',
  } = options;

  const darkSet = Array.isArray(darkValues) ? new Set(darkValues) : new Set([darkValues]);
  const isDark = darkSet.has(args[darkProp]);

  return {
    background: isDark ? darkBg : lightBg,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: wrapperWidth,
    margin: '0 auto',
    position: 'relative',
    borderRadius: '4px',
    padding,
  };
}

/**
 * Computes the preview container width based on measured natural width, padding, and a fullWidth multiplier.
 * @param {number} naturalWidth - Measured width of the component (without padding).
 * @param {boolean} fullWidth - Whether to expand the preview container.
 * @param {object} options
 * @param {number} options.padding - Padding to apply on each side (px).
 * @param {number} options.fullMultiplier - Multiplier to apply when fullWidth is true.
 * @returns {string} CSS width value.
 */
export function getWrapperWidth(naturalWidth, fullWidth, options = {}) {
  const { padding = 40, fullMultiplier = 2 } = options;
  const baseWidth = naturalWidth || 0;
  if (!baseWidth) return 'fit-content';
  const paddedWidth = baseWidth + padding * 2;
  return fullWidth ? `${paddedWidth * fullMultiplier}px` : `${paddedWidth}px`;
}
