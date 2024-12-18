import styles from './Button.module.scss';

const Button = ({ children, variant = 'contained', size = 'base', color = 'accent', className = '', ...rest }) => {
  const classes = [styles.button];

  if (variant === 'contained') {
    classes.push(styles.contained);
  } else if (variant === 'outlined') {
    classes.push(styles.outlined);
  } else if (variant === 'text') {
    classes.push(styles.text);
  }

  if (size === 'small') {
    classes.push(styles.small);
  }

  if (color === 'accent') {
    classes.push(styles.accent);
  } else if (color === 'primary') {
    classes.push(styles.primary);
  } else if (color === 'medium') {
    classes.push(styles.mediumColor);
  } else if (color === 'success') {
    classes.push(styles.success);
  } else if (color === 'error') {
    classes.push(styles.error);
  }

  return (
    <button className={`${classes.join(' ')} ${className}`} type={'button'} {...rest}>
      {children}
    </button>
  );
};

export default Button;
