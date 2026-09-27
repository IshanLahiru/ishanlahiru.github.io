import React from 'react';
import LegalPageLayout, {
  H2,
  P,
  UL,
  inlineLinkClass
} from '@shared/layouts/legal-page/legalPageLayout';

const TypalPrivacyPolicyPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="TyPâl Privacy Policy"
      effectiveDate="2026-09-27"
      backTo="/projects/typal"
      backLabel="Back to TyPâl"
    >
      <P>
        This privacy policy applies to the TyPâl app and keyboard for iPhone (the "Application"),
        operated by Kekulandala Vithanage Ishan Lahiru Sampath (the "Service Provider"). TyPâl has
        no accounts, analytics, tracking or ads. What you type and store stays on your iPhone,
        except for the AI requests you choose to make, described below.
      </P>

      <H2>What Stays on Your iPhone</H2>
      <UL
        items={[
          'Profiles, writing styles, notes, private terms, saved chats, AI conversations and clipboard items, encrypted with a key that exists only on your iPhone and left out of iCloud and device backups',
          'Words the keyboard learns from your typing, encrypted the same way. Nothing is learned in password, one-time code, card number, email, phone number or link fields',
          'API keys for AI providers you add yourself, kept in the Keychain on this device only',
          "Screenshots you import as chats, which are read on your iPhone with Apple's text recognition and never saved or uploaded; only the text is kept, encrypted",
          "Word suggestions and translation, which run on your iPhone using Apple's on-device dictionary, language models and translation"
        ]}
      />

      <H2>Your TyPâl ID</H2>
      <P>
        When TyPâl first needs it, it creates a random identifier (your "TyPâl ID") and keeps it in
        your iCloud Keychain, so purchases and TyPâl Tokens follow you to your other devices and
        survive reinstalling. It is not linked to your name, email address or Apple Account, and is
        sent only to RevenueCat and to TyPâl's server, as described below. You can see it at the
        bottom of AI › Premium & Tokens in the app.
      </P>

      <H2>What Leaves Your iPhone</H2>
      <P>
        Only when you ask for AI help (by tapping a profile in the keyboard or using Write it as… in
        the app), and only after you have allowed it. Before anything is sent, names, private terms,
        email addresses, phone numbers, street addresses, links, card numbers and bank account
        numbers that TyPâl detects are replaced with placeholders on your iPhone; if anything
        private is still found, nothing is sent. What is sent:
      </P>
      <UL
        items={[
          'the text you are writing, and',
          "the active profile's writing style and some of its notes, with private details swapped out the same way"
        ]}
      />
      <P>Where it goes depends on the AI you choose:</P>
      <UL
        items={[
          <>
            <strong>Your own AI key:</strong> directly from your iPhone to that provider
            (OpenRouter, OpenAI, Anthropic, Google, Mistral, Groq or xAI), under your account with
            them. Their privacy policy applies to what they receive.
          </>,
          <>
            <strong>TyPâl AI:</strong> to TyPâl's server, which runs on Cloudflare, together with
            your TyPâl ID. The server checks your TyPâl Token balance with RevenueCat, passes the
            request to Google's Gemini API to write the reply, and deducts the tokens used. It does
            not store or log the text of requests or replies; it records only token counts and cost,
            without your TyPâl ID. On the paid Gemini API, Google does not use requests to train its
            models and keeps them only for a limited time to detect abuse, as its terms allow.
          </>
        ]}
      />
      <P>
        Detection can miss private details that don't look like one, so add anything sensitive to a
        profile's private terms.
      </P>

      <H2>Purchases, Subscriptions and TyPâl Tokens</H2>
      <P>
        Premium, Pro, the lifetime unlock and TyPâl Token packs are sold through Apple's App Store.
        Apple handles payment; the Service Provider never sees your payment details. RevenueCat
        manages purchases and token balances on the Service Provider's behalf. It receives your
        TyPâl ID, your purchase and subscription history from Apple, your token balance, and basic
        device information (such as device model, iOS version, app version, country and IP address)
        that it uses to process and restore purchases.
      </P>

      <H2>Full Access</H2>
      <P>
        iOS asks you to allow Full Access for the TyPâl keyboard. The keyboard needs it to read your
        encrypted data and to reach the AI you choose. Typing, emoji and suggestions work without
        it.
      </P>

      <H2>Third-Party Services</H2>
      <P>Each is governed by its own privacy policy:</P>
      <UL
        items={[
          <>
            <a href="https://www.cloudflare.com/privacypolicy/" className={inlineLinkClass}>
              Cloudflare
            </a>{' '}
            runs TyPâl's server for TyPâl AI requests
          </>,
          <>
            <a href="https://policies.google.com/privacy" className={inlineLinkClass}>
              Google (Gemini API)
            </a>{' '}
            writes TyPâl AI replies
          </>,
          <>
            <a href="https://www.revenuecat.com/privacy" className={inlineLinkClass}>
              RevenueCat
            </a>{' '}
            manages purchases, subscriptions and token balances
          </>,
          <>
            <a href="https://www.apple.com/legal/privacy/" className={inlineLinkClass}>
              Apple
            </a>{' '}
            processes payments and keeps your TyPâl ID in iCloud Keychain
          </>,
          'the AI provider you add your own key for, if you use one'
        ]}
      />
      <P>
        The Service Provider does not sell your personal information or share it for advertising. It
        may disclose information if required by law, or to protect its rights, your safety or the
        safety of others.
      </P>

      <H2>Data Retention</H2>
      <UL
        items={[
          'Data on your iPhone: until you delete it, or delete the Application',
          "Text sent to TyPâl AI: not stored by TyPâl's server; kept by Google only as described above",
          'TyPâl AI usage totals (token counts and cost per day, not linked to you): up to 40 days',
          'Purchase records and token balances at RevenueCat: as long as needed to provide your purchases and meet legal obligations'
        ]}
      />

      <H2>Your Choices and Data Deletion</H2>
      <UL
        items={[
          "Pause AI or Pause Learning from the keyboard's menu",
          'Withdraw permission for an AI provider or TyPâl AI, or remove a key, in Settings › AI Providers and Models',
          'Edit or delete profiles, notes, chats, AI conversations, clipboard items and learned words in the app',
          'Delete All Data in Settings › Privacy and Security permanently erases everything TyPâl stores on your iPhone. iOS can keep Keychain items after an app is deleted, so use Delete All Data first'
        ]}
      />
      <P>
        To delete your purchase records and token balance, email support.ishanvithanage@gmail.com
        with your TyPâl ID. Premium and any TyPâl Tokens tied to that ID are lost once it is
        deleted. Deleting data does not cancel a subscription; cancel it in Settings › [your name] ›
        Subscriptions.
      </P>

      <H2>Your Rights</H2>
      <P>
        Depending on where you live (including under the GDPR and the California CCPA/CPRA), you may
        have the right to access, correct or delete your personal data, to object to or restrict its
        processing, and to withdraw consent. Because almost everything is kept only on your iPhone,
        you can do most of this in the app; for the rest, contact the Service Provider. You won't be
        treated differently for exercising these rights.
      </P>

      <H2>International Transfers</H2>
      <P>
        Cloudflare, Google and RevenueCat may process data in countries other than yours, including
        the United States. Where the law requires safeguards for such transfers, they are covered by
        those companies' standard data protection terms, such as the European Commission's Standard
        Contractual Clauses.
      </P>

      <H2>Children</H2>
      <P>
        TyPâl is not directed to children under 13, and TyPâl AI is only for people 18 or older. The
        Service Provider does not knowingly collect personal data from children. If you believe a
        child has provided personal data, contact the Service Provider and it will be deleted.
      </P>

      <H2>Security</H2>
      <P>
        Stored data is encrypted on your iPhone, connections to TyPâl's server are encrypted and
        certificate-pinned, and the server's keys are never in the app. No method of transmission or
        storage is completely secure, but TyPâl is designed to keep as little as possible anywhere
        but your iPhone.
      </P>

      <H2>Changes</H2>
      <P>
        This policy may be updated as TyPâl develops. Updates will be posted on this page and in the
        app with a new effective date. If what is sent to an AI provider changes, TyPâl will ask for
        your permission again.
      </P>

      <H2>Contact Us</H2>
      <P>Questions or requests about privacy in TyPâl: support.ishanvithanage@gmail.com.</P>
    </LegalPageLayout>
  );
};

export default TypalPrivacyPolicyPage;
