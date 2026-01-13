import PillStrokeButton from './PillStrokeButton';
import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

const DotIcon = ({ color = 'currentColor' }) => (
  <span
    style={{
      display: 'inline-block',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: color || 'currentColor',
    }}
  />
);

const StorySchema = {
  title: 'Buttons/03 PillStrokeButton',
  component: PillStrokeButton,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    label: 'Pill Button',
    priority: 'A',
    iconPosition: 'none',
    bg: 'Light',
    state: 'base',
  },
  argTypes: {
    label: { control: 'text' },
    priority: {
      control: 'select',
      options: ['A', 'B'],
    },
    iconPosition: {
      control: 'select',
      options: ['none', 'left', 'right'],
    },
    icon: { table: { disable: true } },
    className: { table: { disable: true } },
    bg: {
      control: 'select',
      options: ['Light', 'Dark'],
    },
    state: {
      control: 'select',
      options: ['base', 'hover', 'pressed', 'disabled'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Pill stroke button aligned to Figma (Light/Dark BG, Priority A/B, Base/Hover/Pressed/Disabled, optional left/right icon).',
      },
    },
  },
  decorators: [
    (Story, context) => (
      <InputPreviewContainer args={context.args} options={{ darkValues: ['Dark'] }}>
        <Story />
      </InputPreviewContainer>
    ),
  ],
  render: (args) => {
    const [currentState, setCurrentState] = useState(args.state);

    React.useEffect(() => {
      setCurrentState(args.state);
    }, [args.state, args.label, args.bg, args.priority, args.iconPosition]);

    const interactive = args.state === 'base';
    const isDisabled = args.state === 'disabled';

    const toBaseState = () => setCurrentState(args.state);
    const handleMouseEnter = () => {
      if (interactive && !isDisabled) setCurrentState('hover');
    };
    const handleMouseLeave = () => {
      toBaseState();
    };
    const handleMouseDown = () => {
      if (interactive && !isDisabled) setCurrentState('pressed');
    };
    const handleMouseUp = () => {
      if (interactive && !isDisabled) setCurrentState('hover');
    };

    const icon = args.iconPosition === 'none' ? null : <DotIcon />;

    return (
      <PillStrokeButton
        {...args}
        state={currentState}
        icon={icon}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    );
  },
};

export default StorySchema;

export const Playground = {
  parameters: { layout: 'centered' },
};
