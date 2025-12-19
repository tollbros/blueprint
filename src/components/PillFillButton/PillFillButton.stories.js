import React, { useLayoutEffect, useRef, useState } from 'react';
import { fn } from '@storybook/test';
import PillFillButton from './PillFillButton';
import { getPreviewContainerStyle, getWrapperWidth } from '../../storybook/previewUtils';

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
  title: 'primitives/PillFillButton',
  component: PillFillButton,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    label: 'Pill Button',
    priority: 'A',
    size: 'Base',
    iconBool: 'Null',
    padding: 'Small',
    textColor: 'MedBlue',
    padding: 'Small',
    state: 'Base',
  },
  argTypes: {
    label: { control: 'text' },
    priority: { control: 'select', options: ['A', 'B'] },
    size: { control: 'select', options: ['Base', 'Small', 'Large'] },
    iconBool: { control: 'select', options: ['Null', 'Left', 'Right'] },
    padding: { control: 'select', options: ['Small', 'Large'] },
    textColor: {
      control: 'select',
      options: ['MedBlue', 'AccentBlue', 'Black'],
      description:
        'Priority B only supports Black; Padding=Large forces Size=Large, Priority=A, TextColor=AccentBlue.',
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
    (Story, context) => {
      const measureRef = useRef(null);
      const [naturalWidth, setNaturalWidth] = useState(null);
      const forceDarkArgs = { ...context.args, __forceDark: true };

      useLayoutEffect(() => {
        if (measureRef.current) {
          const measured = measureRef.current.getBoundingClientRect().width;
          if (measured && measured !== naturalWidth) {
            setNaturalWidth(measured);
          }
        }
      }, [
        naturalWidth,
        forceDarkArgs.label,
        forceDarkArgs.size,
        forceDarkArgs.iconBool,
        forceDarkArgs.textColor,
        forceDarkArgs.priority,
        forceDarkArgs.padding,
        forceDarkArgs.state,
      ]);

      const wrapperWidth = getWrapperWidth(naturalWidth, false, {
        padding: 40,
        fullMultiplier: 2,
      });

      return (
        <div
          style={getPreviewContainerStyle(forceDarkArgs, {
            wrapperWidth,
            darkProp: '__forceDark',
            darkValues: [true],
          })}
        >
          <div
            ref={measureRef}
            style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', display: 'inline-flex' }}
          >
            <PillFillButton
              {...forceDarkArgs}
              icon={forceDarkArgs.iconBool === 'Null' ? null : <DotIcon />}
            />
          </div>

          <div style={{ display: 'inline-flex' }}>
            <Story args={forceDarkArgs} />
          </div>
        </div>
      );
    },
  ],
  render: (args) => {
    const [currentState, setCurrentState] = useState(args.state);

    React.useEffect(() => {
      setCurrentState(args.state);
    }, [args.state, args.label, args.size, args.iconBool, args.textColor, args.priority, args.padding]);

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
