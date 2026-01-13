import styles from './PillFillButton.module.scss';

const SIZE_CLASS = {
  Base: styles.sizeBase,
  Small: styles.sizeSmall,
  Large: styles.sizeLarge,
};

const PADDING_CLASS = {
  Small: styles.paddingSmall,
  Large: styles.paddingLarge,
};

const TEXT_CLASS = {
  MedBlue: styles.textMedBlue,
  AccentBlue: styles.textAccentBlue,
  Black: styles.textBlack,
};

const PRIORITY_TEXT_COLORS = {
  A: ['MedBlue', 'AccentBlue', 'Black'],
  B: ['Black'],
};

const normalizeProps = ({ size, padding, priority, contentColor }) => {
  let nextSize = size;
  let nextPadding = padding;
  let nextPriority = priority;
  let nextContentColor = contentColor;

  // Padding Large is only defined as: Size=Large, Priority=A, TextColor=AccentBlue
  if (nextPadding === 'Large') {
    nextSize = 'Large';
    nextPriority = 'A';
    nextContentColor = 'AccentBlue';
  }

  // Priority B only supports Black text (no AccentBlue/MedBlue variants)
  if (nextPriority === 'B') {
    nextContentColor = 'Black';
  }

  return {
    size: nextSize,
    padding: nextPadding,
    priority: nextPriority,
    contentColor: nextContentColor,
  };
};

const STATE_CLASS = {
  base: styles.stateBase,
  hover: styles.stateHover,
  pressed: styles.statePressed,
  disabled: styles.stateDisabled,
};

const VARIANT_PRESETS = {
  MedBlue: { priority: 'A', contentColor: 'MedBlue', padding: 'Small' },
  AccentBlue: { priority: 'A', contentColor: 'AccentBlue', padding: 'Small' },
  BlackBook: { priority: 'B', contentColor: 'Black', padding: 'Small' },
  AccentBlueXLarge: { priority: 'A', contentColor: 'AccentBlue', padding: 'Large' },
};

const resolveVariant = (variant) => VARIANT_PRESETS[variant] || VARIANT_PRESETS.MedBlue;

/**
 * PillFillButton aligned to Figma spec:
 * - size: Base | Small | Large
 * - iconBool: Left | Right | Null
 * - variant: MedBlue | AccentBlue | BlackBook | AccentBlueXLarge
 * - state: Base | Hover | Pressed | Disabled
 */
const PillFillButton = ({
  label = 'Pill Button',
  size = 'Base',
  iconBool = 'Null',
  variant = 'MedBlue',
  state = 'Base',
  icon = null,
  className = '',
  ...rest
}) => {
  const preset = resolveVariant(variant);
  const normalized = normalizeProps({
    size,
    padding: preset.padding,
    priority: preset.priority,
    contentColor: preset.contentColor,
  });

  const sizeClass = SIZE_CLASS[normalized.size] || SIZE_CLASS.Base;
  const paddingClass = PADDING_CLASS[normalized.padding] || PADDING_CLASS.Small;
  const priorityClass = normalized.priority === 'B' ? styles.priorityB : styles.priorityA;

  const stateKey = state?.toLowerCase?.() || 'base';
  const stateClass = STATE_CLASS[stateKey] || STATE_CLASS.base;
  const isDisabled = stateKey === 'disabled';

  const allowedTextColors = PRIORITY_TEXT_COLORS[normalized.priority] || PRIORITY_TEXT_COLORS.A;
  const resolvedContentColor = allowedTextColors.includes(normalized.contentColor)
    ? normalized.contentColor
    : allowedTextColors[0];
  const textClass = isDisabled ? styles.textDisabled : TEXT_CLASS[resolvedContentColor] || styles.textMedBlue;

  const iconPosition = iconBool?.toLowerCase?.() || 'null';
  const hasIcon = iconPosition !== 'null' && !!icon;

  const buttonClasses = [
    styles.button,
    sizeClass,
    paddingClass,
    priorityClass,
    stateClass,
    textClass,
    hasIcon && styles.withIcon,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type='button'
      className={buttonClasses}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...rest}
    >
      {iconPosition === 'left' && hasIcon ? <span className={styles.icon}>{icon}</span> : null}
      <span className={styles.label}>{label}</span>
      {iconPosition === 'right' && hasIcon ? <span className={styles.icon}>{icon}</span> : null}
    </button>
  );
};

export default PillFillButton;
