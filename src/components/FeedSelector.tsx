import React from 'react';
import { Play } from 'lucide-react';
import { FACTORY_FEEDS, FeedItem } from './Data';
import { sfx } from './AudioSystem';

interface FeedSelectorProps {
  currentFeed: FeedItem;
  onSelectFeed: (feed: FeedItem) => void;
}

export const FeedSelector: React.FC<FeedSelectorProps> = ({
  currentFeed,
  onSelectFeed
}) => {
  const activeIndex = FACTORY_FEEDS.findIndex((f) => f.id === currentFeed.id);

  return (
    <div className="relative z-20 w-full px-4 sm:px-8 pb-4 pt-2 flex flex-col gap-2 pointer-events-auto mt-auto">
      {/* 6 Video Process Stream Thumbnails Bar */}
      <div className="flex overflow-x-auto sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 w-full pb-1 sm:pb-0 scrollbar-none snap-x snap-mandatory">
        {FACTORY_FEEDS.map((feed) => {
          const isActive = feed.id === currentFeed.id;

          return (
            <div
              key={feed.id}
              onClick={() => {
                sfx.playSwitchFeed();
                onSelectFeed(feed);
              }}
              onMouseEnter={() => sfx.playHover()}
              className={`group relative flex-shrink-0 w-[115px] sm:w-auto aspect-video max-h-16 sm:max-h-24 rounded-lg sm:rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border snap-start ${
              isActive ?
              'border-2 border-[#00FFC2] shadow-[0_0_20px_rgba(0,255,194,0.45)] scale-[1.02] ring-1 ring-[#00FFC2]/50 bg-[#0A0D0F]' :
              'border-[#00FFC2]/20 hover:border-[#00FFC2]/70 bg-[#0A0D0F]/80 hover:scale-[1.01]'}`
              }>
              
              {/* Thumbnail Image */}
              <img
                data-fuser-slot-id={{ "1": "img-url-image-0ab3c07b", "2": "img-url-image-d24c51b0", "3": "img-url-image-e6474dd9", "4": "img-url-image-e8ded836", "5": "img-url-image-a862ba09", "6": "img-url-image-c4c4542c" }[feed.id]}









                src={feed.imgUrl}
                alt={feed.title}
                className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:brightness-100 transition-all duration-300" />
              

              {/* Dark Translucent Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-200" />

              {/* Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive ?
                  'bg-[#00FFC2] text-black shadow-[0_0_12px_#00FFC2]' :
                  'bg-black/75 text-[#00FFC2] group-hover:bg-[#00FFC2] group-hover:text-black'}`
                  }>
                  
                  <Play className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current translate-x-0.5" />
                </div>
              </div>

              {/* Camera Feed Code Badge */}
              <div
                data-fuser-slot-id={{ "1": "section-text-39cb610c", "2": "section-text-9970c756", "3": "section-text-acbb16d0", "4": "section-text-d58a15ae", "5": "section-text-029413fc", "6": "section-text-b805eeee" }[feed.id]}









                className="absolute top-1.5 left-2 text-[10px] font-mono tracking-wider font-bold text-[#00FFC2] bg-black/85 px-1.5 py-0.5 rounded border border-[#00FFC2]/40">
                
                {feed.code}
              </div>
            </div>);

        })}
      </div>

      {/* Bottom Timeline Progress Bar & Status Text */}
      <div className="flex flex-col gap-1.5 pt-0.5">
        {/* Timeline Line with Sliding Glow Node */}
        <div className="relative w-full h-[2px] bg-white/20 flex items-center justify-between my-1">
          {FACTORY_FEEDS.map((feed) =>
          <div
            key={feed.id}
            onClick={() => {
              sfx.playSwitchFeed();
              onSelectFeed(feed);
            }}
            className="relative cursor-pointer group flex flex-col items-center">
            
              {/* Step Marker Dot */}
              <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              feed.id === currentFeed.id ?
              'bg-[#00FFC2] scale-150 ring-4 ring-[#00FFC2]/30 shadow-[0_0_10px_#00FFC2]' :
              'bg-white/40 group-hover:bg-[#00FFC2]'}`
              } />
            
            </div>
          )}

          {/* Active Sliding Glowing Indicator Line */}
          <div
            className="absolute top-0 left-0 h-[2px] bg-[#00FFC2] shadow-[0_0_12px_#00FFC2] transition-all duration-500 ease-out"
            style={{
              width: `${activeIndex / (FACTORY_FEEDS.length - 1) * 100}%`
            }} />
          
        </div>

        {/* Bottom Numbers & Status Label */}
        <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono tracking-widest text-[#EAEFEA]/90 font-bold">
          <div className="flex items-center gap-1.5 sm:gap-3 overflow-hidden">
            <span className="text-[#00FFC2] bg-black/80 px-1.5 sm:px-2 py-0.5 rounded border border-[#00FFC2]/40 shadow-sm shrink-0">
              01
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#EAEFEA] truncate">
              <span data-fuser-slot-id="section-text-0230bf73" className="font-bold text-[#00FFC2] bg-black/80 px-1 sm:px-1.5 py-0.5 rounded border border-[#00FFC2]/30 text-[9px] sm:text-xs shrink-0">
                REC
              </span>
              <span
                data-fuser-slot-id="section-text-15e75e7a"
                className="text-[10px] sm:text-xs uppercase tracking-wider text-[#EAEFEA]/90 font-bold truncate max-w-[150px] xs:max-w-[220px] sm:max-w-none">
                
                MANUFACTURING FEED ({currentFeed.code}: {currentFeed.title})
              </span>
            </div>
          </div>

          <span className="text-[#00FFC2] bg-black/80 px-1.5 sm:px-2 py-0.5 rounded border border-[#00FFC2]/40 shadow-sm shrink-0">
            06
          </span>
        </div>
      </div>
    </div>);

};