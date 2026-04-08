import FooterLinks from "@/components/footer-links";

export default {
  name: "FooterLinks",
  category: "Layout",
  fields: {
    title: {
      label: "Column Title",
      type: "text",
      contentEditable: true,
    },
    links: {
      label: "Links",
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
  },
  defaultProps: {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
      { label: "Docs", href: "#" },
    ],
  },
  render: FooterLinks,
};
