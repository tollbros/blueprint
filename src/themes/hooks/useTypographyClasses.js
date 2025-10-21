import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import buildTypographyClasses from '../utils/buildTypographyClasses';

let styleElement;

const useTypographyClasses = (decoratedTheme) => {
  useIsomorphicLayoutEffect(() => {
    if (typeof document !== 'undefined' && !styleElement) {
      styleElement = document.head.appendChild(document.createElement('style'));
      styleElement.innerHTML = buildTypographyClasses(decoratedTheme);
    }
  }, []);
};

export default useTypographyClasses;
