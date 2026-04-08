import React from "react";
import RemixIcon from "@/components/remix-icon";

interface SocialLink {
  icon: string;
  href: string;
}

interface FooterProps {
  brand: string;
  tagline: string;
  content: React.ComponentType<{ style?: React.CSSProperties; className?: string }>;
  socials: SocialLink[];
  copyright: string;
}

export default function Footer({
  brand = "ACME",
  tagline = "Building the future of work.",
  content: Content,
  socials = [],
  copyright = "© 2026 Acme. All rights reserved.",
}: FooterProps) {
  return (
    <footer className="border-t border-border/40 bg-background pb-12 pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-tight text-foreground">
              {brand}
            </p>
            <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              {tagline}
            </p>
            {socials.length > 0 && (
              <div className="mt-5 flex items-center gap-4">
                {socials.map((social) => (
                  <a key={social.icon} href={social.href} className="text-muted-foreground/50 transition-colors hover:text-foreground">
                    <RemixIcon name={social.icon} className="size-[18px]" />
                  </a>
                ))}
              </div>
            )}
          </div>
          {Content && (
            <Content
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "40px",
              }}
              className="md:col-span-2"
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
