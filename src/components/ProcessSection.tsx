import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { Check } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#0E1116] border-t border-[#1A1F29] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#7C5CFC] mb-3">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] leading-tight mb-6">
            A Simple Process. A Better Website.
          </h2>
          <p className="text-base sm:text-lg text-[#9AA3AF] leading-relaxed">
            We follow a streamlined, transparent 4-stage workflow from initial audit to post-launch performance.
          </p>
        </div>

        {/* 4 Steps Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              id={`process-step-${step.step}`}
              className="p-6 sm:p-7 rounded-xl bg-[#12151C] border border-[#1F2430] hover:border-[#7C5CFC]/40 transition-all duration-200 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-bold text-[#7C5CFC]">
                    {step.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#7C5CFC]/40" />
                </div>

                <h3 className="text-xl font-bold text-[#F5F7FA] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9AA3AF] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1F2430]/70 space-y-2">
                {step.details.map((detail) => (
                  <div key={detail} className="flex items-start gap-2 text-xs text-[#9AA3AF]">
                    <Check className="w-3.5 h-3.5 text-[#7C5CFC] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
