import React from 'react';
import { defaultTheme } from '../themes/default/theme';
import PaletteItem from './PaletteItem';
import styles from './PaletteCssVars.module.scss';

const PaletteCssVars = () => {
  const theme = defaultTheme
  return Object.keys(theme.palette).map((key, index) => {
    const isObject =
      typeof theme.palette[key] === 'object' &&
      theme.palette[key] !== null &&
      !Array.isArray(theme.palette[key]);

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
            {Object.keys(theme.palette[key]).map((classKey, classIndex) => {
              if (
                typeof theme.palette[key][classKey] !== 'object' ||
                theme.palette[key][classKey] === null ||
                Array.isArray(theme.palette[key][classKey])
              ) {
                return (
                  <PaletteItem
                    key={classIndex}
                    classKey={`classKey-${classKey}`}
                    backgroundColor={theme.palette[key][classKey]}
                  />
                );
              }

              return Object.keys(theme.palette[key][classKey]).map((paletteKey, palleteKeyIndex) => {
                return (
                  <PaletteItem
                    key={`${paletteKey}-${palleteKeyIndex}`}
                    classKey={`${classKey}.${paletteKey}`}
                    backgroundColor={theme.palette[key][classKey][paletteKey]}
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
