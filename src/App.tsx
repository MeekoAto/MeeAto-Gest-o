import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickFeatures } from './components/QuickFeatures';
import { ProductsSection } from './components/ProductsSection';
import { PricingSection } from './components/PricingSection';
import { DownloadsSection } from './components/DownloadsSection';
import { SupportSection } from './components/SupportSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

import { TrialModal } from './components/modals/TrialModal';
import { QuickSearchModal } from './components/modals/QuickSearchModal';
import { PolicyModal } from './components/modals/PolicyModal';

export default function App() {
  // Modal states
  const [trialModal, setTrialModal] = useState<{
    isOpen: boolean;
    interest: string;
  }>({
    isOpen: false,
    interest: 'Gestão + Connector',
  });

  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const [policyModal, setPolicyModal] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms';
  }>({
    isOpen: false,
    type: 'privacy',
  });

  // Action handlers
  const handleOpenTrial = (interest: string = 'Gestão + Connector') => {
    setTrialModal({ isOpen: true, interest });
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Header with brand and menu (without Entrar button) */}
      <Header
        onOpenTrial={() => handleOpenTrial('Gestão + Connector')}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero
          onOpenTrial={() => handleOpenTrial('MeeAto Gestão')}
          onExploreSystem={() => scrollToSection('gestao')}
        />

        {/* 3. Quick Features 10-item Grid */}
        <QuickFeatures />

        {/* 4. Products Duo Cards (MeeAto Gestão + MeeAto Connector) & Deep Dives */}
        <ProductsSection
          onOpenTrial={() => handleOpenTrial('MeeAto Gestão')}
        />

        {/* 5. Soluções e Investimento */}
        <PricingSection
          onOpenTrial={() => handleOpenTrial('MeeAto Gestão')}
          onOpenContact={() => scrollToSection('contato')}
          onExploreConnector={() => scrollToSection('connector')}
        />

        {/* 6. Informative Access & Implementation Section */}
        <DownloadsSection
          onOpenTrial={() => handleOpenTrial('MeeAto Connector')}
        />

        {/* 7. Support & Contact Section */}
        <SupportSection
          onOpenTrial={() => handleOpenTrial('Gestão + Connector')}
        />

        {/* 8. Final CTA & Value Pillars Banner */}
        <CtaBanner
          onOpenTrial={() => handleOpenTrial('Gestão + Connector')}
        />
      </main>

      {/* 9. Footer */}
      <Footer
        onOpenPrivacy={() => setPolicyModal({ isOpen: true, type: 'privacy' })}
        onOpenTerms={() => setPolicyModal({ isOpen: true, type: 'terms' })}
      />

      {/* Unified Demonstration Request Modal */}
      <TrialModal
        isOpen={trialModal.isOpen}
        onClose={() => setTrialModal({ ...trialModal, isOpen: false })}
        initialInterest={trialModal.interest}
      />

      {/* Quick Search Modal */}
      <QuickSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={scrollToSection}
        onOpenTrial={() => handleOpenTrial('Gestão + Connector')}
      />

      {/* Policy and Terms Modal */}
      <PolicyModal
        isOpen={policyModal.isOpen}
        onClose={() => setPolicyModal({ ...policyModal, isOpen: false })}
        type={policyModal.type}
      />
    </div>
  );
}
