# Blueprint: The Toll Brothers Design System

## Overview

**Blueprint** is the comprehensive design system developed by Toll Brothers, aimed at ensuring consistency, efficiency, and excellence across all our digital products. This system serves as the foundation for creating a cohesive user experience that reflects the luxury and sophistication synonymous with the Toll Brothers brand.

## Getting Started

### Installation

To start using Blueprint in your project, follow these simple steps:

1. **Install via npm:**

   ```bash
   npm install @tollbrothers/blueprint
   ```

2. **Import the styles:**

   ```javascript
   import { ThemeProvider, defaultTheme, kragleTheme } from '@tollbrothers/blueprint';

   // either use defaultTheme or kragleTheme or your own custom theme
   const App = () => (
     <ThemeProvider theme={defaultTheme}>...</ThemeProvider>
   );
   ```

3. **Use the components:**

   ```javascript
   import { Button } from '@tollbrothers/blueprint';

   const MyComponent = () => (
     <Button>Click Me</Button>
   );
   ```

---


## Workflow

#### Example

Take a look at the `src/mui/blocks/Overview` directory. A directory was created and then the following files were created:

- `Overview.js`
  - This is the component that will be used in the application.
- `Overview.module.scss`
  - This is where the styles are defined for the component.
- `Overview.mockData.js`
  - Mock data is used to simulate data that would be passed to the component.
- `Overview.stories.js`
  - This is where the component is used in a storybook.

The flow goes like this:
```
Overview.module.scss is used by Overview.js
Overview.mockData.js is used by Overview.stories.js
Overview.stories.js is used by Storybook
Overview.js is used by Overview.stories.js and the application
```


