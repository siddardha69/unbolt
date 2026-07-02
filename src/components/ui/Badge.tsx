import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "outline",
  className = ""
}) => {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide";
  
  const variantStyles = {
    primary: "bg-base-light text-text-primary border border-text-primary/10",
    accent: "bg-accent/10 text-accent border border-accent/20",
    outline: "bg-transparent text-text-muted border border-text-primary/10"
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
