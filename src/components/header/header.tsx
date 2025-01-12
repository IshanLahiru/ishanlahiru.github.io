import { LanguageIcon, MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { useThemeAndLanguage } from '../../contexts/themeAndLanguage/themeAndLanguageContext';
import ToolTipWrapper from '../tool-tip-wrapper/toolTipWrapper';

const NavigationBar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeAndLanguage();

  return (
    <header className="mt-4 bg-gray-200 p-4 text-white dark:bg-neutral-900 rounded-xl">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-950 dark:text-slate-200">ishanlahiru.me</h1>
        <nav>
          <ul className="flex flex-col space-x-4">
            <li>
              
              <a href="#contact" className="flex items-center hover:underline">
                <ToolTipWrapper tooltipText="Change Language" direction="bottom">
                  <LanguageIcon className="mr-2 h-5 w-5 text-gray-600 dark:text-gray-300" />
                </ToolTipWrapper>
                {isDarkMode ? (
                  <ToolTipWrapper tooltipText="Toggle Light" direction="bottom">
                    <MoonIcon
                      className="mr-2 h-5 w-5 text-gray-600 dark:text-gray-300"
                      onClick={toggleTheme}
                    />
                  </ToolTipWrapper>
                ) : (
                  <ToolTipWrapper tooltipText="Toggle Dark" direction="bottom">
                    <SunIcon
                      className="mr-2 h-5 w-5 text-gray-600 dark:text-gray-300"
                      onClick={toggleTheme}
                    />
                  </ToolTipWrapper>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
