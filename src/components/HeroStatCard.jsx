import React, { useState, useEffect } from 'react';

export default function HeroStatCard({ value, suffix, label, rotation }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const target = parseInt(value, 10) || 0;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setDisplayValue(target);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div
      className="relative flex min-h-[120px] w-full min-w-0 flex-col items-center justify-center rounded-md bg-[#f8f4e6] px-5 py-5 shadow-[2px_4px_10px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-out-expo sm:min-h-[132px] md:px-8 md:py-6 [@media(hover:hover)_and_(pointer:fine)]:hover:scale-105 motion-reduce:hover:scale-100"
      style={{ transform: rotation ? `rotate(${rotation})` : undefined }}
    >
      <div className="absolute -top-3 left-1/2 h-6 w-12 -translate-x-1/2 rounded-sm bg-[#fceba7] opacity-80 shadow-sm mix-blend-multiply rotate-1" />
      <p className="font-marker text-4xl text-[#D32F2F] mb-1 md:text-5xl">
        {displayValue}
        {suffix}
      </p>
      <p className="text-center font-sans text-xs text-gray-500 tracking-wide sm:text-sm">{label}</p>
    </div>
  );
}
