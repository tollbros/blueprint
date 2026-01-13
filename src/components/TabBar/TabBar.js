import { useMemo, useState } from 'react';
import TabUnit from '../TabUnit/TabUnit';
import styles from './TabBar.module.scss';

const DEFAULT_TAB_COUNT = 3;
const MIN_TAB_COUNT = 2;
const MAX_TAB_COUNT = 10;
const buildDefaultTabs = (count, startIndex = 0) => {
  return Array.from({ length: count }, (_, index) => {
    const letter = String.fromCharCode(65 + index + startIndex);
    return { label: `Tab ${letter}` };
  });
};

const clampTabCount = (count) => {
  if (!Number.isFinite(count)) return DEFAULT_TAB_COUNT;
  const rounded = Math.round(count);
  if (rounded < MIN_TAB_COUNT) return MIN_TAB_COUNT;
  if (rounded > MAX_TAB_COUNT) return MAX_TAB_COUNT;
  return rounded;
};

const TabBar = ({
  iconBool = false,
  bg = 'Light',
  alignment = 'fitLeft',
  tabCount = DEFAULT_TAB_COUNT,
  tabLabels,
  tabs,
  className = '',
}) => {
  const resolvedTabCount = useMemo(() => clampTabCount(tabCount), [tabCount]);
  const defaultTabs = useMemo(() => buildDefaultTabs(resolvedTabCount), [resolvedTabCount]);
  const resolvedTabs = useMemo(() => {
    if (tabs?.length) {
      return tabs.slice(0, resolvedTabCount);
    }
    if (tabLabels?.length) {
      const labels = tabLabels.slice(0, resolvedTabCount);
      const padded = labels.concat(
        buildDefaultTabs(resolvedTabCount - labels.length, labels.length).map((tab) => tab.label),
      );
      return padded.map((label) => ({ label }));
    }
    return defaultTabs;
  }, [defaultTabs, resolvedTabCount, tabLabels, tabs]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const isDark = bg === 'Dark';
  const containerClassName = [
    styles.tabBar,
    isDark && styles.tabBarDark,
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const isFullCenter = alignment === 'fullCenter';
  const tabsClassName = isFullCenter
    ? styles.tabsFull
    : [styles.tabsSpaced, styles.alignLeft].filter(Boolean).join(' ');
  const tabsStyle = isFullCenter ? { '--tab-count': resolvedTabs.length } : undefined;
  return (
    <div className={containerClassName}>
      <div className={tabsClassName} style={tabsStyle}>
        {resolvedTabs.map((tab, index) => (
          <div
            key={`${tab.label}-${index}`}
            className={[styles.tabButton, isFullCenter && styles.tabButtonFull].filter(Boolean).join(' ')}
          >
            <TabUnit
              label={tab.label}
              symbol={tab.symbol}
              state={index === selectedIndex}
              icon={iconBool}
              bg={bg}
              width={isFullCenter ? 'full' : 'fit'}
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
