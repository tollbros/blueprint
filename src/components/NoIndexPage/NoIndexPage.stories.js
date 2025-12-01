import React from 'react';
import { fn } from '@storybook/test';
import NoIndexPage from './NoIndexPage';

export default {
  title: 'Pages/No Index Page',
  component: NoIndexPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/GrQAfbw8N5sF79J8u4KfFY/Token-Test?node-id=27-63017&m=dev',
    },
    docs: {
      description: {
        component:
          'Implements the mobile Non-Index landing page hero and form card using Toll Brothers brand tokens. The header is reusable across pages and the card contains form-ready controls.',
      },
    },
  },
  args: {
    onSearchClick: fn(),
    onMenuClick: fn(),
    onUtilityClick: fn(),
    onSubmit: fn(),
    onHomeClick: fn(),
    onLogoClick: fn(),
  },
};

export const NoIndexPageStory = {
  name: 'No Index Page',
  render: (args) => <NoIndexPage {...args} />,
};
