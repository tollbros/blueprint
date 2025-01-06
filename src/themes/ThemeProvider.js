import { createContext, useContext, useMemo } from 'react';
import decorateTheme from './utils/decorateTheme';
import flattenToCssVars from './utils/flattenToCssVars';
const ThemeContext = createContext();

const ThemeProvider = ({ children, theme }) => {
  const decoratedTheme = useMemo(() => {
    return decorateTheme({ theme });
  }, [theme]);
  const cssVarsObject = useMemo(() => {
    return flattenToCssVars(decorateTheme({ theme }));
  }, [theme]);

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
      <style>{`
:root {
  ${Object.entries(cssVarsObject)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n')}
}`}
      </style>
      <style>{`
      ${Object.keys(decoratedTheme.typography)
        .map((typographyKey) => {
          return `
.tb-typography-${typographyKey}-font {
  font: var(--tb-typography-${typographyKey}-font);
  text-decoration-line: var(--tb-typography-${typographyKey}-textDecorationLine);
  text-transform: var(--tb-typography-${typographyKey}-textTransform);
}`      }).join('\n')}`}
      </style>
      <style>
        {`
h1 {
  font: var(--tb-typography-H1-font);
  text-decoration-line: var(--tb-typography-H1-textDecorationLine);
  text-transform: var(--tb-typography-H1-textTransform);
}

h2 {
  font: var(--tb-typography-H2-font);
  text-decoration-line: var(--tb-typography-H2-textDecorationLine);
  text-transform: var(--tb-typography-H2-textTransform);
}

h3 {
  font: var(--tb-typography-H3-font);
  text-decoration-line: var(--tb-typography-H3-textDecorationLine);
  text-transform: var(--tb-typography-H3-textTransform);
}

h4 {
  font: var(--tb-typography-H4-font);
  text-decoration-line: var(--tb-typography-H4-textDecorationLine);
  text-transform: var(--tb-typography-H4-textTransform);
}

h5 {
  font: var(--tb-typography-H5-font);
  text-decoration-line: var(--tb-typography-H5-textDecorationLine);
  text-transform: var(--tb-typography-H5-textTransform);
}

h6 {
  font: var(--tb-typography-H6-font);
  text-decoration-line: var(--tb-typography-H6-textDecorationLine);
  text-transform: var(--tb-typography-H6-textTransform);
}

body {
  color: var(--tb-palette-TB-Functional-Black);
  font: var(--tb-typography-BodyBase-font);
  background-color: var(--tb-palette-TB-Functional-White);
}`}
      </style>

      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeProvider;
