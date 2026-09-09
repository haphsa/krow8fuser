import React, { useState, useEffect } from 'react';
import { FeedItem } from './Data';

interface BackgroundViewportProps {
  currentFeed: FeedItem;
  isPlaying: boolean;
}

export const BackgroundViewport: React.FC<BackgroundViewportProps> = ({
  currentFeed,
  isPlaying
}) => {
  const [timestamp, setTimestamp] = useState('00:14:28');
  const [fps, setFps] = useState('60.0');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      const secs = String(now.getSeconds()).padStart(2, '0');
      const ms = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
      setTimestamp(`${hrs}:${mins}:${secs}.${ms}`);

      // Slight natural variation in FPS
      const simulatedFps = (59.8 + Math.random() * 0.4).toFixed(1);
      setFps(simulatedFps);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#080A0B] select-none pointer-events-none">
      {/* Background Factory Process Stream Visual with Zoom/Pan Motion */}
      <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
        {currentFeed.videoUrl ? (
          <video
            key={`video-${currentFeed.id}`}
            src={currentFeed.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className={`h-full w-full object-cover object-center filter contrast-125 brightness-90 transition-all duration-1000 transform ${
              isPlaying ? 'scale-105 transition-transform duration-[10000ms]' : 'scale-100'
            }`}
          />
        ) : (
          <img
            key={`image-${currentFeed.id}`}
            src={currentFeed.imgUrl}
            alt={currentFeed.title}
            className={`h-full w-full object-cover object-center filter contrast-125 brightness-90 transition-all duration-1000 transform ${
              isPlaying ? 'scale-105 transition-transform duration-[10000ms]' : 'scale-100'
            }`}
          />
        )}
      </div>

      {/* Cyber/Tactical Cyan Ambient Light Leaks */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#00FFC2]/15 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-12 left-1/3 w-[300px] h-[300px] bg-[#00E5FF]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Dark Tactical Vignette Overlays for High Contrast Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080A0B] via-[#080A0B]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080A0B]/95 via-[#080A0B]/60 to-[#080A0B]/80" />

      {/* High-Tech Tactical Grid & Target HUD Backdrop Graphic */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 w-80 sm:w-96 h-[400px] opacity-20 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 300 300" fill="none" className="aim-drift w-full h-full text-red-600 filter drop-shadow-[0_0_12px_#DC2626]">
          <circle cx="150" cy="150" r="130" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
          <circle cx="150" cy="150" r="90" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="150" cy="150" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="150" y1="10" x2="150" y2="290" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="10" y1="150" x2="290" y2="150" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          <rect x="130" y="130" width="40" height="40" stroke="currentColor" strokeWidth="2.5" fill="none" />
        </svg>
      </div>

      {/* Technical Loading Stream Telemetry Watermark */}
      <div data-fuser-slot-id="section-text-c8ea8fe4" className="absolute right-6 top-1/3 font-mono text-[10px] sm:text-xs text-[#00FFC2]/40 tracking-[0.3em] uppercase rotate-90 origin-top-right select-none pointer-events-none hidden md:block">
        THREAD CO. 2025 // AUTOMATED MANUFACTURING MATRIX // STREAM 0{currentFeed.id}
      </div>

      {/* CRT Scanlines Overlay */}
      <div className="scanlines absolute inset-0 opacity-25 pointer-events-none" />

      {/* Camera Live HUD Watermark Overlay */}
      <div className="absolute top-2.5 sm:top-5 left-1/2 -translate-x-1/2 text-[9px] sm:text-xs font-mono tracking-widest text-[#00FFC2] flex items-center gap-1.5 sm:gap-3 bg-[#0A0D0F]/90 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#00FFC2]/40 shadow-[0_0_15px_rgba(0,255,194,0.25)] backdrop-blur-md max-w-[85vw] truncate">
        <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00FFC2] animate-pulse shadow-[0_0_8px_#00FFC2] shrink-0" />
        <span data-fuser-slot-id="section-text-60a228d7" className="truncate">FEED: {currentFeed.code}</span>
        <span className="text-[#EAEFEA]/40">|</span>
        <span data-fuser-slot-id="section-text-4cd6a5e7" className="truncate">REC {timestamp}</span>
        <span className="text-[#EAEFEA]/40 hidden xs:inline">|</span>
        <span data-fuser-slot-id="section-text-30da1bec" className="hidden xs:inline">{fps} FPS</span>
      </div>

      {/* Cyber HUD Corner Brackets */}
      <div className="absolute top-3 left-3 sm:top-6 sm:left-6 w-4 h-4 sm:w-10 sm:h-10 border-t-2 border-l-2 border-[#00FFC2]/50 shadow-[0_0_10px_rgba(0,255,194,0.25)]" />
      <div className="absolute top-3 right-3 sm:top-6 sm:right-6 w-4 h-4 sm:w-10 sm:h-10 border-t-2 border-r-2 border-[#00FFC2]/50 shadow-[0_0_10px_rgba(0,255,194,0.25)]" />
      {/* <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 w-4 h-4 sm:w-10 sm:h-10 border-b-2 border-l-2 border-[#00FFC2]/50 shadow-[0_0_10px_rgba(0,255,194,0.25)]" /> */}
      <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 w-4 h-4 sm:w-10 sm:h-10 border-b-2 border-r-2 border-[#00FFC2]/50 shadow-[0_0_10px_rgba(0,255,194,0.25)]" />
    </div>
  );
};
