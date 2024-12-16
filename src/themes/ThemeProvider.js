import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { extendTheme } from '@mui/material/styles';

const decorateTheme = ({ theme }) => {
  return extendTheme({
    ...theme,
    MuiCssBaseline: {
      ...theme.MuiCssBaseline,
      typography: {
        ...Object.keys(theme.typography).reduce((acc, key, index) => {
          if (index === 0) {
            acc[key] = theme.typography[key].font;
          }

          return {
            ...acc,
            [key]: {
              ...theme.typography[key],
              font: `${theme.typography[key].fontStyle}
                  ${theme.typography[key].fontWeight}
                  ${theme.typography[key].fontSize}/
                  ${theme.typography[key].lineHeight}
                  ${theme.typography[key].fontFamily}`,
              fontStyle: theme.typography[key].fontStyle,
              fontWeight: theme.typography[key].fontWeight,
              fontSize: theme.typography[key].fontSize,
              lineHeight: theme.typography[key].lineHeight,
              fontFamily: theme.typography[key].fontFamily,
              textDecorationLine: theme.typography[key].textDecorationLine,
              textTransform: theme.typography[key].textTransform,
              margin: theme.typography[key].margin
            }
          };
        }, {})
      }
    }
  });
};

const ThemeProvider = ({ children, theme }) => {
  console.log('React', React);
  const [baselineStyles, setBaselineStyles] = React.useState(null);

  const decoratedTheme = React.useMemo(() => {
    return decorateTheme({ theme });
  }, [theme]);

  React.useEffect(() => {
    setBaselineStyles(decoratedTheme?.MuiCssBaseline?.styleOverrides);
  }, [decoratedTheme]);

  if (!baselineStyles) {
    return children;
  }

  return (
    <CssVarsProvider theme={decoratedTheme}>
      <StyledEngineProvider injectFirst>
        {baselineStyles && <CssBaseline />}
        {baselineStyles && <style>{baselineStyles}</style>}
        {baselineStyles && (
          <style>
            {`
          ${Object.keys(decoratedTheme.MuiCssBaseline.typography)
            .map((typographyKey) => {
              return `
              .tb-MuiCssBaseline-typography-${typographyKey}-font {
                font: var(--mui-MuiCssBaseline-typography-${typographyKey}-font);
                text-decoration-line: var(--mui-MuiCssBaseline-typography-${typographyKey}-textDecorationLine);
                text-transform: var(--mui-MuiCssBaseline-typography-${typographyKey}-textTransform);
              }
            `;
            })
            .join('\n')}
          `}
          </style>
        )}
        {baselineStyles && (
          <style>
            {`
            h1.MuiTypography-root, h1 {
              font: var(--mui-MuiCssBaseline-typography-H1-font);
              text-decoration-line: var(--mui-MuiCssBaseline-typography-H1-textDecorationLine);
              text-transform: var(--mui-MuiCssBaseline-typography-H1-textTransform);
            }
            h2.MuiTypography-root, h2 {
              font: var(--mui-MuiCssBaseline-typography-H2-font);
              text-decoration-line: var(--mui-MuiCssBaseline-typography-H2-textDecorationLine);
              text-transform: var(--mui-MuiCssBaseline-typography-H2-textTransform);
            }
            h3.MuiTypography-root, h3 {
              font: var(--mui-MuiCssBaseline-typography-H3-font);
              text-decoration-line: var(--mui-MuiCssBaseline-typography-H3-textDecorationLine);
              text-transform: var(--mui-MuiCssBaseline-typography-H3-textTransform);
            }
            h4.MuiTypography-root, h4 {
              font: var(--mui-MuiCssBaseline-typography-H4-font);
              text-decoration-line: var(--mui-MuiCssBaseline-typography-H4-textDecorationLine);
              text-transform: var(--mui-MuiCssBaseline-typography-H4-textTransform);
            }
            h5.MuiTypography-root, h5 {
              font: var(--mui-MuiCssBaseline-typography-H5-font);
              text-decoration-line: var(--mui-MuiCssBaseline-typography-H5-textDecorationLine);
              text-transform: var(--mui-MuiCssBaseline-typography-H5-textTransform);
            }
            h6.MuiTypography-root, h6 {
              font: var(--mui-MuiCssBaseline-typography-H6-font);
              text-decoration-line: var(--mui-MuiCssBaseline-typography-H6-textDecorationLine);
              text-transform: var(--mui-MuiCssBaseline-typography-H6-textTransform);
            }
            `}
          </style>
        )}
        {children}
      </StyledEngineProvider>
    </CssVarsProvider>
  );
};

export default ThemeProvider;
