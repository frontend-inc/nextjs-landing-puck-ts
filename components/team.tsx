import TeamCard from "@/components/team-card";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

interface TeamProps {
  eyebrow: string;
  heading: string;
  subheading: string;
  members: TeamMember[];
}

export default function Team({
  eyebrow = "Team",
  heading = "The people behind\nthe product.",
  subheading = "A world-class team obsessed with craft, quality, and impact.",
  members = [
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
}: TeamProps) {
  return (
    <section id="team" className="py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
            {eyebrow}
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
            {heading.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < heading.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="mt-5 text-[17px] text-muted-foreground">
            {subheading}
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
