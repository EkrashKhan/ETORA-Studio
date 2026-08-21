import React from 'react';
import { UserCheck, Target, Cpu, CheckCircle } from 'lucide-react';
import { LogoPlaceholder } from './LogoPlaceholder';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0B0D10] relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-[-80px] w-[450px] h-[450px] bg-[#7C5CFC] opacity-5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Story & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#7C5CFC]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#7C5CFC]">
                ABOUT ETORA
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] leading-tight">
              Two Founders. One Studio. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FA] to-[#A78BFA]">
                Built to Do Great Digital Work.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#9AA3AF] leading-relaxed">
              <p>
                ETORA Studio is a small, independent web and digital studio focused on helping businesses build a stronger presence online.
              </p>
              <p>
                We combine modern design, practical development and business-focused thinking to create digital experiences that are clear, professional and built with purpose.
              </p>
            </div>

            {/* Founders / Studio Attributes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-lg bg-[#12151C] border border-white/10">
                <span className="text-xs font-bold text-[#F5F7FA] block">Small Team</span>
                <span className="text-[11px] text-[#9AA3AF]">Founders lead every project</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#12151C] border border-white/10">
                <span className="text-xs font-bold text-[#F5F7FA] block">Direct Contact</span>
                <span className="text-[11px] text-[#9AA3AF]">No account managers or layers</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#12151C] border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-xs font-bold text-[#F5F7FA] block">High Craft</span>
                <span className="text-[11px] text-[#9AA3AF]">Obsessive detail & clean code</span>
              </div>
            </div>

            {/* Why ETORA Block */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#7C5CFC]">
                Why ETORA?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#F5F7FA]">
                    <UserCheck className="w-3.5 h-3.5 text-[#7C5CFC]" />
                    <span>Personal Attention</span>
                  </div>
                  <p className="text-xs text-[#9AA3AF] leading-normal">
                    You work directly with the people building your project.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#F5F7FA]">
                    <Target className="w-3.5 h-3.5 text-[#7C5CFC]" />
                    <span>Business First</span>
                  </div>
                  <p className="text-xs text-[#9AA3AF] leading-normal">
                    We design around your goals, not just visual trends.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#F5F7FA]">
                    <Cpu className="w-3.5 h-3.5 text-[#7C5CFC]" />
                    <span>Modern Approach</span>
                  </div>
                  <p className="text-xs text-[#9AA3AF] leading-normal">
                    Modern tools and workflows to create better experiences efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Branded Block & Vertical Logo Placeholder */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-md p-8 sm:p-10 rounded-2xl bg-[#12151C] border border-white/10 text-center flex flex-col items-center justify-center space-y-6 shadow-2xl relative overflow-hidden">
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#7C5CFC]/10 to-transparent"
                aria-hidden="true"
              />

              {/* Reserved Prominent Space for Logo */}
              <div className="relative z-10 w-full flex justify-center">
                <LogoPlaceholder
                  type="vertical"
                  className="w-full"
                  subtext="Official Studio Brandmark"
                />
              </div>

              <div className="relative z-10 space-y-2 pt-2 border-t border-white/10 w-full">
                <div className="flex items-center justify-center gap-2 text-xs text-[#A78BFA] font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-[#7C5CFC]" />
                  <span>Independent Digital Studio</span>
                </div>
                <p className="text-[11px] text-[#9AA3AF]">
                  Serving clients in USA • UK • UAE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
