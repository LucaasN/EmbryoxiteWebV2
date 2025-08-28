import React from 'react';
import { Star, Quote } from 'lucide-react';
import SplineBackground from './SplineBackground';
import AnimationWrapper from './AnimationWrapper';
import ParallaxElement from './ParallaxElement';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Reproductive Endocrinologist',
      content: 'Embryoxite has revolutionized how we select embryos. Our success rates have improved by 23% since implementation.',
      rating: 5,
      avatar: 'SC',
    },
    {
      name: 'Maria Rodriguez',
      role: 'IVF Patient',
      content: 'After three failed cycles, Embryoxite helped us identify the right embryo. We\'re now proud parents of twins!',
      rating: 5,
      avatar: 'MR',
    },
    {
      name: 'Dr. Michael Thompson',
      role: 'Fertility Clinic Director',
      content: 'The precision and reliability of Embryoxite\'s AI analysis has made it an indispensable tool in our clinic.',
      rating: 5,
      avatar: 'MT',
    },
  ];

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-24 bright-section relative overflow-hidden">
      {/* Spline 3D Background */}
      <SplineBackground opacity={0.04} />
      
      {/* Enhanced Background Elements */}
      <div className="enhanced-bg-elements z-0 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimationWrapper animation="fade-up" delay={200}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-coral/10 to-primary-orange/10 rounded-full text-primary-coral text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Leading <span className="gradient-text">Fertility Experts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Hear from the doctors and patients who have experienced the transformative power of AI-driven embryo selection.
            </p>
          </div>
        </AnimationWrapper>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <AnimationWrapper
              key={index}
              animation="fade-up"
              delay={400 + (index * 200)}
            >
              <div className="bright-card p-8 rounded-2xl animate-card-hover relative group">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-teal to-primary-coral rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-6 pt-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Content */}
                <blockquote className="text-gray-800 text-lg leading-relaxed mb-8 font-medium">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-teal to-primary-coral rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;