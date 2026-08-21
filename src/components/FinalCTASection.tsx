import React from 'react';
import { Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenAudit: () => void;
  onContactClick: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onOpenAudit,
  onContactClick,
}) => {
  return (
    <section className="py-20 md:py-28 bg-[#0B0D10] relative overflow-hidden">
      {/* Immersive Ambient Glows */}
      <div
        className="pointer-events-none absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#7C5CFC]/15 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#7C5CFC]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#7C5CFC]">
              TAKE THE NEXT STEP
            </span>
            <div className="w-8 h-[1px] bg-[#7C5CFC]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] leading-tight mb-6">
            Ready to Build a <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFC] via-[#A78BFA] to-[#F5F7FA]">
              Better Online Presence?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9AA3AF] leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us about your business and what you're looking to improve. We'll take it from there.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="final-cta-audit-btn"
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded font-bold bg-[#7C5CFC] hover:bg-[#A78BFA] active:scale-[0.98] text-white text-base transition-all duration-200 shadow-[0_0_30px_rgba(124,92,252,0.3)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Get a Free Website Audit</span>
            </button>

            <button
              id="final-cta-contact-btn"
              onClick={onContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-bold bg-white/[0.03] hover:bg-white/[0.08] text-[#F5F7FA] border border-white/20 hover:border-white/40 text-base transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFC]"
            >
              <MessageSquare className="w-4 h-4 text-[#A78BFA]" />
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 text-[#9AA3AF]" />
            </button>
          </div>

          <p className="text-xs text-[#9AA3AF] mt-6 tracking-wide">
            Serving growing businesses across USA, UK & UAE. No obligations.
          </p>
        </div>
      </div>
    </section>
  );
};
