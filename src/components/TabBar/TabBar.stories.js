import React from 'react';
import { fn } from '@storybook/test';
import TabBar from './TabBar';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

export default {
  title: 'Components/TabBar',
  component: TabBar,
  tags: ['autodocs'],
  args: {
    iconBool: false,
    bg: 'Light',
    layout: 'fit',
    width: '335px',
    activeIndex: null,
    onChange: fn(),
  },
  argTypes: {
    iconBool: { control: 'boolean' },
    bg: { control: 'select', options: ['Light', 'Dark'] },
    layout: { control: 'select', options: ['fit', 'equal'] },
    width: { control: 'text' },
    activeIndex: { control: 'number' },
    className: { control: 'text' },
  },
  render: (args) => (
    <InputPreviewContainer args={args} options={{ darkValues: ['Dark'] }}>
      <TabBar {...args} />
    </InputPreviewContainer>
  ),
};

export const Playground = {
  parameters: { layout: 'centered' },
};
