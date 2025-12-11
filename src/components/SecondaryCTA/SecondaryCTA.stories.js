import SecondaryCTA from './SecondaryCTA';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { fn } from '@storybook/test';

const StorySchema = {
  title: 'primitives/SecondaryCTA',
  component: SecondaryCTA,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    label: 'SCTA',
    size: 'base',
    bg: 'Light',
    state: 'base',
    fullWidth: false,
  },
  argTypes: {
    label: { control: 'text' },
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
    fullWidth: {
      control: 'boolean',
    },
    className: { table: { disable: true } },
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

      const wrapperWidth = naturalWidth ? `${naturalWidth + 120}px` : 'fit-content';

          return (
            <div
              style={{
                background: 'var(--tb-palette-TB-Functional-LightGray, #E9EDF0)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: wrapperWidth,
                margin: '0 auto',
                position: 'relative',
                borderRadius: '4px',
                padding: '24px 0',
              }}
            >
          <div
            ref={measureRef}
            style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', display: 'inline-flex' }}
          >
            <SecondaryCTA {...context.args} fullWidth={false} />
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

    return (
      <SecondaryCTA
        {...args}
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

export const Playground = {};
