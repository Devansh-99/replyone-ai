"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "./hooks/use-reduced-motion";
import { useInView } from "./hooks/use-in-view";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView(0.12);

  const transforms = {
    up: "translateY(32px)",
    left: "translateX(-32px)",
    right: "translateX(32px)",
    none: "none",
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn("transition-all duration-700 ease-out", className)}
      style={{
        opacity: reduced || inView ? 1 : 0,
        transform: reduced || inView ? "none" : transforms[direction],
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
