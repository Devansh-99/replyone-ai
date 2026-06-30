import { auth, signIn, signOut } from "@/auth";
import { NavWrapper } from "@/components/landing/nav-wrapper";

export default async function Navigation() {
  const session = await auth();

  async function signInAction() {
    "use server";
    await signIn("google", { redirectTo: "/dashboard" });
  }

  async function signOutAction() {
    "use server";
    await signOut({ redirectTo: "/" });
  }

  return (
    <NavWrapper
      session={session}
      signInAction={signInAction}
      signOutAction={signOutAction}
    />
  );
}
