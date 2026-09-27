import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout, {
  ContactCard,
  Faq,
  H2,
  inlineLinkClass
} from '@shared/layouts/legal-page/legalPageLayout';

const SUPPORT_EMAIL = 'support.ishanvithanage@gmail.com';

const Email = () => (
  <a className={inlineLinkClass} href={`mailto:${SUPPORT_EMAIL}`}>
    {SUPPORT_EMAIL}
  </a>
);

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'How do I turn on the TyPâl keyboard?',
    answer: (
      <>
        Open Settings › General › Keyboard › Keyboards › Add New Keyboard, choose TyPâl, then tap
        TyPâl and turn on Allow Full Access. Switch to it with the globe key. Full Access lets the
        keyboard read your encrypted profiles and reach the AI you choose; typing works without it.
      </>
    )
  },
  {
    question: 'What is the difference between TyPâl AI and my own AI key?',
    answer: (
      <>
        With your own key, requests go straight from your iPhone to that provider under your
        account, and you pay them. TyPâl AI needs no account: it is paid for with TyPâl Tokens,
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
        any device signed in to the same Apple Account. TyPâl Tokens belong to your TyPâl ID in
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
    question: 'Do TyPâl Tokens expire?',
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
        Everything TyPâl stores on your iPhone is erased with Delete All Data in Settings › Privacy
        and Security. To delete your purchase records and token balance too, email <Email /> with
        your TyPâl ID, shown at the bottom of AI › Premium & Tokens. See the{' '}
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
    <LegalPageLayout title="TyPâl Support" backTo="/projects/typal" backLabel="Back to TyPâl">
      <p className="mb-2 font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
        Need help with TyPâl? Browse the questions below, or contact us and we'll get back to you as
        soon as we can.
      </p>

      <ContactCard label="Contact us">
        Email <Email /> for help, bug reports, data requests or anything else about TyPâl.
      </ContactCard>

      <H2>Frequently Asked Questions</H2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <Faq key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="flex gap-x-6 gap-y-2 border-t border-np-muted pt-6 text-xs font-medium dark:border-np-muted-night">
        <Link to="/projects/typal/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>
        <Link to="/projects/typal/terms" className={inlineLinkClass}>
          Terms of Use
        </Link>
      </div>
    </LegalPageLayout>
  );
};

export default TypalSupportPage;
