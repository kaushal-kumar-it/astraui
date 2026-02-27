import React, { useState, useEffect } from 'react';

interface FillTextProps {
  text: string;
  baseColor?: string;
  fillColor?: string;
  size?: string;
  fontFamily?: string;
  duration?: number;
}

export const FillText: React.FC<FillTextProps> = ({
  text,
  baseColor = '#ffb3c6',
  fillColor = '#ff0054',
  size = '6rem',
  fontFamily = '"Arial Black", "Impact", sans-serif',
  duration = 3000,
}) => {
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsFilled(true), 100);
    return () => clearTimeout(timer);
  }, []);
  const rawSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="none"><path d="M0 0 L100 0 Q130 25 100 50 T100 100 Q130 125 100 150 T100 200 L0 200 Z" fill="${fillColor}"/></svg>`;

  const waveSvg = `data:image/svg+xml,${encodeURIComponent(rawSvg)}`;

  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily,
        fontSize: size,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        
        backgroundImage: `url('${waveSvg}'), linear-gradient(${baseColor}, ${baseColor})`,

        backgroundSize: '200% 200%, 100% 100%',
        backgroundRepeat: 'repeat-y, no-repeat',

        backgroundPosition: isFilled ? '0% 400%, 0% 0%' : '100% 0%, 0% 0%',
        transition: isFilled ? `background-position ${duration}ms cubic-bezier(0.25, 1, 0.5, 1)` : 'none',

        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
      }}
    >
      {text}
    </span>
  );
};