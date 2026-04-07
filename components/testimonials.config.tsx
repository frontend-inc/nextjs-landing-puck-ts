import Testimonials from "@/components/testimonials";

export default {
  name: "Testimonials",
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
    eyebrow: "Testimonials",
    heading: "Loved by the people\nwho use it most.",
    subheading: "Don't just take our word for it.",
  },
  render: Testimonials,
};
