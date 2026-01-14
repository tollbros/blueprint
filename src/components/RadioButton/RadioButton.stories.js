import React from 'react';
import RadioButton from './RadioButton';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

export default {
  title: 'Selectors/03 RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  args: {
    size: 'Small',
    state: 'Base',
  },
  argTypes: {
    size: { control: 'select', options: ['Small', 'Large'] },
    state: { control: 'select', options: ['Base', 'Focused', 'Selected', 'Disabled'] },
    className: { control: 'text' },
  },
  render: (args) => {
    const [selectedValue, setSelectedValue] = React.useState('A');
    const isInteractive = args.state === 'Base';

    React.useEffect(() => {
      if (!isInteractive) {
        setSelectedValue('A');
      }
    }, [isInteractive]);

    const getState = (value) => {
      if (!isInteractive) return args.state;
      return selectedValue === value ? 'Selected' : 'Base';
    };

    return (
      <InputPreviewContainer args={args}>
        <div
          style={{
            display: 'grid',
            rowGap: '16px',
            font: 'var(--tb-typography-Gotham-S-700-font)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>A</span>
            <RadioButton
              {...args}
              state={getState('A')}
              onClick={isInteractive ? () => setSelectedValue('A') : undefined}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>B</span>
            <RadioButton
              {...args}
              state={getState('B')}
              onClick={isInteractive ? () => setSelectedValue('B') : undefined}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>C</span>
            <RadioButton
              {...args}
              state={getState('C')}
              onClick={isInteractive ? () => setSelectedValue('C') : undefined}
            />
          </div>
        </div>
      </InputPreviewContainer>
    );
  },
};

export const Playground = {
  parameters: { layout: 'centered' },
};
