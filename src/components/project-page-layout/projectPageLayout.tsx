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
  appStoreUrl?: string;
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
  appStoreUrl,
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
              className="h-16 w-16 rounded-[22%] object-cover shadow-sm transition-all duration-300"
            />
          </picture>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-np-ink dark:text-np-ink-night sm:text-4xl">
              {title}
            </h1>
            {status && (
              <span className="mt-1 inline-block rounded-full bg-np-accent/10 px-2.5 py-1 text-xs font-medium text-np-accent dark:bg-np-accent-night/10 dark:text-np-accent-night">
                {status}
              </span>
            )}
          </div>
        </div>

        <p className="my-6 max-w-2xl text-sm leading-relaxed text-np-600 dark:text-np-400-night">
          {description}
        </p>

        {appStoreUrl ? (
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 flex min-h-[44px] w-fit items-center gap-3 rounded-2xl bg-np-ink px-4 py-2 text-np-paper transition-colors hover:bg-np-700 dark:bg-np-ink-night dark:text-np-paper-night dark:hover:bg-np-200">
            <FontAwesomeIcon icon={faApple} className="h-6 w-6" />
            <span className="text-left leading-tight">
              <span className="block text-[10px]">View on the</span>
              <span className="block text-lg font-semibold">App Store</span>
            </span>
          </a>
        ) : (
          <button
            type="button"
            disabled
            title="Coming soon to the App Store"
            className="mb-4 flex min-h-[44px] w-fit cursor-not-allowed items-center gap-3 rounded-2xl bg-np-ink px-4 py-2 text-np-paper opacity-70 dark:bg-np-ink-night dark:text-np-paper-night">
            <FontAwesomeIcon icon={faApple} className="h-6 w-6" />
            <span className="text-left leading-tight">
              <span className="block text-[10px]">Coming Soon on the</span>
              <span className="block text-lg font-semibold">App Store</span>
            </span>
          </button>
        )}

        <section className="mt-10 border-t border-np-muted pt-6 dark:border-np-muted-night">
          <h2 className="mb-3 text-xs font-medium text-np-500 dark:text-np-500-night">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-np-100 px-3 py-1 text-xs text-np-600 dark:bg-np-700/40 dark:text-np-400-night">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10 border-t border-np-muted pt-6 dark:border-np-muted-night">
          <h2 className="mb-3 text-xs font-medium text-np-500 dark:text-np-500-night">
            Screenshots
          </h2>
          {screenshots && screenshots.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {screenshots.map((shot) => (
                <div key={shot.src} className="overflow-hidden rounded-2xl shadow-sm">
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
                  className="flex h-40 items-center justify-center rounded-2xl bg-np-100 text-xs font-medium text-np-500 dark:bg-np-700/30 dark:text-np-500-night">
                  Future Screenshot
                </div>
              ))}
            </div>
          )}
        </section>

        {liveDemo && (
          <section className="mt-10 border-t border-np-muted pt-6 dark:border-np-muted-night">
            <div className="rounded-2xl border border-np-muted bg-np-100/60 p-6 text-center dark:border-np-muted-night dark:bg-np-700/20">
              <p className="text-sm font-semibold text-np-ink dark:text-np-ink-night">
                Coming Soon: Live Demo
              </p>
              <p className="mt-1 text-xs text-np-500 dark:text-np-500-night">
                A live demo will be linked here once available.
              </p>
            </div>
          </section>
        )}

        {children}

        <div className="mb-6 mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-np-muted pt-6 text-xs font-medium dark:border-np-muted-night">
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
          className="mb-8 inline-block min-h-[44px] content-center rounded-full bg-np-ink px-5 py-2.5 text-sm font-medium text-np-paper transition-colors hover:bg-np-700 dark:bg-np-ink-night dark:text-np-paper-night dark:hover:bg-np-200">
          Back to Portfolio
        </Link>
      </main>
      <Footer />
    </BaseContainer>
  );
};

export default ProjectPageLayout;
