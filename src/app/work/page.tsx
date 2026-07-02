import React from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/shared/Icon";
import { caseStudies } from "@/lib/data/caseStudies";

export const metadata = {
  title: "Case Studies | Upbolt Studios",
  description: "Read in-depth case studies detailing how we grew organic reach and drove inquiries for aesthetic clinics, fine dining, and boutique studios."
};

export default function WorkPage() {
  return (
    <div className="flex flex-col w-full bg-base pt-32 pb-24 px-6 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <AnimatedSection className="max-w-4xl mx-auto mb-16">
        <SectionHeading
          badge="Case Studies"
          title="Verified Success Stories"
          subtitle="We don't buy likes or fake followers. We produce native, high-retention video content that translates directly into clinic appointments, reservations, and membership sales."
        />
      </AnimatedSection>

      {/* Case Studies Deep Dives */}
      <div className="space-y-16">
        {caseStudies.map((study, index) => {
          const isEven = index % 2 === 0;
          return (
            <AnimatedSection
              key={study.id}
              id={study.id}
              className="scroll-mt-32"
            >
              <Card className="bg-base-light border border-text-primary/[0.04] p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  
                  {/* Left Column: Context, Strategy, Results */}
                  <div className={`lg:col-span-8 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    
                    {/* Header Details */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-accent">
                        {study.industry}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-text-primary/20" />
                      <span className="text-[10px] uppercase tracking-wider font-medium text-text-muted">
                        Campaign Duration: {study.timeframe}
                      </span>
                    </div>

                    {/* Client Title */}
                    <h3 className="text-xl md:text-2xl font-display font-bold text-text-primary mb-6">
                      {study.clientName}
                    </h3>

                    {/* Starting Point */}
                    <div className="mb-6">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-text-primary mb-2">
                        The Challenge
                      </h4>
                      <p className="text-xs md:text-sm text-text-muted leading-relaxed font-normal">
                        {study.startingPoint}
                      </p>
                    </div>

                    {/* Strategy Implemented */}
                    <div className="mb-6">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-text-primary mb-3">
                        Our Strategy
                      </h4>
                      <ul className="space-y-2">
                        {study.strategy.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-accent mt-0.5 flex-shrink-0">
                              <Icon name="check" size={12} />
                            </span>
                            <span className="text-xs text-text-muted leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Client Quote */}
                    <div className="border-l-2 border-accent pl-4 py-1 bg-accent/[0.02] rounded-[2px]">
                      <p className="text-xs italic text-text-primary leading-relaxed mb-2">
                        &ldquo;{study.quote.text}&rdquo;
                      </p>
                      <cite className="text-[10px] not-italic font-display font-semibold text-text-muted">
                        — {study.quote.author}, {study.quote.role}
                      </cite>
                    </div>

                  </div>

                  {/* Right Column: Key Jumps and Results List */}
                  <div className={`lg:col-span-4 ${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col gap-6 justify-between`}>
                    
                    {/* Visual Before/After Metrics */}
                    <div className="bg-base border border-text-primary/[0.04] p-6 rounded-[4px]">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-text-primary mb-4 text-center border-b border-text-primary/[0.04] pb-2">
                        Growth Metric Jump
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-text-muted">Before Campaign</span>
                          <span className="text-xs font-display font-semibold text-text-muted line-through">
                            {study.beforeMetric}
                          </span>
                        </div>
                        <div className="flex justify-between items-center border-t border-text-primary/[0.04] pt-4">
                          <span className="text-xs text-text-primary font-medium">After Campaign</span>
                          <Badge variant="accent" className="font-display font-bold">
                            {study.afterMetric}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Results list */}
                    <div className="bg-base border border-text-primary/[0.04] p-6 rounded-[4px] flex-grow flex flex-col justify-center">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-text-primary mb-3">
                        Key Outcomes
                      </h4>
                      <ul className="space-y-3">
                        {study.results.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                            <span className="text-xs text-text-muted leading-relaxed font-medium">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Footer CTA */}
      <AnimatedSection className="mt-24 text-center max-w-2xl mx-auto">
        <Card className="bg-base-light border border-accent/20 p-10 rounded-[8px] flex flex-col items-center">
          <h3 className="text-lg font-display font-bold text-text-primary mb-3">
            Want to be our next success story?
          </h3>
          <p className="text-xs text-text-muted mb-8 leading-relaxed">
            Let's design a custom short-form video system for your brand to drive inquiries.
          </p>
          <Button href="/contact" variant="primary">
            Book Discovery Call
          </Button>
        </Card>
      </AnimatedSection>

    </div>
  );
}
