import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '@core/seo/Seo';
import LegalPageLayout, {
  H2,
  P,
  UL,
  inlineLinkClass
} from '@shared/layouts/legal-page/legalPageLayout';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="Website Privacy Policy"
      effectiveDate="30 September 2026"
      backTo="/"
      backLabel="Back to Portfolio">
      <Seo
        title="Privacy Policy - Ishan Lahiru"
        description="How ishanlahiru.github.io handles your information, including Google AdSense advertising."
        path="/privacy-policy"
      />
      <P>
        This privacy policy applies to the website at ishanlahiru.github.io (the "Site"), operated
        by Kekulandala Vithanage Ishan Lahiru Sampath ("I", "me"). Each of my apps has its own
        privacy policy, linked from its page on the Site; this one covers only the Site itself.
      </P>
      <P>
        The Site has no accounts, forms, comments or analytics. The only third party that collects
        information through it is Google, to show ads.
      </P>

      <H2>Advertising (Google AdSense)</H2>
      <P>
        The Site shows ads from Google AdSense. Google and its partners use cookies and similar
        technologies to serve ads, limit how often you see them, measure how they perform and
        prevent fraud. If you allow it, they also use them to show ads based on your visits to this
        and other websites. When an ad loads, Google receives your IP address, browser details and
        the page you are on.
      </P>
      <P>
        Visitors from the European Economic Area, the United Kingdom and Switzerland are asked for
        consent through Google's consent message before ad cookies are used for personalised ads.
        You can change your choice at any time with "Cookie settings" at the bottom of the home
        page. Ads are not loaded on privacy policy, terms and support pages when you open them
        directly.
      </P>
      <P>You can also:</P>
      <UL
        items={[
          <>
            turn off personalised ads from Google in{' '}
            <a href="https://adssettings.google.com" className={inlineLinkClass}>
              Google's ad settings
            </a>
            ,
          </>,
          <>
            opt out of personalised ads from other participating companies at{' '}
            <a href="https://www.aboutads.info/choices" className={inlineLinkClass}>
              aboutads.info
            </a>{' '}
            or{' '}
            <a href="https://www.youronlinechoices.eu" className={inlineLinkClass}>
              youronlinechoices.eu
            </a>
            , and
          </>,
          <>
            read how Google uses information from sites that use its services in{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className={inlineLinkClass}>
              Google's policy
            </a>
            .
          </>
        ]}
      />
      <P>
        The cookies involved are listed in the{' '}
        <Link to="/cookie-policy" className={inlineLinkClass}>
          Cookie Policy
        </Link>
        .
      </P>

      <H2>Hosting</H2>
      <P>
        The Site is hosted on GitHub Pages. GitHub may log visitors' IP addresses for security
        purposes, as described in the{' '}
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          className={inlineLinkClass}>
          GitHub Privacy Statement
        </a>
        . I don't have access to these logs.
      </P>

      <H2>Information Stored in Your Browser</H2>
      <P>
        The Site remembers whether you use the light or dark theme in your browser's local storage.
        It never leaves your device.
      </P>

      <H2>Email</H2>
      <P>
        If you email me, I receive your email address and whatever you write, and use them only to
        reply. You can ask me to delete our correspondence at any time.
      </P>

      <H2>Links to Other Sites</H2>
      <P>
        The Site links to other websites, such as the App Store, GitHub, LinkedIn, Instagram and
        Medium. Their own privacy policies apply once you follow a link.
      </P>

      <H2>Children</H2>
      <P>The Site is not directed at children under 13.</P>

      <H2>Your Rights</H2>
      <P>
        Depending on where you live, you may have the right to access, correct or delete your
        personal information, to object to or restrict its use, and to withdraw consent. I hold no
        personal information about visitors other than emails you send me. For information Google
        collects, use the options above or{' '}
        <a href="https://myaccount.google.com/data-and-privacy" className={inlineLinkClass}>
          Google's privacy tools
        </a>
        .
      </P>

      <H2>Changes</H2>
      <P>
        I may update this policy from time to time. Changes are posted on this page with a new
        effective date.
      </P>

      <H2>Contact</H2>
      <P>
        Questions about this policy:{' '}
        <a href="mailto:ishanlahiru2002@gmail.com" className={inlineLinkClass}>
          ishanlahiru2002@gmail.com
        </a>
      </P>
    </LegalPageLayout>
  );
};

export default PrivacyPolicyPage;
