import { useEffect, useMemo, useState } from 'react';
import TabUnit from '../TabUnit/TabUnit';
import styles from './TabBar.module.scss';

const DEFAULT_ICON_TABS = [
  { label: 'Communities' },
  { label: 'Quick Move-In' },
  { label: 'Home Design' },
];

const TabBar = ({
  iconBool = false,
  bg = 'Light',
  layout = 'fit',
  width,
  tabs,
  activeIndex,
  onChange,
  className = '',
}) => {
  const defaultTabs = useMemo(() => DEFAULT_ICON_TABS, []);
  const resolvedTabs = tabs?.length ? tabs : defaultTabs;

  const isControlled = Number.isInteger(activeIndex);
  const [internalIndex, setInternalIndex] = useState(activeIndex ?? 0);

  useEffect(() => {
    if (isControlled) {
      setInternalIndex(activeIndex);
    }
  }, [activeIndex, isControlled]);

  const selectedIndex = isControlled ? activeIndex : internalIndex;

  const handleSelect = (index) => {
    if (!isControlled) {
      setInternalIndex(index);
    }
    onChange?.(index, resolvedTabs[index]);
  };

  const isDark = bg === 'Dark';
  const containerClassName = [
    styles.tabBar,
    isDark && styles.tabBarDark,
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const tabsClassName = layout === 'equal' ? styles.tabsEqual : styles.tabsSpaced;
  const tabsStyle = layout === 'equal' ? { '--tab-count': resolvedTabs.length } : undefined;
  const containerStyle = width ? { width } : undefined;

  return (
    <div className={containerClassName} style={containerStyle}>
      <div className={tabsClassName} style={tabsStyle}>
        {resolvedTabs.map((tab, index) => (
          <div key={`${tab.label}-${index}`} className={styles.tabButton}>
            <TabUnit
              label={tab.label}
              symbol={tab.symbol}
              state={index === selectedIndex}
              icon={iconBool}
              bg={bg}
              onClick={() => handleSelect(index)}
            />
          </div>
        ))}
      </div>
      <div className={[styles.divider, isDark && styles.dividerDark].filter(Boolean).join(' ')} />
    </div>
  );
};

export default TabBar;
