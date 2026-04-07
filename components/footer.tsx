interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  brand: string;
  tagline: string;
  columns: FooterColumn[];
  copyright: string;
}

export default function Footer({
  brand = "Acme",
  tagline = "Building the future of work.",
  columns = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Changelog", href: "#" },
        { label: "Docs", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Cookies", href: "#" },
      ],
    },
  ],
  copyright = "© 2026 Acme. All rights reserved.",
}: FooterProps) {
  return (
    <footer className="border-t border-border/40 bg-background pb-12 pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-5">
          <div className="sm:col-span-2">
            <p className="font-heading text-sm font-bold tracking-tight text-foreground">
              {brand}
            </p>
            <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              {tagline}
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 text-xs font-medium text-muted-foreground/50">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-border/30 pt-6">
          <p className="text-[11px] text-muted-foreground/40">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
