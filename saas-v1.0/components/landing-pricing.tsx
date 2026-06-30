"use client";

import { Reveal } from "./landing/reveal";
import { SectionHeading } from "./landing/section-heading";

interface LandingPricingWrapperProps {
  children: React.ReactNode;
}

export default function LandingPricingWrapper({
  children,
}: LandingPricingWrapperProps) {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="Pricing"
          title="Choose your plan"
          description="Select the perfect plan for your social media management needs. Upgrade or downgrade anytime."
        />
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
