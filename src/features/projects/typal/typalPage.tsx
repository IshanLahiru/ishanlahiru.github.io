import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Seo from '@core/seo/Seo';
import KeyboardShowcase from './keyboardShowcase';
import ScreenshotStory from './screenshotStory';
import { Bento, MakersNote, Manifesto, Secrets, Voices } from './storySections';
import {
  BigNumber,
  GetTypal,
  HowItWorks,
  Pillars,
  Questions,
  SiteFooter,
  SiteHeader,
  StoreBadge,
  cta
} from './landingSections';
import { press, type } from './type';

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

const TypalPage: React.FC = () => {
  const { hash } = useLocation();
  const reduceMotion = useReducedMotion();

  // Arriving from another TyPal page at a place on this one ("/projects/typal#how"): the
  // browser has nothing to jump to until the page is drawn, so the jump is made here.
  useEffect(() => {
    if (!hash) return;
    const timer = window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }, 150);
    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
    <div className="min-h-screen bg-[#16183A] font-geist text-[#F3EFE7] antialiased">
      <Seo
        title="TyPal - The Private AI Keyboard for iPhone | Ishan Lahiru"
        description="TyPal is a private iPhone keyboard by Ishan Lahiru that rewrites your messages in the right voice for each person, with TyPal AI or your own AI key."
        path="/projects/typal"
        image="https://ishanlahiru.github.io/projects/typal/icon.png"
      />

      <SiteHeader onLanding />

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
              <motion.p
                variants={rise}
                className={`inline-flex items-center gap-2.5 rounded-full bg-[#F3EFE7]/10 px-4 py-2 text-[#F3EFE7]/80 ${type.meta}`}>
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF7A45] motion-reduce:animate-none" />
                Coming soon
                <span className="hidden min-[380px]:inline">&nbsp;to iPhone and iPad</span>
              </motion.p>
              <motion.h1
                variants={rise}
                className={`mt-7 sm:mt-8 lg:text-[clamp(3.75rem,6.2vw,5.5rem)] ${type.display}`}>
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
                  <a href="#demo" className={cta}>
                    Watch it work
                  </a>
                  <a
                    href="#how"
                    className={`inline-flex min-h-[48px] items-center rounded-xl border border-[#F3EFE7]/20 px-5 hover:border-[#FF7A45] hover:text-[#FF7A45] ${press} ${type.label}`}>
                    How it works
                  </a>
                </div>
                <div>
                  <StoreBadge />
                </div>
              </motion.div>
            </motion.div>
          </div>
        }
      />

      {/* Why it exists, read word by word */}
      <Manifesto />

      {/* What it does, as two claims, and the number it is proudest of */}
      <Pillars />
      <BigNumber />

      {/* The steps, in order */}
      <HowItWorks />

      {/* What happens to a message on its way to an AI */}
      <div id="privacy" className="scroll-mt-16">
        <Secrets />
      </div>

      {/* Some chats won't copy: reading the screenshot instead */}
      <ScreenshotStory />

      {/* The smaller things, and the many voices it writes in */}
      <Bento />
      <div id="voices" className="scroll-mt-16">
        <Voices />
      </div>
      <MakersNote />

      <Questions />
      <GetTypal />
      <SiteFooter onLanding />
    </div>
  );
};

export default TypalPage;
