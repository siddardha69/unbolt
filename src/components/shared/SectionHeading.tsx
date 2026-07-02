import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "left",
  className = ""
}) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignClass} ${className} mb-12 md:mb-16`}>
      {badge && (
        <span className="inline-block text-xs uppercase tracking-wider text-accent font-semibold mb-3 border border-accent/20 px-3 py-1 rounded-full bg-accent/5">
          {badge}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary tracking-tight leading-none mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-text-muted font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
