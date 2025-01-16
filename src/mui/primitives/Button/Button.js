import styles from './Button.module.scss';

const Button = ({
                  children,
                  size = 'base',
                  color = 'accent',  // Default color is 'accent'
                  className = '',
                  fullWidth = false,
                  ...rest
                }) => {

  //immediately checks if a matching style of the name exists so does not need to be explicitly spelled out.
  const colorClass = styles[color] || styles.accent;

  const classMap = {
    size: {
      small: styles.small,
      base: styles.base, // Default size class
    },
    fullWidth: fullWidth ? styles.fullWidth : '',
  };

  const classes = [
    styles.button, // Base style
    classMap.size[size],
    classMap.fullWidth,
    colorClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
