'use client';

import React, { useState } from 'react';
import { CodeBlock } from '../codeblock/codeblock'; 

interface ShowcaseProps {
  title: string;
  description: string;
  codeString: string;
  children: React.ReactNode; 
}

export const Showcase: React.FC<ShowcaseProps> = ({ title, description, codeString, children }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div style={{ marginBottom: '4rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#fff' }}>{title}</h2>
      <p style={{ color: '#a1a1aa', marginBottom: '1.5rem' }}>{description}</p>

      <div style={{ border: '1px solid #27272a', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#09090b' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid #27272a', backgroundColor: '#18181b' }}>
          <button onClick={() => setActiveTab('preview')} style={{ padding: '1rem', background: 'transparent', border: 'none', cursor: 'pointer', color: activeTab === 'preview' ? '#fff' : '#a1a1aa', borderBottom: activeTab === 'preview' ? '2px solid #fff' : '2px solid transparent' }}>Preview</button>
          <button onClick={() => setActiveTab('code')} style={{ padding: '1rem', background: 'transparent', border: 'none', cursor: 'pointer', color: activeTab === 'code' ? '#fff' : '#a1a1aa', borderBottom: activeTab === 'code' ? '2px solid #fff' : '2px solid transparent' }}>Code</button>
        </div>
        <div style={{ padding: activeTab === 'preview' ? '4rem 2rem' : '0', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
          {activeTab === 'preview' ? children : <CodeBlock code={codeString} />}
        </div>
      </div>
    </div>
  );
};