import React from 'react';
import Tabs from './Tabs.js';

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

export const ThreeTabs = Template.bind({});
ThreeTabs.args = {
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
  ],
};
