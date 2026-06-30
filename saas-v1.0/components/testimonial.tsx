"use client";

import { Reveal } from "./landing/reveal";
import { SectionHeading } from "./landing/section-heading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Replier has revolutionized our social media strategy. We've seen a 40% increase in engagement since we started using it!",
    author: "Sarah J.",
    role: "Marketing Director",
    highlight: false,
  },
  {
    quote:
      "The time-saving aspect is incredible. It's like having an extra team member dedicated to social media.",
    author: "Mike T.",
    role: "Small Business Owner",
    highlight: true,
  },
  {
    quote:
      "The AI-generated responses are surprisingly human-like. Our followers can't tell the difference!",
    author: "Emily R.",
    role: "Influencer",
    highlight: false,
  },
];

export default function Testimonial() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="Loved by social media managers worldwide"
          description="Real teams. Real results. Real time saved."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 120}>
              <div
                className={`relative h-full rounded-2xl p-7 transition-all duration-500 ${
                  t.highlight
                    ? "landing-shimmer-border landing-glass-strong scale-[1.02] md:-translate-y-2"
                    : "landing-glass"
                }`}
              >
                <Quote className="mb-4 h-8 w-8 text-[hsl(var(--landing-glow-violet)/0.5)]" />
                <p className="mb-6 text-base leading-relaxed text-white/70 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-medium text-white">{t.author}</p>
                  <p className="text-sm text-white/40">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
