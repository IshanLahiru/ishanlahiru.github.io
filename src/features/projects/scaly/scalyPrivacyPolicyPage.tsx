import React from 'react';
import LegalPageLayout, {
  H2,
  P,
  UL,
  inlineLinkClass
} from '@shared/layouts/legal-page/legalPageLayout';

const SUPPORT_EMAIL = 'support.ishanvithanage@gmail.com';

const ScalyPrivacyPolicyPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="Scaly Privacy Policy"
      effectiveDate="2026-09-30"
      backTo="/projects/scaly"
      backLabel="Back to Scaly">
      <P>
        This privacy policy applies to the Scaly app for mobile devices (the "Application"),
        operated by Kekulandala Vithanage Ishan Lahiru Sampath (the "Service Provider"). It explains
        what information the Application handles, where it goes, and the choices you have.
      </P>

      <H2>The short version</H2>
      <UL
        items={[
          'Scaly has no accounts, no sign-in, and no servers of its own. The Service Provider does not receive, store, or sell any personal information about you.',
          'Your player name, age answer, skins, settings, and stats are saved only on your device.',
          'The Application shows ads from Google AdMob. Google may collect device information to serve and measure those ads, as described below.',
          'Players under 13 get only child-directed, non-personalized ads with general-audience content.'
        ]}
      />

      <H2>Information stored on your device</H2>
      <P>
        The Application saves the following on your device only, using the operating system's local
        app storage. None of it is sent to the Service Provider or to anyone else:
      </P>
      <UL
        items={[
          'The player name you choose (shown only to you, over your own snake)',
          'Your birth year, from the question asked the first time you open the Application',
          'Your selected skin and your sound and music settings',
          'Your match statistics: matches played, wins, eliminations, and best placement'
        ]}
      />
      <P>
        Matches are played against computer-controlled opponents on your device. There are no chat
        features, friend lists, or other players you can contact, and no user-generated content is
        shared.
      </P>

      <H2>The age question</H2>
      <P>
        On first launch, the Application asks for your birth year. It is used for one purpose: to
        decide how ads are served to you. The birth year itself stays on your device. Only the
        resulting age category is passed to Google with each ad request:
      </P>
      <UL
        items={[
          'Under 13: ad requests are tagged for child-directed treatment, so Google serves only non-personalized ads limited to general-audience (G) content.',
          'Under 16: ad requests and the consent form are tagged as coming from a user under the age of digital consent, as required in parts of the European Economic Area.',
          'Under 18: ad requests are tagged for teen treatment and limited to PG content.'
        ]}
      />

      <H2>Advertising (Google AdMob)</H2>
      <P>
        The Application is free and supported by ads: a banner at the bottom of the screen, an
        occasional full-screen ad after a match, and optional rewarded video ads (watched only if
        you choose to, for example to revive in a match). Ads are served by Google Mobile Ads
        (AdMob), provided by Google LLC.
      </P>
      <P>To serve and measure ads, Google may collect:</P>
      <UL
        items={[
          'Device identifiers, such as the advertising ID (Android) or IDFA (iOS, only if you allow tracking)',
          'Your IP address, which can be used to estimate your approximate location',
          'Device and app information, such as the device model, operating system version, and app version',
          'Ad interaction data, such as which ads were shown and whether they were tapped, and diagnostic data about ad performance'
        ]}
      />
      <P>
        Google processes this information under its own policies. See{' '}
        <a
          className={inlineLinkClass}
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer">
          Google's Privacy Policy
        </a>{' '}
        and{' '}
        <a
          className={inlineLinkClass}
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noreferrer">
          How Google uses information from sites or apps that use its services
        </a>
        .
      </P>

      <H2>Consent and your ad choices</H2>
      <UL
        items={[
          'European Economic Area, United Kingdom, and Switzerland: before any ads load, the Application shows Google’s consent form (a certified consent management platform) where required. You can change your choice at any time from Settings → AD CHOICES.',
          'iOS: personalized ads are only possible if you allow tracking when iOS asks. You can change this at any time in the iOS Settings app under Privacy & Security → Tracking.',
          'Android: you can reset or delete your advertising ID, or opt out of personalized ads, in your device’s Google settings under Ads.'
        ]}
      />

      <H2>Children</H2>
      <P>
        Scaly is a game for a general audience, and it is designed to be safe for younger players.
        The Service Provider does not knowingly collect personal information from anyone, including
        children under 13. For players who indicate they are under 13, the Application requests only
        child-directed, non-personalized ads. If you are a parent or guardian and have questions,
        contact the Service Provider at {SUPPORT_EMAIL}.
      </P>

      <H2>Your rights (including GDPR and CCPA/CPRA)</H2>
      <P>
        Because the Service Provider holds no personal information about you, there is nothing on
        its side to access, correct, or delete. Your on-device data is yours: it is removed when you
        uninstall the Application. For information collected by Google for advertising, you can use
        the controls described above, or Google’s own tools. If you are a California resident, the
        Service Provider does not sell your personal information. If you have any privacy request or
        question, contact {SUPPORT_EMAIL} and it will be answered within the time required by
        applicable law.
      </P>

      <H2>Data retention and deletion</H2>
      <P>
        The Service Provider retains no personal data. Data saved on your device stays there until
        you uninstall the Application, which deletes it. Google retains advertising data according
        to its own retention policies.
      </P>

      <H2>International transfers</H2>
      <P>
        Google may process advertising data in countries outside your country of residence,
        including outside the European Economic Area, using legally recognized safeguards such as
        the European Commission’s Standard Contractual Clauses.
      </P>

      <H2>Security</H2>
      <P>
        Because game data never leaves your device, it is protected by your device’s own security.
        Connections made by the advertising SDK use encrypted HTTPS.
      </P>

      <H2>Changes to this policy</H2>
      <P>
        The Service Provider may update this Privacy Policy, for example if the Application adds a
        new feature. Changes will be posted on this page with a new effective date. If a change
        materially affects how your information is handled, the Service Provider will ask for your
        consent where the law requires it.
      </P>

      <H2>Contact</H2>
      <P>
        If you have any questions about privacy in Scaly, contact the Service Provider at{' '}
        {SUPPORT_EMAIL}.
      </P>
    </LegalPageLayout>
  );
};

export default ScalyPrivacyPolicyPage;
