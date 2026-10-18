import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { PlayerProvider } from './context/PlayerContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LiveRadioPlayer } from './components/player/LiveRadioPlayer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgrammesPage } from './pages/ProgrammesPage';
import { PresentersPage } from './pages/PresentersPage';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { PodcastsPage } from './pages/PodcastsPage';
import { AdvertisingPage } from './pages/AdvertisingPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <PlayerProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-background-primary text-text-primary relative selection:bg-brand-red selection:text-white">
          {/* Top Sticky Navigation */}
          <Navbar />

          {/* Main Router Outlet */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programmes" element={<ProgrammesPage />} />
              <Route path="/presenters" element={<PresentersPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:slug" element={<NewsDetailPage />} />
              <Route path="/podcasts" element={<PodcastsPage />} />
              <Route path="/advertising" element={<AdvertisingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Fallback route */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Floating WhatsApp Action Button */}
          <WhatsAppButton />

          {/* Docked Live Radio Audio Player */}
          <LiveRadioPlayer />

          {/* Polished Station Footer */}
          <Footer />
        </div>
      </Router>
    </PlayerProvider>
  );
};

export default App;
