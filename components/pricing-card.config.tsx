import PricingCard from "@/components/pricing-card";

export default {
  name: "Pricing Card",
  category: "Cards",
  fields: {
    name: {
      label: "Plan Name",
      type: "text",
      contentEditable: true,
    },
    price: {
      label: "Price",
      type: "text",
      contentEditable: true,
    },
    period: {
      label: "Period",
      type: "text",
    },
    description: {
      label: "Description",
      type: "text",
      contentEditable: true,
    },
    features: {
      label: "Features",
      type: "array",
      arrayFields: {
        feature: {
          label: "Feature",
          type: "text",
        },
      },
    },
    ctaLabel: {
      label: "CTA Label",
      type: "text",
      contentEditable: true,
    },
    popular: {
      label: "Most Popular",
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
  },
  defaultProps: {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing teams.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    ctaLabel: "Get Started",
    popular: false,
  },
  render: PricingCard,
};
