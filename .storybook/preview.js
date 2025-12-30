import ThemeProvider from '../src/themes/ThemeProvider';
import { defaultTheme } from '../src';

export const withTBTheme = (Story) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  );
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Buttons',
          ['01 PrimaryCTA', '02 SecondaryCTA', '03 PillStrokeButton', '04 PillFillButton', '05 PillFillStrokeButton', '06 TextLink'],
          'Inputs',
          ['01 InputField', '02 TextArea', '02 Select'],
          'Tag',
          ['01 ErrorTag', '02 SuccessTag'],
        ],
      },
    },
  },

  design: {
    default: true,
  },
};

export default preview;

export const decorators = [withTBTheme];
