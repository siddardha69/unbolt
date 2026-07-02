"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Icon } from "../shared/Icon";
import { testimonials } from "@/lib/data/testimonials";

export const TestimonialCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  // Auto-rotation (optional, but nice)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[index];

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Outer Card */}
      <Card className="bg-base-light border border-text-primary/[0.06] rounded-[8px] p-8 md:p-12 relative overflow-hidden min-h-[300px] flex flex-col justify-between">
        
        {/* Quote Icon */}
        <div className="text-accent/10 absolute top-6 left-6 pointer-events-none">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.944 2c-3.077 1.183-4.944 3.738-4.944 6.725h4v9h-10v-6zm-13 0c0-5.141 3.892-10.519 10-11.725l.944 2c-3.077 1.183-4.944 3.738-4.944 6.725h4v9h-10v-6z" />
          </svg>
        </div>

        {/* Carousel Content */}
        <div className="relative z-10 my-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col gap-6"
            >
              {/* Quote text */}
              <blockquote className="text-base md:text-lg font-normal leading-relaxed text-text-primary italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author & Metric Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-text-primary/[0.04] pt-6">
                <div>
                  <h4 className="font-display text-sm font-bold text-text-primary">
                    {current.author}
                  </h4>
                  <p className="text-xs text-text-muted">
                    {current.role}, {current.company}
                  </p>
                </div>
                <div>
                  <Badge variant="accent" className="text-xs py-1.5 px-4 font-semibold uppercase tracking-wider">
                    {current.metricBadge}
                  </Badge>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8 relative z-10 pt-4 border-t border-text-primary/[0.02]">
          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                  i === index ? "w-6 bg-accent" : "w-1.5 bg-text-primary/20"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Prev/Next buttons */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="p-2 border border-text-primary/10 rounded-[4px] text-text-muted hover:text-text-primary hover:border-text-primary/30 transition-colors focus:outline-none cursor-pointer"
              aria-label="Previous quote"
            >
              <Icon name="arrow-right" size={16} className="rotate-180" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border border-text-primary/10 rounded-[4px] text-text-muted hover:text-text-primary hover:border-text-primary/30 transition-colors focus:outline-none cursor-pointer"
              aria-label="Next quote"
            >
              <Icon name="arrow-right" size={16} />
            </button>
          </div>
        </div>

      </Card>
    </div>
  );
};
