import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverable = false,
  onClick
}) => {
  const baseStyles = "bg-base-light border border-text-primary/[0.06] rounded-[8px] p-6 transition-all duration-300 overflow-hidden";
  const hoverStyles = hoverable 
    ? "hover:border-accent/30 hover:bg-base-light/80 cursor-pointer shadow-xl hover:shadow-accent/5 hover:translate-y-[-2px]" 
    : "";

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
