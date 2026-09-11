import { Moon, Sun } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeAndLanguage } from '../../contexts/themeAndLanguage/themeAndLanguageContext';
import ToolTipWrapper from '../tool-tip-wrapper/toolTipWrapper';

const NavigationBar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeAndLanguage();

  return (
    <header className="mt-4 border-b-4 border-np-ink pb-3 dark:border-np-ink-night">
      <div className="flex items-center justify-between gap-4">
        <Link to="/" className="font-serif text-2xl font-bold tracking-tight text-np-ink dark:text-np-ink-night sm:text-3xl">
          Ishan Lahiru
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/about"
            className="min-h-[44px] content-center text-xs uppercase tracking-widest text-np-600 transition-colors hover:text-np-accent dark:text-np-400-night dark:hover:text-np-accent-night sm:text-sm">
            About
          </Link>
          <ToolTipWrapper tooltipText={isDarkMode ? 'Toggle Light' : 'Toggle Dark'} direction="bottom">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Toggle light mode' : 'Toggle dark mode'}
              className="flex h-11 w-11 items-center justify-center border border-np-ink text-np-ink transition-colors hover:bg-np-ink hover:text-np-paper dark:border-np-ink-night dark:text-np-ink-night dark:hover:bg-np-ink-night dark:hover:text-np-paper-night">
              {isDarkMode ? <Moon className="h-4 w-4" strokeWidth={1.5} /> : <Sun className="h-4 w-4" strokeWidth={1.5} />}
            </button>
          </ToolTipWrapper>
        </nav>
      </div>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-np-500 dark:text-np-500-night">
        Vol. I &middot; Colombo Edition &middot; {new Date().getFullYear()}
      </p>
    </header>
  );
};

export default NavigationBar;
