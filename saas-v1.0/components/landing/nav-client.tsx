"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LayoutDashboard, LogIn, LogOut, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Session } from "next-auth";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it Works" },
  { href: "/#demo", label: "Demo" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

interface LandingNavProps {
  session: Session | null;
  signInAction: () => Promise<void>;
  signOutAction: () => Promise<void>;
  isLanding?: boolean;
}

export function LandingNav({
  session,
  signInAction,
  signOutAction,
  isLanding = false,
}: LandingNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerClass = isLanding
    ? cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "landing-glass-strong border-b border-white/10 py-3"
          : "bg-transparent py-5"
      )
    : "sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4";

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
          <Link
            href="/"
            className={cn(
              "group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-lg",
              isLanding
                ? "focus-visible:ring-[hsl(var(--landing-glow-violet))] focus-visible:ring-offset-[hsl(var(--landing-bg))]"
                : "focus-visible:ring-ring"
            )}
          >
            <div
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105",
                isLanding
                  ? "bg-gradient-to-br from-[hsl(var(--landing-glow-violet))] to-[hsl(var(--landing-glow-cyan))]"
                  : "bg-primary"
              )}
            >
              <svg
                className="h-4 w-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <span
              className={cn(
                "text-xl font-semibold tracking-tight",
                isLanding ? "text-white" : ""
              )}
            >
              Replier
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 rounded-lg",
                  isLanding
                    ? "text-white/55 hover:text-white focus-visible:ring-[hsl(var(--landing-glow-violet))] after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-gradient-to-r after:from-transparent after:via-[hsl(var(--landing-glow-cyan))] after:to-transparent after:transition-all hover:after:w-full"
                    : "text-muted-foreground hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth buttons */}
          <div className="hidden items-center gap-3 md:flex">
            {session?.user ? (
              <>
                <Link
                  href="/dashboard"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all focus-visible:outline-none focus-visible:ring-2",
                    isLanding
                      ? "text-white/70 hover:text-white hover:bg-white/10 focus-visible:ring-[hsl(var(--landing-glow-violet))]"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <form action={signOutAction}>
                  <button
                    type="submit"
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all focus-visible:outline-none focus-visible:ring-2",
                      isLanding
                        ? "text-white/70 hover:text-white hover:bg-white/10 focus-visible:ring-[hsl(var(--landing-glow-violet))]"
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </form>
              </>
            ) : (
              <form action={signInAction}>
                <button
                  type="submit"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2",
                    isLanding
                      ? "bg-white text-[hsl(var(--landing-bg))] hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_hsl(var(--landing-glow-violet)/0.5)] focus-visible:ring-[hsl(var(--landing-glow-violet))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--landing-bg))]"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </button>
              </form>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl md:hidden focus-visible:outline-none focus-visible:ring-2",
              isLanding
                ? "landing-glass text-white focus-visible:ring-[hsl(var(--landing-glow-violet))]"
                : "border focus-visible:ring-ring"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          mobileOpen ? "visible" : "invisible"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className={cn(
            "absolute right-0 top-0 flex h-full w-[min(320px,85vw)] flex-col gap-2 p-6 pt-20 transition-transform duration-500 ease-out",
            isLanding ? "landing-glass-strong" : "bg-background border-l",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "rounded-xl px-4 py-3 text-base transition-all focus-visible:outline-none focus-visible:ring-2",
                isLanding
                  ? "text-white/70 hover:bg-white/10 hover:text-white focus-visible:ring-[hsl(var(--landing-glow-violet))]"
                  : "text-muted-foreground hover:bg-muted hover:text-primary focus-visible:ring-ring"
              )}
              style={{
                transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-auto border-t border-white/10 pt-4">
            {session?.user ? (
              <div className="space-y-2">
                <Link
                  href="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-white/70 hover:bg-white/10"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <form action={signOutAction}>
                  <button
                    type="submit"
                    className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-white/70 hover:bg-white/10"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </form>
              </div>
            ) : (
              <form action={signInAction}>
                <button
                  type="submit"
                  className={cn(
                    "w-full rounded-full py-3 text-sm font-medium",
                    isLanding
                      ? "bg-white text-[hsl(var(--landing-bg))]"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  <LogIn className="mr-2 inline h-4 w-4" />
                  Login with Google
                </button>
              </form>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
