import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fonts are served from this site, not Google Fonts, so visitors' IP addresses aren't sent
// to Google before any consent (GDPR).
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import '@fontsource/lora/500.css';
import '@fontsource/lora/600.css';
import '@fontsource/lora/500-italic.css';
import '@fontsource/lora/600-italic.css';
import '@fontsource/lora/700-italic.css';
import './index.css';
import App from './App.tsx';
import { ThemeAndLanguageProvider } from '@core/theme/themeAndLanguageContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeAndLanguageProvider>
      <App />
    </ThemeAndLanguageProvider>
  </StrictMode>
);
