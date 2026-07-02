import React from "react";
import Link from "next/link";
import { Card } from "../ui/Card";
import { Icon } from "../shared/Icon";

interface CaseStudyItem {
  id: string;
  clientName: string;
  industry: string;
  beforeMetric: string;
  afterMetric: string;
  summary: string;
}

interface CaseStudyStripProps {
  caseStudies: CaseStudyItem[];
}

export const CaseStudyStrip: React.FC<CaseStudyStripProps> = ({ caseStudies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {caseStudies.map((study) => (
        <Card
          key={study.id}
          hoverable
          className="flex flex-col justify-between h-full bg-base-light border border-text-primary/[0.06] rounded-[8px] p-6"
        >
          <div>
            {/* Header: Client & Industry */}
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-wider text-text-muted block mb-1">
                {study.industry}
              </span>
              <h3 className="text-base font-display font-bold text-text-primary">
                {study.clientName}
              </h3>
            </div>

            {/* Visual Metric Jump */}
            <div className="grid grid-cols-2 gap-4 bg-base p-4 border border-text-primary/[0.04] rounded-[4px] mb-6">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-text-muted block mb-1">
                  Before
                </span>
                <span className="text-sm font-display font-bold text-text-muted line-through">
                  {study.beforeMetric}
                </span>
              </div>
              <div className="border-l border-text-primary/[0.06] pl-4">
                <span className="text-[10px] uppercase tracking-wider text-accent block mb-1">
                  After
                </span>
                <span className="text-sm font-display font-bold text-accent">
                  {study.afterMetric}
                </span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-xs text-text-muted leading-relaxed mb-6">
              {study.summary}
            </p>
          </div>

          {/* Link */}
          <div>
            <Link
              href={`/work#${study.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-text-primary hover:text-accent transition-colors"
            >
              Read case study
              <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};
