import React from 'react';
import SpecsSelector from './SpecsSelector';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

export default {
  title: 'Selectors/05 SpecsSelector',
  component: SpecsSelector,
  tags: ['autodocs'],
  args: {
    maxSpecs: 6,
  },
  argTypes: {
    maxSpecs: { control: { type: 'number', min: 1, max: 6, step: 1 } },
    className: { control: 'text' },
  },
  render: (args) => (
    <InputPreviewContainer args={args}>
      <SpecsSelector {...args} />
    </InputPreviewContainer>
  ),
};

export const Playground = {
  parameters: { layout: 'centered' },
};
