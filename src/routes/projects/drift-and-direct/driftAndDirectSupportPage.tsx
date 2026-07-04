import React from 'react';
import { Link } from 'react-router-dom';
import BaseContainer from '../../../components/base-container/baseContainer';
import NavigationBar from '../../../components/header/header';
import Footer from '../../../components/footer/footer';

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
        <a className="text-blue-600 hover:underline dark:text-blue-400" href={`mailto:${SUPPORT_EMAIL}`}>
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
        <a className="text-blue-600 hover:underline dark:text-blue-400" href={`mailto:${SUPPORT_EMAIL}`}>
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
        <a className="text-blue-600 hover:underline dark:text-blue-400" href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{' '}
        with a deletion request. See the{' '}
        <Link
          to="/projects/drift-and-direct/privacy-policy"
          className="text-blue-600 hover:underline dark:text-blue-400">
          Privacy Policy
        </Link>{' '}
        for details on how your data is handled and retained.
      </>
    )
  }
];

const DriftAndDirectSupportPage: React.FC = () => {
  return (
    <BaseContainer>
      <NavigationBar />
      <main className="py-8 text-start">
        <Link
          to="/projects/drift-and-direct"
          className="text-sm text-blue-600 hover:underline dark:text-blue-400">
          &larr; Back to Drift &amp; Direct
        </Link>

        <h1 className="mb-1 mt-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Drift &amp; Direct Support
        </h1>
        <p className="mb-6 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
          Need help with Drift &amp; Direct? Browse the frequently asked questions below, or reach
          out to us directly and we'll get back to you as soon as we can.
        </p>

        <section className="mb-8 rounded-lg border border-neutral-600 bg-white p-6 shadow-md dark:border-gray-400 dark:bg-neutral-950">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Contact us</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Email{' '}
            <a
              className="text-blue-600 hover:underline dark:text-blue-400"
              href={`mailto:${SUPPORT_EMAIL}`}>
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
                className="group rounded-lg border border-neutral-600 bg-white p-4 shadow-sm dark:border-gray-400 dark:bg-neutral-950">
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
            to="/projects/drift-and-direct/privacy-policy"
            className="text-blue-600 hover:underline dark:text-blue-400">
            Privacy Policy
          </Link>
          <Link
            to="/projects/drift-and-direct/terms"
            className="text-blue-600 hover:underline dark:text-blue-400">
            Terms &amp; Conditions
          </Link>
        </div>

        <Link
          to="/"
          className="mb-8 inline-block rounded-md bg-gray-600 px-4 py-2 text-sm text-slate-200 hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-950 dark:hover:bg-gray-300">
          Back to Portfolio
        </Link>
      </main>
      <Footer />
    </BaseContainer>
  );
};

export default DriftAndDirectSupportPage;
