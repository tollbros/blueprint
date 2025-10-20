import hexToRgba from './hexToRGB';
import flattenToCssVars from './flattenToCssVars';
import addFontTokens from './addFontTokens';

const buildCssVars = (theme) => {
  const cssVarsObject = flattenToCssVars(addFontTokens({ theme }));

  return `
:root {
${Object.entries(cssVarsObject)
  .filter(([key, value]) => !!value)
  .map(([key, value]) => `${key}: ${value};`)
  .join('\n')}

${Object.entries(cssVarsObject)
  .filter(([key, value]) => key.includes('palette') && value.includes('#'))
  .map(([key, value]) => {
    return `${key}-RGB: ${hexToRgba(value)};`;
  })
  .join('\n')}
}
`;
};

export default buildCssVars;
