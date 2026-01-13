import { useEffect, useMemo, useState } from 'react';
import styles from './SpecsSelector.module.scss';

const STATE_CLASS = {
  selected: styles.unitSelected,
  unselected: styles.unitUnselected,
  null: styles.unitNull,
};

const LABEL_CLASS = {
  selected: styles.labelSelected,
  unselected: styles.labelUnselected,
  null: styles.labelNull,
};

const normalizeState = (state) => {
  const normalized = typeof state === 'string' ? state.toLowerCase() : 'selected';
  return STATE_CLASS[normalized] ? normalized : 'selected';
};

const SpecsSelectorUnit = ({
  label = 'Any',
  state = 'selected',
  className = '',
  onSelect,
  isInteractive = true,
}) => {
  const resolvedState = normalizeState(state);
  const unitClassName = [styles.unit, STATE_CLASS[resolvedState], className].filter(Boolean).join(' ');
  const labelClassName = [styles.label, LABEL_CLASS[resolvedState]].filter(Boolean).join(' ');
  const isDisabled = !isInteractive || resolvedState === 'null';

  const handleKeyDown = (event) => {
    if (isDisabled) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect?.();
    }
  };

  return (
    <div
      className={unitClassName}
      role={isDisabled ? undefined : 'button'}
      tabIndex={isDisabled ? undefined : 0}
      aria-pressed={resolvedState === 'selected' ? true : undefined}
      aria-disabled={isDisabled || undefined}
      onClick={isDisabled ? undefined : onSelect}
      onKeyDown={handleKeyDown}
    >
      <span className={labelClassName}>{label}</span>
    </div>
  );
};

const MAX_UNITS = 6;
const BASE_LABELS = ['Any', '2+', '3+', '4+', '5+', '6+'];

const getResolvedMaxSpecs = (maxSpecs) => {
  if (!Number.isFinite(maxSpecs)) {
    return MAX_UNITS;
  }
  const rounded = Math.round(maxSpecs);
  return Math.min(Math.max(rounded, 1), MAX_UNITS);
};

const SpecsSelector = ({ maxSpecs = MAX_UNITS, className = '', onSelect, ...rest }) => {
  const resolvedMaxSpecs = useMemo(() => getResolvedMaxSpecs(maxSpecs), [maxSpecs]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const containerClassName = [styles.specsSelector, className].filter(Boolean).join(' ');
  const items = useMemo(() => {
    return BASE_LABELS.map((label, index) => {
      const specValue = index + 1;
      const normalizedLabel = index === 0 && resolvedMaxSpecs === 1 ? '1' : label;
      const state = specValue > resolvedMaxSpecs ? 'null' : 'unselected';

      return {
        label: normalizedLabel,
        state,
        specValue,
      };
    });
  }, [resolvedMaxSpecs]);

  useEffect(() => {
    if (selectedIndex >= resolvedMaxSpecs) {
      setSelectedIndex(Math.max(resolvedMaxSpecs - 1, 0));
    }
  }, [resolvedMaxSpecs, selectedIndex]);

  return (
    <div className={containerClassName} {...rest}>
      {items.map((item, index) => {
        const isNull = item.state === 'null';
        const isSelected = index === selectedIndex;
        const state = isNull ? 'null' : isSelected ? 'selected' : 'unselected';

        return (
          <SpecsSelectorUnit
            key={`${item.specValue}-${index}`}
            label={item.label}
            state={state}
            isInteractive={!isNull}
            onSelect={() => {
              setSelectedIndex(index);
              onSelect?.(item, index);
            }}
          />
        );
      })}
    </div>
  );
};

export default SpecsSelector;
