import styles from './PillStrokeButton.module.scss';

const STYLE_MAP = {
  Light: {
    A: {
      base: styles.lightABase,
      hover: styles.lightAHover,
      pressed: styles.lightAPressed,
      disabled: styles.lightADisabled,
    },
    B: {
      base: styles.lightBBase,
      hover: styles.lightBHover,
      pressed: styles.lightBPressed,
      disabled: styles.lightBDisabled,
    },
  },
  Dark: {
    A: {
      base: styles.darkABase,
      hover: styles.darkAHover,
      pressed: styles.darkAPressed,
      disabled: styles.darkADisabled,
    },
    B: {
      base: styles.darkBBase,
      hover: styles.darkBHover,
      pressed: styles.darkBPressed,
      disabled: styles.darkBDisabled,
    },
  },
};

/**
 * PillStrokeButton aligned to Figma spec:
 * - bg: Light | Dark
 * - priority: A | B
 * - state: base | hover | pressed | disabled
 * - iconPosition: left | right | none (icon inherits label color)
 */
const PillStrokeButton = ({
  label = 'Pill Button',
  bg = 'Light',
  priority = 'A',
  state = 'base',
  iconPosition = 'none',
  icon = null,
  className = '',
  ...rest
}) => {
  const sizeClass = styles.sizeBase;
  const bgKey = bg === 'Dark' ? 'Dark' : 'Light';
  const priorityKey = priority === 'B' ? 'B' : 'A';
  const stateKey = state?.toLowerCase?.() || 'base';
  const visualClass = STYLE_MAP[bgKey]?.[priorityKey]?.[stateKey] || STYLE_MAP.Light.A.base;

  const isDisabled = stateKey === 'disabled';
  const hasIcon = iconPosition !== 'none' && !!icon;

  const buttonClasses = [styles.button, sizeClass, visualClass, hasIcon && styles.withIcon, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClasses} type='button' disabled={isDisabled} aria-disabled={isDisabled} {...rest}>
      {iconPosition === 'left' && hasIcon ? <span className={styles.icon}>{icon}</span> : null}
      <span className={styles.label}>{label}</span>
      {iconPosition === 'right' && hasIcon ? <span className={styles.icon}>{icon}</span> : null}
    </button>
  );
};

export default PillStrokeButton;
