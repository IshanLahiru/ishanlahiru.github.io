import React from 'react';
import { Link } from 'react-router-dom';
import BaseContainer from '../../../components/base-container/baseContainer';
import NavigationBar from '../../../components/header/header';
import Footer from '../../../components/footer/footer';

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
        <a
          className="text-blue-600 hover:underline dark:text-blue-400"
          href={`mailto:${SUPPORT_EMAIL}`}
        >
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
        <a
          className="text-blue-600 hover:underline dark:text-blue-400"
          href={`mailto:${SUPPORT_EMAIL}`}
        >
          {SUPPORT_EMAIL}
        </a>
        .
      </>
    )
  }
];

const TheravadaChantsSupportPage: React.FC = () => {
  return (
    <BaseContainer>
      <NavigationBar />
      <main className="py-8 text-start">
        <Link
          to="/projects/theravada-chants"
          className="text-sm text-blue-600 hover:underline dark:text-blue-400"
        >
          &larr; Back to Theravāda Chants
        </Link>

        <h1 className="mb-1 mt-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Theravāda Chants Support
        </h1>
        <p className="mb-6 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
          Need help with Theravāda Chants? Browse the frequently asked questions below, or reach out
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
            for bug reports, content corrections, or any other questions about the app.
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
            to="/projects/theravada-chants/privacy-policy"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Privacy Policy
          </Link>
          <Link
            to="/projects/theravada-chants/terms"
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

export default TheravadaChantsSupportPage;
