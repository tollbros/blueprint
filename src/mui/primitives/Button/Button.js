import styles from './Button.module.scss';

const Button = ({
                  children,
                  size = 'base',
                  color = 'accent',
                  className = '',
                  fullWidth = false,
                  ...rest
                }) => {
  const classMap = {
    size: {
      small: styles.small,
    },
    color: {
      accent: styles.accent,
      primary: styles.primary,
      medium: styles.mediumColor,
      success: styles.success,
      error: styles.error,
    },
    fullWidth: fullWidth ? styles.fullWidth : '',
  };

  const classes = [
    styles.button, // Base style
    classMap.size[size],
    classMap.color[color],
    classMap.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} type="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
