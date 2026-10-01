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

import { AuthModal } from './components/modals/AuthModal';
import { TrialModal } from './components/modals/TrialModal';
import { ConnectorDownloadModal } from './components/modals/ConnectorDownloadModal';
import { QuickSearchModal } from './components/modals/QuickSearchModal';
import { PolicyModal } from './components/modals/PolicyModal';
import { Plan } from './types';

export default function App() {
  // Modal states
  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    mode: 'login' | 'register';
  }>({
    isOpen: false,
    mode: 'login',
  });

  const [trialModal, setTrialModal] = useState<{
    isOpen: boolean;
    planName: string;
  }>({
    isOpen: false,
    planName: 'Teste Gratuito',
  });

  const [downloadModal, setDownloadModal] = useState<{
    isOpen: boolean;
    selectedOS: string;
  }>({
    isOpen: false,
    selectedOS: 'Windows 10 / 11 (64-bit)',
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
  const handleOpenLogin = () => {
    setAuthModal({ isOpen: true, mode: 'login' });
  };

  const handleOpenRegister = () => {
    setAuthModal({ isOpen: true, mode: 'register' });
  };

  const handleOpenTrial = (planName: string = 'Teste Gratuito') => {
    setTrialModal({ isOpen: true, planName });
  };

  const handleOpenDownload = (osName: string = 'Windows 10 / 11 (64-bit)') => {
    setDownloadModal({ isOpen: true, selectedOS: osName });
  };

  const handleSelectPlan = (plan: Plan, billingCycle: 'monthly' | 'annual') => {
    if (plan.id === 'free_trial') {
      handleOpenTrial(plan.name);
    } else {
      // Trigger registration/trial configured with the selected tier
      handleOpenTrial(`${plan.name} (${billingCycle === 'annual' ? 'Anual' : 'Mensal'})`);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Header with brand and menu */}
      <Header
        onOpenLogin={handleOpenLogin}
        onOpenTrial={() => handleOpenTrial('Teste Gratuito')}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero
          onOpenTrial={() => handleOpenTrial('Teste Gratuito')}
          onExploreSystem={() => scrollToSection('gestao')}
        />

        {/* 3. Quick Features 10-item Grid */}
        <QuickFeatures />

        {/* 4. Products Duo Cards (MeeAto Gestão + MeeAto Connector) & Deep Dives */}
        <ProductsSection
          onOpenTrial={() => handleOpenTrial('MeeAto Gestão Demo')}
          onOpenDownload={() => handleOpenDownload('Windows 10 / 11 (64-bit)')}
        />

        {/* 5. Plans and Pricing Section */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
          onOpenContact={() => scrollToSection('contato')}
        />

        {/* 6. Downloads Section for MeeAto Connector */}
        <DownloadsSection
          onDownloadRequested={(os) => handleOpenDownload(os)}
        />

        {/* 7. Support & Contact Section */}
        <SupportSection
          onOpenTrial={() => handleOpenTrial('Teste Gratuito')}
        />

        {/* 8. Final CTA & Stats Banner */}
        <CtaBanner
          onOpenTrial={() => handleOpenTrial('Teste Gratuito')}
        />
      </main>

      {/* 9. Footer */}
      <Footer
        onOpenPrivacy={() => setPolicyModal({ isOpen: true, type: 'privacy' })}
        onOpenTerms={() => setPolicyModal({ isOpen: true, type: 'terms' })}
      />

      {/* Prepared Feature Modals */}
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        defaultMode={authModal.mode}
      />

      <TrialModal
        isOpen={trialModal.isOpen}
        onClose={() => setTrialModal({ ...trialModal, isOpen: false })}
        initialPlanName={trialModal.planName}
      />

      <ConnectorDownloadModal
        isOpen={downloadModal.isOpen}
        onClose={() => setDownloadModal({ ...downloadModal, isOpen: false })}
        selectedOS={downloadModal.selectedOS}
      />

      <QuickSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={scrollToSection}
        onOpenTrial={() => handleOpenTrial('Teste Gratuito')}
        onOpenDownload={() => handleOpenDownload('Windows 10 / 11 (64-bit)')}
      />

      <PolicyModal
        isOpen={policyModal.isOpen}
        onClose={() => setPolicyModal({ ...policyModal, isOpen: false })}
        type={policyModal.type}
      />
    </div>
  );
}
