interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

export default function FooterLinks({
  title = "Product",
  links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ],
}: FooterLinksProps) {
  return (
    <div>
      <h4 className="mb-3 text-xs font-medium text-muted-foreground/50">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
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
  );
}
