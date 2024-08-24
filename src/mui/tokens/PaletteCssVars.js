import React from 'react';
import Grid from '@mui/material/Grid';
import { defaultTheme } from '../../themes/default/theme';
import PaletteItem from '../../storybook/PaletteItem';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

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
      <Grid key={key + index} container>
        <Grid item xs={12}>
          <p>{key}</p>
        </Grid>
        <Grid item xs={10}>
          <Grid container gap={2}>
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
          </Grid>
        </Grid>
      </Grid>
    );
  });
};

export default PaletteCssVars;
