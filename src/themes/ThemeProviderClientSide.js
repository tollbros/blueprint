import { useMemo } from 'react';
import addFontTokens from './utils/addFontTokens';
import flattenToCssVars from './utils/flattenToCssVars';
import useFontFaces from './hooks/useFontFaces';
import useTypographyClasses from './hooks/useTypographyClasses';
import useCssVars from './hooks/useCssVars';

const ThemeProviderClientSide = ({ children, theme, ThemeContext }) => {
  const decoratedTheme = useMemo(() => {
    return addFontTokens({ theme });
  }, [theme]);

  const cssVarsObject = useMemo(() => {
    return flattenToCssVars(addFontTokens({ theme }));
  }, [theme]);

  useFontFaces();
  useTypographyClasses(decoratedTheme);
  useCssVars(decoratedTheme, cssVarsObject);

  return <ThemeContext.Provider value={decoratedTheme}>{children}</ThemeContext.Provider>;
};

export default ThemeProviderClientSide;
