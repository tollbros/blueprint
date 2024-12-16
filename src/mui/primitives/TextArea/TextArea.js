import React, { useState } from 'react';
import styles from './TextArea.module.scss';

const TextArea = ({ placeholder, disabled, maxLength = 200, value, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [charCount, setCharCount] = useState(value?.length || 0);

  const handleFocus = () => !disabled && setIsFocused(true);

  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value !== '');
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setHasValue(inputValue !== '');
    setCharCount(e.target.length);
  };

  return (
    <div
      className={`${styles.textAreaContainer} ${isFocused ? styles.focused : ''} ${disabled ? styles.disabled : ''}`}
    >
      <textarea
        className={styles.textarea}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder=' '
        disabled={disabled}
        maxLength={maxLength}
        value={value}
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

export default TextArea;
