'use client';

import React, { useState } from 'react';

interface SpotlightGridProps {
  gridColor?: string;
  bgColor?: string;
  spotlightSize?: number;
  gridSize?: number;
}

export const SpotlightGrid: React.FC<SpotlightGridProps> = ({
  gridColor = 'rgba(255, 255, 255, 0.15)', 
  bgColor = '#000000',
  spotlightSize = 320,
  gridSize = 32,
}) => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-auto"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />

      <div
        className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle ${spotlightSize}px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, ${bgColor} 80%)`,
        }}
      />
    </div>
  );
};