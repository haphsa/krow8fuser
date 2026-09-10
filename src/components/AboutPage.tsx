import React from 'react';
import { ArrowLeft, Factory, Mail, Shirt, Target } from 'lucide-react';
import { sfx } from './AudioSystem';

interface AboutPageProps {
  onBack: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  return (
    <main className="relative h-screen h-[100dvh] w-full overflow-y-auto bg-[#080A0B] text-[#EAEFEA] font-sans">
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,194,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,194,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(0,255,194,0.13),transparent_34%),linear-gradient(180deg,rgba(8,10,11,0.2),#080A0B)]" />

      <header className="relative z-10 flex items-center justify-between border-b border-[#00FFC2]/30 bg-[#0A0D0F]/90 px-4 py-3 backdrop-blur-md sm:px-8">
        <button
          type="button"
          onClick={() => { sfx.playSelect(); onBack(); }}
          onMouseEnter={() => sfx.playHover()}
          className="group flex items-center gap-2 border border-[#00FFC2]/40 bg-[#00FFC2]/10 px-3 py-2 font-mono text-[10px] font-bold tracking-widest text-[#00FFC2] transition hover:border-[#00FFC2] hover:bg-[#00FFC2] hover:text-black"
          aria-label="Return to main menu"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>MAIN MENU</span>
        </button>
        <div className="font-mono text-[9px] tracking-[0.18em] text-[#00FFC2]/70 sm:text-xs">KROW8 // ABOUT</div>
      </header>

      <section className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:px-10 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-3 font-mono text-[10px] tracking-[0.3em] text-[#00FFC2]">// COMPANY PROFILE</p>
          <h1 className="max-w-2xl font-display text-5xl font-black uppercase italic leading-none tracking-tight text-white sm:text-7xl">
            Built thread by thread.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#EAEFEA]/75 sm:text-lg">
            KROW8 Industries is a Pakistan-based clothing manufacturing partner for brands that care about precise construction, dependable production, and garments made to last.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=krow8industries@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sfx.playSelect()}
            onMouseEnter={() => sfx.playHover()}
            className="mt-8 inline-flex items-center gap-2 border border-[#00FFC2] bg-[#00FFC2] px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black transition hover:bg-transparent hover:text-[#00FFC2]"
          >
            <Mail className="h-4 w-4" />
            krow8industries@gmail.com
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <div className="border border-[#00FFC2]/30 bg-[#0A0D0F]/85 p-5 backdrop-blur-md">
            <Factory className="mb-4 h-7 w-7 text-[#00FFC2]" />
            <h2 className="font-tech text-lg font-bold uppercase tracking-wider">Production partner</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#EAEFEA]/60">From raw material selection to final finishing, one coordinated production workflow.</p>
          </div>
          <div className="border border-[#00FFC2]/30 bg-[#0A0D0F]/85 p-5 backdrop-blur-md">
            <Target className="mb-4 h-7 w-7 text-[#00FFC2]" />
            <h2 className="font-tech text-lg font-bold uppercase tracking-wider">Precision first</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#EAEFEA]/60">Tech packs become consistent, production-ready garments through disciplined execution.</p>
          </div>
          <div className="border border-[#00FFC2]/30 bg-[#0A0D0F]/85 p-5 backdrop-blur-md">
            <Shirt className="mb-4 h-7 w-7 text-[#00FFC2]" />
            <h2 className="font-tech text-lg font-bold uppercase tracking-wider">Made for brands</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#EAEFEA]/60">Custom apparel, decoration, and finishing shaped around your identity.</p>
          </div>
        </div>
      </section>
    </main>
  );
};
