import ThemeProvider from '../src/themes/ThemeProvider'

export const withMuiTheme = (Story) => {
  return (
    <ThemeProvider>
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
