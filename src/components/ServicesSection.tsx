import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  LayoutTemplate,
  Layers,
  RefreshCw,
  Cpu,
  Smartphone,
  ShoppingBag,
  MapPin,
  Store,
  Search,
  Share2,
  Video,
  Target,
  TrendingUp,
  Workflow,
  Bot,
  FileText,
  Palette,
  ShieldCheck,
} from 'lucide-react';
import { SERVICES } from '../data/content';

interface ServicesSectionProps {
  onContactClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onContactClick }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'business-websites':
        return <LayoutTemplate className="w-5 h-5 text-[#A78BFA]" />;
      case 'landing-pages':
        return <Layers className="w-5 h-5 text-[#A78BFA]" />;
      case 'website-redesign':
        return <RefreshCw className="w-5 h-5 text-[#A78BFA]" />;
      case 'custom-web-solutions':
        return <Cpu className="w-5 h-5 text-[#A78BFA]" />;
      case 'mobile-app-development':
        return <Smartphone className="w-5 h-5 text-[#A78BFA]" />;
      case 'ecommerce-development':
        return <ShoppingBag className="w-5 h-5 text-[#A78BFA]" />;
      case 'local-seo':
        return <MapPin className="w-5 h-5 text-[#A78BFA]" />;
      case 'google-business-profile':
        return <Store className="w-5 h-5 text-[#A78BFA]" />;
      case 'seo-ai-search-optimization':
        return <Search className="w-5 h-5 text-[#A78BFA]" />;
      case 'social-media-management':
        return <Share2 className="w-5 h-5 text-[#A78BFA]" />;
      case 'short-form-content':
        return <Video className="w-5 h-5 text-[#A78BFA]" />;
      case 'paid-advertising':
        return <Target className="w-5 h-5 text-[#A78BFA]" />;
      case 'conversion-optimization':
        return <TrendingUp className="w-5 h-5 text-[#A78BFA]" />;
      case 'marketing-automation':
        return <Workflow className="w-5 h-5 text-[#A78BFA]" />;
      case 'ai-chatbots-customer-support':
        return <Bot className="w-5 h-5 text-[#A78BFA]" />;
      case 'content-copywriting':
        return <FileText className="w-5 h-5 text-[#A78BFA]" />;
      case 'brand-visual-design':
        return <Palette className="w-5 h-5 text-[#A78BFA]" />;
      case 'website-maintenance-support':
        return <ShieldCheck className="w-5 h-5 text-[#A78BFA]" />;
      default:
        return <LayoutTemplate className="w-5 h-5 text-[#A78BFA]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0E1116] border-t border-white/10 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-[-80px] w-[400px] h-[400px] bg-[#7C5CFC] opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[1px] bg-[#7C5CFC]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#7C5CFC]">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] leading-tight mb-6">
            Digital Experiences <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FA] via-[#A78BFA] to-[#7C5CFC]">
              Built Around Your Business.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#9AA3AF] leading-relaxed">
            We focus on practical digital solutions that make your business look better, perform better and convert better.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="p-6 sm:p-8 rounded-xl bg-[#12151C] border border-white/10 hover:border-[#7C5CFC]/50 transition-all duration-200 flex flex-col justify-between shadow-xl hover:shadow-[0_0_30px_rgba(124,92,252,0.1)] group"
            >
              <div>
                {/* Header: Service Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#7C5CFC] group-hover:border-[#7C5CFC]/40 transition-colors">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#A78BFA] px-2.5 py-1 rounded bg-[#7C5CFC]/15 border border-[#7C5CFC]/20">
                      Service {service.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#F5F7FA] mb-2 group-hover:text-[#A78BFA] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-[#A78BFA] mb-4">
                  {service.tagline}
                </p>
                <p className="text-sm text-[#9AA3AF] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <span className="text-[11px] font-semibold text-[#F5F7FA] uppercase tracking-wider block mb-2">
                    Key Inclusions
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-[#9AA3AF]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7C5CFC] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={onContactClick}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5F7FA] hover:text-[#A78BFA] transition-colors group/btn cursor-pointer"
                >
                  <span>{service.ctaText || `Discuss ${service.title}`}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#7C5CFC] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA block */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#12151C] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-[#F5F7FA]">
              Need something specific? Tell us what you're building.
            </h4>
            <p className="text-xs sm:text-sm text-[#9AA3AF] mt-0.5">
              From tailored calculators to complex intake funnels, we're ready to engineer it.
            </p>
          </div>
          <button
            id="services-bottom-talk-btn"
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#161A22] hover:bg-[#1E232F] border border-white/10 text-sm font-semibold text-[#F5F7FA] hover:text-white transition-all shrink-0 cursor-pointer shadow-md hover:border-[#7C5CFC]/40"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4 text-[#7C5CFC]" />
          </button>
        </div>
      </div>
    </section>
  );
};
