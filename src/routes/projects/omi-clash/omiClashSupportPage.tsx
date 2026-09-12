import React from 'react';
import { Link } from 'react-router-dom';
import OmiClashLegalLayout, {
  ContactCard,
  Faq,
  H2,
  inlineLinkClass
} from '../../../components/omi-clash/legalLayout';

const SUPPORT_EMAIL = 'support.ishanvithanage@gmail.com';

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'What is Omi Clash?',
    answer: (
      <>
        Omi Clash is a 4-player trick-taking card game (Omi), played in teams of two with trump
        calls, Court calls, and Kapoothi. Play against friends or bots at a shared table, and climb
        the global and country leaderboards.
      </>
    )
  },
  {
    question: 'Do I need an account to play?',
    answer: (
      <>
        You can sign in with Google or Apple to keep your stats, friends, and leaderboard rank tied
        to your account across devices.
      </>
    )
  },
  {
    question: 'How does friend chat and table chat work?',
    answer: (
      <>
        You can message any accepted friend 1:1 at any time, and chat with everyone seated at a
        table while a game is in progress. Every message can be reported, and any player can be
        blocked from the chat menu or from Settings &rarr; "Blocked users".
      </>
    )
  },
  {
    question: 'How does table voice chat work?',
    answer: (
      <>
        Voice chat is opt-in per table &mdash; tap the mic icon to join. Audio connects directly
        between players' devices where possible, and only relays through a network provider when a
        direct connection isn't possible.
      </>
    )
  },
  {
    question: 'How do I remove ads?',
    answer: (
      <>
        Subscribing to Omi Clash Pro removes ads and unlocks extra features. You can manage or
        cancel your subscription from Settings &rarr; "Manage subscription".
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
        with a description of what happened, the steps to reproduce it, and your device model and OS
        version if possible. Screenshots or screen recordings help a lot.
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
        Open Settings &rarr; "Legal &amp; data" &rarr; "Delete Account" in the app. This immediately
        and permanently deletes your lifetime stats, leaderboard entry, friend list and chat
        history, token-card balance, and your sign-in itself. You can also email{' '}
        <a className={inlineLinkClass} href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{' '}
        with a deletion request. See the{' '}
        <Link to="/projects/omi-clash/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>{' '}
        for details on how your data is handled and retained.
      </>
    )
  }
];

const OmiClashSupportPage: React.FC = () => {
  return (
    <OmiClashLegalLayout title="Omi Clash Support" backTo="/projects/omi-clash" backLabel="Back to Omi Clash">
      <p className="mb-2 text-sm leading-relaxed text-slate-400">
        Need help with Omi Clash? Browse the frequently asked questions below, or reach out to us
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

      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs font-medium">
        <Link to="/projects/omi-clash/community" className={inlineLinkClass}>
          Community
        </Link>
        <Link to="/projects/omi-clash/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>
        <Link to="/projects/omi-clash/terms" className={inlineLinkClass}>
          Terms &amp; Conditions
        </Link>
      </div>
    </OmiClashLegalLayout>
  );
};

export default OmiClashSupportPage;
