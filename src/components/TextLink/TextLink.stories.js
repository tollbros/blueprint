import { fn } from '@storybook/test';
import { Controls, Description, Primary, Title } from '@storybook/blocks';
import React from 'react';
import TextLink from './TextLink';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

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
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Controls />
        </>
      ),
    },
  },
  decorators: [
    (Story, context) => (
      <InputPreviewContainer args={context.args} options={{ darkValues: ['dark'], darkBg: '#6E7684' }}>
        <Story />
      </InputPreviewContainer>
    ),
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
