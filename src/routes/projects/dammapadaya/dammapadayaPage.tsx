import React from 'react';
import ProjectPageLayout from '../../../components/project-page-layout/projectPageLayout';

const techStack = ['Flutter', 'Cloud Firestore', 'Firebase', 'Google Fonts'];

const DammapadayaPage: React.FC = () => {
  return (
    <ProjectPageLayout
      title="Dammapadaya"
      icon="/projects/dammapadaya/icon.png"
      path="/projects/dammapadaya"
      status="🚧 In Active Development"
      description="A daily-reading companion for the Dhammapada — the complete text, all 423 verses across its 26 traditional chapters (vaggas), in the original Pāli alongside a plain-English rendering of each verse's meaning. A rotating 'today's verse' opens the app, and the full text is browsable by chapter or searchable by verse, theme, or wording. Free, with no account, no ads, and no purchases."
      techStack={techStack}
      footerLinks={[
        { to: '/projects/dammapadaya/support', label: 'Support' },
        { to: '/projects/dammapadaya/privacy-policy', label: 'Privacy Policy' },
        { to: '/projects/dammapadaya/terms', label: 'Terms & Conditions' }
      ]}
    />
  );
};

export default DammapadayaPage;
