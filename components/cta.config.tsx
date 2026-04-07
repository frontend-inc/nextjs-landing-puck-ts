import Cta from "@/components/cta";

export default {
  name: "CTA",
  category: "Sections",
  fields: {
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
    placeholder: {
      label: "Email Placeholder",
      type: "text",
    },
    buttonLabel: {
      label: "Button Label",
      type: "text",
      contentEditable: true,
    },
    disclaimer: {
      label: "Disclaimer Text",
      type: "text",
      contentEditable: true,
    },
  },
  defaultProps: {
    heading: "Start building today",
    subheading:
      "Join thousands of teams already using Acme to ship faster. Get early access and exclusive updates.",
    placeholder: "Enter your email",
    buttonLabel: "Subscribe",
    disclaimer: "Free forever for small teams. No credit card required.",
  },
  render: Cta,
};
