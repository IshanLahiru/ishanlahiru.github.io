import React from 'react';
import { Link } from 'react-router-dom';
import TheravadaChantsLegalLayout, {
  ContactCard,
  Faq,
  H2,
  inlineLinkClass
} from '../../../components/theravada-chants/legalLayout';

const SUPPORT_EMAIL = 'ishanlahiru2002@gmail.com';

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'What is Theravāda Chants?',
    answer: (
      <>
        A reading and chanting companion for Theravāda Buddhist practice — Pali chants with English
        translations, organized reading lists for the Five/Eight/Ten Precepts, a guided ceremony
        walkthrough, and a Pali pronunciation guide.
      </>
    )
  },
  {
    question: 'Do I need an account?',
    answer: <>No. The Application works fully offline-capable and doesn't require signing up.</>
  },
  {
    question: 'Is the app free?',
    answer: (
      <>
        Yes, entirely. "Support the developer" in Settings offers an optional Lifetime or Yearly
        purchase, but it doesn't unlock anything — every chant and feature is already available to
        everyone.
      </>
    )
  },
  {
    question: 'How do I add chants to my reading list?',
    answer: (
      <>
        Go to the Browse tab, tap any chant to add or remove it from "My Chants" — the circle on the
        right fills in once it's added. Long-press a chant on Browse to read it without adding it.
      </>
    )
  },
  {
    question: 'How do I reorder my reading list?',
    answer: <>On the My Chants tab, long-press and drag any card to move it.</>
  },
  {
    question: "I don't know how to pronounce a Pali word — is there help for that?",
    answer: (
      <>
        Yes — tap the 🗣️ icon on any chant's reading screen, or "Pali Pronunciation Guide" inside
        the help (?) button, for a full guide to vowel length, retroflex consonants, and the other
        sounds that don't map directly onto English spelling.
      </>
    )
  },
  {
    question: 'How do I cancel my Yearly subscription?',
    answer: (
      <>Settings &rarr; "Manage support" opens the subscription-management screen at any time.</>
    )
  },
  {
    question: 'I found an error in a chant or translation. How do I report it?',
    answer: (
      <>
        Email{' '}
        <a className={inlineLinkClass} href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{' '}
        with the chant name and what looks wrong — corrections to devotional text are taken
        seriously and reviewed promptly.
      </>
    )
  },
  {
    question: 'Can I request a chant be added?',
    answer: (
      <>
        Yes. Send the chant's name (and text, if you have it) to{' '}
        <a className={inlineLinkClass} href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>
        .
      </>
    )
  }
];

const TheravadaChantsSupportPage: React.FC = () => {
  return (
    <TheravadaChantsLegalLayout
      title="Theravāda Chants Support"
      backTo="/projects/theravada-chants"
      backLabel="Back to Theravāda Chants">
      <p className="mb-2 font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
        Need help with Theravāda Chants? Browse the frequently asked questions below, or reach out
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

      <div className="flex gap-x-6 gap-y-2 border-t border-np-muted pt-6 text-xs font-medium dark:border-np-muted-night">
        <Link to="/projects/theravada-chants/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>
        <Link to="/projects/theravada-chants/terms" className={inlineLinkClass}>
          Terms &amp; Conditions
        </Link>
      </div>
    </TheravadaChantsLegalLayout>
  );
};

export default TheravadaChantsSupportPage;
