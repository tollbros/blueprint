import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioButton.module.scss';

const RadioButton = ({ label, disabled, className, ...props }) => {
  return (
    <label className={`${styles.radioButtonWrapper} ${disabled ? styles.disabled : ''} ${className || ''}`}>
      <input type='radio' className={styles.hiddenRadio} disabled={disabled} {...props} />
      <div className={styles.styledRadio}>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
          <circle cx='10' cy='10' r='9' stroke='inherit' strokeWidth='1' />
          <circle cx='10' cy='10' r='6' fill='none' />
        </svg>
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

RadioButton.defaultProps = {
  disabled: false,
};

export default RadioButton;
