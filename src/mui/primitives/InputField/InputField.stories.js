import React from 'react';
import InputField from './InputField';

export default {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter your text',
};

export const WithValue = Template.bind({});
WithValue.args = {
  placeholder: 'Enter your text',
  defaultValue: 'Some input text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled input',
  disabled: true,
};

export const DisabledWithValue = Template.bind({});
DisabledWithValue.args = {
  placeholder: 'Disabled input',
  defaultValue: 'Some input text',
  disabled: true,
};