import React from 'react';
import LegalPageLayout, { H2, P, UL } from '../../../components/legal-page-layout/legalPageLayout';

const DriftAndDirectTermsPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="Drift & Direct Terms & Conditions"
      effectiveDate="2026-07-04"
      backTo="/projects/drift-and-direct"
      backLabel="Back to Drift & Direct">
      <P>
        These terms and conditions apply to the Drift &amp; Direct app for mobile and desktop
        devices, together with any related services operated by Kekulandala Vithanage Ishan
        Lahiru Sampath (collectively, the "Application"). Kekulandala Vithanage Ishan Lahiru
        Sampath is hereby referred to as the "Service Provider".
      </P>
      <P>
        By downloading or using the Application, you agree to these Terms and Conditions. You
        should read them carefully before using the Application.
      </P>

      <H2>Age Requirement</H2>
      <P>
        The Application is not directed at children under 13, or such higher minimum age as
        required in your jurisdiction. If you are below the applicable minimum age, do not use the
        Application without the consent of a parent or guardian, where permitted by law.
      </P>

      <H2>License to use the Application</H2>
      <P>
        Subject to your compliance with these Terms, the Service Provider grants you a limited,
        non-exclusive, non-transferable, revocable license to install and use the Application on a
        device for personal, non-commercial use. You may not reproduce, distribute, modify, create
        derivative works from, reverse engineer, decompile, or disassemble the Application, except
        as and only to the extent that such activity is expressly permitted by applicable law.
      </P>

      <H2>Accounts, Sign-In, and Leaderboards</H2>
      <P>
        You may use the Application anonymously, or sign in with Google or Apple to save your
        progress across devices. During onboarding you will be asked to select a country, which is
        used to place your score on a country leaderboard alongside the global leaderboard. Display
        names, scores, and (if uploaded) profile photos may be visible to other players through the
        leaderboards. Do not use a display name or photo that is offensive, impersonates another
        person, or infringes third-party rights.
      </P>

      <H2>Virtual Items, Subscriptions, and Purchases</H2>
      <P>
        The Application offers optional in-app purchases and subscriptions (monthly, annual, or
        lifetime) processed through the applicable app store and RevenueCat, which may remove ads
        and unlock other Pro features. It also offers a virtual coin economy earned through
        gameplay or rewarded ads, and spendable on in-game recovery items such as extra lives.
      </P>
      <UL
        items={[
          'Virtual coins and lives have no monetary value and cannot be exchanged for real currency',
          'Subscriptions renew automatically unless cancelled in accordance with your app store’s subscription management settings, and can be managed from the Application’s "Manage Subscription" option',
          'All purchases are subject to the applicable app store’s payment terms and refund policy',
          'The Service Provider may adjust pricing, offerings, or the coin economy at any time, with material changes communicated where required by law'
        ]}
      />

      <H2>Advertising</H2>
      <P>
        Unless you hold an active Pro subscription, the Application displays banner, interstitial,
        and rewarded video ads served through Google Mobile Ads. Watching a rewarded ad is always
        optional and is used only to grant in-app rewards such as coins or an extra life.
      </P>

      <H2>Intellectual Property</H2>
      <P>
        The Service Provider retains all intellectual property rights in the Application,
        including its code, design, trademarks, service marks, trade names, logos, and branding
        (the "IP"). Nothing in these Terms grants you any license or right to use the Service
        Provider's trademarks, logos, or branding for any purpose. You agree not to remove, alter,
        or obscure any copyright, trademark, or other proprietary notices displayed in or on the
        Application.
      </P>

      <H2>Termination</H2>
      <P>
        The Service Provider may suspend your access to the Application or services if you
        materially breach these Terms. The Service Provider will provide you with written notice
        of the breach and, where the breach is capable of cure, you will have 14 days from receipt
        of notice to remedy the breach. If you fail to cure the breach within that period, the
        Service Provider may terminate your access.
      </P>
      <P>
        The Service Provider may suspend or terminate your access immediately without notice if
        you violate applicable law, infringe intellectual property rights, cheat or manipulate
        leaderboards, or engage in activity that could cause harm to other users or the Service
        Provider.
      </P>
      <P>
        Upon termination, your right to use the Application will end and you must delete all
        copies from your devices. You may also delete your own account and data at any time using
        the "Delete Account" option in Settings, as described in the Privacy Policy.
      </P>

      <H2>Fair Play</H2>
      <P>
        You agree not to use bots, macros, modified clients, exploits, or any other means to
        artificially inflate your score or manipulate the leaderboards. The Service Provider
        reserves the right to remove leaderboard entries and suspend accounts found to be using
        such methods.
      </P>

      <H2>Disclaimers</H2>
      <P>
        The Application stores and processes personal data that you have provided to the Service
        Provider in order to provide the Service. It is your responsibility to maintain the
        security of your device and access to the Application.
      </P>
      <P>
        Some functions of the Application require an active internet connection, which can be
        Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held
        responsible if the Application does not function at full capacity due to lack of access to
        Wi-Fi or if you have exhausted your data allowance. If you are using the Application
        outside of a Wi-Fi area, your mobile network provider's agreement terms still apply, and
        you accept responsibility for any data charges, including roaming charges.
      </P>
      <P>
        Nothing in these Terms shall limit any rights you have under applicable consumer protection
        laws that cannot be lawfully excluded.
      </P>

      <H2>Limitation of Liability</H2>
      <P>
        To the fullest extent permitted by law, the Service Provider shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages, including but not
        limited to lost profits, data loss, or business interruption, even if advised of the
        possibility of such damages.
      </P>
      <P>However, the Service Provider retains full liability for:</P>
      <UL
        items={[
          'Death or personal injury caused by negligence',
          'Fraud or fraudulent misrepresentation',
          'Any other liability that cannot be excluded or limited under applicable law'
        ]}
      />
      <P>
        To the fullest extent permitted by law, the total liability of the Service Provider for
        any claim shall not exceed the amount paid by you to the Service Provider for the
        Application in the 12 months preceding the claim, or the minimum amount that must be paid
        under applicable law, whichever is greater. If you have not made any purchases, this means
        the Service Provider's liability is limited to the minimum amount permitted by applicable
        law.
      </P>

      <H2>Indemnification</H2>
      <P>
        To the fullest extent permitted by law, you agree to indemnify and hold harmless the
        Service Provider, its affiliates, officers, directors, employees and agents from and
        against any claims, liabilities, damages, losses and expenses, including reasonable legal
        fees, arising out of or directly related to your breach of these Terms or your intentional
        misuse of the Application.
      </P>
      <P>
        This indemnification does not apply to claims arising from the Service Provider's own
        negligence, breach of these Terms, or violation of applicable law. In jurisdictions where
        consumer indemnification is restricted by law, this clause shall be limited to the maximum
        extent permitted.
      </P>
      <P>
        The Service Provider may wish to update the Application at some point. You will need to
        download updates if you want to continue using the Application, and the Service Provider
        does not guarantee that it will always update the Application so that it remains compatible
        with the particular operating system version installed on your device. The Service
        Provider may also cease providing the Application and may terminate its availability at
        any time without providing termination notice to you.
      </P>

      <H2>Governing Law and Jurisdiction</H2>
      <P>
        These Terms and Conditions are governed by the laws of the jurisdiction in which the
        Service Provider is established, excluding conflict of law rules, except to the extent
        mandatory consumer protection laws provide otherwise.
      </P>
      <P>
        Any dispute arising out of or relating to these Terms will be brought before the courts
        that have jurisdiction under applicable law. Nothing in this clause limits any rights you
        may have to bring a claim in a court that is competent under mandatory law.
      </P>

      <H2>Severability</H2>
      <P>
        If any provision of these Terms and Conditions is held to be invalid, illegal, or
        unenforceable by a court of competent jurisdiction, such provision shall be modified to
        the minimum extent necessary to make it valid and enforceable, and the remaining
        provisions of these Terms shall remain in full force and effect.
      </P>

      <H2>Entire Agreement</H2>
      <P>
        These Terms and Conditions, together with the Privacy Policy, constitute the entire
        agreement between you and the Service Provider concerning your use of the Application,
        superseding any prior agreements or understandings.
      </P>

      <H2>Changes to These Terms and Conditions</H2>
      <P>
        The Service Provider may periodically update these Terms and Conditions. Therefore, you
        are advised to review this page regularly for any changes. The Service Provider will
        notify you of any changes by posting the new Terms and Conditions on this page.
      </P>

      <H2>Contact Us</H2>
      <P>
        If you have any questions or suggestions about the Terms and Conditions, please do not
        hesitate to contact the Service Provider at support.ishanvithanage@gmail.com.
      </P>
    </LegalPageLayout>
  );
};

export default DriftAndDirectTermsPage;
