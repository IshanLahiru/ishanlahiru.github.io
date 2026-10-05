import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { Menu, MessagesSquare, ShieldCheck, X } from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll
} from 'motion/react';
import { edge, press, type } from './type';

/* The parts of TyPal's page that give it the shape of a product's landing page: a bar with
   the way around and one call to action, two claims side by side, one big number, the steps
   in order, the questions people ask, and a last invitation. The story sections between
   them are in storySections.tsx. */

export const docLinks = [
  { to: '/projects/typal/support', label: 'Support' },
  { to: '/projects/typal/privacy-policy', label: 'Privacy Policy' },
  { to: '/projects/typal/terms', label: 'Terms of Use' }
];

// Places on the landing page, linked from the bar and the footer on every TyPal page.
const pageLinks = [
  { hash: 'how', label: 'How it works' },
  { hash: 'privacy', label: 'Privacy' },
  { hash: 'voices', label: 'Voices' },
  { hash: 'questions', label: 'Questions' }
];

// The one filled button: coral, capitals set wide, the same on every TyPal page.
const ctaLook = `inline-flex items-center justify-center rounded-xl bg-[#FF7A45] font-geist font-semibold uppercase tracking-[0.16em] text-[#16183A] hover:bg-[#FF9A70] ${press}`;
export const cta = `${ctaLook} min-h-[48px] px-6 text-[0.8125rem]`;
// The same button, a size down, for the bar.
const ctaSmall = `${ctaLook} min-h-[40px] whitespace-nowrap px-4 text-[0.75rem]`;

/** A jump within the landing page ("#how"), or a link to that place from another page
    ("/projects/typal#how"), which goes through the router so the page isn't loaded again. */
const PageLink: React.FC<{ to: string; className?: string; children: React.ReactNode }> = ({
  to,
  className,
  children
}) =>
  to.startsWith('#') ? (
    <a href={to} className={className}>
      {children}
    </a>
  ) : (
    <Link to={to} className={className}>
      {children}
    </Link>
  );

/** The bar across the top: the logo, the way around the landing page, and one button.
    On a wide screen the links sit in the bar; on a narrow one they fold into a menu. */
export const SiteHeader: React.FC<{ onLanding?: boolean }> = ({ onLanding = false }) => {
  const [open, setOpen] = useState(false);
  // On the landing page these are jumps within it; elsewhere they go to it first.
  const href = (hash: string) => (onLanding ? `#${hash}` : `/projects/typal#${hash}`);
  const barLink = 'font-medium text-[#F3EFE7]/70 transition-colors hover:text-[#F3EFE7]';
  const menuLink = `flex min-h-[52px] items-center text-[#F3EFE7] ${type.subheading}`;
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#16183A]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link to="/projects/typal" aria-label="TyPal home" className="shrink-0">
          <img
            src="/projects/typal/typal-horizontal-on-dark.svg"
            alt="TyPal"
            className="h-7 w-auto sm:h-8"
          />
        </Link>
        <nav
          aria-label="TyPal"
          className={`hidden items-center gap-5 md:flex lg:gap-7 ${type.label}`}>
          {pageLinks.map((link) => (
            <PageLink key={link.hash} to={href(link.hash)} className={barLink}>
              {link.label}
            </PageLink>
          ))}
          <Link to="/projects/typal/support" className={barLink}>
            Support
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <PageLink to={href('get')} className={ctaSmall}>
            Get TyPal
          </PageLink>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="typal-menu"
            onClick={() => setOpen((was) => !was)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl text-[#F3EFE7] hover:bg-white/10 md:hidden ${press}`}>
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            )}
          </button>
        </div>
      </div>
      {/* The folded links: under the bar, one to a row, each a full-width target. */}
      {open && (
        <nav
          id="typal-menu"
          aria-label="TyPal"
          onClick={() => setOpen(false)}
          className="divide-y divide-white/10 border-t border-white/10 bg-[#16183A] px-4 pb-3 sm:px-6 md:hidden">
          {pageLinks.map((link) => (
            <PageLink key={link.hash} to={href(link.hash)} className={menuLink}>
              {link.label}
            </PageLink>
          ))}
          <Link to="/projects/typal/support" className={menuLink}>
            Support
          </Link>
        </nav>
      )}
    </header>
  );
};

/** A section's opening: a small label, then the line, centred. */
const Opening: React.FC<{ id: string; label: string; children: React.ReactNode }> = ({
  id,
  label,
  children
}) => (
  <div className="mx-auto max-w-4xl text-center">
    <p className={`text-[#FF9A70] ${type.meta}`}>{label}</p>
    <h2 id={id} className={`mt-4 sm:mt-5 ${type.section}`}>
      {children}
    </h2>
  </div>
);

/* ---------- Two claims, side by side ---------- */

const pillars = [
  {
    icon: MessagesSquare,
    title: 'The right voice',
    text: "Your boss, your mum and your best friend don't read the same way. Choose who you're writing to, and TyPal rewrites your words in the voice that suits them."
  },
  {
    icon: ShieldCheck,
    title: 'Your details, kept yours',
    text: 'Names, numbers, addresses and private terms are swapped for placeholders on your iPhone before anything reaches an AI, and put back when the answer returns.'
  }
];

export const Pillars: React.FC = () => (
  <section aria-labelledby="pillars-title" className="bg-[#16183A] text-[#F3EFE7]">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <Opening id="pillars-title" label="What it does">
        Two things every message needs.
      </Opening>
      <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2">
        {pillars.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className={`rounded-3xl bg-[#23264F] p-6 sm:p-8 lg:p-10 ${edge.dark}`}>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF7A45]/15 text-[#FF9A70]">
              <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
            </span>
            <h3 className={`mt-7 ${type.heading}`}>{title}</h3>
            <p className={`mt-4 text-[#F3EFE7]/70 ${type.lead}`}>{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- One big number ---------- */

export const BigNumber: React.FC = () => (
  <section aria-labelledby="number-title" className="bg-[#101231] text-[#F3EFE7]">
    <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <p
        aria-hidden
        className="font-grotesque text-[clamp(7rem,26vw,16rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-[#FF7A45]">
        0
      </p>
      <h2 id="number-title" className={`mx-auto mt-8 max-w-3xl ${type.section}`}>
        <span className="sr-only">Zero </span>accounts, trackers or ads.
      </h2>
      <p className={`mx-auto mt-6 max-w-[38rem] text-[#F3EFE7]/70 ${type.lead}`}>
        No sign-up and nothing to log in to. What you write and save stays on your iPhone, encrypted
        with a key that never leaves it.
      </p>
    </div>
  </section>
);

/* ---------- The steps, in order ---------- */

const steps = [
  {
    title: 'Add the keyboard',
    text: 'Turn TyPal on in Settings once. After that it is there in every app, beside the keyboard you already use.'
  },
  {
    title: 'Write as you always do',
    text: 'Type in English, Sinhala, Tamil or 19 other languages, with word suggestions that learn how you write.'
  },
  {
    title: 'Ask for what you want',
    text: 'Tap the sparkle and choose a style, or say it in your own words: shorter, friendlier, more formal.'
  },
  {
    title: 'Private details stay behind',
    text: 'Before the request leaves, names, numbers and private terms become placeholders. If anything private is still showing, nothing is sent.'
  },
  {
    title: 'Insert it, or take it back',
    text: 'The answer shows what changed. One tap puts it in your message, and one tap puts your own words back.'
  }
];

/* On a wide screen the section holds still while the page scrolls through it, and each
   stretch of scrolling brings the next step: the list on the left lights up in turn, the
   panel on the right changes, and a line fills along the bottom. On a phone the steps are
   a list, and each one rises into place as it comes into view. */
export const HowItWorks: React.FC = () => {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  // Tall enough to hold the title, the list and the panel while pinned.
  const [roomy, setRoomy] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(min-height: 700px)');
    const update = () => setRoomy(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  const pinned = roomy && !reduceMotion;

  const track = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: track, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (!pinned) return;
    setActive(Math.min(steps.length - 1, Math.max(0, Math.floor(progress * steps.length))));
  });

  // Choosing a step scrolls to its stretch of the track, so the scroll and the step agree.
  const choose = (index: number) => {
    const element = track.current;
    if (!pinned || !element) {
      setActive(index);
      return;
    }
    const top = element.getBoundingClientRect().top + window.scrollY;
    const span = element.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (span * (index + 0.5)) / steps.length, behavior: 'smooth' });
  };

  const step = steps[active];
  return (
    <section
      id="how"
      aria-label="How it works"
      className="scroll-mt-16 bg-[#16183A] text-[#F3EFE7]">
      {/* Narrow screens: every step, one under another, each rising in as it's reached. */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:hidden">
        <Opening id="how-title" label="How it works">
          A keyboard that works wherever you type.
        </Opening>
        <ol className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2">
          {steps.map((item, index) => (
            <motion.li
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -12% 0px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: (index % 2) * 0.08 }}
              className={`rounded-2xl bg-[#23264F] p-6 sm:last:col-span-2 ${edge.dark}`}>
              <p className={`text-[#FF9A70] ${type.meta}`}>Step {index + 1}</p>
              <h3 className={`mt-3 ${type.subheading}`}>{item.title}</h3>
              <p className={`mt-2 text-[#F3EFE7]/70 ${type.body}`}>{item.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* Wide screens: a tall track, with the section pinned inside it while it scrolls. */}
      <div
        ref={track}
        className="hidden lg:block"
        style={pinned ? { height: `${steps.length * 62 + 38}vh` } : undefined}>
        <div
          className={
            pinned ? 'sticky top-16 flex h-[calc(100vh-4rem)] flex-col justify-center' : 'py-28'
          }>
          <div className="mx-auto w-full max-w-6xl px-8">
            <Opening id="how-title-wide" label="How it works">
              A keyboard that works wherever you type.
            </Opening>
            <div className="mt-12 grid grid-cols-[5fr_7fr] gap-6">
              <div role="tablist" aria-label="Steps" className="flex flex-col gap-2">
                {steps.map((item, index) => {
                  const isActive = index === active;
                  return (
                    <button
                      key={item.title}
                      type="button"
                      role="tab"
                      id={`step-tab-${index}`}
                      aria-selected={isActive}
                      aria-controls="step-panel"
                      onClick={() => choose(index)}
                      className={`relative flex min-h-[60px] items-center gap-5 rounded-2xl px-5 text-left transition-colors duration-300 ${press} ${
                        isActive ? 'text-[#F3EFE7]' : 'text-[#F3EFE7]/50 hover:text-[#F3EFE7]'
                      }`}>
                      {/* One highlight, sliding from step to step. */}
                      {isActive && (
                        <motion.span
                          layoutId="step-highlight"
                          aria-hidden
                          className="absolute inset-0 rounded-2xl bg-[#23264F] shadow-[0_0_0_1px_oklch(1_0_0/0.08)]"
                          transition={{ type: 'spring', stiffness: 420, damping: 38 }}
                        />
                      )}
                      <span
                        className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-geist-mono text-sm font-medium transition-colors duration-300 ${
                          isActive ? 'bg-[#FF7A45] text-[#16183A]' : 'bg-white/10'
                        }`}>
                        {index + 1}
                      </span>
                      <span className={`relative ${type.subheading}`}>{item.title}</span>
                    </button>
                  );
                })}
              </div>
              <div
                id="step-panel"
                role="tabpanel"
                aria-labelledby={`step-tab-${active}`}
                className={`relative flex min-h-[21rem] flex-col justify-end overflow-hidden rounded-3xl bg-[#23264F] p-10 ${edge.dark}`}>
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={active}
                    aria-hidden
                    className="pointer-events-none absolute -top-10 right-6 font-grotesque text-[16rem] font-semibold leading-none tracking-[-0.06em] text-[#F3EFE7]/[0.06]"
                    initial={reduceMotion ? false : { opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -60 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}>
                    {active + 1}
                  </motion.span>
                </AnimatePresence>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active}
                    className="relative"
                    initial={reduceMotion ? false : { opacity: 0, y: 16, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={
                      reduceMotion
                        ? undefined
                        : { opacity: 0, y: -8, transition: { duration: 0.12 } }
                    }
                    transition={{ duration: 0.3, ease: 'easeOut' }}>
                    <p className={`text-[#FF9A70] ${type.meta}`}>
                      Step {active + 1} of {steps.length}
                    </p>
                    <h3 className={`mt-4 ${type.heading}`}>{step.title}</h3>
                    <p className={`mt-4 max-w-[34rem] text-[#F3EFE7]/70 ${type.lead}`}>
                      {step.text}
                    </p>
                  </motion.div>
                </AnimatePresence>
                {/* How far through the steps the scroll is. */}
                {pinned && (
                  <motion.span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-1 origin-left bg-[#FF7A45]"
                    style={{ scaleX: scrollYProgress }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- The questions people ask ---------- */

const questions = [
  {
    question: 'Is TyPal free?',
    answer:
      'Typing, emoji, word suggestions and on-device translation are free. AI works with TyPal AI, which uses TyPal Tokens you buy in the app, or with your own AI key.'
  },
  {
    question: 'Does TyPal see what I type?',
    answer:
      'No. There are no accounts and no analytics. Text leaves your iPhone only when you ask for AI help, only to the AI you allowed, and only after private details are swapped out.'
  },
  {
    question: 'Why does it ask for Full Access?',
    answer:
      'iOS requires it before a keyboard can reach its own encrypted storage and the network. TyPal uses it for your styles, chats, clipboard and AI. Typing and emoji work without it.'
  },
  {
    question: 'Which languages can I type?',
    answer:
      'Twenty-two, including English, Sinhala (phonetic and Wijesekara), Tamil (phonetic and Tamil99), Spanish, French, German, Russian and Ukrainian.'
  },
  {
    question: 'Do I need my own AI key?',
    answer:
      'No. TyPal AI needs no key. If you have one from OpenRouter, OpenAI, Anthropic, Google, Mistral, Groq or xAI, you can use that instead.'
  },
  {
    question: 'When is it out?',
    answer: 'TyPal is coming soon to the App Store, for iPhone and iPad.'
  }
];

export const Questions: React.FC = () => (
  <section
    id="questions"
    aria-labelledby="questions-title"
    className="scroll-mt-16 bg-[#101231] text-[#F3EFE7]">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <Opening id="questions-title" label="Questions">
        Before you ask.
      </Opening>
      <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:mt-14">
        {questions.map(({ question, answer }) => (
          <details
            key={question}
            className={`group rounded-2xl bg-[#23264F] px-5 py-4 open:shadow-[0_0_0_1px_rgba(255,122,69,0.5)] sm:px-6 sm:py-5 ${edge.dark}`}>
            <summary
              className={`flex min-h-[32px] cursor-pointer list-none items-center justify-between gap-4 marker:content-none sm:gap-6 [&::-webkit-details-marker]:hidden ${type.question}`}>
              {question}
              <span
                aria-hidden
                className="shrink-0 font-geist text-2xl font-normal leading-none text-[#FF7A45] transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className={`mt-3 max-w-[36rem] text-[#F3EFE7]/70 ${type.body}`}>{answer}</p>
          </details>
        ))}
      </div>
      <p className={`mt-10 text-center text-[#F3EFE7]/55 ${type.small}`}>
        Something else?{' '}
        <Link
          to="/projects/typal/support"
          className="font-medium text-[#FF9A70] underline decoration-[#FF7A45]/40 underline-offset-4 hover:decoration-[#FF7A45]">
          Ask on the support page
        </Link>
        .
      </p>
    </div>
  </section>
);

/* ---------- The last invitation ---------- */

/** Where TyPal will be downloaded from. It isn't out yet, so this says so and isn't a link. */
export const StoreBadge: React.FC = () => (
  <span
    title="Coming soon to the App Store"
    className="inline-flex min-h-[48px] items-center gap-3 rounded-xl bg-[#F3EFE7] px-5 py-2 text-[#16183A]">
    <FontAwesomeIcon icon={faApple} className="h-6 w-6" />
    <span className="text-left leading-tight">
      <span className="block text-[10px] font-medium">Coming soon on the</span>
      <span className="block text-lg font-semibold tracking-[-0.01em]">App Store</span>
    </span>
  </span>
);

export const GetTypal: React.FC = () => (
  <section
    id="get"
    aria-labelledby="get-title"
    className="relative scroll-mt-16 overflow-hidden bg-[#16183A] text-[#F3EFE7]">
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7A45]/15 blur-3xl"
    />
    <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-36">
      <img
        src="/projects/typal/typal-symbol.svg"
        alt=""
        className="h-20 w-20 rounded-[22.37%] outline outline-1 -outline-offset-1 outline-[oklch(1_0_0/0.1)] drop-shadow-2xl"
      />
      <h2 id="get-title" className={`mt-10 max-w-4xl ${type.section}`}>
        Say it the way
        <span className={`text-[#FF7A45] ${type.voice}`}>they hear it.</span>
      </h2>
      <p className={`mt-6 max-w-[34rem] text-[#F3EFE7]/70 ${type.lead}`}>
        TyPal is nearly ready. It will be on the App Store for iPhone and iPad.
      </p>
      <div className="mt-10">
        <StoreBadge />
      </div>
    </div>
  </section>
);

/* ---------- The foot of every TyPal page ---------- */

export const SiteFooter: React.FC<{ onLanding?: boolean }> = ({ onLanding = false }) => {
  const href = (hash: string) => (onLanding ? `#${hash}` : `/projects/typal#${hash}`);
  const linkClass = 'text-[#F3EFE7]/70 transition-colors hover:text-[#FF9A70]';
  return (
    <footer className="border-t border-[#F3EFE7]/10 bg-[#101231] text-[#F3EFE7]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-12 sm:grid-cols-3 sm:px-6 sm:py-14 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:px-8">
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">
          <img
            src="/projects/typal/typal-horizontal-on-dark.svg"
            alt="TyPal"
            className="h-8 w-auto"
          />
          <p className={`mt-4 max-w-[22rem] text-[#F3EFE7]/55 ${type.small}`}>
            A private AI keyboard for iPhone that writes in the right voice for each person.
          </p>
        </div>
        <nav aria-label="TyPal's page" className={`flex flex-col gap-3 ${type.small}`}>
          <p className={`text-[#F3EFE7]/55 ${type.meta}`}>TyPal</p>
          {pageLinks.map((link) => (
            <PageLink key={link.hash} to={href(link.hash)} className={linkClass}>
              {link.label}
            </PageLink>
          ))}
        </nav>
        <nav aria-label="Help and legal" className={`flex flex-col gap-3 ${type.small}`}>
          <p className={`text-[#F3EFE7]/55 ${type.meta}`}>Help</p>
          {docLinks.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="The maker" className={`flex flex-col gap-3 ${type.small}`}>
          <p className={`text-[#F3EFE7]/55 ${type.meta}`}>Made by</p>
          <Link to="/" className={linkClass}>
            Ishan Lahiru
          </Link>
        </nav>
      </div>
      <div className="border-t border-[#F3EFE7]/10">
        <p
          className={`mx-auto max-w-6xl px-4 py-6 text-[#F3EFE7]/55 sm:px-6 lg:px-8 ${type.caption}`}>
          &copy; {new Date().getFullYear()} Ishan Lahiru Sampath
        </p>
      </div>
    </footer>
  );
};
