import { fn } from '@storybook/test';
import Button from './Button';

const StorySchema = {
  title: 'primitives/Buttons',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  argTypes: {
    className: { control: 'text' },
    size: { control: 'select', options: ['base', 'small'] },
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
    color: { control: 'select', options: ['accent', 'primary', 'medium', 'success', 'error'] },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default StorySchema;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryCTAButton = {
  args: {
    children: 'Button',
    size: 'base',
    variant: 'contained',
    color: 'accent',
    disabled: false,
    className: '',
  },
};

export const SmallPrimaryCTAButton = {
  args: {
    children: 'Button',
    size: 'small',
    variant: 'contained',
    color: 'accent',
    disabled: false,
    className: '',
  },
};
