import React from 'react'
import { defaultTheme } from '../../themes/default/theme'
import Grid from '@mui/material/Grid'
import PaletteItem from '../../storybook/PaletteItem'

const PaletteCssVars = () => {
  return Object.keys(defaultTheme.vars.palette).map((key) => {
    const isObject =
      typeof defaultTheme.vars.palette[key] === 'object' &&
      defaultTheme.vars.palette[key] !== null &&
      !Array.isArray(defaultTheme.vars.palette[key])
    if (!isObject) {
      return
    }

    return (
      <Grid container>
        <Grid item xs={12}>
          <p>{key}</p>
        </Grid>
        <Grid item xs={10}>
          <Grid container gap={2}>
            {Object.keys(defaultTheme.vars.palette[key]).map(
              (classKey, classIndex) => {
                if (
                  typeof defaultTheme.vars.palette[key][classKey] !==
                    'object' ||
                  defaultTheme.vars.palette[key][classKey] === null ||
                  Array.isArray(defaultTheme.vars.palette[key][classKey])
                ) {
                  return (
                    <PaletteItem
                      key={classIndex}
                      classKey={`classKey-${classKey}`}
                      backgroundColor={defaultTheme.vars.palette[key][classKey]}
                    />
                  )
                }

                return Object.keys(
                  defaultTheme.vars.palette[key][classKey]
                ).map((paletteKey, palleteKeyIndex) => {
                  return (
                    <PaletteItem
                      key={`${paletteKey}-${palleteKeyIndex}`}
                      classKey={`${classKey}.${paletteKey}`}
                      backgroundColor={
                        defaultTheme.vars.palette[key][classKey][paletteKey]
                      }
                    />
                  )
                })
              }
            )}
          </Grid>
        </Grid>
      </Grid>
    )
  })
}

export default PaletteCssVars
