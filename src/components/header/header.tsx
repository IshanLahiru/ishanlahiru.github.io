import { Moon, Sun } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeAndLanguage } from '../../contexts/themeAndLanguage/themeAndLanguageContext';
import ToolTipWrapper from '../tool-tip-wrapper/toolTipWrapper';

const NavigationBar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeAndLanguage();

  return (
    <header className="sticky top-0 z-40 -mx-4 border-b border-np-muted/60 bg-np-paper/80 px-4 backdrop-blur-xl dark:border-np-muted-night/60 dark:bg-np-paper-night/80 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="font-serif text-lg font-extrabold uppercase tracking-tight text-np-ink dark:text-np-ink-night">
          Ishan Lahiru
        </Link>
        <nav className="flex items-center gap-3 sm:gap-4">
          <div className="hidden items-center gap-5 lg:flex">
            {[
              { to: '/#projects', label: 'Projects' },
              { to: '/#experience', label: 'Experience' },
              { to: '/#tools', label: 'Tools' },
              { to: '/#thoughts', label: 'Thoughts' }
            ].map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="text-sm font-medium text-np-600 transition-colors hover:text-np-ink dark:text-np-400-night dark:hover:text-np-ink-night">
                {link.label}
              </a>
            ))}
          </div>
          <Link
            to="/about"
            className="hidden min-h-[44px] content-center text-sm font-medium text-np-600 transition-colors hover:text-np-ink dark:text-np-400-night dark:hover:text-np-ink-night sm:block">
            About
          </Link>
          <a
            href="/cv.pdf"
            download
            className="min-h-[44px] content-center rounded-full bg-np-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-np-accent/90 dark:bg-np-accent-night dark:hover:bg-np-accent-night/90">
            Resume
          </a>
          <ToolTipWrapper tooltipText={isDarkMode ? 'Toggle Light' : 'Toggle Dark'} direction="bottom">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Toggle light mode' : 'Toggle dark mode'}
              className="flex h-9 w-9 items-center justify-center rounded-full text-np-ink transition-colors hover:bg-np-100 dark:text-np-ink-night dark:hover:bg-np-700/40">
              {isDarkMode ? <Moon className="h-4 w-4" strokeWidth={1.5} /> : <Sun className="h-4 w-4" strokeWidth={1.5} />}
            </button>
          </ToolTipWrapper>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
