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
    columns: {
      label: "Footer Columns",
      type: "array",
      arrayFields: {
        title: {
          label: "Column Title",
          type: "text",
        },
        links: {
          label: "Links (JSON)",
          type: "text",
        },
      },
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
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Changelog", href: "#" },
          { label: "Docs", href: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Contact", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
          { label: "Cookies", href: "#" },
        ],
      },
    ],
    copyright: "© 2026 Acme. All rights reserved.",
  },
  render: Footer,
};
