"use client";

import { usePathname } from "next/navigation";
import { LandingNav } from "./nav-client";
import type { Session } from "next-auth";

interface NavWrapperProps {
  session: Session | null;
  signInAction: () => Promise<void>;
  signOutAction: () => Promise<void>;
}

export function NavWrapper({
  session,
  signInAction,
  signOutAction,
}: NavWrapperProps) {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <LandingNav
      session={session}
      signInAction={signInAction}
      signOutAction={signOutAction}
      isLanding={isLanding}
    />
  );
}
