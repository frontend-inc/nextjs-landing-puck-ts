import PricingCard from "@/components/pricing-card";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  popular: boolean;
}

interface PricingProps {
  eyebrow: string;
  heading: string;
  subheading: string;
  tiers: PricingTier[];
}

export default function Pricing({
  eyebrow = "Pricing",
  heading = "Choose your plan.",
  subheading = "Start free. Upgrade when you're ready. No hidden fees, cancel anytime.",
  tiers = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for individuals and small projects.",
      features: ["Up to 3 projects", "Basic analytics", "Email support", "1 GB storage"],
      ctaLabel: "Start Free Trial",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For growing teams that need more power.",
      features: ["Unlimited projects", "Advanced analytics", "Priority support", "10 GB storage", "Custom integrations", "Team collaboration"],
      ctaLabel: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations with custom needs.",
      features: ["Everything in Pro", "Dedicated account manager", "Custom SLA", "Unlimited storage", "SSO & SAML", "Audit logs"],
      ctaLabel: "Contact Sales",
      popular: false,
    },
  ],
}: PricingProps) {
  return (
    <section id="pricing" className="bg-muted/40 py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
            {eyebrow}
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
            {heading}
          </h2>
          <p className="mt-5 text-[17px] text-muted-foreground">
            {subheading}
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
