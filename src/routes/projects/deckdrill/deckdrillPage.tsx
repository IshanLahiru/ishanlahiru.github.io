import React from 'react';
import ProjectPageLayout from '../../../components/project-page-layout/projectPageLayout';

const techStack = ['Flutter', 'Riverpod'];

const screenshots = [
  {
    src: '/projects/deckdrill/screenshot-start.png',
    webp: '/projects/deckdrill/screenshot-start.webp',
    alt: 'DeckDrill start screen'
  },
  {
    src: '/projects/deckdrill/screenshot-gameplay.png',
    webp: '/projects/deckdrill/screenshot-gameplay.webp',
    alt: 'DeckDrill gameplay with hint and running count'
  },
  {
    src: '/projects/deckdrill/screenshot-strategy-chart.png',
    webp: '/projects/deckdrill/screenshot-strategy-chart.webp',
    alt: 'DeckDrill basic strategy chart'
  },
  {
    src: '/projects/deckdrill/screenshot-count-chart.png',
    webp: '/projects/deckdrill/screenshot-count-chart.webp',
    alt: 'DeckDrill count chart explainer'
  },
  {
    src: '/projects/deckdrill/screenshot-settings.png',
    webp: '/projects/deckdrill/screenshot-settings.webp',
    alt: 'DeckDrill settings and house rules'
  }
];

const DeckDrillPage: React.FC = () => {
  return (
    <ProjectPageLayout
      title="DeckDrill"
      icon="/projects/deckdrill/icon.png"
      status="🚧 In Active Development"
      description="A card counting and training simulator application. DeckDrill is a Blackjack Training & Simulation App built to help players learn basic strategy and practice card counting."
      techStack={techStack}
      screenshots={screenshots}
      liveDemo
      footerLinks={[
        { to: '/projects/deckdrill/support', label: 'Support' },
        { to: '/projects/deckdrill/privacy-policy', label: 'Privacy Policy' },
        { to: '/projects/deckdrill/terms', label: 'Terms & Conditions' }
      ]}
    />
  );
};

export default DeckDrillPage;
