import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/content';

interface FAQSectionProps {
  onOpenAudit?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenAudit }) => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 md:py-28 bg-[#0E1116] border-t border-[#1A1F29] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#7C5CFC] mb-3">
            FREQUENT QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] leading-tight mb-4">
            Answers Before We Begin.
          </h2>
          <p className="text-base sm:text-lg text-[#9AA3AF] leading-relaxed">
            Everything you need to know about working with ETORA Studio, our timelines, and deliverables.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#12151C] border-[#7C5CFC]/40 shadow-lg'
                    : 'bg-[#12151C]/60 border-[#1F2430] hover:border-[#232936]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#7C5CFC]"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#F5F7FA]">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-md bg-[#161A22] border border-[#232936] text-[#A78BFA] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#7C5CFC]/20 text-[#F5F7FA]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-[#9AA3AF] leading-relaxed border-t border-[#1F2430]/70 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    {faq.ctaText && (
                      <div className="mt-4 pt-3 border-t border-[#1F2430]/70">
                        <button
                          onClick={onOpenAudit}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A78BFA] hover:text-[#F5F7FA] transition-colors cursor-pointer group"
                        >
                          <span>{faq.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#7C5CFC] group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
