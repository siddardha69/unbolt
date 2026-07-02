"use client";

import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Icon } from "../shared/Icon";
import { verticals, Vertical } from "@/lib/data/verticals";

type Frequency = "Rarely" | "1-2x/week" | "Daily";
type Following = "Under 1K" | "1K-10K" | "10K+";

export const GrowthVisualizer: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedVertical, setSelectedVertical] = useState<Vertical>(verticals[0]);
  const [frequency, setFrequency] = useState<Frequency>("1-2x/week");
  const [selectedFollowing, setSelectedFollowing] = useState<Following>("1K-10K");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate dynamic outputs
  const getDiyViews = () => {
    switch (selectedFollowing) {
      case "Under 1K":
        return "300 - 1,000";
      case "1K-10K":
        return "1,500 - 4,000";
      case "10K+":
        return "6,000 - 15,000";
    }
  };

  const getDiyHours = () => {
    switch (frequency) {
      case "Rarely":
        return "6 hrs / mo";
      case "1-2x/week":
        return "18 hrs / mo";
      case "Daily":
        return "45 hrs / mo";
    }
  };

  const getUpboltViews = () => {
    let scale = 1.0;
    if (selectedFollowing === "1K-10K") scale = 2.0;
    if (selectedFollowing === "10K+") scale = 4.5;

    const reachStr = selectedVertical.reach; // e.g. "150K - 500K views/mo"
    const matches = reachStr.match(/(\d+)K\s*-\s*(\d+)K/);
    if (matches && matches.length >= 3) {
      const minVal = Math.round(parseInt(matches[1]) * scale);
      const maxVal = Math.round(parseInt(matches[2]) * scale);
      
      const formatNum = (num: number) => {
        if (num >= 1000) return (num / 1000).toFixed(1) + "M";
        return num + "K";
      };
      
      return `${formatNum(minVal)} - ${formatNum(maxVal)}`;
    }
    return reachStr.replace(" views/mo", "");
  };

  const getUpboltLeads = () => {
    switch (selectedVertical.id) {
      case "clinics":
        return "34+ Patient Bookings / mo";
      case "restaurants":
        return "140+ Table Covers / mo";
      case "realestate":
        return "22+ Direct Buyer Inquiries / mo";
      case "fitness":
        return "45+ Trial Class Signups / mo";
      default:
        return "30+ Direct Inquiries / mo";
    }
  };

  // Compute chart data dynamically
  const getChartData = () => {
    let startReach = 100;
    if (selectedFollowing === "Under 1K") startReach = 100;
    else if (selectedFollowing === "1K-10K") startReach = 400;
    else startReach = 1200;

    let freqMultiplier = 1.0;
    if (frequency === "Rarely") freqMultiplier = 0.6;
    else if (frequency === "Daily") freqMultiplier = 1.4;

    const diyMult = selectedVertical.diyMultiplier;
    const managedMult = selectedVertical.managedMultiplier;

    return [
      {
        name: "Day 0",
        DIY: Math.round(startReach),
        Upbolt: Math.round(startReach)
      },
      {
        name: "Day 30",
        DIY: Math.round(startReach * (1 + (diyMult - 1) * freqMultiplier * 0.25)),
        Upbolt: Math.round(startReach * (1 + (managedMult - 1) * freqMultiplier * 0.55))
      },
      {
        name: "Day 60",
        DIY: Math.round(startReach * (1 + (diyMult - 1) * freqMultiplier * 0.5)),
        Upbolt: Math.round(startReach * (1 + (managedMult - 1) * freqMultiplier * 1.1))
      },
      {
        name: "Day 90",
        DIY: Math.round(startReach * (1 + (diyMult - 1) * freqMultiplier * 0.75)),
        Upbolt: Math.round(startReach * (1 + (managedMult - 1) * freqMultiplier * 1.85))
      }
    ];
  };

  const chartData = getChartData();
  const finalDiy = chartData[3].DIY;
  const finalUpbolt = chartData[3].Upbolt;
  const reachMultiplier = (finalUpbolt / finalDiy).toFixed(1);

  return (
    <Card className="w-full bg-base-light border border-text-primary/[0.06] rounded-[8px] p-6 md:p-8">
      
      {/* 1. Advantage Headline Banner */}
      <div className="bg-accent/5 border border-accent/20 rounded-[4px] p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Badge variant="accent" className="mb-2 text-[9px] uppercase tracking-wider">
            Unbolt Impact Delta
          </Badge>
          <h4 className="text-base md:text-lg font-display font-bold text-text-primary">
            Unbolt yields <span className="text-accent">{reachMultiplier}x</span> higher reach than DIY efforts.
          </h4>
          <p className="text-xs text-text-muted mt-1">
            Calculated based on {selectedVertical.name} with {frequency.toLowerCase()} publishing.
          </p>
        </div>
        <div className="flex gap-4 flex-shrink-0">
          <div className="text-center px-4 py-2 border border-text-primary/[0.06] bg-base rounded-[4px]">
            <span className="text-[10px] text-text-muted uppercase block">Time Saved</span>
            <span className="text-sm font-display font-bold text-text-primary">100% Autopilot</span>
          </div>
          <div className="text-center px-4 py-2 border border-text-primary/[0.06] bg-base rounded-[4px]">
            <span className="text-[10px] text-text-muted uppercase block">New Inquiries</span>
            <span className="text-sm font-display font-bold text-accent">Direct to DM/Inbox</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Inputs */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <h3 className="text-base font-display font-bold text-text-primary mb-2">
              1. Choose Your Industry
            </h3>
            <p className="text-xs text-text-muted mb-4">
              Our content systems are tailored to vertical-specific customer psychology.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {verticals.map((vert) => (
                <button
                  key={vert.id}
                  onClick={() => setSelectedVertical(vert)}
                  className={`py-3 px-4 text-xs font-display font-medium rounded-[4px] border text-center transition-all focus:outline-none cursor-pointer ${
                    selectedVertical.id === vert.id
                      ? "bg-accent border-accent text-text-primary"
                      : "bg-base border-text-primary/10 text-text-muted hover:border-text-primary/20 hover:text-text-primary"
                  }`}
                >
                  {vert.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-display font-bold text-text-primary mb-2">
              2. Current Posting Frequency
            </h3>
            <p className="text-xs text-text-muted mb-4">
              How often are you writing, filming, editing, and publishing reels?
            </p>
            <div className="grid grid-cols-3 gap-2">
              {(["Rarely", "1-2x/week", "Daily"] as Frequency[]).map((freq) => (
                <button
                  key={freq}
                  onClick={() => setFrequency(freq)}
                  className={`py-3 px-2 text-xs font-display font-medium rounded-[4px] border text-center transition-all focus:outline-none cursor-pointer ${
                    frequency === freq
                      ? "bg-accent border-accent text-text-primary"
                      : "bg-base border-text-primary/10 text-text-muted hover:border-text-primary/20 hover:text-text-primary"
                  }`}
                >
                  {freq}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-display font-bold text-text-primary mb-2">
              3. Current Following Size
            </h3>
            <p className="text-xs text-text-muted mb-4">
              Select your current baseline organic audience tier.
            </p>
            <div className="grid grid-cols-3 gap-2">
              {(["Under 1K", "1K-10K", "10K+"] as Following[]).map((foll) => (
                <button
                  key={foll}
                  onClick={() => setSelectedFollowing(foll)}
                  className={`py-3 px-2 text-xs font-display font-medium rounded-[4px] border text-center transition-all focus:outline-none cursor-pointer ${
                    selectedFollowing === foll
                      ? "bg-accent border-accent text-text-primary"
                      : "bg-base border-text-primary/10 text-text-muted hover:border-text-primary/20 hover:text-text-primary"
                  }`}
                >
                  {foll}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Comparative Dashboard and Graph */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Comparison Cards: Side by Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* DIY Path */}
            <div className="bg-base border border-text-primary/5 rounded-[4px] p-5">
              <span className="text-[9px] uppercase tracking-wider text-text-muted font-bold block mb-3">
                Path A: DIY Social Hustle
              </span>
              <div className="space-y-3">
                <div>
                  <span className="text-[10px] text-text-muted block">Monthly Reach</span>
                  <span className="text-sm font-display font-bold text-text-muted line-through">
                    {getDiyViews()} views
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-text-muted block">Your Time Spent</span>
                  <span className="text-sm font-display font-bold text-text-muted">
                    {getDiyHours()}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-text-muted block">Typical Result</span>
                  <span className="text-xs font-semibold text-text-muted">
                    Flatline views, zero inquiries
                  </span>
                </div>
              </div>
            </div>

            {/* Unbolt System */}
            <div className="bg-base-light border border-accent/30 shadow-[0_0_15px_rgba(255,79,0,0.05)] rounded-[4px] p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-[8px] uppercase tracking-widest text-text-primary font-bold px-2 py-0.5 rounded-bl-[4px]">
                Recommended
              </div>
              <span className="text-[9px] uppercase tracking-wider text-accent font-bold block mb-3">
                Path B: Unbolt System
              </span>
              <div className="space-y-3">
                <div>
                  <span className="text-[10px] text-text-muted block">Estimated Reach</span>
                  <span className="text-sm font-display font-bold text-accent">
                    {getUpboltViews()} views
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-text-muted block">Your Time Spent</span>
                  <span className="text-sm font-display font-bold text-text-primary">
                    0 hours (Done-For-You)
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-text-muted block">Expected Outcome</span>
                  <span className="text-xs font-semibold text-text-primary">
                    {getUpboltLeads()}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Recharts Trajectory Graph */}
          <div className="bg-base border border-text-primary/[0.04] p-5 rounded-[4px]">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-text-primary mb-4">
              90-Day Views Projection
            </h4>
            
            <div className="w-full h-[220px] relative">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorUpbolt" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF4F00" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#FF4F00" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorDiy" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8E8E93" stopOpacity={0.05}/>
                        <stop offset="95%" stopColor="#8E8E93" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                    <XAxis
                      dataKey="name"
                      stroke="#8E8E93"
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#8E8E93"
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0B0B0C",
                        borderColor: "rgba(255, 255, 255, 0.08)",
                        borderRadius: "4px",
                        fontSize: "11px",
                        color: "#FFFFFF"
                      }}
                      labelClassName="text-accent font-bold"
                    />
                    <Area
                      name="Typical DIY Hustle"
                      type="monotone"
                      dataKey="DIY"
                      stroke="#8E8E93"
                      strokeWidth={1.5}
                      strokeDasharray="4 4"
                      fillOpacity={1}
                      fill="url(#colorDiy)"
                    />
                    <Area
                      name="Unbolt Managed System"
                      type="monotone"
                      dataKey="Upbolt"
                      stroke="#FF4F00"
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill="url(#colorUpbolt)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="w-full h-full bg-base/50 animate-pulse rounded flex items-center justify-center">
                  <span className="text-xs text-text-muted">Loading projection...</span>
                </div>
              )}
            </div>
            <p className="text-[9px] text-text-muted/50 mt-3 leading-tight text-center">
              *Reach index represents cumulative relative views. Projections based on vertical averages and setup benchmarks.
            </p>
          </div>

        </div>

      </div>

      {/* CTA Button */}
      <div className="mt-8 text-center border-t border-text-primary/[0.04] pt-6">
        <Button href="/contact" variant="primary" className="w-full sm:w-auto py-3.5 px-8">
          Get Your Real Growth Plan
        </Button>
      </div>

    </Card>
  );
};
