import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pageNotFound';
import HomePage from './home/homePage';
import AboutPage from './about/aboutPage';
import DeckDrillPage from './projects/deckdrill/deckdrillPage';
import DeckDrillPrivacyPolicyPage from './projects/deckdrill/deckdrillPrivacyPolicyPage';
import DeckDrillTermsPage from './projects/deckdrill/deckdrillTermsPage';
import DeckDrillSupportPage from './projects/deckdrill/deckdrillSupportPage';
import DriftAndDirectPage from './projects/drift-and-direct/driftAndDirectPage';
import DriftAndDirectPrivacyPolicyPage from './projects/drift-and-direct/driftAndDirectPrivacyPolicyPage';
import DriftAndDirectTermsPage from './projects/drift-and-direct/driftAndDirectTermsPage';
import DriftAndDirectSupportPage from './projects/drift-and-direct/driftAndDirectSupportPage';
import OmiClashPage from './projects/omi-clash/omiClashPage';
import OmiClashPrivacyPolicyPage from './projects/omi-clash/omiClashPrivacyPolicyPage';
import OmiClashTermsPage from './projects/omi-clash/omiClashTermsPage';
import OmiClashSupportPage from './projects/omi-clash/omiClashSupportPage';
import OmiClashCommunityPage from './projects/omi-clash/omiClashCommunityPage';
import TheravadaChantsPage from './projects/theravada-chants/theravadaChantsPage';
import TheravadaChantsPrivacyPolicyPage from './projects/theravada-chants/theravadaChantsPrivacyPolicyPage';
import TheravadaChantsTermsPage from './projects/theravada-chants/theravadaChantsTermsPage';
import TheravadaChantsSupportPage from './projects/theravada-chants/theravadaChantsSupportPage';

interface RouterProps {
  children?: ReactNode;
}

const Router: React.FC<RouterProps> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/deckdrill" element={<DeckDrillPage />} />
        <Route path="/projects/deckdrill/privacy-policy" element={<DeckDrillPrivacyPolicyPage />} />
        <Route path="/projects/deckdrill/terms" element={<DeckDrillTermsPage />} />
        <Route path="/projects/deckdrill/support" element={<DeckDrillSupportPage />} />
        <Route path="/projects/drift-and-direct" element={<DriftAndDirectPage />} />
        <Route
          path="/projects/drift-and-direct/privacy-policy"
          element={<DriftAndDirectPrivacyPolicyPage />}
        />
        <Route path="/projects/drift-and-direct/terms" element={<DriftAndDirectTermsPage />} />
        <Route path="/projects/drift-and-direct/support" element={<DriftAndDirectSupportPage />} />
        <Route path="/projects/omi-clash" element={<OmiClashPage />} />
        <Route path="/projects/omi-clash/privacy-policy" element={<OmiClashPrivacyPolicyPage />} />
        <Route path="/projects/omi-clash/terms" element={<OmiClashTermsPage />} />
        <Route path="/projects/omi-clash/support" element={<OmiClashSupportPage />} />
        <Route path="/projects/omi-clash/community" element={<OmiClashCommunityPage />} />
        <Route path="/projects/theravada-chants" element={<TheravadaChantsPage />} />
        <Route
          path="/projects/theravada-chants/privacy-policy"
          element={<TheravadaChantsPrivacyPolicyPage />}
        />
        <Route path="/projects/theravada-chants/terms" element={<TheravadaChantsTermsPage />} />
        <Route path="/projects/theravada-chants/support" element={<TheravadaChantsSupportPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
