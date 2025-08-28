import React from 'react';
import { Shield, Award } from 'lucide-react';

const PartnerLogosSection: React.FC = () => {
  return (
    <section className="py-16 bright-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-primary-teal/10 rounded-full text-primary-teal text-sm font-medium mb-4 border border-primary-teal/20">
              <Shield className="h-4 w-4 mr-2" />
              Trusted Partners
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leading Medical <span className="gradient-text">Institutions</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto font-medium">
              Collaborating with the world's most respected clinics and research centers
            </p>
          </div>
          
          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {[
              { src: '/AlborORG.png', alt: 'Albor Medical Center' },
              { src: '/cegyrORG.png', alt: 'CEGYR Fertility Center' },
              { src: '/clinicamujerORG.png', alt: 'Clinica Mujer' },
              { src: '/CrecerORG.png', alt: 'Crecer Fertility Center' },
              { src: '/EmbryoORG.png', alt: 'Embryo Medical Center' },
              { src: '/FertilisORG.png', alt: 'Fertilis Clinic' },
              { src: '/FERTYAORG.png', alt: 'FERTYA Medical Center' },
              { src: '/gensORG.png', alt: 'Gens Medical Center' },
              { src: '/INMATER ORG.png', alt: 'INMATER Medical Center' },
              { src: '/NascentisORG.png', alt: 'Nascentis Fertility Center' },
              { src: '/NFGORG.png', alt: 'NFG Medical Center' },
              { src: '/PROARORG.png', alt: 'PROAR Medical Center' },
              { src: '/SARESAORG.png', alt: 'SARESA Medical Center' },
              { src: '/vidaORg.png', alt: 'Vida Fertility Center' },
              { src: '/vitaeORG.png', alt: 'Vitae Medical Center' },
              { src: '/WomanORG.png', alt: 'Woman Medical Center' },
              { src: '/ProfertORG.png', alt: 'Profert Medical Center' },
              { src: '/genymedorg.png', alt: 'Genymed Medical Center' },
              { src: '/sanaargORG.png', alt: 'Sanarg Medical Center' }
            ].map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-3 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 min-h-[80px]">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-w-full max-h-12 w-auto h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    console.log(`Partner logo failed to load: ${partner.alt}`);
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.classList.remove('hidden');
                      fallback.classList.add('flex');
                    }
                  }}
                  onLoad={() => {
                    console.log(`Partner logo loaded: ${partner.alt}`);
                  }}
                />
                <div className="hidden items-center justify-center w-full h-12 bg-gradient-to-br from-primary-teal/10 to-primary-coral/10 rounded-lg border border-primary-teal/20">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-teal to-primary-coral rounded-lg flex items-center justify-center mb-1 mx-auto">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-xs font-semibold text-gray-700">Medical Partner</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Recognition */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-3xl p-8 md:p-12 border border-gray-600">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-primary-coral/20 rounded-full text-primary-coral text-sm font-medium mb-4 border border-primary-coral/30">
              <Award className="h-4 w-4 mr-2" />
              Technology Excellence
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Technology Innovation <span className="gradient-text">Recognition</span>
            </h3>
            <p className="text-gray-200 max-w-2xl mx-auto mb-8 font-medium">
              Recognized for breakthrough technology in medical analysis
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <img
                src="/partner-gridx.png"
                alt="GridX Technology Partner"
                className="max-w-[200px] h-auto filter brightness-110 transition-opacity duration-300"
                onError={(e) => {
                  console.log('GridX partner image failed to load');
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.classList.remove('hidden');
                    fallback.classList.add('flex');
                  }
                }}
                onLoad={() => {
                  console.log('GridX partner image loaded successfully');
                }}
              />
              <div className="hidden items-center justify-center h-32 w-64 bg-gradient-to-br from-primary-teal/10 to-primary-coral/10 rounded-2xl border border-primary-teal/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-teal to-primary-coral rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">GridX Partnership</h3>
                  <p className="text-gray-600 text-sm">Technology Collaboration</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <img
                src="/logo-dark tech star.png"
                alt="Technology Innovation Award"
                className="max-w-[200px] h-auto filter brightness-110 transition-opacity duration-300"
                onError={(e) => {
                  console.log('Tech star logo failed to load');
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.classList.remove('hidden');
                    fallback.classList.add('flex');
                  }
                }}
                onLoad={() => {
                  console.log('Tech star logo loaded successfully');
                }}
              />
              <div className="hidden items-center justify-center h-32 w-64 bg-gradient-to-br from-primary-teal/10 to-primary-coral/10 rounded-2xl border border-primary-teal/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-teal to-primary-coral rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Tech Excellence</h3>
                  <p className="text-gray-200 text-sm">Innovation Award</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <img
                src="/sv3.png"
                alt="SV Technology Partner"
                className="max-w-[200px] h-auto bg-white rounded-xl p-4 filter brightness-110 transition-opacity duration-300"
                onError={(e) => {
                  console.log('SV3 partner image failed to load');
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.classList.remove('hidden');
                    fallback.classList.add('flex');
                  }
                }}
                onLoad={() => {
                  console.log('SV3 partner image loaded successfully');
                }}
              />
              <div className="hidden items-center justify-center h-32 w-64 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-teal to-primary-coral rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">SV Partnership</h3>
                  <p className="text-gray-200 text-sm">Technology Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;