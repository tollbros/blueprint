import React, { useEffect, useState } from 'react'
import { CssBaseline } from '@mui/material'
import {
  StyledEngineProvider,
  Experimental_CssVarsProvider as CssVarsProvider
} from '@mui/material/styles'

const ThemeProvider = ({ children, theme }) => {
  const [baselineStyles, setBaselineStyles] = useState(null)
  useEffect(() => {
    setBaselineStyles(theme?.MuiCssBaseline?.styleOverrides)
  }, [])

  return (
    <CssVarsProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        {baselineStyles && <style>{baselineStyles}</style>}
        {children}
      </StyledEngineProvider>
    </CssVarsProvider>
  )
}

export default ThemeProvider
