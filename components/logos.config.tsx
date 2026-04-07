import Logos from "@/components/logos";

export default {
  name: "Logos",
  category: "Sections",
  fields: {
    heading: {
      label: "Heading",
      type: "text",
      contentEditable: true,
    },
    logos: {
      label: "Logo List",
      type: "array",
      arrayFields: {
        name: {
          label: "Company Name",
          type: "text",
        },
        icon: {
          label: "Remix Icon Name",
          type: "text",
        },
      },
      getItemSummary: (item: { name: string }) => item.name || "Logo",
    },
  },
  defaultProps: {
    heading: "Trusted by teams at the world's best companies",
    logos: [
      { name: "Google", icon: "RiGoogleFill" },
      { name: "Apple", icon: "RiAppleFill" },
      { name: "GitHub", icon: "RiGithubFill" },
      { name: "Slack", icon: "RiSlackFill" },
      { name: "Twitter", icon: "RiTwitterXFill" },
      { name: "Amazon", icon: "RiAmazonFill" },
    ],
  },
  render: Logos,
};
