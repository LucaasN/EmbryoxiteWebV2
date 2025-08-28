import React from 'react';
import { Play, Lightbulb, CheckCircle } from 'lucide-react';
import SplineBackground from './SplineBackground';
import AnimationWrapper from './AnimationWrapper';
import ParallaxElement from './ParallaxElement';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{
      background: 'linear-gradient(135deg, rgba(243, 123, 85, 0.4) 0%, rgba(227, 95, 80, 0.3) 35%, rgba(243, 123, 85, 0.4) 50%, rgba(0, 149, 160, 0.3) 65%, rgba(227, 95, 80, 0.3) 85%, rgba(243, 123, 85, 0.4) 100%)'
    }}>
      {/* Spline 3D Background */}
      <SplineBackground opacity={0.8} />
      
      {/* Enhanced Background Elements */}
      <div className="enhanced-bg-elements z-0 opacity-10">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        
        {/* Morphing Blobs */}
        <div className="morphing-blob w-80 h-80 top-20 left-10 opacity-5"></div>
        <div className="morphing-blob w-64 h-64 bottom-32 right-20 opacity-3" style={{ animationDelay: '3s' }}></div>
        <div className="morphing-blob w-48 h-48 top-1/2 right-10 opacity-5" style={{ animationDelay: '6s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <AnimationWrapper animation="fade-up" delay={200}>
              <div className="inline-flex items-center px-8 py-4 bg-orange-50/90 backdrop-blur-lg rounded-full text-orange-800 text-sm font-medium mb-8 interactive-hover border border-orange-100/80 shadow-2xl">
                <Lightbulb className="h-4 w-4 mr-2" />
                Revolutionary AI Technology For IVF
              </div>
            </AnimationWrapper>

            {/* Main Headline */}
            <AnimationWrapper animation="fade-up" delay={400}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-2xl" style={{ textShadow: '0 0 30px rgba(255, 140, 100, 0.3)' }}>
                Data-Driven{' '}
                <span className="bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300 bg-clip-text text-transparent drop-shadow-none filter brightness-110">
                  Hope
                </span>{' '}
                for IVF
              </h1>
            </AnimationWrapper>

            {/* Subtitle */}
            <AnimationWrapper animation="fade-up" delay={600}>
              <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-4xl mx-auto font-medium drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(255, 140, 100, 0.2)' }}>
                Revolutionizing IVF success through non-invasive multimodal AI-powered embryo analysis. 
                <span className="text-yellow-100 font-semibold filter brightness-105"> Building hope through precision science.</span>
              </p>
            </AnimationWrapper>

            {/* CTA Buttons */}
            <AnimationWrapper animation="fade-up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-8 mb-20 justify-center">
                <button 
                  onClick={() => scrollToSection('cta')}
                  className="btn-primary px-14 py-6 text-xl font-bold shadow-2xl"
                >
                  Start Your Journey
                </button>
              </div>
            </AnimationWrapper>

            {/* Stats Grid */}
            <AnimationWrapper animation="fade-up" delay={1000}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {[
                  { value: '75%+', label: 'Prediction Accuracy on non-invasive metabolomic test' },
                  { value: '50,000+', label: 'Clincal records Analyzed' },
                  { value: '18', label: 'Partner Clinics on 3 continents' },
                  { value: '30+', label: 'years in the IVF clinic' }
                ].map((stat, index) => (
                  <div key={index} className={`text-center interactive-hover stagger-${index + 1} bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-orange-100/60 shadow-2xl`}>
                    <div className="text-4xl md:text-5xl font-bold text-orange-700 mb-3 drop-shadow-lg">{stat.value}</div>
                    <div className="text-orange-600 text-base font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ParallaxElement speed={0.3}>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center interactive-hover bg-white/40 backdrop-blur-lg shadow-xl">
            <div className="w-1.5 h-4 bg-orange-500 rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </ParallaxElement>
    </section>
  );
};

export default HeroSection;