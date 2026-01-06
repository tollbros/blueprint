import styles from './PillFillStrokeButton.module.scss';

const ICONS = {
  MedBlue: 'http://localhost:3845/assets/7f9b00802e515bf8021382c7420298f6b796552a.svg',
  AccentBlue: 'http://localhost:3845/assets/13c795ee60876f41ea4865e1a7f0faad16c50029.svg',
  MedGray: 'http://localhost:3845/assets/46d35cd0744a8f28b3336e971806fcaaa5ff05bf.svg',
  DarkGray: 'http://localhost:3845/assets/3606b9384fd85b73fd7e639b27df8534332699cf.svg',
};

const SIZE_CLASS = {
  Small: styles.sizeSmall,
  Base: styles.sizeBase,
  Large: styles.sizeLarge,
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

const PADDING_CLASS = {
  Small: styles.paddingSmall,
  Base: styles.paddingBase,
};


/**
 * PillFillStrokeButton aligned to Figma spec:
 * - size: Small | Base | Large
 * - color: MedBlue | AccentBlue
 * - state: Base | Hover | Pressed | Disabled
 * - iconBool: Null | Left | Right
 * - hPadding: Small | Base
 */
const PillFillStrokeButton = ({
  label = 'Pill Button',
  iconMedBlue = null,
  iconDisabled = null,
  iconAccentBlue = null,
  size = 'Base',
  iconBool = 'Null',
  color = 'MedBlue',
  hPadding = 'Base',
  state = 'Base',
  className = '',
  ...rest
}) => {
  const sizeClass = SIZE_CLASS[size] || SIZE_CLASS.Base;
  const colorClass = COLOR_CLASS[color] || COLOR_CLASS.MedBlue;
  const paddingClass = PADDING_CLASS[hPadding] || PADDING_CLASS.Base;
  const stateKey = state?.toLowerCase?.() || 'base';
  const stateClass = STATE_CLASS[stateKey] || STATE_CLASS.base;
  const isDisabled = stateKey === 'disabled';
  const hasIcon = iconBool !== 'Null';
  const buttonClasses = [
    styles.button,
    sizeClass,
    paddingClass,
    colorClass,
    stateClass,
    hasIcon && styles.hasIcon,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const resolvedIcon =
    iconBool === 'Null'
      ? null
      : isDisabled
      ? iconDisabled
      : color === 'AccentBlue'
      ? iconAccentBlue
      : iconMedBlue;

  const fallbackIconSrc = isDisabled ? ICONS.MedGray : color === 'AccentBlue' ? ICONS.AccentBlue : ICONS.MedBlue;
  const iconContent = resolvedIcon || <img alt='' className={styles.iconImage} src={fallbackIconSrc} />;

  return (
    <button type='button' className={buttonClasses} disabled={isDisabled} aria-disabled={isDisabled} {...rest}>
      {hasIcon && iconBool === 'Left' && <span className={styles.icon}>{iconContent}</span>}
      <span className={styles.label}>{label}</span>
      {hasIcon && iconBool === 'Right' && <span className={styles.icon}>{iconContent}</span>}
    </button>
  );
};

export default PillFillStrokeButton;
