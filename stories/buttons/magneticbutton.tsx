'use client';

import React, { useRef, useState } from 'react';

interface MagneticButtonProps {
  text: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ text }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect();

    const middleX = e.clientX - (left + width / 2);
    const middleY = e.clientY - (top + height / 2);

    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-full bg-white px-6 py-3 md:px-8 font-semibold text-black transition-all duration-200 ease-out hover:bg-zinc-200 hover:cursor-pointer"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {text}
    </button>
  );
};