import React from 'react';
import { Link } from 'react-router-dom';
import BaseContainer from '../../../components/base-container/baseContainer';
import NavigationBar from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

const techStack = ['Flutter', 'Cloud Firestore', 'Firebase', 'Google Fonts'];

const DammapadayaPage: React.FC = () => {
  return (
    <BaseContainer>
      <NavigationBar />
      <main className="py-8 text-start">
        <Link to="/" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
          &larr; Back to Home
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <img
            src="/projects/dammapadaya/icon.png"
            alt="Dammapadaya logo"
            className="h-12 w-12 rounded-md"
          />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Dammapadaya</h1>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900 dark:text-amber-200">
            🚧 In Active Development
          </span>
        </div>

        <p className="my-4 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
          A daily-reading companion for the Dhammapada — the complete text, all 423 verses across
          its 26 traditional chapters (vaggas), in the original Pāli alongside a plain-English
          rendering of each verse's meaning. A rotating "today's verse" opens the app, and the full
          text is browsable by chapter or searchable by verse, theme, or wording. Free, with no
          account, no ads, and no purchases.
        </p>

        <button
          type="button"
          disabled
          title="Coming soon to the App Store"
          className="mb-4 flex w-fit cursor-not-allowed items-center gap-3 rounded-lg bg-gray-900 px-4 py-2 text-white opacity-70 dark:bg-gray-800"
        >
          <FontAwesomeIcon icon={faApple} className="h-7 w-7" />
          <span className="text-left leading-tight">
            <span className="block text-[10px]">Coming Soon on the</span>
            <span className="block text-lg font-semibold">App Store</span>
          </span>
        </button>

        <section className="mt-8">
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Screenshots
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="flex h-40 items-center justify-center rounded-lg border-2 border-dashed border-neutral-400 bg-white text-sm text-gray-500 dark:border-gray-600 dark:bg-neutral-950 dark:text-gray-400"
              >
                Future Screenshot
              </div>
            ))}
          </div>
        </section>

        <div className="mb-4 mt-8 flex gap-4 text-xs">
          <Link
            to="/projects/dammapadaya/support"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Support
          </Link>
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

export default DammapadayaPage;
