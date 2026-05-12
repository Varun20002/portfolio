import React from 'react';

const bodyClass =
  'font-hand text-lg text-gray-800 leading-tight mb-4 block';

export default function StickyNote({
  phase,
  title,
  text,
  lesson,
  color,
  rotation,
  isCurrent,
  textHref,
  textLinkLabel,
  readMoreHref,
  readMoreLabel = 'Read more',
}) {
  const body = textHref ? (
    <a
      href={textHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`${bodyClass} underline decoration-[#D32F2F] decoration-2 underline-offset-2 hover:text-[#D32F2F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D32F2F]`}
      aria-label={textLinkLabel || `Message on WhatsApp: ${text}`}
    >
      {text}
    </a>
  ) : readMoreHref ? (
    <div className="mb-4">
      <p className="font-hand text-lg text-gray-800 leading-tight mb-1 block">{text}</p>
      <a
        href={readMoreHref}
        className="font-hand text-lg font-semibold text-[#D32F2F] underline decoration-[#D32F2F] decoration-2 underline-offset-2 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D32F2F]"
      >
        {readMoreLabel}
      </a>
    </div>
  ) : (
    <p className={bodyClass}>{text}</p>
  );

  return (
    <div className={`${color} p-4 sm:p-6 border-l-4 border-black shadow-lg transform ${rotation} [@media(hover:hover)_and_(pointer:fine)]:hover:rotate-0 hover:shadow-xl transition-all duration-300 ease-out-expo w-full h-full flex flex-col relative group`}>
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-5 bg-black/10 rotate-2" />
      <span className="font-mono text-[10px] uppercase tracking-widest text-black/40 mb-2 block">{phase}</span>
      <h3 className={`font-hand text-2xl sm:text-3xl font-bold mb-2 ${isCurrent ? 'text-[#D32F2F]' : ''}`}>{title}</h3>
      {body}
      <div className="mt-auto pt-3 border-t border-black/10">
        <p className="font-hand text-xl font-bold text-[#D32F2F]">{lesson}</p>
      </div>
    </div>
  );
}
