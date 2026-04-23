import { useEffect, useRef, useState } from "react";

interface Options {
  duration?: number;
  start?: number;
  /** Re-trigger every time the element re-enters the viewport */
  repeat?: boolean;
}

/**
 * Animates a number from `start` to `end` once the host element enters the viewport.
 * Returns [value, ref] — attach the ref to the element you want to observe.
 */
export function useCountUp(end: number, options: Options = {}) {
  const { duration = 1800, start = 0, repeat = false } = options;
  const [value, setValue] = useState(start);
  const ref = useRef<HTMLElement | null>(null);
  const hasRunRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const animate = () => {
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(start + (end - start) * eased);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasRunRef.current || repeat) {
              hasRunRef.current = true;
              if (rafRef.current) cancelAnimationFrame(rafRef.current);
              animate();
            }
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, start, duration, repeat]);

  return [value, ref] as const;
}
