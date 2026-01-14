import { useEffect, useState } from 'react';
import styles from './RadioButton.module.scss';

const SIZE_CLASS = {
  Small: styles.sizeSmall,
  Large: styles.sizeLarge,
};

const STATE_CLASS = {
  Base: styles.stateBase,
  Focused: styles.stateFocused,
  Selected: styles.stateSelected,
  Disabled: styles.stateDisabled,
};

const normalizeSize = (size) => (SIZE_CLASS[size] ? size : 'Small');
const normalizeState = (state) => (STATE_CLASS[state] ? state : 'Base');

const RadioButton = ({ size = 'Small', state = 'Base', className = '', ...rest }) => {
  const resolvedSize = normalizeSize(size);
  const resolvedState = normalizeState(state);
  const isInteractive = resolvedState === 'Base';
  const [isSelected, setIsSelected] = useState(resolvedState === 'Selected');

  useEffect(() => {
    setIsSelected(resolvedState === 'Selected');
  }, [resolvedState]);

  const isDisabled = resolvedState === 'Disabled';
  const effectiveState = isInteractive ? (isSelected ? 'Selected' : 'Base') : resolvedState;

  const handleSelect = () => {
    if (!isInteractive || isSelected) return;
    setIsSelected(true);
  };

  const handleKeyDown = (event) => {
    if (!isInteractive) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSelect();
    }
  };

  return (
    <div
      className={[
        styles.radioButton,
        SIZE_CLASS[resolvedSize],
        STATE_CLASS[effectiveState],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role='radio'
      aria-checked={isSelected}
      aria-disabled={isDisabled}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={isInteractive ? handleSelect : undefined}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <div className={styles.ring}>
        <span className={styles.dot} />
      </div>
    </div>
  );
};

export default RadioButton;
