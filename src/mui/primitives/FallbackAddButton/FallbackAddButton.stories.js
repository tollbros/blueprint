import React from 'react';
import FallbackAddButton from './FallbackAddButton';

export default {
  title: 'Components/FallbackAddButton',
  component: FallbackAddButton,
  argTypes: {
    text: {
      control: 'text',
    },
    isCondensed: {
      control: 'boolean',
    },
  },
};

const Template = (args) => <FallbackAddButton {...args} />;

export const Text = Template.bind({});
Text.args = {
  text: 'Add New Variant',
  isCondensed: false,
};

export const Condensed = Template.bind({});
Condensed.args = {
  text: 'Add New Variant',
  isCondensed: true,
};
