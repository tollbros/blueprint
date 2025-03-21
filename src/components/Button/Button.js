import styles from './Button.module.scss';

const SIZE_CLASSES = {
  default: styles.default, // Default button size
  small: styles.small, // Small button size
  xsmall: styles.xsmall, // Extra small button size
};

// Primary CTA property only
const PRIMARY_FILL_VARIANTS = {
  defaultColor: styles.defaultColorFill, // Default fill for Primary CTA
};

// Secondary CTA properties only
const SECONDARY_STROKE_VARIANTS = {
  defaultColor: styles.defaultColorStroke, // Default stroke for Secondary CTA
};

const SECONDARY_TEXT_VARIANTS = {
  defaultColor: styles.defaultColorText, // Default text color for Secondary CTA
};

const Button = ({ children, size = 'default', variant = 'primary', PRIMARY_FILL_VARIANT = 'defaultColor', SECONDARY_STROKE_VARIANT = 'defaultColor', SECONDARY_TEXT_VARIANT = 'defaultColor', className = '', fullWidth = false, ...rest }) => {
  // Build the className string using conditional logic
  const buttonClasses = [
    styles.button,
    SIZE_CLASSES[size],
    styles[variant],
    fullWidth && styles.fullWidth,
    variant === 'primary' && [PRIMARY_FILL_VARIANTS[PRIMARY_FILL_VARIANT] || PRIMARY_FILL_VARIANTS.defaultColor],
    variant === 'secondary' && [SECONDARY_STROKE_VARIANTS[SECONDARY_STROKE_VARIANT] || SECONDARY_STROKE_VARIANTS.defaultColor],
    variant === 'secondary' && [SECONDARY_TEXT_VARIANTS[SECONDARY_TEXT_VARIANT] || SECONDARY_TEXT_VARIANTS.defaultColor],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClasses} type='button' {...rest}>
      {children}
    </button>
  );
};

export default Button;
