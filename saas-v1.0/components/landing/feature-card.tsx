"use client";

import { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { useReducedMotion } from "./hooks/use-reduced-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  delay: number;
}

export function FeatureCard({ title, description, delay }: FeatureCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const reduced = useReducedMotion();

  const style = useMemo(
    () => ({
      transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
      transition: hovering ? "transform 0.18s ease-out" : "transform 0.4s ease-in-out",
      transitionDelay: `${delay}ms`,
    }),
    [tilt, hovering, delay]
  );

  return (
    <div
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 transition duration-300 will-change-transform"
      onPointerMove={(event) => {
        if (reduced) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 16;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
        setTilt({ x, y });
      }}
      onPointerLeave={() => {
        if (!reduced) setTilt({ x: 0, y: 0 });
        setHovering(false);
      }}
      onPointerEnter={() => setHovering(true)}
      style={{ ...style, transition: hovering ? "transform 0.18s ease-out" : "transform 0.4s ease-in-out" }}
    >
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#00E5C8]/0 to-[#A78BFA]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 space-y-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 transition duration-500 group-hover:bg-[#00E5C8]/10 group-hover:text-[#00E5C8]">
          <Sparkles className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-7 text-white/60">{description}</p>
      </div>
    </div>
  );
}
