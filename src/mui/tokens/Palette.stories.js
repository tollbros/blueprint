import PaletteCssVars from './PaletteCssVars';

const StorySchema = {
  title: 'tokens/Palette',
  component: PaletteCssVars,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
  argTypes: {},
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default StorySchema;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const StickerSheet = {
  render: PaletteCssVars,
  args: {},
  argTypes: {},
};
