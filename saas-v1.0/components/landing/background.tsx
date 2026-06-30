"use client";

import { useMousePosition } from "./hooks/use-mouse-position";
import { useReducedMotion } from "./hooks/use-reduced-motion";

export function LandingBackground() {
  const { x, y } = useMousePosition();
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[hsl(var(--landing-bg))]" />

      {/* Aurora layers */}
      <div
        className="absolute -left-1/4 top-0 h-[70vh] w-[70vw] rounded-full opacity-40 blur-[120px] animate-aurora"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--landing-glow-violet)) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -right-1/4 top-1/4 h-[60vh] w-[60vw] rounded-full opacity-30 blur-[100px] animate-aurora"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--landing-glow-cyan)) 0%, transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[50vh] w-[50vw] rounded-full opacity-25 blur-[90px] animate-breathe"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--landing-glow-blue)) 0%, transparent 70%)",
        }}
      />

      {/* Perspective grid */}
      <div className="landing-grid-perspective absolute inset-0 opacity-40" />

      {/* Floating orbs */}
      <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-violet-500/10 blur-3xl animate-float-gentle" />
      <div className="absolute right-[15%] top-[40%] h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl animate-float-delayed" />
      <div className="absolute bottom-[20%] left-[40%] h-40 w-40 rounded-full bg-blue-500/8 blur-3xl animate-pulse-glow" />

      {/* Mouse-follow glow */}
      {!reduced && (
        <div
          className="absolute h-[500px] w-[500px] rounded-full opacity-20 blur-[100px] transition-transform duration-300 ease-out"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--landing-glow-violet)/0.5) 0%, transparent 70%)",
            transform: `translate(${x - 250}px, ${y - 250}px)`,
          }}
        />
      )}

      {/* Noise texture */}
      <div className="landing-noise absolute inset-0" />
    </div>
  );
}
