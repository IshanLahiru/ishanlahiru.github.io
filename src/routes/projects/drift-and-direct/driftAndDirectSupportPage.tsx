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
    question: 'What is Drift & Direct?',
    answer: (
      <>
        Drift &amp; Direct is a swiping-mechanism based mobile focus game. Symbols fall down the
        screen and you swipe the correct direction for each one &mdash; the direction a yellow
        arrow drifts, or the direction a green arrow points &mdash; to survive and climb the
        leaderboards.
      </>
    )
  },
  {
    question: 'Do I need an account to play?',
    answer: (
      <>
        No. You can play anonymously, or sign in with Google or Apple to keep your progress, high
        score, and leaderboard rank tied to your account across devices.
      </>
    )
  },
  {
    question: 'How do leaderboards work?',
    answer: (
      <>
        During onboarding you pick your country, which places you on that country's leaderboard as
        well as the global leaderboard. Your display name, score, and (if set) profile photo are
        shown alongside your rank.
      </>
    )
  },
  {
    question: 'I ran out of lives. How do I keep playing?',
    answer: (
      <>
        From the game-over screen you can watch a rewarded ad for an extra life, spend coins, or
        buy a hearts pack.
      </>
    )
  },
  {
    question: 'How do I remove ads?',
    answer: (
      <>
        Subscribing to Pro (monthly, annual, or lifetime) from the Store tab removes banner,
        interstitial, and rewarded ad prompts. You can manage or cancel your subscription from
        Settings &rarr; "Manage Subscription".
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
    question: 'How do I delete my data or account?',
    answer: (
      <>
        Open Settings &rarr; "Legal &amp; Data" &rarr; "Delete Account" in the app. This removes
        your profile photo, leaderboard entries, and account data. You can also email{' '}
        <a className={inlineLinkClass} href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{' '}
        with a deletion request. See the{' '}
        <Link to="/projects/drift-and-direct/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>{' '}
        for details on how your data is handled and retained.
      </>
    )
  }
];

const DriftAndDirectSupportPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="Drift & Direct Support"
      backTo="/projects/drift-and-direct"
      backLabel="Back to Drift & Direct">
      <p className="mb-2 font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
        Need help with Drift &amp; Direct? Browse the frequently asked questions below, or reach
        out to us directly and we'll get back to you as soon as we can.
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

      <div className="flex gap-x-6 gap-y-2 border-t border-np-muted pt-6 font-mono text-xs uppercase tracking-widest dark:border-np-muted-night">
        <Link to="/projects/drift-and-direct/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>
        <Link to="/projects/drift-and-direct/terms" className={inlineLinkClass}>
          Terms &amp; Conditions
        </Link>
      </div>
    </LegalPageLayout>
  );
};

export default DriftAndDirectSupportPage;
