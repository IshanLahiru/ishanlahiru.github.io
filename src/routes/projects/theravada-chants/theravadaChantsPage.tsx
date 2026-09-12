import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { ArrowLeft, Volume2 } from 'lucide-react';

const screenshots = [
  { src: '01-daily-companion', alt: 'Your daily practice companion — the full library' },
  { src: '03-verses-translated', alt: 'Pāli verses, fully translated, with meaning and description' },
  { src: '04-guided-practice', alt: 'Guided by your practice — choose Pansil, Atasil, or Dasasil' },
  { src: '05-chant-confidence', alt: 'A full Pāli pronunciation guide' },
  { src: '02-reading-list', alt: 'Build your reading list' },
  { src: '06-light-dark', alt: 'Elegant in light or dark' }
];

const footerLinks = [
  { to: '/projects/theravada-chants/support', label: 'Support' },
  { to: '/projects/theravada-chants/privacy-policy', label: 'Privacy Policy' },
  { to: '/projects/theravada-chants/terms', label: 'Terms & Conditions' }
];

const APP_STORE_URL = 'https://apps.apple.com/lk/app/therav%C4%81da-chants/id6806461385';

const TheravadaChantsPage: React.FC = () => {
  const location = useLocation();
  const cameFromPortfolio = (location.state as { from?: string } | null)?.from === 'portfolio';

  return (
    <div className="min-h-screen bg-[#FBF5EA] font-sans text-[#2B2118]">
      <header className="sticky top-0 z-40 border-b border-[#2B2118]/10 bg-[#FBF5EA]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {cameFromPortfolio ? (
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-[#8B7F6E] transition-colors hover:text-[#2B2118]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Portfolio</span>
            </Link>
          ) : (
            <span />
          )}
          <Link to="/projects/theravada-chants" className="flex items-center gap-2 text-sm font-semibold text-[#2B2118]">
            <img src="/projects/theravada-chants/icon.png" alt="" className="h-8 w-8 rounded-[22%] object-cover" />
            <span className="hidden sm:inline">Theravāda Chants</span>
          </Link>
          <span className="w-4" aria-hidden />
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/projects/theravada-chants/dharma-wheel.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 w-[36rem] max-w-none -translate-x-1/2 -translate-y-1/4 opacity-[0.05]"
        />
        <div className="relative mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
          <img
            src="/projects/theravada-chants/icon.png"
            alt="Theravāda Chants"
            className="mx-auto h-20 w-20 rounded-[22%] object-cover shadow-lg"
          />
          <h1 className="mt-6 font-lora text-4xl italic leading-tight text-[#2B2118] sm:text-5xl">
            Your Daily Practice Companion
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-[#5B4E3E]">
            Pāli verses, precepts, and pirith — with English translations, a pronunciation guide,
            and reading lists built around your practice.
          </p>

          <span className="mt-4 inline-flex -rotate-1 items-center gap-1.5 rounded-full border border-[#2B2118]/10 bg-[#F0DFB9] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#2B2118] shadow-sm">
            <Volume2 className="h-3 w-3" />
            Audio Narration — Coming Soon
          </span>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              Live on the App Store
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
              Testing on Google Play
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-[#2B2118] px-5 py-3 text-white shadow-sm transition-transform duration-150 hover:-translate-y-0.5"
            >
              <FontAwesomeIcon icon={faApple} className="h-6 w-6" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] font-medium text-white/70">Download on the</span>
                <span className="block text-base font-semibold">App Store</span>
              </span>
            </a>
            <div className="inline-flex items-center gap-3 rounded-xl border border-dashed border-[#2B2118]/20 px-5 py-3 text-[#8B7F6E]">
              <FontAwesomeIcon icon={faGooglePlay} className="h-5 w-5" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] font-medium">Coming soon to</span>
                <span className="block text-base font-semibold">Google Play</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="border-t border-[#2B2118]/10 bg-white/50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A9752F]">See It in Action</p>
          <h2 className="mt-3 font-lora text-2xl italic text-[#2B2118] sm:text-3xl">A Closer Look</h2>
          <div className="mt-8 flex gap-5 overflow-x-auto px-2 pb-4">
            {screenshots.map((shot) => (
              <picture key={shot.src} className="flex-none">
                <source srcSet={`/projects/theravada-chants/screenshots/${shot.src}.webp`} type="image/webp" />
                <img
                  src={`/projects/theravada-chants/screenshots/${shot.src}.png`}
                  alt={shot.alt}
                  loading="lazy"
                  className="h-[360px] w-auto rounded-2xl border border-[#2B2118]/10 shadow-sm sm:h-[420px]"
                />
              </picture>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#2B2118]/10">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-10 text-sm font-medium text-[#8B7F6E] sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="transition-colors hover:text-[#2B2118]">
                {link.label}
              </Link>
            ))}
          </div>
          {cameFromPortfolio && (
            <Link
              to="/"
              className="rounded-lg border border-[#2B2118]/10 px-4 py-2 text-xs font-semibold text-[#2B2118] transition-colors hover:bg-[#2B2118]/5"
            >
              Back to Portfolio
            </Link>
          )}
        </div>
      </footer>
    </div>
  );
};

export default TheravadaChantsPage;
