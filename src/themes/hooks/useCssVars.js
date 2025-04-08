import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import hexToRgba from '../utils/hexToRGB';

let styleElement;

const useCssVars = (decoratedTheme, cssVarsObject) => {
  useIsomorphicLayoutEffect(() => {
    if (typeof document !== 'undefined' && !styleElement) {
      styleElement = document.head.appendChild(document.createElement('style'));
      styleElement.innerHTML = `
      ${Object.keys(decoratedTheme.typography)
        .map((typographyKey) => {
          return `
:root {
  ${Object.entries(cssVarsObject)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n')}

  ${Object.entries(cssVarsObject)
    .filter(([key, value]) => key.includes('palette') && value.includes('#'))
    .map(([key, value]) => {
      return `${key}-RGB: ${hexToRgba(value)};`;
    })
    .join('\n')}
}`;
        })
        .join('\n')}`;
    }
  }, []);
};

export default useCssVars;
