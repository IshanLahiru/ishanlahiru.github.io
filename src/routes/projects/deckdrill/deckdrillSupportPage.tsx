import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout, {
  ContactCard,
  Faq,
  H2,
  inlineLinkClass
} from '../../../components/legal-page-layout/legalPageLayout';

const SUPPORT_EMAIL = 'support.ishanvithanage@gmail.com';

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'What is DeckDrill?',
    answer: (
      <>
        DeckDrill is a Blackjack training and simulation app built to help players learn basic
        strategy and practice card counting in a risk-free environment.
      </>
    )
  },
  {
    question: 'I found a bug. How do I report it?',
    answer: (
      <>
        Email us at{' '}
        <a className={inlineLinkClass} href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{' '}
        with a description of what happened, the steps to reproduce it, and your device model and
        OS version if possible. Screenshots or screen recordings help a lot.
      </>
    )
  },
  {
    question: 'Can I request a new feature?',
    answer: (
      <>
        Yes. Send your idea to{' '}
        <a className={inlineLinkClass} href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{' '}
        and we'll consider it for a future release.
      </>
    )
  },
  {
    question: 'How do I reset my training progress?',
    answer: (
      <>
        Progress reset options live in the app's Settings screen. If you can't find them or need
        your data cleared manually, reach out to support and we'll help.
      </>
    )
  },
  {
    question: 'How do I delete my data or account?',
    answer: (
      <>
        Contact{' '}
        <a className={inlineLinkClass} href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{' '}
        with your deletion request. See the{' '}
        <Link to="/projects/deckdrill/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>{' '}
        for details on how your data is handled and retained.
      </>
    )
  },
  {
    question: 'Does DeckDrill work offline?',
    answer: (
      <>
        Core training and simulation features are designed to work without an internet
        connection. Some functionality may require connectivity, as noted in the app.
      </>
    )
  }
];

const DeckDrillSupportPage: React.FC = () => {
  return (
    <LegalPageLayout title="DeckDrill Support" backTo="/projects/deckdrill" backLabel="Back to DeckDrill">
      <p className="mb-2 font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
        Need help with DeckDrill? Browse the frequently asked questions below, or reach out to us
        directly and we'll get back to you as soon as we can.
      </p>

      <ContactCard label="Contact us">
        Email{' '}
        <a className={inlineLinkClass} href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{' '}
        for bug reports, feature requests, or any other questions about the app.
      </ContactCard>

      <H2>Frequently Asked Questions</H2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <Faq key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="flex gap-x-6 gap-y-2 border-t border-np-muted pt-6 text-xs font-medium dark:border-np-muted-night">
        <Link to="/projects/deckdrill/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>
        <Link to="/projects/deckdrill/terms" className={inlineLinkClass}>
          Terms &amp; Conditions
        </Link>
      </div>
    </LegalPageLayout>
  );
};

export default DeckDrillSupportPage;
