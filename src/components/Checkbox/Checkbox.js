import { useEffect, useState } from 'react';
import styles from './Checkbox.module.scss';

const CHECKMARK_ICON = 'http://localhost:3845/assets/afb09fc9d1fd13013c650d30c8d3cf5ea30d407a.svg';

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

const Checkbox = ({ size = 'Base', state = 'Base', className = '', ...rest }) => {
  const resolvedSize = normalizeSize(size);
  const resolvedState = normalizeState(state);
  const isInteractive = resolvedState === 'Base';
  const [isChecked, setIsChecked] = useState(resolvedState === 'Selected');

  useEffect(() => {
    setIsChecked(resolvedState === 'Selected');
  }, [resolvedState]);
  const isSelected = isInteractive ? isChecked : resolvedState === 'Selected';
  const isDisabled = resolvedState === 'Disabled';
  const effectiveState = isInteractive ? (isSelected ? 'Selected' : 'Base') : resolvedState;

  const handleToggle = () => {
    if (!isInteractive) return;
    setIsChecked((prev) => !prev);
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
          <span className={styles.checkmark}>
            <img alt='' src={CHECKMARK_ICON} />
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Checkbox;
