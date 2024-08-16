import React from 'react';
import Grid from '@mui/material/Grid';
import Checkbox from './Checkbox';

const CheckboxStickerSheet = ({ disabled = false }) => {
  const colors = ['primary', 'secondary', 'success', 'error', 'info', 'warning'];
  const sizes = ['small', 'medium'];

  const VariantCheckboxes = () => (
    <Grid container gap={2}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={2} />
          <Grid item xs={10}>
            <Grid container>
              <Grid
                item
                xs={3}
                sx={{
                  textAlign: 'center',
                }}
              >
                <b>small</b>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  textAlign: 'center',
                }}
              >
                <b>medium</b>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {colors.map((color, colorIndex) => {
          return (
            <Grid
              key={color + colorIndex}
              container
              direction='row'
              sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}
            >
              <Grid item xs={2}>
                <h5>{color}</h5>
              </Grid>
              <Grid
                item
                xs={10}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Grid container paddingBottom='8px' paddingTop='8px'>
                  {sizes.map((size) => (
                    <>
                      <Grid
                        item
                        xs={3}
                        key={color + size}
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'column',
                        }}
                      >
                        <Checkbox disabled={disabled} color={color} size={size}>
                          {color} {size}
                        </Checkbox>
                      </Grid>
                    </>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );

  return <VariantCheckboxes />;
};

export default CheckboxStickerSheet;
