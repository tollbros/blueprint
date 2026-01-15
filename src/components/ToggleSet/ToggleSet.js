import React from 'react';
import ToggleUnit from '../ToggleUnit/ToggleUnit';
import styles from './ToggleSet.module.scss';

const clampCount = (count) => {
  const numeric = Number(count);
  if (Number.isNaN(numeric)) return 2;
  return Math.min(3, Math.max(2, numeric));
};

const makeLabels = (count, labels) => {
  const normalized = Array.isArray(labels) ? labels : [];
  return Array.from({ length: count }, (_, index) => normalized[index] || 'Toggle Label');
};

const ToggleSet = ({
  count = 2,
  bg = 'Light',
  labels,
  selectedIndex,
  onChange,
  className = '',
}) => {
  const normalizedCount = clampCount(count);
  const [internalIndex, setInternalIndex] = React.useState(0);
  const controlled = typeof selectedIndex === 'number';
  const activeIndex = controlled ? selectedIndex : internalIndex;

  React.useEffect(() => {
    if (!controlled) return;
    setInternalIndex(selectedIndex);
  }, [controlled, selectedIndex]);

  const handleSelect = (index) => {
    if (!controlled) {
      setInternalIndex(index);
    }
    if (onChange) {
      onChange(index);
    }
  };

  const items = makeLabels(normalizedCount, labels);

  return (
    <div className={[styles.toggleSet, className].filter(Boolean).join(' ')} data-bg={bg}>
      {items.map((label, index) => (
        <ToggleUnit
          key={`${label}-${index}`}
          className={styles.item}
          bg={bg}
          state={index === activeIndex}
          toggleOn={label}
          toggleOff={label}
          onClick={() => handleSelect(index)}
        />
      ))}
    </div>
  );
};

export default ToggleSet;
