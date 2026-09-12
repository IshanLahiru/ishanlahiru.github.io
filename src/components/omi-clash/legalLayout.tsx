import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface OmiClashLegalLayoutProps {
  title: string;
  effectiveDate?: string;
  backTo: string;
  backLabel: string;
  children: React.ReactNode;
}

const OmiClashLegalLayout: React.FC<OmiClashLegalLayoutProps> = ({
  title,
  effectiveDate,
  backTo,
  backLabel,
  children
}) => {
  const location = useLocation();
  const cameFromPortfolio = (location.state as { from?: string } | null)?.from === 'portfolio';

  return (
    <div className="min-h-screen bg-black font-sans text-slate-300">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {cameFromPortfolio ? (
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Portfolio</span>
            </Link>
          ) : (
            <span />
          )}
          <Link
            to="/projects/omi-clash"
            className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-tight text-white"
          >
            <img src="/projects/omi-clash/icon.png" alt="" className="h-8 w-8 rounded-[22%] object-cover" />
            <span className="hidden sm:inline">Omi Clash</span>
          </Link>
          <span className="w-4" aria-hidden />
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Link
          to={backTo}
          className="text-sm text-slate-500 underline-offset-4 transition-colors hover:text-amber-400 hover:underline"
        >
          &larr; {backLabel}
        </Link>
        <h1 className="mb-1 mt-6 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">{title}</h1>
        {effectiveDate && <p className="mb-8 text-xs font-medium text-slate-500">Effective as of {effectiveDate}</p>}
        <article className="max-w-2xl space-y-4 border-t border-white/10 pt-6">{children}</article>

        <Link
          to="/projects/omi-clash"
          className="mb-8 mt-10 inline-block min-h-[44px] content-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-black transition-colors hover:bg-amber-300"
        >
          Back to Omi Clash
        </Link>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-2xl px-4 py-8 text-center text-xs text-slate-600 sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} Omi Clash
        </div>
      </footer>
    </div>
  );
};

export const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="mt-8 text-xl font-extrabold uppercase tracking-tight text-white">{children}</h2>
);

export const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-sm leading-relaxed text-slate-400">{children}</p>
);

export const UL: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-400">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

export const inlineLinkClass = 'text-amber-400 hover:underline';

export const ContactCard: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <section className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
    <p className="mt-2 text-sm leading-relaxed text-slate-400">{children}</p>
  </section>
);

export const Faq: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => (
  <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white marker:content-none">
      {question}
      <span className="shrink-0 text-lg leading-none text-amber-400 transition-transform duration-200 group-open:rotate-45">
        +
      </span>
    </summary>
    <p className="mt-3 text-sm leading-relaxed text-slate-400">{answer}</p>
  </details>
);

export default OmiClashLegalLayout;
