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

const typewriterCode = `<TypewriterText 
  staticText="We specialize in" 
  words={["Design.", "Marketing.", "Growth."]} 
/>`;

const fillTextCode = `<FillText 
  text="SYSTEM" 
  baseColor="#bae6fd" 
  fillColor="#0284c7" 
/>`;
const scrambleTextCode = `<ScrambleText 
  text="SCRAMBLE" 
  baseColor="#fbbf24" 
  scrambleColor="#f87171" 
/>`;
const dotExpandButtonCode = `<DotExpandButton 
  text="Learn More" 
/>`;
const glowingBorderButtonCode=`<GlowingBorderButton 
  text="Click Me" 
  gradientColors="#E2CBFF, #393BB2, #E2CBFF"
  innerBgColor="bg-zinc-950"
  textColor="text-white"
  borderWidth="2px"
  spinDuration="2s"
  padding="px-8 py-2"
  rounded="rounded-full"
/>`;
export default function ComponentsPage() {
  const [activePage, setActivePage] = useState('typewriter');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
      
      <div style={{ width: '250px', borderRight: '1px solid #27272a', padding: '2rem 1rem', height: '100vh', position: 'fixed', overflowY: 'auto' }}>
        <Link href="/" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem', display: 'block' }}>
          ← Back to Home
        </Link>
        <h1 style={{ fontSize: '1.2rem', fontWeight: '900', marginBottom: '2rem', paddingLeft: '1rem' }}>My UI Library</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <p style={{ fontSize: '0.8rem', color: '#71717a', fontWeight: 'bold', paddingLeft: '1rem', marginTop: '1rem' }}>TEXT EFFECTS</p>
          <button onClick={() => setActivePage('typewriter')} style={{ textAlign: 'left', padding: '0.5rem 1rem', background: activePage === 'typewriter' ? '#27272a' : 'transparent', border: 'none', color: '#fff', borderRadius: '6px', cursor: 'pointer' }}>Typewriter</button>
          <button onClick={() => setActivePage('filltext')} style={{ textAlign: 'left', padding: '0.5rem 1rem', background: activePage === 'filltext' ? '#27272a' : 'transparent', border: 'none', color: '#fff', borderRadius: '6px', cursor: 'pointer' }}>Liquid Fill</button>
          <button onClick={() => setActivePage('scramble')} style={{ textAlign: 'left', padding: '0.5rem 1rem', background: activePage === 'scramble' ? '#27272a' : 'transparent', border: 'none', color: '#fff', borderRadius: '6px', cursor: 'pointer' }}>Scramble</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '2rem' }}>
          <p style={{ fontSize: '0.8rem', color: '#71717a', fontWeight: 'bold', paddingLeft: '1rem', marginTop: '1rem' }}>BUTTONS</p>
          <button onClick={() => setActivePage('dotexpand')} style={{ textAlign: 'left', padding: '0.5rem 1rem', background: activePage === 'dotexpand' ? '#27272a' : 'transparent', border: 'none', color: '#fff', borderRadius: '6px', cursor: 'pointer' }}>Dot Expand</button>
          <button onClick={() => setActivePage('glowingborder')} style={{ textAlign: 'left', padding: '0.5rem 1rem', background: activePage === 'glowingborder' ? '#27272a' : 'transparent', border: 'none', color: '#fff', borderRadius: '6px', cursor: 'pointer' }}>Glowing Border</button>
          <button onClick={() => setActivePage('magnetic')} style={{ textAlign: 'left', padding: '0.5rem 1rem', background: activePage === 'magnetic' ? '#27272a' : 'transparent', border: 'none', color: '#fff', borderRadius: '6px', cursor: 'pointer' }}>Magnetic</button>
        </div>
      </div>

      <div style={{ marginLeft: '250px', padding: '4rem', flex: 1, maxWidth: '900px' }}>
        {activePage === 'typewriter' && (
          <Showcase title="Typewriter Text" description="A multi-word looping typewriter with a blinking cursor." codeString={typewriterCode}>
            <TypewriterText staticText="We specialize in" words={['Design.', 'Marketing.', 'Growth.']} textColor="#fff" />
          </Showcase>
        )}
        {activePage === 'scramble' && (
          <Showcase title="Scramble Text" description="Text that continuously scrambles its characters for a dynamic effect." codeString={scrambleTextCode}>
            <ScrambleText text="SCRAMBLE Text" color="#f87171" />
          </Showcase>
        )}
        {activePage === 'filltext' && (
          <Showcase title="Pink Water Flow" description="Uses an SVG wave to create a liquid rising effect." codeString={fillTextCode}>
            <FillText text="SYSTEM" baseColor="#bae6fd" fillColor="#0284c7" size="5rem" />
          </Showcase>
        )}
        {activePage === 'dotexpand' && (
          <Showcase title="Dot Expand Button" description="A button with a dot that expands into an arrow on hover." codeString={dotExpandButtonCode}>
            <DotExpandButton text="Learn More"  />
          </Showcase>
        )}
        {activePage === 'glowingborder' && (
          <Showcase title="Glowing Border Button" description="A button with a continuously spinning glowing border." codeString={glowingBorderButtonCode}>
            <GlowingBorderButton text="Click Me" gradientColors="#E2CBFF, #393BB2, #E2CBFF" innerBgColor="bg-zinc-950" textColor="text-white" borderWidth="2px" spinDuration="2s" padding="px-8 py-2" rounded="rounded-full" />
          </Showcase>
        )}
        {activePage === 'magnetic' && (
          <Showcase title="Magnetic Button" description="A button that attracts the cursor with a magnetic pull effect." codeString={`<MagneticButton text="Hover Me" />`}>
            <MagneticButton text="Hover Me" />
          </Showcase>
        )}
      </div>
    </div>
  );
}