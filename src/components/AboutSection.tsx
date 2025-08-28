import React from 'react';
import { Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import SplineBackground from './SplineBackground';

const AboutSection: React.FC = () => {
  // Team data arrays - moved to top before any calculations
  const founders = [
    {
      id: 1,
      name: 'Delfina Vilieri',
      role: 'Founder & CEO',
      specialization: 'Industrial Engineer',
      image: '/Delfi1.png',
      description: 'Leading Embryoxite with extensive experience in industrial engineering and business optimization.',
      expertise: ['Business Strategy', 'Operations', 'Leadership']
    },
    {
      id: 2,
      name: 'Ivan Anduaga',
      role: 'Founder & COO',
      specialization: 'Embryologist',
      image: '/Ivan.png',
      description: 'Expert embryologist driving operational excellence and clinical innovation at Embryoxite.',
      expertise: ['Embryology', 'Clinical Operations', 'Laboratory Management']
    },
    {
      id: 3,
      name: 'Paula Sacur',
      role: 'Founder',
      specialization: 'Embryologist',
      image: '/Paula.png',
      description: 'Founding embryologist bringing deep clinical expertise to our AI-powered solutions.',
      expertise: ['Clinical Embryology', 'Research', 'Quality Assurance']
    },
    {
      id: 4,
      name: 'Federico',
      role: 'Founder',
      specialization: 'Bioengineer',
      image: '/Fede.png',
      description: 'Bioengineering founder focused on developing innovative medical technologies.',
      expertise: ['Bioengineering', 'Medical Devices', 'Innovation']
    },
    {
      id: 5,
      name: 'Mario',
      role: 'Founder',
      specialization: 'Medical Physics Engineer, PhD Science & Technology',
      image: '/Mario.png',
      description: 'PhD in Science and Technology with Physics specialization, driving our scientific foundation.',
      expertise: ['Medical Physics', 'Scientific Research', 'Technology Development']
    }
  ];

  const advisors = [
    {
      id: 1,
      name: 'Marisa',
      role: 'Metabolome Advisor',
      specialization: 'PhD Chemistry',
      image: '/Marisa.png',
      description: 'Chemistry PhD providing expert guidance on metabolomic analysis and research.',
      expertise: ['Metabolomics', 'Chemistry', 'Research Strategy']
    },
    {
      id: 2,
      name: 'Elmer',
      role: 'Bioinformatics Advisor',
      specialization: 'PhD Advanced Computing & Applied AI',
      image: '/Elmer.png',
      description: 'PhD in Advanced Computing and Applied AI, guiding our bioinformatics initiatives.',
      expertise: ['Bioinformatics', 'Applied AI', 'Advanced Computing']
    }
  ];

  const metabolomicsDept = [
    {
      id: 1,
      name: 'Marisa',
      role: 'Metabolomics Specialist',
      image: '/Marisa.png',
      expertise: ['Metabolomics', 'Chemistry', 'Data Analysis']
    },
    {
      id: 2,
      name: 'Ana Clara',
      role: 'Metabolomics Researcher',
      image: '/Ana Clara.png',
      expertise: ['Metabolic Analysis', 'Research', 'Laboratory Techniques']
    }
  ];

  const aiPlatformDept = [
    {
      id: 1,
      name: 'Marcelo',
      role: 'AI Platform Developer',
      image: '/Marcelo.png',
      expertise: ['AI Development', 'Platform Engineering', 'Machine Learning']
    },
    {
      id: 2,
      name: 'Ariela',
      role: 'AI Platform Specialist',
      image: '/Ariela.png',
      expertise: ['AI Systems', 'Data Science', 'Platform Development']
    },
    {
      id: 3,
      name: 'Lucas',
      role: 'AI Platform Engineer',
      image: '/Lucas.png',
      expertise: ['Software Engineering', 'AI Implementation', 'System Architecture']
    }
  ];

  const engineeringTeam = [
    {
      id: 1,
      name: 'Elmer',
      role: 'Bioinformatics Advisor',
      specialization: 'PhD Advanced Computing & Applied AI',
      image: '/Elmer.png',
      expertise: ['Bioinformatics', 'Applied AI', 'Advanced Computing']
    },
    {
      id: 2,
      name: 'Ian',
      role: 'Software Engineer',
      image: '/Ian.png',
      expertise: ['Software Development', 'System Design', 'Programming']
    },
    {
      id: 3,
      name: 'Julian',
      role: 'Software Engineer',
      image: '/Julian.png',
      expertise: ['Software Engineering', 'Development', 'Technical Solutions']
    },
    {
      id: 4,
      name: 'Trinidad',
      role: 'Bioengineer',
      image: '/Trinidad.png',
      expertise: ['Bioengineering', 'Medical Technology', 'Innovation']
    },
    {
      id: 5,
      name: 'Lourdes',
      role: 'Bioengineer',
      image: '/Lourdes.png',
      expertise: ['Bioengineering', 'Medical Devices', 'Research']
    },
    {
      id: 6,
      name: 'Francisco',
      role: 'Engineer',
      image: '/Francisco.png',
      expertise: ['Engineering', 'Technical Development', 'Problem Solving']
    },
    {
      id: 7,
      name: 'Miquenas',
      role: 'Engineer',
      image: '/Miquenas.png',
      expertise: ['Engineering', 'System Development', 'Technical Innovation']
    },
    {
      id: 8,
      name: 'Delfina',
      role: 'Bioinformatics Specialist',
      image: '/Delfina.png',
      expertise: ['Bioinformatics', 'Data Analysis', 'Computational Biology']
    },
    {
      id: 9,
      name: 'Facundo',
      role: 'Bioinformatics Specialist',
      image: '/Facundo.png',
      expertise: ['Bioinformatics', 'Data Science', 'Computational Analysis']
    },
    {
      id: 10,
      name: 'Marisa',
      role: 'Metabolomics Specialist',
      image: '/Marisa.png',
      expertise: ['Metabolomics', 'Chemistry', 'Data Analysis']
    },
    {
      id: 11,
      name: 'Ana Clara',
      role: 'Metabolomics Researcher',
      image: '/Ana Clara.png',
      expertise: ['Metabolic Analysis', 'Research', 'Laboratory Techniques']
    },
    {
      id: 12,
      name: 'Marcelo',
      role: 'AI Platform Developer',
      image: '/Marcelo.png',
      expertise: ['AI Development', 'Platform Engineering', 'Machine Learning']
    },
    {
      id: 13,
      name: 'Ariela',
      role: 'AI Platform Specialist',
      image: '/Ariela.png',
      expertise: ['AI Systems', 'Data Science', 'Platform Development']
    },
    {
      id: 14,
      name: 'Lucas',
      role: 'AI Platform Engineer',
      image: '/Lucas.png',
      expertise: ['Software Engineering', 'AI Implementation', 'System Architecture']
    }
  ];

  const [scrollOpacity, setScrollOpacity] = React.useState(0.3);
  const sectionRef = React.useRef<HTMLElement>(null);
  
  // Carousel state
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [visibleCards, setVisibleCards] = React.useState(4);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(true);
  
  // Update visible cards based on screen size
  React.useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // Mobile: 1 card
      } else if (window.innerWidth < 768) {
        setVisibleCards(2); // Small tablet: 2 cards
      } else if (window.innerWidth < 1024) {
        setVisibleCards(3); // Tablet: 3 cards
      } else {
        setVisibleCards(4); // Desktop: 4 cards
      }
    };
    
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);
  
  // Navigation functions
  const goToNext = () => {
    setIsAnimating(false);
    setCurrentSlide(prev => {
      const maxSlides = Math.max(0, engineeringTeam.length - visibleCards);
      return prev >= maxSlides ? 0 : prev + 1;
    });
    
    // Resume continuous animation after 5 seconds
    setTimeout(() => setIsAnimating(true), 5000);
  };

  const goToPrev = () => {
    setIsAnimating(false);
    setCurrentSlide(prev => {
      const maxSlides = Math.max(0, engineeringTeam.length - visibleCards);
      return prev <= 0 ? maxSlides : prev - 1;
    });
    
    // Resume continuous animation after 5 seconds
    setTimeout(() => setIsAnimating(true), 5000);
  };


  React.useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        // Calculate how much of the section has been scrolled through
        const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (sectionHeight + viewportHeight)));
        
        // Start at 0.3 opacity and fade to 0.05 as user scrolls down
        const newOpacity = 0.3 - (scrollProgress * 0.25);
        setScrollOpacity(Math.max(0.05, newOpacity));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const TeamMemberCard: React.FC<{ member: any; isFounder?: boolean }> = ({ member, isFounder = false }) => (
    <div className="bg-white rounded-xl card-hover overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col" style={{ minHeight: isFounder ? '380px' : '300px' }}>
      {/* Photo */}
      <div className="flex justify-center pt-6 pb-4">
        <div className="h-24 w-24 overflow-hidden rounded-full relative">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-opacity duration-300"
            onError={(e) => {
              console.log(`Team member image failed to load: ${member.name} - ${member.image}`);
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) {
                fallback.classList.remove('hidden');
                fallback.classList.add('flex');
              }
            }}
            onLoad={() => {
              console.log(`Team member image loaded: ${member.name}`);
            }}
          />
          <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-teal/20 to-primary-coral/20 items-center justify-center rounded-full border-2 border-primary-teal/30">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-teal to-primary-coral rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">
                {member.name.split(' ').map((n: string) => n[0]).join('')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-4 pb-4">
        <h3 className="font-bold text-gray-900 mb-2 text-center text-base leading-tight">{member.name}</h3>
        <p className="text-primary-teal font-semibold mb-2 text-center text-sm leading-tight">{member.role}</p>
        {member.specialization && (
          <p className="text-gray-600 text-xs font-medium mb-3 text-center line-clamp-2 leading-tight">{member.specialization}</p>
        )}
        
        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-1 mb-4 justify-center min-h-[50px] items-start flex-1">
          {member.expertise.slice(0, 3).map((skill: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-gradient-to-r from-primary-teal/10 to-primary-coral/10 text-gray-700 rounded-full border border-gray-200 font-medium text-xs"
            >
              {skill}
            </span>
          ))}
          {member.expertise.length > 3 && (
            <span className="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-500 rounded-full border border-gray-200 font-medium text-xs">
              +{member.expertise.length - 3}
            </span>
          )}
        </div>

        {/* Social Links */}
        <div className="flex space-x-2 justify-center mt-auto">
          <a
            href="#"
            className="w-8 h-8 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full flex items-center justify-center hover:bg-primary-teal hover:text-white transition-all duration-300 hover:scale-110 shadow-md"
            aria-label={`${member.name} LinkedIn`}
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="w-8 h-8 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full flex items-center justify-center hover:bg-primary-teal hover:text-white transition-all duration-300 hover:scale-110 shadow-md"
            aria-label={`${member.name} Email`}
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="about" className="py-24 bright-section relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300 z-0"
        style={{ 
          backgroundImage: 'url(/enhanced.png)',
          opacity: scrollOpacity
        }}
      />
      
      {/* Spline 3D Background */}
      <SplineBackground opacity={0.05} className="z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-teal/10 to-primary-coral/10 rounded-full text-primary-teal text-sm font-medium mb-6">
            <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
            Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Our world-class team combines decades of experience in reproductive medicine, 
            artificial intelligence, and biotechnology to revolutionize IVF success rates.
          </p>
        </div>

        {/* Founders Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Founding Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">
            {founders.map((founder) => (
              <TeamMemberCard key={founder.id} member={founder} isFounder={true} />
            ))}
          </div>
        </div>

        {/* Advisors Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Advisory Board</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto items-stretch">
            {advisors.map((advisor) => (
              <TeamMemberCard key={advisor.id} member={advisor} isFounder={true} />
            ))}
          </div>
        </div>

        {/* Departments */}
        <div>
          {/* All Team Members Carousel */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Team</h3>
            
            {/* Carousel Container */}
            <div className="relative">
              {/* Carousel Wrapper with proper overflow handling */}
              <div 
                className="overflow-hidden rounded-xl group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Navigation Arrows */}
                <button
                  onClick={goToPrev}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary-teal hover:bg-white transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                  aria-label="Previous team members"
                  style={{ zIndex: 20 }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary-teal hover:bg-white transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                  aria-label="Next team members"
                  style={{ zIndex: 20 }}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Carousel Track */}
                <div 
                  className={`flex gap-4 p-4 carousel-track-flowing ${
                    isAnimating && !isPaused && !isHovered ? 'carousel-continuous' : 'carousel-paused'
                  }`}
                  style={{
                    width: `${(engineeringTeam.length * 2 * 100) / visibleCards}%`,
                    transform: isAnimating ? 'none' : `translateX(-${(currentSlide * 100) / engineeringTeam.length}%)`
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Duplicate the team members for seamless loop */}
                  {[...engineeringTeam, ...engineeringTeam].map((member, index) => (
                    <div 
                      key={`${member.id}-${index}`} 
                      className="flex-shrink-0 min-w-0"
                      style={{ 
                        width: `calc(${100 / (engineeringTeam.length * 2)}% - 1rem)`,
                        minWidth: '200px'
                      }}
                    >
                      <TeamMemberCard member={member} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {Array.from({ length: Math.max(1, Math.ceil(engineeringTeam.length / visibleCards)) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAnimating(false);
                      setCurrentSlide(Math.min(index * visibleCards, engineeringTeam.length - visibleCards));
                      setTimeout(() => setIsAnimating(true), 5000);
                    }}
                    className={`h-3 rounded-full transition-all duration-500 ease-out hover:scale-125 ${
                      Math.floor(currentSlide / Math.max(1, visibleCards)) === index && !isAnimating
                        ? 'bg-gradient-to-r from-primary-teal to-primary-coral w-12 shadow-lg' 
                        : 'bg-gray-300 hover:bg-primary-teal/50 w-3'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;