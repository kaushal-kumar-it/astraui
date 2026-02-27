'use client';

import React from 'react';

interface GlowingBorderButtonProps {
  text: string;
  onClick?: () => void;
  gradientColors?: string;
  innerBgColor?: string;
  textColor?: string;
  borderWidth?: string;
  spinDuration?: string;
  padding?: string;
  rounded?: string;
}

export const GlowingBorderButton: React.FC<GlowingBorderButtonProps> = ({
  text,
  onClick,
  gradientColors = '#E2CBFF, #393BB2, #E2CBFF',
  innerBgColor = 'bg-zinc-950',
  textColor = 'text-white',
  borderWidth = '2px',
  spinDuration = '2s',
  padding = 'px-8 py-2',
  rounded = 'rounded-full',
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex overflow-hidden focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50 active:scale-95 transition-transform ${rounded}`}
      style={{ padding: borderWidth }}
    >
      <span
        className="absolute inset-[-1000%] animate-spin"
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, ${gradientColors})`,
          animationDuration: spinDuration,
        }}
      />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center ${innerBgColor} ${padding} text-sm font-medium ${textColor} backdrop-blur-3xl transition-colors hover:bg-zinc-900 ${rounded}`}
      >
        {text}
      </span>
    </button>
  );
};