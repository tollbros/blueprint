import React from 'react'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript
} from '@mui/material/styles/CssVarsProvider'
import { defaultTheme } from './default.theme'
import { CssBaseline } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles';

const ThemeProvider = ({ children }) => {
  console.log('defaultTheme', defaultTheme)
  console.log('generateCssVars', defaultTheme?.generateCssVars())

  return (
    <CssVarsProvider theme={defaultTheme}>
      <StyledEngineProvider injectFirst>
      <CssBaseline />
      <LogColorScheme />
      <LogInitColorTheme />
      <style>{defaultTheme?.MuiCssBaseline?.styleOverrides}</style>
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
