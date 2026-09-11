import React from 'react';

export const Section: React.FC<{
  id?: string;
  tint?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ id, tint, className = '', children }) => (
  <section id={id} className={`border-t border-white/10 ${tint ? 'bg-white/[0.03]' : ''} ${className}`}>
    <div className="py-16 sm:py-20">{children}</div>
  </section>
);

export const SectionHeading: React.FC<{ eyebrow: string; title: string }> = ({ eyebrow, title }) => (
  <div className="mb-12">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">{title}</h2>
  </div>
);
