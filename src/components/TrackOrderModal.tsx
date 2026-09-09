import React, { useState } from 'react';
import { Check, X, Zap } from 'lucide-react';
import { sfx } from './AudioSystem';

interface TrackOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TrackingField = 'company' | 'trackingNumber';
const submissionErrorMessage = "Sorry, we're experiencing some trouble at the moment. You can email us directly at krow8industries@gmail.com while we fix this.";

export const TrackOrderModal: React.FC<TrackOrderModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<TrackingField, string>>>({});

  if (!isOpen) return null;

  const clearFieldError = (field: TrackingField) => {
    setFieldErrors((currentErrors) => {
      if (!currentErrors[field]) return currentErrors;
      return { ...currentErrors, [field]: undefined };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sfx.playSelect();
    setFormError(null);

    const formData = new FormData(event.currentTarget);
    const company = String(formData.get('company') || '').trim();
    const trackingNumber = String(formData.get('trackingNumber') || '').trim();
    const errors: Partial<Record<TrackingField, string>> = {};

    if (!company) errors.company = 'Company name is required.';
    if (!trackingNumber) errors.trackingNumber = 'Tracking number is required.';

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setFormError(submissionErrorMessage);
      return;
    }

    setIsSubmitting(true);
    formData.append('access_key', accessKey);
    formData.append('subject', `Order Tracking Request - ${company}`);
    formData.append('from_name', 'KROW8 Industries Website');
    formData.append('botcheck', '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const result = await response.json() as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to submit tracking request.');
      }

      setSubmitted(true);
    } catch {
      setFormError(submissionErrorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-md animate-fade-in pointer-events-auto sm:p-4">
      <div className="relative w-full max-w-xl overflow-y-auto rounded-xl border-2 border-[#00FFC2] bg-[#0C0F0E] p-4 pb-7 text-[#EAEFEA] shadow-[0_0_50px_rgba(0,255,194,0.3)] sm:rounded-2xl sm:p-7 sm:pb-8">
        <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#00FFC2]" />
        <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-[#00FFC2]" />
        <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-[#00FFC2]" />
        <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-[#00FFC2]" />

        <div className="mb-6 flex items-start justify-between border-b border-[#00FFC2]/30 pb-4">
          <div>
            <div className="mb-1 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00FFC2]">
              <Zap className="h-4 w-4" />
              <span>SYSTEM MODULE // TRACK ORDER</span>
            </div>
            <h2 className="font-tech text-2xl font-bold uppercase tracking-wide text-[#EAEFEA] sm:text-3xl">Track Order</h2>
            <p className="mt-1 font-mono text-xs text-[#EAEFEA]/70">Enter your company and tracking number.</p>
          </div>
          <button
            type="button"
            onClick={() => { sfx.playSelect(); onClose(); }}
            onMouseEnter={() => sfx.playHover()}
            className="cursor-pointer rounded-lg border border-[#00FFC2]/40 bg-[#00FFC2]/10 p-2 text-[#00FFC2] transition-colors hover:bg-[#00FFC2] hover:text-black"
            aria-label="Close tracking form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="space-y-3 rounded-xl border border-[#00FFC2] bg-[#00FFC2]/10 p-6 text-center">
            <Check className="mx-auto h-10 w-10 text-[#00FFC2]" />
            <h3 className="font-tech text-xl font-bold text-[#00FFC2]">TRACKING REQUEST RECEIVED</h3>
            <p className="text-sm text-[#EAEFEA]/80">We will review your order details and respond with an update.</p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-2 cursor-pointer rounded-lg bg-[#00FFC2] px-4 py-2 font-tech text-xs font-bold uppercase text-black hover:bg-[#00FFC2]/90"
            >
              Track Another Order
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="tracking-company" className="mb-1 block font-mono text-xs text-[#EAEFEA]/70">
                Company Name <span className="text-[#00FFC2]" aria-hidden="true">*</span>
              </label>
              <input
                id="tracking-company"
                type="text"
                name="company"
                required
                aria-required="true"
                aria-invalid={Boolean(fieldErrors.company)}
                aria-describedby={fieldErrors.company ? 'tracking-company-error' : undefined}
                onChange={() => clearFieldError('company')}
                placeholder="e.g. KROW8 APPAREL"
                className={`w-full rounded-lg border bg-black/80 px-3 py-2 text-sm text-[#EAEFEA] focus:outline-none ${fieldErrors.company ? 'border-red-500 focus:border-red-500' : 'border-[#00FFC2]/30 focus:border-[#00FFC2]'}`}
              />
              {fieldErrors.company && <p id="tracking-company-error" className="mt-1 text-xs text-red-400">{fieldErrors.company}</p>}
            </div>

            <div>
              <label htmlFor="tracking-number" className="mb-1 block font-mono text-xs text-[#EAEFEA]/70">
                Tracking Number <span className="text-[#00FFC2]" aria-hidden="true">*</span>
              </label>
              <input
                id="tracking-number"
                type="text"
                name="trackingNumber"
                required
                aria-required="true"
                aria-invalid={Boolean(fieldErrors.trackingNumber)}
                aria-describedby={fieldErrors.trackingNumber ? 'tracking-number-error' : undefined}
                onChange={() => clearFieldError('trackingNumber')}
                placeholder="Enter tracking number"
                className={`w-full rounded-lg border bg-black/80 px-3 py-2 text-sm text-[#EAEFEA] focus:outline-none ${fieldErrors.trackingNumber ? 'border-red-500 focus:border-red-500' : 'border-[#00FFC2]/30 focus:border-[#00FFC2]'}`}
              />
              {fieldErrors.trackingNumber && <p id="tracking-number-error" className="mt-1 text-xs text-red-400">{fieldErrors.trackingNumber}</p>}
            </div>

            {formError && <p role="alert" className="text-sm text-red-300">{formError}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              onMouseEnter={() => sfx.playHover()}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#00FFC2] py-3 font-tech text-sm font-bold uppercase tracking-wider text-black shadow-[0_0_20px_rgba(0,255,194,0.4)] transition-all hover:bg-[#00FFC2]/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Zap className="h-4 w-4" />
              {isSubmitting ? 'SUBMITTING...' : 'SUBMIT TRACKING REQUEST'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
