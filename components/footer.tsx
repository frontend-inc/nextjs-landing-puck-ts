import React from "react";

interface FooterProps {
  brand: string;
  tagline: string;
  content: React.ComponentType<{ style?: React.CSSProperties; className?: string }>;
  copyright: string;
}

export default function Footer({
  brand = "ACME",
  tagline = "Building the future of work.",
  content: Content,
  copyright = "© 2026 Acme. All rights reserved.",
}: FooterProps) {
  return (
    <footer className="border-t border-border/40 bg-background pb-12 pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="shrink-0">
            <p className="font-heading text-sm font-bold uppercase tracking-tight text-foreground">
              {brand}
            </p>
            <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              {tagline}
            </p>
          </div>
          {Content && (
            <Content
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "40px",
              }}
              className="max-md:!grid-cols-2 max-sm:!grid-cols-1"
            />
          )}
        </div>
        <div className="mt-14 border-t border-border/30 pt-6">
          <p className="text-[11px] text-muted-foreground/40">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
