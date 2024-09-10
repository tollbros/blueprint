import React from 'react';
import Tab from './Tab';

export default {
  title: 'Components/Tab',
  component: Tab,
};

const Template = (args) => <Tab {...args} />;

export const TwoTabs = Template.bind({});
TwoTabs.args = {
  tabs: ['Tab 1', 'Tab 2'],
};

export const ThreeTabs = Template.bind({});
ThreeTabs.args = {
  tabs: ['Tab 1', 'Tab 2', 'Tab 3'],
};