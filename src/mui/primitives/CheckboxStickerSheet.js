import React from 'react'
import Grid from '@mui/material/Grid'
import Checkbox from './Checkbox'

const CheckboxStickerSheet = () => {
  const colors = ['primary', 'secondary', 'success', 'error', 'info', 'warning']
  const sizes = ['small', 'medium']

  const VariantCheckboxes = () => (
    <Grid item xs={12}>
      {colors.map((color, index) => {
        return (
          <Grid key={color + index} container direction='row' sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)'}}>
            <Grid
              item
              xs={2}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end'
              }}
            >
              <h5>{color}</h5>
            </Grid>
            <Grid item xs={10}>
              <Grid container>
                {sizes.map((size) => (
                  <Grid item xs={4} key={color + size}>
                    <h5>{size}</h5>
                    <Checkbox color={color} size={size}>
                      {color} {size}
                    </Checkbox>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )

  return (
    <Grid container gap={2}>
      <VariantCheckboxes />
    </Grid>
  )
}

export default CheckboxStickerSheet
