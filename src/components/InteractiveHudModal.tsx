import React, { useState } from 'react';
import { X, Check, Cpu, ShieldCheck, Shirt, Send, Zap } from 'lucide-react';
import { MenuItem } from './Data';
import { sfx } from './AudioSystem';

interface InteractiveHudModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const InteractiveHudModal: React.FC<InteractiveHudModalProps> = ({
  item,
  onClose
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [techPackFile, setTechPackFile] = useState<string | null>(null);

  if (!item) return null;

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    sfx.playSelect();
    setFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in pointer-events-auto">
      <div className="relative w-full max-w-3xl max-h-[88dvh] sm:max-h-[85vh] overflow-y-auto bg-[#0C0F0E] border-2 border-[#00FFC2] rounded-xl sm:rounded-2xl p-4 sm:p-8 text-[#EAEFEA] shadow-[0_0_50px_rgba(0,255,194,0.3)]">
        {/* Cyber-Gothic Corner HUD Accent Brackets */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00FFC2]" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00FFC2]" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00FFC2]" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00FFC2]" />

        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-[#00FFC2]/30 pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00FFC2] tracking-widest uppercase mb-1">
              <Zap className="w-4 h-4 text-[#00FFC2]" />
              <span data-fuser-slot-id="section-text-5cb56c0b">SYSTEM MODULE // {item.id.toUpperCase()}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-tech font-bold text-[#EAEFEA] tracking-wide uppercase">
              {item.label}
            </h2>
            <p className="text-xs font-mono text-[#EAEFEA]/70 mt-1">
              {item.subtitle}
            </p>
          </div>

          <button
            onClick={() => {
              sfx.playSelect();
              onClose();
            }}
            onMouseEnter={() => sfx.playHover()}
            className="p-2 rounded-lg bg-[#00FFC2]/10 border border-[#00FFC2]/40 text-[#00FFC2] hover:bg-[#00FFC2] hover:text-black transition-colors cursor-pointer">
            
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Sections */}
        {item.id === 'process' &&
        <div className="space-y-4">
            <h3 data-fuser-slot-id="section-title-064898b9" className="text-sm font-mono text-[#00FFC2] uppercase tracking-wider">
              // 4-STAGE PRECISION MANUFACTURING PIPELINE
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/60 border border-[#00FFC2]/20 hover:border-[#00FFC2]/60 transition-colors">
                <div data-fuser-slot-id="section-text-25bc79cb" className="text-xs font-mono text-[#00FFC2] mb-1">STAGE 01</div>
                <div data-fuser-slot-id="section-text-f2437b2e" className="font-tech font-bold text-lg mb-1">CAD & Laser Pattern Cut</div>
                <div data-fuser-slot-id="section-text-29d8bc28" className="text-xs text-[#EAEFEA]/70">
                  Digital Tech Pack ingestion with zero-waste laser fabric cutting nesting.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-black/60 border border-[#00FFC2]/20 hover:border-[#00FFC2]/60 transition-colors">
                <div data-fuser-slot-id="section-text-1a611775" className="text-xs font-mono text-[#00FFC2] mb-1">STAGE 02</div>
                <div data-fuser-slot-id="section-text-c16b1b04" className="font-tech font-bold text-lg mb-1">Lockstitch & Assembly</div>
                <div data-fuser-slot-id="section-text-a3be7770" className="text-xs text-[#EAEFEA]/70">
                  Automated double-needle stitching, flatlock seam reinforcement & hardware.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-black/60 border border-[#00FFC2]/20 hover:border-[#00FFC2]/60 transition-colors">
                <div data-fuser-slot-id="section-text-0568b54c" className="text-xs font-mono text-[#00FFC2] mb-1">STAGE 03</div>
                <div data-fuser-slot-id="section-text-3d283dd1" className="font-tech font-bold text-lg mb-1">Custom Dye & Wash Lab</div>
                <div data-fuser-slot-id="section-text-03615ac2" className="text-xs text-[#EAEFEA]/70">
                  Pantone color matching, acid wash, pigment vintage dyes & silicone softening.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-black/60 border border-[#00FFC2]/20 hover:border-[#00FFC2]/60 transition-colors">
                <div data-fuser-slot-id="section-text-8ae90932" className="text-xs font-mono text-[#00FFC2] mb-1">STAGE 04</div>
                <div data-fuser-slot-id="section-text-035b03e9" className="font-tech font-bold text-lg mb-1">QC Inspection & Polybag</div>
                <div data-fuser-slot-id="section-text-e2660a45" className="text-xs text-[#EAEFEA]/70">
                  6-point manual quality check, custom neck labels, hangtags & eco-packaging.
                </div>
              </div>
            </div>
          </div>
        }

        {item.id === 'collections' &&
        <div className="space-y-4">
            <h3 data-fuser-slot-id="section-title-e8a74bb4" className="text-sm font-mono text-[#00FFC2] uppercase tracking-wider">
              // PRODUCTION READY GARMENT BLUEPRINTS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-black/60 border border-[#00FFC2]/30 text-center">
                <Shirt className="w-8 h-8 text-[#00FFC2] mx-auto mb-2" />
                <div data-fuser-slot-id="section-text-e18081b7" className="font-tech font-bold text-base">320GSM Heavy Tee</div>
                <div data-fuser-slot-id="section-text-36f1bd8f" className="text-xs font-mono text-[#00FFC2] mt-1">MOQ: 100 pcs</div>
                <div data-fuser-slot-id="section-text-85d53c0e" className="text-[11px] text-[#EAEFEA]/60 mt-1">100% Organic Combed Cotton</div>
              </div>
              <div className="p-4 rounded-xl bg-black/60 border border-[#00FFC2]/30 text-center">
                <Shirt className="w-8 h-8 text-[#00FFC2] mx-auto mb-2" />
                <div data-fuser-slot-id="section-text-1b8a55cf" className="font-tech font-bold text-base">500GSM Luxury Hoodie</div>
                <div data-fuser-slot-id="section-text-35e072db" className="text-xs font-mono text-[#00FFC2] mt-1">MOQ: 100 pcs</div>
                <div data-fuser-slot-id="section-text-4a7d04eb" className="text-[11px] text-[#EAEFEA]/60 mt-1">Heavy French Terry Fleece</div>
              </div>
              <div className="p-4 rounded-xl bg-black/60 border border-[#00FFC2]/30 text-center">
                <Shirt className="w-8 h-8 text-[#00FFC2] mx-auto mb-2" />
                <div data-fuser-slot-id="section-text-04e12218" className="font-tech font-bold text-base">Tactical Outerwear</div>
                <div data-fuser-slot-id="section-text-3483ca4b" className="text-xs font-mono text-[#00FFC2] mt-1">MOQ: 150 pcs</div>
                <div data-fuser-slot-id="section-text-395ee46f" className="text-[11px] text-[#EAEFEA]/60 mt-1">Waterproof Ripstop Nylon</div>
              </div>
            </div>
          </div>
        }

        {item.id === 'capabilities' &&
        <div className="space-y-4">
            <h3 data-fuser-slot-id="section-title-336c7a85" className="text-sm font-mono text-[#00FFC2] uppercase tracking-wider">
              // FACTORY METRICS & PRODUCTION CAPACITY
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-black/60 border border-[#00FFC2]/20">
                <Cpu className="w-6 h-6 text-[#00FFC2] mx-auto mb-1" />
                <div data-fuser-slot-id="section-text-c2fda82a" className="text-xl font-bold font-mono text-[#00FFC2]">12,000</div>
                <div data-fuser-slot-id="section-text-54d41e92" className="text-[11px] text-[#EAEFEA]/60">Units / Day</div>
              </div>
              <div className="p-3 rounded-xl bg-black/60 border border-[#00FFC2]/20">
                <Zap className="w-6 h-6 text-[#00FFC2] mx-auto mb-1" />
                <div data-fuser-slot-id="section-text-f24ce8ac" className="text-xl font-bold font-mono text-[#00FFC2]">0.05mm</div>
                <div data-fuser-slot-id="section-text-25470e18" className="text-[11px] text-[#EAEFEA]/60">Stitch Precision</div>
              </div>
              <div className="p-3 rounded-xl bg-black/60 border border-[#00FFC2]/20">
                <ShieldCheck className="w-6 h-6 text-[#00FFC2] mx-auto mb-1" />
                <div data-fuser-slot-id="section-text-afa69ed2" className="text-xl font-bold font-mono text-[#00FFC2]">100%</div>
                <div data-fuser-slot-id="section-text-6b4ed395" className="text-[11px] text-[#EAEFEA]/60">Tech Pack Match</div>
              </div>
              <div className="p-3 rounded-xl bg-black/60 border border-[#00FFC2]/20">
                <Check className="w-6 h-6 text-[#00FFC2] mx-auto mb-1" />
                <div data-fuser-slot-id="section-text-ef71e46d" className="text-xl font-bold font-mono text-[#00FFC2]">ISO 9001</div>
                <div data-fuser-slot-id="section-text-c5be1604" className="text-[11px] text-[#EAEFEA]/60">Certified Mill</div>
              </div>
            </div>
          </div>
        }

        {item.id === 'sustainability' &&
        <div className="space-y-4">
            <h3 data-fuser-slot-id="section-title-0b277181" className="text-sm font-mono text-[#00FFC2] uppercase tracking-wider">
              // CLOSED-LOOP ECO MANUFACTURING
            </h3>
            <div className="p-5 rounded-xl bg-black/60 border border-[#00FFC2]/30 space-y-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#00FFC2]" />
                <div data-fuser-slot-id="section-text-e48e518f" className="font-tech font-bold text-lg">
                  GOTS & OEKO-TEX STANDARD 100
                </div>
              </div>
              <p data-fuser-slot-id="section-text-0a86a813" className="text-sm text-[#EAEFEA]/80 leading-relaxed">
                Zero toxic chemicals, 98% recycled water dye laboratory, and 100% solar powered garment manufacturing facility.
              </p>
            </div>
          </div>
        }

        {item.id === 'contact' &&
        <div className="space-y-4">
            <h3 data-fuser-slot-id="section-title-589b1b35" className="text-sm font-mono text-[#00FFC2] uppercase tracking-wider">
              // PRODUCTION SLOT INQUIRY / TECH PACK QUOTE
            </h3>

            {formSubmitted ?
          <div className="p-6 rounded-xl bg-[#00FFC2]/10 border border-[#00FFC2] text-center space-y-3">
                <Check className="w-10 h-10 text-[#00FFC2] mx-auto" />
                <div data-fuser-slot-id="section-text-c7c7a103" className="font-tech font-bold text-xl text-[#00FFC2]">
                  PRODUCTION SLOT INQUIRY RECEIVED
                </div>
                <p data-fuser-slot-id="section-body-05e4dfd9" className="text-sm text-[#EAEFEA]/80 max-w-md mx-auto">
                  Our garment engineers will review your Tech Pack specs and send a custom quote within 24 hours.
                </p>
                <button
              onClick={() => setFormSubmitted(false)}
              className="mt-2 px-4 py-2 rounded-lg bg-[#00FFC2] text-black font-tech font-bold text-xs uppercase cursor-pointer hover:bg-[#00FFC2]/90">
              
                  <span data-fuser-slot-id="section-button-text-e5b3032c">Submit Another Inquiry</span>
                </button>
              </div> :

          <form onSubmit={handleSubmitQuote} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label data-fuser-slot-id="section-label-e80fdbfd" className="block text-xs font-mono text-[#EAEFEA]/70 mb-1">
                      Brand / Company Name
                    </label>
                    <input
                  type="text"
                  required
                  placeholder="e.g. ACOLYTE APPAREL"
                  className="w-full px-3 py-2 rounded-lg bg-black/80 border border-[#00FFC2]/30 text-[#EAEFEA] text-sm focus:border-[#00FFC2] focus:outline-none" />
                
                  </div>
                  <div>
                    <label data-fuser-slot-id="section-label-455ba91e" className="block text-xs font-mono text-[#EAEFEA]/70 mb-1">
                      Contact Email
                    </label>
                    <input
                  type="email"
                  required
                  placeholder="you@brand.com"
                  className="w-full px-3 py-2 rounded-lg bg-black/80 border border-[#00FFC2]/30 text-[#EAEFEA] text-sm focus:border-[#00FFC2] focus:outline-none" />
                
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label data-fuser-slot-id="section-label-85c635e8" className="block text-xs font-mono text-[#EAEFEA]/70 mb-1">
                      Target Quantity (MOQ 100)
                    </label>
                    <select className="w-full px-3 py-2 rounded-lg bg-black/80 border border-[#00FFC2]/30 text-[#EAEFEA] text-sm focus:border-[#00FFC2] focus:outline-none">
                      <option>100 - 300 units</option>
                      <option>300 - 1,000 units</option>
                      <option>1,000 - 5,000 units</option>
                      <option>5,000+ units</option>
                    </select>
                  </div>
                  <div>
                    <label data-fuser-slot-id="section-label-15f322ad" className="block text-xs font-mono text-[#EAEFEA]/70 mb-1">
                      Tech Pack Status
                    </label>
                    <select
                  onChange={(e) => setTechPackFile(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-black/80 border border-[#00FFC2]/30 text-[#EAEFEA] text-sm focus:border-[#00FFC2] focus:outline-none">
                  
                      <option value="">Ready to Upload (PDF/AI)</option>
                      <option value="concept">Concept Stage / Need Design Help</option>
                      <option value="sample">Sample Garment Existing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label data-fuser-slot-id="section-label-6373c8d2" className="block text-xs font-mono text-[#EAEFEA]/70 mb-1">
                    Garment Specs & Notes
                  </label>
                  <textarea
                rows={2}
                placeholder="Describe GSM, fabric blend, wash effects, cut (e.g. oversized drop-shoulder)..."
                className="w-full px-3 py-2 rounded-lg bg-black/80 border border-[#00FFC2]/30 text-[#EAEFEA] text-sm focus:border-[#00FFC2] focus:outline-none" />
              
                </div>

                <button data-fuser-slot-id="section-button-text-790123c5"
            type="submit"
            onMouseEnter={() => sfx.playHover()}
            className="w-full py-3 rounded-xl bg-[#00FFC2] text-black font-tech font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#00FFC2]/90 transition-all shadow-[0_0_20px_rgba(0,255,194,0.4)] cursor-pointer">
              
                  <Send className="w-4 h-4" />
                  REQUEST PRODUCTION QUOTE
                </button>
              </form>
          }
          </div>
        }
      </div>
    </div>);

};