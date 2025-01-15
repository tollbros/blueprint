import React, { useState } from 'react';
import RadioButton from './RadioButton';
import { useTheme } from '../../../themes/ThemeProvider';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const Template = ({ label, ...args }) => {
  const theme = useTheme();
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <RadioButton {...args} theme={theme} />
      {label && (
        <label style={{ ...theme.typography.GothamSmallBook, marginLeft: '8px', cursor: 'pointer' }}>
          {label}
        </label>
      )}
    </div>
  );
};

export const RadioButtonGroup = () => {
  const [selected, setSelected] = useState('');
  const theme = useTheme();

  const options = [
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' },
  ];

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {options.map((option) => (
        <Template
          key={option.value}
          label={option.label}
          value={option.value}
          checked={selected === option.value}
          onChange={handleChange}
          name="radioGroup"
          theme={theme}
        />
      ))}
    </div>
  );
};

RadioButtonGroup.storyName = 'Radio Button Group';

export const Default = Template.bind({});
Default.args = {
  label: 'Radio Button',
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checked Radio Button',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Radio Button',
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  label: 'Disabled Checked Radio Button',
  checked: true,
  disabled: true,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {};

