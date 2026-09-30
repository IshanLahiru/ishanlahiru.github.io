import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout, {
  H2,
  P,
  UL,
  inlineLinkClass
} from '@shared/layouts/legal-page/legalPageLayout';

const SUPPORT_EMAIL = 'support.ishanvithanage@gmail.com';

const ScalyTermsPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="Scaly Terms of Use (EULA)"
      effectiveDate="2026-09-30"
      backTo="/projects/scaly"
      backLabel="Back to Scaly">
      <P>
        This End User License Agreement and Terms of Use (the "Terms") is an agreement between you
        and Kekulandala Vithanage Ishan Lahiru Sampath (the "Service Provider") for the Scaly app
        for mobile devices (the "Application"). By downloading, installing, or using the
        Application, you agree to these Terms. If you do not agree, do not use the Application.
      </P>

      <H2>Who can play</H2>
      <P>
        Scaly is a game for a general audience. If you are under the age of majority where you live,
        you should read these Terms with a parent or guardian, who agrees to them on your behalf.
        When you first open the Application, you will be asked for your birth year so that ads can
        be suited to your age, as described in the{' '}
        <Link to="/projects/scaly/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>
        .
      </P>

      <H2>License</H2>
      <P>
        The Service Provider grants you a limited, non-exclusive, non-transferable, revocable
        license to download, install, and use the Application for your personal, non-commercial
        entertainment, on devices that you own or control, as permitted by the usage rules of the
        app store you obtained it from. You may not:
      </P>
      <UL
        items={[
          'copy, modify, distribute, sell, rent, lend, or sublicense the Application',
          'reverse engineer, decompile, or disassemble the Application, except where applicable law expressly permits it',
          'remove, alter, or obscure any copyright, trademark, or other notices in the Application',
          'use the Application for any unlawful purpose'
        ]}
      />

      <H2>How the game works</H2>
      <P>
        Each match drops your snake into an arena with other snakes. All of the other snakes are
        computer-controlled opponents, simulated on your device; the Application does not connect
        you with other human players. The Service Provider may change game features, balance, and
        content in updates.
      </P>

      <H2>Advertising</H2>
      <P>
        The Application is free and shows ads served by Google Mobile Ads, including a banner, an
        occasional full-screen ad after a match, and optional rewarded video ads. Watching a
        rewarded ad is always your choice. Rewards, such as a revive in the current match, have no
        monetary value and cannot be exchanged for money. The Application currently offers no in-app
        purchases.
      </P>

      <H2>Intellectual property</H2>
      <P>
        The Application, including its code, design, the Scaly name, logo, mascot, and artwork, is
        owned by the Service Provider or its licensors and is protected by intellectual property
        laws. Some assets are used under open licenses; these are listed in the Application under
        Settings → LICENSES. These Terms grant you no rights to the Service Provider’s trademarks,
        logos, or branding.
      </P>

      <H2>Updates and availability</H2>
      <P>
        The Service Provider may release updates to fix problems or add features, and you may need
        to install updates to keep using the Application. The Service Provider does not guarantee
        that the Application will always be available, compatible with your device or operating
        system version, or free of errors, and may stop offering it at any time. An internet
        connection is needed for ads; your mobile carrier’s data charges may apply.
      </P>

      <H2>Termination</H2>
      <P>
        These Terms apply until ended by you or the Service Provider. You can end them at any time
        by deleting the Application. Your rights under these Terms end automatically if you fail to
        comply with them, in which case you must stop using the Application and delete it.
      </P>

      <H2>Disclaimer of warranties</H2>
      <P>
        To the fullest extent permitted by law, the Application is provided "as is" and "as
        available", without warranties of any kind, whether express or implied, including warranties
        of merchantability, fitness for a particular purpose, and non-infringement. Nothing in these
        Terms limits any rights you have under consumer protection laws that cannot be excluded.
      </P>

      <H2>Limitation of liability</H2>
      <P>
        To the fullest extent permitted by law, the Service Provider will not be liable for any
        indirect, incidental, special, consequential, or punitive damages, or for any loss of data,
        profits, or goodwill, arising from your use of or inability to use the Application. Because
        the Application is provided free of charge, the Service Provider’s total liability for any
        claim is limited to the minimum amount permitted by applicable law. This does not limit
        liability for death or personal injury caused by negligence, for fraud, or for any other
        liability that cannot be limited under applicable law.
      </P>

      <H2>App store terms (Apple App Store and Google Play)</H2>
      <P>If you obtained the Application from the Apple App Store or Google Play:</P>
      <UL
        items={[
          'These Terms are between you and the Service Provider only, not with Apple Inc. or Google LLC, and the Service Provider, not Apple or Google, is solely responsible for the Application and its content.',
          'The license above is limited to use on Apple-branded devices you own or control as permitted by the Usage Rules in the Apple Media Services Terms and Conditions, or, for Google Play, as permitted by the Google Play Terms of Service.',
          'Apple and Google have no obligation to provide any maintenance or support for the Application. Support is provided by the Service Provider, as described on the Scaly support page.',
          'If the Application fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any. To the maximum extent permitted by law, Apple has no other warranty obligation for the Application.',
          'The Service Provider, not Apple or Google, is responsible for addressing any claims relating to the Application or your use of it, including product liability claims, claims that it fails to meet legal or regulatory requirements, consumer protection and privacy claims, and claims that it infringes a third party’s intellectual property rights.',
          'You confirm that you are not located in a country subject to a U.S. Government embargo or designated as a “terrorist supporting” country, and that you are not on any U.S. Government list of prohibited or restricted parties.',
          'You must comply with any applicable third-party terms, such as your wireless data service agreement, when using the Application.',
          'Apple and its subsidiaries are third-party beneficiaries of these Terms and, once you accept them, have the right to enforce them against you as a third-party beneficiary.'
        ]}
      />

      <H2>Governing law</H2>
      <P>
        These Terms are governed by the laws of the jurisdiction in which the Service Provider is
        established, without regard to conflict-of-law rules, except where mandatory consumer
        protection laws of your country of residence apply. Nothing in this section limits your
        right to bring a claim in a court that is competent under mandatory law.
      </P>

      <H2>Severability and entire agreement</H2>
      <P>
        If any part of these Terms is found to be unenforceable, it will be modified to the minimum
        extent necessary, and the rest will remain in effect. These Terms, together with the Privacy
        Policy, are the entire agreement between you and the Service Provider about the Application.
      </P>

      <H2>Changes to these Terms</H2>
      <P>
        The Service Provider may update these Terms from time to time. Changes will be posted on
        this page with a new effective date, and continuing to use the Application after a change
        means you accept the updated Terms.
      </P>

      <H2>Contact</H2>
      <P>
        Questions, complaints, or claims about the Application can be sent to the Service Provider
        at {SUPPORT_EMAIL}.
      </P>
    </LegalPageLayout>
  );
};

export default ScalyTermsPage;
