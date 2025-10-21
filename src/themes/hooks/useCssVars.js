import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import buildCssVars from '../utils/buildCssVars';

let styleElement;

const useCssVars = (decoratedTheme) => {
  useIsomorphicLayoutEffect(() => {
    if (typeof document !== 'undefined' && !styleElement) {
      styleElement = document.head.appendChild(document.createElement('style'));
      styleElement.innerHTML = buildCssVars(decoratedTheme);
    }
  }, []);
};

export default useCssVars;
