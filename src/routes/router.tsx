import React, { lazy, ReactNode, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteLoadingBar from '../components/route-loading-bar/routeLoadingBar';

const PageNotFound = lazy(() => import('./pageNotFound'));
const HomePage = lazy(() => import('./home/homePage'));
const AboutPage = lazy(() => import('./about/aboutPage'));
const DeckDrillPage = lazy(() => import('./projects/deckdrill/deckdrillPage'));
const DeckDrillPrivacyPolicyPage = lazy(() => import('./projects/deckdrill/deckdrillPrivacyPolicyPage'));
const DeckDrillTermsPage = lazy(() => import('./projects/deckdrill/deckdrillTermsPage'));
const DeckDrillSupportPage = lazy(() => import('./projects/deckdrill/deckdrillSupportPage'));
const DriftAndDirectPage = lazy(() => import('./projects/drift-and-direct/driftAndDirectPage'));
const DriftAndDirectPrivacyPolicyPage = lazy(
  () => import('./projects/drift-and-direct/driftAndDirectPrivacyPolicyPage')
);
const DriftAndDirectTermsPage = lazy(() => import('./projects/drift-and-direct/driftAndDirectTermsPage'));
const DriftAndDirectSupportPage = lazy(
  () => import('./projects/drift-and-direct/driftAndDirectSupportPage')
);
const OmiClashPage = lazy(() => import('./projects/omi-clash/omiClashPage'));
const OmiClashPrivacyPolicyPage = lazy(() => import('./projects/omi-clash/omiClashPrivacyPolicyPage'));
const OmiClashTermsPage = lazy(() => import('./projects/omi-clash/omiClashTermsPage'));
const OmiClashSupportPage = lazy(() => import('./projects/omi-clash/omiClashSupportPage'));
const OmiClashCommunityPage = lazy(() => import('./projects/omi-clash/omiClashCommunityPage'));
const TheravadaChantsPage = lazy(() => import('./projects/theravada-chants/theravadaChantsPage'));
const TheravadaChantsPrivacyPolicyPage = lazy(
  () => import('./projects/theravada-chants/theravadaChantsPrivacyPolicyPage')
);
const TheravadaChantsTermsPage = lazy(
  () => import('./projects/theravada-chants/theravadaChantsTermsPage')
);
const TheravadaChantsSupportPage = lazy(
  () => import('./projects/theravada-chants/theravadaChantsSupportPage')
);
const DammapadayaPage = lazy(() => import('./projects/dammapadaya/dammapadayaPage'));
const DammapadayaPrivacyPolicyPage = lazy(
  () => import('./projects/dammapadaya/dammapadayaPrivacyPolicyPage')
);
const DammapadayaTermsPage = lazy(() => import('./projects/dammapadaya/dammapadayaTermsPage'));
const DammapadayaSupportPage = lazy(() => import('./projects/dammapadaya/dammapadayaSupportPage'));
const UnderstandingReactDndPage = lazy(() => import('./blog/understandingReactDndPage'));
const SvgMapManipulationPage = lazy(() => import('./blog/svgMapManipulationPage'));
const MonorepoManagementPage = lazy(() => import('./blog/monorepoManagementPage'));

interface RouterProps {
  children?: ReactNode;
}

const Router: React.FC<RouterProps> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Suspense fallback={<RouteLoadingBar />}>
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
          <Route path="/projects/dammapadaya" element={<DammapadayaPage />} />
          <Route
            path="/projects/dammapadaya/privacy-policy"
            element={<DammapadayaPrivacyPolicyPage />}
          />
          <Route path="/projects/dammapadaya/terms" element={<DammapadayaTermsPage />} />
          <Route path="/projects/dammapadaya/support" element={<DammapadayaSupportPage />} />
          <Route path="/blog/understanding-react-dnd" element={<UnderstandingReactDndPage />} />
          <Route path="/blog/svg-map-manipulation-with-react" element={<SvgMapManipulationPage />} />
          <Route path="/blog/monorepo-management-with-turbo" element={<MonorepoManagementPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
