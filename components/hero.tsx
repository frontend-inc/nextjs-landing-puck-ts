import { Button } from "@/components/ui/button";
import { RiArrowRightLine, RiImageLine } from "@remixicon/react";

interface HeroProps {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  subheading: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  image: string;
}

export default function Hero({
  eyebrow = "Introducing Acme",
  heading = "The future of",
  headingAccent = "productivity.",
  subheading = "A radically new way to build, collaborate, and ship. Designed for teams who refuse to compromise.",
  primaryCtaLabel = "Get Started Free",
  primaryCtaHref = "#cta",
  secondaryCtaLabel = "Watch the film",
  secondaryCtaHref = "#features",
  image = "",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 lg:pb-32 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-sm font-medium tracking-wide text-muted-foreground">
            {eyebrow}
          </p>
          <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem]">
            {heading}
            {headingAccent && (
              <>
                <br />
                <span className="text-gradient bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to">
                  {headingAccent}
                </span>
              </>
            )}
          </h1>
          <p className="mx-auto mt-8 max-w-lg text-[17px] leading-relaxed text-muted-foreground">
            {subheading}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-8 text-sm font-medium">
              <a href={primaryCtaHref}>{primaryCtaLabel}</a>
            </Button>
            <a
              href={secondaryCtaHref}
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
            >
              {secondaryCtaLabel}
              <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/80 to-primary">
          {image ? (
            <img
              src={image}
              alt="Product preview"
              className="size-full object-cover"
            />
          ) : (
            <RiImageLine className="size-12 text-highlight" />
          )}
        </div>
      </div>
    </section>
  );
}
