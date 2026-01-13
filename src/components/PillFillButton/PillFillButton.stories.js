import React, { useState } from 'react';
import { fn } from '@storybook/test';
import PillFillButton from './PillFillButton';
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
  title: 'Buttons/04 PillFillButton',
  component: PillFillButton,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    label: 'Pill Button',
    size: 'Base',
    iconBool: 'Null',
    variant: 'MedBlue',
    state: 'Base',
  },
  argTypes: {
    label: { control: 'text' },
    size: { control: 'select', options: ['Base', 'Small', 'Large'] },
    iconBool: { control: 'select', options: ['Null', 'Left', 'Right'] },
    variant: {
      control: 'select',
      options: ['MedBlue', 'AccentBlue', 'BlackBook', 'AccentBlueXLarge'],
      description: 'Valid combinations of priority, text color, and padding from the Figma matrix.',
    },
    state: { control: 'select', options: ['Base', 'Hover', 'Pressed', 'Disabled'] },
    icon: { table: { disable: true } },
    className: { table: { disable: true } },
    __forceDark: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Pill fill button aligned to Figma (Size Base/Small/Large, Icon Left/Right/Null, TextColor MedBlue/AccentBlue/Black, Priority A/B, Padding Small/Large, States Base/Hover/Pressed/Disabled).',
      },
    },
  },
  decorators: [
    (Story, context) => (
      <InputPreviewContainer args={context.args}>
        <Story />
      </InputPreviewContainer>
    ),
  ],
  render: (args) => {
    const [currentState, setCurrentState] = useState(args.state);

    React.useEffect(() => {
      setCurrentState(args.state);
    }, [args.state, args.label, args.size, args.iconBool, args.variant]);

    const interactive = args.state === 'Base';
    const isDisabled = args.state === 'Disabled';

    const toBaseState = () => setCurrentState(args.state);
    const handleMouseEnter = () => {
      if (interactive && !isDisabled) setCurrentState('Hover');
    };
    const handleMouseLeave = () => {
      toBaseState();
    };
    const handleMouseDown = () => {
      if (interactive && !isDisabled) setCurrentState('Pressed');
    };
    const handleMouseUp = () => {
      if (interactive && !isDisabled) setCurrentState('Hover');
    };

    const icon = args.iconBool === 'Null' ? null : <DotIcon />;

    return (
      <PillFillButton
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
