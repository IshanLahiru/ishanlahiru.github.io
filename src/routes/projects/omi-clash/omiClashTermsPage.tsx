import React from 'react';
import LegalPageLayout, { H2, P, UL } from '../../../components/legal-page-layout/legalPageLayout';

const OmiClashTermsPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="Omi Clash Terms & Conditions"
      effectiveDate="2026-07-29"
      backTo="/projects/omi-clash"
      backLabel="Back to Omi Clash"
    >
      <P>
        These terms and conditions apply to the Omi Clash app for mobile devices, together with any
        related services operated by Ishan Lahiru Sampath Kekulandala Vithanage (collectively, the
        "Application"). Ishan Lahiru Sampath Kekulandala Vithanage is hereby referred to as the
        "Service Provider".
      </P>
      <P>
        By downloading or using the Application, you agree to these Terms and Conditions. You should
        read them carefully before using the Application.
      </P>

      <H2>Age Requirement</H2>
      <P>
        You must be at least 16 years of age to use the Application. The Application does not offer
        any means for a parent or guardian to consent on behalf of a younger user; if you are below
        16, you may not use the Application.
      </P>

      <H2>License to use the Application</H2>
      <P>
        Subject to your compliance with these Terms, the Service Provider grants you a limited,
        non-exclusive, non-transferable, revocable license to install and use the Application on a
        mobile device that you own or control, for personal, non-commercial purposes, as permitted
        by the usage rules of the applicable app store. You may not reproduce, distribute, modify,
        create derivative works from, reverse engineer, decompile, or disassemble the Application,
        except as and only to the extent that such activity is expressly permitted by applicable
        law.
      </P>

      <H2>Intellectual Property</H2>
      <P>
        The Service Provider retains all intellectual property rights in the Application, including
        its code, design, trademarks, service marks, trade names, logos, and branding (the "IP").
        Nothing in these Terms grants you any license or right to use the Service Provider's
        trademarks, logos, or branding for any purpose. You agree not to remove, alter, or obscure
        any copyright, trademark, or other proprietary notices displayed in or on the Application.
        Unauthorized copying, modification, reverse engineering, or creation of derivative versions
        of the Application is strictly prohibited.
      </P>

      <H2>Termination</H2>
      <P>
        The Service Provider may suspend your access to the Application or services if you
        materially breach these Terms. The Service Provider will provide you with written notice of
        the breach and, where the breach is capable of cure, you will have 14 days from receipt of
        notice to remedy the breach. If you fail to cure the breach within that period, the Service
        Provider may terminate your access.
      </P>
      <P>
        The Service Provider may suspend or terminate your access immediately without notice if you
        violate applicable law, infringe intellectual property rights, or engage in activity that
        could cause harm to other users or the Service Provider. Upon termination, your right to use
        the Application will end and you must delete all copies from your devices.
      </P>

      <H2>Subscriptions and Purchases</H2>
      <P>
        The Application offers an optional auto-renewing subscription, "Omi Clash Pro", and optional
        one-time purchases of in-app currency ("token cards"). Subscription pricing, billing period,
        and any free-trial or introductory-price terms are shown to you before purchase, at the
        point of sale within the Application.
      </P>
      <P>
        <strong>Token cards, and every token won or lost at the table, have no real-world monetary
        value.</strong> They cannot be redeemed, exchanged, transferred for value, or cashed out for
        real money, cryptocurrency, or any other item of value, whether from the Service Provider or
        from another player, and exist solely for use within the Application's games. Winning or
        losing tokens in a match has no effect outside the Application.
      </P>
      <UL
        items={[
          'Subscriptions automatically renew for the same period and price you agreed to at purchase, unless cancelled at least 24 hours before the end of the current period',
          'Payment is charged to your Apple ID or Google Play account at confirmation of purchase',
          'You can manage or cancel your subscription at any time through Settings → Manage subscription within the Application, or directly through your Apple ID or Google Play account settings',
          "The Service Provider does not process payments or store your payment details directly — all purchases are handled by Apple's App Store or Google Play, and by RevenueCat on the Service Provider's behalf",
          'Purchases can be restored on a new device or after a reinstall via Settings → Restore purchases, without being charged again for an active subscription'
        ]}
      />

      <H2>User-Generated Content and Acceptable Use</H2>
      <P>
        If this Application allows users to post, share, or upload content, you agree not to post
        content that:
      </P>
      <UL
        items={[
          'Is illegal or violates third-party intellectual property rights (copyright, trademark, patents)',
          'Is abusive, threatening, harassing, defamatory, or hate speech',
          'Contains discrimination or incitement to violence or illegal activity',
          'Is spam, phishing, or contains malware',
          'Violates the privacy or personal data rights of others',
          'Is misleading, false, or deceptive',
          'Contains explicit violence or sexual content (unless age-gated appropriately)'
        ]}
      />
      <P>The Service Provider reserves the right to:</P>
      <UL
        items={[
          'Remove or disable access to content that violates these guidelines',
          'Suspend or terminate accounts of users who repeatedly violate these guidelines',
          'Cooperate with law enforcement if illegal content is reported',
          'Moderate, filter, or hide content that violates these Terms, applicable law, or the guidelines set out above'
        ]}
      />
      <P>
        If you believe content violates these Terms, infringes your rights, or is unlawful, you may
        report it to the Service Provider at support.ishanvithanage@gmail.com. Where the Application
        provides such features, you may also report content, block other users, or mute
        notifications directly through the Application's interface.
      </P>
      <P>
        By submitting User-Generated Content you grant the Service Provider a non-exclusive,
        worldwide, royalty-free license to use, reproduce, distribute, prepare derivative works of,
        display and perform the content in connection with the Application and the Service
        Provider's business. You represent and warrant that you own or control all rights in the
        content you post and that use of the content does not violate these Terms or applicable law.
        Do not post personal data of others without their consent.
      </P>

      <H2>Disclaimers</H2>
      <P>
        The Application stores and processes personal data that you have provided to the Service
        Provider in order to provide the Service. It is your responsibility to maintain the security
        of your mobile device and access to the Application. The Service Provider strongly advises
        against jailbreaking or rooting your mobile device, which could expose it to malware and may
        result in the Application not functioning correctly or at all.
      </P>
      <P>
        Some functions of the Application require an active internet connection. The Service
        Provider cannot be held responsible if the Application does not function at full capacity
        due to lack of Wi-Fi access or exhausted mobile data. If you use the Application outside a
        Wi-Fi area, your mobile network provider's agreement terms still apply, and you accept
        responsibility for any resulting data or roaming charges.
      </P>
      <P>
        Nothing in these Terms shall limit any rights you have under applicable consumer protection
        laws that cannot be lawfully excluded.
      </P>

      <H2>Limitation of Liability</H2>
      <P>
        To the fullest extent permitted by law, the Service Provider shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages, including but not limited
        to lost profits, data loss, or business interruption, even if advised of the possibility of
        such damages.
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
        To the fullest extent permitted by law, the total liability of the Service Provider for any
        claim shall not exceed the amount paid by you to the Service Provider for the Application in
        the 12 months preceding the claim, or the minimum amount that must be paid under applicable
        law, whichever is greater. If the Application is provided free of charge, this means the
        Service Provider's liability is limited to the minimum amount permitted by applicable law.
      </P>

      <H2>Indemnification</H2>
      <P>
        To the fullest extent permitted by law, you agree to indemnify and hold harmless the Service
        Provider, its affiliates, officers, directors, employees and agents from and against any
        claims, liabilities, damages, losses and expenses, including reasonable legal fees, arising
        out of or directly related to your breach of these Terms or your intentional misuse of the
        Application, including User-Generated Content you submit in violation of these Terms.
      </P>
      <P>
        This indemnification does not apply to claims arising from the Service Provider's own
        negligence, breach of these Terms, or violation of applicable law. In jurisdictions where
        consumer indemnification is restricted by law, this clause shall be limited to the maximum
        extent permitted.
      </P>

      <H2>Governing Law and Jurisdiction</H2>
      <P>
        These Terms and Conditions are governed by the laws of the jurisdiction in which the Service
        Provider is established, excluding conflict of law rules, except to the extent mandatory
        consumer protection laws provide otherwise. Any dispute arising out of or relating to these
        Terms will be brought before the courts that have jurisdiction under applicable law.
      </P>

      <H2>DSA Compliance (Digital Services Act)</H2>
      <P>
        If the Application is an intermediary service as defined under the Digital Services Act
        (Regulation (EU) 2022/2065, "DSA"), the following provisions apply in addition to the terms
        above.
      </P>
      <P>
        <strong>Point of Contact:</strong> The Service Provider maintains a single point of contact
        for direct communication with EU authorities and recipients of the service, reachable at
        support.ishanvithanage@gmail.com, in accordance with Article 13 of the DSA.
      </P>
      <P>
        <strong>Content Moderation and Statement of Reasons:</strong> When the Service Provider
        restricts access to content, suspends or terminates an account, or otherwise limits the
        availability of the Application's features, a clear and specific statement of reasons will
        be provided to the affected user, in accordance with Article 17 of the DSA.
      </P>
      <P>
        <strong>Notice and Action:</strong> Users and third parties may submit notices of allegedly
        illegal content through the contact details provided in these Terms, in accordance with
        Article 16 of the DSA.
      </P>
      <P>
        <strong>Out-of-Court Dispute Settlement:</strong> Disputes regarding content moderation
        decisions may be submitted to an out-of-court dispute settlement body certified in
        accordance with Article 21 of the DSA, without affecting your right to seek judicial remedy
        under applicable law.
      </P>
      <P>
        <strong>Transparency Reporting:</strong> The Service Provider publishes periodic
        transparency reports covering content moderation activities, in accordance with Article 24
        of the DSA, made available upon request at support.ishanvithanage@gmail.com.
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
          'The Service Provider, not Apple, is solely responsible for the investigation, defense, settlement, and discharge of any third-party intellectual property infringement claim relating to the Application',
          'You represent and warrant that you are not located in a country subject to a U.S. Government embargo, and are not listed on any U.S. Government list of prohibited or restricted parties',
          "Apple and Apple's subsidiaries are third-party beneficiaries of these Terms, and Apple has the right to enforce these Terms against you as a third-party beneficiary"
        ]}
      />

      <H2>Severability</H2>
      <P>
        If any provision of these Terms and Conditions is held to be invalid, illegal, or
        unenforceable by a court of competent jurisdiction, such provision shall be modified to the
        minimum extent necessary to make it valid and enforceable, and the remaining provisions of
        these Terms shall remain in full force and effect.
      </P>

      <H2>Entire Agreement</H2>
      <P>
        These Terms and Conditions, together with the Privacy Policy, constitute the entire
        agreement between you and the Service Provider concerning your use of the Application,
        superseding any prior agreements or understandings.
      </P>

      <H2>Changes to These Terms and Conditions</H2>
      <P>
        The Service Provider may periodically update these Terms and Conditions. You are advised to
        review this page regularly for any changes, which will be posted here with an updated
        effective date.
      </P>

      <H2>Contact Us</H2>
      <P>
        If you have any questions or suggestions about the Terms and Conditions, please do not
        hesitate to contact the Service Provider at support.ishanvithanage@gmail.com.
      </P>
    </LegalPageLayout>
  );
};

export default OmiClashTermsPage;
