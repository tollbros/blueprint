import React from 'react';
import RangeSlider from './RangeSlider';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

export default {
  title: 'Inputs/03 RangeSlider',
  component: RangeSlider,
  tags: ['autodocs'],
  args: {
    property1: 'sq. ft.',
    minSqFt: 500,
    maxSqFt: 3000,
    stepSqFt: 250,
    minPrice: 300000,
    maxPrice: 2000000,
    stepPrice: 100000,
  },
  argTypes: {
    property1: { control: 'select', options: ['sq. ft.', 'price'] },
    minSqFt: { control: 'number' },
    maxSqFt: { control: 'number' },
    stepSqFt: { control: 'number' },
    minPrice: { control: 'number' },
    maxPrice: { control: 'number' },
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
