import styles from './ToggleUnit.module.scss';

const ToggleUnit = ({
  toggleOn = 'Toggle Label',
  toggleOff = 'Toggle Label',
  state = true,
  bg = 'Light',
  className = '',
  ...rest
}) => {
  const isLight = bg === 'Light';
  const variantClass = isLight
    ? state
      ? styles.stateOnLight
      : styles.stateOffLight
    : state
      ? styles.stateOnDark
      : styles.stateOffDark;

  return (
    <button
      type='button'
      className={[styles.toggleUnit, variantClass, className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span className={styles.label}>{state ? toggleOn : toggleOff}</span>
    </button>
  );
};

export default ToggleUnit;
