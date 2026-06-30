"use client";

import { AnimatedCounter } from "./landing/animated-counter";
import { Reveal } from "./landing/reveal";
import { SectionHeading } from "./landing/section-heading";
import { BarChart3, Heart, Shield, Timer } from "lucide-react";

const benefits = [
  {
    icon: Timer,
    stat: 10,
    suffix: "+",
    unit: "hrs/week",
    title: "Time Reclaimed",
    description: "Stop manually typing every reply. Focus on strategy, not inbox zero.",
  },
  {
    icon: BarChart3,
    stat: 400,
    suffix: "%",
    unit: "avg boost",
    title: "Engagement Growth",
    description: "Faster responses mean more conversations and stronger community ties.",
  },
  {
    icon: Heart,
    stat: 98,
    suffix: "%",
    unit: "satisfaction",
    title: "Authentic Voice",
    description: "AI responses that match your tone—followers won't know the difference.",
  },
  {
    icon: Shield,
    stat: 24,
    suffix: "/7",
    unit: "coverage",
    title: "Always On",
    description: "Never miss a comment again, even across time zones and weekends.",
  },
];

export default function Benefits() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Section-specific glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--landing-glow-violet)/0.04)] to-transparent" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <SectionHeading
          label="Impact"
          title="Measurable results from day one"
          description="Teams using Replier report dramatic improvements across every metric that matters."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 100}>
              <div className="relative h-full rounded-2xl landing-glass p-6 text-center transition-transform duration-500 hover:scale-[1.02]">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <benefit.icon className="h-5 w-5 text-[hsl(var(--landing-glow-cyan))]" />
                </div>
                <p className="text-4xl font-semibold text-white">
                  <AnimatedCounter
                    value={benefit.stat}
                    suffix={benefit.suffix}
                  />
                </p>
                <p className="mb-3 text-xs uppercase tracking-widest text-white/35">
                  {benefit.unit}
                </p>
                <h3 className="mb-2 font-medium text-white">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-white/45">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
