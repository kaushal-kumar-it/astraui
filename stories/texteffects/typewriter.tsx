import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  staticText: string;
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  textColor?: string;
  fontSize?: string;
  fontFamily?: string;
  showCursor?: boolean;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  staticText,
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  textColor = '#ffffff',
  fontSize = '3rem',
  fontFamily = '"Space Grotesk", "Fira Code", monospace',
  showCursor = true,
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(typingSpeed);

  useEffect(() => {
    const ticker = setTimeout(() => {
      const i = loopNum % words.length;
      const fullWord = words[i];

      if (isDeleting) {
        setText(fullWord.substring(0, text.length - 1));
        setDelta(deletingSpeed);
      } else {
        setText(fullWord.substring(0, text.length + 1));
        setDelta(typingSpeed);
      }

      if (!isDeleting && text === fullWord) {
        setIsDeleting(true);
        setDelta(pauseDuration);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, delta, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div style={{ fontFamily, fontSize, color: textColor, fontWeight: 'bold', lineHeight: '1.2' }}>
      <div>{staticText}</div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>{text}</span>

        {showCursor && (
          <span
            className="blinking-cursor"
            style={{
              display: 'inline-block',
              width: '0.08em',
              height: '1em',
              backgroundColor: textColor,
              marginLeft: '8px',
            }}
          />
        )}
      </div>

      <style>
        {`
          .blinking-cursor {
            animation: blink 1s step-end infinite;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};