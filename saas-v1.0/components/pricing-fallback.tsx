"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingFallbackProps {
  currentPath: string;
}

const plans = [
  {
    name: "Free",
    badge: "",
    priceMonthly: "₹0",
    priceAnnual: "₹0",
    description: "Start replying instantly with the basics.",
    features: [
      "2 AI replies per day",
      "Context-aware replies",
      "4 tone modes",
      "Chrome Extension",
      "Community Support",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Pro",
    badge: "⭐ Most Popular",
    priceMonthly: "₹99",
    priceAnnual: "₹999",
    description: "Unlimited replies with premium speed and support.",
    features: [
      "Unlimited AI replies",
      "Faster AI response generation",
      "Premium tone optimization",
      "Advanced context understanding",
      "One-click reply insertion",
      "Early access to new features",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    highlight: true,
  },
  {
    name: "Annual",
    badge: "🔥 Save 16%",
    priceMonthly: "₹1,299",
    priceAnnual: "₹999",
    description: "Best value for regular users who want savings.",
    features: [
      "Everything in Pro",
      "Save compared to monthly billing",
      "Early access to new features",
      "Priority support",
      "Best value for regular users",
    ],
    cta: "Get Annual Plan",
    highlight: false,
  },
];

export function PricingFallback({ currentPath }: PricingFallbackProps) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const isLanding = currentPath === "/";

  return (
    <div className={cn(isLanding && "landing-pricing")}> 
      <Card className={cn(
        isLanding && "border-white/[0.08] bg-white/[0.03] text-white shadow-none"
      )}>
        <CardHeader className={cn(isLanding ? "container mx-auto px-4 pb-8" : "")}> 
          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="text-3xl font-bold text-white">Premium INR Pricing</CardTitle>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
              {(["monthly", "annual"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setBilling(option)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-all duration-300",
                    billing === option
                      ? "bg-white text-[#08080A] shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {option === "monthly" ? "Monthly" : "Annual"}
                </button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className={cn(isLanding ? "container mx-auto px-0" : "", "grid gap-6 lg:grid-cols-3")}> 
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "group relative overflow-hidden flex flex-col rounded-[28px] border border-white/10 bg-[#0F0F13] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,0,0,0.32)]",
                plan.highlight && "border-transparent bg-[radial-gradient(circle_at_top,_rgba(198,241,53,0.12),transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[0_30px_90px_rgba(198,241,53,0.2)]",
                plan.highlight && "before:absolute before:inset-0 before:-z-10 before:rounded-[28px] before:bg-gradient-to-br before:from-[#C6F135]/20 before:via-transparent before:to-[#00E5C8]/10 before:opacity-70"
              )}
            >
              <div className="mb-6 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className={cn("text-2xl font-semibold", plan.highlight ? "text-white" : "text-white")}>{plan.name}</CardTitle>
                  {plan.badge ? (
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/75">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>
                <p className="text-sm text-white/60">{plan.description}</p>
              </div>
              <div className="mb-6 flex items-end gap-2">
                <p className="text-[2.75rem] font-black tracking-[-0.05em] text-white">
                  {billing === "monthly" ? plan.priceMonthly : plan.priceAnnual}
                </p>
                <span className="pb-1 text-sm text-white/60">/{billing}</span>
              </div>
              <div className="mb-6 flex-grow space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className={cn(
                      "mt-1 h-4 w-4 flex-shrink-0",
                      plan.highlight ? "text-[#C6F135]" : "text-white/70"
                    )} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <CardFooter className="mt-auto pt-4">
                <Button
                  variant={plan.highlight ? "default" : "outline"}
                  className={cn(
                    "w-full rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-200",
                    plan.highlight
                      ? "bg-white text-[#08080A] shadow-[0_18px_48px_rgba(198,241,53,0.22)] hover:scale-[1.01]"
                      : "border border-white/10 bg-white/5 text-white/90 hover:bg-white/10"
                  )}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
