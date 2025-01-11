import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeAndLanguageContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  language: string;
  setLanguage: (lang: string) => void;
}

export const ThemeAndLanguageContext = createContext<ThemeAndLanguageContextProps | undefined>(
  undefined
);

export const ThemeAndLanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeAndLanguageContext.Provider value={{ isDarkMode, toggleTheme, language, setLanguage }}>
      <div className={isDarkMode ? 'dark' : ''}>{children}</div>
    </ThemeAndLanguageContext.Provider>
  );
};

export const useThemeAndLanguage = () => {
  const context = useContext(ThemeAndLanguageContext);
  if (!context) {
    throw new Error('useThemeAndLanguage must be used within a ThemeAndLanguageProvider');
  }
  return context;
};
