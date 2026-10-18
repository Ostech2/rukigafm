import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ProgrammesShowcase } from '../components/home/ProgrammesShowcase';
import { PresentersSection } from '../components/home/PresentersSection';
import { NewsSection } from '../components/home/NewsSection';
import { PodcastsSection } from '../components/home/PodcastsSection';
import { ListenerInteractionSection } from '../components/home/ListenerInteractionSection';
import { AdvertisingBanner } from '../components/home/AdvertisingBanner';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Official Programmes */}
      <ProgrammesShowcase />

      {/* 3. Presenter Profiles */}
      <PresentersSection />

      {/* 4. News & Entertainment */}
      <NewsSection />

      {/* 5. Podcasts & Recorded Shows */}
      <PodcastsSection />

      {/* 6. Listener Interaction (Song Requests & Poll) */}
      <ListenerInteractionSection />

      {/* 7. Advertising & Partnerships */}
      <AdvertisingBanner />
    </div>
  );
};
