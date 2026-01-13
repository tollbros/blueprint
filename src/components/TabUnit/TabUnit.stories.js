import React from 'react';
import TabUnit from './TabUnit';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

export default {
  title: 'Components/TabUnit',
  component: TabUnit,
  tags: ['autodocs'],
  args: {
    label: 'Communities',
    state: true,
    icon: true,
    bg: 'Light',
  },
  argTypes: {
    label: { control: 'text' },
    state: { control: 'boolean' },
    icon: { control: 'boolean' },
    bg: { control: 'select', options: ['Light', 'Dark'] },
    className: { control: 'text' },
  },
  render: (args) => (
    <InputPreviewContainer args={args} options={{ darkValues: ['Dark'] }}>
      <TabUnit {...args} />
    </InputPreviewContainer>
  ),
};

export const Playground = {
  parameters: { layout: 'centered' },
};
