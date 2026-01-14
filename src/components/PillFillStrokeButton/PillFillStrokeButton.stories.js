import React, { useState } from 'react';
import { fn } from '@storybook/test';
import PillFillStrokeButton from './PillFillStrokeButton';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

const StorySchema = {
  title: 'Buttons/05 PillFillStrokeButton',
  component: PillFillStrokeButton,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    label: 'Pill Button',
    size: 'Small',
    iconBool: 'Null',
    hPadding: 'Base',
    contentColor: 'MedBlue',
    state: 'Base',
  },
  argTypes: {
    label: { control: 'text' },
    size: { control: 'select', options: ['Small', 'Base', 'Large'] },
    iconBool: { control: 'select', options: ['Null', 'Left', 'Right'] },
    hPadding: { control: 'select', options: ['Small', 'Base'] },
    contentColor: { control: 'select', options: ['MedBlue', 'AccentBlue'] },
    state: { control: 'select', options: ['Base', 'Hover', 'Pressed', 'Disabled'] },
    iconMedBlue: { table: { disable: true } },
    iconDisabled: { table: { disable: true } },
    iconAccentBlue: { table: { disable: true } },
    className: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Pill fill+stroke button (Size Small/Base/Large, optional icons, ContentColor MedBlue/AccentBlue, States Base/Hover/Pressed/Disabled).',
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
    }, [args.state, args.label, args.size, args.contentColor, args.iconBool, args.hPadding]);

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
