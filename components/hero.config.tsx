import Hero from "@/components/hero";

export default {
  name: "Hero",
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
    headingAccent: {
      label: "Heading Accent (gradient text)",
      type: "text",
      contentEditable: true,
    },
    subheading: {
      label: "Subheading",
      type: "text",
      contentEditable: true,
    },
    primaryCtaLabel: {
      label: "Primary CTA Label",
      type: "text",
      contentEditable: true,
    },
    primaryCtaHref: {
      label: "Primary CTA URL",
      type: "text",
    },
    secondaryCtaLabel: {
      label: "Secondary CTA Label",
      type: "text",
      contentEditable: true,
    },
    secondaryCtaHref: {
      label: "Secondary CTA URL",
      type: "text",
    },
    image: {
      label: "Hero Image URL",
      type: "text",
    },
  },
  defaultProps: {
    eyebrow: "Introducing Acme",
    heading: "The future of",
    headingAccent: "productivity.",
    subheading:
      "A radically new way to build, collaborate, and ship. Designed for teams who refuse to compromise.",
    primaryCtaLabel: "Get Started Free",
    primaryCtaHref: "#cta",
    secondaryCtaLabel: "Watch the film",
    secondaryCtaHref: "#features",
    image: "",
  },
  render: Hero,
};
