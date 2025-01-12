import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

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

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
      localStorage.setItem('theme', prefersDarkMode ? 'dark' : 'light');
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const prefersDark = e.matches;
      setIsDarkMode(prefersDark);
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

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
