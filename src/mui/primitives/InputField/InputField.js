import { useState } from 'react';
import styles from './InputField.module.scss';

const InputField = ({ placeholder, disabled, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => !disabled && setIsFocused(true);

  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value !== '');
  };

  const handleChange = (e) => {
    setHasValue(e.target.value !== '');
  };

  return (
    <div className={`${styles.inputContainer} ${isFocused ? styles.focused : ''} ${disabled ? styles.disabled : ''}`}>
      <input
        className={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder=' '
        disabled={disabled}
        {...props}
      />
      <label className={`${styles.placeholder} ${isFocused || hasValue ? styles.floatingPlaceholder : ''}`}>
        {placeholder}
      </label>
    </div>
  );
};

export default InputField;
