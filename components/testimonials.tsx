import React from "react";

interface TestimonialsProps {
  eyebrow: string;
  heading: string;
  subheading: string;
  content: React.ComponentType<{ style?: React.CSSProperties; className?: string }>;
}

export default function Testimonials({
  eyebrow = "Testimonials",
  heading = "Loved by the people who use it most.",
  subheading = "Don't just take our word for it.",
  content: Content,
}: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
            {eyebrow}
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
            {heading}
          </h2>
          <p className="mt-5 text-[17px] text-muted-foreground">
            {subheading}
          </p>
        </div>
        {Content && (
          <Content
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
            className="md:!grid-cols-2 lg:!grid-cols-3 max-md:!grid-cols-1"
          />
        )}
      </div>
    </section>
  );
}
