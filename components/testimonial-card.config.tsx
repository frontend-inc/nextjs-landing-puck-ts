import TestimonialCard from "@/components/testimonial-card";

export default {
  name: "Testimonial Card",
  category: "Cards",
  fields: {
    quote: {
      label: "Quote",
      type: "text",
      contentEditable: true,
    },
    name: {
      label: "Name",
      type: "text",
      contentEditable: true,
    },
    role: {
      label: "Role",
      type: "text",
      contentEditable: true,
    },
    avatar: {
      label: "Avatar URL",
      type: "text",
    },
    rating: {
      label: "Star Rating",
      type: "number",
      min: 1,
      max: 5,
    },
  },
  defaultProps: {
    quote: "This product has transformed the way we work.",
    name: "Jane Doe",
    role: "CEO, Acme Inc.",
    avatar: "https://placehold.co/80x80/1e293b/e2e8f0?text=JD",
    rating: 5,
  },
  render: TestimonialCard,
};
