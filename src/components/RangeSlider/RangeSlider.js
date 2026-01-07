import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './RangeSlider.module.scss';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const snapToStep = (value, min, step) => {
  const snapped = Math.round((value - min) / step) * step + min;
  return Math.max(min, snapped);
};

const formatPrice = (value) => {
  if (value >= 1000000) {
    const millions = value / 1000000;
    return `$${millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1)}m`;
  }
  const thousands = value / 1000;
  return `$${thousands % 1 === 0 ? thousands.toFixed(0) : thousands.toFixed(1)}k`;
};

const DEFAULT_MIN_SQFT = 500;
const DEFAULT_MAX_SQFT = 3000;
const DEFAULT_MIN_PRICE = 300000;
const DEFAULT_MAX_PRICE = 2000000;

const RangeSlider = ({
  property1 = 'sq. ft.',
  minSqFt = DEFAULT_MIN_SQFT,
  maxSqFt = DEFAULT_MAX_SQFT,
  stepSqFt = 250,
  minPrice = DEFAULT_MIN_PRICE,
  maxPrice = DEFAULT_MAX_PRICE,
  stepPrice = 100000,
}) => {
  const trackRef = useRef(null);
  const [interactiveSqFtMin, setInteractiveSqFtMin] = useState(minSqFt);
  const [interactiveSqFtMax, setInteractiveSqFtMax] = useState(maxSqFt);
  const [interactivePriceMin, setInteractivePriceMin] = useState(minPrice);
  const [interactivePriceMax, setInteractivePriceMax] = useState(maxPrice);
  const [activeHandle, setActiveHandle] = useState(null);
  const [hasSqFtUserInput, setHasSqFtUserInput] = useState(false);
  const [hasPriceUserInput, setHasPriceUserInput] = useState(false);

  const isPrice = property1 === 'price';
  const hasValidSqFtRange = minSqFt < maxSqFt;
  const hasValidPriceRange = minPrice < maxPrice;
  const minLimit = isPrice
    ? hasValidPriceRange
      ? minPrice
      : DEFAULT_MIN_PRICE
    : hasValidSqFtRange
      ? minSqFt
      : DEFAULT_MIN_SQFT;
  const maxLimit = isPrice
    ? hasValidPriceRange
      ? maxPrice
      : Math.max(maxPrice, minLimit + stepPrice)
    : hasValidSqFtRange
      ? maxSqFt
      : Math.max(maxSqFt, minLimit + stepSqFt);
  const stepValue = isPrice ? stepPrice : stepSqFt;
  const clampMinValue = clamp(isPrice ? interactivePriceMin : interactiveSqFtMin, minLimit, maxLimit - stepValue);
  const clampMaxValue = clamp(isPrice ? interactivePriceMax : interactiveSqFtMax, minLimit + stepValue, maxLimit);

  const range = maxLimit - minLimit || 1;
  const minPercent = clamp(((clampMinValue - minLimit) / range) * 100, 0, 100);
  const maxPercent = clamp(((clampMaxValue - minLimit) / range) * 100, 0, 100);

  const formattedSqFt = useMemo(() => `${clampMinValue}-${clampMaxValue}`, [clampMinValue, clampMaxValue]);
  const formattedPrice = useMemo(
    () => `${formatPrice(clampMinValue)} - ${formatPrice(clampMaxValue)}`,
    [clampMinValue, clampMaxValue],
  );

  useEffect(() => {
    if (activeHandle) return;
    if (hasSqFtUserInput) return;
    const safeMin = minSqFt ? minSqFt : DEFAULT_MIN_SQFT;
    const safeMax = maxSqFt ? maxSqFt : DEFAULT_MAX_SQFT;
    const hasValidRange = safeMin < safeMax;

    const nextMin = hasValidRange ? safeMin : DEFAULT_MIN_SQFT;
    const nextMax = Math.max(hasValidRange ? safeMax : DEFAULT_MAX_SQFT, nextMin + stepSqFt);
    setInteractiveSqFtMin(nextMin);
    setInteractiveSqFtMax(nextMax);
  }, [activeHandle, minSqFt, maxSqFt, hasSqFtUserInput, stepSqFt]);

  useEffect(() => {
    if (activeHandle) return;
    if (hasPriceUserInput) return;
    const safeMin = minPrice ? minPrice : DEFAULT_MIN_PRICE;
    const safeMax = maxPrice ? maxPrice : DEFAULT_MAX_PRICE;
    const hasValidRange = safeMin < safeMax;

    const nextMin = hasValidRange ? safeMin : DEFAULT_MIN_PRICE;
    const nextMax = Math.max(hasValidRange ? safeMax : DEFAULT_MAX_PRICE, nextMin + stepPrice);
    setInteractivePriceMin(nextMin);
    setInteractivePriceMax(nextMax);
  }, [activeHandle, minPrice, maxPrice, hasPriceUserInput, stepPrice]);

  const updateValueFromPointer = (clientX) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const relative = clamp(clientX - rect.left, 0, rect.width);
    const rawValue = minLimit + (relative / rect.width) * range;
    const snapped = snapToStep(rawValue, minLimit, stepValue);

    if (activeHandle === 'min') {
      const nextMin = clamp(snapped, minLimit, clampMaxValue - stepValue);
      if (isPrice) {
        setInteractivePriceMin(nextMin);
      } else {
        setInteractiveSqFtMin(nextMin);
      }
    } else if (activeHandle === 'max') {
      const nextMax = clamp(snapped, clampMinValue + stepValue, maxLimit);
      if (isPrice) {
        setInteractivePriceMax(nextMax);
      } else {
        setInteractiveSqFtMax(nextMax);
      }
    }
  };

  const handlePointerDown = (handle) => (event) => {
    setActiveHandle(handle);
    if (isPrice) {
      setHasPriceUserInput(true);
    } else {
      setHasSqFtUserInput(true);
    }
    updateValueFromPointer(event.clientX);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!activeHandle) return;
    updateValueFromPointer(event.clientX);
  };

  const handlePointerUp = (event) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setActiveHandle(null);
  };

  return (
    <div className={styles.rangeSlider}>
      <div className={styles.sliderWrapper}>
        {isPrice ? (
          <div className={styles.priceRow}>
            <span className={styles.priceText}>{formattedPrice}</span>
          </div>
        ) : (
          <div className={styles.labelRow}>
            <span className={styles.valueText}>{formattedSqFt}</span>
            <span className={styles.unitText}>sq ft</span>
          </div>
        )}
        <div
          className={styles.trackRow}
          ref={trackRef}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <div className={styles.track} />
          <div
            className={styles.rangeTrack}
            style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
          />
          <div className={styles.handle} style={{ left: `${minPercent}%` }} onPointerDown={handlePointerDown('min')}>
            <div className={styles.grip}>
              <span className={styles.gripBar} />
              <span className={styles.gripBar} />
              <span className={styles.gripBar} />
            </div>
          </div>
          <div className={styles.handle} style={{ left: `${maxPercent}%` }} onPointerDown={handlePointerDown('max')}>
            <div className={styles.grip}>
              <span className={styles.gripBar} />
              <span className={styles.gripBar} />
              <span className={styles.gripBar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
