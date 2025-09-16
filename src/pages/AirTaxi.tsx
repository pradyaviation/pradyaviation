import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AirTaxi = () => {
  const navigate = useNavigate();
  const secondContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Check if URL has #services hash and scroll to services section
    if (window.location.hash === '#services') {
      setTimeout(() => {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    // First section animation (right to left)
    if (secondContentRef.current) {
      const elements = secondContentRef.current.children;
      
      // Set initial state
      gsap.set(elements, {
        x: 100,
        opacity: 0
      });

      // Animate elements from right to left with stagger
      gsap.to(elements, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power2.out",
        delay: 0.5
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative overflow-hidden pt-16">
      {/* Hero Section - Future Vision */}
      <section 
        className="relative min-h-screen flex items-end justify-end overflow-hidden bg-black"
        style={{
          backgroundImage: `url('./airtaxi 2s.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 pointer-events-none"></div>
        
        {/* Content - Right Bottom */}
        <div ref={secondContentRef} className="relative z-10 pb-16 pr-16 max-w-lg text-right" style={{ paddingBottom: '3vw', paddingRight: '6vw' }}>
          <h2 
            className="font-bold text-white leading-tight uppercase mb-8"
            style={{
              fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              color: '#ffffff',
              letterSpacing: '0.05em',
              fontWeight: '900',
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              lineHeight: '1.0',
              whiteSpace: 'nowrap',
            }}
          >
            THE FUTURE IS NOW
          </h2>
          
          <p 
            className="text-white/80 font-medium leading-relaxed mb-12"
            style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.02em',
              fontWeight: '500',
              textShadow: '0 1px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.6',
            }}
          >
           Air taxis are electric vertical takeoff and landing (eVTOL) aircraft, revolutionizing urban transportation. With Airavata’s cutting-edge technology, bypass traffic, reduce travel time, and elevate your journey to new heights — the next generation of urban mobility.
          </p>
          
          {/* Discover More Button */}
          <button 
            onClick={() => navigate('/about')}
            className="group relative inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase overflow-hidden"
            style={{
              fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.15em',
              fontWeight: '600',
            }}
          >
            {/* White hover animation background */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            
            {/* Button content */}
            <div className="relative z-10 flex items-center">
              <span className="mr-3 group-hover:text-black transition-colors duration-500">DISCOVER MORE</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>
        </div>
      </section>

      {/* Third Section - Our Services */}
      <section 
        id="services-section"
        className="relative min-h-screen bg-black py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4 uppercase tracking-wider">
              Our Services
            </h2>
            <p className="text-xl text-white/80 font-medium tracking-wide">
              Elevating transportation — one flight at a time.
            </p>
            <div className="w-32 h-0.5 bg-white mx-auto mt-8"></div>
          </div>

          {/* Service Cards List - Side by Side Layout */}
          <div className="space-y-12 mb-20">
            
            {/* Service 1 - Point-to-Point Air Transport */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Video Card */}
              <div className="relative rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 border-2 border-white p-4 bg-white/10 backdrop-blur-sm">
                <video 
                  className="w-full h-64 lg:h-72 object-cover rounded-lg"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="./videos/Future_infrastructure_vertiports_20250724205.mp4"
                  type="video/mp4" />
                </video>
              </div>
              
              {/* Description Card */}
              <div 
                onClick={() => {
                  const servicesSection = document.getElementById('services-section');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group/card relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-8 hover:from-white/15 hover:to-white/10 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 transform hover:scale-[1.02] cursor-pointer"
              >
                {/* Interactive glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover/card:from-white/40 group-hover/card:to-white/20 transition-all duration-300 flex-shrink-0 shadow-lg">
                      <svg className="w-7 h-7 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-xl mb-2 group-hover/card:text-white tracking-wide">
                        Point-to-Point Air Transport
                      </h3>
                      <p className="text-white/60 text-sm font-medium uppercase tracking-wider">AIRAVATH Services</p>
                    </div>
                  </div>
                  <p className="text-white/85 text-base leading-relaxed font-medium">
                    Revolutionary urban mobility through rapid aerial transport between designated takeoff and landing zones, bypassing conventional road congestion for faster, more efficient travel experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2 - Aerial Tourism */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Description Card (Left on this one for variety) */}
              <div 
                onClick={() => {
                  const servicesSection = document.getElementById('services-section');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group/card relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-8 hover:from-white/15 hover:to-white/10 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 transform hover:scale-[1.02] cursor-pointer lg:order-1"
              >
                {/* Interactive glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover/card:from-white/40 group-hover/card:to-white/20 transition-all duration-300 flex-shrink-0 shadow-lg">
                      <svg className="w-7 h-7 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-xl mb-2 group-hover/card:text-white tracking-wide">
                        Emergency Response
                      </h3>
                      <p className="text-white/60 text-sm font-medium uppercase tracking-wider">AIRAVATH Services</p>
                    </div>
                  </div>
                  <p className="text-white/85 text-base leading-relaxed font-medium">
                    Rapid air ambulance and disaster relief operations with aerial response units for medical emergencies and time-critical emergency situations requiring immediate action.
                  </p>
                </div>
              </div>
              
              {/* Video Card */}
              <div className="relative rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 lg:order-2 border-2 border-white p-4 bg-white/10 backdrop-blur-sm">
                <video 
                  className="w-full h-64 lg:h-72 object-cover rounded-lg"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="./videos/Emergency_medical_service_202507242059_txe26.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Service 3 - Emergency Response */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Video Card */}
              <div className="relative rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 border-2 border-white p-4 bg-white/10 backdrop-blur-sm">
                <video 
                  className="w-full h-64 lg:h-72 object-cover rounded-lg"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="./videos/Cargo_transport_8second_202507242059_pv4tg.mp4" type="video/mp4" />
                </video>
              </div>
              
              {/* Description Card */}
              <div className="group/card relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-8 hover:from-white/15 hover:to-white/10 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 transform hover:scale-[1.02] cursor-pointer">
                {/* Interactive glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover/card:from-white/40 group-hover/card:to-white/20 transition-all duration-300 flex-shrink-0 shadow-lg">
                      <svg className="w-7 h-7 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-xl mb-2 group-hover/card:text-white tracking-wide">
                         Cargo Transport
                      </h3>
                      <p className="text-white/60 text-sm font-medium uppercase tracking-wider">AIRAVATH Services</p>
                    </div>
                  </div>
                  <p className="text-white/85 text-base leading-relaxed font-medium">
                     Fast delivery via point-to-point air corridors for secure transportation of critical cargo between designated aerial hubs, ideal for medical supplies and urgent logistics.
                  </p>
                </div>
              </div>
            </div>

           

            {/* Service 5 - Aerial Tourism */}
            <div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Description Card */}
              <div className="group/card relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-8 hover:from-white/15 hover:to-white/10 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 transform hover:scale-[1.02] cursor-pointer lg:order-1">
                {/* Interactive glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover/card:from-white/40 group-hover/card:to-white/20 transition-all duration-300 flex-shrink-0 shadow-lg">
                      <svg className="w-7 h-7 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-xl mb-2 group-hover/card:text-white tracking-wide">
                        Aerial Tourism
                      </h3>
                      <p className="text-white/60 text-sm font-medium uppercase tracking-wider">AIRAVATH Services</p>
                    </div>
                  </div>
                  <p className="text-white/85 text-base leading-relaxed font-medium">
                    Luxury sky adventures offering scenic flight experiences with panoramic views of landscapes, landmarks, and natural wonders designed for leisure and premium travel experiences.
                  </p>
                </div>
              </div>
              
              {/* Video Card */}
              <div className="relative rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 lg:order-2 border-2 border-white p-4 bg-white/10 backdrop-blur-sm">
                <video 
                  className="w-full h-64 lg:h-72 object-cover rounded-lg"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="./videos/Tourism_experience_8second_202507242059_ati.mp4"  type="video/mp4" />
                </video>
              </div>
            </div>

          </div>

          {/* Future Vision Section */}
          <div className="bg-gradient-to-r from-airavata-gray/10 to-airavata-gray/20 backdrop-blur-sm border border-airavata-gray/30 rounded-2xl p-12 mb-16">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-4 uppercase tracking-wider">
                What’s Ahead
              </h3>
              <p className="text-xl text-white/90 font-medium mb-8 tracking-wide">
                "Personal Air Mobility, On-Demand"
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-4xl mx-auto">
                Envisioning a fully dynamic air taxi network that enables users to request aerial rides from any location to any destination — seamlessly, securely, and instantly.
              </p>
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              
              {/* Our Objectives Button */}
              <button 
                onClick={() => navigate('/objectives')}
                className="group relative inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase overflow-hidden"
              >
                {/* White hover animation background */}
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                
                {/* Button content */}
                <div className="relative z-10 flex items-center">
                  <span className="mr-3 group-hover:text-black transition-colors duration-500">Our Objectives</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
                </div>
              </button>

              {/* Contact Us Button */}
              <button 
                onClick={() => navigate('/contact')}
                className="group relative inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase overflow-hidden"
              >
                {/* White hover animation background */}
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                
                {/* Button content */}
                <div className="relative z-10 flex items-center">
                  <span className="mr-3 group-hover:text-black transition-colors duration-500">Contact Us</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
                </div>
              </button>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AirTaxi;
