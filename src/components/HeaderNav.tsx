import React, { useState } from 'react';
import { Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
import { sfx } from './AudioSystem';

interface HeaderNavProps {
  muted: boolean;
  onToggleMute: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ muted, onToggleMute }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    sfx.playSelect();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  return (
    <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-3 sm:px-8 py-2.5 sm:py-6 w-full pointer-events-auto">
      {/* Top Left Gothic & Cyber Bar Glyphs */}
      <div className="flex items-center gap-2 sm:gap-3 text-[#00FFC2]">
        <div className="flex items-center gap-1">
          <div className="w-1 sm:w-1.5 h-4 sm:h-6 bg-[#00FFC2] rounded-xs shadow-[0_0_10px_#00FFC2]" />
          <div className="w-1 sm:w-1.5 h-4 sm:h-6 bg-[#00FFC2] rounded-xs shadow-[0_0_10px_#00FFC2]" />
          <div className="w-1 sm:w-1.5 h-4 sm:h-6 bg-[#00FFC2] rounded-xs shadow-[0_0_10px_#00FFC2]" />
        </div>
        <span data-fuser-slot-id="section-text-d5728ee8" className="font-mono text-[10px] sm:text-xs text-[#121514] font-bold tracking-widest uppercase bg-[#00FFC2] px-1.5 sm:px-2 py-0.5 rounded-sm">
          KROW8 CO. // SYSTEM v2.0
        </span>
      </div>

      {/* Top Right Controls (Mute & Fullscreen) */}
      <div className="flex items-center gap-2 sm:gap-3 text-[#00FFC2]">
        <button
          onClick={onToggleMute}
          onMouseEnter={() => sfx.playHover()}
          className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#00FFC2]/40 hover:border-[#00FFC2] bg-[#0C0E0D]/90 hover:bg-[#00FFC2]/20 text-[#00FFC2] transition-all duration-200 focus:outline-none cursor-pointer flex items-center gap-2 group backdrop-blur-md shadow-[0_0_15px_rgba(0,255,194,0.15)]"
          title={muted ? 'Unmute Audio' : 'Mute Audio'}>
          
          {muted ?
          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100" /> :

          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
          }
        </button>

        <button
          onClick={toggleFullscreen}
          onMouseEnter={() => sfx.playHover()}
          className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#00FFC2]/40 hover:border-[#00FFC2] bg-[#0C0E0D]/90 hover:bg-[#00FFC2]/20 text-[#00FFC2] transition-all duration-200 focus:outline-none cursor-pointer group backdrop-blur-md shadow-[0_0_15px_rgba(0,255,194,0.15)]"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}>
          
          {isFullscreen ?
          <Minimize className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100" /> :

          <Maximize className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100" />
          }
        </button>
      </div>
    </div>);

};