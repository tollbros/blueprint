import { fn } from '@storybook/test';
import RadioButton from './RadioButton';
import React from 'react';
import { fullStory } from '../../templates/Full.story.structure.js';
import '../../templates/Full.story.style.scss';

const StorySchema = {
  title: 'primitives/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/CceZPnvgPvbO8cSOarLUBl/Storybook-Design-Actuals?node-id=33-9934&t=sONWhpjlvXD9dtIB-1',
    },
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile RadioButton component that provides a selectable input experience with different states.
        `,
      },
    },
  },
  args: {
    onChange: fn(),
    disabled: false,
  },
  argTypes: {
    onChange: { table: { disable: true } },
    componentNumber: { table: { disable: true } },
    componentName: { table: { disable: true } },
    value: { table: { disable: true } },
    name: { table: { disable: true } },
  },
  // Default story render function showing just one radio button
  render: (args) => (
    <div style={{ width: '300px' }}>
      <RadioButton {...args} />
    </div>
  ),
};

export default StorySchema;

// Interactive radio group examples
export const RadioGroupExamples = {
  parameters: {
    docs: {
      source: {
        code: `
// Import the RadioButton component
import { RadioButton } from '@tollbrothers/blueprint'

// Example usage
const MyComponent = () => {
  const [selected, setSelected] = React.useState('');

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
        <div key={option.value} style={{ display: 'flex', alignItems: 'center' }}>
          <RadioButton
            value={option.value}
            checked={selected === option.value}
            onChange={handleChange}
            name="radioGroup"
          />
          <label style={{ marginLeft: '8px' }}>{option.label}</label>
        </div>
      ))}

      <div>Selected value: {selected || 'None'}</div>
    </div>
  );
}`,
      },
    },
  },
  render: () => {
    const [selected, setSelected] = React.useState('');

    const options = [
      { label: 'Option A', value: 'A' },
      { label: 'Option B', value: 'B' },
      { label: 'Option C', value: 'C' },
    ];

    const handleChange = (event) => {
      setSelected(event.target.value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {options.map((option) => (
            <div key={option.value} style={{ display: 'flex', alignItems: 'center' }}>
              <RadioButton
                value={option.value}
                checked={selected === option.value}
                onChange={handleChange}
                name='radioGroup'
              />
              <label style={{ marginLeft: '8px' }}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Radio button state examples
export const StateExamples = {
  parameters: {
    docs: {
      source: {
        code: `
// Import the RadioButton component
import { RadioButton } from '@tollbrothers/blueprint'

// Example usage
const MyComponent = () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <RadioButton checked />
      <label style={{ marginLeft: '8px' }}>Checked Radio Button</label>
    </div>

    <div style={{ display: 'flex', alignItems: 'center' }}>
      <RadioButton disabled />
      <label style={{ marginLeft: '8px' }}>Disabled Radio Button</label>
    </div>

    <div style={{ display: 'flex', alignItems: 'center' }}>
      <RadioButton checked disabled />
      <label style={{ marginLeft: '8px' }}>Disabled Checked Radio Button</label>
    </div>
  </div>
)`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioButton checked />
          <label style={{ marginLeft: '8px' }}>Checked Radio Button</label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioButton disabled />
          <label style={{ marginLeft: '8px' }}>Disabled Radio Button</label>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioButton checked disabled />
          <label style={{ marginLeft: '8px' }}>Disabled Checked Radio Button</label>
        </div>
      </div>
    </div>
  ),
};
