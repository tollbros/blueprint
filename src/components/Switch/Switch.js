import { useMemo, useEffect, useState } from 'react';
import styles from './Switch.module.scss';
import CheckmarkIcon from '../../icons/checkmark.svg';

const SIZE_CLASS = {
  Base: styles.sizeBase,
  Large: styles.sizeLarge,
};

const normalizeSize = (size) => (SIZE_CLASS[size] ? size : 'Base');

const Switch = ({
  size = 'Base',
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  className = '',
  ...rest
}) => {
  const resolvedSize = normalizeSize(size);
  const isControlled = typeof checked === 'boolean';
  const [isOn, setIsOn] = useState(!!defaultChecked);
  const resolvedIconSrc = useMemo(
    () => (typeof CheckmarkIcon === 'string' ? CheckmarkIcon : CheckmarkIcon?.src || CheckmarkIcon?.default || ''),
    [],
  );

  useEffect(() => {
    if (!isControlled) {
      setIsOn(!!defaultChecked);
    }
  }, [defaultChecked, isControlled]);

  const resolvedOn = isControlled ? checked : isOn;
  const visualOn = disabled ? false : resolvedOn;

  const handleToggle = () => {
    if (disabled) return;
    const nextValue = !resolvedOn;
    if (!isControlled) {
      setIsOn(nextValue);
    }
    onChange?.(nextValue);
  };

  const handleKeyDown = (event) => {
    if (disabled) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <button
      className={[
        styles.switch,
        SIZE_CLASS[resolvedSize],
        visualOn ? styles.stateOn : styles.stateOff,
        disabled && styles.stateDisabled,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      type='button'
      role='switch'
      aria-checked={resolvedOn}
      aria-disabled={disabled || undefined}
      onClick={disabled ? undefined : handleToggle}
      onKeyDown={disabled ? undefined : handleKeyDown}
      {...rest}
    >
      <span className={styles.track} aria-hidden='true' />
      <span className={styles.handle} aria-hidden='true'>
        {visualOn ? (
          <span
            className={styles.checkmark}
            style={{ '--checkmark-url': `url(${resolvedIconSrc})` }}
            aria-hidden='true'
          />
        ) : null}
      </span>
    </button>
  );
};

export default Switch;
