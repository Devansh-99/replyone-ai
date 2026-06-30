"use client";

import { useMemo } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "./magnetic-button";
import { Reveal } from "./reveal";
import { HeroPreviewCard } from "./hero-preview-card";
import { useMousePosition } from "./hooks/use-mouse-position";
import { useReducedMotion } from "./hooks/use-reduced-motion";

const CHROME_URL =
  "https://chromewebstore.google.com/detail/ai-social-replier-gpt-res/ahfilmopkkfaehndncopogaohdkddjjd";

const heroBadges = [
  { label: "Free — 10 replies / day", color: "border-[#C6F135] bg-[#C6F135]/10 text-[#C6F135]" },
  { label: "PRO — Unlimited", color: "border-[#00E5C8] bg-[#00E5C8]/10 text-[#00E5C8]" },
  { label: "4 tone modes", color: "border-[#A78BFA] bg-[#A78BFA]/10 text-[#A78BFA]" },
];

const browserBadges = ["Chrome", "Edge", "Opera", "Firefox"];

export function HeroSection() {
  const { x, y } = useMousePosition();
  const reduced = useReducedMotion();

  const mousePosition = useMemo(() => {
    if (reduced || typeof window === "undefined") {
      return { x: "50%", y: "40%" };
    }

    return {
      x: `${Math.min(100, Math.max(0, (x / window.innerWidth) * 100))}%`,
      y: `${Math.min(100, Math.max(0, (y / window.innerHeight) * 100))}%`,
    };
  }, [x, y, reduced]);

  return (
    <section className="relative overflow-hidden pt-24 pb-24 sm:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="landing-hero-grid absolute inset-0" />
        <div
          className="landing-spotlight absolute inset-0"
          style={{
            "--mouse-x": mousePosition.x,
            "--mouse-y": mousePosition.y,
          } as React.CSSProperties}
        />
        <div className="landing-hero-spark absolute inset-0" />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(circle at 10% 18%, rgba(198,241,53,0.18), transparent 18%), radial-gradient(circle at 80% 28%, rgba(0,229,200,0.14), transparent 20%), radial-gradient(circle at 50% 72%, rgba(167,139,250,0.12), transparent 18%)",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid gap-16 xl:grid-cols-[1.15fr_0.85fr] xl:items-center">
          <div className="space-y-8">
            <Reveal>
              <div className="flex flex-wrap gap-3">
                {heroBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium ${badge.color}`}
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-current" />
                    {badge.label}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={60}>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-[#00E5C8]" />
                Built for creators, teams, and founders using X.
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-[clamp(3rem,5vw,6rem)] font-black leading-[0.96] tracking-[-0.05em] text-white">
                  Reply smarter.
                  <span className="block text-[#C6F135]">Engage faster.</span>
                  <span className="block text-[#00E5C8]">Grow bigger.</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
                  Generate context-aware, human-sounding replies without leaving X. No tab switching,
                  no copy/paste, no stale AI templates.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <MagneticButton href={CHROME_URL} variant="primary" external>
                  Install for free
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton href="#how-it-works" variant="outline" aria-label="Scroll to how it works section">
                  See how it works
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[28px] border border-white/10 bg-[#0F0F13]/90 p-6 text-center">
                  <p className="text-2xl font-semibold text-white sm:text-3xl">10</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/50">Free replies / day</p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-[#0F0F13]/90 p-6 text-center">
                  <p className="text-2xl font-semibold text-white sm:text-3xl">4</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/50">Tone modes</p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-[#0F0F13]/90 p-6 text-center">
                  <p className="text-2xl font-semibold text-white sm:text-3xl">1</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/50">Click workflow</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={320}>
            <div className="relative">
              <div className="absolute -inset-x-6 -top-6 h-[520px] rounded-[36px] bg-[radial-gradient(circle_at_top,_rgba(198,241,53,0.18),transparent_30%),radial-gradient(circle_at_90%_30%,rgba(0,229,200,0.12),transparent_35%)] blur-3xl opacity-75" />
              <div className="relative rounded-[36px] border border-white/10 bg-[#08080D]/95 p-5 shadow-[0_40px_90px_rgba(0,0,0,0.55)] landing-glass-strong">
                <HeroPreviewCard />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70">
                {browserBadges.map((label) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
