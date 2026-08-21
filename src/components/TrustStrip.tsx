import React from 'react';
import { LogoPlaceholder } from './LogoPlaceholder';

export const TrustStrip: React.FC = () => {
  const trustPillars = [
    { code: 'MD', title: 'Modern Design', desc: 'Contemporary aesthetics' },
    { code: 'MF', title: 'Mobile-First', desc: 'Flawless on all screens' },
    { code: 'PF', title: 'Performance-Focused', desc: 'Instant load times' },
    { code: 'BB', title: 'Built for Business', desc: 'Engineered to convert' },
  ];

  return (
    <section className="py-6 sm:py-7 bg-[#0E1116] border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: 4 Core Pillars with Immersive Code Monograms */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full md:w-auto">
          {trustPillars.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 group transition-opacity opacity-85 hover:opacity-100"
            >
              <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#7C5CFC] font-bold text-xs shrink-0 group-hover:border-[#7C5CFC]/40 group-hover:text-[#A78BFA] transition-colors">
                {item.code}
              </div>
              <div className="min-w-0">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#F5F7FA] block truncate">
                  {item.title}
                </span>
                <span className="text-[10px] text-[#9AA3AF] hidden lg:block">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Studio Monogram Marker with Immersive UI typography */}
        <div className="flex items-center gap-3 border-t md:border-t-0 border-white/5 pt-4 md:pt-0 w-full md:w-auto justify-center md:justify-end shrink-0">
          <LogoPlaceholder type="monogram" className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 shadow-[0_0_12px_rgba(124,92,252,0.25)]" />
          <div className="flex items-center gap-2">
            <span className="font-extrabold tracking-[0.2em] text-xs sm:text-sm text-[#F5F7FA] uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#F5F7FA] via-[#F5F7FA] to-[#A78BFA]">
              ETORA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFC] shadow-[0_0_6px_#7C5CFC]" />
            <span className="text-[11px] font-mono tracking-widest text-[#9AA3AF]">
              EST. 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
