import React from 'react'
import { defaultTheme } from '../../themes/default.theme'
import ClassTable from '../../storybook/ClassTable'
import Grid from '@mui/material/Grid'

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
        <Grid item xs={2}>
          <h5>{key}</h5>
        </Grid>
        <Grid item xs={10} sx={{ border: '1px solid #d9d9d9' }}>
          {Object.keys(defaultTheme.vars.palette[key]).map((classKey) => {
            if (
              typeof defaultTheme.vars.palette[key][classKey] !== 'object' ||
              defaultTheme.vars.palette[key][classKey] === null ||
              Array.isArray(defaultTheme.vars.palette[key][classKey])
            ) {
              return (
                <div>
                  {classKey}: <b>{defaultTheme.vars.palette[key][classKey]}</b>
                  <span
                    style={{
                      minWidth: '100%',
                      color: 'transparent',
                      minHeight: '100%',
                      display: 'flex',
                      backgroundColor: defaultTheme.vars.palette[key][classKey]
                    }}
                  >
                    -
                  </span>
                </div>
              )
            }

            return (
              <ClassTable
                rows={Object.keys(defaultTheme.vars.palette[key]).map(
                  (classKey) => {
                    return {
                      name: (
                        <>
                          {Object.keys(
                            defaultTheme.vars.palette[key][classKey]
                          ).map((paletteKey) => {
                            return (
                              <div>
                                {paletteKey}:{' '}
                                {
                                  defaultTheme.vars.palette[key][classKey][
                                    paletteKey
                                  ]
                                }{' '}
                                <span
                                  style={{
                                    minWidth: '100%',
                                    minHeight: '100%',
                                    display: 'flex',
                                    color: 'transparent',
                                    backgroundColor:
                                      defaultTheme.vars.palette[key][classKey][
                                        paletteKey
                                      ]
                                  }}
                                >
                                  -
                                </span>
                              </div>
                            )
                          })}
                        </>
                      )
                    }
                  }
                )}
                title={classKey}
              />
            )
          })}
        </Grid>
      </Grid>
    )
  })
}

export default PaletteCssVars
