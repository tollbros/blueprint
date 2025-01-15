import * as React from 'react';
import { useTheme } from '../../themes/ThemeProvider';

export default function Types() {
  const styles = {
    width: '100%',
    maxWidth: 800,
    border: '1px solid lightGray',
    padding: '0 8px',
  };

  const theme = useTheme();

  return Object.keys(theme?.typography || {}).map((typographyKey, index) => {
    return (
      <div key={typographyKey + index} style={styles}>
        <span className={`tb-typography-${typographyKey}-font`}>{typographyKey}. Typography</span>
        <br />
        <b>var(--tb-typography-{typographyKey}-font)</b>
      </div>
    );
  });
}
