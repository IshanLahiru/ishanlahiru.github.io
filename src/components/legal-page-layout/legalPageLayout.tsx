import React from 'react';
import { Link } from 'react-router-dom';
import BaseContainer from '../base-container/baseContainer';
import NavigationBar from '../header/header';
import Footer from '../footer/footer';

interface LegalPageLayoutProps {
  title: string;
  effectiveDate: string;
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
        <Link to={backTo} className="text-sm text-blue-600 hover:underline dark:text-blue-400">
          &larr; {backLabel}
        </Link>
        <h1 className="mb-1 mt-6 text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
        <p className="mb-6 text-xs text-gray-500 dark:text-gray-400">
          Effective as of {effectiveDate}
        </p>
        <article className="max-w-2xl space-y-4">{children}</article>
        <Link
          to="/"
          className="mb-8 mt-8 inline-block rounded-md bg-gray-600 px-4 py-2 text-sm text-slate-200 hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-950 dark:hover:bg-gray-300">
          Back to Portfolio
        </Link>
      </main>
      <Footer />
    </BaseContainer>
  );
};

export const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-100">{children}</h2>
);

export const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-gray-600 dark:text-gray-400">{children}</p>
);

export const UL = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-400">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

export default LegalPageLayout;
