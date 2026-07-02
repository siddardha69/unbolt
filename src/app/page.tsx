import React from "react";
import { HeroVideo } from "@/components/home/HeroVideo";
import { Marquee } from "@/components/home/Marquee";
import { StatCounter } from "@/components/home/StatCounter";
import { GrowthVisualizer } from "@/components/home/GrowthVisualizer";
import { ServiceCard } from "@/components/home/ServiceCard";
import { CaseStudyStrip } from "@/components/home/CaseStudyStrip";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { verticals } from "@/lib/data/verticals";
import { caseStudies } from "@/lib/data/caseStudies";

export const metadata = {
  title: "Unbolt | High-Performance Short-Form Video Systems",
  description: "We plan, shoot, edit, and post high-retention Reels, TikToks, and Shorts for clinics, dining, real estate, and fitness brands in New York."
};

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-base overflow-x-hidden">
      
      {/* 1. HERO VIDEO */}
      <HeroVideo />

      {/* 2. MARQUEE TICKER */}
      <Marquee />

      {/* 3. STAT COUNTERS */}
      <AnimatedSection className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <Card className="text-center p-6 bg-base-light border border-text-primary/[0.04]">
            <span className="text-2xl md:text-2xl font-display font-bold text-accent block mb-2">
              <StatCounter value={350} suffix="+" />
            </span>
            <span className="text-xs uppercase tracking-wider text-text-muted">
              Reels Delivered
            </span>
          </Card>

          <Card className="text-center p-6 bg-base-light border border-text-primary/[0.04]">
            <span className="text-2xl md:text-2xl font-display font-bold text-accent block mb-2">
              <StatCounter value={280} suffix="%" />
            </span>
            <span className="text-xs uppercase tracking-wider text-text-muted">
              Avg Views Growth
            </span>
          </Card>

          <Card className="text-center p-6 bg-base-light border border-text-primary/[0.04]">
            <span className="text-2xl md:text-2xl font-display font-bold text-accent block mb-2">
              <StatCounter value={3} suffix="" />
            </span>
            <span className="text-xs uppercase tracking-wider text-text-muted">
              Focus Industries
            </span>
          </Card>

          <Card className="text-center p-6 bg-base-light border border-text-primary/[0.04]">
            <span className="text-2xl md:text-2xl font-display font-bold text-accent block mb-2">
              <StatCounter value={90} suffix=" Days" />
            </span>
            <span className="text-xs uppercase tracking-wider text-text-muted">
              Average Campaign
            </span>
          </Card>

        </div>
      </AnimatedSection>

      {/* 4. GROWTH VISUALIZER */}
      <AnimatedSection id="visualizer" className="py-16 md:py-24 px-6 max-w-7xl mx-auto w-full">
        <SectionHeading
          badge="Interactive Projection"
          title="Visualize Your Content Curve"
          subtitle="Adjust the sliders below to see the mathematical reach delta between DIY social output and a dedicated, professionally executed content system."
          align="center"
        />
        <GrowthVisualizer />
      </AnimatedSection>

      {/* 5. SERVICES GRID */}
      <AnimatedSection className="py-16 md:py-24 px-6 max-w-7xl mx-auto w-full">
        <SectionHeading
          badge="Verticals We Serve"
          title="Bespoke Systems for Specific Industries"
          subtitle="We don't do generalist social media management. We build dedicated content pipelines tailored to the exact psychology of your target audience."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((vert) => (
            <ServiceCard
              key={vert.id}
              id={vert.id}
              name={vert.name}
              icon={vert.icon}
              description={vert.description}
              growthPotential={vert.growthPotential}
            />
          ))}
        </div>
      </AnimatedSection>

      {/* 6. CASE STUDY STRIP */}
      <AnimatedSection className="py-16 md:py-24 px-6 max-w-7xl mx-auto w-full">
        <SectionHeading
          badge="Our Proof"
          title="Real Growth. Real Bottom Lines."
          subtitle="We focus on metrics that matter: table reservations, member acquisitions, and direct treatment bookings. Here are three deep dives."
        />
        <CaseStudyStrip caseStudies={caseStudies} />
      </AnimatedSection>

      {/* 7. TESTIMONIAL CAROUSEL */}
      <AnimatedSection className="py-16 md:py-24 px-6 max-w-7xl mx-auto w-full bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent">
        <SectionHeading
          badge="Partners"
          title="What Our Clients Say"
          subtitle="Read firsthand experiences from business owners who swapped internal content production for our managed system."
          align="center"
        />
        <TestimonialCarousel />
      </AnimatedSection>

      {/* 8. FINAL CTA */}
      <AnimatedSection className="py-24 px-6 max-w-5xl mx-auto w-full text-center">
        <Card className="bg-base-light border border-accent/20 rounded-[8px] p-12 md:p-16 flex flex-col items-center">
          <span className="text-xs uppercase tracking-wider font-semibold text-accent mb-4">
            Next Steps
          </span>
          <h2 className="text-xl md:text-2xl font-display font-bold text-text-primary tracking-tight mb-4 max-w-2xl">
            Ready to stop guessing and start scaling?
          </h2>
          <p className="text-sm text-text-muted mb-8 max-w-lg leading-relaxed">
            Book a 15-minute discovery call. We'll analyze your current content channels and outline a custom production plan for your business.
          </p>
          <Button href="/contact" variant="primary">
            Book Discovery Call
          </Button>
        </Card>
      </AnimatedSection>

    </div>
  );
}
