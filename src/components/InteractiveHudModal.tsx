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

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const subject = `Production Quote Request - ${formData.get('company')}`;
    const body = [
      `Brand / Company: ${formData.get('company')}`,
      `Contact Email: ${formData.get('email')}`,
      `Phone Number: ${formData.get('phone')}`,
      `Target Quantity: ${formData.get('quantity')}`,
      `Tech Pack Status: ${formData.get('techPackStatus')}`,
      '',
      'Garment Specs & Notes:',
      formData.get('notes')
    ].join('\n');

    window.location.href = `mailto:krow8industries@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in pointer-events-auto">
      <div className="relative w-full max-w-3xl max-h-[calc(100dvh-1.5rem)] sm:max-h-[90vh] overflow-y-auto overscroll-contain scrollbar-none bg-[#0C0F0E] border-2 border-[#00FFC2] rounded-xl sm:rounded-2xl p-4 pb-8 sm:p-7 sm:pb-9 text-[#EAEFEA] shadow-[0_0_50px_rgba(0,255,194,0.3)]">
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
        {item.id === 'services' &&
        <div className="space-y-4">
            <h3 data-fuser-slot-id="section-title-064898b9" className="text-sm font-mono text-[#00FFC2] uppercase tracking-wider">
              // SPECIALIZED GARMENT DECORATION & FINISHING
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                ['DTF', 'Direct-to-film transfers'],
                ['DTG', 'Direct-to-garment printing'],
                ['EMBROIDERY', 'Raised thread artwork'],
                ['EMBOSSING', 'Pressed dimensional designs'],
                ['DENIMWORK', 'Custom denim detailing'],
                ['LEATHERWORK', 'Leather patches and trims'],
                ['CHAINSTITCHING', 'Decorative chain stitching'],
                ['SUBLIMATION', 'Dye-infused all-over prints'],
                ['RHINESTONE WORK', 'Premium crystal embellishment'],
                ['ACID WASHING', 'Vintage garment wash effects'],
                ['KNITTING', 'Custom knit construction'],
                ['CAMO', 'Custom camouflage patterns']
              ].map(([service, description], index) =>
              <div
                key={service}
                className="p-4 rounded-xl bg-black/60 border border-[#00FFC2]/20 hover:border-[#00FFC2]/60 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs font-mono text-[#00FFC2]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="font-tech font-bold text-sm sm:text-base">
                    {service}
                  </div>
                </div>
                <div className="text-[11px] text-[#EAEFEA]/60 leading-relaxed">
                  {description}
                </div>
              </div>)}
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
                <div>
                  <div>
                    <label data-fuser-slot-id="section-label-e80fdbfd" className="block text-xs font-mono text-[#EAEFEA]/70 mb-1">
                      Organization Name
                    </label>
                    <input
                  type="text"
                  name="company"
                  required
                  placeholder="e.g. KROW8 APPAREL"
                  className="w-full px-3 py-2 rounded-lg bg-black/80 border border-[#00FFC2]/30 text-[#EAEFEA] text-sm focus:border-[#00FFC2] focus:outline-none" />
                
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label data-fuser-slot-id="section-label-phone" className="block text-xs font-mono text-[#EAEFEA]/70 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +1 555 123 4567"
                      className="w-full px-3 py-2 rounded-lg bg-black/80 border border-[#00FFC2]/30 text-[#EAEFEA] text-sm focus:border-[#00FFC2] focus:outline-none" />
                  </div>
                  <div>
                    <label data-fuser-slot-id="section-label-455ba91e" className="block text-xs font-mono text-[#EAEFEA]/70 mb-1">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@brand.com"
                      className="w-full px-3 py-2 rounded-lg bg-black/80 border border-[#00FFC2]/30 text-[#EAEFEA] text-sm focus:border-[#00FFC2] focus:outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label data-fuser-slot-id="section-label-85c635e8" className="block text-xs font-mono text-[#EAEFEA]/70 mb-1">
                      Target Quantity 
                    </label>
                    <select name="quantity" className="w-full px-3 py-2 rounded-lg bg-black/80 border border-[#00FFC2]/30 text-[#EAEFEA] text-sm focus:border-[#00FFC2] focus:outline-none">
                      <option>1 &lt;sample&gt;</option>
                      <option>100 - 300 units</option>
                      <option>300 - 1,000 units</option>
                      <option>1,000 - 5,000 units</option>
                      <option>5,000+ units</option>
                      <option> &lt;specify in notes&gt; </option>
                    </select>
                  </div>
                  <div>
                    <label data-fuser-slot-id="section-label-15f322ad" className="block text-xs font-mono text-[#EAEFEA]/70 mb-1">
                      Tech Pack Status
                    </label>
                    <select
                  name="techPackStatus"
                  onChange={(e) => setTechPackFile(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-black/80 border border-[#00FFC2]/30 text-[#EAEFEA] text-sm focus:border-[#00FFC2] focus:outline-none">
                  
                      <option value="">Ready to Upload </option>
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
                name="notes"
                rows={2}
                placeholder="tell us about your garment specs and any special requirements..."
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