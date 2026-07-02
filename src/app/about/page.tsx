import React from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About Us | Unbolt",
  description: "Why we started Unbolt: a small, hyper-specialized team of content planners, shooters, and editors dedicated to local business growth."
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-base pt-32 pb-24 px-6 max-w-7xl mx-auto">
      
      {/* 1. FOUNDING STORY */}
      <AnimatedSection className="max-w-4xl mx-auto mb-20">
        <SectionHeading
          badge="Our Story"
          title="We started Unbolt because traditional marketing packages are broken."
          subtitle="A boutique team of creators who believe local businesses deserve cinema-grade content systems, not basic templates."
        />
        
        <div className="space-y-6 text-sm text-text-muted leading-relaxed font-normal">
          <p>
            Unbolt was founded by a filmmaker and a local brand strategist who noticed a recurring issue: business owners were spending thousands of dollars monthly on agency fees, only to receive generic stock graphics, poorly resized images, and robotic captions. Traditional agencies treat short-form video like an afterthought, relying on automated AI voiceovers or mobile templates that look identical to every competitor.
          </p>
          <p>
            We realized that local attention is won through authenticity. People don't follow stock photos; they follow stories, personalities, and expertise. So, we built a lean, highly specialized production team. We own our cinema gear, write custom scripts based on patient/diner psychology, shoot on-site to capture native local energy, and edit with handcrafted sound design.
          </p>
          <p>
            Today, we remain intentionally small. We only partner with 3 to 5 clients per vertical at a time, ensuring that every video we deliver is completely custom, highly targeted, and optimized to drive real-world inquiries.
          </p>
        </div>
      </AnimatedSection>

      {/* 2. OUR VALUES / METHODOLOGY */}
      <AnimatedSection className="mb-20">
        <SectionHeading
          badge="Operating Principles"
          title="What We Stand By"
          subtitle="No vague values or corporate speak. These are the practical guardrails that dictate our client partnerships."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-base-light border border-text-primary/[0.04] p-8">
            <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-3">
              01 / ZERO STOCK FOOTAGE
            </span>
            <h3 className="text-base font-display font-bold text-text-primary mb-3">
              100% Native Production
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              We never use online stock video, generic sound templates, or canned graphics. Every frame of video is shot by our crew, on-site at your actual clinic, restaurant, listing, or studio.
            </p>
          </Card>

          <Card className="bg-base-light border border-text-primary/[0.04] p-8">
            <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-3">
              02 / CAPACITY CAPS
            </span>
            <h3 className="text-base font-display font-bold text-text-primary mb-3">
              Intentionally Limited Clients
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              To guarantee turnaround times and pixel-perfect quality control, we limit our active client list. We do not accept more clients than our core creative team can manage directly.
            </p>
          </Card>

          <Card className="bg-base-light border border-text-primary/[0.04] p-8">
            <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-3">
              03 / BUSINESS METRICS FIRST
            </span>
            <h3 className="text-base font-display font-bold text-text-primary mb-3">
              Inquiries Over Vanity Likes
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              While high view counts are great, we measure campaign success by direct business impact: new consulting bookings, table reservations, and class packages purchased.
            </p>
          </Card>
        </div>
      </AnimatedSection>

      {/* 3. TEAM / CAPACITY STATEMENT */}
      <AnimatedSection className="text-center max-w-2xl mx-auto">
        <Card className="bg-base-light border border-accent/10 p-10 rounded-[8px] flex flex-col items-center">
          <h3 className="text-lg font-display font-bold text-text-primary mb-3">
            Want to see if we're a fit?
          </h3>
          <p className="text-xs text-text-muted mb-8 leading-relaxed">
            We limit our capacity to ensure extreme focus for our active partners. Reach out to schedule a consultation and check our current booking slots.
          </p>
          <Button href="/contact" variant="primary">
            Connect With Our Team
          </Button>
        </Card>
      </AnimatedSection>

    </div>
  );
}
