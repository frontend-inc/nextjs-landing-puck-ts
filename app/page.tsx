import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Logos from "@/components/logos";
import Features from "@/components/features";
import FeatureCard from "@/components/feature-card";
import Testimonials from "@/components/testimonials";
import TestimonialCard from "@/components/testimonial-card";
import Pricing from "@/components/pricing";
import Cta from "@/components/cta";
import Team from "@/components/team";
import Footer from "@/components/footer";
import FooterLinks from "@/components/footer-links";
import React from "react";

function FeatureCards({ style, className }: { style?: React.CSSProperties; className?: string }) {
  return (
    <div style={style} className={className}>
      <FeatureCard icon="RiFlashlightLine" title="Lightning Performance" description="Sub-second load times with edge-optimized delivery. Your users feel the difference instantly." />
      <FeatureCard icon="RiShieldCheckLine" title="Secure by Design" description="Enterprise-grade encryption, SOC 2 compliance, and automatic threat detection built into every layer." />
      <FeatureCard icon="RiBarChartBoxLine" title="Real-time Analytics" description="Live dashboards with actionable insights. Understand your users and make data-driven decisions." />
      <FeatureCard icon="RiPlugLine" title="Seamless Integrations" description="Connect with 200+ tools out of the box. REST and GraphQL APIs for everything else." />
      <FeatureCard icon="RiPaletteLine" title="Fully Customizable" description="White-label ready with complete theme control. Make it yours down to the last pixel." />
      <FeatureCard icon="RiRocketLine" title="One-click Deploy" description="Push to production in seconds with zero-downtime deployments and automatic rollbacks." />
    </div>
  );
}

function TestimonialCards({ style, className }: { style?: React.CSSProperties; className?: string }) {
  return (
    <div style={style} className={className}>
      <TestimonialCard quote="The best tool we've adopted this year. It saved our engineering team over 200 hours in the first quarter alone. The ROI was immediate and undeniable." name="Sarah Chen" role="VP of Engineering, TechCorp" avatar="https://placehold.co/80x80/1e293b/e2e8f0?text=SC" rating={5} />
      <TestimonialCard quote="Incredible product with outstanding support. Our team productivity has increased by 40% since we made the switch. Can't imagine going back to the old way." name="Marcus Johnson" role="Product Manager, Innovate Co." avatar="https://placehold.co/80x80/1e293b/e2e8f0?text=MJ" rating={5} />
      <TestimonialCard quote="Simple, powerful, and reliable. It just works exactly as promised, every single time. This is what software should feel like in 2026." name="Emily Rodriguez" role="CTO, StartupXYZ" avatar="https://placehold.co/80x80/1e293b/e2e8f0?text=ER" rating={5} />
      <TestimonialCard quote="We evaluated a dozen solutions before choosing this one. The developer experience is unmatched and the documentation is genuinely world-class." name="David Park" role="Lead Developer, CloudScale" avatar="https://placehold.co/80x80/1e293b/e2e8f0?text=DP" rating={5} />
      <TestimonialCard quote="From onboarding to daily use, everything is seamless. Our design team ships twice as fast now. It's become essential infrastructure for us." name="Priya Sharma" role="Head of Design, Pixelwork" avatar="https://placehold.co/80x80/1e293b/e2e8f0?text=PS" rating={5} />
      <TestimonialCard quote="The integration capabilities alone make this worth every penny. We connected our entire stack in under a day. Truly impressive engineering work." name="James O'Brien" role="Engineering Manager, FinFlow" avatar="https://placehold.co/80x80/1e293b/e2e8f0?text=JO" rating={5} />
    </div>
  );
}

function FooterContent({ style, className }: { style?: React.CSSProperties; className?: string }) {
  return (
    <div style={style} className={className}>
      <FooterLinks title="Product" links={[{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }, { label: "Changelog", href: "#" }, { label: "Docs", href: "#" }]} />
      <FooterLinks title="Company" links={[{ label: "About", href: "#" }, { label: "Blog", href: "#" }, { label: "Careers", href: "#" }, { label: "Contact", href: "#" }]} />
      <FooterLinks title="Legal" links={[{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }, { label: "Cookies", href: "#" }]} />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Navbar />
      <Hero />
      <Logos />
      <Features content={FeatureCards} />
      <Testimonials content={TestimonialCards} />
      <Pricing />
      <Cta />
      <Team />
      <Footer content={FooterContent} socials={[{ icon: "RiTwitterXFill", href: "#" }, { icon: "RiGithubFill", href: "#" }, { icon: "RiLinkedinFill", href: "#" }, { icon: "RiInstagramFill", href: "#" }]} />
    </div>
  );
}
