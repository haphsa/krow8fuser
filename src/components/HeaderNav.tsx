import React from 'react';
import { sfx } from './AudioSystem';

interface HeaderNavProps {
  muted: boolean;
  onToggleMute: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ muted, onToggleMute }) => {
  const instagramUrl = 'https://instagram.com';
  const whatsappUrl = 'https://wa.me/923129220763?text=' + encodeURIComponent('Hey! I\'m interested in your services.');

  return (
    <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-3 sm:px-8 py-2.5 sm:py-6 w-full pointer-events-auto">
      {/* Top Left Gothic & Cyber Bar Glyphs */}
      <div className="flex translate-y-1 items-center gap-2 text-[#00FFC2] sm:translate-y-3 sm:gap-3">
        <div className="flex items-center gap-1">
          <div className="w-1 sm:w-1.5 h-4 sm:h-6 bg-[#00FFC2] rounded-xs shadow-[0_0_10px_#00FFC2]" />
          <div className="w-1 sm:w-1.5 h-4 sm:h-6 bg-[#00FFC2] rounded-xs shadow-[0_0_10px_#00FFC2]" />
          <div className="w-1 sm:w-1.5 h-4 sm:h-6 bg-[#00FFC2] rounded-xs shadow-[0_0_10px_#00FFC2]" />
        </div>
        <span data-fuser-slot-id="section-text-d5728ee8" className="font-mono text-[10px] sm:text-xs text-[#121514] font-bold tracking-widest uppercase bg-[#00FFC2] px-1.5 sm:px-2 py-0.5 rounded-sm">
          WEBSITE DESGINED BY //{' '}
          <a
            href={'https://wa.me/923216422916?text=' + encodeURIComponent('Hey! I am interested in your web design & development services.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playSelect()}
            onMouseEnter={() => sfx.playHover()}
            className="text-red-600 underline decoration-red-600/70 underline-offset-2 transition-colors hover:text-red-800"
            aria-label="Chat with Hafsa on WhatsApp"
          >
            HAFSA
          </a>{' '}\\
        </span>
      </div>

      {/* Bottom Left Social Controls */}
      <div className="fixed bottom-3 left-3 z-30 flex items-center gap-2 text-[#00FFC2] sm:bottom-6 sm:left-8 sm:gap-3">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sfx.playSelect()}
          onMouseEnter={() => sfx.playHover()}
          className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#00FFC2]/40 hover:border-[#00FFC2] bg-[#0C0E0D]/90 hover:bg-[#00FFC2]/20 text-[#00FFC2] transition-all duration-200 focus:outline-none cursor-pointer flex items-center justify-center group backdrop-blur-md shadow-[0_0_15px_rgba(0,255,194,0.15)]"
          title="Instagram"
          aria-label="Instagram">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sfx.playSelect()}
          onMouseEnter={() => sfx.playHover()}
          className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-[#00FFC2]/40 hover:border-[#00FFC2] bg-[#0C0E0D]/90 hover:bg-[#00FFC2]/20 text-[#00FFC2] transition-all duration-200 focus:outline-none cursor-pointer flex items-center justify-center group backdrop-blur-md shadow-[0_0_15px_rgba(0,255,194,0.15)]"
          title="WhatsApp"
          aria-label="WhatsApp">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.285-.143-1.686-.832-1.947-.928-.261-.095-.451-.143-.641.143-.19.285-.736.928-.902 1.118-.166.19-.332.214-.618.071-.285-.143-1.205-.444-2.296-1.417-.849-.757-1.423-1.692-1.589-1.977-.166-.285-.018-.439.125-.581.128-.128.285-.332.428-.499.143-.166.19-.285.285-.476.095-.19.048-.356-.024-.499-.071-.143-.641-1.545-.878-2.103-.231-.544-.467-.47-.641-.479-.166-.009-.356-.01-.546-.01-.19 0-.499.071-.76.356-.261.285-.998.975-.998 2.38 0 1.403 1.022 2.758 1.164 2.948.143.19 2.012 3.073 4.876 4.223.681.273 1.213.437 1.628.536.684.163 1.306.14 1.798.068.549-.08 1.686-.689 1.924-1.354.238-.665.238-1.235.166-1.354-.071-.072-.261-.167-.546-.31z"/>
          </svg>
        </a>

      </div>
    </div>
  );
};