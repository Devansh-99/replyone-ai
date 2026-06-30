"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "./use-reduced-motion";

export function useMousePosition() {
  const reduced = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;

    const handler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [reduced]);

  return position;
}
