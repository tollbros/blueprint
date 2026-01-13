import React from 'react';
import Checkbox from './Checkbox';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

export default {
  title: 'Selectors/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    size: 'Base',
    state: 'Base',
  },
  argTypes: {
    size: { control: 'select', options: ['Base', 'Large'] },
    state: {
      control: 'select',
      options: ['Base', 'Focused', 'Selected', 'Disabled'],
    },
    className: { control: 'text' },
  },
  render: (args) => (
    <InputPreviewContainer args={args}>
      <Checkbox {...args} />
    </InputPreviewContainer>
  ),
};

export const Playground = {
  parameters: { layout: 'centered' },
};
