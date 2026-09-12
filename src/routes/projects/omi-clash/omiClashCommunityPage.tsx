import React from 'react';
import { Link } from 'react-router-dom';
import OmiClashLegalLayout, { ContactCard, inlineLinkClass } from '../../../components/omi-clash/legalLayout';

const SUPPORT_EMAIL = 'support.ishanvithanage@gmail.com';

const OmiClashCommunityPage: React.FC = () => {
  return (
    <OmiClashLegalLayout title="Omi Clash Community" backTo="/projects/omi-clash" backLabel="Back to Omi Clash">
      <p className="mb-2 text-sm leading-relaxed text-slate-400">
        There's no dedicated social channel for Omi Clash yet — this page is the place to reach the
        team directly in the meantime, whether that's a question, a bug, an idea, or just a hello.
      </p>

      <ContactCard label="Get in Touch">
        Email{' '}
        <a className={inlineLinkClass} href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{' '}
        with feedback, feature ideas, or anything you'd like to see change about the game. Every
        message gets read.
      </ContactCard>

      <ContactCard label="Found a Bug, or Need Help?">
        That's handled on the{' '}
        <Link to="/projects/omi-clash/support" className={inlineLinkClass}>
          Support page
        </Link>{' '}
        instead — it covers common questions and the same contact email for anything else.
      </ContactCard>

      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs font-medium">
        <Link to="/projects/omi-clash/privacy-policy" className={inlineLinkClass}>
          Privacy Policy
        </Link>
        <Link to="/projects/omi-clash/terms" className={inlineLinkClass}>
          Terms &amp; Conditions
        </Link>
      </div>
    </OmiClashLegalLayout>
  );
};

export default OmiClashCommunityPage;
