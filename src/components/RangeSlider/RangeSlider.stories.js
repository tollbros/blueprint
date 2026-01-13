import React from 'react';
import RangeSlider from './RangeSlider';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

export default {
  title: 'Selectors/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs'],
  args: {
    property1: 'sq. ft.',
    sqFtRange: { min: 500, max: 3000 },
    stepSqFt: 250,
    priceRange: { min: 300000, max: 2000000 },
    stepPrice: 100000,
  },
  argTypes: {
    property1: { control: 'select', options: ['sq. ft.', 'price'] },
    sqFtRange: { control: 'object' },
    stepSqFt: { control: 'number' },
    priceRange: { control: 'object' },
    stepPrice: { control: 'number' },
  },
  render: (args) => (
    <InputPreviewContainer args={args}>
      <RangeSlider {...args} />
    </InputPreviewContainer>
  ),
};

export const Playground = {
  parameters: { layout: 'centered' },
};
