import React from 'react';
import ProjectPageLayout from '../../../components/project-page-layout/projectPageLayout';

const techStack = [
  'Flutter',
  'Cloud Firestore',
  'Cloud Storage',
  'Firebase Auth',
  'RevenueCat',
  'Google Fonts'
];

const TheravadaChantsPage: React.FC = () => {
  return (
    <ProjectPageLayout
      title="Theravāda Chants"
      icon="/projects/theravada-chants/icon.png"
      status="✅ Live on the App Store · 🧪 Testing on Google Play"
      appStoreUrl="https://apps.apple.com/lk/app/therav%C4%81da-chants/id6806461385"
      description="A Pali chanting companion for Theravāda Buddhist practice — a curated library of chants with English translations, reading lists suggested by precept level (Pansil, Atasil, Dasasil), a guided 'Simple Buddhist Paying' ceremony walkthrough, and a Pali pronunciation guide covering vowel length, retroflex consonants, and the niggahīta. Free to use in full, with an optional purchase to support ongoing development."
      techStack={techStack}
      footerLinks={[
        { to: '/projects/theravada-chants/support', label: 'Support' },
        { to: '/projects/theravada-chants/privacy-policy', label: 'Privacy Policy' },
        { to: '/projects/theravada-chants/terms', label: 'Terms & Conditions' }
      ]}
    />
  );
};

export default TheravadaChantsPage;
