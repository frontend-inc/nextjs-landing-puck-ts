import Pricing from "@/components/pricing";

export default {
  name: "Pricing",
  category: "Sections",
  fields: {
    eyebrow: {
      label: "Eyebrow Text",
      type: "text",
      contentEditable: true,
    },
    heading: {
      label: "Heading",
      type: "text",
      contentEditable: true,
    },
    subheading: {
      label: "Subheading",
      type: "text",
      contentEditable: true,
    },
    tiers: {
      label: "Pricing Tiers",
      type: "array",
      arrayFields: {
        name: {
          label: "Plan Name",
          type: "text",
        },
        price: {
          label: "Price",
          type: "text",
        },
        period: {
          label: "Period",
          type: "text",
        },
        description: {
          label: "Description",
          type: "text",
        },
        features: {
          label: "Features (comma-separated)",
          type: "text",
        },
        ctaLabel: {
          label: "CTA Label",
          type: "text",
        },
        popular: {
          label: "Popular",
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
    },
  },
  defaultProps: {
    eyebrow: "Pricing",
    heading: "Choose your plan.",
    subheading: "Start free. Upgrade when you're ready. No hidden fees, cancel anytime.",
    tiers: [
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
  },
  render: Pricing,
};
