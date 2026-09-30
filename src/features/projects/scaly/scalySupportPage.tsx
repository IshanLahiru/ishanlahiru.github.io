import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout, {
  ContactCard,
  Faq,
  H2,
  inlineLinkClass
} from '@shared/layouts/legal-page/legalPageLayout';

const SUPPORT_EMAIL = 'support.ishanvithanage@gmail.com';

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'What is Scaly?',
    answer: (
      <>
        Scaly is a 100-snake battle royale. Drop into the arena, eat glowing orbs to grow, cut
        rivals off so they crash into you, and stay inside the shrinking zone. The last snake alive
        wins.
      </>
    )
  },
  {
    question: 'How do I control my snake?',
    answer: (
      <>
        Drag anywhere on the screen to steer: your snake heads in the direction you drag from where
        your finger first landed. Double-tap and hold to boost. Boosting is faster but costs a
        little length.
      </>
    )
  },
  {
    question: 'Am I playing against real people?',
    answer: (
      <>
        No. The other 99 snakes are computer-controlled opponents with their own personalities,
        simulated on your device, and they get tougher as the zone closes. The game plays without an
        account and without any other players.
      </>
    )
  },
  {
    question: 'I died. Can I keep playing the same match?',
    answer: (
      <>
        Once per match, you may be offered a revive: watch a short video ad to jump back in with
        most of your length and a brief spawn shield. It is always optional.
      </>
    )
  },
  {
    question: 'Why does the game ask for my birth year?',
    answer: (
      <>
        So ads can suit your age. Players under 13 only get child-appropriate, non-personalized ads.
        Your answer stays on your device and is never sent to us. See the{' '}
        <Link to="/projects/scaly/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>{' '}
        for details.
      </>
    )
  },
  {
    question: 'I entered the wrong birth year. How do I change it?',
    answer: (
      <>
        The question is asked once. To answer it again, delete and reinstall the app. This also
        resets your stats and settings, which are only stored on your device.
      </>
    )
  },
  {
    question: 'How do I change my ad privacy choices?',
    answer: (
      <>
        In the European Economic Area, the UK, and Switzerland, open Settings (the gear on the home
        screen) and tap AD CHOICES. On iOS you can also allow or deny tracking in the iOS Settings
        app, and on Android you can reset your advertising ID in your device’s Google settings.
      </>
    )
  },
  {
    question: 'How do I delete my data?',
    answer: (
      <>
        Scaly has no accounts, and we don’t keep any data about you. Everything the game saves
        (name, skin, settings, and stats) is on your device and is deleted when you uninstall the
        app.
      </>
    )
  },
  {
    question: 'I found a bug. How do I report it?',
    answer: (
      <>
        Email{' '}
        <a className={inlineLinkClass} href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{' '}
        with what happened, the steps to reproduce it, and your device model and OS version.
        Screenshots or screen recordings help a lot.
      </>
    )
  }
];

const ScalySupportPage: React.FC = () => {
  return (
    <LegalPageLayout title="Scaly Support" backTo="/projects/scaly" backLabel="Back to Scaly">
      <p className="mb-2 font-body text-sm leading-relaxed text-np-600 dark:text-np-400-night">
        Need help with Scaly? Browse the frequently asked questions below, or reach out directly and
        we&apos;ll get back to you as soon as we can.
      </p>

      <ContactCard label="Contact us">
        Email{' '}
        <a className={inlineLinkClass} href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{' '}
        for bug reports, feature requests, or any other questions about the game.
      </ContactCard>

      <H2>Frequently Asked Questions</H2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <Faq key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="flex gap-x-6 gap-y-2 border-t border-np-muted pt-6 text-xs font-medium dark:border-np-muted-night">
        <Link to="/projects/scaly/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>
        <Link to="/projects/scaly/terms" className={inlineLinkClass}>
          Terms of Use (EULA)
        </Link>
      </div>
    </LegalPageLayout>
  );
};

export default ScalySupportPage;
