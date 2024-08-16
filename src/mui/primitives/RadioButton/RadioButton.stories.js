import React, { useState } from 'react';
import RadioButton from './RadioButton';

const StorySchema = {
  title: 'Components/RadioButton',
  component: RadioButton,
};

export default StorySchema;

const Template = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
  onChange: () => console.log('Radio button changed'),
  value: 'default',
};

export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  ...Default.args,
  checked: true,
  disabled: true,
};

export const RadioButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <RadioButton checked={selectedOption === 'option1'} onChange={handleChange} value='option1' /> Option 1<br />
      <RadioButton checked={selectedOption === 'option2'} onChange={handleChange} value='option2' /> Option 2<br />
      <RadioButton checked={selectedOption === 'option3'} onChange={handleChange} value='option3' /> Option 3
    </div>
  );
};
