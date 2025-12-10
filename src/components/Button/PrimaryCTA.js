import styles from './PrimaryCTA.module.scss';

const SIZE_CLASS = {
  base: styles.sizeBase,
  small: styles.sizeSmall,
  large: styles.sizeLarge,
};

const PRIORITY_STATE_CLASS = {
  A: {
    base: styles.filledBase,
    hover: styles.filledHover,
    pressed: styles.filledPressed,
    disabled: styles.filledDisabled,
  },
  B: {
    base: styles.ghostBase,
    hover: styles.ghostHover,
    pressed: styles.ghostPressed,
    disabled: styles.ghostDisabled,
  },
};

/**
 * Primary CTA button aligned to Figma spec:
 * - size: base (48px) | small (40px) | large (56px)
 * - priority: A (filled) | B (secondary)
 * - state: base | hover | pressed | disabled
 * - iconPosition: left | right | none (icon color inherits label color)
 */
const PrimaryCTA = ({
  label = 'PCTA',
  size = 'base',
  priority = 'A',
  state = 'base',
  iconPosition = 'none',
  icon = null,
  fullWidth = false,
  className = '',
  ...rest
}) => {
  const sizeClass = SIZE_CLASS[size] || SIZE_CLASS.base;
  const visualClass = PRIORITY_STATE_CLASS[priority]?.[state] || PRIORITY_STATE_CLASS.A.base;
  const hasIcon = iconPosition !== 'none' && !!icon;

  const buttonClasses = [styles.button, sizeClass, visualClass, hasIcon && styles.withIcon, fullWidth && styles.fullWidth, className]
    .filter(Boolean)
    .join(' ');

  const isDisabled = state === 'disabled';

  return (
    <button className={buttonClasses} type='button' disabled={isDisabled} aria-disabled={isDisabled} {...rest}>
      {iconPosition === 'left' && hasIcon ? <span className={styles.icon}>{icon}</span> : null}
      <span className={styles.label}>{label}</span>
      {iconPosition === 'right' && hasIcon ? <span className={styles.icon}>{icon}</span> : null}
    </button>
  );
};

export default PrimaryCTA;
