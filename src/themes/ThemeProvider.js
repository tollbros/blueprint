import React, { useEffect, useReducer } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

const ThemeProvider = ({ children, theme }) => {
  const baselineReducer = () => theme?.MuiCssBaseline?.styleOverrides;
  const [baselineStyles, dispatchBaseline] = useReducer(baselineReducer, null);

  useEffect(() => {
    dispatchBaseline();
  }, []);

  return (
    <CssVarsProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        {baselineStyles && <style>{baselineStyles}</style>}
        {children}
      </StyledEngineProvider>
    </CssVarsProvider>
  );
};

export default ThemeProvider;
