import React from 'react';
import Switch from './Switch';
import { InputPreviewContainer } from '../../storybook/previewUtilsInputs';

export default {
  title: 'Selectors/07 Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    size: 'Base',
    checked: undefined,
    defaultChecked: false,
    disabled: false,
  },
  argTypes: {
    size: { control: 'select', options: ['Base', 'Large'] },
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { table: { disable: true } },
    className: { control: 'text' },
  },
  render: (args) => {
    const isControlled = typeof args.checked === 'boolean';
    const [value, setValue] = React.useState(args.defaultChecked);

    React.useEffect(() => {
      if (!isControlled) {
        setValue(args.defaultChecked);
      }
    }, [args.defaultChecked, isControlled]);

    return (
      <InputPreviewContainer args={args}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Switch
            {...args}
            checked={isControlled ? args.checked : value}
            onChange={(nextValue) => {
              if (!isControlled) {
                setValue(nextValue);
              }
            }}
          />
        </div>
      </InputPreviewContainer>
    );
  },
};

export const Playground = {
  parameters: { layout: 'centered' },
};
