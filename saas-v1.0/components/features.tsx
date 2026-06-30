"use client";

import { Reveal } from "./landing/reveal";
import { SectionHeading } from "./landing/section-heading";
import {
  Clock,
  CreditCard,
  Globe,
  MessageSquare,
  Users,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "AI-Powered Responses",
    description:
      "Advanced AI generates contextually relevant, engaging replies that keep conversations flowing.",
    icon: Zap,
    span: "lg:col-span-2 lg:row-span-2",
    gradient: "from-violet-600/20 via-transparent to-transparent",
  },
  {
    title: "Time-Saving Automation",
    description: "Automate interactions and reclaim hours for strategic work.",
    icon: Clock,
    span: "",
    gradient: "from-cyan-600/15 via-transparent to-transparent",
  },
  {
    title: "Boost Engagement",
    description: "Timely, relevant responses 24/7 that drive real interaction.",
    icon: Users,
    span: "",
    gradient: "from-blue-600/15 via-transparent to-transparent",
  },
  {
    title: "Multilingual Support",
    description:
      "Detect and match the language of any post automatically.",
    icon: Globe,
    span: "",
    gradient: "from-emerald-600/15 via-transparent to-transparent",
  },
  {
    title: "Custom AI Prompts",
    description:
      "Define brand voice—'Act as a social media manager for a tech company' and more.",
    icon: MessageSquare,
    span: "lg:col-span-2",
    gradient: "from-amber-600/15 via-transparent to-transparent",
  },
  {
    title: "Flexible Pricing",
    description:
      "Flat-fee plans with €0.01 per extra generation. Pay only for what you use.",
    icon: CreditCard,
    span: "",
    gradient: "from-pink-600/15 via-transparent to-transparent",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="Capabilities"
          title="Intelligence built for social teams"
          description="Every feature designed to help you respond faster, sound authentic, and scale engagement."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 80}>
              <FeatureCard {...feature} large={feature.span.includes("row-span")} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  icon: Icon,
  span,
  gradient,
  large,
}: (typeof features)[0] & { large?: boolean }) {
  return (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-500 hover:border-white/15 hover:bg-white/[0.06]",
        span
      )}
      style={{
        transform: "perspective(800px)",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "perspective(800px) rotateY(0) rotateX(0)";
      }}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          gradient
        )}
      />
      <div className="relative">
        <div
          className={cn(
            "mb-4 flex items-center justify-center rounded-xl border border-white/10 bg-white/5",
            large ? "h-14 w-14" : "h-11 w-11"
          )}
        >
          <Icon
            className={cn(
              "text-[hsl(var(--landing-glow-cyan))]",
              large ? "h-7 w-7" : "h-5 w-5"
            )}
          />
        </div>
        <h3
          className={cn(
            "font-medium text-white",
            large ? "text-xl mb-3" : "text-base mb-2"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "leading-relaxed text-white/50",
            large ? "text-base max-w-md" : "text-sm"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
