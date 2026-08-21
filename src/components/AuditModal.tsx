import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { AuditFormData } from '../types';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AuditFormData>({
    websiteUrl: '',
    email: '',
    businessName: '',
    mainChallenge: 'design-credibility',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.websiteUrl.trim() || !formData.email.trim()) {
      setError('Please provide both your website URL and contact email.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    // Simulate clean client request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      websiteUrl: '',
      email: '',
      businessName: '',
      mainChallenge: 'design-credibility',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#12151C] border border-white/10 rounded-2xl w-full max-w-lg shadow-[0_0_50px_rgba(0,0,0,0.8)] p-6 sm:p-8 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close Audit Modal"
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 border border-white/10 text-[#9AA3AF] hover:text-[#F5F7FA] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-md bg-[#7C5CFC]/20 border border-[#7C5CFC]/40 text-[#A78BFA]">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A78BFA]">
                Free Website Audit
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#F5F7FA] mb-2">
              Get Actionable Insights For Your Site
            </h3>
            <p className="text-xs sm:text-sm text-[#9AA3AF] mb-6 leading-relaxed">
              We'll review your current website and pinpoint clear improvements for design credibility, mobile usability, and conversion rate.
            </p>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-950/40 border border-red-800 text-xs text-red-300">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#F5F7FA] mb-1.5">
                  Current Website URL <span className="text-[#7C5CFC]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. www.yourcompany.com"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#161A22] border border-white/10 text-[#F5F7FA] placeholder-[#9AA3AF]/50 text-sm focus:outline-none focus:border-[#7C5CFC] focus:ring-1 focus:ring-[#7C5CFC]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#F5F7FA] mb-1.5">
                    Your Email <span className="text-[#7C5CFC]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#161A22] border border-white/10 text-[#F5F7FA] placeholder-[#9AA3AF]/50 text-sm focus:outline-none focus:border-[#7C5CFC] focus:ring-1 focus:ring-[#7C5CFC]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F5F7FA] mb-1.5">
                    Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company Name"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#161A22] border border-white/10 text-[#F5F7FA] placeholder-[#9AA3AF]/50 text-sm focus:outline-none focus:border-[#7C5CFC] focus:ring-1 focus:ring-[#7C5CFC]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#F5F7FA] mb-1.5">
                  Primary Focus Area
                </label>
                <select
                  value={formData.mainChallenge}
                  onChange={(e) => setFormData({ ...formData, mainChallenge: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#161A22] border border-white/10 text-[#F5F7FA] text-sm focus:outline-none focus:border-[#7C5CFC]"
                >
                  <option value="design-credibility">Visual Design & Credibility</option>
                  <option value="mobile-ux">Mobile Responsiveness & Speed</option>
                  <option value="conversion-leads">Lead Capture & Enquiries</option>
                  <option value="complete-redesign">Full Website Overhaul</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-5 rounded font-bold bg-[#7C5CFC] hover:bg-[#A78BFA] active:scale-[0.99] text-white text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(124,92,252,0.3)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Reviewing details...</span>
                  ) : (
                    <>
                      <span>Request Free Audit</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#9AA3AF] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7C5CFC]" />
                <span>No pressure. Practical feedback directly from founders.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#7C5CFC]/20 border border-[#7C5CFC]/50 text-[#A78BFA] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#F5F7FA] mb-2">
              Audit Request Received
            </h3>
            <p className="text-sm text-[#9AA3AF] max-w-sm mx-auto mb-6 leading-relaxed">
              Thank you! We have received your website details (<span className="text-[#F5F7FA] font-mono">{formData.websiteUrl}</span>). We'll inspect your site and send your review to <span className="text-[#F5F7FA] font-mono">{formData.email}</span>.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-[#F5F7FA] transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
