import React from 'react';

export default function ProjectCard({ badge, title, description, metrics = [], tags = [], actions, children, rotation }) {
  return (
    <div className={`bg-white border-2 border-black p-4 sm:p-6 md:p-8 rounded-xl shadow-[4px_4px_0px_#000] md:shadow-[8px_8px_0px_#000] relative transform ${rotation}`}>
      <div className="absolute -top-4 left-8 bg-yellow-400/40 w-16 h-8 -rotate-12" />
      <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-green-200 mb-4">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> {badge}
      </span>
      <h3 className="font-marker text-3xl mb-4">{title}</h3>
      <p className="font-hand text-2xl text-gray-700 mb-8 max-w-2xl">{description}</p>
      
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex flex-wrap gap-4" aria-label="Key metrics">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="flex min-h-[5.5rem] min-w-[6.75rem] flex-col items-center justify-center rounded border border-dashed border-black/20 bg-gray-50 px-4 py-3 text-center sm:min-w-[7.25rem]"
            >
              <p className="font-marker text-2xl leading-none text-[#D32F2F]">{m.v}</p>
              <p className="mt-1.5 font-hand text-base leading-tight text-gray-500 sm:text-lg">{m.l}</p>
            </div>
          ))}
        </div>
        {actions ? (
          <div
            className="flex w-full shrink-0 flex-col gap-3 md:w-auto md:flex-row md:flex-nowrap md:items-center md:justify-end md:gap-3 md:border-l-2 md:border-dashed md:border-black/15 md:pl-8"
            role="group"
            aria-label="Project actions"
          >
            {actions}
          </div>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((t, i) => (
          <span key={i} className="font-mono text-[10px] border border-black/10 px-2 py-1 rounded bg-gray-50">{t}</span>
        ))}
      </div>

      {children}
    </div>
  );
}
