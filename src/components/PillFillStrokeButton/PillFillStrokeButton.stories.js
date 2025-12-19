import React, { useLayoutEffect, useRef, useState } from 'react';
import { fn } from '@storybook/test';
import PillFillStrokeButton from './PillFillStrokeButton';
import { getPreviewContainerStyle, getWrapperWidth } from '../../storybook/previewUtils';

const StorySchema = {
  title: 'Button/PillFillStrokeButton',
  component: PillFillStrokeButton,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    label: 'Pill Button',
    size: 'Base',
    color: 'MedBlue',
    state: 'Base',
  },
  argTypes: {
    label: { control: 'text' },
    size: { control: 'select', options: ['Base', 'Small'] },
    color: { control: 'select', options: ['MedBlue', 'AccentBlue'] },
    state: { control: 'select', options: ['Base', 'Hover', 'Pressed', 'Disabled'] },
    className: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        component: 'Pill fill+stroke button (Size Base/Small, Color MedBlue/AccentBlue, States Base/Hover/Pressed/Disabled).',
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
      }, [naturalWidth, context.args.label, context.args.size, context.args.color, context.args.state]);

      const wrapperWidth = getWrapperWidth(naturalWidth, false, {
        padding: 40,
        fullMultiplier: 2,
      });

      return (
        <div
          style={getPreviewContainerStyle(context.args, {
            wrapperWidth,
          })}
        >
          <div
            ref={measureRef}
            style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', display: 'inline-flex' }}
          >
            <PillFillStrokeButton {...context.args} />
          </div>

          <div style={{ display: 'inline-flex' }}>
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
    }, [args.state, args.label, args.size, args.color]);

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

    return (
      <PillFillStrokeButton
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
