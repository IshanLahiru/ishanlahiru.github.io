import React from 'react';
import ProjectPageLayout from '../../../components/project-page-layout/projectPageLayout';

const techStack = [
  'Flutter',
  'Flame',
  'Firebase Auth',
  'Cloud Firestore',
  'Realtime Database',
  'Cloud Functions',
  'WebRTC',
  'RevenueCat',
  'Google Mobile Ads'
];

const OmiClashPage: React.FC = () => {
  return (
    <ProjectPageLayout
      title="Omi Clash"
      icon="/projects/omi-clash/icon.png"
      status="🚧 In Active Development"
      description="A 4-player trick-taking card game (Omi), played in teams of two with trump calls, Court calls, and Kapoothi. Play against friends or bots at a shared table, chat 1:1 with friends or with everyone at the table, talk live over table voice chat, and climb the global and country leaderboards."
      techStack={techStack}
      liveDemo
      footerLinks={[
        { to: '/projects/omi-clash/support', label: 'Support' },
        { to: '/projects/omi-clash/community', label: 'Community' },
        { to: '/projects/omi-clash/privacy-policy', label: 'Privacy Policy' },
        { to: '/projects/omi-clash/terms', label: 'Terms & Conditions' }
      ]}
    />
  );
};

export default OmiClashPage;
