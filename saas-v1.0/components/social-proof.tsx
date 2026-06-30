"use client";

import { Reveal } from "./landing/reveal";

const logos = [
  "TechFlow",
  "SocialScale",
  "GrowthLab",
  "EngagePro",
  "BrandPulse",
  "MediaHive",
  "ContentWave",
  "ReachAI",
];

export default function SocialProof() {
  return (
    <section className="relative py-16 border-y border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <p className="mb-10 text-center text-sm uppercase tracking-[0.25em] text-white/35">
            Trusted by teams worldwide
          </p>
        </Reveal>

        {/* Infinite marquee */}
        <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="mx-8 flex shrink-0 items-center gap-2 text-lg font-medium text-white/25 transition-colors hover:text-white/50"
              >
                <div className="h-2 w-2 rounded-full bg-[hsl(var(--landing-glow-violet)/0.5)]" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
