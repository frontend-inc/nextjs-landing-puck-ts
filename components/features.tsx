import React from "react";

interface FeaturesProps {
  eyebrow: string;
  heading: string;
  subheading: string;
  content: React.ComponentType<{ style?: React.CSSProperties; className?: string }>;
}

export default function Features({
  eyebrow = "Features",
  heading = "Engineered for excellence.",
  subheading = "Every detail has been considered. Every interaction refined. Built from the ground up to be the tool you've always wanted.",
  content: Content,
}: FeaturesProps) {
  return (
    <section id="features" className="section-dark bg-background py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
            {heading}
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
            {subheading}
          </p>
        </div>
        {Content && (
          <Content
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "4px",
            }}
            className="sm:!grid-cols-2 lg:!grid-cols-3 max-sm:!grid-cols-1"
          />
        )}
      </div>
    </section>
  );
}
