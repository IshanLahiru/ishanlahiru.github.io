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
          className="text-sm text-np-600 underline-offset-4 hover:text-np-accent hover:underline dark:text-np-400-night dark:hover:text-np-accent-night">
          &larr; Back to Omi Clash
        </Link>

        <h1 className="mb-1 mt-6 font-serif text-3xl font-bold text-np-ink dark:text-np-ink-night sm:text-4xl">
          Omi Clash Community
        </h1>
        <p className="mb-8 max-w-2xl font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
          There's no dedicated social channel for Omi Clash yet &mdash; this page is the place to
          reach the team directly in the meantime, whether that's a question, a bug, an idea, or
          just a hello.
        </p>

        <section className="mb-6 border border-np-ink p-6 dark:border-np-ink-night">
          <p className="font-mono text-xs uppercase tracking-widest text-np-500 dark:text-np-500-night">
            Get in touch
          </p>
          <p className="mt-2 font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
            Email{' '}
            <a
              className="text-np-ink underline decoration-np-accent decoration-2 underline-offset-2 dark:text-np-ink-night dark:decoration-np-accent-night"
              href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>{' '}
            with feedback, feature ideas, or anything you'd like to see change about the game.
            Every message gets read.
          </p>
        </section>

        <section className="mb-8 border border-np-ink p-6 dark:border-np-ink-night">
          <p className="font-mono text-xs uppercase tracking-widest text-np-500 dark:text-np-500-night">
            Found a bug, or need help?
          </p>
          <p className="mt-2 font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
            That's handled on the{' '}
            <Link
              to="/projects/omi-clash/support"
              className="text-np-ink underline decoration-np-accent decoration-2 underline-offset-2 dark:text-np-ink-night dark:decoration-np-accent-night">
              Support page
            </Link>{' '}
            instead &mdash; it covers common questions and the same contact email for anything
            else.
          </p>
        </section>

        <div className="mb-6 flex gap-x-6 gap-y-2 border-t border-np-muted pt-6 font-mono text-xs uppercase tracking-widest dark:border-np-muted-night">
          <Link
            to="/projects/omi-clash/privacy-policy"
            className="text-np-600 hover:text-np-accent hover:underline dark:text-np-400-night dark:hover:text-np-accent-night">
            Privacy Policy
          </Link>
          <Link
            to="/projects/omi-clash/terms"
            className="text-np-600 hover:text-np-accent hover:underline dark:text-np-400-night dark:hover:text-np-accent-night">
            Terms &amp; Conditions
          </Link>
        </div>

        <Link
          to="/"
          className="mb-8 inline-block min-h-[44px] content-center border border-np-ink bg-np-ink px-4 py-2 text-sm uppercase tracking-widest text-np-paper transition-colors hover:bg-np-paper hover:text-np-ink dark:border-np-ink-night dark:bg-np-ink-night dark:text-np-paper-night dark:hover:bg-np-paper-night dark:hover:text-np-ink-night">
          Back to Portfolio
        </Link>
      </main>
      <Footer />
    </BaseContainer>
  );
};

export default OmiClashCommunityPage;
