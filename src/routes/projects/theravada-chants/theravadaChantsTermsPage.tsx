import React from 'react';
import LegalPageLayout, { H2, P, UL } from '../../../components/legal-page-layout/legalPageLayout';

const TheravadaChantsTermsPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="Theravāda Chants Terms & Conditions"
      effectiveDate="2026-08-30"
      backTo="/projects/theravada-chants"
      backLabel="Back to Theravāda Chants"
    >
      <P>
        These terms and conditions apply to the Theravāda Chants app for mobile devices, together
        with any related services operated by Ishan Lahiru Sampath Kekulandala Vithanage
        (collectively, the "Application"). Ishan Lahiru Sampath Kekulandala Vithanage is hereby
        referred to as the "Service Provider".
      </P>
      <P>
        By downloading or using the Application, you agree to these Terms and Conditions. You should
        read them carefully before using the Application.
      </P>

      <H2>License to Use the Application</H2>
      <P>
        Subject to your compliance with these Terms, the Service Provider grants you a limited,
        non-exclusive, non-transferable, revocable license to install and use the Application on a
        mobile device that you own or control, for personal, non-commercial purposes, as permitted
        by the usage rules of the applicable app store. You may not reproduce, distribute, modify,
        create derivative works from, reverse engineer, decompile, or disassemble the Application's
        software, except as and only to the extent that such activity is expressly permitted by
        applicable law.
      </P>

      <H2>Chant Content</H2>
      <P>
        The Pali chants, their English translations, and related devotional content presented in the
        Application are, to the Service Provider's knowledge, traditional texts in the public domain
        or used with the intent of free, respectful devotional sharing — the Service Provider does
        not claim proprietary ownership of the underlying chants themselves. The Application's
        software, its selection and arrangement of content, its design, and its own original text
        (such as the pronunciation guide) remain the intellectual property of the Service Provider.
        If you believe any content in the Application infringes a right you hold, contact the
        Service Provider at ishanlahiru2002@gmail.com and it will be reviewed promptly.
      </P>

      <H2>Intellectual Property</H2>
      <P>
        The Service Provider retains all intellectual property rights in the Application itself,
        including its code, design, trademarks, and branding. Nothing in these Terms grants you any
        license or right to use the Service Provider's trademarks, logos, or branding for any
        purpose.
      </P>

      <H2>Purchases ("Support the Developer")</H2>
      <P>
        The Application offers two optional purchases — a one-time "Lifetime" purchase and an
        auto-renewing "Yearly" subscription — as a voluntary way to support its development.{' '}
        <strong>
          Neither purchase unlocks, gates, or is required for any chant, feature, or content
        </strong>
        ; the entire Application is fully usable, free of charge, with or without a purchase.
      </P>
      <UL
        items={[
          'Pricing and billing period are shown to you before purchase, at the point of sale within the Application',
          'The Yearly subscription automatically renews for the same period and price you agreed to at purchase, unless cancelled at least 24 hours before the end of the current period',
          'Payment is charged to your Apple ID or Google Play account at confirmation of purchase',
          'You can manage or cancel the Yearly subscription at any time through Settings → Manage subscription within the Application, or directly through your Apple ID or Google Play account settings',
          "The Service Provider does not process payments or store your payment details directly — all purchases are handled by Apple's App Store or Google Play, and by RevenueCat on the Service Provider's behalf",
          'Purchases can be restored on a new device or after a reinstall via Settings → Support the developer, without being charged again'
        ]}
      />

      <H2>Disclaimers</H2>
      <P>
        The Application is provided for personal devotional and educational use. While the Service
        Provider takes care to present chants and translations accurately, the Application is not a
        substitute for guidance from a qualified teacher or monastic for questions of doctrine or
        practice.
      </P>
      <P>
        Some functions of the Application, such as fetching new or updated chants, require an active
        internet connection; previously loaded content remains available offline. The Service
        Provider cannot be held responsible if the Application does not function at full capacity
        due to lack of internet access.
      </P>
      <P>
        Nothing in these Terms shall limit any rights you have under applicable consumer protection
        laws that cannot be lawfully excluded.
      </P>

      <H2>Limitation of Liability</H2>
      <P>
        To the fullest extent permitted by law, the Service Provider shall not be liable for any
        indirect, incidental, special, or consequential damages arising from your use of the
        Application, even if advised of the possibility of such damages. However, the Service
        Provider retains full liability for death or personal injury caused by negligence, fraud or
        fraudulent misrepresentation, and any other liability that cannot be excluded or limited
        under applicable law.
      </P>
      <P>
        To the fullest extent permitted by law, the total liability of the Service Provider for any
        claim shall not exceed the amount you paid for the Application in the 12 months preceding
        the claim, or the minimum amount that must be paid under applicable law, whichever is
        greater. As the Application's own content is free of charge, this means the Service
        Provider's liability is limited to the minimum amount permitted by applicable law.
      </P>

      <H2>Termination</H2>
      <P>
        The Service Provider may suspend or terminate your access to the Application if you violate
        these Terms or applicable law. You may stop using the Application, and remove all its local
        data, at any time by uninstalling it.
      </P>

      <H2>Governing Law and Jurisdiction</H2>
      <P>
        These Terms and Conditions are governed by the laws of the jurisdiction in which the Service
        Provider is established, excluding conflict of law rules, except to the extent mandatory
        consumer protection laws provide otherwise. Any dispute arising out of or relating to these
        Terms will be brought before the courts that have jurisdiction under applicable law.
      </P>

      <H2>Apple App Store Additional Terms</H2>
      <P>
        If you downloaded the Application from Apple's App Store, the following additional terms
        apply, as required by Apple:
      </P>
      <UL
        items={[
          'These Terms are between you and the Service Provider only, not with Apple, and Apple is not responsible for the Application or its content',
          "The license granted to you is limited to a non-transferable license to use the Application on any Apple-branded product that you own or control, as permitted by the App Store's Usage Rules",
          'Apple has no obligation whatsoever to furnish any maintenance or support services for the Application',
          "To the maximum extent permitted by applicable law, Apple has no warranty obligation whatsoever with respect to the Application, and any claims relating to a failure to conform to any warranty are the Service Provider's sole responsibility",
          'Apple is not responsible for addressing any claims by you or any third party relating to the Application, including product liability claims and claims under consumer protection legislation',
          "Apple and Apple's subsidiaries are third-party beneficiaries of these Terms, and Apple has the right to enforce these Terms against you as a third-party beneficiary"
        ]}
      />

      <H2>Severability</H2>
      <P>
        If any provision of these Terms and Conditions is held to be invalid, illegal, or
        unenforceable, such provision shall be modified to the minimum extent necessary to make it
        valid and enforceable, and the remaining provisions shall remain in full force and effect.
      </P>

      <H2>Entire Agreement</H2>
      <P>
        These Terms and Conditions, together with the Privacy Policy, constitute the entire
        agreement between you and the Service Provider concerning your use of the Application.
      </P>

      <H2>Changes to These Terms and Conditions</H2>
      <P>
        The Service Provider may periodically update these Terms and Conditions. Material changes
        will be posted here with an updated effective date.
      </P>

      <H2>Contact Us</H2>
      <P>
        If you have any questions about these Terms and Conditions, please contact the Service
        Provider at ishanlahiru2002@gmail.com.
      </P>
    </LegalPageLayout>
  );
};

export default TheravadaChantsTermsPage;
