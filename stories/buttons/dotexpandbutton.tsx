'use client';

import React from 'react';

interface DotExpandButtonProps {
  text: string;
}

export const DotExpandButton: React.FC<DotExpandButtonProps> = ({ text }) => {
  return (
    <button className="group flex items-center gap-3 rounded-full bg-zinc-900 px-6 py-3 font-semibold text-zinc-300 transition-colors duration-300 hover:bg-white hover:text-black active:scale-95 hover:cursor-pointer">

      <div className="relative flex h-8 w-8 items-center justify-center">
        <span className="absolute h-2 w-2 rounded-full bg-white transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:bg-black" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="absolute h-4 w-4 -translate-x-3 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </div>

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        {text}
      </span>

    </button>
  );
};