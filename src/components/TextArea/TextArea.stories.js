import { fn } from '@storybook/test';
import TextArea from './TextArea';
import React from 'react';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

export default {
  title: 'Inputs/02 TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A TextArea component that mirrors InputField behavior with consistent states and floating labels.
        `,
      },
    },
  },
  args: {
    onChange: fn(),
    fieldLabel: 'Text Label',
    state: 'Base',
  },
  argTypes: {
    className: { control: 'text' },
    fieldLabel: {
      control: 'text',
      description: 'The label text for the text area',
    },
    fieldValue: {
      control: 'text',
      description: 'The value text shown inside the text area',
    },
    state: {
      control: 'select',
      options: ['Base', 'Focused', 'Filled', 'Disabled', 'Error', 'Success'],
    },
    onChange: { table: { disable: true } },
    componentNumber: { table: { disable: true } },
    componentName: { table: { disable: true } },
  },
  render: (args) => (
    <InputPreviewContainer args={args}>
      <TextArea {...args} />
    </InputPreviewContainer>
  ),
};

export const Playground = {
  parameters: { layout: 'centered' },
};
