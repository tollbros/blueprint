import * as React from 'react';
import { useTheme } from '../themes/ThemeProvider';
import styles from './Types.module.scss';

export default function Types() {
  const theme = useTheme();

  return Object.keys(theme?.typography || {}).map((typographyKey, index) => {
    return (
      <div className={styles.typesRow} key={typographyKey + index}>
        <span>--tb-typography-{typographyKey}-font</span>
        <span className={`tb-typography-${typographyKey}-font`}>{typographyKey}. Typography</span>
      </div>
    );
  });
}
