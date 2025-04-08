import { defaultTheme } from '../themes/default/theme';
import addFontTokens from '../themes/utils/addFontTokens';
import flattenToCssVars from '../themes/utils/flattenToCssVars';
import hexToRgba from '../themes/utils/hexToRGB';
import styles from './CssVars.module.scss';
const themeObject = flattenToCssVars(addFontTokens({ theme: defaultTheme }));

const StorySchema = {
  title: 'tokens/CssVars',
  component: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {Object.keys(themeObject).map((themeKey) => {
          console.log("themeObject?.[themeKey]?.startsWith?.('#')", themeObject?.[themeKey]?.startsWith?.('#'));
          return (
            <div className={styles.cssVarRow} key={themeKey} style={{ display: 'flex', gap: '24px', width: '100%', justifyContent: 'space-between' }}>
              <div>{themeKey}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {themeObject[themeKey]}{' '}
                {(themeKey?.toLowerCase?.()?.endsWith?.('rgb') || themeObject?.[themeKey]?.startsWith?.('#') || themeObject?.[themeKey]?.toLowerCase?.()?.startsWith?.('rgb')) && (
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '4px',
                      border: '1px solid #e0e0e0',
                      backgroundColor: themeKey?.toLowerCase?.()?.endsWith?.('rgb') ? `rgba(${themeObject[themeKey]})` : themeObject[themeKey],
                    }}
                  >
                    &nbsp;
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div>
          <div style={{ fontSize: '20px', marginTop: '16px' }}>
            <b>Example for the following RGB CSS Vars:</b>
          </div>{' '}
          <pre>rgba(var(--tb-palette-TB-Functional-Black-RGB), 0.4)</pre>
        </div>
        {Object.entries(themeObject)
          .filter(([key, value]) => key.includes('palette') && value.includes('#'))
          .map(([key, value], hexIndex) => {
            const rgbaValue = hexToRgba(value);
            return (
              <div className={styles.cssVarRow} key={`hex-${hexIndex}`} style={{ display: 'flex', gap: '24px', width: '100%', justifyContent: 'space-between' }}>
                <div>{key}-RGB</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {rgbaValue}{' '}
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '4px',
                      border: '1px solid #e0e0e0',
                      backgroundColor: `rgba(${rgbaValue})`,
                    }}
                  >
                    &nbsp;
                  </div>
                </div>
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
