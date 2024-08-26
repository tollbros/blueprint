import React from 'react';
import * as styles from '@mui/material/styles';
import PaletteTokenTypes from './PaletteTokenTypes';

const Palette = () => {
  const theme = styles.useTheme();

  return (
    <div>
      {Object.keys(theme.palette).map((key) => (
        <PaletteTokenTypes key={key} dataKey={key} data={theme.palette[key]} />
      ))}
    </div>
  );
};

export default Palette;
