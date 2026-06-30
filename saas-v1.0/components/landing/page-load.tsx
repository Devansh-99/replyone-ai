"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "./hooks/use-reduced-motion";

export function PageLoadOverlay() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (reduced) {
      setVisible(false);
      return;
    }

    const timers = [
      window.setTimeout(() => setPhase(1), 120),
      window.setTimeout(() => setPhase(2), 340),
      window.setTimeout(() => setPhase(3), 620),
      window.setTimeout(() => setVisible(false), 1200),
    ];

    return () => timers.forEach(window.clearTimeout);
  }, [reduced]);

  if (!visible) {
    return null;
  }

  return (
    <div className="page-load-overlay" data-phase={phase}>
      <div className="page-load-panel">
        <div className="page-load-logo" aria-hidden="true">
          <span className="page-load-logo-mark">R</span>
        </div>
        <div className="space-y-3 text-center">
          <p className="page-load-title">Replier</p>
          <p className="page-load-subtitle">AI replies, handcrafted instantly.</p>
        </div>
      </div>
    </div>
  );
}
