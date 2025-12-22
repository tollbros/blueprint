import { forwardRef, useState } from 'react';
import styles from './InputField.module.scss';

const InputField = forwardRef(
  ({ fieldLabel = 'Field Label', fieldValue, state = 'Base', className = '', onChange, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(fieldValue ?? '');

    const isControlled = fieldValue !== undefined;
    const value = isControlled ? fieldValue : internalValue;
    const isDisabled = state === 'Disabled';
    const isBaseState = state === 'Base';
    const isFilledState = state === 'Filled';
    const isFocusedState = state === 'Focused';
    const isInteractive = isBaseState && !isDisabled;
    const shouldFloat = isFocusedState || isFilledState || (isBaseState && (isFocused || Boolean(value)));
    const showFocusedStyle = isFocusedState || (isBaseState && isFocused);

    const handleFocus = () => {
      if (isInteractive) {
        setIsFocused(true);
      }
    };

    const handleBlur = () => {
      if (isInteractive) {
        setIsFocused(false);
      }
    };

    const handleChange = (event) => {
      if (!isInteractive) return;
      if (!isControlled) {
        setInternalValue(event.target.value);
      }
      if (onChange) {
        onChange(event);
      }
    };

    const containerClassName = [
      styles.inputContainer,
      showFocusedStyle && styles.focused,
      isDisabled && styles.disabled,
      shouldFloat && styles.withValue,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const labelClassName = [styles.placeholder, shouldFloat && styles.floatingPlaceholder].filter(Boolean).join(' ');

    return (
      <div className={containerClassName}>
        <input
          className={styles.input}
          value={isControlled ? value : undefined}
          defaultValue={isControlled ? undefined : value}
          placeholder=' '
          disabled={isDisabled}
          readOnly={!isInteractive}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          ref={ref}
          {...props}
        />
        <label className={labelClassName}>{fieldLabel}</label>
      </div>
    );
  },
);

// Add display name for better debugging
InputField.displayName = 'InputField';

export default InputField;
