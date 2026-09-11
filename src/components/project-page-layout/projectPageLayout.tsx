import { faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import BaseContainer from '../base-container/baseContainer';
import Footer from '../footer/footer';
import NavigationBar from '../header/header';

interface Screenshot {
  src: string;
  alt: string;
  webp?: string;
}

interface FooterLink {
  to: string;
  label: string;
}

interface ProjectPageLayoutProps {
  title: string;
  icon: string;
  status?: string;
  description: string;
  techStack: string[];
  screenshots?: Screenshot[];
  screenshotPlaceholderCount?: number;
  liveDemo?: boolean;
  footerLinks: FooterLink[];
  children?: React.ReactNode;
}

const ProjectPageLayout: React.FC<ProjectPageLayoutProps> = ({
  title,
  icon,
  status,
  description,
  techStack,
  screenshots,
  screenshotPlaceholderCount,
  liveDemo,
  footerLinks,
  children
}) => {
  return (
    <BaseContainer>
      <NavigationBar />
      <main className="py-8 text-start">
        <Link
          to="/"
          className="text-sm text-np-600 underline-offset-4 hover:text-np-accent hover:underline dark:text-np-400-night dark:hover:text-np-accent-night">
          &larr; Back to Home
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <picture>
            <source srcSet={icon.replace(/\.png$/, '.webp')} type="image/webp" />
            <img
              src={icon}
              alt={`${title} logo`}
              className="h-16 w-16 border border-np-ink object-cover transition-all duration-300 dark:border-np-ink-night"
            />
          </picture>
          <div>
            <h1 className="font-serif text-3xl font-bold text-np-ink dark:text-np-ink-night sm:text-4xl">
              {title}
            </h1>
            {status && (
              <span className="mt-1 inline-block border border-np-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-np-accent dark:border-np-accent-night dark:text-np-accent-night">
                {status}
              </span>
            )}
          </div>
        </div>

        <p className="my-6 max-w-2xl font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
          {description}
        </p>

        <button
          type="button"
          disabled
          title="Coming soon to the App Store"
          className="mb-4 flex min-h-[44px] w-fit cursor-not-allowed items-center gap-3 border border-np-ink bg-np-ink px-4 py-2 text-np-paper opacity-70 dark:border-np-ink-night dark:bg-np-ink-night dark:text-np-paper-night">
          <FontAwesomeIcon icon={faApple} className="h-6 w-6" />
          <span className="text-left leading-tight">
            <span className="block font-mono text-[10px] uppercase tracking-widest">Coming Soon on the</span>
            <span className="block font-sans text-lg font-semibold">App Store</span>
          </span>
        </button>

        <section className="mt-10 border-t border-np-muted pt-6 dark:border-np-muted-night">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-np-500 dark:text-np-500-night">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="border border-np-ink px-3 py-1 font-mono text-xs uppercase tracking-wide text-np-ink dark:border-np-ink-night dark:text-np-ink-night">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10 border-t border-np-muted pt-6 dark:border-np-muted-night">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-np-500 dark:text-np-500-night">
            Screenshots
          </h2>
          {screenshots && screenshots.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {screenshots.map((shot) => (
                <div key={shot.src} className="overflow-hidden border border-np-ink dark:border-np-ink-night">
                  <picture>
                    {shot.webp && <source srcSet={shot.webp} type="image/webp" />}
                    <img src={shot.src} alt={shot.alt} className="h-full w-full object-cover" loading="lazy" />
                  </picture>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: screenshotPlaceholderCount ?? 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-40 items-center justify-center border border-dashed border-np-ink bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-[length:16px_16px] font-mono text-xs uppercase tracking-widest text-np-500 dark:border-np-ink-night dark:text-np-500-night">
                  Future Screenshot
                </div>
              ))}
            </div>
          )}
        </section>

        {liveDemo && (
          <section className="mt-10 border-t border-np-muted pt-6 dark:border-np-muted-night">
            <div className="border border-np-ink p-6 text-center dark:border-np-ink-night">
              <p className="font-sans text-sm font-semibold text-np-ink dark:text-np-ink-night">
                Coming Soon: Live Demo
              </p>
              <p className="mt-1 font-mono text-xs text-np-500 dark:text-np-500-night">
                A live demo will be linked here once available.
              </p>
            </div>
          </section>
        )}

        {children}

        <div className="mb-6 mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-np-muted pt-6 font-mono text-xs uppercase tracking-widest dark:border-np-muted-night">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-np-600 hover:text-np-accent hover:underline dark:text-np-400-night dark:hover:text-np-accent-night">
              {link.label}
            </Link>
          ))}
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

export default ProjectPageLayout;
