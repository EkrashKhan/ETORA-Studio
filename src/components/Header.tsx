import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { LogoPlaceholder } from './LogoPlaceholder';

interface HeaderProps {
  onOpenAudit: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for navigation highlight
      const sections = ['hero', 'services', 'work', 'process', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0D10]/95 backdrop-blur-md border-b border-white/10 py-3 sm:py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent border-b border-white/10 py-3.5 sm:py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Brand / Primary Logo Placeholder */}
        <a
          href="#hero"
          id="header-brand-link"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFC] rounded-md"
        >
          <LogoPlaceholder type="primary" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-[#9AA3AF]" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`transition-colors relative pb-1 focus:outline-none focus-visible:text-[#F5F7FA] ${
                  isActive
                    ? 'text-[#F5F7FA] border-b-2 border-[#7C5CFC] font-semibold'
                    : 'text-[#9AA3AF] hover:text-[#F5F7FA]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            id="header-audit-cta-btn"
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-[#7C5CFC] hover:bg-[#A78BFA] active:scale-[0.98] text-white text-sm font-semibold tracking-tight transition-all duration-200 shadow-md shadow-[#7C5CFC]/25 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Get a Free Website Audit</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            id="mobile-audit-header-btn"
            onClick={onOpenAudit}
            className="sm:hidden text-xs font-semibold px-3 py-1.5 rounded bg-[#7C5CFC] text-white"
          >
            Free Audit
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="p-2 rounded-lg bg-[#161A22] border border-white/10 text-[#F5F7FA] hover:text-[#7C5CFC] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFC]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden bg-[#0F1217] border-b border-[#1F2430] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl"
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-link-${link.id}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#161A22] text-[#A78BFA] font-semibold'
                    : 'text-[#9AA3AF] hover:text-[#F5F7FA] hover:bg-[#161A22]/50'
                }`}
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#1F2430] space-y-3">
            <button
              id="mobile-drawer-audit-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#7C5CFC] hover:bg-[#6A48F0] text-white font-semibold text-sm transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get a Free Website Audit</span>
            </button>
            <p className="text-[11px] text-center text-[#9AA3AF]">
              Serving businesses across the USA, UK & UAE
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
