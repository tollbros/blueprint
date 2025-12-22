import SecondaryCTA from './SecondaryCTA';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { fn } from '@storybook/test';
import { getPreviewContainerStyle, getWrapperWidth } from '../../storybook/previewUtilsButtons';

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
  title: 'Buttons/02 SecondaryCTA',
  component: SecondaryCTA,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    label: 'SCTA',
    size: 'base',
    iconPosition: 'none',
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
    icon: { table: { disable: true } },
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
    (Story, context) => {
      const measureRef = useRef(null);
      const [naturalWidth, setNaturalWidth] = useState(null);

      useLayoutEffect(() => {
        if (measureRef.current) {
          const measured = measureRef.current.getBoundingClientRect().width;
          if (measured && measured !== naturalWidth) {
            setNaturalWidth(measured);
          }
        }
      }, [naturalWidth, context.args.label, context.args.size, context.args.bg, context.args.state, context.args.fullWidth]);

      const wrapperWidth = getWrapperWidth(naturalWidth, context.args.fullWidth, {
        padding: 40,
        fullMultiplier: 2,
      });

      return (
        <div
          style={getPreviewContainerStyle(context.args, {
            wrapperWidth,
            darkProp: 'bg',
            darkValues: ['Dark'],
          })}
        >
          <div
            ref={measureRef}
            style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', display: 'inline-flex' }}
          >
            <SecondaryCTA
              {...context.args}
              icon={context.args.iconPosition === 'none' ? null : <DotIcon />}
              fullWidth={false}
            />
          </div>

          <div style={{ display: 'inline-flex', width: context.args.fullWidth ? '100%' : 'auto' }}>
            <Story />
          </div>
        </div>
      );
    },
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

    const icon = args.iconPosition === 'none' ? null : <DotIcon />;

    return (
      <SecondaryCTA
        {...args}
        icon={icon}
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
