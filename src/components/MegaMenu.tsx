import React from 'react';
import { ArrowRight, Star, Users, Beaker, Award } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  const menuSections = [
    {
      title: 'Technology',
      icon: Beaker,
      items: [
        { label: 'AI Platform Overview', action: () => scrollToSection('platform') },
        { label: 'MetabScore Kit', action: () => scrollToSection('metab-score') },
        { label: 'How It Works', action: () => scrollToSection('platform-preview') },
        { label: 'Technical Specifications', action: () => scrollToSection('platform') }
      ]
    },
    {
      title: 'Results & Research',
      icon: Star,
      items: [
        { label: 'Clinical Results', action: () => scrollToSection('testimonials') },
        { label: 'Success Stories', action: () => scrollToSection('testimonials') },
        { label: 'Research Papers', action: () => window.open('#', '_blank') },
        { label: 'Case Studies', action: () => scrollToSection('testimonials') }
      ]
    },
    {
      title: 'Solutions',
      icon: Users,
      items: [
        { label: 'For Fertility Clinics', action: () => scrollToSection('platform') },
        { label: 'For Patients', action: () => scrollToSection('cta') },
        { label: 'Integration Support', action: () => scrollToSection('platform-preview') },
        { label: 'Training & Support', action: () => scrollToSection('cta') }
      ]
    },
    {
      title: 'Company',
      icon: Award,
      items: [
        { label: 'About Embryoxite', action: () => scrollToSection('about') },
        { label: 'Our Team', action: () => scrollToSection('about') },
        { label: 'Partners & Investors', action: () => scrollToSection('partners') },
        { label: 'Careers', action: () => scrollToSection('about') }
      ]
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {menuSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div key={index} className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-teal to-primary-coral rounded-xl flex items-center justify-center">
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      onClick={item.action}
                      className="group flex items-center justify-between w-full text-left text-gray-600 hover:text-primary-teal transition-colors duration-150 py-2"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-150" />
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Content */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-primary-teal/10 to-primary-coral/10 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Schedule a Demo
              </h4>
              <p className="text-gray-600 mb-4">
                See how Embryoxite can transform your practice with a personalized demonstration.
              </p>
              <button 
                onClick={() => scrollToSection('cta')}
                className="bg-gradient-to-r from-primary-teal to-primary-coral text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Book Demo
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Latest Research
              </h4>
              <p className="text-gray-600 mb-4">
                Discover our latest findings in AI-powered embryo selection and metabolic analysis.
              </p>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-primary-teal font-semibold hover:text-primary-coral transition-colors duration-150 flex items-center"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;