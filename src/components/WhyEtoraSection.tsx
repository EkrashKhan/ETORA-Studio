import React from 'react';
import { Target, Layers, MessageSquare, Sparkles } from 'lucide-react';
import { WHY_ETORA_POINTS } from '../data/content';

export const WhyEtoraSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-[#A78BFA]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#A78BFA]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[#A78BFA]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#A78BFA]" />;
      default:
        return <Target className="w-5 h-5 text-[#A78BFA]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#0E1116] border-t border-[#1A1F29] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#7C5CFC] mb-2">
            OUR COMMITMENT
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5F7FA]">
            Built with Intention. No Fluff.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_ETORA_POINTS.map((point) => (
            <div
              key={point.title}
              className="p-6 rounded-xl bg-[#12151C] border border-[#1F2430] hover:border-[#7C5CFC]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#161A22] border border-[#232936] flex items-center justify-center mb-4">
                  {getIcon(point.iconName)}
                </div>
                <h3 className="text-lg font-bold text-[#F5F7FA] mb-2">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9AA3AF] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
