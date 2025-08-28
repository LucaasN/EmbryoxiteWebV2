import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (dropdownId: string) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const navigationItems = [
    {
      id: 'product', 
      label: 'Product',
      hasDropdown: true,
      items: [
        { label: 'AI Platform', action: () => scrollToSection('platform-showcase') },
        { label: 'MetabScore Kit', action: () => scrollToSection('metab-score') },
        { label: 'OvAI', action: () => scrollToSection('ovai-section') }
      ]
    },
    {
      id: 'solutions',
      label: 'Solutions',
      hasDropdown: true,
      items: [
        { label: 'For Clinics', action: () => scrollToSection('platform') },
        { label: 'Testimonials', action: () => scrollToSection('testimonials') }
      ]
    },
    {
      id: 'company',
      label: 'Company',
      hasDropdown: true,
      items: [
        { label: 'Our Team', action: () => scrollToSection('about') },
        { label: 'Partners', action: () => scrollToSection('partners') }
      ]
    }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-opaque' : 'nav-transparent bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer min-w-fit" 
            onClick={() => scrollToSection('hero')}
            role="button"
            tabIndex={0}
            aria-label="Go to homepage"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                scrollToSection('hero');
              }
            }}
          >
            <img 
              src="/Logo Embryoxite 2-12.png" 
              alt="Embryoxite - AI-Powered IVF Solutions" 
              className="h-14 w-auto transition-opacity duration-300"
              onError={(e) => {
                console.log('Logo failed to load, showing fallback');
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.classList.remove('hidden');
                  fallback.classList.add('flex');
                }
              }}
              onLoad={() => {
                console.log('Logo loaded successfully');
              }}
            />
            <div className="hidden items-center justify-center h-14 min-w-[200px]">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'} bg-gradient-to-r from-primary-teal to-primary-coral bg-clip-text text-transparent`}>
                Embryoxite
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-6 flex items-center space-x-1 xl:space-x-2">
              {navigationItems.map((item) => (
                <div key={item.id} className="relative group">
                  <button
                    className={`flex items-center px-3 xl:px-4 py-3 text-base xl:text-lg font-medium transition-all duration-200 rounded-lg whitespace-nowrap ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-primary-teal hover:bg-gray-50' 
                        : 'text-white hover:text-primary-orange hover:bg-white/10'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    aria-expanded={activeDropdown === item.id}
                    aria-haspopup="true"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.id ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                        activeDropdown === item.id 
                          ? 'opacity-100 visible translate-y-0 z-50' 
                          : 'opacity-0 invisible -translate-y-2 z-40'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.id)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      role="menu"
                      aria-labelledby={`${item.id}-button`}
                    >
                      {item.items.map((subItem, index) => (
                        <button
                          key={index}
                          onClick={subItem.action}
                          className="w-full text-left px-4 py-3 text-gray-700 hover:text-primary-teal hover:bg-gray-50 transition-colors duration-150 flex items-center"
                          role="menuitem"
                        >
                          <span>{subItem.label}</span>
                          <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact & CTA Section */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 xl:space-x-6 mr-4 xl:mr-6">
              <a
                href="/contact.html"
                className={`text-sm xl:text-base font-medium transition-colors duration-200 hover:underline whitespace-nowrap ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-teal' 
                    : 'text-white hover:text-yellow-200'
                }`}
                aria-label="Contact us"
              >
                Contact Us
              </a>
            </div>

            {/* Platform Login Button */}
            <button 
              onClick={() => window.location.href = '/login.html'}
              className="bg-gradient-to-r from-primary-teal via-primary-coral to-primary-orange text-white px-6 xl:px-8 py-3 rounded-full font-semibold text-sm xl:text-base transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap"
              aria-label="Platform Login"
            >
              Platform Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100 z-60' 
              : 'max-h-0 opacity-0 overflow-hidden z-50'
          }`}
        >
          <div className="bg-white rounded-2xl mt-4 shadow-2xl border border-gray-100 overflow-hidden relative z-60">
            {/* Mobile Menu Header */}
            <div className="bg-gradient-to-r from-primary-teal to-primary-coral p-4">
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-lg">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-1"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="py-2">
              {navigationItems.map((item) => (
                <div key={item.id} className="border-b border-gray-100 last:border-b-0">
                  <button
                    onClick={() => handleDropdownToggle(item.id)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition-colors"
                    aria-expanded={activeDropdown === item.id}
                  >
                    <span>{item.label}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                        activeDropdown === item.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {/* Mobile Submenu */}
                  <div 
                    className={`bg-gray-50 transition-all duration-200 ${
                      activeDropdown === item.id 
                        ? 'max-h-64 opacity-100' 
                        : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    {item.items.map((subItem, index) => (
                      <button
                        key={index}
                        onClick={subItem.action}
                        className="w-full text-left px-8 py-3 text-gray-600 hover:text-primary-teal hover:bg-white transition-colors flex items-center"
                      >
                        <span>{subItem.label}</span>
                        <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Contact & CTA */}
            <div className="bg-gray-50 p-6 space-y-4">
              {/* Contact Links */}
              <div className="flex justify-center">
                <a
                  href="/contact.html"
                  className="text-gray-700 hover:text-primary-teal transition-colors font-medium"
                >
                  Contact Us
                </a>
              </div>
              
              {/* Platform Login Button */}
              <button 
                onClick={() => window.location.href = '/login.html'}
                className="bg-gradient-to-r from-primary-teal via-primary-coral to-primary-orange text-white w-full py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-xl"
              >
                Platform Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;