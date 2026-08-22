import React from 'react';
import { LogoPlaceholder } from './LogoPlaceholder';
import { BRAND_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080A0D] border-t border-white/10 py-16 text-sm text-[#9AA3AF] relative overflow-hidden">
      {/* Ambient footer glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#7C5CFC] opacity-5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Wordmark Placeholder */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <LogoPlaceholder type="wordmark" />
            </div>
            <p className="text-xs sm:text-sm text-[#9AA3AF] max-w-sm leading-relaxed">
              {BRAND_INFO.subTagline}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#9AA3AF]/80">
              <span className="text-[#A78BFA] font-medium">Studio Coverage:</span>
              <span className="text-[#F5F7FA] font-semibold">USA • UK • UAE</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5F7FA]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(item.href);
                    }}
                    className="text-[#9AA3AF] hover:text-[#A78BFA] transition-colors focus:outline-none focus-visible:underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Channel Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5F7FA]">
              Connect & Channels
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="#contact"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between hover:border-[#7C5CFC]/40 hover:bg-white/[0.08] transition-all group"
              >
                <span className="font-medium text-[#F5F7FA] group-hover:text-[#A78BFA] transition-colors">Instagram</span>
                <span className="text-[10px] text-[#9AA3AF]">@etorastudio</span>
              </a>
              <a
                href="#contact"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between hover:border-[#7C5CFC]/40 hover:bg-white/[0.08] transition-all group"
              >
                <span className="font-medium text-[#F5F7FA] group-hover:text-[#A78BFA] transition-colors">LinkedIn</span>
                <span className="text-[10px] text-[#9AA3AF]">ETORA Studio</span>
              </a>
              <a
                href="#contact"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between hover:border-[#7C5CFC]/40 hover:bg-white/[0.08] transition-all group"
              >
                <span className="font-medium text-[#F5F7FA] group-hover:text-[#A78BFA] transition-colors">X / Twitter</span>
                <span className="text-[10px] text-[#9AA3AF]">@etora_studio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <LogoPlaceholder type="monogram" className="w-9 h-9 sm:w-10 sm:h-10 shrink-0" />
            <p>© {BRAND_INFO.copyrightYear} ETORA Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
