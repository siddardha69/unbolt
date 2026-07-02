"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  duration?: number; // in seconds
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = "",
  duration = 1.5
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display font-bold tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};
