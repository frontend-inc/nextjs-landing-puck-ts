import Team from "@/components/team";

export default {
  name: "Team",
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
    members: {
      label: "Team Members",
      type: "array",
      arrayFields: {
        name: {
          label: "Name",
          type: "text",
        },
        role: {
          label: "Role",
          type: "text",
        },
        bio: {
          label: "Bio",
          type: "text",
        },
        avatar: {
          label: "Avatar URL",
          type: "text",
        },
      },
    },
  },
  defaultProps: {
    eyebrow: "Team",
    heading: "The people behind\nthe product.",
    subheading: "A world-class team obsessed with craft, quality, and impact.",
    members: [
      {
        name: "Alex Morgan",
        role: "CEO & Co-founder",
        bio: "Visionary leader with 15 years building products at scale.",
        avatar: "",
      },
      {
        name: "Jordan Lee",
        role: "CTO & Co-founder",
        bio: "Full-stack engineer and distributed systems architect.",
        avatar: "",
      },
      {
        name: "Taylor Kim",
        role: "Head of Design",
        bio: "Creating intuitive, beautiful experiences for over a decade.",
        avatar: "",
      },
      {
        name: "Casey Rivera",
        role: "Head of Engineering",
        bio: "Scaling high-performance teams and mission-critical systems.",
        avatar: "",
      },
    ],
  },
  render: Team,
};
