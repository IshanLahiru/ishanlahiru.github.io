import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { ArrowLeft } from 'lucide-react';

const screenshots = [
  { src: '/projects/omi-clash/screenshots/01-gameplay', alt: 'Outsmart your rivals — real-time multiplayer card battles' },
  { src: '/projects/omi-clash/screenshots/03-home', alt: 'Jump in, anytime — one tap into the action' },
  { src: '/projects/omi-clash/screenshots/04-multiplayer', alt: 'Squad up, clash — create a room and invite friends' },
  { src: '/projects/omi-clash/screenshots/05-practice', alt: 'Level up your skills — practice offline, earn XP' },
  { src: '/projects/omi-clash/screenshots/06-profile', alt: 'Track your glory — stats, achievements, bragging rights' },
  { src: '/projects/omi-clash/screenshots/02-brand', alt: 'Omi Clash brand splash screen' }
];

const leagues = ['seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace', 'trump'];

const techStack = [
  { name: 'Flutter', logo: '/tools/flutter.svg' },
  { name: 'Flame', logo: '/tools/flame-engine.png' },
  { name: 'Firebase', logo: '/tools/firebase.svg' },
  { name: 'WebRTC', logo: '/tools/webrtc.svg' },
  { name: 'RevenueCat', logo: '/tools/revenuecat.svg' },
  { name: 'Cloud Functions', logo: '/tools/googlecloud.svg' }
];

const footerLinks = [
  { to: '/projects/omi-clash/support', label: 'Support' },
  { to: '/projects/omi-clash/community', label: 'Community' },
  { to: '/projects/omi-clash/privacy-policy', label: 'Privacy Policy' },
  { to: '/projects/omi-clash/terms', label: 'Terms & Conditions' }
];

const APP_STORE_URL = 'https://apps.apple.com/lk/app/omi-clash/id6793634949';

const buttonBase =
  'inline-flex items-center gap-2 rounded-lg font-extrabold uppercase tracking-wide transition-all duration-100 active:translate-y-1';

const WaveTop: React.FC<{ color: string }> = ({ color }) => (
  <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute -top-px left-0 h-8 w-full sm:h-14">
    <path d="M0,0 L0,22 C360,58 1080,-16 1440,22 L1440,0 Z" fill={color} />
  </svg>
);

const WaveBottom: React.FC<{ color: string }> = ({ color }) => (
  <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute -bottom-px left-0 h-8 w-full sm:h-14">
    <path d="M0,60 L0,38 C360,2 1080,76 1440,38 L1440,60 Z" fill={color} />
  </svg>
);

const OmiClashPage: React.FC = () => {
  const location = useLocation();
  const cameFromPortfolio = (location.state as { from?: string } | null)?.from === 'portfolio';

  return (
    <div className="min-h-screen bg-black font-sans text-slate-300">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {cameFromPortfolio ? (
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Portfolio</span>
            </Link>
          ) : (
            <span />
          )}
          <Link
            to="/projects/omi-clash"
            className="group flex items-center gap-2 text-sm font-extrabold uppercase tracking-tight text-white"
          >
            <img
              src="/projects/omi-clash/icon.png"
              alt=""
              className="h-8 w-8 rounded-[22%] object-cover transition-transform duration-200 group-hover:rotate-6 group-hover:scale-110"
            />
            <span className="hidden sm:inline">Omi Clash</span>
          </Link>
          <span className="w-4" aria-hidden />
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
          <picture className="mx-auto block w-48 animate-bob sm:w-64">
            <source srcSet="/projects/omi-clash/hero-art.webp" type="image/webp" />
            <img src="/projects/omi-clash/hero-art.png" alt="Omi Clash" className="w-full drop-shadow-2xl" />
          </picture>

          <span className="mt-2 inline-flex -rotate-2 items-center gap-1.5 rounded border border-red-500 bg-red-600 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-white transition-transform duration-200 hover:rotate-0">
            🎉 Free to Play
          </span>
          <h1 className="mt-5 text-4xl font-extrabold uppercase leading-[1.05] text-white sm:text-5xl">
            Real-time <span className="text-amber-400">Sri Lankan</span> card game
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-400 sm:text-lg">
            Play Omi online with friends, bots, and live voice chat at the table.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Live on App Store
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-amber-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              Testing on Google Play
            </span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border-b-4 border-slate-500 bg-white px-5 py-3 text-black hover:-translate-y-0.5 hover:brightness-95 active:border-b-0 active:translate-y-1`}
            >
              <FontAwesomeIcon icon={faApple} className="h-7 w-7" />
              <span className="text-left normal-case leading-tight">
                <span className="block text-[10px] font-medium">Download on the</span>
                <span className="block text-lg font-extrabold">App Store</span>
              </span>
            </a>
            <div className="inline-flex items-center gap-3 rounded-lg border border-dashed border-white/20 px-5 py-3 text-slate-500">
              <FontAwesomeIcon icon={faGooglePlay} className="h-6 w-6" />
              <span className="text-left normal-case leading-tight">
                <span className="block text-[10px] font-medium">Coming soon to</span>
                <span className="block text-lg font-extrabold">Google Play</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-500">See It in Action</p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">Screenshots</h2>
          <div className="mt-10 flex gap-5 overflow-x-auto px-2 pb-4">
            {screenshots.map((shot, i) => (
              <picture
                key={shot.src}
                className={`flex-none transition-transform duration-300 hover:z-10 hover:!rotate-0 hover:scale-105 ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}
              >
                <source srcSet={`${shot.src}.webp`} type="image/webp" />
                <img
                  src={`${shot.src}.png`}
                  alt={shot.alt}
                  loading="lazy"
                  className="h-[320px] w-auto rounded-lg border border-white/10 sm:h-[380px] lg:h-[440px]"
                />
              </picture>
            ))}
          </div>
        </div>
      </section>

      {/* Leagues */}
      <section id="leagues" className="relative bg-[#1a0a0d] py-6">
        <WaveTop color="#000000" />
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-amber-400">Rank Up</p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            Climb the Leagues
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400">
            Win hands, earn XP, and work your way from Seven all the way up to Trump — Omi Clash's
            top league.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5 sm:gap-x-6 lg:grid-cols-9">
            {leagues.map((league, i) => (
              <div key={league} className="group flex flex-col items-center gap-2">
                <picture
                  className="transition-transform duration-200 ease-out hover:-translate-y-2 hover:rotate-6 hover:scale-110"
                  style={{ animation: `bob 2.4s ease-in-out ${i * 0.15}s infinite` }}
                >
                  <source srcSet={`/projects/omi-clash/leagues/${league}.webp`} type="image/webp" />
                  <img
                    src={`/projects/omi-clash/leagues/${league}.png`}
                    alt={`${league} league badge`}
                    loading="lazy"
                    className="h-16 w-16 object-contain sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                  />
                </picture>
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 transition-colors group-hover:text-amber-400">
                  {league}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-10 text-center">
            <p className="text-2xl font-extrabold uppercase tracking-tight text-white">Ready to Clash?</p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border-b-4 border-amber-600 bg-amber-400 px-5 py-3 text-black hover:-translate-y-0.5 hover:brightness-105 active:border-b-0 active:translate-y-1`}
            >
              <FontAwesomeIcon icon={faApple} className="h-5 w-5" />
              Download on the App Store
            </a>
          </div>
        </div>
        <WaveBottom color="#000000" />
      </section>

      {/* Rules + tech */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-500">The Rules</p>
            <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
              Omi, the Way It's Played at Home
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400">
              Omi Clash brings the trick-taking card game played at Sri Lankan family gatherings
              online — teams of two, trump calls, Court calls, and the all-or-nothing Kapoothi
              call, all wrapped in a fast, modern app.
            </p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-amber-400">Built With</p>
            <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
              Tech Stack
            </h2>
            <div className="mt-5 grid grid-cols-3 gap-4 sm:grid-cols-6">
              {techStack.map((tech) => (
                <div key={tech.name} className="group relative flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[22%] bg-white p-2.5 shadow-sm transition-transform duration-200 hover:scale-110 hover:rotate-6">
                    <img src={tech.logo} alt={`${tech.name} logo`} className="h-full w-full object-contain" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{tech.name}</span>
                  <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 w-max max-w-[9rem] -translate-x-1/2 rounded-lg bg-white px-2.5 py-1.5 text-[10px] font-medium normal-case leading-snug text-black opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
                    {tech.name} is a trademark of its respective owner.
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[11px] leading-relaxed text-slate-600">
              All logos and trademarks shown are the property of their respective owners and are
              used here solely to identify the technologies this app is built with. No
              endorsement or affiliation is implied.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-sm font-semibold text-slate-500 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          {cameFromPortfolio && (
            <Link
              to="/"
              className="rounded-lg border border-white/10 px-4 py-2 text-xs font-extrabold text-white transition-colors hover:bg-white/10"
            >
              Back to Portfolio
            </Link>
          )}
        </div>
      </footer>
    </div>
  );
};

export default OmiClashPage;
