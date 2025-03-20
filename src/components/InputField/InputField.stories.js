import { fn } from '@storybook/test';
import InputField from './InputField';
import React from 'react';

const StorySchema = {
  title: 'primitives/InputField',
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
    placeholder: 'Input Field Label',
    defaultValue: '',
  },
  argTypes: {
    className: { control: 'text' },
    placeholder: {
      control: 'text',
      description: 'The label text for the input field',
      table: {
        defaultValue: { summary: '' },
      },
    },
    defaultValue: {
      control: 'text',
      description: 'The default value for the input field',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input field is disabled',
      defaultValue: false,
    },
    onChange: { table: { disable: true } },
    componentNumber: { table: { disable: true } },
    componentName: { table: { disable: true } },
  },
  // Default story render function showing just one input field
  render: (args) => (
    <div style={{ width: '300px' }}>
      <InputField {...args} />
    </div>
  ),
};

export default StorySchema;

export const StandardInputField = {
  args: {
    placeholder: 'Input Field Label',
    defaultValue: '',
    disabled: false,
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
    <InputField placeholder="Standard Input" />

    <InputField
      placeholder="With Default Value"
      defaultValue="Pre-populated text"
    />

    <InputField
      placeholder="Disabled Input"
      disabled
    />
  </div>
)`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <InputField placeholder='Standard Input' />

      <InputField placeholder='With Default Value' defaultValue='Pre-populated text' />

      <InputField placeholder='Disabled Input' disabled />
    </div>
  ),
};
