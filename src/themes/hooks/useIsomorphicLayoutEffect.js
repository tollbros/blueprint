import { useLayoutEffect, useEffect } from 'react';

// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
// source: https://github.com/omgovich/react-colorful/blob/master/src/hooks/useIsomorphicLayoutEffect.ts
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
