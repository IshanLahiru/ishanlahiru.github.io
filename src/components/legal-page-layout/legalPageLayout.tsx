import React from 'react';
import { Link } from 'react-router-dom';
import BaseContainer from '../base-container/baseContainer';
import NavigationBar from '../header/header';
import Footer from '../footer/footer';

interface LegalPageLayoutProps {
  title: string;
  effectiveDate?: string;
  backTo: string;
  backLabel: string;
  children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  effectiveDate,
  backTo,
  backLabel,
  children
}) => {
  return (
    <BaseContainer>
      <NavigationBar />
      <main className="py-8 text-start">
        <Link
          to={backTo}
          className="text-sm text-np-600 underline-offset-4 hover:text-np-accent hover:underline dark:text-np-400-night dark:hover:text-np-accent-night">
          &larr; {backLabel}
        </Link>
        <h1 className="mb-1 mt-6 font-serif text-3xl font-bold text-np-ink dark:text-np-ink-night sm:text-4xl">
          {title}
        </h1>
        {effectiveDate && (
          <p className="mb-8 font-mono text-xs uppercase tracking-widest text-np-500 dark:text-np-500-night">
            Effective as of {effectiveDate}
          </p>
        )}
        <article className="max-w-2xl space-y-4 border-t border-np-muted pt-6 dark:border-np-muted-night">
          {children}
        </article>
        <Link
          to="/"
          className="mb-8 mt-10 inline-block min-h-[44px] content-center border border-np-ink bg-np-ink px-4 py-2 text-sm uppercase tracking-widest text-np-paper transition-colors hover:bg-np-paper hover:text-np-ink dark:border-np-ink-night dark:bg-np-ink-night dark:text-np-paper-night dark:hover:bg-np-paper-night dark:hover:text-np-ink-night">
          Back to Portfolio
        </Link>
      </main>
      <Footer />
    </BaseContainer>
  );
};

export const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-8 font-serif text-xl font-bold text-np-ink dark:text-np-ink-night">
    {children}
  </h2>
);

export const P = ({ children }: { children: React.ReactNode }) => (
  <p className="font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
    {children}
  </p>
);

export const UL = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="list-disc space-y-1 pl-5 font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

export const inlineLinkClass =
  'text-np-ink underline decoration-np-accent decoration-2 underline-offset-2 dark:text-np-ink-night dark:decoration-np-accent-night';

export const ContactCard = ({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <section className="mb-8 border border-np-ink p-6 dark:border-np-ink-night">
    <p className="font-mono text-xs uppercase tracking-widest text-np-500 dark:text-np-500-night">
      {label}
    </p>
    <p className="mt-2 font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
      {children}
    </p>
  </section>
);

export const Faq = ({ question, answer }: { question: string; answer: React.ReactNode }) => (
  <details className="group border border-np-ink p-4 dark:border-np-ink-night">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-sans text-sm font-semibold text-np-ink marker:content-none dark:text-np-ink-night">
      {question}
      <span className="shrink-0 font-mono text-lg leading-none text-np-accent transition-transform duration-200 group-open:rotate-45 dark:text-np-accent-night">
        +
      </span>
    </summary>
    <p className="mt-3 font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
      {answer}
    </p>
  </details>
);

export default LegalPageLayout;
