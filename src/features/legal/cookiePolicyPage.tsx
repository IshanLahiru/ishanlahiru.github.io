import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '@core/seo/Seo';
import LegalPageLayout, {
  H2,
  P,
  UL,
  inlineLinkClass
} from '@shared/layouts/legal-page/legalPageLayout';

const CookiePolicyPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      effectiveDate="30 September 2026"
      backTo="/"
      backLabel="Back to Portfolio">
      <Seo
        title="Cookie Policy - Ishan Lahiru"
        description="The cookies and browser storage used on ishanlahiru.github.io, and how to control them."
        path="/cookie-policy"
      />
      <P>
        This policy explains the cookies and similar technologies used on ishanlahiru.github.io (the
        "Site"). Cookies are small files a website stores in your browser. Similar technologies,
        such as local storage, work the same way. For how information is used more broadly, see the{' '}
        <Link to="/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>
        .
      </P>

      <H2>Strictly Necessary</H2>
      <P>
        One item in local storage, <code>theme</code>, remembers whether you use the light or dark
        theme. It stays on your device, is never sent anywhere, and does not need consent.
      </P>

      <H2>Advertising (Google)</H2>
      <P>
        Pages with ads load Google AdSense, which sets cookies from Google domains such as
        doubleclick.net and google.com. Google uses them to:
      </P>
      <UL
        items={[
          'show ads and limit how often you see the same one',
          'measure how ads perform and detect fraud and abuse',
          'show ads based on your interests, only if you consent (or, outside the EEA, UK and Switzerland, unless you opt out)',
          'remember your consent choice'
        ]}
      />
      <P>
        The Site itself sets no other cookies. Google's names and lifetimes for these cookies change
        over time; the current list is in{' '}
        <a href="https://business.safety.google/adscookies/" className={inlineLinkClass}>
          Google's advertising cookies list
        </a>
        , and how Google uses them is in{' '}
        <a href="https://policies.google.com/technologies/ads" className={inlineLinkClass}>
          How Google uses cookies in advertising
        </a>
        .
      </P>
      <P>
        Ads are not loaded on privacy policy, terms and support pages when you open them directly.
      </P>

      <H2>Your Choices</H2>
      <UL
        items={[
          'Visitors from the EEA, UK and Switzerland are asked for consent before advertising cookies are used for personalised ads. Change your choice at any time with "Cookie settings" at the bottom of the home page.',
          <>
            Turn off personalised ads from Google in{' '}
            <a href="https://adssettings.google.com" className={inlineLinkClass}>
              Google's ad settings
            </a>
            .
          </>,
          'Block or delete cookies in your browser settings. The Site works without them; you may still see ads, but they will not be personalised.'
        ]}
      />

      <H2>Changes</H2>
      <P>
        I may update this policy from time to time. Changes are posted on this page with a new
        effective date.
      </P>

      <H2>Contact</H2>
      <P>
        Questions about cookies on the Site:{' '}
        <a href="mailto:ishanlahiru2002@gmail.com" className={inlineLinkClass}>
          ishanlahiru2002@gmail.com
        </a>
      </P>
    </LegalPageLayout>
  );
};

export default CookiePolicyPage;
