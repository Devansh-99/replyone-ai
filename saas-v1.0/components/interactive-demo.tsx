"use client";

import { useEffect, useState } from "react";
import { Reveal } from "./landing/reveal";
import { SectionHeading } from "./landing/section-heading";
import {
  Brain,
  CheckCircle2,
  Eye,
  Loader2,
  MessageSquarePlus,
  Send,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "./landing/hooks/use-reduced-motion";

const steps = [
  {
    id: "comment",
    label: "New Comment",
    icon: MessageSquarePlus,
    detail: '"Love your product! How does the API integration work?"',
    color: "text-blue-400",
  },
  {
    id: "thinking",
    label: "AI Thinking",
    icon: Loader2,
    detail: "Processing intent and tone...",
    color: "text-violet-400",
    spin: true,
  },
  {
    id: "context",
    label: "Context Analysis",
    icon: Eye,
    detail: "Reading thread, brand voice, and platform norms",
    color: "text-cyan-400",
  },
  {
    id: "generate",
    label: "Response Generation",
    icon: Brain,
    detail: "Crafting a personalized, on-brand reply",
    color: "text-amber-400",
  },
  {
    id: "preview",
    label: "Reply Preview",
    icon: Sparkles,
    detail:
      '"Great question! Our API uses REST with OAuth 2.0—docs linked in bio 👋"',
    color: "text-emerald-400",
  },
  {
    id: "posted",
    label: "Posted Successfully",
    icon: CheckCircle2,
    detail: "Reply live in 2.3 seconds",
    color: "text-green-400",
  },
];

export default function InteractiveDemo() {
  const reduced = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [reduced]);

  return (
    <section id="demo" className="relative py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="See It In Action"
          title="From comment to reply in seconds"
          description="Watch Replier analyze context, generate a response, and post—all without leaving your browser."
        />

        <Reveal>
          <div className="mx-auto max-w-3xl">
            <div className="landing-shimmer-border relative overflow-hidden rounded-3xl landing-glass-strong p-1">
              <div className="rounded-[22px] bg-[hsl(var(--landing-surface))] p-6 sm:p-10">
                {/* Progress bar */}
                <div className="mb-8 h-1 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--landing-glow-cyan))] to-[hsl(var(--landing-glow-violet))] transition-all duration-700 ease-out"
                    style={{
                      width: `${((activeStep + 1) / steps.length) * 100}%`,
                    }}
                  />
                </div>

                {/* Steps pipeline */}
                <div className="space-y-1">
                  {steps.map((step, i) => {
                    const isActive = i === activeStep;
                    const isPast = i < activeStep;
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.id}
                        className={cn(
                          "flex items-start gap-4 rounded-xl px-4 py-3.5 transition-all duration-500",
                          isActive && "bg-white/[0.06] scale-[1.01]",
                          !isActive && !isPast && "opacity-30",
                          isPast && "opacity-50"
                        )}
                        style={
                          isActive
                            ? { animation: "demo-step-in 0.5s ease-out" }
                            : undefined
                        }
                      >
                        <div
                          className={cn(
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-500",
                            isActive
                              ? "border-white/20 bg-white/10"
                              : "border-white/5 bg-white/[0.03]"
                          )}
                        >
                          <Icon
                            className={cn(
                              "h-5 w-5",
                              step.color,
                              step.spin && isActive && "animate-spin"
                            )}
                          />
                        </div>
                        <div className="min-w-0 flex-1 pt-0.5">
                          <div className="flex items-center gap-2">
                            <p
                              className={cn(
                                "text-sm font-medium transition-colors",
                                isActive ? "text-white" : "text-white/50"
                              )}
                            >
                              {step.label}
                            </p>
                            {isActive && i < steps.length - 1 && (
                              <Send className="h-3 w-3 text-white/30 animate-pulse" />
                            )}
                          </div>
                          {(isActive || isPast) && (
                            <p className="mt-1 text-sm text-white/45 leading-relaxed">
                              {step.detail}
                            </p>
                          )}
                        </div>
                        {isPast && (
                          <CheckCircle2 className="mt-2 h-4 w-4 shrink-0 text-green-400/70" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
