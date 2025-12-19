import styles from './TextLink.module.scss';

const SIZE_CLASS = {
  base: styles.sizeBase,
  small: styles.sizeSmall,
  large: styles.sizeLarge,
};

const BG_STATE_CLASS = {
  light: {
    base: styles.lightBase,
    hover: styles.lightHover,
    pressed: styles.lightPressed,
    disabled: styles.lightDisabled,
  },
  dark: {
    base: styles.darkBase,
    hover: styles.darkHover,
    pressed: styles.darkPressed,
    disabled: styles.darkDisabled,
  },
};

const normalize = (value, fallback) => (value ? String(value).toLowerCase() : fallback);

/**
 * Text Link aligned to the Figma spec:
 * - size: base (12/18) | small (11/17) | large (14/21)
 * - bg: light | dark
 * - state: base | hover | pressed | disabled
 */
const TextLink = ({
  label = 'Text Link',
  children,
  size = 'base',
  bg = 'light',
  state = 'base',
  href = '#',
  className = '',
  onClick,
  ...rest
}) => {
  const sizeKey = normalize(size, 'base');
  const bgKey = normalize(bg, 'light');
  const stateKey = normalize(state, 'base');

  const sizeClass = SIZE_CLASS[sizeKey] || SIZE_CLASS.base;
  const visualClass = BG_STATE_CLASS[bgKey]?.[stateKey] || BG_STATE_CLASS.light.base;

  const linkClasses = [styles.textLink, sizeClass, visualClass, className].filter(Boolean).join(' ');
  const isDisabled = stateKey === 'disabled';

  const handleClick = (event) => {
    if (isDisabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (onClick) onClick(event);
  };

  const content = children ?? label;

  return (
    <a className={linkClasses} href={isDisabled ? undefined : href} aria-disabled={isDisabled} onClick={handleClick} {...rest}>
      {content}
    </a>
  );
};

export default TextLink;
