import RemixIcon from "@/components/remix-icon";

interface LogoItem {
  name: string;
  icon: string;
}

interface LogosProps {
  heading: string;
  logos: LogoItem[];
}

export default function Logos({
  heading = "Trusted by teams at the world's best companies",
  logos = [
    { name: "Google", icon: "RiGoogleFill" },
    { name: "Apple", icon: "RiAppleFill" },
    { name: "GitHub", icon: "RiGithubFill" },
    { name: "Slack", icon: "RiSlackFill" },
    { name: "Twitter", icon: "RiTwitterXFill" },
    { name: "Amazon", icon: "RiAmazonFill" },
  ],
}: LogosProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-12 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
          {heading}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-muted-foreground/30 transition-colors duration-500 hover:text-foreground"
            >
              <RemixIcon name={logo.icon} className="size-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
