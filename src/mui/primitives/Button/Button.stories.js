import { fn } from '@storybook/test';
import Button from './Button';
import React from 'react';
import { fullStory } from '../../templates/Full.story.structure.js';
import '../../templates/Full.story.style.scss';

const StorySchema = {
  title: 'primitives/Buttons',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/4w6Ywo2rs8mRj2SRXzDKo6/Untitled?node-id=0-3&t=KcXRTL69HE6gjTHM-1'
    },
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile Button component that supports primary and secondary variants with different sizes and states.

\`\`\`
        `
      }
    }
  },
  args: { onClick: fn() },
  argTypes: {
    className: { control: 'text' },
    size: {
      control: 'select',
      options: ['default', 'small', 'xsmall'],
      description: 'Controls the size of the button',
      table: {
        defaultValue: { summary: 'default' }
      }
    },
    disabled: { control: 'boolean' },
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
};

export default StorySchema;

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
)`
      }
    }
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
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
  )
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
)`
      }
    }
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
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
  )
};

// export const PrimaryCTAButton = {
//   args: {
//     children: 'Primary CTA Button',
//     size: 'default',
//     variant: 'primary',
//     disabled: false,
//     fullWidth: false,
//     className: '',
//     componentNumber: 1,
//     componentName: 'Primary CTA Button',
//   },
//   argTypes: {
//     PRIMARY_FILL_VARIANT: {
//       control: 'select',
//       options: ['defaultColor'],
//       table: { disable: false }
//     },
//   },
// };
//
// export const SecondaryCTAButton = {
//   args: {
//     children: 'Secondary CTA Button',
//     size: 'default',
//     variant: 'secondary',
//     disabled: false,
//     fullWidth: false,
//     className: '',
//     componentNumber: 2,
//     componentName: 'Secondary CTA Button',
//   },
//   argTypes: {
//     SECONDARY_STROKE_VARIANT: {
//       control: 'select',
//       options: ['defaultColor'],
//       table: { disable: false }
//     },
//     SECONDARY_TEXT_VARIANT: {
//       control: 'select',
//       options: ['defaultColor'],
//       table: { disable: false }
//     },
//   },
// };
