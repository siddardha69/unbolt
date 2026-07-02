import React from "react";
import Link from "next/link";
import { Card } from "../ui/Card";
import { Icon } from "../shared/Icon";

interface ServiceCardProps {
  id: string;
  name: string;
  icon: string;
  description: string;
  growthPotential: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  name,
  icon,
  description,
  growthPotential
}) => {
  return (
    <Card hoverable className="flex flex-col justify-between h-full bg-base-light border border-text-primary/[0.06] rounded-[8px] p-6">
      <div>
        {/* Header Icon + Potential */}
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 bg-accent/5 border border-accent/10 rounded-[4px] text-accent">
            <Icon name={icon} size={24} />
          </div>
          <span className="text-[10px] uppercase tracking-wider font-semibold text-accent px-2 py-0.5 rounded-full border border-accent/25 bg-accent/5">
            {growthPotential}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-display font-bold text-text-primary mb-3">
          {name}
        </h3>

        {/* Description */}
        <p className="text-xs text-text-muted leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Link */}
      <div>
        <Link 
          href={`/services#${id}`}
          className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-text-primary hover:text-accent transition-colors"
        >
          See details
          <Icon name="arrow-right" size={14} />
        </Link>
      </div>
    </Card>
  );
};
