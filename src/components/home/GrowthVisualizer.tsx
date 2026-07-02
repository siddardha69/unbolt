"use client";

import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
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

  // Compute data for Recharts based on inputs
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
        Managed: Math.round(startReach)
      },
      {
        name: "Day 30",
        DIY: Math.round(startReach * (1 + (diyMult - 1) * freqMultiplier * 0.25)),
        Managed: Math.round(startReach * (1 + (managedMult - 1) * freqMultiplier * 0.45))
      },
      {
        name: "Day 60",
        DIY: Math.round(startReach * (1 + (diyMult - 1) * freqMultiplier * 0.5)),
        Managed: Math.round(startReach * (1 + (managedMult - 1) * freqMultiplier * 0.95))
      },
      {
        name: "Day 90",
        DIY: Math.round(startReach * (1 + (diyMult - 1) * freqMultiplier * 0.75)),
        Managed: Math.round(startReach * (1 + (managedMult - 1) * freqMultiplier * 1.5))
      }
    ];
  };

  const chartData = getChartData();

  // Dynamic values for output cards based on selected vertical
  const getVolume = () => selectedVertical.volume;
  const getReach = () => selectedVertical.reach;
  const getOutcome = () => selectedVertical.outcome;

  return (
    <Card className="w-full bg-base-light border border-text-primary/[0.06] rounded-[8px] p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Input selectors */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div>
            <h3 className="text-lg font-display font-bold text-text-primary mb-2">
              Personalize Your Trajectory
            </h3>
            <p className="text-xs text-text-muted mb-6">
              Select your vertical and current positioning to visualize the difference between DIY social growth and a managed content system.
            </p>

            {/* Vertical Pill Selector */}
            <div className="mb-6">
              <label className="text-xs font-semibold uppercase tracking-wider text-text-muted block mb-3">
                1. Your Industry
              </label>
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

            {/* Posting Frequency Pill Selector */}
            <div className="mb-6">
              <label className="text-xs font-semibold uppercase tracking-wider text-text-muted block mb-3">
                2. Current Posting Frequency
              </label>
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

            {/* Following Pill Selector */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-text-muted block mb-3">
                3. Current Following
              </label>
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
        </div>

        {/* Chart display */}
        <div className="lg:col-span-7 flex flex-col justify-between h-[300px] sm:h-[350px] lg:h-auto min-h-[300px]">
          <div className="w-full h-full min-h-[250px] relative">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis
                    dataKey="name"
                    stroke="#8E8E93"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#8E8E93"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0B0B0C",
                      borderColor: "rgba(255, 255, 255, 0.08)",
                      borderRadius: "4px",
                      fontSize: "12px",
                      color: "#FFFFFF"
                    }}
                    labelClassName="text-accent font-bold"
                  />
                  <Legend
                    verticalAlign="top"
                    height={36}
                    iconSize={8}
                    iconType="circle"
                    wrapperStyle={{ fontSize: "11px", fontFamily: "inherit" }}
                  />
                  <Line
                    name="Typical DIY Trajectory"
                    type="monotone"
                    dataKey="DIY"
                    stroke="#8E8E93"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                  <Line
                    name="Managed Content Trajectory"
                    type="monotone"
                    dataKey="Managed"
                    stroke="#FF4F00" // accent color
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="w-full h-full bg-base/50 animate-pulse rounded flex items-center justify-center">
                <span className="text-xs text-text-muted">Loading projection chart...</span>
              </div>
            )}
          </div>
          <p className="text-[10px] text-text-muted/60 mt-4 leading-normal">
            *Illustrative model based on general growth trends across served industries. Not a guarantee of results. Reach index represents cumulative relative views.
          </p>
        </div>

      </div>

      {/* Trajectory Outputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-text-primary/[0.04]">
        <div className="bg-base border border-text-primary/[0.04] p-4 rounded-[4px]">
          <span className="text-[10px] uppercase tracking-wider text-text-muted block mb-1">
            Typical Content Volume
          </span>
          <p className="text-sm font-display font-semibold text-text-primary transition-all duration-300">
            {getVolume()}
          </p>
        </div>
        <div className="bg-base border border-text-primary/[0.04] p-4 rounded-[4px]">
          <span className="text-[10px] uppercase tracking-wider text-text-muted block mb-1">
            Typical Reach Range
          </span>
          <p className="text-sm font-display font-semibold text-accent transition-all duration-300">
            {getReach()}
          </p>
        </div>
        <div className="bg-base border border-text-primary/[0.04] p-4 rounded-[4px]">
          <span className="text-[10px] uppercase tracking-wider text-text-muted block mb-1">
            What This Usually Supports
          </span>
          <p className="text-sm font-display font-semibold text-text-primary transition-all duration-300">
            {getOutcome()}
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8 text-center">
        <Button href="/contact" variant="primary" className="w-full sm:w-auto">
          Get Your Real Growth Plan
        </Button>
      </div>

    </Card>
  );
};
