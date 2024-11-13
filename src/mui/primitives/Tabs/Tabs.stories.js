import React from 'react';
import Tabs from './Tabs.js';
import Button from '../Button/Button.js';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const TwoTabs = Template.bind({});
TwoTabs.args = {
  tabs: [
    {
      title: 'Tab 1',
      content: () => {
        return <div>Content of Tab 1</div>;
      },
    },
    {
      title: 'Tab 2',
      content: () => {
        return <div>Content of Tab 2</div>;
      },
    },
  ],
};

export const TwoTabsWithActionButton = Template.bind({});
TwoTabsWithActionButton.args = {
  tabAction: () => {
    return (
      <Button size={'small'} style={{ textWrap: 'nowrap' }}>
        Tab Action Button
      </Button>
    );
  },
  tabs: [
    {
      title: 'Tab 1',
      content: () => {
        return <div>Content of Tab 1</div>;
      },
    },
    {
      title: 'Tab 2',
      content: () => {
        return <div>Content of Tab 2</div>;
      },
    },
  ],
};

export const ScrollableTabs = Template.bind({});
ScrollableTabs.args = {
  tabAction: () => {
    return (
      <Button size={'small'} style={{ textWrap: 'nowrap' }}>
        Tab Action Button
      </Button>
    );
  },
  tabs: [
    {
      title: 'Tab 1',
      content: () => {
        return <div>Content of Tab 1</div>;
      },
    },
    {
      title: 'Tab 2',
      content: () => {
        return <div>Content of Tab 2</div>;
      },
    },
    {
      title: 'Tab 3',
      content: () => {
        return <div>Content of Tab 3</div>;
      },
    },
    {
      title: 'Here is another tab',
      content: () => {
        return <div>Content of Here is another tab</div>;
      },
    },
    {
      title: 'And another one',
      content: () => {
        return <div>Content of And another one</div>;
      },
    },
    {
      title: 'An extra tab',
      content: () => {
        return <div>Content of An extra tab</div>;
      },
    },
    {
      title: 'A tab',
      content: () => {
        return <div>Content of A tab</div>;
      },
    },
    {
      title: 'With a long title',
      content: () => {
        return <div>Content of With a long title</div>;
      },
    },
    {
      title: 'And another one',
      content: () => {
        return <div>Content of And another one</div>;
      },
    },
    {
      title: 'Another long title',
      content: () => {
        return <div>Content of Another long title</div>;
      },
    },
    {
      title: 'Tab 2a',
      content: () => {
        return <div>Content of Tab 2a</div>;
      },
    },
    {
      title: 'Tab 3a',
      content: () => {
        return <div>Content of Tab 3a</div>;
      },
    },
    {
      title: 'Tab 1b',
      content: () => {
        return <div>Content of Tab 1b</div>;
      },
    },
    {
      title: 'Tab 2b',
      content: () => {
        return <div>Content of Tab 2b</div>;
      },
    },
    {
      title: 'Tab 3b',
      content: () => {
        return <div>Content of Tab 3b</div>;
      },
    },
    {
      title: 'Tab 1c',
      content: () => {
        return <div>Content of Tab 1c</div>;
      },
    },
    {
      title: 'Tab 2c',
      content: () => {
        return <div>Content of Tab 2c</div>;
      },
    },
    {
      title: 'Tab 3c',
      content: () => {
        return <div>Content of Tab 3c</div>;
      },
    },
    {
      title: 'Tab 1c',
      content: () => {
        return <div>Content of Tab 1c</div>;
      },
    },
    {
      title: 'Tab 2c',
      content: () => {
        return <div>Content of Tab 2c</div>;
      },
    },
    {
      title: 'Tab 3c',
      content: () => {
        return <div>Content of Tab 3c</div>;
      },
    },
    {
      title: 'Tab 1d',
      content: () => {
        return <div>Content of Tab 1d</div>;
      },
    },
    {
      title: 'Tab 2d',
      content: () => {
        return <div>Content of Tab 2d</div>;
      },
    },
    {
      title: 'Tab 3d',
      content: () => {
        return <div>Content of Tab 3d</div>;
      },
    },
    {
      title: 'Tab 1e',
      content: () => {
        return <div>Content of Tab 1e</div>;
      },
    },
    {
      title: 'Tab 2e',
      content: () => {
        return <div>Content of Tab 2e</div>;
      },
    },
    {
      title: 'Tab 3e',
      content: () => {
        return <div>Content of Tab 3e</div>;
      },
    },
    {
      title: 'Tab 1f',
      content: () => {
        return <div>Content of Tab 1f</div>;
      },
    },
    {
      title: 'Tab 2f',
      content: () => {
        return <div>Content of Tab 2f</div>;
      },
    },
    {
      title: 'Tab 3f',
      content: () => {
        return <div>Content of Tab 3f</div>;
      },
    },
  ],
};
