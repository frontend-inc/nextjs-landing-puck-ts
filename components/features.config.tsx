import Features from "@/components/features";

export default {
  name: "Features",
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
    content: {
      type: "slot",
    },
  },
  defaultProps: {
    eyebrow: "Features",
    heading: "Engineered for\nexcellence.",
    subheading:
      "Every detail has been considered. Every interaction refined. Built from the ground up to be the tool you've always wanted.",
  },
  render: Features,
};
