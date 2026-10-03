import React, { lazy, ReactNode, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { pageMounted } from '@core/boot/boot';
import RouteLoadingBar from '@core/design-system/routeLoadingBar';

const PageNotFound = lazy(() => import('@features/not-found/pageNotFound'));
const HomePage = lazy(() => import('@features/home/homePage'));
const AboutPage = lazy(() => import('@features/about/aboutPage'));
const PrivacyPolicyPage = lazy(() => import('@features/legal/privacyPolicyPage'));
const CookiePolicyPage = lazy(() => import('@features/legal/cookiePolicyPage'));
const DeckDrillPage = lazy(() => import('@features/projects/deckdrill/deckdrillPage'));
const DeckDrillPrivacyPolicyPage = lazy(
  () => import('@features/projects/deckdrill/deckdrillPrivacyPolicyPage')
);
const DeckDrillTermsPage = lazy(() => import('@features/projects/deckdrill/deckdrillTermsPage'));
const DeckDrillSupportPage = lazy(
  () => import('@features/projects/deckdrill/deckdrillSupportPage')
);
const ScalyPage = lazy(() => import('@features/projects/scaly/scalyPage'));
const ScalyPrivacyPolicyPage = lazy(
  () => import('@features/projects/scaly/scalyPrivacyPolicyPage')
);
const ScalyTermsPage = lazy(() => import('@features/projects/scaly/scalyTermsPage'));
const ScalySupportPage = lazy(() => import('@features/projects/scaly/scalySupportPage'));
const DriftAndDirectPage = lazy(
  () => import('@features/projects/drift-and-direct/driftAndDirectPage')
);
const DriftAndDirectPrivacyPolicyPage = lazy(
  () => import('@features/projects/drift-and-direct/driftAndDirectPrivacyPolicyPage')
);
const DriftAndDirectTermsPage = lazy(
  () => import('@features/projects/drift-and-direct/driftAndDirectTermsPage')
);
const DriftAndDirectSupportPage = lazy(
  () => import('@features/projects/drift-and-direct/driftAndDirectSupportPage')
);
const TypalPage = lazy(() => import('@features/projects/typal/typalPage'));
const TypalPrivacyPolicyPage = lazy(
  () => import('@features/projects/typal/typalPrivacyPolicyPage')
);
const TypalTermsPage = lazy(() => import('@features/projects/typal/typalTermsPage'));
const TypalSupportPage = lazy(() => import('@features/projects/typal/typalSupportPage'));
const OmiClashPage = lazy(() => import('@features/projects/omi-clash/omiClashPage'));
const OmiClashPrivacyPolicyPage = lazy(
  () => import('@features/projects/omi-clash/omiClashPrivacyPolicyPage')
);
const OmiClashTermsPage = lazy(() => import('@features/projects/omi-clash/omiClashTermsPage'));
const OmiClashSupportPage = lazy(() => import('@features/projects/omi-clash/omiClashSupportPage'));
const OmiClashCommunityPage = lazy(
  () => import('@features/projects/omi-clash/omiClashCommunityPage')
);
const TheravadaChantsPage = lazy(
  () => import('@features/projects/theravada-chants/theravadaChantsPage')
);
const TheravadaChantsPrivacyPolicyPage = lazy(
  () => import('@features/projects/theravada-chants/theravadaChantsPrivacyPolicyPage')
);
const TheravadaChantsTermsPage = lazy(
  () => import('@features/projects/theravada-chants/theravadaChantsTermsPage')
);
const TheravadaChantsSupportPage = lazy(
  () => import('@features/projects/theravada-chants/theravadaChantsSupportPage')
);
const DammapadayaPage = lazy(() => import('@features/projects/dammapadaya/dammapadayaPage'));
const DammapadayaPrivacyPolicyPage = lazy(
  () => import('@features/projects/dammapadaya/dammapadayaPrivacyPolicyPage')
);
const DammapadayaTermsPage = lazy(
  () => import('@features/projects/dammapadaya/dammapadayaTermsPage')
);
const DammapadayaSupportPage = lazy(
  () => import('@features/projects/dammapadaya/dammapadayaSupportPage')
);
const UnderstandingReactDndPage = lazy(
  () => import('@features/blog/pages/understandingReactDndPage')
);
const SvgMapManipulationPage = lazy(() => import('@features/blog/pages/svgMapManipulationPage'));
const MonorepoManagementPage = lazy(() => import('@features/blog/pages/monorepoManagementPage'));

interface RouterProps {
  children?: ReactNode;
}

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Rendered beside the routes, inside their Suspense: it mounts when the first page has.
const FirstPageMounted: React.FC = () => {
  useEffect(pageMounted, []);
  return null;
};

const Router: React.FC<RouterProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {children}
      <Suspense fallback={<RouteLoadingBar />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/projects/deckdrill" element={<DeckDrillPage />} />
          <Route
            path="/projects/deckdrill/privacy-policy"
            element={<DeckDrillPrivacyPolicyPage />}
          />
          <Route path="/projects/deckdrill/terms" element={<DeckDrillTermsPage />} />
          <Route path="/projects/deckdrill/support" element={<DeckDrillSupportPage />} />
          <Route path="/projects/scaly" element={<ScalyPage />} />
          <Route path="/projects/scaly/privacy-policy" element={<ScalyPrivacyPolicyPage />} />
          <Route path="/projects/scaly/terms" element={<ScalyTermsPage />} />
          <Route path="/projects/scaly/support" element={<ScalySupportPage />} />
          <Route path="/projects/drift-and-direct" element={<DriftAndDirectPage />} />
          <Route
            path="/projects/drift-and-direct/privacy-policy"
            element={<DriftAndDirectPrivacyPolicyPage />}
          />
          <Route path="/projects/drift-and-direct/terms" element={<DriftAndDirectTermsPage />} />
          <Route
            path="/projects/drift-and-direct/support"
            element={<DriftAndDirectSupportPage />}
          />
          <Route path="/projects/typal" element={<TypalPage />} />
          <Route path="/projects/typal/privacy-policy" element={<TypalPrivacyPolicyPage />} />
          <Route path="/projects/typal/terms" element={<TypalTermsPage />} />
          <Route path="/projects/typal/support" element={<TypalSupportPage />} />
          <Route path="/projects/omi-clash" element={<OmiClashPage />} />
          <Route
            path="/projects/omi-clash/privacy-policy"
            element={<OmiClashPrivacyPolicyPage />}
          />
          <Route path="/projects/omi-clash/terms" element={<OmiClashTermsPage />} />
          <Route path="/projects/omi-clash/support" element={<OmiClashSupportPage />} />
          <Route path="/projects/omi-clash/community" element={<OmiClashCommunityPage />} />
          <Route path="/projects/theravada-chants" element={<TheravadaChantsPage />} />
          <Route
            path="/projects/theravada-chants/privacy-policy"
            element={<TheravadaChantsPrivacyPolicyPage />}
          />
          <Route path="/projects/theravada-chants/terms" element={<TheravadaChantsTermsPage />} />
          <Route
            path="/projects/theravada-chants/support"
            element={<TheravadaChantsSupportPage />}
          />
          <Route path="/projects/dammapadaya" element={<DammapadayaPage />} />
          <Route
            path="/projects/dammapadaya/privacy-policy"
            element={<DammapadayaPrivacyPolicyPage />}
          />
          <Route path="/projects/dammapadaya/terms" element={<DammapadayaTermsPage />} />
          <Route path="/projects/dammapadaya/support" element={<DammapadayaSupportPage />} />
          <Route path="/blog/understanding-react-dnd" element={<UnderstandingReactDndPage />} />
          <Route
            path="/blog/svg-map-manipulation-with-react"
            element={<SvgMapManipulationPage />}
          />
          <Route path="/blog/monorepo-management-with-turbo" element={<MonorepoManagementPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <FirstPageMounted />
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
