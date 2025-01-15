import { fn } from '@storybook/test';
import InputField from './InputField';
import React from 'react';
import { fullStory } from '../../templates/Full.story.structure.js';
import '../../templates/Full.story.style.scss';

const StorySchema = {
  title: 'components/Input Field',
  component: InputField,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [(StoryFn, context) => fullStory(StoryFn, context, {
    variations: [
      { label: 'Base', value: 'height=48px' },
      { label: 'Small', value: 'height=40px' },
    ],
    properties: [
      [
        { label: 'FullWidth=False', value: 'padding=20px' },
        { label: 'FullWidth=True', value: 'container width' },
      ],
      [
        { label: 'Disabled=False', value: 'fill=AccentBlue' },
        { label: 'Disabled=True', value: 'fill=MedGray' },
      ],
    ],
  })],
  args: { onClick: fn() },
  argTypes: {
    className: { control: 'text' },
    size: { control: 'select', options: ['base', 'small'] },
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
    color: { control: 'select', options: ['accent', 'primary', 'medium', 'success', 'error'] },
    disabled: { control: 'boolean' },
  },
};

export default StorySchema;

const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter your text',
  componentNumber: 2,
  componentName: 'Input Field'
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
