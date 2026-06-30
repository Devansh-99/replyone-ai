import { Suspense } from "react";
import Pricing from "@/components/pricing";
import LandingPricingWrapper from "@/components/landing-pricing";
import { HeroSection } from "@/components/landing/hero-section";
import { Reveal } from "@/components/landing/reveal";

const CHROME_URL =
  "https://chromewebstore.google.com/detail/ai-social-replier-gpt-res/ahfilmopkkfaehndncopogaohdkddjjd";

const tickerItems = [
  "10 free replies daily — no card needed",
  "Works on Chrome, Edge, Opera & Firefox",
  "Neutral · Funny · Flirty · Professional tones",
  "One click → reply inserted directly",
  "Context-aware — reads the tweet you're replying to",
];

const featureCards = [
  {
    title: "One-click replies",
    description:
      "Generate a relevant reply instantly, right inside X — no tab switching, no copy-paste workflow.",
  },
  {
    title: "Pick your tone",
    description:
      "Neutral, funny, professional, flirty — select the mood that fits the moment.",
  },
  {
    title: "Context-aware AI",
    description:
      "Replies are built from what's on screen — not generic templates. The AI reads the tweet before it responds.",
  },
  {
    title: "Privacy-first",
    description:
      "Nothing is posted without your click. No auto-posting, no scraping, no data sold. Ever.",
  },
  {
    title: "Unlimited on PRO",
    description:
      "Free plan gives 10 replies per day. PRO unlocks unlimited generations and priority speed.",
  },
  {
    title: "Multi-browser",
    description:
      "Chrome, Edge, Opera, Firefox — install once, works everywhere. One extension, four browsers.",
  },
];

const steps = [
  {
    title: "Install the extension",
    description:
      "Add Reply X AI to your browser from the Chrome Web Store. Free, instant, no account needed to start.",
  },
  {
    title: "Open X (Twitter)",
    description:
      "Navigate to any post. Open the reply box as you normally would — nothing changes.",
  },
  {
    title: "Pick your tone",
    description:
      "Choose Neutral, Funny, Professional, or Flirty. The AI adapts its style to match.",
  },
  {
    title: "Generate & post",
    description:
      "Click Generate, review the suggestion, insert it into the reply box, and post. Done.",
  },
];

const testimonials = [
  {
    quote:
      "I use this every morning for my tech commentary posts. The professional tone is spot-on — people can't tell it's AI-assisted. My reply rate doubled.",
    author: "Marcus R.",
    handle: "@marcus_builds",
    tag: "Dev",
  },
  {
    quote:
      "The funny tone is genuinely funny — not cringe AI-funny. I&apos;ve had people quote-retweet my replies thinking I was witty on my own. Highly recommend.",
    author: "Jess L.",
    handle: "@jessloomis",
    tag: "Creator",
  },
  {
    quote:
      "As a brand manager handling 4 accounts, this saves me at least 2 hours per week. The PRO plan pays for itself in the first day.",
    author: "Alex N.",
    handle: "@alexnova_mkt",
    tag: "Marketing",
  },
];

const useCases = [
  {
    emoji: "🧑‍💻",
    title: "Developers & Founders",
    description:
      "Build in public without spending an hour crafting each reply. Engage with your community faster, stay technical and credible.",
  },
  {
    emoji: "🎨",
    title: "Content Creators",
    description:
      "Reply to every comment with the right energy. Funny, warm, or professional — match the vibe of every conversation effortlessly.",
  },
  {
    emoji: "📈",
    title: "Growth Marketers",
    description:
      "Scale your reply-based growth strategy. Reach more conversations, maintain brand voice, and track engagement — all without burning out.",
  },
  {
    emoji: "🏢",
    title: "Social Media Managers",
    description:
      "Handle multiple brand accounts at once. Consistent tone, faster turnaround, and no more staring at a blank reply box.",
  },
];

const comparisonRows = [
  {
    label: "Works inside X (no tab switch)",
    replyX: true,
    manual: false,
    genericAI: false,
  },
  {
    label: "AI-generated in 1 click",
    replyX: true,
    manual: false,
    genericAI: false,
  },
  {
    label: "Tone selection (4 modes)",
    replyX: true,
    manual: false,
    genericAI: false,
  },
  {
    label: "Context-aware (reads the tweet)",
    replyX: true,
    manual: false,
    genericAI: false,
  },
  {
    label: "Free plan available",
    replyX: true,
    manual: true,
    genericAI: false,
  },
];

export default function LandingPage() {
  return (
    <div className="landing relative min-h-screen overflow-x-hidden">
      <HeroSection />
      <TickerSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ReviewsSection />
      <UseCasesSection />
      <ComparisonSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}


function TickerSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#08080D] py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 py-3 px-4 backdrop-blur-xl">
          <p className="sr-only">Trusted by thousands with fast replies and multi-browser support.</p>
          <div className="animate-marquee flex min-w-full items-center gap-8 whitespace-nowrap text-sm font-semibold text-white/70" aria-hidden="true">
            {tickerItems.concat(tickerItems).map((item, index) => (
              <div key={`${item}-${index}`} className="inline-flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#C6F135]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="relative py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 inline-flex rounded-full border border-[#00E5C8] bg-[#00E5C8]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#00E5C8]">
            Features
          </span>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            What makes Reply X AI feel effortless.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/65">
            A polished experience for reply generation, tone selection, and posting directly inside X.
          </p>
        </div>
        <div className="grid gap-6 xl:grid-cols-3 xl:auto-rows-fr">
          {featureCards.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 80}>
              <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0F0F13]/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition duration-500 hover:-translate-y-1 hover:border-white/15">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E5C8]/10 via-transparent to-[#A78BFA]/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative z-10 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-[#00E5C8]">
                    <span className="text-lg">•</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm leading-7 text-white/60">{feature.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-title" className="relative scroll-mt-28 py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 inline-flex rounded-full border border-[#00E5C8] bg-[#00E5C8]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#00E5C8]">
            Process
          </span>
          <h2 id="how-it-works-title" className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            From install to reply in under a minute.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/65">
            The fastest reply workflow we&apos;ve built: install, open X, choose tone, and send.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80}>
              <div className="rounded-[32px] border border-white/10 bg-[#0F0F13]/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition hover:-translate-y-1">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0F0F13] text-lg font-semibold text-[#C6F135]">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-7 text-white/60">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-[#00E5C8] bg-[#00E5C8]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#00E5C8]">
            Reviews
          </span>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            What users say.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/60">
            Real feedback from creators, marketers, and builders who use Reply X AI every day.
          </p>
        </div>
        <div className="mb-8 rounded-[28px] border border-white/10 bg-[#0F0F13] p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#C6F135]/30 bg-[#C6F135]/12 text-[#C6F135]">
                •
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#C6F135]">Strong → 121</p>
                <p className="text-base text-white/75">Live activity strip</p>
              </div>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#00E5C8]">
              Live
            </div>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 80}>
              <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0F0F13] p-6 transition hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C6F135]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex gap-1 text-[#C6F135]">★★★★★</div>
                  <p className="mb-6 text-base leading-8 text-white/75">“{testimonial.quote}”</p>
                  <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-white/40">{testimonial.handle}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#C6F135]">
                      {testimonial.tag}
                    </span>
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

function UseCasesSection() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-[#00E5C8] bg-[#00E5C8]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#00E5C8]">
            Who it&apos;s for
          </span>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Built for anyone serious about X.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/60">
            Whether you post daily or manage dozens of accounts — Reply X AI fits your workflow.
          </p>
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {useCases.map((useCase, index) => (
            <Reveal key={useCase.title} delay={index * 80}>
              <div className="flex min-h-[220px] flex-col justify-between rounded-[28px] border border-white/10 bg-[#0F0F13] p-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-2xl">
                  {useCase.emoji}
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-white">{useCase.title}</h3>
                  <p className="text-sm leading-7 text-white/60">{useCase.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="relative scroll-mt-28 py-28" aria-labelledby="comparison-title">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-[#00E5C8] bg-[#00E5C8]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#00E5C8]">
            Comparison
          </span>
          <h2 id="comparison-title" className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Why Reply X AI wins every time.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/60">
            See how we stack up against doing it manually or using generic AI tools.
          </p>
        </div>
        <div className="overflow-x-auto rounded-[32px] border border-white/10 bg-[#0F0F13]">
          <table className="min-w-[720px] border-collapse text-sm text-white/60">
            <thead>
              <tr className="bg-[#16161C] text-left text-white/80">
                <th className="border-b border-white/10 p-6">Feature</th>
                <th className="border-b border-white/10 p-6 text-center text-[#C6F135]">Reply X AI</th>
                <th className="border-b border-white/10 p-6 text-center">Manual typing</th>
                <th className="border-b border-white/10 p-6 text-center">Generic AI</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-t border-white/10 even:bg-white/5">
                  <th scope="row" className="bg-[#0F0F13] p-6 text-left font-medium text-white/90">
                    {row.label}
                  </th>
                  <td className="bg-[#0F0F13] p-6 text-center">
                    <span aria-hidden="true" className="text-[#C6F135]">✓</span>
                    <span className="sr-only">{row.replyX ? "Yes" : "No"}</span>
                  </td>
                  <td className="bg-[#0F0F13] p-6 text-center">
                    <span aria-hidden="true" className={row.manual ? "text-[#C6F135]" : "text-red-400"}>
                      {row.manual ? "✓" : "✗"}
                    </span>
                    <span className="sr-only">{row.manual ? "Yes" : "No"}</span>
                  </td>
                  <td className="bg-[#0F0F13] p-6 text-center">
                    <span aria-hidden="true" className={row.genericAI ? "text-[#C6F135]" : "text-red-400"}>
                      {row.genericAI ? "✓" : "✗"}
                    </span>
                    <span className="sr-only">{row.genericAI ? "Yes" : "No"}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative scroll-mt-28 py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-[#00E5C8] bg-[#00E5C8]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#00E5C8]">
            Pricing
          </span>
          <h2 id="pricing-title" className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Start free. Scale when ready.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/60">
            No credit card required to get started. Upgrade when you need more.
          </p>
        </div>
        <Suspense
          fallback={
            <LandingPricingWrapper>
              <div className="rounded-3xl bg-white/5 p-8 text-center text-sm text-white/60">Loading pricing…</div>
            </LandingPricingWrapper>
          }
        >
          <LandingPricingWrapper>
            <Pricing pathname="/" />
          </LandingPricingWrapper>
        </Suspense>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative scroll-mt-28 py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-[#00E5C8] bg-[#00E5C8]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#00E5C8]">
            FAQ
          </span>
          <h2 id="faq-title" className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Quick answers.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/60">
            Still have questions? Join our Discord — we reply fast.
          </p>
        </div>
        <div className="space-y-4">
          {[
            {
              question: "Does it post replies automatically?",
              answer:
                "Not unless you tell it to. Reply X AI suggests replies inside X so you can review and post them manually.",
            },
            {
              question: "Is it safe to use?",
              answer:
                "Yes. The extension is built with privacy-first principles and it never posts without your confirmation.",
            },
            {
              question: "Which browsers are supported?",
              answer:
                "Chrome, Edge, Opera, and Firefox are all supported through the extension.",
            },
            {
              question: "Can I choose a tone or style?",
              answer:
                "Yes. Pick Neutral, Funny, Professional, or Flirty and the AI will match your preferred voice.",
            },
            {
              question: "How does the free plan work?",
              answer:
                "The free plan gives you 10 replies per day, automatically refreshed every 24 hours.",
            },
            {
              question: "What data does it collect?",
              answer:
                "Only what’s needed to build your reply. We do not scrape or sell your data.",
            },
          ].map((faq, index) => (
            <Reveal key={faq.question} delay={index * 60}>
              <details className="rounded-[28px] border border-white/10 bg-[#0F0F13] p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-white/60">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(198,241,53,0.07),transparent_60%),radial-gradient(circle_at_10%_60%,_rgba(0,229,200,0.05),transparent_60%),_#0F0F13] p-10 sm:p-14 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)]">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-white/60">Ready to reply faster?</p>
              <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                Install Reply X AI in your browser and generate your first smart reply in under 60 seconds.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                Install the extension now and start turning conversations into replies without ever leaving X. It’s fast, polished, and free to get started.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={CHROME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[#C6F135] px-6 py-4 text-sm font-semibold text-[#08080A] shadow-[0_8px_28px_rgba(198,241,53,0.2)] text-center"
              >
                Install extension →
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white text-center"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
