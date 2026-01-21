import SecondaryCTA from './SecondaryCTA';
import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';
import { icons } from '../../icons';

const resolveIconSrc = (src) => (typeof src === 'string' ? src : src?.src || src?.default || '');

const StorySchema = {
  title: 'Buttons/02 SecondaryCTA',
  component: SecondaryCTA,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    label: 'SCTA',
    size: 'base',
    iconPosition: 'none',
    iconSelect: 'PlaceholderCircle',
    fullWidth: false,
    bg: 'Light',
    state: 'base',
  },
  argTypes: {
    label: { control: 'text' },
    iconPosition: {
      control: 'select',
      options: ['none', 'left', 'right'],
    },
    iconSelect: {
      control: 'select',
      options: icons.map((icon) => icon.name),
    },
    fullWidth: {
      control: 'boolean',
    },
    className: { table: { disable: true } },
    size: {
      control: 'select',
      options: ['base', 'small', 'large'],
    },
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
        component: 'Secondary CTA aligned to Figma (Light/Dark BG, Base/Hover/Pressed/Disabled, sizes Base/Small/Large).',
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
    }, [args.state, args.label, args.size, args.bg, args.fullWidth]);

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
      <SecondaryCTA
        {...args}
        iconSelect={icon}
        state={currentState}
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
