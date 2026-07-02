"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export const HeroVideo: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden bg-base pt-24 pb-16 px-6">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-base/95 via-base/60 to-base z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          {/* Accent Label */}
          <motion.span
            variants={staggerItem}
            className="text-xs uppercase tracking-wider font-semibold text-accent mb-6 border border-accent/20 px-3 py-1 rounded-full bg-accent/5"
          >
            Boutique Content Production Agency
          </motion.span>

          {/* Headline (Tagline) */}
          <motion.h1
            variants={staggerItem}
            className="text-2xl sm:text-2xl md:text-3xl font-display font-bold tracking-tight text-text-primary leading-[1.05] max-w-4xl mb-6"
          >
            We plan, shoot, edit, and post high-retention short-form video for local businesses<span className="text-accent font-black">.</span>
          </motion.h1>

          {/* Subheadline (Concrete statement, no fluff) */}
          <motion.p
            variants={staggerItem}
            className="text-sm md:text-base text-text-muted max-w-2xl leading-relaxed mb-10"
          >
            No generic stock templates. We shoot 4K native footage on-site and edit with bespoke sound design to turn local attention into direct inquiries.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Button href="/contact" variant="primary" className="w-full sm:w-auto">
              Book a Call
            </Button>
            <Button href="/work" variant="ghost" className="w-full sm:w-auto">
              See Our Work
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-base to-transparent z-15 pointer-events-none" />
    </section>
  );
};
