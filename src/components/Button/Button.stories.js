import { fn } from '@storybook/test';
import Button from './Button';
import React from 'react';

const StorySchema = {
  title: 'primitives/Buttons',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/CceZPnvgPvbO8cSOarLUBl/Storybook-Design-Actuals?node-id=0-1&t=sONWhpjlvXD9dtIB-1',
    },
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile Button component that supports primary and secondary variants with different sizes and states.
        `,
      },
    },
  },
  args: {
    onClick: fn(),
    variant: 'primary',
    children: 'Primary Button',
    size: 'default',
    className: '',
    fullWidth: false,
  },
  argTypes: {
    className: { control: 'text' },
    size: {
      control: 'select',
      options: ['default', 'small', 'xsmall'],
      description: 'Controls the size of the button',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    disabled: { control: 'boolean', defaultValue: false },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take up the full width of its container',
      defaultValue: false,
    },
    onClick: { table: { disable: true } },
    componentNumber: { table: { disable: true } },
    componentName: { table: { disable: true } },
    variant: { table: { disable: true } },
    PRIMARY_FILL_VARIANT: { table: { disable: true } },
    SECONDARY_STROKE_VARIANT: { table: { disable: true } },
    SECONDARY_TEXT_VARIANT: { table: { disable: true } },
  },
  // Default story render function showing just one button
  render: (args) => <Button {...args} />,
};

export default StorySchema;

export const PrimaryButton = {
  args: {
    children: 'Button Name',
    size: 'base',
    variant: 'primary',
    disabled: false,
    fullWidth: false,
  },

  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '30px 20px' }}>
        <div style={{ width: '300px', display: 'flex', justifyContent: 'center' }}>
          <Story />
        </div>
      </div>
    ),
  ],
  // 👇 This story will not appear in Storybook's sidebar or docs page
  tags: ['!dev', '!autodocs'],
};

// Primary button examples
export const PrimaryExamples = {
  parameters: {
    docs: {
      source: {
        code: `
// Import the Button component
import { Button } from '@tollbrothers/blueprint'

// Example usage
const MyComponent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Button variant="primary" size="default">
      Primary Button
    </Button>

    <Button variant="primary" size="small">
      Small Primary
    </Button>

    <Button variant="primary" fullWidth>
      Full Width Button
    </Button>
  </div>
)`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px', alignItems: 'center' }}>
      <Button variant='primary' size='default'>
        Primary Button
      </Button>

      <Button variant='primary' size='small'>
        Small Primary
      </Button>

      <div style={{ width: '100%' }}>
        <Button variant='primary' fullWidth>
          Full Width Button
        </Button>
      </div>
    </div>
  ),
};

// Secondary button examples
export const SecondaryExamples = {
  parameters: {
    docs: {
      source: {
        code: `
// Import the Button component
import { Button } from '@tollbrothers/blueprint'

// Example usage
const MyComponent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Button variant="secondary" size="default">
      Secondary Button
    </Button>

    <Button variant="secondary" size="small">
      Small Secondary
    </Button>

    <Button variant="secondary" fullWidth>
      Full Width Secondary Button
    </Button>
  </div>
)`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px', alignItems: 'center' }}>
      <Button variant='secondary' size='default'>
        Secondary Button
      </Button>

      <Button variant='secondary' size='small'>
        Small Secondary
      </Button>

      <div style={{ width: '100%' }}>
        <Button variant='secondary' fullWidth>
          Full Width Secondary Button
        </Button>
      </div>
    </div>
  ),
};
