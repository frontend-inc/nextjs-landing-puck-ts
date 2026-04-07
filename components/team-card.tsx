import { RiImageLine } from "@remixicon/react";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export default function TeamCard({
  name = "Team Member",
  role = "Role",
  bio = "A short bio about this team member.",
  avatar = "",
}: TeamCardProps) {
  return (
    <div className="group text-center">
      <div className="mx-auto mb-6 flex aspect-[5/6] max-w-[280px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-primary/80 to-primary">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <RiImageLine className="size-12 text-highlight" />
        )}
      </div>
      <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
        {name}
      </h3>
      <p className="mt-0.5 text-sm text-muted-foreground">{role}</p>
    </div>
  );
}
