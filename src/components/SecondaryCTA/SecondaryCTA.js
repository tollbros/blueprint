import styles from './SecondaryCTA.module.scss';

const SIZE_CLASS = {
  base: styles.sizeBase,
  small: styles.sizeSmall,
  large: styles.sizeLarge,
};

const STYLE_MAP = {
  Light: {
    base: styles.lightBase,
    hover: styles.lightHover,
    pressed: styles.lightPressed,
    disabled: styles.lightDisabled,
  },
  Dark: {
    base: styles.darkBase,
    hover: styles.darkHover,
    pressed: styles.darkPressed,
    disabled: styles.darkDisabled,
  },
};

/**
 * Secondary CTA button (outline/ghost) aligned to Figma spec:
 * - size: base (48px) | small (40px) | large (56px)
 * - bg: Light | Dark (sets contrast treatment)
 * - state: base | hover | pressed | disabled
 */
const SecondaryCTA = ({
  label = 'SCTA',
  size = 'base',
  bg = 'Light',
  state = 'base',
  className = '',
  fullWidth = false,
  ...rest
}) => {
  const sizeClass = SIZE_CLASS[size] || SIZE_CLASS.base;
  const visualClass = STYLE_MAP[bg]?.[state] || STYLE_MAP.Light.base;
  const buttonClasses = [styles.button, sizeClass, visualClass, fullWidth && styles.fullWidth, className]
    .filter(Boolean)
    .join(' ');

  const isDisabled = state === 'disabled';

  return (
    <button className={buttonClasses} type='button' disabled={isDisabled} aria-disabled={isDisabled} {...rest}>
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default SecondaryCTA;
