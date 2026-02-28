'use client';

import React from 'react';

interface GradientBorderCardProps {
  children: React.ReactNode;
  className?: string;
  gradientColors?: string;
  animationSpeed?: string;
}

export const GradientBorderCard: React.FC<GradientBorderCardProps> = ({
  children,
  className = "p-8",
  gradientColors = "#00ffcc, #ff0054, #00ffcc",
  animationSpeed = "3s",
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl p-[2px] group">
      <span
        className="absolute inset-[-1000%] animate-spin"
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, ${gradientColors})`,
          animationDuration: animationSpeed,
        }}
      />
      
      <div className={`relative h-full w-full rounded-2xl bg-zinc-950 flex flex-col ${className}`}>
        {children}
      </div>
    </div>
  );
};