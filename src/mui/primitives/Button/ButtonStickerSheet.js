import React from 'react'
import Grid from '@mui/material/Grid'
import Button from './Button'

const ButtonStickerSheet = () => {
  const ButtonVariants = () => {
    const variants = ['contained', 'outlined', 'text']
    const colors = [
      'primary',
      'secondary',
      'success',
      'error',
      'info',
      'warning'
    ]
    const sizes = ['small', 'medium', 'large']

    return variants.reduce((acc, variant, index) => {
      const VariantButtons = () => (
        <Grid
          container
          direction='row'
          sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}
        >
          <Grid
            item
            xs={2}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <h5>{variant}</h5>
          </Grid>
          <Grid item xs={10}>
            {colors.map((color, indexColor) => {
              return (
                <Grid container key={color + indexColor} mb={2}>
                  {sizes.map((size, indexSize) => (
                    <Grid item xs={4} key={color + size}>
                      <Grid container direction='column'>
                        {indexColor === 0 && (
                          <Grid item xs={4}>
                            <h5>{size}</h5>
                          </Grid>
                        )}
                        <Grid item xs={4}>
                          <Button variant={variant} color={color} size={size}>
                            {color}
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      )
      return [...acc, <VariantButtons key={variant + index} />]
    }, [])
  }

  return (
    <>
      <ButtonVariants />
    </>
  )
}

export default ButtonStickerSheet
