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
    socials: {
      label: "Social Links",
      type: "array",
      arrayFields: {
        icon: {
          label: "Icon",
          type: "text",
        },
        href: {
          label: "URL",
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
    brand: "ACME",
    tagline: "Building the future of work, one tool at a time.",
    content: [
      {
        type: "FooterLinks",
        props: {
          id: "FooterLinks-default-001",
          title: "Product",
          links: [
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "Changelog", href: "#" },
            { label: "Docs", href: "#" },
          ],
        },
      },
      {
        type: "FooterLinks",
        props: {
          id: "FooterLinks-default-002",
          title: "Company",
          links: [
            { label: "About", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Contact", href: "#" },
          ],
        },
      },
      {
        type: "FooterLinks",
        props: {
          id: "FooterLinks-default-003",
          title: "Legal",
          links: [
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Cookies", href: "#" },
          ],
        },
      },
    ],
    socials: [
      { icon: "RiTwitterXFill", href: "#" },
      { icon: "RiGithubFill", href: "#" },
      { icon: "RiLinkedinFill", href: "#" },
      { icon: "RiInstagramFill", href: "#" },
    ],
    copyright: "© 2026 Acme. All rights reserved.",
  },
  render: Footer,
};
