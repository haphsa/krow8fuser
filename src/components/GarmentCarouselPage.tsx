import React, { useRef, useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Move, RotateCw, Send, Shirt } from 'lucide-react';
import { sfx } from './AudioSystem';

interface GarmentSpecimen {
  id: string;
  name: string;
  category: string;
  gsm: string;
  image: string;
}

const GARMENT_SPECIMENS: GarmentSpecimen[] = [
  { id: 'bag-01', name: 'Bag 01 Top', category: 'Canvas / Carry', gsm: '--', image: '/assets/garmentprojects/bag1top.png' },
  { id: 'balaclava-01', name: 'Balaclava 01', category: 'Knit / Accessory', gsm: '--', image: '/assets/garmentprojects/balaclava1.png' },
  { id: 'hoodie-01', name: 'Hoodie 01', category: 'Fleece / Layer', gsm: '--', image: '/assets/garmentprojects/hoodie1.png' },
  { id: 'hoodie-02', name: 'Hoodie 02', category: 'Fleece / Layer', gsm: '--', image: '/assets/garmentprojects/hoodie2.png' },
  { id: 'hoodie-03', name: 'Hoodie 03', category: 'Fleece / Layer', gsm: '--', image: '/assets/garmentprojects/hoodie3.png' },
  { id: 'hoodie-03-back', name: 'Hoodie 03 Back', category: 'Fleece / Layer', gsm: '--', image: '/assets/garmentprojects/hoodie3back.png' },
  { id: 'hoodie-04', name: 'Hoodie 04', category: 'Fleece / Layer', gsm: '--', image: '/assets/garmentprojects/hoodie4.png' },
  { id: 'jacket-01', name: 'Jacket 01', category: 'Outerwear / Shell', gsm: '--', image: '/assets/garmentprojects/jacket1.png' },
  { id: 'jacket-02', name: 'Jacket 02', category: 'Outerwear / Shell', gsm: '--', image: '/assets/garmentprojects/jacket2.png' },
  { id: 'jacket-03', name: 'Jacket 03', category: 'Outerwear / Shell', gsm: '--', image: '/assets/garmentprojects/jacket3.png' },
  { id: 'jacket-04-back', name: 'Jacket 04 Back', category: 'Outerwear / Shell', gsm: '--', image: '/assets/garmentprojects/jacket4back.png' },
  { id: 'pants-01', name: 'Pants 01', category: 'Twill / Utility', gsm: '--', image: '/assets/garmentprojects/pants1.png' },
  { id: 'pants-01-form-02', name: 'Pants 01 Form 02', category: 'Twill / Utility', gsm: '--', image: '/assets/garmentprojects/pants1form2.png' },
  { id: 'pants-02', name: 'Pants 02', category: 'Twill / Utility', gsm: '--', image: '/assets/garmentprojects/pants2.png' },
  { id: 'pants-03', name: 'Pants 03', category: 'Twill / Utility', gsm: '--', image: '/assets/garmentprojects/pants3.png' },
  { id: 'pants-04', name: 'Pants 04', category: 'Twill / Utility', gsm: '--', image: '/assets/garmentprojects/pants4.png' },
  { id: 'pants-05', name: 'Pants 05', category: 'Twill / Utility', gsm: '--', image: '/assets/garmentprojects/pants5.png' },
  { id: 'pants-07', name: 'Pants 07', category: 'Twill / Utility', gsm: '--', image: '/assets/garmentprojects/pants7.png' },
  { id: 'pants-09', name: 'Pants 09', category: 'Twill / Utility', gsm: '--', image: '/assets/garmentprojects/pants9.png' },
  { id: 'tee-02', name: 'Tee 02', category: 'Jersey / Core', gsm: '--', image: '/assets/garmentprojects/tee2.png' },
  { id: 'tee-03', name: 'Tee 03', category: 'Jersey / Core', gsm: '--', image: '/assets/garmentprojects/tee3.png' },
  { id: 'tee-04', name: 'Tee 04', category: 'Jersey / Core', gsm: '--', image: '/assets/garmentprojects/tee4.png' }
];

interface GarmentCarouselPageProps {
  onBack: () => void;
  onRequestQuote: (garmentName?: string) => void;
}

export const GarmentCarouselPage: React.FC<GarmentCarouselPageProps> = ({ onBack, onRequestQuote }) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartAngle = useRef(0);
  const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 170 : 320;
  const angleStep = 360 / GARMENT_SPECIMENS.length;

  const rotate = (direction: 1 | -1) => {
    sfx.playSwitchFeed();
    setRotationAngle((angle) => angle - direction * angleStep);
    setSelectedIndex((index) => (index + direction + GARMENT_SPECIMENS.length) % GARMENT_SPECIMENS.length);
  };

  const selected = GARMENT_SPECIMENS[selectedIndex];

  const isVisible = (index: number) => {
    const distance = Math.abs(index - selectedIndex);
    const wrappedDistance = GARMENT_SPECIMENS.length - distance;
    return Math.min(distance, wrappedDistance) <= 3;
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest('button')) return;
    dragStartX.current = event.clientX;
    dragStartAngle.current = rotationAngle;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!isDragging) return;
    const angle = dragStartAngle.current - ((event.clientX - dragStartX.current) / event.currentTarget.clientWidth) * 180;
    setRotationAngle(angle);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLElement>) => {
    if (!isDragging) return;
    const snappedAngle = Math.round(rotationAngle / angleStep) * angleStep;
    const frontIndex = ((Math.round(-snappedAngle / angleStep) % GARMENT_SPECIMENS.length) + GARMENT_SPECIMENS.length) % GARMENT_SPECIMENS.length;
    setRotationAngle(snappedAngle);
    setSelectedIndex(frontIndex);
    setIsDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <main className="relative h-screen h-[100dvh] w-full overflow-hidden bg-[#080A0B] text-[#EAEFEA] font-sans">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(0,255,194,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,194,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_55%,rgba(0,255,194,0.13),transparent_36%),linear-gradient(180deg,rgba(8,10,11,0.2),#080A0B)]" />

      <header className="relative z-30 flex shrink-0 items-center justify-between border-b border-[#00FFC2]/30 bg-[#0A0D0F]/90 px-4 py-3 backdrop-blur-md sm:px-8">
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => { sfx.playSelect(); onBack(); }} onMouseEnter={() => sfx.playHover()} className="group flex items-center gap-2 border border-[#00FFC2]/40 bg-[#00FFC2]/10 px-3 py-2 font-mono text-[10px] font-bold tracking-widest text-[#00FFC2] transition hover:border-[#00FFC2] hover:bg-[#00FFC2] hover:text-black" aria-label="Return to main menu">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="hidden xs:inline">MAIN MENU</span>
            <span className="xs:hidden">MENU</span>
          </button>
          <div className="hidden h-5 w-px bg-[#00FFC2]/30 sm:block" />
          <div className="flex items-center gap-2">
            <Shirt className="h-5 w-5 text-[#00FFC2]" />
            <div>
              <h1 className="font-tech text-sm font-bold uppercase tracking-wider text-[#EAEFEA] sm:text-lg">Manufactured Garments Showcase</h1>
              <p className="hidden font-mono text-[10px] tracking-widest text-[#00FFC2] sm:block">3D ROTATING SLIDER MATRIX // APPAREL ARCHITECTURE</p>
            </div>
          </div>
        </div>
        <div className="text-right font-mono text-[9px] tracking-[0.28em] text-[#00FFC2]/70 sm:text-xs">
          <span className="hidden rounded border border-[#00FFC2]/30 bg-[#00FFC2]/10 px-2 py-1 sm:inline">3D CAROUSEL ACTIVE</span>
          <span className="sm:hidden">DATASET {String(GARMENT_SPECIMENS.length).padStart(2, '0')}</span>
        </div>
      </header>

      <section
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`relative z-10 mx-auto flex min-h-0 flex-1 w-full max-w-7xl flex-col px-4 pb-3 sm:px-8 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
        <div className="flex items-end justify-between gap-4 border-b border-[#00FFC2]/20 pb-3 sm:pb-5">
          <div>
            <p className="mb-1 font-mono text-[10px] tracking-[0.3em] text-[#00FFC2]">// SPECIMEN ROTATION INDEX</p>
            <h1 className="font-display text-4xl font-black uppercase italic tracking-tight text-white sm:text-6xl">Projects</h1>
          </div>
          <div className="hidden text-right font-mono text-xs text-[#EAEFEA]/50 sm:block">
            <span className="text-[#00FFC2]">{String(selectedIndex + 1).padStart(2, '0')}</span> / {String(GARMENT_SPECIMENS.length).padStart(2, '0')}<br />
            SELECTED SPECIMEN
          </div>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">
          <div className="absolute bottom-5 h-28 w-[min(80vw,720px)] rounded-[50%] border border-[#00FFC2]/40 shadow-[0_0_45px_rgba(0,255,194,0.12)]" />
          <div className="absolute bottom-12 h-14 w-[min(55vw,480px)] rounded-[50%] border border-dashed border-[#00FFC2]/30" />

          <button type="button" onClick={() => rotate(-1)} onMouseEnter={() => sfx.playHover()} className="group absolute left-1 top-1/2 z-30 -translate-y-1/2 p-2.5 text-[#00FFC2] sm:left-5 sm:p-3.5" aria-label="Previous garment" title="Previous specimen">
            <span className="absolute inset-0 border-2 border-[#00FFC2]/70 bg-[#0A0D0F]/90 shadow-[0_0_30px_rgba(0,255,194,0.35)] transition group-hover:border-[#00FFC2] group-hover:bg-[#00FFC2] group-hover:shadow-[0_0_50px_rgba(0,255,194,0.8)]" />
            <span className="absolute -left-1 -top-1 h-2.5 w-2.5 border-l-2 border-t-2 border-[#00FFC2]" />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 border-r-2 border-t-2 border-[#00FFC2]" />
            <span className="absolute -bottom-1 -left-1 h-2.5 w-2.5 border-b-2 border-l-2 border-[#00FFC2]" />
            <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 border-b-2 border-r-2 border-[#00FFC2]" />
            <ChevronLeft className="relative h-5 w-5 stroke-[3] transition group-hover:-translate-x-1 sm:h-7 sm:w-7" />
          </button>
          <button type="button" onClick={() => rotate(1)} onMouseEnter={() => sfx.playHover()} className="group absolute right-1 top-1/2 z-30 -translate-y-1/2 p-2.5 text-[#00FFC2] sm:right-5 sm:p-3.5" aria-label="Next garment" title="Next specimen">
            <span className="absolute inset-0 border-2 border-[#00FFC2]/70 bg-[#0A0D0F]/90 shadow-[0_0_30px_rgba(0,255,194,0.35)] transition group-hover:border-[#00FFC2] group-hover:bg-[#00FFC2] group-hover:shadow-[0_0_50px_rgba(0,255,194,0.8)]" />
            <span className="absolute -left-1 -top-1 h-2.5 w-2.5 border-l-2 border-t-2 border-[#00FFC2]" />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 border-r-2 border-t-2 border-[#00FFC2]" />
            <span className="absolute -bottom-1 -left-1 h-2.5 w-2.5 border-b-2 border-l-2 border-[#00FFC2]" />
            <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 border-b-2 border-r-2 border-[#00FFC2]" />
            <ChevronRight className="relative h-5 w-5 stroke-[3] transition group-hover:translate-x-1 sm:h-7 sm:w-7" />
          </button>

          <div className="relative h-[64vh] w-full max-w-5xl -translate-y-32 sm:-translate-y-28" style={{ perspective: '1200px' }}>
            {GARMENT_SPECIMENS.map((garment, index) => {
              if (!isVisible(index)) return null;

              const itemAngle = rotationAngle + index * angleStep;
              const radians = itemAngle * Math.PI / 180;
              const z = Math.cos(radians) * radius;
              const depth = (z + radius) / (2 * radius);
              const scale = 0.68 + depth * 0.47;
              const isFront = depth > 0.76;

              return (
                <button type="button" key={garment.id} onClick={() => { sfx.playSelect(); setSelectedIndex(index); setRotationAngle(-index * angleStep); }} className={`group absolute left-1/2 top-1/2 flex w-48 -translate-x-1/2 -translate-y-1/2 flex-col items-center will-change-transform sm:w-64 ${isDragging ? 'transition-none' : 'transition-[transform,opacity] duration-700 ease-out'}`} style={{ transform: `translate3d(calc(-50% + ${Math.sin(radians) * radius}px), ${Math.sin(radians) * 12}px, ${z}px) scale(${scale})`, opacity: 0.3 + depth * 0.7, zIndex: Math.round(depth * 100) }}>
                  <img src={garment.image} alt={garment.name} className={`aspect-[4/5] w-full object-contain transition duration-300 ${isFront ? 'drop-shadow-[0_16px_28px_rgba(0,0,0,0.9)] group-hover:drop-shadow-[0_0_28px_rgba(0,255,194,0.6)]' : 'brightness-50 contrast-125'}`} />
                  {isFront && <span className="mt-[-3px] border border-[#00FFC2] bg-black/90 px-3 py-1 font-mono text-[9px] tracking-widest text-[#00FFC2]">{garment.name}</span>}
                </button>
              );
            })}
          </div>
        </div>

        <footer className="relative z-20 flex shrink-0 items-center justify-between gap-3 border-t border-[#00FFC2]/20 pt-3 sm:pt-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-[9px] tracking-widest text-[#00FFC2]/70">
              <Move className="h-3.5 w-3.5 animate-pulse" />
              <span className="hidden sm:inline">USE BUTTONS OR DRAG TO ROTATE</span>
              <span className="sm:hidden">DRAG TO ROTATE</span>
            </div>
            <p className="mt-1 font-mono text-[9px] tracking-widest text-[#00FFC2]/60">CURRENT SPECIMEN // {selected.id.toUpperCase()}</p>
            <p className="mt-1 font-tech text-lg font-bold uppercase text-white sm:text-2xl">{selected.category}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right font-mono text-[9px] text-[#EAEFEA]/60 sm:text-xs">
              FABRIC WEIGHT<br /><strong className="text-[#00FFC2]">{selected.gsm} GSM</strong>
            </div>
            <RotateCw className="hidden h-4 w-4 text-[#00FFC2] sm:block" />
            <button type="button" onClick={() => { sfx.playSelect(); onRequestQuote(selected.name); }} onMouseEnter={() => sfx.playHover()} className="flex items-center gap-2 bg-[#00FFC2] px-3 py-2 font-tech text-[10px] font-bold uppercase tracking-wider text-black shadow-[0_0_15px_rgba(0,255,194,0.35)] transition hover:bg-[#00FFC2]/90 sm:px-4 sm:text-xs">
              <Send className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">REQUEST TECH PACK QUOTE</span>
              <span className="sm:hidden">QUOTE</span>
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
};