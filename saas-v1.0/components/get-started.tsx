"use client";

import { MagneticButton } from "./landing/magnetic-button";
import { Reveal } from "./landing/reveal";
import { ArrowRight, Chrome } from "lucide-react";

const CHROME_URL =
  "https://chromewebstore.google.com/detail/ai-social-replier-gpt-res/ahfilmopkkfaehndncopogaohdkddjjd";

export default function GetStarted() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl landing-shimmer-border">
            <div className="relative rounded-[22px] bg-gradient-to-br from-[hsl(var(--landing-glow-violet)/0.15)] via-[hsl(var(--landing-surface))] to-[hsl(var(--landing-glow-cyan)/0.1)] px-8 py-16 text-center sm:px-16 sm:py-20">
              {/* Background glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--landing-glow-violet)/0.12),transparent_70%)]" />

              <div className="relative">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Ready to transform your
                  <br />
                  <span className="landing-gradient-text">social media strategy?</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg text-white/55">
                  Join thousands of teams saving time and boosting engagement
                  with Replier.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <MagneticButton href={CHROME_URL} variant="primary" external>
                    <Chrome className="h-4 w-4" />
                    Get Started Now
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                  <MagneticButton href="/#pricing" variant="ghost">
                    View Pricing
                  </MagneticButton>
                </div>
                <p className="mt-5 text-sm text-white/35">
                  No credit card required. 5 free AI-powered replies with the
                  Chrome extension.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
