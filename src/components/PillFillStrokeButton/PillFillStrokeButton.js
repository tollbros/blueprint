import styles from './PillFillStrokeButton.module.scss';

const SIZE_CLASS = {
  Small: styles.sizeSmall,
  Base: styles.sizeBase,
};

const STATE_CLASS = {
  base: styles.stateBase,
  hover: styles.stateHover,
  pressed: styles.statePressed,
  disabled: styles.stateDisabled,
};

const COLOR_CLASS = {
  MedBlue: styles.colorMedBlue,
  AccentBlue: styles.colorAccentBlue,
};

/**
 * PillFillStrokeButton aligned to Figma spec:
 * - size: Small | Base
 * - color: MedBlue | AccentBlue
 * - state: Base | Hover | Pressed | Disabled
 */
const PillFillStrokeButton = ({
  label = 'Pill Button',
  size = 'Base',
  color = 'MedBlue',
  state = 'Base',
  className = '',
  ...rest
}) => {
  const sizeClass = SIZE_CLASS[size] || SIZE_CLASS.Base;
  const colorClass = COLOR_CLASS[color] || COLOR_CLASS.MedBlue;
  const stateKey = state?.toLowerCase?.() || 'base';
  const stateClass = STATE_CLASS[stateKey] || STATE_CLASS.base;
  const isDisabled = stateKey === 'disabled';

  const buttonClasses = [styles.button, sizeClass, colorClass, stateClass, className].filter(Boolean).join(' ');

  return (
    <button type='button' className={buttonClasses} disabled={isDisabled} aria-disabled={isDisabled} {...rest}>
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default PillFillStrokeButton;
