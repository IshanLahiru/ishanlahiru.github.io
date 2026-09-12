import React from 'react';
import { ExternalLink } from 'lucide-react';

export const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="!mt-14 border-t border-white/10 pt-8 text-xl font-extrabold uppercase tracking-tight text-white sm:text-2xl">
    {children}
  </h2>
);

export const DocLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 font-medium text-orange-400 underline-offset-4 transition-colors hover:text-orange-300 hover:underline"
  >
    {children}
    <ExternalLink className="h-3.5 w-3.5" />
  </a>
);

export const CodeBlock: React.FC<{ code: string; language?: string }> = ({ code, language }) => (
  <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
    {language && (
      <div className="border-b border-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
        {language}
      </div>
    )}
    <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed text-slate-300">
      <code>{code}</code>
    </pre>
  </div>
);

export const DemoFrame: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
    <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-lime-300">{label}</p>
    {children}
  </div>
);
