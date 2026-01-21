import { useMemo } from 'react';
import styles from './PillFillStrokeButton.module.scss';
import { icons } from '../../icons';

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

const CONTENT_COLOR_CLASS = {
  MedBlue: styles.colorMedBlue,
  AccentBlue: styles.colorAccentBlue,
};

const PADDING_CLASS = {
  Small: styles.paddingSmall,
  Base: styles.paddingBase,
};

const resolveIconSrc = (src) => (typeof src === 'string' ? src : src?.src || src?.default || '');


/**
 * PillFillStrokeButton aligned to Figma spec:
 * - size: Small | Base | Large
 * - contentColor: MedBlue | AccentBlue
 * - state: Base | Hover | Pressed | Disabled
 * - iconBool: Null | Left | Right
 * - hPadding: Small | Base
 */
const PillFillStrokeButton = ({
  label = 'Pill Button',
  iconSelect = null,
  iconMedBlue = null,
  iconDisabled = null,
  iconAccentBlue = null,
  size = 'Base',
  iconBool = 'Null',
  contentColor = 'MedBlue',
  hPadding = 'Base',
  state = 'Base',
  className = '',
  ...rest
}) => {
  const sizeClass = SIZE_CLASS[size] || SIZE_CLASS.Base;
  const colorClass = CONTENT_COLOR_CLASS[contentColor] || CONTENT_COLOR_CLASS.MedBlue;
  const paddingClass = PADDING_CLASS[hPadding] || PADDING_CLASS.Base;
  const stateKey = state?.toLowerCase?.() || 'base';
  const stateClass = STATE_CLASS[stateKey] || STATE_CLASS.base;
  const isDisabled = stateKey === 'disabled';
  const hasIcon = iconBool !== 'Null';
  const placeholderIcon = useMemo(
    () => icons.find((iconItem) => iconItem.name === 'PlaceholderCircle'),
    [],
  );
  const placeholderSrc = placeholderIcon ? resolveIconSrc(placeholderIcon.src) : '';
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
      : iconSelect ||
        (isDisabled
          ? iconDisabled
          : contentColor === 'AccentBlue'
          ? iconAccentBlue
          : iconMedBlue) ||
        placeholderSrc;
  const resolvedIconSrc = resolveIconSrc(resolvedIcon);
  const iconContent = !resolvedIcon
    ? null
    : resolvedIconSrc
    ? (
        <span className={[styles.icon, styles.iconMask].join(' ')} style={{ '--icon-url': `url(${resolvedIconSrc})` }} />
      )
    : (
        <span className={styles.icon}>{resolvedIcon}</span>
      );

  return (
    <button type='button' className={buttonClasses} disabled={isDisabled} aria-disabled={isDisabled} {...rest}>
      {hasIcon && iconBool === 'Left' ? iconContent : null}
      <span className={styles.label}>{label}</span>
      {hasIcon && iconBool === 'Right' ? iconContent : null}
    </button>
  );
};

export default PillFillStrokeButton;
