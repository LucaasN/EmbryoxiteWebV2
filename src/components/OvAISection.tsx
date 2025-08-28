import React, { useEffect, useRef, useState } from 'react';
import { Brain, Users, BarChart3, Shield, ExternalLink } from 'lucide-react';
import SplineBackground from './SplineBackground';

const OvAISection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze ovarian reserve parameters with clinical precision.',
    },
    {
      icon: BarChart3,
      title: 'Predictive Insights',
      description: 'Generate comprehensive fertility assessments based on AMH, AFC, and other key biomarkers.',
    },
    {
      icon: Shield,
      title: 'Free Access App',
      description: 'Available free of charge, ensuring broad access for healthcare professionals worldwide.',
    },
  ];

  const handleImageError = () => {
    console.log('Image failed to load: /reportOVAI.png');
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log('Image loaded successfully: /reportOVAI.png');
    setImageError(false);
  };

  return (
    <section 
      ref={sectionRef}
      id="ovai-section"
      className="py-24 bg-gradient-to-br from-purple-50/30 to-blue-50/30 relative overflow-hidden"
    >
      {/* Spline 3D Background */}
      <SplineBackground opacity={0.04} className="z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className={`transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-600 text-sm font-medium mb-6 border border-purple-200">
              <Brain className="h-4 w-4 mr-2" />
              OvAI System
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Introducing{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">OvAI System</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
              Our revolutionary OvAI system provides AI-powered ovarian reserve assessment, 
              delivering personalized fertility insights through advanced analysis of key 
              biomarkers and clinical parameters.
            </p>
          </div>

          {/* Main Content Grid */}
          {/* Features */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-start space-x-6 bg-white rounded-2xl p-8 shadow-lg border border-purple-100 transition-all duration-600 ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ 
                      transitionDelay: `${300 + (index * 150)}ms` 
                    }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* CTA Button */}
          <div className="text-center mb-16">
            <button 
              onClick={() => window.location.href = '/ovai.html'}
              className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 shadow-xl inline-flex items-center"
            >
              Access OvAI System
              <ExternalLink className="ml-3 h-5 w-5" />
            </button>
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience OvAI?
            </h3>
            <p className="text-xl mb-8 opacity-95 font-medium max-w-2xl mx-auto">
              Join healthcare professionals worldwide using our AI-powered ovarian reserve assessment tool.
            </p>
            <button 
              onClick={() => window.location.href = '/ovai.html'}
              className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-lg"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OvAISection;