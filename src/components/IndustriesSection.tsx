import React from 'react';
import { Utensils, Building2, Wrench, Briefcase, Users, TrendingUp, Check } from 'lucide-react';
import { INDUSTRIES } from '../data/content';

export const IndustriesSection: React.FC = () => {
  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'restaurants-cafes':
        return <Utensils className="w-5 h-5 text-[#A78BFA]" />;
      case 'real-estate':
        return <Building2 className="w-5 h-5 text-[#A78BFA]" />;
      case 'local-services':
        return <Wrench className="w-5 h-5 text-[#A78BFA]" />;
      case 'professional-services':
        return <Briefcase className="w-5 h-5 text-[#A78BFA]" />;
      case 'consultants':
        return <Users className="w-5 h-5 text-[#A78BFA]" />;
      case 'growing-businesses':
        return <TrendingUp className="w-5 h-5 text-[#A78BFA]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#A78BFA]" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#0B0D10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#7C5CFC] mb-3">
            WHO WE HELP
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] leading-tight mb-6">
            Built for Businesses Ready to Grow Online.
          </h2>
          <p className="text-base sm:text-lg text-[#9AA3AF] leading-relaxed">
            From local businesses to growing companies, we create digital experiences around the way your customers actually interact with your business.
          </p>
        </div>

        {/* Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.id}
              id={`industry-card-${industry.id}`}
              className="p-6 sm:p-7 rounded-xl bg-[#12151C] border border-[#1F2430] hover:border-[#7C5CFC]/50 hover:bg-[#161A22] transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#161A22] border border-[#232936] group-hover:border-[#7C5CFC]/40 flex items-center justify-center mb-5 transition-colors">
                  {getIndustryIcon(industry.id)}
                </div>
                <h3 className="text-xl font-bold text-[#F5F7FA] mb-2 group-hover:text-[#A78BFA] transition-colors">
                  {industry.title}
                </h3>
                <p className="text-sm text-[#9AA3AF] leading-relaxed mb-4">
                  {industry.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1F2430]/70">
                <div className="flex items-center gap-1.5 text-xs text-[#A78BFA]">
                  <Check className="w-3.5 h-3.5 shrink-0 text-[#7C5CFC]" />
                  <span className="truncate">{industry.example}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
