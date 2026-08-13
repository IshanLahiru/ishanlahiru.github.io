import React from 'react';
import { Link } from 'react-router-dom';
import BaseContainer from '../../../components/base-container/baseContainer';
import NavigationBar from '../../../components/header/header';
import Footer from '../../../components/footer/footer';

const SUPPORT_EMAIL = 'support.ishanvithanage@gmail.com';

const OmiClashCommunityPage: React.FC = () => {
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
          Omi Clash Community
        </h1>
        <p className="mb-6 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
          There's no dedicated social channel for Omi Clash yet &mdash; this page is the place to
          reach the team directly in the meantime, whether that's a question, a bug, an idea, or
          just a hello.
        </p>

        <section className="mb-8 rounded-lg border border-neutral-600 bg-white p-6 shadow-md dark:border-gray-400 dark:bg-neutral-950">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Get in touch</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Email{' '}
            <a
              className="text-blue-600 hover:underline dark:text-blue-400"
              href={`mailto:${SUPPORT_EMAIL}`}
            >
              {SUPPORT_EMAIL}
            </a>{' '}
            with feedback, feature ideas, or anything you'd like to see change about the game.
            Every message gets read.
          </p>
        </section>

        <section className="mb-8 rounded-lg border border-neutral-600 bg-white p-6 shadow-md dark:border-gray-400 dark:bg-neutral-950">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            Found a bug, or need help?
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            That's handled on the{' '}
            <Link
              to="/projects/omi-clash/support"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Support page
            </Link>{' '}
            instead &mdash; it covers common questions and the same contact email for anything
            else.
          </p>
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

export default OmiClashCommunityPage;
