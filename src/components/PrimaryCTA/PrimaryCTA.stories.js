import { fn } from '@storybook/test';
import { Controls, Description, Primary, Title } from '@storybook/blocks';
import PrimaryCTA from './PrimaryCTA';
import React from 'react';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

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
  title: 'Buttons/01 PrimaryCTA',
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
      <InputPreviewContainer args={context.args}>
        <Story />
      </InputPreviewContainer>
    ),
  ],
  args: {
    onClick: fn(),
    label: 'PCTA',
    priority: 'A',
    size: 'base',
    iconPosition: 'none',
    fullWidth: false,
    state: 'base',
  },
  argTypes: {
    label: { control: 'text' },
    priority: {
      control: 'select',
      options: ['A', 'B'],
    },
    size: {
      control: 'select',
      options: ['base', 'small', 'large'],
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
    state: {
      control: 'select',
      options: ['base', 'hover', 'pressed', 'disabled'],
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
