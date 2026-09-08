import React from 'react';
import { Link } from 'react-router-dom';
import BaseContainer from '../../../components/base-container/baseContainer';
import NavigationBar from '../../../components/header/header';
import Footer from '../../../components/footer/footer';

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
        <a
          className="text-blue-600 hover:underline dark:text-blue-400"
          href={`mailto:${SUPPORT_EMAIL}`}
        >
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

const DammapadayaSupportPage: React.FC = () => {
  return (
    <BaseContainer>
      <NavigationBar />
      <main className="py-8 text-start">
        <Link
          to="/projects/dammapadaya"
          className="text-sm text-blue-600 hover:underline dark:text-blue-400"
        >
          &larr; Back to Dammapadaya
        </Link>

        <h1 className="mb-1 mt-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Dammapadaya Support
        </h1>
        <p className="mb-6 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
          Need help with Dammapadaya? Browse the frequently asked questions below, or reach out
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
            to="/projects/dammapadaya/privacy-policy"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Privacy Policy
          </Link>
          <Link
            to="/projects/dammapadaya/terms"
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

export default DammapadayaSupportPage;
