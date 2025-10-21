import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import fontFaces from '../utils/fontFaces';

let styleElement;

const useFontFaces = () => {
  useIsomorphicLayoutEffect(() => {
    if (typeof document !== 'undefined' && !styleElement) {
      styleElement = document.head.appendChild(document.createElement('style'));
      styleElement.innerHTML = fontFaces;
    }
  }, []);
};

export default useFontFaces;
