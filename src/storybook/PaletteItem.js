import Grid from '@mui/material/Grid'
import React from 'react'

const PaletteItem = ({ backgroundColor, classKey }) => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      display='flex'
      direction='row'
      alignItems='flex-start'
      justifyContent='flex-start'
    >
      <div
        style={{
          color: 'transparent',
          backgroundColor,
          width: '48px',
          minWidth: '48px',
          height: '48px',
          marginRight: '8px',
          border: '1px solid #e0e0e0',
          borderRadius: '4px'
        }}
      >
        -
      </div>
      <div>
        <p style={{ margin: '0' }}>{classKey}</p>
        <b>{backgroundColor}</b>
      </div>
    </Grid>
  )
}

export default PaletteItem
