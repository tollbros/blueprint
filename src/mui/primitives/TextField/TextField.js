import React, { useState } from 'react';
import styles from './TextField.module.scss';

const TextField = ({ placeholder, disabled, maxLength = 200, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleFocus = () => !disabled && setIsFocused(true);

  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value !== '');
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setHasValue(inputValue !== '');
    setCharCount(inputValue.length);
  };

  return (
    <div
      className={`${styles.textFieldContainer} ${isFocused ? styles.focused : ''} ${disabled ? styles.disabled : ''}`}
    >
      <textarea
        className={styles.textarea}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder=' '
        disabled={disabled}
        maxLength={maxLength}
        {...props}
      />
      <label className={`${styles.placeholder} ${isFocused || hasValue ? styles.floatingPlaceholder : ''}`}>
        {placeholder}
      </label>
      <div className={styles.charCounter}>
        {charCount}/{maxLength}
      </div>
    </div>
  );
};

export default TextField;
