import React, { useEffect, useRef, useState } from 'react';
import { Clock, Workflow, Brain, Shield } from 'lucide-react';
import SplineBackground from './SplineBackground';

const MetabScoreKitSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      icon: Clock,
      title: 'Rapid Results',
      description: 'Get clear, data-driven viability scores in record time.',
    },
    {
      icon: Workflow,
      title: 'Simple Workflow',
      description: 'No complex equipment needed. Our kit is as easy as a standard lab test.',
    },
    {
      icon: Brain,
      title: 'AI-Powered Accuracy',
      description: 'Backed by the same validated AI model trusted by leading clinics.',
    },
    {
      icon: Shield,
      title: 'Completely Non-Invasive',
      description: 'Upholding the highest standard of care for every embryo.',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-50/30 to-orange-50/30 relative overflow-hidden"
    >
      {/* Spline 3D Background */}
      <SplineBackground opacity={0.04} className="z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Column - Product Visual */}
          <div className="relative">
            <div 
              className={`transition-all duration-1500 delay-300 ${
                isVisible 
                  ? 'opacity-100 rotate-0' 
                  : 'opacity-0 rotate-12'
              }`}
            >
              {/* Product Image Placeholder */}
              <div className="relative bright-card rounded-3xl p-12 sparkle-effect">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/IMG-20250721-WA0020.jpg"
                    alt="MetabScore Professional Test Kit"
                    className="w-full h-full object-cover transition-opacity duration-300"
                    onError={(e) => {
                      console.log('MetabScore kit image failed to load, showing fallback');
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.classList.remove('hidden');
                        fallback.classList.add('flex');
                      }
                    }}
                    onLoad={() => {
                      console.log('MetabScore kit image loaded successfully');
                    }}
                  />
                  <div className="hidden aspect-square bg-gradient-to-br from-primary-teal/20 to-primary-coral/20 rounded-2xl items-center justify-center border-2 border-primary-teal/20">
                    <div className="text-center">
                      {/* Kit Box Representation */}
                      <div className="w-32 h-24 bg-gradient-to-r from-primary-teal to-primary-coral rounded-lg mb-6 mx-auto shadow-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg text-center">MetabScore Kit</span>
                      </div>
                      
                      {/* Testing Device Representation */}
                      <div className="w-20 h-8 bg-white border-2 border-primary-teal/30 rounded-lg mx-auto mb-4 shadow-md flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary-teal rounded-full"></div>
                      </div>
                      
                      <p className="text-gray-700 text-sm font-medium text-center">Professional Analysis Kit</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-coral rounded-full opacity-30 animate-float shadow-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary-teal rounded-full opacity-25 animate-float-slow shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div 
              className={`transition-all duration-800 delay-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Revolutionary{' '}
                <span className="gradient-text">MetabScore Kit</span>
              </h2>
            </div>

            {/* Description */}
            <div 
              className={`transition-all duration-800 delay-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                The power of our AI, delivered in a simple, intuitive kit. We've streamlined 
                metabolic analysis into a rapid, easy-to-use format designed to seamlessly 
                integrate into your lab's workflow.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 transition-all duration-600 ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ 
                      transitionDelay: `${900 + (index * 150)}ms` 
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-teal to-primary-coral rounded-xl flex items-center justify-center flex-shrink-0 joyful-bounce shadow-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-primary-teal transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div 
              className={`pt-4 transition-all duration-800 delay-1500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <button className="bg-gradient-to-r from-primary-teal via-primary-coral to-primary-orange text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 shadow-xl">
                Explore the Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetabScoreKitSection;