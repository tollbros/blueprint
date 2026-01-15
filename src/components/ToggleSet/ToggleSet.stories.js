import React from 'react';
import { fn } from '@storybook/test';
import ToggleSet from './ToggleSet';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

const StorySchema = {
  title: 'Selectors/06 ToggleSet',
  component: ToggleSet,
  tags: ['autodocs'],
  args: {
    count: 2,
    bg: 'Light',
    labels: ['Toggle Label', 'Toggle Label', 'Toggle Label'],
    selectedIndex: undefined,
    onChange: fn(),
  },
  argTypes: {
    count: { control: 'select', options: [2, 3] },
    bg: { control: 'select', options: ['Light', 'Dark'] },
    labels: { control: 'object' },
    selectedIndex: { control: 'number' },
    onChange: { table: { disable: true } },
    className: { control: 'text' },
  },
  render: (args) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const isControlled = typeof args.selectedIndex === 'number';

    React.useEffect(() => {
      if (isControlled) return;
      setSelectedIndex(0);
    }, [args.count, isControlled, args.bg]);

    const handleChange = (index) => {
      if (!isControlled) {
        setSelectedIndex(index);
      }
      if (args.onChange) {
        args.onChange(index);
      }
    };

    return (
      <InputPreviewContainer args={args} options={{ darkValues: ['Dark'] }}>
        <ToggleSet
          {...args}
          selectedIndex={isControlled ? args.selectedIndex : selectedIndex}
          onChange={handleChange}
        />
      </InputPreviewContainer>
    );
  },
};

export default StorySchema;

export const Playground = {
  parameters: { layout: 'centered' },
};
