import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout, {
  H2,
  P,
  UL,
  inlineLinkClass
} from '@shared/layouts/legal-page/legalPageLayout';

const TypalTermsPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="TyPâl Terms of Use"
      effectiveDate="2026-09-27"
      backTo="/projects/typal"
      backLabel="Back to TyPâl"
    >
      <P>
        These terms apply to the TyPâl app and keyboard for iPhone (the "Application"), operated by
        Kekulandala Vithanage Ishan Lahiru Sampath (the "Service Provider"). By using the
        Application, you agree to them and to the{' '}
        <Link to="/projects/typal/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>
        .
      </P>

      <H2>Age</H2>
      <P>
        You must be at least 13 years old to use the Application. TyPâl AI is available only to
        people 18 or older, because its AI provider's terms require it; by using TyPâl AI you
        confirm that you are 18 or older.
      </P>

      <H2>Premium and Pro Subscriptions</H2>
      <P>
        TyPâl Premium and TyPâl Pro are optional auto-renewing subscriptions, billed monthly or
        yearly. TyPâl Premium Lifetime is a one-time purchase. The price and billing period are
        shown before you buy. There are no free trials.
      </P>
      <UL
        items={[
          'Payment is charged to your Apple Account when you confirm the purchase',
          'A subscription renews automatically for the same period and price unless it is cancelled at least 24 hours before the end of the current period. Your account is charged for renewal within the 24 hours before the period ends',
          'You can manage or cancel a subscription at any time in Settings › [your name] › Subscriptions, or from Manage Subscription in the app. Cancelling stops future renewals; the current period stays active until it ends',
          'Purchases can be restored on another device, or after reinstalling, with Restore Purchases in the app',
          'Refunds are handled by Apple under its own policies; request one at reportaproblem.apple.com',
          'If Premium ends, nothing you created is deleted. Anything above a free limit stays available to read and use; only adding more is locked'
        ]}
      />

      <H2>TyPâl Tokens</H2>
      <P>
        TyPâl Tokens pay for TyPâl AI replies. You can buy them in packs, and TyPâl Pro adds a set
        amount at the start of each billing period. Each reply uses tokens according to its length,
        and the app shows your balance.
      </P>
      <UL
        items={[
          'Tokens do not expire, including tokens added by TyPâl Pro, which stay after the subscription ends',
          "Tokens have no cash value. They cannot be exchanged for money, refunded outside Apple's refund process, or transferred to another person",
          'Tokens belong to your TyPâl ID, which is kept in your iCloud Keychain. If the ID is lost (for example, iCloud Keychain is off and the app is deleted) or you ask for it to be deleted, the tokens tied to it cannot be recovered',
          'TyPâl AI may occasionally be unavailable, for example during maintenance or if its provider is down. No tokens are used for a request that fails'
        ]}
      />

      <H2>AI Features</H2>
      <P>
        TyPâl can rewrite and suggest text with AI, either through TyPâl AI or through an AI
        provider account you set up with your own key. If you use your own key, you are responsible
        for that account, its costs, and following that provider's terms.
      </P>
      <P>
        AI-written text can be inaccurate, incomplete or inappropriate. Review it before you send
        it; you are responsible for what you send.
      </P>
      <P>You agree not to use the Application's AI features to:</P>
      <UL
        items={[
          'create or send anything illegal, including harassment, threats, hate speech, fraud or spam',
          'harm, deceive or impersonate others, or infringe their rights',
          "try to get around the Application's limits, spend another person's tokens, or misuse TyPâl's server",
          <>
            break the AI provider's own rules; for TyPâl AI, Google's{' '}
            <a
              href="https://policies.google.com/terms/generative-ai/use-policy"
              className={inlineLinkClass}
            >
              Generative AI Prohibited Use Policy
            </a>
          </>
        ]}
      />
      <P>The Service Provider may limit or stop TyPâl AI for anyone who breaks these rules.</P>

      <H2>License</H2>
      <P>
        You may use the Application for your personal use. You may not copy, modify, reverse
        engineer or redistribute it, except where the law allows. The Application, its design and
        its content belong to the Service Provider.
      </P>

      <H2>No Warranty</H2>
      <P>
        The Application is provided "as is" and "as available", without warranties of any kind, to
        the extent permitted by law. Nothing in these terms limits rights you have under consumer
        protection laws that cannot be excluded.
      </P>

      <H2>Limitation of Liability</H2>
      <P>
        To the fullest extent permitted by law, the Service Provider is not liable for indirect,
        incidental or consequential loss, including lost data or messages sent with AI-written text,
        and its total liability for any claim is limited to the amount you paid for the Application
        in the 12 months before the claim. This does not limit liability for death or personal
        injury caused by negligence, for fraud, or for anything else that cannot be limited by law.
      </P>

      <H2>Apple App Store Terms</H2>
      <P>
        These terms are between you and the Service Provider, not Apple. If they don't cover
        something,{' '}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          className={inlineLinkClass}
        >
          Apple's Standard License Agreement
        </a>{' '}
        applies. In addition:
      </P>
      <UL
        items={[
          'Apple is not responsible for the Application or its content, and has no obligation to provide maintenance or support for it',
          "To the extent permitted by law, Apple has no warranty obligation for the Application; any failure to conform to a warranty is the Service Provider's responsibility",
          'Apple is not responsible for any claims relating to the Application, including product liability, legal or regulatory claims, or intellectual property claims',
          'You confirm that you are not in a country subject to a U.S. Government embargo and are not on any U.S. Government list of prohibited or restricted parties',
          'Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce them against you'
        ]}
      />

      <H2>Governing Law</H2>
      <P>
        These terms are governed by the laws of the place where the Service Provider is established,
        except where mandatory consumer protection laws where you live provide otherwise.
      </P>

      <H2>Changes</H2>
      <P>
        These terms may be updated as TyPâl develops. Updates will be posted on this page with a new
        effective date. Changes to the price of a subscription are announced by Apple before they
        apply to you.
      </P>

      <H2>Contact Us</H2>
      <P>Questions about these terms, or TyPâl support: support.ishanvithanage@gmail.com.</P>
    </LegalPageLayout>
  );
};

export default TypalTermsPage;
