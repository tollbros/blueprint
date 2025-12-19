import { fn } from '@storybook/test';
import React, { useLayoutEffect, useRef, useState } from 'react';
import TextLink from './TextLink';
import { getPreviewContainerStyle, getWrapperWidth } from '../../storybook/previewUtils';

const StorySchema = {
  title: 'Buttons/06 TextLink',
  component: TextLink,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/CceZPnvgPvbO8cSOarLUBl/Storybook-Design-Actuals?node-id=0-1&t=sONWhpjlvXD9dtIB-1',
    },
    docs: {
      description: {
        component: `
Text Link aligned to Figma: size (Small/Base/Large), bg (Light/Dark), state (Base/Hover/Pressed/Disabled).
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
      }, [naturalWidth, context.args.label, context.args.size, context.args.bg, context.args.state]);

      const wrapperWidth = getWrapperWidth(naturalWidth, false, {
        padding: 40,
        fullMultiplier: 2,
      });

      const containerStyle = getPreviewContainerStyle(context.args, {
        darkValues: ['dark'],
        darkBg: '#6E7684',
        lightBg: '#F4F6F7',
        wrapperWidth,
      });

      return (
        <div style={containerStyle}>
          <div
            ref={measureRef}
            style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', display: 'inline-flex' }}
          >
            <TextLink {...context.args} />
          </div>

          <Story />
        </div>
      );
    },
  ],
  args: {
    onClick: fn(),
    label: 'Text Link',
    size: 'base',
    bg: 'light',
    state: 'base',
    href: null,
  },
  argTypes: {
    label: { control: 'text' },
    size: {
      control: 'select',
      options: ['base', 'small', 'large'],
    },
    bg: {
      control: 'select',
      options: ['light', 'dark'],
    },
    state: {
      control: 'select',
      options: ['base', 'hover', 'pressed', 'disabled'],
    },
    className: { control: 'text' },
    href: { control: 'text' },
    children: { table: { disable: true } },
  },
  render: (args) => {
    const interactive = args.state === 'base';
    const isDisabled = args.state === 'disabled';
    const [currentState, setCurrentState] = React.useState(args.state);

    React.useEffect(() => {
      setCurrentState(args.state);
    }, [args.state, args.size, args.bg, args.label]);

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
      <TextLink
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

export const Playground = {
  parameters: { layout: 'centered' },
};

export const Matrix = {
  render: () => {
    const sizes = ['small', 'base', 'large'];
    const states = ['base', 'hover', 'pressed', 'disabled'];
    const backgrounds = ['light', 'dark'];

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '12px 20px', alignItems: 'center' }}>
        {backgrounds.map((bg) =>
          states.map((state) =>
            sizes.map((size) => (
              <TextLink key={`${bg}-${state}-${size}`} label='Text Link' size={size} bg={bg} state={state} href={null} />
            )),
          ),
        )}
      </div>
    );
  },
  parameters: { layout: 'centered' },
  tags: ['!dev', '!autodocs'],
};
