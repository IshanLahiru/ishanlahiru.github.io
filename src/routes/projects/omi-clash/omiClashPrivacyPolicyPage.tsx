import React from 'react';
import LegalPageLayout, { H2, P, UL } from '../../../components/legal-page-layout/legalPageLayout';

const OmiClashPrivacyPolicyPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="Omi Clash Privacy Policy"
      effectiveDate="2026-07-29"
      backTo="/projects/omi-clash"
      backLabel="Back to Omi Clash"
    >
      <P>
        This privacy policy applies to the Omi Clash app for mobile devices, together with any
        related services operated by Ishan Lahiru Sampath Kekulandala Vithanage (collectively, the
        "Application"). Ishan Lahiru Sampath Kekulandala Vithanage is hereby referred to as the
        "Service Provider".
      </P>

      <H2>Information Collection and Use</H2>
      <P>
        The Application collects information when you download and use it, including your device's
        IP address, the screens you visit and time spent on them, and your mobile operating system
        and device type. For a better experience, the Service Provider may also require you to
        provide certain personally identifiable information:
      </P>
      <UL
        items={[
          'Email address, and your Google/Apple account display name (via sign-in)',
          "Profile photo URL (via sign-in) — used only for in-app display, never stored on the Service Provider's own servers",
          'Your self-chosen in-app display name',
          'Your Firebase user ID (UID) — the internal identifier tying the rest of this data together',
          'Country and age range — both self-selected by you during onboarding, never inferred from your device, location, or IP address',
          'A device push-notification token, so the Application can notify you of game/chat activity',
          "Chat messages and other content you post through the Application's friend chat and table chat features",
          'In-app purchase and subscription identifiers (see "Purchases and Subscriptions" below)',
          'Crash and diagnostic logs, to help the Service Provider fix bugs'
        ]}
      />
      <P>
        The information the Service Provider requests will be retained and used as described in this
        privacy policy.
      </P>

      <H2>Advertising</H2>
      <P>
        The Application shows non-personalized, contextual advertising (via Google AdMob) to
        free-tier users — ads are not selected based on tracking your activity across other
        companies' apps or websites, and the Application does not access your device's advertising
        identifier for that purpose. Because of this, the Application does not require Apple's App
        Tracking Transparency consent prompt. AdMob may still use minimal technical identifiers for
        ad delivery, frequency capping, and fraud prevention — see AdMob's own privacy policy,
        linked below, for details.
      </P>

      <H2>Purchases and Subscriptions</H2>
      <P>
        The Application offers optional in-app purchases and an auto-renewing subscription ("Omi
        Clash Pro"), processed through Apple's App Store or Google Play and managed on the Service
        Provider's behalf by RevenueCat. RevenueCat receives your Firebase user ID and your
        purchase/subscription history from the store; it does not receive your email address or
        display name from the Application directly.
      </P>
      <P>
        Token cards (the Application's in-app currency) have no real-world monetary value and cannot
        be redeemed or cashed out for real money, cryptocurrency, or any other item of value — see
        the Terms & Conditions for details.
      </P>

      <H2>Your Rights</H2>
      <P>
        You may request access to, correction of, or deletion of your personal data held by the
        Service Provider. To exercise these rights, or to withdraw consent where processing is based
        on consent, contact the Service Provider at support.ishanvithanage@gmail.com — or, for
        deletion specifically, see "Data Deletion" below for the faster in-app option.
      </P>

      <H2>Your California privacy rights (CCPA/CPRA)</H2>
      <P>
        If you are a California resident, you have the right to know what personal information is
        collected, the right to delete personal information, the right to opt out of the sale or
        sharing of personal information, and the right to non-discrimination for exercising these
        rights. The Service Provider does not sell your personal information. To exercise your
        CCPA/CPRA rights, contact the Service Provider at support.ishanvithanage@gmail.com.
      </P>
      <P>
        The Service Provider may use the information you provide to send important information,
        required notices, and, where permitted by law, marketing communications.
      </P>

      <H2>Third Party Access</H2>
      <P>
        Only aggregated, anonymized data is periodically transmitted to external services to aid the
        Service Provider in improving the Application. Beyond that, the Application integrates with
        the following third-party services in order to function, each governed by its own privacy
        policy:
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
            (Google) — authentication, database (Cloud Firestore and Realtime Database), backend
            functions, push notifications, crash reporting, and app analytics
          </>,
          <>
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Google Sign-In
            </a>{' '}
            — optional sign-in method
          </>,
          <>
            <a
              href="https://www.apple.com/legal/privacy/"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Sign in with Apple
            </a>{' '}
            — optional sign-in method
          </>,
          <>
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              AdMob
            </a>{' '}
            (Google) — non-personalized advertising, see "Advertising" above
          </>,
          <>
            <a
              href="https://www.revenuecat.com/privacy"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              RevenueCat
            </a>{' '}
            — subscription and purchase management
          </>,
          <>
            Apple App Store / Google Play Billing — payment processing for in-app purchases and
            subscriptions
          </>,
          <>
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Cloudflare
            </a>{' '}
            — relays voice-chat audio between players only when a direct connection isn't possible;
            Cloudflare does not receive chat messages or account data
          </>
        ]}
      />
      <P>
        The Service Provider may disclose User Provided and Automatically Collected Information:
      </P>
      <UL
        items={[
          'as required by law, such as to comply with a subpoena, or similar legal process;',
          'when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;',
          'with their trusted service providers who work on their behalf, do not have an independent use of the information the Service Provider discloses to them, and have agreed to adhere to the rules set forth in this privacy statement.'
        ]}
      />

      <H2>International Data Transfers</H2>
      <P>
        The Service Provider or its third-party service providers may transfer personal data to
        countries outside your country of residence, including outside the European Economic Area
        (EEA). Where applicable law requires safeguards for international transfers, the Service
        Provider will use appropriate mechanisms, including Standard Contractual Clauses approved by
        the European Commission, adequacy decisions or other legally recognized transfer mechanisms,
        or your consent, where required and legally permitted.
      </P>

      <H2>Opt-Out Rights</H2>
      <P>
        You can stop further collection of information from your mobile device by uninstalling the
        Application. Uninstalling will stop the Application from collecting data from your device,
        but it does not automatically delete information that has already been transmitted to the
        Service Provider or to third parties — see "Data Deletion" below to remove that too.
      </P>

      <H2>Data Retention Policy</H2>
      <P>
        The Service Provider retains personal data based on its necessity for the stated purposes:
      </P>
      <UL
        items={[
          'User Provided Data: retained for the duration of your use of the Application plus 12 months thereafter, unless longer retention is required by law',
          'Automatically Collected Data: retained for up to 24 months from collection, unless longer retention is required for legal compliance',
          'Moderation records (reports filed against a message or account): retained after the reported account is deleted, as a trust & safety record — this prevents a banned or abusive account from erasing evidence of that abuse simply by deleting itself. Retained reports are not linked back to any other data about the deleted account',
          'Aggregated and Anonymized Data: retained indefinitely, as it no longer identifies you',
          'Data required for legal compliance: retained as long as required by applicable law'
        ]}
      />

      <H2>Data Deletion</H2>
      <P>
        The fastest way to delete your account and its data: open the Application → Settings →
        Delete Account. This immediately and permanently deletes your lifetime stats and leaderboard
        entry, friend list and chat history, token-card balance and history, and your sign-in itself
        — no waiting, and nothing left behind (except the moderation-record exception above, which
        only applies if your account was previously reported).
      </P>
      <P>
        If you no longer have the Application installed, you can instead request deletion by
        contacting the Service Provider at support.ishanvithanage@gmail.com. The Service Provider
        will process such requests within the timeframes required by applicable law.
      </P>

      <H2>Children</H2>
      <P>
        The Application is not intended for children under 16 years of age, or such higher age as
        required by applicable law. The Service Provider does not knowingly solicit data from
        children or market the Application to them, and the Application's own sign-up flow declines
        to collect any information from a user who reports being under 16. If you are a parent or
        guardian and believe your child has provided the Service Provider with personal information,
        please contact the Service Provider at support.ishanvithanage@gmail.com.
      </P>

      <H2>Security</H2>
      <P>
        The Service Provider is concerned about safeguarding the confidentiality of your
        information. The Service Provider provides physical, electronic, and procedural safeguards
        to protect information the Service Provider processes and maintains.
      </P>

      <H2>Data Breach Notification</H2>
      <P>
        If a data breach occurs that affects your personal data, the Service Provider will notify
        you in accordance with applicable legal requirements, including, where required, providing
        information about the nature of the breach and the steps being taken to address it.
      </P>

      <H2>Changes</H2>
      <P>
        The Service Provider may update this Privacy Policy from time to time. The Service Provider
        will notify you of material changes by posting the updated Privacy Policy with an effective
        date. Where required by law, the Service Provider will seek your consent to material changes
        before they take effect.
      </P>

      <H2>Your Consent</H2>
      <P>
        Where processing is based on consent, you provide that consent by affirmatively opting in to
        the relevant feature or action. You may withdraw consent at any time without affecting
        processing carried out before withdrawal.
      </P>

      <H2>Contact Us</H2>
      <P>
        If you have any questions regarding privacy while using the Application, please contact the
        Service Provider via email at support.ishanvithanage@gmail.com.
      </P>
    </LegalPageLayout>
  );
};

export default OmiClashPrivacyPolicyPage;
