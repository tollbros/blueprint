import React from 'react';
import ToggleUnit from './ToggleUnit';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

export default {
  title: 'Selectors/06 ToggleUnit',
  component: ToggleUnit,
  tags: ['autodocs'],
  args: {
    toggleOn: 'Toggle Label',
    toggleOff: 'Toggle Label',
    state: true,
    bg: 'Light',
  },
  argTypes: {
    toggleOn: { control: 'text' },
    toggleOff: { control: 'text' },
    state: { control: 'boolean' },
    bg: { control: 'select', options: ['Light', 'Dark'] },
    className: { control: 'text' },
  },
  render: (args) => (
    <InputPreviewContainer args={args} options={{ darkValues: ['Dark'] }}>
      <ToggleUnit {...args} />
    </InputPreviewContainer>
  ),
};

export const Playground = {
  parameters: { layout: 'centered' },
};
