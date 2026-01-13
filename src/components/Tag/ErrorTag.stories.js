import React from 'react';
import ErrorTag from './ErrorTag';

export default {
  title: 'Tags/01 ErrorTag',
  component: ErrorTag,
  tags: ['autodocs'],
  args: {
    label: 'Error Message',
  },
  argTypes: {
    className: { control: 'text' },
    label: { control: 'text' },
  },
  render: (args) => <ErrorTag {...args} />,
};

export const Playground = {};
