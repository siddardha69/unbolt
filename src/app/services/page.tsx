import React from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/shared/Icon";
import { services } from "@/lib/data/services";

export const metadata = {
  title: "Our Services | Unbolt",
  description: "Explore our industry-specific content production systems for Aesthetic Clinics, Fine Dining, Real Estate, and Boutique Fitness."
};

export default function ServicesPage() {
  const getVerticalBadge = (verticalId: string) => {
    switch (verticalId) {
      case "clinics":
        return "Clinics & Healthcare";
      case "restaurants":
        return "Fine Dining";
      case "realestate":
        return "Real Estate";
      case "fitness":
        return "Boutique Fitness";
      default:
        return "Services";
    }
  };

  const getVerticalIcon = (verticalId: string) => {
    switch (verticalId) {
      case "clinics":
        return "health";
      case "restaurants":
        return "food";
      case "realestate":
        return "building";
      case "fitness":
        return "fitness";
      default:
        return "check";
    }
  };

  return (
    <div className="flex flex-col w-full bg-base pt-32 pb-24 px-6 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <AnimatedSection className="max-w-4xl mx-auto mb-16">
        <SectionHeading
          badge="What We Do"
          title="Bespoke Content Pipelines"
          subtitle="We own the entire process: scriptwriting, native on-site cinematography, surgical video editing, and caption search optimization. Choose your industry below."
        />
      </AnimatedSection>

      {/* Services List */}
      <div className="space-y-16">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <AnimatedSection
              key={service.id}
              id={service.verticalId}
              className="scroll-mt-32"
            >
              <Card className="bg-base-light border border-text-primary/[0.04] p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Side: Text and Details */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    
                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-accent">
                        <Icon name={getVerticalIcon(service.verticalId)} size={18} />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-accent">
                        {getVerticalBadge(service.verticalId)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-display font-bold text-text-primary mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Impact Stats */}
                    <div className="bg-base border border-text-primary/[0.04] p-4 rounded-[4px] mb-6 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-text-muted block mb-1">
                          Typical Metric Impact
                        </span>
                        <span className="text-sm font-display font-bold text-accent">
                          {service.metricImpact}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-wider text-text-muted block mb-1">
                          Setup Timeline
                        </span>
                        <span className="text-sm font-display font-bold text-text-primary">
                          {service.timeline}
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Right Side: Deliverables */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="bg-base border border-text-primary/[0.04] p-6 rounded-[4px] h-full flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-text-primary mb-4 border-b border-text-primary/[0.04] pb-2">
                          What's Included
                        </h4>
                        <ul className="space-y-3.5">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-accent mt-0.5 flex-shrink-0">
                                <Icon name="check" size={14} />
                              </span>
                              <span className="text-xs text-text-muted leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>

      {/* CTA */}
      <AnimatedSection className="mt-24 text-center max-w-2xl mx-auto">
        <Card className="bg-base-light border border-accent/20 p-10 rounded-[8px] flex flex-col items-center">
          <h3 className="text-lg font-display font-bold text-text-primary mb-3">
            Ready to build your content channel?
          </h3>
          <p className="text-xs text-text-muted mb-8 leading-relaxed">
            Get in touch to confirm availability and discuss custom production packages for your specific business goals.
          </p>
          <Button href="/contact" variant="primary">
            Book Discovery Call
          </Button>
        </Card>
      </AnimatedSection>

    </div>
  );
}
