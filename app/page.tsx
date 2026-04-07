import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Logos from "@/components/logos";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Cta from "@/components/cta";
import Team from "@/components/team";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Testimonials />
      <Pricing />
      <Cta />
      <Team />
      <Footer />
    </div>
  );
}
