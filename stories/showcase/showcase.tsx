'use client';

import React, { useState } from 'react';
import { CodeBlock } from '../codeblock/codeblock';

interface PropDoc {
  name: string;
  type: string;
  default?: string;
  description: string;
}

interface ShowcaseProps {
  title: string;
  description: string;
  codeString: string;
  children: React.ReactNode;
  props?: PropDoc[];
}

export const Showcase: React.FC<ShowcaseProps> = ({ title, description, codeString, children, props }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'docs'>('preview');

  const tabStyle = (tab: 'preview' | 'code' | 'docs') => ({
    padding: '0.75rem 1.25rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.875rem',
    color: activeTab === tab ? '#fff' : '#71717a',
    borderBottom: activeTab === tab ? '2px solid #fff' : '2px solid transparent',
  });

  return (
    <div style={{ marginBottom: '4rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#fff' }}>{title}</h2>
      <p style={{ color: '#a1a1aa', marginBottom: '1.5rem' }}>{description}</p>

      <div style={{ border: '1px solid #27272a', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#09090b' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid #27272a', backgroundColor: '#18181b' }}>
          <button onClick={() => setActiveTab('preview')} style={tabStyle('preview')}>Preview</button>
          <button onClick={() => setActiveTab('code')} style={tabStyle('code')}>Code</button>
          {props && props.length > 0 && (
            <button onClick={() => setActiveTab('docs')} style={tabStyle('docs')}>Docs</button>
          )}
        </div>

        {activeTab === 'preview' && (
          <div style={{ padding: '4rem 2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
            {children}
          </div>
        )}

        {activeTab === 'code' && (
          <div className="scrollbar-thin" style={{ maxHeight: '480px', overflowY: 'auto' }}>
            <CodeBlock code={codeString} />
          </div>
        )}

        {activeTab === 'docs' && props && (
          <div style={{ padding: '2rem', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #27272a' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#a1a1aa', fontWeight: 600 }}>Prop</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#a1a1aa', fontWeight: 600 }}>Type</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#a1a1aa', fontWeight: 600 }}>Default</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#a1a1aa', fontWeight: 600 }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {props.map((prop, i) => (
                  <tr key={prop.name} style={{ borderBottom: i < props.length - 1 ? '1px solid #18181b' : 'none' }}>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <code style={{ color: '#e879f9', fontFamily: 'monospace', fontSize: '0.85rem' }}>{prop.name}</code>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <code style={{ color: '#38bdf8', fontFamily: 'monospace', fontSize: '0.85rem' }}>{prop.type}</code>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <code style={{ color: '#a3e635', fontFamily: 'monospace', fontSize: '0.85rem' }}>{prop.default ?? '—'}</code>
                    </td>
                    <td style={{ padding: '0.75rem 1rem', color: '#a1a1aa' }}>{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};