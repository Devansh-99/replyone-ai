"use client";

import { RefObject, useEffect, useState } from "react";
import { useInView } from "./hooks/use-in-view";
import { useReducedMotion } from "./hooks/use-reduced-motion";

interface AnimatedStatProps {
  value: number;
  label: string;
}

export function AnimatedStat({ value, label }: AnimatedStatProps) {
  const { ref, inView } = useInView(0.25);
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setCount(value);
      return;
    }

    let frame: number;
    const duration = 900;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(value * progress));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value]);

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      role="status"
      aria-live="polite"
      aria-label={`${label}: ${count.toLocaleString()}`}
      className="rounded-[24px] border border-white/10 bg-[#0F0F13] p-4 transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(198,241,53,0.1)]"
    >
      <p className="text-2xl font-semibold text-[#C6F135]">{count.toLocaleString()}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/40">{label}</p>
    </div>
  );
}
