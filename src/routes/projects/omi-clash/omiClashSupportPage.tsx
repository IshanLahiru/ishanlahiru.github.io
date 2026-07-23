import React from 'react';
import { Link } from 'react-router-dom';
import BaseContainer from '../../../components/base-container/baseContainer';
import NavigationBar from '../../../components/header/header';
import Footer from '../../../components/footer/footer';

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
        <a
          className="text-blue-600 hover:underline dark:text-blue-400"
          href={`mailto:${SUPPORT_EMAIL}`}
        >
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
        <a
          className="text-blue-600 hover:underline dark:text-blue-400"
          href={`mailto:${SUPPORT_EMAIL}`}
        >
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
        <a
          className="text-blue-600 hover:underline dark:text-blue-400"
          href={`mailto:${SUPPORT_EMAIL}`}
        >
          {SUPPORT_EMAIL}
        </a>{' '}
        with a deletion request. See the{' '}
        <Link
          to="/projects/omi-clash/privacy-policy"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          Privacy Policy
        </Link>{' '}
        for details on how your data is handled and retained.
      </>
    )
  }
];

const OmiClashSupportPage: React.FC = () => {
  return (
    <BaseContainer>
      <NavigationBar />
      <main className="py-8 text-start">
        <Link
          to="/projects/omi-clash"
          className="text-sm text-blue-600 hover:underline dark:text-blue-400"
        >
          &larr; Back to Omi Clash
        </Link>

        <h1 className="mb-1 mt-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Omi Clash Support
        </h1>
        <p className="mb-6 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
          Need help with Omi Clash? Browse the frequently asked questions below, or reach out to us
          directly and we'll get back to you as soon as we can.
        </p>

        <section className="mb-8 rounded-lg border border-neutral-600 bg-white p-6 shadow-md dark:border-gray-400 dark:bg-neutral-950">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Contact us</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Email{' '}
            <a
              className="text-blue-600 hover:underline dark:text-blue-400"
              href={`mailto:${SUPPORT_EMAIL}`}
            >
              {SUPPORT_EMAIL}
            </a>{' '}
            for bug reports, feature requests, or any other questions about the app.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-neutral-600 bg-white p-4 shadow-sm dark:border-gray-400 dark:bg-neutral-950"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-gray-900 marker:content-none dark:text-gray-100">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mb-4 flex gap-4 text-xs">
          <Link
            to="/projects/omi-clash/privacy-policy"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Privacy Policy
          </Link>
          <Link
            to="/projects/omi-clash/terms"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Terms &amp; Conditions
          </Link>
        </div>

        <Link
          to="/"
          className="mb-8 inline-block rounded-md bg-gray-600 px-4 py-2 text-sm text-slate-200 hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-950 dark:hover:bg-gray-300"
        >
          Back to Portfolio
        </Link>
      </main>
      <Footer />
    </BaseContainer>
  );
};

export default OmiClashSupportPage;
