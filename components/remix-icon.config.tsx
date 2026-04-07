import RemixIcon from "@/components/remix-icon";

export default {
  name: "Remix Icon",
  category: "Elements",
  fields: {
    name: {
      label: "Icon Name",
      type: "text",
    },
    className: {
      label: "CSS Classes",
      type: "text",
    },
  },
  defaultProps: {
    name: "RiStarLine",
    className: "size-6",
  },
  render: RemixIcon,
};
