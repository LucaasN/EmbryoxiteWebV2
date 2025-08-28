import React from 'react';
import { Microscope, Brain, Shield, Zap } from 'lucide-react';
import SplineBackground from './SplineBackground';
import AnimationWrapper from './AnimationWrapper';
import ParallaxElement from './ParallaxElement';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Microscope,
      title: 'Most advanced IVF EMR on the market',
      description: 'State-of-the-art webbased multimoldal IVF EMR (Electronic Medical Record) fully integrates all patient information.',
    },
    {
      icon: Brain,
      title: 'AI-Powered Predictions',
      description: 'Machine learning models trained on thousands of successful IVF cycles predict implantation success with unprecedented precision.',
    },
    {
      icon: Shield,
      title: 'Non-Invasive Technology',
      description: 'Our completely safe, non-invasive analysis never touches the embryo, using its culture medium to predict implantation success without any risk to its development.',
    },
    {
      icon: Zap,
      title: 'Strategic Partner Program',
      description: 'Enhance your clinic\'s IVF success with Embryoxite\'s strategic consulting, combining our team\'s AI and embryology expertise to leverage your data for superior outcomes.',
    },
  ];

  return (
    <section id="platform" className="py-24 bright-section relative overflow-hidden z-10">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SplineBackground opacity={0.03} />
      </div>
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-1 opacity-10 pointer-events-none">
        <div className="enhanced-bg-elements"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <AnimationWrapper animation="fade-up" delay={200}>
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-teal/15 to-primary-coral/15 rounded-full text-primary-teal text-base font-semibold mb-8 border border-primary-teal/20 shadow-lg backdrop-blur-sm">
              <Microscope className="h-4 w-4 mr-2" />
              Cutting-Edge Innovation
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-700 mb-8 leading-tight">
              Advanced Technology Meets <span className="gradient-text">Compassion</span>
            </h2>
            <p className="text-2xl text-gray-500 max-w-4xl mx-auto font-medium leading-relaxed">
              Differentiate your clinic by offering cutting-edge technology and achieving higher success rates, attracting more patients seeking the best care.
            </p>
          </div>
        </AnimationWrapper>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <AnimationWrapper
                key={index}
                animation="fade-up"
                delay={400 + (index * 150)}
              >
                <div className="bright-card p-6 rounded-3xl card-hover group h-full flex flex-col min-h-[380px] relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-primary-teal to-primary-coral rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-xl mx-auto flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-700 mb-3 group-hover:text-primary-teal transition-colors duration-300 text-center leading-tight">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium text-sm flex-1 text-center">{feature.description}</p>
                </div>
              </AnimationWrapper>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <AnimationWrapper animation="fade-up" delay={800}>
          <div className="bg-gradient-to-r from-blue-50/80 to-orange-50/80 rounded-3xl p-8 md:p-12 border border-white/70 backdrop-blur-md shadow-2xl relative z-10 clear-both mt-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-20">
                <div className="space-y-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
                    Why Choose <span className="gradient-text">Embryoxite?</span>
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: 'Clinically Validated Accuracy',
                        description: 'Our machine-learning models predict clinical pregnancy with a proven accuracy rate up to 70% and 75%, representing a significant leap over the approximate 30% success rate of conventional selection methods.'
                      },
                      {
                        title: 'Completely Non-Invasive',
                        description: 'Our technology is entirely safe for the embryo. The analysis is performed on a small, unused sample of the spent culture medium, meaning we gain powerful insights without ever touching or disturbing the embryo.'
                      },
                      {
                        title: 'Advanced AI Prediction',
                        description: 'Our platform leverages a sophisticated AI neural network, trained and validated on a unique, multi-layered dataset. This includes over 50,000 medical records, 15,000 time-lapse videos, and 1,500 metabolomic analyses of embryo culture media, to generate a single, objective implantation score.'
                      }
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-700 mb-2 group-hover:text-primary-teal transition-colors duration-300">{benefit.title}</h4>
                          <p className="text-gray-500 font-medium text-base leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative z-20">
                <div className="relative">
                  <div className="bright-card p-8 rounded-3xl card-hover">
                    <div className="text-center">
                      <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">Up to 75%</div>
                      <div className="text-gray-600 mb-6 font-bold text-lg">Average Success Rate Improvement</div>
                      <div className="bg-gradient-to-r from-primary-teal via-primary-coral to-primary-orange h-3 rounded-full mb-4 shimmer shadow-lg"></div>
                      <p className="text-sm text-gray-500 font-semibold">Based on data from 200+ partner clinics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default FeaturesSection;