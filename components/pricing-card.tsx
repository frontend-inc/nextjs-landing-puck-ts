import { Button } from "@/components/ui/button";
import { RiCheckLine } from "@remixicon/react";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  popular: boolean;
}

export default function PricingCard({
  name = "Pro",
  price = "$29",
  period = "/month",
  description = "For growing teams.",
  features = ["Feature 1", "Feature 2", "Feature 3"],
  ctaLabel = "Get Started",
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-500 ${
        popular
          ? "bg-foreground text-background shadow-2xl shadow-foreground/10 ring-1 ring-foreground"
          : "bg-background ring-1 ring-border hover:ring-border/80 hover:shadow-xl hover:shadow-primary/[0.03]"
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-8 rounded-full bg-muted px-3 py-0.5 text-[11px] font-medium tracking-wide text-muted-foreground">
          Most Popular
        </span>
      )}
      <div className="mb-8">
        <p className={`text-sm font-medium ${popular ? "text-background/60" : "text-muted-foreground"}`}>
          {name}
        </p>
        <div className="mt-3 flex items-baseline gap-1">
          <span className={`font-heading text-5xl font-bold tracking-tight ${popular ? "text-background" : "text-foreground"}`}>
            {price}
          </span>
          <span className={`text-sm ${popular ? "text-background/50" : "text-muted-foreground"}`}>
            {period}
          </span>
        </div>
        <p className={`mt-3 text-sm ${popular ? "text-background/60" : "text-muted-foreground"}`}>
          {description}
        </p>
      </div>
      <ul className="mb-10 flex-1 space-y-3.5">
        {features.map((feature) => (
          <li
            key={feature}
            className={`flex items-start gap-2.5 text-[14px] ${
              popular ? "text-background/75" : "text-muted-foreground"
            }`}
          >
            <RiCheckLine className={`mt-0.5 size-4 shrink-0 ${popular ? "text-background/50" : "text-foreground/30"}`} />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className={`w-full rounded-full ${
          popular
            ? "bg-background text-foreground hover:bg-background/90"
            : ""
        }`}
        variant={popular ? "default" : "outline"}
      >
        {ctaLabel}
      </Button>
    </div>
  );
}
