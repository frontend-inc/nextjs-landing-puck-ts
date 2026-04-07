import Navbar from "@/components/navbar";

export default {
  name: "Navbar",
  category: "Layout",
  fields: {
    brand: {
      label: "Brand Name",
      type: "text",
      contentEditable: true,
    },
    links: {
      label: "Navigation Links",
      type: "array",
      arrayFields: {
        label: {
          label: "Label",
          type: "text",
        },
        href: {
          label: "URL",
          type: "text",
        },
      },
    },
    ctaLabel: {
      label: "CTA Button Label",
      type: "text",
      contentEditable: true,
    },
    ctaHref: {
      label: "CTA Button URL",
      type: "text",
    },
  },
  defaultProps: {
    brand: "Acme",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Team", href: "#team" },
    ],
    ctaLabel: "Get Started",
    ctaHref: "#cta",
  },
  render: Navbar,
};
