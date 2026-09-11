import React from 'react';
import LegalPageLayout, { H2, P, UL } from '../../../components/legal-page-layout/legalPageLayout';

const DammapadayaPrivacyPolicyPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="Dammapadaya Privacy Policy"
      effectiveDate="2026-09-08"
      backTo="/projects/dammapadaya"
      backLabel="Back to Dammapadaya"
    >
      <P>
        This privacy policy applies to the Dammapadaya app for mobile devices, together with any
        related services operated by Ishan Lahiru Sampath Kekulandala Vithanage (collectively, the
        "Application"). Ishan Lahiru Sampath Kekulandala Vithanage is hereby referred to as the
        "Service Provider".
      </P>
      <P>
        Dammapadaya does not require an account, does not show advertising, does not include chat or
        any other user-generated content, does not offer any purchases, and does not use analytics or
        crash-reporting tools. This policy describes the small amount of information the Application
        does process.
      </P>

      <H2>Information the Application Does Not Collect</H2>
      <P>The Application does not ask for or collect:</P>
      <UL
        items={[
          'Your name, email address, or any sign-up information — the Application never asks you to create an account',
          'Your precise or approximate location',
          'Contacts, photos, or other device data unrelated to the Application',
          "An advertising identifier, and it doesn't show ads",
          'Payment or purchase details — the Application has no purchases of any kind',
          'Analytics, usage tracking, or crash/diagnostic reports of any kind'
        ]}
      />

      <H2>Application Content</H2>
      <P>
        The Dhammapada text — its Pāli verses, English renderings, and chapter groupings — is fetched
        from the Service Provider's Cloud Firestore database (part of Google's Firebase platform) and
        cached on your device for offline reading, using Firestore's own built-in offline cache. This
        is one-directional, public reference content — reading it does not transmit any information
        about you. If Firestore is unreachable, the Application falls back to the same text bundled
        inside the app itself, so it always has something to show.
      </P>
      <P>
        A "save" toggle in the Application lets you mark a verse while you're reading; it currently
        resets each time the Application restarts and is not transmitted anywhere.
      </P>

      <H2>Administrative Access</H2>
      <P>
        The Service Provider corrects or updates verse content directly in Cloud Firestore — through
        the Firebase console or a private data-loading script run by the Service Provider — not
        through any screen inside the Application itself. There is no admin login, and no
        administrative surface, reachable from the Application as distributed to users.
      </P>

      <H2>Third-Party Services</H2>
      <P>
        The Application integrates with the following third-party services in order to function, each
        governed by its own privacy policy:
      </P>
      <UL
        items={[
          <>
            <a
              href="https://firebase.google.com/support/privacy"
              className="text-np-ink underline decoration-np-accent decoration-2 underline-offset-2 dark:text-np-ink-night dark:decoration-np-accent-night"
            >
              Firebase
            </a>{' '}
            (Google) — Cloud Firestore, for the Dhammapada text described above
          </>,
          <>
            <a
              href="https://policies.google.com/privacy"
              className="text-np-ink underline decoration-np-accent decoration-2 underline-offset-2 dark:text-np-ink-night dark:decoration-np-accent-night"
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
        The third-party services above may process data (such as the request needed to fetch verse
        content or a font file) in countries outside your country of residence, including outside the
        European Economic Area (EEA), under those providers' own safeguards.
      </P>

      <H2>Data Retention and Deletion</H2>
      <P>
        Because the Application doesn't collect personal data of its own, there is nothing on the
        Service Provider's side to retain or delete. Firestore's local offline cache and the in-memory
        "save" toggle are removed the moment you uninstall the Application.
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
        Firebase's own access controls, which restrict who can write to the Application's content —
        to protect the Application's content and the small amount of data described above.
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

export default DammapadayaPrivacyPolicyPage;
