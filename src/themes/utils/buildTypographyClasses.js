import addFontTokens from './addFontTokens';

const buildTypographyClasses = (theme) => {
  const decoratedTheme = addFontTokens({ theme });
  return `
      ${Object.keys(decoratedTheme.typography)
        .map((typographyKey) => {
          return `
.tb-typography-${typographyKey}-font {
  font: var(--tb-typography-${typographyKey}-font);
  text-decoration-line: var(--tb-typography-${typographyKey}-textDecorationLine);
  text-transform: var(--tb-typography-${typographyKey}-textTransform);
}`;
        })
        .join('\n')}`;
};

export default buildTypographyClasses;
