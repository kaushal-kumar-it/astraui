'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { Showcase } from '../../stories/showcase/showcase';
import { TypewriterText } from '../../stories/texteffects/typewriter';
import { FillText } from '../../stories/texteffects/filltext';
import { ScrambleText } from '@/stories/texteffects/ScrambleText';
import { DotExpandButton } from '@/stories/buttons/dotexpandbutton';
import { GlowingBorderButton } from '@/stories/buttons/glowingborderbutton';
import { MagneticButton } from '@/stories/buttons/magneticbutton';
import { GradientBorderCard } from '@/stories/cards/gradientbordercard';
import { InteractiveDots } from '@/stories/background/interactivedots';
import { StarsBackground } from '@/components/StarsBackground';
import { SpotlightGrid } from '@/stories/background/spotlightgrid';
import { SlidingTabs } from '@/stories/navbar/slidingtabs';
import { componentCode } from '@/data/coderegistry';

const NAV_ITEMS = [
  { label: 'NAVIGATION', isGroup: true },
  { id: 'slidingtabs', label: 'Sliding Pill Tabs' },
  { label: 'TEXT EFFECTS', isGroup: true },
  { id: 'typewriter', label: 'Typewriter' },
  { id: 'filltext', label: 'Liquid Fill' },
  { id: 'scramble', label: 'Scramble' },
  { label: 'BUTTONS', isGroup: true },
  { id: 'dotexpand', label: 'Dot Expand' },
  { id: 'glowingborder', label: 'Glowing Border' },
  { id: 'magnetic', label: 'Magnetic' },
  { label: 'CARDS', isGroup: true },
  { id: 'gradientcard', label: 'Gradient Border Card' },
  { label: 'BACKGROUNDS', isGroup: true },
  { id: 'interactivedots', label: 'Interactive Dots' },
  { id: 'starsbg', label: 'Warp Speed Stars' },
  { id: 'spotlightgrid', label: 'Spotlight Grid' },
] as const;

export default function ComponentsPage() {
  const [activePage, setActivePage] = useState('slidingtabs');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setActivePage(id);
    setMenuOpen(false);
  };

  const navContent = (
    <>
      <Link href="/" className="text-zinc-400 hover:text-white text-sm mb-8 block transition-colors">
        ← Back to Home
      </Link>
      <h1 className="text-lg font-black mb-6 px-3">Neel UI</h1>
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) =>
          'isGroup' in item ? (
            <p key={item.label} className="text-xs text-zinc-500 font-bold px-3 mt-5 mb-1 tracking-widest uppercase">
              {item.label}
            </p>
          ) : (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-left px-3 py-2 rounded-md text-sm transition-colors cursor-pointer border-none ${
                activePage === item.id
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              {item.label}
            </button>
          )
        )}
      </nav>
    </>
  );

  return (
    <div className="flex min-h-screen bg-black text-white font-sans">

      <aside className="scrollbar-thin hidden md:flex flex-col w-60 shrink-0 fixed top-0 left-0 h-screen border-r border-zinc-900 px-4 py-8 overflow-y-auto z-30">
        {navContent}
      </aside>

      <div className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 bg-black border-b border-zinc-900">
        <span className="font-black text-base">Neel UI</span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-zinc-400 hover:text-white transition-colors p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-30 flex">
          <div className="scrollbar-thin w-72 bg-zinc-950 border-r border-zinc-900 px-4 py-8 overflow-y-auto mt-[49px]">
            {navContent}
          </div>
          <div className="flex-1 bg-black/60 backdrop-blur-sm mt-[49px]" onClick={() => setMenuOpen(false)} />
        </div>
      )}

      <main className="flex-1 md:ml-60 px-4 py-8 md:px-12 md:py-16 mt-[49px] md:mt-0 max-w-4xl">

        
        {activePage === 'slidingtabs' && (
          <Showcase
            title="Sliding Pill Tabs"
            description="A sleek navigation menu where the background smoothly glides and resizes behind the active tab."
            codeString={componentCode.slidingTabsFull}
            props={[
              { name: 'tabs', type: 'Tab[]', description: 'Array of objects containing { id, label }.' },
              { name: 'defaultActive', type: 'string', description: 'The ID of the tab that should be active on initial load.' },
            ]}
          >
            <div className="flex w-full h-64 items-center justify-center border border-zinc-800 rounded-2xl bg-zinc-950/50">
              <SlidingTabs 
                tabs={[
                  { id: 'overview', label: 'Overview' },
                  { id: 'integrations', label: 'Integrations' },
                  { id: 'billing', label: 'Billing & Plans' },
                  { id: 'settings', label: 'Settings' },
                ]} 
              />
            </div>
          </Showcase>
        )}

        
        {activePage === 'typewriter' && (
          <Showcase
            title="Typewriter Text"
            description="A multi-word looping typewriter with a blinking cursor."
            codeString={componentCode.typewriter}
          >
            <TypewriterText staticText="We specialize in" words={['Design.', 'Marketing.', 'Growth.']} textColor="#fff" />
          </Showcase>
        )}

        {activePage === 'scramble' && (
          <Showcase
            title="Scramble Text"
            description="Text that continuously scrambles its characters for a dynamic effect."
            codeString={componentCode.scramble}
          >
            <ScrambleText text="SCRAMBLE Text" color="#f87171" />
          </Showcase>
        )}

        {activePage === 'filltext' && (
          <Showcase
            title="Liquid Fill"
            description="Uses an SVG wave to create a liquid rising effect."
            codeString={componentCode.filltext}
          >
            <FillText text="SYSTEM" baseColor="#bae6fd" fillColor="#0284c7" size="5rem" />
          </Showcase>
        )}

        
        {activePage === 'dotexpand' && (
          <Showcase
            title="Dot Expand Button"
            description="A button with a dot that expands into an arrow on hover."
            codeString={componentCode.dotExpand}
          >
            <DotExpandButton text="Learn More" />
          </Showcase>
        )}

        {activePage === 'glowingborder' && (
          <Showcase
            title="Glowing Border Button"
            description="A button with a continuously spinning glowing border."
            codeString={componentCode.glowingBorder}
          >
            <GlowingBorderButton text="Click Me" gradientColors="#E2CBFF, #393BB2, #E2CBFF" innerBgColor="bg-zinc-950" textColor="text-white" borderWidth="2px" spinDuration="2s" padding="px-8 py-2" rounded="rounded-full" />
          </Showcase>
        )}

        {activePage === 'magnetic' && (
          <Showcase
            title="Magnetic Button"
            description="A button that attracts the cursor with a magnetic pull effect."
            codeString={componentCode.magnetic}
          >
            <MagneticButton text="Hover Me" />
          </Showcase>
        )}

        
        {activePage === 'gradientcard' && (
          <Showcase
            title="Gradient Border Card"
            description="A card with a spinning gradient outline."
            codeString={componentCode.gradientCard}
          >
            <GradientBorderCard className="w-72 md:w-80 h-96 p-8 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-2 text-white">Pro Plan</h3>
              <p className="text-zinc-400">$29/month</p>
            </GradientBorderCard>
          </Showcase>
        )}

        
        {activePage === 'interactivedots' && (
          <Showcase
            title="Interactive Dot Background"
            description="A canvas-based particle network that physically reacts to the mouse."
            codeString={componentCode.interactiveDotsFull}
          >
            <div className="relative h-64 md:h-[400px] w-full rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center">
              <InteractiveDots dotColor="#ff0054" lineColor="#ff0054" bgColor="#000000" />
              <div className="z-10 text-center pointer-events-none">
                <h3 className="text-xl md:text-3xl font-bold text-white tracking-widest uppercase mb-2">Hover Over Me</h3>
                <p className="text-zinc-400 text-sm md:text-base">Watch the particles scatter.</p>
              </div>
            </div>
          </Showcase>
        )}

        {activePage === 'starsbg' && (
          <Showcase
            title="Warp Speed Stars"
            description="A 3D starfield canvas that creates a hyperspace flying effect."
            codeString={componentCode.starsBackgroundFull}
          >
            <div className="relative h-64 md:h-[400px] w-full rounded-2xl overflow-hidden border border-zinc-800 flex flex-col items-center justify-center">
              <StarsBackground />
              <div className="z-10 text-center pointer-events-none">
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-widest uppercase mb-2 drop-shadow-lg">Hyperspace</h3>
                <p className="text-zinc-300 text-sm md:text-base drop-shadow-md">Light speed engaged.</p>
              </div>
            </div>
          </Showcase>
        )}

        {activePage === 'spotlightgrid' && (
          <Showcase 
            title="Spotlight Grid" 
            description="A hidden grid that is revealed by a mouse-tracking flashlight effect." 
            codeString={componentCode.spotlightGridFull}
          >
            <div className="relative h-64 md:h-[400px] w-full rounded-2xl overflow-hidden border border-zinc-800 flex flex-col items-center justify-center">
              <SpotlightGrid gridColor="rgba(0, 255, 204, 0.2)" bgColor="#09090b" spotlightSize={350} />
              <div className="z-10 text-center pointer-events-none">
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-2">Hover to Reveal</h3>
                <p className="text-zinc-400 text-sm md:text-base">Pure CSS. Zero canvas rendering.</p>
              </div>
            </div>
          </Showcase>
        )}

      </main>
    </div>
  );
}