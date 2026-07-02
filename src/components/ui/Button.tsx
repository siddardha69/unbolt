"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = ""
}) => {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);

  // Motion values for magnetic effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for translation
  const springX = useSpring(x, { stiffness: 120, damping: 12 });
  const springY = useSpring(y, { stiffness: 120, damping: 12 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from center of button
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Translate button up to 8px max in either direction
    const maxTranslation = 8;
    const strength = 0.15; // sensitivity multiplier
    
    const targetX = Math.min(Math.max(distanceX * strength, -maxTranslation), maxTranslation);
    const targetY = Math.min(Math.max(distanceY * strength, -maxTranslation), maxTranslation);

    x.set(targetX);
    y.set(targetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = "relative inline-flex items-center justify-center font-display font-medium text-sm tracking-wide transition-all duration-300 select-none cursor-pointer focus:outline-none py-3.5 px-7 border";
  
  const variantStyles = {
    primary: "bg-accent border-accent text-text-primary rounded-[4px] hover:bg-accent/90 hover:border-accent/90 shadow-lg shadow-accent/10",
    ghost: "bg-transparent border-text-primary/20 text-text-primary rounded-[4px] hover:bg-text-primary hover:border-text-primary hover:text-base hover:shadow-lg hover:shadow-text-primary/5"
  };

  const elementStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const renderContent = () => (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: springX, y: springY }}
          className={elementStyles}
        >
          {renderContent()}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      ref={ref as any}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={elementStyles}
    >
      {renderContent()}
    </motion.button>
  );
};
