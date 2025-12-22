import { fn } from '@storybook/test';
import InputField from './InputField';
import React from 'react';
import { getInputPreviewContainerStyle } from '../../storybook/previewUtilsInputs';

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
    <div style={getInputPreviewContainerStyle(args)}>
      <InputField {...args} />
    </div>
  ),
};

export default StorySchema;

export const Playground = {
  parameters: { layout: 'centered' },
};

export const StandardInputField = {
  args: {
    fieldLabel: 'Field Label',
    state: 'Base',
    className: '',
    componentNumber: 1,
    componentName: 'Standard Input Field',
  },

  parameters: {
    layout: 'centered',
  },
};

// Standard input field examples
export const StandardExamples = {
  parameters: {
    docs: {
      source: {
        code: `
// Import the InputField component
import { InputField } from '@tollbrothers/blueprint'

// Example usage
const MyComponent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <InputField fieldLabel="Field Label" />

    <InputField
      fieldLabel="Field Label"
      fieldValue="Field Value"
      state="Filled"
    />

    <InputField
      fieldLabel="Field Label"
      state="Disabled"
    />
  </div>
)`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <InputField fieldLabel='Field Label' />

      <InputField fieldLabel='Field Label' fieldValue='Field Value' state='Filled' />

      <InputField fieldLabel='Field Label' state='Disabled' />
    </div>
  ),
};
