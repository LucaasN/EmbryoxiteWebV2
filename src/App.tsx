import React from 'react';
import Navigation from './components/Navigation';
import SectionNavigation from './components/SectionNavigation';
import HeroSection from './components/HeroSection';
import PartnerLogosSection from './components/PartnerLogosSection';
import FeaturesSection from './components/FeaturesSection';
import PlatformShowcase from './components/PlatformShowcase';
import TestimonialsSection from './components/TestimonialsSection';
import MetabScoreKitSection from './components/MetabScoreKitSection';
import OvAISection from './components/OvAISection';
import AboutSection from './components/AboutSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';

function App() {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'product', label: 'Product' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'results', label: 'Results & Research' },
    { id: 'company', label: 'Company' }
  ];

  const productSections = [
    { id: 'platform-showcase', label: 'Platform' },
    { id: 'metab-score', label: 'MetabScore' },
    { id: 'ovai-section', label: 'OvAI' }
  ];

  return (
    <div className="min-h-screen relative">
      <ScrollProgressBar />
      <Navigation />
      <SectionNavigation sections={sections} />
      <main>
        <HeroSection />
        
        {/* Our Mission Section */}
        <section className="py-24 bright-section relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-gradient-to-r from-blue-50/50 to-orange-50/50 rounded-3xl p-12 text-center border border-white/50 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our <span className="gradient-text">Mission</span></h3>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                At Embryoxite, we believe that every family deserves the best possible chance at success in their fertility journey. 
                Our diverse team of founders, advisors, and specialists is dedicated to advancing the science of embryo selection 
                through cutting-edge AI technology, making precision medicine accessible to clinics worldwide.
              </p>
            </div>
          </div>
        </section>
        
        {/* Product Section */}
        <div id="product">
          <FeaturesSection />
          <div id="platform-showcase">
            <PlatformShowcase />
          </div>
          <div id="metab-score">
            <MetabScoreKitSection />
          </div>
          <div id="ovai-section">
            <OvAISection />
          </div>
        </div>
        
        {/* Solutions Section */}
        <div id="solutions">
        </div>
        
        {/* Results & Research Section */}
        <div id="results">
          <TestimonialsSection />
          <div id="partners">
            <PartnerLogosSection />
          </div>
        </div>
        
        {/* Company Section */}
        <div id="company">
          <AboutSection />
        </div>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;