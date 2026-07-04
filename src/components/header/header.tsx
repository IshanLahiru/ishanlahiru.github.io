import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeAndLanguage } from '../../contexts/themeAndLanguage/themeAndLanguageContext';
import ToolTipWrapper from '../tool-tip-wrapper/toolTipWrapper';

const NavigationBar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeAndLanguage();

  return (
    <header className="mt-4 flex items-center justify-between border-b border-dm-aluminum py-4 dark:border-dm-dark">
      <Link to="/" className="text-lg font-bold tracking-tight">
        <span className="text-dm-dark dark:text-dm-cement">ishan</span>
        <span className="text-dm-accent2 dark:text-dm-accent">lahiru</span>
      </Link>
      <nav className="flex items-center gap-5">
        <Link
          to="/about"
          className="text-sm uppercase tracking-widest text-dm-ash transition-colors hover:text-dm-accent2 dark:text-dm-cement dark:hover:text-dm-accent">
          About
        </Link>
        <ToolTipWrapper tooltipText={isDarkMode ? 'Toggle Light' : 'Toggle Dark'} direction="bottom">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Toggle light mode' : 'Toggle dark mode'}
            className="text-dm-ash transition-colors hover:text-dm-accent2 dark:text-dm-cement dark:hover:text-dm-accent">
            {isDarkMode ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
          </button>
        </ToolTipWrapper>
      </nav>
    </header>
  );
};

export default NavigationBar;
