"use client";

import React, { useState } from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/shared/Icon";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    business: "",
    industry: "clinics",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate contact form submission
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-base pt-32 pb-24 px-6 max-w-7xl mx-auto">
      
      <AnimatedSection className="max-w-4xl mx-auto mb-16">
        <SectionHeading
          badge="Get in touch"
          title="Let's build your content engine."
          subtitle="Choose the most convenient way to connect. Fill out our brief intake form, chat with us on WhatsApp, or book a direct slot on our calendar."
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Side: Contact Form */}
        <div className="lg:col-span-7">
          <Card className="bg-base-light border border-text-primary/[0.04] p-8">
            <h3 className="text-base font-display font-bold text-text-primary mb-6">
              Project Intake Form
            </h3>

            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center text-accent mb-4">
                  <Icon name="check" size={24} />
                </div>
                <h4 className="font-display font-bold text-text-primary text-base mb-2">
                  Proposal Intake Received
                </h4>
                <p className="text-xs text-text-muted max-w-sm leading-relaxed mb-6">
                  Thank you for submitting your details. Our creative director will review your profiles and get back to you within 24 hours.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="ghost" className="py-2.5 px-6">
                  Submit another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="text-[10px] font-semibold uppercase tracking-wider text-text-muted block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-base border border-text-primary/10 rounded-[4px] py-3.5 px-4 text-xs text-text-primary focus:outline-none focus:border-accent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="business" className="text-[10px] font-semibold uppercase tracking-wider text-text-muted block mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    required
                    value={formState.business}
                    onChange={(e) => setFormState({ ...formState, business: e.target.value })}
                    className="w-full bg-base border border-text-primary/10 rounded-[4px] py-3.5 px-4 text-xs text-text-primary focus:outline-none focus:border-accent transition-colors"
                    placeholder="Enter your business name"
                  />
                </div>

                {/* Industry Dropdown */}
                <div>
                  <label htmlFor="industry" className="text-[10px] font-semibold uppercase tracking-wider text-text-muted block mb-2">
                    Industry Verticals
                  </label>
                  <select
                    id="industry"
                    value={formState.industry}
                    onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                    className="w-full bg-base border border-text-primary/10 rounded-[4px] py-3.5 px-4 text-xs text-text-primary focus:outline-none focus:border-accent transition-colors cursor-pointer"
                  >
                    <option value="clinics">Clinics & Healthcare</option>
                    <option value="restaurants">Fine Dining Restaurants</option>
                    <option value="realestate">Real Estate Brokerages</option>
                    <option value="fitness">Boutique Fitness Studios</option>
                    <option value="other">Other Premium Brands</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-wider text-text-muted block mb-2">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-base border border-text-primary/10 rounded-[4px] py-3.5 px-4 text-xs text-text-primary focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Briefly describe your current goals or link your social profiles..."
                  />
                </div>

                {/* Submit button */}
                <Button type="submit" variant="primary" className="w-full py-4 text-center">
                  Submit Request
                </Button>

              </form>
            )}

          </Card>
        </div>

        {/* Right Side: Quick Action Options */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* WhatsApp click to chat */}
          <Card className="bg-base-light border border-text-primary/[0.04] p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/5 border border-accent/10 rounded-[4px] text-accent">
                <Icon name="whatsapp" size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-text-primary text-sm mb-1">
                  Chat on WhatsApp
                </h4>
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  Have a quick question? Message our team directly for a fast response.
                </p>
                <a
                  href="https://wa.me/15553891029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-text-primary hover:text-accent transition-colors"
                >
                  Message +1 (555) 389-1029
                  <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </div>
          </Card>

          {/* Calendly Booking */}
          <Card className="bg-base-light border border-text-primary/[0.04] p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/5 border border-accent/10 rounded-[4px] text-accent">
                <Icon name="calendar" size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-text-primary text-sm mb-1">
                  Book a Discovery Call
                </h4>
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  Schedule a 15-minute introductory video meeting via Calendly to walk through our process.
                </p>
                <a
                  href="https://calendly.com/upbolt-studios/discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-text-primary hover:text-accent transition-colors"
                >
                  Select Time & Date
                  <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </div>
          </Card>

          {/* Instagram Handle */}
          <Card className="bg-base-light border border-text-primary/[0.04] p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/5 border border-accent/10 rounded-[4px] text-accent">
                <Icon name="instagram" size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-text-primary text-sm mb-1">
                  Follow Us on Instagram
                </h4>
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  Check out our latest shoots, behind-the-scenes editing tips, and active client campaigns.
                </p>
                <a
                  href="https://instagram.com/upbolt.studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-text-primary hover:text-accent transition-colors"
                >
                  View @upbolt.studios
                  <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </div>
          </Card>

        </div>

      </div>

    </div>
  );
}
