import React from 'react';
import { useTheme } from '../themes/ThemeProvider';
import PaletteTokenTypes from './PaletteTokenTypes';

const Palette = () => {
  const theme = useTheme();

  return (
    <div>
      {Object.keys(theme.palette).map((key) => (
        <PaletteTokenTypes key={key} dataKey={key} data={theme.palette[key]} />
      ))}
    </div>
  );
};

export default Palette;
