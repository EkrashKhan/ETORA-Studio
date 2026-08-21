import React from 'react';
import { Sparkles, Shield, CheckCircle2 } from 'lucide-react';

interface AuditCTASectionProps {
  onOpenAudit: () => void;
}

export const AuditCTASection: React.FC<AuditCTASectionProps> = ({ onOpenAudit }) => {
  return (
    <section id="audit" className="py-20 md:py-24 bg-[#0B0D10] relative overflow-hidden">
      {/* Ambient ambient glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C5CFC]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Visually distinct dark/purple-accented panel with Immersive UI styling */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#161A22] to-[#11141A] border border-[#7C5CFC]/40 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_0_50px_rgba(124,92,252,0.15)]">
          {/* Top-right corner glow */}
          <div
            className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-[#7C5CFC]/20 blur-[100px] rounded-full"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#7C5CFC]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#A78BFA]">
                COMPLIMENTARY REVIEW
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] leading-tight mb-6">
              Not Sure What's Holding <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFC] via-[#A78BFA] to-[#F5F7FA]">
                Your Website Back?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#9AA3AF] leading-relaxed mb-8">
              We'll take a look at your current website and point out the biggest opportunities to improve design, usability and conversions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2.5 text-xs text-[#F5F7FA] p-3 rounded-lg bg-white/5 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#7C5CFC] shrink-0" />
                <span>Visual credibility audit</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#F5F7FA] p-3 rounded-lg bg-white/5 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#7C5CFC] shrink-0" />
                <span>Mobile UX & speed check</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#F5F7FA] p-3 rounded-lg bg-white/5 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#7C5CFC] shrink-0" />
                <span>Enquiry pathway review</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                id="audit-panel-cta-btn"
                onClick={onOpenAudit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded font-bold bg-[#7C5CFC] hover:bg-[#A78BFA] active:scale-[0.98] text-white text-base transition-all duration-200 shadow-[0_0_30px_rgba(124,92,252,0.35)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get a Free Website Audit</span>
              </button>
            </div>

            <div className="flex items-center gap-2 mt-4 text-xs text-[#9AA3AF]">
              <Shield className="w-3.5 h-3.5 text-[#7C5CFC]" />
              <span>No pressure. Just practical feedback.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
