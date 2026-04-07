import ContentCard from "@/components/content-card";

export default {
  name: "Card",
  category: "Cards",
  fields: {
    title: {
      label: "Title",
      type: "text",
      contentEditable: true,
    },
    description: {
      label: "Description",
      type: "text",
      contentEditable: true,
    },
    image: {
      label: "Image URL",
      type: "text",
    },
    ctaLabel: {
      label: "CTA Label",
      type: "text",
      contentEditable: true,
    },
    ctaHref: {
      label: "CTA URL",
      type: "text",
    },
  },
  defaultProps: {
    title: "Card Title",
    description: "A brief description of this card's content.",
    image: "https://placehold.co/400x200/0f172a/94a3b8?text=Image",
    ctaLabel: "Learn More",
    ctaHref: "#",
  },
  render: ContentCard,
};
