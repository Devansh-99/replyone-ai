"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "./hooks/use-reduced-motion";

const loopSteps = [
  { key: "comment", label: "New reply request received", duration: 1200 },
  { key: "analyze", label: "AI is analyzing the conversation", duration: 1400 },
  { key: "thinking", label: "Thinking…", duration: 1600 },
  { key: "typing", label: "Typing reply" },
  { key: "generated", label: "Reply generated" },
  { key: "inserted", label: "Inserted into reply box" },
  { key: "success", label: "Success!" },
];

const sampleReply = "This update looks great — let me share it with the team and follow up with a cleaner version.";

export function HeroPreviewCard() {
  const [stepIndex, setStepIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  const step = loopSteps[stepIndex];
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!step) return;
    if (reduced) {
      setStepIndex(loopSteps.findIndex((item) => item.key === "generated"));
      setTypedText(sampleReply);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    let typingTimer: ReturnType<typeof setInterval>;

    if (step.key === "typing") {
      setTypedText("");
      const chars = sampleReply.split("");
      let index = 0;
      typingTimer = setInterval(() => {
        setTypedText((prev) => prev + chars[index]);
        index += 1;
        if (index >= chars.length) {
          clearInterval(typingTimer);
          timer = setTimeout(() => setStepIndex((prev) => (prev + 1) % loopSteps.length), 700);
        }
      }, 25);
    } else {
      const delay = step.duration || 1400;
      timer = setTimeout(() => {
        setStepIndex((prev) => (prev + 1) % loopSteps.length);
      }, delay);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(typingTimer);
    };
  }, [step, reduced]);

  const progress = Math.min((stepIndex / (loopSteps.length - 1)) * 100, 100);

  return (
    <div className="landing-preview-card relative mx-auto max-w-[520px] rounded-[36px] border border-white/10 bg-[#0F0F13]/95 p-6 shadow-[0_40px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#C6F135]/20 to-transparent blur-3xl" />
      <div className="relative space-y-6">
        <div className="flex items-center justify-between rounded-[28px] border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="h-3.5 w-3.5 rounded-full bg-[#FF5F57] shadow-[0_0_16px_rgba(255,95,87,0.25)]" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#FFBD2E] shadow-[0_0_16px_rgba(255,189,46,0.2)]" />
            <span className="h-3.5 w-3.5 rounded-full bg-[#28CA41] shadow-[0_0_16px_rgba(40,202,65,0.2)]" />
            <span className="text-xs uppercase tracking-[0.22em] text-white/40">Live demo</span>
          </div>
          <span className="rounded-full border border-white/10 bg-[#C6F135]/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#C6F135]">
            xAI
          </span>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-[#0F0F13] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="text-xs uppercase tracking-[0.22em] text-white/40">AI suggestion</span>
            <span className="rounded-full bg-[#C6F135]/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#C6F135]">
              {step.label}
            </span>
          </div>
          <div
            className="mb-4 min-h-[136px] rounded-[26px] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/75 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] transition-all duration-500"
            role="status"
            aria-live="polite"
          >
            {step.key === "typing" ? (
              <div className="break-words">
                {typedText}
                <span className="inline-block h-5 w-1 animate-blink bg-white/80 align-middle ml-1" />
              </div>
            ) : (
              <p className="text-white/70">
                {step.key === "generated"
                  ? sampleReply
                  : "The assistant is working on a reply based on your current conversation context."}
              </p>
            )}
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#C6F135] via-[#00E5C8] to-[#A78BFA] transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/50">Current tone</p>
            <p className="mt-3 text-2xl font-semibold text-white">Flirty</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/50">Speed mode</p>
            <p className="mt-3 text-2xl font-semibold text-white">Instant</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:-translate-y-0.5 hover:bg-white/10"
            disabled
          >
            Regenerate
          </button>
          <button className="rounded-lg bg-[#C6F135] px-4 py-2 text-sm font-semibold text-[#08080A] shadow-[0_18px_40px_rgba(198,241,53,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(198,241,53,0.32)]">
            Insert reply
          </button>
        </div>
      </div>
    </div>
  );
}
