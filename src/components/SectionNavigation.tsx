import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

interface Section {
  id: string;
  label: string;
  offset?: number;
}

interface SectionNavigationProps {
  sections: Section[];
  className?: string;
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ 
  sections, 
  className = '' 
}) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Show/hide based on scroll position
      setIsVisible(scrollPosition > 300);

      // Find active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 ${className}`}
      role="navigation"
      aria-label="Section navigation"
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200 p-4">
        {/* Section Dots */}
        <div className="space-y-4 mb-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group relative w-4 h-4 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-primary-teal scale-150'
                  : 'bg-gray-300 hover:bg-primary-teal/50'
              }`}
              aria-label={`Go to ${section.label}`}
            >
              {/* Tooltip */}
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap font-medium">
                  {section.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-gradient-to-r from-primary-teal to-primary-coral rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default SectionNavigation;