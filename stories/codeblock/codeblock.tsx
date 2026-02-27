'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#1e1e1e' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem', backgroundColor: '#2d2d2d', alignItems: 'center' }}>
        <span style={{ color: '#ccc', fontSize: '0.8rem' }}>TSX</span>
        <button onClick={handleCopy} style={{ background: copied ? '#4ade80' : '#444', color: copied ? '#000' : '#fff', border: 'none', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer' }}>
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>
      <SyntaxHighlighter language="tsx" style={vscDarkPlus} customStyle={{ margin: 0, padding: '1.5rem', fontSize: '0.9rem' }}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};