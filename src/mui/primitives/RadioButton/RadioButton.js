import React from 'react';
import styles from './RadioButton.module.scss';

const RadioButton = ({ label, disabled, theme, ...props }) => {
  return (
    <label className={`${styles.radioButtonWrapper} ${disabled ? styles.disabled : ''}`}>
      <input
        type="radio"
        className={styles.hiddenRadio}
        disabled={disabled}
        {...props}
      />
      <div className={styles.styledRadio}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="9" stroke="var(--mui-palette-TB-Brand-Gray, #8195A2)" strokeWidth="1"/>
          <circle cx="10" cy="10" r="6" fill="none"/>
        </svg>
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default RadioButton;