import React from 'react';
import SquareIconButton from './SquareIconButton';

export default {
  title: 'Components/SquareIconButton',
  component: SquareIconButton,
};

const Template = (args) => <SquareIconButton {...args} />;

export const WithAddIcon = Template.bind({});
WithAddIcon.args = {
  children: '+',
};
