import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pageNotFound';
import HomePage from './home/homePage';
import DeckDrillPage from './projects/deckdrillPage';
import DeckDrillPrivacyPolicyPage from './projects/deckdrillPrivacyPolicyPage';
import DeckDrillTermsPage from './projects/deckdrillTermsPage';

interface RouterProps {
  children?: ReactNode;
}

const Router: React.FC<RouterProps> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/deckdrill" element={<DeckDrillPage />} />
        <Route path="/projects/deckdrill/privacy-policy" element={<DeckDrillPrivacyPolicyPage />} />
        <Route path="/projects/deckdrill/terms" element={<DeckDrillTermsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
