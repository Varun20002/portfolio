import React, { useState, useEffect } from 'react';

export default function CheckItem({ text, delay }) {
  const [checked, setChecked] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setChecked(true), delay + 600);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="flex items-center gap-3 sm:gap-5 group">
      <div className="w-8 h-8 border-[2.5px] border-gray-600 rounded-md flex items-center justify-center flex-shrink-0 bg-transparent relative overflow-hidden">
        <svg 
          className={`w-7 h-7 text-[#D32F2F] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-[stroke-dashoffset,opacity] duration-500 ease-out-expo ${checked ? 'stroke-dashoffset-0 opacity-100' : 'stroke-dashoffset-[50] opacity-0'}`} 
          style={{ strokeDasharray: 50, strokeDashoffset: checked ? 0 : 50 }}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span className="font-hand text-xl sm:text-[2.2rem] text-gray-800 leading-none mt-1">{text}</span>
    </div>
  );
}

