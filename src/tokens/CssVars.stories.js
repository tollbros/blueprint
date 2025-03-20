import { defaultTheme } from '../themes/default/theme';
import addFontTokens from '../themes/utils/addFontTokens';
import flattenToCssVars from '../themes/utils/flattenToCssVars';
import hexToRgba from '../themes/utils/hexToRGB';
const themeObject = flattenToCssVars(addFontTokens({ theme: defaultTheme }));

const StorySchema = {
  title: 'tokens/CssVars',
  component: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {Object.keys(themeObject).map((themeKey) => {
          return (
            <div
              key={themeKey}
              style={{ display: 'flex', gap: '24px', width: '100%', justifyContent: 'space-between' }}
            >
              <span>{themeKey}</span>
              <span>{themeObject[themeKey]}</span>
            </div>
          );
        })}
        {Object.entries(themeObject)
          .filter(([key, value]) => key.includes('palette') && value.includes('#'))
          .map(([key, value], hexIndex) => {
            return (
              <div
                key={`hex-${hexIndex}`}
                style={{ display: 'flex', gap: '24px', width: '100%', justifyContent: 'space-between' }}
              >
                <span>{key}-RGB</span>
                <span>{hexToRgba(value)}</span>
              </div>
            );
          })}
      </div>
    );
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
  argTypes: {},
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default StorySchema;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {},
};
