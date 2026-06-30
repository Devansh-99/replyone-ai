import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { stripe, stripePrice } from "@/lib/stripe";
import { checkout } from "@/lib/stripe/action";
import { cn } from "@/lib/utils";
import { PricingFallback } from "@/components/pricing-fallback";

interface PricingProps {
  pathname?: string;
}

export default async function Pricing({ pathname }: PricingProps) {
  const currentPath = pathname || '/dashboard';

  const stripeClient = stripe;
  if (!stripeClient) {
    return <PricingFallback currentPath={currentPath} />;
  }

  const [products, prices] = await Promise.all([
    stripeClient.products.list({
      active: true,
      expand: ["data.default_price"],
    }),
    stripeClient.prices.list({
      active: true,
      type: "recurring"
    })
  ]);

  // Filter for prices with non-null amounts (flat fees)
  const licensedPrices = prices.data.filter(price =>
    price.unit_amount !== null
  );

  // Group licensed prices by productId
  const baseProductPrices = licensedPrices.reduce((acc, price) => {
    const productId = typeof price.product === "string" ? price.product : price.product.id;
    if (!acc[productId]) {
      acc[productId] = price;
    }
    return acc;
  }, {} as Record<string, stripePrice>);

  return (
    <div className={cn(currentPath === "/" && "landing-pricing")}>
    <Card id={currentPath === "/" ? undefined : "pricing"} className={cn(
      currentPath === "/" && "border-white/[0.08] bg-white/[0.03] text-white shadow-none"
    )}>
      {currentPath === '/dashboard' ? (
        <CardHeader>
          <CardTitle>Upgrade Your Plan</CardTitle>
          <CardDescription>Choose the plan that best fits your needs</CardDescription>
        </CardHeader>
      ) : (
        <CardHeader className="container mx-auto px-4 hidden">
          <CardTitle className="text-3xl font-bold text-center mb-4">Choose Your Plan</CardTitle>
          <CardDescription className="text-xl text-muted-foreground text-center mb-12">
            Select the perfect plan for your social media management needs
          </CardDescription>
        </CardHeader>
      )}
      <CardContent className={cn(currentPath==='/' && "container mx-auto px-0", "grid gap-6 md:grid-cols-3")}>
        {[...products.data].reverse().map((product) => {
          const basePrice = baseProductPrices[product.id];
          if (!basePrice) return null;

          return (

          <Card key={product.id} className={cn(
            "flex flex-col",
            product.name === 'Unlimited' ? (currentPath === '/' ? 'landing-shimmer-border border-transparent bg-white/[0.05]' : 'border-primary') : (currentPath === '/' ? 'border-white/[0.08] bg-white/[0.02]' : '')
          )}>
            <CardHeader>
              <CardTitle className={cn(
                product.name === 'Unlimited' && (currentPath === '/' ? 'text-[hsl(var(--landing-glow-cyan))]' : 'text-primary')
              )}>{product.name}</CardTitle>
              <CardDescription className={currentPath === '/' ? 'text-white/60' : ''}>
                <span className={cn("text-3xl font-bold", currentPath === '/' && "text-white")}>€{((basePrice.unit_amount ?? 0)/100).toFixed(2)}</span>
                <span className="text-muted-foreground"> /{basePrice?.recurring?.interval || 'month'}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.marketing_features?.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className={cn(
                      "h-4 w-4 mr-2",
                      product.name === 'Unlimited'
                        ? (currentPath === '/' ? 'text-[hsl(var(--landing-glow-cyan))]' : 'text-primary')
                        : 'text-green-500'
                    )} />
                    <span className="text-sm">
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <form action={checkout} className="w-full">
                <input type="hidden" name="productId" value={product.id} />
                <Button type="submit"
                  className={cn(
                    "w-full",
                    product.name === 'Unlimited' && (currentPath === '/'
                      ? 'bg-white text-[hsl(var(--landing-bg))] hover:bg-white/90'
                      : 'bg-primary hover:bg-primary/90')
                  )}
                >
                  Choose {product.name}
                </Button>
              </form>
            </CardFooter>
          </Card>
        )})}
      </CardContent>
    </Card>
    </div>
  )
}
