import * as RemixIcons from "@remixicon/react";

interface RemixIconProps {
  name: string;
  className?: string;
}

export default function RemixIcon({ name, className = "size-6" }: RemixIconProps) {
  const Icon = (RemixIcons as Record<string, React.ComponentType<{ className?: string }>>)[name];

  if (!Icon) {
    return <span className={className} />;
  }

  return <Icon className={className} />;
}
