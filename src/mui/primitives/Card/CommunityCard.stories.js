import React from 'react';
import CommunityCard from './CommunityCard';

const StorySchema = {
  title: 'Components/CommunityCard',
  component: CommunityCard,
  argTypes: {
    tagText: { control: 'text' },
    collectionName: { control: 'text' },
    propertyName: { control: 'text' },
    squareFeet: { control: 'text' },
    beds: { control: 'text' },
    baths: { control: 'text' },
    halfBaths: { control: 'text' },
    garage: { control: 'text' },
    price: { control: 'text' },
  },
};

export default StorySchema;

const Template = (args) => <CommunityCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  tagText: '[Tag]',
  collectionName: 'Villa Collection',
  propertyName: 'Acorn',
  squareFeet: '3,219',
  beds: '3',
  baths: '2',
  halfBaths: '2',
  garage: '1',
  price: '$399,995',
};
