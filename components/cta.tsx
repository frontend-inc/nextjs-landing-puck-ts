"use client";

import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "@remixicon/react";

interface CtaProps {
  heading: string;
  subheading: string;
  placeholder: string;
  buttonLabel: string;
  disclaimer: string;
}

export default function Cta({
  heading = "Start building today",
  subheading = "Join thousands of teams already using Acme to ship faster. Get early access and exclusive updates.",
  placeholder = "Enter your email",
  buttonLabel = "Subscribe",
  disclaimer = "Free forever for small teams. No credit card required.",
}: CtaProps) {
  return (
    <section id="cta" className="section-dark bg-background py-32 lg:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[17px] leading-relaxed text-muted-foreground">
            {subheading}
          </p>
          <form
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={placeholder}
              className="h-12 flex-1 rounded-full border border-border bg-input px-6 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-muted-foreground/40 focus:bg-card"
            />
            <Button
              type="submit"
              className="h-12 shrink-0 gap-1.5 rounded-full bg-primary text-primary-foreground px-7 text-sm font-medium hover:bg-primary/90"
            >
              {buttonLabel}
              <RiArrowRightLine className="size-3.5" />
            </Button>
          </form>
          <p className="mt-5 text-[13px] text-muted-foreground/70">{disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
