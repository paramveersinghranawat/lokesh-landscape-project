'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * CountUp — animates a numeric value from 0 to `end` when the element
 * scrolls into view. Supports:
 *  - prefix  : e.g. "₹"
 *  - suffix  : e.g. "+" or " Cr" or " GW"
 *  - duration: animation length in ms (default 2000)
 *  - decimals: decimal places (default 0)
 *
 * Usage:
 *   <CountUp end={18000} suffix=" Cr" prefix="₹" />
 *   <CountUp end={99.98} suffix="%" decimals={2} />
 */
export default function CountUp({
  end,
  prefix = '',
  suffix = '',
  duration = 2000,
  decimals = 0,
  className = '',
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();
          animateCount();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function animateCount() {
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString('en-IN');

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
