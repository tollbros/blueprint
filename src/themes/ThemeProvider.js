import React from 'react'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript
} from '@mui/material/styles/CssVarsProvider'
import { CssBaseline } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'

const ThemeProvider = ({ children, theme }) => {
  console.log('theme', theme)
  console.log('generateCssVars', theme?.generateCssVars())

  return (
    <CssVarsProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <LogColorScheme />
        <LogInitColorTheme />
        {theme?.MuiCssBaseline?.styleOverrides && (
          <style>{theme?.MuiCssBaseline?.styleOverrides}</style>
        )}
        {children}
      </StyledEngineProvider>
    </CssVarsProvider>
  )
}

const LogInitColorTheme = () => {
  const initColorScheme = getInitColorSchemeScript()
  console.log('initColorScheme', initColorScheme)
  return null
}

const LogColorScheme = () => {
  const colorScheme = useColorScheme()
  console.log('colorScheme', colorScheme)
  return null
}

export default ThemeProvider
