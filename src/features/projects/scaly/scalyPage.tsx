import React from 'react';
import ProjectPageLayout from '@shared/layouts/project-page/projectPageLayout';

const techStack = ['Flutter', 'Flame', 'Google Mobile Ads', 'Google UMP'];

const ScalyPage: React.FC = () => {
  return (
    <ProjectPageLayout
      title="Scaly"
      icon="/projects/scaly/icon.png"
      path="/projects/scaly"
      status="🚧 In Active Development"
      description="A 100-snake battle royale for iOS and Android. Drop into the arena with 99 computer-controlled rivals, eat glowing orbs to grow, cut opponents off so they crash into your body, and outrun a firewall zone that shrinks in five stages. The last snake alive wins. Matches run two to three minutes, with smooth drag-to-steer controls, double-tap-and-hold boosting, twelve skins, XP and levels, and a friendly winking mascot."
      techStack={techStack}
      footerLinks={[
        { to: '/projects/scaly/support', label: 'Support' },
        { to: '/projects/scaly/privacy-policy', label: 'Privacy Policy' },
        { to: '/projects/scaly/terms', label: 'Terms of Use (EULA)' }
      ]}
    />
  );
};

export default ScalyPage;
