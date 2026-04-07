import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ContentCardProps {
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function ContentCard({
  title = "Card Title",
  description = "A brief description of this card's content.",
  image = "https://placehold.co/400x200/0f172a/94a3b8?text=Image",
  ctaLabel = "Learn More",
  ctaHref = "#",
}: ContentCardProps) {
  return (
    <Card className="overflow-hidden">
      {image && (
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />
      )}
      <CardHeader>
        <CardTitle className="font-heading">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent />
      <CardFooter>
        <Button asChild variant="outline" size="sm">
          <a href={ctaHref}>{ctaLabel}</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
