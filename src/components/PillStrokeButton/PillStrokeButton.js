import { useMemo } from 'react';
import styles from './PillStrokeButton.module.scss';
import { icons } from '../../icons';

const STYLE_MAP = {
  Light: {
    A: {
      base: styles.lightABase,
      hover: styles.lightAHover,
      pressed: styles.lightAPressed,
      disabled: styles.lightADisabled,
    },
    B: {
      base: styles.lightBBase,
      hover: styles.lightBHover,
      pressed: styles.lightBPressed,
      disabled: styles.lightBDisabled,
    },
  },
  Dark: {
    A: {
      base: styles.darkABase,
      hover: styles.darkAHover,
      pressed: styles.darkAPressed,
      disabled: styles.darkADisabled,
    },
    B: {
      base: styles.darkBBase,
      hover: styles.darkBHover,
      pressed: styles.darkBPressed,
      disabled: styles.darkBDisabled,
    },
  },
};

const resolveIconSrc = (src) => (typeof src === 'string' ? src : src?.src || src?.default || '');

/**
 * PillStrokeButton aligned to Figma spec:
 * - bg: Light | Dark
 * - priority: A | B
 * - state: base | hover | pressed | disabled
 * - iconPosition: left | right | none (icon inherits label color)
 */
const PillStrokeButton = ({
  label = 'Pill Button',
  bg = 'Light',
  priority = 'A',
  state = 'base',
  iconPosition = 'none',
  iconSelect = null,
  className = '',
  ...rest
}) => {
  const sizeClass = styles.sizeBase;
  const bgKey = bg === 'Dark' ? 'Dark' : 'Light';
  const priorityKey = priority === 'B' ? 'B' : 'A';
  const stateKey = state?.toLowerCase?.() || 'base';
  const visualClass = STYLE_MAP[bgKey]?.[priorityKey]?.[stateKey] || STYLE_MAP.Light.A.base;

  const isDisabled = stateKey === 'disabled';
  const placeholderIcon = useMemo(
    () => icons.find((iconItem) => iconItem.name === 'PlaceholderCircle'),
    [],
  );
  const placeholderSrc = placeholderIcon ? resolveIconSrc(placeholderIcon.src) : '';
  const resolvedIcon = iconSelect || placeholderSrc;
  const resolvedIconSrc = resolveIconSrc(resolvedIcon);
  const hasIcon = iconPosition !== 'none' && !!resolvedIconSrc;

  const buttonClasses = [styles.button, sizeClass, visualClass, hasIcon && styles.withIcon, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClasses} type='button' disabled={isDisabled} aria-disabled={isDisabled} {...rest}>
      {iconPosition === 'left' && hasIcon ? (
        <span className={[styles.icon, styles.iconMask].join(' ')} style={{ '--icon-url': `url(${resolvedIconSrc})` }} />
      ) : null}
      <span className={styles.label}>{label}</span>
      {iconPosition === 'right' && hasIcon ? (
        <span className={[styles.icon, styles.iconMask].join(' ')} style={{ '--icon-url': `url(${resolvedIconSrc})` }} />
      ) : null}
    </button>
  );
};

export default PillStrokeButton;
