
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const believeRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Header animation (left to right)
    if (headerRef.current) {
      const elements = headerRef.current.children;
      
      // Set initial state
      gsap.set(elements, {
        x: -100,
        opacity: 0
      });

      // Animate elements from left to right with stagger
      gsap.to(elements, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power2.out",
        delay: 0.5
      });
    }

    // What We Believe section animation
    if (believeRef.current) {
      const believeTitle = believeRef.current.querySelector('.believe-title');
      const believeLine = believeRef.current.querySelector('.believe-line');
      const believeCards = believeRef.current.querySelectorAll('.believe-card');

      // Set initial state
      gsap.set([believeTitle, believeLine, ...believeCards], {
        y: 30,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: believeRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          // Animate title faster
          gsap.to(believeTitle, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          });

          // Animate line faster
          gsap.to(believeLine, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.2,
            ease: "power2.out"
          });

          // Animate cards with faster stagger
          gsap.to(believeCards, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            delay: 0.4,
            ease: "power2.out"
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
  <div ref={headerRef} className="absolute top-14 md:top-20 left-4 md:left-8 z-10 max-w-[15.5rem] sm:max-w-xs md:max-w-md px-2 sm:px-4 md:px-0">
  <h1 className="text-white text-xl leading-snug md:text-4xl font-bold mb-2 md:mb-2">
          MEET AIRAVATH
        </h1>
  <div className="w-14 md:w-24 h-0.5 bg-white mb-3 md:mb-4"></div>
  <p className="text-white text-[11px] sm:text-xs md:text-base uppercase leading-relaxed mb-2 md:mb-6 tracking-wide">
          A VISIONARY TEAM REVOLUTIONIZING URBAN MOBILITY THROUGH THE SKIES WITH LUXURIOUS, MEDICALLY-EQUIPPED AIR TAXIS — FROM EMERGENCY CARE TO EXECUTIVE TRAVEL.
        </p>
  <p className="text-white text-[11px] sm:text-xs md:text-base uppercase leading-relaxed mb-4 md:mb-8 tracking-wide">
         AT AIRAVATH, OUR NAME UNITES HERITAGE AND VISION. INSPIRED BY THE MYTHICAL WHITE ELEPHANT OF LORD INDRA, IT SYMBOLIZES STRENGTH, GUARDIANSHIP, AND CONNECTION — PRINCIPLES WE BRING TO MODERN AVIATION.

STRENGTH & RELIABILITY: Trust, protection, and safety in the skies.

INNOVATION: AI-driven solutions shaping the future of aviation.

SUSTAINABILITY: Eco-friendly, safe, and responsible aerospace.

GLOBAL CONNECTIVITY: Bridging people, places, and possibilities through flight. 
        </p>
        
        {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
          {/* Connect With Us Button */}
          <button 
            onClick={() => navigate('/contact')}
            className="group relative inline-flex items-center w-full sm:w-auto px-3 py-1.5 md:px-8 md:py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-[10px] md:text-sm overflow-hidden rounded-none"
          >
            {/* White hover animation background */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            
            {/* Button content */}
            <div className="relative z-10 flex items-center justify-center w-full sm:w-auto">
              <span className="mr-2 md:mr-3 group-hover:text-black transition-colors duration-500">Connect With Us</span>
              <ArrowRight size={12} className="md:size-[18px] group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>

          {/* Explore Button */}
          <button 
            onClick={() => navigate('/mission')}
            className="group relative inline-flex items-center w-full sm:w-auto px-3 py-1.5 md:px-8 md:py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-[10px] md:text-sm overflow-hidden rounded-none"
          >
            {/* White hover animation background */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            
            {/* Button content */}
            <div className="relative z-10 flex items-center justify-center w-full sm:w-auto">
              <span className="mr-2 md:mr-3 group-hover:text-black transition-colors duration-500">Explore</span>
              <ArrowRight size={12} className="md:size-[18px] group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>

      {/* Section 1 - Black Screen with Image */}
    {/* Reduced height on mobile to remove extra blank space */}
    <div className="h-[78vh] sm:h-[85vh] md:h-screen bg-black relative overflow-hidden">
        <img 
          src="https://i.ibb.co/n8zMKHsB/IMG-20250719-140017.webp" 
          alt="Futuristic Room" 
      className="w-full h-full object-cover scale-105 md:scale-100 transition-transform duration-300"
        />
      </div>

      {/* Section 3 - What We Believe */}
      <div ref={believeRef} className="min-h-screen bg-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="believe-title text-white text-4xl font-bold mb-4 uppercase tracking-wider">
              What We Believe
            </h2>
            {/* Line under title */}
            <div className="believe-line w-32 h-0.5 bg-white mx-auto"></div>
          </div>

          {/* Belief Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 - Time & Access */}
            <div className="believe-card group bg-airavata-gray/20 backdrop-blur-sm border border-airavata-gray rounded-lg p-6 hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white group-hover:scale-105 transition-all duration-300 uppercase tracking-wide">
                Time & Access
              </h3>
              <p className="text-lg text-white/90 mb-6 font-semibold">
                Time Should Be Respected
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">Air mobility should save time, not just cost more.</span>
                </div>
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">Emergency access should never be delayed.</span>
                </div>
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">The faster we move, the more lives we empower.</span>
                </div>
              </div>
            </div>

            {/* Card 2 - Vision & Future */}
            <div className="believe-card group bg-airavata-gray/20 backdrop-blur-sm border border-airavata-gray rounded-lg p-6 hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white group-hover:scale-105 transition-all duration-300 uppercase tracking-wide">
                Vision & Future
              </h3>
              <p className="text-lg text-white/90 mb-6 font-semibold">
                The Sky Is Our Starting Point
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">The future of transport is above us.</span>
                </div>
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">Every rooftop can become a launchpad.</span>
                </div>
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">Cities must grow vertically — not just outward.</span>
                </div>
              </div>
            </div>

            {/* Card 3 - Purpose & Equality */}
            <div className="believe-card group bg-airavata-gray/20 backdrop-blur-sm border border-airavata-gray rounded-lg p-6 hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white group-hover:scale-105 transition-all duration-300 uppercase tracking-wide">
                Purpose & Equality
              </h3>
              <p className="text-lg text-white/90 mb-6 font-semibold">
                Mobility Is for Everyone
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">Flying shouldn't be a luxury.</span>
                </div>
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">It should be accessible, sustainable, and life-saving.</span>
                </div>
                <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm leading-relaxed">Our mission is built on purpose, not privilege.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
