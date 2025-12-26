import { fn } from '@storybook/test';
import InputField from './InputField';
import React from 'react';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

const StorySchema = {
  title: 'Inputs/01 InputField',
  component: InputField,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/CceZPnvgPvbO8cSOarLUBl/Storybook-Design-Actuals?node-id=23-9166&t=kk2gIjM3ocCS0MRd-1',
    },
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile InputField component that supports different states and provides a modern floating label experience.
        `,
      },
    },
  },
  args: {
    onChange: fn(),
    fieldLabel: 'Field Label',
    state: 'Base',
  },
  argTypes: {
    className: { control: 'text' },
    fieldLabel: {
      control: 'text',
      description: 'The label text for the input field',
    },
    fieldValue: {
      control: 'text',
      description: 'The value text shown inside the input',
    },
    state: {
      control: 'select',
      options: ['Base', 'Focused', 'Filled', 'Disabled'],
    },
    onChange: { table: { disable: true } },
    componentNumber: { table: { disable: true } },
    componentName: { table: { disable: true } },
  },
  // Default story render function showing just one input field
  render: (args) => (
    <InputPreviewContainer args={args}>
      <InputField {...args} />
    </InputPreviewContainer>
  ),
};

export default StorySchema;

export const Playground = {
  parameters: { layout: 'centered' },
};
