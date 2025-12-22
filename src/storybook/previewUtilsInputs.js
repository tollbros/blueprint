// Input-specific helpers for Storybook preview containers.

/**
 * Computes the preview container style for input components.
 * @param {object} args - Story args (expects bg when present).
 * @param {object} options - Overrides for backgrounds and sizing.
 * @param {string} options.lightBg - Background for light mode.
 * @param {string} options.darkBg - Background for dark mode.
 * @param {string} options.darkProp - Arg key that indicates dark mode (default: "bg").
 * @param {string|string[]} options.darkValues - Value(s) that should trigger dark mode.
 * @param {string} options.wrapperWidth - Width to use for the preview container.
 * @param {string} options.padding - Padding to use for the preview container.
 */
export function getInputPreviewContainerStyle(args = {}, options = {}) {
  const {
    lightBg = '#F4F6F7',
    darkBg = '#85909F',
    darkProp = 'bg',
    darkValues = ['Dark'],
    wrapperWidth = '375px',
    padding = '16px 16px',
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
