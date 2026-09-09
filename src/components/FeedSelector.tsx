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
  const visibleFeeds = FACTORY_FEEDS.slice(0, 4);
  const activeIndex = visibleFeeds.findIndex((f) => f.id === currentFeed.id);

  return (
    <div className="absolute inset-y-0 right-0 z-20 flex h-full w-[190px] flex-col gap-2 px-3 py-3 pointer-events-auto xs:w-[220px] sm:w-[250px] sm:px-4 md:w-[270px] md:px-5">
      <div className="flex shrink-0 items-center justify-between px-1 text-[10px] font-mono font-bold tracking-widest text-white/90 sm:text-xs">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex shrink-0 items-center gap-1 rounded border border-white/80 bg-white/95 px-2 py-0.5 text-[9px] text-black shadow-[0_0_12px_rgba(255,255,255,0.5)]">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            REC
          </span>
          <span className="truncate text-[10px] font-bold tracking-wider text-white sm:text-xs">PROCESS MATRIX</span>
        </div>
        <span className="shrink-0 rounded border border-white/20 bg-black/80 px-1.5 py-0.5 text-[9px] text-[#7DD3FC]">{currentFeed.code}</span>
      </div>

      <div className="relative flex min-h-0 flex-1 gap-3 overflow-y-auto pr-1 scrollbar-none">
        <div className="flex min-w-0 flex-1 flex-col gap-5 py-1">
          <div className="flex items-center gap-2 border-b border-white/15 pb-1 font-mono text-[9px] text-slate-300/80">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            [START // MATRIX STREAM]
          </div>
        {visibleFeeds.map((feed) => {
          const isActive = feed.id === currentFeed.id;

          return (
            <div
              key={feed.id}
              onClick={() => {
                sfx.playSwitchFeed();
                onSelectFeed(feed);
              }}
              onMouseEnter={() => sfx.playHover()}
              className={`group relative aspect-video w-full shrink-0 overflow-hidden rounded-lg border cursor-pointer transition-all duration-300 ${
              isActive ?
                'border-2 border-white shadow-[0_0_22px_rgba(255,255,255,0.4)] ring-2 ring-white/90 outline outline-1 outline-white bg-[#0A0D0F]' :
                'border border-white/20 bg-[#0A0D0F]/80 opacity-75 hover:border-white/60 hover:opacity-100'}`
              }>
              
              {/* Thumbnail Video/Image */}
              {feed.videoUrl ? (
                <video
                  key={`feed-video-${feed.id}`}
                  src={feed.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:brightness-100 transition-all duration-300"
                />
              ) : (
              <img
                data-fuser-slot-id={{ "1": "img-url-image-0ab3c07b", "2": "img-url-image-d24c51b0", "3": "img-url-image-e6474dd9", "4": "img-url-image-e8ded836", "5": "img-url-image-a862ba09", "6": "img-url-image-c4c4542c" }[feed.id]}









                src={feed.imgUrl}
                alt={feed.title}
                className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:brightness-100 transition-all duration-300" />
              )}
              

              {/* Dark Translucent Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-200" />

              {/* Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive ?
                  'bg-white text-black shadow-[0_0_14px_rgba(255,255,255,0.95)]' :
                  'bg-black/75 text-white/80 group-hover:bg-white group-hover:text-black'}`
                  }>
                  
                  <Play className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current translate-x-0.5" />
                </div>
              </div>

              {/* Camera Feed Code Badge */}
              <div
                data-fuser-slot-id={{ "1": "section-text-39cb610c", "2": "section-text-9970c756", "3": "section-text-acbb16d0", "4": "section-text-d58a15ae", "5": "section-text-029413fc", "6": "section-text-b805eeee" }[feed.id]}









                className="absolute left-1 top-1 text-[8px] font-mono font-bold tracking-wider text-white bg-black/90 px-1 py-0.5 rounded border border-white/40">
                
                {feed.code}
              </div>
            </div>);

        })}
            <div className="mt-12 flex items-center gap-2 border-t border-white/15 pt-1 font-mono text-[9px] text-slate-300/80">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              [END // ARCHIVE STREAM]
            </div>
          </div>

          <div className="relative flex w-5 shrink-0 flex-col items-center py-1">
            <div className="absolute bottom-2 left-1/2 top-0 w-[3px] -translate-x-1/2 rounded-full bg-white/15 shadow-[0_0_8px_rgba(0,0,0,0.9)]" />
            <div className="z-10 flex h-full w-full flex-col items-center justify-between gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-white ring-2 ring-white/50 shadow-[0_0_10px_white]" />
          {visibleFeeds.map((feed) =>
          <div
            key={feed.id}
            onClick={() => {
              sfx.playSwitchFeed();
              onSelectFeed(feed);
            }}
            className="relative flex cursor-pointer items-center justify-center group">
            
              {/* Step Marker Dot */}
              <div
              className={`rounded-full transition-all duration-300 ${
              feed.id === currentFeed.id ?
              'h-3.5 w-3.5 scale-110 bg-white ring-4 ring-cyan-400/40 shadow-[0_0_18px_white]' :
              'h-2.5 w-2.5 bg-slate-500/70 group-hover:bg-white'}`
              } />
            
            </div>
          )}
            <div className="h-2.5 w-2.5 rounded-full bg-white ring-2 ring-white/50 shadow-[0_0_10px_white]" />
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-between gap-2 border-t border-white/15 pt-2 text-[9px] font-mono font-bold tracking-widest text-white/90">
        <span className="shrink-0 rounded border border-white/30 bg-black/80 px-1.5 py-0.5 text-[#7DD3FC]">{String(activeIndex + 1).padStart(2, '0')}</span>
        <span className="truncate uppercase">{currentFeed.title}</span>
        <span className="shrink-0 rounded border border-white/30 bg-black/80 px-1.5 py-0.5 text-[#7DD3FC]">{String(visibleFeeds.length).padStart(2, '0')}</span>
      </div>
    </div>);

};