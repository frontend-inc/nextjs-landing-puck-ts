import RemixIcon from "@/components/remix-icon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon = "RiFlashlightLine",
  title = "Feature",
  description = "Description of this feature.",
}: FeatureCardProps) {
  return (
    <div className="group rounded-3xl p-8 transition-colors duration-300 hover:bg-card">
      <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-muted">
        <RemixIcon name={icon} className="size-5 text-highlight" />
      </div>
      <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-[1.65] text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
