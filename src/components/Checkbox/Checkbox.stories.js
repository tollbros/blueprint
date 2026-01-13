import React from 'react';
import Checkbox from './Checkbox';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

export default {
  title: 'Selectors/02 CheckBox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    size: 'Base',
    state: 'Base',
  },
  argTypes: {
    size: { control: 'select', options: ['Base', 'Large'] },
    state: {
      control: 'select',
      options: ['Base', 'Focused', 'Selected', 'Disabled'],
    },
    className: { control: 'text' },
  },
  render: (args) => {
    const isInteractive = args.state === 'Base';
    const [selectedValues, setSelectedValues] = React.useState(['A', 'B']);

    React.useEffect(() => {
      if (!isInteractive) {
        setSelectedValues([]);
      }
    }, [isInteractive]);

    const toggleValue = (value) => {
      setSelectedValues((prev) => {
        if (prev.includes(value)) {
          return prev.filter((item) => item !== value);
        }
        return [...prev, value];
      });
    };

    const getState = (value) => {
      if (!isInteractive) return args.state;
      return selectedValues.includes(value) ? 'Selected' : 'Base';
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
            <Checkbox
              {...args}
              state={getState('A')}
              onClick={isInteractive ? () => toggleValue('A') : undefined}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>B</span>
            <Checkbox
              {...args}
              state={getState('B')}
              onClick={isInteractive ? () => toggleValue('B') : undefined}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>C</span>
            <Checkbox
              {...args}
              state={getState('C')}
              onClick={isInteractive ? () => toggleValue('C') : undefined}
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
