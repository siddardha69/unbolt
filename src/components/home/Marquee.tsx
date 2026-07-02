"use client";

import React from "react";

export const Marquee: React.FC = () => {
  const items = [
    "350+ REELS DELIVERED",
    "280% AVG VIEWS LIFT",
    "100% DONE-FOR-YOU PRODUCTION",
    "+42% TABLE RESERVATION LIFT",
    "+34 INBOUND CONSULTATIONS/MO",
    "85 NEW MEMBERS SIGNED",
    "ZERO STOCK VIDEOS USED"
  ];

  // Repeat items to ensure smooth continuous looping
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-accent py-4 overflow-hidden border-y border-accent/20 flex select-none relative z-10">
      <div className="flex gap-16 animate-marquee whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-xs font-display font-bold tracking-widest text-text-primary"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-text-primary/40 inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
};
