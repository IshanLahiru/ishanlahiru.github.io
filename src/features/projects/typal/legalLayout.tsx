import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SiteFooter, SiteHeader, docLinks } from './landingSections';
import { edge, type } from './type';

// TyPal brand colours (Design/logo-kit/GUIDELINES.md in the TyPal repo): Midnight, Coral, Warm White.
// Coral text is lightened so links pass WCAG AA on Midnight.
export { docLinks };

interface TypalLegalLayoutProps {
  title: string;
  effectiveDate?: string;
  summary?: React.ReactNode;
  children: React.ReactNode;
}

const TypalLegalLayout: React.FC<TypalLegalLayoutProps> = ({
  title,
  effectiveDate,
  summary,
  children
}) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#16183A] font-geist text-[#F3EFE7] antialiased">
      <SiteHeader />

      <main>
        {/* The title, centred and large, as the landing page's sections open. */}
        <div className="border-b border-[#F3EFE7]/10 bg-[#101231]">
          <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <Link
              to="/projects/typal"
              className={`inline-flex items-center gap-1.5 text-[#F3EFE7]/70 transition-colors hover:text-[#FF9A70] ${type.label}`}>
              <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
              TyPal
            </Link>
            <h1 className={`mt-6 ${type.section}`}>{title}</h1>
            {effectiveDate && (
              <p className={`mt-5 text-[#F3EFE7]/55 ${type.meta}`}>Effective {effectiveDate}</p>
            )}
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          {summary && (
            <div
              className={`rounded-3xl bg-[#23264F] p-7 text-[#F3EFE7]/85 sm:p-8 ${edge.dark} ${type.lead}`}>
              <p className={`mb-3 text-[#FF9A70] ${type.meta}`}>In short</p>
              {summary}
            </div>
          )}
          <article className={`space-y-5 ${summary ? 'mt-10' : ''}`}>{children}</article>

          <nav
            aria-label="More about TyPal"
            className="mt-14 grid gap-3 border-t border-[#F3EFE7]/10 pt-8 sm:grid-cols-3">
            {docLinks
              .filter((link) => link.to !== location.pathname)
              .map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex min-h-[52px] items-center justify-between rounded-2xl bg-[#23264F] px-5 py-3 transition-colors hover:text-[#FF9A70] ${edge.dark} ${type.label}`}>
                  {link.label}
                  <span aria-hidden>&rarr;</span>
                </Link>
              ))}
          </nav>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className={`pt-8 ${type.subheading} sm:text-[1.625rem]`}>{children}</h2>
);

export const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="font-geist text-[1.0625rem] leading-[1.75] text-[#F3EFE7]/75">{children}</p>
);

export const UL: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="list-disc space-y-2 pl-5 font-geist text-[1.0625rem] leading-[1.75] text-[#F3EFE7]/75 marker:text-[#FF7A45]">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

export const inlineLinkClass =
  'font-medium text-[#FF9A70] underline decoration-[#FF7A45]/40 underline-offset-2 hover:decoration-[#FF7A45]';

export const ContactCard: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children
}) => (
  <section className="mb-8 rounded-2xl border border-white/10 bg-[#23264F]/70 p-6">
    <p className="text-xs font-semibold uppercase tracking-wider text-[#F3EFE7]/70">{label}</p>
    <p className="mt-2 text-[15px] leading-relaxed text-[#F3EFE7]/80">{children}</p>
  </section>
);

export const Faq: React.FC<{ question: string; answer: React.ReactNode }> = ({
  question,
  answer
}) => (
  <details className="group rounded-2xl border border-white/10 bg-[#23264F]/70 p-4 open:border-[#FF7A45]/50">
    <summary className="flex min-h-[28px] cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold marker:content-none">
      {question}
      <span className="shrink-0 text-xl leading-none text-[#FF7A45] transition-transform duration-200 group-open:rotate-45">
        +
      </span>
    </summary>
    <p className="mt-3 text-[15px] leading-relaxed text-[#F3EFE7]/80">{answer}</p>
  </details>
);

export default TypalLegalLayout;
