import ThemeProvider from '../src/themes/ThemeProvider'
import { defaultTheme } from '../src'

export const withMuiTheme = (Story) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  )
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        date: /Date$/i
      }
    }
  }
}

export default preview

export const decorators = [withMuiTheme];
