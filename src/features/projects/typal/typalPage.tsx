import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { ArrowLeft } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Seo from '@core/seo/Seo';
import KeyboardShowcase from './keyboardShowcase';
import ScreenshotStory from './screenshotStory';
import { Bento, MakersNote, Manifesto, Secrets, Voices } from './storySections';
import { docLinks } from './legalLayout';
import { edge, press, type } from './type';

// What TyPal is, in three numbers.
const facts = [
  { value: '0', label: 'Accounts or trackers' },
  { value: '7', label: 'AI providers' },
  { value: '12', label: 'Key colours' }
];

// Who "they" are, one after another, each with the style TyPal would write to them in. Shown
// in the headline in place of "they", so the line says who it means.
const audiences = [
  { who: 'your crush', style: 'Flirty', color: '#FF5A8A' },
  { who: 'your mum', style: 'Family', color: '#34C759' },
  { who: 'your boss', style: 'Professional', color: '#4C8DFF' },
  { who: 'a client', style: 'Polite', color: '#FF9500' }
];

const Audience: React.FC<{ still: boolean }> = ({ still }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (still) return;
    const timer = window.setInterval(() => setIndex((last) => (last + 1) % audiences.length), 2600);
    return () => window.clearInterval(timer);
  }, [still]);
  const { who, style, color } = audiences[index];
  return (
    <span aria-hidden className={`text-[#FF7A45] ${type.voice}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={who}
          className="inline-block"
          initial={{ opacity: 0, y: '0.22em', filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{
            opacity: 0,
            y: '-0.18em',
            filter: 'blur(6px)',
            transition: { duration: 0.12, ease: 'easeOut' }
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}>
          {who}
        </motion.span>
      </AnimatePresence>{' '}
      hears it.
      {/* The style it is written in, as TyPal names it: always on its own line under the
          words, so it doesn't jump between lines as the words change length. */}
      <span className="mt-[0.5em] hidden w-fit items-center gap-[0.45em] rounded-full bg-[#F3EFE7]/10 px-[0.75em] py-[0.3em] font-geist-mono text-[0.17em] font-medium uppercase not-italic leading-[1.4] tracking-[0.16em] text-[#F3EFE7]/80 sm:flex">
        <span className="h-[0.7em] w-[0.7em] rounded-full" style={{ backgroundColor: color }} />
        {style} style
      </span>
    </span>
  );
};

// The opening comes in once, in the order it is read: the mark, the line, what it is, the facts.
const rise = {
  hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.4, ease: 'easeOut' as const }
  }
};

const techStack = ['Swift', 'SwiftUI', 'UIKit', 'CryptoKit', 'SQLite', 'Foundation Models'];

const TypalPage: React.FC = () => {
  const location = useLocation();
  const cameFromPortfolio = (location.state as { from?: string } | null)?.from === 'portfolio';
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#16183A] font-geist text-[#F3EFE7] antialiased">
      <Seo
        title="TyPal - The Private AI Keyboard for iPhone | Ishan Lahiru"
        description="TyPal is a private iPhone keyboard by Ishan Lahiru that rewrites your messages in the right voice for each person, with TyPal AI or your own AI key."
        path="/projects/typal"
        image="https://ishanlahiru.github.io/projects/typal/icon.png"
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#16183A]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/projects/typal" aria-label="TyPal home">
            <img
              src="/projects/typal/typal-horizontal-on-dark.svg"
              alt="TyPal"
              className="h-8 w-auto"
            />
          </Link>
          <Link
            to="/"
            className={`flex min-h-[44px] items-center gap-2 font-medium text-[#F3EFE7]/70 transition-colors hover:text-[#F3EFE7] ${type.label}`}>
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            {cameFromPortfolio ? 'Portfolio' : 'Ishan Lahiru'}
          </Link>
        </div>
      </header>

      {/* The opening and the demo share one iPhone: its Home Screen at the top, then the app
          opened from its icon, then each part of the keyboard playing as the page scrolls. */}
      <KeyboardShowcase
        hero={
          <div className="relative pb-10 pt-12 sm:pt-16 lg:py-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-40 -top-24 h-[26rem] w-[26rem] rounded-full bg-[#FF7A45]/15 blur-3xl"
            />
            <motion.div
              className="relative"
              initial={reduceMotion ? false : 'hidden'}
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.div variants={rise} className="flex items-center gap-4">
                {/* The mark is a Midnight tile on Midnight: a faint white edge keeps its shape. */}
                <img
                  src="/projects/typal/typal-symbol.svg"
                  alt="TyPal logo"
                  className="h-14 w-14 rounded-[22.37%] outline outline-1 -outline-offset-1 outline-[oklch(1_0_0/0.1)] drop-shadow-2xl sm:h-16 sm:w-16"
                />
                <p className={`flex items-center gap-2 text-[#F3EFE7]/70 ${type.meta}`}>
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF7A45] motion-reduce:animate-none" />
                  Coming soon to iPhone
                </p>
              </motion.div>
              <motion.h1
                variants={rise}
                className={`mt-8 sm:mt-10 lg:text-[clamp(3.75rem,6.2vw,5.5rem)] ${type.display}`}>
                Say it {/* The keys, set into the line like a word. */}
                <span
                  aria-hidden
                  className="mx-[0.04em] inline-block h-[0.74em] w-[0.74em] translate-y-[0.04em] -rotate-6 overflow-hidden rounded-[22.37%] align-baseline shadow-[0_0_0_1px_oklch(1_0_0/0.12),0_10px_24px_-10px_rgba(0,0,0,0.6)]">
                  <img src="/projects/typal/typal-symbol.svg" alt="" className="h-full w-full" />
                </span>{' '}
                the way
                <Audience still={Boolean(reduceMotion)} />
                <span className="sr-only">they hear it.</span>
              </motion.h1>
              <motion.div variants={rise} className="mt-8 flex flex-col gap-8">
                <p className={`max-w-[34rem] text-[#F3EFE7]/70 ${type.lead}`}>
                  TyPal is a private AI keyboard that rewrites your messages in{' '}
                  <span className="font-medium text-[#F3EFE7]">
                    the right voice for each person
                  </span>{' '}
                  you write to, without your private details ever leaving your iPhone.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    title="Coming soon to the App Store"
                    className="inline-flex min-h-[48px] items-center gap-3 rounded-xl bg-[#F3EFE7] px-5 py-2 text-[#16183A]">
                    <FontAwesomeIcon icon={faApple} className="h-6 w-6" />
                    <span className="text-left leading-tight">
                      <span className="block text-[10px] font-medium">Coming soon on the</span>
                      <span className="block text-lg font-semibold tracking-[-0.01em]">
                        App Store
                      </span>
                    </span>
                  </span>
                  <a
                    href="#demo"
                    className={`inline-flex min-h-[48px] items-center rounded-xl border border-[#F3EFE7]/20 px-5 hover:border-[#FF7A45] hover:text-[#FF7A45] ${press} ${type.label}`}>
                    Watch it work
                  </a>
                </div>
              </motion.div>

              <motion.dl
                variants={rise}
                className="mt-12 grid grid-cols-3 gap-6 border-t border-[#F3EFE7]/10 pt-7 sm:max-w-xl">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-2">
                    <dt className={`text-[#F3EFE7]/55 ${type.meta}`}>{fact.label}</dt>
                    <dd className={`order-first ${type.stat}`}>{fact.value}</dd>
                  </div>
                ))}
              </motion.dl>
            </motion.div>
          </div>
        }
      />

      {/* Why it exists, read word by word */}
      <Manifesto />

      {/* Some chats won't copy: reading the screenshot instead */}
      <ScreenshotStory />

      {/* What happens to a message on its way to an AI */}
      <Secrets />

      {/* The smaller things, and the many voices it writes in */}
      <Bento />
      <Voices />
      <MakersNote />

      {/* Tech */}
      <section className="border-t border-[#F3EFE7]/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className={`text-[#F3EFE7]/55 ${type.meta}`}>Built with</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className={`rounded-full bg-[#23264F] px-3 py-1 font-geist-mono text-xs text-[#F3EFE7]/80 ${edge.dark}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#F3EFE7]/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <img
            src="/projects/typal/typal-horizontal-on-dark.svg"
            alt="TyPal"
            className="h-7 w-auto"
          />
          <nav
            className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-medium ${type.label}`}>
            {docLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[#F3EFE7]/70 transition-colors hover:text-[#FF7A45]">
                {link.label}
              </Link>
            ))}
          </nav>
          <p className={`text-[#F3EFE7]/55 ${type.caption}`}>
            &copy; {new Date().getFullYear()} Ishan Lahiru Sampath
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TypalPage;
