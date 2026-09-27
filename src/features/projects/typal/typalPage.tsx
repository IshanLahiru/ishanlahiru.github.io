import React from 'react';
import ProjectPageLayout from '@shared/layouts/project-page/projectPageLayout';

const techStack = ['Swift', 'SwiftUI', 'UIKit', 'CryptoKit', 'SQLite', 'Foundation Models'];

const TypalPage: React.FC = () => {
  return (
    <ProjectPageLayout
      title="TyPâl"
      icon="/projects/typal/icon.png"
      path="/projects/typal"
      status="🛠️ In Development"
      description="A private iPhone keyboard that rewrites your messages in the right voice for each person you write to, with TyPâl AI or your own AI key. Private details are swapped out on your iPhone before anything is sent, and everything you store stays encrypted on your iPhone."
      techStack={techStack}
      footerLinks={[
        { to: '/projects/typal/support', label: 'Support' },
        { to: '/projects/typal/privacy-policy', label: 'Privacy Policy' },
        { to: '/projects/typal/terms', label: 'Terms of Use' }
      ]}
    />
  );
};

export default TypalPage;
