import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RiMenuLine } from "@remixicon/react";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  brand: string;
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

export default function Navbar({
  brand = "Acme",
  links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Team", href: "#team" },
  ],
  ctaLabel = "Get Started",
  ctaHref = "#cta",
}: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-2xl backdrop-saturate-200">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6">
        <a href="/" className="font-heading text-sm font-bold tracking-tight text-foreground">
          {brand}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaHref}
            className="text-xs font-medium text-foreground transition-opacity hover:opacity-70"
          >
            {ctaLabel}
          </a>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon-xs" className="md:hidden">
              <RiMenuLine className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-1 pt-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 px-3">
                <Button asChild className="w-full">
                  <a href={ctaHref}>{ctaLabel}</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
