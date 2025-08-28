import React from 'react';
import { Monitor, BarChart3, FileText, Database, TrendingUp } from 'lucide-react';

const PlatformShowcase: React.FC = () => {
  const screenshots = [
    {
      src: '/p1.jpg',
      title: 'Cryopreservation Management',
      description: 'Advanced cryopreservation tracking system with comprehensive sample management and storage protocols.',
      icon: Database,
      category: 'Storage Management'
    },
    {
      src: '/p2.jpg',
      title: 'Embryo Cultivation Tracking',
      description: 'Real-time embryo development monitoring with detailed cultivation parameters and assessment tools.',
      icon: Monitor,
      category: 'Laboratory Management'
    },
    {
      src: '/p3.jpg',
      title: 'Treatment Management',
      description: 'Complete patient treatment workflow management with scheduling and protocol tracking.',
      icon: FileText,
      category: 'Patient Care'
    },
    {
      src: '/p4.jpg',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting dashboard with performance metrics and success rates.',
      icon: BarChart3,
      category: 'Analytics'
    },
    {
      src: '/p5.jpg',
      title: 'Laboratory Workflow',
      description: 'Integrated laboratory management system with quality control and documentation features.',
      icon: TrendingUp,
      category: 'Quality Control'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-teal/10 to-primary-coral/10 rounded-full text-primary-teal text-sm font-medium mb-6 border border-primary-teal/20">
            <Monitor className="h-4 w-4 mr-2" />
            Platform Preview
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience Our <span className="gradient-text">Advanced Platform</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            Explore our comprehensive IVF management system designed to streamline workflows 
            and enhance clinical outcomes for fertility specialists worldwide.
          </p>
        </div>

        {/* Screenshots Grid - Simple Layout */}
        <div className="space-y-20">
          {screenshots.map((screenshot, index) => {
            const IconComponent = screenshot.icon;
            
            return (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Header with title and category */}
                <div className="bg-gradient-to-r from-primary-teal/5 to-primary-coral/5 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-teal to-primary-coral rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{screenshot.title}</h3>
                        <p className="text-primary-teal font-semibold">{screenshot.category}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4 text-lg font-medium leading-relaxed">
                    {screenshot.description}
                  </p>
                </div>
                
                {/* Screenshot Display - Full Width, Clear View */}
                <div className="p-8">
                  <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
                    {/* Browser-like header */}
                    <div className="bg-gray-200 px-6 py-3 flex items-center space-x-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="text-sm text-gray-600 bg-white px-4 py-1 rounded-full border">
                          Embryoxite Platform
                        </div>
                      </div>
                    </div>
                    
                    {/* Full Screenshot */}
                    <div className="bg-white">
                      <img
                        src={screenshot.src}
                        alt={`${screenshot.title} - Embryoxite Platform Screenshot`}
                        className="w-full h-auto max-w-full object-contain transition-all duration-300 hover:scale-[1.02]"
                        style={{ maxHeight: 'none' }}
                        onError={(e) => {
                          console.log(`Screenshot failed to load: ${screenshot.title}`);
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.classList.remove('hidden');
                            fallback.classList.add('flex');
                          }
                        }}
                        onLoad={() => {
                          console.log(`Screenshot loaded: ${screenshot.title}`);
                        }}
                      />
                      <div className="hidden items-center justify-center min-h-[400px] w-full bg-gradient-to-br from-primary-teal/10 to-primary-coral/10">
                        <div className="text-center p-8">
                          <div className="w-20 h-20 bg-gradient-to-r from-primary-teal to-primary-coral rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{screenshot.title}</h3>
                          <p className="text-gray-700 font-medium">{screenshot.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary-teal via-primary-coral to-primary-orange p-12 rounded-3xl text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-xl mb-8 opacity-95 font-medium max-w-2xl mx-auto leading-relaxed">
              Experience the power of our comprehensive platform with a personalized demo 
              tailored to your clinic's specific needs and workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/contact.html'}
                className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-lg"
              >
                Schedule Demo
              </button>
              <button 
                onClick={() => window.location.href = '/contact.html'}
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformShowcase;