import TeamCard from "@/components/team-card";

export default {
  name: "Team Card",
  category: "Cards",
  fields: {
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
    bio: {
      label: "Bio",
      type: "text",
      contentEditable: true,
    },
    avatar: {
      label: "Avatar URL",
      type: "text",
    },
  },
  defaultProps: {
    name: "Team Member",
    role: "Role",
    bio: "A short bio about this team member.",
    avatar: "",
  },
  render: TeamCard,
};
