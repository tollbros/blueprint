/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories:
    ["../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    '@storybook/addon-designs'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  staticDirs: ['../public']
}
export default config
