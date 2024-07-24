import TollTheme from '../src/themes/TollTheme'

export const withMuiTheme = (Story) => {
  return (
    <TollTheme>
      <Story />
    </TollTheme>
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
