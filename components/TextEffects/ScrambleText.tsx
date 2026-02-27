import React, { useState, useEffect } from 'react';

// The pool of random characters we will use to jumble the text
const CHARS = '!<>-_\\/[]{}—=+*^?#________';

// Define our strict types for the component props
interface ScrambleTextProps {
  /** The final text to display after the scramble effect finishes */
  text: string;
  /** How fast the letters cycle in milliseconds (default: 30) */
  speed?: number;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, speed = 30 }) => {
  const [displayText, setDisplayText] = useState<string>(text);

  useEffect(() => {
    let iteration = 0;
    // Using ReturnType ensures compatibility across different JS environments
    let interval: ReturnType<typeof setInterval>; 

    interval = setInterval(() => {
      setDisplayText((prevText) =>
        text
          .split('')
          .map((letter, index) => {
            // If the index is less than our current iteration, show the real letter
            if (index < iteration) {
              return text[index];
            }
            // Otherwise, return a random character from our CHARS string
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      // Stop the interval once we've revealed the whole word
      if (iteration >= text.length) {
        clearInterval(interval);
      }

      // We increment by a fraction so the jumble effect lasts a few frames 
      // before locking in the next correct letter.
      iteration += 1 / 3; 
    }, speed);

    // Cleanup function when the component unmounts
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
      {displayText}
    </span>
  );
};