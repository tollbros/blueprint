import React from 'react';
import FallbackAddButton from './FallbackAddButton';

export default {
  title: 'Components/FallbackAddButton',
  component: FallbackAddButton,
  argTypes: {
    isCondensed: {
      control: 'boolean',
    },
  },
};

const Template = (args) => <FallbackAddButton {...args} />;

export const Text = Template.bind({});
Text.args = {
  children: 'Add New Variant',
  isCondensed: false,
};

export const Condensed = Template.bind({});
Condensed.args = {
  children: 'Add New Variant',
  isCondensed: true,
};
