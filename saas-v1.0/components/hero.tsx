"use client";

import { AnimatedCounter } from "./landing/animated-counter";
import { MagneticButton } from "./landing/magnetic-button";
import { Reveal } from "./landing/reveal";
import {
  ArrowRight,
  Bot,
  Chrome,
  MessageSquare,
  Sparkles,
  Zap,
} from "lucide-react";

const CHROME_URL =
  "https://chromewebstore.google.com/detail/ai-social-replier-gpt-res/ahfilmopkkfaehndncopogaohdkddjjd";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-20 overflow-hidden">
      {/* Hero-specific depth layers */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, hsl(var(--landing-glow-violet)/0.4), transparent)",
        }}
      />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: Copy */}
          <div className="animate-page-enter">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-[hsl(var(--landing-glow-cyan))]" />
                <span>AI-Powered Social Media Intelligence</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
                <span className="block text-white">Stop drowning</span>
                <span className="block text-white">in comments.</span>
                <span className="landing-gradient-text mt-1 block">
                  Start engaging at scale.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/55 sm:text-xl">
                Replier uses AI to craft context-aware responses in seconds—saving
                hours daily while boosting engagement up to{" "}
                <span className="text-white/80">400%</span>.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <MagneticButton href="/#pricing" variant="primary">
                  Boost Your Engagement
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton href={CHROME_URL} variant="outline" external>
                  <Chrome className="h-4 w-4" />
                  Add to Chrome — 5 Free Replies
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div>
                  <p className="text-2xl font-semibold text-white sm:text-3xl">
                    <AnimatedCounter value={10} suffix="+" />
                  </p>
                  <p className="mt-1 text-xs text-white/45 sm:text-sm">
                    Hours saved weekly
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white sm:text-3xl">
                    <AnimatedCounter value={400} suffix="%" />
                  </p>
                  <p className="mt-1 text-xs text-white/45 sm:text-sm">
                    Engagement boost
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white sm:text-3xl">
                    <AnimatedCounter value={10000} suffix="+" />
                  </p>
                  <p className="mt-1 text-xs text-white/45 sm:text-sm">
                    Happy users
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Interactive AI visualization */}
          <div className="relative hidden lg:block">
            <Reveal direction="right" delay={200}>
              <div className="relative mx-auto aspect-square max-w-md">
                {/* Central orb */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="landing-shimmer-border relative h-48 w-48 rounded-full landing-glass-strong flex items-center justify-center animate-pulse-glow">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-400/20">
                      <Bot className="h-14 w-14 text-white/90" />
                    </div>
                  </div>
                </div>

                {/* Floating UI cards */}
                <FloatingCard
                  icon={<MessageSquare className="h-4 w-4" />}
                  label="New comment detected"
                  className="absolute -left-4 top-8 animate-float-gentle"
                  delay="0s"
                />
                <FloatingCard
                  icon={<Zap className="h-4 w-4 text-amber-400" />}
                  label="Analyzing context..."
                  className="absolute -right-6 top-1/4 animate-float-delayed"
                  delay="0.5s"
                />
                <FloatingCard
                  icon={<Sparkles className="h-4 w-4 text-cyan-400" />}
                  label="Reply generated"
                  className="absolute -left-2 bottom-16 animate-float-gentle"
                  delay="1s"
                />
                <FloatingCard
                  icon={<ArrowRight className="h-4 w-4 text-green-400" />}
                  label="Posted successfully"
                  className="absolute -right-4 bottom-8 animate-float-delayed"
                  delay="1.5s"
                />

                {/* Connection lines (decorative) */}
                <svg
                  className="absolute inset-0 h-full w-full opacity-20"
                  viewBox="0 0 400 400"
                  fill="none"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="120"
                    stroke="url(#heroGrad)"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                    className="animate-[spin_30s_linear_infinite]"
                    style={{ transformOrigin: "center" }}
                  />
                  <defs>
                    <linearGradient id="heroGrad" x1="0" y1="0" x2="400" y2="400">
                      <stop stopColor="hsl(var(--landing-glow-cyan))" />
                      <stop offset="1" stopColor="hsl(var(--landing-glow-violet))" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  icon,
  label,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`landing-glass rounded-2xl px-4 py-3 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
          {icon}
        </div>
        <span className="text-sm font-medium text-white/80">{label}</span>
      </div>
    </div>
  );
}
