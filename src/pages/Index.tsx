import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (contentRef.current) {
      const elements = contentRef.current.children;
      
      // Set initial state
      gsap.set(elements, {
        y: 50,
        opacity: 0
      });

      // Animate elements with stagger
      gsap.to(elements, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power2.out",
        delay: 0.5
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('./1000127425-removebg-preview.png')`,
          backgroundSize: '50%',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      >
      </div>
      
      {/* Content */}
      <div ref={contentRef} className="text-center relative z-10 max-w-4xl px-8">
        <h1 className="text-white text-6xl font-bold mb-6 uppercase tracking-wider">
          AIRAVATH
        </h1>
        <div className="w-32 h-0.5 bg-white mx-auto mb-8"></div>
        <p className="text-white/90 text-xl mb-12 leading-relaxed uppercase tracking-wide">
          THE FUTURE OF AIR MOBILITY
        </p>
        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Revolutionary urban air mobility solutions that transform how people move through cities. 
          Experience the next generation of transportation with AIRAVATH's advanced air taxi technology.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => navigate('/home')}
            className="group relative inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            <div className="relative z-10 flex items-center">
              <span className="mr-3 group-hover:text-black transition-colors duration-500">Enter AIRAVATH</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>

          <button 
            onClick={() => navigate('/mission')}
            className="group relative inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            <div className="relative z-10 flex items-center">
              <span className="mr-3 group-hover:text-black transition-colors duration-500">Our Mission</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
