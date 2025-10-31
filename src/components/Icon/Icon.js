import { useMemo } from 'react';
import iconData from '../../icons/iconData';
import styles from './Icon.module.scss';

const DEFAULT_ICON_KEY = 'icon-placeholder';

const normalizeIconName = (rawName = '') =>
  rawName
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[\s_/]+/g, '-');

const ensureDimension = (value) => (typeof value === 'number' ? `${value}px` : value);

const Icon = ({ name, alt, size = 20, width, height, className = '', ...rest }) => {
  const { asset, resolvedName } = useMemo(() => {
    const normalized = normalizeIconName(name);
    const key = iconData[normalized] ? normalized : DEFAULT_ICON_KEY;

    return {
      asset: iconData[key],
      resolvedName: key,
    };
  }, [name]);

  const resolvedAlt =
    alt !== undefined
      ? alt
      : resolvedName === DEFAULT_ICON_KEY
        ? 'icon placeholder'
        : resolvedName.replace(/-/g, ' ');

  const computedWidth = ensureDimension(width || size);
  const computedHeight = ensureDimension(height || size);

  const wrapperClassName = [styles.iconWrapper, className].filter(Boolean).join(' ');

  const isFunctionalIcon = typeof asset === 'function';
  const svgAccessibility =
    resolvedAlt === ''
      ? { 'aria-hidden': true }
      : { role: 'img', 'aria-label': resolvedAlt };

  let content = null;

  if (isFunctionalIcon) {
    const AssetComponent = asset;
    content = <AssetComponent className={styles.icon} focusable='false' {...svgAccessibility} />;
  } else {
    content = (
      <img
        alt={resolvedAlt}
        aria-hidden={resolvedAlt === '' ? true : undefined}
        className={styles.icon}
        src={asset}
      />
    );
  }

  return (
    <span className={wrapperClassName} style={{ width: computedWidth, height: computedHeight }} {...rest}>
      {content}
    </span>
  );
};

export default Icon;
