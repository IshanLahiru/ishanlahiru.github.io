import React from 'react';
import { Link } from 'react-router-dom';
import BaseContainer from '../../components/base-container/baseContainer';
import NavigationBar from '../../components/header/header';
import Footer from '../../components/footer/footer';

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
        <a className="text-blue-600 hover:underline dark:text-blue-400" href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{' '}
        with your deletion request. See the{' '}
        <Link
          to="/projects/deckdrill/privacy-policy"
          className="text-blue-600 hover:underline dark:text-blue-400">
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
    <BaseContainer>
      <NavigationBar />
      <main className="py-8 text-start">
        <Link
          to="/projects/deckdrill"
          className="text-sm text-blue-600 hover:underline dark:text-blue-400">
          &larr; Back to DeckDrill
        </Link>

        <h1 className="mb-1 mt-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
          DeckDrill Support
        </h1>
        <p className="mb-6 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
          Need help with DeckDrill? Browse the frequently asked questions below, or reach out to
          us directly and we'll get back to you as soon as we can.
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
            to="/projects/deckdrill/privacy-policy"
            className="text-blue-600 hover:underline dark:text-blue-400">
            Privacy Policy
          </Link>
          <Link
            to="/projects/deckdrill/terms"
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

export default DeckDrillSupportPage;
