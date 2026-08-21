import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const placeholders = [
    {
      id: '01',
      placeholderQuote: '[TESTIMONIAL PLACEHOLDER 01]',
      subtext: 'Reserved for verified client feedback upon project delivery.',
      name: '[CLIENT NAME]',
      role: '[BUSINESS / ROLE — USA MARKET]',
    },
    {
      id: '02',
      placeholderQuote: '[TESTIMONIAL PLACEHOLDER 02]',
      subtext: 'Reserved for verified client feedback upon project delivery.',
      name: '[CLIENT NAME]',
      role: '[BUSINESS / ROLE — UK MARKET]',
    },
    {
      id: '03',
      placeholderQuote: '[TESTIMONIAL PLACEHOLDER 03]',
      subtext: 'Reserved for verified client feedback upon project delivery.',
      name: '[CLIENT NAME]',
      role: '[BUSINESS / ROLE — UAE MARKET]',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0B0D10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#7C5CFC] mb-3">
            CLIENT FEEDBACK
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] leading-tight mb-4">
            Client Words & Project Outcomes
          </h2>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161A22] border border-[#232936] text-xs text-[#9AA3AF]">
            <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>Structured review slots configured for upcoming and active client handoffs</span>
          </div>
        </div>

        {/* Testimonial Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholders.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-xl bg-[#12151C] border border-dashed border-[#7C5CFC]/30 hover:border-[#7C5CFC]/60 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#161A22] border border-[#232936] flex items-center justify-center mb-6 text-[#7C5CFC]">
                  <Quote className="w-4 h-4" />
                </div>

                <div className="font-mono text-sm font-semibold text-[#A78BFA] mb-2">
                  {item.placeholderQuote}
                </div>
                <p className="text-xs text-[#9AA3AF] leading-relaxed">
                  "{item.subtext}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1F2430] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#161A22] border border-[#232936] flex items-center justify-center text-xs font-mono text-[#F5F7FA]">
                  {item.id}
                </div>
                <div>
                  <div className="font-mono text-xs font-semibold text-[#F5F7FA]">
                    {item.name}
                  </div>
                  <div className="font-mono text-[10px] text-[#9AA3AF]">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
