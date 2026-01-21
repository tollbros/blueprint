import PillStrokeButton from './PillStrokeButton';
import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';
import { icons } from '../../icons';

const resolveIconSrc = (src) => (typeof src === 'string' ? src : src?.src || src?.default || '');

const StorySchema = {
  title: 'Buttons/03 PillStrokeButton',
  component: PillStrokeButton,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    label: 'Pill Button',
    priority: 'A',
    iconPosition: 'none',
    iconSelect: 'PlaceholderCircle',
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
    iconSelect: {
      control: 'select',
      options: icons.map((icon) => icon.name),
    },
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

    const selectedIcon = icons.find((iconItem) => iconItem.name === args.iconSelect);
    const iconSrc = selectedIcon ? resolveIconSrc(selectedIcon.src) : '';
    const icon = args.iconPosition === 'none' || !iconSrc ? null : iconSrc;

    return (
      <PillStrokeButton
        {...args}
        state={currentState}
        iconSelect={icon}
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
