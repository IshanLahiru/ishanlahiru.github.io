import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface TheravadaChantsLegalLayoutProps {
  title: string;
  effectiveDate?: string;
  backTo: string;
  backLabel: string;
  children: React.ReactNode;
}

const TheravadaChantsLegalLayout: React.FC<TheravadaChantsLegalLayoutProps> = ({
  title,
  effectiveDate,
  backTo,
  backLabel,
  children
}) => {
  const location = useLocation();
  const cameFromPortfolio = (location.state as { from?: string } | null)?.from === 'portfolio';

  return (
    <div className="min-h-screen bg-[#FBF5EA] font-sans text-[#2B2118]">
      <header className="sticky top-0 z-40 border-b border-[#2B2118]/10 bg-[#FBF5EA]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {cameFromPortfolio ? (
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-[#8B7F6E] transition-colors hover:text-[#2B2118]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Portfolio</span>
            </Link>
          ) : (
            <span />
          )}
          <Link
            to="/projects/theravada-chants"
            className="flex items-center gap-2 text-sm font-semibold text-[#2B2118]"
          >
            <img src="/projects/theravada-chants/icon.png" alt="" className="h-8 w-8 rounded-[22%] object-cover" />
            <span className="hidden sm:inline">Theravāda Chants</span>
          </Link>
          <span className="w-4" aria-hidden />
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Link
          to={backTo}
          className="text-sm text-[#8B7F6E] underline-offset-4 transition-colors hover:text-[#A9752F] hover:underline"
        >
          &larr; {backLabel}
        </Link>
        <h1 className="mb-1 mt-6 font-lora text-3xl italic text-[#2B2118] sm:text-4xl">{title}</h1>
        {effectiveDate && <p className="mb-8 text-xs font-medium text-[#8B7F6E]">Effective as of {effectiveDate}</p>}
        <article className="max-w-2xl space-y-4 border-t border-[#2B2118]/10 pt-6">{children}</article>

        <Link
          to="/projects/theravada-chants"
          className="mb-8 mt-10 inline-block min-h-[44px] content-center rounded-full bg-[#2B2118] px-5 py-2.5 text-sm font-medium text-[#FBF5EA] transition-colors hover:bg-[#3a2c1c]"
        >
          Back to Theravāda Chants
        </Link>
      </main>

      <footer className="border-t border-[#2B2118]/10">
        <div className="mx-auto max-w-2xl px-4 py-8 text-center text-xs text-[#8B7F6E] sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} Theravāda Chants
        </div>
      </footer>
    </div>
  );
};

export const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="mt-8 font-lora text-xl italic text-[#2B2118]">{children}</h2>
);

export const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-sm leading-relaxed text-[#5B4E3E]">{children}</p>
);

export const UL: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#5B4E3E]">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

export const inlineLinkClass = 'text-[#A9752F] hover:underline';

export const ContactCard: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <section className="mb-8 rounded-2xl border border-[#2B2118]/10 bg-white/60 p-6">
    <p className="text-xs font-medium text-[#8B7F6E]">{label}</p>
    <p className="mt-2 text-sm leading-relaxed text-[#5B4E3E]">{children}</p>
  </section>
);

export const Faq: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => (
  <details className="group rounded-2xl border border-[#2B2118]/10 bg-white/60 p-4">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#2B2118] marker:content-none">
      {question}
      <span className="shrink-0 text-lg leading-none text-[#A9752F] transition-transform duration-200 group-open:rotate-45">
        +
      </span>
    </summary>
    <p className="mt-3 text-sm leading-relaxed text-[#5B4E3E]">{answer}</p>
  </details>
);

export default TheravadaChantsLegalLayout;
