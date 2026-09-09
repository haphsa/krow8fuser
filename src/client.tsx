import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { FACTORY_FEEDS, FeedItem, MENU_ITEMS, MenuItem } from './components/Data';
import { BackgroundViewport } from './components/BackgroundViewport';
import { HeaderNav } from './components/HeaderNav';
import { MenuSidebar } from './components/MenuSidebar';
import { FeedSelector } from './components/FeedSelector';
import { InteractiveHudModal } from './components/InteractiveHudModal';
import { TrackOrderModal } from './components/TrackOrderModal';
import { GarmentCarouselPage } from './components/GarmentCarouselPage';
import { sfx } from './components/AudioSystem';

function LoadingMenuApp() {
  const [currentFeed, setCurrentFeed] = useState<FeedItem>(FACTORY_FEEDS[0]);
  const [activeMenuId, setActiveMenuId] = useState<string>('process');
  const [activeModalItem, setActiveModalItem] = useState<MenuItem | null>(null);
  const [showProjects, setShowProjects] = useState<boolean>(false);
  const [showTrackOrder, setShowTrackOrder] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(false);

  const handleToggleMute = () => {
    sfx.enabled = muted; // Toggling sound
    setMuted(!muted);
    if (muted) {
      sfx.playSelect();
    }
  };

  const handleSelectMenu = (item: MenuItem) => {
    setShowTrackOrder(false);
    setActiveMenuId(item.id);
    if (item.id === 'collections') {
      setActiveModalItem(null);
      setShowProjects(true);
      return;
    }
    setShowProjects(false);
    setActiveModalItem(item);
  };

  if (showProjects) {
    return (
      <>
        <GarmentCarouselPage
          onBack={() => setShowProjects(false)}
          onRequestQuote={() => {
            setActiveMenuId('contact');
            setActiveModalItem(MENU_ITEMS.find((item) => item.id === 'contact') || null);
          }} />
        <InteractiveHudModal
          item={activeModalItem}
          onClose={() => setActiveModalItem(null)}
        />
      </>
    );
  }

  return (
    <div className="relative h-screen h-[100dvh] min-h-0 w-full overflow-hidden bg-[#080A0B] text-[#EAEFEA] select-none font-sans">
      {/* Dynamic Background Video/Image Stream Viewport */}
      <BackgroundViewport currentFeed={currentFeed} isPlaying={true} />

      {/* Top Header Navigation (Glyphs & Audio/Fullscreen Toggles) */}
      <HeaderNav muted={muted} onToggleMute={handleToggleMute} />

      {/* Central Left Game Menu Sidebar */}
      <MenuSidebar
        activeMenuId={activeMenuId}
        onSelectMenu={handleSelectMenu}
        onTrackOrder={() => setShowTrackOrder(true)}
      />

      {/* Bottom Process Stream Thumbnails Bar & Timeline Slider */}
      <FeedSelector
        currentFeed={currentFeed}
        onSelectFeed={(feed) => setCurrentFeed(feed)}
      />

      {/* Interactive Detail HUD Modal for Menu Items */}
      <InteractiveHudModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
      />
      <TrackOrderModal
        isOpen={showTrackOrder}
        onClose={() => setShowTrackOrder(false)}
      />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<LoadingMenuApp />);
