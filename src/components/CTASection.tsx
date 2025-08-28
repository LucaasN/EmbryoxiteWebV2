import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import SplineBackground from './SplineBackground';
import AnimationWrapper from './AnimationWrapper';
import ParallaxElement from './ParallaxElement';

const CTASection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="cta" className="py-24 gradient-bg-cta relative overflow-hidden">
      {/* Spline 3D Background */}
      <SplineBackground opacity={0.25} />
      
      {/* Enhanced Background Elements */}
      <div className="enhanced-bg-elements opacity-60">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        
        {/* Morphing Blobs */}
        <div className="morphing-blob w-48 h-48 top-16 right-10 opacity-25"></div>
        <div className="morphing-blob w-32 h-32 bottom-20 left-16 opacity-20" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <AnimationWrapper animation="fade-up" delay={200}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight animate-text-glow">
            Ready to Transform Your{' '}
            <span className="text-yellow-200">Journey?</span>
          </h2>
        </AnimationWrapper>

        <AnimationWrapper animation="fade-up" delay={400}>
          <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-3xl mx-auto font-medium" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>
            Join a global network of leading clinics and hopeful families who are redefining the future of IVF.
          </p>
        </AnimationWrapper>

        {/* CTA Buttons */}
        <AnimationWrapper animation="fade-up" delay={600}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={() => window.location.href = '/contact.html'}
              className="bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center interactive-hover shadow-xl"
            >
              <Calendar className="h-6 w-6 mr-3" />
              Schedule a Demo
            </button>
          </div>
        </AnimationWrapper>

        {/* Trust Badges */}

        {/* Contact Information */}
        <AnimationWrapper animation="fade-up" delay={1000}>
          <ParallaxElement speed={0.2}>
            <div className="mt-16 pt-12 border-t border-white/20">
              <h3 className="text-white mb-4 text-xl font-bold">
                Ready to get started? Contact our team today.
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white">
                <div className="flex items-center interactive-hover bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="font-semibold">hello@embryoxite.com</span>
                </div>
                <div className="hidden sm:block text-white/70 text-2xl">•</div>
                <div className="flex items-center interactive-hover bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </ParallaxElement>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default CTASection;