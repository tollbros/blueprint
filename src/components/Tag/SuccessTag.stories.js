import React from 'react';
import SuccessTag from './SuccessTag';

export default {
  title: 'Tags/02 SuccessTag',
  component: SuccessTag,
  tags: ['autodocs'],
  args: {
    label: 'Success Message',
  },
  argTypes: {
    className: { control: 'text' },
    label: { control: 'text' },
  },
  render: (args) => <SuccessTag {...args} />,
};

export const Playground = {};
