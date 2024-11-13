import React from 'react';
import TextArea from './TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    maxLength: { control: 'number' },
  },
};

const Template = (args) => <TextArea {...args} />;

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