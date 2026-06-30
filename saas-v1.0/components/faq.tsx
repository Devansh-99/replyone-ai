"use client";

import { useState } from "react";
import { Reveal } from "./landing/reveal";
import { SectionHeading } from "./landing/section-heading";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How does Replier work?",
    a: "Install our Chrome extension, browse your social platforms as usual, and click the Replier button when you want to respond. AI generates a context-aware reply you can review and post instantly.",
  },
  {
    q: "Which platforms are supported?",
    a: "Replier works across major social media platforms through our Chrome extension. Browse any supported site and generate replies directly in context.",
  },
  {
    q: "Can I customize the AI's tone and voice?",
    a: "Absolutely. Define custom prompts like 'Act as a social media manager for a tech company' to tailor every response to your brand voice.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes! Install the Chrome extension and get 5 free AI-powered replies—no credit card required.",
  },
  {
    q: "What happens if I exceed my plan limits?",
    a: "Additional generations are billed at just €0.01 each. You only pay for what you use beyond your plan allowance.",
  },
  {
    q: "Is my data secure?",
    a: "We take privacy seriously. Your social media interactions are processed securely and we never store your credentials.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Questions? We've got answers."
          description="Everything you need to know before getting started."
        />

        <div className="mx-auto max-w-2xl space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-colors hover:border-white/12">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--landing-glow-violet))] focus-visible:ring-inset"
                  aria-expanded={open === i}
                >
                  <span className="font-medium text-white">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-white/40 transition-transform duration-300",
                      open === i && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-white/50">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
