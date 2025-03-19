import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import addFontTokens from './utils/addFontTokens';
import flattenToCssVars from './utils/flattenToCssVars';
import hexToRgba from './utils/hexToRGB';
const ThemeContext = createContext();

const ThemeProvider = ({ children, theme }) => {
  const decoratedTheme = useMemo(() => {
    return addFontTokens({ theme });
  }, [theme]);

  const cssVarsObject = useMemo(() => {
    return flattenToCssVars(addFontTokens({ theme }));
  }, [theme]);

  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  if (!clientReady) {
    return null;
  }

  return (
    <ThemeContext.Provider value={decoratedTheme}>
      <style>
        {`
@import "https://use.typekit.net/loo0pmd.css";

@font-face {
  font-family: 'Domaine';
  src: local('domaine-bold'), url('https://cdn.tollbrothers.com/fonts/domaine/domaine-bold.woff2') format('woff2'),
    url('https://cdn.tollbrothers.com/fonts/domaine/domaine-bold.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Domaine';
  src: local('domaine-semibold'), url('https://cdn.tollbrothers.com/fonts/domaine/domaine-display-web-semibold.woff2') format('woff2'),
    url('https://cdn.tollbrothers.com/fonts/domaine/domaine-display-web-semibold.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Gotham Narrow";
  src: local("GothamNarrSSm-Light"),
    url("https://cdn.tollbrothers.com/fonts/gotham/woff2/GothamNarrSSm-Light_Web.woff2") format("woff2"),
    url("https://cdn.tollbrothers.com/fonts/gotham/woff/GothamNarrSSm-Light_Web.woff") format("woff");
  font-weight: 200 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Gotham Narrow";
  src: local("GothamNarrSSm-Medium"),
    url("https://cdn.tollbrothers.com/fonts/gotham/woff2/GothamNarrSSm-Medium_Web.woff2") format("woff2"),
    url("https://cdn.tollbrothers.com/fonts/gotham/woff/GothamNarrSSm-Medium_Web.woff") format("woff");
  font-weight: 500, 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Gotham;
  src: local("GothamSSm-Book"),
    url("https://cdn.tollbrothers.com/fonts/gotham/woff2/GothamSSm-Book_Web.woff2") format("woff2"),
    url("https://cdn.tollbrothers.com/fonts/gotham/woff/GothamSSm-Book_Web.woff") format("woff");
  font-weight: 200 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Gotham;
  src: local("GothamNarrSSm-Medium"),
    url("https://cdn.tollbrothers.com/fonts/gotham/woff2/GothamSSm-Bold_Web.woff2") format("woff2"),
    url("https://cdn.tollbrothers.com/fonts/gotham/woff/GothamSSm-Bold_Web.woff") format("woff");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}`}
      </style>
      <style>
        {`
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
}`}
      </style>
      <style>
        {`
      ${Object.keys(decoratedTheme.typography)
        .map((typographyKey) => {
          return `
.tb-typography-${typographyKey}-font {
  font: var(--tb-typography-${typographyKey}-font);
  text-decoration-line: var(--tb-typography-${typographyKey}-textDecorationLine);
  text-transform: var(--tb-typography-${typographyKey}-textTransform);
}`;
        })
        .join('\n')}`}
      </style>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeProvider;
