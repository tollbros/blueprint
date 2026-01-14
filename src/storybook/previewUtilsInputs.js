// Input-specific helpers for Storybook preview containers.
import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';

/**
 * Computes the preview container style for input components.
 * @param {object} args - Story args (expects bg when present).
 * @param {object} options - Overrides for backgrounds and sizing.
 * @param {string} options.lightBg - Background for light mode.
 * @param {string} options.darkBg - Background for dark mode.
 * @param {string} options.darkProp - Arg key that indicates dark mode (default: "bg").
 * @param {string|string[]} options.darkValues - Value(s) that should trigger dark mode.
 * @param {string} options.wrapperWidth - Width to use for the preview container.
 * @param {string} options.padding - Padding to use for the preview container.
 */
export function getInputPreviewContainerStyle(args = {}, options = {}) {
  const {
    lightBg = '#F4F6F7',
    darkBg = '#85909F',
    darkProp = 'bg',
    darkValues = ['Dark'],
    wrapperWidth = '375px',
    padding = '16px 16px',
  } = options;

  const darkSet = Array.isArray(darkValues) ? new Set(darkValues) : new Set([darkValues]);
  const isDark = darkSet.has(args[darkProp]);

  return {
    background: isDark ? darkBg : lightBg,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: wrapperWidth,
    margin: '0 auto',
    position: 'relative',
    borderRadius: '4px',
    padding,
  };
}

function parsePadding(padding) {
  const values = String(padding).trim().split(/\s+/);

  if (values.length === 1) {
    return {
      top: values[0],
      right: values[0],
      bottom: values[0],
      left: values[0],
    };
  }

  if (values.length === 2) {
    return {
      top: values[0],
      right: values[1],
      bottom: values[0],
      left: values[1],
    };
  }

  if (values.length === 3) {
    return {
      top: values[0],
      right: values[1],
      bottom: values[2],
      left: values[1],
    };
  }

  return {
    top: values[0],
    right: values[1],
    bottom: values[2],
    left: values[3],
  };
}

export function InputPreviewContainer({ args = {}, options = {}, children }) {
  const containerRef = useRef(null);
  const [extraPadding, setExtraPadding] = useState(0);

  const baseStyle = useMemo(() => getInputPreviewContainerStyle(args, options), [args, options]);
  const { padding: basePadding, ...restBaseStyle } = baseStyle;
  const padding = parsePadding(basePadding || '16px 16px');

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    const dropdown = container.querySelector('[data-preview-dropdown]');
    if (!dropdown) {
      setExtraPadding(0);
      return undefined;
    }

    const updatePadding = () => {
      const height = dropdown.offsetHeight || 0;
      setExtraPadding(height);
    };

    updatePadding();

    const resizeObserver = new ResizeObserver(updatePadding);
    resizeObserver.observe(dropdown);

    const mutationObserver = new MutationObserver(updatePadding);
    mutationObserver.observe(dropdown, {
      attributes: true,
      attributeFilter: ['style', 'class', 'data-open'],
    });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [children]);

  return (
    <div
      ref={containerRef}
      style={{
        ...restBaseStyle,
        paddingTop: padding.top,
        paddingRight: padding.right,
        paddingBottom: extraPadding ? `calc(${padding.bottom} + ${extraPadding}px)` : padding.bottom,
        paddingLeft: padding.left,
      }}
    >
      {children}
    </div>
  );
}
