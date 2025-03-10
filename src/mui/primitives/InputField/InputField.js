import { useState, useCallback, forwardRef } from 'react';
import styles from './InputField.module.scss';

const InputField = forwardRef(({ placeholder, disabled, className, ...props }, ref) => {
  const [inputState, setInputState] = useState({
    isFocused: false,
    hasValue: false,
  });

  const handleFocus = useCallback(() => {
    if (!disabled) {
      setInputState((prev) => ({ ...prev, isFocused: true }));
    }
  }, [disabled]);

  const handleBlur = useCallback((e) => {
    setInputState({
      isFocused: false,
      hasValue: e.target.value !== '',
    });
  }, []);

  const handleChange = useCallback((e) => {
    setInputState((prev) => ({
      ...prev,
      hasValue: e.target.value !== '',
    }));
  }, []);

  // Compute class names once
  const containerClassName = `${styles.inputContainer} ${inputState.isFocused ? styles.focused : ''} ${
    disabled ? styles.disabled : ''
  } ${className || ''}`;

  const labelClassName = `${styles.placeholder} ${
    inputState.isFocused || inputState.hasValue ? styles.floatingPlaceholder : ''
  }`;

  return (
    <div className={containerClassName}>
      <input
        className={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder=' '
        disabled={disabled}
        ref={ref}
        {...props}
      />
      <label className={labelClassName}>{placeholder}</label>
    </div>
  );
});

// Add display name for better debugging
InputField.displayName = 'InputField';

export default InputField;
