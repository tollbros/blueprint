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

const normalizeProps = ({ size, padding, priority, textColor }) => {
  let nextSize = size;
  let nextPadding = padding;
  let nextPriority = priority;
  let nextTextColor = textColor;

  // Padding Large is only defined as: Size=Large, Priority=A, TextColor=AccentBlue
  if (nextPadding === 'Large') {
    nextSize = 'Large';
    nextPriority = 'A';
    nextTextColor = 'AccentBlue';
  }

  // Priority B only supports Black text (no AccentBlue/MedBlue variants)
  if (nextPriority === 'B') {
    nextTextColor = 'Black';
  }

  return {
    size: nextSize,
    padding: nextPadding,
    priority: nextPriority,
    textColor: nextTextColor,
  };
};

const STATE_CLASS = {
  base: styles.stateBase,
  hover: styles.stateHover,
  pressed: styles.statePressed,
  disabled: styles.stateDisabled,
};

/**
 * PillFillButton aligned to Figma spec:
 * - size: Base | Small | Large
 * - iconBool: Left | Right | Null
 * - textColor: MedBlue | AccentBlue | Black
 * - priority: A | B (A = Bold, B = Book)
 * - padding: Small | Large (horizontal)
 * - state: Base | Hover | Pressed | Disabled
 */
const PillFillButton = ({
  label = 'Pill Button',
  size = 'Base',
  iconBool = 'Null',
  textColor = 'MedBlue',
  priority = 'A',
  padding = 'Small',
  state = 'Base',
  icon = null,
  className = '',
  ...rest
}) => {
  const normalized = normalizeProps({ size, padding, priority, textColor });

  const sizeClass = SIZE_CLASS[normalized.size] || SIZE_CLASS.Base;
  const paddingClass = PADDING_CLASS[normalized.padding] || PADDING_CLASS.Small;
  const priorityClass = normalized.priority === 'B' ? styles.priorityB : styles.priorityA;

  const stateKey = state?.toLowerCase?.() || 'base';
  const stateClass = STATE_CLASS[stateKey] || STATE_CLASS.base;
  const isDisabled = stateKey === 'disabled';

  const allowedTextColors = PRIORITY_TEXT_COLORS[normalized.priority] || PRIORITY_TEXT_COLORS.A;
  const resolvedTextColor = allowedTextColors.includes(normalized.textColor)
    ? normalized.textColor
    : allowedTextColors[0];
  const textClass = isDisabled ? styles.textDisabled : TEXT_CLASS[resolvedTextColor] || styles.textMedBlue;

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
