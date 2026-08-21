import React from 'react';
import { EyeOff, SmartphoneNfc, ArrowRightCircle, ArrowRight } from 'lucide-react';
import { PROBLEM_POINTS } from '../data/content';

interface ProblemSectionProps {
  onLearnMore: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onLearnMore }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'EyeOff':
        return <EyeOff className="w-5 h-5 text-[#A78BFA]" />;
      case 'SmartphoneNfc':
        return <SmartphoneNfc className="w-5 h-5 text-[#A78BFA]" />;
      case 'ArrowRightCircle':
        return <ArrowRightCircle className="w-5 h-5 text-[#A78BFA]" />;
      default:
        return <EyeOff className="w-5 h-5 text-[#A78BFA]" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#0B0D10] relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-[-100px] w-[350px] h-[350px] bg-[#7C5CFC] opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[1px] bg-[#7C5CFC]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#7C5CFC]">
              THE REALITY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] leading-tight mb-6">
            Your Website Is Often <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FA] to-[#9AA3AF]">
              Your First Impression.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#9AA3AF] leading-relaxed">
            A slow, outdated or confusing website can make a great business look less credible. ETORA Studio helps businesses turn their online presence into a professional experience that builds trust and encourages customers to take action.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PROBLEM_POINTS.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 sm:p-8 rounded-xl bg-[#12151C] border border-white/10 hover:border-[#7C5CFC]/40 transition-all duration-200 group flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#7C5CFC]/50 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#7C5CFC]">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#F5F7FA] mb-3 group-hover:text-[#A78BFA] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9AA3AF] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-[#9AA3AF] group-hover:text-[#F5F7FA] transition-colors">
                <span>The Fix: Conversion-driven redesign</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div>
          <button
            id="problem-see-how-btn"
            onClick={onLearnMore}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#A78BFA] hover:text-white transition-colors group cursor-pointer focus:outline-none focus-visible:underline"
          >
            <span>See How We Can Improve It</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
