"use client";

import { Reveal } from "./landing/reveal";
import { SectionHeading } from "./landing/section-heading";
import { Play } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Install the extension",
    description: "Add Replier to Chrome in one click. No setup required.",
  },
  {
    num: "02",
    title: "Browse as usual",
    description: "Navigate your social platforms normally—Replier lives in the toolbar.",
  },
  {
    num: "03",
    title: "Click to reply",
    description: "Hit the Replier button on any comment or post you want to respond to.",
  },
  {
    num: "04",
    title: "Review & post",
    description: "Edit the AI draft if needed, then post with confidence.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="How It Works"
          title="Four steps to smarter engagement"
          description="Get started in minutes. No complex onboarding, no workflow changes."
        />

        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Steps — asymmetric stagger */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 120} direction="left">
                <div
                  className="group relative flex gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/12 hover:bg-white/[0.05]"
                  style={{ marginLeft: i % 2 === 1 ? "2rem" : "0" }}
                >
                  <span className="font-mono text-3xl font-light text-white/15 transition-colors group-hover:text-[hsl(var(--landing-glow-violet)/0.6)]">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-lg font-medium text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={500}>
              <Link
                href="https://youtu.be/H3Hg-JjFehE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--landing-glow-violet))] rounded-lg px-1"
              >
                <Play className="h-4 w-4" />
                Watch full demo video
              </Link>
            </Reveal>
          </div>

          {/* Video embed */}
          <Reveal direction="right" delay={200}>
            <div className="landing-shimmer-border relative overflow-hidden rounded-3xl">
              <div className="aspect-video w-full overflow-hidden rounded-[22px] bg-black/40">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/30Zt7See2B0"
                  title="Replier Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
