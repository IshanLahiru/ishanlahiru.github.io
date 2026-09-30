import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import {
  ArrowLeft,
  EyeOff,
  KeyRound,
  Languages,
  Lock,
  MessageCircleHeart,
  Sparkles
} from 'lucide-react';
import Seo from '@core/seo/Seo';
import { docLinks } from './legalLayout';

const features = [
  {
    icon: MessageCircleHeart,
    title: 'The right voice for each person',
    body: 'Make a profile for your partner, your boss or your group chat. Tap it in the keyboard and your message is rewritten the way you talk to them.'
  },
  {
    icon: EyeOff,
    title: 'Private details stay private',
    body: 'Names, numbers, addresses and your own private terms are swapped for placeholders on your iPhone before anything is sent. If something private slips through, nothing is sent.'
  },
  {
    icon: Lock,
    title: 'Encrypted on your iPhone',
    body: 'Profiles, notes, chats and clipboard are encrypted with a key that never leaves the device, and left out of backups. No accounts, analytics, tracking or ads.'
  },
  {
    icon: Sparkles,
    title: 'TyPal AI, or your own key',
    body: 'Use TyPal AI with no sign-up, or bring a key from OpenAI, Anthropic, Google, OpenRouter, Mistral, Groq or xAI and talk to them directly.'
  },
  {
    icon: Languages,
    title: 'Suggestions and translation, on device',
    body: "Word suggestions learn how you write, and translation runs on Apple's on-device models. None of it is sent anywhere."
  },
  {
    icon: KeyRound,
    title: 'You stay in control',
    body: 'Your text changes only when you tap a profile, and Before puts back what you wrote. Pause AI or learning any time, or erase everything in one tap.'
  }
];

const steps = [
  { n: '1', title: 'Write', body: 'Type your message in any app, as you normally would.' },
  { n: '2', title: 'Tap a profile', body: 'Private details are masked on your iPhone first.' },
  { n: '3', title: 'Send', body: 'The reply is rebuilt on your iPhone, in their voice.' }
];

const privacyPoints = [
  'No accounts',
  'No tracking or ads',
  'Encrypted on device',
  'Masked before sending',
  'Not in iCloud backups',
  'Delete everything in one tap'
];

const techStack = ['Swift', 'SwiftUI', 'UIKit', 'CryptoKit', 'SQLite', 'Foundation Models'];

const TypalPage: React.FC = () => {
  const location = useLocation();
  const cameFromPortfolio = (location.state as { from?: string } | null)?.from === 'portfolio';

  return (
    <div className="min-h-screen bg-[#F3EFE7] font-sans text-[#16183A]">
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
            className="flex min-h-[44px] items-center gap-2 text-sm font-medium text-[#F3EFE7]/70 transition-colors hover:text-[#F3EFE7]">
            <ArrowLeft className="h-4 w-4" />
            {cameFromPortfolio ? 'Portfolio' : 'Ishan Lahiru'}
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#16183A] text-[#F3EFE7]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FF7A45]/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <img
            src="/projects/typal/typal-symbol.svg"
            alt="TyPal logo"
            className="mx-auto h-28 w-28 animate-fade-in-up drop-shadow-2xl sm:h-36 sm:w-36"
          />
          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#FF7A45]/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF7A45]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF7A45]" />
            Coming soon to iPhone
          </span>
          <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
            Say it the way <span className="text-[#FF7A45]">they</span> hear it.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#F3EFE7]/75 sm:text-lg">
            TyPal is a private AI keyboard that rewrites your messages in the right voice for each
            person you write to, without your private details ever leaving your iPhone.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <span
              title="Coming soon to the App Store"
              className="inline-flex min-h-[48px] items-center gap-3 rounded-xl bg-[#F3EFE7] px-5 py-2 text-[#16183A]">
              <FontAwesomeIcon icon={faApple} className="h-6 w-6" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] font-medium">Coming soon on the</span>
                <span className="block text-lg font-semibold">App Store</span>
              </span>
            </span>
            <a
              href="#features"
              className="inline-flex min-h-[48px] items-center rounded-xl border border-[#F3EFE7]/20 px-5 text-sm font-semibold transition-colors hover:border-[#FF7A45] hover:text-[#FF7A45]">
              See what it does
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-[#16183A]/10">
        <ol className="mx-auto grid max-w-5xl gap-6 px-4 py-14 sm:grid-cols-3 sm:px-6 lg:px-8">
          {steps.map((step) => (
            <li key={step.n} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF7A45] font-serif text-lg font-bold text-[#16183A]">
                {step.n}
              </span>
              <div>
                <p className="font-serif text-lg font-bold">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#16183A]/75">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8431A]">
            Why TyPal
          </p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            A keyboard that knows who you're talking to, and keeps it to itself.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#16183A]/10 bg-white/70 p-6 transition-shadow hover:shadow-lg hover:shadow-[#16183A]/5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#16183A] text-[#FF7A45]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-serif text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#16183A]/75">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy promise */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#16183A] px-6 py-12 text-[#F3EFE7] sm:px-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF7A45]">
                Privacy first
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight">
                Built so there's nothing to leak.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#F3EFE7]/75">
                TyPal has no accounts and no analytics. What you type stays on your iPhone unless
                you ask for AI help, and even then only the masked text goes out. The full details
                are in plain English in the privacy policy.
              </p>
              <Link
                to="/projects/typal/privacy-policy"
                className="mt-6 inline-flex min-h-[44px] items-center rounded-xl bg-[#FF7A45] px-5 text-sm font-semibold text-[#16183A] transition-colors hover:bg-[#ff8d5e]">
                Read the Privacy Policy
              </Link>
            </div>
            <ul className="grid grid-cols-1 gap-3 text-sm min-[400px]:grid-cols-2">
              {privacyPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF7A45]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tech */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#16183A]/70">
            Built with
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#16183A]/10 bg-white/70 px-3 py-1 text-xs font-medium text-[#16183A]/80">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#16183A]/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <img src="/projects/typal/typal-horizontal.svg" alt="TyPal" className="h-7 w-auto" />
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
            {docLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[#16183A]/70 transition-colors hover:text-[#B8431A]">
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-[#16183A]/70">
            &copy; {new Date().getFullYear()} Ishan Lahiru Sampath
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TypalPage;
