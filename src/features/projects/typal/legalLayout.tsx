import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// TyPal brand colours (Design/logo-kit/GUIDELINES.md in the TyPal repo): Midnight, Coral, Warm White.
// Coral text is darkened so links pass WCAG AA on Warm White.
export const docLinks = [
  { to: '/projects/typal/support', label: 'Support' },
  { to: '/projects/typal/privacy-policy', label: 'Privacy Policy' },
  { to: '/projects/typal/terms', label: 'Terms of Use' }
];

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
  const cameFromPortfolio = (location.state as { from?: string } | null)?.from === 'portfolio';

  return (
    <div className="min-h-screen bg-[#16183A] font-sans text-[#F3EFE7] antialiased">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#16183A]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/projects/typal" aria-label="TyPal home" className="shrink-0">
            <img
              src="/projects/typal/typal-horizontal-on-dark.svg"
              alt="TyPal"
              className="h-8 w-auto"
            />
          </Link>
          <nav className="flex items-center gap-1 text-sm font-medium">
            {docLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `hidden rounded-full px-3 py-1.5 transition-colors sm:block ${
                    isActive
                      ? 'bg-[#F3EFE7] text-[#16183A]'
                      : 'text-[#F3EFE7]/70 hover:bg-white/5 hover:text-[#F3EFE7]'
                  }`
                }>
                {link.label}
              </NavLink>
            ))}
            {cameFromPortfolio && (
              <Link
                to="/"
                className="flex min-h-[44px] items-center gap-1.5 px-2 text-[#F3EFE7]/70 transition-colors hover:text-[#F3EFE7] sm:hidden">
                <ArrowLeft className="h-4 w-4" />
                Portfolio
              </Link>
            )}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Link
          to="/projects/typal"
          className="inline-flex items-center gap-1.5 text-sm text-[#F3EFE7]/70 transition-colors hover:text-[#FF7A45]">
          <ArrowLeft className="h-4 w-4" />
          TyPal
        </Link>
        <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        {effectiveDate && (
          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-[#F3EFE7]/70">
            Effective {effectiveDate}
          </p>
        )}
        {summary && (
          <div className="mt-8 rounded-2xl bg-[#23264F] p-6 text-sm leading-relaxed text-[#F3EFE7]/85">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#FF7A45]">
              In short
            </p>
            {summary}
          </div>
        )}
        <article className="mt-8 space-y-4 border-t border-white/10 pt-6">{children}</article>

        <nav className="mt-12 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-3">
          {docLinks
            .filter((link) => link.to !== location.pathname)
            .map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex min-h-[44px] items-center justify-between rounded-xl border border-white/10 bg-[#23264F]/70 px-4 py-3 text-sm font-semibold transition-colors hover:border-[#FF7A45] hover:text-[#FF7A45]">
                {link.label}
                <span aria-hidden>&rarr;</span>
              </Link>
            ))}
        </nav>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-2 px-4 py-8 text-center text-xs text-[#F3EFE7]/70 sm:px-6 lg:px-8">
          <img src="/projects/typal/typal-symbol.svg" alt="" className="h-8 w-8" />
          <p>&copy; {new Date().getFullYear()} TyPal · Ishan Lahiru Sampath</p>
        </div>
      </footer>
    </div>
  );
};

export const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="mt-10 font-serif text-xl font-bold tracking-tight">{children}</h2>
);

export const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[15px] leading-relaxed text-[#F3EFE7]/80">{children}</p>
);

export const UL: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-[#F3EFE7]/80 marker:text-[#FF7A45]">
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
