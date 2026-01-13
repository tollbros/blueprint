import React from 'react';
import TabBar from './TabBar';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

export default {
  title: 'Selectors/TabBar',
  component: TabBar,
  tags: ['autodocs'],
  args: {
    iconBool: false,
    bg: 'Light',
    alignment: 'fitLeft',
    tabCount: 3,
    tabLabels: ['Tab A', 'Tab B', 'Tab C', 'Tab D', 'Tab E', 'Tab F', 'Tab G', 'Tab H', 'Tab I', 'Tab J'],
  },
  argTypes: {
    iconBool: { control: 'boolean' },
    bg: { control: 'select', options: ['Light', 'Dark'] },
    alignment: { control: 'select', options: ['fitLeft', 'fullCenter'] },
    tabCount: { control: { type: 'number', min: 2, max: 10, step: 1 } },
    tabLabels: { control: 'object' },
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
