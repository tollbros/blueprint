import { forwardRef, useState } from 'react';
import styles from './TextArea.module.scss';
import ErrorTag from '../Tag/ErrorTag';
import SuccessTag from '../Tag/SuccessTag';

const TextArea = forwardRef(
  (
    {
      fieldLabel,
      fieldValue,
      state = 'Base',
      className = '',
      onChange,
      placeholder,
      disabled,
      value,
      maxLength = 200,
      ...props
    },
    ref,
  ) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(fieldValue ?? value ?? '');

  const isControlled = fieldValue !== undefined || value !== undefined;
  const resolvedValue = isControlled ? fieldValue ?? value : internalValue;

  const isDisabled = state === 'Disabled' || disabled;
  const isBaseState = state === 'Base';
  const isFilledState = state === 'Filled';
  const isFocusedState = state === 'Focused';
  const isErrorState = state === 'Error';
  const isSuccessState = state === 'Success';
  const isInteractive = isBaseState && !isDisabled;
  const shouldFloat = isFocusedState || isFilledState || (isBaseState && (isFocused || Boolean(resolvedValue)));
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
    styles.textAreaContainer,
    showFocusedStyle && styles.focused,
    shouldFloat && styles.withValue,
    isDisabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const labelClassName = [styles.placeholder, shouldFloat && styles.floatingPlaceholder].filter(Boolean).join(' ');
  const resolvedLabel = fieldLabel ?? placeholder ?? 'Text Label';

  return (
    <div className={styles.textAreaWrapper}>
      <div className={containerClassName}>
        <textarea
          className={styles.textarea}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder=' '
          disabled={isDisabled}
          readOnly={!isInteractive}
          maxLength={maxLength}
          value={isControlled ? resolvedValue : undefined}
          defaultValue={isControlled ? undefined : resolvedValue}
          ref={ref}
          {...props}
        />
        <label className={labelClassName}>{resolvedLabel}</label>
      </div>
      {isErrorState && <ErrorTag className={styles.stateTag} />}
      {isSuccessState && <SuccessTag className={styles.stateTag} />}
    </div>
  );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
