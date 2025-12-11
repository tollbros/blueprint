import { fn } from '@storybook/test';
import PrimaryCTA from './PrimaryCTA';
import React, { useLayoutEffect, useRef, useState } from 'react';

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
  title: 'primitives/PrimaryCTA',
  component: PrimaryCTA,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/CceZPnvgPvbO8cSOarLUBl/Storybook-Design-Actuals?node-id=0-1&t=sONWhpjlvXD9dtIB-1',
    },
    docs: {
      description: {
        component: `
Primary CTA aligned to the Figma spec (Priority A/B, Base/Small/Large, Base/Hover/Pressed/Disabled, optional left/right icon).
        `,
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
      }, [naturalWidth, context.args.label, context.args.size, context.args.priority, context.args.state, context.args.iconPosition]);

      const wrapperWidth = naturalWidth ? `${naturalWidth + 120}px` : 'fit-content';

      return (
        <div
          style={{
            background: 'var(--tb-palette-TB-Functional-LightGray, #E9EDF0)',
            display: 'flex',
            justifyContent: 'center',
            width: wrapperWidth,
            position: 'relative',
            borderRadius: '4px',
            padding: '24px 0',
          }}
        >
          <div
            ref={measureRef}
            style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', display: 'inline-flex' }}
          >
            <PrimaryCTA {...context.args} fullWidth={false} />
          </div>

          <div style={{ display: 'inline-flex', width: context.args.fullWidth ? '100%' : 'auto' }}>
            <Story />
          </div>
        </div>
      );
    },
  ],
  args: {
    onClick: fn(),
    label: 'PCTA',
    size: 'base',
    priority: 'A',
    state: 'base',
    iconPosition: 'none',
    fullWidth: false,
  },
  argTypes: {
    label: { control: 'text' },
    size: {
      control: 'select',
      options: ['base', 'small', 'large'],
    },
    priority: {
      control: 'select',
      options: ['A', 'B'],
    },
    state: {
      control: 'select',
      options: ['base', 'hover', 'pressed', 'disabled'],
    },
    iconPosition: {
      control: 'select',
      options: ['none', 'left', 'right'],
    },
    icon: { table: { disable: true } },
    className: { control: 'text' },
    fullWidth: {
      control: 'boolean',
      description: 'Stretch to fill the wrapper width',
    },
  },
  render: (args) => {
    const [currentState, setCurrentState] = React.useState(args.state);

    React.useEffect(() => {
      setCurrentState(args.state);
    }, [args.state, args.label, args.size, args.priority, args.iconPosition, args.fullWidth]);

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
      <PrimaryCTA
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

export const Matrix = {
  render: () => {
    const priorities = ['A', 'B'];
    const states = ['base', 'hover', 'pressed', 'disabled'];
    const sizes = ['base', 'small', 'large'];

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '12px', alignItems: 'center' }}>
        {priorities.map((priority) =>
          states.map((state) =>
            sizes.map((size) => (
              <PrimaryCTA
                key={`${priority}-${state}-${size}`}
                label={`PCTA`}
                priority={priority}
                state={state}
                size={size}
                iconPosition={state === 'disabled' ? 'none' : 'left'}
                icon={<DotIcon />}
              />
            )),
          ),
        )}
      </div>
    );
  },
  parameters: { layout: 'centered' },
  tags: ['!dev', '!autodocs'],
};
