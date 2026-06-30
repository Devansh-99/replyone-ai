"use client";

import { Reveal } from "./landing/reveal";
import { SectionHeading } from "./landing/section-heading";
import { AlertTriangle, Clock, EyeOff, TrendingDown } from "lucide-react";

const pains = [
  {
    icon: AlertTriangle,
    title: "Overwhelming Volume",
    description:
      "Drowning in comments, messages, and mentions across multiple platforms.",
    accent: "from-red-500/20 to-orange-500/10",
  },
  {
    icon: Clock,
    title: "Time-Consuming Responses",
    description:
      "Hours spent crafting individual replies instead of strategic work.",
    accent: "from-amber-500/20 to-yellow-500/10",
  },
  {
    icon: TrendingDown,
    title: "Inconsistent Engagement",
    description:
      "Struggling to maintain timely responses across every channel.",
    accent: "from-violet-500/20 to-purple-500/10",
  },
  {
    icon: EyeOff,
    title: "Missed Opportunities",
    description:
      "Losing momentum when replies arrive too late—or not at all.",
    accent: "from-cyan-500/20 to-blue-500/10",
  },
];

export default function Problem() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="The Challenge"
          title="Manual social media doesn't scale"
          description="Every unanswered comment is a missed connection. Here's what's holding teams back."
          align="left"
          className="max-w-2xl"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pains.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl landing-glass p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.07]">
                <div
                  className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${pain.accent} blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    <pain.icon className="h-5 w-5 text-white/70" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-white">
                    {pain.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {pain.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
