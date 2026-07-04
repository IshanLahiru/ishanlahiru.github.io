import React from 'react';
import LegalPageLayout, { H2, P, UL } from '../../../components/legal-page-layout/legalPageLayout';

const DriftAndDirectPrivacyPolicyPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="Drift & Direct Privacy Policy"
      effectiveDate="2026-07-04"
      backTo="/projects/drift-and-direct"
      backLabel="Back to Drift & Direct">
      <P>
        This privacy policy applies to the Drift &amp; Direct app for mobile and desktop devices,
        together with any related services operated by Kekulandala Vithanage Ishan Lahiru Sampath
        (collectively, the "Application"). Kekulandala Vithanage Ishan Lahiru Sampath is hereby
        referred to as the "Service Provider".
      </P>

      <H2>Information Collection and Use</H2>
      <P>
        You can play the Application anonymously, or sign in with Google or Apple. Depending on
        how you use the Application, the Service Provider collects:
      </P>
      <UL
        items={[
          'Account information from Google or Apple Sign-In (such as your name and email address), if you choose to sign in that way',
          'A display name and, optionally, a profile photo you upload, which are stored via Firebase Authentication, Cloud Firestore, and Firebase Storage',
          'The country you select during onboarding, used to place you on a local leaderboard',
          'Gameplay data such as score, session length, and in-game events, used for leaderboards, ranking, and the coins/lives economy',
          'Purchase and subscription information processed by RevenueCat when you buy a subscription or coin pack',
          "Your device's Internet Protocol address, device/operating system information, and app usage data"
        ]}
      />

      <H2>Advertising</H2>
      <P>
        The Application shows banner, interstitial, and rewarded ads served through Google Mobile
        Ads (AdMob), unless you have an active Pro subscription, which removes ads. Google Mobile
        Ads may use device identifiers and similar technologies to serve and measure ads. Where
        required by applicable law, the Service Provider will obtain consent before non-essential
        advertising or tracking technologies are used.
      </P>

      <H2>Your Rights</H2>
      <P>
        You may request access to, correction of, or deletion of your personal data held by the
        Service Provider. To exercise these rights, or to withdraw consent where processing is
        based on consent, contact the Service Provider at support.ishanvithanage@gmail.com.
      </P>

      <H2>Your California privacy rights (CCPA/CPRA)</H2>
      <P>
        If you are a California resident, you have the right to know what personal information is
        collected, the right to delete personal information, the right to opt out of the sale or
        sharing of personal information, and the right to non-discrimination for exercising these
        rights. To exercise your CCPA/CPRA rights, contact the Service Provider at
        support.ishanvithanage@gmail.com.
      </P>
      <P>
        The Service Provider may use the information you provide to send important information,
        required notices, and, where permitted by law, marketing communications.
      </P>

      <H2>Third Party Access</H2>
      <P>
        The Application relies on third-party services to operate, each of which processes data on
        the Service Provider's behalf:
      </P>
      <UL
        items={[
          'Firebase (Authentication, Cloud Firestore, Firebase Storage, Cloud Functions) — Google LLC',
          'RevenueCat — subscription and purchase management',
          'Google Mobile Ads (AdMob) — advertising',
          'Apple Game Center / Sign in with Apple, and Google Sign-In, where used'
        ]}
      />
      <P>
        Only aggregated, anonymized data is otherwise periodically transmitted to external services
        to aid the Service Provider in improving the Application. The Service Provider may share
        your information with third parties in the ways described in this privacy statement.
      </P>

      <H2>International Data Transfers</H2>
      <P>
        The Service Provider or its third-party service providers (including Firebase, RevenueCat,
        and Google Mobile Ads) may transfer personal data to countries outside your country of
        residence, including outside the European Economic Area (EEA). Where applicable law
        requires safeguards for international transfers, the Service Provider will use appropriate
        mechanisms.
      </P>
      <UL
        items={[
          'Standard Contractual Clauses (SCCs) approved by the European Commission',
          'Adequacy decisions or other legally recognized transfer mechanisms',
          'Your consent, where required and legally permitted'
        ]}
      />
      <P>
        The Service Provider may disclose User Provided and Automatically Collected Information:
      </P>
      <UL
        items={[
          'as required by law, such as to comply with a subpoena, or similar legal process;',
          'when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;',
          'with their trusted services providers who work on their behalf, do not have an independent use of the information the Service Provider discloses to them, and have agreed to adhere to the rules set forth in this privacy statement.'
        ]}
      />

      <H2>Deleting Your Data</H2>
      <P>
        The Application includes a "Delete Account" option in Settings &rarr; Legal &amp; Data.
        Using it will:
      </P>
      <UL
        items={[
          'Delete your uploaded profile photo from Firebase Storage',
          'Remove your entries from the global and country leaderboards',
          'Recursively delete your user data and subcollections in Cloud Firestore',
          'Delete your Firebase Authentication account'
        ]}
      />
      <P>
        You can also uninstall the Application to stop further collection of information from your
        device, though this does not automatically delete information already transmitted to the
        Service Provider or to third parties. To request deletion of your personal data outside the
        app, or to exercise any of your rights, contact the Service Provider at
        support.ishanvithanage@gmail.com.
      </P>

      <H2>Data Retention Policy</H2>
      <P>
        The Service Provider retains personal data based on its necessity for the stated purposes:
      </P>
      <UL
        items={[
          'Account and gameplay data: retained for as long as your account exists, and deleted when you use the in-app Delete Account option or request deletion',
          'Automatically Collected Data: retained for up to 24 months from collection, unless longer retention is required for legal compliance',
          'Purchase/subscription records: retained as required by RevenueCat, app store operators, and applicable tax/accounting law',
          'Aggregated and Anonymized Data: retained indefinitely as it no longer identifies you'
        ]}
      />

      <H2>Children</H2>
      <P>
        The Application is not directed at children under 13 (or the equivalent minimum age under
        applicable local law), and the Service Provider does not knowingly collect personal
        information from children. If you believe a child has provided personal information
        through the Application, please contact the Service Provider at
        support.ishanvithanage@gmail.com so that it can be removed. If you are under the applicable
        age, your parent or guardian must provide consent on your behalf where permitted by law.
      </P>

      <H2>Security</H2>
      <P>
        The Service Provider is concerned about safeguarding the confidentiality of your
        information and relies on Firebase's security infrastructure (including Firestore Security
        Rules restricting access to your own data) alongside its own procedural safeguards.
      </P>

      <H2>Data Breach Notification</H2>
      <P>
        If a data breach occurs that affects your personal data, the Service Provider will notify
        you in accordance with applicable legal requirements, including, where required, providing
        information about the nature of the breach and the steps being taken to address it.
      </P>

      <H2>Changes</H2>
      <P>
        The Service Provider may update this Privacy Policy from time to time. The Service
        Provider will notify you of material changes by posting the updated Privacy Policy with an
        effective date. Where required by law, the Service Provider will seek your consent to
        material changes before they take effect.
      </P>

      <H2>Your Consent</H2>
      <P>
        Where processing is based on consent, you provide that consent by affirmatively opting in
        to the relevant feature or action (for example, signing in with Google/Apple, uploading a
        profile photo, or making a purchase). You may withdraw consent at any time without
        affecting processing carried out before withdrawal.
      </P>

      <H2>Contact Us</H2>
      <P>
        If you have any questions regarding privacy while using the Application, please contact
        the Service Provider via email at support.ishanvithanage@gmail.com.
      </P>
    </LegalPageLayout>
  );
};

export default DriftAndDirectPrivacyPolicyPage;
