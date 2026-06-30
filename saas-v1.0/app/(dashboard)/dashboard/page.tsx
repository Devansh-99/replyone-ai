import { auth } from "@/auth";
import { stripe} from "@/lib/stripe"
import Welcome from "@/components/welcome";
import Subscription from "@/components/subscription";
import Usage from "@/components/usage";
import Portal from "@/components/portal";
import Pricing from "@/components/pricing";
import { Suspense } from "react";
import PricingSkeleton from "@/components/pricing-skeleton";
import PortalSkeleton from "@/components/portal-skeleton";
import SubscriptionSkeleton from "@/components/subscription-skeleton";
import UsageSkeleton from "@/components/usage-skeleton";
import WelcomeSkeleton from "@/components/welcome-skeleton";

export default async function Dashboard() {
  const session = await auth();

  if (!stripe) {
    return (
      <main className="container mx-auto p-4 max-w-3xl">
        <div className="rounded-3xl border border-yellow-300/20 bg-yellow-500/10 p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">Stripe is not configured</h1>
          <p className="mt-2 text-sm text-slate-700/90">
            Billing is unavailable while Stripe is disabled. Set a valid STRIPE_SECRET_KEY in your local environment and restart the dev server.
          </p>
        </div>
      </main>
    );
  }

  const stripeClient = stripe!;

  const customer = await stripeClient.customers.list({
    email: session?.user?.email || undefined,
    expand: ['data.subscriptions'],
  }).then((res) => res.data[0]);

  const subscription = customer?.subscriptions?.data[0];

  return (
    <main className="container mx-auto p-4 max-w-3xl">
      <Suspense fallback={<WelcomeSkeleton />}>
        <Welcome />
      </Suspense>

      <div className="grid gap-6 md:grid-cols-2">
        <Suspense fallback={<SubscriptionSkeleton />}>
          <Subscription />
        </Suspense>
        <Suspense fallback={<UsageSkeleton />}>
          <Usage />
        </Suspense>
      </div>
      <div className="mt-6">
        {subscription ? (
          <Suspense fallback={<PortalSkeleton />}>
            <Portal />
          </Suspense>
        ) : (
          <Suspense fallback={<PricingSkeleton />}>
            <Pricing />
          </Suspense>
        )}
      </div>
    </main>
  );
}
