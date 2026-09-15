import React from 'react';
import ProjectPageLayout from '../../../components/project-page-layout/projectPageLayout';

const techStack = [
  'Flutter',
  'Flame',
  'Firebase Auth',
  'Cloud Firestore',
  'Firebase Storage',
  'Cloud Functions',
  'RevenueCat',
  'Google Mobile Ads',
  'Rive'
];

const DriftAndDirectPage: React.FC = () => {
  return (
    <ProjectPageLayout
      title="Drift & Direct"
      icon="/projects/drift-and-direct/icon.png"
      path="/projects/drift-and-direct"
      status="🧪 Testing on the App Store · 🧪 Testing on Google Play"
      description="A swiping-mechanism based mobile focus game, designed to help players relax and stay in the moment. Symbols fall down the screen and you swipe the correct direction for each one: watch where the yellow arrow drifts, and which way the green arrow points. Survive as long as you can, climb the global and country leaderboards, and recover with coins, a rewarded ad, or a hearts pack when you run out of lives."
      techStack={techStack}
      liveDemo
      footerLinks={[
        { to: '/projects/drift-and-direct/support', label: 'Support' },
        { to: '/projects/drift-and-direct/privacy-policy', label: 'Privacy Policy' },
        { to: '/projects/drift-and-direct/terms', label: 'Terms & Conditions' }
      ]}
    />
  );
};

export default DriftAndDirectPage;
