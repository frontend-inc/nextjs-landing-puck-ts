import Footer from "@/components/footer";

export default {
  name: "Footer",
  category: "Layout",
  fields: {
    brand: {
      label: "Brand Name",
      type: "text",
      contentEditable: true,
    },
    tagline: {
      label: "Tagline",
      type: "text",
      contentEditable: true,
    },
    content: {
      type: "slot",
    },
    copyright: {
      label: "Copyright",
      type: "text",
      contentEditable: true,
    },
  },
  defaultProps: {
    brand: "Acme",
    tagline: "Building the future of work, one tool at a time.",
    copyright: "© 2026 Acme. All rights reserved.",
  },
  render: Footer,
};
