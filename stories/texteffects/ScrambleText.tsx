import React, { useState, useEffect } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

interface ScrambleTextProps {
  text: string;
  speed?: number;
  color?: string;
  size?: string;
  fontFamily?: string; 
  glow?: boolean;      
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({ 
  text, 
  speed = 30, 
  color = '#ffffff', 
  size = '1rem',
  fontFamily = '"Space Grotesk", "Fira Code", monospace',
  glow = true
}) => {
  const [displayText, setDisplayText] = useState<string>(text);

  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;

    interval = setInterval(() => {
      setDisplayText((prevText) =>
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span
      style={{
        fontFamily: fontFamily,
        fontWeight: '600',
        color: color,
        fontSize: size,
        letterSpacing: '0.05em',
        textShadow: glow ? `0 0 10px ${color}80, 0 0 20px ${color}40` : 'none',
        transition: 'color 0.3s ease, text-shadow 0.3s ease',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        display: 'inline-block',
      }}
    >
      {displayText}
    </span>
  );
};