import React from 'react';
import { Link } from 'react-router-dom';
import TypalLegalLayout, { ContactCard, Faq, H2, P, inlineLinkClass } from './legalLayout';

const SUPPORT_EMAIL = 'support.ishanvithanage@gmail.com';

const Email = () => (
  <a className={inlineLinkClass} href={`mailto:${SUPPORT_EMAIL}`}>
    {SUPPORT_EMAIL}
  </a>
);

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'How do I turn on the TyPal keyboard?',
    answer: (
      <>
        Open Settings › General › Keyboard › Keyboards › Add New Keyboard, choose TyPal, then tap
        TyPal and turn on Allow Full Access. Switch to it with the globe key. Full Access lets the
        keyboard read your encrypted profiles and reach the AI you choose; typing works without it.
      </>
    )
  },
  {
    question: 'What is the difference between TyPal AI and my own AI key?',
    answer: (
      <>
        With your own key, requests go straight from your iPhone to that provider under your
        account, and you pay them. TyPal AI needs no account: it is paid for with TyPal Tokens,
        bought in the app or included with Pro. Either way, private details are swapped for
        placeholders on your iPhone before anything is sent.
      </>
    )
  },
  {
    question: 'How do I restore my purchases?',
    answer: (
      <>
        Open the app, go to AI › Premium & Tokens and tap Restore Purchases. Premium comes back on
        any device signed in to the same Apple Account. TyPal Tokens belong to your TyPal ID in
        iCloud Keychain, so keep iCloud Keychain on to keep them after reinstalling or on a new
        iPhone.
      </>
    )
  },
  {
    question: 'How do I cancel a subscription or get a refund?',
    answer: (
      <>
        Cancel in Settings › [your name] › Subscriptions at least 24 hours before it renews. Refunds
        are handled by Apple at{' '}
        <a className={inlineLinkClass} href="https://reportaproblem.apple.com">
          reportaproblem.apple.com
        </a>
        .
      </>
    )
  },
  {
    question: 'Do TyPal Tokens expire?',
    answer: (
      <>
        No. Tokens from packs and from Pro never expire, and stay after a subscription ends. See the{' '}
        <Link to="/projects/typal/terms" className={inlineLinkClass}>
          Terms of Use
        </Link>{' '}
        for details.
      </>
    )
  },
  {
    question: 'How do I delete my data?',
    answer: (
      <>
        Everything TyPal stores on your iPhone is erased with Delete All Data in Settings › Privacy
        and Security. To delete your purchase records and token balance too, email <Email /> with
        your TyPal ID, shown at the bottom of AI › Premium & Tokens. See the{' '}
        <Link to="/projects/typal/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>
        .
      </>
    )
  },
  {
    question: 'I found a bug. How do I report it?',
    answer: (
      <>
        Email <Email /> with what happened, the steps to reproduce it, and your iPhone model and iOS
        version. Please don't include private messages or keys.
      </>
    )
  }
];

const TypalSupportPage: React.FC = () => {
  return (
    <TypalLegalLayout title="TyPal Support">
      <P>
        Need help with TyPal? Browse the questions below, or contact us and we'll get back to you as
        soon as we can.
      </P>

      <ContactCard label="Contact us">
        Email <Email /> for help, bug reports, data requests or anything else about TyPal.
      </ContactCard>

      <H2>Frequently Asked Questions</H2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <Faq key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </TypalLegalLayout>
  );
};

export default TypalSupportPage;
