import React from 'react';
import LegalPageLayout, { H2, P, UL } from '../../../components/legal-page-layout/legalPageLayout';

const TheravadaChantsPrivacyPolicyPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="Theravāda Chants Privacy Policy"
      effectiveDate="2026-08-30"
      backTo="/projects/theravada-chants"
      backLabel="Back to Theravāda Chants"
    >
      <P>
        This privacy policy applies to the Theravāda Chants app for mobile devices, together with
        any related services operated by Ishan Lahiru Sampath Kekulandala Vithanage (collectively,
        the "Application"). Ishan Lahiru Sampath Kekulandala Vithanage is hereby referred to as the
        "Service Provider".
      </P>
      <P>
        Theravāda Chants does not require an account, does not show advertising, does not include
        chat or any other user-generated content, and does not use analytics or crash-reporting
        tools. This policy describes the small amount of information the Application does process.
      </P>

      <H2>Information the Application Does Not Collect</H2>
      <P>The Application does not ask for or collect:</P>
      <UL
        items={[
          'Your name, email address, or any sign-up information — regular use of the Application never requires creating an account',
          'Your precise or approximate location',
          'Contacts, photos, or other device data unrelated to the Application',
          "An advertising identifier, and it doesn't show ads",
          'Analytics, usage tracking, or crash/diagnostic reports of any kind'
        ]}
      />

      <H2>Information Stored Only on Your Device</H2>
      <P>
        Your reading list, its order, your appearance preference (Light/Dark/Auto), and whether
        you've completed onboarding are all saved locally on your device only, and are never
        transmitted to the Service Provider or any third party. Uninstalling the Application removes
        this data completely.
      </P>

      <H2>Application Content</H2>
      <P>
        Chant texts, precept-level reading suggestions, cover images, and the Pali pronunciation
        guide are fetched from the Service Provider's Cloud Firestore database and Cloud Storage
        bucket (both part of Google's Firebase platform) and cached on your device for offline
        reading. This is one-directional, public content — reading it does not transmit any
        information about you.
      </P>

      <H2>Purchases ("Support the Developer")</H2>
      <P>
        The Application offers optional, non-required purchases — a one-time "Lifetime" purchase and
        an auto-renewing "Yearly" subscription — as a way to support its development. These do not
        unlock or gate any chant, feature, or content: every chant, the pronunciation guide, and the
        full reading list are available to every user regardless of purchase.
      </P>
      <P>
        Purchases are processed by Apple's App Store or Google Play and managed on the Service
        Provider's behalf by RevenueCat. RevenueCat receives an anonymous, app-generated identifier
        and your purchase/subscription history from the store; the Application does not collect or
        send your name, email address, or payment details to RevenueCat or to the Service Provider
        directly — those stay with Apple or Google.
      </P>

      <H2>Administrative Access</H2>
      <P>
        A separate, password-protected area of the Application lets the Service Provider add and
        edit chant content. It is authenticated with Firebase Authentication and is not accessible
        to, or intended for, regular users of the Application.
      </P>

      <H2>Third-Party Services</H2>
      <P>
        The Application integrates with the following third-party services in order to function,
        each governed by its own privacy policy:
      </P>
      <UL
        items={[
          <>
            <a
              href="https://firebase.google.com/support/privacy"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Firebase
            </a>{' '}
            (Google) — Cloud Firestore and Cloud Storage for app content, Firebase Authentication
            for the admin-only area described above
          </>,
          <>
            <a
              href="https://www.revenuecat.com/privacy"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              RevenueCat
            </a>{' '}
            — subscription and purchase management, see "Purchases" above
          </>,
          <>
            Apple App Store / Google Play Billing — payment processing for the optional purchases
          </>,
          <>
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Google Fonts
            </a>{' '}
            — the Application may download typeface files from Google's font servers the first time
            they're needed, which exposes your device's IP address to Google in the same way loading
            any web font does
          </>
        ]}
      />

      <H2>International Data Transfers</H2>
      <P>
        The third-party services above may process data (such as an anonymous purchase identifier)
        in countries outside your country of residence, including outside the European Economic Area
        (EEA), under those providers' own safeguards.
      </P>

      <H2>Data Retention and Deletion</H2>
      <P>
        Because the Application doesn't collect personal data of its own, there is nothing on the
        Service Provider's side to retain or delete. Locally stored preferences and reading-list
        data are removed the moment you uninstall the Application. Your purchase and subscription
        history is retained by Apple, Google, and RevenueCat according to their own policies; to
        review or request deletion of that record, contact Apple or Google directly, or reach
        RevenueCat at the link above.
      </P>

      <H2>Children</H2>
      <P>
        The Application is a general-audience devotional reading app and does not knowingly collect
        personal information from anyone, including children. If you are a parent or guardian with a
        concern, contact the Service Provider at ishanlahiru2002@gmail.com.
      </P>

      <H2>Security</H2>
      <P>
        The Service Provider uses reasonable technical and organizational safeguards — including
        Firebase's own access controls and the admin area's authentication requirement — to protect
        the Application's content and the small amount of data described above.
      </P>

      <H2>Changes</H2>
      <P>
        The Service Provider may update this Privacy Policy from time to time. Material changes will
        be posted here with an updated effective date.
      </P>

      <H2>Contact Us</H2>
      <P>
        If you have any questions regarding privacy while using the Application, please contact the
        Service Provider via email at ishanlahiru2002@gmail.com.
      </P>
    </LegalPageLayout>
  );
};

export default TheravadaChantsPrivacyPolicyPage;
