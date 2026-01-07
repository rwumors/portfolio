import { useRef, useEffect } from 'react';

/**
 * Hook to apply activities-style scrollbar to an element
 */
export function useActivitiesScrollbar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('scrollbar-activities');
    }
  }, []);

  return ref;
}

/**
 * Hook to apply dark scrollbar to an element
 */
export function useDarkScrollbar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('scrollbar-dark');
    }
  }, []);

  return ref;
}

/**
 * Hook to apply thick scrollbar to an element
 */
export function useThickScrollbar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('scrollbar-thick');
    }
  }, []);

  return ref;
}

