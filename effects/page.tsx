"use client"
import { useState, useEffect } from 'react';

type TypewriterProps = {
  text: string;
  speed?: number; // Speed in milliseconds for each character
};

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length-1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [text, speed]);

  return <span className='text-slate-300' >{displayedText}</span>;
};

export default Typewriter;
