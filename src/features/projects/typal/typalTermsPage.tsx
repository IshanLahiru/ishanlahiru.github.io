import React from 'react';
import { Link } from 'react-router-dom';
import TypalLegalLayout, { H2, P, UL, inlineLinkClass } from './legalLayout';

const TypalTermsPage: React.FC = () => {
  return (
    <TypalLegalLayout
      title="TyPal Terms of Use"
      effectiveDate="30 September 2026"
      summary={
        <p>
          Premium and Pro renew automatically until you cancel in your Apple Account settings. TyPal
          Tokens never expire. Check AI-written text before you send it, and don't use TyPal to harm
          anyone.
        </p>
      }>
      <P>
        These terms apply to the TyPal app and keyboard for iPhone (the "Application"), operated by
        Kekulandala Vithanage Ishan Lahiru Sampath (the "Service Provider"). By using the
        Application, you agree to them and to the{' '}
        <Link to="/projects/typal/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>
        .
      </P>

      <H2>Age</H2>
      <P>
        You must be at least 13 years old to use the Application. If you are under the age of
        majority where you live, you may use it only with a parent's or guardian's permission, and
        they agree to these terms for you.
      </P>

      <H2>Premium and Pro Subscriptions</H2>
      <P>
        TyPal Premium and TyPal Pro are optional auto-renewing subscriptions, billed monthly or
        yearly. TyPal Premium Lifetime is a one-time purchase. The price and billing period are
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

      <H2>TyPal Tokens</H2>
      <P>
        TyPal Tokens pay for TyPal AI replies. You can buy them in packs, and TyPal Pro adds a set
        amount at the start of each billing period. Each reply uses tokens according to its length,
        and the app shows your balance.
      </P>
      <UL
        items={[
          'Tokens do not expire, including tokens added by TyPal Pro, which stay after the subscription ends',
          "Tokens have no cash value. They cannot be exchanged for money, refunded outside Apple's refund process, or transferred to another person",
          'Tokens belong to your TyPal ID, which is kept in your iCloud Keychain. If the ID is lost (for example, iCloud Keychain is off and the app is deleted) or you ask for it to be deleted, the tokens tied to it cannot be recovered',
          'TyPal AI may occasionally be unavailable, for example during maintenance or if its provider is down. No tokens are used for a request that fails'
        ]}
      />

      <H2>AI Features</H2>
      <P>
        TyPal can rewrite and suggest text with AI, either through TyPal AI or through an AI
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
          "try to get around the Application's limits, spend another person's tokens, or misuse TyPal's server",
          <>
            break the AI provider's own rules; for TyPal AI, Google's{' '}
            <a
              href="https://policies.google.com/terms/generative-ai/use-policy"
              className={inlineLinkClass}>
              Generative AI Prohibited Use Policy
            </a>
          </>
        ]}
      />
      <P>The Service Provider may limit or stop TyPal AI for anyone who breaks these rules.</P>

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
          className={inlineLinkClass}>
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

      <H2>Disputes</H2>
      <P>
        Please contact support.ishanvithanage@gmail.com first; most problems can be solved that way.
        If a dispute isn't resolved within 60 days, the following applies.
      </P>
      <P>
        <strong>If you live in the United States:</strong> any dispute about the Application or
        these terms will be resolved by binding individual arbitration administered by JAMS under
        its Streamlined Arbitration Rules, not in court, except that either party may bring an
        individual claim in small claims court.{' '}
        <strong>
          You and the Service Provider each waive the right to a jury trial and to take part in a
          class action, class arbitration or representative action.
        </strong>{' '}
        You can opt out of arbitration by emailing support.ishanvithanage@gmail.com within 30 days
        of first accepting these terms. If the class-action waiver is found unenforceable for a
        claim, that claim will be heard in court instead of arbitration.
      </P>
      <P>
        <strong>Everywhere else:</strong> disputes are heard by the courts that have jurisdiction
        under the law that applies to you. If you live in the European Union or the United Kingdom,
        you keep the right to bring a claim in the courts where you live, and nothing here removes
        rights your local consumer law gives you.
      </P>

      <H2>Governing Law</H2>
      <P>
        These terms are governed by the laws of the place where the Service Provider is established,
        except where mandatory consumer protection laws where you live provide otherwise.
      </P>

      <H2>Changes</H2>
      <P>
        These terms may be updated as TyPal develops. Updates will be posted on this page with a new
        effective date. Changes to the price of a subscription are announced by Apple before they
        apply to you.
      </P>

      <H2>Contact Us</H2>
      <P>Questions about these terms, or TyPal support: support.ishanvithanage@gmail.com.</P>
    </TypalLegalLayout>
  );
};

export default TypalTermsPage;
