import React from 'react';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { defaultTheme } from '../../themes/default/theme';
import PaletteItem from '../../storybook/PaletteItem';
import styles from './PaletteCssVars.module.scss';

const PaletteCssVars = () => {
  const theme = extendTheme(defaultTheme);
  return Object.keys(theme.vars.palette).map((key, index) => {
    const isObject =
      typeof theme.vars.palette[key] === 'object' &&
      theme.vars.palette[key] !== null &&
      !Array.isArray(theme.vars.palette[key]);

    if (!isObject) {
      return;
    }

    return (
      <div key={key + index} className={styles.paletteCssVars}>
        <div className={styles.title}>
          <p>{key}</p>
        </div>
        <div className={styles.inner}>
          <div className={styles.container}>
            {Object.keys(theme.vars.palette[key]).map((classKey, classIndex) => {
              if (
                typeof theme.vars.palette[key][classKey] !== 'object' ||
                theme.vars.palette[key][classKey] === null ||
                Array.isArray(theme.vars.palette[key][classKey])
              ) {
                return (
                  <PaletteItem
                    key={classIndex}
                    classKey={`classKey-${classKey}`}
                    backgroundColor={theme.vars.palette[key][classKey]}
                  />
                );
              }

              return Object.keys(theme.vars.palette[key][classKey]).map((paletteKey, palleteKeyIndex) => {
                return (
                  <PaletteItem
                    key={`${paletteKey}-${palleteKeyIndex}`}
                    classKey={`${classKey}.${paletteKey}`}
                    backgroundColor={theme.vars.palette[key][classKey][paletteKey]}
                  />
                );
              });
            })}
          </div>
        </div>
      </div>
    );
  });
};

export default PaletteCssVars;
