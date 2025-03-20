import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

let styleElement;

const useTypographyClasses = (decoratedTheme) => {
  useIsomorphicLayoutEffect(() => {
    if (typeof document !== 'undefined' && !styleElement) {
      styleElement = document.head.appendChild(document.createElement('style'));
      styleElement.innerHTML = `
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
    }
  }, []);
};

export default useTypographyClasses;
