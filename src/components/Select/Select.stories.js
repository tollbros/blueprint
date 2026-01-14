import React from 'react';
import Select from './Select';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

const StorySchema = {
  title: 'Inputs/03 Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A Select input with a floating label and custom dropdown list.
        `,
      },
    },
  },
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    placeholder: 'Select an option',
    state: 'Base',
  },
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of option objects with value/label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when no option is selected',
    },
    state: {
      control: 'select',
      options: ['Base', 'Error', 'Success'],
    },
  },
  render: (args) => (
    <InputPreviewContainer args={args}>
      <Select {...args} />
    </InputPreviewContainer>
  ),
};

export default StorySchema;

export const Playground = {
  parameters: { layout: 'centered' },
};
