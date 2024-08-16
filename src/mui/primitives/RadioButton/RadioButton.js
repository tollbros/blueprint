import React from 'react';
import styles from './RadioButton.module.scss';

const RadioButton = ({ disabled, onChange, checked, value }) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  const containerClasses = [styles.radioButtonContainer, disabled ? styles.disabled : ''].filter(Boolean).join(' ');

  return (
    <label className={containerClasses}>
      <input
        type='radio'
        className={styles.hiddenRadio}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        value={value}
      />
      <RadioSVG checked={checked} disabled={disabled} />
    </label>
  );
};

const RadioSVG = ({ checked, disabled }) => (
  <svg
    className={styles.styledRadio}
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle
      cx='10'
      cy='10'
      r={checked ? '9' : '9.5'}
      stroke={disabled ? 'var(--mui-palette-TB-Functional-MedGray, #D8D8D8)' : '#8195A2'}
      strokeWidth={checked ? '2' : '1'}
    />
    {checked && !disabled && <circle cx='10' cy='10' r='6' fill='var(--mui-palette-TB-Brand-Accent, #0070CD)' />}
  </svg>
);

export default RadioButton;
