import styles from './TabUnit.module.scss';

const COMMUNITY_ICON_ON_PRIMARY = 'http://localhost:3845/assets/678ee945cb9054302f49b1ca0dc78e0b1bd69b56.svg';
const COMMUNITY_ICON_ON_SECONDARY = 'http://localhost:3845/assets/a7008105ddba7aaafeeca0ade6a4ed0986cb44c0.svg';
const COMMUNITY_ICON_OFF_PRIMARY = 'http://localhost:3845/assets/d4d3f3469b338e7ebbbba0500f30a3e849913781.svg';
const COMMUNITY_ICON_OFF_SECONDARY = 'http://localhost:3845/assets/a7008105ddba7aaafeeca0ade6a4ed0986cb44c0.svg';

const IconStack = ({ primarySrc, secondarySrc }) => (
  <span className={`${styles.icon} ${styles.iconStack}`}>
    <img className={styles.iconLayer} alt='' src={primarySrc} />
    <img className={styles.iconLayer} alt='' src={secondarySrc} />
  </span>
);

const TabUnit = ({
  label = 'Communities',
  state = true,
  icon = true,
  bg = 'Light',
  symbol = null,
  width = 'fit',
  className = '',
  onClick,
}) => {
  const isDark = bg === 'Dark';
  const isActive = !!state;
  const showIcon = !!icon;
  const labelText = label;
  const contentClassName = [
    styles.content,
    !showIcon && styles.contentTextOnly,
  ]
    .filter(Boolean)
    .join(' ');

  const defaultIcon = isActive
    ? <IconStack primarySrc={COMMUNITY_ICON_ON_PRIMARY} secondarySrc={COMMUNITY_ICON_ON_SECONDARY} />
    : <IconStack primarySrc={COMMUNITY_ICON_OFF_PRIMARY} secondarySrc={COMMUNITY_ICON_OFF_SECONDARY} />;
  const resolvedIcon = symbol ? (
    <span className={styles.icon}>
      <span className={styles.iconInner}>{symbol}</span>
    </span>
  ) : (
    <span className={styles.icon}>
      <span className={styles.iconPlaceholder} />
    </span>
  );

  return (
    <button
      type='button'
      className={[
        styles.tabUnit,
        isDark ? styles.dark : styles.light,
        isActive ? styles.active : styles.inactive,
        width === 'full' ? styles.widthFull : styles.widthFit,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={onClick}
    >
      <div className={contentClassName}>
        {showIcon ? resolvedIcon : null}
        <span className={styles.label}>{labelText}</span>
      </div>
      <div className={styles.indicator} />
    </button>
  );
};

export default TabUnit;
