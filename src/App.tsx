import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ServicesInfographic } from './components/ServicesInfographic';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServiceModels } from './components/ServiceModels';
import { IndustriesSection } from './components/IndustriesSection';
import { ProcessSection } from './components/ProcessSection';
import { BenefitsSection } from './components/BenefitsSection';
import { GallerySection } from './components/GallerySection';
import { CustomerExperience } from './components/CustomerExperience';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { BackToTop } from './components/BackToTop';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedFrequency, setSelectedFrequency] = useState<string>('Not Sure');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');

  const handleOpenQuote = (frequency?: string) => {
    setSelectedService('');
    setSelectedIndustry('');
    setSelectedFrequency(frequency || 'Not Sure');
    setIsQuoteOpen(true);
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setSelectedIndustry('');
    setIsQuoteOpen(true);
  };

  const handleSelectIndustryForQuote = (industryName: string) => {
    setSelectedIndustry(industryName);
    setSelectedService('');
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-sky-500 selection:text-white">
      {/* Primary Sticky Header */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-grow">
        {/* 1 & 4. Hero Section with 5. Hero Infographic */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 6. Trust & Value Strip */}
        <TrustStrip />

        {/* 7. About Sharwin & 5-Step Approach Timeline */}
        <AboutSection onOpenQuote={() => handleOpenQuote()} />

        {/* 8. Main 12 Services Grid with Deep Modal Detail */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* 9. Services Ecosystem Infographic (One Partner. Multiple Solutions) */}
        <ServicesInfographic onSelectSolution={handleSelectServiceForQuote} />

        {/* 10. Why Choose Sharwin (6 Infographic Cards) */}
        <WhyChooseUs />

        {/* 11. Your Schedule, Your Requirements (ONE-OFF, PERIODIC, REGULAR) */}
        <ServiceModels onOpenQuote={(freq) => handleOpenQuote(freq)} />

        {/* 12. Facilities We Support / Industries */}
        <IndustriesSection onSelectIndustryForQuote={handleSelectIndustryForQuote} />

        {/* 13. Cleaning Process (How We Work 5-Step Animated Timeline) */}
        <ProcessSection />

        {/* 14. Performance & Operational Benefits (4 Large Blocks) */}
        <BenefitsSection />

        {/* 15. Operational Gallery & Portfolio with Lightbox */}
        <GallerySection />

        {/* 16. Customer Experience Cycle (Listen -> Understand -> Plan -> Deliver -> Improve) */}
        <CustomerExperience />

        {/* 17. High-Impact CTA Banner */}
        <CtaBanner onOpenQuote={() => handleOpenQuote()} />

        {/* 18. Contact & Map Location in Doha, Qatar */}
        <ContactSection />
      </main>

      {/* 20. Comprehensive Corporate 4-Column Footer */}
      <Footer 
        onOpenQuote={() => handleOpenQuote()}
        onSelectServiceForQuote={handleSelectServiceForQuote}
      />

      {/* 19. Dedicated Interactive Free Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialService={selectedService}
        initialFrequency={selectedFrequency}
        initialIndustry={selectedIndustry}
      />

      {/* Floating Back-To-Top Button */}
      <BackToTop />

      {/* Floating WhatsApp Chat Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
