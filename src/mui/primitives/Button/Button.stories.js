import { fn } from '@storybook/test';
import Button from './Button';
import React from 'react';
import { fullStory } from '../../templates/Full.story.structure.js';
import '../../templates/Full.story.style.scss';

const StorySchema = {
  title: 'primitives/Buttons',
  component: Button,
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
    color: { control: 'select', options: ['accent', 'primary', 'medium', 'success', 'error'] },
    disabled: { control: 'boolean' },
    fullWidth: {  // Add this control
      control: 'boolean',
      description: 'Whether the button should take up the full width of its container',
      defaultValue: false,
    },
    // Exclude from controls
    onClick: { table: { disable: true } },
    componentNumber: { table: { disable: true } },
    componentName: { table: { disable: true } },
  },
};

export default StorySchema;

export const PrimaryCTAButton = {
  args: {
    children: 'Button Name',
    size: 'base',
    variant: 'contained',
    color: 'accent',
    disabled: false,
    fullWidth: false,
    className: '',
    componentNumber: 1,
    componentName: 'Primary CTA Button'
  },
};
