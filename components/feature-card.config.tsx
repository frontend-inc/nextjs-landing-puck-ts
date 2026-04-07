import FeatureCard from "@/components/feature-card";

export default {
  name: "Feature Card",
  category: "Cards",
  fields: {
    icon: {
      label: "Remix Icon Name",
      type: "text",
    },
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
  },
  defaultProps: {
    icon: "RiFlashlightLine",
    title: "Feature",
    description: "Description of this feature.",
  },
  render: FeatureCard,
};
