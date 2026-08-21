import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProblemSection } from './components/ProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AuditCTASection } from './components/AuditCTASection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { WhyEtoraSection } from './components/WhyEtoraSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#F5F7FA] flex flex-col selection:bg-[#7C5CFC]/30 selection:text-[#F5F7FA]">
      {/* Sticky Header with Logo Placeholder and Main Nav */}
      <Header onOpenAudit={() => setIsAuditModalOpen(true)} />

      {/* Main Single-Page Agency Body */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenAudit={() => setIsAuditModalOpen(true)}
          onViewWork={() => scrollToSection('work')}
        />

        {/* 2. Trust / Value Strip */}
        <TrustStrip />

        {/* 3. Problem / Positioning Section */}
        <ProblemSection onLearnMore={() => scrollToSection('services')} />

        {/* 4. Services Section */}
        <ServicesSection onContactClick={() => scrollToSection('contact')} />

        {/* 5. Industries Section */}
        <IndustriesSection />

        {/* 6. Portfolio / Selected Work Section */}
        <PortfolioSection onAuditClick={() => setIsAuditModalOpen(true)} />

        {/* 7. Website Audit Call-To-Action Panel */}
        <AuditCTASection onOpenAudit={() => setIsAuditModalOpen(true)} />

        {/* 8. Process Section */}
        <ProcessSection />

        {/* 9. About Section (with Vertical Logo Placeholder) */}
        <AboutSection />

        {/* 10. Why ETORA Section */}
        <WhyEtoraSection />

        {/* 11. FAQ Section */}
        <FAQSection onOpenAudit={() => setIsAuditModalOpen(true)} />

        {/* 12. Final CTA Section */}
        <FinalCTASection
          onOpenAudit={() => setIsAuditModalOpen(true)}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 13. Contact Section */}
        <ContactSection />
      </main>

      {/* 15. Footer (with Wordmark & Monogram placeholders) */}
      <Footer />

      {/* Free Website Audit Modal / Intake Drawer */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
