import { RiStarFill } from "@remixicon/react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export default function TestimonialCard({
  quote = "This product has transformed the way we work.",
  name = "Jane Doe",
  role = "CEO, Acme Inc.",
  avatar = "https://placehold.co/80x80/1e293b/e2e8f0?text=JD",
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-background p-8 transition-all duration-500 hover:border-border hover:shadow-xl hover:shadow-primary/[0.03]">
      <div>
        <div className="mb-5 flex gap-0.5">
          {Array.from({ length: rating }).map((_, i) => (
            <RiStarFill key={i} className="size-3.5 text-star" />
          ))}
        </div>
        <blockquote className="text-[15px] leading-[1.75] text-foreground/80">
          {quote}
        </blockquote>
      </div>
      <div className="mt-8 flex items-center gap-3.5">
        <img
          src={avatar}
          alt={name}
          className="size-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-[13px] text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
