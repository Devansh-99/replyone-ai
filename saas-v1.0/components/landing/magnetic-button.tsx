"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRef } from "react";
import { useReducedMotion } from "./hooks/use-reduced-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  external?: boolean;
}

export function MagneticButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className,
  external,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px) scale(1.02)`;
    ref.current.style.boxShadow = `0 24px 46px rgba(0,0,0,0.18), ${x * 0.06}px ${y * 0.06}px 40px rgba(198,241,53,0.12)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0) scale(1)";
    ref.current.style.boxShadow = "";
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--landing-glow-violet))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--landing-bg))]";

  const variants = {
    primary:
      "bg-white text-[hsl(var(--landing-bg))] shadow-[0_0_40px_-8px_hsl(var(--landing-glow-violet)/0.6)] hover:shadow-[0_0_60px_-8px_hsl(var(--landing-glow-violet)/0.8)] hover:scale-[1.02]",
    ghost:
      "landing-glass text-white/90 hover:bg-white/10 hover:text-white",
    outline:
      "border border-white/20 bg-transparent text-white/90 hover:border-white/40 hover:bg-white/5",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      className={classes}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </button>
  );
}
