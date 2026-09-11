import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout, {
  ContactCard,
  Faq,
  H2,
  inlineLinkClass
} from '../../../components/legal-page-layout/legalPageLayout';

const SUPPORT_EMAIL = 'ishanlahiru2002@gmail.com';

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'What is Dammapadaya?',
    answer: (
      <>
        A daily-reading companion for the Dhammapada — all 423 verses across its 26 traditional
        chapters, in Pāli with an English rendering of each verse's meaning, browsable by chapter or
        searchable by wording and theme.
      </>
    )
  },
  {
    question: 'Do I need an account?',
    answer: <>No. The Application never asks you to sign up or log in.</>
  },
  {
    question: 'Is the app free?',
    answer: <>Yes, entirely — there are no purchases, subscriptions, or ads of any kind.</>
  },
  {
    question: 'Does it work offline?',
    answer: (
      <>
        Yes. The full text is bundled into the Application itself, so it always has something to
        show; when online, it fetches the latest version of the text and caches it for offline
        reading.
      </>
    )
  },
  {
    question: 'How does "today\'s verse" work?',
    answer: (
      <>
        The Home tab rotates through the collection by day of year, so a different verse is
        highlighted each day.
      </>
    )
  },
  {
    question: 'How do I find a specific verse or topic?',
    answer: (
      <>
        Open the Dhamma tab and use the search field — it matches against the verse text, its
        meaning, its theme tag, and its chapter name.
      </>
    )
  },
  {
    question: 'I found an error in a verse or its rendering. How do I report it?',
    answer: (
      <>
        Email{' '}
        <a className={inlineLinkClass} href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{' '}
        with the verse reference (e.g. "Dhammapada 21") and what looks wrong — corrections to
        devotional text are taken seriously and reviewed promptly.
      </>
    )
  },
  {
    question: 'Can I request a feature?',
    answer: (
      <>
        Yes. Send your suggestion to{' '}
        <a className={inlineLinkClass} href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>
        .
      </>
    )
  }
];

const DammapadayaSupportPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="Dammapadaya Support"
      backTo="/projects/dammapadaya"
      backLabel="Back to Dammapadaya">
      <p className="mb-2 font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
        Need help with Dammapadaya? Browse the frequently asked questions below, or reach out
        directly and we'll get back to you as soon as we can.
      </p>

      <ContactCard label="Contact us">
        Email{' '}
        <a className={inlineLinkClass} href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{' '}
        for bug reports, content corrections, or any other questions about the app.
      </ContactCard>

      <H2>Frequently Asked Questions</H2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <Faq key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="flex gap-x-6 gap-y-2 border-t border-np-muted pt-6 font-mono text-xs uppercase tracking-widest dark:border-np-muted-night">
        <Link to="/projects/dammapadaya/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>
        <Link to="/projects/dammapadaya/terms" className={inlineLinkClass}>
          Terms &amp; Conditions
        </Link>
      </div>
    </LegalPageLayout>
  );
};

export default DammapadayaSupportPage;
