import React from 'react';
import TextField from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    maxLength: { control: 'number' },
  },
};

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter your text here',
  disabled: false,
  maxLength: 200,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};