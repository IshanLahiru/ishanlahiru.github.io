import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeAndLanguageProvider } from './contexts/themeAndLanguage/themeAndLanguageContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeAndLanguageProvider>
      <App />
    </ThemeAndLanguageProvider>
  </StrictMode>
);
