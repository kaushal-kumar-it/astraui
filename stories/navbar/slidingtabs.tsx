'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface Tab {
  id: string;
  label: string;
}

interface SlidingTabsProps {
  tabs: Tab[];
  defaultActive?: string;
}

export const SlidingTabs: React.FC<SlidingTabsProps> = ({
  tabs,
  defaultActive,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActive || tabs[0]?.id);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const activeElement = containerRef.current.querySelector(
      `[data-id="${activeTab}"]`
    ) as HTMLElement | null;

    if (activeElement) {
      setPillStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
        opacity: 1,
      });
    }
  }, [activeTab]);

  return (
    <div
      ref={containerRef}
      className="relative flex max-w-full overflow-x-auto items-center rounded-full bg-zinc-900/50 p-1 backdrop-blur-md border border-zinc-800 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      <div
        className="absolute bottom-1 top-1 rounded-full bg-zinc-700 transition-all duration-300 ease-out z-0"
        style={pillStyle}
      />
      
      {tabs.map((tab) => (
        <button
          key={tab.id}
          data-id={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative z-10 px-4 md:px-6 py-2 text-sm font-medium transition-colors duration-300 ease-out rounded-full whitespace-nowrap shrink-0 ${
            activeTab === tab.id ? 'text-white' : 'text-zinc-400 hover:text-zinc-200 hover:cursor-pointer'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};