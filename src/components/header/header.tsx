import { LanguageIcon, MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { useThemeAndLanguage } from "../../contexts/themeAndLanguage/themeAndLanguageContext";
import ToolTipWrapper from '../tool-tip-wrapper/toolTipWrapper';

const NavigationBar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeAndLanguage();

  return (
    <header className="dark:bg-[#08090d] bg-slate-600 text-white p-4 sm:mt-4 mt-0 sm:rounded-xl rounded-none">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ishanlahiru.me</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#contact" className="flex items-center hover:underline">
              <ToolTipWrapper tooltipText="Change Language" direction="bottom"> 
                <LanguageIcon className="h-5 w-5 text-gray-300 dark:text-gray-600 mr-2" />
              </ToolTipWrapper>
                {isDarkMode ?
                <ToolTipWrapper tooltipText="Toggle Light" direction="bottom"> 
                  <MoonIcon className="h-5 w-5 text-gray-300 dark:text-gray-100 mr-2" onClick={toggleTheme} /> 
                </ToolTipWrapper>
                :
                <ToolTipWrapper tooltipText="Toggle Dark" direction="bottom">  
                  <SunIcon className="h-5 w-5 text-gray-300 dark:text-gray-100 mr-2" onClick={toggleTheme} />
                </ToolTipWrapper>
                }
                
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
