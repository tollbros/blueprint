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
  sqFtRange,
  stepSqFt = 250,
  priceRange,
  stepPrice = 100000,
}) => {
  const trackRef = useRef(null);
  const [interactiveSqFtMin, setInteractiveSqFtMin] = useState(sqFtRange?.min ?? DEFAULT_MIN_SQFT);
  const [interactiveSqFtMax, setInteractiveSqFtMax] = useState(sqFtRange?.max ?? DEFAULT_MAX_SQFT);
  const [interactivePriceMin, setInteractivePriceMin] = useState(priceRange?.min ?? DEFAULT_MIN_PRICE);
  const [interactivePriceMax, setInteractivePriceMax] = useState(priceRange?.max ?? DEFAULT_MAX_PRICE);
  const [activeHandle, setActiveHandle] = useState(null);
  const isPrice = property1 === 'price';
  const rawMinLimit = isPrice
    ? priceRange?.min ?? DEFAULT_MIN_PRICE
    : sqFtRange?.min ?? DEFAULT_MIN_SQFT;
  const rawMaxLimit = isPrice
    ? priceRange?.max ?? DEFAULT_MAX_PRICE
    : sqFtRange?.max ?? DEFAULT_MAX_SQFT;
  const hasValidLimitRange = rawMinLimit < rawMaxLimit;
  const minLimit = hasValidLimitRange
    ? rawMinLimit
    : isPrice
      ? DEFAULT_MIN_PRICE
      : DEFAULT_MIN_SQFT;
  const maxLimit = hasValidLimitRange
    ? rawMaxLimit
    : isPrice
      ? DEFAULT_MAX_PRICE
      : DEFAULT_MAX_SQFT;
  const stepValue = isPrice ? stepPrice : stepSqFt;
  const clampMinValue = clamp(isPrice ? interactivePriceMin : interactiveSqFtMin, minLimit, maxLimit - stepValue);
  const clampMaxValue = clamp(isPrice ? interactivePriceMax : interactiveSqFtMax, minLimit + stepValue, maxLimit);

  const range = maxLimit - minLimit || 1;
  const minPercent = clamp(((clampMinValue - minLimit) / range) * 100, 0, 100);
  const maxPercent = clamp(((clampMaxValue - minLimit) / range) * 100, 0, 100);

  const formattedSqFt = `${clampMinValue}-${clampMaxValue}`;
  const formattedPrice = `${formatPrice(clampMinValue)} - ${formatPrice(clampMaxValue)}`;

  useEffect(() => {
    if (activeHandle || isPrice) return;
    const safeMin = sqFtRange?.min ?? DEFAULT_MIN_SQFT;
    const safeMax = sqFtRange?.max ?? DEFAULT_MAX_SQFT;
    const hasValidRange = safeMin < safeMax;
    const nextMin = hasValidRange ? safeMin : DEFAULT_MIN_SQFT;
    const nextMax = Math.max(hasValidRange ? safeMax : DEFAULT_MAX_SQFT, nextMin + stepSqFt);
    setInteractiveSqFtMin(nextMin);
    setInteractiveSqFtMax(nextMax);
  }, [activeHandle, isPrice, sqFtRange, stepSqFt]);

  useEffect(() => {
    if (activeHandle || !isPrice) return;
    const safeMin = priceRange?.min ?? DEFAULT_MIN_PRICE;
    const safeMax = priceRange?.max ?? DEFAULT_MAX_PRICE;
    const hasValidRange = safeMin < safeMax;
    const nextMin = hasValidRange ? safeMin : DEFAULT_MIN_PRICE;
    const nextMax = Math.max(hasValidRange ? safeMax : DEFAULT_MAX_PRICE, nextMin + stepPrice);
    setInteractivePriceMin(nextMin);
    setInteractivePriceMax(nextMax);
  }, [activeHandle, isPrice, priceRange, stepPrice]);

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
        <div className={isPrice ? styles.priceRow : styles.labelRow}>
          {isPrice ? (
            <span className={styles.priceText}>{formattedPrice}</span>
          ) : (
            <>
              <span className={styles.valueText}>{formattedSqFt}</span>
              <span className={styles.unitText}>sq ft</span>
            </>
          )}
        </div>
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
