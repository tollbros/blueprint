import React from 'react'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles/CssVarsProvider'
import { defaultTheme } from './default.theme'
import { CssBaseline } from '@mui/material'

const ThemeProvider = ({ children }) => {
  return (
    <CssVarsProvider theme={defaultTheme}>
      <CssBaseline />
      <style>{defaultTheme?.MuiCssBaseline?.styleOverrides}</style>
      {children}
    </CssVarsProvider>
  )
}

export default ThemeProvider
