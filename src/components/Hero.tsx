import React from 'react';
import { ArrowRight, Sparkles, Layout, Smartphone, Globe, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onViewWork }) => {
  return (
    <section
      id="hero"
      data-section="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0B0D10]"
    >
      <div id="home" className="absolute -top-32" aria-hidden="true" />
      {/* Immersive UI Ambient Glows */}
      <div
        className="pointer-events-none absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#7C5CFC] opacity-15 rounded-full blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-50px] left-[-50px] w-[400px] h-[400px] bg-[#A78BFA] opacity-10 rounded-full blur-[100px]"
        aria-hidden="true"
      />

      {/* Subtle Immersive Architectural Watermark */}
      <div className="absolute right-[-140px] top-[240px] pointer-events-none opacity-[0.03] select-none hidden lg:block" aria-hidden="true">
        <div className="w-[500px] py-1 px-4 border border-[#7C5CFC]/40 text-[#7C5CFC] text-[110px] font-black uppercase rotate-90">
          ETORA
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column: Hero Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
            {/* Eyebrow badge with decorative horizontal line */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-[#7C5CFC]" />
              <span className="text-[#7C5CFC] text-xs font-bold tracking-[0.2em] uppercase">
                Web & Digital Studio
              </span>
            </div>

            {/* Main Headline (single H1 with gradient highlight) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#F5F7FA]">
              We Build Websites <br className="hidden sm:inline" />
              That Help{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFC] via-[#9B7DFF] to-[#A78BFA]">
                Businesses Grow.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-[#9AA3AF] text-base sm:text-lg leading-relaxed max-w-[500px]">
              ETORA Studio creates modern, high-performing websites and digital experiences designed to help growing businesses look credible, connect with customers and generate more enquiries.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-primary-audit-btn"
                onClick={onOpenAudit}
                className="bg-[#7C5CFC] hover:bg-[#A78BFA] active:scale-[0.98] text-white px-8 py-4 rounded font-bold text-base transition-all duration-200 shadow-[0_0_30px_rgba(124,92,252,0.3)] flex items-center justify-center gap-2.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Get a Free Website Audit</span>
              </button>

              <button
                id="hero-secondary-work-btn"
                onClick={onViewWork}
                className="border border-white/20 hover:border-white/40 px-8 py-4 rounded font-bold text-base text-[#F5F7FA] bg-white/[0.02] transition-colors flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFC]"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 text-[#9AA3AF]" />
              </button>
            </div>

            {/* Supporting line */}
            <p className="text-[#9AA3AF] text-[11px] font-medium uppercase tracking-widest pt-1">
              Serving growing businesses across the <span className="text-[#F5F7FA]">USA</span>, <span className="text-[#F5F7FA]">UK</span> & <span className="text-[#F5F7FA]">UAE</span>.
            </p>
          </div>

          {/* Right Column: Immersive Layered Tilted Browser Mockups */}
          <div className="w-full lg:w-1/2 relative min-h-[440px] sm:min-h-[500px] flex items-center justify-center">
            {/* Background Layered Card (Tilted -6deg) */}
            <div className="absolute w-[320px] sm:w-[440px] h-[260px] sm:h-[300px] bg-[#1a1c21] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform -rotate-6 -translate-x-4 sm:-translate-x-10 -translate-y-6 sm:-translate-y-10 z-0">
              <div className="h-6 bg-[#25282e] flex items-center px-3 gap-1.5 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <span className="ml-2 text-[9px] font-mono text-white/30 truncate">preview.aura-dining.co</span>
              </div>
              <div className="p-5 sm:p-6 flex flex-col gap-3 sm:gap-4">
                <div className="h-4 w-2/3 bg-white/10 rounded" />
                <div className="h-24 sm:h-28 w-full bg-[#7C5CFC]/10 border border-[#7C5CFC]/20 rounded-lg flex flex-col items-center justify-center p-3 text-center">
                  <span className="text-[10px] text-[#A78BFA] uppercase tracking-wider font-semibold">Digital Experiences</span>
                  <span className="text-[9px] text-[#9AA3AF] mt-1">High Performance & Dynamic UI</span>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <div className="h-14 sm:h-16 flex-1 bg-white/5 rounded p-2 flex flex-col justify-end">
                    <div className="h-1.5 w-1/2 bg-white/20 rounded" />
                  </div>
                  <div className="h-14 sm:h-16 flex-1 bg-white/5 rounded p-2 flex flex-col justify-end">
                    <div className="h-1.5 w-2/3 bg-[#7C5CFC]/40 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Foreground Focused Card (Tilted 2deg) */}
            <div className="relative w-[340px] sm:w-[460px] h-[300px] sm:h-[340px] bg-[#15171b] rounded-xl border border-[#7C5CFC]/40 shadow-[0_0_50px_rgba(124,92,252,0.2)] overflow-hidden transform rotate-2 translate-x-2 sm:translate-x-6 translate-y-4 sm:translate-y-6 z-10 flex flex-col justify-between">
              {/* Window Bar */}
              <div className="h-7 bg-[#1f2127] flex items-center justify-between px-3.5 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#7C5CFC]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="text-[10px] font-mono text-[#A78BFA]">etora.studio/live</div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-mono text-emerald-400">99.8% Speed</span>
                </div>
              </div>

              {/* Inside Live Preview Card */}
              <div className="p-5 sm:p-7 flex flex-col gap-4 flex-1 justify-between">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-28 bg-[#7C5CFC]/30 rounded" />
                    <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">Live</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-4 h-4 bg-white/10 rounded-full flex items-center justify-center text-[8px] text-white">✓</div>
                    <div className="w-4 h-4 bg-white/10 rounded-full" />
                  </div>
                </div>

                <div className="h-6 sm:h-8 w-full bg-white/5 rounded flex items-center px-3">
                  <div className="h-2 w-1/3 bg-white/20 rounded" />
                </div>

                <div className="border border-white/10 rounded-lg flex overflow-hidden bg-[#0F1217]">
                  <div className="w-1/3 border-r border-white/10 bg-white/5 p-3 flex flex-col justify-between">
                    <div className="h-2 w-full bg-white/20 rounded" />
                    <div className="h-2 w-3/4 bg-white/15 rounded" />
                    <div className="h-2 w-1/2 bg-[#7C5CFC]/40 rounded" />
                  </div>
                  <div className="flex-1 p-3.5 flex flex-col justify-between">
                    <div className="h-2 w-full bg-white/20 rounded" />
                    <div className="h-2 w-4/5 bg-white/15 rounded" />
                    <div className="flex items-center justify-between pt-1">
                      <div className="h-5 px-3 bg-[#7C5CFC] text-white text-[10px] font-semibold rounded flex items-center">
                        Enquire Now
                      </div>
                      <span className="text-[9px] text-[#9AA3AF]">Mobile-First</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-[#9AA3AF] pt-1 border-t border-white/5">
                  <span>Built for Business Growth</span>
                  <span className="text-[#A78BFA] font-medium font-mono">ETORA Studio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
