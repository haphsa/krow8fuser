import React from 'react';
import { MENU_ITEMS, MenuItem } from './Data';
import { sfx } from './AudioSystem';

interface MenuSidebarProps {
  activeMenuId: string;
  onSelectMenu: (item: MenuItem) => void;
}

export const MenuSidebar: React.FC<MenuSidebarProps> = ({
  activeMenuId,
  onSelectMenu
}) => {
  return (
    <div className="absolute left-0 top-1/2 z-20 flex w-full max-w-lg -translate-y-1/2 flex-col justify-center px-4 py-1 pointer-events-auto sm:px-10 sm:py-2 md:px-12">
      {/* Game Title - "BUILT THREAD BY THREAD" */}
      <div className="mb-1.5 sm:mb-3 flex flex-col tracking-tight leading-none relative">
        <h1 data-fuser-slot-id="section-title-165f85af" className="font-display italic font-black text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-white uppercase select-none tracking-tighter drop-shadow-[0_0_12px_rgba(0,255,194,0.25)]">
          krow8
        </h1>
        <h1 data-fuser-slot-id="section-title-ba93c014" className="font-display italic font-black text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-white uppercase select-none tracking-tighter drop-shadow-[0_0_12px_rgba(0,255,194,0.25)]">
         INDUSTRIES
        </h1>
       
      </div>

      {/* Subtitle in High-Contrast Tactical Cyber Styling */}
      <div className="mb-2 sm:mb-5 font-mono text-[10px] sm:text-xs tracking-widest text-[#EAEFEA]/90 font-bold uppercase leading-relaxed max-w-xs sm:max-w-sm border-l-2 border-[#00FFC2] pl-2 sm:pl-3 py-0.5">
        <span data-fuser-slot-id="section-text-0b6c9533" className="text-black bg-[#00FFC2] px-1 sm:px-1.5 py-0.5 rounded-xs mr-1.5 sm:mr-2 font-mono text-[9px] sm:text-[10px] font-bold">
         PAKISTAN BASED
        </span>
        CLOTHING MANUFACTURING
        <br />
        <span data-fuser-slot-id="section-text-4213a3f2" className="text-[#00FFC2] font-extrabold">CRAFTED WITH PRECISION.</span>
      </div>

      {/* Interactive Loading Menu Options */}
      <div className="flex w-full max-w-[20rem] flex-col gap-2 sm:max-w-md sm:gap-2.5">
        {MENU_ITEMS.map((item) => {
          const isActive = item.id === activeMenuId;

          return (
            <button
              key={item.id}
              onClick={() => {
                sfx.playSelect();
                onSelectMenu(item);
              }}
              onMouseEnter={() => sfx.playHover()}
              className={`group relative flex min-h-10 items-center justify-between rounded-full px-4 py-2 text-left transition-all duration-300 cursor-pointer focus:outline-none sm:px-4 sm:py-3 ${
              isActive ?
              'border-2 border-[#00FFC2] bg-[#0A0D0F] text-[#00FFC2] shadow-[0_0_20px_rgba(0,255,194,0.35)] scale-[1.01] sm:scale-[1.02]' :
              'border border-[#00FFC2]/20 hover:border-[#00FFC2] bg-[#0A0D0F]/80 text-[#EAEFEA] hover:text-[#00FFC2] backdrop-blur-md'}`
              }>
              
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                {/* Crosshair / Reticle Icon */}
                <svg
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-all duration-300 ${
                  isActive ?
                  'text-[#00FFC2] rotate-90 scale-110' :
                  'text-[#00FFC2]/60 group-hover:text-[#00FFC2] group-hover:rotate-45'}`
                  }
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2">
                  
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <circle cx="12" cy="12" r="6" />
                </svg>

                {/* Menu Label */}
                <span
                  data-fuser-slot-id={{ "services": "section-text-9c0cd7e7", "collections": "section-text-7fff61ca", "about": "section-text-9a2a2fdc", "sustainability": "section-text-3dcc310a", "contact": "section-text-734e7922", "tracking": "section-text-tracking" }[item.id]}






                  className="font-tech text-sm sm:text-base font-bold tracking-wider uppercase">
                  
                  {item.label}
                </span>
              </div>

              {/* Animated Equalizer Waveform Graphic on Active Item */}
              {isActive &&
              <div className="flex items-center gap-1 h-3.5 px-2">
                  <span className="w-1 bg-[#00FFC2] rounded-xs equalizer-bar-1" />
                  <span className="w-1 bg-[#00FFC2] rounded-xs equalizer-bar-2" />
                  <span className="w-1 bg-[#00FFC2] rounded-xs equalizer-bar-3" />
                  <span className="w-1 bg-[#00FFC2] rounded-xs equalizer-bar-4" />
                </div>
              }
            </button>);

        })}
      </div>
    </div>);

};