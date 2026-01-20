import { useEffect, useRef, useState } from 'react';
import styles from './RangeSlider.module.scss';

// Clamp a value within inclusive bounds.
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

// Snap a raw value to the nearest step aligned to a minimum.
const snapToStep = (value, min, step) => {
  const snapped = Math.round((value - min) / step) * step + min;
  return Math.max(min, snapped);
};

// Round a limit down to the nearest step multiple.
const roundDownToStep = (value, step) => Math.floor(value / step) * step;

// Round a limit up to the nearest step multiple.
const roundUpToStep = (value, step) => Math.ceil(value / step) * step;

// Format a numeric price into compact $k/$m notation.
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

// Range slider with sq-ft and price variants plus draggable handles.
const RangeSlider = ({
  property1 = 'sq. ft.',
  sqFtRange,
  stepSqFt = 250,
  priceRange,
  stepPrice = 100000,
  className = '',
}) => {
  const trackRef = useRef(null);
  const [interactiveSqFtMin, setInteractiveSqFtMin] = useState(sqFtRange?.min ?? DEFAULT_MIN_SQFT);
  const [interactiveSqFtMax, setInteractiveSqFtMax] = useState(sqFtRange?.max ?? DEFAULT_MAX_SQFT);
  const [interactivePriceMin, setInteractivePriceMin] = useState(priceRange?.min ?? DEFAULT_MIN_PRICE);
  const [interactivePriceMax, setInteractivePriceMax] = useState(priceRange?.max ?? DEFAULT_MAX_PRICE);
  const [activeHandle, setActiveHandle] = useState(null);
  const prevRawSetMinRef = useRef(null);
  const prevRawSetMaxRef = useRef(null);
  const prevRoundedSetMinRef = useRef(null);
  const prevRoundedSetMaxRef = useRef(null);
  const isPrice = property1 === 'price';
  const rawSetMin = isPrice
    ? priceRange?.min ?? DEFAULT_MIN_PRICE
    : sqFtRange?.min ?? DEFAULT_MIN_SQFT;
  const rawSetMax = isPrice
    ? priceRange?.max ?? DEFAULT_MAX_PRICE
    : sqFtRange?.max ?? DEFAULT_MAX_SQFT;
  const stepValue = isPrice ? stepPrice : stepSqFt;
  const safeStepValue = stepValue > 0 ? stepValue : 1;
  const roundedSetMin = stepValue > 0 ? roundDownToStep(rawSetMin, stepValue) : rawSetMin;
  const roundedSetMax = stepValue > 0 ? roundUpToStep(rawSetMax, stepValue) : rawSetMax;
  const hasValidLimitRange = roundedSetMin < roundedSetMax;
  const safeRoundedMin = hasValidLimitRange
    ? roundedSetMin
    : isPrice
      ? DEFAULT_MIN_PRICE
      : DEFAULT_MIN_SQFT;
  const safeRoundedMax = hasValidLimitRange
    ? roundedSetMax
    : isPrice
      ? DEFAULT_MAX_PRICE
      : DEFAULT_MAX_SQFT;
  const validMinLimit = safeRoundedMin;
  const validMaxLimit = safeRoundedMax;
  const clampMinValue = clamp(
    isPrice ? interactivePriceMin : interactiveSqFtMin,
    validMinLimit,
    validMaxLimit - safeStepValue,
  );
  const clampMaxValue = clamp(
    isPrice ? interactivePriceMax : interactiveSqFtMax,
    validMinLimit + safeStepValue,
    validMaxLimit,
  );

  const range = validMaxLimit - validMinLimit || 1;
  const minPercent = clamp(((clampMinValue - validMinLimit) / range) * 100, 0, 100);
  const maxPercent = clamp(((clampMaxValue - validMinLimit) / range) * 100, 0, 100);

  const formattedSqFt = `${clampMinValue}-${clampMaxValue}`;
  const formattedPrice = `${formatPrice(clampMinValue)} - ${formatPrice(clampMaxValue)}`;

  useEffect(() => {
    if (activeHandle) return;
    if (isPrice) {
      const prevRawSetMin = prevRawSetMinRef.current;
      const prevRawSetMax = prevRawSetMaxRef.current;
      const prevRoundedSetMin = prevRoundedSetMinRef.current;
      const prevRoundedSetMax = prevRoundedSetMaxRef.current;
      if (
        (interactivePriceMin === rawSetMin ||
          interactivePriceMin === prevRawSetMin ||
          interactivePriceMin === prevRoundedSetMin) &&
        interactivePriceMin !== safeRoundedMin
      ) {
        setInteractivePriceMin(safeRoundedMin);
      }
      if (
        (interactivePriceMax === rawSetMax ||
          interactivePriceMax === prevRawSetMax ||
          interactivePriceMax === prevRoundedSetMax) &&
        interactivePriceMax !== safeRoundedMax
      ) {
        setInteractivePriceMax(safeRoundedMax);
      }
      prevRawSetMinRef.current = rawSetMin;
      prevRawSetMaxRef.current = rawSetMax;
      prevRoundedSetMinRef.current = safeRoundedMin;
      prevRoundedSetMaxRef.current = safeRoundedMax;
      return;
    }

    const prevRawSetMin = prevRawSetMinRef.current;
    const prevRawSetMax = prevRawSetMaxRef.current;
    const prevRoundedSetMin = prevRoundedSetMinRef.current;
    const prevRoundedSetMax = prevRoundedSetMaxRef.current;
    if (
      (interactiveSqFtMin === rawSetMin ||
        interactiveSqFtMin === prevRawSetMin ||
        interactiveSqFtMin === prevRoundedSetMin) &&
      interactiveSqFtMin !== safeRoundedMin
    ) {
      setInteractiveSqFtMin(safeRoundedMin);
    }
    if (
      (interactiveSqFtMax === rawSetMax ||
        interactiveSqFtMax === prevRawSetMax ||
        interactiveSqFtMax === prevRoundedSetMax) &&
      interactiveSqFtMax !== safeRoundedMax
    ) {
      setInteractiveSqFtMax(safeRoundedMax);
    }
    prevRawSetMinRef.current = rawSetMin;
    prevRawSetMaxRef.current = rawSetMax;
    prevRoundedSetMinRef.current = safeRoundedMin;
    prevRoundedSetMaxRef.current = safeRoundedMax;
  }, [
    activeHandle,
    interactivePriceMax,
    interactivePriceMin,
    interactiveSqFtMax,
    interactiveSqFtMin,
    isPrice,
    rawSetMax,
    rawSetMin,
    safeRoundedMax,
    safeRoundedMin,
  ]);

  const getSnappedValueFromPointer = (clientX) => {
    const track = trackRef.current;
    if (!track) return null;
    const rect = track.getBoundingClientRect();
    if (rect.width <= 0) return null;
    const relative = clamp(clientX - rect.left, 0, rect.width);
    const rawValue = validMinLimit + (relative / rect.width) * range;
    return snapToStep(rawValue, validMinLimit, safeStepValue);
  };

  // Convert pointer position into a snapped min/max update.
  const updateValueFromPointer = (clientX, handleOverride) => {
    const snapped = getSnappedValueFromPointer(clientX);
    if (snapped === null) return;
    const activeTarget = handleOverride ?? activeHandle;

    if (activeTarget === 'min') {
      const nextMin = clamp(snapped, validMinLimit, clampMaxValue - safeStepValue);
      if (isPrice) {
        setInteractivePriceMin(nextMin);
      } else {
        setInteractiveSqFtMin(nextMin);
      }
    } else if (activeTarget === 'max') {
      const nextMax = clamp(snapped, clampMinValue + safeStepValue, validMaxLimit);
      if (isPrice) {
        setInteractivePriceMax(nextMax);
      } else {
        setInteractiveSqFtMax(nextMax);
      }
    }
  };

  const handleTrackPointerDown = (event) => {
    if (event.target instanceof Element && event.target.closest(`.${styles.handle}`)) {
      return;
    }
    const snapped = getSnappedValueFromPointer(event.clientX);
    if (snapped === null || snapped >= clampMaxValue) return;
    const nextMin = clamp(snapped, validMinLimit, clampMaxValue - safeStepValue);
    if (isPrice) {
      setInteractivePriceMin(nextMin);
    } else {
      setInteractiveSqFtMin(nextMin);
    }
  };

  // Start dragging a handle and capture pointer events.
  const handlePointerDown = (handle) => (event) => {
    setActiveHandle(handle);
    updateValueFromPointer(event.clientX, handle);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  // Update the active handle during drag.
  const handlePointerMove = (event) => {
    if (!activeHandle) return;
    updateValueFromPointer(event.clientX);
  };

  // End dragging and release pointer capture.
  const handlePointerUp = (event) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setActiveHandle(null);
  };

  return (
    <div className={[styles.rangeSlider, className].filter(Boolean).join(' ')}>
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
          onPointerDown={handleTrackPointerDown}
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
