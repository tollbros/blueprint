import { useEffect, useMemo, useState } from 'react';
import styles from './Checkbox.module.scss';
import CheckmarkIcon from '../../icons/checkmark.svg';

const SIZE_CLASS = {
  Base: styles.sizeBase,
  Large: styles.sizeLarge,
};

const STATE_CLASS = {
  Base: styles.stateBase,
  Focused: styles.stateFocused,
  Selected: styles.stateSelected,
  Disabled: styles.stateDisabled,
};

const normalizeSize = (size) => (SIZE_CLASS[size] ? size : 'Base');
const normalizeState = (state) => (STATE_CLASS[state] ? state : 'Base');

const Checkbox = ({
  size = 'Base',
  state = 'Base',
  defaultChecked = false,
  checked,
  onChange,
  className = '',
  ...rest
}) => {
  const resolvedSize = normalizeSize(size);
  const resolvedState = normalizeState(state);
  const isInteractive = resolvedState === 'Base';
  const isControlled = typeof checked === 'boolean';
  const [isChecked, setIsChecked] = useState(resolvedState === 'Selected' || defaultChecked);
  const resolvedIconSrc = useMemo(
    () => (typeof CheckmarkIcon === 'string' ? CheckmarkIcon : CheckmarkIcon?.src || CheckmarkIcon?.default || ''),
    [],
  );

  useEffect(() => {
    if (resolvedState === 'Base' && !isControlled) {
      setIsChecked(!!defaultChecked);
      return;
    }
    setIsChecked(resolvedState === 'Selected');
  }, [defaultChecked, isControlled, resolvedState]);
  const isSelected = isInteractive ? (isControlled ? checked : isChecked) : resolvedState === 'Selected';
  const isDisabled = resolvedState === 'Disabled';
  const effectiveState = isInteractive ? (isSelected ? 'Selected' : 'Base') : resolvedState;

  const handleToggle = () => {
    if (!isInteractive) return;
    const nextChecked = !isSelected;
    if (!isControlled) {
      setIsChecked(nextChecked);
    }
    onChange?.(nextChecked);
  };

  const handleKeyDown = (event) => {
    if (!isInteractive) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <div
      className={[
        styles.checkbox,
        SIZE_CLASS[resolvedSize],
        STATE_CLASS[effectiveState],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role='checkbox'
      aria-checked={isSelected}
      aria-disabled={isDisabled}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={isInteractive ? handleToggle : undefined}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <div className={styles.box}>
        {isSelected ? (
          <span
            className={styles.checkmark}
            style={{ '--checkmark-url': `url(${resolvedIconSrc})` }}
            aria-hidden='true'
          />
        ) : null}
      </div>
    </div>
  );
};

export default Checkbox;
