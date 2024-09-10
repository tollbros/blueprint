import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { useTheme } from '@mui/material/styles';
import RadioButton from './RadioButton';

const StorySchema = {
  title: 'Components/RadioButton',
  component: RadioButton,
};

export default StorySchema;

const Template = (args) => <RadioButton {...args} />;

export const RadioButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const theme = useTheme();

  const handleChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <RadioButton 
        checked={selectedOption === 'option1'} 
        onChange={handleChange} 
        value="option1"
      /> <span style={theme.typography.GothamBaseBook}>Option A</span><br />
      <RadioButton 
        checked={selectedOption === 'option2'} 
        onChange={handleChange} 
        value="option2"
      /> <span style={theme.typography.GothamBaseBook}>Option B</span><br />
      <RadioButton 
        checked={selectedOption === 'option3'} 
        onChange={handleChange} 
        value="option3"
      /> <span style={theme.typography.GothamBaseBook}>Option C</span>
    </div>
  );
};

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